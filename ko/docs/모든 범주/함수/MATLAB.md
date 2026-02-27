# MATLAB



### Check MATLAB Dependencies

**구문:** Check MATLAB Dependencies()

**설명:** MATLAB 종속성이 설치되어 있는지 확인합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies();	Print( "Dependencies are installed" );,	Print( "Dependencies are installed" ));

```

### Install MATLAB Dependencies

**구문:** Install MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**설명:** 필수 MATLAB 종속성을 설치합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies(),	Print( "Dependencies are installed" ));

```

### MATLAB Connect

**구문:** MATLABConnection = MATLAB Connect(&lt;Echo(0|1)&gt;)

**설명:** MATLAB 연결 스크립트 가능 개체를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLABConnection = MATLAB Connect();x = MatlabConnection << Is Connected;Show( x );

```

### MATLAB Control

**구문:** MATLAB Control( Echo(bool) )

**설명:** MATLAB의 제어 옵션을 변경합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init( Echo( true ) );MATLAB Control( Echo( false ) );MATLAB Submit(	"\[	v = [9 8 7, 6 5 4, 3 2 1];	m = [1 2 3, 4 5 6, 7 8 9];	rowjoin = [v ; m]	coljoin = [v , m]]\");MATLAB Term();

```

### MATLAB Execute

**구문:** MATLAB Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**설명:** 입력 목록을 보내고 명령문을 실행한 후 출력 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];ml = MATLAB Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v) called Left divisionx = m .* v; % element-wise product]\");Show( v, m, ml, x, z, a, d );MATLAB Term();

```

### MATLAB Get

**구문:** y = MATLAB Get( name )

**설명:** MATLAB에서 데이터를 반환합니다. name 인수는 MATLAB 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 프레임) 중 하나를 나타낼 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();x1 = [1, 2, 3];MATLAB Send( x1 );x2 = MATLAB Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt1 );dt2 = MATLAB Get( dt1 );dt2 << New Data View;Close( dt1 );MATLAB Term();

```

### MATLAB Get Graphics

**구문:** MATLAB graphics = MATLAB Get Graphics( format )

**설명:** format 인수에 지정된 그래픽 형식으로 MATLAB 그래프 표시 창에 작성된 마지막 그래픽 개체를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();ml = MATLAB Submit( "\[plot(1:10)]\" );plot = MATLAB Get Graphics( png );pngJMP = New Window( "Plot", Picture Box( plot ) );pngJMP << Close Window;MATLAB Submit( "close" );//Needed this command to close the figure generated from MatlabMATLAB Term();

```

### MATLAB Get Version

**구문:** version = MATLAB Get Version()

**설명:** JMP MATLAB 인터페이스에서 사용 중인 MATLAB의 버전 번호를 반환합니다.

**JMP추가된 버전:** 14

```jsl

MATLAB Init();version = MATLAB Get Version();Show( version );MATLAB Term();

```

### MATLAB Init

**구문:** MATLAB Init(&lt;Echo(0|1)&gt;)

**설명:** MATLAB 인터페이스를 초기화합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### MATLAB Is Connected

**구문:** connected = MATLAB Is Connected()

**설명:** 활성 MATLAB 연결이 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();x = MATLAB Is Connected();Show( x );MATLAB Term();

```

### MATLAB JMP Name to MATLAB Name

**구문:** MATLAB name = MATLAB JMP Name To MATLAB Name( JMP name )

**설명:** MATLAB 변수 명명 규칙을 사용하여 JMP 변수 이름을 MATLAB 변수 이름에 매핑합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();MATLAB name = MATLAB JMP Name to MATLAB Name( a b c );Show( MATLAB name );MATLAB Term();

```

### MATLAB Load

**구문:** MATLAB Load( path )

**설명:** 변수를 .mat 파일에서 MATLAB에 로드하여 JSL 연관 배열로 반환합니다.

**JMP추가된 버전:** 19

```jsl

MATLAB Init();// if .mat file contained: x = 40; y = 'hello';vars = MATLAB Load( "path/to/.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLAB Term();

```

### MATLAB Send

**구문:** MATLAB Send( name, &lt;MATLAB Name( name )&gt;, &lt;Named Arguments&gt; )

**설명:** 데이터를 MATLAB으로 보냅니다. name 인수는 JMP 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 테이블) 중 하나를 나타낼 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();x = [1, 2, 3];MATLAB Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt );Close( dt );MATLAB Submit( "x" );MATLAB Submit( "dt" );MATLAB Term();

```

### MATLAB Send File

**구문:** MATLAB Send File( filename, &lt;MATLAB Name( name )&gt; )

**설명:** 데이터 파일을 MATLAB으로 보냅니다. filename 인수는 MATLAB으로 보낼 파일의 경로 이름을 지정하는 문자열입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();MATLAB Send File( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send File( "$SAMPLE_DATA/Baseball.jmp" );MATLAB Submit( "BigClass" );MATLAB Submit( "Baseball" );MATLAB Term();

```

### MATLAB Submit

**구문:** MATLAB Submit( statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**설명:** 명령문을 MATLAB으로 전송합니다. 명령문은 문자열 값 또는 문자열 값 목록 형식일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\" );getStr = MATLAB Get( str );getNum = MATLAB Get( a );Show( getStr, getNum );MATLAB Term();

```

### MATLAB Submit File

**구문:** MATLAB Submit File( path, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**설명:** path 인수에 지정된 파일을 사용하여 MATLAB에 명령문을 전송합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();MATLAB Submit File( "file containing MATLAB source.m" );MATLAB Term();

```

### MATLAB Term

**구문:** MATLAB Term()

**설명:** MATLAB 인터페이스를 종료합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### Update MATLAB Dependencies

**구문:** Update MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**설명:** 필수 MATLAB 종속성을 업데이트합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

If( Check MATLAB Dependencies(),	Update MATLAB Dependencies(),	Print( "Dependencies are updated" ));

```

