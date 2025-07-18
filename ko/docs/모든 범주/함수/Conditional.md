# Conditional



### And

**구문:** y = x1 & x2; y = And( x1, x2, ... )

**설명:** 모든 인수의 논리적 AND를 반환합니다. 모든 인수가 0이 아니면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

1 < 2 & 3 < 4;

```

### AndMZ

**구문:** y = AndMZ( x1, x2, ... )

**설명:** 결측값을 0으로 처리하여 모든 인수의 논리적 AND를 반환합니다. 만일 모든 인수가 0이 아니면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

AndMZ( 1 < 2, 3 < 4 );

```

### Break

**구문:** Break()

**설명:** For 또는 While 루프 내의 제어 흐름에서 중단을 야기합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Choose

**구문:** y = Choose( i, expr1, expr2, ..., exprElse )

**설명:** i번째 expr 인수를 실행하고 반환하거나 i번째 expr 인수가 없는 경우 exprElse 인수를 실행하고 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Continue

**구문:** Continue()

**설명:** For 또는 While 루프 내의 제어 흐름에서 다음 반복을 계속합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Filter Each

**구문:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**설명:** For Each 함수가 수행하는 모든 작업을 수행하고 부울 값 결과에 따라 원래 컨테이너에서 필터링된 값 목록도 반환합니다. 결과 유형은 입력 컨테이너 유형과 매칭됩니다. Matrix 입력의 경우 행렬 크기를 알 수 없으므로 행 벡터 행렬이 반환됩니다.

**JMP추가된 버전:** 16

#### Associative Array

```jsl

values = Filter Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value > 6 );
Show( values );

```

#### Expression

```jsl

values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ), Mod( value, 2 ) == 0 );
Show( values );

```

#### List

```jsl

values = Filter Each( {x}, {0, -5, 2, -10, 4}, x > 0 );
Show( values );

```

#### Matrix

```jsl

values = Filter Each( {x, i}, 100 :: 120, i > 10 );
Show( values );

```

### For

**구문:** For( initExpr, whileExpr, nextExpr, bodyExpr )

**설명:** initExpr을 한 번 실행하고 whileExpr 값이 0이 아니면 whileExpr, bodyExpr 및 nextExpr을 반복적으로 실행합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

s = "";
For( i = 1, i < 10, i++,
	s ||= " " || Char( i )
);
Trim( s );

```

### For Each

**구문:** For Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**설명:** 각 반복에서 값, 요소 또는 키를 제공하여 목록, 행렬, 연관 배열 또는 표현식 컨테이너를 반복합니다. 각 반복에 인덱스 번호도 사용할 수 있습니다. 연관 배열 컨테이너의 경우 두 항목 목록을 사용하여 키와 값에 액세스할 수 있습니다. 행렬 컨테이너의 경우 기본적으로 선형 인덱스가 제공되지만 두 항목 목록을 사용하여 행 및 열 인덱스에 액세스할 수 있습니다. 이러한 기호는 기본 제공 로컬 블록과 함께 루프 본문 내에만 제공됩니다. 첫 번째 반복 기호가 설정된 후 초기화되는 로컬 목록도 제공할 수 있습니다.

**JMP추가된 버전:** 16

#### Across

```jsl


// Across multiple containers
x = {1, 3};
y = {2, 4};
For Each( {{a, b}, index}, Across( x, y ), Show( a, b, index ) );

// Across list of containers
xy = {{1, 3}, {2, 4}};
For Each( {{a, b}, index}, Across( xy ), Show( a, b, index ) );

```

#### Across - Count

```jsl


list1 = {1, 3, 5, 7, 9};
list2 = {2, 4}; 

Write( "\!N===Longest [default]===" );
For Each( {{l1, l2}}, Across( list1, list2, Count( "Longest" ) ), Show( l1, l2 ) );

Write( "\!N===Shortest===" );
For Each( {{s1, s2}}, Across( list1, list2, Count( "Shortest" ) ), Show( s1, s2 ) );

Write( "\!N===N===" );
For Each( {{n1, n2}}, Across( list1, list2, Count( 7 ) ), Show( n1, n2 ) );

