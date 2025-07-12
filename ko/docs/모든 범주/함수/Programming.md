# Programming



## 함수

### Add Custom Functions

**구문:** Add Custom Functions({f1, f2, ...} | f)

**설명:** 스크립트 및 계산식 편집기에서 사용할 사용자 함수 목록을 정의합니다. 또한 이 명령은 목록을 환경에 추가합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );
mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );
Add Custom Functions( {myAdd, mySub} );

```

### As Boolean

**구문:** b = As Boolean( x )

**설명:** 표현식을 실행하고 부울 값을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
x = 45;
b = As Boolean( x > 2 );
Show( b );

```

### As Column

**구문:** y = :name;

y = dataTable:name;

y = As Column( name );

y = As Column( dataTable, name )

**설명:** 지정한 테이블 또는 현재 데이터 테이블의 지정한 열에 액세스합니다. 해당 열이 없거나 데이터 테이블을 찾을 수 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**구문:** y = As Constant( x )

**설명:** 표현식을 실행하여 계산된 후 변경되지 않는 상수 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant", Formula( Random Uniform() ) ),
	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
New Table( "As Constant Demo Table 2",
	Add Rows( 1000 ),
	New Column( "What's on Your Desktop?",
		"character",
		Formula(
			As Constant( xFiles = Files In Directory( "$Desktop" ) );
			iR = Row();
			If( iR <= N Items( xFiles ),
				xFiles[iR],
				"---"
			);
		)
	)
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	x = 2;
	y = 100;
	z = As Constant( x + y );
	x *= i;
	y /= i;
	Show( i, x + y, z );
);

```

### As Global

**구문:** y = ::name; y = As Global( name )

**설명:** 지정한 전역 변수에 액세스합니다. 또는 해당 전역 변수가 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
::ex = 23;
Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As List

**구문:** y = As List( matrix )

**설명:** 행렬의 목록 표현을 반환합니다. 다중 열 행렬은 Matrix 연산자의 예상 동작대로 목록의 목록(행당 하나씩)으로 변환됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
As List( [11 22 33, 44 55 66] );

```

### As Name

**구문:** y = As Name( s )

**설명:** 문자열을 이름으로 또는 문자열 목록을 이름 목록으로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:(As Name( "height" ))[3];

```

### As Namespace

**구문:** asns = As Namespace( ns )

**설명:** 지정한 네임스페이스에 액세스합니다. 해당 네임스페이스가 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ns = New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Root

**구문:** y = :::name; y = As Root( name )

**설명:** 지정된 루트 범위의 변수에 액세스합니다. 해당하는 루트 범위의 변수가 없으면 오류가 발생합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
::: ex = 23;
Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Scoped

**구문:** y = namespace:variable; y = As Scoped( namespace, variable )

**설명:** 지정한 변수에 액세스합니다. 해당 변수가 없으면 오류가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Here:z = 23.5;
As Scoped( Here, z );

```

### Associative Array

**구문:** y = Associative Array( {{key1, value1}, ...} );

y = Associative Array( keys, values )

**설명:** 사전 또는 해시 맵이라고도 하는 연관 배열을 생성합니다. 인수가 두 개인 형식에서 &apos;keys&apos;와 &apos;values&apos;는 목록, 행렬 또는 데이터 테이블 열이 될 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### Choose Closest

**구문:** Choose Closest(source string, {canonical strings...}, <Ignore Case(ignore=1|0)>, <Ignore Nonprintable(ignore=1|0)>, <Ignore Whitespace(ignore=1|0)>, <Max Edit Count(count)>, <Max Edit Ratio([0..1])>, <Min String Length(<count=3>)>, <Replace Unmatched(replace=0|1)>, <Unmatched Value(<value="">)>)

**설명:** 지정된 규칙 내에서 가장 근접한 문자열을 선택하여 반환합니다. 

기본적으로 대/소문자는 무시되며 "대/소문자 무시"를 사용하여 지정할 수 있습니다.

