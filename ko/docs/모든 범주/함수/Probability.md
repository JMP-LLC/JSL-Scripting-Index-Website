# Probability



## 함수

### Beta Density

**구문:** y = Beta Density( q, alpha, beta, <theta=0>, <sigma=1> )

**설명:** 베타 분포의 q에서의 밀도를 반환합니다. 여기서 q는 theta ~ theta + sigma 구간에 있습니다. alpha 및 beta는 형상 모수이고 theta 및 sigma는 각각 임계 및 범위 모수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Density",
	y = Graph Box(
		Y Scale( 0, 2.5 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Beta Density( q, alpha, beta ), q );
		Text( {0.55, 2.2}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Distribution

**구문:** p = Beta Distribution( q, alpha, beta, <theta=0>, <sigma=1> )

**설명:** 베타 분포 확률 변수가 q보다 작을 확률을 반환합니다. 여기서 alpha 및 beta는 형상 모수이고 theta 및 sigma는 각각 임계 및 범위 모수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Beta Distribution( q, alpha, beta ), q );
		Text( {0.1, 0.9}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Quantile

**구문:** q = Beta Quantile( p, alpha, beta, <theta=0>, <sigma=1> )

**설명:** 베타 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다. 여기서 alpha 및 beta는 형상 모수이고 theta 및 sigma는 각각 임계 및 범위 모수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Beta Quantile( 0.95, 2, 5 );

```

### Cauchy Density

**구문:** y = Cauchy Density( q, <center>, <scale> )

**설명:** Cauchy 분포(중심 mu 및 척도 sigma)의 q에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: Cauchy Density",
	y = Graph Box(
		Y Scale( 0, .4 ),
		X Scale( -6, 6 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Density( q ), q );
	)
);

```

### Cauchy Distribution

**구문:** p = Cauchy Distribution( q, <center>, <scale> )

**설명:** Cauchy 분포 확률 변수가 q보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: Cauchy Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -6, 6 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Distribution( q ), q );
	)
);

```

### Cauchy Quantile

**구문:** q = Cauchy Quantile( p, <center>, <scale> )

**설명:** Cauchy 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: Cauchy Quantile",
	Graph Box(
		Y Scale( -6, 6 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Quantile( p ), p );
	)
);

```

### ChiSquare Density

**구문:** p = ChiSquare Density( q, df, <nonCentrality=0> )

**설명:** 자유도가 df인 카이제곱 분포의 q에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
cdedf = 2;
New Window( "Example: ChiSquare Density",
	cdey = Graph Box(
		Y Scale( 0, 0.4 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Density( cdeq, cdedf ), cdeq );
		Text( {7, 0.35}, "df=", Round( cdedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdedf, cdey << reshow ) )
);

```

### ChiSquare Distribution

**구문:** p = ChiSquare Distribution( q, df, <nonCentrality=0> )

**설명:** 카이제곱 분포 확률 변수가 q보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
cdidf = 2;
New Window( "Example: ChiSquare Distribution",
	cdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Distribution( cdiq, cdidf ), cdiq );
		Text( {1, 0.9}, "df=", Round( cdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdidf, cdiy << reshow ) )
);

```

### ChiSquare Log CDistribution

**구문:** y = ChiSquare Log CDistribution( x, df, <nonCentrality=0> )

**설명:** 1 - 카이제곱 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
clcdidf = 2;
New Window( "Example: ChiSquare Log CDistribution",
	clcdiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log CDistribution( clcdiq, clcdidf ), clcdiq );
		Text( {1, -0.9}, "df=", Round( clcdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, clcdidf, clcdiy << reshow ) )
);

```

### ChiSquare Log Density

**구문:** y = ChiSquare Log Density( x, df, <nonCentrality=0> )

**설명:** 카이제곱 확률 밀도의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
cldedf = 1;
New Window( "Example: ChiSquare Log Density",
	cldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log Density( cldeq, cldedf ), cldeq );
		Text( {7, -0.35}, "df=", Round( cldedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cldedf, cldey << reshow ) )
);

```

### ChiSquare Log Distribution

**구문:** y = ChiSquare Log Distribution( x, df, <nonCentrality=0> )

**설명:** 카이제곱 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
cldidf = 2;
New Window( "Example: ChiSquare Log Distribution",
	cldiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log Distribution( cldiq, cldidf ), cldiq );
		Text( {1, -0.9}, "df=", Round( cldidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, cldidf, cldiy << reshow ) )
);

```

### ChiSquare Noncentrality

**구문:** nc = ChiSquare Noncentrality( x, df, prob )

**설명:** 자유도가 df인 카이제곱 확률 변수가 x보다 작을 확률 prob가 되는 비중심성 모수 nc를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: ChiSquare Noncentrality",
	chincgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, q ) ), q );
	)
);
ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, 0.5 ) );

```

### ChiSquare Quantile

**구문:** q = ChiSquare Quantile( p, df, <nonCentrality=0> )

**설명:** 카이제곱 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
ChiSquare Quantile( 0.15, 5 );

```

### Dunnett P value

**구문:** p = Dunnett P value( q, nTrt, dfe, <lambdaVec = .> )

**설명:** Dunnett 다중 비교 검정에서 얻은 p 값을 반환합니다. 여기서 q는 검정 통계량, nTrt는 대조군과 비교할 처리 수, dfe는 총 표본 수에 기반한 오차 자유도이며 선택적 lambdaVec는 모수의 벡터(기본적으로 1/sqrt(2)으로 설정됨)입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**구문:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, <lambdaVec = .> )

**설명:** Dunnett 다중 비교 검정에 필요한 분위수를 반환합니다. 여기서 1-alpha는 신뢰 수준, nTrt는 대조군과 비교할 처리 수, dfe는 총 표본 수에 기반한 오차 자유도이며, 선택적 lambdaVec는 모수의 벡터(기본적으로 1/sqrt(2)로 설정됨)입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Dunnett Quantile( 0.95, 3, 11 );

```

