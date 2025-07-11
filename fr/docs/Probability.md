# Probability



### Beta Density

**Syntaxe :** y = Beta Density( q, alpha, beta, <theta=0>, <sigma=1> )

**Description :** Renvoie la densité pour la valeur q de la distribution bêta, où q est dans l’intervalle de theta à theta + sigma, alpha et beta sont les paramètres de forme, theta et sigma sont les paramètres de seuillage et d&apos;échelle, respectivement.

**JMP Version ajoutée :** Avant la version 14

```js

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
		Text(
			{0.55, 2.2},
			"\!U03B1=",
			Round( alpha, 2 ),
			" \!U03B2=",
			Round( beta, 2 )
		);
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Distribution

**Syntaxe :** p = Beta Distribution( q, alpha, beta, <theta=0>, <sigma=1> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire de loi bêta soit inférieure à q, où alpha et beta sont les paramètres de forme et theta et sigma sont les paramètres de seuillage et d’échelle, respectivement.

**JMP Version ajoutée :** Avant la version 14

```js

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
		Text(
			{0.1, 0.9},
			"\!U03B1=",
			Round( alpha, 2 ),
			" \!U03B2=",
			Round( beta, 2 )
		);
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Quantile

**Syntaxe :** q = Beta Quantile( p, alpha, beta, <theta=0>, <sigma=1> )

**Description :** Renvoie le quantile d’une distribution bêta, correspondant à la probabilité p qu&apos;une valeur aléatoire ayant cette distribution prenne une valeur inférieure au quantile, où alpha et beta sont les paramètres de forme et theta et sigma sont les paramètres de seuillage et d’échelle, respectivement.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Beta Quantile( 0.95, 2, 5 );

```

### Cauchy Density

**Syntaxe :** y = Cauchy Density( q, <center>, <scale> )

**Description :** Renvoie la densité à q d&apos;une distribution de Cauchy avec un centre mu et une échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Cauchy Distribution( q, <center>, <scale> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Cauchy soit inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = Cauchy Quantile( p, <center>, <scale> )

**Description :** Renvoie le quantile d&apos;une distribution de Cauchy, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = ChiSquare Density( q, df, <nonCentrality=0> )

**Description :** Renvoie la densité au point q d’une Khi deux avec df degré(s) de liberté.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = ChiSquare Distribution( q, df, <nonCentrality=0> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Khi deux est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = ChiSquare Log CDistribution( x, df, <nonCentrality=0> )

**Description :** Renvoie le logarithme de 1 - Distribution selon le Khi deux.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = ChiSquare Log Density( x, df, <nonCentrality=0> )

**Description :** Renvoie le logarithme de la densité de probabilité de Khi deux.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = ChiSquare Log Distribution( x, df, <nonCentrality=0> )

**Description :** Renvoie le logarithme de la distribution selon le Khi deux.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** nc = ChiSquare Noncentrality( x, df, prob )

**Description :** Renvoie le paramètre de non-centralité nc de sorte que prob soit égale à la probabilité selon laquelle une variable aléatoire distribuée selon le Khi deux avec df degré(s) de liberté soit inférieure à x.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
New Window( "Example: ChiSquare Noncentrality",
	chincgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function(
			ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, q ) ),
			q
		);
	)
);
ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, 0.5 ) );

```

### ChiSquare Quantile

**Syntaxe :** q = ChiSquare Quantile( p, df, <nonCentrality=0> )

**Description :** Renvoie le quantile d’une distribution khi-deux, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
ChiSquare Quantile( 0.15, 5 );

```

### Dunnett P value

**Syntaxe :** p = Dunnett P value( q, nTrt, dfe, <lambdaVec = .> )

**Description :** Renvoie la p-value du test des comparaisons multiples de Dunnett, où q est la statistique de test, nTrt est le nombre de traitements à comparer avec le groupe de contrôle, dfe est le degré de liberté de l’erreur (compte tenu de l’échantillon total de l’étude) et le lambdaVec facultatif est un vecteur des paramètres, lesquels sont définis 1/sqrt(2) par défaut.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**Syntaxe :** q = Dunnett Quantile( 1-alpha, nTrt, dfe, <lambdaVec = .> )

**Description :** Renvoie le quantile nécessaire pour le test des comparaisons multiples de Dunnett, où 1-alpha est le niveau de confiance, nTrt est le nombre de traitements à comparer avec le groupe de contrôle, dfe est le degré de liberté de l’erreur (compte tenu de l’échantillon total de l’étude) et le lambdaVec facultatif est un vecteur des paramètres, lesquels sont définis 1/sqrt(2) par défaut.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Dunnett Quantile( 0.95, 3, 11 );

```

