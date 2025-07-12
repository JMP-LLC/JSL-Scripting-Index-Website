# Numeric



## 함수

### Abs

**구문:** y = Abs( x )

**설명:** x의 절대값을 반환합니다. 인수는 숫자, 행렬 또는 숫자 목록일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Abs( -5 );

```

### Ceiling

**구문:** y = Ceiling( x )

**설명:** x보다 크거나 같은 가장 작은 정수를 반환합니다. 인수는 숫자, 행렬 또는 숫자 목록일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Ceiling( 1.2 );

```

### Derivative

**구문:** y = Derivative( expr, name )

**설명:** 주어진 표현식의 지정된 변수에 대한 도함수를 기호 형태로 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Derivative( Sin( x ), x );

```

### Floor

**구문:** y = Floor( x )

**설명:** x보다 작거나 같은 가장 큰 정수를 반환합니다. 인수는 숫자, 행렬 또는 숫자 목록일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Floor( 1.2 );

```

### Integrate

**구문:** y = Integrate( expr, varname, lowLimit, upLimit, <<Tolerance(1e-10), <<StoreInfo(list), <<StartingValue(val) )

**설명:** Gander와 Gautschi(2000)의 적응형 구적법을 사용하여 관련된 스칼라 값에 대해 표현식을 적분합니다. varname 변수에 할당된 값이 있거나 선택적인 <<StartingValue() 인수에 시작 값이 지정된 경우 해당 값은 일반적으로 적분의 정확성을 개선하기 위한 값으로 사용됩니다. 무한 적분 범위를 지정하려면 lowLimit, upLimit 또는 둘 모두를 결측값으로 설정하십시오. <<StoreInfo()가 지정된 경우 <<StoreInfo()의 인수에는 적분 루틴의 진단이 포함됩니다. <<Tolerance()가 지정된 경우 <<Tolerance()의 인수는 적분 계산에 사용되는 자동 적분 함수에서 공차 수준으로 사용됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Integrate( Exp( -x ), x, 0, . );

```

**예제 2**

```jsl

Names Default To Here( 1 );
x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Invert Expr

**구문:** y = Invert Expr( expr, xname, yname )

**설명:** xname의 단일 항목을 전개해서 expr 표현식 인수의 역함수를 구합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Invert Expr( Sqrt( Log( x ) ), x, y );

```

### Mod

**구문:** z = Modulo( x, y )

**설명:** x를 y로 나눈 나머지를 반환합니다. 나머지의 부호는 x와 동일합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Modulo

**구문:** z = Modulo( x, y )

**설명:** x를 y로 나눈 나머지를 반환합니다. 나머지의 부호는 x와 동일합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Modulo( 10, 3 );

```

### Normal Integrate

**구문:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**설명:** 다변량 정규 분포를 따르는 확률 변수의 평활 함수에 대한 방사형-구형 적분의 값을 반환합니다. 기본 개념은 Genz and Monahan(1996)의 방법과 동일합니다. 하지만 방사형 방향에는 Radau-Gauss-Laguerre 유형의 구적이 사용됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Normal Integrate( J( 3, 1, 0 ), Identity( 3 ), ex[1] ^ 4 * ex[2] ^ 2 * ex[3] ^ 2, ex, 2, 5000 );

```

### Num Deriv

**구문:** y = Num Deriv( f( x, ... ),  <parnum>)

**설명:** 해당 인수 중 하나와 관련하여 f( x,... ) 함수의 수치 미분을 반환합니다. Num Deriv 함수의 두 번째 인수로 해당 인수를 지정할 수 있습니다. 두 번째 인수가 지정되지 않은 경우 함수의 첫 번째 인수에 대한 도함수를 반환합니다. f( x,... ) 함수 표현식에 지정된 숫자 값을 사용하여 도함수 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**구문:** y = Num Deriv2( f( x, ... ) )

**설명:** x에 대한 f( x,... ) 함수의 수치 2차 도함수를 반환합니다. f( x,... ) 함수 표현식에 지정된 숫자 값을 사용하여 도함수 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Round

**구문:** y = Round( x, <n> )

**설명:** x를 소수점 이하 n자리(n이 지정되지 않은 경우 0의 자리)의 근사값으로 적용합니다. n 인수는 음수일 수 있다는 점에 유의하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Round( 213, -1 );

```

### Simplify Expr

**구문:** resultExpr = Simplify Expr( expr( ... ) )

**설명:** 인수 표현식을 다양한 방법으로 단순화하여 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

