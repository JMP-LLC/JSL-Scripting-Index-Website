# Transcendental



### Arrhenius

**구문:** y = Arrhenius( tempC )

**설명:** Arrhenius 방정식의 활성화 에너지로 곱한 Arrhenius 관계식의 비특정 성분을 반환합니다. 11604.5181215503 / (tempC + 273.15)를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Arrhenius( 100 );

```

### Arrhenius Inv

**구문:** tempC = Arrhenius Inv( y )

**설명:** Arrhenius 함수의 역((11604.5181215503 / y) - 273.15)을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Arrhenius Inv( 100 );

```

### Beta

**구문:** z = Beta( x, y )

**설명:** Gamma( x ) * Gamma( y ) / Gamma( x + y )로 정의된 x 및 y의 베타 함수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Beta( 5, 4 );

```

### Box Cox Inverse Transform

**구문:** x = Box Cox Inverse Transform( y, lambda )

**설명:** 인수의 Box-Cox 역 변환을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**구문:** y = Box Cox Transform( x, lambda )

**설명:** 인수의 Box-Cox 변환을 반환합니다.

**JMP추가된 버전:** 19

```jsl

Box Cox Transform( 3, 2 );

```

### Cytometry Logicle

**구문:** y = Cytometry Logicle( x, T, W, M, A )

**설명:** Cytometry Logicle 변환을 계산합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**구문:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**설명:** 역 Cytometry Logicle 변환을 계산합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Digamma

**구문:** y = Digamma( x )

**설명:** x에서 실행된 Digamma 함수를 반환합니다. 여기서 Digamma 함수는 감마 함수 로그의 도함수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Digamma( 5 );

```

### Exp

**구문:** y = Exp( &lt;x=1&gt; )

**설명:** e를 x 거듭제곱하여 반환합니다. 인수는 숫자, 행렬 또는 숫자 목록일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Round( Exp( 1 ), 5 );

```

### ExpM1

**구문:** y = ExpM1( x )

**설명:** x가 매우 작을 경우 Exp(x)-1에 대한 더 정확한 계산을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### FFT

**구문:** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**설명:** L 인수에 대해 FFT(Fast Fourier Transformation)를 수행합니다. 여기서 L은 목록 형식이며 행렬로 구성된 실수와 허수 부분을 포함합니다. L이 하나의 행렬로만 구성된 경우에는 실수 부분으로 간주됩니다. L이 두 개의 행렬로 구성되어 있으면 첫 번째 행렬이 실수 부분이고 두 번째 행렬이 허수 부분입니다. 두 행렬은 동일한 차원과 둘 이상의 행을 가지고 있어야 합니다. 세 개의 선택적 인수가 있습니다. inverse 인수는 역 FFT를 수행할지 여부를 결정합니다. multivariate는 공간 또는 다변량 FFT를 수행할지 여부를 결정합니다. scale 인수는 반환 값을 곱할 상수를 결정합니다. 반환 값은 첫 번째 입력 인수로 동일한 차원을 가진 두 개의 행렬로 구성된 목록입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

FFT( {[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]} );
A = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3];
res = FFT( {A} );
res = FFT( {A}, <<Inverse( 1 ) );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
B = FFT( {A} );
FFT( B, <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]
);
FFT( FFT( {Afun()} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	{[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]}
);
FFT( FFT( Afun() ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
A = [1 3, 2 4, 3 1, 4 3, 4 5, 5 2, 5 7, 6 9, 7 5, 7 3, 2 7, 3 4, 6 7, 6 4, 2 7, 2 4, 2 6, 3 5, 3 6, 3 1];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 40 ) );
res = FFT( FFT( {A}, <<multivariate( 1 ) ), <<multivariate( 1 ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
A = [1 3 1,
2 4 3,
3 1 2,
4 3 3,
4 5 9,
5 2 8,
5 7 6,
6 9 5,
7 5 3,
7 3 2,
2 7 1,
3 4 3,
6 7 3,
6 4 2,
2 7 4,
2 4 1,
2 6 5,
3 5 1,
3 6 2,
3 1 9];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 60 ) );
fin = FFT( FFT( {A}, <<multivariate( 1 ) ), <<Inverse( 1 ), <<multivariate( 1 ), <<scale( 1 / 20 ) );
Show( fin );

```

### Factorial

**구문:** y = Factorial( x )

**설명:** x의 계승을 반환하며 Gamma( x + 1 )과 동일합니다. x가 정수이면 결과는 곱 1 * 2 * ... * x입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Factorial( 5 );

```

### Fit Transform To Normal

**구문:** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**설명:** 데이터 벡터에 대해 정규성 적합을 수행합니다. 여기에는 Johnson Sl, Johnson Sb, Johnson Su 및 GLog 분포가 포함됩니다. 함수는 모수 추정값, 공분산 행렬, 로그 가능도, AICc, 수렴 메시지 및 변환된 값이 포함된 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

datavec = [-3.7975076, 0.48221038, -1.3082712, -1.860647, -6.9470789, -17.237024, -19.470857, -6.1855986,
2.16525629, -30.990061];
freqvec = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
As Table( datavec || freqvec );
Column( 1 ) << set name( "x" );
Column( 2 ) << set name( "freq vec" );
Distribution( Freq( :freq vec ), Continuous Distribution( Column( :x ), Fit Distribution( GLog ) ) );
results = Fit Transform To Normal( Distribution( "glog" ), Y( datavec ), freq( freqvec ) );
Show( results );

```

### Gamma

**구문:** y = Gamma( x, &lt;limit&gt; )

