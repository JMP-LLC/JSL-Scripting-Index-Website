# Discrete Probability



### Beta Binomial Distribution

**Sintassi:** cumprob = Beta Binomial Distribution( k, p, n, delta )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione beta-binomiale sia minore o uguale a k.

**JMP Versione aggiunta:** prima della versione 14

```jsl

p = 0.5;n = 25;delta = 0;New Window( "Example: BetaBinomial Distribution",	y = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, n + 1 ),		Pen Color( "red" ),		Pen Size( 1 );		For( k = 0, k <= n, k++,			H Line( k, k + 1, Beta Binomial Distribution( k, p, n, delta ) );			V Line(				k + 1,				Beta Binomial Distribution( k, p, n, delta ),				Beta Binomial Distribution( k + 1, p, n, delta )			);		);		Text( {15, 0.1}, "n=", Round( n ), " p=", Round( p, 2 ) );		Text( {15, 0.04}, "Dispersion=", Round( delta, 2 ) );	),	H List Box( Slider Box( 0.01, 0.99, p, y << reshow ), Text Box( " p" ) ),	H List Box( Slider Box( -0.01, 0.99, delta, y << reshow ), Text Box( " Dispersion" ) ));

```

### Beta Binomial Probability

**Sintassi:** prob = Beta Binomial Probability( k, p, n, delta )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione beta-binomiale sia uguale a k.

**JMP Versione aggiunta:** prima della versione 14

```jsl

n = 25;p = 0.5;delta = 0;New Window( "Binomial and BetaBinomial Probabilities",	clty = Graph Box(		Y Scale( 0, 0.3 ),		X Scale( -1, n + 1 ),		Pen Color( "red" ),		Pen Size( 2 );		For( x = 0, x <= n, x++,			Pen Color( "red" );			V Line( x, 0, Binomial Probability( p, n, x ) );			Pen Color( "blue" );			V Line( x + 0.35, 0, Beta Binomial Probability( x, p, n, delta ) );		);		Text( {1, 0.25}, "p=", Round( p, 8 ), " Dispersion=", Round( delta, 8 ) );		Text( {0, 0.28}, "Red = Binomial, Blue = BetaBinomial" );	),	H List Box( Slider Box( 0.2, 0.8, p, clty << reshow ), Text Box( " p" ) ),	H List Box(		Slider Box( -0.05, 0.999, delta, clty << reshow ),		Text Box( " Dispersion" )	));

```

### Beta Binomial Quantile

