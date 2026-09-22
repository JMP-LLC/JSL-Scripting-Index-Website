# MATLAB Connection



## 항목 메시지

### Control

**구문:** obj &lt;&lt; Control(&lt;Echo(Boolean)&gt;)

**설명:** MATLAB 실행을 제어합니다.

```jsl

conn = MATLAB Connect();conn << Control( Echo( 0 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // no echoconn << Control( Echo( 1 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // echo

```

### Disconnect

**구문:** obj &lt;&lt; Disconnect

**설명:** MATLAB 인터페이스를 종료합니다.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Disconnect;

```

### Execute

**구문:** obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**설명:** 입력 목록을 보내고 명령문을 실행한 후 출력 목록을 반환합니다. 선택적 echo() 파라미터의 기본값은 True입니다. echo 파라미터는 MATLAB 소스의 로그 출력을 제어합니다. 논리적 True(1)는 소스를 로그에 출력하고 0은 로그에 출력하지 않습니다.

```jsl

MATLABConnection = MATLAB Connect();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];MATLABConnection << Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v)	called Left divisionx = m .* v; % element-wise product]\");Show( v, m, x, z, a, d );MATLABConnection << Disconnect;

```

### Get

**구문:** y = obj &lt;&lt; Get( name )

**설명:** MATLAB에서 데이터를 반환합니다. name 인수는 MATLAB 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 프레임) 중 하나를 나타낼 수 있습니다.

```jsl

MATLABConnection = MATLAB Connect();x1 = [1, 2, 3];MATLABConnection << Set( x1 );x2 = MATLABConnection << Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt1 );dt2 = MATLABConnection << Get( dt1 );dt2 << New Data View;Close( dt1 );MATLABConnection << Disconnect;

```

### Get Graphics

**구문:** MATLAB graphics = obj &lt;&lt; Get Graphics( format )

**설명:** format 인수에 지정된 그래픽 형식으로 MATLAB 그래프 표시 창에 작성된 마지막 그래픽 개체를 반환합니다.

```jsl

MATLABConnection = MATLAB Connect();ml = MATLABConnection << Submit( "\[x = 0:pi/100:2*pi;y = sin(x);plot(x,y)]\" );plot = MATLABConnection << Get Graphics( png );New Window( "Plot", Picture Box( plot ) );MATLABConnection << Disconnect;

```

### Get Version

**구문:** version = obj &lt;&lt; Get Version

**설명:** 현재 연결에 사용된 MATLAB의 버전 번호를 반환합니다.

```jsl

MATLABConnection = MATLAB Connect();version = MATLABConnection << Get Version;Show( version );MATLABConnection << Disconnect;

```

### Is Connected

**구문:** x = obj &lt;&lt; Is Connected

**설명:** 활성 MATLAB 연결이 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

```jsl

MATLABConnection = MATLAB Connect();x = MATLABConnection << Is Connected;Show( x );MATLABConnection << Disconnect;

```

### JMP Name To MATLAB Name

**구문:** obj &lt;&lt; JMP Name To MATLAB Name( JMP name )

**설명:** MATLAB 변수 명명 규칙을 사용하여 JMP 변수 이름을 MATLAB 변수 이름에 매핑합니다.

```jsl

MATLABConnection = MATLAB Connect();MATLAB Name = MATLABConnection << JMP Name To MATLAB Name( a b c );Show( MATLAB Name );MATLABConnection << Disconnect;

```

### Load

**구문:** obj &lt;&lt; Load( path )

**설명:** ".mat" 파일을 MATLAB에 로드하고 변수를 JSL 연관 배열로 반환합니다.

```jsl

MATLABConnection = MATLAB Connect();// .mat file has x, y variables with valuesvars = MATLABConnection << Load( "path/to/matfile.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLABConnection << Disconnect;

```

### Send

**구문:** y = obj &lt;&lt; Send( name, &lt;Named Arguments&gt; )

**설명:** 데이터를 MATLAB으로 보냅니다. name 인수는 JMP 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 테이블) 중 하나를 나타낼 수 있습니다.

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Send( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Send File

**구문:** y = obj &lt;&lt; Send File( filename, &lt;MATLAB Name ( name )&gt; )

**설명:** 데이터 파일을 MATLAB으로 보냅니다. filename 인수는 MATLAB으로 보낼 파일의 경로 이름을 지정하는 문자열입니다.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );dtname = "$SAMPLE_DATA/Baseball.jmp";MATLABConnection << Send File( dtname );MATLABConnection << Submit( "BigClass" );MATLABConnection << Submit( "Baseball" );MATLABConnection << Disconnect;

```

### Set

**구문:** y = obj &lt;&lt; Set( name, &lt;MATLAB Name ( name )&gt; )

**설명:** 데이터를 MATLAB으로 보냅니다. name 인수는 JMP 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 테이블) 중 하나를 나타낼 수 있습니다.

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Set( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Submit

**구문:** obj &lt;&lt; Submit( statements )

**설명:** 명령문을 MATLAB으로 전송합니다. 명령문은 문자열 값 또는 문자열 값 목록 형식일 수 있습니다.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit( "\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\" );getStr = MATLABConnection << Get( str );getNum = MATLABConnection << Get( a );Show( getStr, getNum );MATLABConnection << Disconnect;

```

### Submit File

**구문:** obj &lt;&lt; Submit File( path )

**설명:** path 인수에 지정된 파일을 사용하여 MATLAB에 명령문을 전송합니다.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit File( "file containing MATLAB source." );MATLABConnection << Disconnect;

```