**설명:** x의 감마 함수를 반환합니다. 감마 함수는 0에서 ∞까지 z^(x-1)*exp(-z) dz의 적분으로 정의됩니다. limit을 정의하면 해당 한계를 사용하여 적분하므로 불완전 감마가 계산됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Gamma( 5 );

```

### LGamma

**구문:** y = LGamma( x )

**설명:** x의 감마 함수의 자연 로그를 반환합니다. Gamma(x)가 직접 사용하기에 너무 큰 경우에 유용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

LGamma( 5 );

```

### Ln

**구문:** y = Ln( x )

**설명:** x의 자연 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Ln( Exp( 2 ) );

```

### Log

**구문:** y = Log( x, &lt;b&gt; )

**설명:** x의 밑이 b인 로그 또는 x의 자연 로그(b가 지정되지 않은 경우)를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Log( 256, 2 );

```

### Log10

**구문:** y = Log10( x )

**설명:** x의 상용 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Log10( 100 );

```

### Log1P

**구문:** y = Log1P( x )

**설명:** x가 매우 작은 경우 Log(1 + x)에 대한 더 정확한 계산을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Log1P( 1e-6 );

```

### Logist

**구문:** y = Logist( x )

**설명:** 도메인의 숫자 -∞...+∞를 0...1 범위로 변환하는 1 / (1 + Exp( -x ))를 반환합니다. Logist() 함수는 로지스틱 회귀에 유용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Logist( 2 );

```

### Logist Percent

**구문:** y = Logist Percent( x )

**설명:** 결과가 0에서 100으로 척도화된 Logist 함수

**JMP추가된 버전:** 버전 14 이전

```jsl

Logist Percent( 10 );

```

### Logit

**구문:** y = Logit( p )

**설명:** log(p / (1 - p))로 정의된 p의 로짓을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Logit( 0.95 );

```

### Logit Percent

**구문:** y = Logit Percent( p )

**설명:** 인수가 0에서 1이 아닌 0에서 100인 Logit 함수

**JMP추가된 버전:** 버전 14 이전

```jsl

Logit Percent( 95.0 );

```

### N Choose K

**구문:** m = N Choose K( n, k )

**설명:** n! / (k! * (n - k)!)(순서에 관계없이 n개의 항목 중 k개를 선택하는 방법의 수)를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

N Choose K( 5, 3 );

```

### Power

**구문:** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**설명:** x를 y 거듭제곱하여 반환합니다. x가 음수면 y는 정수여야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Power( 2, 5 );

```

### Root

**구문:** y = Root( x, &lt;n=2&gt; )

**설명:** x의 n번째 근을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### SHASHInv

**구문:** x = SHASHInv( z, gamma, delta, theta, sigma )

**설명:** 표준 정규 분포를 따르는 확률 변수를 SHASH(sinh-arcsinh) 분포의 확률 변수로 변환합니다.

**JMP추가된 버전:** 14

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
x1 = SHASHInv( result1, gamma, delta, theta, sigma );
x2 = SinH( (ArcSinH( result1 ) - gamma) / delta ) * sigma + theta;
Show( x1, x2 );

```

### SHASHTrans

**구문:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**설명:** SHASH(sinh-arcsinh) 분포 변수를 표준 정규 분포를 따르는 확률 변수로 변환합니다. SHASH 변환을 사용하여 정규 분포에 더 가까운 데이터를 생성할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SbInv

**구문:** x = SbInv( z, gamma, delta, theta, sigma )

**설명:** 표준 정규 변수를 Johnson SB 변수로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**구문:** z = SbTrans( x, gamma, delta, theta, sigma )

**설명:** Johnson SB 변수를 표준 정규 변수로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scheffe Cubic

**구문:** y = Scheffe Cubic( x1, x2 )

**설명:** x1*x2*(x1-x2)로 실행합니다. 3차 혼합물 모형에 대한 모델링 표기를 지원하는 데 사용됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### SlInv

**구문:** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**설명:** 표준 정규 변수를 Johnson SL 변수로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**구문:** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**설명:** Johnson SL 변수를 표준 정규 변수로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sqrt

**구문:** y = Sqrt( x )

**설명:** x 인수의 양의 제곱근을 반환합니다. 인수는 숫자, 행렬 또는 숫자 목록일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Round( Sqrt( 2 ), 4 );

```

### Squash

**구문:** y = Squash( x )

**설명:** 도메인의 숫자 -∞...+∞를 0...1 범위로 변환하는 1 / (1 + Exp( x ))를 반환합니다. Squash() 함수는 로지스틱 회귀에 유용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Squash( 10 );

```

### Squish

**구문:** y = Logist( x )

**설명:** 도메인의 숫자 -∞...+∞를 0...1 범위로 변환하는 1 / (1 + Exp( -x ))를 반환합니다. Logist() 함수는 로지스틱 회귀에 유용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Logist( 2 );

```

### SuInv

**구문:** x = SuInv( z, gamma, delta, theta, sigma )

**설명:** 표준 정규 변수를 Johnson SU 변수로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

SuInv( 1.96, 1.5, 2, 1, 2 );

```

### SuTrans

**구문:** z = SuTrans( x, gamma, delta, theta, sigma )

**설명:** Johnson SU 변수를 표준 정규 변수로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### Trigamma

**구문:** y = Trigamma( x )

**설명:** x에서 실행된 Trigamma 함수를 반환합니다. 여기서 Trigamma 함수는 Digamma 함수의 도함수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Trigamma( 5 );

```

