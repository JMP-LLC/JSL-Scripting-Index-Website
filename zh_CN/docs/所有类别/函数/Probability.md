# Probability



## 函数

### Beta Density

**语法:** y = Beta Density( q, alpha, beta, <theta=0>, <sigma=1> )

**说明:** 返回 beta 分布在 q 处的密度，其中 q 介于 theta 和 theta + sigma 之间，alpha 和 beta 为形状参数，theta 和 sigma 分别为阈值和极值参数。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Beta Distribution( q, alpha, beta, <theta=0>, <sigma=1> )

**说明:** 返回 beta 分布随机变量小于 q 的概率，其中 alpha 和 beta 为形状参数，theta 和 sigma 分别为阈值和极值参数。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Beta Quantile( p, alpha, beta, <theta=0>, <sigma=1> )

**说明:** 返回随机值小于该值概率为 p 的 Beta 分布的分位数，其中 alpha 和 beta 是形状参数，theta 和 sigma 分别为阈值和范围参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Beta Quantile( 0.95, 2, 5 );

```

### Cauchy Density

**语法:** y = Cauchy Density( q, <center>, <scale> )

**说明:** 返回中心为 mu、尺度为 sigma 的 Cauchy 分布在 q 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Cauchy Distribution( q, <center>, <scale> )

**说明:** 返回 Cauchy 分布随机变量小于 q 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Cauchy Quantile( p, <center>, <scale> )

**说明:** 返回 Cauchy 分布的一个分位数，当随机变量小于该分位数时的概率为 p。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = ChiSquare Density( q, df, <nonCentrality=0> )

**说明:** 返回自由度为 df 的卡方分布在 q 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = ChiSquare Distribution( q, df, <nonCentrality=0> )

**说明:** 返回卡方分布随机变量小于 q 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = ChiSquare Log CDistribution( x, df, <nonCentrality=0> )

**说明:** 返回 1 - 卡方分布的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = ChiSquare Log Density( x, df, <nonCentrality=0> )

**说明:** 返回卡方概率密度的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = ChiSquare Log Distribution( x, df, <nonCentrality=0> )

**说明:** 返回卡方分布的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** nc = ChiSquare Noncentrality( x, df, prob )

**说明:** 返回非中心参数 nc，使得服从自由度为 df 的卡方分布的随机变量小于 x 的概率为 prob。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = ChiSquare Quantile( p, df, <nonCentrality=0> )

**说明:** 返回随机值小于该值概率为 p 的卡方分布的分位数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
ChiSquare Quantile( 0.15, 5 );

```

### Dunnett P value

**语法:** p = Dunnett P value( q, nTrt, dfe, <lambdaVec = .> )

**说明:** 返回 Dunnett 多重比较检验中的 p 值，其中 q 为检验统计量，nTrt 为较于控制组的处理数量，dfe 为误差自由度（基于总研究样本），可选 lambdaVec 为参数向量，默认设置为 1/sqrt(2)。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**语法:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, <lambdaVec = .> )

**说明:** 返回 Dunnett 多重比较检验中所需的分位数，其中 1-alpha 为置信水平，nTrt 为较于控制组的处理数量，dfe 为误差自由度（基于总研究样本），可选 lambdaVec 为参数向量，默认设置为 1/sqrt(2)。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Dunnett Quantile( 0.95, 3, 11 );

