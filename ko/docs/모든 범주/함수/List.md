# List



### As List

**구문:** y = As List( matrix )

**설명:** 행렬의 목록 표현을 반환합니다. 다중 열 행렬은 Matrix 연산자의 예상 동작대로 목록의 목록(행당 하나씩)으로 변환됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
As List( [11 22 33, 44 55 66] );

```

### Concat Items

**구문:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**설명:** 문자열 목록을 긴 문자열 하나로 결합합니다. 각 문자열은 구분 기호(지정하지 않을 경우 공백)로 구분합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Eval List

**구문:** y = Eval List( list )

**설명:** 목록의 모든 항목이 실행된 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Eval List( {1 + 2, 3 + 4} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
x = 5;
y = 10;
Eval List( {x, y} );

```

### Insert

**구문:** z = Insert( x, y, &lt;i&gt; )

**설명:** y를 i번째 위치에 삽입한 목록 i의 복사본을 반환합니다. 선택적 인수 x가 지정되지 않은 경우 마지막에 삽입합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**구문:** Insert Into( x, y, &lt;i&gt; )

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

### Is List

**구문:** y = Is List( x )

**설명:** x 인수가 목록이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Is List( {1, 2, 3} );

```

### Items

**구문:** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

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

### List

**구문:** y = {a, b, ...}; y = List( a, b, ... )

**설명:** 항목을 실행하지 않고 항목 목록을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
{1, 2 + 3, [11 22]};

```

### N Items

**구문:** y = N Items( x )

**설명:** 목록의 항목 수, 행렬의 요소 수, 연관 배열의 키의 수, 네임스페이스의 함수 및 변수의 수, 클래스 개체의 메서드 및 변수의 수 또는 표시 상자의 하위 항목 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
N Items( {1, 2 + 3, [11 22]} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
N Items( ["a" => 10, "b" => 3, => 0] );

```

**예제 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### Remove

**구문:** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**설명:** i번째 항목부터 시작해 n개의 항목을 삭제하거나 list 인수로 지정된 항목 목록을 삭제하여 목록 x의 복사본을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**구문:** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

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

**구문:** y = Shift( x, &lt;n=1&gt; )

**설명:** 처음 n개 항목을 목록 끝으로 이동하여 목록 x의 복사본을 반환합니다. n이 음수인 경우 마지막 n개 항목을 시작 위치로 이동합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**구문:** Shift Into( x, &lt;n=1&gt; )

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

### Sort List

**구문:** y = Sort List( x )

**설명:** 항목을 오름차순으로 정렬하여 목록 x의 복사본을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**구문:** Sort List Into( x )

**설명:** 항목을 오름차순으로 정렬하여 목록 x를 수정합니다. x 인수는 변수여야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Substitute

**구문:** y = Substitute( x, patternExpr1, replacementExpr1, ... )y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

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

**구문:** Substitute Into( x, patternExpr1, replacementExpr1, ... )Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

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

### Words

**구문:** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

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