**Sintassi:** q = Beta Binomial Quantile( p, n, delta, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione beta-binomiale ( p, n, delta ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** prima della versione 14

```jsl

qbinexp = 0.3;qbinexn = 20;qbinexq = 0.5;delta = 0;New Window( "Example: BetaBinomial Quantile",	qbinexy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 41 ),		Pen Color( "red" ),		Pen Size( 2 );		For( qbinexk = 0, qbinexk < Round( qbinexn ), qbinexk++,			H Line(				qbinexk,				qbinexk + 1,				Beta Binomial Distribution( qbinexk, qbinexp, Round( qbinexn ), delta )			);			V Line(				qbinexk + 1,				Beta Binomial Distribution( qbinexk, qbinexp, Round( qbinexn ), delta ),				Beta Binomial Distribution( qbinexk + 1, qbinexp, Round( qbinexn ), delta )			);		);		Pen Color( "blue" );		V Line( Beta Binomial Quantile( qbinexp, Round( qbinexn ), delta, qbinexq ), 0, 1 );		Text(			{6, 0.17},			"n=",			Round( qbinexn ),			" p=",			Round( qbinexp, 2 ),			" Disp.=",			Round( Delta, 2 ),			" q=",			Round( qbinexq, 2 )		);		Text(			{6, 0.1},			"quantile=",			Round( Beta Binomial Quantile( qbinexp, Round( qbinexn ), delta, qbinexq ) )		);	),	H List Box( Slider Box( 0, 0.99, qbinexp, qbinexy << reshow ), Text Box( " p" ) ),	H List Box( Slider Box( 0, 40, qbinexn, qbinexy << reshow ), Text Box( " n" ) ),	H List Box(		Slider Box( -0.01, 0.99, delta, qbinexy << reshow ),		Text Box( " Dispersion" )	),	H List Box( Slider Box( 0, 1, qbinexq, qbinexy << reshow ), Text Box( " q" ) ));

```

### Binomial Distribution

**Sintassi:** cumprob = Binomial Distribution( p, n, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale sia minore o uguale a k.

**JMP Versione aggiunta:** prima della versione 14

```jsl

p = 0.5;n = 30;New Window( "Example: Binomial Distribution",	y = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 31 ),		Pen Color( "red" ),		Pen Size( 1 );		For( k = 0, k <= n, k++,			H Line( k, k + 1, Binomial Distribution( p, n, k ) );			V Line(				k + 1,				Binomial Distribution( p, n, k ),				Binomial Distribution( p, n, k + 1 )			);		);		Text( {20, 0.1}, "n=", Round( n ), " p=", Round( p, 2 ) );	),	H List Box( Slider Box( 0, 1, p, y << reshow ), Text Box( " p" ) ),	H List Box( Slider Box( 0, 30, n, y << reshow ), Text Box( " n" ) ));

```

### Binomial Probability

**Sintassi:** prob = Binomial Probability( p, n, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale sia uguale a k.

**JMP Versione aggiunta:** prima della versione 14

```jsl

cltp = 0.03;cltn = 30;New Window( "Example: Binomial Probability and Central Limit Theorem",	clty = Graph Box(		Y Scale( 0, 0.3 ),		X Scale( -1, 60 ),		Pen Color( "red" ),		Pen Size( 2 );		For( cltk = 0, cltk <= cltn, cltk++,			V Line( cltk, 0, Binomial Probability( cltp, cltn, cltk ) )		);		Text( {15, 0.09}, "n=", Round( cltn ), " p=", Round( cltp, 2 ) );	),	H List Box( Slider Box( 0.01, 0.99, cltp, clty << reshow ), Text Box( " p" ) ),	H List Box(		Slider Box( 0, 2000, cltn, clty << reshow ),		Text Box( " n ( Drag me and see Central Limit Theorem )" )	));

```

### Binomial Quantile

**Sintassi:** q = Binomial Quantile( p, n, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione binomiale( p, n ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** prima della versione 14

```jsl

qbinexp = 0.3;qbinexn = 20;qbinexq = 0.5;New Window( "Example: Binomial Quantile",	qbinexy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 41 ),		Pen Color( "red" ),		Pen Size( 2 );		For( qbinexk = 0, qbinexk < Round( qbinexn ), qbinexk++,			H Line(				qbinexk,				qbinexk + 1,				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk )			);			V Line(				qbinexk + 1,				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk ),				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk + 1 )			);		);		Pen Color( "blue" );		V Line( Binomial Quantile( qbinexp, Round( qbinexn ), qbinexq ), 0, 1.0 );		Text(			{6, 0.17},			"n=",			Round( qbinexn ),			" p=",			Round( qbinexp, 2 ),			" q=",			Round( qbinexq, 2 ),			" quantile=",			Round( Binomial Quantile( qbinexp, Round( qbinexn ), qbinexq ) )		);	),	H List Box( Slider Box( 0, 1, qbinexp, qbinexy << reshow ), Text Box( " p" ) ),	H List Box( Slider Box( 0, 40, qbinexn, qbinexy << reshow ), Text Box( " n" ) ),	H List Box( Slider Box( 0, 1, qbinexq, qbinexy << reshow ), Text Box( " q" ) ));

```

### Gamma Poisson Distribution

**Sintassi:** cumprob = Gamma Poisson Distribution( k, lambda, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson sia minore o uguale a k, dove lambda è il parametro della media, sigma è il parametro di sovradispersione e kè il conteggio della frequenza osservato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

lambda = 20;sigma = 2;New Window( "Example: Gamma Poisson Distribution",	ppy = Graph Box(		Y Scale( 0, 1.01 ),		X Scale( -1, 40 ),		Pen Color( "red" ),		Pen Size( 1 );		For( k = 0, k <= 40, k++,			H Line( k, k + 1, Gamma Poisson Distribution( k, lambda, sigma ) );			V Line(				k + 1,				Gamma Poisson Distribution( k, lambda, sigma ),				Gamma Poisson Distribution( k + 1, lambda, sigma )			);		);		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );	),	H List Box( Slider Box( 3, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( 1, 5, sigma, ppy << reshow ), Text Box( " \!U03C3" ) ));

```

### Gamma Poisson Probability

**Sintassi:** prob = Gamma Poisson Probability( k, lambda, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson sia uguale a k, dove lambda è il parametro della media, sigma è il parametro di sovradispersione e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

lambda = 5;sigma = 2;New Window( "Poisson and Gamma Poisson",	clty = Graph Box(		Y Scale( 0, 0.3 ),		X Scale( -1, 20.5 ),		Pen Color( "red" ),		Pen Size( 2 );		For( x = 0, x <= 20, x++,			Pen Color( "red" );			V Line( x, 0, Poisson Probability( lambda, x ) );			Pen Color( "blue" );			V Line( x + 0.35, 0, Gamma Poisson Probability( x, lambda, sigma ) );		);		Text( {1, 0.25}, "\!U03BB=", Round( lambda, 8 ), " \!U03C3=", Round( sigma, 8 ) );		Text( {0, 0.28}, "Red = Poisson, Blue = Gamma Poisson" );	),	H List Box( Slider Box( 3, 10, lambda, clty << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( 1, 5, sigma, clty << reshow ), Text Box( " \!U03C3" ) ));

```

### Gamma Poisson Quantile

**Sintassi:** q = Gamma Poisson Quantile( lambda, sigma, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione gamma di Poisson ( lambda, sigma ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** prima della versione 14

```jsl

qexpl = 20;qexps = 2;qexpn = 40;qexpq = 0.5;New Window( "Example: Gamma Poisson Quantile",	qexpy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 41 ),		Pen Color( "red" ),		Pen Size( 2 );		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,			H Line( qexpk, qexpk + 1, Gamma Poisson Distribution( qexpk, qexpl, qexps ) );			V Line(				qexpk + 1,				Gamma Poisson Distribution( qexpk, qexpl, qexps ),				Gamma Poisson Distribution( qexpk + 1, qexpl, qexps )			);		);		Pen Color( "blue" );		V Line( Gamma Poisson Quantile( qexpl, qexps, qexpq ), 0, 1 );		Text( {1, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C3=", Round( qexps, 2 ) );		Text(			{1, 0.8},			" q=",			Round( qexpq, 2 ),			" quantile=",			Round( Gamma Poisson Quantile( qexpl, qexps, qexpq ) )		);	),	H List Box( Slider Box( 3, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( 1, 5, qexps, qexpy << reshow ), Text Box( " \!U03C3" ) ),	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) ));

```

### Hypergeometric Distribution

**Sintassi:** cumprob = Hypergeometric Distribution( N, K, n, x, &lt;r&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione ipergeometrica sia minore o uguale a x. N è la dimensione della popolazione, K è il numero di elementi nella categoria osservata, n è la dimensione campionaria, x è il conteggio della frequenza nella categoria osservata, r è l&apos;odds ratio facoltativo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exhdK = 10;exhdn = 10;New Window( "Example: Hypergeometric Distribution",	exy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 21 ),		Pen Color( "red" ),		Pen Size( 2 );		For( exhdx = 0, exhdx < Round( exhdn ), exhdx++,			H Line(				exhdx,				exhdx + 1,				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx )			);			V Line(				exhdx + 1,				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx ),				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx + 1 )			);		);		Text( {10, 0.17}, "N=", 20, " K=", Round( exhdK ), " n=", Round( exhdn ) );	),	H List Box( Slider Box( 0, 20, exhdK, exy << reshow ), Text Box( " K" ) ),	H List Box( Slider Box( 0, 20, exhdn, exy << reshow ), Text Box( " n" ) ));

```

### Hypergeometric Probability

**Sintassi:** prob = Hypergeometric Probability( N, K, n, x, &lt;r&gt; )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione ipergeometrica sia uguale a x. N è la dimensione della popolazione, K è il numero di elementi nella categoria osservata, n è la dimensione campionaria, x è il conteggio della frequenza nella categoria osservata, r è l&apos;odds ratio facoltativo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exhdK = 10;exhdn = 10;New Window( "Example: Hypergeometric Probability",	exhdy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 21 ),		Pen Color( "red" ),		Pen Size( 2 );		For( exhdx = 0, exhdx <= Round( exhdn ), exhdx++,			V Line(				exhdx,				0,				Hypergeometric Probability( 20, Round( exhdK ), Round( exhdn ), exhdx )			)		);		Text( {10, 0.17}, "N=", 20, " K=", Round( exhdK ), " n=", Round( exhdn ) );	),	H List Box( Slider Box( 0, 20, exhdK, exhdy << reshow ), Text Box( " K" ) ),	H List Box( Slider Box( 0, 20, exhdn, exhdy << reshow ), Text Box( " n" ) ));

```

### Neg Binomial Distribution

**Sintassi:** cumprob = Neg Binomial Distribution( p, n, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa sia minore o uguale a k, dove la probabilità di successo è p e il numero di successi è n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exnbdp = 0.5;exnbdn = 10;New Window( "Example: Neg Binomial Distribution",	exnbdy = Graph Box(		Y Scale( 0, 1 ),		X Scale( -1, 41 ),		Pen Color( "red" ),		Pen Size( 2 );		For( exnbdk = 0, exnbdk < 100, exnbdk++,			H Line(				exnbdk,				exnbdk + 1,				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk )			);			V Line(				exnbdk + 1,				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk ),				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk + 1 )			);		);		Text( {30, 0.07}, "n=", Round( exnbdn ), " p=", Round( exnbdp, 2 ) );	),	H List Box( Slider Box( 0, 1, exnbdp, exnbdy << reshow ), Text Box( " p" ) ),	H List Box( Slider Box( 1, 20, exnbdn, exnbdy << reshow ), Text Box( " n" ) ));

```

### Neg Binomial Probability

**Sintassi:** prob = Neg Binomial Probability( p, n, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa sia uguale a k, dove la probabilità di successo è p e il numero di successi è n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exnbpp = 0.5;exnbpn = 10;New Window( "Example: Neg Binomial Probability",	exnbpy = Graph Box(		Y Scale( 0, 0.3 ),		X Scale( -1, 41 ),		Pen Color( "red" ),		Pen Size( 2 );		For( exnbpk = 0, exnbpk < 100, exnbpk++,			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )		);		Text( {30, 0.27}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );	),	H List Box( Slider Box( 0, 1, exnbpp, exnbpy << reshow ), Text Box( " p" ) ),	H List Box( Slider Box( 0, 40, exnbpn, exnbpy << reshow ), Text Box( " n" ) ));

```

### Negative Binomial Distribution

**Sintassi:** cumprob = Negative Binomial Distribution( k, lambda, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa sia minore o uguale a k, dove lambda è il parametro di posizione, sigma è il parametro di scala e k è il conteggio di interesse.

**JMP Versione aggiunta:** 19

```jsl

lambda = 20;sigma = 2;New Window( "Example: Negative Binomial Distribution",	ppy = Graph Box(		Y Scale( 0, 1.01 ),		X Scale( -1, 40 ),		Pen Color( "red" ),		Pen Size( 1 );		For( k = 0, k <= 40, k++,			H Line( k, k + 1, Negative Binomial Distribution( k, lambda, sigma ) );			V Line(				k + 1,				Negative Binomial Distribution( k, lambda, sigma ),				Negative Binomial Distribution( k + 1, lambda, sigma )			);		);		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );	),	H List Box( Slider Box( 3, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( .01, 5, sigma, ppy << reshow ), Text Box( " \!U03C3" ) ));

```

### Negative Binomial Probability

**Sintassi:** prob = Negative Binomial Probability( k, lambda, sigma )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa sia uguale a k, dove lambda è il parametro di posizione, sigma è il parametro di scala e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** 19

```jsl

lambda = 5;sigma = 2;New Window( "Poisson and Negative Binomial",	clty = Graph Box(		Y Scale( 0, 0.3 ),		X Scale( -1, 20.5 ),		Pen Color( "red" ),		Pen Size( 2 );		For( x = 0, x <= 20, x++,			Pen Color( "red" );			V Line( x, 0, Poisson Probability( lambda, x ) );			Pen Color( "blue" );			V Line( x + 0.35, 0, Negative Binomial Probability( x, lambda, sigma ) );		);		Text( {1, 0.25}, "\!U03BB=", Round( lambda, 8 ), " \!U03C3=", Round( sigma, 8 ) );		Text( {0, 0.28}, "Red = Poisson, Blue = Negative Binomial" );	),	H List Box( Slider Box( 3, 10, lambda, clty << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( .01, 5, sigma, clty << reshow ), Text Box( " \!U03C3" ) ));

```

### Negative Binomial Quantile

**Sintassi:** q = Gamma Negative Binomial Quantile( lambda, sigma, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione binomiale negativa( lambda, sigma ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** 19

```jsl

qexpl = 20;qexps = 2;qexpn = 40;qexpq = 0.5;New Window( "Example: Negative Binomial Quantile",	qexpy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 41 ),		Pen Color( "red" ),		Pen Size( 2 );		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,			H Line( qexpk, qexpk + 1, Negative Binomial Distribution( qexpk, qexpl, qexps ) );			V Line(				qexpk + 1,				Negative Binomial Distribution( qexpk, qexpl, qexps ),				Negative Binomial Distribution( qexpk + 1, qexpl, qexps )			);		);		Pen Color( "blue" );		V Line( Negative Binomial Quantile( qexpl, qexps, qexpq ), 0, 1 );		Text( {1, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C3=", Round( qexps, 2 ) );		Text(			{1, 0.8},			" q=",			Round( qexpq, 2 ),			" quantile=",			Round( Negative Binomial Quantile( qexpl, qexps, qexpq ) )		);	),	H List Box( Slider Box( 3, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( .01, 5, qexps, qexpy << reshow ), Text Box( " \!U03C3" ) ),	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) ));

```

### Poisson Distribution

**Sintassi:** cumprob = Poisson Distribution( lambda, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson sia minore o uguale a k, dove lambda è il parametro della media e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

lambda = 4;New Window( "Example: Poisson Distribution",	ppy = Graph Box(		Y Scale( 0, 1.01 ),		X Scale( -1, 40 ),		Pen Color( "red" ),		Pen Size( 1 );		For( k = 0, k <= 40, k++,			H Line( k, k + 1, Poisson Distribution( lambda, k ) );			V Line(				k + 1,				Poisson Distribution( lambda, k ),				Poisson Distribution( lambda, k + 1 )			);		);		Text( {2, 0.9}, "\!U03BB=", Round( lambda, 2 ) );	),	H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ));

```

### Poisson Probability

**Sintassi:** prob = Poisson Probability( lambda, k )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson sia uguale a k, dove lambda è il parametro della media e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

lambda = 4;New Window( "Example: Poisson Probability",	pdy = Graph Box(		Y Scale( 0, 0.20 ),		X Scale( -1, 40 ),		Pen Color( "red" ),		Pen Size( 2 );		For( k = 0, k <= 40, k++,			V Line( k, 0, Poisson Probability( lambda, k ) )		);		Text( {30, 0.18}, "\!U03BB=", Round( lambda, 2 ) );	),	H List Box( Slider Box( 0, 40, lambda, pdy << reshow ), Text Box( " \!U03BB" ) ));

```

### Poisson Quantile

**Sintassi:** q = Poisson Quantile( lambda, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione di Poisson( lambda ) è maggiore o uguale a cumprob.

**JMP Versione aggiunta:** prima della versione 14

```jsl

qexpl = 20;qexpn = 40;qexpq = 0.5;New Window( "Example: Poisson Quantile",	qexpy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 41 ),		Pen Color( "red" ),		Pen Size( 2 );		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,			H Line( qexpk, qexpk + 1, Poisson Distribution( qexpl, qexpk ) );			V Line(				qexpk + 1,				Poisson Distribution( qexpl, qexpk ),				Poisson Distribution( qexpl, qexpk + 1 )			);		);		Pen Color( "blue" );		V Line( Poisson Quantile( qexpl, qexpq ), 0, 1.0 );		Text(			{6, 0.17},			" \!U03BB=",			Round( qexpl, 2 ),			" q=",			Round( qexpq, 2 ),			" quantile=",			Round( Poisson Quantile( qexpl, qexpq ) )		);	),	H List Box( Slider Box( 0, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) ));

```

### ZI Negative Binomial Distribution

**Sintassi:** cumprob = ZI Negative Binomial Distribution( k, lambda, sigma, pi )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa con inflazione di zeri sia inferiore o pari a k, dove lambda è il parametro di posizione, sigma è il parametro di scale, pi è il parametro di inflazione di zeri e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** 19

```jsl

lambda = 4;sigma = .5;p = .2;New Window( "Example: Zero Inflated Negative Binomial Distribution",	ppy = Graph Box(		Y Scale( 0, 1.01 ),		X Scale( -1, 40 ),		Pen Color( "red" ),		Pen Size( 1 );		For( k = 0, k <= 40, k++,			H Line( k, k + 1, ZI Negative Binomial Distribution( k, lambda, sigma, p ) );			V Line(				k + 1,				ZI Negative Binomial Distribution( k, lambda, sigma, p ),				ZI Negative Binomial Distribution( k + 1, lambda, sigma, p )			);		);		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );		Text( {30, .2}, "\!U03C3=", Round( sigma, 2 ) );		Text( {30, .1}, "\!U03C0=", Round( p, 2 ) );	),	V List Box(		H List Box( Slider Box( 0.01, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),		H List Box( Slider Box( 0.001, 2, sigma, ppy << reshow ), Text Box( "\!U03C3" ) ),		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),	));

```

### ZI Negative Binomial Probability

**Sintassi:** prob = ZI Negative Binomial Probability( k, lambda, sigma, pi)

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione binomiale negativa con inflazione di zeri sia uguale a k, dove lambda è il parametro di posizione, sigma è il parametro di scale, pi è il parametro di inflazione di zeri e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** 19

```jsl

lambda = 4;sigma = .5;p = .1;New Window( "Example: Zero Inflated Negative Binomial Probability",	ppy = Graph Box(		Y Scale( 0, .4 ),		X Scale( -1, 40 ),		Pen Color( "red" ),		Pen Size( 2 );		For( k = 0, k <= 40, k++,			V Line( k, 0, ZI Negative Binomial Probability( k, lambda, sigma, p ) )		);		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );		Text( {30, .25}, "\!U03C3=", Round( sigma, 2 ) );		Text( {30, .2}, "\!U03C0=", Round( p, 2 ) );	),	V List Box(		H List Box( Slider Box( .01, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),		H List Box( Slider Box( 0.001, 2, sigma, ppy << reshow ), Text Box( "\!U03C3" ) ),		H List Box( Slider Box( 0, .25, p, ppy << reshow ), Text Box( " \!U03C0" ) )	));

```

### ZI Negative Binomial Quantile

**Sintassi:** q = ZI Negative Binomial Quantile( lambda, sigma, pi, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione binomiale negativa con inflazione di zeri (lambda, sigma, pi) è maggiore o pari a cumprob.

**JMP Versione aggiunta:** 19

```jsl

qexpl = 20;qexpsig = .5;qexpp = .2;qexpn = 40;qexpq = 0.5;New Window( "Example: ZI Negative Binomial Quantile",	qexpy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 41 ),		Pen Color( "red" ),		Pen Size( 2 );		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,			H Line(				qexpk,				qexpk + 1,				ZI Negative Binomial Distribution( qexpk, qexpl, qexpsig, qexpp )			);			V Line(				qexpk + 1,				ZI Negative Binomial Distribution( qexpk, qexpl, qexpsig, qexpp ),				ZI Negative Binomial Distribution( qexpk + 1, qexpl, qexpsig, qexpp )			);		);		Pen Color( "blue" );		V Line( ZI Negative Binomial Quantile( qexpl, qexpsig, qexpp, qexpq ), 0, 1.0 );		Text(			{2, 0.9},			" \!U03BB=",			Round( qexpl, 2 ),			" \!U03C3=",			Round( qexpsig, 2 ),			" \!U03C0=",			Round( qexpp, 2 )		);		Text(			{2, 0.8},			" q=",			Round( qexpq, 2 ),			" quantile=",			Round( ZI Negative Binomial Quantile( qexpl, qexpsig, qexpp, qexpq ) )		);	),	H List Box( Slider Box( 0.001, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( 0.001, 2, qexpsig, qexpy << reshow ), Text Box( "\!U03C3" ) ),	H List Box( Slider Box( 0, .99, qexpp, qexpy << reshow ), Text Box( " \!U03C0" ) ),	H List Box( Slider Box( 0.001, .999, qexpq, qexpy << reshow ), Text Box( " q" ) ));

```

### ZI Poisson Distribution

**Sintassi:** cumprob = ZI Poisson Distribution( k, lambda, pi )

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson con inflazione di zeri sia inferiore o pari a k, dove lambda è il parametro di posizione, pi è il parametro di inflazione di zeri e k è il conteggio di interesse.

**JMP Versione aggiunta:** 19

```jsl

lambda = 4;p = .2;New Window( "Example: Zero Inflated Poisson Distribution",	ppy = Graph Box(		Y Scale( 0, 1.01 ),		X Scale( -1, 40 ),		Pen Color( "red" ),		Pen Size( 1 );		For( k = 0, k <= 40, k++,			H Line( k, k + 1, ZI Poisson Distribution( k, lambda, p ) );			V Line(				k + 1,				ZI Poisson Distribution( k, lambda, p ),				ZI Poisson Distribution( k + 1, lambda, p )			);		);		Text( {30, 0.2}, "\!U03BB=", Round( lambda, 2 ) );		Text( {30, .1}, "\!U03C0=", Round( p, 2 ) );	),	V List Box(		H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),	));

```

### ZI Poisson Probability

**Sintassi:** prob = ZI Poisson Probability( k, lambda, pi)

**Descrizione:** Restituisce la probabilità che una variabile casuale con distribuzione di Poisson con inflazione di zeri sia pari a k, dove lambda è il parametro di posizione, pi è il parametro di inflazione di zeri e k è il conteggio della frequenza osservato.

**JMP Versione aggiunta:** 19

```jsl

lambda = 4;p = .2;New Window( "Example: Poisson Probability",	ppy = Graph Box(		Y Scale( 0, .6 ),		X Scale( -1, 40 ),		Pen Color( "red" ),		Pen Size( 2 );		For( k = 0, k <= 40, k++,			V Line( k, 0, ZI Poisson Probability( k, lambda, p ) )		);		Text( {30, 0.5}, "\!U03BB=", Round( lambda, 2 ) );		Text( {30, .4}, "\!U03C0=", Round( p, 2 ) );	),	V List Box(		H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),	));

```

### ZI Poisson Quantile

**Sintassi:** q = ZI Poisson Quantile( lambda, pi, cumprob )

**Descrizione:** Restituisce il quantile intero più piccolo per cui la probabilità cumulativa della distribuzione di Poisson con inflazione di zeri( lambda, pi ) è maggiore o pari a cumprob.

**JMP Versione aggiunta:** 19

```jsl

qexpl = 20;qexpp = .2;qexpn = 40;qexpq = 0.5;New Window( "Example: ZI Poisson Quantile",	qexpy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 41 ),		Pen Color( "red" ),		Pen Size( 2 );		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,			H Line( qexpk, qexpk + 1, ZI Poisson Distribution( qexpk, qexpl, qexpp ) );			V Line(				qexpk + 1,				ZI Poisson Distribution( qexpl, qexpp, qexpk ),				ZI Poisson Distribution( qexpl, qexpp, qexpk + 1 )			);		);		Pen Color( "blue" );		V Line( ZI Poisson Quantile( qexpl, qexpp, qexpq ), 0, 1.0 );		Text( {2, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C0=", Round( qexpp, 2 ) );		Text(			{2, 0.8},			" q=",			Round( qexpq, 2 ),			" quantile=",			Round( ZI Poisson Quantile( qexpl, qexpp, qexpq ) )		);	),	H List Box( Slider Box( 0, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),	H List Box( Slider Box( 0, .99, qexpp, qexpy << reshow ), Text Box( " \!U03C0" ) ),	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) ));

```

