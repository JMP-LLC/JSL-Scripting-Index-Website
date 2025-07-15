# Random



### Col Shuffle

**구문:** y = Col Shuffle(&lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;)

**설명:** 1에서 현재 데이터 테이블의 행 수 사이의 랜덤 정수를 반환합니다. 열 계산식에 사용할 경우 Col Shuffle()은 각 행 번호가 한 번만 나타나도록 행 번호 순서를 랜덤 방식으로 지정합니다. 이 순서는 여러 번 진행되는 실행의 효율을 높이기 위해 내부적으로 캐시됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );
dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle", Numeric, Continuous, Set Formula( Col Shuffle( :age ) ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Shuffle for each Sex", Formula( Col Shuffle( :height, :sex ) ) );
dt << New Column( "Col Shuffle for each Sex grouped by Excluded",
	Formula( Col Shuffle( :height, :sex, Excluded( Row State() ) ) )
);

```

### Make KFold Formula

**구문:** y = Make KFold Formula( folds, Y Columns( cols ), &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ) )

**설명:** 열 계산식에 사용할 경우 folds개 수준의 검증 열을 생성합니다. 이 JSL 함수는 주로 검증 열 생성 플랫폼에서 계산식 열을 생성하는 데 사용됩니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "KFold Validation",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Stratified KFold",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 4, <<Y Columns( :height ), <<Stratification Columns( :sex ) ) )
);

```

### Make Validation Formula

**구문:** y = Make Validation Formula( rates, &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ), &lt;&lt;Cutpoint Column ( col ), &lt;&lt;Cutpoint Batch ID( col ), &lt;&lt;Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), &lt;&lt;Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**설명:** 열 계산식에 사용할 경우 2수준 또는 3수준 검증 열을 생성합니다. rates 인수는 각각 훈련, 검증 및 테스트 데이터의 비율을 포함하는 3 x 1 행렬입니다. 이 JSL 함수는 주로 검증 열 생성 플랫폼에서 계산식 열을 생성하는 데 사용됩니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .4, 0] ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation"} )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .2, .2], <<Stratification Columns( :age ) ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula(
		Make Validation Formula(
			[20, 10, 4],
			<<Cutpoint Column( :Week of Year ),
			<<Cutpoint Batch ID( :ID ),
			<<Determine cutpoints using( "Numbers of Rows" )
		)
	),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

### Random Beta

**구문:** y = Random Beta( alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**설명:** 베타 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Beta( 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta( 1, 1 ) );
//show results
Show( x, v );

```

### Random Beta Binomial

**구문:** y = Random Beta Binomial( n, p, &lt;delta=0&gt; )

**설명:** 성공 확률 p이고 상관 delta이며 시행 횟수가 n인 베타 이항 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Beta Binomial( 14, .5, .2 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta Binomial( 14, .5, .2 ) );
//show results
Show( x, v );

```

### Random Binomial

**구문:** y = Random Binomial( n, p )

**설명:** 성공 확률이 n이고 시행 횟수가 p인 이항 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exrbinp = 0.5;
exrbinn = 40;
exrbinlsz = Log( 1000 );
New Window( "Example: Random Binomial and Empirical Distribution",
	exrbiny = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		exrbinsz = Round( Exp( exrbinlsz ) );
		exrbinsamp = J( Round( exrbinsz ), 1, . );
		exrbinfreq = J( Round( exrbinn + 1 ), 1, . );
		For( exrbink = 1, exrbink <= Round( exrbinsz ), exrbink++,
			exrbinsamp[exrbink] = Random Binomial( exrbinn, exrbinp )
		);
		For( exrbink = 0, exrbink <= Round( exrbinn ), exrbink++,
			exrbinfreq[exrbink + 1] = Sum( exrbinsamp <= exrbink ) / Round( exrbinsz )
		);
		For( exrbink = 0, exrbink < Round( exrbinn ), exrbink++,
			H Line( exrbink, exrbink + 1, Binomial Distribution( exrbinp, Round( exrbinn ), exrbink ) );
			V Line(
				exrbink + 1,
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink ),
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink + 1 )
			);
		);
		Pen Color( "blue" );
		For( exrbink = 1, exrbink <= Round( exrbinn ), exrbink++,
			H Line( exrbink - 1, exrbink, exrbinfreq[exrbink] );
			V Line( exrbink, exrbinfreq[exrbink], exrbinfreq[exrbink + 1] );
		);
		Text( {0.5, 0.9}, "n=", Round( exrbinn ), " p=", Round( exrbinp, 2 ), " size=", Round( exrbinsz ) );
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrbinlsz, exrbiny << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Category

