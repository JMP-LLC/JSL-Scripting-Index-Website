# Probability



### Beta Density

**Sintassi:** y = Beta Density( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la densità in q per una distribuzione beta, dove q è nell&apos;intervallo da theta a theta + sigma, alpha e beta sono parametri della forma, theta e sigma sono rispettivamente parametri della soglia e del range.

**JMP Versione aggiunta:** prima della versione 14

```jsl

alpha = 0.5;beta = 0.5;New Window( "Example: Beta Density",	y = Graph Box(		Y Scale( 0, 2.5 ),		X Scale( 0, 1 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Beta Density( q, alpha, beta ), q );		Text( {0.55, 2.2}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );	),	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) ));

```

### Beta Distribution

**Sintassi:** p = Beta Distribution( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione beta sia minore di q, dove alpha e beta sono parametri della forma etheta e sigma sono rispettivamente parametri della soglia e del range.

**JMP Versione aggiunta:** prima della versione 14

```jsl

alpha = 0.5;beta = 0.5;New Window( "Example: Beta Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 1 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Beta Distribution( q, alpha, beta ), q );		Text( {0.1, 0.9}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );	),	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) ));

```

### Beta Quantile

**Sintassi:** q = Beta Quantile( p, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione beta, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p, dove alpha e beta sono parametri della forma e theta e sigma sono rispettivamente parametri della soglia e del range.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Beta Quantile( 0.95, 2, 5 );

```

### Cauchy Density

**Sintassi:** y = Cauchy Density( q, &lt;center&gt;, &lt;scale&gt; )

**Descrizione:** Restituisce la densità a q di una distribuzione di Cauchy con centro mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: Cauchy Density",	y = Graph Box(		Y Scale( 0, .4 ),		X Scale( -6, 6 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Cauchy Density( q ), q );	));

```

### Cauchy Distribution

**Sintassi:** p = Cauchy Distribution( q, &lt;center&gt;, &lt;scale&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita di Cauchy sia inferiore a q.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: Cauchy Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -6, 6 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Cauchy Distribution( q ), q );	));

```

### Cauchy Quantile

**Sintassi:** q = Cauchy Quantile( p, &lt;center&gt;, &lt;scale&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione di Cauchy, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: Cauchy Quantile",	Graph Box(		Y Scale( -6, 6 ),		X Scale( 0, 1 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Cauchy Quantile( p ), p );	));

```

### ChiSquare Density

**Sintassi:** p = ChiSquare Density( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la densità in q di una distribuzione del chi-quadrato con gradi di libertà df.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cdedf = 2;New Window( "Example: ChiSquare Density",	cdey = Graph Box(		Y Scale( 0, 0.4 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Density( cdeq, cdedf ), cdeq );		Text( {7, 0.35}, "df=", Round( cdedf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdedf, cdey << reshow ) ));

```

### ChiSquare Distribution

**Sintassi:** p = ChiSquare Distribution( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione del chi-quadrato sia minore di q.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cdidf = 2;New Window( "Example: ChiSquare Distribution",	cdiy = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Distribution( cdiq, cdidf ), cdiq );		Text( {1, 0.9}, "df=", Round( cdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdidf, cdiy << reshow ) ));

```

### ChiSquare Log CDistribution

**Sintassi:** y = ChiSquare Log CDistribution( x, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione del 1 - chi-quadrato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

clcdidf = 2;New Window( "Example: ChiSquare Log CDistribution",	clcdiy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Log CDistribution( clcdiq, clcdidf ), clcdiq );		Text( {1, -0.9}, "df=", Round( clcdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, clcdidf, clcdiy << reshow ) ));

```

### ChiSquare Log Density

**Sintassi:** y = ChiSquare Log Density( x, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della densità di probabilità del chi-quadrato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cldedf = 1;New Window( "Example: ChiSquare Log Density",	cldey = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Log Density( cldeq, cldedf ), cldeq );		Text( {7, -0.35}, "df=", Round( cldedf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cldedf, cldey << reshow ) ));

```

### ChiSquare Log Distribution

**Sintassi:** y = ChiSquare Log Distribution( x, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione del chi-quadrato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cldidf = 2;New Window( "Example: ChiSquare Log Distribution",	cldiy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Log Distribution( cldiq, cldidf ), cldiq );		Text( {1, -0.9}, "df=", Round( cldidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, cldidf, cldiy << reshow ) ));

```

### ChiSquare Noncentrality

**Sintassi:** nc = ChiSquare Noncentrality( x, df, prob )

**Descrizione:** Restituisce il parametro di non centralità nc tale che prob è uguale alla probabilità che una variabile casuale con distribuzione del chi-quadrato e gradi di libertà df sia minore di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: ChiSquare Noncentrality",	chincgr = Graph Box(		Y Scale( 0.01, 0.99 ),		X Scale( 0.01, 0.99 ),		XName( "q" ),		Pen Color( "red" );		Y Function( ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, q ) ), q );	));ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, 0.5 ) );

```

### ChiSquare Quantile

**Sintassi:** q = ChiSquare Quantile( p, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione del chi-quadrato, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ChiSquare Quantile( 0.15, 5 );

```

### Dunnett P value

**Sintassi:** p = Dunnett P value( q, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Descrizione:** Restituisce il p-value del test dei confronti multipli di Dunnett, dove q è la statistica di test, nTrt è il numero di trattamenti confrontati con il gruppo di controllo, dfe sono i gradi di libertà dell&apos;errore (basati sul campione totale dello studio) e lambdaVec facoltativo è un vettore di parametri, per impostazione predefinita impostati su 1/sqrt(2).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**Sintassi:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Descrizione:** Restituisce il quantile richiesto per il test dei confronti multipli di Dunnett, dove 1-alpha è il livello di confidenza, nTrt è il numero di trattamenti confrontati con il gruppo di controllo, dfe sono i gradi di libertà dell&apos;errore (basati sul campione totale dello studio) e lambdaVec facoltativo è un vettore di parametri, per impostazione predefinita impostati su 1/sqrt(2).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Dunnett Quantile( 0.95, 3, 11 );

```

### ExGaussian Density

**Sintassi:** y = ExGaussian Density( x, location, scale, shape )

**Descrizione:** Restituisce la densità a x di una distribuzione ex gaussiana.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Example: ExGaussian Density",	y = Graph Box(		Y Scale( 0, .2 ),		X Scale( -2, 15 ),		XName( "x" ),		Pen Color( "red" );		Y Function( ExGaussian Density( x, 0, .5, .25 ), x );	));

```

### ExGaussian Distribution

**Sintassi:** y = ExGaussian Distribution( x, location, scale, shape )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita ex gaussiana sia minore di x.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Example: ExGaussian Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -2, 15 ),		XName( "x" ),		Pen Color( "red" );		Y Function( ExGaussian Distribution( x, 0, .5, .25 ), x );	));

```

### ExGaussian Quantile

**Sintassi:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**Descrizione:** Restituisce il quantile da una distribuzione ex gaussiana, il valore per cui si ha probabilità pari a p di ottenere un valore casuale inferiore.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Example: ExGaussian Quantile",	Graph Box(		Y Scale( -2, 15 ),		X Scale( 0, 1 ),		XName( "p" ),		Pen Color( "red" );		Y Function( ExGaussian Quantile( p, 0, .5, .25 ), p );	));

```

### Exp Density

**Sintassi:** y = Exp Density( x, &lt;theta=1&gt; )

**Descrizione:** Restituisce la densità a x di una distribuzione esponenziale con parametro theta.

**JMP Versione aggiunta:** 14

```jsl

New Window( "Example: Exp Density",	y = Graph Box(		Y Scale( 0, 0.45 ),		X Scale( 0, 4 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Exp Density( x, 2 ), x );	));

```

### Exp Distribution

**Sintassi:** p = Exp Distribution( x, &lt;theta=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita esponenzialmente sia inferiore a x.

**JMP Versione aggiunta:** 14

```jsl

New Window( "Example: Exp Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 4 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Exp Distribution( x, 2 ), x );	));

```

### Exp Quantile

**Sintassi:** q = Exp Quantile( p, &lt;theta=1&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione esponenziale, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** 14

```jsl

New Window( "Example: Exp Quantile",	y = Graph Box(		Y Scale( 0, 4 ),		X Scale( 0, 1 ),		Pen Color( "red" );		Y Function( Exp Quantile( qq, 2 ), qq );	));

```

### Exponential Density

**Sintassi:** y = Exponential Density( x, &lt;theta=1&gt; )

**Descrizione:** Restituisce la densità a x di una distribuzione esponenziale con parametro theta.

**JMP Versione aggiunta:** 17

```jsl

New Window( "Example: Exponential Density",	y = Graph Box(		Y Scale( 0, 0.45 ),		X Scale( 0, 4 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Exponential Density( x, 2 ), x );	));

```

### Exponential Distribution

**Sintassi:** p = Exponential Distribution( x, &lt;theta=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita esponenzialmente sia inferiore a x.

**JMP Versione aggiunta:** 17

```jsl

New Window( "Example: Exponential Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 4 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Exponential Distribution( x, 2 ), x );	));

```

### Exponential Quantile

**Sintassi:** q = Exponential Quantile( p, &lt;theta=1&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione esponenziale, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** 17

```jsl

New Window( "Example: Exponential Quantile",	y = Graph Box(		Y Scale( 0, 4 ),		X Scale( 0, 1 ),		Pen Color( "red" );		Y Function( Exponential Quantile( qq, 2 ), qq );	));

```

### F Density

**Sintassi:** y = F Density( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la densità in q di una distribuzione F con gradi di libertà dfne dfd.

**JMP Versione aggiunta:** prima della versione 14

```jsl

fdedfn = 2;fdedfd = 2;New Window( "Example: F Density",	fdey = Graph Box(		Y Scale( 0, 0.8 ),		X Scale( 0, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Density( fdeq, fdedfn, fdedfd ), fdeq );		Text( {2.5, 0.7}, "dfn=", Round( fdedfn, 2 ), " dfd=", Round( fdedfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fdedfn, fdey << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fdedfd, fdey << reshow ) ));

```

### F Distribution

**Sintassi:** y = F Distribution( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita F sia inferiore a q.

**JMP Versione aggiunta:** prima della versione 14

```jsl

fdidfn = 5;fdidfd = 5;New Window( "Example: F Distribution",	fdiy = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Distribution( fdiq, fdidfn, fdidfd ), fdiq );		Text( {0.5, 0.9}, "dfn=", Round( fdidfn, 2 ), " dfd=", Round( fdidfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 0.5, 10, fdidfn, fdiy << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 0.5, 10, fdidfd, fdiy << reshow ) ));

```

### F Log CDistribution

**Sintassi:** y = F Log CDistribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione 1 - F.

**JMP Versione aggiunta:** prima della versione 14

```jsl

flcddfn = 5;flcddfd = 5;New Window( "Example: F Log CDistribution",	flcdy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Log CDistribution( flcdq, flcddfn, flcddfd ), flcdq );		Text( {0.5, -0.9}, "dfn=", Round( flcddfn, 2 ), " dfd=", Round( flcddfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flcddfn, flcdy << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flcddfd, flcdy << reshow ) ));

```

### F Log Density

**Sintassi:** y = F Log Density( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della densità di probabilità F.

**JMP Versione aggiunta:** prima della versione 14

```jsl

fldedfn = 1;fldedfd = 1;New Window( "Example: F Log Density",	fldey = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Log Density( fldeq, fldedfn, fldedfd ), fldeq );		Text( {2.5, -0.7}, "dfn=", Round( fldedfn, 2 ), " dfd=", Round( fldedfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fldedfn, fldey << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fldedfd, fldey << reshow ) ));

```

### F Log Distribution

**Sintassi:** y = F Log Distribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione F.

**JMP Versione aggiunta:** prima della versione 14

```jsl

flddfn = 5;flddfd = 5;New Window( "Example: F Log Distribution",	fldy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 10 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Log Distribution( fldq, flddfn, flddfd ), fldq );		Text( {0.5, -0.9}, "dfn=", Round( flddfn, 2 ), " dfd=", Round( flddfd, 2 ) );	),	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flddfn, fldy << reshow ) ),	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flddfd, fldy << reshow ) ));

