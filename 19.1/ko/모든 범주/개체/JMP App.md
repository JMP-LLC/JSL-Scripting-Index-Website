# JMP App



## 항목 메시지

### Combine Windows

**구문:** obj &lt;&lt; Combine Windows( {list of reports or data tables}, {...} )

**설명:** 제공된 플랫폼 보고서 목록 또는 데이터 테이블 목록을 새 모듈에 결합합니다. 응용 프로그램이 현재 실행 중이지 않거나 편집 상태가 아니어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) );biv = Bivariate( Y( :weight ), X( :height ) );app = JMP App();app << Set Name( "Instant App" );app << Combine Windows( {dist << Report, biv << Report} );(app << Get Modules)[1] << Set Window Title( "My Report" );app << Run;

```

### Debug

**구문:** obj &lt;&lt; Debug

**설명:** 디버거에서 응용 프로그램을 실행합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Launcher with Report.jmpappsource" );app << Debug;

```

### Edit

**구문:** obj &lt;&lt; Edit

**설명:** 응용 프로그램 또는 대시보드를 빌더에서 편집합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;

```

### Get Modules

**구문:** list = obj &lt;&lt; Get Modules

**설명:** 응용 프로그램에 정의된 모듈 목록을 가져옵니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit Application;app << Get Modules();

```

### Get Namespace

**구문:** obj &lt;&lt; Get Namespace

**설명:** 모듈 인스턴스의 네임스페이스를 가져옵니다.

```jsl

app = JMP App();(app << Get Namespace) << Show Contents;

```

### Get Windows

**구문:** obj &lt;&lt; Get Windows

**설명:** 응용 프로그램 모듈의 인스턴스로 생성된 열린 창의 목록을 반환합니다. 응용 프로그램 스크립트에서 New Window () 또는 다른 함수를 사용하여 생성한 다른 창은 목록에 포함되지 않습니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

app = JMP App();Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Historical.jmp" );app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;app << Get Windows();

```

**예제 2**

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Graph Launcher.jmpappsource" );app << Run;launcher = (app << Get Windows())[1];launcher[Button Box( 1 )] << Click;launcher[Button Box( 1 )] << Click;app << Get Windows();

```

### Open File

**구문:** obj &lt;&lt; Open File( &lt;path&gt; )

**설명:** 제공된 파일에서 응용 프로그램을 로드합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );box = app << Edit Application;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 대시보드 또는 응용 프로그램을 다시 시작하여 응용 프로그램의 실행 중인 새 복사본을 생성합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Relaunch Analysis;

```

### Run

**구문:** obj &lt;&lt; Run

**설명:** 응용 프로그램 또는 대시보드를 실행합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Save a New Window() script

```jsl

app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" );app << Run;app << Save Script for All Objects;

```

### Save Script to Add-In

**구문:** obj &lt;&lt; Save Script to Add-In

**설명:** 스크립트(JSL)를 생성하여 이 분석을 생성하고 추가기능 빌더에 로드합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << "Save Script to Add-In";

```

### Save Script to Data Table

**구문:** app &lt;&lt; Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Data Table;

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Journal;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Script Window;

```

