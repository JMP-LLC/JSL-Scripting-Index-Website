# Random



### Col Shuffle

**语法:** y = Col Shuffle(&lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;)

**说明:** 返回介于 1 和当前数据表的行数之间的随机整数。在列公式中使用时，Col Shuffle() 创建行号的随机顺序，每个行号仅出现一次。该顺序在内部缓存，因此可高效进行多重计算。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );
dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle", Numeric, Continuous, Set Formula( Col Shuffle( :age ) ) );

```

**示例 3**

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

**语法:** y = Make KFold Formula( folds, Y Columns( cols ), &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ) )

**说明:** 在列公式中使用时生成具有 folds 水平的验证列。该 JSL 函数主要用在“生成验证列”平台来生成公式列。

**JMP添加的版本:** 17

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "KFold Validation",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Stratified KFold",
	"Numeric",
	"Nominal",
	Formula(
		Make KFold Formula( 4, <<Y Columns( :height ), <<Stratification Columns( :sex ) )
	)
);

```

### Make Validation Formula

**语法:** y = Make Validation Formula( rates, &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ), &lt;&lt;Cutpoint Column ( col ), &lt;&lt;Cutpoint Batch ID( col ), &lt;&lt;Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), &lt;&lt;Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**说明:** 在列公式中使用时生成两水平或三水平的验证列。rates 参数是一个 3 x 1 矩阵，它分别包含训练率、验证率和测试率。该 JSL 函数主要用在“生成验证列”平台来生成公式列。

**JMP添加的版本:** 15

**示例 1**

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

**示例 2**

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

**示例 3**

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

**语法:** y = Random Beta( alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**说明:** 返回一个 beta 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Beta Binomial( n, p, &lt;delta=0&gt; )

**说明:** 对于概率为 p 且相关性为 delta 的 n 次试验，返回一个 beta 二项分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Binomial( n, p )

**说明:** 对于执行 n 次试验且事件概率为 p 的二项分布，返回一个随机数。

**JMP添加的版本:** 早于版本 14

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
			H Line(
				exrbink,
				exrbink + 1,
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink )
			);
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
		Text(
			{0.5, 0.9},
			"n=",
			Round( exrbinn ),
			" p=",
			Round( exrbinp, 2 ),
			" size=",
			Round( exrbinsz )
		);
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrbinlsz, exrbiny << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Category

**语法:** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**说明:** 根据概率对和结果表达式返回随机类别。生成随机均匀数并将它与概率参数进行比较以确定返回的结果参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**语法:** y = Random Cauchy()

**说明:** 返回一个中位数为 0 的 Cauchy 分布的随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random ChiSquare( df, &lt;nonCentrality=0&gt; )

**说明:** 返回卡方分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random ExGaussian( location, scale, shape)

**说明:** 返回 ExGaussian 分布随机数。

**JMP添加的版本:** 18

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

**语法:** y = Random Exp()

**说明:** 返回一个指数分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random F( dfnum, dfden, &lt;nonCentrality=0&gt; )