### ExGaussian Density

**구문:** y = ExGaussian Density( x, location, scale, shape )

**설명:** ExGaussian 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Example: ExGaussian Density",
	y = Graph Box(
		Y Scale( 0, .2 ),
		X Scale( -2, 15 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( ExGaussian Density( x, 0, .5, .25 ), x );
	)
);

```

### ExGaussian Distribution

**구문:** y = ExGaussian Distribution( x, location, scale, shape )

**설명:** ExGaussian 분포 확률 변수가 x보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Example: ExGaussian Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 15 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( ExGaussian Distribution( x, 0, .5, .25 ), x );
	)
);

```

### ExGaussian Quantile

**구문:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**설명:** ExGaussian 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Example: ExGaussian Quantile",
	Graph Box(
		Y Scale( -2, 15 ),
		X Scale( 0, 1 ),
		XName( "p" ),
		Pen Color( "red" );
		Y Function( ExGaussian Quantile( p, 0, .5, .25 ), p );
	)
);

```

### Exp Density

**구문:** y = Exp Density( x, <theta=1> )

**설명:** 모수가 theta인 지수 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
New Window( "Example: Exp Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exp Density( x, 2 ), x );
	)
);

```

### Exp Distribution

**구문:** p = Exp Distribution( x, <theta=1> )

**설명:** 지수 분포를 따르는 확률 변수가 x보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
New Window( "Example: Exp Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exp Distribution( x, 2 ), x );
	)
);

```

### Exp Quantile

**구문:** q = Exp Quantile( p, <theta=1> )

**설명:** 지수 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
New Window( "Example: Exp Quantile",
	y = Graph Box(
		Y Scale( 0, 4 ),
		X Scale( 0, 1 ),
		Pen Color( "red" );
		Y Function( Exp Quantile( qq, 2 ), qq );
	)
);

```

### Exponential Density

**구문:** y = Exponential Density( x, <theta=1> )

**설명:** 모수가 theta인 지수 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
New Window( "Example: Exponential Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exponential Density( x, 2 ), x );
	)
);

```

### Exponential Distribution

**구문:** p = Exponential Distribution( x, <theta=1> )

**설명:** 지수 분포를 따르는 확률 변수가 x보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
New Window( "Example: Exponential Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exponential Distribution( x, 2 ), x );
	)
);

```

### Exponential Quantile

**구문:** q = Exponential Quantile( p, <theta=1> )

**설명:** 지수 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
New Window( "Example: Exponential Quantile",
	y = Graph Box(
		Y Scale( 0, 4 ),
		X Scale( 0, 1 ),
		Pen Color( "red" );
		Y Function( Exponential Quantile( qq, 2 ), qq );
	)
);

```

### F Density

**구문:** y = F Density( q, dfnum, dfden, <nonCentrality=0> )

**설명:** 분자의 자유도와 분모의 자유도가 각각 dfn과 dfd인 F 분포의 q에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
fdedfn = 2;
fdedfd = 2;
New Window( "Example: F Density",
	fdey = Graph Box(
		Y Scale( 0, 0.8 ),
		X Scale( 0, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Density( fdeq, fdedfn, fdedfd ), fdeq );
		Text( {2.5, 0.7}, "dfn=", Round( fdedfn, 2 ), " dfd=", Round( fdedfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fdedfn, fdey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fdedfd, fdey << reshow ) )
);

```

### F Distribution

**구문:** y = F Distribution( q, dfnum, dfden, <nonCentrality=0> )

**설명:** F 분포 확률 변수가 q보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
fdidfn = 5;
fdidfd = 5;
New Window( "Example: F Distribution",
	fdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Distribution( fdiq, fdidfn, fdidfd ), fdiq );
		Text( {0.5, 0.9}, "dfn=", Round( fdidfn, 2 ), " dfd=", Round( fdidfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 0.5, 10, fdidfn, fdiy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 0.5, 10, fdidfd, fdiy << reshow ) )
);

```

### F Log CDistribution

**구문:** y = F Log CDistribution( x, dfnum, dfden, <nonCentrality=0> )

**설명:** 1 - F 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
flcddfn = 5;
flcddfd = 5;
New Window( "Example: F Log CDistribution",
	flcdy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log CDistribution( flcdq, flcddfn, flcddfd ), flcdq );
		Text( {0.5, -0.9}, "dfn=", Round( flcddfn, 2 ), " dfd=", Round( flcddfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flcddfn, flcdy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flcddfd, flcdy << reshow ) )
);

```

### F Log Density

**구문:** y = F Log Density( x, dfnum, dfden, <nonCentrality=0> )

**설명:** F 확률 밀도의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
fldedfn = 1;
fldedfd = 1;
New Window( "Example: F Log Density",
	fldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log Density( fldeq, fldedfn, fldedfd ), fldeq );
		Text( {2.5, -0.7}, "dfn=", Round( fldedfn, 2 ), " dfd=", Round( fldedfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fldedfn, fldey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fldedfd, fldey << reshow ) )
);

