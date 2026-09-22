# Random



### Col Shuffle

**Sintaxis:** y = Col Shuffle(&lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;)

**Descripción:** Devuelve un entero aleatorio entre 1 y el número de filas de la tabla de datos actual. Cuando se utiliza en una fórmula de columna, Col Shuffle() crea un orden aleatorio de números de fila, y cada número de fila aparece una sola vez. El orden se almacena en la memoria caché interna de modo que las múltiples evaluaciones son eficientes.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Shuffle", Numeric, Continuous, Set Formula( Col Shuffle( :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Shuffle for each Sex", Formula( Col Shuffle( :height, :sex ) ) );dt << New Column( "Col Shuffle for each Sex grouped by Excluded",	Formula( Col Shuffle( :height, :sex, Excluded( Row State() ) ) ));

```

### Make KFold Formula

**Sintaxis:** y = Make KFold Formula( folds, Y Columns( cols ), &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ) )

**Descripción:** Genera una columna de validación con niveles de folds cuando se utiliza en una fórmula de columna. Esta función JSL la utiliza principalmente la plataforma Crear columna de validación para generar columnas de fórmulas.

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "KFold Validation",	"Numeric",	"Nominal",	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Stratified KFold",	"Numeric",	"Nominal",	Formula(		Make KFold Formula( 4, <<Y Columns( :height ), <<Stratification Columns( :sex ) )	));

```

### Make Validation Formula

**Sintaxis:** y = Make Validation Formula( rates, &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ), &lt;&lt;Cutpoint Column ( col ), &lt;&lt;Cutpoint Batch ID( col ), &lt;&lt;Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), &lt;&lt;Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**Descripción:** Genera una columna de validación de dos o tres niveles cuando se utiliza en una fórmula de columna. El argumento rates es una matriz 3 por 1 que contiene las tasas de entrenamiento, validación y pruebas, respectivamente. Esta función JSL la utiliza principalmente la plataforma Crear columna de validación para generar columnas de fórmulas.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Validation",	"Numeric",	"Nominal",	Formula( Make Validation Formula( [.6, .4, 0] ) ),	Set Property( "Value Labels", {0 = "Training", 1 = "Validation"} ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Validation",	"Numeric",	"Nominal",	Formula( Make Validation Formula( [.6, .2, .2], <<Stratification Columns( :age ) ) ),	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} ));

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "Validation",	"Numeric",	"Nominal",	Formula(		Make Validation Formula(			[20, 10, 4],			<<Cutpoint Column( :Week of Year ),			<<Cutpoint Batch ID( :ID ),			<<Determine cutpoints using( "Numbers of Rows" )		)	),	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} ));

```

### Polytope Uniform Random

**Sintaxis:** points = Random Linearly Constrained Uniform( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt;, &lt;tol=1e-8&gt;, &lt;G&gt;, &lt;LC&gt;, &lt;UC&gt; )

**Descripción:** Genera una muestra aleatoria sujeta a restricciones lineales, restricciones de límites variables y restricciones de cardinalidad en variables de subgrupos de componentes especificados. El argumento numSamples especifica el número de puntos aleatorios que se generarán. El argumento A es la matriz de coeficientes de restricción lineal. El argumento b es el vector de valores del lado derecho de las restricciones lineales. Los argumentos L y U son vectores de los límites inferior y superior de las variables, respectivamente. Los argumentos neq, nle y nge son el número de restricciones de igualdad, el número de restricciones menores o iguales y el número de restricciones mayores o iguales, respectivamente. El argumento nwarm es el número de repeticiones previas antes de que los puntos se escriban en la matriz de salida. El argumento nstride es el número de repeticiones entre cada punto que se escribe en la matriz de salida. El argumento tol es la tolerancia. El argumento G es un vector de índices que asigna las variables a subgrupos de componentes restringidos, donde los valores faltantes o nulos no pertenecen a un subgrupo restringido. Los argumentos LC y UC son las restricciones de cardinalidad inferior y superior para los subgrupos de componentes restringidos, respectivamente. Tenga en cuenta que las restricciones se deben indicar primero como igualdad, luego como menor o igual y, por último, como mayor o igual.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

A = [1 1 1, 1 2 0];b = [1, 0.5];L = [0, 0, 0.1];U = [1, 1, 1];points = Random Linearly Constrained Uniform( 2000, A, b, L, U, 1, 0, 1, 300, 50 );dt = As Table( points );tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );tfr = tobj[scalebox( 1 )] << clone box;New Window( "Example: Random Linearly Constrained Uniform",	Outline Box( "Points on a Ternary Plot", tfr ),	Outline Box( "Constraints",		Text Box( "X1 + x2 + x3 = 1" ),		Text Box( "X2 + 2*x2 >= 0.5" )	),	Outline Box( "Variable Bounds",		Text Box( "0 <= x1 <= 1" ),		Text Box( "0 <= x2 <= 1" ),		Text Box( ".1 < x3 <= 1" )	));Close( dt, no save );Show( "see new window for example output" );

```