**구문:** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**설명:** 확률 및 결과 표현식 쌍이 주어졌을 때 랜덤 범주를 반환합니다. 균등 난수가 생성되고 반환할 결과 인수를 결정하기 위해 확률 인수와 비교됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**구문:** y = Random Cauchy()

**설명:** 중앙값이 0인 Cauchy 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Cauchy();
//produce a vector of random numbers
v = J( 1, 10, Random Cauchy() );
//show results
Show( x, v );

```

### Random ChiSquare

**구문:** y = Random ChiSquare( df, &lt;nonCentrality=0&gt; )

**설명:** 카이제곱 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random ChiSquare( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random ChiSquare( 2 ) );
//show results
Show( x, v );

```

### Random ExGaussian

**구문:** y = Random ExGaussian( location, scale, shape)

**설명:** ExGaussian 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random ExGaussian( 0, .5, .25 );
//produce a vector of random numbers
v = J( 1, 10, Random ExGaussian( 0, .5, .25 ) );
//show results
Show( x, v );

```

### Random Exp

**구문:** y = Random Exp()

**설명:** 지수 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Exp();
//produce a vector of random numbers
v = J( 1, 10, Random Exp() );
//show results
Show( x, v );

```

### Random F

**구문:** y = Random F( dfnum, dfden, &lt;nonCentrality=0&gt; )

**설명:** F 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random F( 2, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random F( 2, 2 ) );
//show results
Show( x, v );

```

### Random Frechet

**구문:** y = Random Frechet( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**설명:** Fréchet 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Frechet( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random Frechet( 10, 5 ) );
//show results
Show( x, v );

```

### Random GLog

**구문:** y = Random GLog( mu, sigma, lambda )

**설명:** 일반화 로그 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random GLog( 4, 1, 0.1 );
//produce a vector of random numbers
v = J( 1, 10, Random GLog( 4, 1, 0.1 ) );
//show results
Show( x, v );

```

### Random Gamma

**구문:** y = Random Gamma( alpha, &lt;scale=1&gt; )

**설명:** 감마 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Gamma( 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma( 1 ) );
//show results
Show( x, v );

```

### Random Gamma Poisson

**구문:** y = Random Gamma Poisson( lambda, &lt;sigma=1&gt; )

**설명:** 모수가 lambda 및 sigma인 감마 Poisson 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Gamma Poisson( 3, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma Poisson( 3, 2 ) );
//show results
Show( x, v );

