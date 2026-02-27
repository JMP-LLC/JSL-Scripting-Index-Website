# Matrix



### Add Vectors BLAS

**Syntaxe :** z = Add Vectors BLAS( x, y, alpha )

**JMP Version ajoutée :** 17

```jsl

x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### All

**Syntaxe :** y = All( x, ... )

**Description :** Renvoie 1 si tous les éléments ne sont pas zéro, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

All( [1 2 3] );

```

### Any

**Syntaxe :** y = Any( x, ... )

**Description :** Renvoie 1 si un élément n&apos;est pas zéro, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Any( [1 0 2] );

```

### B Spline Coef

**Syntaxe :** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Description :** Renvoie la matrice des coefficients B-splines. Internal Knot Grid est soit le nombre de points souhaité pour le nœud, sur la base des percentiles de x, ou un vecteur spécifiant les points du nœud interne. Le paramètre facultatif degree spécifie le degré des B-splines, 3 étant la valeur par défaut. Le paramètre facultatif KnotEndPoints prend une matrice 2x1 contenant les positions [inférieure, supérieure] des nœuds sur la frontière. Les points finaux du nœud sont, par défaut, le min. et le max. de x. Le deuxième exemple montre comment les coefficients B-splines peuvent être utilisés comme matrice de plan dans un modèle linéaire.

**JMP Version ajoutée :** 14

#### Exemple 1

```jsl

B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

#### Exemple 2

```jsl

xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression( yy, designMat, <<nointercept );

```

### CDF

**Syntaxe :** {QuantVec, CumProbVec} = CDF( Y )

**Description :** Renvoie les valeurs de la fonction de distribution empirique de probabilité cumulée du vecteur ou de la liste Y. La probabilité cumulée est la proportion des valeurs de données inférieures ou égales à l’entrée correspondante dans le vecteur QuantVec

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** L2 = Chol Update( L, V, C )

**Description :** Renvoie une racine de Cholesky mise à jour de A+V*C*V&apos; où C est une matrice symétrique m par m et V une matrice n par m. L&apos;argument L doit être la racine de Cholesky d&apos;une matrice A n par n.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** L = Cholesky( A )

**Description :** Renvoie la décomposition de Cholesky d&apos;une matrice semi-définie positive. L est une matrice triangulaire inférieure telle que L*L` = A.

**JMP Version ajoutée :** Avant la version 14

```jsl

Cholesky( [1 2, 2 13] );

```

### Correlation

**Syntaxe :** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Description :** Renvoie la matrice de corrélation de l&apos;argument x de la matrice. L&apos;argument "Pairwise" traite les valeurs manquantes par paire plutôt que par ligne. L&apos;argument "Shrink" réduit les éléments non diagonaux d&apos;un facteur déterminé à l&apos;aide de la méthode décrite dans Schafer and Strimmer, 2005. Les arguments Freq et Weight spécifient les vecteurs des valeurs de fréquence et de pondération, respectivement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Covariance

**Syntaxe :** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Description :** Renvoie la matrice de covariance de l&apos;argument x de la matrice. L&apos;argument "Pairwise" traite les valeurs manquantes par paire plutôt que par ligne. L&apos;argument "Shrink" réduit les éléments non diagonaux d&apos;un facteur déterminé à l&apos;aide de la méthode décrite dans Schafer and Strimmer, 2005. Les arguments Freq et Weight spécifient les vecteurs des valeurs de fréquence et de pondération, respectivement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Design

**Syntaxe :** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne de 1 et de 0 pour chaque valeur unique de l&apos;argument. Utiliser l&apos;argument levelsList pour spécifier une liste des niveaux pour la matrice de plan. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne de 1 et de 0 pour toutes les valeurs uniques de l&apos;argument à l&apos;exception de la dernière. Le dernier niveau est codé en tant que ligne de 0. Si l&apos;argument levelsList est spécifié, le dernier niveau est également le dernier niveau dans levelsList. Sinon, le dernier niveau est défini comme la valeur la plus grande dans v. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument  <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne de 1 et de 0 pour toutes les valeurs uniques de l&apos;argument à l&apos;exception de la dernière. Le dernier niveau est codé en tant que ligne de -1. Si l&apos;argument levelsList est spécifié, le dernier niveau est également le dernier niveau dans levelsList. Sinon, le dernier niveau est défini comme la valeur la plus grande dans v. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne pour toutes les valeurs uniques de l&apos;argument à l&apos;exception de la dernière. Le premier niveau est codé en tant que ligne de 0. Chacun des (X) niveaux suivants de l&apos;argument levelsList est codé en tant que ligne de (n-1) 1 et le reste en tant que 0. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Description :** Crée une matrice de plan qui contient une colonne de 1 et de 0 pour toutes les valeurs uniques de l&apos;argument à l&apos;exception de la dernière. Le dernier niveau est codé en tant que ligne de -1. Si l&apos;argument levelsList est spécifié, le dernier niveau est également le dernier niveau dans levelsList. Sinon, le dernier niveau est défini comme la valeur la plus grande dans v. Si l&apos;argument <<Levels est spécifié, la valeur de renvoi est une liste contenant la matrice de plan et une liste des niveaux. Si l&apos;argument <<ElseMissing est spécifié, les valeurs manquantes sont placées dans la matrice de plan pour les valeurs de l&apos;argument v n&apos;apparaissant pas dans la levelsList. Sinon, des 0 sont placés dans la matrice de plan.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Det( x )

**Description :** Renvoie le déterminant d&apos;une matrice carrée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Det( [11 22, 33 44] );

```