```

### F Noncentrality

**Sintassi:** nc = F Noncentrality( x, dfnum, dfden, prob )

**Descrizione:** Risolve il parametro di non centralità nc quale prob = F Distribution( x, ndf, ddf, nc ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: F Noncentrality",	fncgr = Graph Box(		Y Scale( 0.01, 0.99 ),		X Scale( 0.01, 0.99 ),		XName( "q" ),		Pen Color( "red" );		Y Function( F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, q ) ), q );	));F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, 0.4 ) );

```

### F Power

**Sintassi:** p = F Power( alpha, dfh, dfm, d, n )

**Descrizione:** Calcola la potenza di un test F, dove alpha è il livello di significatività, dfh è il grado di libertà ipotizzato, dfm è il grado di libertà dell&apos;intero modello, d è la dimensione dell&apos;effetto al quadrato, SSH/(n\*sigma^2) dove SSH è la somma dei quadrati per l&apos;ipotesi e n è il numero totale di osservazioni. Nota: per il modello ANOVA, d = Sum(a[i]^2)/(k \* sigma^2) dove a[i] sono effetti e k è il numero di medie.

**JMP Versione aggiunta:** prima della versione 14

```jsl

alpha = 0.05;obs = 25;dfh = 5;dfm = 5;d = 1;New Window( "Example: F Power (alpha=.05,dfh=5,dfm=5)",	fpdigr = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( 0, 1 ),		YName( "Power" ),		XName( "d" ),		Pen Color( "red" );		Y Function( F Power( alpha, dfh, dfm, d, obs ), d );		Text( {0.75, 0.1}, "obs=", Round( obs ) );	),	H List Box( Text Box( "obs" ), Slider Box( 10, 100, obs, fpdigr << reshow ) ));

```

