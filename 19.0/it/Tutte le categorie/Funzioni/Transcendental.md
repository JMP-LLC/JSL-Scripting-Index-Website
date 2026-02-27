# Transcendental



### Arrhenius

**Sintassi:** y = Arrhenius( tempC )

**Descrizione:** Restituisce la componente non specifica della relazione di Arrhenius che è quindi moltiplicata per l&apos;energia di attivazione dell&apos;equazione di Arrhenius. Restituisce 11604.5181215503 / (tempC + 273.15).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Arrhenius( 100 );

```

### Arrhenius Inv

**Sintassi:** tempC = Arrhenius Inv( y )

**Descrizione:** Restituisce l&apos;inverso della funzione di Arrhenius che è (11604.5181215503 / y) - 273.15.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Arrhenius Inv( 100 );

```

### Beta

**Sintassi:** z = Beta( x, y )

**Descrizione:** Restituisce la funzione beta di x e y, definita come Gamma( x ) * Gamma( y ) / Gamma( x + y ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Beta( 5, 4 );

```

### Box Cox Inverse Transform

**Sintassi:** x = Box Cox Inverse Transform( y, lambda )

**Descrizione:** Restituisce la trasformazione inversa Box-Cox dell&apos;argomento.

**JMP Versione aggiunta:** 19

```jsl

Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**Sintassi:** y = Box Cox Transform( x, lambda )

**Descrizione:** Restituisce la trasformazione Box-Cox dell&apos;argomento.

**JMP Versione aggiunta:** 19

```jsl

Box Cox Transform( 3, 2 );

```

### Cytometry Logicle

**Sintassi:** y = Cytometry Logicle( x, T, W, M, A )

**Descrizione:** Calcola la trasformazione logicle della citometria.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**Sintassi:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**Descrizione:** Calcola la trasformazione inversa per la rappresentazione logicle della citometria.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Digamma

**Sintassi:** y = Digamma( x )

**Descrizione:** Restituisce la funzione digamma valutata a x, dove la funzione digamma è la derivata del logaritmo della funzione gamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Digamma( 5 );

```

### Exp

**Sintassi:** y = Exp( &lt;x=1&gt; )

**Descrizione:** Restituisce e elevato alla potenza di x. L&apos;argomento può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Exp( 1 ), 5 );

```

### ExpM1

**Sintassi:** y = ExpM1( x )

**Descrizione:** Restituisce un calcolo più preciso di Exp(x)-1 quando x è molto piccolo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### FFT

**Sintassi:** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**Descrizione:** Conduce una FFT (Fast Fourier Transformation) sull&apos;argomento L, un elenco necessario formato da parti reali e immaginarie dei dati sotto forma di matrici. Se L è costituito da una sola matrice, la matrice viene considerata essere la parte reale. Se L è costituito da due matrici, la prima è la parte reale e la seconda è la parte immaginaria. Le due matrici devono avere le stesse dimensioni e devono avere più di una riga. Vi sono tre argomenti opzionali. L&apos;argomento determina se condurre una FFT inversa inverse. L&apos;argomento determina se condurre una FFT multivariate spaziale o multivariata. L&apos;argomento scale determina la costante per la quale moltiplicare i valori di ritorno. Il valore di ritorno è un elenco delle due matrici con le stesse dimensioni come il primo argomento di input.

**JMP Versione aggiunta:** prima della versione 14

```jsl

FFT( {[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]} );
A = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3];
res = FFT( {A} );
res = FFT( {A}, <<Inverse( 1 ) );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
B = FFT( {A} );
FFT( B, <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]
);
FFT( FFT( {Afun()} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	{[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]}
);
FFT( FFT( Afun() ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
A = [1 3, 2 4, 3 1, 4 3, 4 5, 5 2, 5 7, 6 9, 7 5, 7 3, 2 7, 3 4, 6 7, 6 4, 2 7, 2 4, 2 6, 3 5,
3 6, 3 1];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 40 ) );
res = FFT(
	FFT( {A}, <<multivariate( 1 ) ),
	<<multivariate( 1 ),
	<<Inverse( 1 ),
	<<scale( 1 / 20 )
);
A = [1 3 1,
2 4 3,
3 1 2,
4 3 3,
4 5 9,
5 2 8,
5 7 6,
6 9 5,
7 5 3,
7 3 2,
2 7 1,
3 4 3,
6 7 3,
6 4 2,
2 7 4,
2 4 1,
2 6 5,
3 5 1,
3 6 2,
3 1 9];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 60 ) );
fin = FFT(
	FFT( {A}, <<multivariate( 1 ) ),
	<<Inverse( 1 ),
	<<multivariate( 1 ),
	<<scale( 1 / 20 )
);
Show( fin );

```

### Factorial

**Sintassi:** y = Factorial( x )

**Descrizione:** Restituisce il fattoriale di x, che è uguale a Gamma( x + 1 ). Se x è un numero intero, il risultato è il prodotto 1 * 2 * ... * x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Factorial( 5 );

```

### Fit Transform To Normal

**Sintassi:** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**Descrizione:** Stima una trasformazione alla normalità per un vettore di dati. Comprende le distribuzioni Johnson Sl, Johnson Sb, Johnson Su e GLog. La funzione restituisce un elenco contenente stime di parametro, matrice di covarianza, log verosimiglianza, AICc e un messaggio di convergenza.

**JMP Versione aggiunta:** prima della versione 14

```jsl

datavec = [-3.7975076, 0.48221038, -1.3082712, -1.860647, -6.9470789, -17.237024, -19.470857,
-6.1855986, 2.16525629, -30.990061];
freqvec = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
As Table( datavec || freqvec );
Column( 1 ) << set name( "x" );
Column( 2 ) << set name( "freq vec" );
Distribution(
	Freq( :freq vec ),
	Continuous Distribution( Column( :x ), Fit Distribution( GLog ) )
);
results = Fit Transform To Normal( Distribution( "glog" ), Y( datavec ), freq( freqvec ) );
Show( results );

```

### Gamma

**Sintassi:** y = Gamma( x, &lt;limit&gt; )

**Descrizione:** Restituisce la funzione gamma di x, definita come l&apos;integrale di z^(x-1)*exp(-z) dz da 0 a ∞. Se è presente limit, sarà calcolato un gamma incompleto con quel limite di integrazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Gamma( 5 );

```

### LGamma

**Sintassi:** y = LGamma( x )

**Descrizione:** Restituisce il logaritmo naturale della funzione gamma di x. Utile quando gamma(x) è troppo grande per utilizzarlo direttamente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

LGamma( 5 );

```

### Ln

**Sintassi:** y = Ln( x )

**Descrizione:** Restituisce il logaritmo naturale di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ln( Exp( 2 ) );

```

### Log

**Sintassi:** y = Log( x, &lt;b&gt; )

**Descrizione:** Restituisce il logaritmo in base b di x o il logaritmo naturale di x se b non è specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Log( 256, 2 );

```

### Log10

**Sintassi:** y = Log10( x )

**Descrizione:** Restituisce il logaritmo in base 10 di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Log10( 100 );

```

### Log1P

**Sintassi:** y = Log1P( x )

**Descrizione:** Restituisce un calcolo più preciso di Log(1 + x) quando x è molto piccolo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Log1P( 1e-6 );

```

### Logist

**Sintassi:** y = Logist( x )

**Descrizione:** Restituisce 1 / (1 + Exp( -x )), che converte un numero nel dominio -∞...+∞ nell&apos;intervallo 0...1. La funzione è utile nella regressione logisticaLogist().

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logist( 2 );

```

### Logist Percent

**Sintassi:** y = Logist Percent( x )

**Descrizione:** Logist funzione con risultato in scala da 0 a 100.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logist Percent( 10 );

```

### Logit

**Sintassi:** y = Logit( p )

**Descrizione:** Restituisce il logit di p, definito come log(p / (1 - p)).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logit( 0.95 );

```

### Logit Percent

**Sintassi:** y = Logit Percent( p )

**Descrizione:** Funzione Logit con argomento da 0 a 100, invece che da 0 a 1.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logit Percent( 95.0 );

```

### N Choose K

**Sintassi:** m = N Choose K( n, k )

**Descrizione:** Restituisce n! / (k! * (n - k)!), che è il numero di modi in cui si possono scegliere k elementi fra n elementi, senza tenere conto dell&apos;ordine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Choose K( 5, 3 );

```

### Power

**Sintassi:** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**Descrizione:** Restituisce x elevato alla potenza di y. Se x è negativo, y deve essere un numero intero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Power( 2, 5 );

```

### Root

**Sintassi:** y = Root( x, &lt;n=2&gt; )

**Descrizione:** Restituisce la radice n-esima di x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### SHASHInv

**Sintassi:** x = SHASHInv( z, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile normale standard in una variabile distribuita sinh-arcsinh (SHASH).

**JMP Versione aggiunta:** 14

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
x1 = SHASHInv( result1, gamma, delta, theta, sigma );
x2 = SinH( (ArcSinH( result1 ) - gamma) / delta ) * sigma + theta;
Show( x1, x2 );

```

### SHASHTrans

**Sintassi:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile con distribuzione sinh-arcsinh (SHASH) in una variabile con distribuzione normale standard. La trasformazione SHASH può essere utilizzata per creare dati con distribuzione più simile alla normale.

**JMP Versione aggiunta:** 14

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SbInv

**Sintassi:** x = SbInv( z, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile normale standard in una variabile di Johnson a doppio limite.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**Sintassi:** z = SbTrans( x, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile di Johnson a doppio limite in una variabile normale standard.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scheffe Cubic

**Sintassi:** y = Scheffe Cubic( x1, x2 )

**Descrizione:** Viene valutato come x1*x2*(x1-x2); utilizzato per supportare la notazione di modellizzazione con modelli cubici di miscele.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### SlInv

**Sintassi:** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Trasforma una variabile normale standard in una variabile SL di Johnson.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**Sintassi:** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**Descrizione:** Trasforma una variabile SL di Johnson in una variabile normale standard.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sqrt

**Sintassi:** y = Sqrt( x )

**Descrizione:** Restituisce la radice quadrata positiva dell&apos;argomento x, che può essere un numero, una matrice o un elenco di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Sqrt( 2 ), 4 );

```

### Squash

**Sintassi:** y = Squash( x )

**Descrizione:** Restituisce 1 / (1 + Exp( x )), che converte un numero nel dominio -∞...+∞ nel range 1...0. La funzione Squash() è utile nella regressione logistica.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Squash( 10 );

```

### Squish

**Sintassi:** y = Logist( x )

**Descrizione:** Restituisce 1 / (1 + Exp( -x )), che converte un numero nel dominio -∞...+∞ nell&apos;intervallo 0...1. La funzione è utile nella regressione logisticaLogist().

**JMP Versione aggiunta:** prima della versione 14

```jsl

Logist( 2 );

```

### SuInv

**Sintassi:** x = SuInv( z, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile normale standard in una variabile di Johnson senza limite.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SuInv( 1.96, 1.5, 2, 1, 2 );

```

### SuTrans

**Sintassi:** z = SuTrans( x, gamma, delta, theta, sigma )

**Descrizione:** Trasforma una variabile di Johnson senza limite in una variabile normale standard.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### Trigamma

**Sintassi:** y = Trigamma( x )

**Descrizione:** Restituisce la funzione trigamma valutata a x, dove la funzione trigamma è la derivata della funzione digamma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Trigamma( 5 );

```

