# JMP App Module



## 항목 메시지

### Create Instance

**구문:** instance = obj &lt;&lt; Create Instance( &lt;parameters&gt; )

**설명:** 모듈의 인스턴스를 생성합니다. 모듈 스크립트에 정의된 OnModuleLoad() 함수에 파라미터가 전달됩니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run Application;modules = app << Get Modules;modules[1] << Create Instance;

```

### Get Application

**구문:** app = obj &lt;&lt; Get Application

**설명:** 모듈을 소유하는 응용 프로그램을 반환합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run Application;modules = app << Get Modules;modules[1] << Get Application;

```