### F Quantile

**Sintassi:** q = F Quantile( p, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione F, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**Sintassi:** n = F Sample Size( alpha, dfh, dfm, d, power )

**Descrizione:** Calcola la dimensione campionaria, dove alpha è il livello di significatività, dfh è il grado di libertà ipotizzato, dfm è il grado di libertà dell&apos;intero modello, d è la dimensione dell&apos;effetto al quadrato, SSH/(n\*sigma^2) dove SSH è la somma dei quadrati per l&apos;ipotesi e power è la potenza desiderata. Nota: per il modello ANOVA, d = Sum(a[i]^2)/(k \* sigma^2) dove a[i] sono effetti e k è il numero di medie.

**JMP Versione aggiunta:** prima della versione 14

```jsl

alpha = 0.05;pow = 0.6;dfh = 5;dfm = 5;d = 1;New Window( "Example: F Sample Size (alpha=.05,dfh=5,dfm=5)",	fpdigr = Graph Box(		Y Scale( 0, 50 ),		X Scale( 0.5, 5 ),		YName( "Sample Size" ),		XName( "d" ),		Pen Color( "red" );		Y Function( F Sample Size( alpha, dfh, dfm, d, pow ), d );		Text( {0.75, 0.2}, "power=", Round( pow, 2 ) );	),	H List Box( Text Box( "power" ), Slider Box( 0.2, 0.95, pow, fpdigr << reshow ) ));

```

### FDR Adjust

**Sintassi:** y = FDR Adjust( matrix )

**Descrizione:** Restituisce la correzione del tasso di falsa scoperta  per i valori di p-value specificati utilizzando il metodo di Benjamini-Hochberg.

**JMP Versione aggiunta:** 19

```jsl

FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### Frechet Density

**Sintassi:** y = Frechet Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione di Fréchet con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = .5;New Window( "Example: Frechet Density",	y = Graph Box(		Y Scale( 0, .06 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Frechet Density( x, mu, sig ), x );		Text( {0, .055}, "mu=", Round( mu, 2 ) );		Text( {0, .045}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), );

```

### Frechet Distribution

**Sintassi:** p = Frechet Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione di Fréchet con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = .5;New Window( "Example: Frechet Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Frechet Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ));

```

### Frechet Quantile

**Sintassi:** q = Frechet Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione di Fréchet con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = .5;qq = .5;New Window( "Example: Frechet Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Frechet Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( Frechet Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### GLog Density

**Sintassi:** y = GLog Density( q, mu, sigma, lambda )

**Descrizione:** Restituisce la densità a q di una distribuzione logaritmica generalizzata con posizione mu, scala sigma e forma lambda.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: GLog Density",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 10 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GLog Density( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ));

```

### GLog Distribution

**Sintassi:** p = GLog Distribution( q, mu, sigma, lambda )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita con logaritmo generalizzato sia inferiore a q.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: Glog Distribution",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -20, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GLog Distribution( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ));

```

### GLog Quantile

**Sintassi:** q = GLog Quantile( p, mu, sigma, lambda )

**Descrizione:** Restituisce il quantile da una distribuzione logaritmica generalizzata, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sigma = 1;lambda = 1;p = 0.4;New Window( "Example: GLog Quantile",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -20, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GLog Distribution( x, mu, sigma, lambda ), x );		Pen Color( "Blue" );		V Line( GLog Quantile( p, mu, sigma, lambda ), 0, 1 );		Text(			{-9, 0.9},			"\!U03BC=",			Round( mu, 4 ),			" \!U03C3=",			Round( sigma, 4 ),			" \!U03BB=",			Round( lambda, 4 )		);		Text( {-9, 0.8}, "p=", Round( p, 3 ) );		Text( {-9, 0.7}, "quantile= ", Round( GLog Quantile( p, mu, sigma, lambda ), 2 ) );	),	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) ));

```

### Gamma Density

**Sintassi:** y = Gamma Density( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la densità in q di una distribuzione di probabilità gamma, dove l&apos;argomento del parametro della forma alpha deve essere positivo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

gdealpha = Log( 1.5 );New Window( "Example: Gamma Density",	gdey = Graph Box(		Y Scale( 0, 0.5 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Density( gdeq, Exp( gdealpha ) ), gdeq );		Text( {9, 0.45}, "\!U03B1=", Round( Exp( gdealpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gdealpha, gdey << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Distribution

**Sintassi:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione gamma sia inferiore a q, dove l&apos;argomento del parametro della forma alpha deve essere positivo. IGamma() è un nome di alias della Gamma Distribution(). La funzione Gamma Distribution() è equivalente a Gamma(alpha,q)/Gamma(alpha).

**JMP Versione aggiunta:** prima della versione 14

```jsl

gdialpha = Log( 1.5 );New Window( "Example: Gamma Distribution",	gdiy = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Log CDistribution

**Sintassi:** p = Gamma Log CDistribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il logaritmo di 1 – Distribuzione gamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

glcdialpha = Log( 1.5 );New Window( "Example: Gamma Log CDistribution",	glcdiy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Log CDistribution( glcdiq, Exp( glcdialpha ) ), glcdiq );		Text( {1, -0.9}, "\!U03B1=", Round( Exp( glcdialpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), glcdialpha, glcdiy << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Log Density

**Sintassi:** y = Gamma Log Density( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il logaritmo della funzione di densità della probabilità gamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

gldealpha = Log( 1.5 );New Window( "Example: Gamma Log Density",	gldey = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Log Density( gldeq, Exp( gldealpha ) ), gldeq );		Text( {9, -0.45}, "\!U03B1=", Round( Exp( gldealpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gldealpha, gldey << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Log Distribution

**Sintassi:** p = Gamma Log Distribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione gamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

gldialpha = Log( 1.5 );New Window( "Example: Gamma Log Distribution",	gldiy = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Log Distribution( gldiq, Exp( gldialpha ) ), gldiq );		Text( {1, -0.9}, "\!U03B1=", Round( Exp( gldialpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gldialpha, gldiy << reshow ),		Text Box( " \!U03B1" )	));

```

### Gamma Quantile

**Sintassi:** q = Gamma Quantile( p, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione gamma, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**Sintassi:** y = GenGamma Density( x, mu, sigma, lambda )

**Descrizione:** Restituisce la densità a x di una distribuzione di probabilità gamma con parametri mu, sigma e lambda.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: GenGamma Density",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -5, 10 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GenGamma Density( y, mu, sigma, lambda ), y );		Text( {-4, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-4, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ));

```

### GenGamma Distribution

**Sintassi:** p = GenGamma Distribution( x, mu, sigma, lambda )

**Descrizione:** Restituisce la probabilità che una variabile casuale gamma generalizzata estesa (con parametri mu, sigma e lambda) sia minore di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: GenGamma Distribution",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GenGamma Distribution( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ));

```

### GenGamma Quantile

**Sintassi:** q = GenGamma Quantile( p, mu, sigma, lambda )

**Descrizione:** Restituisce il quantile da una distribuzione gamma generalizzata estesa (con parametri mu, sigma e lambda), il valore per cui la probabilità che un valore casuale sia inferiore è p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sigma = 1;lambda = 1;p = 0.4;New Window( "Example: GenGamma Quantile",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( GenGamma Distribution( x, mu, sigma, lambda ), x );		Pen Color( "Blue" );		V Line( GenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );		Text(			{-9, 0.9},			"\!U03BC=",			Round( mu, 4 ),			" \!U03C3=",			Round( sigma, 4 ),			" \!U03BB=",			Round( lambda, 4 )		);		Text( {-9, 0.8}, "p=", Round( p, 3 ) );		Text(			{-9, 0.7},			"quantile= ",			Round( GenGamma Quantile( p, mu, sigma, lambda ), 2 )		);	),	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) ));

```

### IGamma

**Sintassi:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione gamma sia inferiore a q, dove l&apos;argomento del parametro della forma alpha deve essere positivo. IGamma() è un nome di alias della Gamma Distribution(). La funzione Gamma Distribution() è equivalente a Gamma(alpha,q)/Gamma(alpha).

**JMP Versione aggiunta:** prima della versione 14

```jsl

gdialpha = Log( 1.5 );New Window( "Example: Gamma Distribution",	gdiy = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 12 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );	),	H List Box(		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),		Text Box( " \!U03B1" )	));

```

### Johnson Sb Density

**Sintassi:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la densità a q di una distribuzione Johnson Sb, dove q è compreso nell&apos;intervallo theta a theta + sigma, delta>0 e gamma tra -∞ e +∞ sono parametri di forma, sigma>0 è un parametro di scala, e theta tra -∞ e +∞ è un parametro di soglia. Nota: thetaè il punto finale inferiore della distribuzione e sigma è l&apos;intervallo del supporto della distribuzione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

gamma = 0.5;delta = 0.5;theta = 0.5;sigma = 1;New Window( "Example: Johnson Sb Density",	jsbp = Graph Box(		Y Scale( 0, 5.5 ),		X Scale( 0.2, 1.8 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Sb Density( q, gamma, delta, theta, sigma ), q );		Text(			{0.5, 4.5},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, jsbp << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 2, delta, jsbp << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( -2, 2, theta, jsbp << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 10, sigma, jsbp << reshow ), Text Box( " \!U03C3" ) ));

```

### Johnson Sb Distribution

**Sintassi:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita Sb di Johnson sia inferiore a q. (Nota: vedere la funzione Johnson Sb Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

gamma = 0.5;delta = 0.5;theta = 0.5;sigma = 3;New Window( "Example: Johnson Sb Distribution",	jsbc = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0.2, 3.8 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Sb Distribution( q, gamma, delta, theta, sigma ), q );		Text(			{0.3, 0.8},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, jsbc << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 1, delta, jsbc << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( 0, 1, theta, jsbc << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 4, sigma, jsbc << reshow ), Text Box( " \!U03C3" ) ));

```

### Johnson Sb Quantile

**Sintassi:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**Descrizione:** Restituisce il quantile da una distribuzione Sb di Johnson, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p. (Nota: p è il primo parametro. Vedere la funzione Johnson Sb Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**Sintassi:** y = Johnson Sl Density( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la densità a q di una distribuzione Johnson Sl, dove q è nell&apos;intervallo a theta +∞, delta>0 e gamma tra -∞ e +∞ sono parametri di forma, sigmauguale a +1 o -1 è un parametro di scala, e theta tra -∞ e +∞ è un parametro di soglia. Nota: quando sigma = 1, thetaè il limite inferiore sulla distribuzione, e quando sigma=-1, thetaè il limite superiore. Inoltre, positivo implica sigma spostamento positivo, e negativo implica spostamento negativo sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

gamma = 0.5;delta = 1;theta = 0;sigma = 1;New Window( "Example: Johnson Sl Density",	jslp = Graph Box(		Y Scale( 0, 1.5 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Sl Density( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 1.1},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 )		);	),	jslpcb = Check Box(		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},		<<set( 1 ),		sigma = [-1, 1][((jslpcb << get()) + 1)];		jslp << reshow;	),	H List Box( Slider Box( -15, 15, gamma, jslp << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 10, delta, jslp << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( -5, 5, theta, jslp << reshow ), Text Box( " \!U03B8" ) ));

```

### Johnson Sl Distribution

**Sintassi:** p = Johnson Sl Distribution( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita Sl di Johnson sia inferiore a q. (Nota: vedere la funzione Johnson Sl Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

gamma = 0.5;delta = 1;theta = 0;sigma = 1;New Window( "Example: Johnson Sl Distribution",	jslc = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Sl Distribution( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 0.9},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 )		);	),	jslccb = Check Box(		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},		<<set( 1 ),		sigma = [-1, 1][((jslccb << get()) + 1)];		jslc << reshow;	),	H List Box( Slider Box( -15, 15, gamma, jslc << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 10, delta, jslc << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( -5, 5, theta, jslc << reshow ), Text Box( " \!U03B8" ) ));

```

### Johnson Sl Quantile

**Sintassi:** q = Johnson Sl Quantile( p, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione Sl di Johnson, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p. (Nota: p è il primo parametro. Vedere la funzione Johnson Sl Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**Sintassi:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la densità di una distribuzione qJohnson Su, dove q è compreso tra -∞ e +∞, delta>0 e gamma compresso -∞ e +∞ sono parametri di forma, sigma>0 è un parametro di scala, e theta tra -∞ e +∞ è un parametro di soglia.

**JMP Versione aggiunta:** prima della versione 14

```jsl

gamma = 0.5;delta = 1;theta = 1;sigma = 1;New Window( "Example: Johnson Su Density",	y = Graph Box(		Y Scale( 0, 1.5 ),		X Scale( -2, 2 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Su Density( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 1.3},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, y << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 2, delta, y << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( 0, 2, theta, y << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 2, sigma, y << reshow ), Text Box( " \!U03C3" ) ));

```

### Johnson Su Distribution

**Sintassi:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita Su di Johnson sia inferiore a q. (Nota: vedere la funzione Johnson Su Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

gamma = 0.5;delta = 1;theta = 1;sigma = 1;New Window( "Example: Johnson Su Distribution",	jsuc = Graph Box(		Y Scale( 0, 1 ),		X Scale( -2, 2 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Johnson Su Distribution( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 0.9},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) ));

```

### Johnson Su Quantile

**Sintassi:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**Descrizione:** Restituisce il quantile da una distribuzione Su di Johnson, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p. (Nota: p è il primo parametro. Vedere la funzione Johnson Su Density() per le descrizioni dei parametri.)

**JMP Versione aggiunta:** prima della versione 14

```jsl

Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### LEV Density

**Sintassi:** y = LEV Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione del valore estremo più grande con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 10;sig = 5;New Window( "Example: LEV Density",	y = Graph Box(		Y Scale( 0, .08 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( LEV Density( x, mu, sig ), x );		Text( {0, .055}, "mu=", Round( mu, 2 ) );		Text( {0, .045}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), );

```

### LEV Distribution

**Sintassi:** p = LEV Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione del valore estremo più grande con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 10;sig = 5;New Window( "Example: LEV Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( LEV Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ));

```

### LEV Quantile

**Sintassi:** q = LEV Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione del valore estremo più grande con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 10;sig = 5;qq = .5;New Window( "Example: LEV Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( LEV Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( LEV Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### LogGenGamma Density

**Sintassi:** y = LogGenGamma Density( x, mu, sigma, lambda )

**Descrizione:** Restituisce la densità a x di una distribuzione di probabilità log gamma generalizzata estesa con parametri mu, sigma e lambda.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: LogGenGamma Density",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 10 ),		XName( "y" ),		Pen Color( "red" );		Y Function( LogGenGamma Density( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ));

```

### LogGenGamma Distribution

**Sintassi:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita log gamma generalizzata (con parametri mu, sigma e lambda) sia inferiore a x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sigma = 1;lambda = 1;New Window( "Example: LogGenGamma Distribution",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -20, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( LogGenGamma Distribution( y, mu, sigma, lambda ), y );		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );	),	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ));

```

### LogGenGamma Quantile

**Sintassi:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**Descrizione:** Restituisce il quantile da una distribuzione log gamma generalizzata estesa (con parametri mu, sigma e lambda), il valore per cui la probabilità che un valore casuale sia inferiore è p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sigma = 1;lambda = 1;p = 0.4;New Window( "Example: LogGenGamma Quantile",	gdey = Graph Box(		Y Scale( 0, 1 ),		X Scale( -20, 20 ),		XName( "y" ),		Pen Color( "red" );		Y Function( LogGenGamma Distribution( x, mu, sigma, lambda ), x );		Pen Color( "Blue" );		V Line( LogGenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );		Text(			{-19, 0.9},			"\!U03BC=",			Round( mu, 4 ),			" \!U03C3=",			Round( sigma, 4 ),			" \!U03BB=",			Round( lambda, 4 )		);		Text( {-19, 0.8}, "p=", Round( p, 3 ) );		Text(			{-19, 0.7},			"quantile= ",			Round( LogGenGamma Quantile( p, mu, sigma, lambda ), 2 )		);	),	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) ));

```

### Logistic Density

**Sintassi:** y = Logistic Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = .2;New Window( "Example: Logistic Density",	y = Graph Box(		Y Scale( 0, 2 ),		X Scale( -10, 10 ),		Pen Color( "red" );		Y Function( Logistic Density( x, mu, sig ), x );		Text( {0, 1.8}, "mu=", Round( mu, 2 ) );		Text( {0, 1.6}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( "sig" ) ), );

```

### Logistic Distribution

**Sintassi:** p = Logistic Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = .2;New Window( "Example: Logistic Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 10 ),		Pen Color( "red" );		Y Function( Logistic Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) ));

```

### Logistic Quantile

**Sintassi:** q = Logistic Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = .2;qq = .5;New Window( "Example: Logistic Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -10, 10 ),		Pen Color( "red" );		Y Function( Logistic Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( Logistic Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### Loglogistic Density

**Sintassi:** y = Loglogistic Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione log-logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = .2;New Window( "Example: Loglogistic Density",	y = Graph Box(		Y Scale( 0, .06 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Loglogistic Density( x, mu, sig ), x );		Text( {0, .055}, "mu=", Round( mu, 2 ) );		Text( {0, .045}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), );

```

### Loglogistic Distribution

**Sintassi:** p = Loglogistic Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione log-logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = .2;New Window( "Example: Loglogistic Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Loglogistic Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ));

```

### Loglogistic Quantile

**Sintassi:** q = Loglogistic Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione log-logistica con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = .2;qq = .5;New Window( "Example: Loglogistic Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Loglogistic Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( Loglogistic Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### Lognormal Density

**Sintassi:** y = Lognormal Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione lognormale con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = 1;New Window( "Example: Lognormal Density",	y = Graph Box(		Y Scale( 0, .15 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Lognormal Density( x, mu, sig ), x );		Text( {0, .14}, "mu=", Round( mu, 2 ) );		Text( {0, .12}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( "sig" ) ), );

```

### Lognormal Distribution

**Sintassi:** p = Lognormal Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione lognormale con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = 1;New Window( "Example: Lognormal Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Lognormal Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( " sig" ) ));

```

### Lognormal Quantile

**Sintassi:** q = Lognormal Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione lognormale con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 0;sig = 1;qq = .5;New Window( "Example: Lognormal Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( Lognormal Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( Lognormal Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 3, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### Normal Biv Distribution

**Sintassi:** y = Normal Biv Distribution( x, y, r, &lt;mu1=0&gt;, &lt;s1=1&gt;, &lt;mu2=0&gt;, &lt;s2=1&gt; )

**Descrizione:** Calcola la probabilità che un&apos;osservazione (X, Y) sia inferiore o uguale a (x, y) con coefficiente di correlazione r dove X è distribuita normalmente ai margini con media mu1 e deviazione standard s1 e Y è distribuita normalmente ai margini con media mu2 e deviazione standard s2. Se mu1, s1, mu2 e s2 non sono dati, la funzione ipotizza la distribuzione bivariata normale standard con mu1=0, s1=1, mu2=0 e s2=1.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Density

**Sintassi:** y = Normal Density( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la densità in q di una distribuzione normale con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: Normal Density",	y = Graph Box(		Y Scale( 0, 0.45 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Density( q ), q );	));

```

### Normal Distribution

**Sintassi:** p = Normal Distribution( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale distribuita normalmente sia inferiore a q.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: Normal Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Distribution( q ), q );	));

```

### Normal Log CDistribution

**Sintassi:** y = Normal Log CDistribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione 1 - normale a x con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: Normal Log CDistribution",	nlcdiy = Graph Box(		Y Scale( -10, 0.05 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Log CDistribution( q ), q );	));

```

### Normal Log Density

**Sintassi:** y = Normal Log Density( x, &lt;mu=0&gt;, &lt;sigma=1&gt;)

**Descrizione:** Restituisce il logaritmo della densità di probabilità normale a x con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: Normal Log Density",	nldey = Graph Box(		Y Scale( -9, 0.05 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Log Density( q ), q );	));

```

### Normal Log Distribution

**Sintassi:** y = Normal Log Distribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione normale a x con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: Normal Log Distribution",	nldiy = Graph Box(		Y Scale( -10, 0.05 ),		X Scale( -4, 4 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Normal Log Distribution( q ), q );	));

```

### Normal Mixture Density

**Sintassi:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**Descrizione:** Restituisce la densità in q di una distribuzione normale della miscela con medie di gruppo meanvec, deviazioni standard di gruppo sdvec e probabilità di gruppo probvec. Qui meanvec, sdvec e probvec sono tutti vettori della stessa dimensione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu1 = -2;mu2 = 2;sigma1 = 1;sigma2 = 4;p1 = .5;t1 = mu1 |/ mu2;t2 = sigma1 |/ sigma2;t3 = p1 |/ (1 - p1);New Window( "Univariate Normal Mixture Density",	clty = Graph Box(		Y Scale( 0, 0.4 ),		X Scale( -8, 8 ),		Pen Color( "red" ),		Pen Size( 2 );		t1 = mu1 |/ mu2;		t2 = sigma1 |/ sigma2;		t3 = p1 |/ (1 - p1);		Y Function(			Normal Mixture Density( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),			y		);		Text( {-7, .37}, "Mean1=", Round( mu1, 2 ) );		Text( {-2, .37}, "Mean2=", Round( mu2, 2 ) );		Text( {-7, .34}, "SD1=", Round( sigma1, 2 ) );		Text( {-2, .34}, "SD2=", Round( sigma2, 2 ) );		Text( {-7, .31}, "P1=", Round( p1, 2 ) );		Text( {-2, .31}, "P2=", Round( 1 - p1, 2 ) );	),	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), );

```

### Normal Mixture Distribution

**Sintassi:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**Descrizione:** Restituisce la probabilità che una variabile distribuita della miscela normale con medie di gruppo meanvec, deviazioni standard di gruppo sdvec, probabilità di gruppo probvec sia inferiore a q. Qui meanvec, sdvec e probvec sono tutti vettori della stessa dimensione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu1 = -2;mu2 = 2;sigma1 = 1;sigma2 = 4;p1 = .5;New Window( "Univariate Normal Mixture Distribution",	clty = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -8, 8 ),		Pen Color( "red" ),		Pen Size( 2 );		Y Function(			Normal Mixture Distribution( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),			y		);		Text( {-7, .95}, "Mean1=", Round( mu1, 2 ) );		Text( {-2, .95}, "Mean2=", Round( mu2, 2 ) );		Text( {-7, .85}, "SD1=", Round( sigma1, 2 ) );		Text( {-2, .85}, "SD2=", Round( sigma2, 2 ) );		Text( {-7, .75}, "P1=", Round( p1, 2 ) );		Text( {-2, .75}, "P2=", Round( 1 - p1, 2 ) );	),	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), );

```

### Normal Mixture Quantile

**Sintassi:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**Descrizione:** Restituisce il quantile da una distribuzione normale della miscela, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

extqdf = 1;extqqq = 0.5;mu1 = -1;mu2 = 1;sigma1 = 1;sigma2 = 4;p1 = .3;New Window( "Example: Normal Mixture Quantile",	extqgr = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Pen Size( 2 );		Y Function(			Normal Mixture Distribution( q, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),			q		);		Pen Color( "blue" );		V Line(			Normal Mixture Quantile( extqqq, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),			0,			1		);		Text( {-4.5, 0.9}, " quantile=", Round( extqqq, 2 ) );	),	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ),	H List Box( Slider Box( -3, 3, mu1, extqgr << reshow ), Text Box( " Mean 1" ) ),	H List Box( Slider Box( -3, 3, mu2, extqgr << reshow ), Text Box( " Mean 2" ) ),	H List Box( Slider Box( .1, 9, sigma1, extqgr << reshow ), Text Box( " Std Dev 1" ) ),	H List Box( Slider Box( .1, 9, sigma2, extqgr << reshow ), Text Box( " Std Dev 2" ) ),	H List Box( Slider Box( 0, 1, p1, extqgr << reshow ), Text Box( " P 1" ) ), );

```

### Normal Quantile

**Sintassi:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Descrizione:** Restituisce il quantile da una distribuzione normale, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Normal Quantile( 0.9 );

```

### Probit

**Sintassi:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Descrizione:** Restituisce il quantile da una distribuzione normale, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Normal Quantile( 0.9 );

```

### SEV Density

**Sintassi:** y = SEV Density( x, mu, sigma )

**Descrizione:** Restituisce la densità a x di una distribuzione del valore estremo più piccolo con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 50;sig = 5;New Window( "Example: SEV Density",	y = Graph Box(		Y Scale( 0, .06 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( SEV Density( x, mu, sig ), x );		Text( {0, .055}, "mu=", Round( mu, 2 ) );		Text( {0, .045}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), );

```

### SEV Distribution

**Sintassi:** p = SEV Distribution( x, mu, sigma )

**Descrizione:** Restituisce la probabilità a x di una distribuzione del valore estremo più piccolo con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 50;sig = 5;New Window( "Example: SEV Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( SEV Distribution( x, mu, sig ), x );		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );	),	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ));

```

### SEV Quantile

**Sintassi:** q = SEV Quantile( p, mu, sigma )

**Descrizione:** Restituisce il quantile a p di una distribuzione del valore estremo più piccolo con posizione mu e scala sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

mu = 50;sig = 5;qq = .5;New Window( "Example: SEV Quantile",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 60 ),		Pen Color( "red" );		Y Function( SEV Distribution( qq, mu, sig ), qq );		Pen Color( "blue" );		V Line( SEV Quantile( qq, mu, sig ), 0, 1 );		Text(			{0.1, 0.9},			" mu=",			Round( mu, 2 ),			" sig=",			Round( sig, 2 ),			" quantile=",			Round( qq, 2 )		);	),	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) ));

```

### SHASH Density

**Sintassi:** d = SHASH Density( x, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la densità in x di una distribuzione sinh-arcsinh (SHASH). La trasformazione SHASH può essere utilizzata per creare dati con distribuzione più simile alla normale.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

SHASH Density( 0, -1, 2, -2, 3 );

```

#### Trasformazione SHASH

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );Show( result1, result2 );

```

### SHASH Distribution

**Sintassi:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione sinh-arcsinh (SHASH) sia inferiore a q. La trasformazione SHASH può essere utilizzata per creare dati con distribuzione più simile alla normale.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

gamma = 0.5;delta = 1;theta = 1;sigma = 1;New Window( "Example: SHASH Distribution",	jsuc = Graph Box(		Y Scale( 0, 1 ),		X Scale( -2, 2 ),		XName( "q" ),		Pen Color( "red" );		Y Function( SHASH Distribution( q, gamma, delta, theta, sigma ), q );		Text(			{-1, 0.9},			"\!U03B3=",			Round( gamma, 2 ),			" \!U03B4=",			Round( delta, 2 ),			" \!U03B8=",			Round( theta, 2 ),			" \!U03C3=",			Round( sigma, 2 )		);	),	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) ));

```

#### Trasformazione SHASH

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );Show( result1, result2 );

```

### SHASH Quantile

**Sintassi:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**Descrizione:** Restituisce il quantile da una distribuzione sinh-arcsinh (SHASH), cioè il valore per cui si ha una probabilità pari a p di avere un valore casuale inferiore a esso. La trasformazione SHASH può essere utilizzata per creare dati con distribuzione più simile alla normale.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

SHASH Quantile( .5, 1, 2, 3, 1 );

```

#### Trasformazione SHASH

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );Show( result1, result2 );

