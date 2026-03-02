# Python



### Python Connect

**구문:** PythonConnection = Python Connect ()

**설명:** Python 연결 스크립트 가능 개체를 반환합니다.

**JMP추가된 버전:** 14

```jsl

PythonConnection = Python Connect();version = PythonConnection << Get Version;Show( version );

```

### Python Create JPIP CMD

**구문:** Python Create JPIP CMD()

**설명:** Python pip 명령에 대해 jpip 명령줄 래퍼 스크립트 생성을 트리거합니다. 생성된 스크립트를 저장할 디렉터리 위치를 묻는 디렉터리 선택 대화상자가 나타납니다. 그러면 이 스크립트는 pip의 모든 기능을 제공하는 동시에 JMP의 격리된 Python 환경에 필요한 환경 변수를 올바르게 설정합니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Python Create JPIP CMD();

```

**예제 2**

```jsl

conn = Python Connect();conn << Create JPIP CMD();

```

### Python Execute

**구문:** Python Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**설명:** 입력 목록을 보내고 명령문을 실행한 후 출력 목록을 반환합니다. 선택적 echo() 파라미터의 기본값은 True입니다. echo 파라미터는 Python 소스의 로그 출력을 제어합니다. 논리적 True(1)는 소스를 로그에 출력하고 0은 로그에 출력하지 않습니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

a = "abcdef";d = 3.141;x = 0;z = 0;v = [1 0 0, 0 1 0, 0 0 1];// pi, e, phi, c, Plank's, Faraday, 345 trianglem = [3.141 2.718 1.618,2.997 6.626 9.648,3 4 5];ml = Python Execute(	{v, m, a, d},	{x, z, a, d},	"\[import numpy as npa = np.multiply(v, m) # matrix productd = np.divide(v, m) # matrix divisionz = np.multiply(m, np.linalg.inv(v)) # m * inv(v) called Left divisionx = np.multiply(np.linalg.inv(m), v) # inv(m) * v called right division]\");Show( v, m, ml, x, z, a, d );

```

**예제 2**

```jsl

x1 = 1;x2 = 2;y1 = 1;y2 = 2;z1 = 1;z2 = 2;v = [1 0 0, 0 1 0, 0 0 1];// pi, e, phi, c, Plank's, Faraday, 345 trianglem = [3.141 2.718 1.618,2.997 6.626 9.648,3 4 5];ml = Python Execute(	{v, m},	{x1, x2, y1, y2, z1, z2},	"\[import numpy as npx1 = np.multiply(v, m) # matrix productprint('x1=', x1)x2 = np.divide(v, m) # matrix divisionprint('x2=', x2)y1 = np.dot(v, m) # dot product of v and mprint('y1=', y1)y2 = np.dot(m, v) # dot product of m and vprint('y2=', y2)z1 = np.inner(v, m) # inner product of v and mprint('z1=', z1)z2 = np.inner(m, v) # innder product of m and vprint('z2=', z2)]\");Show( v, m, ml, x1, x2, y1, y2, z1, z2 );

```

### Python Get

**구문:** y = Python Get( name )

**설명:** Python에서 데이터를 반환합니다. name 인수는 Python 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 사전 | 데이터 테이블 | 데이터 프레임 | 날짜/시간 | numpy.datetime64) 중 하나를 나타낼 수 있습니다.

**JMP추가된 버전:** 14

#### Datetime

```jsl

date1 = As Date( Today() );Python Send( date1 );date2 = Python Get( date1 );Show( date1, date2 );

```

#### numpy.datetime64

```jsl

Python Install Packages( "numpy" );Python Submit( "import numpy as np" );Python Submit( "datetime64 = np.datetime64('1989-10-05')" );numpy_datetime = Python Get( datetime64 );Show( numpy_datetime );

```

**예제 1**

```jsl

x1 = {1, 2, 3};Python Send( x1 );x2 = Python Get( x1 );Show( x1, x2 );

```

### Python Get Version

**구문:** version = Python Get Version()

**설명:** JMP Python 인터페이스와 함께 사용되는 Python의 버전 번호를 반환합니다.

**JMP추가된 버전:** 14

```jsl

version = Python Get Version();Show( version );

```

### Python Init

**구문:** PythonConnection = Python Init( )

**설명:** 참고: 이 함수는 JMP 18부터 더 이상 사용되지 않으며 Python Connect()와 동일합니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Python Init();Python Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = Python Get( str );Show( getStr );

```

**예제 2**

```jsl

PythonConnection = Python Init();PythonConnection << Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = Python Get( str );Show( getStr );