### ExGaussian Density

**Syntaxe :** y = ExGaussian Density( x, location, scale, shape )

**Description :** Renvoie la densité à x d&apos;une distribution ExGaussienne.

**JMP Version ajoutée :** 18

```js

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

**Syntaxe :** y = ExGaussian Distribution( x, location, scale, shape )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée de façon ExGaussienne soit inférieure à x.

**JMP Version ajoutée :** 18

```js

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

**Syntaxe :** q = ExGaussian Quantile( p, mu, sigma, lambda )

**Description :** Renvoie le quantile d&apos;une distribution ExGaussienne, correspondant à la probabilité p qu&apos;une valeur aléatoire soit inférieure à la valeur du quantile.

**JMP Version ajoutée :** 18

```js

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

**Syntaxe :** y = Exp Density( x, <theta=1> )

**Description :** Renvoie la densité à x d&apos;une distribution exponentielle avec paramètre theta.

**JMP Version ajoutée :** 14

```js

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

**Syntaxe :** p = Exp Distribution( x, <theta=1> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée exponentiellement soit inférieure à x.

**JMP Version ajoutée :** 14

```js

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

**Syntaxe :** q = Exp Quantile( p, <theta=1> )

**Description :** Renvoie le quantile d’une distribution exponentielle, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** 14

```js

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

**Syntaxe :** y = Exponential Density( x, <theta=1> )

**Description :** Renvoie la densité à x d&apos;une distribution exponentielle avec paramètre theta.

**JMP Version ajoutée :** 17

```js

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

**Syntaxe :** p = Exponential Distribution( x, <theta=1> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée exponentiellement soit inférieure à x.

**JMP Version ajoutée :** 17

```js

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

**Syntaxe :** q = Exponential Quantile( p, <theta=1> )

**Description :** Renvoie le quantile d’une distribution exponentielle, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** 17

```js

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

**Syntaxe :** y = F Density( q, dfnum, dfden, <nonCentrality=0> )

**Description :** Renvoie la densité à q d’une distribution de Fisher avec dfn et dfd degré(s) de liberté.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = F Distribution( q, dfnum, dfden, <nonCentrality=0> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon F est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = F Log CDistribution( x, dfnum, dfden, <nonCentrality=0> )

**Description :** Renvoie le logarithme de 1 - Distribution F.

**JMP Version ajoutée :** Avant la version 14

```js

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
		Text(
			{0.5, -0.9},
			"dfn=",
			Round( flcddfn, 2 ),
			" dfd=",
			Round( flcddfd, 2 )
		);
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flcddfn, flcdy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flcddfd, flcdy << reshow ) )
);

```

### F Log Density

**Syntaxe :** y = F Log Density( x, dfnum, dfden, <nonCentrality=0> )

**Description :** Renvoie le logarithme de la densité de probabilité F.

**JMP Version ajoutée :** Avant la version 14

```js

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
		Text(
			{2.5, -0.7},
			"dfn=",
			Round( fldedfn, 2 ),
			" dfd=",
			Round( fldedfd, 2 )
		);
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fldedfn, fldey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fldedfd, fldey << reshow ) )
);