```

### F Log Distribution

**구문:** y = F Log Distribution( x, dfnum, dfden, <nonCentrality=0> )

**설명:** F 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
flddfn = 5;
flddfd = 5;
New Window( "Example: F Log Distribution",
	fldy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log Distribution( fldq, flddfn, flddfd ), fldq );
		Text( {0.5, -0.9}, "dfn=", Round( flddfn, 2 ), " dfd=", Round( flddfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flddfn, fldy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flddfd, fldy << reshow ) )
);

```

### F Noncentrality

**구문:** nc = F Noncentrality( x, dfnum, dfden, prob )

**설명:** prob = F Distribution( x, ndf, ddf, nc )와 같도록 비중심성 모수 nc를 계산합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: F Noncentrality",
	fncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, q ) ), q );
	)
);
F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, 0.4 ) );

```

### F Power

**구문:** p = F Power( alpha, dfh, dfm, d, n )

**설명:** F-검정의 검정력을 계산합니다. 여기서, alpha = 유의 수준, dfh = 가설의 자유도, dfm = 전체 모형의 자유도, d = 효과 크기의 제곱, SSH/(n*sigma^2)(여기서 SSH는 가설에 대한 제곱합이고 n은 총 관측값 수). ANOVA 모형의 경우에는 d = Sum(a[i]^2)/(k * sigma^2)이며 여기서 a[i]는 효과이고 k는 평균의 개수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
alpha = 0.05;
obs = 25;
dfh = 5;
dfm = 5;
d = 1;
New Window( "Example: F Power (alpha=.05,dfh=5,dfm=5)",
	fpdigr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 1 ),
		YName( "Power" ),
		XName( "d" ),
		Pen Color( "red" );
		Y Function( F Power( alpha, dfh, dfm, d, obs ), d );
		Text( {0.75, 0.1}, "obs=", Round( obs ) );
	),
	H List Box( Text Box( "obs" ), Slider Box( 10, 100, obs, fpdigr << reshow ) )
);

```

### F Quantile

**구문:** q = F Quantile( p, dfnum, dfden, <nonCentrality=0> )

**설명:** F 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**구문:** n = F Sample Size( alpha, dfh, dfm, d, power )

**설명:** 표본 크기를 계산합니다. 여기서, alpha = 유의 수준, dfh = 가설의 자유도, dfm = 전체 모형의 자유도, d = 효과 크기 제곱, SSH/(n*sigma^2)(여기서 SSH는 가설에 대한 제곱합이고 power는 원하는 검정력임). ANOVA 모형의 경우에는 d = Sum(a[i]^2)/(k * sigma^2)이며 여기서 a[i]는 효과이고 k는 평균의 개수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
alpha = 0.05;
pow = 0.6;
dfh = 5;
dfm = 5;
d = 1;
New Window( "Example: F Sample Size (alpha=.05,dfh=5,dfm=5)",
	fpdigr = Graph Box(
		Y Scale( 0, 50 ),
		X Scale( 0.5, 5 ),
		YName( "Sample Size" ),
		XName( "d" ),
		Pen Color( "red" );
		Y Function( F Sample Size( alpha, dfh, dfm, d, pow ), d );
		Text( {0.75, 0.2}, "power=", Round( pow, 2 ) );
	),
	H List Box( Text Box( "power" ), Slider Box( 0.2, 0.95, pow, fpdigr << reshow ) )
);

```

### FDR Adjust

**구문:** y = FDR Adjust( matrix )

**설명:** 지정된 p 값에 대해 Benjamini-Hochberg 방법을 사용하여 수정한 False Discovery Rate를 반환합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### Frechet Density

**구문:** y = Frechet Density( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 Fréchet 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = .5;
New Window( "Example: Frechet Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Frechet Distribution

**구문:** p = Frechet Distribution( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 Fréchet 분포의 x에서의 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = .5;
New Window( "Example: Frechet Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Frechet Quantile

**구문:** q = Frechet Quantile( p, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 Fréchet 분포의 p에서의 분위수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = .5;
qq = .5;
New Window( "Example: Frechet Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Frechet Quantile( qq, mu, sig ), 0, 1 );
		Text( {0.1, 0.9}, " mu=", Round( mu, 2 ), " sig=", Round( sig, 2 ), " quantile=", Round( qq, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### GLog Density

**구문:** y = GLog Density( q, mu, sigma, lambda )

**설명:** 위치 모수가 mu, 척도 모수가 sigma, 그리고 형상 모수가 lambda인 일반화 로그 분포의 q에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GLog Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Density( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) )
);

```

### GLog Distribution

**구문:** p = GLog Distribution( q, mu, sigma, lambda )

**설명:** 일반화 로그 분포 확률 변수가 q보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: Glog Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) )
);

```

### GLog Quantile

**구문:** q = GLog Quantile( p, mu, sigma, lambda )

**설명:** 일반화 로그 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: GLog Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( GLog Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-9, 0.8}, "p=", Round( p, 3 ) );
		Text( {-9, 0.7}, "quantile= ", Round( GLog Quantile( p, mu, sigma, lambda ), 2 ) );
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Gamma Density

**구문:** y = Gamma Density( q, <alpha=1>, <scale=1>, <threshold=0> )

**설명:** 감마 분포의 q에서의 밀도를 반환합니다. 여기서 alpha 형상 모수 인수는 양수여야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gdealpha = Log( 1.5 );
New Window( "Example: Gamma Density",
	gdey = Graph Box(
		Y Scale( 0, 0.5 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Density( gdeq, Exp( gdealpha ) ), gdeq );
		Text( {9, 0.45}, "\!U03B1=", Round( Exp( gdealpha ), 2 ) );
	),
	H List Box( Slider Box( Log( 0.1 ), Log( 12 ), gdealpha, gdey << reshow ), Text Box( " \!U03B1" ) )
);

```