Write( "\!N===Enforce Equal===" );
Try(
	For Each( {values}, Across( list1, list2, Count( "Enforce Equal" ) ), Show( values ) ),
	Print( "Error occurred" )
);

```

#### Associative Array

```jsl

For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10], Show( key, value, index ) );

```

#### Expression

```jsl

For Each( {value, index}, Expr( MyExpr( 10, 20, 30 ) ), Show( value ) );

```

#### List

```jsl

For Each( {value, index}, {10, 20, 30}, Show( value, index ) );

```

#### Matrix

```jsl

For Each( {element, {row, col}}, 10 :: 15, Show( element, row, col ) );

```

#### 행렬 - 선형 인덱스

```jsl

For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

### For Each Row

**구문:** y = For Each Row( &lt;dt&gt;, body )

**설명:** 현재 데이터 테이블의 각 행에 대해 인수에 있는 표현식을 반복적으로 실행합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### If

**구문:** y = If( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**설명:** 각 인수 쌍의 첫 번째 인수를 평가하고 결과가 0이 되지 않는 첫 번째 condition 인수에 해당하는 result 표현식의 평가 결과를 반환합니다. condition 인수는 순서대로 평가됩니다. condition 인수가 모두 0이 되면 선택적인 elseResult가 평가된 후 그 결과가 반환됩니다. elseResult가 지정되지 않은 경우 조건이 모두 true가 아니면 결측값이 반환됩니다. condition 인수가 모두 결측값이 되면 결측값이 반환됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### IfMZ

**구문:** y = IfMZ( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**설명:** 각 인수 쌍의 첫 번째 인수를 평가하고 결과가 0이 되지 않는 첫 번째 condition 인수에 해당하는 result 표현식의 평가 결과를 반환합니다. condition 인수는 순서대로 평가됩니다. condition 인수가 모두 0 또는 결측값이 되면 선택적인 elseResult가 평가된 후 그 결과가 반환됩니다. elseResult가 지정되지 않은 경우 조건이 모두 true가 아니면 결측값이 반환됩니다. IfMZ()는 평가되는 condition 인수의 결측값이 0으로 처리되는 If()와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

x = 1;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( If( x == 1, 10, x == 2, 20, 30 ) );

```

### IfMax

**구문:** y = IfMax( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**설명:** 인수의 모든 쌍을 비교하여 가장 큰 인수에 해당하는 결과를 반환합니다. 동률이 존재하면 첫번째 최대값에 해당하는 결과를 반환합니다. 비교를 위한 모든 인수가 결측이면 마지막 결과를 반환합니다. 비교를 위한 인수의 표현식 결과는 숫자이어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMin

**구문:** y = IfMin( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**설명:** 인수의 모든 쌍을 비교하여 가장 작은 인수에 해당하는 결과를 반환합니다. 동률이 존재하면 첫번째 최소값에 해당하는 결과를 반환합니다. 비교를 위한 모든 인수가 결측이면 마지막 결과를 반환합니다. 비교를 위한 인수의 표현식 결과는 숫자이어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### Interpolate

**구문:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**설명:** x가 사이에 있고 해당 yi 인수를 선형으로 보간하는 xi 인수를 찾습니다. xi 인수는 순서대로 지정해야 합니다.

**JMP추가된 버전:** 버전 14 이전

#### 예제 1

```jsl


New Window( "Interpolate",
	window:x = (2 :: 9) * 10;
	window:y = 50 + Sin( (2 :: 9) ) * 40;
	Graph Box(
		Pen Color( "blue" );
		Marker( window:x, window:y );
		Y Function( Interpolate( a, window:x, window:y ), a );
	);
)
;

```

#### 예제 2

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

#### 예제 3

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

#### 예제 4

```jsl


xd = Transpose( Index( 1, 6 * Pi(), 0.3 ) );
yd = Sin( xd );
                                    
xd2 = xd + 0.15;
yd2 = Interpolate( xd2, xd, yd );
                                    
New Window( "Interpolated values are blue",
	Graph Box(
		X Scale( 1, 6 * Pi() ),
		Y Scale( -1, 1 ),
		For( i = 0, i < N Rows( xd ), i++,
			Pen Color( "red" );
			Circle( {xd[i], yd[i]}, 0.01 );
			Pen Color( "blue" );
			Circle( {xd2[i], yd2[i]}, 0.01 );
		)
	)
);

```

### Is Associative Array

**구문:** y = Is Associative Array( x )

**설명:** x 인수가 연관 배열이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Is Associative Array( [1 => 2] );

```

### Is Class

**구문:** isns = Is Class( class reference )

**설명:** class 인수가 클래스이면 1을 반환합니다. 그렇지 않으면 0이 반환됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

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
iscl = Is Class( cl );
Show( iscl );
cl << Delete;
Delete Classes( "complex" );

```

### Is Empty

**구문:** y = Is Empty( name )

**설명:** 변수가 정의되지 않았거나 Empty() 값을 포함하고 있으면 1을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

#### 예제 1

```jsl

Is Empty( x );

```

#### 예제 2

```jsl

x = Empty();
Is Empty( x );

```

#### 예제 3

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
If( Is Empty( dt ),
	Print( "There is no open data table." ),
	Print( "This data table is open: " || (dt << Get Name()) )
);
Wait( 1 );
Close( DT, "nosave" );
Wait( 1 );
If( Is Empty( dt ),
	Print( "There is no open data table." ),
	Print( "This data table is open: " || (dt << Get Name()) )
);

```

### Is Expr

**구문:** y = Is Expr( x )

**설명:** x 인수가 표현식이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Is Expr( Expr( x ) );

```

### Is List

**구문:** y = Is List( x )

**설명:** x 인수가 목록이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Is List( {1, 2, 3} );

```

### Is Name

**구문:** y = Is Name( x )

**설명:** x 인수가 이름이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Is Name( Name Expr( n ) );

```

### Is Namespace

**구문:** isns = Is Namespace( namespace reference )

**설명:** namespace 인수가 네임스페이스면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

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
isns = Is Namespace( ns );
Show( isns );
ns << Delete;

```

### Is Number

**구문:** y = Is Number( x )

**설명:** x 인수가 숫자이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Is Number( 213 );

```

### Is Scriptable

**구문:** tf = Is Scriptable( x )

**설명:** x 인수가 스크립트 가능 개체면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is String

**구문:** y = Is String( x )

**설명:** x 인수가 문자열이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Is String( "abc" );

```

### Match

**구문:** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**설명:** x와 동일한 첫 번째 vN 인수에 따라 exprN 인수를 실행하고 반환하거나 x와 동일한 값이 없는 경우 exprElse 인수를 실행하고 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Match( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MatchMZ

**구문:** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**설명:** x와 동일한 첫 번째 vN 인수에 따라 exprN 인수를 실행하고 반환하거나 x와 동일한 값이 없는 경우 exprElse 인수를 실행하고 반환합니다. 결측값이 0으로 처리된다는 점을 제외하면 MatchMZ() 함수는 Match() 함수와 동일합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

MatchMZ( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### Not

**구문:** y = !x; y = Not( x )

**설명:** x의 논리적 NOT을 반환합니다. x가 0이면 1을 반환하고, x가 결측값이면 결측값을 반환하며, 그 외에는 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

!(1 < 2);

```

### Or

**구문:** y = x1 | x2; y = Or( x1, x2, ... )

**설명:** 모든 인수의 논리적 OR을 반환합니다. 임의 인수가 0이 아니면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

1 < 2 | 3 < 2;

```

### OrMZ

**구문:** y = OrMZ( x1, x2, ... )

**설명:** 결측값을 0으로 처리하여 모든 인수의 논리적 OR를 반환합니다. 만일 인수가 0이 아니면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

OrMZ( 1 < 2, 3 < 2 );

```

### Return

**구문:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**설명:** 사용자 정의 함수에서 표현식 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

#### 예제 1

```jsl

vr = Function( {},
	x = 2;
	y = 4;
	Return( Char( x * y ) );
);
lvr = Function( {},
	x = 2;
	y = 4;
	For( i = 1, i < 5, i++,
		If( i == 3,
			Return( i * x * y )
		)
	);
);
nr = Function( {}, Return() );
vrv = vr();
lvrv = lvr();
nrv = nr();
Show( vrv, lvrv, nrv );

```

#### 예제 2

```jsl

f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

```

### Step

**구문:** y = Step( x, x1, y1, x2, y2, ... )y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**설명:** xi가 x 인수보다 작거나 같음을 충족하는 가장 큰 xi 값에 해당하는 yi 인수를 반환합니다. xi 인수는 순서대로 지정해야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Step( 2.5, [1 2 3], [15, 20, 30] );

```

### Stop

**구문:** Stop()

**설명:** JSL 스크립트 실행을 즉시 중단합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Transform Each

**구문:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**설명:** For Each 함수가 수행하는 모든 작업을 수행하고 각 반복의 결과가 포함된 컨테이너도 반환합니다. 기본적으로 입력 컨테이너 유형과 매칭되는 컨테이너를 반환하지만 Output 인수를 사용하여 변경할 수 있습니다. List 또는 Expression 출력의 경우 결과가 없으면 Empty()가 사용되고, Matrix 출력의 경우 결과가 없거나 결과가 숫자가 아니면 숫자 결측값이 사용됩니다. Associative Array 출력의 경우에는 결과가 없으면 키가 존재하지 않습니다. Continue()를 사용하면 해당 반복에 대해 값을 반환하지 않는 것과 같습니다.

**JMP추가된 버전:** 16

#### Associative Array

```jsl

values = Transform Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value + 1 );
Show( values );

```

#### Expression 1

```jsl

ex = Transform Each( {value}, Expr( MyExpr( 10, 20, 30 ) ), value + 1 );
Show( ex );

```

#### Expression 2

```jsl

// Find Functions defined in a script
parsedScript = Include( "$SAMPLE_SCRIPTS/BayesPlotForFactors.jsl", <<ParseOnly );
functionNames = Transform Each( {statement}, Name Expr( parsedScript ), Output( "List" ), {lhs, rhs},
	If( Head( statement ) == Expr( Assign() ),
		rhs = Arg( statement, 2 );
		If( !Is Empty( rhs ) & Contains( {Function()}, Head( rhs ) ),
			Head Name( Arg( statement, 1 ) ),
			Empty()
		);
	,
		Empty()
	)
);
functionNames = Filter Each( {f}, functionNames, !Is Empty( f ) );
Show( functionNames );

```

#### List

```jsl

values = Transform Each( {value}, {10, 20, 30}, value + 5 );
Show( values );

```

#### Matrix

```jsl

values = Transform Each( {element}, 10 :: 15, element + 5 );
Show( values );

```

#### Output

```jsl


Write( "\!N===List===" );
lst = Transform Each( {value}, [10, 20, 30], Output( "List" ), value + 1 );
Show( lst );

Write( "\!N===Matrix===" );
mat = Transform Each( {value}, {10, 20, 30}, Output( "Matrix" ), value + 1 );
Show( mat );

Write( "\!N===Associative Array===" );
aa = Transform Each( {value}, {10, 20, 30}, Output( "Associative Array" ), value + 1 );
Show( aa );

Write( "\!N===Expression===" );
ex = Transform Each( {value}, {10, 20, 30}, Output( "Expression", "My Values" ), value + 1 );
Show( ex );

```

### While

**구문:** While( testExpr, bodyExpr )

**설명:** testExpr을 실행한 값이 0이 아니면 testExpr 및 bodyExpr 표현식을 반복적으로 실행합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

i = 1;
s = "";
While( i < 1000,
	s ||= " " || Char( i );
	i *= 2;
);
s;

```

### Zero Or Missing

**구문:** y = Zero Or Missing( x )

**설명:** 결측값을 0으로 처리하여 x의 논리적 NOT을 반환합니다. x가 결측값이거나 0이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Zero Or Missing( 1 < 2 );

```