### Diag

**Syntaxe :** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**Description :** Construit une matrice diagonale à partir d&apos;une matrice ou d&apos;un vecteur. Si deux arguments sont spécifiés,concatène les matrices diagonalement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Diag( [11 22] );

```

### Direct Product

**Syntaxe :** y = Direct Product( A, B )

**Description :** Renvoie le produit cartésien ou de Kronecker. Le résultat est A[i,j]*B, en développant tous les produits possibles.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**Description :** Crée une matrice de distances entre les lignes de x1 et les lignes de x2. Pour personnaliser le codage et les puissances pour chaque colonne, spécifiez les arguments supplémentaires scale et powers. La fonction Exp(-distance(x1,x2)) est utilisée pour le krigeage.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = A :/ B; y = E Div( A, B )

**Description :** Renvoie une division par élément de matrices.

**JMP Version ajoutée :** Avant la version 14

```jsl

[11 22 33] :/ [1 2 3];

```

### E Max

**Syntaxe :** y = E Max( A, B )

**Description :** Renvoie une matrice qui est le maximum des éléments correspondants de ses arguments.

**JMP Version ajoutée :** 16

```jsl

E Max( [1 22 33], [11 2 3] );

```

### E Min

**Syntaxe :** y = E Min( A, B )

**Description :** Renvoie une matrice qui est le minimum des éléments correspondants de ses arguments.

**JMP Version ajoutée :** 16

```jsl

E Min( [1 22 33], [11 2 3] );

```

### E Mult

**Syntaxe :** y = A :* B; y = E Mult( A, B )

**Description :** Renvoie une multiplication par élément de matrices.

**JMP Version ajoutée :** Avant la version 14

```jsl

[1 2 3] :* [11 22 33];

```

### Eigen

**Syntaxe :** {M, E} = Eigen( X )

**Description :** Réalise la diagonalisation d&apos;une matrice X symétrique en valeurs propres. Renvoie la liste {M, E} telle que E*Diag(M)*E` = X.

**JMP Version ajoutée :** Avant la version 14

```jsl

X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**Syntaxe :** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP Version ajoutée :** 17

```jsl

X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Estimate Bartlett Factor Score

**Syntaxe :** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**Description :** En utilisant la méthode de Bartlett, estime les scores des facteurs à partir d&apos;un modèle d&apos;équation structurelle (MES). Les arguments d&apos;entrée sont un vecteur de données ligne, la moyenne à modèle implicite pour les variables manifestes, la moyenne à modèle implicite pour les variables latentes, la matrice S RAM et une matrice A RAM provenant d&apos;un MES. Renvoie un vecteur ligne avec les scores des facteurs estimés sur la base du MES.

**JMP Version ajoutée :** 16

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

