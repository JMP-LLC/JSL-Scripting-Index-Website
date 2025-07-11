# Probability



### Beta Density

**Sintaxis:** y = Beta Density( q, alpha, beta, <theta=0>, <sigma=1> )

**Descripción:** Devuelve la densidad en q de una distribución Beta donde q está en el intervalo de theta a theta + sigma, alpha y beta son parámetros de forma y theta y sigma son parámetros de umbral y de rango, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

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
		Text( {0.55, 2.2}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Distribution

**Sintaxis:** p = Beta Distribution( q, alpha, beta, <theta=0>, <sigma=1> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución beta sea menor que q, donde alpha y beta son parámetros de forma y theta y sigma son parámetros de umbral y de rango, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

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
		Text( {0.1, 0.9}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Quantile

**Sintaxis:** q = Beta Quantile( p, alpha, beta, <theta=0>, <sigma=1> )

**Descripción:** Devuelve el cuantil de una distribución Beta, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p, donde alpha y beta son los parámetros de forma y theta y sigma son los parámetros de umbral y rango, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Beta Quantile( 0.95, 2, 5 );

```

### Cauchy Density

**Sintaxis:** y = Cauchy Density( q, <center>, <scale> )

**Descripción:** Devuelve la densidad en q de una distribución de Cauchy con centro mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Cauchy Distribution( q, <center>, <scale> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución de Cauchy es inferior a q.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Cauchy Quantile( p, <center>, <scale> )

**Descripción:** Devuelve el cuantil de una distribución de Cauchy, el valor de la cual tiene una probabilidad p de que un valor aleatorio sea inferior.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = ChiSquare Density( q, df, <nonCentrality=0> )

**Descripción:** Devuelve la densidad en q de una distribución ji cuadrado con df grados de libertad.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = ChiSquare Distribution( q, df, <nonCentrality=0> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución ji cuadrado sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = ChiSquare Log CDistribution( x, df, <nonCentrality=0> )

**Descripción:** Devuelve el logaritmo de 1- la distribución ji cuadrado.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = ChiSquare Log Density( x, df, <nonCentrality=0> )

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad ji cuadrado.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = ChiSquare Log Distribution( x, df, <nonCentrality=0> )

**Descripción:** Devuelve el logaritmo de la distribución ji cuadrado.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** nc = ChiSquare Noncentrality( x, df, prob )

**Descripción:** Devuelve el parámetro de no centralidad nc tal que prob es igual a la probabilidad de que una variable aleatoria con una distribución ji cuadrado con df grados de libertad sea menor que x.

**JMP Versión agregada:** Antes de la versión 14

```js

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

**Sintaxis:** q = ChiSquare Quantile( p, df, <nonCentrality=0> )

**Descripción:** Devuelve el cuantil de una distribución ji cuadrado, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
ChiSquare Quantile( 0.15, 5 );

```

### Dunnett P value

**Sintaxis:** p = Dunnett P value( q, nTrt, dfe, <lambdaVec = .> )

**Descripción:** Devuelve el valor p de la prueba de comparaciones múltiples de Dunnett, donde q es el estadístico de prueba, nTrt es el número de tratamientos que se comparan con el grupo de control, dfe son los grados de libertad del error (basados en la muestra total del estudio) y el valor lambdaVec opcional es un vector de parámetros que se establece en 1/sqrt(2) de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**Sintaxis:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, <lambdaVec = .> )

**Descripción:** Devuelve el cuantil necesario de la prueba de comparaciones múltiples de Dunnett, donde 1-alpha es el nivel de confianza, nTrt es el número de tratamientos que se comparan con el grupo de control, dfe son los grados de libertad del error (basados en la muestra total del estudio) y el valor lambdaVec opcional es un vector de parámetros que se establece en 1/sqrt(2) de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Dunnett Quantile( 0.95, 3, 11 );

```

### ExGaussian Density

**Sintaxis:** y = ExGaussian Density( x, location, scale, shape )

**Descripción:** Devuelve la densidad en x de una distribución exgaussiana.

**JMP Versión agregada:** 18

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

**Sintaxis:** y = ExGaussian Distribution( x, location, scale, shape )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución exgaussiana sea menor que x.

**JMP Versión agregada:** 18

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

**Sintaxis:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**Descripción:** Devuelve el cuantil de una distribución exgaussiana, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** 18

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

**Sintaxis:** y = Exp Density( x, <theta=1> )

**Descripción:** Devuelve la densidad en x de una distribución exponencial con parámetro theta.

**JMP Versión agregada:** 14

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

**Sintaxis:** p = Exp Distribution( x, <theta=1> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución exponencial sea menor que x.

**JMP Versión agregada:** 14

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

**Sintaxis:** q = Exp Quantile( p, <theta=1> )

**Descripción:** Devuelve el cuantil de una distribución exponencial, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** 14

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

**Sintaxis:** y = Exponential Density( x, <theta=1> )

**Descripción:** Devuelve la densidad en x de una distribución exponencial con parámetro theta.

**JMP Versión agregada:** 17

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

**Sintaxis:** p = Exponential Distribution( x, <theta=1> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución exponencial sea menor que x.

**JMP Versión agregada:** 17

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

**Sintaxis:** q = Exponential Quantile( p, <theta=1> )

**Descripción:** Devuelve el cuantil de una distribución exponencial, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** 17

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

**Sintaxis:** y = F Density( q, dfnum, dfden, <nonCentrality=0> )

**Descripción:** Devuelve la densidad en q de una distribución F con dfn y dfd grados de libertad.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = F Distribution( q, dfnum, dfden, <nonCentrality=0> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución F sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = F Log CDistribution( x, dfnum, dfden, <nonCentrality=0> )

**Descripción:** Devuelve el logaritmo de 1- la distribución F.

**JMP Versión agregada:** Antes de la versión 14

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
		Text( {0.5, -0.9}, "dfn=", Round( flcddfn, 2 ), " dfd=", Round( flcddfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flcddfn, flcdy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flcddfd, flcdy << reshow ) )
);

```

### F Log Density

**Sintaxis:** y = F Log Density( x, dfnum, dfden, <nonCentrality=0> )

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad F.

**JMP Versión agregada:** Antes de la versión 14

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
		Text( {2.5, -0.7}, "dfn=", Round( fldedfn, 2 ), " dfd=", Round( fldedfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fldedfn, fldey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fldedfd, fldey << reshow ) )
);

```

### F Log Distribution

**Sintaxis:** y = F Log Distribution( x, dfnum, dfden, <nonCentrality=0> )

**Descripción:** Devuelve el logaritmo de la distribución F.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** nc = F Noncentrality( x, dfnum, dfden, prob )

**Descripción:** Resuelve el parámetro de no centralidad nc tal que prob = F Distribution( x, ndf, ddf, nc ).

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = F Power( alpha, dfh, dfm, d, n )

**Descripción:** Calcula la potencia de una Prueba F, donde alpha es el nivel de significación, dfh son los grados de libertad de la hipótesis, dfm son los grados de libertad del modelo completo, d es el tamaño del efecto al cuadrado SSH/(n*sigma^2) donde SSH es la suma de cuadrados de la hipótesis y n es el número total de observaciones. Nótese que, para el modelo ANOVA, d = Sum(a[i]^2)/(k * sigma^2) donde a[i] son efectos y k es el número de medias.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = F Quantile( p, dfnum, dfden, <nonCentrality=0> )

**Descripción:** Devuelve el cuantil de una distribución F, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**Sintaxis:** n = F Sample Size( alpha, dfh, dfm, d, power )

**Descripción:** Calcula el tamaño muestral, donde alpha es el nivel de significación, dfh son los grados de libertad de la hipótesis, dfm son los grados de libertad del modelo completo, d es el tamaño del efecto al cuadrado SSH/(n*sigma^2) donde SSH es la suma de cuadrados de la hipótesis y power es la potencia deseada. Nótese que, para el modelo ANOVA, d = Sum(a[i]^2)/(k * sigma^2) donde a[i] son efectos y k es el número de medias.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = FDR Adjust( matrix )

**Descripción:** Devuelve el ajuste de la tasa de falsos descubrimientos para los valores p especificados utilizando el método Benjamini-Hochberg.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### Frechet Density

**Sintaxis:** y = Frechet Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución Fréchet con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Frechet Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución Fréchet con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Frechet Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución Fréchet con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = GLog Density( q, mu, sigma, lambda )

**Descripción:** Devuelve la densidad en q de una distribución logarítmica generalizada con localización mu, escala sigma y forma lambda.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = GLog Distribution( q, mu, sigma, lambda )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución logarítmica generalizada sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = GLog Quantile( p, mu, sigma, lambda )

**Descripción:** Devuelve el cuantil de una distribución logarítmica generalizada, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

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
		Text( {-9, 0.7}, "quantile= ", Round( GLog Quantile( p, mu, sigma, lambda ), 2 ) );
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Gamma Density

**Sintaxis:** y = Gamma Density( q, <alpha=1>, <scale=1>, <threshold=0> )

**Descripción:** Devuelve la densidad en q de una distribución de probabilidad Gamma, donde el argumento parámetro de forma alpha debe ser positivo.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Gamma sea menor que q, donde el argumento del parámetro de forma alpha debe ser positivo. IGamma() es un alias de Gamma Distribution(). La función Gamma Distribution() equivale a Gamma(alpha,q)/Gamma(alpha).

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Gamma Log CDistribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**Descripción:** Devuelve el logaritmo de 1 - la distribución Gamma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Gamma Log Density( x, <alpha=1>, <scale=1>, <threshold=0> )

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad Gamma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Gamma Log Distribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**Descripción:** Devuelve el logaritmo de la distribución Gamma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Gamma Quantile( p, <alpha=1>, <scale=1>, <threshold=0> )

**Descripción:** Devuelve el cuantil de una distribución Gamma, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**Sintaxis:** y = GenGamma Density( x, mu, sigma, lambda )

**Descripción:** Devuelve la densidad en x de una distribución de probabilidad de gamma generalizada extendida con parámetros mu, sigma y lambda.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = GenGamma Distribution( x, mu, sigma, lambda )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución gamma generalizada extendida (con parámetros mu, sigma y lambda) sea inferior a x.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = GenGamma Quantile( p, mu, sigma, lambda )

**Descripción:** Devuelve el cuantil de una distribución gamma generalizada extendida (con parámetros mu, sigma y lambda), el valor para el que la probabilidad de que un valor aleatorio fuera inferior es p.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Gamma sea menor que q, donde el argumento del parámetro de forma alpha debe ser positivo. IGamma() es un alias de Gamma Distribution(). La función Gamma Distribution() equivale a Gamma(alpha,q)/Gamma(alpha).

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la densidad en q de una distribución Johnson Sb, donde q está en el intervalo de theta a theta + sigma, delta>0 y gamma entre -∞ y +∞ son parámetros de forma, sigma>0 es un parámetro de escala y theta entre -∞ y +∞ es un parámetro de umbral. Nota: theta es el extremo inferior de la distribución y sigma es el rango de soporte de la distribución.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Johnson Sb sea menor que q. (Nota: consulte las descripciones de los parámetros en la función Johnson Sb Density()).

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**Descripción:** Devuelve el cuantil de una distribución Johnson Sb, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p. (Nota: p es el primer parámetro. Consulte la descripción de los parámetros en la función Johnson Sb Density()).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**Sintaxis:** y = Johnson Sl Density( q, gamma, delta, theta, <sigma=1> )

**Descripción:** Devuelve la densidad en q de una distribución Johnson Sl, donde q está en el intervalo de theta a +∞, delta>0 y gamma entre -∞ y +∞ son parámetros de forma, sigma igual a +1 o -1 es un parámetro de escala, y theta entre -∞ y +∞ es un parámetro de umbral. Nota: cuando sigma = 1, theta es el límite inferior de la distribución y cuando sigma=-1, theta es el límite superior. Además, un valor positivo de sigma implica asimetría positiva y un valor negativo de sigma implica asimetría negativa.

**JMP Versión agregada:** Antes de la versión 14

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
	H List Box( Slider Box( -15, 15, gamma, jslp << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslp << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Distribution

**Sintaxis:** p = Johnson Sl Distribution( q, gamma, delta, theta, <sigma=1> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Johnson Sl sea menor que q. (Nota: consulte las descripciones de los parámetros en la función Johnson Sl Density()).

**JMP Versión agregada:** Antes de la versión 14

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
	H List Box( Slider Box( -15, 15, gamma, jslc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslc << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Quantile

**Sintaxis:** q = Johnson Sl Quantile( p, gamma, delta, theta, <sigma=1> )

**Descripción:** Devuelve el cuantil de una distribución Johnson Sl, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p. (Nota: p es el primer parámetro. Consulte la descripción de los parámetros en la función Johnson Sl Density()).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**Sintaxis:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la densidad en q de una distribución Johnson Su, donde q está entre -∞ y +∞, delta>0 y gamma entre -∞ y +∞ son los parámetros de forma, sigma>0 es un parámetro de escala y theta está entre -∞ y + y es un parámetro de umbral.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Johnson Su sea menor que q. (Nota: consulte las descripciones de los parámetros en la función Johnson Su Density()).

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**Descripción:** Devuelve el cuantil de una distribución Johnson Su, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p. (Nota: p es el primer parámetro. Consulte la descripción de los parámetros en la función Johnson Su Density()).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### LEV Density

**Sintaxis:** y = LEV Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución de los valores extremos máximos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = LEV Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución de los valores extremos máximos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = LEV Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución de los valores extremos máximos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = LogGenGamma Density( x, mu, sigma, lambda )

**Descripción:** Devuelve la densidad en x de una distribución de probabilidad de log-gamma generalizada extendida con parámetros mu, sigma y lambda.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución log-gamma generalizada (con parámetros mu, sigma y lambda) sea inferior a x.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**Descripción:** Devuelve el cuantil de una distribución log-gamma generalizada (con parámetros mu, sigma y lambda), el valor para el que la probabilidad de que un valor aleatorio fuera inferior es p.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Logistic Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Logistic Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Logistic Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Loglogistic Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución log-logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Loglogistic Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución log-logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Loglogistic Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución log-logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Lognormal Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución log-normal con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Lognormal Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución log-normal con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Lognormal Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución log-normal con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Normal Biv Distribution( x, y, r, <mu1=0>, <s1=1>, <mu2=0>, <s2=1> )

**Descripción:** Calcula la probabilidad de que una observación (X, Y) sea menor o igual que (x, y) con un coeficiente de correlación r donde X está distribuida normalmente y marginalmente con una media mu1 y desviación estándar s1 y Y está distribuida normalmente y marginalmente con una media mu2 y desviación estándar s2. Si no se indican mu1, s1, mu2 y s2, la función asume la distribución bivariante normal estándar con mu1=0, s1=1, mu2=0, y s2=1.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Density

**Sintaxis:** y = Normal Density( q, <mu=0>, <sigma=1> )

**Descripción:** Devuelve la densidad en q de una distribución normal con media mu y desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Normal Distribution( q, <mu=0>, <sigma=1> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución normal sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Normal Log CDistribution( x, <mean=0>, <std dev=1> )

**Descripción:** Devuelve el logaritmo de 1- distribución normal en x con media mu y desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Normal Log Density( x, <mu=0>, <sigma=1>)

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad normal en x con la media mu y la desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Normal Log Distribution( x, <mean=0>, <std dev=1> )

**Descripción:** Devuelve el logaritmo de la distribución normal en x con media mu y desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**Descripción:** Devuelve la densidad en q de una mezcla de distribuciones normales con medias de grupo meanvec, desviaciones estándar de grupo sdvec y probabilidades de grupo probvec. En este caso meanvec, sdvec y probvec son todos vectores del mismo tamaño.

**JMP Versión agregada:** Antes de la versión 14

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
	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Distribution

**Sintaxis:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**Descripción:** Devuelve la probabilidad de que una variable distribuida según una mezcla de normales con medias de grupo meanvec, desviaciones estándar de grupo sdvec y probabilidades de grupo probvec sea menor que q. Aquí meanvec, sdvec y  probvec son todos vectores del mismo tamaño.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**Descripción:** Devuelve el cuantil de una mezcla de distribuciones normales, los valores para los cuales la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**Descripción:** Devuelve el cuantil de una distribución normal, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### Probit

**Sintaxis:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**Descripción:** Devuelve el cuantil de una distribución normal, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### SEV Density

**Sintaxis:** y = SEV Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución de los valores extremos mínimos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = SEV Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución de los valores extremos mínimos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = SEV Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución de los valores extremos mínimos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** d = SHASH Density( x, gamma, delta, theta, sigma )

**Descripción:** Devuelve la densidad en x de una distribución sinh-arcsinh (SHASH). La transformación SHASH se puede utilizar para crear datos con una distribución más normal.

**JMP Versión agregada:** 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
SHASH Density( 0, -1, 2, -2, 3 );

```

**Transformación SHASH**

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

**Sintaxis:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución sinh-arcsinh (SHASH) sea inferior que q. La transformación SHASH se puede utilizar para crear datos con una distribución más normal.

**JMP Versión agregada:** 14

**Ejemplo 1**

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

**Transformación SHASH**

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

**Sintaxis:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**Descripción:** Devuelve el cuantil de una distribución sinh-arcsinh (SHASH), el valor para el cual la probabilidad de que un valor aleatorio sea menor es p. La transformación SHASH se puede utilizar para crear datos con una distribución más normal.

**JMP Versión agregada:** 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
SHASH Quantile( .5, 1, 2, 3, 1 );

```

**Transformación SHASH**

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

**Sintaxis:** p = t Density( q, df, <nonCentrality=0> )

**Descripción:** Devuelve la función de densidad t de Student.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = t Distribution( q, df, <nonCentrality=0> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución t de Student sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = t Quantile( p, df, <nonCentrality=0> )

**Descripción:** Devuelve el cuantil de una distribución t de Student, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

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
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), 

);

```

### Tukey HSD P value

**Sintaxis:** p = Tukey HSD P value( q, nGroups, dfe )

**Descripción:** Devuelve el valor p necesario para la prueba de comparaciones múltiples HSD de Tukey, donde q es el estadístico de prueba, nGroups es el número de grupos del estudio y dfe son los grados de libertad del error (basado en el total de la muestra del estudio).



Tenga en cuenta que q es el valor crítico ajustado de Tukey, que es el cuantil de la distribución de rango estudentizado de Tukey dividido por sqrt(2).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**Sintaxis:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**Descripción:** Devuelve el cuantil necesario para la prueba de comparaciones múltiples HSD de Tukey, donde 1-alpha es el nivel de confianza, nGroups es el número de grupos del estudio y dfe son los grados de libertad del error (basado en el total de la muestra del estudio).



Tenga en cuenta que q es el valor crítico ajustado de Tukey, que es el cuantil de la distribución de rango estudentizado de Tukey dividido por sqrt(2).

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Weibull Density( x, shape, <scale=1>, <threshold=0> )

**Descripción:** Devuelve la densidad en x de una distribución de probabilidad de Weibull con un parámetro de shape y parámetro de scale opcional.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = Weibull Distribution( x, shape, <scale=1>, <threshold=0> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución de Weibull (con un parámetro de shape y un parámetro de scale opcional) sea menor que x.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = Weibull Quantile( p, beta, <alpha=1>, <threshold=0> )

**Descripción:** Devuelve el cuantil de una distribución de Weibull, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p, donde beta y alpha son los parámetros de forma y escala, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

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
	H List Box( Slider Box( 0, 5, exwqbeta, exwqy << reshow ), Text Box( " \!U03B2" ) ),
	H List Box( Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ), Text Box( " quantile" ) )
);

```

### t Density

**Sintaxis:** p = t Density( q, df, <nonCentrality=0> )

**Descripción:** Devuelve la función de densidad t de Student.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** p = t Distribution( q, df, <nonCentrality=0> )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución t de Student sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = t Log CDistribution( x, df, <nc> )

**Descripción:** Devuelve el logaritmo de 1- la distribución t.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = t Log Density( x, df, <nc> )

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad t.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = t Log Distribution( x, df, <nc> )

**Descripción:** Devuelve el logaritmo de la distribución t.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** nc = t Noncentrality( x, df, prob )

**Descripción:** Resuelve el parámetro de no centralidad de una distribución t de Student tal que prob = t Distribution( x, df, nc ).

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** q = t Quantile( p, df, <nonCentrality=0> )

**Descripción:** Devuelve el cuantil de una distribución t de Student, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

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
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), 

);

```