```

### Random GenGamma

**구문:** y = Random GenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**설명:** 모수가 mu, sigma 및 lambda인 확장된 일반화 감마 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random GenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random GenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Geometric

**구문:** y = Random Geometric( p )

**설명:** 성공 확률이 p인 사건이 발생할 때까지 비사건(non-event) 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exrgeop = 0.1;
exrgeolsz = Log( 300 );
New Window( "Example: Random Geometric and Empirical Distribution",
	exrgeoy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 50 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		exrgeosz = Round( Exp( exrgeolsz ) );
		exrgeosamp = J( Round( exrgeosz ), 1, . );
		exrgeofreq = J( Round( 50 + 1 ), 1, . );
		For( exrgeok = 1, exrgeok <= Round( exrgeosz ), exrgeok++,
			exrgeosamp[exrgeok] = Random Geometric( exrgeop )
		);
		For( exrgeok = 0, exrgeok <= 50, exrgeok++,
			exrgeofreq[exrgeok + 1] = Sum( exrgeosamp <= exrgeok ) / Round( exrgeosz )
		);
		exrgeotmp1 = 0;
		exrgeotmp2 = 0;
		For( exrgeok = 0, exrgeok < 50, exrgeok++,
			exrgeotmp2 = exrgeotmp2 + (1 - exrgeop) ^ exrgeok * exrgeop;
			H Line( exrgeok, exrgeok + 1, exrgeotmp2 );
			V Line( exrgeok, exrgeotmp1, exrgeotmp2 );
			exrgeotmp1 = exrgeotmp2;
		);
		Pen Color( "blue" );
		For( exrgeok = 0, exrgeok < 50, exrgeok++,
			H Line( exrgeok, exrgeok + 1, exrgeofreq[exrgeok + 1] );
			V Line( exrgeok + 1, exrgeofreq[exrgeok + 1], exrgeofreq[exrgeok + 2] );
		);
		Text( {10, 0.2}, " p=", Round( exrgeop, 2 ), " sample size=", Round( exrgeosz ) );
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrgeolsz, exrgeoy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Index

**구문:** x = Random Index( n, k )

**설명:** 1에서 n 사이의 랜덤 정수로 구성된 k x 1 행렬을 반환합니다(중복 값 없음).

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Random Index( 100, 5 );

```

### Random Integer

**구문:** y = Random Integer( n ); Random Integer( k, n )

**설명:** 1에서 n 사이, 또는 k에서 n 사이(경계값 포함)의 랜덤 정수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Integer( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Integer( 1, 10 ) );
//show results
Show( x, v );

```

### Random Johnson Sb

**구문:** y = Random Johnson Sb( gamma, delta, theta, sigma )

**설명:** Johnson Sb 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Johnson Sb( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sb( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Sl

**구문:** y = Random Johnson Sl( gamma, delta, theta, &lt;sigma=1&gt; )

**설명:** Johnson Sl 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Johnson Sl( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sl( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Su

**구문:** y = Random Johnson Su( gamma, delta, theta, sigma )

**설명:** Johnson Su 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Johnson Su( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Su( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random LEV

**구문:** y = Random LEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**설명:** LEV 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random LEV( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random LEV( 10, 5 ) );
//show results
Show( x, v );

```

### Random LogGenGamma

**구문:** y = Random LogGenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**설명:** 모수가 mu, sigma 및 lambda인 로그 일반화 감마 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random LogGenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random LogGenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Logistic

**구문:** y = Random Logistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**설명:** 로지스틱 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Logistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Logistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Loglogistic

**구문:** y = Random Loglogistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**설명:** 로그로지스틱 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Loglogistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Loglogistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Lognormal

**구문:** y = Random Lognormal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로그 정규 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Lognormal( -1, 1.5 );
//produce a vector of random numbers
v = J( 1, 10, Random Lognormal( -1, 1.5 ) );
//show results
Show( x, v );

```

**예제 2**

```jsl

Names Default To Here( 1 );
exrlnn = 30;
New Window( "Example: Random Lognormal and Empirical Distribution",
	exrlny = Graph Box(
		Y Scale( -0.05, 1.05 ),
		X Scale( -.05, 10 ),
		Pen Color( "red" );
		exranlnorm = J( Round( exrlnn ), 1, . );
		For( k = 1, k <= Round( exrlnn ), k++,
			exranlnorm[k] = Random Lognormal( -1, 1.5 )
		);
		exranlnorm = Sort Ascending( exranlnorm );
		H Line( 0, exranlnorm[1], 0 );
		For( k = 2, k <= Round( exrlnn ), k++,
			H Line( exranlnorm[k - 1], exranlnorm[k], (k - 1) / Round( exrlnn ) )
		);
		H Line( exranlnorm[Round( exrlnn )], 10, 1.0 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( Log( tdeq ), -1, 1.5 ), tdeq );
		Text( {-4, 0.8}, " n=", Round( exrlnn ) );
	),
	H List Box( Slider Box( 10, 2000, exrlnn, exrlny << reshow ), Text Box( " n" ) )
);