```

### ExGaussian Density

**语法:** y = ExGaussian Density( x, location, scale, shape )

**说明:** 返回 ExGaussian 分布在x 处的密度。

**JMP添加的版本:** 18

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

**语法:** y = ExGaussian Distribution( x, location, scale, shape )

**说明:** 返回 ExGaussian 分布随机变量小于 x 的概率。

**JMP添加的版本:** 18

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

**语法:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**说明:** 返回随机值小于该值，概率为 p 的 ExGaussian 分布的分位数。

**JMP添加的版本:** 18

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

**语法:** y = Exp Density( x, <theta=1> )

**说明:** 返回参数为“theta”的指数分布在 x 处的密度。

**JMP添加的版本:** 14

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

**语法:** p = Exp Distribution( x, <theta=1> )

**说明:** 返回指数分布随机变量小于 x 的概率。

**JMP添加的版本:** 14

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

**语法:** q = Exp Quantile( p, <theta=1> )

**说明:** 返回随机值小于该值概率为 p 的指数分布的分位数。

**JMP添加的版本:** 14

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

**语法:** y = Exponential Density( x, <theta=1> )

**说明:** 返回参数为“theta”的指数分布在 x 处的密度。

**JMP添加的版本:** 17

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

**语法:** p = Exponential Distribution( x, <theta=1> )

**说明:** 返回指数分布随机变量小于 x 的概率。

**JMP添加的版本:** 17

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

**语法:** q = Exponential Quantile( p, <theta=1> )

**说明:** 返回随机值小于该值概率为 p 的指数分布的分位数。

**JMP添加的版本:** 17

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

**语法:** y = F Density( q, dfnum, dfden, <nonCentrality=0> )

**说明:** 返回具有 dfn 和 dfd 自由度的 F 分布在 q 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = F Distribution( q, dfnum, dfden, <nonCentrality=0> )

**说明:** 返回 F 分布随机变量小于 q 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = F Log CDistribution( x, dfnum, dfden, <nonCentrality=0> )

**说明:** 返回 1 - F 分布的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = F Log Density( x, dfnum, dfden, <nonCentrality=0> )

**说明:** 返回 F 概率密度的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = F Log Distribution( x, dfnum, dfden, <nonCentrality=0> )

**说明:** 返回 F 分布的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** nc = F Noncentrality( x, dfnum, dfden, prob )

**说明:** 求解非中心参数 nc，使得 prob = F Distribution( x, ndf, ddf, nc )。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = F Power( alpha, dfh, dfm, d, n )

**说明:** 计算 F 检验的功效，其中 alpha 为显著性水平，dfh 为假设自由度，dfm 为整个模型的自由度，d 为效应大小的平方，即 SSH/(n*sigma^2)（其中 SSH 为假设的平方和，n 为总观测数）。注意: 对于 ANOVA 模型，d = Sum(a[i]^2)/(k * sigma^2)，其中 a[i] 为效应，k 为均值数。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = F Quantile( p, dfnum, dfden, <nonCentrality=0> )

**说明:** 返回随机值小于该值概率为 p 的 F 分布的分位数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**语法:** n = F Sample Size( alpha, dfh, dfm, d, power )

**说明:** 计算样本大小，其中 alpha 为显著性水平，dfh 为假设自由度，dfm 为整个模型的自由度，d 为效应大小的平方，即 SSH/(n*sigma^2)（其中 SSH 为假设的平方和，power 为所需的功效）。注意: 对于 ANOVA 模型，d = Sum(a[i]^2)/(k * sigma^2)，其中a[i] 为效应，k 为均值数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = FDR Adjust( matrix )

**说明:** 使用 Benjamini-Hochberg 方法返回指定 p 值的误发现率调整。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### Frechet Density

**语法:** y = Frechet Density( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的 Fréchet 分布在 x 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Frechet Distribution( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的 Fréchet 分布在 x 处的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Frechet Quantile( p, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的 Fréchet 分布在 p 处的分位数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### GLog Density

**语法:** y = GLog Density( q, mu, sigma, lambda )

**说明:** 返回位置变量为 mu、尺度变量为 sigma 和形状变量为 lambda 的广义对数分布在 q 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = GLog Distribution( q, mu, sigma, lambda )

**说明:** 返回广义对数分布随机变量小于 q 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = GLog Quantile( p, mu, sigma, lambda )

**说明:** 返回随机值小于该值概率为 p 的广义自然对数分布的分位数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Gamma Density( q, <alpha=1>, <scale=1>, <threshold=0> )

**说明:** 返回 Gamma 概率分布在 q 处的密度，其中 alpha 形状参数必须为正。

**JMP添加的版本:** 早于版本 14

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
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdealpha, gdey << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Distribution

**语法:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**说明:** 返回 Gamma 分布随机变量小于 q 的概率，其中 alpha 形状参数必须为正。IGamma() 是 Gamma Distribution() 的别名。Gamma Distribution() 函数等价于 Gamma(alpha,q)/Gamma(alpha)。

**JMP添加的版本:** 早于版本 14

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
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log CDistribution

**语法:** p = Gamma Log CDistribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**说明:** 返回 1 - Gamma 分布的对数。

**JMP添加的版本:** 早于版本 14

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
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), glcdialpha, glcdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Density

**语法:** y = Gamma Log Density( x, <alpha=1>, <scale=1>, <threshold=0> )

**说明:** 返回 Gamma 概率密度的对数。

**JMP添加的版本:** 早于版本 14

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
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gldealpha, gldey << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Distribution

**语法:** p = Gamma Log Distribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**说明:** 返回 Gamma 分布的对数。

**JMP添加的版本:** 早于版本 14

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
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gldialpha, gldiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Quantile

**语法:** q = Gamma Quantile( p, <alpha=1>, <scale=1>, <threshold=0> )

**说明:** 返回随机值小于该值概率为 p 的 Gamma 分布的分位数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**语法:** y = GenGamma Density( x, mu, sigma, lambda )

**说明:** 返回扩展的广义 Gamma 概率分布（参数为 mu、sigma 和 lambda）在 x 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = GenGamma Distribution( x, mu, sigma, lambda )

**说明:** 返回扩展的广义 Gamma 分布随机变量（参数为 mu、sigma 和 lambda）小于 x 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = GenGamma Quantile( p, mu, sigma, lambda )

**说明:** 返回随机值小于该值概率为 p 的扩展的广义 Gamma 分布（参数为 mu、sigma 和 lambda）的分位数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{-9, 0.7},
			"quantile= ",
			Round( GenGamma Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### IGamma

**语法:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**说明:** 返回 Gamma 分布随机变量小于 q 的概率，其中 alpha 形状参数必须为正。IGamma() 是 Gamma Distribution() 的别名。Gamma Distribution() 函数等价于 Gamma(alpha,q)/Gamma(alpha)。

**JMP添加的版本:** 早于版本 14

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
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Johnson Sb Density

**语法:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**说明:** 返回 Johnson Sb 分布在 q 处的密度，其中 q 位于 theta 到 theta + sigma 这一区间中。delta（大于零）和 gamma（介于 -∞ 到 +∞ 之间）是形状参数，sigma（大于零）是尺度参数，theta（介于 -∞ 到 +∞ 之间）是阈值参数。注意: theta 是分布的下端点，sigma 是分布的支持范围。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**说明:** 返回 Johnson Sb 分布随机变量小于 q 的概率。（注意: 有关参数说明，请参见 Johnson Sb Density() 函数。）

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**说明:** 返回随机值小于该值概率为 p 的 Johnson Sb 分布的分位数。（注意: p 是第一个参数。有关参数说明，请参见 Johnson Sb Density() 函数。）

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**语法:** y = Johnson Sl Density( q, gamma, delta, theta, <sigma=1> )

**说明:** 返回 Johnson Sl 分布在 q 处的密度，其中 q 位于 theta 到 +∞ 这一区间中。delta（大于零）和 gamma（介于 -∞ 到 +∞ 之间）是形状参数，sigma（等于 +1 或 -1）是尺度参数，theta（介于 -∞ 到 +∞ 之间）是阈值参数。注意: 当 sigma = 1 时，theta 为分布下限。当 sigma=-1 时，theta 为分布上限。此外，正 sigma 表示正偏度，负 sigma 表示负偏度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Johnson Sl Distribution( q, gamma, delta, theta, <sigma=1> )

**说明:** 返回 Johnson Sl 分布随机变量小于 q 的概率。（注意: 有关参数说明，请参见 Johnson Sl Density() 函数。）

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Johnson Sl Quantile( p, gamma, delta, theta, <sigma=1> )

**说明:** 返回随机值小于该值概率为 p 的 Johnson Sl 分布的分位数。（注意: p 是第一个参数。有关参数说明，请参见 Johnson Sl Density() 函数。）

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**语法:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**说明:** 返回 Johnson Su 分布在 q 处的密度，其中 q 介于 -∞ 到 +∞ 之间。delta（大于零）和 gamma（介于 -∞ 到 +∞ 之间）是形状参数，sigma（大于零）是尺度参数，theta（介于 -∞ 到 +∞ 之间）是阈值参数。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**说明:** 返回 Johnson Su 分布随机变量小于 q 的概率。（注意: 有关参数说明，请参见 Johnson Su Density() 函数。）

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**说明:** 返回随机值小于该值概率为 p 的 Johnson Su 分布的分位数。（注意: p 是第一个参数。有关参数说明，请参见 Johnson Su Density() 函数。）

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### LEV Density

**语法:** y = LEV Density( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的最大极值分布在 x 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = LEV Distribution( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的最大极值分布在 x 处的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = LEV Quantile( p, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的最大极值分布在 p 处的分位数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### LogGenGamma Density

**语法:** y = LogGenGamma Density( x, mu, sigma, lambda )

**说明:** 返回对数广义 Gamma 概率分布（参数为 mu、sigma 和 lambda）在 x 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**说明:** 返回对数广义 Gamma 分布随机变量（参数为 mu、sigma 和 lambda）小于 x 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**说明:** 返回随机值小于该值概率为 p 的对数广义 Gamma 分布（参数为 mu、sigma 和 lambda）的分位数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{-19, 0.7},
			"quantile= ",
			Round( LogGenGamma Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Logistic Density

**语法:** y = Logistic Density( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的 logistic 分布在 x 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Logistic Distribution( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的 logistic 分布在 x 处的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Logistic Quantile( p, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的 logistic 分布在 p 处的分位数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Loglogistic Density

**语法:** y = Loglogistic Density( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的对数 Logistic 分布在 x 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Loglogistic Distribution( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的对数 Logistic 分布在 x 处的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Loglogistic Quantile( p, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的对数 Logistic 分布在 p 处的分位数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Lognormal Density

**语法:** y = Lognormal Density( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的对数正态分布在 x 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Lognormal Distribution( x, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的对数正态分布在 x 处的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Lognormal Quantile( p, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的对数正态分布在 p 处的分位数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 3, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Normal Biv Distribution

**语法:** y = Normal Biv Distribution( x, y, r, <mu1=0>, <s1=1>, <mu2=0>, <s2=1> )

**说明:** 计算观测值 (X, Y) 小于等于相关系数为 r 的 (x, y) 的概率，其中 X 服从均值为 mu1 且标准差为 s1 的边缘正态分布，Y 服从均值为 mu2 且标准差为 s2 的边缘正态分布。若未给定 mu1、s1、mu2 和 s2，则函数会假定服从标准二元正态分布，其中 mu1=0，s1=1，mu2=0 且 s2=1。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Density

**语法:** y = Normal Density( q, <mu=0>, <sigma=1> )

**说明:** 返回具有均值 mu 和标准差 sigma 的正态分布 q 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Normal Distribution( q, <mu=0>, <sigma=1> )

**说明:** 返回正态分布随机变量小于 q 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Normal Log CDistribution( x, <mean=0>, <std dev=1> )

**说明:** 返回均值为 mu 且标准差为 sigma 在 x 处的 1 - 正态分布的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Normal Log Density( x, <mu=0>, <sigma=1>)

**说明:** 返回均值为 mu 且标准差为 sigma 在 x 处的正态概率密度的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Normal Log Distribution( x, <mean=0>, <std dev=1> )

**说明:** 返回均值为 mu 且标准差为 sigma 在 x 处的正态分布的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**说明:** 返回正态混合分布在 q 处的密度，该分布的组均值为 meanvec、组标准差为 sdvec、组概率为 probvec。此处的 meanvec、sdvec 和 probvec 是大小相同的向量。

**JMP添加的版本:** 早于版本 14

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
		Y Function(
			Normal Mixture Density( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			y
		);
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

**语法:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**说明:** 返回正态混合分布变量小于 q 的概率，该分布的组均值为 meanvec、组标准差为 sdvec、组概率为 probvec。此处的 meanvec、sdvec 和 probvec 是大小相同的向量。

**JMP添加的版本:** 早于版本 14

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
		Y Function(
			Normal Mixture Distribution( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			y
		);
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

**语法:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**说明:** 返回随机值小于该值概率为 p 的正态混合分布的分位数。

**JMP添加的版本:** 早于版本 14

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
		Y Function(
			Normal Mixture Distribution( q, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			q
		);
		Pen Color( "blue" );
		V Line(
			Normal Mixture Quantile( extqqq, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			0,
			1
		);
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

**语法:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**说明:** 返回随机值小于该值概率为 p 的正态分布的分位数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### Probit

**语法:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**说明:** 返回随机值小于该值概率为 p 的正态分布的分位数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### SEV Density

**语法:** y = SEV Density( x, mu, sigma )

**说明:** 返回位置为 mu 且尺度为 sigma 的最小极值分布在 x 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = SEV Distribution( x, mu, sigma )

**说明:** 返回位置为 mu 且尺度为 sigma 的最小极值分布在 x 处的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = SEV Quantile( p, mu, sigma )

**说明:** 返回位置为 mu、尺度为 sigma 的最小极值分布在 p 处的分位数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### SHASH Density

**语法:** d = SHASH Density( x, gamma, delta, theta, sigma )

**说明:** 返回 sinh-arcsinh (SHASH) 分布在 x 处的密度。SHASH 变换可用于创建更接近正态分布的数据。

**JMP添加的版本:** 14

**SHASH 变换**

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

**示例 1**

```jsl

