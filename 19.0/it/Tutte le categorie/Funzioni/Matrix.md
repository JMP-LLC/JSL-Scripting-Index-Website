# Matrix



### Add Vectors BLAS

**Sintassi:** z = Add Vectors BLAS( x, y, alpha )

**JMP Versione aggiunta:** 17

```jsl

x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### All

**Sintassi:** y = All( x, ... )

**Descrizione:** Restituisce 1 se tutti gli elementi sono diversi da zero, in caso contrario zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

All( [1 2 3] );

```

### Any

**Sintassi:** y = Any( x, ... )

**Descrizione:** Restituisce 1 se un elemento qualsiasi è diverso da zero, in caso contrario zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Any( [1 0 2] );

```

### B Spline Coef

**Sintassi:** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Descrizione:** Restituisce la matrice dei coefficienti B-Spline. Internal Knot Grid è il numero di punti del nodo desiderati sulla base dei percentili di x o un vettore che specifica i punti del nodo interni. Il parametro facoltativo degree specifica il grado di B-Spline con una impostazione predefinita di 3. Il parametro facoltativo KnotEndPoints utilizza una matrice 2x1 contente posizioni [inferiori, superiori] per i nodi sul limite. I punti finali del nodo hanno come impostazione predefinita il minimo e il massimo di x. Il secondo esempio dimostra come i coefficienti di B-Spline possono essere usati come matrice del piano in un modello lineare.

**JMP Versione aggiunta:** 14

#### Esempio 1

```jsl

B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

#### Esempio 2

```jsl

xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression( yy, designMat, <<nointercept );

```

### CDF

**Sintassi:** {QuantVec, CumProbVec} = CDF( Y )

**Descrizione:** Restituisce valori della funzione di distribuzione della probabilità cumulativa empirica per il vettore o l&apos;elenco Y. La probabilità cumulativa è la proporzione di valori dei dati minore o uguale alla voce corrispondente immessa nel vettore QuantVec.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** L2 = Chol Update( L, V, C )

**Descrizione:** Restituisce la radice di Cholesky aggiornata di A+V*C*V&apos; dove C è una matrice simmetrica m per m e V è una matrice n per m. L&apos;argomento L deve essere la radice di Cholesky di una matrice A (n per n).

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** L = Cholesky( A )

**Descrizione:** Restituisce la scomposizione di Cholesky di una matrice positiva semidefinita. L è una matrice triangolare inferiore tale che L*L` = A.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cholesky( [1 2, 2 13] );

```

### Correlation

**Sintassi:** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Descrizione:** Restituisce la matrice di correlazione dell&apos;argomento della matrice x. L&apos;argomento "Pairwise" gestisce valori mancanti in modalità appaiata piuttosto che a livello di riga. L&apos;argomento "Shrink" riduce gli elementi non diagonali di un fattore che è determinato utilizzando il metodo descritto in Schafer e Strimmer, 2005. Gli argomenti Freq e Weight specificano rispettivamente vettori di frequenza o valori di peso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Covariance

**Sintassi:** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Descrizione:** Restituisce la matrice di covarianza dell&apos;argomento della matrice x. L&apos;argomento "Pairwise" gestisce valori mancanti in modalità appaiata piuttosto che a livello di riga. L&apos;argomento "Shrink" riduce gli elementi non diagonali di un fattore che è determinato utilizzando il metodo descritto in Schafer e Strimmer, 2005. Gli argomenti Freq e Weight specificano rispettivamente vettori di frequenza o valori di peso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Design

