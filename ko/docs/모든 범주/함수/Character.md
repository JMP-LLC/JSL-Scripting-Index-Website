# Character



## 함수

### Blob To Char

**구문:** s = Blob To Char( blob, <encoding="utf-8"> )

**설명:** 지정된 인코딩을 사용하여 BLOB(Binary Large Object)에서 문자열을 생성합니다. 지원되는 인코딩으로는 utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp 및 ascii~hex가 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char( Hex To Blob( "436166C3A9" ), "ascii~hex" );

```

### Blob To Matrix

**구문:** m = Blob To Matrix( blob, type, bytesEach, endian, <nCols=1> )

**설명:** BLOB의 바이트를 숫자로 변환하여 행렬을 생성합니다. type은 "int", "uint" 또는 "float"입니다. bytesEach는 1, 2, 4 또는 8입니다. endian은 첫 번째 바이트가 유의성이 가장 높은지("big") 아니면 유의성이 가장 낮은지("little")를 나타냅니다. "native"는 컴퓨터의 기본 형식을 나타냅니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Char

**구문:** s = Char( x, <w>, <d>, < <<Use Locale( Boolean ) >, < <<Full Precision( Boolean ) > )

**설명:** x 인수가 숫자인 경우 최대 너비 w 및 소수 자릿수 d을(를) 사용하여 x의 문자열 표현을 반환합니다. <<FullPrecision 인수는 사용 가능한 모든 정밀도를 사용하여 숫자 값을 씁니다.

**JMP추가된 버전:** 버전 14 이전

**단순**

```jsl

Names Default To Here( 1 );
Char( Pi(), 10, 4 );

```

**로케일 사용**

```jsl

Names Default To Here( 1 );
Char( 2.1, <<Use Locale( 1 ) );

```

**전체 정밀도**

```jsl

Names Default To Here( 1 );
Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

### Char To Blob

**구문:** blob = Char To Blob( string, <encoding="utf-8"> )

**설명:** 지정된 인코딩을 사용하여 문자열에서 BLOB(Binary Large Object)를 생성합니다. 지원되는 인코딩으로는 utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp 및 ascii~hex가 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**구문:** h = Char To Hex( value, <"integer">|<encoding="utf-8"> )

**설명:** 지정된 값 및 인코딩에 해당하는 16진수 텍스트를 반환합니다. 숫자, 문자열 또는 BLOB일 수 있습니다. 값이 숫자일 경우 선택적 인수 "integer"가 제공되지 않으면 IEEE 754 64비트 인코딩이 사용됩니다. 지원되는 인코딩에는 utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis 및 euc-jp가 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Collapse Whitespace

**구문:** scw = Collapse Whitespace( s )

**설명:** 선행 및 후행 공백을 제거하고 중복된 안쪽 공백을 제거합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Concat

**구문:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**설명:** 문자열을 더 긴 문자열로 또는 행렬을 더 넓은 행렬로 연결합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
[1 2] || [3 4] || [5 6];

```

### Concat Items

**구문:** string = Concat Items( {list of strings}, <separatorString> )

**설명:** 문자열 목록을 긴 문자열 하나로 결합합니다. 각 문자열은 구분 기호(지정하지 않을 경우 공백)로 구분합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**구문:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**설명:** 제자리에 연결합니다. a ||= b는 a = a || b와 동등합니다. 할당 연산자입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex = "hello ";
ex ||= "world";

```

### Contains

**구문:** pos = Contains( x, item, <start=1> )

**설명:** 위치 start에서 시작하여(제공된 경우) x 내의 item 위치를 반환합니다. start가 음수면 검색이 length( x ) - start부터 역방향으로 시작됩니다. 인수 x는 문자열 또는 목록일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**구문:** b = Contains Item( x, item | list | Pat Regex(), <delimiter> )