**Ejemplo 2**

```jsl

A = [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1];b = [100];L = [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0];U = [100 100 95 90 100 85 100 90 60 70 75 70 75 100 95 60 80 95 100 100];nwarm = 100;nstride = 100;tol = 1e-8;// Index the constrained subgroups.  Index = 0 is not in a constrained subgroup.G = [0 0 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 0 0];// Lower cardinality constraints for the constrained subgroupsLC = [1 1];// Upper cardinality constraints for the constrained subgroupsUC = [3 5];points = Random Linearly Constrained Uniform(	100,	A,	b,	L,	U,	1,	0,	0,	nwarm,	nstride,	tol,	G,	LC,	UC);dt = As Table( points );

```

### Random Beta

**Sintaxis:** y = Random Beta( alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución beta.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Beta( 1, 1 );//produce a vector of random numbersv = J( 1, 10, Random Beta( 1, 1 ) );//show resultsShow( x, v );

```

### Random Beta Binomial

**Sintaxis:** y = Random Beta Binomial( n, p, &lt;delta=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución beta binomial para n pruebas con probabilidad p y correlación delta.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Beta Binomial( 14, .5, .2 );//produce a vector of random numbersv = J( 1, 10, Random Beta Binomial( 14, .5, .2 ) );//show resultsShow( x, v );

```

### Random Binomial

**Sintaxis:** y = Random Binomial( n, p )

**Descripción:** Devuelve un número aleatorio de una distribución binomial con n pruebas y una probabilidad de sucesos p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exrbinp = 0.5;exrbinn = 40;exrbinlsz = Log( 1000 );New Window( "Example: Random Binomial and Empirical Distribution",	exrbiny = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( 0, 40 ),		Pen Color( "red" ),		Pen Size( 2 );		exrbinsz = Round( Exp( exrbinlsz ) );		exrbinsamp = J( Round( exrbinsz ), 1, . );		exrbinfreq = J( Round( exrbinn + 1 ), 1, . );		For( exrbink = 1, exrbink <= Round( exrbinsz ), exrbink++,			exrbinsamp[exrbink] = Random Binomial( exrbinn, exrbinp )		);		For( exrbink = 0, exrbink <= Round( exrbinn ), exrbink++,			exrbinfreq[exrbink + 1] = Sum( exrbinsamp <= exrbink ) / Round( exrbinsz )		);		For( exrbink = 0, exrbink < Round( exrbinn ), exrbink++,			H Line(				exrbink,				exrbink + 1,				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink )			);			V Line(				exrbink + 1,				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink ),				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink + 1 )			);		);		Pen Color( "blue" );		For( exrbink = 1, exrbink <= Round( exrbinn ), exrbink++,			H Line( exrbink - 1, exrbink, exrbinfreq[exrbink] );			V Line( exrbink, exrbinfreq[exrbink], exrbinfreq[exrbink + 1] );		);		Text(			{0.5, 0.9},			"n=",			Round( exrbinn ),			" p=",			Round( exrbinp, 2 ),			" size=",			Round( exrbinsz )		);	),	H List Box(		Slider Box( Log( 10 ), Log( 5000 ), exrbinlsz, exrbiny << reshow ),		Text Box( " random sample size" )	));

```

### Random Category

**Sintaxis:** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**Descripción:** Devuelve los pares de probabilidad dados de una categoría aleatoria y las expresiones de resultado. Se genera un número uniforme aleatorio y se compara con los argumentos de probabilidad para determinar qué argumento de resultado se devuelve.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**Sintaxis:** y = Random Cauchy()

**Descripción:** Devuelve un número aleatorio de una distribución de Cauchy con mediana cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Cauchy();//produce a vector of random numbersv = J( 1, 10, Random Cauchy() );//show resultsShow( x, v );

```