### Gamma Distribution

**구문:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**설명:** 감마 분포 확률 변수가 q보다 작을 확률을 반환합니다. 여기서 alpha 형상 모수 인수는 양수여야 합니다. IGamma()는 Gamma Distribution()의 별칭 이름입니다. Gamma Distribution() 함수는 Gamma(alpha,q)/Gamma(alpha)와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );
		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );
	),
	H List Box( Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ), Text Box( " \!U03B1" ) )
);

```

### Gamma Log CDistribution

**구문:** p = Gamma Log CDistribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**설명:** 1 - 감마 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
glcdialpha = Log( 1.5 );
New Window( "Example: Gamma Log CDistribution",
	glcdiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log CDistribution( glcdiq, Exp( glcdialpha ) ), glcdiq );
		Text( {1, -0.9}, "\!U03B1=", Round( Exp( glcdialpha ), 2 ) );
	),
	H List Box( Slider Box( Log( 0.1 ), Log( 12 ), glcdialpha, glcdiy << reshow ), Text Box( " \!U03B1" ) )
);

```

### Gamma Log Density

**구문:** y = Gamma Log Density( x, <alpha=1>, <scale=1>, <threshold=0> )

**설명:** 감마 확률 밀도의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gldealpha = Log( 1.5 );
New Window( "Example: Gamma Log Density",
	gldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log Density( gldeq, Exp( gldealpha ) ), gldeq );
		Text( {9, -0.45}, "\!U03B1=", Round( Exp( gldealpha ), 2 ) );
	),
	H List Box( Slider Box( Log( 0.1 ), Log( 12 ), gldealpha, gldey << reshow ), Text Box( " \!U03B1" ) )
);

```

### Gamma Log Distribution

**구문:** p = Gamma Log Distribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**설명:** 감마 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gldialpha = Log( 1.5 );
New Window( "Example: Gamma Log Distribution",
	gldiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log Distribution( gldiq, Exp( gldialpha ) ), gldiq );
		Text( {1, -0.9}, "\!U03B1=", Round( Exp( gldialpha ), 2 ) );
	),
	H List Box( Slider Box( Log( 0.1 ), Log( 12 ), gldialpha, gldiy << reshow ), Text Box( " \!U03B1" ) )
);

```

### Gamma Quantile

**구문:** q = Gamma Quantile( p, <alpha=1>, <scale=1>, <threshold=0> )

**설명:** 감마 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**구문:** y = GenGamma Density( x, mu, sigma, lambda )

**설명:** 모수가 mu, sigma 및 lambda인 확장된 일반화 감마 확률 분포의 x에서의 밀도 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GenGamma Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GenGamma Density( y, mu, sigma, lambda ), y );
		Text( {-4, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-4, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### GenGamma Distribution

**구문:** p = GenGamma Distribution( x, mu, sigma, lambda )

**설명:** 모수가 mu, sigma 및 lambda인 확장된 일반화 감마 분포 확률 변수가 x 미만일 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GenGamma Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GenGamma Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### GenGamma Quantile

**구문:** q = GenGamma Quantile( p, mu, sigma, lambda )

**설명:** 모수가 mu, sigma 및 lambda인 확장된 일반화 감마 확률 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: GenGamma Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GenGamma Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( GenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-9, 0.8}, "p=", Round( p, 3 ) );
		Text( {-9, 0.7}, "quantile= ", Round( GenGamma Quantile( p, mu, sigma, lambda ), 2 ) );
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### IGamma

**구문:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**설명:** 감마 분포 확률 변수가 q보다 작을 확률을 반환합니다. 여기서 alpha 형상 모수 인수는 양수여야 합니다. IGamma()는 Gamma Distribution()의 별칭 이름입니다. Gamma Distribution() 함수는 Gamma(alpha,q)/Gamma(alpha)와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );
		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );
	),
	H List Box( Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ), Text Box( " \!U03B1" ) )
);

