# Optimization



### Constrained Maximize

**구문:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({lowerLimitVector,upperLimitVector})

**설명:** {x1, x2, ...} 목록으로 지정된 함수 인수에 대해 선택적 선형 제약 조건을 사용하여 expr 표현식을 최대화하는 값을 찾습니다. x1, x2 등의 변수는 스칼라 또는 벡터일 수 있습니다. 각 변수 이름 뒤에 변수의 하한과 상한을 괄호로 묶어 지정해야 합니다. 또는 선택적 파라미터 <<SetVariableLimits()를 사용하여 지정해도 됩니다. Constrained Maximize 함수의 선택적 인수를 사용하면 선형 제약 조건, 최대 반복 수, 원하는 공차, 출력 상세 정보, 시작 값 및 최적화 변수 한계를 지정할 수 있습니다(예제 2 참조). 선형 제약 조건은 계수 행렬 mat_A 및 오른쪽 벡터 vec_b로 지정합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
/*Simple Example*/
f = Expr(
	-2 * x1 ^ 2 - 2 * x2 ^ 2 + 2 * x1 * x2 + 4 * x1 + 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Maximize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	-2 * x[1] ^ 2 - 2 * x[2] ^ 2 + 2 * x[1] * x[2] + 4 * x[1] + 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Maximize(
	f,
	{x},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Constrained Minimize

**구문:** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({low,high})

**설명:** {x1, x2, ...} 목록으로 지정된 함수 인수에 대해 선택적 선형 제약 조건을 사용하여 expr 표현식을 최소화하는 값을 찾습니다. x1, x2 등의 변수는 스칼라 또는 벡터일 수 있습니다. 각 변수 이름 뒤에 변수의 하한과 상한을 괄호로 묶어 지정해야 합니다. 또는 선택적 파라미터 <<SetVariableLimits()를 사용하여 지정해도 됩니다. Constrained Minimize 함수의 선택적 인수를 사용하면 선형 제약 조건, 최대 반복 수, 원하는 공차, 출력 상세 정보, 시작 값 및 최적화 변수 한계를 지정할 수 있습니다(예제 2 참조). 선형 제약 조건은 계수 행렬 mat_A 및 오른쪽 벡터 vec_b로 지정합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
/*Simple Example*/
f = Expr(
	2 * x1 ^ 2 + 2 * x2 ^ 2 - 2 * x1 * x2 - 4 * x1 - 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Minimize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	2 * x[1] ^ 2 + 2 * x[2] ^ 2 - 2 * x[1] * x[2] - 4 * x[1] - 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Minimize(
	f,
	{x},
	<<lessthanEQ( {A, b} ) /*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Desirability

**구문:** des = Desirability( yVector, dVector, y )

**설명:** 만족도 곡선을 반환합니다. 여기서 yVector는 3개의 입력 값으로 구성된 벡터이고, dVector는 각 입력 값에 해당하는 3개의 만족도 값이며, y는 만족도를 계산할 인수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
dvec = [0.1 0.9 0.1];
yvec = [1 5 10];
New Window( "Desirability",
	Graph Box(
		X Scale( 0, 12 ),
		Y Scale( 0, 1 ),
		Frame Size( 500, 400 ),
		Drag Marker( yvec, dvec );
		Y Function( Desirability( yvec, dvec, x ), x );
	)
);

```

### LPSolve

**구문:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, &lt;slackVars=0&gt; )

**설명:** 지정된 제약 조건이 있는 경우 목적 함수를 최소화하여 두 항목으로 구성된 목록을 반환합니다. 첫 번째 목록 항목 x에는 결정 변수(및 slackVars=1인 경우 slack 변수 값)가 포함됩니다. 두 번째 목록 항목 z에는 최적 목적 함수 값(있는 경우)이 포함됩니다. 처음 5개의 인수는 행렬입니다. A 인수는 제약 조건 계수 행렬입니다. b 인수는 제약 조건의 오른쪽 값 열입니다. c 인수는 목적 함수의 비용 계수 벡터입니다. L 및 U 인수는 각각 변수의 하한 및 상한입니다. neq, nle 및 nge 인수는 각각 등식 제약 조건, 작거나 같음 제약 조건 및 크거나 같음 제약 조건의 개수입니다. 제약 조건은 등식, 작거나 같음, 크거나 같음의 순서로 나열되어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
A = [5 -2 6, 2 4 0, 3 8 -4];
b = [17, 19, 14];
c = [9 6 -4];
L = [. 0 .];
U = [0 . .];
{x, z} = LPSolve( A, b, c, L, U, 1, 1, 1, 1 );
Show( x, z );

```

### Maximize

**구문:** Maximize( expr, {x1, x2, ...} );Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;hessian(), method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**설명:** {x1, x2, ...} 목록으로 지정된 함수 인수에 대해 expr 표현식을 최대화하는 값을 찾습니다. 각 인수 이름 뒤에 인수의 하한과 상한을 괄호로 묶어 지정할 수 있습니다. expr이 오목 함수가 아니면 Maximize가 전역 최대값 대신 지역 최대값을 찾을 수 있습니다. 이것이 문제가 되는 경우 여러 개의 시작 값을 사용하여 시도해 보십시오. 또한 Maximize는 연속형 2차 도함수를 사용하는 함수에서 가장 잘 작동합니다. Maximize 함수의 추가 인수를 사용하면 최대 반복 수 및 수렴 공차를 설정하고 최적화에 대한 자세한 내용을 볼 수 있습니다. 선택적 인수에 대한 자세한 내용을 보려면 "도움말 항목" 버튼을 클릭하십시오.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
/*Find the MLE for a Normal Distribution with a random sample of 3 observations*/
x = [3 4 5]; /* observed values*/ 
n = 3;
logDens = Expr(
	(-n / 2) * Log( 2 * Pi() * sigSq ) - Summation( i = 1, 3, ((x[i] - mu) ^ 2) ) / (2 * sigSq)
);
mu = 3;
sigSq = 1;/*initial values*/ 
{maxReached, iters, gradient, hessian} = Maximize( logDens, {mu, sigSq( 0, . )}, <<details( both ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
/*Simple example with all optional arguments*/ 
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Maximize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

### Minimize

**구문:** Minimize( expr, {x1, x2, ...} );Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;Hessian(), &lt;&lt;method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**설명:** {x1, x2, ...} 목록으로 지정된 함수 인수에 대해 expr 표현식을 최소화하는 값을 찾습니다. 각 인수 이름 뒤에 인수의 하한과 상한을 괄호로 묶어 지정할 수 있습니다. expr이 볼록 함수가 아니면 Minimize가 전역 최소값 대신 지역 최소값을 찾을 수 있습니다. 이것이 문제가 되는 경우 여러 개의 시작 값을 사용하여 시도해 보십시오. 또한 Minimize는 연속형 2차 도함수를 사용하는 함수에서 가장 잘 작동합니다. Minimize 함수의 추가 인수를 사용하면 최대 반복 수 및 수렴 공차를 설정하고 최적화에 대한 자세한 내용을 볼 수 있습니다. 선택적 인수에 대한 자세한 내용을 보려면 "도움말 항목" 버튼을 클릭하십시오.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
/*Nonlinear Sums of Squares Example*/
x = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
y = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
sseExpr = Expr(
	Summation( i = 1, 6, (y[i] - b1 * x[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objVal, iters, gradient, hessian} = Minimize(
	sseExpr,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
/*Simple example with some optional arguments*/
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Minimize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

**예제 4**

```jsl

Names Default To Here( 1 );
/*Example with gradient, hessian, and method(nr) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -10 ),
	<<Method( nr ),
	<<gradient(
		{Summation( i = 1, 6, -2 * xx[i] ^ b2 * (yy[i] - b1 * xx[i] ^ b2) ),
		Summation( i = 1, 6, 2 * (b1 * Ln( xx[i] ) * xx[i] ^ b2) * (b1 * xx[i] ^ b2 - yy[i]) )}
	),
	<<hessian(
		{{Summation( i = 1, 6, 2 * xx[i] ^ (2 * b2) ), Summation(
			i = 1,
			6,
			2 * Ln( xx[i] ) * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}, {Summation( i = 1, 6, 2 * b1 * Ln( xx[i] ) ^ 2 * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i]) )}}
	)
);

```

**예제 5**

```jsl

Names Default To Here( 1 );
/*Example with usNumericDeriv and method(sr1) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objValue, iter, gradient, hessian} = Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 ),
	<<Method( sr1 ),
	<<useNumericDeriv( True )
);

```