### Random ChiSquare

**Sintaxis:** y = Random ChiSquare( df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución Ji cuadrado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random ChiSquare( 2 );//produce a vector of random numbersv = J( 1, 10, Random ChiSquare( 2 ) );//show resultsShow( x, v );

```

### Random ExGaussian

**Sintaxis:** y = Random ExGaussian( location, scale, shape)

**Descripción:** Devuelve un número aleatorio de una distribución exgaussiana.

**JMP Versión agregada:** 18

```jsl

//produce a single random numberx = Random ExGaussian( 0, .5, .25 );//produce a vector of random numbersv = J( 1, 10, Random ExGaussian( 0, .5, .25 ) );//show resultsShow( x, v );

```

### Random Exp

**Sintaxis:** y = Random Exp()

**Descripción:** Devuelve un número aleatorio de una distribución exponencial.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Exp();//produce a vector of random numbersv = J( 1, 10, Random Exp() );//show resultsShow( x, v );

```

### Random F

**Sintaxis:** y = Random F( dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución F.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random F( 2, 2 );//produce a vector of random numbersv = J( 1, 10, Random F( 2, 2 ) );//show resultsShow( x, v );

```

### Random Frechet

**Sintaxis:** y = Random Frechet( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución Fréchet.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Frechet( 10, 5 );//produce a vector of random numbersv = J( 1, 10, Random Frechet( 10, 5 ) );//show resultsShow( x, v );

```

### Random GLog

**Sintaxis:** y = Random GLog( mu, sigma, lambda )

**Descripción:** Devuelve un número aleatorio de una distribución logarítmica generalizada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random GLog( 4, 1, 0.1 );//produce a vector of random numbersv = J( 1, 10, Random GLog( 4, 1, 0.1 ) );//show resultsShow( x, v );

```

### Random Gamma

**Sintaxis:** y = Random Gamma( alpha, &lt;scale=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución gamma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Gamma( 1 );//produce a vector of random numbersv = J( 1, 10, Random Gamma( 1 ) );//show resultsShow( x, v );

```

### Random Gamma Poisson

**Sintaxis:** y = Random Gamma Poisson( lambda, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución gamma Poisson con parámetros lambda y sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Gamma Poisson( 3, 2 );//produce a vector of random numbersv = J( 1, 10, Random Gamma Poisson( 3, 2 ) );//show resultsShow( x, v );

```

### Random GenGamma

**Sintaxis:** y = Random GenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución gamma generalizada extendida con parámetros mu, sigma y lambda.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random GenGamma( 2, 1.25 );//produce a vector of random numbersv = J( 1, 10, Random GenGamma( 2, 1.25 ) );//show resultsShow( x, v );

```

### Random Geometric

**Sintaxis:** y = Random Geometric( p )

**Descripción:** Devuelve un número aleatorio de no eventos hasta que suceda un evento, para eventos con probabilidad p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exrgeop = 0.1;exrgeolsz = Log( 300 );New Window( "Example: Random Geometric and Empirical Distribution",	exrgeoy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 50 ),		Pen Color( "red" ),		Pen Size( 1 );		exrgeosz = Round( Exp( exrgeolsz ) );		exrgeosamp = J( Round( exrgeosz ), 1, . );		exrgeofreq = J( Round( 50 + 1 ), 1, . );		For( exrgeok = 1, exrgeok <= Round( exrgeosz ), exrgeok++,			exrgeosamp[exrgeok] = Random Geometric( exrgeop )		);		For( exrgeok = 0, exrgeok <= 50, exrgeok++,			exrgeofreq[exrgeok + 1] = Sum( exrgeosamp <= exrgeok ) / Round( exrgeosz )		);		exrgeotmp1 = 0;		exrgeotmp2 = 0;		For( exrgeok = 0, exrgeok < 50, exrgeok++,			exrgeotmp2 = exrgeotmp2 + (1 - exrgeop) ^ exrgeok * exrgeop;			H Line( exrgeok, exrgeok + 1, exrgeotmp2 );			V Line( exrgeok, exrgeotmp1, exrgeotmp2 );			exrgeotmp1 = exrgeotmp2;		);		Pen Color( "blue" );		For( exrgeok = 0, exrgeok < 50, exrgeok++,			H Line( exrgeok, exrgeok + 1, exrgeofreq[exrgeok + 1] );			V Line( exrgeok + 1, exrgeofreq[exrgeok + 1], exrgeofreq[exrgeok + 2] );		);		Text( {10, 0.2}, " p=", Round( exrgeop, 2 ), " sample size=", Round( exrgeosz ) );	),	H List Box(		Slider Box( Log( 10 ), Log( 5000 ), exrgeolsz, exrgeoy << reshow ),		Text Box( " random sample size" )	));

```

### Random Index

**Sintaxis:** x = Random Index( n, k )

**Descripción:** Devuelve una matriz k por 1 con enteros aleatorios entre 1 y n y sin duplicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Random Index( 100, 5 );

```

### Random Integer

**Sintaxis:** y = Random Integer( n ); Random Integer( k, n )

**Descripción:** Devuelve un entero aleatorio entre 1 y n (o entre k y n) inclusive.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Integer( 1, 10 );//produce a vector of random numbersv = J( 1, 10, Random Integer( 1, 10 ) );//show resultsShow( x, v );

```

### Random Johnson Sb

**Sintaxis:** y = Random Johnson Sb( gamma, delta, theta, sigma )

**Descripción:** Devuelve un número aleatorio de una distribución Johnson Sb.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Johnson Sb( 0.5, 1, 1, 1 );//produce a vector of random numbersv = J( 1, 10, Random Johnson Sb( 0.5, 1, 1, 1 ) );//show resultsShow( x, v );

```

### Random Johnson Sl

**Sintaxis:** y = Random Johnson Sl( gamma, delta, theta, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución Johnson Sl.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Johnson Sl( 0.5, 1, 1, 1 );//produce a vector of random numbersv = J( 1, 10, Random Johnson Sl( 0.5, 1, 1, 1 ) );//show resultsShow( x, v );

```

### Random Johnson Su

**Sintaxis:** y = Random Johnson Su( gamma, delta, theta, sigma )

**Descripción:** Devuelve un número aleatorio de una distribución Johnson Su.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Johnson Su( 0.5, 1, 1, 1 );//produce a vector of random numbersv = J( 1, 10, Random Johnson Su( 0.5, 1, 1, 1 ) );//show resultsShow( x, v );

```

### Random LEV

**Sintaxis:** y = Random LEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución LEV.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random LEV( 10, 5 );//produce a vector of random numbersv = J( 1, 10, Random LEV( 10, 5 ) );//show resultsShow( x, v );

```

### Random Linearly Constrained Uniform

**Sintaxis:** points = Random Linearly Constrained Uniform( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt;, &lt;tol=1e-8&gt;, &lt;G&gt;, &lt;LC&gt;, &lt;UC&gt; )

**Descripción:** Genera una muestra aleatoria sujeta a restricciones lineales, restricciones de límites variables y restricciones de cardinalidad en variables de subgrupos de componentes especificados. El argumento numSamples especifica el número de puntos aleatorios que se generarán. El argumento A es la matriz de coeficientes de restricción lineal. El argumento b es el vector de valores del lado derecho de las restricciones lineales. Los argumentos L y U son vectores de los límites inferior y superior de las variables, respectivamente. Los argumentos neq, nle y nge son el número de restricciones de igualdad, el número de restricciones menores o iguales y el número de restricciones mayores o iguales, respectivamente. El argumento nwarm es el número de repeticiones previas antes de que los puntos se escriban en la matriz de salida. El argumento nstride es el número de repeticiones entre cada punto que se escribe en la matriz de salida. El argumento tol es la tolerancia. El argumento G es un vector de índices que asigna las variables a subgrupos de componentes restringidos, donde los valores faltantes o nulos no pertenecen a un subgrupo restringido. Los argumentos LC y UC son las restricciones de cardinalidad inferior y superior para los subgrupos de componentes restringidos, respectivamente. Tenga en cuenta que las restricciones se deben indicar primero como igualdad, luego como menor o igual y, por último, como mayor o igual.

**JMP Versión agregada:** 20

**Ejemplo 1**

```jsl

A = [1 1 1, 1 2 0];b = [1, 0.5];L = [0, 0, 0.1];U = [1, 1, 1];points = Random Linearly Constrained Uniform( 2000, A, b, L, U, 1, 0, 1, 300, 50 );dt = As Table( points );tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );tfr = tobj[scalebox( 1 )] << clone box;New Window( "Example: Random Linearly Constrained Uniform",	Outline Box( "Points on a Ternary Plot", tfr ),	Outline Box( "Constraints",		Text Box( "X1 + x2 + x3 = 1" ),		Text Box( "X2 + 2*x2 >= 0.5" )	),	Outline Box( "Variable Bounds",		Text Box( "0 <= x1 <= 1" ),		Text Box( "0 <= x2 <= 1" ),		Text Box( ".1 < x3 <= 1" )	));Close( dt, no save );Show( "see new window for example output" );

```

**Ejemplo 2**

```jsl

  A = [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1];b = [100];L = [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0];U = [100 100 95 90 100 85 100 90 60 70 75 70 75 100 95 60 80 95 100 100];nwarm = 100;nstride = 100;tol = 1e-8;// Index the constrained subgroups.  Index = 0 is not in a constrained subgroup.G = [0 0 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 0 0];// Lower cardinality constraints for the constrained subgroupsLC = [1 1];// Upper cardinality constraints for the constrained subgroupsUC = [3 5];points = Random Linearly Constrained Uniform(	100,	A,	b,	L,	U,	1,	0,	0,	nwarm,	nstride,	tol,	G,	LC,	UC);dt = As Table( points );

```

### Random LogGenGamma

**Sintaxis:** y = Random LogGenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución de log-gamma generalizada con parámetros mu, sigma y lambda.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random LogGenGamma( 2, 1.25 );//produce a vector of random numbersv = J( 1, 10, Random LogGenGamma( 2, 1.25 ) );//show resultsShow( x, v );

```

### Random Logistic

**Sintaxis:** y = Random Logistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Logistic( 15, 1 );//produce a vector of random numbersv = J( 1, 10, Random Logistic( 15, 1 ) );//show resultsShow( x, v );

```

### Random Loglogistic

**Sintaxis:** y = Random Loglogistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución log-logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Loglogistic( 15, 1 );//produce a vector of random numbersv = J( 1, 10, Random Loglogistic( 15, 1 ) );//show resultsShow( x, v );

```

### Random Lognormal

**Sintaxis:** y = Random Lognormal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución log-normal con parámetro de localización mu y parámetro de escala sigma.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

//produce a single random numberx = Random Lognormal( -1, 1.5 );//produce a vector of random numbersv = J( 1, 10, Random Lognormal( -1, 1.5 ) );//show resultsShow( x, v );

```

**Ejemplo 2**

```jsl

exrlnn = 30;New Window( "Example: Random Lognormal and Empirical Distribution",	exrlny = Graph Box(		Y Scale( -0.05, 1.05 ),		X Scale( -.05, 10 ),		Pen Color( "red" );		exranlnorm = J( Round( exrlnn ), 1, . );		For( k = 1, k <= Round( exrlnn ), k++,			exranlnorm[k] = Random Lognormal( -1, 1.5 )		);		exranlnorm = Sort Ascending( exranlnorm );		H Line( 0, exranlnorm[1], 0 );		For( k = 2, k <= Round( exrlnn ), k++,			H Line( exranlnorm[k - 1], exranlnorm[k], (k - 1) / Round( exrlnn ) )		);		H Line( exranlnorm[Round( exrlnn )], 10, 1.0 );		Pen Color( "blue" );		Y Function( Normal Distribution( Log( tdeq ), -1, 1.5 ), tdeq );		Text( {-4, 0.8}, " n=", Round( exrlnn ) );	),	H List Box( Slider Box( 10, 2000, exrlnn, exrlny << reshow ), Text Box( " n" ) ));

```

### Random Multivariate Normal

**Sintaxis:** y = Random Multivariate Normal( mean, covar, &lt;nrows=1&gt;)

**Descripción:** Devuelve un matriz nrows por p aleatoria a partir de una distribución normal multivariante con vector de medias mean y matriz de covarianza (semidefinida positiva) covar, donde p se define como el número de filas de covar.

**JMP Versión agregada:** 15

```jsl

meanvec = 1 :: 3;covar = [1 .6 .6, .6 1 .6, .6 .6 1];randmvnRow = Random Multivariate Normal( meanvec, covar );randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**Sintaxis:** y = Random Negative Binomial( r, p )

**Descripción:** Devuelve un número aleatorio de no eventos hasta que sucedan r eventos, para eventos con probabilidad p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exnbpp = 0.3;exnbpn = 20;exnbrn = Random Negative Binomial( 20, 0.3 );New Window( "Example: Neg Binomial Probability",	exnbpy = Graph Box(		Y Scale( 0, 0.04 ),		X Scale( -1, 100 ),		Pen Color( "red" ),		Pen Size( 2 );		For( exnbpk = 0, exnbpk < 1000, exnbpk++,			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )		);		Pen Color( "blue" );,		Pen Size( 4 ),		V Line( exnbrn, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbrn ) );		Text( {1, 0.035}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );		Text(			{1, 0.030},			"x=",			Round( exnbrn, 2 ),			" Prob=",			Round( Neg Binomial Probability( exnbpp, exnbpn, exnbrn ), 2 )		);	),	H List Box(		Button Box( "Generate a Random Negative Binomial Number",			exnbrn = Random Negative Binomial( 20, 0.3 );			exnbpy << reshow;		)	));

