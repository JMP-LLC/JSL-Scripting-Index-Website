# Python Connection



## 항목 메시지

### Create JPIP CMD

**구문:** obj &lt;&lt; Create JPIP CMD()

**설명:** Python pip 명령에 대해 jpip 명령줄 래퍼 스크립트 생성을 트리거합니다. 생성된 스크립트의 저장 위치를 묻는 디렉터리 선택 대화상자가 나타납니다. 그러면 이 스크립트는 pip의 모든 기능을 제공하는 동시에 JMP의 격리된 Python 환경에 필요한 환경 변수를 올바르게 설정합니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

**예제 2**

```jsl

Names Default To Here( 1 );
Python Create JPIP CMD();

```

### Disconnect

**구문:** obj &lt;&lt; Disconnect

**설명:** 참고: 이 함수는 JMP 18부터 더 이상 사용되지 않으며 아무 효과가 없습니다.

**JMP추가된 버전:** 14

### Execute

**구문:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**설명:** 입력 목록을 보내고 명령문을 실행하고 출력 목록을 반환합니다. 선택적 echo() 파라미터의 기본값은 True입니다. echo 파라미터는 Python 소스의 로그 출력을 제어합니다. 논리적 True(1)는 소스를 로그에 출력하고 0은 로그에 출력하지 않습니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
// NOTE: a,d,x,z must be declared before Execute()
// as this is the location the results will be written.
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = PythonConnection << Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
import numpy as np
a = np.multiply(v, m) # matrix product
d = np.divide(v, m) # matrix division
z = np.multiply(m, np.linalg.inv(v)) # m * inv(v) called Left division
x = np.multiply(np.linalg.inv(m), v) # inv(m) * v called right division
	]\"
);
Show( v, m, ml, x, z, a, d );

```

**예제 2**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x1 = 0;
x2 = 0;
y1 = 0;
y2 = 0;
z1 = 0;
z2 = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
	{v, m},
	{x1, x2, y1, y2, z1, z2},
	"\[
import numpy as np
x1 = np.multiply(v, m) # matrix product
print('x1=', x1)
x2 = np.divide(v, m) # matrix division
print('x2=', x2)
y1 = np.dot(v, m) # dot product of v and m
print('y1=', y1)
y2 = np.dot(m, v) # dot product of m and v
print('y2=', y2)
z1 = np.inner(v, m) # inner product of v and m
print('z1=', z1)
z2 = np.inner(m, v) # innder product of m and v
print('z2=', z2)
		]\"
);
Show( v, m, ml, x1, x2, y1, y2, z1, z2 );

```

### Get

**구문:** y = obj &lt;&lt; Get( name )

**설명:** Python에서 데이터를 반환합니다. name 인수는 Python 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 사전 | 데이터 테이블 | 데이터 프레임 | 날짜/시간 | numpy.datetime64) 중 하나를 나타낼 수 있습니다.

**JMP추가된 버전:** 14

**Datetime**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date1 = As Date( Today() );
PythonConnection << Set( date1 );
date2 = PythonConnection << Get( date1 );
Show( date1, date2 );

```

**numpy.datetime64**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
PythonConnection << Install Packages( "numpy" );
PythonConnection << Submit( "import numpy as np" );
PythonConnection << Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = PythonConnection << Get( datetime64 );
Show( numpy_datetime );

```

**예제 1**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
x1 = [1, 2, 3];
PythonConnection << Set( x1 );
x2 = PythonConnection << Get( x1 );
Show( x1, x2 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt1 );
dt2 = PythonConnection << Get( dt1 );
dt2 << New Data View;
Close( dt1 );

