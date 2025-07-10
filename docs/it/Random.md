# Random



### Col Shuffle

**Sintassi:** y = Col Shuffle(<byVar, <Excluded( Row State() )>, ...>)

**Descrizione:** Restituisce un numero intero casuale compreso tra 1 e il numero di righe della tabella di dati corrente. Se usato in una formula della colonna, Col Shuffle() crea un ordinamento casuale dei numeri di riga con ogni numero di riga che appare una sola volta. Tale ordinamento viene memorizzato nella cache interna, in modo che le valutazioni multiple siano efficienti.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );
dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle", Numeric, Continuous, Set Formula( Col Shuffle( :age ) ) );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Shuffle for each Sex", Formula( Col Shuffle( :height, :sex ) ) );
dt << New Column( "Col Shuffle for each Sex grouped by Excluded",
	Formula( Col Shuffle( :height, :sex, Excluded( Row State() ) ) )
);

```

### Make KFold Formula

**Sintassi:** y = Make KFold Formula( folds, Y Columns( cols ), <<Stratification Columns( cols ), <<Grouping Columns( cols ) )

**Descrizione:** Genera una colonna di validazione con folds livelli se utilizzato in una formula della colonna. Questa funzione JSL è utilizzata principalmente dalla piattaforma Crea colonna di validazione per generare colonne con formule.

**JMP Versione aggiunta:** 17

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "KFold Validation",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) )
);

```

**Esempio 2**

```js

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

**Sintassi:** y = Make Validation Formula( rates, <<Stratification Columns( cols ), <<Grouping Columns( cols ), <<Cutpoint Column ( col ), <<Cutpoint Batch ID( col ), <<Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), <<Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**Descrizione:** Genera una colonna di validazione a due o tre livelli se utilizzato in una formula della colonna. L&apos;argomento rates è una matrice 3 per 1 che contiene rispettivamente i tassi di training, validazione e test. Questa funzione JSL è utilizzata principalmente dalla piattaforma Crea colonna di validazione per generare colonne con formule.

**JMP Versione aggiunta:** 15

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .4, 0] ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation"} )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .2, .2], <<Stratification Columns( :age ) ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

**Esempio 3**

```js

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

**Sintassi:** y = Random Beta( alpha, beta, <theta=0>, <sigma=1> )

**Descrizione:** Restituisce un numero casuale da una distribuzione beta.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Beta( 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta( 1, 1 ) );
//show results
Show( x, v );

```

### Random Beta Binomial

**Sintassi:** y = Random Beta Binomial( n, p, <delta=0> )

**Descrizione:** Restituisce un numero casuale da una distribuzione beta-binomiale per n prove con probabilità p e correlazione delta.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Beta Binomial( 14, .5, .2 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta Binomial( 14, .5, .2 ) );
//show results
Show( x, v );

```

### Random Binomial

**Sintassi:** y = Random Binomial( n, p )

**Descrizione:** Restituisce un numero casuale da una distribuzione binomiale con n prove e probabilità di eventi p.

**JMP Versione aggiunta:** prima della versione 14

```js

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

**Sintassi:** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**Descrizione:** Restituisce una categoria casuale specificate coppie di probabilità ed espressioni del risultato. Viene generato un numero uniforme casuale e confrontato con gli argomenti di probabilità per determinare quale argomento del risultato viene restituito.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**Sintassi:** y = Random Cauchy()

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione di Cauchy con una mediana di zero.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Cauchy();
//produce a vector of random numbers
v = J( 1, 10, Random Cauchy() );
//show results
Show( x, v );

```

### Random ChiSquare

**Sintassi:** y = Random ChiSquare( df, <nonCentrality=0> )

**Descrizione:** Restituisce un numero casuale da una distribuzione Chi-Square.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random ChiSquare( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random ChiSquare( 2 ) );
//show results
Show( x, v );

```

### Random ExGaussian

**Sintassi:** y = Random ExGaussian( location, scale, shape)

**Descrizione:** Restituisce un numero casuale da una distribuzione ex gaussiana.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );

//produce a single random number
x = Random ExGaussian( 0, .5, .25 );
//produce a vector of random numbers
v = J( 1, 10, Random ExGaussian( 0, .5, .25 ) );
//show results
Show( x, v );

```

### Random Exp

**Sintassi:** y = Random Exp()

**Descrizione:** Restituisce un numero casuale da una distribuzione esponenziale.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Exp();
//produce a vector of random numbers
v = J( 1, 10, Random Exp() );
//show results
Show( x, v );

```

### Random F

**Sintassi:** y = Random F( dfnum, dfden, <nonCentrality=0> )

**Descrizione:** Restituisce un numero casuale da una distribuzione F.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random F( 2, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random F( 2, 2 ) );
//show results
Show( x, v );

```

### Random Frechet