```

### Python Install Packages

**구문:** Python Install Packages( packages )

**설명:** Python 패키지를 JMP site-packages 디렉터리에 설치하는 래퍼입니다. 간단한 패키지 설치 이외의 작업은 Python Create JPIP CMD()를 참조하여 Directory Pick()으로 선택한 디렉터리에 명령줄 pip 래퍼 스크립트를 생성합니다. JMP Python 스크립트 창에서 설치를 실행하려면 &apos;스크립트 인덱스&apos;의 Python 범주에서 jmputils.jpip를 참조하십시오.

**JMP추가된 버전:** 18

**예제 1**

```jsl

// install numpy and pandas packagesPython Install Packages( "numpy pandas" );

```

**예제 2**

```jsl

// install numpy and pandas packagesPython Install Packages( {"numpy", "pandas"} );

```

**예제 3**

```jsl

// install numpy and pandas packagesconn = Python Connect();conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**구문:** connected = Python Is Connected()

**설명:** 참고: 이 함수는 JMP 18부터 더 이상 사용되지 않으며, 항상 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

x = Python Is Connected();Show( x );

```

### Python JMP Name to Python Name

**구문:** Python name = Python JMP Name To Python Name( JMP name )

**설명:** Python 변수 명명 규칙을 사용하여 JMP 변수 이름을 Python 변수 이름에 매핑합니다.

**JMP추가된 버전:** 14

```jsl

Python name = Python JMP Name to Python Name( a b c );Show( Python name );

```

### Python Reset

**구문:** Python Reset()

**설명:** 공유 Python 환경을 재설정하며 주로 개체에 대한 모든 참조를 제거합니다. 단, 가져온 모듈의 가져오기 캐시는 변경되지 않습니다. 이는 Python 환경 자체의 제한 사항입니다. 공유 라이브러리를 로드하는 모듈은 실행 중인 프로세스에서 언로드할 수 없습니다. 순수형 Python 코드를 다시 로드하려면 Python.org 문서에서 importlib reload()를 검색하여 참조하십시오.

**JMP추가된 버전:** 19

```jsl

pi = 3.1415927;Python Send( pi );Python Submit( "print(pi)" );Python Reset();// will show error, pi not definedPython Submit( "print(pi)" );

```

### Python Send

**구문:** Python Send( name, &lt;Python Name( name )&gt; )

**설명:** 데이터를 Python으로 보냅니다. name 인수는 JMP 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 테이블| 데이터 테이블 열 | 날짜) 중 하나를 나타낼 수 있습니다.

**JMP추가된 버전:** 14

#### 날짜

```jsl

date = As Date( Today() );Python Send( date );Python Submit( "print(date)" );

```

#### 데이터 테이블

```jsl

x = {1, 2, 3};Python Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Python Send( dt );Python Submit( "print(x)" );Python Submit( "print(dt)" );

```

#### 열

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Python Send( dt:weight );Python Submit( "print(dt_weight)" );

```

### Python Send File

**구문:** Python Send File( filename, &lt;Python Name( name )&gt; )

**설명:** 데이터 파일을 Python으로 보냅니다. 여기서 filename 인수는 Python으로 보낼 파일의 경로 이름을 지정하는 문자열입니다.

**JMP추가된 버전:** 14

```jsl

Python Send File( "$SAMPLE_DATA/Big Class.jmp" );Python Send File( "$SAMPLE_DATA/Baseball.jmp" );Python Submit( "print(Big_Class)" );Python Submit( "print(Baseball)" );

```

### Python Submit

**구문:** Python Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**설명:** 명령문을 Python으로 전송합니다. 명령문은 문자열 값 또는 문자열 값 목록 형식일 수 있습니다. 선택적 echo() 파라미터의 기본값은 1입니다. echo 파라미터는 Python 소스의 로그 출력을 제어합니다. 논리적 True(1)는 소스를 로그에 출력하고 0은 로그에 출력하지 않습니다.

**JMP추가된 버전:** 14

```jsl

Python Submit( "\[str = 'The quick brown fox jumps over the lazy dog'a = 200]\" );getStr = Python Get( str );getNum = Python Get( a );Show( getStr, getNum );

```

### Python Submit File

**구문:** Python Submit File( path )

**설명:** path 인수에 지정된 파일을 사용하여 명령문을 Python으로 전송합니다.

**JMP추가된 버전:** 14

```jsl

Python Submit File( "some_Python_source.py" );

```

### Python Term

**구문:** Python Term()

**설명:** 참고: 이 함수는 JMP 18부터 더 이상 사용되지 않으며 아무 효과가 없습니다.

**JMP추가된 버전:** 14

