# Probability



### Beta Density

**構文:** y = Beta Density( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**説明:** ベータ分布の密度関数。qにおけるベータ分布の密度を戻す。qはthetaからtheta + sigmaの区間内。alphaとbetaは形状パラメータ。thetaは閾値パラメータ。sigmaは範囲パラメータ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

alpha = 0.5;beta = 0.5;New Window( "Example: Beta Density",	y = Graph Box(		Y Scale( 0, 2.5 ),		X Scale( 0, 1 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Beta Density( q, alpha, beta ), q );		Text( {0.55, 2.2}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );	),	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) ));

```

### Beta Distribution

**構文:** p = Beta Distribution( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**説明:** ベータ分布の累積分布関数。ベータ分布に従う確率変数がq以下になる確率を戻す。alphaとbetaは形状パラメータ。thetaは閾値パラメータ。sigmaは範囲パラメータ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

alpha = 0.5;beta = 0.5;New Window( "Example: Beta Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 1 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Beta Distribution( q, alpha, beta ), q );		Text( {0.1, 0.9}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );	),	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) ));

```

### Beta Quantile

**構文:** q = Beta Quantile( p, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**説明:** ベータ分布の分位点関数。ベータ分布の下側累積確率がpとなる分位点を戻す。alphaとbetaは形状パラメータ。thetaは閾値パラメータ。sigmaは範囲パラメータ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Beta Quantile( 0.95, 2, 5 );

```

### Cauchy Density

**構文:** y = Cauchy Density( q, &lt;center&gt;, &lt;scale&gt; )

**説明:** Cauchy分布の密度関数。中心mu、尺度sigmaのCauchy分布のqにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: Cauchy Density",	y = Graph Box(		Y Scale( 0, .4 ),		X Scale( -6, 6 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Cauchy Density( q ), q );	));

```

### Cauchy Distribution

**構文:** p = Cauchy Distribution( q, &lt;center&gt;, &lt;scale&gt; )

**説明:** Cauchyの累積分布関数。Cauchy分布に従う確率変数がq以下になる確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: Cauchy Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -6, 6 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Cauchy Distribution( q ), q );	));

```

### Cauchy Quantile

**構文:** q = Cauchy Quantile( p, &lt;center&gt;, &lt;scale&gt; )

**説明:** Cauchy分布の分位点関数。Cauchy分布の下側累積確率がpとなる分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: Cauchy Quantile",	Graph Box(		Y Scale( -6, 6 ),		X Scale( 0, 1 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Cauchy Quantile( p ), p );	));

```

### ChiSquare Density

**構文:** p = ChiSquare Density( q, df, &lt;nonCentrality=0&gt; )

**説明:** カイ2乗分布の密度関数。自由度dfのカイ2乗分布のqにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

cdedf = 2;New Window( "Example: ChiSquare Density",	cdey = Graph Box(		Y Scale( 0, 0.4 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Density( cdeq, cdedf ), cdeq );		Text( {7, 0.35}, "df=", Round( cdedf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdedf, cdey << reshow ) ));

```

### ChiSquare Distribution

**構文:** p = ChiSquare Distribution( q, df, &lt;nonCentrality=0&gt; )

**説明:** カイ2乗分布の累積分布関数。カイ2乗分布に従う確率変数がq以下になる確率を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

cdidf = 2;New Window( "Example: ChiSquare Distribution",	cdiy = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Distribution( cdiq, cdidf ), cdiq );		Text( {1, 0.9}, "df=", Round( cdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdidf, cdiy << reshow ) ));

```

### ChiSquare Log CDistribution

**構文:** y = ChiSquare Log CDistribution( x, df, &lt;nonCentrality=0&gt; )

**説明:** カイ2乗分布の生存確率(上側累積確率)の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

clcdidf = 2;New Window( "Example: ChiSquare Log CDistribution",	clcdiy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Log CDistribution( clcdiq, clcdidf ), clcdiq );		Text( {1, -0.9}, "df=", Round( clcdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, clcdidf, clcdiy << reshow ) ));

```

### ChiSquare Log Density

**構文:** y = ChiSquare Log Density( x, df, &lt;nonCentrality=0&gt; )

**説明:** カイ2乗分布の確率密度の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

cldedf = 1;New Window( "Example: ChiSquare Log Density",	cldey = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Log Density( cldeq, cldedf ), cldeq );		Text( {7, -0.35}, "df=", Round( cldedf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cldedf, cldey << reshow ) ));

```

### ChiSquare Log Distribution

**構文:** y = ChiSquare Log Distribution( x, df, &lt;nonCentrality=0&gt; )

**説明:** カイ2乗分布の下側累積確率の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

cldidf = 2;New Window( "Example: ChiSquare Log Distribution",	cldiy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Log Distribution( cldiq, cldidf ), cldiq );		Text( {1, -0.9}, "df=", Round( cldidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, cldidf, cldiy << reshow ) ));

```

### ChiSquare Noncentrality

**構文:** nc = ChiSquare Noncentrality( x, df, prob )

**説明:** 自由度dfのカイ2乗分布に従う確率変数がx以下になる確率がprobとなる非心度パラメータncを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: ChiSquare Noncentrality",	chincgr = Graph Box(		Y Scale( 0.01, 0.99 ),		X Scale( 0.01, 0.99 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, q ) ), q );	));ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, 0.5 ) );

```

### ChiSquare Quantile

**構文:** q = ChiSquare Quantile( p, df, &lt;nonCentrality=0&gt; )

**説明:** カイ2乗分布の分位点関数。カイ2乗分布の下側累積確率がpとなる分位点を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

ChiSquare Quantile( 0.15, 5 );

```

### Dunnett P value

**構文:** p = Dunnett P value( q, nTrt, dfe, &lt;lambdaVec = .&gt; )

**説明:** Dunnettの多重比較検定のp値を戻す。qは検定統計量、nTrtは処置群の数、dfeはデータ全体における誤差の自由度、オプションのlambdaVecはパラメータのベクトルで、デフォルトで1/sqrt(2)に設定されている。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**構文:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, &lt;lambdaVec = .&gt; )

**説明:** Dunnettの多重比較検定で必要な分位点を戻す。1-alphaは信頼水準、nTrtは処置群の数、dfeはデータ全体における誤差の自由度、オプションのlambdaVecはパラメータのベクトルで、デフォルトで1/sqrt(2)に設定されている。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Dunnett Quantile( 0.95, 3, 11 );

```

### ExGaussian Density