**Sintassi:** y = Random Frechet( <mu=0>, <sigma=1> )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione di Fréchet.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Frechet( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random Frechet( 10, 5 ) );
//show results
Show( x, v );

```

### Random GLog

**Sintassi:** y = Random GLog( mu, sigma, lambda )

**Descrizione:** Restituisce un numero casuale a partire da un distribuzione logaritmica generalizzata.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random GLog( 4, 1, 0.1 );
//produce a vector of random numbers
v = J( 1, 10, Random GLog( 4, 1, 0.1 ) );
//show results
Show( x, v );

```

### Random Gamma

**Sintassi:** y = Random Gamma( alpha, <scale=1> )

**Descrizione:** Restituisce un numero casuale da una distribuzione gamma.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Gamma( 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma( 1 ) );
//show results
Show( x, v );

```

### Random Gamma Poisson

**Sintassi:** y = Random Gamma Poisson( lambda, <sigma=1> )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione gamma di Poisson con parametri lambda e sigma.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Gamma Poisson( 3, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma Poisson( 3, 2 ) );
//show results
Show( x, v );

```

### Random GenGamma

**Sintassi:** y = Random GenGamma( <mu=0>, <sigma=1>, <lambda=0> )

**Descrizione:** Restituisce un numero casuale da una distribuzione gamma generalizzata estesa con i parametri mu, sigma e lambda.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random GenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random GenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Geometric

**Sintassi:** y = Random Geometric( p )

**Descrizione:** Restituisce un numero casuale di non eventi fino a quando si verifica un evento, per eventi con probabilità p.

**JMP Versione aggiunta:** prima della versione 14

```js

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

**Sintassi:** x = Random Index( n, k )

**Descrizione:** Restituisce una matrice k per 1 di numeri interi casuali tra 1 e n senza valori duplicati.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Random Index( 100, 5 );

```

### Random Integer

**Sintassi:** y = Random Integer( n ); Random Integer( k, n )

**Descrizione:** Restituisce un numero intero casuale tra 1 e n (o tra k e n) compresi.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Integer( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Integer( 1, 10 ) );
//show results
Show( x, v );

```

### Random Johnson Sb

**Sintassi:** y = Random Johnson Sb( gamma, delta, theta, sigma )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione Sb di Johnson.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Johnson Sb( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sb( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Sl

**Sintassi:** y = Random Johnson Sl( gamma, delta, theta, <sigma=1> )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione Sl di Johnson.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Johnson Sl( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sl( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Su

**Sintassi:** y = Random Johnson Su( gamma, delta, theta, sigma )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione Su di Johnson.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Johnson Su( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Su( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random LEV

**Sintassi:** y = Random LEV( <mu=0>, <sigma=1> )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione LEV.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random LEV( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random LEV( 10, 5 ) );
//show results
Show( x, v );

```

### Random LogGenGamma

**Sintassi:** y = Random LogGenGamma( <mu=0>, <sigma=1>, <lambda=0> )

**Descrizione:** Restituisce un numero casuale da una distribuzione log gamma generalizzata con i parametri mu, sigma e lambda.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random LogGenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random LogGenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Logistic

**Sintassi:** y = Random Logistic( <mu=0>, <sigma=1> )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione logistica.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Logistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Logistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Loglogistic

**Sintassi:** y = Random Loglogistic( <mu=0>, <sigma=1> )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione log-logistica.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Loglogistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Loglogistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Lognormal

**Sintassi:** y = Random Lognormal( <mu=0>, <sigma=1> )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione lognormale, con parametro di posizione mu e parametro di scala sigma.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Lognormal( -1, 1.5 );
//produce a vector of random numbers
v = J( 1, 10, Random Lognormal( -1, 1.5 ) );
//show results
Show( x, v );

```

**Esempio 2**

```js

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

**Sintassi:** y = Random Multivariate Normal( mean, covar, <nrows=1>)

**Descrizione:** Restituisce una matrice casuale nrows per p da una distribuzione normale multivariata con vettore medio mean e matrice di covarianza (positiva semi-definita) covar, dove p è definito come il numero di righe di covar.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
meanvec = 1 :: 3;
covar = [1 .6 .6, .6 1 .6, .6 .6 1];
randmvnRow = Random Multivariate Normal( meanvec, covar );
randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**Sintassi:** y = Random Negative Binomial( r, p )

**Descrizione:** Restituisce un numero casuale di non eventi fino a quando si verificano r eventi, per eventi con probabilità p.

**JMP Versione aggiunta:** prima della versione 14

```js

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

**Sintassi:** y = Random Normal( <mu=0>, <sigma=1> )

**Descrizione:** Restituisce un numero casuale da una distribuzione normale con media mu e deviazione standard sigma.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Normal();
//produce a vector of random numbers
v = J( 1, 10, Random Normal() );
//show results
Show( x, v );

```

**Esempio 2**

