# Optimization



### Constrained Maximize

**Sintassi:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({lowerLimitVector,upperLimitVector})

**Descrizione:** Trova valori per gli argomenti della funzione, specificati nell&apos;elenco {x1, x2, ...}, che massimizzano l&apos;espressione expr con vincoli lineari facoltativi. Le variabili, x1, x2, ecc., possono essere scalari o vettori. I limiti inferiore e superiore devono essere specificati per ogni variabile fra parentesi dopo il nome della variabile o con il parametro <<SetVariableLimits(). Gli argomenti facoltativi per la funzione Constrained Maximize consentono di specificare quanto segue: vincoli lineari, massimo numero di iterazioni, tolleranza desiderata, dettagli dell&apos;output, valori di avvio e limiti per le variabili di ottimizzazione. (Vedere esempio 2.) I vincoli lineari sono specificati usando la matrice di coefficienti mat_A e il vettore lato destro vec_b.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

/*Simple Example*/
f = Expr(
	-2 * x1 ^ 2 - 2 * x2 ^ 2 + 2 * x1 * x2 + 4 * x1 + 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Maximize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

#### Esempio 2

```jsl

/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	-2 * x[1] ^ 2 - 2 * x[2] ^ 2 + 2 * x[1] * x[2] + 4 * x[1] + 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Maximize(
	f,
	{x},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Constrained Minimize

**Sintassi:** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({low,high})

**Descrizione:** Trova valori per gli argomenti della funzione, specificati nell&apos;elenco {x1, x2, ...}, che minimizzano l&apos;espressione expr con vincoli lineari facoltativi. Le variabili, x1, x2, ecc., possono essere scalari o vettori. I limiti inferiore e superiore devono essere specificati per ogni variabile fra parentesi dopo il nome della variabile o con il parametro <<SetVariableLimits(). Gli argomenti facoltativi per la funzione Constrained Minimize consentono di specificare quanto segue: vincoli lineari, massimo numero di iterazioni, tolleranza desiderata, dettagli dell&apos;output, valori di avvio e limiti per le variabili di ottimizzazione. (Vedere esempio 2.) I vincoli lineari sono specificati usando la matrice di coefficienti mat_A e il vettore lato destro vec_b.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

/*Simple Example*/
f = Expr(
	2 * x1 ^ 2 + 2 * x2 ^ 2 - 2 * x1 * x2 - 4 * x1 - 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Minimize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

#### Esempio 2

```jsl

/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	2 * x[1] ^ 2 + 2 * x[2] ^ 2 - 2 * x[1] * x[2] - 4 * x[1] - 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Minimize(
	f,
	{x},
	<<lessthanEQ( {A, b} ) /*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Desirability

**Sintassi:** des = Desirability( yVector, dVector, y )

**Descrizione:** Disegna una curva di desiderabilità, dove yVector è un vettore di 3 valori di input, dVector sono i 3 corrispondenti valori di desiderabilità e y è l&apos;argomento del quale si deve calcolare la desiderabilità.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dvec = [0.1 0.9 0.1];
yvec = [1 5 10];
New Window( "Desirability",
	Graph Box(
		X Scale( 0, 12 ),
		Y Scale( 0, 1 ),
		Frame Size( 500, 400 ),
		Drag Marker( yvec, dvec );
		Y Function( Desirability( yvec, dvec, x ), x );
	)
);

```

### LPSolve

**Sintassi:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, &lt;slackVars=0&gt; )

**Descrizione:** Riduce al minimo la funzione obiettivo soggetta ai vincoli dati e restituisce un elenco di due elementi. Il primo elemento dell&apos;elenco, x, contiene le variabili di decisione (e variabili inattive se slackVars=1). Il secondo elemento dell&apos;elenco, z, contiene il valore della funzione obiettiva ottimale (se esiste). I primi cinque argomenti sono matrici. L&apos;argomento A è la matrice di coefficienti del vincolo. L&apos;argomento b è la colonna di valori sul lato destro dei vincoli. L&apos;argomento c è il vettore dei coefficienti di costo o della funzione obiettivo. Gli argomenti L e U sono rispettivamente i limiti inferiore e superiore per le variabili. Gli argomenti neq, nle e nge sono rispettivamente il numero dei vincoli di uguaglianza, i vincoli minori o uguali e i vincoli maggiori o uguali. Si noti che i vincoli devono essere elencati inizialmente come uguaglianze, poi come disuguaglianze minori o uguali e infine come disuguaglianze maggiori o uguali.

**JMP Versione aggiunta:** prima della versione 14

```jsl

A = [5 -2 6, 2 4 0, 3 8 -4];
b = [17, 19, 14];
c = [9 6 -4];
L = [. 0 .];
U = [0 . .];
{x, z} = LPSolve( A, b, c, L, U, 1, 1, 1, 1 );
Show( x, z );

```

### Maximize

**Sintassi:** Maximize( expr, {x1, x2, ...} );Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;hessian(), method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Descrizione:** Trova valori per gli argomenti della funzione, specificati nell&apos;elenco {x1, x2, ...}, che massimizzano l&apos;espressione expr. È possibile specificare i limiti inferiori e superiori per ciascun argomento tra parentesi dopo il nome dell&apos;argomento. Se expr non è una funzione concava, Maximize potrebbe trovare un massimo locale invece del massimo globale. Se è un problema, provare più valori di partenza. Inoltre, Maximize funziona meglio per le funzioni con una derivata seconda continua. Ulteriori argomenti per la funzione Maximize consentono di impostare il numero massimo di interazioni, la tolleranza per la convergenza e di visualizzare ulteriori dettagli sull&apos;ottimizzazione. Per ulteriori informazioni sugli argomenti opzionali. fare clic sul pulsante della guida dell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

#### Esempio 2

```jsl

/*Find the MLE for a Normal Distribution with a random sample of 3 observations*/
x = [3 4 5]; /* observed values*/ 
n = 3;
logDens = Expr(
	(-n / 2) * Log( 2 * Pi() * sigSq ) - Summation( i = 1, 3, ((x[i] - mu) ^ 2) ) / (2 *
	sigSq)
);
mu = 3;
sigSq = 1;/*initial values*/ 
{maxReached, iters, gradient, hessian} = Maximize(
	logDens,
	{mu, sigSq( 0, . )},
	<<details( both )
);

```

#### Esempio 3

```jsl

/*Simple example with all optional arguments*/ 
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Maximize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

### Minimize

**Sintassi:** Minimize( expr, {x1, x2, ...} );Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;Hessian(), &lt;&lt;method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Descrizione:** Trova valori per gli argomenti della funzione, specificati nell&apos;elenco {x1, x2, ...}, che riducono al minimo l&apos;espressione expr. È possibile specificare i limiti inferiori e superiori per ciascun argomento tra parentesi dopo il nome dell&apos;argomento. Se expr non è una funzione convessa, Minimize potrebbe trovare un minimo locale invece del minimo globale. Se è un problema, provare più valori di partenza. Inoltre, Minimize funziona meglio per le funzioni con una derivata seconda continua. Ulteriori argomenti per la funzione Minimize consentono di impostare il numero massimo di interazioni, la tolleranza per la convergenza e di visualizzare ulteriori dettagli sull&apos;ottimizzazione. Per ulteriori informazioni sugli argomenti facoltativi, fare clic sul pulsante della guida dell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

#### Esempio 2

```jsl

/*Nonlinear Sums of Squares Example*/
x = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
y = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
sseExpr = Expr(
	Summation( i = 1, 6, (y[i] - b1 * x[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objVal, iters, gradient, hessian} = Minimize(
	sseExpr,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 )
);

```

#### Esempio 3

```jsl

/*Simple example with some optional arguments*/
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Minimize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

#### Esempio 4

```jsl

/*Example with gradient, hessian, and method(nr) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -10 ),
	<<Method( nr ),
	<<gradient(
		{Summation( i = 1, 6, -2 * xx[i] ^ b2 * (yy[i] - b1 * xx[i] ^ b2) ),
		Summation(
			i = 1,
			6,
			2 * (b1 * Ln( xx[i] ) * xx[i] ^ b2) * (b1 * xx[i] ^ b2 - yy[i])
		)}
	),
	<<hessian(
		{{Summation( i = 1, 6, 2 * xx[i] ^ (2 * b2) ),
		Summation( i = 1, 6, 2 * Ln( xx[i] ) * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i]) )},
		{Summation(
			i = 1,
			6,
			2 * b1 * Ln( xx[i] ) ^ 2 * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}}
	)
);

```

#### Esempio 5

```jsl

/*Example with usNumericDeriv and method(sr1) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objValue, iter, gradient, hessian} = Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 ),
	<<Method( sr1 ),
	<<useNumericDeriv( True )
);

```