**Syntaxe :** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**Description :** En utilisant la méthode par régression, estime les scores des facteurs à partir d&apos;un modèle d&apos;équation structurelle (MES). Les arguments d&apos;entrée sont un vecteur de données ligne, une matrice de variance-covariance à modèle implicite, un vecteur des moyennes des variables manifestes à modèle implicite, et un vecteur des moyennes des variables latentes à modèle implicite. Renvoie un vecteur ligne avec les scores des facteurs estimés sur la base du MES.

**JMP Version ajoutée :** 15

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

**Syntaxe :** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**Description :** Renvoie la matrice des coefficients de la Base de Fourier. Number Pairs est le nombre de paires sin() et cos() de la base. Le paramètre facultatif Period spécifie la période pour les fonctions trigonométriques, max(x) - min(x) + 1 par défaut.

**JMP Version ajoutée :** 14

```jsl

Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### G Inverse

**Syntaxe :** g = G Inverse( A )

**Description :** Renvoie la matrice inverse généralisée (Moore-Penrose).

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( G Inverse( [11 22, 33 44] ), 2 );

```

### H Direct Product

**Syntaxe :** y = H Direct Product( A, B )

**Description :** Renvoie le produit cartésien horizontal, qui est le produit cartésien de chaque ligne des matrices A et B.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Hadamard( n, &lt;normalize = 0&gt; )

**Description :** Crée une matrice de Hadamard d&apos;ordre n.

**JMP Version ajoutée :** 15

```jsl

Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Hough Line Transform

**Syntaxe :** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**Description :** Renvoie la transformation de Hough pour détecter les lignes dans les données image

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

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

#### Exemple 2

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

**Syntaxe :** y = Identity( n )

**Description :** Crée une matrice unité n -par-n, les éléments diagonaux étant des 1 et les autres éléments des zéros.

**JMP Version ajoutée :** Avant la version 14

```jsl

Identity( 2 );

```

### Index

**Syntaxe :** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**Description :** Renvoie une matrice de lignes qui contient la séquence des valeurs de n1 à n2 par incréments de n3.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 :: 10;

```

### Inner Product BLAS

**Syntaxe :** y = Inner Product BLAS( A, B, ... )

**JMP Version ajoutée :** 17