**Sintassi:** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna di 1 e 0 per ogni valore univoco dell&apos;argomento. Usare l&apos;argomento levelsList per specificare un elenco dei livelli per la matrice del piano. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nella matrice del piano al posto dei valori nell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna di 1 e 0 per tutti i valori univoci dell&apos;argomento eccetto l&apos;ultimo. L&apos;ultimo livello è codificato come una riga di 0. Se è specificato l&apos;argomento levelsList, l&apos;ultimo livello è l&apos;ultimo livello in levelsList. Altrimenti, l&apos;ultimo livello si definisce come il valore più grande in v. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nella matrice del piano al posto dei valori nell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna di 1 e 0 per tutti i valori univoci dell&apos;argomento eccetto l&apos;ultimo. L&apos;ultimo livello è codificato come una riga di -1. Se è specificato l&apos;argomento levelsList, l&apos;ultimo livello è l&apos;ultimo livello in levelsList. Altrimenti, l&apos;ultimo livello si definisce come il valore più grande in v. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nel disegno del piano al posto dei valori nell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna per tutti i valori univoci dell&apos;argomento eccetto l&apos;ultimo. Il primo livello è codificato come una riga di 0. Ogni successivo livello (n-esimo) nell&apos;argomento levelsList è codificato come una riga di (n-1) 1 e il resto di 0. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nella matrice del piano al posto dei valori dell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descrizione:** Crea una matrice del piano con una colonna di 1 e 0 per tutti i valori univoci dell&apos;argomento eccetto l&apos;ultimo. L&apos;ultimo livello è codificato come una riga di -1. Se è specificato l&apos;argomento levelsList, l&apos;ultimo livello è l&apos;ultimo livello in levelsList. Altrimenti, l&apos;ultimo livello si definisce come il valore più grande in v. Se è specificato l&apos;argomento <<Levels, il valore di ritorno è un elenco che contiene la matrice del piano e un elenco dei livelli. Se è specificato l&apos;argomento <<ElseMissing, i valori mancanti sono inseriti nel disegno del piano al posto dei valori nell&apos;argomento v che non compaiono in levelsList. Altrimenti, nella matrice del piano sono inseriti degli 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = Det( x )

**Descrizione:** Restituisce il determinante di una matrice quadrata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Det( [11 22, 33 44] );

```

### Diag

**Sintassi:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**Descrizione:** Costruisce una matrice diagonale da una matrice o da un vettore. Se sono specificati due argomenti, la funzione restituisce la concatenazione delle matrici diagonalmente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Diag( [11 22] );

```

### Direct Product

**Sintassi:** y = Direct Product( A, B )

**Descrizione:** Restituisce il prodotto diretto o di Kronecker. Il risultato ha A[i,j]*B, che si estende a tutti i prodotti possibili.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**Descrizione:** Crea una matrice di distanze tra le righe di x1 e le righe di x2. Per personalizzare lo scaling e le potenze per ciascuna colonna, specificare gli argomenti supplementari scale e powers. Per il Kriging è utilizzato Exp(-distance(x1,x2)).

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = A :/ B; y = E Div( A, B )

**Descrizione:** Restituisce una divisione per elementi delle matrici.

**JMP Versione aggiunta:** prima della versione 14

```jsl

[11 22 33] :/ [1 2 3];

```

### E Max

**Sintassi:** y = E Max( A, B )

**Descrizione:** Restituisce una matrice che è il massimo degli elementi corrispondenti dei suoi argomenti.

**JMP Versione aggiunta:** 16

```jsl

E Max( [1 22 33], [11 2 3] );

```

### E Min

**Sintassi:** y = E Min( A, B )

**Descrizione:** Restituisce una matrice che è il minimo degli elementi corrispondenti dei suoi argomenti.

**JMP Versione aggiunta:** 16

```jsl

E Min( [1 22 33], [11 2 3] );

```

### E Mult

**Sintassi:** y = A :* B; y = E Mult( A, B )

**Descrizione:** Restituisce una moltiplicazione per elementi delle matrici.

**JMP Versione aggiunta:** prima della versione 14

```jsl

[1 2 3] :* [11 22 33];

```

### Eigen

**Sintassi:** {M, E} = Eigen( X )

**Descrizione:** Esegue la scomposizione degli autovalori della matrice simmetrica X. Restituisce un elenco {M, E} tale che E*Diag(M)*E` = X.

**JMP Versione aggiunta:** prima della versione 14

```jsl

X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**Sintassi:** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP Versione aggiunta:** 17