**说明:** 返回 F 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Frechet( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**说明:** 返回 Fréchet 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random GLog( mu, sigma, lambda )

**说明:** 返回一个广义对数分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Gamma( alpha, &lt;scale=1&gt; )

**说明:** 返回一个 gamma 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Gamma Poisson( lambda, &lt;sigma=1&gt; )

**说明:** 返回一个 gamma Poisson 分布（参数为 lambda 和 sigma）随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random GenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**说明:** 从一个扩展的广义 Gamma 分布（参数为 mu、sigma 和 lambda）返回一个随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Geometric( p )

**说明:** 对于概率为 p 的事件，当发生一个事件时，返回非事件的一个随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** x = Random Index( n, k )

**说明:** 返回 k×1 的矩阵，矩阵中的元素是 1 到 n 之间不重复的随机整数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Random Index( 100, 5 );

```

### Random Integer

**语法:** y = Random Integer( n ); Random Integer( k, n )

**说明:** 返回介于 1 和 n 之间的随机整数（或介于 k 和 n 之间），包括端值。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Johnson Sb( gamma, delta, theta, sigma )

**说明:** 返回一个 Johnson Sb 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Johnson Sl( gamma, delta, theta, &lt;sigma=1&gt; )

**说明:** 返回一个 Johnson Sl 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Johnson Su( gamma, delta, theta, sigma )

**说明:** 返回一个 Johnson Su 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random LEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**说明:** 返回最大极值分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random LogGenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**说明:** 从一个对数广义 Gamma 分布（参数为 mu、sigma 和 lambda）返回一个随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Logistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**说明:** 返回 Logistic 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Loglogistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**说明:** 返回对数 Logistic 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Lognormal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**说明:** 从位置参数为 mu、尺度参数为 sigma 的对数正态分布返回随机数。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Lognormal( -1, 1.5 );
//produce a vector of random numbers
v = J( 1, 10, Random Lognormal( -1, 1.5 ) );
//show results
Show( x, v );

```

**示例 2**

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

**语法:** y = Random Multivariate Normal( mean, covar, &lt;nrows=1&gt;)

**说明:** 从具有均值向量 mean 和（正半定）协方差矩阵 covar 的多元正态分布返回随机 nrows×p 矩阵，其中 p 定义为 covar 的行数。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
meanvec = 1 :: 3;
covar = [1 .6 .6, .6 1 .6, .6 .6 1];
randmvnRow = Random Multivariate Normal( meanvec, covar );
randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**语法:** y = Random Negative Binomial( r, p )

**说明:** 对于概率为 p 的事件，当发生 r 个事件时，返回非事件的一个随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random Normal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**说明:** 返回一个均值为 mu、标准差为 sigma 的正态分布随机数。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Normal();
//produce a vector of random numbers
v = J( 1, 10, Random Normal() );
//show results
Show( x, v );

```

**示例 2**

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

**语法:** y = Random Normal Mixture( meanvec, sdvec, probvec )

**说明:** 返回正态混合分布的随机数，该分布的组均值为 meanvec、组标准差为 sdvec、组概率为 probvec。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
dt = New Table( "Example",
	New Column( "Rand NM",
		set formula( Random Normal Mixture( [-3, 3], [1, 1], [.3, .7] ) )
	)
);
dt << add rows( 1000 );
Distribution( Continuous Distribution( Column( :Rand NM ), Vertical( 0 ) ) );

```

### Random Poisson

**语法:** y = Random Poisson( lambda )

**说明:** 返回一个 Poisson 分布随机数。

**JMP添加的版本:** 早于版本 14

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
		Text(
			{10, 0.2},
			" \!U03BB=",
			Round( exrpoilambda, 2 ),
			" sample size=",
			Round( exrpoisz )
		);
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrpoilsz, exrpoiy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Reset

**语法:** Random Reset( seed number )

**说明:** 以新种子重新开始随机序列。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Random Reset( 1 );
Random Normal();

```

### Random SEV

**语法:** y = Random SEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**说明:** 返回最小极值分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random SHASH( gamma, delta, theta, sigma )

**说明:** 返回 sinh-arcsinh (SHASH) 分布的一个随机数。

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

//produce a single random number
x = Random SHASH( 0, 1, 0, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );
//show results
Show( x, v );

```

### Random Seed State

**语法:** Random Seed State( &lt;seed state&gt; )

**说明:** 检索或恢复随机种子状态或将之检索或恢复为 Blob 对象。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
r = Random Seed State();
Random Seed State( r );

```

### Random Shuffle

**语法:** y = Random Shuffle( matrix )

**说明:** 返回元素随机排列的矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
exA = [1 2 6, 3 5 8];
Random Shuffle( exA );

```

### Random Triangular

**语法:** y = Random Triangular( a, b, c );y = Random Triangular( b, c );y = Random Triangular( b )

**说明:** 从三角形分布（下限为“a”，模式为“b”，上限为“c”）返回一个随机数。“Random Triangular(b,c)”等同于“Random Triangular(0,b,c)”。“Random Triangular(b)”等同于“Random Triangular(0,b,1)”。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Random Reset( 13579 );
x = Random Triangular( 0.8 );
Random Reset( 13579 );
y = Random Triangular( 0, 0.8, 1 );
Show( x, y );

```

### Random Uniform

**语法:** y = Random Uniform( &lt;min&gt;, &lt;max&gt; )

**说明:** 返回一个介于 min 和 max 之间的均匀分布随机数（min 和 max 除外）。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Uniform( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Uniform( 1, 10 ) );
//show results
Show( x, v );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Random Uniform( 1, 10 );

```

### Random Weibull

**语法:** y = Random Weibull( beta, &lt;alpha=1&gt; )

**说明:** 返回一个 Weibull 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Random ZI Negative Binomial( lambda, sigma, pi )

**说明:** 返回零泛滥负二项分布的随机数，其中位置参数为 lambda，尺度参数为 sigma，零泛滥参数为 pi。

**JMP添加的版本:** 19

**示例 1**

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
		Text(
			{25, 0.06},
			"lambda=",
			Round( 25 ),
			", sigma=",
			Round( .5, 2 ),
			", pi=",
			Round( .05, 2 )
		);
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

**示例 2**

```jsl

Names Default To Here( 1 );
Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Negative Binomial( 5, 2, .2 ) ) );
Column( 1 ) << set name( "Random ZiNB" );
dt << Distribution(
	Continuous Distribution(
		Column( :Random ZiNB ),
		Vertical( 0 ),
		Fit ZI Negative Binomial,
		CDF Plot( 1 )
	)
);

```

### Random ZI Poisson

**语法:** y = Random ZI Poisson Binomial( lambda, pi )

**说明:** 返回零泛滥 Poisson 分布的随机数，其中位置参数为 lambda，零泛滥参数为 pi。

**JMP添加的版本:** 19

**示例 1**

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

**示例 2**

```jsl

Names Default To Here( 1 );
Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Poisson( 5, .2 ) ) );
Column( 1 ) << set name( "Random ZIP" );
dt << Distribution(
	Continuous Distribution(
		Column( :Random ZIP ),
		Vertical( 0 ),
		Fit ZI Poisson,
		CDF Plot( 1 )
	)
);

```

### Random t

**语法:** y = Random t( df, &lt;nonCentrality=0&gt; )

**说明:** 返回 t 分布随机数。

**JMP添加的版本:** 早于版本 14

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

**语法:** Resample Freq( &lt;rate=1&gt;, &lt;column&gt; )

**说明:** 生成放回抽样的频数统计，它对于 Bootstrap 样本很有用。没有参数的情况下，该函数生成一个 100% 再抽样。rate 参数指定再抽样率。若指定了 column 参数，则所选样本大小为 rate 乘以指定列的总和。rate 为负表示允许小数频数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Freq", numeric, formula( Resample Freq() ) );
New Window( "w", theBox = V List Box() );
For( i = 1, i <= 30, i++,
	Column( "Freq" ) << EvalFormula;
	theBox << append(
		V List Box( Bivariate( Y( :height ), X( :weight ), Freq( :Freq ), Fit Line( 1 ) ) )
	);
);
newDt = theBox["Parameter Estimates", Table Box( 1 )] << MakeCombinedDataTable;
newDt << Distribution( Y( :Estimate ), By( :Term ), Horizontal Layout( 1 ) );
theBox << CloseWindow;

```