```

### Get Version

**구문:** version = obj &lt;&lt; Get Version

**설명:** 현재 연결에 사용된 Python의 버전 번호를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Install Packages

**구문:** obj &lt;&lt; Install Packages( packages )

**설명:** Python 패키지를 JMP site-packages 디렉터리에 설치하도록 래핑합니다. 간단한 패키지 설치 이외의 작업은 Python Create JPIP CMD()를 참조하여 Directory Pick()으로 선택한 디렉터리에 명령줄 pip 래퍼 스크립트를 생성합니다. JMP Python 스크립트 창에서 설치를 실행하려면 &apos;스크립트 인덱스&apos;의 Python 범주에서 jmputils.jpip를 참조하십시오.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

### Is Connected

**구문:** x = obj &lt;&lt; Is Connected

**설명:** 참고: 이 함수는 JMP 18부터 더 이상 사용되지 않으며, 항상 1을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = PythonConnection << Is Connected;
Show( x );

```

### JMP Name To Python Name

**구문:** Python Name = PythonConnection &lt;&lt; JMP Name To Python Name( JMP name )

**설명:** Python 변수 명명 규칙을 사용하여 JMP 변수 이름을 Python 변수 이름에 매핑합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
Python Name = PythonConnection << JMP Name To Python Name( a b c );
Show( Python Name );

```

### Reset

**구문:** PythonConnection &lt;&lt; Reset

**설명:** Reset the shared Python environment.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
pi = 3.1415927;
PythonConnection << Send( pi );
PythonConnection << Submit( "print(pi)" );
PythonConnection << Reset();
// will show error, pi not defined
PythonConnection << Submit( "print(pi)" );

```

### Send

**구문:** y = obj &lt;&lt; Send( name, &lt;Python Name( name )&gt; )

**설명:** 데이터를 Python으로 보냅니다. 여기서 name 인수는 다음 JMP 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 테이블 | 날짜)을 나타낼 수 있습니다.

**JMP추가된 버전:** 14

**Date**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Send( date );
PythonConnection << Submit( "print(date)" );

```

**예제 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Send( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Send File

**구문:** y = obj &lt;&lt; Send File( filename, &lt;Python Name( name )&gt; )

**설명:** 데이터 파일을 Python으로 보냅니다. 여기서 filename 인수는 Python으로 보낼 파일의 경로 이름을 지정하는 문자열입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
dtname = "$SAMPLE_DATA/Baseball.jmp";
PythonConnection << Send File( dtname );
PythonConnection << Submit( "print(Big_Class)" );
PythonConnection << Submit( "print(Baseball)" );

```

### Set

**구문:** y = obj &lt;&lt; Set( name, &lt;Python Name( name )&gt; )

**설명:** 데이터를 Python으로 보냅니다. 여기서 name 인수는 다음 JMP 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 테이블 | 날짜)을 나타낼 수 있습니다.

**JMP추가된 버전:** 14

**Date**

```jsl

Names Default To Here( 1 );

PythonConnection = Python Connect();
date = As Date( Today() );
PythonConnection << Set( date );
PythonConnection << Submit( "print(date)" );

```

**예제 1**

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
x = [1, 2, 3];
PythonConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
PythonConnection << Set( dt );
PythonConnection << Submit( "print(x)" );
PythonConnection << Submit( "print(dt)" );

```

### Submit

**구문:** obj &lt;&lt; Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**설명:** 명령문을 Python으로 전송합니다. 명령문은 문자열 값 또는 문자열 값 목록 형식일 수 있습니다. 선택적 echo() 파라미터의 기본값은 True입니다. echo 파라미터는 Python 소스의 로그 출력을 제어합니다. 논리적 True(1)는 소스를 로그에 출력하고 0은 로그에 출력하지 않습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
a = 200;
]\" );
getStr = PythonConnection << Get( str );
getNum = PythonConnection << Get( a );
Show( getStr, getNum );

```

### Submit File

**구문:** obj &lt;&lt; Submit File( path )

**설명:** path 인수에 지정된 파일을 사용하여 명령문을 Python으로 전송합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
PythonConnection = Python Connect();
PythonConnection << Submit File( "some_Python_source.py" );

```