```

### Students t Density

**Sintassi:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la funzione di densità t di Student.

**JMP Versione aggiunta:** prima della versione 14

```jsl

tdedf = 1;New Window( "Example: Students t Density",	tdegr = Graph Box(		Y Scale( -.05, 0.45 ),		X Scale( -8, 8 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );		H Line( 2, 3, 0.3 );		Pen Color( "blue" );		Y Function( Normal Density( tdeq ), tdeq );		H Line( 2, 3, 0.25 );		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );		Text( {3.5, 0.3}, "Student t" );		Text( {3.5, 0.25}, "Normal" );	),	H List Box(		Text Box( "df " ),		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )	));

```

### Students t Distribution

**Sintassi:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione t di Student sia minore di q.

**JMP Versione aggiunta:** prima della versione 14

```jsl

tdidf = 1;New Window( "Example: Students t Distribution",	tdigr = Graph Box(		Y Scale( 0, 1 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( tdiq, tdidf ), tdiq );		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) ));

```

### Students t Quantile

**Sintassi:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione t di Student, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

extqdf = 1;extqqq = 0.5;New Window( "Example: Students t Quantile",	extqgr = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( q, Round( extqdf ) ), q );		Pen Color( "blue" );		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );	),	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), );

```

### Tukey HSD P value