```jsl

X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Estimate Bartlett Factor Score

**Sintassi:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**Descrizione:** Stima gli score dei fattori, utilizzando il metodo di Bartlett, da un modello di equazione strutturale (SEM). Gli argomenti di input sono un vettore di riga di dati, le medie implicate del modello per le variabili manifeste, le medie implicate del modello per le variabili latenti, la matrice RAM S da un SEM e la matrice RAM A da un SEM. Restituisce un vettore di riga con score dei fattori stimati basati su SEM.

**JMP Versione aggiunta:** 16

```jsl

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

**Sintassi:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**Descrizione:** Stima gli score dei fattori, utilizzando il metodo di regressione, da un modello di equazione strutturale (SEM). Gli argomenti di input sono un vettore riga di dati, una matrice di varianza-covarianza implicita nel modello, un vettore delle medie delle variabili manifeste implicite nel modello e un vettore delle medie delle variabili latenti implicite nel modello. Restituisce un vettore di riga con score dei fattori basati su SEM.

**JMP Versione aggiunta:** 15

```jsl

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

**Sintassi:** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**Descrizione:** Restituisce la matrice dei coefficienti di base Fourier. Number Pairs è il numero di coppie di sin() e cos() per la base. Il parametro facoltativo Period specifica il periodo delle funzioni trigonometriche e ha come impostazione predefinita max(x) - min(x) + 1.

**JMP Versione aggiunta:** 14

```jsl

Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### G Inverse

**Sintassi:** g = G Inverse( A )

**Descrizione:** Restituisce la matrice inversa generalizzata (Moore-Penrose).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( G Inverse( [11 22, 33 44] ), 2 );

```

### H Direct Product

**Sintassi:** y = H Direct Product( A, B )

**Descrizione:** Restituisce il prodotto diretto orizzontale che è il prodotto diretto di ogni riga di matrici A e B.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2];
exProd = H Direct Product( exA, exB );
Show( exProd );

/* verify result */
Show( exProd[1, 1 :: 6] == Direct Product( exA[1, 1 :: 2], exB[1, 1 :: 3] ) );
Show( exProd[2, 1 :: 6] == Direct Product( exA[2, 1 :: 2], exB[2, 1 :: 3] ) );

```

### Hadamard

**Sintassi:** y = Hadamard( n, &lt;normalize = 0&gt; )

**Descrizione:** Crea una matrice di Hadamard di ordine n.

**JMP Versione aggiunta:** 15

```jsl

Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Hough Line Transform

**Sintassi:** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**Descrizione:** Restituisce la trasformazione di Hough per rilevare le linee in dati di immagine

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

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

#### Esempio 2

```jsl

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

**Sintassi:** y = Identity( n )

**Descrizione:** Crea una matrice di identità n-per-n con 1 in diagonale e zero altrove.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Identity( 2 );

```

### Index

**Sintassi:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**Descrizione:** Restituisce una matrice di riga che contiene la sequenza di valori da n1 a n2 per incrementi di n3.

**JMP Versione aggiunta:** prima della versione 14

```jsl

1 :: 10;

```

### Inner Product BLAS

**Sintassi:** y = Inner Product BLAS( A, B, ... )

**JMP Versione aggiunta:** 17

```jsl

a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Inv

**Sintassi:** y = Inverse( x ); y = Inv( x )

**Descrizione:** Restituisce l&apos;inverso dell&apos;argomento x che deve essere una matrice quadrata e non singolare.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**Sintassi:** y = Inv Update( S, X, &lt;w=1&gt; )

**Descrizione:** Restituisce una matrice inversa aggiornata, dove il primo argomento S è una matrice simmetrica definita positiva, con lo stesso numero di colonne di X, il secondo argomento X è una matrice che contiene le righe da aggiungere o eliminare e il terzo argomento w determina se le righe debbano essere aggiunte o eliminate (utilizzare 1 per aggiungere righe e -1 per eliminarle). Questa funzione viene valutata come S-w*S*X`*Inv(I+w*X*S*X`)*X*S, dove I è una matrice di identità e Inv(A)indica una matrice inversa di A.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = Inverse( x ); y = Inv( x )