```jsl

a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Inv

**Syntaxe :** y = Inverse( x ); y = Inv( x )

**Description :** Renvoie l’inverse de l’argument x, qui doit être une matrice carrée et non singulière.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**Syntaxe :** y = Inv Update( S, X, &lt;w=1&gt; )

**Description :** Renvoie une matrice inverse actualisée, où le premier argument S est une matrice définie positive symétrique avec le même nombre de colonnes que X, le deuxième argument X est une matrice qui contient les lignes à ajouter ou à supprimer et le troisième argument w détermine si ajouter ou supprimer des lignes (utiliser 1 pour ajouter des lignes et -1 pour en supprimer). Cette fonction évalue la quantité S-w*S*X`*Inv(I+w*X*S*X`)*X*S, où I est une matrice identité et Inv(A) désigne l’inverse de la matrice A.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Inverse( x ); y = Inv( x )

**Description :** Renvoie l’inverse de l’argument x, qui doit être une matrice carrée et non singulière.

**JMP Version ajoutée :** Avant la version 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Is Matrix

**Syntaxe :** y = Is Matrix( x )

**Description :** Renvoie 1 si l&apos;argument est une matrice, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Matrix( [11 22 33] );

```

### J

**Syntaxe :** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**Description :** Crée une matrice (nr par nc) des valeurs déterminées par le troisième argument. La valeur par défaut du deuxième argument est égale à celle du premier argument. La valeur par défaut du troisième argument est 1. Mais le troisième argument peut être un nombre, un nom de variable d&apos;un nombre ou un code JSL. Si le troisième argument est un code, le code est évalué et la valeur de renvoi est assignée à chaque élément de la matrice, élément par élément, ligne par ligne.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**Description :** Renvoie une table de données permettant de chercher efficacement les proches voisins. Les arguments de la matrice sont des points d’un espace k-dimensionnel. Il n&apos;existe aucune limite au nombre de dimensions ou de points.

**JMP Version ajoutée :** Avant la version 14

```jsl

tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### Least Squares Solve

**Syntaxe :** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**Description :** Renvoie une liste qui contient un vecteur des estimations, Beta = Inverse(X&apos;X)X&apos;y, et la matrice des variances estimées de Beta. L&apos;argument facultatif <<noIntercept spécifie un modèle sans constante. L&apos;argument facultatif <<weights spécifie un vecteur des pondérations pour le calcul les moindres carrés pondérés. L&apos;argument facultatif <<method vous permet de choisir entre la méthode Sweep par défaut et une méthode inverse généralisée ("GInv") pour résoudre les équations normales.

**JMP Version ajoutée :** Avant la version 14

```jsl

/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Linear Regression

**Syntaxe :** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**Description :** Ajuste une régression linéaire pour le modèle supposé y = X * beta + error. L&apos;argument facultatif <<noIntercept spécifie un modèle sans constante. L&apos;argument facultatif <<printToLog spécifie qu&apos;un résumé de l&apos;ajustement est imprimé dans la fenêtre log. L&apos;argument facultatif weight spécifie un vecteur des pondérations pour le calcul des moindres carrés pondérés, et l&apos;argument facultatif freq spécifie un vecteur des fréquences. Renvoie une liste contenant un vecteur des estimations, un vecteur des erreurs standard et une liste des diagnostics. La liste des diagnostics contient les vecteurs des statistiques t et les p-values pour les estimations, ainsi que les valeurs R carré et R carré ajustées pour l&apos;ajustement de la régression.

**JMP Version ajoutée :** 14

#### Exemple 1

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

#### Exemple 2

```jsl

/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} =
Linear Regression( y, X, <<noIntercept, <<printToLog );

```

#### Exemple 3

```jsl

/*Categorical Variable Example*/
/*Model: y = beta_1*boy + beta_2*girl + beta_3*x + error*/
y = [3, 5, 7, 5];
x = [1, 2, 3, 4];
gender = {"boy", "girl", "girl", "boy"};
designMat = Design( gender ) || x;
{Estimates, Std_Error, Diagnostics} =
Linear Regression( y, designMat, <<noIntercept, <<printToLog );

```

### Loc

**Syntaxe :** y = Loc( m ); y = Loc( v, x )

**Description :** Renvoie une matrice des positions de la matrice m qui sont différentes de zéro. Si deux arguments sont spécifiés, Loc(v, x) renvoie une matrice des positions de la liste ou une matrice v, égales à la valeur x. Préférez Where à la place lorsque possible.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

#### Exemple 2

```jsl

Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

#### Exemple 3

```jsl

Loc( [5, 7, 5, ., 5], 5 );

```

#### Exemple 4

```jsl

Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

#### Exemple 5

```jsl

Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**Syntaxe :** y = Loc Max( x )

**Description :** Renvoie la première position dans x de la valeur maximale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**Syntaxe :** y = Loc Min( x )

**Description :** Renvoie la première position dans x de la valeur minimale.

**JMP Version ajoutée :** Avant la version 14

```jsl

Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**Syntaxe :** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**Description :** Renvoie un vecteur de numéros de lignes d&apos;une matrice, lesquelles ne contiennent  pas de valeurs manquantes ; ou pour les listes, celles qui n’ont pas de nombres  manquants ou de caractères vides.

**JMP Version ajoutée :** Avant la version 14

```jsl

Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**Syntaxe :** idx = Loc Sorted( x, y )

**Description :** Crée un vecteur colonne des positions d&apos;indice où les valeurs de x sont inférieures ou égales à celles de y sur la base d&apos;une recherche binaire. x doit être une matrice triée par ordre croissant, sans valeur manquante.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

```

### Low Rank Symmetric Update BLAS

**Syntaxe :** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP Version ajoutée :** 17

```jsl

A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Matrix

**Syntaxe :** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} )y = Matrix( {x1, ..., xn} )y = Matrix( n, m )

**Description :** Construit une matrice n en fonction de m. Si vous spécifiez une liste de n listes n contenant chacune m valeurs de ligne, la matrice est formée par concaténation verticale des listes évaluées. Si vous spécifiez une seule liste de n éléments, la valeur de renvoi est un vecteur colonne n en fonction de 1. Si vous spécifiez deux arguments entiers, la valeur de renvoi est une matrice de zéros contenant n lignes et m colonnes.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

#### Exemple 2

```jsl

Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

#### Exemple 3

```jsl

Matrix( {2, 3 + 7} );

```

#### Exemple 4

```jsl

Matrix( 2, 3 );

```

### Matrix Mult

**Syntaxe :** y = Matrix Mult( A, B, ... ); y = A * B

**Description :** Effectue une multiplication de matrices. Les arguments de la matrice doivent être conformes : NCol(a)==NRow(b). Notez que A * B fonctionne également.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = Matrix Mult BLAS( A, B, ... )

**Description :** Effectue une multiplication de matrices. Les arguments de la matrice doivent être conformes : NCol(A)==NRow(B).

**JMP Version ajoutée :** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**Syntaxe :** r = Matrix Rank( X )

**Description :** Renvoie le rang de la matrice X.

**JMP Version ajoutée :** 14

```jsl

Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Mode

**Syntaxe :** y = Mode( list or matrix )

**Description :** Choisit l&apos;élément le « plus fréquent » d&apos;une matrice ou d&apos;une liste, la valeur inférieure pour les ex-aequos

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Multivariate Normal Impute

**Syntaxe :** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**Description :** Renvoie un vecteur réponse avec des valeurs imputées aux valeurs manquantes du vecteur réponses yVec. Les imputations se basent sur une distribution normale multivariée avec un vecteur de moyenne meanYvec et une matrice de covariance symétrique symCovMat. Les arguments facultatifs colMin et colMax sont les vecteurs respectifs des minimums et des maximums des colonnes. Ces arguments donnent les limites pour les imputations.

**JMP Version ajoutée :** Avant la version 14

```jsl

mat = [0.430735257211985 -0.935632420013493 . 0.424649913158299,
. -0.687720061441453 0.29665732536624 -1.94898001941576,
-0.0425472526673373 0.463229145080277 0.635619352779951 .];
cov = Covariance( mat, <<"Pairwise"/*, <<"shrink"*/ );
colMean = V Mean( mat );
colMin = V Min( mat );
colMax = V Max( mat );
For( it = 1, it <= N Row( mat ), it++,
	mat[it, 0] = Multivariate Normal Impute(
		mat[it, 0],
		colMean,
		cov,
		colMin,
		colMax
	)`
);
Print( mat );

```

### N Col

**Syntaxe :** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**Description :** Renvoie le nombre de colonnes de la table de données active, dans une table de données spécifiée ou dans une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Col( [11 22, 33 44] );

```

### N Cols

**Syntaxe :** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**Description :** Renvoie le nombre de colonnes de la table de données active, dans une table de données spécifiée ou dans une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Col( [11 22, 33 44] );

```

### NChooseK Matrix

**Syntaxe :** m = NChooseK Matrix( n, k )

**Description :** Crée une matrice de nChooseK(n,k) lignes et k colonnes formant toutes les combinaisons de k entiers compris entre 1 et n.

**JMP Version ajoutée :** Avant la version 14

```jsl

Print( NChooseK Matrix( 5, 3 ) );

```

### Ortho

**Syntaxe :** L = Ortho( A, &lt;Centered( 0 )&gt;, &lt;Scaled( 1 )&gt; )

**Description :** Orthogonalise les colonnes d&apos;une matrice. L&apos;option « Centré » conduit à une somme nulle des éléments de la colonne. L&apos;option « Normalisation » conduit à une norme unité des vecteurs correspondant aux colonnes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**Syntaxe :** L = Ortho Poly( V, order )

**Description :** Renvoie des polynômes orthogonaux du vecteur V jusqu&apos;à l&apos;ordre spécifié par l’argument order. L’argument V peut être une ligne ou un vecteur colonne. L&apos;option de réduction les rend de longueur unitaire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ortho Poly( 1 :: 10, 2 );

```

### P Spline Coef

**Syntaxe :** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Description :** Renvoie la matrice des coefficients P-splines. Internal Knot Grid est soit le nombre de points souhaité pour le nœud, sur la base des percentiles de x, ou un vecteur spécifiant les points du nœud interne. Le paramètre facultatif degree spécifie le degré des P-splines, 3 étant la valeur par défaut.

**JMP Version ajoutée :** 14

```jsl

P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Parallel Assign

**Syntaxe :** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**Description :** Utilisez des threads multiples pour assigner des valeurs à la matrice. Si un thread génère une exception, un message est ajouté au log et la valeur 0 est renvoyée. Si tous les threads se terminent sans erreur, la valeur 1 est renvoyée. Les fonctions qui lancent des plates-formes, créent ou utilisent des tables de données, ou accèdent au sous-système graphique sont prises en charge uniquement dans le thread principal. Elles génèrent une exception en cas d&apos;appel depuis un thread worker.

**JMP Version ajoutée :** Avant la version 14

```jsl

m = J( 3, 2, -1 );
If(
	Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b )
	 == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Print Matrix

**Syntaxe :** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**Description :** Imprime la matrice M. L&apos;argument facultatif ignore locale détermine si l&apos;impression des séparateurs décimaux doit respecter les informations locales; zéro signifie qu&apos;elle les respecte. L&apos;argument facultatif style détermine si utiliser un style et lequel. Les styles disponibles sont : parseable, qui est une expression de matrice JSL reformatée, latex et other. Lorsque l&apos;argument style est other, les trois derniers arguments facultatifs définissent les caractères de début et de fin des lignes imprimées et les caractères de séparation des entrées concaténées.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** {Q, R} = QR( X )

**Description :** Crée une matrice orthogonale Q m par m et une matrice triangulaire supérieure R m par n, de sorte que X = Q * R. L&apos;argument X est une matrice m par n.

**JMP Version ajoutée :** Avant la version 14

```jsl

QR( [11 22, 33 44] );

```

### QR LAPACK

**Syntaxe :** {Q, R} = QR LAPACK( X )

**Description :** Crée une matrice orthogonale Q m par k et une matrice triangulaire supérieure R k par n, de sorte que X = Q * R. L&apos;argument X est une matrice m par n, où k=min(m, n).

**JMP Version ajoutée :** 17

```jsl

QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**Syntaxe :** y = Quadratic Form BLAS( A, x )

**JMP Version ajoutée :** 17

```jsl

A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Random SVD

**Syntaxe :** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**Description :** Calcule la décomposition en valeurs singulières de la matrice X à l&apos;aide de la décomposition en valeurs singulières randomisée en retournant une liste {U, M, V} telle que U*diag(M)*V` est égal à X.

**JMP Version ajoutée :** 17

```jsl

Random SVD( [11 22, 33 44], 1 );

```

### Rank

**Syntaxe :** y = Rank Index( x )

**Description :** Renvoie un vecteur d&apos;indices qui, utilisé comme un indice du vecteur v d&apos;origine, trie le vecteur par rang. Exclut les valeurs manquantes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**Syntaxe :** y = Rank Index( x )

**Description :** Renvoie un vecteur d&apos;indices qui, utilisé comme un indice du vecteur v d&apos;origine, trie le vecteur par rang. Exclut les valeurs manquantes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**Syntaxe :** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Description :** Renvoie un vecteur de rangs des valeurs de x, de bas à haut comme de 1 à n, ex-aequos arbitrairement.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**Syntaxe :** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Description :** Renvoie un vecteur de rangs des valeurs de x, en prenant la moyenne des rangs des ex-aequos.

**JMP Version ajoutée :** Avant la version 14

```jsl

Ranking Tie( [33, 22, 44, 11, 33] );

```

### Robust PCA

**Syntaxe :** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**Description :** Décompose de manière robuste les données en une matrice de rang faible et une matrice de résidus clairsemée. Les valeurs aberrantes sont détectées dans les résidus. Les valeurs manquantes peuvent également être imputées.

**JMP Version ajoutée :** 16

```jsl

X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### SVD

**Syntaxe :** {U, M, V} = SVD( X )

**Description :** Calcule la décomposition en valeurs singulières de la matrice X en retournant une liste {U, M, V} telle que U*diag(M)*V` est égal à X.

**JMP Version ajoutée :** Avant la version 14

```jsl

SVD( [11 22, 33 44] );

```

### SVD LAPACK

**Syntaxe :** {U, M, V} = SVD LAPACK( X )

**Description :** Calcule la décomposition en valeurs singulières de la matrice X en retournant une liste {U, M, V} telle que U*diag(M)*V` est égal à X.

**JMP Version ajoutée :** 17

```jsl

SVD LAPACK( [11 22, 33 44] );

```

### Scoring Impute

**Syntaxe :** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**Description :** Fournit une fonctionnalité d&apos;imputation en continu à l&apos;algorithme d&apos;Imputation automatisée des données (ADI). Les arguments d&apos;entrée sont un vecteur ligne qui contient les valeurs manquantes, une matrice des loadings (aussi nommée matrice V) qui est produite par l&apos;algorithme ADI, un vecteur de la moyenne des colonnes ignorant les cellules manquantes et un vecteur de l&apos;écart-type des colonnes ignorant les cellules manquantes. Renvoie le vecteur ligne avec les valeurs manquantes imputées à l&apos;aide de l&apos;estimation des moindres carrés.

**JMP Version ajoutée :** 14

```jsl

Scoring Impute(
	[1 2 3 . 4 .],
	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1]
);

```

### Shape

**Syntaxe :** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**Description :** Restructure la matrice M ou le scalaire dans les lignes de sorte qu&apos;il y ait nr lignes pour nc colonnes. Une valeur manquante est autorisée pour nr. Les données de M peuvent être répliquées de sorte à remplir la matrice avec nr pour nc. L&apos;argument facultatif <<bycol remplit les données par colonne. Par défaut, les données sont remplies par ligne. Cette option est généralement utilisée pour restructurer un vecteur dans une matrice ou pour vectoriser une matrice.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ),
	Shape( [11 22, 33 44], ., 4 )}
);

```

### Solve

**Syntaxe :** y = Solve( A, B )

**Description :** Résout le système linéaireA*x=B pour x. La fonction Solve() est équivalente à Inverse(A)*B si A est non singulier. Notez que l’argument A doit être une matrice carrée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**Syntaxe :** y = Sort Ascending( x )

**Description :** Renvoie une copie de la liste ou de la matrice x avec les éléments dans l’ordre croissant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**Syntaxe :** y = Sort Descending( x )

**Description :** Renvoie une copie de la liste ou de la matrice x avec les éléments dans l’ordre décroissant.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sort Descending( {111, 212, 133, 114, 55} );

```

### Sparse SVD

**Syntaxe :** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**Description :** Calcule la décomposition en valeurs singulières de la matrice X en utilisant la méthode de redémarrage implicite et de réorthogonalisation partielle de Lanczos, pour analyser les matrices en renvoyant une liste {U, M, V} de sorte que U*diag(M)*V` est égal à X.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Spline Coef

**Syntaxe :** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**Description :** Returns a five-column matrix of coefficients in the following order: knots||a||b||c||d for each of the unique values in x. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**Syntaxe :** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**Description :** Évalue les prévisions des splines en utilisant la matrice coef sous la même forme que celle renvoyée par la fonction Spline Coef(). extrapolation indique le dépassement de l&apos;étendue de la spline, sous la forme d&apos;une fraction de l&apos;étendue, de sorte à pouvoir étendre l&apos;évaluation avant de renvoyer les valeurs manquantes.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**Description :** Returns the smoothed predicted values from a spline fit. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sweep

**Syntaxe :** y = Sweep( A, &lt;indices&gt; )

**Description :** Renvoie le balayage de la matrice A sur les pivots de la diagonale indiqués par indices. Il s&apos;agit d&apos;une façon d&apos;inverser une matrice un pivot à la fois.

**JMP Version ajoutée :** Avant la version 14

```jsl

exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**Syntaxe :** y = Sym Matrix Mult BLAS( A, B, ... )

**Description :** Effectue une multiplication de matrices, où A est une matrice symétrique. Les arguments de la matrice doivent être conformes : NCol(A)==NRow(B).

**JMP Version ajoutée :** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### Trace

**Syntaxe :** y = Trace( x )

**Description :** Renvoie la somme des éléments diagonaux d&apos;une matrice carrée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Trace( [11 22, 33 44] );

```

### Transpose

**Syntaxe :** y = Transpose( matrix ); y = matrix`

**Description :** Transpose l&apos;argument d&apos;une matrice en interchangeant les lignes et les colonnes.

**JMP Version ajoutée :** Avant la version 14

```jsl

Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### V Concat

**Syntaxe :** y = a |/ b; y = V Concat( a, b, ... )

**Description :** Concatène les matrices verticalement. Les arguments doivent avoir le même nombre de colonnes.

**JMP Version ajoutée :** Avant la version 14

```jsl

[11 22] |/ [33 44];

```

### V Concat To

**Syntaxe :** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**Description :** Concatène sur place, verticalement. a |/= b est équivalent à a = a |/ b. Il s&apos;agit d&apos;un opérateur d&apos;affectation.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** b = V Max( matrix )

**Description :** Renvoie un vecteur ligne contenant le maximum de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**Syntaxe :** m = V Mean( matrix )

**Description :** Renvoie un vecteur ligne contenant la moyenne de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**Syntaxe :** m = V Median( matrix )

**Description :** Renvoie un vecteur ligne contenant la médiane de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** 15

```jsl

V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**Syntaxe :** a = V Min( matrix )

**Description :** Renvoie un vecteur ligne contenant le minimum de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**Syntaxe :** m = V Quantile( matrix, p )

**Description :** Renvoie un vecteur ligne contenant le quantile p spécifié de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** 15

```jsl

V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**Syntaxe :** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**Description :** Renvoie une matrice centrée par la médiane et réduite par une estimation robuste de l&apos;écart-type de la matrice X. Les arguments booléens facultatifs spécifient si le centrage et la réduction sont effectués.

**JMP Version ajoutée :** 17

```jsl

V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Standardize

**Syntaxe :** b = V Standardize( X )

**Description :** Renvoie une matrice qui est la version centrée et réduite de la matrice X. Chaque colonne de b a une moyenne de 0 et un écart-type de 1.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**Syntaxe :** b = V Std( matrix )

**Description :** Renvoie un vecteur ligne contenant les écarts-types de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**Syntaxe :** s = V Sum( matrix )

**Description :** Renvoie un vecteur ligne contenant la somme de chaque colonne dans l&apos;argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

V Sum( [11 22, 33 44, 55 66] );

```

### VPTree

**Syntaxe :** tab = VPTree( [ matrix ] )

**Description :** Renvoie une table de données permettant de chercher efficacement les proches voisins. Les arguments de la matrice sont des points d’un espace k-dimensionnel. Il n&apos;existe aucune limite au nombre de dimensions ou de points.

**JMP Version ajoutée :** 16

```jsl

tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Varimax

**Syntaxe :** {R,T} = Varimax( F, &lt;norm=1&gt; )

**Description :** Effectue une rotation Varimax de la matrice F spécifiée. Renvoie une liste qui contient la matrice pivotée et la matrice de rotation orthogonale. Par défaut, une rotation Varimax normalisée est effectuée. Spécifier norm = 0 pour effectuer une rotation Varimax non normalisée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**Syntaxe :** y = Vec Diag( x )

**Description :** Renvoie les éléments diagonaux de la matrice carrée comme un vecteur.

**JMP Version ajoutée :** Avant la version 14

```jsl

Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**Syntaxe :** Vec Quadratic( S, X )

**Description :** Évalue comme Vec Diag( X * S * X` ).

**JMP Version ajoutée :** Avant la version 14

```jsl

exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### Wavelet Basis Coef

**Syntaxe :** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**Description :** Renvoie la prévision aux points x pour le modèle Ondelettes spécifié. Le paramètre grid est un vecteur qui spécifie la grille de données pour le modèle Ondelettes. Le paramètre coef est un vecteur des coefficients d&apos;ondelette. Le paramètre wavelet est le nom du modèle Ondelettes. Le paramètre param facultatif est le paramètre du modèle Ondelettes (si nécessaire, 0 par défaut).

**JMP Version ajoutée :** 17

```jsl

Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