**Sintassi:** p = Tukey HSD P value( q, nGroups, dfe )

**Descrizione:** Restituisce il p-value ricavato dal test dei confronti multipli HSD di Tukey, dove q è la statistica di test, nGroups è il numero di gruppi nello studio e dfe sono i gradi di libertà dell&apos;errore (basati sul campione totale dello studio.



Si osservi che q è il valore critico corretto di Tukey, che è il quantile della distribuzione dei range studentizzata di Tukey divisa per la radice quadrata(2).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**Sintassi:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**Descrizione:** Restituisce il quantile richiesto per il test dei confronti multipli HSD di Tukey. L&apos;argomento 1-alpha è il livello di confidenza, nGroups è il numero di gruppi nello studio e dfe sono i gradi di libertà dell&apos;errore (basati sul campione totale dello studio).



Si osservi che q è il valore critico corretto di Tukey, che è il quantile della distribuzione dei range studentizzata di Tukey divisa per la radice quadrata(2).

**JMP Versione aggiunta:** prima della versione 14

```jsl

alpha = 0.05;dfe = 5;Tukey HSD Quantile( 1 - alpha, 20, dfe );New Window( "Example: Tukey HSD Quantile",	tdigr = Graph Box(		Y Scale( 2, 8 ),		X Scale( 2.5, 15.5 ),		YName( "Tukey HSD Quantile" ),		XName( "Groups" ),		Pen Color( "red" );		For( i = 3, i <= 15, i++,			V Line( i, 0, Tukey HSD Quantile( 1 - alpha, i, dfe ) )		);		Text( {3, 7}, "dfe=", Round( dfe, 2 ) );	),	H List Box( Text Box( "dfe" ), Slider Box( 3, 10, dfe, tdigr << reshow ) ));

```

### Weibull Density

**Sintassi:** y = Weibull Density( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la densità a x di una distribuzione della probabilità di Weibull con parametro shape e parametro facoltativo scale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

shape = 0.5;New Window( "Example: Weibull Density",	y = Graph Box(		Y Scale( 0, 2 ),		X Scale( 0, 1.5 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Weibull Density( x, shape ), x );		Text( {1.1, 1.8}, " shape=", Round( shape, 2 ) );	),	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) ));