**Descrizione:** Restituisce l&apos;inverso dell&apos;argomento x che deve essere una matrice quadrata e non singolare.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Is Matrix

**Sintassi:** y = Is Matrix( x )

**Descrizione:** Restituisce 1 se l&apos;argomento è una matrice, in caso contrario 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Is Matrix( [11 22 33] );

```

### J

**Sintassi:** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**Descrizione:** Crea una matrice (nr per nc) di valori determinati dal terzo argomento. Il valore predefinito del secondo argomento è uguale al primo argomento. Il valore di default del terzo argomento è 1. Ma il terzo argomento può essere un numero, il nome di una variabile di un numero o un codice JSL. Se il terzo argomento è codice, il codice viene valutato e il valore di ritorno è assegnato a ogni elemento della matrice, elemento per elemento, riga per riga.

**JMP Versione aggiunta:** prima della versione 14

```jsl


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

**Sintassi:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**Descrizione:** Restituisce una tabella per la ricerca efficace dei vicini prossimi. Gli argomenti della matrice sono punti k-dimensionali. Non esiste alcun limite al numero di dimensioni o punti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### Least Squares Solve

**Sintassi:** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**Descrizione:** Restituisce un elenco che contiene un vettore di stime, Beta = Inverse(X&apos;X)X&apos;y, e la matrice di varianza stimata di Beta. L&apos;argomento facoltativo <<noIntercept specifica un modello senza intercetta. L&apos;argomento facoltativo <<weights specifica un vettore di pesi per effettuare minimi quadrati pesati. L&apos;argomento facoltativo <<method consente di scegliere tra il metodo predefinito Sweep e un metodo inverso generalizzato ("GInv") per la risoluzione delle equazioni normali.

**JMP Versione aggiunta:** prima della versione 14

```jsl

/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Linear Regression

**Sintassi:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**Descrizione:** Stima una regressione lineare per il modello ipotizzato y = X * beta + error. L&apos;argomento facoltativo <<noIntercept specifica un modello senza intercetta. L&apos;argomento facoltativo <<printToLog specifica che un riepilogo della stima viene visualizzato nella finestra log. L&apos;argomento facoltativo weight specifica un vettore di pesi per effettuare minimi quadrati pesati e l&apos;argomento opzionale freq specifica un vettore di frequenze. Restituisce un elenco contenente un vettore delle stime, un vettore degli errori standard e un elenco di diagnostiche. L&apos;elenco di diagnostiche contiene vettori delle statistiche t e p-value per le stime, nonché i valori R-quadro e R-quadro corretto per la stima di regressione.

**JMP Versione aggiunta:** 14

#### Esempio 1

```jsl

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

#### Esempio 2

```jsl

/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<noIntercept, <<printToLog );

```

#### Esempio 3

```jsl

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

**Sintassi:** y = Loc( m ); y = Loc( v, x )

**Descrizione:** Restituisce una matrice delle posizioni diverse da zero nella matrice m. Se sono specificati due argomenti, Loc(v, x) restituisce una matrice delle posizioni dell&apos;elenco o della matrice v che sono uguali al valore x. Preferire invece Where, ove possibile.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

#### Esempio 2

```jsl

Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

#### Esempio 3

```jsl

Loc( [5, 7, 5, ., 5], 5 );

```

#### Esempio 4

```jsl

Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

#### Esempio 5

```jsl

Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**Sintassi:** y = Loc Max( x )

**Descrizione:** Restituisce la prima posizione in x del valore massimo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**Sintassi:** y = Loc Min( x )

**Descrizione:** Restituisce la prima posizione in x del valore minimo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**Sintassi:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**Descrizione:** Restituisce un vettore di numeri di righe nelle righe della matrice dell&apos;argomento che non abbiano valori mancanti, o per gli elenchi, quelli che non abbiano numeri mancanti o caratteri non vuoti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**Sintassi:** idx = Loc Sorted( x, y )

