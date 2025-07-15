# Matrix



### Add Vectors BLAS

**Sintaxis:** z = Add Vectors BLAS( x, y, alpha )

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### All

**Sintaxis:** y = All( x, ... )

**Descripción:** Devuelve 1 si todos los elementos son distintos de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
All( [1 2 3] );

```

### Any

**Sintaxis:** y = Any( x, ... )

**Descripción:** Devuelve 1 si algún elemento es distinto de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Any( [1 0 2] );

```

### B Spline Coef

**Sintaxis:** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Descripción:** Devuelve la matriz de los coeficientes de B-Spline. Internal Knot Grid es el número de puntos de nodo deseado basado en percentiles de x o un vector que especifica los puntos de nodo internos. El parámetro opcional degree especifica el grado de los B-Splines con un valor predeterminado de 3. El parámetro opcional KnotEndPoints toma una matriz 2x1 que contiene ubicaciones [inferior, superior] para los nodos en el límite. De forma predeterminada los puntos finales del nodo se establecen en el mínimo y el máximo de x. El segundo ejemplo demuestra cómo pueden utilizarse los coeficientes de B-Spline como la matriz de diseño en un modelo lineal.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression( yy, designMat, <<nointercept );

```

### CDF

**Sintaxis:** {QuantVec, CumProbVec} = CDF( Y )

**Descripción:** Devuelve los valores de la función de distribución empírica de probabilidad acumulada correspondientes al vector o la lista Y. La probabilidad acumulada es la proporción de valores de datos menores o iguales a la entrada correspondiente en el vector QuantVec.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/* Generate random values, Normal(0,1) */
Y = J( 150, 1, Random Normal() );

/* CDF function */
{Quant, CumProb} = CDF( Y ); 

/* Draw empirical and theorical CDF */
New Window( "Empirical CDF",
	Graph Box(
		X Scale( -3, 3 ),
		Y Scale( 0, 1 ),
		Pen Color( "red" );
		For( i = 2, i <= N Row( Quant ), i++,
			H Line( Quant[i - 1], Quant[i], CumProb[i] );
			V Line( Quant[i - 1], CumProb[i - 1], CumProb[i] );
		);
		i = N Row( Quant );
		V Line( Quant[i], CumProb[i], 1 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( q ), q );
	)
);

```

### Chol Update

**Sintaxis:** L2 = Chol Update( L, V, C )

**Descripción:** Devuelve una raíz de Cholesky actualizada de A+V*C*V&apos;, donde C es una matriz simétrica m por m y V es una matriz n por m. El argumento L debe ser la raíz de Cholesky de una matriz n por n A.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/* The inner product of a design matrix */
exS = [16 1 0 11 -1 12,
1 11 -1 1 -1 1,
0 -1 12 -1 1 0,
11 1 -1 11 -1 9,
-1 -1 1 -1 9 -1,
12 1 0 9 -1 12];
/* Conduct the Cholesky decomposition */
exAchol = Cholesky( exS );

/* Two column vectors to be applied to change the design matrix */
exV = [1 1, 0 0, 0 1, 0 0, 0 0, 0 1];

/* The first column vector is added to one of the rows in the design matrix */
/* The second column vector is subtracted from one of the rows in the design matrix */
exC = [1 0, 0 -1];

/* Update the Cholesky decomposition manually */
exAnew = exS + exV * exC * exV`;
exAcholnew = Cholesky( exAnew );

/* Update the Cholesky decomposition more efficiently */
exAcholnew_test = Chol Update( exAchol, exV, exC );

/* Results are the same */
Show( exAcholnew_test );
Show( exAcholnew );

```

### Cholesky

**Sintaxis:** L = Cholesky( A )

**Descripción:** Devuelve la descomposición de Cholesky de una matriz semidefinida positiva. L es una matriz triangular inferior tal que L*L` = A.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Cholesky( [1 2, 2 13] );

```

### Correlation

**Sintaxis:** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Descripción:** Devuelve la matriz de correlación del argumento de la matriz x. El argumento "Pairwise" maneja los valores faltantes por pares en lugar de por filas. El argumento "Shrink" reduce los elementos fuera de la diagonal en función de un factor que se determina usando el método descrito en Schafer and Strimmer, 2005. Los argumentos Freq y Weight especifican vectores de frecuencia o valores de peso, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Covariance

**Sintaxis:** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Descripción:** Devuelve la matriz de covarianza del argumento de la matriz x. El argumento "Pairwise" maneja los valores faltantes por pares en lugar de por filas. El argumento "Shrink" reduce los elementos fuera de la diagonal en función de un factor que se determina usando el método descrito en Schafer and Strimmer, 2005. Los argumentos Freq y Weight especifican vectores de frecuencia o valores de peso, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Design

**Sintaxis:** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna de unos y ceros para cada valor único del argumento. Utilice el argumento levelsList para especificar una lista de niveles para la matriz de diseño. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/* example that Design(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design( exLevels ) );
/* Also see DesignNom, DesignOrd */