Names Default To Here( 1 );
SHASH Density( 0, -1, 2, -2, 3 );

```

### SHASH Distribution

**语法:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**说明:** 返回 sinh-arcsinh (SHASH) 分布随机变量小于 q 的概率。SHASH 变换可用于创建更接近正态分布的数据。

**JMP添加的版本:** 14

**SHASH 变换**

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

**示例 1**

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

**语法:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**说明:** 返回 sinh-arcsinh (SHASH) 分布的一个分位数，当随机变量小于该分位数时的概率为 p。SHASH 变换可用于创建更接近正态分布的数据。

**JMP添加的版本:** 14

**SHASH 变换**

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

**示例 1**

```jsl

Names Default To Here( 1 );
SHASH Quantile( .5, 1, 2, 3, 1 );

```

### Students t Density

**语法:** p = t Density( q, df, <nonCentrality=0> )

**说明:** 返回 Student t 检验的密度函数。

**JMP添加的版本:** 早于版本 14

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
	H List Box(
		Text Box( "df " ),
		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )
	)
);

```

### Students t Distribution

**语法:** p = t Distribution( q, df, <nonCentrality=0> )

**说明:** 返回 Student t 分布随机变量小于 q 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = t Quantile( p, df, <nonCentrality=0> )

**说明:** 返回随机值小于该值概率为 p 的 Student t 分布的分位数。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Tukey HSD P value( q, nGroups, dfe )

