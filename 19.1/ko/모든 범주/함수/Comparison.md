# Comparison



### Equal

**구문:** z = x == y == ...; z = Equal( x, y, ... )

**설명:** 각 인수가 다음 인수와 동일하면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

1 == 1;

```

### Greater

**구문:** z = x &gt; y &gt; ... ; z = Greater( x, y, ... )

**설명:** 각 인수가 다음 인수보다 크면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

3 > 2 > 1;

```

### Greater or Equal

**구문:** z = x &gt;= y &gt;= ... ; z = Greater or Equal( x, y, ... )

**설명:** 각 인수가 다음 인수보다 크거나 같으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

3 >= 2 >= 2;

```

### Is Missing

**구문:** y = Is Missing( x )

**설명:** x 인수가 결측값이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Is Missing( . );

```

### Is Same Color

**구문:** x = Is Same Color( color1, color2, ... )

**설명:** 색상이 동일한지 비교합니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Is Same Color( "black", 0 );

```

**예제 2**

```jsl

Is Same Color( "red", "green", "blue" );

```

**예제 3**

```jsl

Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**예제 4**

```jsl

Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Less

**구문:** z = x &lt; y &lt; ... ; z = Less( x, y, ... )

**설명:** 각 인수가 다음 인수보다 작으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

[1 1 1] < [0 1 2];

```

### Less LessEqual

**구문:** z = x &lt; y &lt;= ... ; z = Less LessEqual( x, y, ... )

**설명:** 첫 번째 인수가 두 번째 인수보다 작고 첫 번째 인수를 제외한 각 인수가 다음 인수보다 작거나 같으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

1 < 2 <= 2;

```

### Less or Equal

**구문:** z = x &lt;= y &lt;= ... ; z = Less or Equal( x, y, ... )

**설명:** 각 인수가 다음 인수보다 작거나 같으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

1 <= 2 <= 2;

```

### LessEqual Less

**구문:** z = x &lt;= y &lt; ... ; z = LessEqual Less( x, y, ... )

**설명:** 첫 번째 인수가 두 번째 인수보다 작거나 같고 첫 번째 인수를 제외한 각 인수가 다음 인수보다 작으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

2 <= 2 < 3;

```

### Not Equal

**구문:** z = x != y != ...; z = Not Equal( x, y, ... )

**설명:** 각 인수가 다음 인수와 같지 않으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

1 != 2 != 1;

```