```

### Random Normal

**Sintaxis:** y = Random Normal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución normal con media mu y desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

//produce a single random numberx = Random Normal();//produce a vector of random numbersv = J( 1, 10, Random Normal() );//show resultsShow( x, v );

```

**Ejemplo 2**

```jsl

exGcoordX = J( 50, 1, . );exGcoordY = J( 50, 1, . );For( k = 1, k <= 50, k++,	exGcoordX[k] = Random Uniform( -5, 5 ));For( k = 1, k <= 50, k++,	exGcoordY[k] = exGcoordX[k] + Random Normal());New Window( "Random Normal, Linear Regression, and Outlier",	V List Box(		Graph Box(			framesize( 600, 300 ),			X Scale( -10, 10 ),			Y Scale( 1.5 * Min( exGcoordY ), 1.5 * Max( exGcoordY ) ),			double buffer,			exsx = Sum( exGcoordX ),			exsy = Sum( exGcoordY ),			exsxx = Sum( (exGcoordX) ^ 2 );			exsxy = Sum( exGcoordX :* exGcoordY );			exbeta1 = (100 * exsxy - exsx * exsy) / (100 * exsxx - exsx * exsx);			exbeta0 = (exsy - exbeta1 * exsx) / 100;			exx1 = Min( exGcoordX );			exy1 = exbeta0 + exbeta1 * Min( exGcoordX );			exx2 = Max( exGcoordX );			exy2 = exbeta0 + exbeta1 * Max( exGcoordX );			Line( {exx1, exy1}, {exx2, exy2} );			Marker Size( 5 );			Drag Marker( exGcoordX, exGcoordY );			Drag Text( [-7], [-5], "drag any marker" );		)	));

```