**说明:** 返回 Tukey HSD 多重比较检验中的 p 值，其中 q 是检验统计量，nGroups 是研究的组数，dfe 是误差自由度（基于总样本）。



请注意，q 是 Tukey 调整临界值，它是 Tukey 学生化范围分布的分位数除以 sqrt(2)。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**语法:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**说明:** 返回 Tukey HSD 多重比较检验中所需的分位数，其中 1-alpha 是置信水平，nGroups 是研究的组数，dfe 是误差自由度（基于总样本）。



请注意，q 是 Tukey 调整临界值，它是 Tukey 学生化范围分布的分位数除以 sqrt(2)。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Weibull Density( x, shape, <scale=1>, <threshold=0> )

**说明:** 返回具有 shape 参数和可选 scale 参数的 Weibull 概率分布在 x 处的密度。

**JMP添加的版本:** 早于版本 14

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

**语法:** p = Weibull Distribution( x, shape, <scale=1>, <threshold=0> )

**说明:** 返回 Weibull 分布随机变量（具有 shape 参数和可选 scale 参数 ）小于 x 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = Weibull Quantile( p, beta, <alpha=1>, <threshold=0> )

**说明:** 返回随机值小于该值概率为 p 的 Weibull 分布的分位数，其中 beta 和 alpha 分别为形状和尺度参数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{0.1, 0.9},
			" \!U03B2=",
			Round( exwqbeta, 2 ),
			" quantile=",
			Round( exwqqq, 2 )
		);
	),
	H List Box( Slider Box( 0, 5, exwqbeta, exwqy << reshow ), Text Box( " \!U03B2" ) ),
	H List Box( Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ), Text Box( " quantile" ) )
);

```

### t Density

**语法:** p = t Density( q, df, <nonCentrality=0> )

**说明:** 返回 Student t 检验的密度函数。

**JMP添加的版本:** 早于版本 14

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
	H List Box(
		Text Box( "df " ),
		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )
	)
);

```

### t Distribution

**语法:** p = t Distribution( q, df, <nonCentrality=0> )

**说明:** 返回 Student t 分布随机变量小于 q 的概率。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = t Log CDistribution( x, df, <nc> )

**说明:** 返回 1 - t 分布的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = t Log Density( x, df, <nc> )

**说明:** 返回 t 概率密度的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = t Log Distribution( x, df, <nc> )

**说明:** 返回 t 分布的对数。

**JMP添加的版本:** 早于版本 14

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

**语法:** nc = t Noncentrality( x, df, prob )

**说明:** 求解 Student t 分布的非中心参数，使得 prob = t Distribution( x, df, nc )。

**JMP添加的版本:** 早于版本 14

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

**语法:** q = t Quantile( p, df, <nonCentrality=0> )

**说明:** 返回随机值小于该值概率为 p 的 Student t 分布的分位数。

**JMP添加的版本:** 早于版本 14

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