**Descrizione:** Crea un vettore di colonna di posizioni dell’indice in cui i valori di x presentano valori minori o uguali ai valori in y sulla base di una ricerca binaria. x deve essere una matrice ordinata in ordine crescente senza valori mancanti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

```

### Low Rank Symmetric Update BLAS

**Sintassi:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP Versione aggiunta:** 17

```jsl

A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Matrix

**Sintassi:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} )y = Matrix( {x1, ..., xn} )y = Matrix( n, m )

**Descrizione:** Costruisce una matrice n-per-m. Se si specifica un elenco di n elenchi ognuno contenente m valori di riga, la matrice è formata concatenando verticalmente gli elenchi valutati. Se si specifica un singolo elenco di n elementi, il valore di ritorno è un vettore di colonna n-per-1. Se si specificano due argomenti interi, il valore di ritorno è una matrice di zeri contenente n righe e m colonne.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

#### Esempio 2

```jsl

Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

#### Esempio 3

```jsl

Matrix( {2, 3 + 7} );

```

#### Esempio 4

```jsl

Matrix( 2, 3 );

```

### Matrix Mult

**Sintassi:** y = Matrix Mult( A, B, ... ); y = A * B

**Descrizione:** Esegue una moltiplicazione di matrici. L&apos;argomento della matrice deve essere appropriato NCol(a)==NRow(b). Anche A * B funziona.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = Matrix Mult BLAS( A, B, ... )

**Descrizione:** Esegue una moltiplicazione matriciale. Gli argomenti delle matrici devono essere appropriati: NCol(A)==NRow(B).

**JMP Versione aggiunta:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**Sintassi:** r = Matrix Rank( X )

**Descrizione:** Restituisce il rango della matrice X.

**JMP Versione aggiunta:** 14

```jsl

Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Mode

**Sintassi:** y = Mode( list or matrix )

**Descrizione:** Seleziona l&apos;elemento &apos;più frequente&apos; da una matrice o elenco, il valore inferiore per valori equivalenti

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Multivariate Normal Impute

**Sintassi:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**Descrizione:** Restituisce un vettore di risposta con valori imputati per i valori mancanti nel vettore yVec delle risposte. Le imputazioni sono basate su una distribuzione normale multivariata con vettore medio meanYvec e matrice di covarianza simmetrica symCovMat. Gli argomenti facoltativi colMin e colMax sono i rispettivi vettori dei minimi e massimi delle colonne. Questi argomenti forniscono limiti per le imputazioni.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**Descrizione:** Restituisce il numero di colonne della tabella di dati corrente, di una tabella di dati specifica o di una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Col( [11 22, 33 44] );

```

### N Cols

**Sintassi:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**Descrizione:** Restituisce il numero di colonne della tabella di dati corrente, di una tabella di dati specifica o di una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Col( [11 22, 33 44] );

```

### NChooseK Matrix

**Sintassi:** m = NChooseK Matrix( n, k )

**Descrizione:** Crea una matrice di nChooseK(n,k) righe e colonne k formando tutte le combinazioni dei numeri interi k da 1 a n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Print( NChooseK Matrix( 5, 3 ) );

```

### Ortho

**Sintassi:** L = Ortho( A, &lt;Centered( 0 )&gt;, &lt;Scaled( 1 )&gt; )

**Descrizione:** Ortogonalizza le colonne di una matrice. L&apos;opzione Centro conduce a una somma zero. L&apos;opzione Scala conduce alla lunghezza dell&apos;unità.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**Sintassi:** L = Ortho Poly( V, order )

**Descrizione:** Restituisce polinomi ortogonali del vettore V fino all&apos;ordine specificato dall&apos;argomento order. L&apos;argomento V può essere un vettore di riga o di colonna. L&apos;opzione Scala li porta alla lunghezza dell&apos;unità.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ortho Poly( 1 :: 10, 2 );

```

### P Spline Coef

