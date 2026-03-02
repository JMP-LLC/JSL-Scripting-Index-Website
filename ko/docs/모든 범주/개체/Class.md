# Class



## 연결된 생성자

### Define Class

**구문:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**설명:** 생성되는 모든 클래스 메서드 및 클래스 변수가 지정된 클래스 이름 내에서만 정의되는 클래스를 생성합니다.

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );

```

## 항목 메시지

### Clone

**구문:** obj &lt;&lt; Clone

**설명:** 클래스 참조의 내용을 복제하여 새 개체를 생성합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );nclref = clref << Clone;Show( clref << Equal( nclref ) );Show( clref == nclref );

```

### Contains

**구문:** obj &lt;&lt; Contains( string )

**설명:** 지정된 문자열 표현식이 클래스에 포함되어 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Contains( "nObs" );

```

### Delete Class

**구문:** clref &lt;&lt; Delete Class( &lt; Force( boolean ) &gt; )

**설명:** 이 클래스를 삭제합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Delete Class;Show( clref );

```

### Equal

**구문:** obj &lt;&lt; Equal( classref )

**설명:** 클래스 참조 인수를 대상 클래스 참조와 비교하여 동일한지 확인합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );nclref = New Object( Test() );Show( clref << Equal( nclref ) );nclref:nObs = 50;Show( clref << Equal( nclref ) );

```

### First

**구문:** obj &lt;&lt; First

**설명:** 이 클래스의 첫 번째 항목에 대한 문자열 표현식을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << First;

```

### Get Contents

**구문:** obj &lt;&lt; Get Contents

**설명:** 이 클래스 내의 항목 목록을 반환합니다. 각 요소는 키와 연관 값이 포함된 두 항목 목록입니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Contents;

```

### Get Keys

**구문:** obj &lt;&lt; Get Keys

**설명:** 이 클래스 내의 키 목록을 반환합니다. 각 키는 클래스에 포함된 개별 항목의 문자열 표현입니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Keys;

```

### Get Name

**구문:** obj &lt;&lt; Get Name

**설명:** 이 클래스의 이름을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );class name = clref << Get Name;

```

### Get Value

**구문:** obj &lt;&lt; Get Value( string )

**설명:** 이 클래스 내 지정된 항목의 값을 반환합니다. "문자열"은 항목에 대한 키입니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Value( "nObs" );

```

### Get Values

**구문:** obj &lt;&lt; Get Values

**설명:** 이 클래스 내의 각 항목에 해당하는 값 목록을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Values;

```

### Insert

**구문:** obj &lt;&lt; Insert( string, value )

**설명:** 문자열 표현식을 지정된 값과 함께 이 클래스에 삽입합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Insert( "X", 25 );Show( clref );

```

### Lock Class

**구문:** obj &lt;&lt; Lock Class( &lt;string, | {string, ...}&gt;* )

**설명:** 이 클래스의 모든 메서드 멤버 또는 지정되어 명명된 구성원을 잠가서 추가, 변경 또는 제거되지 않도록 합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Lock Class;Try( clref:nObs = 40, "clref is locked." );

```

### N Items

**구문:** obj &lt;&lt; N Items

**설명:** 이 클래스에 포함된 항목의 개수를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );n = clref << N Items;

```

### Next

**구문:** obj &lt;&lt; Next( string )

**설명:** 이 클래스에 지정된 키 다음에 나오는 항목에 대한 문자열 표현식을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Next( "addition" );

```

### Remove

**구문:** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**설명:** 지정된 문자열 표현식을 클래스에서 제거합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Remove( "nObs" );Show( clref );

```

### Show Contents

**구문:** obj &lt;&lt; Show Contents

**설명:** JMP 로그에 클래스의 내용을 표시합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Show Contents;

```

### Unlock Class

**구문:** obj &lt;&lt; Unlock Class( &lt;string | {string, ...}&gt;* )

**설명:** 추가, 변경 또는 제거할 수 없는 메서드 멤버가 포함된 잠긴 클래스의 잠금을 해제합니다.

**JMP추가된 버전:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Lock Class( "nObs" );Try( clref:nObs = 30, Show( "clref is locked." ) ); //Try again after unlocking. clref << Unlock Class( "nObs" );Try( clref:nObs = 40, Show( "clref is locked." ) );

```