```

### Random Multivariate Normal

**구문:** y = Random Multivariate Normal( mean, covar, &lt;nrows=1&gt;)

**설명:** 평균 벡터가 mean인 다변량 정규 분포를 따르는 nrows x p 행렬과 공분산 행렬 covar(양의 준정부호 행렬일 수 있음)를 반환합니다. 여기서 p는 covar의 행 수로 정의됩니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
meanvec = 1 :: 3;
covar = [1 .6 .6, .6 1 .6, .6 .6 1];
randmvnRow = Random Multivariate Normal( meanvec, covar );
randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**구문:** y = Random Negative Binomial( r, p )

**설명:** 성공 확률이 p인 사건이 r번 발생할 때까지 비사건(non-event) 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exnbpp = 0.3;
exnbpn = 20;
exnbrn = Random Negative Binomial( 20, 0.3 );
New Window( "Example: Neg Binomial Probability",
	exnbpy = Graph Box(
		Y Scale( 0, 0.04 ),
		X Scale( -1, 100 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbpk = 0, exnbpk < 1000, exnbpk++,
			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( exnbrn, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbrn ) );
		Text( {1, 0.035}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );
		Text(
			{1, 0.030},
			"x=",
			Round( exnbrn, 2 ),
			" Prob=",
			Round( Neg Binomial Probability( exnbpp, exnbpn, exnbrn ), 2 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Negative Binomial Number",
			exnbrn = Random Negative Binomial( 20, 0.3 );
			exnbpy << reshow;
		)
	)
);

```

### Random Normal

**구문:** y = Random Normal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**설명:** 평균 mu 및 표준편차 sigma의 정규 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Normal();
//produce a vector of random numbers
v = J( 1, 10, Random Normal() );
//show results
Show( x, v );

```

**예제 2**

```jsl

Names Default To Here( 1 );
exGcoordX = J( 50, 1, . );
exGcoordY = J( 50, 1, . );
For( k = 1, k <= 50, k++,
	exGcoordX[k] = Random Uniform( -5, 5 )
);
For( k = 1, k <= 50, k++,
	exGcoordY[k] = exGcoordX[k] + Random Normal()
);
New Window( "Random Normal, Linear Regression, and Outlier",
	V List Box(
		Graph Box(
			framesize( 600, 300 ),
			X Scale( -10, 10 ),
			Y Scale( 1.5 * Min( exGcoordY ), 1.5 * Max( exGcoordY ) ),
			double buffer,
			exsx = Sum( exGcoordX ),
			exsy = Sum( exGcoordY ),
			exsxx = Sum( (exGcoordX) ^ 2 );
			exsxy = Sum( exGcoordX :* exGcoordY );
			exbeta1 = (100 * exsxy - exsx * exsy) / (100 * exsxx - exsx * exsx);
			exbeta0 = (exsy - exbeta1 * exsx) / 100;
			exx1 = Min( exGcoordX );
			exy1 = exbeta0 + exbeta1 * Min( exGcoordX );
			exx2 = Max( exGcoordX );
			exy2 = exbeta0 + exbeta1 * Max( exGcoordX );
			Line( {exx1, exy1}, {exx2, exy2} );
			Marker Size( 5 );
			Drag Marker( exGcoordX, exGcoordY );
			Drag Text( [-7], [-5], "drag any marker" );
		)
	)
);

```

### Random Normal Mixture

**구문:** y = Random Normal Mixture( meanvec, sdvec, probvec )

**설명:** 그룹 평균 meanvec, 그룹 표준편차 sdvec, 그룹 확률 probvec로 정의되는 정규 혼합 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
dt = New Table( "Example",
	New Column( "Rand NM", set formula( Random Normal Mixture( [-3, 3], [1, 1], [.3, .7] ) ) )
);
dt << add rows( 1000 );
Distribution( Continuous Distribution( Column( :Rand NM ), Vertical( 0 ) ) );

```

### Random Poisson

**구문:** y = Random Poisson( lambda )