**Sintassi:** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Descrizione:** Restituisce la matrice dei coefficienti di P-Spline. Internal Knot Grid è il numero di punti del nodo desiderati sulla base dei percentili di x o un vettore che specifica i punti del nodo interni. Il parametro facoltativo degree specifica il grado di P-Spline con una impostazione predefinita di 3.

**JMP Versione aggiunta:** 14

```jsl

P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Parallel Assign

**Sintassi:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**Descrizione:** Utilizzare più thread per assegnare i valori alla matrice. Se un thread qualsiasi genera un&apos;eccezione, verrà stampato un messaggio nel log e il valore di ritorno sarà 0. Se tutti i thread sono completati senza errori, il valore di ritorno sarà 1. Le funzioni che avviano piattaforme, creano o usano tabelle di dati o accedono al sottosistema grafico sono supportate solo sul thread principale e genereranno un&apos;eccezione se chiamate da un thread worker.

**JMP Versione aggiunta:** prima della versione 14

```jsl

m = J( 3, 2, -1 );
If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Print Matrix

**Sintassi:** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**Descrizione:** Stampa la matrice M. L&apos;argomento facoltativo ignore locale determina se la stampa dei separatori decimali deve rispettare le informazioni locali, dove zero significa che devono essere rispettate. L&apos;argomento facoltativo style determina se utilizzare uno stile e in tal caso quale utilizzare. Gli stili disponibili sono parseable e sono un&apos;espressione di matrice JSL riformattata, latex e other. Quando l&apos;argomento style è other, gli ultimi tre argomenti facoltativi definiscono i caratteri iniziali e finali delle righe stampate e i caratteri di separazione delle voci concatenate.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** {Q, R} = QR( X )

**Descrizione:** Crea una matrice ortogonale Q (m per m) e una matrice triangolare superiore R (m per n), tale che X = Q * R. L&apos;argomento X è una matrice (m per n).

**JMP Versione aggiunta:** prima della versione 14

```jsl

QR( [11 22, 33 44] );

```

### QR LAPACK

**Sintassi:** {Q, R} = QR LAPACK( X )

**Descrizione:** Crea una matrice ortogonale Q (m per k) e una matrice triangolare superiore R (k per n), tale che X = Q * R. L&apos;argomento X è una matrice (m per n) dove k è min(m, n).

**JMP Versione aggiunta:** 17

```jsl

QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**Sintassi:** y = Quadratic Form BLAS( A, x )

**JMP Versione aggiunta:** 17

```jsl

A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Random SVD

**Sintassi:** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**Descrizione:** Calcola la decomposizione ai valori singolari della matrice X usando la decomposizione ai valori singolari randomizzata e restituisce un elenco {U, M, V} tale che U*diag(M)*V` è uguale a X.

**JMP Versione aggiunta:** 17

```jsl

Random SVD( [11 22, 33 44], 1 );

```

### Rank

**Sintassi:** y = Rank Index( x )

**Descrizione:** Restituisce un vettore di indici che, usati come indice del vettore originale v, ordina il vettore per rango. Esclude i valori mancanti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**Sintassi:** y = Rank Index( x )

**Descrizione:** Restituisce un vettore di indici che, usati come indice del vettore originale v, ordina il vettore per rango. Esclude i valori mancanti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**Sintassi:** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descrizione:** Restituisce un vettore di ranghi dei valori di x, da basso ad alto come da 1 a n, con valori equivalenti arbitrari.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**Sintassi:** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descrizione:** Restituisce un vettore di ranghi dei valori di x, ma definisce i ranghi in base a valori equivalenti mediati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Ranking Tie( [33, 22, 44, 11, 33] );

```

### Robust PCA

**Sintassi:** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**Descrizione:** Scompone in maniera robusta i dati in una matrice di rango basso e in una matrice sparsa di residui. Nei residui vengono rilevati gli outlier. Può anche imputare i valori mancanti.

**JMP Versione aggiunta:** 16

```jsl

X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### SVD

**Sintassi:** {U, M, V} = SVD( X )

**Descrizione:** Calcola la scomposizione a valore singolare della matrice X e restituisce un elenco {U, M, V} tale che U*diag(M)*V` è uguale a X.

