# Probability



### Beta Density

**Syntax:** y = Beta Density( q, alpha, beta, <theta=0>, <sigma=1> )

**Beschreibung:** Gibt die Dichte an q für eine Beta-Verteilung zurück, wobei q im Intervall theta bis theta + sigma liegt. alpha und beta sind Formparameter. theta und sigma sind die jeweiligen Schwellen- und Bereichsparameter.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Beta Distribution( q, alpha, beta, <theta=0>, <sigma=1> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine betaverteilte Zufallsvariable kleiner als q ist. alpha und beta sind Formparameter. theta und sigma sind die jeweiligen Schwellen- und Bereichsparameter.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Beta Quantile( p, alpha, beta, <theta=0>, <sigma=1> )

**Beschreibung:** Gibt das Quantil einer Beta-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. alpha und beta sind Formparameter. theta und sigma sind die jeweiligen Schwellen- und Spannweitenparameter.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Beta Quantile( 0.95, 2, 5 );

```

### Cauchy Density

**Syntax:** y = Cauchy Density( q, <center>, <scale> )

**Beschreibung:** Gibt die Dichte in q einer Cauchy-Verteilung mit dem Mittelpunkt mu und der Breite sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Cauchy Distribution( q, <center>, <scale> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Cauchy-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Cauchy Quantile( p, <center>, <scale> )

**Beschreibung:** Gibt das Quantil einer Cauchy-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = ChiSquare Density( q, df, <nonCentrality=0> )

**Beschreibung:** Gibt die Dichte in q einer Chi-Quadrat-Verteilung mit df Freiheitsgraden zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = ChiSquare Distribution( q, df, <nonCentrality=0> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Chi-Quadrat-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = ChiSquare Log CDistribution( x, df, <nonCentrality=0> )

**Beschreibung:** Gibt den Logarithmus von 1 - Chi-Quadrat-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = ChiSquare Log Density( x, df, <nonCentrality=0> )

**Beschreibung:** Gibt den Logarithmus der Chi-Quadrat-Wahrscheinlichkeitsdichte zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = ChiSquare Log Distribution( x, df, <nonCentrality=0> )

**Beschreibung:** Gibt den Logarithmus der Chi-Quadrat-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** nc = ChiSquare Noncentrality( x, df, prob )

**Beschreibung:** Gibt den Nichtzentralitätsparameter nc so zurück, dass prob gleich der Wahrscheinlichkeit ist, dass eine Chi-Quadrat-verteilte Zufallsvariable mit df Freiheitsgraden kleiner als x ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = ChiSquare Quantile( p, df, <nonCentrality=0> )

**Beschreibung:** Gibt das Quantil einer Chi-Quadrat-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
ChiSquare Quantile( 0.15, 5 );

```

### Dunnett P value

**Syntax:** p = Dunnett P value( q, nTrt, dfe, <lambdaVec = .> )

**Beschreibung:** Gibt den p-Wert von Dunnetts multiplen Vergleichstests zurück. Dabei ist q die Prüfgröße, nTrt die Anzahl der Behandlungen, die mit der Kontrollgruppe verglichen wird, dfe sind die Fehlerfreiheitsgrade (basierend auf dem Umfang der gesamten Stichprobe) und das optionalelambdaVec ist ein Vektor von Parametern, die standardmäßig auf 1/sqrt(2) gesetzt sind.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**Syntax:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, <lambdaVec = .> )

**Beschreibung:** Gibt das Quantil zurück, das in Dunnetts multiplen Vergleichstest benötigt wird. Dabei ist 1-alpha das Konfidenzniveau, nTrt die Anzahl der Behandlungen, die mit der Kontrollgruppe verglichen wird, dfe sind die Fehlerfreiheitsgrade (basierend auf dem Umfang der gesamten Stichprobe) und das optionalelambdaVec ist ein Vektor von Parametern, die standardmäßig auf 1/sqrt(2) gesetzt sind.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Dunnett Quantile( 0.95, 3, 11 );