**설명:** 단어[항목], 단어 목록[목록] 또는 패턴[패턴]이 [x]가 나타내는 텍스트의 단어 중 하나와 매칭되는지 여부를 나타내는 부울을 반환합니다. 단어는 선택적 구분자[구분자] 문자열의 문자로 구분됩니다. 쉼표("","")가 기본 구분자입니다. 공백은 입력 텍스트 문자열 [x]에서 추출된 각 단어의 양쪽 끝에서 잘립니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese", numeric, continuous, Formula( Contains Item( dt:Item Name, "Cheese", ", " ) ) );
dt << Distribution( Column( :Cheese ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Ends With

**구문:** b = Ends With( s, sub )

**설명:** s가 sub로 끝나면 1을 반환하고 그렇지 않으면 0을 반환합니다. s 및 sub 인수는 둘 다 문자열이거나 둘 다 목록일 수 있습니다. Right( s, Length( sub )) == sub와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Ends With( "http://www.jmp.com", ".com" );

```

### Hex

**구문:** h = Hex( value, <"integer">|<encoding="utf-8">|<Base(number)>,<Pad To(number)> )

**설명:** 지정된 값 및 인코딩(숫자, 문자열 또는 BLOB)에 해당하는 16진(또는 다른 진법) 텍스트를 반환합니다. 값이 숫자이면 선택적 인수인 integer 또는 Base 중 하나가 지정되지 않은 한 IEEE 754 64비트 인코딩이 사용됩니다. Base가 지정된 경우 이 함수는 지정된 숫자에 해당하는 텍스트를 16진법 대신 해당 진법으로 반환합니다. Base 인수는 2에서 36 사이(경계값 포함)의 정수여야 합니다. 지원되는 인코딩은 utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis 및 euc-jp입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " || Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**구문:** blob = Hex To Blob( hex string )

**설명:** 주어진 16진수 코드 문자열에서 BLOB(Binary Large OBject)를 만듭니다. 공백, 쉼표, 캐리지 리턴 및 줄바꿈도 포함될 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Hex To Blob( "FF78CE" );

```

### Hex To Char

**구문:** s = Hex To Char( hextext, <encoding="utf-8"> )

**설명:** 지정된 인코딩을 사용하여 16진수 텍스트에 해당하는 텍스트를 반환합니다. 지원되는 인코딩에는 utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis 및 euc-jp가 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**구문:** x = Hex To Number( hextext, <Base(number)> )

**설명:** 16진(또는 다른 진법) 텍스트에 해당하는 숫자를 반환합니다. 16진 숫자는 IEEE 754 64비트 부동 소수점 숫자로 변환되며, 그렇지 않으면 입력이 16진 정수로 처리됩니다. Base가 지정된 경우에는 텍스트가 해당 진법의 숫자를 나타내는 문자열로 처리됩니다. Base 인수는 2에서 36 사이(경계값 포함)의 정수여야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Hex To Number( "11110000", Base( 2 ) );

```

### Insert

**구문:** z = Insert( x, y, <i> )

**설명:** y를 i번째 위치에 삽입한 목록 i의 복사본을 반환합니다. 선택적 인수 x가 지정되지 않은 경우 마지막에 삽입합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**구문:** Insert Into( x, y, <i> )

**설명:** y를 삽입하여 목록, 연관 배열 또는 표시 상자 x를 수정합니다. 목록 및 표시 상자는 위치를 지정하기 위한 i인수를 선택적으로 사용할 수 있도록 지원합니다. 위치를 지정하지 않으면 마지막에 추가됩니다. x 인수는 변수여야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**예제 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**예제 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Item

**구문:** w = Item( n|[first last], s, <delim>, <Unmatched(result string)>, <Include Boundary Delimiters(0|1)>)

**설명:** s 인수의 n번째 항목을 반환합니다. 여기서 항목은 delim 인수에 지정된 문자 중 하나로만 구분된 하위 문자열입니다(비어 있을 수 있음). delim이 없으면 공백 문자가 사용됩니다. delim이 빈 문자열이면 각 문자가 별개의 항목으로 처리됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Item( 5, "http://www.jmp.com", ":/." );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Item( [2 -1], "This is a sentence" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Item( 5, "a b c d", Unmatched( "None" ) );

```

**예제 5**

```jsl

Names Default To Here( 1 );
Item( 2, "abcd", "" );

```

**예제 6**

```jsl

Names Default To Here( 1 );
Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**구문:** wl = Items(<[first last]>, s, <delim>, <Include Boundary Delimiters(0|1)>)

**설명:** delim 인수에 지정된 문자 중 하나로만 구분된 하위 문자열 목록을 반환합니다(비어 있을 수 있음). delim이 없으면 공백 문자가 사용됩니다. delim이 빈 문자열이면 각 문자가 별개의 항목으로 처리됩니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters(), Include Boundary Delimiters );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Left

**구문:** sub = Left( s, n, <filler> )

**설명:** 원래 문자열 또는 목록 s의 절단되었거나 채워진 버전을 반환합니다. 결과에는 왼쪽 n개 문자 또는 목록 항목이 포함되며 오른쪽은 filler로 채워집니다(s의 길이가 n보다 작은 경우).

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**구문:** l = Length( x )

**설명:** 지정된 문자열(문자 수), 목록(항목 수), 연관 배열(키의 수), Blob(바이트), 행렬(요소 수) 또는 네임스페이스/클래스(함수 및 변수의 수)의 길이를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Length( "Café" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### Lowercase

**구문:** sl = Lowercase( s )

**설명:** 지정한 문자열의 대문자를 소문자로 변환합니다. 대/소문자 관련 규칙은 로케일마다 다릅니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Lowercase( "CAFÉ #23" );

```

### Matrix To Blob

**구문:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**설명:** 행렬 요소를 1, 2, 4바이트의 부호 있거나 부호 없는 정수 또는 4, 8바이트 부동 소수점 숫자로 변환하여 행렬에서 BLOB를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Munger

**구문:** r = Munger( s, startPos, findStringOrNChars, <replaceString> )

**설명:** 인수 조합에 따라 s 인수에서 하위 문자열 또는 위치를 검색합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### Num

**구문:** y = Num( s, < <<Use Locale( use=1 ) >, < <<Restrict > )

**설명:** 날짜 및 통화 형식을 포함한 기본 제공 형식을 사용하여 s를 숫자로 변환합니다. 변환에 실패하면 결측값을 반환합니다. 선택적 <<Restrict는 정수, 십진수 및 과학적 형식을 사용한 변환만 허용합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**예제 2**

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

**구문:** result = Regex( source, pattern, <format, <IGNORECASE>, <GLOBALREPLACE>> )

**설명:** source 텍스트에서 pattern에 대한 매칭 항목을 검색합니다. format의 기본값은 "\0"(전체 매칭)이지만 "Fred"(상수 대체의 경우) 또는 "\1"(pattern의 첫 번째 괄호에 의해 매칭된 텍스트 사용)이 될 수 있습니다. 매칭 항목이 없으면 숫자 결측값을 반환합니다. 대/소문자는 기본적으로 일치해야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Remove

**구문:** y = Remove( x, <i>, <n=1> ); y = Remove( x, {list} )

**설명:** i번째 항목부터 시작해 n개의 항목을 삭제하거나 list 인수로 지정된 항목 목록을 삭제하여 목록 x의 복사본을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**구문:** Remove From( x, <i>, <n=1> )

**설명:** 항목을 제거하여 목록, 연관 배열 또는 표시 상자 x를 수정합니다. 연관 배열에서는 키 값 i를 사용하여 제거할 항목을 지정합니다. 목록 및 표시 상자에서는 i 위치에 있는 항목부터 제거합니다. n 옵션이 지정된 경우 목록에서는 여러 항목을 한 번에 제거합니다. x 인수는 변수여야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**예제 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**예제 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ) );
Wait( 1 );
Remove From( hlist, 1 );