**構文:** y = ExGaussian Density( x, location, scale, shape )

**説明:** 指数修正Gauss分布(ExGauss分布)のxにおける密度を戻す。

**JMP追加されたバージョン:** 18

```jsl

New Window( "Example: ExGaussian Density",	y = Graph Box(		Y Scale( 0, .2 ),		X Scale( -2, 15 ),		XName( "x" ),		Pen Color( "red" );		Y Function( ExGaussian Density( x, 0, .5, .25 ), x );	));

```

### ExGaussian Distribution

**構文:** y = ExGaussian Distribution( x, location, scale, shape )

**説明:** 指数修正Gauss分布(ExGauss分布)の累積分布関数。ExGaussian分布に従う確率変数がx以下になる確率を戻す。

**JMP追加されたバージョン:** 18

```jsl

New Window( "Example: ExGaussian Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -2, 15 ),		XName( "x" ),		Pen Color( "red" );		Y Function( ExGaussian Distribution( x, 0, .5, .25 ), x );	));

```

### ExGaussian Quantile

**構文:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**説明:** 指数修正Gauss分布(ExGauss分布)の分位点関数。ExGausssian分布の下側累積確率がp となる分位点を戻す。

**JMP追加されたバージョン:** 18

```jsl

New Window( "Example: ExGaussian Quantile",	Graph Box(		Y Scale( -2, 15 ),		X Scale( 0, 1 ),		XName( "p" ),		Pen Color( "red" );		Y Function( ExGaussian Quantile( p, 0, .5, .25 ), p );	));

```

### Exp Density

**構文:** y = Exp Density( x, &lt;theta=1&gt; )

**説明:** パラメータthetaを持つ指数分布のxにおける密度を戻す。

**JMP追加されたバージョン:** 14

```jsl

New Window( "Example: Exp Density",	y = Graph Box(		Y Scale( 0, 0.45 ),		X Scale( 0, 4 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Exp Density( x, 2 ), x );	));

```

### Exp Distribution

**構文:** p = Exp Distribution( x, &lt;theta=1&gt; )

**説明:** 指数分布の累積分布関数。指数分布に従う確率変数がx以下になる確率を戻す。

**JMP追加されたバージョン:** 14

```jsl

New Window( "Example: Exp Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 4 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Exp Distribution( x, 2 ), x );	));

```

### Exp Quantile

**構文:** q = Exp Quantile( p, &lt;theta=1&gt; )

**説明:** 指数分布の分位点関数。指数分布の下側累積確率がpとなる分位点を戻す。

**JMP追加されたバージョン:** 14

```jsl

New Window( "Example: Exp Quantile",	y = Graph Box(		Y Scale( 0, 4 ),		X Scale( 0, 1 ),		Pen Color( "red" );		Y Function( Exp Quantile( qq, 2 ), qq );	));

```

### Exponential Density

**構文:** y = Exponential Density( x, &lt;theta=1&gt; )

**説明:** パラメータthetaを持つ指数分布のxにおける密度を戻す。

**JMP追加されたバージョン:** 17

```jsl

New Window( "Example: Exponential Density",	y = Graph Box(		Y Scale( 0, 0.45 ),		X Scale( 0, 4 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Exponential Density( x, 2 ), x );	));

```

### Exponential Distribution

**構文:** p = Exponential Distribution( x, &lt;theta=1&gt; )

**説明:** 指数分布の累積分布関数。指数分布に従う確率変数がx以下になる確率を戻す。

**JMP追加されたバージョン:** 17

```jsl

New Window( "Example: Exponential Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 4 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Exponential Distribution( x, 2 ), x );	));

```

### Exponential Quantile

**構文:** q = Exponential Quantile( p, &lt;theta=1&gt; )

**説明:** 指数分布の分位点関数。指数分布の下側累積確率がpとなる分位点を戻す。

**JMP追加されたバージョン:** 17

```jsl

New Window( "Example: Exponential Quantile",	y = Graph Box(		Y Scale( 0, 4 ),		X Scale( 0, 1 ),		Pen Color( "red" );		Y Function( Exponential Quantile( qq, 2 ), qq );	));

```

### F Density

**構文:** y = F Density( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**説明:** F分布の密度関数。自由度がdfnとdfdであるF分布のqにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

fdedfn = 2;fdedfd = 2;New Window( "Example: F Density",	fdey = Graph Box(		Y Scale( 0, 0.8 ),		X Scale( 0, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Density( fdeq, fdedfn, fdedfd ), fdeq );		Text( {2.5, 0.7}, "dfn=", Round( fdedfn, 2 ), " dfd=", Round( fdedfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fdedfn, fdey << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fdedfd, fdey << reshow ) ));

```

### F Distribution

**構文:** y = F Distribution( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**説明:** F分布の累積分布関数。F分布に従う確率変数がq以下になる確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

fdidfn = 5;fdidfd = 5;New Window( "Example: F Distribution",	fdiy = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Distribution( fdiq, fdidfn, fdidfd ), fdiq );		Text( {0.5, 0.9}, "dfn=", Round( fdidfn, 2 ), " dfd=", Round( fdidfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 0.5, 10, fdidfn, fdiy << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 0.5, 10, fdidfd, fdiy << reshow ) ));

```

### F Log CDistribution

**構文:** y = F Log CDistribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**説明:** F分布の生存確率(上側累積確率)の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

flcddfn = 5;flcddfd = 5;New Window( "Example: F Log CDistribution",	flcdy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Log CDistribution( flcdq, flcddfn, flcddfd ), flcdq );		Text( {0.5, -0.9}, "dfn=", Round( flcddfn, 2 ), " dfd=", Round( flcddfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flcddfn, flcdy << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flcddfd, flcdy << reshow ) ));

```

### F Log Density

**構文:** y = F Log Density( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**説明:** F分布の確率密度の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

fldedfn = 1;fldedfd = 1;New Window( "Example: F Log Density",	fldey = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Log Density( fldeq, fldedfn, fldedfd ), fldeq );		Text( {2.5, -0.7}, "dfn=", Round( fldedfn, 2 ), " dfd=", Round( fldedfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fldedfn, fldey << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fldedfd, fldey << reshow ) ));

```

### F Log Distribution

**構文:** y = F Log Distribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**説明:** F分布の下側累積確率の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

flddfn = 5;flddfd = 5;New Window( "Example: F Log Distribution",	fldy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Log Distribution( fldq, flddfn, flddfd ), fldq );		Text( {0.5, -0.9}, "dfn=", Round( flddfn, 2 ), " dfd=", Round( flddfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flddfn, fldy << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flddfd, fldy << reshow ) ));

