# Transcendental



### Arrhenius

**Sintaxis:** y = Arrhenius( tempC )

**Descripción:** Devuelve el componente no específico de la relación de Arrhenius que, a continuación, se multiplica por la energía de activación en la ecuación de Arrhenius. Devuelve 11604.5181215503 / (tempC + 273.15).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Arrhenius( 100 );

```

### Arrhenius Inv

**Sintaxis:** tempC = Arrhenius Inv( y )

**Descripción:** Devuelve la inversa de la función de Arrhenius, que es (11604.5181215503 / y) - 273.15.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Arrhenius Inv( 100 );

```

### Beta

**Sintaxis:** z = Beta( x, y )

**Descripción:** Devuelve la función Beta de x y y, definida como Gamma( x ) * Gamma( y ) / Gamma( x + y ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Beta( 5, 4 );

```

### Box Cox Inverse Transform

**Sintaxis:** x = Box Cox Inverse Transform( y, lambda )

**Descripción:** Devuelve la transformación Box-Cox inversa del argumento.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**Sintaxis:** y = Box Cox Transform( x, lambda )

**Descripción:** Devuelve la transformación Box-Cox del argumento.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
Box Cox Transform( 3, 2 );

```

### Cytometry Logicle

**Sintaxis:** y = Cytometry Logicle( x, T, W, M, A )

**Descripción:** Calcula la transformación de citometría biexponencial.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**Sintaxis:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**Descripción:** Calcula la transformación de citometría biexponencial inversa.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Digamma

**Sintaxis:** y = Digamma( x )

**Descripción:** Devuelve la función digamma evaluada en el punto x, donde la función digamma es la derivada del logaritmo de la función gamma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Digamma( 5 );

```

### Exp

**Sintaxis:** y = Exp( &lt;x=1&gt; )

**Descripción:** Devuelve e elevado a la potencia x. El argumento puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Round( Exp( 1 ), 5 );

```

### ExpM1

**Sintaxis:** y = ExpM1( x )

**Descripción:** Devuelve un cálculo más exacto de Exp(x)-1 cuando x es muy pequeño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### FFT

**Sintaxis:** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**Descripción:** Realiza una transformada rápida de Fourier (FFT) del argumento L, una lista obligatoria de las partes real e imaginaria de los datos en forma matricial. Si L consiste en solo una matriz, se considera que la matriz es la parte real. Si L consiste en dos matrices, la primera es la parte real y la segunda la imaginaria. Las dos matrices deben tener las mismas dimensiones y contener más de una fila. Hay tres argumentos opcionales. El argumento inverse determina si se debe realizar la FFT inversa. El argumento multivariate determina si se debe realizar FFT espacial o multivariante. El argumento scale determina la constante por la cual se deben multiplicar los valores resultantes. El valor devuelto es una lista de dos matrices con las mismas dimensiones que el primer argumento introducido.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Factorial( x )

**Descripción:** Devuelve el factorial de x, que es lo mismo que Gamma( x + 1 ). Si x es un entero, el resultado es el producto 1 * 2 * ... * x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Factorial( 5 );

```

### Fit Transform To Normal

**Sintaxis:** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**Descripción:** Ajusta una transformación de datos vectoriales a la normalidad. Esto incluye las distribuciones Johnson Sl, Johnson Sb, Johnson Su y Logaritmo generalizado. La función devuelve una lista que contiene las estimaciones de los parámetros, la matriz de covarianza, la log-verisimilitud, AICc, un mensaje de convergencia y los valores transformados.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Gamma( x, &lt;limit&gt; )

**Descripción:** Devuelve la función Gamma de x, definida como la integral de z^(x-1)*exp(-z) dz de 0 a ∞. Si el argumento limit está presente, se calcula una Gamma incompleta usando ese límite de integración.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Gamma( 5 );

```

### LGamma

**Sintaxis:** y = LGamma( x )

**Descripción:** Devuelve el logaritmo natural de la función Gamma de x. Resulta útil cuando Gamma(x) es demasiado grande como para usarlo directamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
LGamma( 5 );

```

### Ln

**Sintaxis:** y = Ln( x )

**Descripción:** Devuelve el logaritmo natural de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Ln( Exp( 2 ) );

```

### Log

**Sintaxis:** y = Log( x, &lt;b&gt; )

**Descripción:** Devuelve el logaritmo en base b de x o el logaritmo natural de x si no se especifica b.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Log( 256, 2 );

```

### Log10

**Sintaxis:** y = Log10( x )

**Descripción:** Devuelve el logaritmo en base 10 de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Log10( 100 );

```

### Log1P

**Sintaxis:** y = Log1P( x )

**Descripción:** Devuelve un cálculo más exacto de Log(1 + x) cuando x es muy pequeño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Log1P( 1e-6 );

```

### Logist

**Sintaxis:** y = Logist( x )

**Descripción:** Devuelve 1 / (1 + Exp( -x )), que convierte un número en el dominio -∞...+∞ dentro del intervalo 0...1. La función Logist() es útil en regresión logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Logist( 2 );

```

### Logist Percent

**Sintaxis:** y = Logist Percent( x )

**Descripción:** Función Logist con el resultado escalado de 0 a 100.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Logist Percent( 10 );

```

### Logit

**Sintaxis:** y = Logit( p )

**Descripción:** Devuelve el logit de p, que se define como log(p / (1 - p)).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Logit( 0.95 );

```

### Logit Percent

**Sintaxis:** y = Logit Percent( p )

**Descripción:** Función Logit con el argumento de 0 a 100 en lugar de 0 a 1.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Logit Percent( 95.0 );

```

### N Choose K

**Sintaxis:** m = N Choose K( n, k )

**Descripción:** Devuelve n! / (k! * (n - k)!), que es el número de formas en que se pueden seleccionar k elementos de n, ignorando el orden.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
N Choose K( 5, 3 );

```

### Power

**Sintaxis:** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**Descripción:** Devuelve x elevado a la potencia y. Si x es un valor negativo, y debe ser entero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Power( 2, 5 );

```

### Root

**Sintaxis:** y = Root( x, &lt;n=2&gt; )

**Descripción:** Devuelve la raíz n-ésima de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### SHASHInv

**Sintaxis:** x = SHASHInv( z, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable normal estándar en una variable con distribución sinh-arcsinh (SHASH).

**JMP Versión agregada:** 14

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

**Sintaxis:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable con distribución sinh-arcsinh (SHASH) en una variable con una distribución normal estándar. La transformación SHASH se puede utilizar para crear datos con una distribución más normal.

**JMP Versión agregada:** 14

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

**Sintaxis:** x = SbInv( z, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable normal estándar en una variable Johnson restringida a un intervalo con dos límites.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**Sintaxis:** z = SbTrans( x, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable Johnson restringida a un intervalo con dos límites en una variable normal estándar.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scheffe Cubic

**Sintaxis:** y = Scheffe Cubic( x1, x2 )

**Descripción:** Evalúa como x1*x2*(x1-x2). Se utiliza para emplear la notación de modelización en modelos de mezcla cúbicos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### SlInv

**Sintaxis:** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**Descripción:** Transforma una variable normal estándar en una variable Johnson SL.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**Sintaxis:** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**Descripción:** Transforma una variable Johnson SL en una variable normal estándar.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sqrt

**Sintaxis:** y = Sqrt( x )

**Descripción:** Devuelve la raíz cuadrada positiva del argumento x, que puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Round( Sqrt( 2 ), 4 );

```

### Squash

**Sintaxis:** y = Squash( x )

**Descripción:** Devuelve 1 / (1 + Exp( x )), que convierte un número en el dominio -∞...+∞ dentro del intervalo 1...0. La función Squash() es útil en regresión logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Squash( 10 );

```

### Squish

**Sintaxis:** y = Logist( x )

**Descripción:** Devuelve 1 / (1 + Exp( -x )), que convierte un número en el dominio -∞...+∞ dentro del intervalo 0...1. La función Logist() es útil en regresión logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Logist( 2 );

```

### SuInv

**Sintaxis:** x = SuInv( z, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable normal estándar en una variable Johnson sin límites.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
SuInv( 1.96, 1.5, 2, 1, 2 );

```

### SuTrans

**Sintaxis:** z = SuTrans( x, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable Johnson sin límites en una variable normal estándar.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### Trigamma

**Sintaxis:** y = Trigamma( x )

**Descripción:** Devuelve la función trigamma evaluada en el punto x, donde la función trigamma es la derivada de la función digamma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Trigamma( 5 );

```