### Random Normal Mixture

**Sintaxis:** y = Random Normal Mixture( meanvec, sdvec, probvec )

**Descripción:** Devuelve un número aleatorio de una mezcla de distribuciones normales con medias de grupo meanvec, desviaciones estándar de grupo sdvec  y probabilidades de grupo probvec.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = New Table( "Example",	New Column( "Rand NM",		set formula( Random Normal Mixture( [-3, 3], [1, 1], [.3, .7] ) )	));dt << add rows( 1000 );Distribution( Continuous Distribution( Column( :Rand NM ), Vertical( 0 ) ) );

```

### Random Poisson

**Sintaxis:** y = Random Poisson( lambda )

**Descripción:** Devuelve un número aleatorio de una distribución Poisson.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exrpoilambda = 20;exrpoilsz = Log( 300 );New Window( "Example: Random Poisson and Empirical Distribution",	exrpoiy = Graph Box(		Y Scale( 0, 1.05 ),		X Scale( -1, 50 ),		Pen Color( "red" ),		Pen Size( 1 );		exrpoisz = Round( Exp( exrpoilsz ) );		exrpoisamp = J( Round( exrpoisz ), 1, . );		exrpoifreq = J( Round( 50 + 1 ), 1, . );		For( exrpoik = 1, exrpoik <= Round( exrpoisz ), exrpoik++,			exrpoisamp[exrpoik] = Random Poisson( exrpoilambda )		);		For( exrpoik = 0, exrpoik <= 50, exrpoik++,			exrpoifreq[exrpoik + 1] = Sum( exrpoisamp <= exrpoik ) / Round( exrpoisz )		);		exrpoitmp1 = 0;		exrpoitmp2 = 0;		For( exrpoik = 0, exrpoik < 50, exrpoik++,			H Line( exrpoik, exrpoik + 1, Poisson Distribution( exrpoilambda, exrpoik ) );			V Line(				exrpoik + 1,				Poisson Distribution( exrpoilambda, exrpoik ),				Poisson Distribution( exrpoilambda, exrpoik + 1 )			);		);		Pen Color( "blue" );		For( exrpoik = 0, exrpoik < 50, exrpoik++,			H Line( exrpoik, exrpoik + 1, exrpoifreq[exrpoik + 1] );			V Line( exrpoik + 1, exrpoifreq[exrpoik + 1], exrpoifreq[exrpoik + 2] );		);		Text(			{10, 0.2},			" \!U03BB=",			Round( exrpoilambda, 2 ),			" sample size=",			Round( exrpoisz )		);	),	H List Box(		Slider Box( Log( 10 ), Log( 5000 ), exrpoilsz, exrpoiy << reshow ),		Text Box( " random sample size" )	));

```