기본적으로 인쇄할 수 없는 문자는 무시되며 "인쇄할 수 없는 문자 무시"를 사용하여 지정할 수 있습니다.

기본적으로 공백은 무시되며 "공백 무시"를 사용하여 지정할 수 있습니다.

기본적으로 매칭 항목을 찾기 위해 문자를 변경할 수 없습니다.

	"최대 편집 횟수"를 사용하여 편집 가능 횟수를 제어합니다.

	"최대 편집 비율"을 사용하여 허용되는 변경 비율(원래 문자열의 문자 기준)을 제어합니다.

	지정된 경우 두 설정이 모두 적용됩니다.

기본적으로 3자 미만의 문자열은 매칭되지 않으며 "최소 문자열 길이"를 사용하여 다른 길이를 지정할 수 있습니다.

매칭되지 않은 문자열

	기본적으로 지정된 규칙 내에서 정준 문자열 매칭 항목이 없으면 소스 문자열이 반환됩니다.

	소스 문자열을 반환할지 여부를 지정하려면 "매칭되지 않는 항목 바꾸기"를 사용합니다.

	반환할 값을 지정하려면 "매칭되지 않음"을 사용합니다.

**JMP추가된 버전:** 15

**구두점 유지**

```jsl

Names Default To Here( 1 );
Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

**매칭되지 않음**

```jsl

Names Default To Here( 1 );
Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

**편집 가능**

```jsl

Names Default To Here( 1 );
Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

**편집하지 않고 문자열 중에서 선택**

```jsl

Names Default To Here( 1 );
Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

### Class Exists

**구문:** nsexists = Class Exists( class name )

**설명:** name 인수에 지정된 클래스가 있으면 1을 반환합니다. 그렇지 않으면 0이 반환됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
clexists = Class Exists( cl );
Show( clexists );
cl << Delete;
Delete Classes( "complex" );

```

### Clear Globals

**구문:** Clear Globals( < varname, ... > )

**설명:** 현재 정의된 모든 전역 기호의 값을 지웁니다. 정의된 기호는 남아 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Clear Globals();

```

### Clear Log

**구문:** Clear Log()

**설명:** 로그를 지웁니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Clear Log();

```

### Clear Symbols

**구문:** Clear Symbols( < varname, ... > )

**설명:** 현재 정의된 모든 기호의 값을 지웁니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Clear Symbols();

```

### Close Log

**구문:** Close Log()

**설명:** 로그 창을 닫습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Close Log();
Show( Is Log Open() );

```

### Define Class

**구문:** Define Class("class name", <Base Class{ "base class name", ... }>, <Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )>, { method* | member* | function* } )

**설명:** 새 클래스 정의

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( complex );

```

### Delete Classes

**구문:** Delete Classes( <Force( boolean )>, <class reference, ...> )

**설명:** 모든 클래스 정의 또는 하나 이상의 특정 클래스 정의를 삭제합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Show Classes();
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );
Show Classes();

```

### Delete Globals

**구문:** Delete Globals( < varname, ... > )

**설명:** 현재 정의된 모든 기호의 값을 지웁니다. 정의된 기호는 남아 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Delete Globals();

```

### Delete Namespaces

**구문:** Delete Namespaces( <Force( boolean )>, <namespace reference, ...> )

**설명:** 모든 네임스페이스 또는 하나 이상의 특정 네임스페이스를 삭제합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
Show Namespaces();
Delete Namespaces( nsaa, nsbb );
Show Namespaces();

```

### Delete Symbols

**구문:** Delete Symbols( < varname, ... > )

**설명:** 현재 정의된 모든 기호 및 해당 값을 삭제합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Delete Symbols();

```

### Eval

**구문:** y = Eval( x )

**설명:** 인수를 실행하고 결과를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Eval( Expr( 1 + 2 ) );