```

### Repeat

**구문:** s = Repeat( x, n, <m=1> )

**설명:** x 인수로 지정된 텍스트, 행렬 또는 목록을 자신과 n번 연결하여 반환합니다. x가 숫자 또는 행렬이면 n은 수직 반복을 나타내고 선택적 인수 m은 수평 반복을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Reverse

**구문:** y = Reverse( x )

**설명:** 항목의 역순으로 목록 x의 복사본을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**구문:** Reverse Into( x )

**설명:** 항목의 역순으로 목록 또는 표시 상자 x를 수정합니다. x 인수는 변수여야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**예제 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ) );
Wait( 1 );
Reverse Into( hlist );

```

### Right

**구문:** sub = Right( s, n, <filler> )

**설명:** 원래 문자열 또는 목록 s의 절단되었거나 채워진 버전을 반환합니다. 결과에는 오른쪽 n개 문자 또는 목록 항목이 포함되며 왼쪽은 filler로 채워집니다(s의 길이가 n보다 작은 경우).

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Right( "http://www.jmp.com", 3 );

```

### Set Difference

**구문:** list = Set Difference( list1, list2 )

**설명:** list1에 있지만 list2에는 없는 항목의 목록을 반환합니다. 항목이 반복될 수 있습니다. 인수가 다중 반응 열 참조인 경우 현재 행의 해당 값 목록으로 처리됩니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**구문:** list = Set Intersect( list1, list2 )

**설명:** 두 목록에 모두 있는 항목의 목록을 반환합니다. 항목이 반복될 수 있습니다. 인수가 다중 반응 열 참조인 경우 현재 행의 해당 값 목록으로 처리됩니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**구문:** list = Set Union( list1, list2 )

**설명:** 두 목록 중 하나 이상에 있는 항목의 목록을 반환합니다. 항목이 반복될 수 있습니다. 인수가 다중 반응 열 참조인 경우 현재 행의 해당 값 목록으로 처리됩니다.

**JMP추가된 버전:** 19

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

**구문:** list = Set Unique( list )

**설명:** 입력 목록에 있는 고유 항목의 목록을 반환합니다. 인수가 다중 반응 열 참조인 경우 현재 행의 해당 값 목록으로 처리됩니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### Shift

**구문:** y = Shift( x, <n=1> )

**설명:** 처음 n개 항목을 목록 끝으로 이동하여 목록 x의 복사본을 반환합니다. n이 음수인 경우 마지막 n개 항목을 시작 위치로 이동합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**구문:** Shift Into( x, <n=1> )

**설명:** 처음 n개 항목을 목록 끝으로 이동하여 목록 또는 표시 상자 x를 수정합니다. n이 음수인 경우 마지막 n개 항목을 시작 위치로 이동합니다. x 인수는 변수여야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**예제 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) ) );
Wait( 1 );
Shift Into( hlist, -2 );

```