### Random Reset

**Sintaxis:** Random Reset( seed number )

**Descripción:** Reinicia las secuencias aleatorias con una nueva semilla.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Random Reset( 1 );Random Normal();

```

### Random SEV

**Sintaxis:** y = Random SEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución SEV.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random SEV( 50, 5 );//produce a vector of random numbersv = J( 1, 10, Random SEV( 50, 5 ) );//show resultsShow( x, v );

```

### Random SHASH

**Sintaxis:** y = Random SHASH( gamma, delta, theta, sigma )

**Descripción:** Devuelve un número aleatorio de la distribución sinh-arcsinh (SHASH).

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

//produce a single random numberx = Random SHASH( 0, 1, 0, 1 );//produce a vector of random numbersv = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );//show resultsShow( x, v );

```

#### Transformación SHASH

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );Show( result1, result2 );

```

### Random Seed State

**Sintaxis:** Random Seed State( &lt;seed state&gt; )

**Descripción:** Recupera o restaura el estado de semilla aleatoria, hacia o desde un objeto blob.

**JMP Versión agregada:** Antes de la versión 14

```jsl

r = Random Seed State();Random Seed State( r );

```

### Random Shuffle

**Sintaxis:** y = Random Shuffle( matrix )

**Descripción:** Devuelve la matriz con los elementos reordenados aleatoriamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exA = [1 2 6, 3 5 8];Random Shuffle( exA );