**JMP Versione aggiunta:** prima della versione 14

```jsl

SVD( [11 22, 33 44] );

```

### SVD LAPACK

**Sintassi:** {U, M, V} = SVD LAPACK( X )

**Descrizione:** Calcola la scomposizione a valore singolare della matrice X e restituisce un elenco {U, M, V} tale che U*diag(M)*V` è uguale a X.

**JMP Versione aggiunta:** 17

```jsl

SVD LAPACK( [11 22, 33 44] );

```

### Scoring Impute

**Sintassi:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**Descrizione:** Offre funzionalità di streaming per l&apos;algoritmo di imputazione automatica dei dati (ADI). Gli argomenti di input sono un vettore riga che contiene valori mancanti, una matrice di caricamento (detta anche matrice V) che è prodotta dall&apos;algoritmo ADI, un vettore della colonna significa ignorare le celle mancanti e un vettore delle deviazioni standard della colonna ignorare le celle mancanti. Restituisce il vettore riga con i valori mancanti imputati utilizzando la stima dei minimi quadrati.

**JMP Versione aggiunta:** 14

```jsl

Scoring Impute(
	[1 2 3 . 4 .],
	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1]
);

```

### Shape

**Sintassi:** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**Descrizione:** Rimodella la matrice o scalare M tra le righe per creare nr righe per nc colonne. Un valore mancante è ammesso per nr. I dati da M sono replicati secondo necessità per riempire la matrice nr per nc. L&apos;argomento facoltativo <<bycol riempie i dati per colonna. Per impostazione predefinita, i dati sono riempiti per riga. Utilizzi comuni sono rimodellare un vettore in una matrice o vettorializzare una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ), Shape( [11 22, 33 44], ., 4 )
	}
);

```

### Solve

**Sintassi:** y = Solve( A, B )

**Descrizione:** Risolve il sistema lineare A*x=B per x. La funzione Solve() è equivalente a Inverse(A)*B se A è non-singolare. Nota: l&apos;argomento A deve essere una matrice quadrata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**Sintassi:** y = Sort Ascending( x )

**Descrizione:** Restituisce una copia dell&apos;elenco o matrice x con gli elementi in ordine crescente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**Sintassi:** y = Sort Descending( x )

**Descrizione:** Restituisce una copia dell&apos;elenco o matrice x con gli elementi in ordine decrescente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sort Descending( {111, 212, 133, 114, 55} );

```

### Sparse SVD

**Sintassi:** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**Descrizione:** Calcola la scomposizione di valori singolare della matrice X utilizzando il metodo di Lanczos implicitamente riavviato, parzialmente riortogonalizzato per matrici sparse restituendo un elenco {U, M, V} per cui U*diag(M)*V` è uguale a X.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Spline Coef

**Sintassi:** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**Descrizione:** Returns a five-column matrix of coefficients in the following order: knots||a||b||c||d for each of the unique values in x. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**Sintassi:** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**Descrizione:** Valuta le previsioni spline usando la matrice coef nella stessa forma restituita dalla funzione Spline Coef(). extrapolation indica quanto estendere la valutazione oltre il range di spline, come frazione del range, prima di restituire valori mancanti.

**JMP Versione aggiunta:** prima della versione 14

```jsl


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

**Sintassi:** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**Descrizione:** Returns the smoothed predicted values from a spline fit. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sweep

**Sintassi:** y = Sweep( A, &lt;indices&gt; )

**Descrizione:** Restituisce lo sweep della matrice A su pivot diagonali indicati da indices. È un metodo per invertire una matrice un pivot alla volta.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**Sintassi:** y = Sym Matrix Mult BLAS( A, B, ... )

**Descrizione:** Esegue una moltiplicazione matriciale, dove A è una matrice simmetrica. Gli argomenti delle matrici devono essere appropriati: NCol(A)==NRow(B).

**JMP Versione aggiunta:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### Trace

**Sintassi:** y = Trace( x )

**Descrizione:** Restituisce la somma degli elementi diagonali di una matrice quadrata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Trace( [11 22, 33 44] );

```

