# Random



## Fonctions

### Col Shuffle

**Syntaxe :** y = Col Shuffle(<byVar, <Excluded( Row State() )>, ...>)

**Description :** Renvoie un nombre entier aléatoire entre 1 et le nombre de lignes de la table de données active. Lorsqu&apos;on l&apos;utilise dans une formule de colonne, Col Shuffle() crée un ordre aléatoire des numéros de lignes où chaque numéro de ligne apparaît une seule fois. L&apos;ordre est mis en cache en interne pour que des évaluations multiples soient efficaces.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );
dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle",
	Numeric,
	Continuous,
	Set Formula( Col Shuffle( :age ) )
);

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Shuffle for each Sex",
	Formula( Col Shuffle( :height, :sex ) )
);
dt << New Column( "Col Shuffle for each Sex grouped by Excluded",
	Formula( Col Shuffle( :height, :sex, Excluded( Row State() ) ) )
);

```

### Make KFold Formula

**Syntaxe :** y = Make KFold Formula( folds, Y Columns( cols ), <<Stratification Columns( cols ), <<Grouping Columns( cols ) )

**Description :** Génère une colonne de validation à folds niveaux si utilisée dans une formule de colonne. Cette fonction JSL est principalement utilisée par la plate-forme Créer une colonne de validation pour générer des colonnes de formule.

**JMP Version ajoutée :** 17

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "KFold Validation",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Stratified KFold",
	"Numeric",
	"Nominal",
	Formula(
		Make KFold Formula(
			4,
			<<Y Columns( :height ),
			<<Stratification Columns( :sex )
		)
	)
);

```

### Make Validation Formula

**Syntaxe :** y = Make Validation Formula( rates, <<Stratification Columns( cols ), <<Grouping Columns( cols ), <<Cutpoint Column ( col ), <<Cutpoint Batch ID( col ), <<Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), <<Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**Description :** Génère une colonne de validation à deux ou trois niveaux lorsqu&apos;elle est utilisée dans une formule de colonne. L&apos;argument rates est une matrice 3 par 1 contenant les proportions d&apos;apprentissage, de validation et de tests, respectivement. Cette fonction JSL est principalement utilisée par la plate-forme Créer une colonne de validation pour générer des colonnes de formule.

**JMP Version ajoutée :** 15

**Exemple 1**

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

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula(
		Make Validation Formula( [.6, .2, .2], <<Stratification Columns( :age ) )
	),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

**Exemple 3**

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

**Syntaxe :** y = Random Beta( alpha, beta, <theta=0>, <sigma=1> )

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution bêta.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Beta Binomial( n, p, <delta=0> )

**Description :** Renvoie un nombre aléatoire d’une distribution binomiale bêta pour n épreuves avec probabilité p et corrélation delta.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Binomial( n, p )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution binomiale avec n épreuves et une probabilité d&apos;évènement p.

**JMP Version ajoutée :** Avant la version 14

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
			exrbinfreq[exrbink + 1] = Sum( exrbinsamp <= exrbink ) /
			Round( exrbinsz )
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

**Syntaxe :** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**Description :** Renvoie une catégorie aléatoire compte tenu des paires de probabilités et des expressions résultat. Un nombre aléatoire de loi uniforme est généré et comparé aux arguments probabilité de sorte à déterminer quel argument résultat est renvoyé.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**Syntaxe :** y = Random Cauchy()

**Description :** Renvoie un nombre pseudo aléatoire extrait d&apos;une distribution de Cauchy ayant une médiane de 0.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random ChiSquare( df, <nonCentrality=0> )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution Khi-deux.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random ExGaussian( location, scale, shape)

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution ExGaussienne.

**JMP Version ajoutée :** 18

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

**Syntaxe :** y = Random Exp()

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution exponentielle de 0 à ∞. Identique à -Log(Random Uniform()).

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random F( dfnum, dfden, <nonCentrality=0> )

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution F.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Frechet( <mu=0>, <sigma=1> )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution de Fréchet.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random GLog( mu, sigma, lambda )