```js

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

**Sintassi:** y = Random Normal Mixture( meanvec, sdvec, probvec )

**Descrizione:** Restituisce un numero casuale da una distribuzione normale della miscela con medie di gruppo meanvec, deviazioni standard di gruppo sdvec e probabilità di gruppo probvec.

**JMP Versione aggiunta:** prima della versione 14

```js

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

**Sintassi:** y = Random Poisson( lambda )

**Descrizione:** Restituisce un numero casuale da una distribuzione di Poisson.

**JMP Versione aggiunta:** prima della versione 14

```js

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

**Sintassi:** Random Reset( seed number )

**Descrizione:** Riavvia le sequenze casuali con un nuovo seme.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Random Reset( 1 );
Random Normal();

```

### Random SEV

**Sintassi:** y = Random SEV( <mu=0>, <sigma=1> )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione SEV.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random SEV( 50, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random SEV( 50, 5 ) );
//show results
Show( x, v );

```

### Random SHASH

**Sintassi:** y = Random SHASH( gamma, delta, theta, sigma )

**Descrizione:** Restituisce un numero casuale dalla distribuzione sinh-arcsinh (SHASH).

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );

//produce a single random number
x = Random SHASH( 0, 1, 0, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );
//show results
Show( x, v );

```

**Trasformazione SHASH**

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

### Random Seed State

**Sintassi:** Random Seed State( <seed state> )

**Descrizione:** Recupera o ripristina lo stato di seme casuale, da o in un oggetto blob.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
r = Random Seed State();
Random Seed State( r );

```

### Random Shuffle

**Sintassi:** y = Random Shuffle( matrix )

**Descrizione:** Restituisce la matrice con gli elementi mescolati in ordine casuale.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
exA = [1 2 6, 3 5 8];
Random Shuffle( exA );

```

### Random Triangular

**Sintassi:** y = Random Triangular( a, b, c );

y = Random Triangular( b, c );

y = Random Triangular( b )

**Descrizione:** Restituisce un numero casuale da una distribuzione triangolare con limite inferiore a, moda b e limite superiore c. Random Triangular(b,c) è equivalente a Random Triangular(0,b,c). Random Triangular(b) è equivalente a Random Triangular(0,b,1).

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );
Random Reset( 13579 );
x = Random Triangular( 0.8 );
Random Reset( 13579 );
y = Random Triangular( 0, 0.8, 1 );
Show( x, y );

```

### Random Uniform

**Sintassi:** y = Random Uniform( <min>, <max> )

**Descrizione:** Restituisce un numero casuale da una distribuzione uniforme tra min e max, esclusivamente.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Uniform( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Uniform( 1, 10 ) );
//show results
Show( x, v );

```

**Esempio 2**

```js

Names Default To Here( 1 );
Random Uniform( 1, 10 );

```

### Random Weibull

**Sintassi:** y = Random Weibull( beta, <alpha=1> )

**Descrizione:** Restituisce un numero casuale a partire da una distribuzione di Weibull.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random Weibull( 3, 20 );
//produce a vector of random numbers
v = J( 1, 10, Random Weibull( 3, 20 ) );
//show results
Show( x, v );

```

### Random ZI Negative Binomial

**Sintassi:** y = Random ZI Negative Binomial( lambda, sigma, pi )

**Descrizione:** Restituisce un numero casuale da una distribuzione binomiale negativa con inflazione di zeri con il parametro di posizione lambda, il parametro di scala sigma e il parametro di inflazione di zeri pi.

**JMP Versione aggiunta:** 19

**Esempio 1**

```js

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

**Esempio 2**

```js

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

**Sintassi:** y = Random ZI Poisson Binomial( lambda, pi )

**Descrizione:** Restituisce un numero casuale da una distribuzione di Poisson con inflazione di zeri con il parametro di posizione lambda e il parametro di inflazione di zeri pi.

**JMP Versione aggiunta:** 19

**Esempio 1**

```js

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

**Esempio 2**

```js

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

**Sintassi:** y = Random t( df, <nonCentrality=0> )

**Descrizione:** Restituisce un numero casuale da una distribuzione T.

**JMP Versione aggiunta:** prima della versione 14

```js

Names Default To Here( 1 );

//produce a single random number
x = Random t( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random t( 2 ) );
//show results
Show( x, v );

```

### Resample Freq

**Sintassi:** Resample Freq( <rate=1>, <column> )

**Descrizione:** Genera un conteggio di frequenza per il campionamento con sostituzione, utile per campioni bootstrap. Senza argomenti, la funzione genera un ricampionamento del 100%. L&apos;argomento rate specifica il tasso di ricampionamento. Se è specificato l&apos;argomento column, la dimensione campionaria scelta è rate moltiplicato per la somma della colonna specificata. Un valore negativo rate segnala che le frequenze frazionarie non sono consentite.

**JMP Versione aggiunta:** prima della versione 14

```js

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