```

### Weibull Distribution

**Sintassi:** p = Weibull Distribution( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Weibull (con parametro shape e parametro facoltativo scale) sia minore di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

shape = 2;New Window( "Example: Weibull Distribution",	y = Graph Box(		Y Scale( 0, 1 ),		X Scale( 0, 2 ),		XName( "x" ),		Pen Color( "red" );		Y Function( Weibull Distribution( x, shape ), x );		Text( {0.1, 0.9}, " shape=", Round( shape, 2 ) );	),	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) ));

```

### Weibull Quantile

**Sintassi:** q = Weibull Quantile( p, beta, &lt;alpha=1&gt;, &lt;threshold=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione di Weibull, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p, dove beta e alpha sono rispettivamente parametri della forma e della scala.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exwqbeta = 2;exwqqq = 0.5;New Window( "Example: Weibull Quantile",	exwqy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( 0, 2 ),		XName( "q" ),		Pen Color( "red" );		Y Function( Weibull Distribution( exwqq, exwqbeta ), exwqq );		Pen Color( "blue" );		V Line( Weibull Quantile( exwqqq, exwqbeta ), 0, 1 );		Text(			{0.1, 0.9},			" \!U03B2=",			Round( exwqbeta, 2 ),			" quantile=",			Round( exwqqq, 2 )		);	),	H List Box( Slider Box( 0, 5, exwqbeta, exwqy << reshow ), Text Box( " \!U03B2" ) ),	H List Box( Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ), Text Box( " quantile" ) ));