```

### F Noncentrality

**構文:** nc = F Noncentrality( x, dfnum, dfden, prob )

**説明:** prob = F Distribution( x, ndf, ddf, nc )となる非心度パラメータncを求める。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: F Noncentrality",	fncgr = Graph Box(		Y Scale( 0.01, 0.99 ),		X Scale( 0.01, 0.99 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, q ) ), q );	));F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, 0.4 ) );

```

### F Power

**構文:** p = F Power( alpha, dfh, dfm, d, n )

**説明:** F検定の検出力を計算する。alphaは有意水準。dfhは仮説の自由度。dfmはモデル全体の自由度。dは、SSH/(n\*sigma^2)によって算出される効果の大きさの平方(ここで、SSHは仮説の平方和)。nはオブザベーションの総数。ANOVAモデルの場合は、d = Sum(a[i]^2)/(k \* sigma^2)。ここで、a[i]は効果、kは平均の数。

**JMP追加されたバージョン:** バージョン14より前

```jsl

alpha = 0.05;obs = 25;dfh = 5;dfm = 5;d = 1;New Window( "Example: F Power (alpha=.05,dfh=5,dfm=5)",	fpdigr = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( 0, 1 ),		YName( "Power" ),		XName( "d" ),		Pen Color( "red" );		Y Function( F Power( alpha, dfh, dfm, d, obs ), d );		Text( {0.75, 0.1}, "obs=", Round( obs ) );	),	H List Box( Text Box( "obs" ), Slider Box( 10, 100, obs, fpdigr << reshow ) ));

```

### F Quantile

**構文:** q = F Quantile( p, dfnum, dfden, &lt;nonCentrality=0&gt; )

**説明:** F分布の分位点関数。F分布の下側累積確率がpとなる分位点を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**構文:** n = F Sample Size( alpha, dfh, dfm, d, power )

**説明:** 標本サイズを計算する。alphaは有意水準。dfhは仮説の自由度。dfmはモデル全体の自由度。dは、SSH/(n\*sigma^2)によって算出される効果の大きさの平方(ここで、SSHは仮説の平方和)。powerは必要とする検出力。ANOVAモデルの場合、d = Sum(a[i]^2)/(k \* sigma^2)。ここで、a[i]は効果、kは平均の数。

**JMP追加されたバージョン:** バージョン14より前

```jsl

alpha = 0.05;pow = 0.6;dfh = 5;dfm = 5;d = 1;New Window( "Example: F Sample Size (alpha=.05,dfh=5,dfm=5)",	fpdigr = Graph Box(		Y Scale( 0, 50 ),		X Scale( 0.5, 5 ),		YName( "Sample Size" ),		XName( "d" ),		Pen Color( "red" );		Y Function( F Sample Size( alpha, dfh, dfm, d, pow ), d );		Text( {0.75, 0.2}, "power=", Round( pow, 2 ) );	),	H List Box( Text Box( "power" ), Slider Box( 0.2, 0.95, pow, fpdigr << reshow ) ));

```

### FDR Adjust

**構文:** y = FDR Adjust( matrix )

**説明:** Benjamini-Hochberg法で計算された、偽発見率(FDR) 調整p値を戻す。

**JMP追加されたバージョン:** 19

```jsl

FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### Frechet Density

**構文:** y = Frechet Density( x, mu, sigma )

**説明:** 位置mu、尺度sigmaのFrechet分布のxにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = .5;New Window( "Example: Frechet Density",	y = Graph Box(		Y Scale( 0, .06 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Frechet Density( x, mu, sig ), x );		Text( {0, .055}, "mu=", Round( mu, 2 ) );		Text( {0, .045}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), );

```

### Frechet Distribution

**構文:** p = Frechet Distribution( x, mu, sigma )