```

### Johnson Sb Density

**구문:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**설명:** Johnson Sb 분포의 q에서의 밀도를 반환합니다. 여기서 q는 theta ~ theta + sigma 구간에 있습니다. delta>0 및 gamma(-∞에서 +∞ 사이)는 형상 모수입니다. sigma>0은 척도 모수이고 theta(-∞에서 +∞ 사이)는 임계 모수입니다. (참고: theta는 분포의 아래쪽 끝점이고 sigma는 분포의 지지 범위입니다.)

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gamma = 0.5;
delta = 0.5;
theta = 0.5;
sigma = 1;
New Window( "Example: Johnson Sb Density",
	jsbp = Graph Box(
		Y Scale( 0, 5.5 ),
		X Scale( 0.2, 1.8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sb Density( q, gamma, delta, theta, sigma ), q );
		Text(
			{0.5, 4.5},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsbp << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsbp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -2, 2, theta, jsbp << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 10, sigma, jsbp << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Sb Distribution

**구문:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**설명:** Johnson Sb 분포 확률 변수가 q보다 작을 확률을 반환합니다. (참고: 모수에 대한 설명은 Johnson Sb Density() 함수를 참조하십시오.)

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gamma = 0.5;
delta = 0.5;
theta = 0.5;
sigma = 3;
New Window( "Example: Johnson Sb Distribution",
	jsbc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0.2, 3.8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sb Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{0.3, 0.8},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsbc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 1, delta, jsbc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 1, theta, jsbc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 4, sigma, jsbc << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Sb Quantile

**구문:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**설명:** Johnson Sb 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다. (참고: p는 첫 번째 모수입니다. 모수에 대한 설명은 Johnson Sb Density() 함수를 참조하십시오.)

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**구문:** y = Johnson Sl Density( q, gamma, delta, theta, <sigma=1> )

**설명:** Johnson Sl 분포의 q에서의 밀도를 반환합니다. 여기서 q는 theta ~ +∞ 구간에 있습니다. delta>0 및 gamma(-∞에서 +∞ 사이)는 형상 모수이고 sigma(+1 또는 -1과 같음)는 척도 모수이며 theta(-∞에서 +∞ 사이)는 임계 모수입니다. (참고: sigma = 1일 경우에는 theta가 분포에서 하한이고 sigma=-1일 경우에는 theta가 상한입니다. 또한 양수 sigma는 양수 왜도를 나타내고 음수 sigma는 음수 왜도를 나타냅니다.)

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gamma = 0.5;
delta = 1;
theta = 0;
sigma = 1;
New Window( "Example: Johnson Sl Density",
	jslp = Graph Box(
		Y Scale( 0, 1.5 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sl Density( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 1.1},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 )
		);
	),
	jslpcb = Check Box(
		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},
		<<set( 1 ),
		sigma = [-1, 1][((jslpcb << get()) + 1)];
		jslp << reshow;
	),
	H List Box( Slider Box( -15, 15, gamma, jslp << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslp << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Distribution

**구문:** p = Johnson Sl Distribution( q, gamma, delta, theta, <sigma=1> )

**설명:** Johnson Sl 분포 확률 변수가 q보다 작을 확률을 반환합니다. (참고: 모수에 대한 설명은 Johnson Sl Density() 함수를 참조하십시오.)

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gamma = 0.5;
delta = 1;
theta = 0;
sigma = 1;
New Window( "Example: Johnson Sl Distribution",
	jslc = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sl Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 )
		);
	),
	jslccb = Check Box(
		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},
		<<set( 1 ),
		sigma = [-1, 1][((jslccb << get()) + 1)];
		jslc << reshow;
	),
	H List Box( Slider Box( -15, 15, gamma, jslc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslc << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Quantile

**구문:** q = Johnson Sl Quantile( p, gamma, delta, theta, <sigma=1> )

**설명:** Johnson Sl 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다. (참고: p는 첫 번째 모수입니다. 모수에 대한 설명은 Johnson Sl Density() 함수를 참조하십시오.)

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**구문:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**설명:** Johnson Su 분포의 q에서의 밀도를 반환합니다. 여기서 q는 -∞에서 +∞ 사이에 있습니다. delta>0 및 gamma(-∞에서 +∞ 사이)는 형상 모수입니다. sigma>0은 척도 모수이고 theta(-∞에서 +∞ 사이)는 임계 모수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: Johnson Su Density",
	y = Graph Box(
		Y Scale( 0, 1.5 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Su Density( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 1.3},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, y << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, y << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, y << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, y << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Su Distribution

**구문:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**설명:** Johnson Su 분포 확률 변수가 q보다 작을 확률을 반환합니다. (참고: 모수에 대한 설명은 Johnson Su Density() 함수를 참조하십시오.)

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: Johnson Su Distribution",
	jsuc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Su Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Su Quantile

**구문:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**설명:** Johnson Su 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다. (참고: p는 첫 번째 모수입니다. 모수에 대한 설명은 Johnson Su Density() 함수를 참조하십시오.)

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### LEV Density

**구문:** y = LEV Density( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 최대 극단값 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 10;
sig = 5;
New Window( "Example: LEV Density",
	y = Graph Box(
		Y Scale( 0, .08 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### LEV Distribution

**구문:** p = LEV Distribution( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 최대 극단값 분포의 x에서의 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 10;
sig = 5;
New Window( "Example: LEV Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### LEV Quantile

**구문:** q = LEV Quantile( p, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 최대 극단값 분포의 p에서의 분위수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 10;
sig = 5;
qq = .5;
New Window( "Example: LEV Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( LEV Quantile( qq, mu, sig ), 0, 1 );
		Text( {0.1, 0.9}, " mu=", Round( mu, 2 ), " sig=", Round( sig, 2 ), " quantile=", Round( qq, 2 ) );
	),
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### LogGenGamma Density

**구문:** y = LogGenGamma Density( x, mu, sigma, lambda )

**설명:** 모수가 mu, sigma 및 lambda인 로그 일반화 감마 확률 분포의 x에서의 밀도 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: LogGenGamma Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Density( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### LogGenGamma Distribution

**구문:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**설명:** 모수가 mu, sigma 및 lambda인 로그 일반화 감마 분포 확률 변수가 x보다 낮을 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: LogGenGamma Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### LogGenGamma Quantile

**구문:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**설명:** 모수가 mu, sigma 및 lambda인 로그 일반화 감마 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: LogGenGamma Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( LogGenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-19, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-19, 0.8}, "p=", Round( p, 3 ) );
		Text( {-19, 0.7}, "quantile= ", Round( LogGenGamma Quantile( p, mu, sigma, lambda ), 2 ) );
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Logistic Density

**구문:** y = Logistic Density( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로지스틱 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = .2;
New Window( "Example: Logistic Density",
	y = Graph Box(
		Y Scale( 0, 2 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Density( x, mu, sig ), x );
		Text( {0, 1.8}, "mu=", Round( mu, 2 ) );
		Text( {0, 1.6}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Logistic Distribution

**구문:** p = Logistic Distribution( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로지스틱 분포의 x에서의 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = .2;
New Window( "Example: Logistic Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Logistic Quantile

**구문:** q = Logistic Quantile( p, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로지스틱 분포의 p에서의 분위수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = .2;
qq = .5;
New Window( "Example: Logistic Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Logistic Quantile( qq, mu, sig ), 0, 1 );
		Text( {0.1, 0.9}, " mu=", Round( mu, 2 ), " sig=", Round( sig, 2 ), " quantile=", Round( qq, 2 ) );
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Loglogistic Density

**구문:** y = Loglogistic Density( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로그로지스틱 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = .2;
New Window( "Example: Loglogistic Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Loglogistic Distribution

**구문:** p = Loglogistic Distribution( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로그로지스틱 분포의 x에서의 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = .2;
New Window( "Example: Loglogistic Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Loglogistic Quantile

**구문:** q = Loglogistic Quantile( p, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로그로지스틱 분포의 p에서의 분위수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = .2;
qq = .5;
New Window( "Example: Loglogistic Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Loglogistic Quantile( qq, mu, sig ), 0, 1 );
		Text( {0.1, 0.9}, " mu=", Round( mu, 2 ), " sig=", Round( sig, 2 ), " quantile=", Round( qq, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Lognormal Density

**구문:** y = Lognormal Density( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로그 정규 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = 1;
New Window( "Example: Lognormal Density",
	y = Graph Box(
		Y Scale( 0, .15 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Density( x, mu, sig ), x );
		Text( {0, .14}, "mu=", Round( mu, 2 ) );
		Text( {0, .12}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Lognormal Distribution

**구문:** p = Lognormal Distribution( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로그 정규 분포의 x에서의 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = 1;
New Window( "Example: Lognormal Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Lognormal Quantile

**구문:** q = Lognormal Quantile( p, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 로그 정규 분포의 p에서의 분위수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 0;
sig = 1;
qq = .5;
New Window( "Example: Lognormal Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Lognormal Quantile( qq, mu, sig ), 0, 1 );
		Text( {0.1, 0.9}, " mu=", Round( mu, 2 ), " sig=", Round( sig, 2 ), " quantile=", Round( qq, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 3, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Normal Biv Distribution

**구문:** y = Normal Biv Distribution( x, y, r, <mu1=0>, <s1=1>, <mu2=0>, <s2=1> )

**설명:** 관측값 (X, Y)가 (x, y)보다 작거나 같을 확률을 계산합니다. 여기서 r은 두 변수의 상관계수입니다. X는 평균 mu1 및 표준편차 s1의 주변 정규분포의 관측값이고 Y는 평균 mu2 및 표준편차 s2의 주변 정규분포의 관측값입니다. mu1, s1, mu2 및 s2가 제공되지 않으면 mu1=0, s1=1, mu2=0 및 s2=1을 사용하여 이변량 표준 정규 분포를 가정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Density

**구문:** y = Normal Density( q, <mu=0>, <sigma=1> )

**설명:** 평균이 mu이고 표준편차가 sigma인 정규 분포의 q에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: Normal Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Density( q ), q );
	)
);

```