/* example that Design(...) takes two arguments */
Show( Design( 3, {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design(...) takes three arguments */
Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Last

**Sintaxis:** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna de unos y ceros para todos los valores únicos del argumento, excepto para el último. El último nivel se codifica como una fila de ceros. Si se especifica el argumento levelsList, el último nivel es el último nivel de levelsList. De lo contrario, se define el último nivel como el mayor valor de v. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/* example that Design Last(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Last( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that Design Last(...) takes two arguments */
Show( Design Last( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( Design Last( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Last( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design Last( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design Last(...) takes three arguments */
Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Nom

**Sintaxis:** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna de unos y ceros para todos los valores únicos del argumento, excepto para el último. El último nivel se codifica como una fila de menos unos.. Si se especifica el argumento levelsList, el último nivel es el último nivel de levelsList. De lo contrario, se define el último nivel como el mayor valor de v. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/* example that Design Nom(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Nom( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that Design Nom(...) takes two arguments */
Show( Design Nom( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( Design Nom( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Nom( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

 /* example that Design Nom(...) takes three arguments */
Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Ord

**Sintaxis:** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna para todos los valores únicos del argumento, excepto para el último. El primer nivel se codifica como una fila de ceros. Cada nivel posterior del argumento levelsList se codifica como una fila de (n-1) unos y el resto de ceros. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/* example that Design Ord(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Ord( exLevels ) );
/* see what is different from Design Nom(...) */
Show( Design Nom( exLevels ) );

/* Also see Design, Design Nom */

/* example that Design Ord(...) takes two arguments */
Show( Design Ord( 3, {1, 2, 3} ) );
Show( Design Nom( 3, {1, 2, 3} ) );
Show( Design Ord( [1 2], {1, 2, 3} ) );
Show( Design Nom( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Ord( exLevels, {1, 2, 3} ) );
Show( Design Nom( exLevels, {1, 2, 3} ) );
Show( Design Ord( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design Ord(...) takes three arguments */
Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### DesignF

**Sintaxis:** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna de unos y ceros para todos los valores únicos del argumento, excepto para el último. El último nivel se codifica como una fila de menos unos.. Si se especifica el argumento levelsList, el último nivel es el último nivel de levelsList. De lo contrario, se define el último nivel como el mayor valor de v. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/* example that DesignF(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( DesignF( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that DesignF(...) takes two arguments */
Show( DesignF( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( DesignF( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( DesignF( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( DesignF( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that DesignF(...) takes three arguments */
Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Det

**Sintaxis:** y = Det( x )

**Descripción:** Devuelve el determinante de una matriz cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Det( [11 22, 33 44] );

```

### Diag

**Sintaxis:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**Descripción:** Construye una matriz diagonal a partir de una matriz o un vector. Si se especifican dos argumentos, la función devuelve la concatenación diagonal de las matrices.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Diag( [11 22] );

```

### Direct Product

**Sintaxis:** y = Direct Product( A, B )

**Descripción:** Devuelve el producto directo o de Kronecker. El resultado tiene A[i,j]*B, que se extiende a todos los productos posibles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2, 3 3 3];
exProd = Direct Product( exA, exB );
Show( exProd );

/* verify results */
Show( exProd[1 :: 3, 1 :: 3] == exB );
Show( exProd[4 :: 6, 1 :: 3] == (exB * 3) );
Show( exProd[1 :: 3, 4 :: 6] == (exB * 2) );
Show( exProd[4 :: 6, 4 :: 6] == (exB * 4) );

/* Also see H Direct Product */

```

### Distance

**Sintaxis:** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**Descripción:** Genera una matriz de distancias entre filas de x1 y filas de x2. Para personalizar el escalado y las potencias de cada columna, especifique los argumentos adicionales scale y powers. Para kriging se utiliza Exp(-distance(x1,x2)).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/*1-D example*/
exX1 = [1, 2, 3, 4];
exX2 = [2, 4, 6, 8]; 
/*Compute squared Euclidean distance*/
exD = Distance( exX1, exX2 ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance*/
exD = Distance( exX1, exX2 ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance, with a scaler [0.5 2.0]*/
exD = Distance( exX1, exX2, [0.5 2.0] ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum( [0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) ^ 2) )
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance, with scalers [0.5 2.0] and powers [1.5 2.0]*/
exD = Distance( exX1, exX2, [0.5 2.0], [1.5 2.0] ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum(
			[0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) :^ [1.5 2.0])
		)
	)
);
Show( exDm == exD );

```

### E Div

**Sintaxis:** y = A :/ B; y = E Div( A, B )

**Descripción:** Devuelve una división de matrices por elementos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
[11 22 33] :/ [1 2 3];

```

### E Max

**Sintaxis:** y = E Max( A, B )

**Descripción:** Devuelve una matriz que es el máximo de elementos correspondientes de sus argumentos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
E Max( [1 22 33], [11 2 3] );

```

### E Min

**Sintaxis:** y = E Min( A, B )

**Descripción:** Devuelve una matriz que es el mínimo de elementos correspondientes de sus argumentos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
E Min( [1 22 33], [11 2 3] );

```

### E Mult

**Sintaxis:** y = A :* B; y = E Mult( A, B )

**Descripción:** Devuelve una multiplicación de matrices por elementos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
[1 2 3] :* [11 22 33];

```

### Eigen

**Sintaxis:** {M, E} = Eigen( X )

**Descripción:** Realiza la descomposición en valores propios de una matriz simétrica X. Devuelve la lista {M, E} tal que E*Diag(M)*E` = X.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**Sintaxis:** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Estimate Bartlett Factor Score

**Sintaxis:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**Descripción:** Estima puntuaciones factoriales, empleando el método de Bartlett, a partir de un modelo de ecuación estructural (SEM). Los argumentos de entrada son un vector fila de datos, la media implicada por el modelo para las variables manifiestas, la media implicada por el modelo para las variables latentes, una matriz S RAM de un SEM y una matriz A RAM de un SEM. Devuelve un vector fila con puntuaciones factoriales estimadas basadas en el SEM.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
Estimate Bartlett Factor Score(
	[2 2 0],
	[2.085 2.76 1.56],
	[0],
	[1 0 0 0 0,
	0 0.684181992749 0 0 0,
	0 0 1.19686444665695 0 0,
	0 0 0 0.875198112795068 0,
	0 0 0 0 0.953592961124492],
	[0 0 0 0 0,
	2.085 0 0 0 1,
	2.76 0 0 0 0.61913203807175,
	1.56 0 0 0 0.710365935511608,
	0 0 0 0 0]
);

```

### Estimate Factor Score

**Sintaxis:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**Descripción:** Estima puntuaciones factoriales, empleando el método de regresión, a partir de un modelo de ecuación estructural (SEM). Los argumentos de entrada son un vector fila de los datos, una matriz de varianzas-covarianzas implicada por el modelo, un vector de medias de variables de manifiesto implicadas por el modelo y un vector de medias de variables latentes implicadas por el modelo. Devuelve un vector fila con puntuaciones factoriales estimadas basadas en el SEM.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
Estimate Factor Score(
	[7 10 5 2 2 0],
	[1.66 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,
	0.45 1.22 0.44 -0.44 -0.33 -0.38 0.45 -0.44,
	0.58 0.44 1.88 -0.57 -0.43 -0.49 0.58 -0.57,
	-0.58 -0.44 -0.57 1.64 0.57 0.65 -0.58 0.76,
	-0.44 -0.33 -0.43 0.57 1.56 0.49 -0.44 0.57,
	-0.5 -0.38 -0.49 0.65 0.49 1.36 -0.5 0.65,
	0.59 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,
	-0.58 -0.44 -0.57 0.76 0.57 0.65 -0.58 0.76],
	[6.59, 8.81, 2.92, 2.09, 2.76, 1.56],
	[0, 0]
);

```

### Fourier Basis Coef

**Sintaxis:** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**Descripción:** Devuelve la matriz de los coeficientes de Base de Fourier. Number Pairs es el número de pares de sin() y cos() para la base. El parámetro opcional Period especifica el periodo para las funciones trigonométricas y los valores predeterminados para max(x) - min(x) + 1.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### G Inverse

**Sintaxis:** g = G Inverse( A )

**Descripción:** Devuelve la matriz inversa generalizada (Moore-Penrose).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Round( G Inverse( [11 22, 33 44] ), 2 );

```

### H Direct Product

**Sintaxis:** y = H Direct Product( A, B )

**Descripción:** Devuelve el producto directo horizontal, que consiste en el producto directo de cada fila de las matrices A y B.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2];
exProd = H Direct Product( exA, exB );
Show( exProd );

/* verify result */
Show( exProd[1, 1 :: 6] == Direct Product( exA[1, 1 :: 2], exB[1, 1 :: 3] ) );
Show( exProd[2, 1 :: 6] == Direct Product( exA[2, 1 :: 2], exB[2, 1 :: 3] ) );

```

### Hadamard

**Sintaxis:** y = Hadamard( n, &lt;normalize = 0&gt; )

**Descripción:** Crea una matriz Hadamard de orden n.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Hough Line Transform

**Sintaxis:** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**Descripción:** Devuelve la transformación de Hough para detectar líneas en datos de imagen

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
xx = .4;
yy = .4;
angleDegrees = (1 :: 180)`;
angle = Pi() * angleDegrees / (180);
New Window( "Hough Transform Demo 1",
	Border Box( Left( 20 ), Top( 20 ), Right( 15 ), Bottom( 15 ),
		V List Box(
			Text Box( "Click and drag the circle in a straight line." ),
			Graph Box(
				X Scale( -1, 1 ),
				Y Scale( -1, 1 ),
				Circle( {xx, yy}, .05 );
				Text( {xx + .1, yy + .1}, Char( xx, 4 ) || " " || Char( yy, 4 ) );
				Mousetrap(
					xx = x;
					yy = y;
					gb << reshow;
				);
			),
			Text Box( "For angle 1 to 180 , x*Cos(angle)+y*Sin(angle)" ),
			Text Box( "What position stays constant as you move?" ),
			gb = Graph Box(
				X Scale( 0, 180 ),
				XName( "Angle" ),
				Y Scale( -1.5, 1.5 ),
				YName( "Distance to Line" ),
				Line( angleDegrees, xx * Cos( angle ) + yy * Sin( angle ) )
			)
		)
	)
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
nRow = 35;
nCol = 35;

// Make a wafer template missing outside a radius
waferTemplate = J( nRow, nCol, 0 );
If( 0,
	For( i = 1, i <= nRow, i++,
		For( j = 1, j <= nCol, j++,
			If( (i - nrow / 2) ^ 2 + (j - nCol / 2) ^ 2 > ((nRow + nCol) / 4) ^ 2,
				waferTemplate[i, j] = .
			)
		)
	)
);
wafer = waferTemplate;
wafer[5, 22] = 1;
lightGray = RGB Color( .9, .9, .9 );
showWafer = Expr(
	For( i = 1, i <= nRow, i++,
		For( j = 1, j <= nCol, j++,
			z = wafer[i, j];
			If( Is Missing( z ),
				Continue()
			);
			Fill Color( If( z == 0, lightGray, 3 ) );
			Rect( i - nrow / 2, j - nCol / 2, i - nrow / 2 - 1, j - nCol / 2 + 1, 1 );
		)
	)
);
showHough = Expr(
	accum = Hough Line Transform( wafer );
	maxAccum = Max( Max( accum ), 1 );
	accumHeat = Heat Color( accum / maxAccum );
	nr = N Row( accum );
	nc = N Col( accum );
	For( i = 1, i <= nr, i++,
		For( j = 1, j <= nc, j++,
			z = accumHeat[i, j];
			Fill Color( z );
			Rect( j - 1, nr - i, j, nr - i + 1, 1 );
		)
	);
    //Marginals
	radiusDensity = V Max( accum` );
	radiusScale = 3 * Max( radiusDensity ) / Mean( radiusDensity );
	radiusColor = Heat Color( radiusDensity / radiusScale );
	If( 1,
		angleDensity = V Max( accum );
		angleScale = 3 * Max( angleDensity ) / Mean( angleDensity );
		angleColor = Heat Color( angleDensity / angleScale );
	,
		angle1 = angleDensity - Mean( angleDensity );
		angle1 = angle1 :* (angle1 > 0);
		angleColor = Heat Color( angle1 / Max( angle1 ) );
	);
	For( j = 1, j <= nc, j++,
		Fill Color( angleColor[j] );
		Rect( j - 1, -5, j, -8, 1 );
	);
	For( i = 1, i <= nr, i++,
		Fill Color( radiusColor[i] );
		Rect( 185, nr - i, 190, nr - i + 1, 1 );
	);
);
mouseAction = Expr(
	i = Floor( x + nrow / 2 + .5 );
	j = Floor( y + ncol / 2 + .5 );
	If( i > 0 & i <= nRow & j > 0 & j <= nCol,
		wafer[i, j]
		++);
	bothBox << reshow;
);
New Window( "Hough Transform Demo 2",
	Border Box( Left( 15 ), Top( 15 ), Right( 10 ), Bottom( 10 ),
		bothBox = V List Box(
			Text Box( "Click to add points in the top frame along a slanted line." ),
			Text Box( "The Hough transform is shown below with marginal densities." ),
			Text Box( "" ),
			H List Box(
				Button Box( "Clear",
					wafer = waferTemplate;
					bothBox << Reshow;
				),
				Button Box( "Add Random",
					wafer = wafer | J( nRow, nCol, Random Uniform() < .05 );
					bothBox << Reshow;
				)
			),
			waferBox = Graph Box(
				X Scale( -18, 18 ),
				Y Scale( -18, 18 ),
				FrameSize( 300, 300 ),
				XName( "Angle" ),
				YName( "Radius" ),
				Mousetrap( mouseAction ),
				showWafer
			),
			houghBox = Graph Box(
				X Scale( 0, 190 ),
				Y Scale( -10, 50 ),
				FrameSize( 500, 200 ),
				showHough
			)
		)
	)
);

```

### Identity

**Sintaxis:** y = Identity( n )

**Descripción:** Crea una matriz identidad n-por-n, con unos en la diagonal y ceros en el resto de posiciones.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Identity( 2 );

```

### Index

**Sintaxis:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**Descripción:** Devuelve una matriz de fila que contiene la secuencia de valores de n1 a n2 por incrementos de n3.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
1 :: 10;

```

### Inner Product BLAS

**Sintaxis:** y = Inner Product BLAS( A, B, ... )

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Inv

**Sintaxis:** y = Inverse( x ); y = Inv( x )

**Descripción:** Devuelve la inversa del argumento x, que debe ser una matriz no singular cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**Sintaxis:** y = Inv Update( S, X, &lt;w=1&gt; )

**Descripción:** Devuelve una matriz inversa actualizada, donde el primer argumento S es una matriz definida positiva y simétrica con el mismo número de columnas que X, el segundo argumento X es una matriz que contiene las filas a añadir o eliminar, y el tercer argumento w determina si se deben añadir o eliminar filas (1 para añadir filas y -1 para eliminarlas). Esta función equivale a S-w*S*X`*Inv(I+w*X*S*X`)*X*S, donde I es una matriz identidad y Inv(A) es la matriz inversa de A.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/* Generate a design matrix */
exX = [1 0 4 2,
1 0 5 1,
1 0 2 4,
5 4 4 5,
0 1 4 3,
0 1 9 1,
0 1 2 4,
0 1 1 9,
0 1 5 2,
0 1 2 1,
0 1 4 5];
S = Inverse( exX` * exX );
Show( "----------Adding Rows (w=1) --------" );
X = [5 4 3 3, 4 3 2 1, 9 1 2 5];
w = 1;
y = Inv Update( S, X, w );
Show( "Result of Inv Update" );
Show( y );
Show( "Result of updating formula" );
Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );
Show( "Result of direct calculation" );
Show( Inverse( (exX |/ X)` * (exX |/ X) ) );
Show( "----------Deleting Rows (w=-1) --------" );
X = [0 1 5 2, 0 1 2 1, 0 1 4 5];
w = -1;
y = Inv Update( S, X, w );
Show( "Result of Inv Update" );
Show( y );
Show( "Result of updating formula" );
Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );
Show( "Result of direct calculation" );
p = N Row( exX ) - 3;
Show( Inverse( exX[Index( 1, p ), 0]` * exX[Index( 1, p ), 0] ) );

```

### Inverse

**Sintaxis:** y = Inverse( x ); y = Inv( x )

**Descripción:** Devuelve la inversa del argumento x, que debe ser una matriz no singular cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Round( Inverse( [11 22, 33 44] ), 2 );

```

### Is Matrix

**Sintaxis:** y = Is Matrix( x )

**Descripción:** Devuelve 1 si el argumento es una matriz y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Is Matrix( [11 22 33] );

```

### J

**Sintaxis:** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**Descripción:** Crea una matriz (nr por nc) de valores determinados por el tercer argumento. El valor predeterminado del segundo argumento equivale al del primer argumento. El valor predeterminado del tercer argumento es 1. No obstante, el tercer argumento puede ser un número, el nombre de variable de un número o un código JSL. Si el tercer argumento es código, se evalúa el código y se asigna el valor devuelto a cada elemento de la matriz, elemento por elemento, fila por fila.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );

// Produce a 2x3 matrix, filled with 15.
m = J( 2, 3, 15 );
// Produce a default 4x4 matrix, filled with 1.
m = J( 4 );
// Produce a 2x3 matrix, filled with a number determined by a variable.
a = 3.14;
m = J( 2, 3, a );
// Produce a vector of random numbers from the Uniform distribution.
m = J( 1, 100, Random Uniform() );
// Produce a 2x3 matrix, filled with a sequence of integers.
a = 0;
m = J( 2, 3, a = a + 1 );
// This is a fun example to illustrate what is possible for the third argument.
i = 1;
J(
	10,
	1,
	Print(
		Eval Insert(
			"For the ^i^^if(i < 4, words(\!"st,nd,rd\!",\!",\!")[i], \!"th\!")^ time, I'm not a loop!"
		)
	);
	Round( 1 / Sqrt( 5 ) * ((1 + Sqrt( 5 )) / 2) ^ i++ );
);

```

### KDTable

**Sintaxis:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**Descripción:** Devuelve una tabla para una búsqueda eficiente de vecinos cercanos. Los argumentos de la matriz son puntos k-dimensionales. No existe límite alguno en el número de dimensiones o puntos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### Least Squares Solve

**Sintaxis:** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**Descripción:** Devuelve una lista que contiene un vector de estimaciones, Beta = Inverse(X&apos;X)X&apos;y y la matriz de varianza estimada de Beta. El argumento <<noIntercept opcional especifica un modelo sin constante. El argumento <<weights opcional especifica un vector de pesos para llevar a cabo los mínimos cuadrados ponderados. El argumento <<method opcional le permite elegir entre el método Sweep predeterminado y un método de inversa generalizada ("GInv") para resolver las ecuaciones normales.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Linear Regression

**Sintaxis:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**Descripción:** Ajusta una regresión lineal para el modelo asumido y = X * beta + error. El argumento opcional <<noIntercept especifica un modelo sin constante. El argumento opcional <<printToLog especifica que se imprime un resumen del ajuste en la ventana de registro. El argumento opcional weight especifica un vector de pesos para llevar a cabo los mínimos cuadrados ponderados, y el argumento opcional freq especifica un vector de frecuencias. Devuelve una lista que contiene un vector de la estimaciones, un vector de los errores estándar y una lista de diagnósticos. La lista de diagnósticos contiene vectores de los estadísticos t y valores p para las estimaciones, así como los valores R cuadrado y R cuadrado ajustado para el ajuste de regresión.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
/*Simple Linear Regression: y = intercept + beta * x + error*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<printToLog ); 
/*
t_ratio = Diagnostics["t_ratio"]; 
p_value = Diagnostics["p_value"]; 
RSquare = Diagnostics["RSquare"]; 
RSquare Adj = Diagnostics["RSquare Adj"];
*/

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<noIntercept, <<printToLog );

```

**Ejemplo 3**

```jsl

Names Default To Here( 1 );
/*Categorical Variable Example*/
/*Model: y = beta_1*boy + beta_2*girl + beta_3*x + error*/
y = [3, 5, 7, 5];
x = [1, 2, 3, 4];
gender = {"boy", "girl", "girl", "boy"};
designMat = Design( gender ) || x;
{Estimates, Std_Error, Diagnostics} = Linear Regression(
	y,
	designMat,
	<<noIntercept,
	<<printToLog
);

```

### Loc

**Sintaxis:** y = Loc( m ); y = Loc( v, x )

**Descripción:** Devuelve una matriz de las posiciones de la matriz m distintas de cero. Si se especifican dos argumentos, Loc(v, x) devuelve una matriz de las posiciones de la lista o la matriz v que son iguales al valor x. Se prefiere Where en lugar de ello siempre que sea posible.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

**Ejemplo 3**

```jsl

Names Default To Here( 1 );
Loc( [5, 7, 5, ., 5], 5 );

```

**Ejemplo 4**

```jsl

Names Default To Here( 1 );
Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

**Ejemplo 5**

```jsl

Names Default To Here( 1 );
Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**Sintaxis:** y = Loc Max( x )

**Descripción:** Devuelve la primera posición en x del valor máximo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**Sintaxis:** y = Loc Min( x )

**Descripción:** Devuelve la primera posición en x del valor mínimo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**Sintaxis:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**Descripción:** Devuelve un vector de los números de las filas de la matriz que figuran en el argumento y que contengan valores no faltantes, o bien, en el caso de listas, de las filas que contengan números no faltantes o caracteres no vacíos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**Sintaxis:** idx = Loc Sorted( x, y )

**Descripción:** Crea un vector de columna de posiciones de subíndices donde los valores de x tienen valores inferiores o iguales a los valores de y según una búsqueda binaria. x debe ser una matriz en orden ascendente sin valores faltantes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

```

### Low Rank Symmetric Update BLAS

**Sintaxis:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Matrix

**Sintaxis:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} )y = Matrix( {x1, ..., xn} )y = Matrix( n, m )

**Descripción:** Construye una matriz n por m. Si especifica una lista de n listas, y cada una contiene m valores de fila, la matriz se forma concatenando verticalmente las listas evaluadas. Si especifica una única lista de n elementos, el valor devuelto es un vector de columna n por 1. Si especifica dos argumentos enteros, el valor devuelto es una matriz de ceros que contiene n filas y m columnas.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**Ejemplo 3**

```jsl

Names Default To Here( 1 );
Matrix( {2, 3 + 7} );

```

**Ejemplo 4**

```jsl

Names Default To Here( 1 );
Matrix( 2, 3 );

```

### Matrix Mult

**Sintaxis:** y = Matrix Mult( A, B, ... ); y = A * B

**Descripción:** Realiza una multiplicación de matrices. Los argumentos de las matrices deben ser conformables: NCol(a)==NRow(b). Nótese que A * B también es válido.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM1 = exMatA * exMatB;
exMatM2 = Matrix Mult( exMatA, exMatB );
exMatC = [1 2, 1 2];
exMatM3 = Matrix Mult( exMatA, exMatB, exMatC );
Show( exMatM1 );
Show( exMatM2 );
Show( exMatM3 );

```

### Matrix Mult BLAS

**Sintaxis:** y = Matrix Mult BLAS( A, B, ... )

**Descripción:** Realiza una multiplicación de matrices. Los argumentos de las matrices deben ser conformables: NCol(A)==NRow(B).

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**Sintaxis:** r = Matrix Rank( X )

**Descripción:** Devuelve el rango de la matriz X.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Mode

**Sintaxis:** y = Mode( list or matrix )

**Descripción:** Selecciona el elemento &apos;más frecuente&apos; de una matriz o lista, el valor más bajo en caso de coincidir

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Multivariate Normal Impute

**Sintaxis:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**Descripción:** Devuelve un vector respuesta con valores imputados a los valores faltantes en el vector de respuestas yVec. Las imputaciones se basan en una distribución normal multivariante con vector de medias meanYvec y matriz de covarianza simétrica symCovMat. Los argumentos opcionales colMin y colMax son los vectores respectivos de los mínimos y máximos de columna. Estos argumentos establecen límites para las imputaciones.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
mat = [0.430735257211985 -0.935632420013493 . 0.424649913158299,
. -0.687720061441453 0.29665732536624 -1.94898001941576,
-0.0425472526673373 0.463229145080277 0.635619352779951 .];
cov = Covariance( mat, <<"Pairwise"/*, <<"shrink"*/ );
colMean = V Mean( mat );
colMin = V Min( mat );
colMax = V Max( mat );
For( it = 1, it <= N Row( mat ), it++,
	mat[it, 0] = Multivariate Normal Impute( mat[it, 0], colMean, cov, colMin, colMax )`
);
Print( mat );

```

### N Col

**Sintaxis:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**Descripción:** Devuelve el número de columnas de la tabla de datos actual, una tabla de datos especificada o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
N Col( [11 22, 33 44] );

```

### N Cols

**Sintaxis:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**Descripción:** Devuelve el número de columnas de la tabla de datos actual, una tabla de datos especificada o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
N Col( [11 22, 33 44] );

```

### NChooseK Matrix

**Sintaxis:** m = NChooseK Matrix( n, k )

**Descripción:** Crea una matriz de nChooseK(n,k) filas y k columnas con todas las combinaciones de k enteros de 1 a n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Print( NChooseK Matrix( 5, 3 ) );

```

### Ortho

**Sintaxis:** L = Ortho( A, &lt;Centered( 0 )&gt;, &lt;Scaled( 1 )&gt; )

**Descripción:** Ortogonaliza las columnas de una matriz. La opción Center hace que sumen cero. La opción Scale hace que sean de longitud unitaria.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**Sintaxis:** L = Ortho Poly( V, order )

**Descripción:** Devuelve los polinomios ortogonales del vector V hasta el orden especificado por el argumento order. El argumento V puede ser un vector fila o columna. La opción Scale los modifica para que tengan longitud uno.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Ortho Poly( 1 :: 10, 2 );

```

### P Spline Coef

**Sintaxis:** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Descripción:** Devuelve la matriz de los coeficientes P-Spline. Internal Knot Grid es el número de puntos de nodo deseado basado en percentiles de x o un vector que especifica los puntos de nodo internos. El parámetro opcional degree especifica el grado de los P-splines con un valor predeterminado de 3.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Parallel Assign

**Sintaxis:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**Descripción:** Utiliza varios subprocesos para asignar valores a la matriz. Si cualquier subproceso lanza una excepción, se imprimirá un mensaje en el registro y el valor devuelto será 0. Si todos los subprocesos se completan sin errores, el valor devuelto será 1. Las funciones que inician plataformas, crean o utilizan tablas de datos o acceden al subsistema de gráficos solo son compatibles con el proceso principal y lanzarán una excepción si se llama desde el proceso de un trabajador.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
m = J( 3, 2, -1 );
If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Print Matrix

**Sintaxis:** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**Descripción:** Imprime la matriz M. El argumento opcional ignore locale determina si se deben imprimir los separadores decimales según la configuración local del ordenador, donde el valor 0 significa que se debe respetar dicha configuración. El argumento opcional style determina si se debe emplear un estilo y cuál aplicar. Los estilos disponibles son parseable, que es una expresión de matriz JSL reformateada, latex y other. Si el argumento style es other, los tres últimos argumentos opcionales definen los caracteres inicial y final de las filas impresas y los caracteres de separación entre entradas concatenadas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
A = [3.509 0.003, 874.4 0.00384, 0.03 0.093];
Print Matrix( A );
Print Matrix( A, <<ignore locale( 1 ) );
Print Matrix( A, <<style( "latex" ) );
Print Matrix(
	A,
	<<style( "other" ),
	<<line begin( "| " ),
	<<line end( " |" ),
	<<separate( " | " )
);

```

### QR

**Sintaxis:** {Q, R} = QR( X )

**Descripción:** Crea una matriz ortogonal m por m Q y una matriz triangular superior m por n R tales que X = Q * R. El argumento X es una matriz m por n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
QR( [11 22, 33 44] );

```

### QR LAPACK

**Sintaxis:** {Q, R} = QR LAPACK( X )

**Descripción:** Crea una matriz ortogonal m por k Q y una matriz triangular superior k por n R tales que X = Q * R. El argumento X es una matriz m por n, donde k es min(m, n).

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**Sintaxis:** y = Quadratic Form BLAS( A, x )

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Random SVD

**Sintaxis:** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**Descripción:** Calcula la descomposición en valores singulares de la matriz X utilizando la descomposición en valores singulares aleatorizada y devuelve una lista {U, M, V} tal que U*diag(M)*V` es igual a X.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
Random SVD( [11 22, 33 44], 1 );

```

### Rank

**Sintaxis:** y = Rank Index( x )

**Descripción:** Devuelve un vector de índices que, si se usa como índice del vector original v, sirve para ordenarlo por rango. Los valores faltantes se excluyen.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**Sintaxis:** y = Rank Index( x )

**Descripción:** Devuelve un vector de índices que, si se usa como índice del vector original v, sirve para ordenarlo por rango. Los valores faltantes se excluyen.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**Sintaxis:** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descripción:** Devuelve un vector con los rangos de los valores de x, de menor a mayor indicado como de 1 a n, con desempate arbitrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**Sintaxis:** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descripción:** Devuelve un vector con los rangos de los valores de x, pero con los rangos de los empates promediados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Ranking Tie( [33, 22, 44, 11, 33] );

```

### Robust PCA

**Sintaxis:** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**Descripción:** Descompone de forma robusta los datos en una matriz de rango bajo y una matriz dispersa de los residuos. Los valores atípicos se detectan en los residuos. También puede imputar los valores faltantes.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### SVD

**Sintaxis:** {U, M, V} = SVD( X )

**Descripción:** Calcula la descomposición en valores singulares de la matriz X y devuelve una lista {U, M, V} tal que U*diag(M)*V` es igual a X.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
SVD( [11 22, 33 44] );

```

### SVD LAPACK

**Sintaxis:** {U, M, V} = SVD LAPACK( X )

**Descripción:** Calcula la descomposición en valores singulares de la matriz X y devuelve una lista {U, M, V} tal que U*diag(M)*V` es igual a X.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
SVD LAPACK( [11 22, 33 44] );

```

### Scoring Impute

**Sintaxis:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**Descripción:** Ofrece funcionalidad en streaming para el algoritmo Imputación de datos automatizada (ADI). Los argumentos de entrada son un vector fila que contiene valores faltantes, una matriz de carga (también denominada matriz V) que la genera el algoritmo ADI, un vector de la columna que implica que se ignoren las celdas faltantes y un vector de las desviaciones estándar de la columna que ignora las celdas faltantes. Devuelve el vector fila con los valores faltantes imputados utilizando la estimación de mínimos cuadrados.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
Scoring Impute(
	[1 2 3 . 4 .],
	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1]
);

```

### Shape

**Sintaxis:** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**Descripción:** Cambia la forma de la matriz o escalar M en las filas para que sean nr filas por nc columnas. Se permite un valor faltante para nr. Los datos de M se replican según sea necesario para rellenar la matriz nr por nc. El argumento opcional <<bycol rellena los datos por columna. De forma predeterminada, los datos se rellenan por fila. Los usos más comunes son convertir un vector en una matriz o vectorizar una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ), Shape( [11 22, 33 44], ., 4 )
	}
);

```

### Solve

**Sintaxis:** y = Solve( A, B )

**Descripción:** Resuelve el sistema lineal A*x=B para x. La función Solve() equivale a Inverse(A)*B si A es no singular. Nótese que el argumento A debe ser una matriz cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**Sintaxis:** y = Sort Ascending( x )

**Descripción:** Devuelve una copia de la lista o la matriz x con los elementos ordenados en orden ascendente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**Sintaxis:** y = Sort Descending( x )

**Descripción:** Devuelve una copia de la lista o la matriz x con los elementos ordenados en orden descendente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Sort Descending( {111, 212, 133, 114, 55} );

```

### Sparse SVD

**Sintaxis:** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**Descripción:** Calcula la descomposición en valores singulares de la matriz X con el método Lanczos parcialmente ortogonalizado y reiniciado de forma implícita, para las matrices dispersas devolviendo una lista {U, M, V} como que U*diag(M)*V` equivale a X.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Spline Coef

**Sintaxis:** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**Descripción:** Returns a five-column matrix of coefficients in the following order: knots||a||b||c||d for each of the unique values in x. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**Sintaxis:** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**Descripción:** Evalúa las predicciones de spline con la matriz coef de la misma forma que la devuelve la función Spline Coef(). extrapolation indica hasta qué distancia más allá del rango de spline, como una fracción del rango, se extenderá la evaluación antes de devolver valores faltantes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );

New Window( "Spline Fit",
	window:x = 20 :: 80;
	window:y = 50 + Sin( (20 :: 80) / 10 ) * 40 + J(
		1,
		N Col( window:x ),
		Random Normal( 0, 10 )
	);
	window:loglambda = 2;
	window:g = Graph Box(
		Pen Color( "blue" );
		window:m = Spline Coef( window:x, window:y, Power( 10, window:loglambda ) );
		Marker( window:x, window:y );
		Y Function( Spline Eval( a, window:m, 0.05 ), a );
	);,
	H List Box(
		Text Box( "Lambda: " ),
		Slider Box( -2, 5, window:loglambda, window:g << reshow )
	)
)
;

```

### Spline Smooth

**Sintaxis:** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**Descripción:** Returns the smoothed predicted values from a spline fit. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sweep

**Sintaxis:** y = Sweep( A, &lt;indices&gt; )

**Descripción:** Devuelve el barrido de la matriz A según los pivotes diagonales indicados por indices. Es una forma de invertir una matriz de pivote en pivote.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**Sintaxis:** y = Sym Matrix Mult BLAS( A, B, ... )

**Descripción:** Realiza una multiplicación de matrices, donde A es una matriz simétrica. Los argumentos de las matrices deben ser conformables: NCol(A)==NRow(B).

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### Trace

**Sintaxis:** y = Trace( x )

**Descripción:** Devuelve la suma de los elementos de la diagonal de una matriz cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Trace( [11 22, 33 44] );

```

### Transpose

**Sintaxis:** y = Transpose( matrix ); y = matrix`

**Descripción:** Transpone el argumento de matriz intercambiando filas y columnas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### V Concat

**Sintaxis:** y = a |/ b; y = V Concat( a, b, ... )

**Descripción:** Concatena matrices verticalmente. Los argumentos deben tener el mismo número de columnas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
[11 22] |/ [33 44];

```

### V Concat To

**Sintaxis:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**Descripción:** Operador de asignación que concatena en el mismo lugar, verticalmente. a |/= b equivale a a = a |/ b.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
exA = [1 2, 3 4];
exB = [5 6, 7 8, 9 10];
exC = [1, 1, 1, 1, 1];
exD = V Concat To( exA, exB );
exE = Concat( exD, exC );
/* exA is changed and exD is not. */
Show( exA, exB, exC, exD, exE );
/* Also see ConcatTo(), VConcat() */

```

### V Max

**Sintaxis:** b = V Max( matrix )

**Descripción:** Devuelve un vector fila que contiene los valores máximos de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**Sintaxis:** m = V Mean( matrix )

**Descripción:** Devuelve un vector fila que contiene las medias de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**Sintaxis:** m = V Median( matrix )

**Descripción:** Devuelve un vector fila que contiene la mediana de cada una de las columnas en el argumento.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**Sintaxis:** a = V Min( matrix )

**Descripción:** Devuelve un vector fila que contiene los valores mínimos de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**Sintaxis:** m = V Quantile( matrix, p )

**Descripción:** Devuelve un vector fila que contiene el cuantil especificado p de cada una de las columnas en el argumento.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**Sintaxis:** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**Descripción:** Devuelve una matriz centrada por la mediana y escalada por una estimación robusta de la desviación estándar de la matriz X. Los argumentos booleanos opcionales especifican si se llevan a cabo el centrado y el escalado.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Standardize

**Sintaxis:** b = V Standardize( X )

**Descripción:** Devuelve una matriz que es la versión centrada y escalada de la matriz X. Cada columna de b tiene una media de 0 y una desviación estándar de 1.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**Sintaxis:** b = V Std( matrix )

**Descripción:** Devuelve un vector fila que contiene las desviaciones estándar de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**Sintaxis:** s = V Sum( matrix )

**Descripción:** Devuelve un vector fila que contiene la suma de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
V Sum( [11 22, 33 44, 55 66] );

```

### VPTree

**Sintaxis:** tab = VPTree( [ matrix ] )

**Descripción:** Devuelve una tabla para una búsqueda eficiente de vecinos cercanos. Los argumentos de la matriz son puntos k-dimensionales. No existe límite alguno en el número de dimensiones o puntos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Varimax

**Sintaxis:** {R,T} = Varimax( F, &lt;norm=1&gt; )

**Descripción:** Realizar una rotación Varimax de la matriz especificada F. Devuelve una lista que contiene la matriz rotada y la matriz de rotación ortogonal. De forma predeterminada, se lleva a cabo una rotación Varimax normalizada. Especifique norm = 0 para realizar una rotación Varimax no normalizada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**Sintaxis:** y = Vec Diag( x )

**Descripción:** Devuelve los elementos de la diagonal de una matriz cuadrada en forma de vector.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**Sintaxis:** Vec Quadratic( S, X )

**Descripción:** Evalúa como Vec Diag( X * S * X` ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### Wavelet Basis Coef

**Sintaxis:** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**Descripción:** Devuelve la predicción en los puntos x para el modelo de ondículas especificado. El parámetro grid es un vector que especifica la cuadrícula de los datos para el modelo de ondículas. El parámetro coef es un vector de coeficientes de ondículas. El parámetro wavelet es el nombre del modelo de ondículas. El parámetro opcional param es el parámetro del modelo de ondículas (si es necesario, el valor predeterminado es 0).

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