**説明:** 位置mu、尺度sigmaのFrechet分布のxにおける下側累積確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = .5;New Window( "Example: Frechet Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Frechet Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ));

```

### Frechet Quantile

**構文:** q = Frechet Quantile( p, mu, sigma )

**説明:** 位置mu、尺度sigmaのFrechet分布のpにおける分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = .5;qq = .5;New Window( "Example: Frechet Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Frechet Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( Frechet Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### GLog Density

**構文:** y = GLog Density( q, mu, sigma, lambda )

**説明:** 一般化対数分布の密度関数。位置mu、尺度sigma、形状lambdaの一般化対数分布のqにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: GLog Density",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 10 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GLog Density( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ));

```

### GLog Distribution

**構文:** p = GLog Distribution( q, mu, sigma, lambda )

**説明:** 一般化対数分布の累積分布関数。一般化対数分布に従う確率変数がq以下になる確率を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: Glog Distribution",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -20, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GLog Distribution( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ));

```

### GLog Quantile

**構文:** q = GLog Quantile( p, mu, sigma, lambda )

**説明:** 一般化対数分布の分位点関数。一般化対数分布の下側累積確率がpとなる分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sigma = 1;lambda = 1;p = 0.4;New Window( "Example: GLog Quantile",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -20, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GLog Distribution( x, mu, sigma, lambda ), x );		Pen Color( "Blue" );		V Line( GLog Quantile( p, mu, sigma, lambda ), 0, 1 );		Text(			{-9, 0.9},			"\!U03BC=",			Round( mu, 4 ),			" \!U03C3=",			Round( sigma, 4 ),			" \!U03BB=",			Round( lambda, 4 )		);		Text( {-9, 0.8}, "p=", Round( p, 3 ) );		Text( {-9, 0.7}, "quantile= ", Round( GLog Quantile( p, mu, sigma, lambda ), 2 ) );	),	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) ));

```

### Gamma Density

**構文:** y = Gamma Density( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**説明:** ガンマ分布の密度関数。ガンマ分布のqにおける密度を戻す。形状パラメータ引数alphaは正の数でなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gdealpha = Log( 1.5 );New Window( "Example: Gamma Density",	gdey = Graph Box(		Y Scale( 0, 0.5 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Density( gdeq, Exp( gdealpha ) ), gdeq );		Text( {9, 0.45}, "\!U03B1=", Round( Exp( gdealpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gdealpha, gdey << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Distribution

**構文:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**説明:** ガンマ分布の累積分布関数。ガンマ分布に従う確率変数がq以下になる確率を戻す。形状パラメータ引数alphaは正の数でなければならない。IGamma()はGamma Distribution()の別名。Gamma Distribution()関数は、Gamma(alpha,q)/Gamma(alpha)と等価。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gdialpha = Log( 1.5 );New Window( "Example: Gamma Distribution",	gdiy = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Log CDistribution

**構文:** p = Gamma Log CDistribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**説明:** ガンマ分布の生存確率(上側累積確率)の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

glcdialpha = Log( 1.5 );New Window( "Example: Gamma Log CDistribution",	glcdiy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Log CDistribution( glcdiq, Exp( glcdialpha ) ), glcdiq );		Text( {1, -0.9}, "\!U03B1=", Round( Exp( glcdialpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), glcdialpha, glcdiy << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Log Density

**構文:** y = Gamma Log Density( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**説明:** ガンマ分布の確率密度の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gldealpha = Log( 1.5 );New Window( "Example: Gamma Log Density",	gldey = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Log Density( gldeq, Exp( gldealpha ) ), gldeq );		Text( {9, -0.45}, "\!U03B1=", Round( Exp( gldealpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gldealpha, gldey << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Log Distribution

**構文:** p = Gamma Log Distribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**説明:** ガンマ分布の下側累積確率の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gldialpha = Log( 1.5 );New Window( "Example: Gamma Log Distribution",	gldiy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Log Distribution( gldiq, Exp( gldialpha ) ), gldiq );		Text( {1, -0.9}, "\!U03B1=", Round( Exp( gldialpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gldialpha, gldiy << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Quantile

**構文:** q = Gamma Quantile( p, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**説明:** ガンマ分布の分位点関数。ガンマ分布の下側累積確率がpとなる分位点を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**構文:** y = GenGamma Density( x, mu, sigma, lambda )

**説明:** 拡張一般化ガンマ分布の密度関数。パラメータがmu、sigma、lambdaの拡張一般化ガンマ確率分布のxでの密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: GenGamma Density",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -5, 10 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GenGamma Density( y, mu, sigma, lambda ), y );		Text( {-4, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-4, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ));

```

### GenGamma Distribution

**構文:** p = GenGamma Distribution( x, mu, sigma, lambda )

**説明:** 拡張一般化ガンマ分布の累積分布関数。パラメータがmu、sigma、lambdaの拡張一般化ガンマ分布に基づく確率変数がxより小さい確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: GenGamma Distribution",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GenGamma Distribution( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ));

```

### GenGamma Quantile

**構文:** q = GenGamma Quantile( p, mu, sigma, lambda )

**説明:** 拡張一般化ガンマ分布の分位点関数。パラメータがmu、sigma、lambdaの拡張一般化ガンマ分布の下側累積確率がpとなる分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sigma = 1;lambda = 1;p = 0.4;New Window( "Example: GenGamma Quantile",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GenGamma Distribution( x, mu, sigma, lambda ), x );		Pen Color( "Blue" );		V Line( GenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );		Text(			{-9, 0.9},			"\!U03BC=",			Round( mu, 4 ),			" \!U03C3=",			Round( sigma, 4 ),			" \!U03BB=",			Round( lambda, 4 )		);		Text( {-9, 0.8}, "p=", Round( p, 3 ) );		Text(			{-9, 0.7},			"quantile= ",			Round( GenGamma Quantile( p, mu, sigma, lambda ), 2 )		);	),	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) ));

```

### IGamma

**構文:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**説明:** ガンマ分布の累積分布関数。ガンマ分布に従う確率変数がq以下になる確率を戻す。形状パラメータ引数alphaは正の数でなければならない。IGamma()はGamma Distribution()の別名。Gamma Distribution()関数は、Gamma(alpha,q)/Gamma(alpha)と等価。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gdialpha = Log( 1.5 );New Window( "Example: Gamma Distribution",	gdiy = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),		Text Box( " \!U03B1" )	));

```

### Johnson Sb Density

**構文:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**説明:** Johnson-Sb分布の密度関数。Johnson-Sb分布のqにおける密度を戻す。qは(theta, theta + sigma)の範囲。delta>0およびgamma(-∞, +∞)は形状パラメータ。sigma>0は尺度パラメータ。theta(-∞, +∞)は閾値パラメータ。注:thetaは分布の下限。sigmaは分布の範囲。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gamma = 0.5;delta = 0.5;theta = 0.5;sigma = 1;New Window( "Example: Johnson Sb Density",	jsbp = Graph Box(		Y Scale( 0, 5.5 ),		X Scale( 0.2, 1.8 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Sb Density( q, gamma, delta, theta, sigma ), q );		Text(			{0.5, 4.5},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, jsbp << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 2, delta, jsbp << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( -2, 2, theta, jsbp << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 10, sigma, jsbp << reshow ), Text Box( " \!U03C3" ) ));

```

### Johnson Sb Distribution

**構文:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**説明:** Johnson-Sb分布の累積分布関数。Johnson-Sb分布に従う確率変数がq以下になる確率を戻す(注:パラメータについての説明はJohnson Sb Density()関数を参照)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gamma = 0.5;delta = 0.5;theta = 0.5;sigma = 3;New Window( "Example: Johnson Sb Distribution",	jsbc = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0.2, 3.8 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Sb Distribution( q, gamma, delta, theta, sigma ), q );		Text(			{0.3, 0.8},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, jsbc << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 1, delta, jsbc << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( 0, 1, theta, jsbc << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 4, sigma, jsbc << reshow ), Text Box( " \!U03C3" ) ));

```

### Johnson Sb Quantile

**構文:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**説明:** Johnson-Sb分布の分位点関数。Johnson-Sb分布の下側累積確率がpとなる分位点を戻す(注:pが第1パラメータ。他のパラメータについての説明はJohnson Sb Density()関数を参照)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**構文:** y = Johnson Sl Density( q, gamma, delta, theta, &lt;sigma=1&gt; )

**説明:** Johnson-Sl分布の密度関数。Johnson-Sl分布のqにおける密度を戻す。qは(theta,+∞)もしくは(-∞,theta)の範囲。gamma=(-∞,+∞)およびdelta>0は形状パラメータ。sigmaは-1もしくは+1しか取らない、分布の歪みを決めるパラメータ。theta=(-∞,∞)は閾値パラメータ。 注: thetasigmaは分布の上限もしくは下限。sigmaが-1の場合、は上限で、分布は負の歪み。sigmaが1の場合、は下限で、分布は正の歪み。sigma

**JMP追加されたバージョン:** バージョン14より前

```jsl

gamma = 0.5;delta = 1;theta = 0;sigma = 1;New Window( "Example: Johnson Sl Density",	jslp = Graph Box(		Y Scale( 0, 1.5 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Sl Density( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 1.1},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 )		);	),	jslpcb = Check Box(		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},		<<set( 1 ),		sigma = [-1, 1][((jslpcb << get()) + 1)];		jslp << reshow;	),	H List Box( Slider Box( -15, 15, gamma, jslp << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 10, delta, jslp << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( -5, 5, theta, jslp << reshow ), Text Box( " \!U03B8" ) ));

```

### Johnson Sl Distribution

**構文:** p = Johnson Sl Distribution( q, gamma, delta, theta, &lt;sigma=1&gt; )

**説明:** Johnson-Sl分布の累積分布関数。Johnson-Sl分布に従う確率変数がq以下になる確率を戻す(注:パラメータについての説明はJohnson Sl Density()関数を参照)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gamma = 0.5;delta = 1;theta = 0;sigma = 1;New Window( "Example: Johnson Sl Distribution",	jslc = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Sl Distribution( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 0.9},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 )		);	),	jslccb = Check Box(		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},		<<set( 1 ),		sigma = [-1, 1][((jslccb << get()) + 1)];		jslc << reshow;	),	H List Box( Slider Box( -15, 15, gamma, jslc << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 10, delta, jslc << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( -5, 5, theta, jslc << reshow ), Text Box( " \!U03B8" ) ));

```

### Johnson Sl Quantile

**構文:** q = Johnson Sl Quantile( p, gamma, delta, theta, &lt;sigma=1&gt; )

**説明:** Johnson-Sl分布の分位点関数。Johnson-Sl分布の下側累積確率がpとなる分位点を戻す(注:pが第1パラメータ。他のパラメータについての説明はJohnson Sl Density()関数を参照)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**構文:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**説明:** Johnson-Su分布の密度関数。Johnson-Su分布のqにおける密度を戻す。qは(-∞, +∞)の範囲。delta>0およびgamma(-∞, +∞)は形状パラメータ。sigma>0は尺度パラメータ。theta(-∞, +∞)は閾値パラメータ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gamma = 0.5;delta = 1;theta = 1;sigma = 1;New Window( "Example: Johnson Su Density",	y = Graph Box(		Y Scale( 0, 1.5 ),		X Scale( -2, 2 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Su Density( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 1.3},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, y << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 2, delta, y << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( 0, 2, theta, y << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 2, sigma, y << reshow ), Text Box( " \!U03C3" ) ));

```

### Johnson Su Distribution

**構文:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**説明:** Johnson-Su分布の累積分布関数。Johnson-Su分布に従う確率変数がq以下になる確率を戻す(注:パラメータについての説明はJohnson Su Density()関数を参照)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

gamma = 0.5;delta = 1;theta = 1;sigma = 1;New Window( "Example: Johnson Su Distribution",	jsuc = Graph Box(		Y Scale( 0, 1 ),		X Scale( -2, 2 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Su Distribution( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 0.9},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) ));

```

### Johnson Su Quantile

**構文:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**説明:** Johnson-Su分布の分位点関数。Johnson-Su分布の下側累積確率がpとなる分位点を戻す(注:pが第1パラメータ。他のパラメータについての説明はJohnson Su Density()関数を参照)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### LEV Density

**構文:** y = LEV Density( x, mu, sigma )

**説明:** 位置mu、尺度sigmaの最大極値分布のxにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 10;sig = 5;New Window( "Example: LEV Density",	y = Graph Box(		Y Scale( 0, .08 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( LEV Density( x, mu, sig ), x );		Text( {0, .055}, "mu=", Round( mu, 2 ) );		Text( {0, .045}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), );

```

### LEV Distribution

**構文:** p = LEV Distribution( x, mu, sigma )

**説明:** 位置mu、尺度sigmaの最大極値分布のxにおける下側累積確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 10;sig = 5;New Window( "Example: LEV Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( LEV Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ));

```

### LEV Quantile

**構文:** q = LEV Quantile( p, mu, sigma )

**説明:** 位置mu、尺度sigmaの最大極値分布のpにおける分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 10;sig = 5;qq = .5;New Window( "Example: LEV Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( LEV Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( LEV Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### LogGenGamma Density

**構文:** y = LogGenGamma Density( x, mu, sigma, lambda )

**説明:** 対数一般化ガンマ分布の密度関数。パラメータがmu、sigma、lambdaの対数一般化ガンマ確率分布のxでの密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: LogGenGamma Density",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 10 ),		XName( "y" ),		Pen Color( "red" );		Y Function( LogGenGamma Density( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ));

```

### LogGenGamma Distribution

**構文:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**説明:** 対数一般化ガンマ分布の累積分布関数。パラメータがmu、sigma、lambdaの対数一般化ガンマ分布に基づく確率変数がxより小さい確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: LogGenGamma Distribution",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -20, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( LogGenGamma Distribution( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ));

```

### LogGenGamma Quantile

**構文:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**説明:** 対数一般化ガンマ分布の分位点関数。パラメータがmu、sigma、lambdaの対数一般化ガンマ分布の下側累積確率がpとなる分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sigma = 1;lambda = 1;p = 0.4;New Window( "Example: LogGenGamma Quantile",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -20, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( LogGenGamma Distribution( x, mu, sigma, lambda ), x );		Pen Color( "Blue" );		V Line( LogGenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );		Text(			{-19, 0.9},			"\!U03BC=",			Round( mu, 4 ),			" \!U03C3=",			Round( sigma, 4 ),			" \!U03BB=",			Round( lambda, 4 )		);		Text( {-19, 0.8}, "p=", Round( p, 3 ) );		Text(			{-19, 0.7},			"quantile= ",			Round( LogGenGamma Quantile( p, mu, sigma, lambda ), 2 )		);	),	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) ));

```

### Logistic Density

**構文:** y = Logistic Density( x, mu, sigma )

**説明:** 位置mu、尺度sigmaのロジスティック分布のxにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = .2;New Window( "Example: Logistic Density",	y = Graph Box(		Y Scale( 0, 2 ),		X Scale( -10, 10 ),		Pen Color( "red" );		Y Function( Logistic Density( x, mu, sig ), x );		Text( {0, 1.8}, "mu=", Round( mu, 2 ) );		Text( {0, 1.6}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( "sig" ) ), );

```

### Logistic Distribution

**構文:** p = Logistic Distribution( x, mu, sigma )

**説明:** 位置mu、尺度sigmaのロジスティック分布のxにおける下側累積確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = .2;New Window( "Example: Logistic Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 10 ),		Pen Color( "red" );		Y Function( Logistic Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) ));

```

### Logistic Quantile

**構文:** q = Logistic Quantile( p, mu, sigma )

**説明:** 位置mu、尺度sigmaのロジスティック分布のpにおける分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = .2;qq = .5;New Window( "Example: Logistic Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 10 ),		Pen Color( "red" );		Y Function( Logistic Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( Logistic Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### Loglogistic Density

**構文:** y = Loglogistic Density( x, mu, sigma )

**説明:** 位置mu、尺度sigmaの対数ロジスティック分布のxにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = .2;New Window( "Example: Loglogistic Density",	y = Graph Box(		Y Scale( 0, .06 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Loglogistic Density( x, mu, sig ), x );		Text( {0, .055}, "mu=", Round( mu, 2 ) );		Text( {0, .045}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), );

```

### Loglogistic Distribution

**構文:** p = Loglogistic Distribution( x, mu, sigma )

**説明:** 位置mu、尺度sigmaの対数ロジスティック分布のxにおける下側累積確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = .2;New Window( "Example: Loglogistic Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Loglogistic Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ));

```

### Loglogistic Quantile

**構文:** q = Loglogistic Quantile( p, mu, sigma )

**説明:** 位置mu、尺度sigmaの対数ロジスティック分布のpにおける分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = .2;qq = .5;New Window( "Example: Loglogistic Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Loglogistic Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( Loglogistic Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### Lognormal Density

**構文:** y = Lognormal Density( x, mu, sigma )

**説明:** 位置mu、尺度sigmaの対数正規分布のxにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = 1;New Window( "Example: Lognormal Density",	y = Graph Box(		Y Scale( 0, .15 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Lognormal Density( x, mu, sig ), x );		Text( {0, .14}, "mu=", Round( mu, 2 ) );		Text( {0, .12}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( "sig" ) ), );

```

### Lognormal Distribution

**構文:** p = Lognormal Distribution( x, mu, sigma )

**説明:** 位置mu、尺度sigmaの対数正規分布のxにおける下側累積確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = 1;New Window( "Example: Lognormal Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Lognormal Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( " sig" ) ));

```

### Lognormal Quantile

**構文:** q = Lognormal Quantile( p, mu, sigma )

**説明:** 位置mu、尺度sigmaの対数正規分布のpにおける分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 0;sig = 1;qq = .5;New Window( "Example: Lognormal Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Lognormal Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( Lognormal Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 3, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### Normal Biv Distribution

**構文:** y = Normal Biv Distribution( x, y, r, &lt;mu1=0&gt;, &lt;s1=1&gt;, &lt;mu2=0&gt;, &lt;s2=1&gt; )

**説明:** 2変量正規分布に従う確率変数(X, Y)が(x, y)以下になる確率を計算する。ここで、Xの周辺分布は、平均mu1、標準偏差s1の正規分布に従っているとする。Yの周辺分布は、平均mu2、標準偏差s2の正規分布に従っているとする。また、2変量の相関係数は r とする。mu1、s1、mu2、s2が指定されていない場合、mu1=0、s1=1、mu2=0、s2=1の標準正規分布が使われる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Density

**構文:** y = Normal Density( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**説明:** 正規分布の密度関数。平均mu、標準偏差sigmaの正規分布のqにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: Normal Density",	y = Graph Box(		Y Scale( 0, 0.45 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Density( q ), q );	));

```

### Normal Distribution

**構文:** p = Normal Distribution( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**説明:** 正規分布の累積分布関数。正規分布に従う確率変数がq以下になる確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: Normal Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Distribution( q ), q );	));

```

### Normal Log CDistribution

**構文:** y = Normal Log CDistribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**説明:** 平均がmuで標準偏差がsigmaの正規分布の、xにおける生存確率(上側累積確率)の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: Normal Log CDistribution",	nlcdiy = Graph Box(		Y Scale( -10, 0.05 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Log CDistribution( q ), q );	));

```

### Normal Log Density

**構文:** y = Normal Log Density( x, &lt;mu=0&gt;, &lt;sigma=1&gt;)

**説明:** 平均がmuで標準偏差がsigmaの正規分布の、xにおける確率密度の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: Normal Log Density",	nldey = Graph Box(		Y Scale( -9, 0.05 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Log Density( q ), q );	));

```

### Normal Log Distribution

**構文:** y = Normal Log Distribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**説明:** 平均がmuで標準偏差がsigmaの正規分布の、xにおける下側累積確率の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: Normal Log Distribution",	nldiy = Graph Box(		Y Scale( -10, 0.05 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Log Distribution( q ), q );	));

```

### Normal Mixture Density

**構文:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**説明:** 正規混合分布の密度関数。グループ平均meanvec、グループ標準偏差sdvec、グループ確率probvecのqにおける密度を戻す。ここで、meanvec、sdvec、およびprobvec はすべて同じサイズのベクトル。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu1 = -2;mu2 = 2;sigma1 = 1;sigma2 = 4;p1 = .5;t1 = mu1 |/ mu2;t2 = sigma1 |/ sigma2;t3 = p1 |/ (1 - p1);New Window( "Univariate Normal Mixture Density",	clty = Graph Box(		Y Scale( 0, 0.4 ),		X Scale( -8, 8 ),		Pen Color( "red" ),		Pen Size( 2 );		t1 = mu1 |/ mu2;		t2 = sigma1 |/ sigma2;		t3 = p1 |/ (1 - p1);		Y Function(			Normal Mixture Density( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),			y		);		Text( {-7, .37}, "Mean1=", Round( mu1, 2 ) );		Text( {-2, .37}, "Mean2=", Round( mu2, 2 ) );		Text( {-7, .34}, "SD1=", Round( sigma1, 2 ) );		Text( {-2, .34}, "SD2=", Round( sigma2, 2 ) );		Text( {-7, .31}, "P1=", Round( p1, 2 ) );		Text( {-2, .31}, "P2=", Round( 1 - p1, 2 ) );	),	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), );

```

### Normal Mixture Distribution

**構文:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**説明:** 正規混合分布の累積分布関数。グループ平均meanvec、グループ標準偏差sdvec、グループ確率probvecの正規混合分布に従う確率変数がqよりも小さい確率を戻す。ここで、meanvec、sdvec、およびprobvec はすべて同じサイズのベクトル。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu1 = -2;mu2 = 2;sigma1 = 1;sigma2 = 4;p1 = .5;New Window( "Univariate Normal Mixture Distribution",	clty = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -8, 8 ),		Pen Color( "red" ),		Pen Size( 2 );		Y Function(			Normal Mixture Distribution( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),			y		);		Text( {-7, .95}, "Mean1=", Round( mu1, 2 ) );		Text( {-2, .95}, "Mean2=", Round( mu2, 2 ) );		Text( {-7, .85}, "SD1=", Round( sigma1, 2 ) );		Text( {-2, .85}, "SD2=", Round( sigma2, 2 ) );		Text( {-7, .75}, "P1=", Round( p1, 2 ) );		Text( {-2, .75}, "P2=", Round( 1 - p1, 2 ) );	),	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), );

```

### Normal Mixture Quantile

**構文:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**説明:** 正規混合分布の分位点関数。正規混合分布の下側累積確率がpとなる分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

extqdf = 1;extqqq = 0.5;mu1 = -1;mu2 = 1;sigma1 = 1;sigma2 = 4;p1 = .3;New Window( "Example: Normal Mixture Quantile",	extqgr = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Pen Size( 2 );		Y Function(			Normal Mixture Distribution( q, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),			q		);		Pen Color( "blue" );		V Line(			Normal Mixture Quantile( extqqq, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),			0,			1		);		Text( {-4.5, 0.9}, " quantile=", Round( extqqq, 2 ) );	),	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ),	H List Box( Slider Box( -3, 3, mu1, extqgr << reshow ), Text Box( " Mean 1" ) ),	H List Box( Slider Box( -3, 3, mu2, extqgr << reshow ), Text Box( " Mean 2" ) ),	H List Box( Slider Box( .1, 9, sigma1, extqgr << reshow ), Text Box( " Std Dev 1" ) ),	H List Box( Slider Box( .1, 9, sigma2, extqgr << reshow ), Text Box( " Std Dev 2" ) ),	H List Box( Slider Box( 0, 1, p1, extqgr << reshow ), Text Box( " P 1" ) ), );

```

### Normal Quantile

**構文:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**説明:** 正規分布の分位点関数。正規分布の下側累積確率がpとなる分位点を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

Normal Quantile( 0.9 );

```

### Probit

**構文:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**説明:** 正規分布の分位点関数。正規分布の下側累積確率がpとなる分位点を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

Normal Quantile( 0.9 );

```

### SEV Density

**構文:** y = SEV Density( x, mu, sigma )

**説明:** 位置mu、尺度sigmaの最小極値分布のxにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 50;sig = 5;New Window( "Example: SEV Density",	y = Graph Box(		Y Scale( 0, .06 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( SEV Density( x, mu, sig ), x );		Text( {0, .055}, "mu=", Round( mu, 2 ) );		Text( {0, .045}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), );

```

### SEV Distribution

**構文:** p = SEV Distribution( x, mu, sigma )

**説明:** 位置mu、尺度sigmaの最小極値分布のxにおける下側累積確率を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 50;sig = 5;New Window( "Example: SEV Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( SEV Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ));

```

### SEV Quantile

**構文:** q = SEV Quantile( p, mu, sigma )

**説明:** 位置mu、尺度sigmaの最小極値分布のpにおける分位点を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mu = 50;sig = 5;qq = .5;New Window( "Example: SEV Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( SEV Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( SEV Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### SHASH Density

**構文:** d = SHASH Density( x, gamma, delta, theta, sigma )

**説明:** sinh-arcsinh（SHASH）分布のxにおける密度を戻す。SHASH変換を使用すると、より正規分布に近いデータを作成することができる。

**JMP追加されたバージョン:** 14

#### SHASH変換

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );Show( result1, result2 );

```

**例 1**

```jsl

SHASH Density( 0, -1, 2, -2, 3 );

```

### SHASH Distribution

**構文:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**説明:** sinh-arcsinh（SHASH）分布の累積分布関数。SHASH分布に従う確率変数がqになる確率を戻す。SHASH変換を使用すると、より正規分布に近いデータを作成することができる。

**JMP追加されたバージョン:** 14

#### SHASH変換

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );Show( result1, result2 );

```

**例 1**

```jsl

gamma = 0.5;delta = 1;theta = 1;sigma = 1;New Window( "Example: SHASH Distribution",	jsuc = Graph Box(		Y Scale( 0, 1 ),		X Scale( -2, 2 ),		XName( "q" ),		Pen Color( "red" );		Y Function( SHASH Distribution( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 0.9},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) ));

```

### SHASH Quantile

**構文:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**説明:** sinh-arcsinh（SHASH）分布の分位点関数。SHASH分布の下側累積確率がpとなる分位点を戻す。SHASH変換を使用すると、より正規分布に近いデータを作成することができる。

**JMP追加されたバージョン:** 14

#### SHASH変換

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );Show( result1, result2 );

```

**例 1**

```jsl

SHASH Quantile( .5, 1, 2, 3, 1 );

```

### Students t Density

**構文:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**説明:** Studentのt分布の密度関数。Studentのt分布のqにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

tdedf = 1;New Window( "Example: Students t Density",	tdegr = Graph Box(		Y Scale( -.05, 0.45 ),		X Scale( -8, 8 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );		H Line( 2, 3, 0.3 );		Pen Color( "blue" );		Y Function( Normal Density( tdeq ), tdeq );		H Line( 2, 3, 0.25 );		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );		Text( {3.5, 0.3}, "Student t" );		Text( {3.5, 0.25}, "Normal" );	),	H List Box(		Text Box( "df " ),		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )	));

```

### Students t Distribution

**構文:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**説明:** Studentのt分布の累積分布関数。Studentのt分布に従う確率変数がq以下になる確率を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

tdidf = 1;New Window( "Example: Students t Distribution",	tdigr = Graph Box(		Y Scale( 0, 1 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( tdiq, tdidf ), tdiq );		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) ));

```

### Students t Quantile

**構文:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**説明:** Studentのt分布の分位点関数。Studentのt分布の下側累積確率がpとなる分位点を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

extqdf = 1;extqqq = 0.5;New Window( "Example: Students t Quantile",	extqgr = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( q, Round( extqdf ) ), q );		Pen Color( "blue" );		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );	),	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), );

```

### Tukey HSD P value

**構文:** p = Tukey HSD P value( q, nGroups, dfe )

**説明:** TukeyのHSD多重比較検定のp値を戻す。qは検定統計量、nGroupsは検定されるグループの数、dfeはデータ全体における誤差の自由度。



ここでqは、多重性調整されたTukeyの棄却値であり、Tukeyのスチューデント化範囲の分位点をsqrt（2）で割ったものです。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**構文:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**説明:** TukeyのHSD多重比較検定の分位点を戻す。1-alphaは信頼水準、nGroupsは検定されるグループの数、dfeはデータ全体における誤差の自由度。



ここでqは、多重性調整されたTukeyの棄却値であり、Tukeyのスチューデント化範囲の分位点をsqrt（2）で割ったものです。

**JMP追加されたバージョン:** バージョン14より前

```jsl

alpha = 0.05;dfe = 5;Tukey HSD Quantile( 1 - alpha, 20, dfe );New Window( "Example: Tukey HSD Quantile",	tdigr = Graph Box(		Y Scale( 2, 8 ),		X Scale( 2.5, 15.5 ),		YName( "Tukey HSD Quantile" ),		XName( "Groups" ),		Pen Color( "red" );		For( i = 3, i <= 15, i++,			V Line( i, 0, Tukey HSD Quantile( 1 - alpha, i, dfe ) )		);		Text( {3, 7}, "dfe=", Round( dfe, 2 ) );	),	H List Box( Text Box( "dfe" ), Slider Box( 3, 10, dfe, tdigr << reshow ) ));

```

### Weibull Density

**構文:** y = Weibull Density( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**説明:** Weibull分布の密度関数。Weibull分布のxにおける密度を戻す。shapeは形状パラメータ。scaleはオプションの尺度パラメータ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

shape = 0.5;New Window( "Example: Weibull Density",	y = Graph Box(		Y Scale( 0, 2 ),		X Scale( 0, 1.5 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Weibull Density( x, shape ), x );		Text( {1.1, 1.8}, " shape=", Round( shape, 2 ) );	),	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) ));

```

### Weibull Distribution

**構文:** p = Weibull Distribution( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**説明:** Weibull分布の累積分布関数。Weibull分布に従う確率変数がx以下になる確率を戻す(shapeは形状パラメータ。scaleはオプションの尺度パラメータ)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

shape = 2;New Window( "Example: Weibull Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 2 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Weibull Distribution( x, shape ), x );		Text( {0.1, 0.9}, " shape=", Round( shape, 2 ) );	),	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) ));

```

### Weibull Quantile

**構文:** q = Weibull Quantile( p, beta, &lt;alpha=1&gt;, &lt;threshold=0&gt; )

**説明:** Weibull分布の分位点関数。下側累積確率がpとなる分位点を戻す。betaは形状パラメータ、alphaは尺度パラメータ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exwqbeta = 2;exwqqq = 0.5;New Window( "Example: Weibull Quantile",	exwqy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( 0, 2 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Weibull Distribution( exwqq, exwqbeta ), exwqq );		Pen Color( "blue" );		V Line( Weibull Quantile( exwqqq, exwqbeta ), 0, 1 );		Text(			{0.1, 0.9},			" \!U03B2=",			Round( exwqbeta, 2 ),			" quantile=",			Round( exwqqq, 2 )		);	),	H List Box( Slider Box( 0, 5, exwqbeta, exwqy << reshow ), Text Box( " \!U03B2" ) ),	H List Box( Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ), Text Box( " quantile" ) ));

```

### t Density

**構文:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**説明:** Studentのt分布の密度関数。Studentのt分布のqにおける密度を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

tdedf = 1;New Window( "Example: Students t Density",	tdegr = Graph Box(		Y Scale( -.05, 0.45 ),		X Scale( -8, 8 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );		H Line( 2, 3, 0.3 );		Pen Color( "blue" );		Y Function( Normal Density( tdeq ), tdeq );		H Line( 2, 3, 0.25 );		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );		Text( {3.5, 0.3}, "Student t" );		Text( {3.5, 0.25}, "Normal" );	),	H List Box(		Text Box( "df " ),		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )	));

```

### t Distribution

**構文:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**説明:** Studentのt分布の累積分布関数。Studentのt分布に従う確率変数がq以下になる確率を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

tdidf = 1;New Window( "Example: Students t Distribution",	tdigr = Graph Box(		Y Scale( 0, 1 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( tdiq, tdidf ), tdiq );		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) ));

```

### t Log CDistribution

**構文:** y = t Log CDistribution( x, df, &lt;nc&gt; )

**説明:** t分布の生存確率(上側累積確率)の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

tlcdidf = 1;New Window( "Example: Students t Log CDistribution",	tlcdigr = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Log CDistribution( tlcdiq, tlcdidf ), tlcdiq );		Text( {-4.5, -0.9}, "df=", Round( tlcdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, tlcdidf, tlcdigr << reshow ) ));

```

### t Log Density

**構文:** y = t Log Density( x, df, &lt;nc&gt; )

**説明:** t分布の確率密度の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

tldedf = 1;New Window( "Example: Students t Log Density",	tldegr = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Log Density( tldeq, tldedf ), tldeq );		Text( {2.5, -0.35}, "df=", Round( tldedf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, tldedf, tldegr << reshow ) ));

```

### t Log Distribution

**構文:** y = t Log Distribution( x, df, &lt;nc&gt; )

**説明:** t分布の下側累積確率の対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

tldidf = 1;New Window( "Example: Students t Log Distribution",	tldigr = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Log Distribution( tldiq, tldidf ), tldiq );		Text( {-4.5, -0.9}, "df=", Round( tldidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, tldidf, tldigr << reshow ) ));

```

### t Noncentrality

**構文:** nc = t Noncentrality( x, df, prob )

**説明:** Studentのt分布において、prob = t Distribution( x, df, nc )となる非心度を求める。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Example: t Noncentrality",	tncgr = Graph Box(		Y Scale( 0.01, 0.99 ),		X Scale( 0.01, 0.99 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( 3, 2, t Noncentrality( 3, 2, q ) ), q );	));t Distribution( 3, 2, t Noncentrality( 3, 2, 0.5 ) );

```

### t Quantile

**構文:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**説明:** Studentのt分布の分位点関数。Studentのt分布の下側累積確率がpとなる分位点を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

extqdf = 1;extqqq = 0.5;New Window( "Example: Students t Quantile",	extqgr = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( q, Round( extqdf ) ), q );		Pen Color( "blue" );		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );	),	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), );

```