```

### ExGaussian Density

**Syntax:** y = ExGaussian Density( x, location, scale, shape )

**Beschreibung:** Gibt die Dichte an x einer Ex-Gauß-Verteilung zurück.

**JMP Version hinzugefügt:** 18

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

**Syntax:** y = ExGaussian Distribution( x, location, scale, shape )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Ex-Gauß-verteilte Zufallsvariable kleiner als x ist.

**JMP Version hinzugefügt:** 18

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

**Syntax:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**Beschreibung:** Gibt das Quantil einer Ex-Gauß-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** 18

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

**Syntax:** y = Exp Density( x, <theta=1> )

**Beschreibung:** Gibt die Dichte an x einer Exponentialverteilung mit Parameter theta zurück.

**JMP Version hinzugefügt:** 14

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

**Syntax:** p = Exp Distribution( x, <theta=1> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine exponentiell verteilte Zufallsvariable kleiner als x ist.

**JMP Version hinzugefügt:** 14

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

**Syntax:** q = Exp Quantile( p, <theta=1> )

**Beschreibung:** Gibt das Quantil einer Exponentialverteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** 14

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

**Syntax:** y = Exponential Density( x, <theta=1> )

**Beschreibung:** Gibt die Dichte an x einer Exponentialverteilung mit Parameter theta zurück.

**JMP Version hinzugefügt:** 17

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

**Syntax:** p = Exponential Distribution( x, <theta=1> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine exponentiell verteilte Zufallsvariable kleiner als x ist.

**JMP Version hinzugefügt:** 17

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

**Syntax:** q = Exponential Quantile( p, <theta=1> )

**Beschreibung:** Gibt das Quantil einer Exponentialverteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** 17

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

**Syntax:** y = F Density( q, dfnum, dfden, <nonCentrality=0> )

**Beschreibung:** Gibt die Dichte in q einer F-Verteilung mit dfn und dfd Freiheitsgraden zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = F Distribution( q, dfnum, dfden, <nonCentrality=0> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine F-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = F Log CDistribution( x, dfnum, dfden, <nonCentrality=0> )

**Beschreibung:** Gibt den Logarithmus von 1 - F-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = F Log Density( x, dfnum, dfden, <nonCentrality=0> )

**Beschreibung:** Gibt den Logarithmus der F-Wahrscheinlichkeitsdichte zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = F Log Distribution( x, dfnum, dfden, <nonCentrality=0> )

**Beschreibung:** Gibt den Logarithmus der F-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** nc = F Noncentrality( x, dfnum, dfden, prob )

**Beschreibung:** Bestimmt den Nichtzentralitätsparameter nc so, dass prob = F Distribution( x, ndf, ddf, nc ).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = F Power( alpha, dfh, dfm, d, n )

**Beschreibung:** Berechnet die Power eines F-Tests. Dabei gilt Folgendes: alpha ist das Signifikanzniveau, dfh sind die Freiheitsgrade der Hypothese, dfm sind die Freiheitsgrade des gesamten Modell, d ist die quadrierte Effektgröße, SSH/(n*sigma^2), dabei ist SSH die Summe der Quadrate für die Hypothese, und n ist die Gesamtanzahl der Beobachtungen. Beachten Sie, dass für das ANOVA-Modell d = Sum(a[i]^2)/(k * sigma^2) ist. Dabei gilt: a[i] sind Effekte und k ist die Anzahl der Mittelwerte.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = F Quantile( p, dfnum, dfden, <nonCentrality=0> )

**Beschreibung:** Gibt das Quantil einer F-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**Syntax:** n = F Sample Size( alpha, dfh, dfm, d, power )

**Beschreibung:** Berechnet die Stichprobengröße. Dabei gilt Folgendes: alpha ist das Signifikanzniveau, dfh sind die Freiheitsgrade der Hypothese, dfm sind die Freiheitsgrade des gesamten Modell, d ist die quadrierte Effektgröße, SSH/(n*sigma^2), dabei ist SSH die Summe der Quadrate für die Hypothese, und power ist die gewünschte Power. Beachten Sie, dass für das ANOVA-Modell d = Sum(a[i]^2)/(k * sigma^2) ist. Dabei gilt: a[i] sind Effekte und k ist die Anzahl der Mittelwerte.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = FDR Adjust( matrix )

**Beschreibung:** Gibt die Adjustierung der False Discovery Rate für die angegebenen p-Werte nach der Benjamini-Hochberg-Methode zurück.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### Frechet Density

**Syntax:** y = Frechet Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer Frechet-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Frechet Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer Frechet-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Frechet Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer Frechet-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = GLog Density( q, mu, sigma, lambda )

**Beschreibung:** Gibt die Dichte bei q einer verallgemeinerten logarithmischen Verteilung mit der Lage mu, der Skala sigma und der Form lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = GLog Distribution( q, mu, sigma, lambda )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine verallgemeinerte logarithmisch-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = GLog Quantile( p, mu, sigma, lambda )

**Beschreibung:** Gibt das Quantil einer verallgemeinerten logarithmischen Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Gamma Density( q, <alpha=1>, <scale=1>, <threshold=0> )

**Beschreibung:** Gibt die Dichte in q einer Gamma-Wahrscheinlichkeitsverteilung zurück. Das Argument alpha ist der Formparameter und muss positiv sein.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Gamma-verteilte Zufallsvariable kleiner als q ist. Das Argument alpha ist ein Formparameter und muss positiv sein. IGamma() ist ein Aliasname für Gamma Distribution(). Die Funktion Gamma Distribution() ist äquivalent zu Gamma(alpha,q)/Gamma(alpha).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Gamma Log CDistribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**Beschreibung:** Gibt den Logarithmus der 1 - Gamma-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Gamma Log Density( x, <alpha=1>, <scale=1>, <threshold=0> )

**Beschreibung:** Gibt den Logarithmus der Gamma-Wahrscheinlichkeitsdichte zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Gamma Log Distribution( x, <alpha=1>, <scale=1>, <threshold=0> )

**Beschreibung:** Gibt den Logarithmus der Gamma-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Gamma Quantile( p, <alpha=1>, <scale=1>, <threshold=0> )

**Beschreibung:** Gibt das Quantil einer Gamma-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**Syntax:** y = GenGamma Density( x, mu, sigma, lambda )

**Beschreibung:** Gibt die Dichte an der Stelle x einer erweiterten verallgemeinerten Gamma-Wahrscheinlichkeitsverteilung mit den Parametern mu, sigma und lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = GenGamma Distribution( x, mu, sigma, lambda )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine erweiterte verallgemeinerte Gamma-verteilte Zufallsvariable (mit den Parametern mu, sigma und lambda) kleiner ist als x.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = GenGamma Quantile( p, mu, sigma, lambda )

**Beschreibung:** Gibt das Quantil einer erweiterten verallgemeinerten Gamma-Verteilung zurück (mit den Parametern mu, sigma und lambda), den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Gamma Distribution( q, <alpha=1>, <scale=1>, <threshold=0> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Gamma-verteilte Zufallsvariable kleiner als q ist. Das Argument alpha ist ein Formparameter und muss positiv sein. IGamma() ist ein Aliasname für Gamma Distribution(). Die Funktion Gamma Distribution() ist äquivalent zu Gamma(alpha,q)/Gamma(alpha).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Dichte einer Johnson-Sb-Verteilung für q zurück, wobei q zwischen theta und theta + sigmaliegt. delta>0 und gamma zwischen -∞ und +∞ sind Formparameter, sigma>0 ist ein Lageparameter und theta zwischen -∞ und +∞ ist ein Schwellenparameter. Hinweis: theta ist der untere Endpunkt der Verteilung und sigma ist die Breite des Trägers der Verteilung.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Johnson-Sb-verteilte Zufallsvariable kleiner als q ist. (Hinweis: Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Sb Density().)

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**Beschreibung:** Gibt das Quantil einer Johnson-Sb-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. (Hinweis: p ist der erste Parameter. Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Sb Density().)

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**Syntax:** y = Johnson Sl Density( q, gamma, delta, theta, <sigma=1> )

**Beschreibung:** Gibt die Dichte einer Johnson-Sl-Verteilung für q zurück, wobei q zwischen theta und +∞ liegt. delta>0 und gamma zwischen -∞ und +∞ sind Formparameter, sigma gleich +1 oder -1 ist ein Lageparameter und theta zwischen -∞ und +∞ ist ein Schwellenparameter. Hinweis: Wenn sigma = 1, ist theta die untere Grenze der Verteilung, und wenn sigma=-1, ist theta die obere Grenze. Und: Positives sigma bedeutet positive Schiefe und negatives sigma bedeutet negative Schiefe.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Johnson Sl Distribution( q, gamma, delta, theta, <sigma=1> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Johnson-Sl-verteilte Zufallsvariable kleiner als q ist. (Hinweis: Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Sl Density().)

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Johnson Sl Quantile( p, gamma, delta, theta, <sigma=1> )

**Beschreibung:** Gibt das Quantil einer Johnson-Sl-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. (Hinweis: p ist der erste Parameter. Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Sl Density().)

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**Syntax:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Dichte einer Johnson-Sb-Verteilung für q zurück, wobei q zwischen -∞ und +∞ liegt. delta>0 und gamma zwischen -∞ und +∞ sind Formparameter, sigma>0 ist ein Lageparameter und theta zwischen -∞ und +∞ ist ein Schwellenparameter.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Johnson-Su-verteilte Zufallsvariable kleiner als q ist. (Hinweis: Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Su Density().)

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**Beschreibung:** Gibt das Quantil einer Johnson-Su-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. (Hinweis: p ist der erste Parameter. Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Su Density().)

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### LEV Density

**Syntax:** y = LEV Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer Verteilung des größten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = LEV Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer Verteilung des größten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = LEV Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer Verteilung des größten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = LogGenGamma Density( x, mu, sigma, lambda )

**Beschreibung:** Gibt die Dichte an der Stelle x einer verallgemeinerten Log-Gamma-Wahrscheinlichkeitsverteilung mit den Parametern mu, sigma und lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine verallgemeinerte Log-Gamma-verteilte Zufallsvariable (mit den Parametern mu, sigma und lambda) kleiner ist als x.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**Beschreibung:** Gibt das Quantil einer verallgemeinerten Log-Gamma-Verteilung zurück (mit den Parametern mu, sigma und lambda), den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Logistic Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Logistic Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Logistic Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Loglogistic Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer log-logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Loglogistic Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer log-logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Loglogistic Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer log-logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Lognormal Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer Lognormal-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Lognormal Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer Lognormal-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Lognormal Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer Lognormal-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Biv Distribution( x, y, r, <mu1=0>, <s1=1>, <mu2=0>, <s2=1> )

**Beschreibung:** Berechnet die Wahrscheinlichkeit, dass eine Beobachtung (X, Y) kleiner als oder gleich (x, y) ist, bei einem Korrelationskoeffizienten r, wobei die Randverteilung X normalverteilt mit Mittelwert mu1 und Standardabweichung s1 ist und die Randverteilung Y normalverteilt mit Mittelwert mu2 und Standardabweichung s2 ist. Wenn mu1, s1, mu2 und s2 nicht angegeben sind, nimmt die Funktion die bivariate Standardnormalverteilung mit mu1=0, s1=1, mu2=0 und s2=1 an.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Density

**Syntax:** y = Normal Density( q, <mu=0>, <sigma=1> )

**Beschreibung:** Gibt die Dichte in q einer Normalverteilung mit dem Mittelwert mu and der Standardabweichung sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Normal Distribution( q, <mu=0>, <sigma=1> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine normalverteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Log CDistribution( x, <mean=0>, <std dev=1> )

**Beschreibung:** Gibt den Logarithmus der 1 - Normalverteilung bei x mit dem Erwartungswert mu und der Standardabweichung sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Log Density( x, <mu=0>, <sigma=1>)

**Beschreibung:** Gibt den Logarithmus der Wahrscheinlichkeitsdichte der Normalverteilung bei x mit dem Erwartungswert mu und der Standardabweichung sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Log Distribution( x, <mean=0>, <std dev=1> )

**Beschreibung:** Gibt den Logarithmus der Normalverteilung bei x mit dem Erwartungswert mu und der Standardabweichung sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**Beschreibung:** Gibt die Dichte in q einer Mischung aus Normalverteilungen mit dem Gruppenmittelwert meanvec, den Standardabweichungen der Gruppe sdvec und den Gruppenwahrscheinlichkeiten probvec zurück. Hier sind meanvec, sdvec und probvec alles Vektoren gleicher Größe.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine in normaler Mischung verteilte Variable mit dem Gruppenmittelwert meanvec, den Standardabweichungen der Gruppe sdvec und den Gruppenwahrscheinlichkeiten probvec kleiner als q ist. Hier sind meanvec, sdvec und probvec alles Vektoren gleicher Größe.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**Beschreibung:** Gibt das Quantil einer Mischung aus Normalverteilungen zurück, die Werte, für die die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**Beschreibung:** Gibt das Quantil einer Normalverteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### Probit

**Syntax:** q = Normal Quantile( p, <mu=0>, <sigma=1> ); q = Probit( p )

**Beschreibung:** Gibt das Quantil einer Normalverteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Normal Quantile( 0.9 );

```