### Normal Distribution

**구문:** p = Normal Distribution( q, <mu=0>, <sigma=1> )

**설명:** 정규 분포 확률 변수가 q보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: Normal Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Distribution( q ), q );
	)
);

```

### Normal Log CDistribution

**구문:** y = Normal Log CDistribution( x, <mean=0>, <std dev=1> )

**설명:** 평균이 mu이고 표준편차가 sigma인 x에서의 1 - 정규 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: Normal Log CDistribution",
	nlcdiy = Graph Box(
		Y Scale( -10, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log CDistribution( q ), q );
	)
);

```

### Normal Log Density

**구문:** y = Normal Log Density( x, <mu=0>, <sigma=1>)

**설명:** 평균이 mu이고 표준편차가 sigma인 x에서의 정규 확률 밀도의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: Normal Log Density",
	nldey = Graph Box(
		Y Scale( -9, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log Density( q ), q );
	)
);

```

### Normal Log Distribution

**구문:** y = Normal Log Distribution( x, <mean=0>, <std dev=1> )

**설명:** 평균이 mu이고 표준편차가 sigma인 x에서의 정규 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: Normal Log Distribution",
	nldiy = Graph Box(
		Y Scale( -10, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log Distribution( q ), q );
	)
);

```

### Normal Mixture Density

