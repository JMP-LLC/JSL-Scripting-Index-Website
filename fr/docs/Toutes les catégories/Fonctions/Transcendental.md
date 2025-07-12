# Transcendental



## Fonctions

### Arrhenius

**Syntaxe :** y = Arrhenius( tempC )

**Description :** Renvoie la composante non spécifique de la relation d&apos;Arrhenius qui est ensuite multipliée par l&apos;énergie d&apos;activation dans l&apos;équation d&apos;Arrhenius. Renvoie 11604.5181215503 / (tempC + 273.15).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Arrhenius( 100 );

```

### Arrhenius Inv

**Syntaxe :** tempC = Arrhenius Inv( y )

**Description :** Renvoie l’inverse de la fonction d’Arrhenius, qui est (11604.5181215503 / y) - 273.15.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Arrhenius Inv( 100 );

```

### Beta

**Syntaxe :** z = Beta( x, y )

**Description :** Renvoie la fonction Bêta de x et y, définie comme Gamma( x ) * Gamma( y ) / Gamma( x + y ).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Beta( 5, 4 );

```

### Box Cox Inverse Transform

**Syntaxe :** x = Box Cox Inverse Transform( y, lambda )

**Description :** Renvoie la transformation inverse de Box-Cox de l&apos;argument.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**Syntaxe :** y = Box Cox Transform( x, lambda )

**Description :** Renvoie la transformation de Box-Cox de l&apos;argument.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
Box Cox Transform( 3, 2 );

```

### Cytometry Logicle

**Syntaxe :** y = Cytometry Logicle( x, T, W, M, A )

**Description :** Calcule la transformation cytométrique « Logicle » .

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**Syntaxe :** x = Cytometry Logicle Inverse( y, T, W, M, A )

**Description :** Calcule l&apos;inverse de la transformation cytométrique « Logicle » .

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Digamma

**Syntaxe :** y = Digamma( x )

**Description :** Renvoie la fonction digamma évaluée à x, où la fonction digamma est la dérivée du logarithme de la fonction gamma.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Digamma( 5 );

```

### Exp

**Syntaxe :** y = Exp( <x=1> )

**Description :** Renvoie e élevé à la puissance x. L’argument peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Round( Exp( 1 ), 5 );

```

### ExpM1

**Syntaxe :** y = ExpM1( x )

**Description :** Renvoie un calcul de Exp(x)-1 plus précis lorsque x est très petit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### FFT

**Syntaxe :** ret = FFT( L, <<inverse( 0 ), <<multivariate( 0 ), <<scale( 1.0 ) )

**Description :** Réalise la transformation de Fourier rapide (FFT) sur l&apos;argument L, une liste requise formée de parties réelles et imaginaires des données sous forme de matrices. Si L n&apos;est formé que d&apos;une seule matrice, la matrice est considérée comme la partie réelle. Si L est formé de deux matrices, la première est la partie réelle et la deuxième est la partie imaginaire. Les deux matrices doivent avoir les mêmes dimensions et doivent contenir plus d&apos;une ligne. Trois arguments facultatifs sont disponibles : l’argument inverse détermine si la FFT inverse doit être réalisée ; l’argument multivariate détermine si la FFT spatiale ou multivariée doit être réalisée ; l’argument scale détermine la constante par laquelle multiplier les valeurs calculées. La structure des valeurs retournées est identique à celle du premier argument d’entrée, une liste d’une ou de deux matrices.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
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
A = [1 3, 2 4, 3 1, 4 3, 4 5, 5 2, 5 7, 6 9, 7 5, 7 3, 2 7, 3 4, 6 7, 6 4, 2 7, 2 4,
2 6, 3 5, 3 6, 3 1];
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

**Syntaxe :** y = Factorial( x )

**Description :** Renvoie le factoriel de x, qui est le même que gamma Gamma( x + 1 ). Si x est un entier, le résultat est le produit 1 * 2 * ... * x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Factorial( 5 );

```

### Fit Transform To Normal

**Syntaxe :** result = Fit Transform To Normal( Distribution(name), Y(vector), <Freq(vector)> )

**Description :** Ajuste une transformation pour la normalité pour un vecteur de données. Ceci inclut les distributions de Johnson Sl, Johnson Sb, Johnson Su et GLog. La fonction renvoie une liste contenant l’estimation des coefficients, la matrice de covariance, la log-vraisemblance, l’AICc, le BIC et un message de convergence.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
datavec = [-3.7975076, 0.48221038, -1.3082712, -1.860647, -6.9470789, -17.237024,
-19.470857, -6.1855986, 2.16525629, -30.990061];
freqvec = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
As Table( datavec || freqvec );
Column( 1 ) << set name( "x" );
Column( 2 ) << set name( "freq vec" );
Distribution(
	Freq( :freq vec ),
	Continuous Distribution( Column( :x ), Fit Distribution( GLog ) )
);
results = Fit Transform To Normal(
	Distribution( "glog" ),
	Y( datavec ),
	freq( freqvec )
);
Show( results );

```

### Gamma

**Syntaxe :** y = Gamma( x, <limit> )

**Description :** Renvoie la fonction gamma de x, définie comme l&apos;intégrale de z^(x-1)*exp(-z) dz de 0 à ∞. Si la limite limit est présente, un gamma incomplet sera calculé avec cette limite d&apos;intégration.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Gamma( 5 );