**설명:** Poisson 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exrpoilambda = 20;
exrpoilsz = Log( 300 );
New Window( "Example: Random Poisson and Empirical Distribution",
	exrpoiy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 50 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		exrpoisz = Round( Exp( exrpoilsz ) );
		exrpoisamp = J( Round( exrpoisz ), 1, . );
		exrpoifreq = J( Round( 50 + 1 ), 1, . );
		For( exrpoik = 1, exrpoik <= Round( exrpoisz ), exrpoik++,
			exrpoisamp[exrpoik] = Random Poisson( exrpoilambda )
		);
		For( exrpoik = 0, exrpoik <= 50, exrpoik++,
			exrpoifreq[exrpoik + 1] = Sum( exrpoisamp <= exrpoik ) / Round( exrpoisz )
		);
		exrpoitmp1 = 0;
		exrpoitmp2 = 0;
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line( exrpoik, exrpoik + 1, Poisson Distribution( exrpoilambda, exrpoik ) );
			V Line(
				exrpoik + 1,
				Poisson Distribution( exrpoilambda, exrpoik ),
				Poisson Distribution( exrpoilambda, exrpoik + 1 )
			);
		);
		Pen Color( "blue" );
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line( exrpoik, exrpoik + 1, exrpoifreq[exrpoik + 1] );
			V Line( exrpoik + 1, exrpoifreq[exrpoik + 1], exrpoifreq[exrpoik + 2] );
		);
		Text( {10, 0.2}, " \!U03BB=", Round( exrpoilambda, 2 ), " sample size=", Round( exrpoisz ) );
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrpoilsz, exrpoiy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Reset

**구문:** Random Reset( seed number )

**설명:** 새 시드값을 사용하여 랜덤 시퀀스를 다시 시작합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Random Reset( 1 );
Random Normal();

```

### Random SEV

**구문:** y = Random SEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**설명:** SEV 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random SEV( 50, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random SEV( 50, 5 ) );
//show results
Show( x, v );

```

### Random SHASH

**구문:** y = Random SHASH( gamma, delta, theta, sigma )

**설명:** SHASH(sinh-arcsinh) 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 14

**SHASH 변환**

```jsl

Names Default To Here( 1 );
gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

**예제 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random SHASH( 0, 1, 0, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );
//show results
Show( x, v );

```

### Random Seed State

**구문:** Random Seed State( &lt;seed state&gt; )

**설명:** BLOB 개체에서 난수 시드값 상태를 가져오거나 복원합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
r = Random Seed State();
Random Seed State( r );

```

### Random Shuffle

**구문:** y = Random Shuffle( matrix )

**설명:** 랜덤 순서로 뒤섞인 요소가 포함된 행렬을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exA = [1 2 6, 3 5 8];
Random Shuffle( exA );

```

### Random Triangular

**구문:** y = Random Triangular( a, b, c );y = Random Triangular( b, c );y = Random Triangular( b )

**설명:** 하한이 a이고 모드가 b이며 상한이 c인 삼각 분포에서 난수를 반환합니다. Random Triangular(b,c)는 Random Triangular(0,b,c)와 동등합니다. Random Triangular(b)는 Random Triangular(0,b,1)과 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Random Reset( 13579 );
x = Random Triangular( 0.8 );
Random Reset( 13579 );
y = Random Triangular( 0, 0.8, 1 );
Show( x, y );

```

### Random Uniform

**구문:** y = Random Uniform( &lt;min&gt;, &lt;max&gt; )

**설명:** min과 max 사이의 균등 분포에서 난수를 반환합니다(경계값 포함 안 함).

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Uniform( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Uniform( 1, 10 ) );
//show results
Show( x, v );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Random Uniform( 1, 10 );

```

### Random Weibull

**구문:** y = Random Weibull( beta, &lt;alpha=1&gt; )

**설명:** Weibull 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Weibull( 3, 20 );
//produce a vector of random numbers
v = J( 1, 10, Random Weibull( 3, 20 ) );
//show results
Show( x, v );