**Description :** Renvoie un nombre aléatoire d&apos;une distribution selon le logarithme généralisé.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Gamma( alpha, <scale=1> )

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution gamma.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Gamma Poisson( lambda, <sigma=1> )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution Gamma/Poisson avec les paramètres lambda et sigma.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random GenGamma( <mu=0>, <sigma=1>, <lambda=0> )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution gamma généralisée étendue avec les paramètres mu, sigma, et lambda.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Geometric( p )

**Description :** Renvoie un nombre aléatoire de non-événements jusqu’à ce qu’un événement survienne, pour les événements avec probabilité p.

**JMP Version ajoutée :** Avant la version 14

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
			exrgeofreq[exrgeok + 1] = Sum( exrgeosamp <= exrgeok ) /
			Round( exrgeosz )
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
		Text(
			{10, 0.2},
			" p=",
			Round( exrgeop, 2 ),
			" sample size=",
			Round( exrgeosz )
		);
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrgeolsz, exrgeoy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Index

**Syntaxe :** x = Random Index( n, k )

**Description :** Renvoie une matrice k par 1 d&apos;entiers aléatoires compris entre 1 et n sans répétitions.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Random Index( 100, 5 );

```

### Random Integer

**Syntaxe :** y = Random Integer( n ); Random Integer( k, n )

**Description :** Renvoie un entier aléatoire compris entre 1 et n (ou entre k et n), bornes inclues.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Johnson Sb( gamma, delta, theta, sigma )

**Description :** Renvoie un nombre pseudo aléatoire ectrait d&apos;une distribution du Sb de Johnson.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Johnson Sl( gamma, delta, theta, <sigma=1> )

**Description :** Renvoie un nombre pseudo aléatoire extrait d&apos;une distribution du Sl de Johnson.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Johnson Su( gamma, delta, theta, sigma )

**Description :** Renvoie un nombre pseudo aléatoire extrait d&apos;une distribution du Su de Johnson.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random LEV( <mu=0>, <sigma=1> )

**Description :** Renvoie un nombre aléatoire d’une distribution LEV.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random LogGenGamma( <mu=0>, <sigma=1>, <lambda=0> )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution log gamma généralisée avec les paramètres mu, sigma, et lambda.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Logistic( <mu=0>, <sigma=1> )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution logistique.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Loglogistic( <mu=0>, <sigma=1> )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution log-logistique.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Lognormal( <mu=0>, <sigma=1> )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution log-normale avec un paramètre de position mu et un paramètre d’échelle sigma.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Lognormal( -1, 1.5 );
//produce a vector of random numbers
v = J( 1, 10, Random Lognormal( -1, 1.5 ) );
//show results
Show( x, v );

```

**Exemple 2**

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

**Syntaxe :** y = Random Multivariate Normal( mean, covar, <nrows=1>)

**Description :** Renvoie une matrice aléatoire nrows en fonction de p à partir d&apos;une distribution normale multivariée avec un vecteur de moyenne mean et une matrice de covariance covar (semi-définie positive), où p est défini comme le nombre de lignes de covar.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
meanvec = 1 :: 3;
covar = [1 .6 .6, .6 1 .6, .6 .6 1];
randmvnRow = Random Multivariate Normal( meanvec, covar );
randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**Syntaxe :** y = Random Negative Binomial( r, p )

**Description :** Renvoie un nombre aléatoire de non-événements jusqu’à ce que r événements surviennent, pour les événements avec probabilité p.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Normal( <mu=0>, <sigma=1> )

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution normale de moyenne mu et d&apos;écart-type sigma.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Normal();
//produce a vector of random numbers
v = J( 1, 10, Random Normal() );
//show results
Show( x, v );

```

**Exemple 2**

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

**Syntaxe :** y = Random Normal Mixture( meanvec, sdvec, probvec )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution de mélange normal avec moyennes de groupe meanvec, écarts-types de groupe sdvec et probabilités de groupe probvec.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random Poisson( lambda )

**Description :** Renvoie un pseudo nombre aléatoire distribué Poisson.

**JMP Version ajoutée :** Avant la version 14

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
			exrpoifreq[exrpoik + 1] = Sum( exrpoisamp <= exrpoik ) /
			Round( exrpoisz )
		);
		exrpoitmp1 = 0;
		exrpoitmp2 = 0;
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line(
				exrpoik,
				exrpoik + 1,
				Poisson Distribution( exrpoilambda, exrpoik )
			);
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

**Syntaxe :** Random Reset( seed number )

**Description :** Relance les séquences aléatoires avec un nouveau germe.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Random Reset( 1 );
Random Normal();

```

