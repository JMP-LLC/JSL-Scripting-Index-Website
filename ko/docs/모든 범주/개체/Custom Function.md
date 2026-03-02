# Custom Function



## 항목 메시지

### Custom Format Category

**구문:** f &lt;&lt; Custom Format Category(1|0)

**설명:** 사용자 함수를 사용자 형식으로 처리합니다. 함수를 사용자 형식 메뉴에서 제외하려면 0을 지정하십시오.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Custom Format Category( 1 );

```

### Description

**구문:** obj &lt;&lt; Description( text )

**설명:** 사용자 함수에 대한 설명을 설정합니다. 이 설명은 스크립트 인덱스 및 툴팁에 표시됩니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Description( "Add two numbers together, but subtract 1" );

```

### Example

**구문:** f &lt;&lt; Example(example text | Expr(example JSL code), &lt;example name&gt;)

**설명:** 함수를 효과적으로 사용하는 방법을 보여 주는 예제를 추가하십시오. Expr 명령으로 래핑한 JSL 코드 또는 텍스트 문자열로 예제를 전달해야 합니다. 메시지를 여러 번 보내 예제를 여러 개 추가할 수 있습니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Example( "Add(1, 2)" );

```

**예제 2**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Example( "Add(1, 2)", "small add" );myAdd << Example( "Add(1, 500)", "bigger add" );

```

### Formula Category

**구문:** f &lt;&lt; Formula Category(name|""|1|0)

**설명:** 함수를 지정된 계산식 편집기 범주에 포함합니다. 지정된 경우 이 함수는 매칭되는 범주의 끝에 추가됩니다. 범주가 없으면 새 범주가 생성됩니다. 함수를 계산식 편집기 트리에 표시하지 않으려면 0 또는 빈 문자열을 지정하십시오.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Formula Category( "NumberStuff" );

```

### Get Custom Format Category

**구문:** f &lt;&lt; Get Custom Format Category

**설명:** 사용자 함수에 대한 사용자 형식 범주를 가져옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Custom Format Category( 1 );myAdd << Get Custom Format Category;

```

### Get Description

**구문:** f &lt;&lt; Get Description

**설명:** 사용자 함수에 대한 설명을 가져옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Description( "Add two numbers together, but subtract 1" );myAdd << Get Description;

```

### Get Examples

**구문:** f &lt;&lt; Get Examples

**설명:** 예제 목록을 문자열로 불러옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Example( "Add(1, 2)", "small add" );myAdd << Example( "Add(1, 500)", "bigger add" );myAdd << Get Examples;

```

### Get Formula Category

**구문:** f &lt;&lt; Get Formula Category

**설명:** 이 함수가 속해야 할 계산식 편집기 범주(있는 경우)를 반환합니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Formula Category( "NumberStuff" );myAdd << Get Formula Category;

```

### Get Function

**구문:** f &lt;&lt; Get Function

**설명:** 함수 정의를 불러옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Get Function;

```

### Get Name

**구문:** f &lt;&lt; Get Name

**설명:** 함수 이름을 검색합니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Get Name;

```

### Get Namespace

**구문:** f &lt;&lt; Get Namespace

**설명:** 함수 네임스페이스를 불러옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Get Namespace;

```

### Get Parameters

**구문:** f &lt;&lt; Get Parameters

**설명:** 파라미터 목록을 불러옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Parameter( "Number", "number" );myAdd << Parameter( "Number", "<number=1>" );myAdd << Get Parameters;

```

### Get Prototype

**구문:** f &lt;&lt; Get Prototype

**설명:** 스크립트 인덱스에서 이 함수에 대해 표시되는 프로토타입을 가져옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Prototype( "Add(number, <number=1>)" );myAdd << Get Prototype;

```

### Get Result Type

**구문:** f &lt;&lt; Get Result Type

**설명:** 함수의 결과 유형을 가져옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Result Type( "Number" );myAdd << Get Result Type;

```

### Get Scripting Index Category

**구문:** f &lt;&lt; Get Scripting Index Category

**설명:** 스크립트 인덱스에서 사용자 함수에 대한 범주를 가져옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Scripting Index Category( "My Functions" );myAdd << Get Scripting Index Category;

```

### Get Transform Category

**구문:** f &lt;&lt; Get Transform Category

**설명:** 사용자 함수에 대한 변환 범주를 가져옵니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Transform Category( 1 );myAdd << Get Transform Category;

```

### Parameter

**구문:** f &lt;&lt; Parameter(typename | {typename1, typename2, ...}, hint text)

**설명:** 함수의 파라미터에 대한 정보를 추가하고 함수가 사용하는 각 파라미터에 대해 한 번씩 이 메시지를 보냅니다. 이는 코드 검증에 사용될 수 있습니다. 올바른 파라미터 유형은 임의, 이름, 숫자, 문자열, 목록, 행렬, 행 상태입니다. 여러 개의 결과 유형이 가능한 경우 유형 이름 목록을 제공하십시오. 힌트 텍스트는 계산식 편집기에서 해당 인수에 사용해야 할 데이터를 나타냅니다. 힌트 텍스트를 사용하지 않으려면 빈 문자열을 지정하십시오.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Parameter( "Number", "number" );myAdd << Parameter( "Number", "<number=1>" );

```

### Prototype

**구문:** obj &lt;&lt; Prototype( text )

**설명:** 스크립트 인덱스에서 이 함수에 대해 표시되는 프로토타입을 설정합니다.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Prototype( "Add(number, <number=1>)" );

```

### Result Type

**구문:** f &lt;&lt; Result Type(typename | {typename1, typename2 ...})

**설명:** 함수의 결과 유형을 설정합니다. 이는 코드 검증에 사용될 수 있습니다. 올바른 값은 임의, 이름, 숫자, 문자열, 목록, 행렬, 행 상태입니다. 여러 결과 유형이 가능한 경우 목록에 유형 이름을 제공하십시오.

**JMP추가된 버전:** 14

**예제 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Result Type( "Number" );

```

**예제 2**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Result Type( {"Number", "String"} );

```

### Scripting Index Category

**구문:** f &lt;&lt; Scripting Index Category(name|""|1|0)

**설명:** 스크립트 인덱스에서 사용자 함수의 범주를 설정합니다. 지정한 범주 외에도 모든 사용자 함수가 모든 함수 범주에 나열됩니다. 모든 함수 범주에만 함수를 나열하려면 0 또는 ""를 지정하십시오.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Scripting Index Category( "My Functions" );

```

### Transform Category

**구문:** f &lt;&lt; Transform Category(1|0)

**설명:** 사용자 함수를 열 변환으로 처리합니다. 함수를 열 변환 메뉴에서 제외하려면 0을 지정하십시오.

**JMP추가된 버전:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );myAdd << Transform Category( 1 );

```