### Starts With

**구문:** b = Starts With( s, sub )

**설명:** s가 sub로 시작하면 1을 반환하고 그렇지 않으면 0을 반환합니다. s 및 sub 인수는 둘 다 문자열이거나 둘 다 목록일 수 있습니다. Left( s, Length( sub )) == sub와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Starts With( "http://www.jmp.com", "http:" );

```

### Substitute

**구문:** y = Substitute( x, patternExpr1, replacementExpr1, ... )

y = Substitute( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**설명:** 각 패턴 표현식의 인스턴스를 해당하는 대체 표현식으로 바꿔 문자열, 목록 또는 표현식 x의 복사본을 반환합니다. x가 문자열인 경우 선택적 <<IGNORECASE 인수를 설정하면 대/소문자 구분 없이 매칭할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", "All", "Some" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**예제 5**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,orange,banana-grape", Items( Get Punctuation Characters() || "-'", "" ), " " );

```

**예제 6**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**구문:** Substitute Into( x, patternExpr1, replacementExpr1, ... )

Substitute Into( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**설명:** 각 패턴 표현식의 인스턴스를 해당하는 대체 표현식으로 바꿔 문자열, 목록 또는 표현식 x를 수정합니다. x 인수는 변수여야 합니다. x가 문자열인 경우 선택적 <<IGNORECASE 인수를 설정하면 대/소문자 구분 없이 매칭할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**예제 2**

```jsl

Names Default To Here( 1 );
ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**예제 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**예제 4**

```jsl

Names Default To Here( 1 );
s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**구문:** sub = Substr( s, start, <count> )

**설명:** 위치 start에서 시작하여 count개의 문자로 구성된 문자열 s의 일부를 반환합니다. count가 음수이거나 없으면 문자열의 나머지 부분을 의미합니다. start가 음수면 끝에서 start 문자 위치에서 시작하는 것을 의미합니다. 목록에 Substr() 함수를 적용할 수도 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Text Score

**구문:** score vector = Text Score( text column, text-to-number, <weighting>, <{<center>, <scale>, scoring matrix}>);

**설명:** 텍스트 탐색기에서 스코어링 계산식을 생성하는 데 사용됩니다. text-to-number 인수는 소문자 단어를 숫자에 매핑하는 연관 배열입니다. 가중치 인수는 "Binary", "Ternary", "Count", "LogCount", "LCA"이거나 TFLogIDF에 대한 역 문서 빈도 가중치 배열입니다. 스코어링 행렬에는 연관 배열의 단어 수와 동일한 수의 열이 있거나, LCA의 경우에는 열이 하나 더 있어야 합니다. 출력은 스코어 벡터입니다. 스코어링 행렬을 지정하지 않으면 개수 스코어의 벡터가 반환됩니다. 가중치를 지정하지 않으면 Count가 사용됩니다. 이 함수는 "결합 가능한 경우 어간 추출" 옵션을 지원하지 않습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
score = Text Score( "over the lazy dogs back", ["lazy" => 1, "dogs" => 2], "Count", [1 0, 0 1] );
Show( score );

```

### Titlecase

**구문:** st = Titlecase( s )

**설명:** 단어의 첫 글자를 대문자로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Titlecase( "The dog crossed the road" );

```

### Trim

**구문:** sub = Trim( s, <left|right|both> )

**설명:** 선행 또는 후행 공백 문자를 제거하여 문자열 s의 복사본을 반환합니다. 두 번째 인수는 선행 공백 문자를 제거할지 아니면 후행 공백 문자를 제거할지 지정합니다. 두 번째 인수를 지정하지 않으면 양쪽 모두에서 공백 문자가 제거됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Trim( " title   ", both );

```

### Trim Whitespace

**구문:** sub = Trim Whitespace( s, <left|right|both> )

**설명:** 선행 또는 후행 공백 문자를 제거하여 문자열 s의 복사본을 반환합니다. 두 번째 인수는 선행 공백 문자를 제거할지 아니면 후행 공백 문자를 제거할지 지정합니다. 두 번째 인수를 지정하지 않으면 양쪽 모두에서 공백 문자가 제거됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### Uppercase

**구문:** su = Uppercase( s )

**설명:** 지정한 문자열의 소문자를 대문자로 변환합니다. 대/소문자 관련 규칙은 로케일마다 다릅니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Uppercase( "Café #23" );

```

### Word

**구문:** w = Word( n|[first last], s, <delim>, <Unmatched(result string)>

**설명:** 문자열 s의 n번째 단어를 반환합니다. 여기서 단어는 delim 인수에 있는 임의의 수의 문자로 구분된 하위 문자열입니다. delim이 없으면 공백 문자가 사용됩니다. delim이 빈 문자열이면 각 문자가 별개의 단어로 처리됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Word( 3, "http://www.jmp.com", ":/." );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Word( [2 -1], "This is a sentence" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Word( 5, "a b c d", Unmatched( "None" ) );

```

**예제 5**

```jsl

Names Default To Here( 1 );
Word( 2, "abcd", "" );

```

### Words

**구문:** wl = Words( <[first last]>, s, <delim>)

**설명:** delim 인수에 지정된 문자로 구분된 하위 문자열 목록을 반환합니다. delim이 없으면 공백 문자가 사용됩니다. delim이 빈 문자열이면 각 문자가 별개의 단어로 처리됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### XPath Query

**구문:** result = XPath Query(xml, xpath expression)

**설명:** XML 문서에 대해 XPath 쿼리를 실행합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