```

### F Log Distribution

**Syntaxe :** y = F Log Distribution( x, dfnum, dfden, <nonCentrality=0> )

**Description :** Renvoie le logarithme de la distribution F.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** nc = F Noncentrality( x, dfnum, dfden, prob )

**Description :** Résout le paramètre de non-centralité nc telle que prob = F Distribution( x, ndf, ddf, nc ).

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = F Power( alpha, dfh, dfm, d, n )

**Description :** Calcule la puissance d’un test de Fisher, où alpha est le niveau de significativité, dfh est le degré de liberté de l&apos;hypothèse, dfm est le degré de liberté de tout le modèle, d est le carré de la taille de l&apos;effet, SSH/(n*sigma^2) où SSH est la somme des carrés correspondant à l’hypothèse et n le nombre total d’observations. Notez que pour le modèle ANOVA, d = Sum(a[i]^2)/(k * sigma^2) où a[i] sont les effets et k est le nombre de moyennes.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = F Quantile( p, dfnum, dfden, <nonCentrality=0> )

**Description :** Renvoie le quantile d’une distribution F, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**Syntaxe :** n = F Sample Size( alpha, dfh, dfm, d, power )

**Description :** Calcule la taille d&apos;échantillon, où alpha est le niveau de significativité, dfh est le degré de liberté de l&apos;hypothèse, dfm est le degré de liberté de tout le modèle, d est le carré de la taille de l&apos;effet, SSH/(n*sigma^2) où SSH est la somme des carrés correspondant à l’hypothèse et power la puissance désirée. Notez que pour le modèle ANOVA, d = Sum(a[i]^2)/(k * sigma^2) où a[i] sont les effets et k est le nombre de moyennes.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = FDR Adjust( matrix )

**Description :** Renvoie l&apos;ajustement du taux de fausses découvertes pour les p-values spécifiées à l&apos;aide de la méthode de Benjamini-Hochberg.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### Frechet Density

**Syntaxe :** y = Frechet Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution de Fréchet avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Frechet Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution de Fréchet avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = Frechet Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution de Fréchet avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = GLog Density( q, mu, sigma, lambda )

**Description :** Renvoie la densité à q d’une distribution logarithmique généralisée avec paramètre de position mu, paramètre d’échelle sigma et de forme lambda.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = GLog Distribution( q, mu, sigma, lambda )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon le logarithme généralisé est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = GLog Quantile( p, mu, sigma, lambda )

**Description :** Renvoie le quantile d’une distribution logarithmique généralisée, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

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
		Text(
			{-9, 0.7},
			"quantile= ",
			Round( GLog Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Gamma Density

**Syntaxe :** y = Gamma Density( q, <alpha=1>, <scale=1>, <threshold=0> )

**Description :** Renvoie la densité au point q de la distribution de probabilité Gamma, où l’argument paramètre de forme alpha doit être positif.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire de loi gamma soit inférieure à q, où l’argument paramètre de forme alpha doit être positif. IGamma() est un alias de Gamma Distribution(). La fonction Gamma Distribution() est équivalente à Gamma(alpha,q)/Gamma(alpha).

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Gamma Log CDistribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**Description :** Renvoie le logarithme de la distribution 1 - Gamma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Gamma Log Density( x, <alpha=1>, <scale=1>, <threshold=0> )

**Description :** Renvoie le logarithme de la densité de probabilité Gamma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Gamma Log Distribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**Description :** Renvoie le logarithme de la distribution Gamma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = Gamma Quantile( p, <alpha=1>, <scale=1>, <threshold=0> )

**Description :** Renvoie le quantile d’une distribution gamma, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**Syntaxe :** y = GenGamma Density( x, mu, sigma, lambda )

**Description :** Renvoie la densité à x d&apos;une distribution de probabilité gamma généralisée étendue avec les paramètres mu, sigma, et lambda.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = GenGamma Distribution( x, mu, sigma, lambda )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon gamma généralisé étendu (avec les paramètres mu, sigma, et lambda) soit inférieure à x.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = GenGamma Quantile( p, mu, sigma, lambda )

**Description :** Renvoie le quantile d’une distribution gamma généralisée étendue (avec les paramètres mu, sigma, et lambda), dont la valeur correspondant à la probabilité p qu&apos;une valeur aléatoire soit inférieure.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire de loi gamma soit inférieure à q, où l’argument paramètre de forme alpha doit être positif. IGamma() est un alias de Gamma Distribution(). La fonction Gamma Distribution() est équivalente à Gamma(alpha,q)/Gamma(alpha).

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**Description :** Renvoie la densité à q d&apos;une distribution de Johnson Sb, où q compris dans l&apos;intervalle entre theta et theta + sigma, delta>0 et gamma entre -∞ et +∞ sont des paramètres de forme, sigma>0 est un paramètre d&apos;échelle, et theta entre -∞ et +∞ est un paramètre de seuillage. Remarque : theta est l’extrémité inférieure de la distribution etsigma  est l&apos;étendue du support de la distribution.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon le Sb de Johnson est inférieure à q. (Remarque : voir la fonction Johnson Sb Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**Description :** Renvoie le quantile d’une distribution Sb de Johnson, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile. (Remarque : p est le premier paramètre. Voir la fonction Johnson Sb Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**Syntaxe :** y = Johnson Sl Density( q, gamma, delta, theta, <sigma=1> )

**Description :** Renvoie la densité au point q d&apos;une distribution de Johnson Sl, où q compris dans l&apos;intervalle de theta à +∞, delta>0 et gamma entre -∞ et +∞ sont des paramètres de forme, sigma égal à +1 ou -1 est un paramètre d&apos;échelle, et theta compris entre -∞ et +∞ est un paramètre de seuillage. Remarque : quand sigma = 1, theta est la limite inférieure de la distribution, et quand sigma=-1, theta est la limite supérieure. Également, sigma positif implique que la distribution est asymétrique positive, sigma négatif implique que la distribution est asymétrique négative.

**JMP Version ajoutée :** Avant la version 14

```js

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
	H List Box(
		Slider Box( -15, 15, gamma, jslp << reshow ),
		Text Box( " \!U03B3" )
	),
	H List Box( Slider Box( 0, 10, delta, jslp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslp << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Distribution

**Syntaxe :** p = Johnson Sl Distribution( q, gamma, delta, theta, <sigma=1> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon le S1 de Johnson est inférieure à q. (Remarque : voir la fonction Johnson Sl Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```js

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
	H List Box(
		Slider Box( -15, 15, gamma, jslc << reshow ),
		Text Box( " \!U03B3" )
	),
	H List Box( Slider Box( 0, 10, delta, jslc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslc << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Quantile

**Syntaxe :** q = Johnson Sl Quantile( p, gamma, delta, theta, <sigma=1> )

**Description :** Renvoie le quantile d’une distribution S1 de Johnson, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile. (Remarque : p est le premier paramètre. Voir la fonction Johnson Sl Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**Syntaxe :** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**Description :** Renvoie la densité à q d&apos;une distribution Johnson Su, où q compris entre -∞ et +∞, delta>0 et gamma entre -∞ et +∞ sont des paramètres de forme, sigma>0 est un paramètre d&apos;échelle, et theta entre -∞ et +∞ est un paramètre de seuillage.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon le Su de Johnson est inférieure à q. (Remarque : voir la fonction Johnson Su Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**Description :** Renvoie le quantile d’une distribution Su de Johnson, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile. (Remarque : p est le premier paramètre. Voir la fonction Johnson Su Density() pour obtenir la description des paramètres.)

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### LEV Density

**Syntaxe :** y = LEV Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution des valeurs extrêmes les plus grandes avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = LEV Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution des valeurs extrêmes les plus grandes avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = LEV Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution des valeurs extrêmes les plus grandes avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = LogGenGamma Density( x, mu, sigma, lambda )

**Description :** Renvoie la densité à x d&apos;une distribution de probabilité log gamma généralisée avec les paramètres mu, sigma, et lambda.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon log gamma généralisé (avec les paramètres mu, sigma, et  lambda) soit inférieure à x.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**Description :** Renvoie le quantile d’une distribution log gamma généralisée (avec les paramètres mu, sigma, et lambda), dont la valeur correspondant à la probabilité p qu&apos;une valeur aléatoire soit inférieure.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Logistic Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Logistic Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = Logistic Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Loglogistic Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution log-logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Loglogistic Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution log-logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = Loglogistic Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution log-logistique avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Lognormal Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution log-normale avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Lognormal Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution log-normale avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = Lognormal Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution log-normale avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Normal Biv Distribution( x, y, r, <mu1=0>, <s1=1>, <mu2=0>, <s2=1> )

**Description :** Calcule la probabilité qu&apos;une observation (X, Y) est inférieure ou égale à (x, y) avec un coefficient de corrélation de r où X présente une distribution normale marginale avec une moyenne de mu1 et un écart-type de s1, et Y présente une distribution normale marginale avec une moyenne de mu2 et un écart-type de s2. Si mu1, s1, mu2 et s2 ne sont pas donnés, la fonction prend la forme d&apos;une distribution bivariée normale standard avec mu1=0, s1=1, mu2=0 et s2=1.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Density

**Syntaxe :** y = Normal Density( q, <mu=0>, <sigma=1> )

**Description :** Renvoie la densité à q d’une distribution normale avec moyenne mu et écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Normal Distribution( q, <mu=0>, <sigma=1> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire normale est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Normal Log CDistribution( x, <mean=0>, <std dev=1> )

**Description :** Renvoie le logarithme de 1 - Distribution normale à x avec moyenne mu et écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Normal Log Density( x, <mu=0>, <sigma=1>)

**Description :** Renvoie le logarithme de la densité de probabilité normale à x avec moyenne mu et écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Normal Log Distribution( x, <mean=0>, <std dev=1> )

**Description :** Renvoie le logarithme de la distribution normale à x avec moyenne mu et écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**Description :** Renvoie la densité à q d’une distribution de mélange normal avec moyennes de groupe meanvec, écarts-types de groupe sdvec et probabilités de groupe probvec. Ici meanvec, sdvec et probvec sont des vecteurs de même dimension.

**JMP Version ajoutée :** Avant la version 14

```js

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
	H List Box(
		Slider Box( .1, 9, sigma1, clty << reshow ),
		Text Box( " Std Dev 1" )
	),
	H List Box(
		Slider Box( .1, 9, sigma2, clty << reshow ),
		Text Box( " Std Dev 2" )
	),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Distribution

**Syntaxe :** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**Description :** Renvoie la probabilité qu’une variable distribuée selon un modèle mélange normal avec moyennes de groupe meanvec, écarts-types de groupe sdvecprobabilités de groupe probvec soit inférieure à q. Ici meanvec, sdvec et probvec sont des vecteurs de même dimension.

**JMP Version ajoutée :** Avant la version 14

```js

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
			Normal Mixture Distribution(
				y,
				mu1 |/ mu2,
				sigma1 |/ sigma2,
				p1 |/ (1 - p1)
			),
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
	H List Box(
		Slider Box( .1, 9, sigma1, clty << reshow ),
		Text Box( " Std Dev 1" )
	),
	H List Box(
		Slider Box( .1, 9, sigma2, clty << reshow ),
		Text Box( " Std Dev 2" )
	),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Quantile

**Syntaxe :** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**Description :** Renvoie le quantile d’une distribution de mélange normal, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

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
			Normal Mixture Distribution(
				q,
				mu1 |/ mu2,
				sigma1 |/ sigma2,
				p1 |/ (1 - p1)
			),
			q
		);
		Pen Color( "blue" );
		V Line(
			Normal Mixture Quantile(
				extqqq,
				mu1 |/ mu2,
				sigma1 |/ sigma2,
				p1 |/ (1 - p1)
			),
			0,
			1
		);
		Text( {-4.5, 0.9}, " quantile=", Round( extqqq, 2 ) );
	),
	H List Box(
		Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ),
		Text Box( " quantile" )
	),
	H List Box( Slider Box( -3, 3, mu1, extqgr << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, extqgr << reshow ), Text Box( " Mean 2" ) ),
	H List Box(
		Slider Box( .1, 9, sigma1, extqgr << reshow ),
		Text Box( " Std Dev 1" )
	),
	H List Box(
		Slider Box( .1, 9, sigma2, extqgr << reshow ),
		Text Box( " Std Dev 2" )
	),
	H List Box( Slider Box( 0, 1, p1, extqgr << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Quantile

**Syntaxe :** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**Description :** Renvoie le quantile d’une distribution normale, correspondant à la probabilité p qu’une valeur aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### Probit

**Syntaxe :** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**Description :** Renvoie le quantile d’une distribution normale, correspondant à la probabilité p qu’une valeur aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### SEV Density

**Syntaxe :** y = SEV Density( x, mu, sigma )

**Description :** Renvoie la densité à x d’une distribution des valeurs extrêmes les plus petites avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = SEV Distribution( x, mu, sigma )

**Description :** Renvoie la probabilité à x d’une distribution des valeurs extrêmes les plus petites avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = SEV Quantile( p, mu, sigma )

**Description :** Renvoie le quantile à p d’une distribution des valeurs extrêmes les plus petites avec paramètre de position mu et paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** d = SHASH Density( x, gamma, delta, theta, sigma )

**Description :** Renvoie la densité à x d&apos;une distribution sinh-arcsinh (SHASH). La transformation SHASH peut être utilisée pour créer des données plus normalement distribuées.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
SHASH Density( 0, -1, 2, -2, 3 );

```

**Transformation SHASH**

```js

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

### SHASH Distribution

**Syntaxe :** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**Description :** Renvoie la probabilité qu&apos;une variable distribuée sinh-arcsinh (SHASH) soit inférieure à q. La transformation SHASH peut être utilisée pour créer des données plus normalement distribuées.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

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

**Transformation SHASH**

```js

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

### SHASH Quantile

**Syntaxe :** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**Description :** Renvoie le quantile d&apos;une distribution sinh-arcsinh (SHASH), correspondant à la probabilité p qu&apos;une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile. La transformation SHASH peut être utilisée pour créer des données plus normalement distribuées.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
SHASH Quantile( .5, 1, 2, 3, 1 );

```

**Transformation SHASH**

```js

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

### Students t Density

**Syntaxe :** p = t Density( q, df, <nonCentrality=0> )

**Description :** Renvoie la fonction de densité du t de Student.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = t Distribution( q, df, <nonCentrality=0> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Student est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = t Quantile( p, df, <nonCentrality=0> )

**Description :** Renvoie le quantile d’une distribution t de Student, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

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
		Text(
			{-4.5, 0.9},
			"df=",
			Round( extqdf, 2 ),
			" quantile=",
			Round( extqqq, 2 )
		);
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box(
		Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ),
		Text Box( " quantile" )
	), 

);

```

### Tukey HSD P value

**Syntaxe :** p = Tukey HSD P value( q, nGroups, dfe )

**Description :** Renvoie la p-value du test des comparaisons multiples HSD de Tukey, où q est la statistique de test, nGroups est le nombre de groupes de l’étude et dfe est le degré de liberté de l’erreur (compte tenu de l’échantillon total de l’étude).



Notez que q est la valeur critique ajustée de Tukey, qui est le quantile de la distribution de l&apos;étendue studentisée de Tukey divisé par racine(2).

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**Syntaxe :** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**Description :** Renvoie le quantile nécessaire pour le test des comparaisons multiples HSD de Tukey, où 1-alpha est le niveau de confiance, nGroups est le nombre de groupes de l’étude, et dfe est le degré de liberté de l’erreur (compte tenu de l’échantillon total de l’étude).



Notez que q est la valeur critique ajustée de Tukey, qui est le quantile de la distribution de l&apos;étendue studentisée de Tukey divisé par racine(2).

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = Weibull Density( x, shape, <scale=1>, <threshold=0> )

**Description :** Renvoie la densité à x d’une distribution de probabilité de Weibull avec un paramètre shape et un paramètre scale facultatif.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = Weibull Distribution( x, shape, <scale=1>, <threshold=0> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Weibull (avec un paramètre shape et le paramètre facultatif scale) soit inférieure à x.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = Weibull Quantile( p, beta, <alpha=1>, <threshold=0> )

**Description :** Renvoie le quantile d’une distribution de Weibull, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile, où beta et alpha sont les paramètres de forme et d’échelle, respectivement.

**JMP Version ajoutée :** Avant la version 14

```js

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
	H List Box(
		Slider Box( 0, 5, exwqbeta, exwqy << reshow ),
		Text Box( " \!U03B2" )
	),
	H List Box(
		Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ),
		Text Box( " quantile" )
	)
);

```

### t Density

**Syntaxe :** p = t Density( q, df, <nonCentrality=0> )

**Description :** Renvoie la fonction de densité du t de Student.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** p = t Distribution( q, df, <nonCentrality=0> )

**Description :** Renvoie la probabilité qu&apos;une variable aléatoire distribuée selon Student est inférieure à q.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = t Log CDistribution( x, df, <nc> )

**Description :** Renvoie le logarithme de la distribution 1-t.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = t Log Density( x, df, <nc> )

**Description :** Renvoie le logarithme de la densité de probabilité t.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** y = t Log Distribution( x, df, <nc> )

**Description :** Renvoie le logarithme de la distribution t.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** nc = t Noncentrality( x, df, prob )

**Description :** Résout le paramètre de non-centralité d’une distribution de Student, telle que prob = t Distribution( x, df, nc ).

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** q = t Quantile( p, df, <nonCentrality=0> )

**Description :** Renvoie le quantile d’une distribution t de Student, correspondant à la probabilité p qu’une variable aléatoire ayant cette distribution prenne une valeur inférieure au quantile.

**JMP Version ajoutée :** Avant la version 14

```js

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
		Text(
			{-4.5, 0.9},
			"df=",
			Round( extqdf, 2 ),
			" quantile=",
			Round( extqqq, 2 )
		);
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box(
		Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ),
		Text Box( " quantile" )
	), 

);

```

