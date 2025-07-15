# Transcendental



### Arrhenius

**Syntax:** y = Arrhenius( tempC )

**Beschreibung:** Gibt die nichtspezifische Komponente der Arrhenius-Beziehung zurück, die dann mit der Aktivierungsenergie in der Arrhenius-Gleichung multipliziert wird. Gibt 11604.5181215503 / (tempC + 273.15) zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Arrhenius( 100 );

```

### Arrhenius Inv

**Syntax:** tempC = Arrhenius Inv( y )

**Beschreibung:** Gibt die inverse Arrhenius-Funktion zurück, d.h.: (11604.5181215503 / y) - 273.15.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Arrhenius Inv( 100 );

```

### Beta

**Syntax:** z = Beta( x, y )

**Beschreibung:** Gibt die Beta-Funktion von x und y zurück, definiert als Gamma( x ) * Gamma( y ) / Gamma( x + y ).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Beta( 5, 4 );

```

### Box Cox Inverse Transform

**Syntax:** x = Box Cox Inverse Transform( y, lambda )

**Beschreibung:** Gibt die inverse Box-Cox-Transformation des Arguments zurück.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**Syntax:** y = Box Cox Transform( x, lambda )

**Beschreibung:** Gibt die Box-Cox-Transformation des Arguments zurück.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
Box Cox Transform( 3, 2 );

```

### Cytometry Logicle

**Syntax:** y = Cytometry Logicle( x, T, W, M, A )

**Beschreibung:** Zytometrie-Logicle-Transformation berechnen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**Syntax:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**Beschreibung:** Inverse Zytometrie-Logicle-Transformation berechnen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Digamma

**Syntax:** y = Digamma( x )

**Beschreibung:** Gibt die in x ausgewertete Digamma-Funktion zurück, wobei die Digamma-Funktion die Ableitung des Logarithmus der Gammafunktion ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Digamma( 5 );

```

### Exp

**Syntax:** y = Exp( &lt;x=1&gt; )

**Beschreibung:** Gibt e hoch x zurück. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( Exp( 1 ), 5 );

```

### ExpM1

**Syntax:** y = ExpM1( x )

**Beschreibung:** Gibt eine Berechnung von Exp(x)-1 mit größerer Genauigkeit zurück, wenn x sehr klein ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### FFT

**Syntax:** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**Beschreibung:** Führt eine Fast Fourier Transformation (FFT) auf dem Argument L durch, eine erforderliche Liste bestehend aus Real- und Imaginärteilen der Daten in Form einer Matrix. Wenn L aus nur einer Matrix besteht, wird die Matrix als Realteil betrachtet. Wenn L aus zwei Matrizen besteht, ist die erste Matrix der Realteil und die zweite ist der Imaginärteil. Die zwei Matrizen müssen dieselben Dimensionen und mehr als eine Zeile haben. Es gibt drei optionale Argumente. Das Argument inverse legt fest, ob eine inverse FFT durchgeführt werden soll. Das Argument multivariate legt fest, ob eine räumliche oder multivariate FFT durchgeführt werden soll. Das Argument scale legt die Konstante fest, mit der die Rückgabewerte multipliziert werden sollen. Der Rückgabewert ist eine Liste aus zwei Matrizen mit den gleichen Dimensionen wie das erste eingegebene Argument.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Factorial( x )

**Beschreibung:** Gibt die Fakultät von x zurück, d. h. Gamma( x + 1 ). Wenn x eine ganze Zahl ist, ist das Ergebnis das Produkt 1 * 2 * ... * x.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Factorial( 5 );

```

### Fit Transform To Normal

**Syntax:** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**Beschreibung:** Passt eine Normaltransformation an einen Datenvektor an. Dies umfasst die Verteilungen Johnson Sl, Johnson Sb, Johnson Su und GLog. Die Funktion gibt eine Liste zurück mit Parameterschätzwerten, Kovarianzmatrix, Log-Likelihood, AIC und einer Konvergenzmeldung.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
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

**Syntax:** y = Gamma( x, &lt;limit&gt; )

**Beschreibung:** Gibt die Gamma-Funktion von x zurück, definiert als Integral von z^(x-1)*exp(-z) dz, von 0 bis ∞. Wenn limit angegeben ist, wird der Wert der unvollständigen Gamma-Funktion mit dieser Integrationsgrenze berechnet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Gamma( 5 );

```

### LGamma

**Syntax:** y = LGamma( x )

**Beschreibung:** Gibt den natürlichen Logarithmus der Gamma-Funktion von x zurück. Nützlich, wenn Gamma(x) für die direkte Verwendung zu groß ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
LGamma( 5 );

```

### Ln

**Syntax:** y = Ln( x )

**Beschreibung:** Gibt den natürlichen Logarithmus von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Ln( Exp( 2 ) );

```

### Log

**Syntax:** y = Log( x, &lt;b&gt; )