### Random SEV

**Syntaxe :** y = Random SEV( <mu=0>, <sigma=1> )

**Description :** Renvoie un nombre aléatoire d’une distribution SEV.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random SHASH( gamma, delta, theta, sigma )

**Description :** Renvoie un nombre aléatoire à partir de la distribution sinh-arcsinh (SHASH).

**JMP Version ajoutée :** 14

**Exemple 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random SHASH( 0, 1, 0, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );
//show results
Show( x, v );

```

**Transformation SHASH**

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

### Random Seed State

**Syntaxe :** Random Seed State( <seed state> )

**Description :** Récupère ou restaure l&apos;état de la graine aléatoire vers ou à partir d&apos;un objet blob.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
r = Random Seed State();
Random Seed State( r );

```

### Random Shuffle

**Syntaxe :** y = Random Shuffle( matrix )

**Description :** Renvoie la matrice avec les éléments réorganisés en ordre aléatoire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
exA = [1 2 6, 3 5 8];
Random Shuffle( exA );

```

### Random Triangular

**Syntaxe :** y = Random Triangular( a, b, c );

y = Random Triangular( b, c );

y = Random Triangular( b )

**Description :** Renvoie un nombre aléatoire extrait d’une distribution triangulaire avec une limite inférieure a, le mode b, et une limite supérieure c. Random Triangular(b,c) équivaut à Random Triangular(0,b,c). Random Triangular(b) équivaut à Random Triangular(0,b,1).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Random Reset( 13579 );
x = Random Triangular( 0.8 );
Random Reset( 13579 );
y = Random Triangular( 0, 0.8, 1 );
Show( x, y );

```

### Random Uniform

**Syntaxe :** y = Random Uniform( <min>, <max> )

**Description :** Renvoie un pseudo nombre aléatoire extrait d&apos;une distribution uniforme entre min. et max., non inclus.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );

//produce a single random number
x = Random Uniform( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Uniform( 1, 10 ) );
//show results
Show( x, v );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Random Uniform( 1, 10 );

```

### Random Weibull

**Syntaxe :** y = Random Weibull( beta, <alpha=1> )

**Description :** Renvoie un nombre pseudo aléatoire extrait d&apos;une distribution de Weibull.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Random ZI Negative Binomial( lambda, sigma, pi )

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution binomiale négative avec un paramètre de position lambda, un paramètre d&apos;échelle sigma et un paramètre de Dirac en 0 pi.

**JMP Version ajoutée :** 19

**Exemple 1**

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

**Exemple 2**

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

**Syntaxe :** y = Random ZI Poisson Binomial( lambda, pi )

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution de Poisson comportant un Dirac en 0 avec un paramètre de position lambda et un paramètre de Dirac en 0 pi.

**JMP Version ajoutée :** 19

**Exemple 1**

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

**Exemple 2**

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

**Syntaxe :** y = Random t( df, <nonCentrality=0> )

**Description :** Renvoie un nombre aléatoire extrait d&apos;une distribution t.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** Resample Freq( <rate=1>, <column> )

**Description :** Génère un décompte de fréquence pour l&apos;échantillonnage avec remplacement, ce qui est utile pour les échantillons de bootstrap. Sans aucun argument, la fonction génère un rééchantillonnage à 100%. L’argument rate spécifie le taux du rééchantillonnage. Si l’argument column est spécifié, la taille d&apos;échantillon choisie est rate multipliée par la somme de la colonne spécifiée. Un rate négatif signale que les fréquences fractionnelles sont admises.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Freq", numeric, formula( Resample Freq() ) );
New Window( "w", theBox = V List Box() );
For( i = 1, i <= 30, i++,
	Column( "Freq" ) << EvalFormula;
	theBox << append(
		V List Box(
			Bivariate( Y( :height ), X( :weight ), Freq( :Freq ), Fit Line( 1 ) )
		)
	);
);
newDt = theBox["Parameter Estimates", Table Box( 1 )] << MakeCombinedDataTable;
newDt << Distribution( Y( :Estimate ), By( :Term ), Horizontal Layout( 1 ) );
theBox << CloseWindow;

```

