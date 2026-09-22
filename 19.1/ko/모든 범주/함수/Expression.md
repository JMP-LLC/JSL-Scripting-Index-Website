# Expression



### Arg

**구문:** y = Arg( x, i )

**설명:** 실행된 표현식의 i번째 인수를 반환합니다. i번째 인수가 없는 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**구문:** y = Arg Expr( expr, i )

**설명:** 표현식의 i번째 인수를 반환합니다. i번째 인수가 없는 경우 Empty()를 반환합니다. 이 함수는 더 이상 사용되지 않습니다. 대신 Arg()를 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

// See Example 2 for the deprecated Arg Expr() equivalentArg( Expr( Sum( a, b, c ) ), 2 );

```

**예제 2**

```jsl

// DeprecatedArg Expr( Sum( a, b, c ), 2 );

```

### Eval Expr

**구문:** y = Eval Expr( x )

**설명:** x 내의 각 Expr() 절을 실행된 해당 값으로 바꿔 표현식 x의 복사본을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Expr

**구문:** y = Expr( x )

**설명:** 해당 인수를 실행되지 않은 상태로 반환합니다. 표현식을 인용하는 데 사용됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Expr( x + y );

```

### Extract Expr

**구문:** y = Extract Expr( expr, pattern )

**설명:** 지정된 패턴과 매칭되는 하위 표현식을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Extract Expr( a + b * c, Wild() * Wild() );

```

### Head

**구문:** y = Head( x )

**설명:** 실행된 표현식의 시작 부분을 반환합니다(인수 포함 안 함).

**JMP추가된 버전:** 버전 14 이전

```jsl

Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**구문:** y = Head Expr( expr )

**설명:** 표현식의 헤드를 반환합니다(인수 포함 안 함). 이 함수는 더 이상 사용되지 않습니다. 대신 Head Name()을 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

// See Example 2 for the deprecated Head Expr() equivalentHead( Expr( Sum( a, b, c ) ) );

```

**예제 2**

```jsl

// DeprecatedHead Expr( Sum( a, b, c ) );

```

### Head Name

**구문:** y = Head Name( x )

**설명:** 실행된 표현식의 시작 부분을 문자열로 반환합니다(인수 포함 안 함).

**JMP추가된 버전:** 버전 14 이전

```jsl

Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**구문:** y = Head Name Expr( expr )

**설명:** 표현식의 헤드를 문자열로 반환합니다(인수 포함 안 함). 이 함수는 더 이상 사용되지 않습니다. 대신 Head Name()을 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

// See Example 2 for the deprecated Head Name Expr() equivalentHead Name( Expr( Sum( a, b, c ) ) );

```

**예제 2**

```jsl

// DeprecatedHead Name Expr( Sum( a, b, c ) );

```

### N Arg

**구문:** n = N Arg( expr )

**설명:** 실행된 표현식의 시작 부분에 있는 인수 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**구문:** n = N Arg Expr( expr )

**설명:** 표현식의 시작 부분에 있는 인수의 개수를 반환합니다. 이 함수는 더 이상 사용되지 않습니다. 대신 N Arg()를 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

// See Example 2 for the deprecated N Arg Expr() equivalentN Arg( Expr( Sum( a, b, c ) ) );

```

**예제 2**

```jsl

// DeprecatedN Arg Expr( Sum( a, b, c ) );

```

### Name Expr

**구문:** y = Name Expr( x )

**설명:** 기호의 값을 반환합니다. 표현식일 경우 실행하지 않은 표현식 자체를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

ex = Expr( 1 + 2 );Eval List( {ex, Name Expr( ex )} );

```