**Beschreibung:** Gibt den Logarithmus zur Basis b von x oder den natürlichen Logarithmus von x zurück, wenn b nicht angegeben ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Log( 256, 2 );

```

### Log10

**Syntax:** y = Log10( x )

**Beschreibung:** Gibt den Logarithmus zur Basis 10 von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Log10( 100 );

```

### Log1P

**Syntax:** y = Log1P( x )

**Beschreibung:** Gibt eine Berechnung von Log(1 + x) mit größerer Genauigkeit zurück, wenn x sehr klein ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Log1P( 1e-6 );

```

### Logist

**Syntax:** y = Logist( x )

**Beschreibung:** Gibt 1 / (1 + Exp( -x )) zurück und konvertiert eine Zahl im Bereich -∞ bis +∞ in den Bereich 0 bis 1. Die Funktion Logist() ist nützlich bei logistischer Regression.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Logist( 2 );

```

### Logist Percent

**Syntax:** y = Logist Percent( x )

**Beschreibung:** Logist-Funktion mit Ergebnis skaliert 0 bis 100.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Logist Percent( 10 );

```

### Logit

**Syntax:** y = Logit( p )

**Beschreibung:** Gibt den Logit-Wert von p zurück, der definiert ist als log(p / (1 - p)).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Logit( 0.95 );

```

### Logit Percent

**Syntax:** y = Logit Percent( p )

**Beschreibung:** Logit-Funktion mit Argument 0 bis 100, statt 0 bis 1.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Logit Percent( 95.0 );

```

### N Choose K

**Syntax:** m = N Choose K( n, k )

**Beschreibung:** Gibt n! / (k! * (n - k)!), die Anzahl von Möglichkeiten, k Elemente aus n Elementen auszuwählen, ohne Berücksichtigung der Reihenfolge.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
N Choose K( 5, 3 );

```

### Power

**Syntax:** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**Beschreibung:** Gibt x hoch y zurück. Wenn x negativ ist, muss y eine ganze Zahl sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Power( 2, 5 );

```

### Root

**Syntax:** y = Root( x, &lt;n=2&gt; )

**Beschreibung:** Gibt die n-te Wurzel von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### SHASHInv

**Syntax:** x = SHASHInv( z, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine standardnormalverteilte Variable in eine SHASH-verteilte (sinh-arcsinh) Variable.

**JMP Version hinzugefügt:** 14

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

**Syntax:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine SHASH-verteilte (sinh-arcsinh) Variable in eine standardnormalverteilte Variable. Die SHASH-Transformation kann verwendet werden, um Daten zu erzeugen, die eher einer Normalverteilung folgen.

**JMP Version hinzugefügt:** 14

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

**Syntax:** x = SbInv( z, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine standardnormalverteilte Variable in eine beschränkte Johnson-Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**Syntax:** z = SbTrans( x, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine beschränkte Johnson-Variable in eine standardnormalverteilte Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scheffe Cubic

**Syntax:** y = Scheffe Cubic( x1, x2 )

**Beschreibung:** Wird ausgewertet als x1*x2*(x1-x2). Zur Unterstützung der Notation bei kubischen Mischungsmodellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### SlInv

**Syntax:** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**Beschreibung:** Transformiert eine standardnormalverteilte Variable in eine Johnson-SL-verteilte Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**Syntax:** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**Beschreibung:** Transformiert eine Johnson-SL-verteilte Variable in eine standardnormalverteilte Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sqrt

**Syntax:** y = Sqrt( x )

**Beschreibung:** Gibt die positive Quadratwurzel von x zurück. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( Sqrt( 2 ), 4 );

```

### Squash

**Syntax:** y = Squash( x )

**Beschreibung:** Gibt 1 / (1 + Exp( x )) zurück und konvertiert eine Zahl im Bereich -∞ bis +∞ in den Bereich 1 bis 0. Die Funktion Squash() ist nützlich bei logistischer Regression.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Squash( 10 );

```

### Squish

**Syntax:** y = Logist( x )

**Beschreibung:** Gibt 1 / (1 + Exp( -x )) zurück und konvertiert eine Zahl im Bereich -∞ bis +∞ in den Bereich 0 bis 1. Die Funktion Logist() ist nützlich bei logistischer Regression.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Logist( 2 );

```

### SuInv

**Syntax:** x = SuInv( z, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine standardnormalverteilte Variable in eine unbeschränkte Johnson-Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
SuInv( 1.96, 1.5, 2, 1, 2 );

```

### SuTrans

**Syntax:** z = SuTrans( x, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine unbeschränkte Johnson-Variable in eine standardnormalverteilte Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### Trigamma

**Syntax:** y = Trigamma( x )

**Beschreibung:** Gibt die in x ausgewertete Trigamma-Funktion zurück, wobei die Trigamma-Funktion die Ableitung der Digamma-Funktion ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Trigamma( 5 );

```

