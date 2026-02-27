# JMP App Module Instance



## 항목 메시지

### Create Objects

**구문:** obj &lt;&lt; Create Objects

**설명:** 모듈 인스턴스의 개체를 생성합니다. JMP 앱 모듈에 대한 스크립트 내에서만 호출될 수 있습니다.

```jsl

// This command is only valid within a JMP App Module Script

```

### Get Box

**구문:** obj &lt;&lt; Get Box

**설명:** 모듈 인스턴스의 표시 상자를 가져옵니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run Application;modules = app << Get Modules;inst = modules[1] << Create Instance;inst << Get Box;

```

### Get Namespace

**구문:** obj &lt;&lt; Get Namespace

**설명:** 모듈 인스턴스의 네임스페이스를 가져옵니다.

```jsl

app = JMP App();(app << Get Namespace) << Show Contents;

```

### Get User Data

**구문:** obj &lt;&lt; Get User Data

**설명:** 모듈 인스턴스와 연결된 사용자 데이터를 반환합니다.

```jsl

// This command is only valid within a JMP App Module Script

```

### Set User Data

**구문:** inst &lt;&lt; Set User Data(expr)

**설명:** JSL 값을 JMP 앱 모듈에 저장합니다. 값은 숫자, 문자열, 목록, 연관 배열 또는 기타 JSL 유형일 수 있습니다.

```jsl

// This command is only valid within a JMP App Module Script

```