**구문:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**설명:** 그룹 평균 meanvec, 그룹 표준편차 sdvec, 그룹 확률 probvec로 정의되는 정규 혼합 분포의 q에서의 밀도를 반환합니다. 여기서 meanvec, sdvec 및 probvec은 모두 동일한 크기의 벡터입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu1 = -2;
mu2 = 2;
sigma1 = 1;
sigma2 = 4;
p1 = .5;
t1 = mu1 |/ mu2;
t2 = sigma1 |/ sigma2;
t3 = p1 |/ (1 - p1);
New Window( "Univariate Normal Mixture Density",
	clty = Graph Box(
		Y Scale( 0, 0.4 ),
		X Scale( -8, 8 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		t1 = mu1 |/ mu2;
		t2 = sigma1 |/ sigma2;
		t3 = p1 |/ (1 - p1);
		Y Function( Normal Mixture Density( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ), y );
		Text( {-7, .37}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .37}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .34}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .34}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .31}, "P1=", Round( p1, 2 ) );
		Text( {-2, .31}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Distribution

**구문:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**설명:** 그룹 평균 meanvec, 그룹 표준편차 sdvec 및 그룹 확률 probvec로 정의되는 정규 혼합 분포 확률 변수가 q보다 작을 확률을 반환합니다. meanvec, sdvec 및 probvec는 모두 동일한 크기의 벡터입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu1 = -2;
mu2 = 2;
sigma1 = 1;
sigma2 = 4;
p1 = .5;
New Window( "Univariate Normal Mixture Distribution",
	clty = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -8, 8 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		Y Function( Normal Mixture Distribution( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ), y );
		Text( {-7, .95}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .95}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .85}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .85}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .75}, "P1=", Round( p1, 2 ) );
		Text( {-2, .75}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Quantile

**구문:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**설명:** 정규 혼합 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
extqdf = 1;
extqqq = 0.5;
mu1 = -1;
mu2 = 1;
sigma1 = 1;
sigma2 = 4;
p1 = .3;
New Window( "Example: Normal Mixture Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Pen Size( 2 );
		Y Function( Normal Mixture Distribution( q, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ), q );
		Pen Color( "blue" );
		V Line( Normal Mixture Quantile( extqqq, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ), 0, 1 );
		Text( {-4.5, 0.9}, " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ),
	H List Box( Slider Box( -3, 3, mu1, extqgr << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, extqgr << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, extqgr << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, extqgr << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, extqgr << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Quantile

**구문:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**설명:** 정규 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### Probit

**구문:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**설명:** 정규 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### SEV Density

**구문:** y = SEV Density( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 최소 극단값 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 50;
sig = 5;
New Window( "Example: SEV Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### SEV Distribution

**구문:** p = SEV Distribution( x, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 최소 극단값 분포의 x에서의 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 50;
sig = 5;
New Window( "Example: SEV Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### SEV Quantile

**구문:** q = SEV Quantile( p, mu, sigma )

**설명:** 위치 모수가 mu이고 척도 모수가 sigma인 최소 극단값 분포의 p에서의 분위수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
mu = 50;
sig = 5;
qq = .5;
New Window( "Example: SEV Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( SEV Quantile( qq, mu, sig ), 0, 1 );
		Text( {0.1, 0.9}, " mu=", Round( mu, 2 ), " sig=", Round( sig, 2 ), " quantile=", Round( qq, 2 ) );
	),
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### SHASH Density

**구문:** d = SHASH Density( x, gamma, delta, theta, sigma )

**설명:** SHASH(sinh-arcsinh) 분포의 x에서의 밀도를 반환합니다. SHASH 변환을 사용하여 정규 분포에 더 가까운 데이터를 생성할 수 있습니다.

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
SHASH Density( 0, -1, 2, -2, 3 );

```

### SHASH Distribution

**구문:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**설명:** SHASH(sinh-arcsinh) 분포 확률 변수가 q보다 작을 확률을 반환합니다. SHASH 변환을 사용하여 정규 분포에 더 가까운 데이터를 생성할 수 있습니다.

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
gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: SHASH Distribution",
	jsuc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( SHASH Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) )
);

```

### SHASH Quantile

**구문:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**설명:** SHASH(sinh-arcsinh) 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다. SHASH 변환을 사용하여 정규 분포에 더 가까운 데이터를 생성할 수 있습니다.

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
SHASH Quantile( .5, 1, 2, 3, 1 );

```

### Students t Density

**구문:** p = t Density( q, df, <nonCentrality=0> )

**설명:** 스튜던트 t의 밀도 함수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
tdedf = 1;
New Window( "Example: Students t Density",
	tdegr = Graph Box(
		Y Scale( -.05, 0.45 ),
		X Scale( -8, 8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );
		H Line( 2, 3, 0.3 );
		Pen Color( "blue" );
		Y Function( Normal Density( tdeq ), tdeq );
		H Line( 2, 3, 0.25 );
		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );
		Text( {3.5, 0.3}, "Student t" );
		Text( {3.5, 0.25}, "Normal" );
	),
	H List Box( Text Box( "df " ), Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow ) )
);

```

### Students t Distribution

**구문:** p = t Distribution( q, df, <nonCentrality=0> )

**설명:** 스튜던트 t 확률 변수가 q보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
tdidf = 1;
New Window( "Example: Students t Distribution",
	tdigr = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( tdiq, tdidf ), tdiq );
		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) )
);

```

### Students t Quantile

**구문:** q = t Quantile( p, df, <nonCentrality=0> )

**설명:** 스튜던트 t-검정에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
extqdf = 1;
extqqq = 0.5;
New Window( "Example: Students t Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( q, Round( extqdf ) ), q );
		Pen Color( "blue" );
		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), 

);

```

### Tukey HSD P value

**구문:** p = Tukey HSD P value( q, nGroups, dfe )

**설명:** Tukey HSD 다중 비교 검정의 p 값을 반환합니다. 여기서 q는 검정 통계량이고 nGroups는 그룹 수이며 dfe는 총 표본 수를 기반으로 한 오차 자유도입니다.



q는 Tukey 수정 임계값으로, Tukey의 스튜던트화 범위 분포 분위수를 sqrt(2)로 나눈 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**구문:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**설명:** Tukey HSD 다중 비교 검정에 필요한 분위수를 반환합니다. 여기서 1-alpha는 신뢰 수준이고 nGroups는 그룹 수이며 dfe는 총 표본 수를 기반으로 한 오차 자유도입니다.



q는 Tukey 수정 임계값으로, Tukey의 스튜던트화 범위 분포 분위수를 sqrt(2)로 나눈 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
alpha = 0.05;
dfe = 5;
Tukey HSD Quantile( 1 - alpha, 20, dfe );
New Window( "Example: Tukey HSD Quantile",
	tdigr = Graph Box(
		Y Scale( 2, 8 ),
		X Scale( 2.5, 15.5 ),
		YName( "Tukey HSD Quantile" ),
		XName( "Groups" ),
		Pen Color( "red" );
		For( i = 3, i <= 15, i++,
			V Line( i, 0, Tukey HSD Quantile( 1 - alpha, i, dfe ) )
		);
		Text( {3, 7}, "dfe=", Round( dfe, 2 ) );
	),
	H List Box( Text Box( "dfe" ), Slider Box( 3, 10, dfe, tdigr << reshow ) )
);

```

### Weibull Density

**구문:** y = Weibull Density( x, shape, <scale=1>, <threshold=0> )

**설명:** 모수가 shape이고 선택적 모수가 scale인 Weibull 확률 분포의 x에서의 밀도를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
shape = 0.5;
New Window( "Example: Weibull Density",
	y = Graph Box(
		Y Scale( 0, 2 ),
		X Scale( 0, 1.5 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Weibull Density( x, shape ), x );
		Text( {1.1, 1.8}, " shape=", Round( shape, 2 ) );
	),
	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) )
);

```

### Weibull Distribution

**구문:** p = Weibull Distribution( x, shape, <scale=1>, <threshold=0> )

**설명:** 모수가 shape이고 선택적 모수가 scale인 Weibull 분포 확률 변수가 x보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
shape = 2;
New Window( "Example: Weibull Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 2 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Weibull Distribution( x, shape ), x );
		Text( {0.1, 0.9}, " shape=", Round( shape, 2 ) );
	),
	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) )
);

```

### Weibull Quantile

**구문:** q = Weibull Quantile( p, beta, <alpha=1>, <threshold=0> )

**설명:** Weibull 분포에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다. 여기서 beta 및 alpha는 각각 형상 및 척도 모수입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
exwqbeta = 2;
exwqqq = 0.5;
New Window( "Example: Weibull Quantile",
	exwqy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Weibull Distribution( exwqq, exwqbeta ), exwqq );
		Pen Color( "blue" );
		V Line( Weibull Quantile( exwqqq, exwqbeta ), 0, 1 );
		Text( {0.1, 0.9}, " \!U03B2=", Round( exwqbeta, 2 ), " quantile=", Round( exwqqq, 2 ) );
	),
	H List Box( Slider Box( 0, 5, exwqbeta, exwqy << reshow ), Text Box( " \!U03B2" ) ),
	H List Box( Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ), Text Box( " quantile" ) )
);

```

### t Density

**구문:** p = t Density( q, df, <nonCentrality=0> )

**설명:** 스튜던트 t의 밀도 함수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
tdedf = 1;
New Window( "Example: Students t Density",
	tdegr = Graph Box(
		Y Scale( -.05, 0.45 ),
		X Scale( -8, 8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );
		H Line( 2, 3, 0.3 );
		Pen Color( "blue" );
		Y Function( Normal Density( tdeq ), tdeq );
		H Line( 2, 3, 0.25 );
		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );
		Text( {3.5, 0.3}, "Student t" );
		Text( {3.5, 0.25}, "Normal" );
	),
	H List Box( Text Box( "df " ), Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow ) )
);

```

### t Distribution

**구문:** p = t Distribution( q, df, <nonCentrality=0> )

**설명:** 스튜던트 t 확률 변수가 q보다 작을 확률을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
tdidf = 1;
New Window( "Example: Students t Distribution",
	tdigr = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( tdiq, tdidf ), tdiq );
		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) )
);

```

### t Log CDistribution

**구문:** y = t Log CDistribution( x, df, <nc> )

**설명:** 1 - t 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
tlcdidf = 1;
New Window( "Example: Students t Log CDistribution",
	tlcdigr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log CDistribution( tlcdiq, tlcdidf ), tlcdiq );
		Text( {-4.5, -0.9}, "df=", Round( tlcdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tlcdidf, tlcdigr << reshow ) )
);