```

### Eval Insert

**구문:** y = Eval Insert( string, <startChar="^">, <endChar=startChar> )

**설명:** startChar/endChar 쌍으로 묶인 하위 문자열을 찾아 내부의 실행된 표현식으로 바꿉니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**구문:** Eval Insert Into( l_string, <startChar="^">, <endChar=startChar> )

**설명:** startChar/endChar 쌍으로 묶인 하위 문자열을 찾고 l_string을 바꿔 내부의 실행된 표현식으로 바꿉니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex = "Today is ^As Date( Today())^";
Eval Insert Into( ex );
ex;

```

### Eval List

**구문:** y = Eval List( list )

**설명:** 목록의 모든 항목이 실행된 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Eval List( {1 + 2, 3 + 4} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
x = 5;
y = 10;
Eval List( {x, y} );

```

### Exit

**구문:** Quit(<"No Save">); Exit(<"No Save">)

**설명:** JMP를 종료합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
If(
	New Window( "Exit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice."
);

```

### First

**구문:** y = First( x1, x2, ... )

**설명:** 각 인수를 실행하고 첫 번째 인수의 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
First( 11, 22 );

```

### Function

**구문:** y = Function( {arg1=val1, ...}, <{local1=val1, ...}>, expr )

**설명:** 지정된 인수, 기본값 및 선택적 지역 변수를 사용하여 함수를 정의합니다. 기본값이 포함된 인수는 함수 호출 시 선택 사항입니다. Return()이 함수의 스크립트 내에서 사용될 경우 Return() 명령어 내부의 표현식이 반환됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
exsqr = Function( {x}, x * x );
exsqr( 5 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

**예제 3**

```jsl

Names Default To Here( 1 );
posorneg = Function( {x},
	{},
	If(
		x > 0, Return( "positive" ),
		x == 0, Return( "zero" ),
		Return( "negative" )
	)
);
posorneg( -5.5 );

```

### Get Class Names

**구문:** Get Class Names( < <class reference>, ... > )

**설명:** 현재 정의된 모든 클래스의 이름 목록을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Class Names();
Show( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Classes

**구문:** Get Classes( < <class reference>, ... > )

**설명:** 모든 현재 정의된 클래스에 대한 참조 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Custom Functions

**구문:** Get Custom Functions(<{function 1 full name, function 2 full name, ...} | function full name>)

**설명:** 사용자 함수 목록을 가져옵니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
Get Custom Functions();

```

**예제 2**

```jsl

Names Default To Here( 1 );
Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Environment Variable

**구문:** value = Get Environment Variable( string )

**설명:** 운영 체제에서 지정된 환경 변수의 값을 반환합니다.



참고: Macintosh 운영 체제에서는 변수 이름의 대/소문자를 구분합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Environment Variable( "PATH" );

```

### Get Locale Setting

**구문:** value = Get Locale Setting( settingName )

**설명:** 소수점 구분 기호 같은 로케일 설정을 가져옵니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
Get Locale Setting( "Decimal Separator" );

```

### Get Log

**구문:** list = Get Log( <N> )

**설명:** 로그 창에서 행 목록을 반환합니다. 인수를 지정하지 않으면 로그의 모든 행이 반환됩니다. 숫자 인수 N이 양수이면 로그의 처음 N개 행이 반환됩니다. N이 음수이면 로그의 마지막 N개 행이 반환됩니다. N이 0이면 행이 반환되지 않습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
all contents = Get Log();
headcontents = Get Log( 10 );
tailcontents = Get Log( -5 );

```

### Get Namespace Names

**구문:** Get Namespace Names( < <namespace reference>, ... > )

**설명:** 현재 정의된 모든 네임스페이스의 이름 목록을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespace Names();
Show( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Namespaces

**구문:** Get Namespaces( < <namespace reference>, ... > )

**설명:** 현재 정의된 모든 네임스페이스에 대한 참조 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespaces();
Show( lns );
Clear Symbols( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Punctuation Characters

**구문:** Get Punctuation Characters(<Exclude Chars(chars) | Include Chars(chars)>)

**설명:** 단어를 구분하는 데 일반적으로 사용되는 구두점 문자가 포함된 문자열을 반환합니다. 여기에는 ,:;.?!\/#@&~()[]<>"*`%$+=^|{} 및 일반적인 일부 유니코드 구두점이 포함됩니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
Get Punctuation Characters();

```

**예제 2**

```jsl

Names Default To Here( 1 );
Get Punctuation Characters( Include Chars( "_" ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Collapse Whitespace(
	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " )
);

```

### Get Session Script

**구문:** Get Session Script( win1, ... )

**설명:** 지정된 창에 대한 세션 스크립트를 반환합니다. 세션 스크립트는 데이터 테이블, 스크립트 창, 저널 및 보고서를 포함하여 지정된 창을 다시 생성하는 JSL 표현식입니다. JSL 스크립트를 통해 생성된 보고서는 제한적으로 지원되며 표시 레이아웃만 다시 생성하려고 시도합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << RunScript( "Bivariate" );
Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**구문:** Get Whitespace Characters()

**설명:** 일반적으로 사용되는 모든 공백 문자가 포함된 문자열을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Whitespace Characters();

```

### Include

**구문:** y = Include( filepath, < <<Parse Only>, < <<New Context>, < <<Names Default to Here> )

**설명:** 지정된 파일의 JSL을 실행합니다. Parse Only가 지정된 경우 스크립트가 실행되는 대신 파싱됩니다. New Context가 지정된 경우 포함된 JSL이 고유한 네임스페이스에서 실행됩니다. 상위 스크립트와 포함된 스크립트 모두 전역 네임스페이스를 사용할 경우에는 New Context와 Names Default to Here를 모두 지정하여 이름 충돌을 방지하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**구문:** y = Include File List()

**설명:** 실행 시 포함된 파일 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
y = Include File List();

```

### Is Log Open

**구문:** Is Log Open()

**설명:** 로그 창이 열려 있는지 여부를 나타내는 결과를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
If( Is Log Open(),
	Close Log()
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
If( !Is Log Open(),
	Open Log()
);

```

### Length

**구문:** l = Length( x )

**설명:** 지정된 문자열(문자 수), 목록(항목 수), 연관 배열(키의 수), Blob(바이트), 행렬(요소 수) 또는 네임스페이스/클래스(함수 및 변수의 수)의 길이를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Length( "Café" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### List

**구문:** y = {a, b, ...}; y = List( a, b, ... )

**설명:** 항목을 실행하지 않고 항목 목록을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
{1, 2 + 3, [11 22]};

```

### Local

**구문:** y = Local( {name=value, ...}, expression )

**설명:** 이름을 지역 변수로 확인합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Local( {a = 1, b},
	b = 2;
	a + b;
);

```

### Local Here

**구문:** y = Local Here( expression )

**설명:** 지역 Names Default To Here(1)을 사용하여 표현식을 실행합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
y = Local Here(
	a = 1;
	b = 2;
	c = a + b;
	c;
);

```

### Lock Globals

**구문:** Lock Globals( name, ... )

**설명:** 지정된 전역 이름을 수정하거나 Clear Globals 함수로 지울 수 없도록 잠급니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Lock Symbols

**구문:** Lock Symbols( name, ... )

**설명:** 지정된 전역 이름을 수정하거나 Clear Symbols 함수로 지울 수 없도록 잠급니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Log Capture

**구문:** string = Log Capture( expr )

**설명:** expr 인수를 실행하고 JMP 로그 창에 나타날 출력을 캡처한 다음 문자열로 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
"captured:" || Log Capture(
	For( i = 1, i <= 3, i++,
		Write( Char( i ) );
		Write( " " );
	)
);

```

### Map Value

**구문:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, <Unmatched(value)>)

**설명:** 초기값을 평가하고 매핑된 결과 또는 기본값을 반환합니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
Map Value( "celry", {"celry", "celery"} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Map Value( 10, {10, "celery", 11, "banana"} );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Method

**구문:** m = Method( { arg1 = val1, ... }, expression* )

**설명:** 클래스 내에 메서드를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( "complex" );

```

### Mimic

**구문:** mimic obj = Mimic(Box|PlatformRef)

**설명:** Creates a GUI automation object that mimics a real user. ONLY AVAILABLE IN INTERNAL JMP BUILDS.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
outline = Report( obj )[Outline Box( 1 )];
mc = Mimic( obj );
mc << Mark( outline );
mc << Mouse Click( Offset( TopLeft( outline ), [25 15] ) );

```

### N Items

**구문:** y = N Items( x )

**설명:** 목록의 항목 수, 행렬의 요소 수, 연관 배열의 키의 수, 네임스페이스의 함수 및 변수의 수, 클래스 개체의 메서드 및 변수의 수 또는 표시 상자의 하위 항목 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
N Items( {1, 2 + 3, [11 22]} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
N Items( ["a" => 10, "b" => 3, => 0] );

```

**예제 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### Names Default To Here

**구문:** Names Default To Here( boolean )

**설명:** 확인되지 않은 이름이 저장되는 위치(전역/지역(0) 또는 Here: 네임스페이스(1))를 결정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
/* Variable x will be stored in the Here: namespace by default */x = 1;
Show( x );

```

### Namespace

**구문:** ns = Namespace( namespace reference )

**설명:** name 인수로 지정된 네임스페이스에 대한 참조를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
ns = Namespace( "complex" );
Show( ns );
ns << Delete;

```

### Namespace Exists

**구문:** nsexists = Namespace Exists( namespace reference )

**설명:** name 인수에 지정된 네임스페이스가 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ns = New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
nsexists = Namespace Exists( ns );
Show( nsexists );
ns << Delete;

```

### New Custom Function

**구문:** f=New Custom Function(namespace, name, function definition)

**설명:** 새 사용자 함수 개체를 생성합니다. 사용자 함수는 스크립트 편집기에서 색상이 적용되고 스크립트 인덱스에 표시됩니다. 사용자 함수에 필요한 정보는 네임스페이스(전역 함수와의 충돌을 방지하기 위해), 이름 및 함수 정의입니다. 메시지를 사용하여 기타 도움말 정보를 추가할 수 있습니다. JMP 환경에 새 함수를 게시하려면 Add Custom Functions 명령을 사용하십시오.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
/*Create a custom function that can be used as a format*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Format Function",
		Function( {inches},
			Char( inches ) || " in"
		),
		<<Custom Format Category( "Custom" ), 

	)}
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
/*Create a custom function that can be used as a transform*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Transform Function",
		Function( {inches},
			inches * 2.54
		),
		<<Transform Category( "Custom" ), 

	)}
);

```

### New Namespace

**구문:** ns = New Namespace( <name>, <list of expressions> )

**설명:** name 인수에 지정된 이름으로, 또는 name이 지정되지 않은 경우에는 익명 이름으로 새 네임스페이스를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ns = New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
Show( ns );
ns << Delete;

```

### New Object

**구문:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**설명:** 클래스의 인스턴스 개체를 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
cl << Delete;
Delete Classes( "complex" );

```

### Open Log

**구문:** Open Log( <bring window to top> )

**설명:** 로그 창을 엽니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Open Log();
Show( Is Log Open() );

```

**예제 2**

```jsl

Names Default To Here( 1 );
/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

```

### Parameter

**구문:** y = Parameter( {name=value, ...}, model expression )

**설명:** 비선형 플랫폼의 모형에 대한 계산식 모수를 정의합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Parameter( {a = 1}, a + 1 );

```

### Parse

**구문:** y = Parse( s )

**설명:** 문자열을 파싱하고 결과 JSL 표현식을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Parse( "x+y" );

```

### Print

**구문:** Print( x, ... )

**설명:** 인수 값을 한 줄에 하나씩 로그에 표시합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Print( 355 / 113, Pi() );

```

### Quit

**구문:** Quit(<"No Save">); Exit(<"No Save">)

**설명:** JMP를 종료합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
If(
	New Window( "Quit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice."
);

```

### Recode

**구문:** recode(string|number|list, {<transform>, ...}, <Multiple Response (Separator(sepChar))>, <By Word(Delimiters(<chars>)>)

**설명:** 나열된 변환을 입력 값에 적용하고 결과를 반환합니다. &apos;다중 반응&apos; 및 &apos;단어별&apos; 옵션은 제공된 문자 데이터를 더 작은 입력 값으로 분할합니다. 입력 값이 결정되면 해당 값에 개별적으로 변환이 적용됩니다.

명령이 실행되는 동안 특수 JSL 변수가 채워집니다.

	_rcNow는 이전 변환 후 입력의 현재 값입니다.

	_rcOrig는 입력의 원래 값입니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
Recode( "27513-0000", {Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Recode(
	"A B C",
	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},
	By Word
);

```

### Recurse

**구문:** y = Recurse( x1, ... )

**설명:** 포함하는 함수를 호출합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex rev = Function( {s},
	If( Length( s ) <= 1,
		s,
		Recurse( Substr( s, 2 ) ) || Left( s, 1 )
	)
);
ex rev( "abcd" );

```

### Remove Custom Functions

**구문:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**설명:** 환경에서 사용자 함수 목록을 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Save Log

**구문:** f = Save Log( <path> )

**설명:** 로그의 내용을 지정한 파일 위치에 씁니다. 쓰기에 성공하면 생성된 파일의 이름을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Send

**구문:** r = obj << msg( args ); r = obj << msg; r = Send( obj, msg )

**설명:** 개체에 메시지(표현식 형식)를 보냅니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Set Environment Variable

**구문:** value = Set Environment Variable( string, < string> )

**설명:** 운영 체제에서 지정된 환경 변수의 값을 설정합니다. 두 번째 인수가 없거나 빈 문자열일 경우 환경 변수가 삭제됩니다.



참고: Macintosh 운영 체제에서는 변수 이름의 대/소문자를 구분합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Set Environment Variable( "PATH", "some path to a directory" );

```

### Show

**구문:** Show( x, ... )

**설명:** 로그에 한 줄에 하나씩 인수의 이름 및 값을 표시합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show( 355 / 113, Pi() );

```

### Show Classes

**구문:** Show Classes( < <class name | class reference>, ... > )

**설명:** 모든 사용자 정의 클래스의 내용을 표시합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
Show Classes();

```

### Show Globals

**구문:** Show Globals()

**설명:** 현재 정의된 모든 전역 기호 및 해당 값을 나열합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show Globals();

```

### Show Namespaces

**구문:** Show Namespaces( < <namespace reference>, ... > )

**설명:** 모든 사용자 정의 네임스페이스(명명된 네임스페이스 및 익명 네임스페이스 모두)의 내용을 표시합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
Show Namespaces( "complex" );
Delete Namespaces( "complex" );

```

### Show Symbols

**구문:** Show Symbols()

**설명:** 현재 정의된 모든 기호 및 해당 값을 나열합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show Symbols();

```

### Sort List

**구문:** y = Sort List( x )

**설명:** 항목을 오름차순으로 정렬하여 목록 x의 복사본을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**구문:** Sort List Into( x )

**설명:** 항목을 오름차순으로 정렬하여 목록 x를 수정합니다. x 인수는 변수여야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Throw

**구문:** Throw(<message>, <Boolean>)

**설명:** 실행을 Try()로 둘러싼 형태로 전환합니다. 그렇지 않으면 스크립트 실행이 중지됩니다. message이(가) 감탄 부호로 시작하면 치명적 오류이므로 Try()로 catch할 수 없습니다. 두 번째 인수는 역추적을 포함하기 위한 선택적 부울입니다.

**JMP추가된 버전:** 버전 14 이전

**Try-Catch**

```jsl

Names Default To Here( 1 );
Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

**역추적**

```jsl

Names Default To Here( 1 );
Throw( "A line number is included in this error", 1 );

```

**치명적 오류 Throw**

```jsl

Names Default To Here( 1 );

Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );
Print( "AFTER TRY message not reached" );

```

### Try

**구문:** y = Try( expr, <catchExpr> )

**설명:** 실행함으로써 Throw() 또는 내부 예외가 발생하지 않으면 실행하고 expr 인수를 반환합니다. 이 경우 catchExpr에 대한 실행이 반환됩니다. catchExpr으로 exception_msg를 사용하면 오류에 대한 자세한 정보가 포함된 목록이 반환됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Try( Sqrt( "s" ), "invalid" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Try( Sqrt( "s" ), exception_msg );

```

### Type

**구문:** y = Type( x )

**설명:** x 인수의 값 유형을 명명하는 문자열을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Type( [1 2 3] );

```

### Unlock Globals

**구문:** Unlock Globals( name, ... )

**설명:** 지정된 전역 이름을 수정하거나 Clear Globals 함수로 지울 수 있도록 잠금 해제합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Unlock Symbols

**구문:** Unlock Symbols( name, ... )

**설명:** 지정된 전역 이름을 수정하거나 Clear Symbols 함수로 지울 수 있도록 잠금 해제합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Wait

**구문:** Wait( <x> )

**설명:** 실행을 계속하기 전에 x초 동안 대기합니다. x의 기본값은 3초입니다. x가 0 이상이면 JMP에서 대기 외에 운영 체제 이벤트(예: 화면 그리기) 및 보류 중인 콜백(예: 계산식 실행)을 완료합니다. x가 0 미만이면 계속하기 전에 화면 그리기 및 보류 중인 OS 이벤트만 완료되는 것으로 확인됩니다.

**JMP추가된 버전:** 버전 14 이전

**OS 이벤트**

```jsl

Names Default To Here( 1 );
Wait( -1 ); // Wait for OS events

```

**단순**

```jsl

Names Default To Here( 1 );
Wait( 1.5 );

```

**콜백**

```jsl

Names Default To Here( 1 );
Wait( 0 ); // Wait for OS events and callbacks

```

### Watch

**구문:** w = Watch( all|name1, ... )

**설명:** Global, Here 및 Local 네임스페이스의 변수와 해당 값을 보여 주는 창을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
x = 1;
y = 2;
z = "abc";
w = Watch( all );
Wait( 5 );
x = x * 5;
y = y / 25;
z = z || "def";
Wait( 5 );
w << close Window();

```

### Where

**구문:** Where( <dt>, clause )

**설명:** 지정된 where 절과 매칭되는 인덱스(대개 행 번호)를 반환합니다. 선택적 dt 인수는 실행 중에 Current Data Table을 변경합니다. 이 절은 JMP에서 데이터 필터를 사용하여 작성하는 경우가 많습니다. 보통 이 방법은 Loc, <<Get Rows Where 또는 <<Select Where를 사용하는 것보다 빠릅니다. 실행 중에 절이 시퀀스나 기호를 수정하는 경우 동작이 정의되지 않습니다.

**JMP추가된 버전:** 18

**기타**

```jsl

Names Default To Here( 1 );
xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

**열**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

**열 함수**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );
dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

**행 상태**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

```

**행렬/목록**

```jsl

Names Default To Here( 1 );
xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

### Wild

**구문:** Wild()

**설명:** 임의 표현식과 매칭되는 와일드카드 위치(표현식 패턴에서만 사용됨)를 나타냅니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**구문:** Wild List()

**설명:** 임의 항목과 매칭되는 일련의 와일드카드 인수(표현식 패턴에서만 사용됨)를 나타냅니다

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Write

**구문:** Write( x, ... )

**설명:** 지정한 값을 인용 부호, 공백 또는 줄바꿈을 추가하지 않고 로그에 표시합니다. Print()와 유사합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