### Transpose

**Sintassi:** y = Transpose( matrix ); y = matrix`

**Descrizione:** Traspone l&apos;argomento della matrice scambiando tra loro le righe e le colonne.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### V Concat

**Sintassi:** y = a |/ b; y = V Concat( a, b, ... )

**Descrizione:** Concatena le matrici verticalmente. Gli argomenti devono avere il medesimo numero di colonne.

**JMP Versione aggiunta:** prima della versione 14

```jsl

[11 22] |/ [33 44];

```

### V Concat To

**Sintassi:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**Descrizione:** Concatena sul posto verticalmente. a |/= b è equivalente a = a |/ b. Si tratta di un operatore di assegnazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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

**Sintassi:** b = V Max( matrix )

**Descrizione:** Restituisce un vettore di riga contenente il massimo di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**Sintassi:** m = V Mean( matrix )

**Descrizione:** Restituisce un vettore di riga contenente la media di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**Sintassi:** m = V Median( matrix )

**Descrizione:** Restituisce il vettore di una riga contenente la mediana di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** 15

```jsl

V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**Sintassi:** a = V Min( matrix )

**Descrizione:** Restituisce un vettore di riga contenente il minimo di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**Sintassi:** m = V Quantile( matrix, p )

**Descrizione:** Restituisce il vettore di una riga contenente il quantile specificato p di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** 15

```jsl

V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**Sintassi:** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**Descrizione:** Restituisce una matrice centrata dalla mediana e scalata da una stima robusta della deviazione standard della matrice X. Gli argomenti booleani facoltativi specificano se centratura e scaling devono essere eseguiti.

**JMP Versione aggiunta:** 17

```jsl

V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Standardize

**Sintassi:** b = V Standardize( X )

**Descrizione:** Restituisce una matrice che è la versione centrata e scalata della matrice X. Ogni colonna di b ha media 0 e deviazione standard 1.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**Sintassi:** b = V Std( matrix )

**Descrizione:** Restituisce un vettore di riga contenente le deviazioni standard di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**Sintassi:** s = V Sum( matrix )

**Descrizione:** Restituisce il vettore di una riga contenente la somma di ogni colonna nell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

V Sum( [11 22, 33 44, 55 66] );

```

### VPTree

**Sintassi:** tab = VPTree( [ matrix ] )

**Descrizione:** Restituisce una tabella per la ricerca efficace dei vicini prossimi. Gli argomenti della matrice sono punti k-dimensionali. Non esiste alcun limite al numero di dimensioni o punti.

**JMP Versione aggiunta:** 16

```jsl

tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Varimax

**Sintassi:** {R,T} = Varimax( F, &lt;norm=1&gt; )

**Descrizione:** Effettua una rotazione varimax della matrice specificata F. Restituisce un elenco che contiene la matrice ruotata e la matrice a rotazione ortogonale. Per impostazione predefinita è effettuata una rotazione varimax normalizzata. Specificare norm = 0 per effettuare una rotazione varimax non normalizzata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**Sintassi:** y = Vec Diag( x )

**Descrizione:** Restituisce gli elementi diagonali della matrice quadrata come un vettore.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**Sintassi:** Vec Quadratic( S, X )

**Descrizione:** Viene valutato come Vec Diag( X * S * X` ).

**JMP Versione aggiunta:** prima della versione 14

```jsl

exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### Wavelet Basis Coef

**Sintassi:** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**Descrizione:** Restituisce la previsione ai punti x per il modello wavelet specificato. Il parametro grid è un vettore che specifica la griglia dei dati per il modello wavelet. Il parametro coef è un vettore di coefficienti wavelet. Il parametro wavelet è il nome del modello wavelet. Il parametro opzionale param è il parametro del modello wavelet (se necessario, il valore predefinito è 0).

**JMP Versione aggiunta:** 17

```jsl

Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