```

### t Log Density

**구문:** y = t Log Density( x, df, <nc> )

**설명:** t 확률 밀도의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
tldedf = 1;
New Window( "Example: Students t Log Density",
	tldegr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log Density( tldeq, tldedf ), tldeq );
		Text( {2.5, -0.35}, "df=", Round( tldedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, tldedf, tldegr << reshow ) )
);

```

### t Log Distribution

**구문:** y = t Log Distribution( x, df, <nc> )

**설명:** t 분포의 로그를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
tldidf = 1;
New Window( "Example: Students t Log Distribution",
	tldigr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log Distribution( tldiq, tldidf ), tldiq );
		Text( {-4.5, -0.9}, "df=", Round( tldidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tldidf, tldigr << reshow ) )
);

```

### t Noncentrality

**구문:** nc = t Noncentrality( x, df, prob )

**설명:** prob = t Distribution( x, df, nc )와 같은 스튜던트 t 분포의 비중심성 모수를 계산합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example: t Noncentrality",
	tncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( 3, 2, t Noncentrality( 3, 2, q ) ), q );
	)
);
t Distribution( 3, 2, t Noncentrality( 3, 2, 0.5 ) );

```

### t Quantile

**구문:** q = t Quantile( p, df, <nonCentrality=0> )

**설명:** 스튜던트 t-검정에서 분위수를 반환합니다. 누적 확률이 p인 확률 변수의 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
extqdf = 1;
extqqq = 0.5;
New Window( "Example: Students t Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( q, Round( extqdf ) ), q );
		Pen Color( "blue" );
		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), 

);

```