```

### t Density

**Sintassi:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la funzione di densità t di Student.

**JMP Versione aggiunta:** prima della versione 14

```jsl

tdedf = 1;New Window( "Example: Students t Density",	tdegr = Graph Box(		Y Scale( -.05, 0.45 ),		X Scale( -8, 8 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );		H Line( 2, 3, 0.3 );		Pen Color( "blue" );		Y Function( Normal Density( tdeq ), tdeq );		H Line( 2, 3, 0.25 );		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );		Text( {3.5, 0.3}, "Student t" );		Text( {3.5, 0.25}, "Normal" );	),	H List Box(		Text Box( "df " ),		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )	));

```

### t Distribution

**Sintassi:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione t di Student sia minore di q.

**JMP Versione aggiunta:** prima della versione 14

```jsl

tdidf = 1;New Window( "Example: Students t Distribution",	tdigr = Graph Box(		Y Scale( 0, 1 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( tdiq, tdidf ), tdiq );		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) ));

```

### t Log CDistribution

**Sintassi:** y = t Log CDistribution( x, df, &lt;nc&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione 1 - t.

**JMP Versione aggiunta:** prima della versione 14

```jsl

tlcdidf = 1;New Window( "Example: Students t Log CDistribution",	tlcdigr = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Log CDistribution( tlcdiq, tlcdidf ), tlcdiq );		Text( {-4.5, -0.9}, "df=", Round( tlcdidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, tlcdidf, tlcdigr << reshow ) ));