```

### LGamma

**Syntaxe :** y = LGamma( x )

**Description :** Renvoie le logarithme naturel de la fonction gamma de x. Utile lorsque gamma(x) est trop grand pour être utilisé directement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
LGamma( 5 );

```

### Ln

**Syntaxe :** y = Ln( x )

**Description :** Renvoie le logarithme naturel de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Ln( Exp( 2 ) );

```

### Log

**Syntaxe :** y = Log( x, <b> )

**Description :** Renvoie le logarithme de base b de x ou le logarithme naturel de x sib n’est pas spécifié.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Log( 256, 2 );

```

### Log10

**Syntaxe :** y = Log10( x )

**Description :** Renvoie le logarithme de base 10 de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Log10( 100 );

```

### Log1P

**Syntaxe :** y = Log1P( x )

**Description :** Renvoie un calcul de Log(1 + x) plus précis lorsque x est très petit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Log1P( 1e-6 );

```

### Logist

**Syntaxe :** y = Logist( x )

**Description :** Renvoie 1 / (1 + Exp( -x )), qui convertit un nombre compris dans le domaine -∞...+∞ dans l&apos;intervalle 0...1. La fonction Logist() s&apos;avère utile dans la régression logistique.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Logist( 2 );

```

### Logist Percent

**Syntaxe :** y = Logist Percent( x )

**Description :** La fonction Logist renvoie un résultat compris entre 0 et 100.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Logist Percent( 10 );

```

### Logit

**Syntaxe :** y = Logit( p )

**Description :** Renvoie le logit de p, définit comme log(p / (1 - p)).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Logit( 0.95 );

```

### Logit Percent

**Syntaxe :** y = Logit Percent( p )

**Description :** La fonction Logit avec argument de 0 à 100, plutôt que de 0 à 1.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Logit Percent( 95.0 );

```

### N Choose K

**Syntaxe :** m = N Choose K( n, k )

**Description :** Renvoie n! / (k! * (n - k)!), qui est le nombre de façons de choisir k éléments parmi n, en ignorant l&apos;ordre.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
N Choose K( 5, 3 );

```

### Power

**Syntaxe :** z = x ^ y; z = Power( x, <y=2> )

**Description :** Renvoie x élevé à la puissance y. Si x est négatif, y doit être un entier.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Power( 2, 5 );

```

### Root

**Syntaxe :** y = Root( x, <n=2> )

**Description :** Renvoie la racine n-ième de x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### SHASHInv

**Syntaxe :** x = SHASHInv( z, gamma, delta, theta, sigma )

**Description :** Transforme une variable normale standard en une variable distribuée sinh-arcsinh (SHASH).

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
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

**Syntaxe :** z = SHASHTrans( x, gamma, delta, theta, sigma )

**Description :** Transforme une variable distribuée sinh-arcsinh (SHASH) en une variable distribuée normale standard. La transformation SHASH peut être utilisée pour créer des données plus normalement distribuées.

**JMP Version ajoutée :** 14

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

### SbInv

**Syntaxe :** x = SbInv( z, gamma, delta, theta, sigma )

**Description :** Transforme une variable normale standard en une variable de Johnson doublement bornée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**Syntaxe :** z = SbTrans( x, gamma, delta, theta, sigma )

**Description :** Transforme une variable de Johnson doublement bornée en une variable normale standard.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scheffe Cubic

**Syntaxe :** y = Scheffe Cubic( x1, x2 )

**Description :** Évalue comme x1*x2*(x1-x2) ; utilisé pour prendre en charge la notation de modélisation des modèles de mélange cubiques.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### SlInv

**Syntaxe :** x = SlInv( z, gamma, delta, theta, <sigma=1> )

**Description :** Transforme une variable normale standard en une variable SL de Johnson.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**Syntaxe :** z = SlTrans( x, gamma, delta, theta, <sigma=1> )

**Description :** Transforme une variable SL de Johnson en une variable normale standard.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sqrt

**Syntaxe :** y = Sqrt( x )

**Description :** Renvoie la racine carrée positive de l’argument x, qui peut être un nombre, une matrice ou une liste de nombres.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Round( Sqrt( 2 ), 4 );

```

### Squash

**Syntaxe :** y = Squash( x )

**Description :** Renvoie 1 / (1 + Exp( x )), qui convertit un nombre dans le domaine -∞, +∞ en un nombre dans l&apos;intervalle 1..0. La fonction Squash() est utile dans la régression logistique.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Squash( 10 );

```

### Squish

**Syntaxe :** y = Logist( x )

**Description :** Renvoie 1 / (1 + Exp( -x )), qui convertit un nombre compris dans le domaine -∞...+∞ dans l&apos;intervalle 0...1. La fonction Logist() s&apos;avère utile dans la régression logistique.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Logist( 2 );

```

### SuInv

**Syntaxe :** x = SuInv( z, gamma, delta, theta, sigma )

**Description :** Transforme une variable normale standard en une variable de Johnson non bornée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
SuInv( 1.96, 1.5, 2, 1, 2 );

```

### SuTrans

**Syntaxe :** z = SuTrans( x, gamma, delta, theta, sigma )

**Description :** Transforme une variable de Johnson non bornée en une variable normale standard.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### Trigamma

**Syntaxe :** y = Trigamma( x )

**Description :** Renvoie la fonction trigamma évaluée à x, où la fonction trigamma est la dérivée de la fonction digamma.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Trigamma( 5 );

```