```

### Random Triangular

**Sintaxis:** y = Random Triangular( a, b, c ); y = Random Triangular( b, c ); y = Random Triangular( b )

**Descripción:** Devuelve un número aleatorio de una distribución triangular con límite inferior a, modo b y límite superior c. Random Triangular(b,c) equivale a Random Triangular(0,b,c). Random Triangular(b) equivale a Random Triangular(0,b,1).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Random Reset( 13579 );x = Random Triangular( 0.8 );Random Reset( 13579 );y = Random Triangular( 0, 0.8, 1 );Show( x, y );

```

### Random Uniform

**Sintaxis:** y = Random Uniform( &lt;min&gt;, &lt;max&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución uniforme entre min y max, exclusive.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

//produce a single random numberx = Random Uniform( 1, 10 );//produce a vector of random numbersv = J( 1, 10, Random Uniform( 1, 10 ) );//show resultsShow( x, v );

```

**Ejemplo 2**

```jsl

Random Uniform( 1, 10 );

```

### Random Weibull

**Sintaxis:** y = Random Weibull( beta, &lt;alpha=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución Weibull.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random Weibull( 3, 20 );//produce a vector of random numbersv = J( 1, 10, Random Weibull( 3, 20 ) );//show resultsShow( x, v );

```

### Random ZI Negative Binomial

**Sintaxis:** y = Random ZI Negative Binomial( lambda, sigma, pi )

**Descripción:** Devuelve un número aleatorio de una distribución binomial negativa con inflación de ceros junto con el parámetro de ubicación lambda, el parámetro de escala sigma y el parámetro de inflación de ceros pi.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

exnbpp = 0.3;exnbpn = 20;rnb = Random ZI Negative Binomial( 25, .5, .05 );New Window( "Example: Zero Inflated Negative Binomial",	exnbpy = Graph Box(		Y Scale( 0, 0.075 ),		X Scale( -1, 100 ),		Pen Color( "red" ),		Pen Size( 2 );		For( i = 0, i < 100, i++,			V Line( i, 0, ZI Negative Binomial Probability( i, 25, .5, .05 ) )		);		Pen Color( "blue" );,		Pen Size( 4 ),		V Line( rnb, 0, ZI Negative Binomial Probability( rnb, 25, .5, .05 ) );		Text(			{25, 0.06},			"lambda=",			Round( 25 ),			", sigma=",			Round( .5, 2 ),			", pi=",			Round( .05, 2 )		);		Text(			{25, 0.05},			"x=",			Round( rnb, 2 ),			", Prob=",			Round( ZI Negative Binomial Probability( rnb, 25, .5, .05 ), 4 )		);	),	H List Box(		Button Box( "Generate a Random Zero Inflated Negative Binomial Number",			rnb = Random ZI Negative Binomial( 25, .5, .05 );			exnbpy << reshow;		)	));

```

**Ejemplo 2**

```jsl

Random Reset( 19 );dt = As Table( J( 1000, 1, Random ZI Negative Binomial( 5, 2, .2 ) ) );Column( 1 ) << set name( "Random ZiNB" );dt << Distribution(	Continuous Distribution(		Column( :Random ZiNB ),		Vertical( 0 ),		Fit ZI Negative Binomial,		CDF Plot( 1 )	));

```

### Random ZI Poisson

**Sintaxis:** y = Random ZI Poisson Binomial( lambda, pi )

**Descripción:** Devuelve un número aleatorio de una distribución Poisson con inflación de ceros junto con el parámetro de ubicación lambda y el parámetro con inflación de ceros pi.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

exnbpp = 0.3;exnbpn = 20;rp = Random ZI Poisson( 20, .05 );New Window( "Example: Zero Inflated Poisson",	exnbpy = Graph Box(		Y Scale( 0, 0.1 ),		X Scale( -1, 60 ),		Pen Color( "red" ),		Pen Size( 2 );		For( i = 0, i < 100, i++,			V Line( i, 0, ZI Poisson Probability( i, 20, .05 ) )		);		Pen Color( "blue" );,		Pen Size( 4 ),		V Line( rp, 0, ZI Poisson Probability( rp, 20, .05 ) );		Text( {30, 0.06}, "lambda=", Round( 20 ), ", pi=", Round( .05, 2 ) );		Text(			{30, 0.05},			"x=",			Round( rp, 2 ),			", Prob=",			Round( ZI Poisson Probability( rp, 20, .05 ), 4 )		);	),	H List Box(		Button Box( "Generate a Random Zero Inflated Poisson Number",			rp = Random ZI Poisson( 20, .05 );			exnbpy << reshow;		)	));

```

**Ejemplo 2**

```jsl

Random Reset( 19 );dt = As Table( J( 1000, 1, Random ZI Poisson( 5, .2 ) ) );Column( 1 ) << set name( "Random ZIP" );dt << Distribution(	Continuous Distribution(		Column( :Random ZIP ),		Vertical( 0 ),		Fit ZI Poisson,		CDF Plot( 1 )	));

```

### Random t

**Sintaxis:** y = Random t( df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución t.

**JMP Versión agregada:** Antes de la versión 14

```jsl

//produce a single random numberx = Random t( 2 );//produce a vector of random numbersv = J( 1, 10, Random t( 2 ) );//show resultsShow( x, v );

```

### Resample Freq

**Sintaxis:** Resample Freq( &lt;rate=1&gt;, &lt;column&gt; )

**Descripción:** Genera un conteo de frecuencia para muestreo con reemplazo, útil para muestras bootstrap. Si no se indica ningún argumento, la función genera un remuestreo del 100%. El argumento rate especifica la tasa de remuestreo. Si se especifica el argumento column, el tamaño muestral elegido es rate multiplicado por la suma de la columna especificada. Una rate negativa indica que se permiten las frecuencias fraccionales.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Freq", numeric, formula( Resample Freq() ) );New Window( "w", theBox = V List Box() );For( i = 1, i <= 30, i++,	Column( "Freq" ) << EvalFormula;	theBox << append(		V List Box( Bivariate( Y( :height ), X( :weight ), Freq( :Freq ), Fit Line( 1 ) ) )	););newDt = theBox["Parameter Estimates", Table Box( 1 )] << MakeCombinedDataTable;newDt << Distribution( Y( :Estimate ), By( :Term ), Horizontal Layout( 1 ) );theBox << CloseWindow;

```