```

### Random ZI Negative Binomial

**구문:** y = Random ZI Negative Binomial( lambda, sigma, pi )

**설명:** 위치 모수 lambda, 척도 모수 sigma, 영과잉 모수 pi를 사용하는 영과잉 음이항 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );
exnbpp = 0.3;
exnbpn = 20;
rnb = Random ZI Negative Binomial( 25, .5, .05 );
New Window( "Example: Zero Inflated Negative Binomial",
	exnbpy = Graph Box(
		Y Scale( 0, 0.075 ),
		X Scale( -1, 100 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( i = 0, i < 100, i++,
			V Line( i, 0, ZI Negative Binomial Probability( i, 25, .5, .05 ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( rnb, 0, ZI Negative Binomial Probability( rnb, 25, .5, .05 ) );
		Text( {25, 0.06}, "lambda=", Round( 25 ), ", sigma=", Round( .5, 2 ), ", pi=", Round( .05, 2 ) );
		Text(
			{25, 0.05},
			"x=",
			Round( rnb, 2 ),
			", Prob=",
			Round( ZI Negative Binomial Probability( rnb, 25, .5, .05 ), 4 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Zero Inflated Negative Binomial Number",
			rnb = Random ZI Negative Binomial( 25, .5, .05 );
			exnbpy << reshow;
		)
	)
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Negative Binomial( 5, 2, .2 ) ) );
Column( 1 ) << set name( "Random ZiNB" );
dt << Distribution(
	Continuous Distribution( Column( :Random ZiNB ), Vertical( 0 ), Fit ZI Negative Binomial, CDF Plot( 1 ) )
);

```

### Random ZI Poisson

**구문:** y = Random ZI Poisson Binomial( lambda, pi )

**설명:** 위치 모수 lambda, 영과잉 모수 pi를 사용하는 영과잉 Poisson 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );
exnbpp = 0.3;
exnbpn = 20;
rp = Random ZI Poisson( 20, .05 );
New Window( "Example: Zero Inflated Poisson",
	exnbpy = Graph Box(
		Y Scale( 0, 0.1 ),
		X Scale( -1, 60 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( i = 0, i < 100, i++,
			V Line( i, 0, ZI Poisson Probability( i, 20, .05 ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( rp, 0, ZI Poisson Probability( rp, 20, .05 ) );
		Text( {30, 0.06}, "lambda=", Round( 20 ), ", pi=", Round( .05, 2 ) );
		Text(
			{30, 0.05},
			"x=",
			Round( rp, 2 ),
			", Prob=",
			Round( ZI Poisson Probability( rp, 20, .05 ), 4 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Zero Inflated Poisson Number",
			rp = Random ZI Poisson( 20, .05 );
			exnbpy << reshow;
		)
	)
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Poisson( 5, .2 ) ) );
Column( 1 ) << set name( "Random ZIP" );
dt << Distribution(
	Continuous Distribution( Column( :Random ZIP ), Vertical( 0 ), Fit ZI Poisson, CDF Plot( 1 ) )
);

```

### Random t

**구문:** y = Random t( df, &lt;nonCentrality=0&gt; )

**설명:** t 분포에서 난수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random t( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random t( 2 ) );
//show results
Show( x, v );

```

### Resample Freq

**구문:** Resample Freq( &lt;rate=1&gt;, &lt;column&gt; )

**설명:** 복원 표집을 위한 빈도 수를 생성하며 붓스트랩 표본에 유용합니다. 인수를 지정하지 않으면 100% 재표집 표본이 생성됩니다. rate 인수는 재표집 비율을 지정합니다. column 인수를 지정할 경우 선택된 표본 크기는 rate에 지정한 열의 합을 곱한 값입니다. rate가 음수이면 빈도 비율이 허용됨을 나타냅니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Freq", numeric, formula( Resample Freq() ) );
New Window( "w", theBox = V List Box() );
For( i = 1, i <= 30, i++,
	Column( "Freq" ) << EvalFormula;
	theBox << append( V List Box( Bivariate( Y( :height ), X( :weight ), Freq( :Freq ), Fit Line( 1 ) ) ) );
);
newDt = theBox["Parameter Estimates", Table Box( 1 )] << MakeCombinedDataTable;
newDt << Distribution( Y( :Estimate ), By( :Term ), Horizontal Layout( 1 ) );
theBox << CloseWindow;

```