```

### t Log Density

**Sintassi:** y = t Log Density( x, df, &lt;nc&gt; )

**Descrizione:** Restituisce il logaritmo della densità di probabilità t.

**JMP Versione aggiunta:** prima della versione 14

```jsl

tldedf = 1;New Window( "Example: Students t Log Density",	tldegr = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Log Density( tldeq, tldedf ), tldeq );		Text( {2.5, -0.35}, "df=", Round( tldedf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, tldedf, tldegr << reshow ) ));

```

### t Log Distribution

**Sintassi:** y = t Log Distribution( x, df, &lt;nc&gt; )

**Descrizione:** Restituisce il logaritmo della distribuzione t.

**JMP Versione aggiunta:** prima della versione 14

```jsl

tldidf = 1;New Window( "Example: Students t Log Distribution",	tldigr = Graph Box(		Y Scale( -4, 0.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Log Distribution( tldiq, tldidf ), tldiq );		Text( {-4.5, -0.9}, "df=", Round( tldidf, 2 ) );	),	H List Box( Text Box( "df " ), Slider Box( 1, 10, tldidf, tldigr << reshow ) ));

```

### t Noncentrality

**Sintassi:** nc = t Noncentrality( x, df, prob )

**Descrizione:** Risolve il parametro di non centralità di una distribuzione t di Student quale prob = t Distribution( x, df, nc ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Window( "Example: t Noncentrality",	tncgr = Graph Box(		Y Scale( 0.01, 0.99 ),		X Scale( 0.01, 0.99 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( 3, 2, t Noncentrality( 3, 2, q ) ), q );	));t Distribution( 3, 2, t Noncentrality( 3, 2, 0.5 ) );

```

### t Quantile

**Sintassi:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Descrizione:** Restituisce il quantile da una distribuzione t di Student, il valore per cui la probabilità che un valore casuale sia inferiore è pari a p.

**JMP Versione aggiunta:** prima della versione 14

```jsl

extqdf = 1;extqqq = 0.5;New Window( "Example: Students t Quantile",	extqgr = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -5, 5 ),		XName( "q" ),		Pen Color( "red" );		Y Function( t Distribution( q, Round( extqdf ) ), q );		Pen Color( "blue" );		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );	),	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), );

```

