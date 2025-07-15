# R Connection



## 연결된 생성자

### R Connect

**구문:** RConnection = R Connect()

**설명:** R 연결 스크립트 가능 개체를 반환합니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

## 항목 메시지

### Control

**구문:** obj &lt;&lt; Control( Echo( Boolean ) )

**설명:** R의 제어 옵션을 변경합니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Control( Echo( 0 ) );
RConnection << Submit( "rnorm(10)" );

```

### Disconnect

**구문:** obj &lt;&lt; Disconnect

**설명:** JMP 19에서 더 이상 사용되지 않으며 효과가 없습니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Disconnect;

```

### Execute

**구문:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements )

**설명:** 입력 목록을 보내고 명령문을 실행하고 출력 목록을 반환합니다.

```jsl

Names Default To Here( 1 );

RConnection = R Connect();
a = "abcdef";
d = 3.1415927;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = RConnection << Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### Get

**구문:** y = obj &lt;&lt; Get( name )

**설명:** R에서 데이터를 반환합니다. name 인수는 R 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 프레임) 중 하나를 나타낼 수 있습니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x1 = [1, 2, 3];
RConnection << Set( x1 );
x2 = RConnection << Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
RConnection << Set( dt1 );
dt2 = RConnection << Get( dt1 );
Close( dt1, No Save );

```

### Get Graphics

**구문:** R graphics = obj &lt;&lt; Get Graphics( format )

**설명:** JMP 19에서 더 이상 사용되지 않으며 효과가 없습니다. 대신 장치를 png("r_plot.png")와 같은 파일 이름으로 설정한 후 파일을 열어 이미지를 검색합니다. 이 옵션은 JMP 20에서 제거될 예정입니다. 아래 코드에서 해결 방법을 확인하십시오.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
RConnection << Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Get Version

**구문:** version = obj &lt;&lt; Get Version

**설명:** 현재 연결에 사용된 R의 버전 번호를 반환합니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
version = RConnection << Get Version;
Show( version );

```

### Is Connected

**구문:** x = obj &lt;&lt; Is Connected

**설명:** 활성 R 연결이 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

### JMP Name To R Name

**구문:** Rname = JMP Name To R Name( JMP name )

**설명:** R 변수 명명 규칙을 사용하여 JMP 변수 이름을 R 변수 이름에 매핑합니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RName = RConnection << JMP Name To R Name( a b c );
Show( RName );

```

### Send

**구문:** y = obj &lt;&lt; Send( name, &lt;R Name( name )&gt; )

**설명:** 데이터를 R로 보냅니다. name 인수는 JMP 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 테이블) 중 하나를 나타낼 수 있습니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = [1, 2, 3];
RConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Send( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Send File

**구문:** y = obj &lt;&lt; Send File( filename, &lt;R Name( name )&gt; )

**설명:** 데이터 파일을 R로 보냅니다. 여기서 filename 인수는 R로 보낼 파일의 경로 이름을 지정하는 문자열입니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Disconnect;
dtname = "$SAMPLE_DATA/Baseball.jmp";
RConnection << Send File( dtname );

```

### Set

**구문:** y = obj &lt;&lt; Set( name, &lt;R Name( name )&gt; )

**설명:** 데이터를 R로 보냅니다. name 인수는 JMP 데이터 유형(숫자 | 문자열 | 행렬 | 목록 | 데이터 테이블) 중 하나를 나타낼 수 있습니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = [1, 2, 3];
RConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Set( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Submit

**구문:** obj &lt;&lt; Submit( statements )

**설명:** 명령문을 R로 전송합니다. 명령문은 문자열 값 또는 문자열 값 목록 형식일 수 있습니다.

```jsl

Names Default To Here( 1 );

RConnection = R Connect();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
code =
"\[
x <- rnorm(1000)
hx <- hist(x, breaks=100, plot=FALSE)
png("IMG_PATH")
plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))
dev.off()
x <- rnorm (100)
y <- x**2 + rnorm (100)
summary(y)
]\";
// substitue portable path into R code
r_code = Substitute( code, "IMG_PATH", img_path );
RConnection << Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Submit File

**구문:** obj &lt;&lt; Submit File( path )

**설명:** path 인수에 지정된 파일을 사용하여 명령문을 R로 전송합니다.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Submit File( "file containing R source." );

```

