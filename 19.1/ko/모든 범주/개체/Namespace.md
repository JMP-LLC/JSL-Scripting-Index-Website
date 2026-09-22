# Namespace



## 연결된 생성자

### New Namespace

**구문:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**설명:** 생성된 모든 함수 및 변수가 지정된 이름 내에서만 정의되는 네임스페이스를 생성합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));

```

## 항목 메시지

### Contains

**구문:** obj &lt;&lt; Contains( string )

**설명:** 지정된 문자열 표현식이 네임스페이스에 포함되어 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Contains( "nObs" );

```

### Delete Namespace

**구문:** nsref &lt;&lt; Delete Namespace( &lt; Force( boolean ) &gt; )

**설명:** 이 네임스페이스를 삭제합니다.

**JMP추가된 버전:** 14

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Delete Namespace;Show( nsref );

```

### First

**구문:** obj &lt;&lt; First

**설명:** 이 네임스페이스의 첫 번째 항목에 대한 문자열 표현식을 반환합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << First;

```

### Get Contents

**구문:** obj &lt;&lt; Get Contents

**설명:** 이 네임스페이스 내의 항목 목록을 반환합니다. 각 요소는 키와 관련 값이 포함된 2 항목 목록입니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Get Contents;

```

### Get Keys

**구문:** obj &lt;&lt; Get Keys

**설명:** 이 네임스페이스 내의 키 목록을 반환합니다. 키는 네임스페이스에 포함된 개별 항목의 문자열 표현입니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Get Keys;

```

### Get Name

**구문:** obj &lt;&lt; Get Name

**설명:** 이 네임스페이스의 이름을 반환합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));space name = nsref << Get Name;

```

### Get Value

**구문:** obj &lt;&lt; Get Value( string )

**설명:** 이 네임스페이스 내에 지정된 항목의 값을 반환합니다. "문자열"은 항목에 대한 키입니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Get Value( "nObs" );

```

### Get Values

**구문:** obj &lt;&lt; Get Values

**설명:** 이 네임스페이스 내의 각 항목에 해당하는 값 목록을 반환합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Get Values;

```

### Insert

**구문:** obj &lt;&lt; Insert( string, value )

**설명:** 문자열 표현식을 지정된 값과 함께 이 네임스페이스에 삽입합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Insert( "X", 25 );Show( nsref );

```

### Lock Namespace

**구문:** obj &lt;&lt; Lock Namespace( &lt;string, | {string, ...}&gt;* )

**설명:** 이 네임스페이스의 모든 변수 또는 지정된 이름의 변수를 잠가, 변수가 추가, 변경 또는 제거되지 않도록 합니다.

**JMP추가된 버전:** 14

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Lock Namespace;Try( Add Class:nObs = 40, "Add Class is locked." );

```

### N Items

**구문:** obj &lt;&lt; N Items

**설명:** 이 네임스페이스에 포함된 항목의 수를 반환합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));n = nsref << N Items;

```

### Next

**구문:** obj &lt;&lt; Next( string )

**설명:** 이 네임스페이스에 지정된 키 다음에 나오는 항목에 대한 문자열 표현식을 반환합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Next( "addition" );

```

### Remove

**구문:** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**설명:** 지정된 문자열 표현식을 네임스페이스에서 제거합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Remove( "nObs" );Show( nsref );

```

### Show Contents

**구문:** obj &lt;&lt; Show Contents

**설명:** JMP 로그에 네임스페이스의 내용을 표시합니다.

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));result = nsref << Show Contents;

```

### Unlock Namespace

**구문:** obj &lt;&lt; Unlock Namespace( &lt;string | {string, ...}&gt;* )

**설명:** 이전에 잠겨 해당하는 모든 변수가 추가, 변경 또는 제거될 수 없도록 잠긴 네임스페이스의 잠금을 해제합니다.

**JMP추가된 버전:** 14

```jsl

nsref = New Namespace(	"Add Class");Add Class:nObs = 20;Add Class:addition = Function( {x, y}, x + y );Add Class:append = Function( {a, b},	Char( a ) || " + " || Char( b ));nsref << Lock Namespace( "nObs" );Try( Add Class:nObs = 30, Show( "Add Class is locked." ) ); //Try again after unlocking. nsref << Unlock Namespace( "nObs" );Try( Add Class:nObs = 40, Show( "Add Class is locked." ) );

```