### SEV Density

**Syntax:** y = SEV Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer Verteilung des kleinsten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = SEV Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer Verteilung des kleinsten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = SEV Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer Verteilung des kleinsten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** d = SHASH Density( x, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Dichte an x einer SHASH-Verteilung (sinh-arcsinh) zurück. Die SHASH-Transformation kann verwendet werden, um Daten zu erzeugen, die eher einer Normalverteilung folgen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```js

Names Default To Here( 1 );
SHASH Density( 0, -1, 2, -2, 3 );

```

**SHASH-Transformation**

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

**Syntax:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine SHASH-verteilte (sinh-arcsinh) Zufallsvariable kleiner ist als q. Die SHASH-Transformation kann verwendet werden, um Daten zu erzeugen, die eher einer Normalverteilung folgen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

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

**SHASH-Transformation**

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

**Syntax:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**Beschreibung:** Gibt das Quantil einer SHASH-Verteilung (sinh-arcsinh) zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. Die SHASH-Transformation kann verwendet werden, um Daten zu erzeugen, die eher einer Normalverteilung folgen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```js

Names Default To Here( 1 );
SHASH Quantile( .5, 1, 2, 3, 1 );

```

**SHASH-Transformation**

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

**Syntax:** p = t Density( q, df, <nonCentrality=0> )

**Beschreibung:** Gibt die Dichtefunktion der Student-t-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = t Distribution( q, df, <nonCentrality=0> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Student-t-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = t Quantile( p, df, <nonCentrality=0> )

**Beschreibung:** Gibt das Quantil einer Student-t-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Tukey HSD P value( q, nGroups, dfe )

**Beschreibung:** Gibt den p-Wert zurück, der in Tukeys HSD-Test für multiple Mittelwertsvergleiche benötigt wird. Das Argument q ist die Prüfgröße, nGroups ist die Anzahl der Gruppen in der Studie und dfe sind die Fehlerfreiheitsgrade (basierend auf der Gesamtanzahl der Stichproben in der Studie).



Beachten Sie, dass q Tukeys adjustierter kritischer Wert ist, wobei es sich um das Quantil von Tukeys Verteilung der studentisierten Spannweite dividiert durch die Wurzel von 2 handelt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**Syntax:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**Beschreibung:** Gibt das Quantil zurück, das in Tukeys HSD-Test für multiple Mittelwertsvergleiche benötigt wird. Das Argument 1-alpha ist das Konfidenzniveau, nGroups ist die Anzahl der Gruppen in der Studie und dfe sind die Fehlerfreiheitsgrade (basierend auf der Gesamtanzahl der Stichproben in der Studie).



Beachten Sie, dass q Tukeys adjustierter kritischer Wert ist, wobei es sich um das Quantil von Tukeys Verteilung der studentisierten Spannweite dividiert durch die Wurzel von 2 handelt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Weibull Density( x, shape, <scale=1>, <threshold=0> )

**Beschreibung:** Gibt die Dichte bei x einer Weibull-Verteilung mit einem Parameter scale und optionalem Parameter shape zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Weibull Distribution( x, shape, <scale=1>, <threshold=0> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Weibull-verteilte Zufallsvariable (mit einem Parameter scale und optionalem Parameter shape) kleiner als x ist

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Weibull Quantile( p, beta, <alpha=1>, <threshold=0> )

**Beschreibung:** Gibt das Quantil einer Weibull-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. beta und alpha sind jeweils der Form- und Lageparameter.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = t Density( q, df, <nonCentrality=0> )

**Beschreibung:** Gibt die Dichtefunktion der Student-t-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = t Distribution( q, df, <nonCentrality=0> )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Student-t-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = t Log CDistribution( x, df, <nc> )

**Beschreibung:** Gibt den Logarithmus von 1 - t-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = t Log Density( x, df, <nc> )

**Beschreibung:** Gibt den Logarithmus der t-Wahrscheinlichkeitsdichte zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = t Log Distribution( x, df, <nc> )

**Beschreibung:** Gibt den Logarithmus der t-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** nc = t Noncentrality( x, df, prob )

**Beschreibung:** Bestimmt den Nichtzentralitätsparameter einer Student-t-Verteilung so, dass prob = t Distribution( x, df, nc ).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = t Quantile( p, df, <nonCentrality=0> )

**Beschreibung:** Gibt das Quantil einer Student-t-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

