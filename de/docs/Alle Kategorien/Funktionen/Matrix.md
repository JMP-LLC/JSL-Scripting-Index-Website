# Matrix



## Funktionen

### Add Vectors BLAS

**Syntax:** z = Add Vectors BLAS( x, y, alpha )

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### All

**Syntax:** y = All( x, ... )

**Beschreibung:** Gibt 1 zurück, wenn alle Elemente ungleich 0 sind, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
All( [1 2 3] );

```

### Any

**Syntax:** y = Any( x, ... )

**Beschreibung:** Gibt 1 zurück, wenn ein Element ungleich 0 ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Any( [1 0 2] );

```

### B Spline Coef

**Syntax:** coef = B Spline Coef( x, Internal Knot Grid, <degree = 3>, <KnotEndPoints = min(x) || max(x)> )

**Beschreibung:** Gibt die Matrix von B-Spline-Koeffizienten zurück. Internal Knot Grid ist entweder die Anzahl der gewünschten Knotenpunkte basierend auf Perzentilen von x oder ein Vektor, der die internen Knotenpunkte angibt. Der optionale Parameter degree gibt den Grad der B-Splines mit einem Standardwert von 3 an. Der optionale Parameter KnotEndPoints benötigt eine 2x1-Matrix mit den Positionen [unten, oben] für die Knoten auf der Grenze. Die Knotenendpunkte haben standardmäßig die gleichen Min.- und Max.-Werte wie x. Das zweite Beispiel zeigt, wie B-Spline-Koeffizienten als Designmatrix in einem linearen Modell verwendet werden können.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression( yy, designMat, <<nointercept );

```

### CDF

**Syntax:** {QuantVec, CumProbVec} = CDF( Y )

**Beschreibung:** Gibt Werte der empirischen kumulierten Wahrscheinlichkeitsfunktion für Vektor oder Liste Y zurück. Die kumulierte Wahrscheinlichkeit ist der Anteil Datenpunkte kleiner oder gleich dem entsprechenden Eintrag im Vektor QuantVec.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** L2 = Chol Update( L, V, C )

**Beschreibung:** Gibt eine aktualisierte Cholesky-Wurzel von A+V*C*V&apos; zurück, wobei C eine symmetrische m x m Matrix und V eine n x m Matrix ist. Das Argument L muss die Cholesky-Wurzel einer n x n Matrix A sein

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** L = Cholesky( A )

**Beschreibung:** Gibt die Cholesky-Zerlegung einer positiv semidefiniten Matrix aus. L ist eine untere Dreiecksmatrix, so dass L*L` = A.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Cholesky( [1 2, 2 13] );

```

### Correlation

**Syntax:** y = Correlation( x , < <<"Pairwise" >, < <<"Shrink" >, < <<Freq(vector) >, < <<Weight(vector) > )

**Beschreibung:** Gibt die Korrelationsmatrix des Matrixarguments x zurück. Das Argument "Pairwise" verarbeitet fehlende Werte paarweise und nicht zeilenweise. Das Argument "Shrink" reduziert die nichtdiagonalen Elemente um einen Faktor, der über die in Schafer und Strimmer 2005 beschriebene Methode ermittelt wird. Die Argumente Freq und Weight geben Vektoren von Häufigkeits- bzw. Gewichtungswerten an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Covariance

**Syntax:** y = Covariance( x , < <<"Pairwise" >, < <<"Shrink" >, < <<Freq(vector) >, < <<Weight(vector) > )

**Beschreibung:** Gibt die Kovarianzmatrix des Matrixarguments x zurück. Das Argument "Pairwise" verarbeitet fehlende Werte paarweise und nicht zeilenweise. Das Argument "Shrink" reduziert die nichtdiagonalen Elemente um einen Faktor, der über die in Schafer und Strimmer 2005 beschriebene Methode ermittelt wird. Die Argumente Freq und Weight geben Vektoren von Häufigkeits- bzw. Gewichtungswerten an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Design

**Syntax:** y = Design( v, < levelsList|<<Levels, <<ElseMissing > )

**Beschreibung:** Erzeugt eine Designmatrix, die eine Spalte mit Einsen (1) und Nullen (0) für jeden eindeutigen Wert des Arguments enthält. Verwenden Sie das Argument levelsList, um eine Liste der Stufen für die Designmatrix anzugeben. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden in der Designmatrix Nullen (0) eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Design Last( v, < levelsList, <<ElseMissing > )

**Beschreibung:** Erstellt eine Designmatrix mit einer Spalte von Einsen (1) und Nullen (0) für alle bis auf den letzten eindeutigen Wert des Arguments. Die letzte Stufe ist als Zeile mit Nullen (0) codiert. Wenn das Argument levelsList angegeben ist, ist die letzte Stufe die letzte Stufe in levelsList. Ansonsten ist die letzte Stufe definiert als der größte Wert in v. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden in der Designmatrix Nullen (0) eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Design Nom( v, < levelsList|<<Levels, <<ElseMissing > )

**Beschreibung:** Erzeugt eine Designmatrix, die eine Spalte mit Einsen (1) und Nullen (0) für alle bis auf den letzten eindeutigen Wert des Arguments enthält. Die letzte Stufe ist als Zeile mit Minus-Einsen (-1) codiert. Wenn das Argument levelsList angegeben ist, ist die letzte Stufe die letzte Stufe in levelsList. Ansonsten ist die letzte Stufe definiert als der größte Wert in v. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden Nullen (0) in der Designmatrix eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Design Ord( v, < levelsList|<<Levels, <<ElseMissing > )

**Beschreibung:** Erzeugt eine Designmatrix, die eine Spalte für alle bis auf den letzten eindeutigen Wert des Arguments enthält. Die erste Stufe ist als Zeile mit Nullen (0) codiert. Jede nachfolgende (n-te) Stufe im Argument levelsList ist als Zeile mit (n-1) Einsen (1) und dem Rest als Nullen (0) codiert. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden Nullen (0) in der Designmatrix eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = DesignF( v, < levelsList|<<Levels, <<ElseMissing > )

**Beschreibung:** Erzeugt eine Designmatrix, die eine Spalte mit Einsen (1) und Nullen (0) für alle bis auf den letzten eindeutigen Wert des Arguments enthält. Die letzte Stufe ist als Zeile mit Minus-Einsen (-1) codiert. Wenn das Argument levelsList angegeben ist, ist die letzte Stufe die letzte Stufe in levelsList. Ansonsten ist die letzte Stufe definiert als der größte Wert in v. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden Nullen (0) in der Designmatrix eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Det( x )

**Beschreibung:** Gibt die Determinante einer Quadratmatrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Det( [11 22, 33 44] );

```

### Diag

**Syntax:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**Beschreibung:** Erstellt eine Diagonalmatrix aus einer Matrix oder einem Vektor. Wenn zwei Argumente angegeben werden, gibt die Funktion die diagonale Verkettung der Matrizen zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Diag( [11 22] );

```

### Direct Product

**Syntax:** y = Direct Product( A, B )

**Beschreibung:** Gibt das direkte oder Kronecker-Produkt zurück. Ergebnis ist A[i,j]*B, für alle möglichen Produkte.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Distance( x1, x2, <scales>, <powers> )

**Beschreibung:** Erzeugt eine Matrix der Abstände zwischen Zeilen von x1 und Zeilen von x2. Wenn Sie die Skalierung und Potenzen für jede Spalte benutzerspezifisch einrichten möchten, geben Sie die zusätzlichen Argumente scale und powers an. Für Kriging wird Exp(-distance(x1,x2)) verwendet.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = A :/ B; y = E Div( A, B )

**Beschreibung:** Gibt eine elementweise Division von Matrizen zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
[11 22 33] :/ [1 2 3];

```

### E Max

**Syntax:** y = E Max( A, B )

**Beschreibung:** Gibt eine Matrix zurück, bei der es sich um das Maximum der entsprechenden Elemente seiner Argumente handelt.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
E Max( [1 22 33], [11 2 3] );

```

### E Min

**Syntax:** y = E Min( A, B )

**Beschreibung:** Gibt eine Matrix zurück, bei der es sich um das Minimum der entsprechenden Elemente seiner Argumente handelt.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
E Min( [1 22 33], [11 2 3] );

```

### E Mult

**Syntax:** y = A :* B; y = E Mult( A, B )

**Beschreibung:** Gibt eine elementweise Multiplikation von Matrizen zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
[1 2 3] :* [11 22 33];

```

### Eigen

**Syntax:** {M, E} = Eigen( X )

**Beschreibung:** Führt eine Eigenwertzerlegung einer symmetrischen Matrix X durch. Gibt eine Liste {M, E} zurück, so dass E*Diag(M)*E` = X ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**Syntax:** z = Eigen BLAS( X, <nvec = ncol> )

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Estimate Bartlett Factor Score

**Syntax:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**Beschreibung:** Schätzt Faktor-Scores von einem Strukturgleichungsmodell (SEM) mit Hilfe von Bartletts Methode. Die Eingabeargumente sind ein Zeilenvektor von Daten, die durch das Modell implizierten Mittelwerte für die manifesten Variablen, die durch das Modell implizierten Mittelwerte für die latenten Variablen, die S-RAM-Matrix eines SEM und die A-RAM-Matrix eines SEM. Zurückgegeben wird ein Zeilenvektor mit geschätzten Faktor-Scores basierend auf dem SEM.

**JMP Version hinzugefügt:** 16

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

**Syntax:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**Beschreibung:** Schätzt Faktor-Scores von einem Strukturgleichungsmodell (SEM) mit Hilfe der Regressionsmethode. Die Eingabeargumente sind ein Zeilenvektor von Daten sowie folgende durch das Modell implizierte Parameter: Eine Varianz-Kovarianzmatrix, ein Vektor von manifesten Variablenmittelwerten und ein Vektor von latenten Variablenmittelwerten. Zurückgegeben wird ein Zeilenvektor mit geschätzten Faktor-Scores basierend auf dem SEM.

**JMP Version hinzugefügt:** 15

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

**Syntax:** coef = Fourier Basis Coef( x, Number Pairs, <Period = max(x)-min(x)+1> )

**Beschreibung:** Gibt die Matrix der Fourier-Basis-Koeffizienten zurück. Number Pairs ist die Anzahl von Sin()- und Cos()-Paaren für die Basis. Der optionale Parameter Period gibt die Periode für die trigonometrischen Funktionen an und hat den Standardwert Max(x) - Min(x) + 1.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### G Inverse

**Syntax:** g = G Inverse( A )

**Beschreibung:** Gibt die verallgemeinerte (Moore-Penrose) inverse Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( G Inverse( [11 22, 33 44] ), 2 );

```

### H Direct Product

**Syntax:** y = H Direct Product( A, B )

**Beschreibung:** Gibt das horizontale direkte Produkt zurück, das das direkte Produkt von jeder Zeile der Matrizen A und B ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Hadamard( n, <normalize = 0> )

**Beschreibung:** Erstellt eine Hadamard-Matrix der Ordnung n.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Hough Line Transform

**Syntax:** accum = Hough Line Transform( matrix, <NAngle(number)> <NRadius(number)> )

**Beschreibung:** Gibt die Hough-Transformation zum Erkennen von Linien in Bilddaten zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** y = Identity( n )

**Beschreibung:** Erstellt eine n x n Einheitsmatrix, d.h. mit Einsen (1) auf der Diagonalen und Nullen (0) an allen anderen Stellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Identity( 2 );

```

### Index

**Syntax:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, <n3=1>)

**Beschreibung:** Gibt eine Zeilenmatrix zurück, die die Folge der Werte von n1 bis n2 in Inkrementen von n3 zurückgibt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
1 :: 10;

```

### Inner Product BLAS

**Syntax:** y = Inner Product BLAS( A, B, ... )

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Inv

**Syntax:** y = Inverse( x ); y = Inv( x )

**Beschreibung:** Gibt die inverse Matrix des Arguments x zurück, bei dem es such um eine quadratische, nichtsinguläre Matrix handeln muss.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**Syntax:** y = Inv Update( S, X, <w=1> )

**Beschreibung:** Gibt eine aktualisierte inverse Matrix zurück, wobei das erste Argument S eine symmetrische positiv definite Matrix mit derselben Anzahl Spalten wie X ist, das zweite Argument X eine Matrix mit den hinzuzufügenden bzw. zu löschenden Zeilen ist und das dritte Argument w festlegt, ob Zeilen hinzuzufügen oder zu löschen sind (1 = Zeilen hinzufügen, -1 Zeilen löschen). Diese Funktion wird ausgewertet als S-w*S*X`*Inv(I+w*X*S*X`)*X*S, wobei I die Einheitsmatrix ist und Inv(A) die inverse Matrix von A bedeutet.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Inverse( x ); y = Inv( x )

**Beschreibung:** Gibt die inverse Matrix des Arguments x zurück, bei dem es such um eine quadratische, nichtsinguläre Matrix handeln muss.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Round( Inverse( [11 22, 33 44] ), 2 );

```

### Is Matrix

**Syntax:** y = Is Matrix( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument eine Matrix ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Is Matrix( [11 22 33] );

```

### J

**Syntax:** y = J( nr, <nc>, <v> ); y = J( nr, nc ); y = J( n )

**Beschreibung:** Erstellt eine Matrix (nr x nc) von Werten, die vom dritten Argument bestimmt werden. Der Standardwert des zweiten Arguments ist gleich dem ersten Argument. Der Standardwert des dritten Arguments ist 1. Das dritte Argument kann jedoch eine Zahl, ein Variablenname einer Zahl oder JSL-Code sein. Wenn das dritte Argument Code ist, wird der Code ausgewertet und der Rückgabewert wird jedem Element in der Matrix zugewiesen, Element für Element, Zeile für Zeile.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**Beschreibung:** Gibt eine Tabelle zum effizienten Suchen naher Nachbarn zurück. Die Matrixargumente sind k-dimensionale Punkte. Es gibt keine Grenze für die Anzahl der Dimensionen oder Punkte.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### Least Squares Solve

**Syntax:** {Beta, VarBeta} = Least Squares Solve(y, X, <<noIntercept, <<weights(optionalWeightVector), <<method("Sweep"|"GInv"))

**Beschreibung:** Gibt eine Liste zurück, die einen Vektor der Schätzwerte, Beta = Inverse(X&apos;X)X&apos;y und die geschätzte Varianzmatrix von Beta enthält. Das optionale Argument <<noIntercept gibt ein Modell ohne Konstante an. Das optionale Argument <<weights gibt einen Vektor der Gewichtungen an, um gewichtete kleinste Quadrate durchzuführen. Das optionale Argument <<method ermöglicht Ihnen, zwischen der Standardmethode Sweep und einer verallgemeinerten inversen Methode ("GInv") zum Lösen der Normalgleichungen zu wählen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Linear Regression

**Syntax:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, <<noIntercept, <<printToLog, <<weight(WeightVector), <<freq(FrequencyVector)

**Beschreibung:** Passt eine lineare Regression für das angenommene Modell y = X * beta + error an. Das optionale Argument <<noIntercept gibt ein Modell ohne Konstante an. Das optionale Argument <<printToLog gibt an, dass eine Zusammenfassung der Anpassung im Logfenster dargestellt wird. Das optionale Argument weight gibt einen Vektor der Gewichtungen an, um gewichtete kleinste Quadrate durchzuführen, und das optionale Argument freq gibt einen Vektor der Häufigkeiten an. Gibt eine Liste mit Vektoren der Schätzwerte, einen Vektor der Standardfehler und eine Liste der Diagnose zurück. Die Liste der Diagnose enthält Vektoren der statistischen t- und p-Werte für die Schätzwerte sowie die r²- und korrigierten r²-Werte für die Regressionsanpassung.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

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

**Beispiel 2**

```jsl

Names Default To Here( 1 );
/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<noIntercept, <<printToLog );

```

**Beispiel 3**

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

**Syntax:** y = Loc( m ); y = Loc( v, x )

**Beschreibung:** Gibt eine Matrix mit den Positionen der Matrix m zurück, die nicht 0 sind. Wenn zwei Argumente angegeben werden, gibt Loc(v, x) eine Matrix der Positionen der Liste oder Matrix v zurück, die gleich dem Wert x sind. Ziehen Sie, wenn möglich, stattdessen Where vor.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
Loc( [5, 7, 5, ., 5], 5 );

```

**Beispiel 4**

```jsl

Names Default To Here( 1 );
Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

**Beispiel 5**

```jsl

Names Default To Here( 1 );
Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**Syntax:** y = Loc Max( x )

**Beschreibung:** Gibt die erste Position des Maximalwerts in x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**Syntax:** y = Loc Min( x )

**Beschreibung:** Gibt die erste Position des Minimalwerts in x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**Syntax:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**Beschreibung:** Gibt einen Vektor von Zeilennummern in Zeilen der Argumentmatrix zurück, die keine fehlenden Werte haben. Bei Listen werden die Zeilen zurückgegeben, die nicht-fehlende Zahlen oder nicht-leere Zeichen haben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**Syntax:** idx = Loc Sorted( x, y )

**Beschreibung:** Erstellt einen Spaltenvektor von indizierbaren Positionen, wo die Werte von x Werte haben, die basierend auf einer binären Suche kleiner oder gleich den Werten in y sind. x muss eine in aufsteigender Reihenfolge sortierte Matrix ohne fehlende Werte sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

```

### Low Rank Symmetric Update BLAS

**Syntax:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Matrix

**Syntax:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} )

y = Matrix( {x1, ..., xn} )

y = Matrix( n, m )

**Beschreibung:** Erzeugt eine n-x-m-Matrix. Wenn Sie eine Liste von n-Listen angeben, die jeweils m Zeilenwerte enthalten, wird die Matrix durch vertikale Verkettung der ausgewerteten Listen gebildet. Wenn Sie eine einzelne Liste von n Elementen angeben, ist der Rückgabewert ein n-x-1-Spaltenvektor. Wenn Sie zwei ganzzahlige Argumente angeben, ist der Rückgabewert eine Matrix aus Nullen, die n Zeilen und m Spalten enthält.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
Matrix( {2, 3 + 7} );

```

**Beispiel 4**

```jsl

Names Default To Here( 1 );
Matrix( 2, 3 );

```

### Matrix Mult

**Syntax:** y = Matrix Mult( A, B, ... ); y = A * B

**Beschreibung:** Führt Matrixmultiplikation durch. Die Matrixargumente müssen stimmen: NCol(a)==NRow(b). Beachten Sie, dass A * B ebenfalls funktioniert.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Matrix Mult BLAS( A, B, ... )

**Beschreibung:** Führt Matrixmultiplikation durch. Die Matrixargumente müssen stimmen: NCol(A)==NRow(B).

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**Syntax:** r = Matrix Rank( X )

**Beschreibung:** Gibt den Rang der Matrix X zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Mode

**Syntax:** y = Mode( list or matrix )

**Beschreibung:** Wählt das „häufigste“ Element aus einer Matrix oder Liste aus, bei Ranggleichheit den niedrigeren Wert

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Multivariate Normal Impute

**Syntax:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**Beschreibung:** Gibt einen Zielgrößenvektor mit imputierten Werten für die fehlenden Werte im Vektor yVec der Zielgrößen zurück. Die Imputationen basieren auf einer multivariaten Normalverteilung mit dem Erwartungswertvektor meanYvec und der symmetrischen Kovarianzmatrix symCovMat. Die optionalen Argumente colMin und colMax sind die jeweiligen Vektoren der Minimal- und Maximalwerte der Spalten. Diese Argumente bieten Schranken für die Imputationen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**Beschreibung:** Gibt die Anzahl der Spalten in der aktuellen Datentabelle, einer angegebenen Datentabelle oder einer Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
N Col( [11 22, 33 44] );

```

### N Cols

**Syntax:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**Beschreibung:** Gibt die Anzahl der Spalten in der aktuellen Datentabelle, einer angegebenen Datentabelle oder einer Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
N Col( [11 22, 33 44] );

```

### NChooseK Matrix

**Syntax:** m = NChooseK Matrix( n, k )

**Beschreibung:** Erstellt eine Matrix von nChooseK(n,k) Zeilen und k Spalten, die alle Kombinationen von k ganzen Zahlen von 1 bis n bilden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Print( NChooseK Matrix( 5, 3 ) );

```

### Ortho

**Syntax:** L = Ortho( A, <Centered( 0 )>, <Scaled( 1 )> )

**Beschreibung:** Orthogonalisiert die Spalten einer Matrix. Option „Zentriert“ führt zur Summe 0. Option „Skaliert“ führt zur Einheitslänge.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**Syntax:** L = Ortho Poly( V, order )

**Beschreibung:** Gibt orthogonale Polynome des Vektors V bis zur vom Argument order angegebenen Ordnung zurück. Das Argument V kann ein Zeilen- oder Spaltenvektor sein. Die Skalierungsoption normiert sie auf Einheitslänge.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Ortho Poly( 1 :: 10, 2 );

```

### P Spline Coef

**Syntax:** coef = P Spline Coef( x, Internal Knot Grid, <degree = 3>, <KnotEndPoints = min(x) || max(x)> )

**Beschreibung:** Gibt die Matrix der P-Spline-Koeffizienten zurück. Internal Knot Grid ist entweder die Anzahl der gewünschten Knotenpunkte basierend auf Perzentilen von x oder ein Vektor, der die internen Knotenpunkte angibt. Der optionale Parameter degree gibt die Grade der P-Splines mit einem voreingestellten Wert von 3 an.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Parallel Assign

**Syntax:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**Beschreibung:** Mehrere Threads verwenden, um der Matrix Werte zuzuweisen. Wenn ein Thread eine Ausnahme zurückgibt, wird eine Meldung ins Log geschrieben und der Rückgabewert ist 0. Wenn alle Threads fehlerfrei abgeschlossen werden, ist der Rückgabewert 1. Funktionen, die Plattformen aufrufen, Datentabellen erstellen oder verwenden oder auf das Grafikteilsystem zugreifen, werden nur im Haupt-Thread unterstützt und geben eine Ausnahme zurück, wenn sie aus einem Worker-Thread aufgerufen werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
m = J( 3, 2, -1 );
If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Print Matrix

**Syntax:** s = Print Matrix( M, <<ignore locale( 0 ), <<style( "parseable" ), <<separate( ", " ), <<line begin( "[ " ), <<line end( " ]" ) )

**Beschreibung:** Druckt die Matrix M. Das optionale Argument ignore locale legt fest, ob beim Drucken der Dezimaltrennzeichen das Gebietsschema berücksichtigt werden soll. Dabei bedeutet Null, dass das Gebietsschema berücksichtigt wird. Das optionale Argument style legt fest, ob ein Stil verwendet werden soll, und welcher Stil verwendet werden soll. Die verfügbaren Stile sind analysierbar (parseable), d.h. ein neu formatierter JSL-Matrixausdruck, latex und other. Wenn für das Argument style die Option other angegeben ist, definieren die letzten drei optionalen Argumente das Anfangs- und Endzeichen der gedruckten Zeilen und die Trennzeichen von verketteten Einträgen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** {Q, R} = QR( X )

**Beschreibung:** Erstellt eine orthogonale Matrix Q (m x m) und eine obere Dreiecksmatrix R (m x n), so dass X = Q * R ist Das Argument X ist eine (m x n)-Matrix.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
QR( [11 22, 33 44] );

```

### QR LAPACK

**Syntax:** {Q, R} = QR LAPACK( X )

**Beschreibung:** Erstellt eine orthogonale Matrix Q (m x k) und eine obere Dreiecksmatrix R (k x n), so dass X = Q * R ist. Das Argument X ist eine Matrix m x n, wobei k=min(m, n) ist.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**Syntax:** y = Quadratic Form BLAS( A, x )

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Random SVD

**Syntax:** {U, M, V} = Random SVD( X , <nSingularValues=min(nRow,nCol)>, <nOver=10>, <nIter=2>)

**Beschreibung:** Berechnet die Singulärwertzerlegung der Matrix X mithilfe der randomisierten Singulärwertzerlegung, indem eine Liste {U, M, V} zurückgegeben wird, so dass U*diag(M)*V` gleich X ist.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
Random SVD( [11 22, 33 44], 1 );

```

### Rank

**Syntax:** y = Rank Index( x )

**Beschreibung:** Gibt einen Vektor von Indizes zurück, der, wenn er als Indizierung des ursprünglichen Vektors x verwendet wird, den Vektor nach Rang ordnet. Fehlende Werte werden ausgeschlossen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**Syntax:** y = Rank Index( x )

**Beschreibung:** Gibt einen Vektor von Indizes zurück, der, wenn er als Indizierung des ursprünglichen Vektors x verwendet wird, den Vektor nach Rang ordnet. Fehlende Werte werden ausgeschlossen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**Syntax:** y = Ranking( x, < <<tie("average"|"row"|"minimum"|"maximum"|"arbitrary")> )

**Beschreibung:** Gibt einen Vektor der Ränge der Werte von x zurück, zwischen niedrig und hoch von 1 bis n, bei Ranggleichheit arbiträr.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**Syntax:** y = Ranking Tie( x, < <<tie("average"|"row"|"minimum"|"maximum"|"arbitrary")> )

**Beschreibung:** Gibt einen Vektor von Rängen der Werte von x zurück, Ränge bei Ranggleichheit gemittelt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Ranking Tie( [33, 22, 44, 11, 33] );

```

### Robust PCA

**Syntax:** {A,E} = Robust PCA( X , <Lambda(2/sqrt(max(nrow,ncol)))>, <tolerance=1e-10>,<maxit(75)>,<Center(1)>,<Scale(1)>

**Beschreibung:** Zerlegt robuste Daten in eine Matrix niederen Ranges und eine dünn besetzte Matrix der Residuen. Ausreißer werden in den Residuen erkannt. Es können auch fehlende Werte eingesetzt werden.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### SVD

**Syntax:** {U, M, V} = SVD( X )

**Beschreibung:** Berechnet die Singulärwertzerlegung der Matrix X, indem eine Liste {U, M, V} zurückgegeben wird, so dass U*diag(M)*V` gleich X ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
SVD( [11 22, 33 44] );

```

### SVD LAPACK

**Syntax:** {U, M, V} = SVD LAPACK( X )

**Beschreibung:** Berechnet die Singulärwertzerlegung der Matrix X, indem eine Liste {U, M, V} zurückgegeben wird, so dass U*diag(M)*V` gleich X ist.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
SVD LAPACK( [11 22, 33 44] );

```

### Scoring Impute

**Syntax:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**Beschreibung:** Bietet Streaming-Funktionalität für den Algorithmus zur automatischen Imputation von Daten (ADI). Die Eingabeargumente sind ein Zeilenvektor, der Folgendes enthält: fehlende Werte, eine Ladungsmatrix (auch V-Matrix genannt), die vom ADI-Algorithmus erzeugt wird, einen Vektor der Spaltenmittelwerte, bei dem fehlende Zellen ignoriert werden, und einen Vektor der Standardabweichungen der Spalte, bei dem fehlende Zellen ignoriert werden. Zurückgegeben wird der Zeilenvektor mit den mittels Kleinste-Quadrate-Schätzung eingesetzten fehlenden Werten.

**JMP Version hinzugefügt:** 14

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

**Syntax:** r = Shape( M, nr, <nc>, <<bycol)

**Beschreibung:** Formt die Matrix M oder den Skalar über Zeilen in nr Zeilen x nc Spalten um. Ein fehlender Wert ist zulässig für nr. Daten von M werden nach Bedarf repliziert, um die Matrix nr x nc zu füllen. Das optionale Argument <<bycol füllt die Daten nach Spalte. Standardmäßig werden die Daten nach Zeile gefüllt. Häufig verwendet zur Umformung eines Vektors in eine Matrix oder zur Vektorisierung einer Matrix.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ), Shape( [11 22, 33 44], ., 4 )
	}
);

```

### Solve

**Syntax:** y = Solve( A, B )

**Beschreibung:** Löst das lineare System A*x=B nach x. Die Funktion Solve() ist äquivalent zu Inverse(A)*B, wenn A nichtsingulär ist. Beachten Sie, dass das Argument A eine quadratische Matrix sein muss.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**Syntax:** y = Sort Ascending( x )

**Beschreibung:** Gibt eine Kopie der Liste oder Matrix x zurück, wobei die Elemente aufsteigend sortiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**Syntax:** y = Sort Descending( x )

**Beschreibung:** Gibt eine Kopie der Liste oder Matrix x zurück, wobei die Elemente absteigend sortiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Sort Descending( {111, 212, 133, 114, 55} );

```

### Sparse SVD

**Syntax:** {U, M, V} = Sparse SVD( X , <nSingularValues=min(nRow,nCol)>, <tolerance=1e-10>)

**Beschreibung:** Berechnet die Singulärwertzerlegung der Matrix X mithilfe der implizit neu gestarteten, teilweise reorthogonalisierten Lanczos-Methode für dünnbesetzte Matrizen, indem eine Liste {U, M, V} zurückgegeben wird, so dass U*diag(M)*V` gleich X ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Spline Coef

**Syntax:** coef = Spline Coef( x, y, lambda, <weights> )

**Beschreibung:** Returns a five-column matrix of coefficients in the following order: knots||a||b||c||d for each of the unique values in x. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**Syntax:** yhat = Spline Eval( x, coef, <extrapolation=-1> )

**Beschreibung:** Wertet die Spline-Vorhersagen mithilfe der Matrix coef in der gleichen Form aus wie von der Funktion Spline Coef() zurückgegeben. extrapolation zeigt an, wie weit über den Spline-Bereich hinaus, angegeben als Bruchteil des Bereichs, die Auswertung ausgedehnt werden muss, bevor fehlende Werte zurückgegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** yhat = Spline Smooth( x, y, lambda, <weights> )

**Beschreibung:** Returns the smoothed predicted values from a spline fit. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sweep

**Syntax:** y = Sweep( A, <indices> )

**Beschreibung:** Gibt den Sweep der Matrix A auf diagonalen Pivots zurück, die von indices angegeben werden. Auf diese Weise kann eine Matrix pivotweise invertiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**Syntax:** y = Sym Matrix Mult BLAS( A, B, ... )

**Beschreibung:** Führt Matrixmultiplikation durch, wobei A eine symmetrische Matrix ist. Die Matrixargumente müssen stimmen: NCol(A)==NRow(B).

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### Trace

**Syntax:** y = Trace( x )

**Beschreibung:** Gibt die Summe der Diagonalelemente einer quadratischen Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Trace( [11 22, 33 44] );

```

### Transpose

**Syntax:** y = Transpose( matrix ); y = matrix`

**Beschreibung:** Transponiert das Matrixargument durch Vertauschung der Zeilen und Spalten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### V Concat

**Syntax:** y = a |/ b; y = V Concat( a, b, ... )

**Beschreibung:** Verkettet Matrizen vertikal. Die Argumente müssen die gleiche Anzahl von Spalten haben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
[11 22] |/ [33 44];

```

### V Concat To

**Syntax:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**Beschreibung:** Verkettet vertikal und weist das Ergebnis zu. a |/= b ist äquivalent zu a = a || b. Dies ist ein Zuweisungsoperator.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** b = V Max( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit dem Maximum der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**Syntax:** m = V Mean( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit dem Mittelwert der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**Syntax:** m = V Median( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit dem Median der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**Syntax:** a = V Min( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit dem Minimum der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**Syntax:** m = V Quantile( matrix, p )

**Beschreibung:** Gibt einen Zeilenvektor mit dem angegeben Quantil p der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**Syntax:** b = V Robust Standardize( X, <center=1>, <scale=1> )

**Beschreibung:** Gibt eine Matrix zurück, die durch den Median zentriert und durch einen robusten Schätzer der Standardabweichung der Matrix X skaliert ist. Die optionalen Booleschen Argumente geben an, ob Zentrierung und Skalierung durchgeführt werden.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Standardize

**Syntax:** b = V Standardize( X )

**Beschreibung:** Gibt eine Matrix zurück, bei der es sich um die zentrierte und skalierte Version der Matrix X handelt. Jede Spalte von b hat den Mittelwert 0 und die Standardabweichung 1.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**Syntax:** b = V Std( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit den Standardabweichungen der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**Syntax:** s = V Sum( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit der Summe der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
V Sum( [11 22, 33 44, 55 66] );

```

### VPTree

**Syntax:** tab = VPTree( [ matrix ] )

**Beschreibung:** Gibt eine Tabelle zum effizienten Suchen naher Nachbarn zurück. Die Matrixargumente sind k-dimensionale Punkte. Es gibt keine Grenze für die Anzahl der Dimensionen oder Punkte.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Varimax

**Syntax:** {R,T} = Varimax( F, <norm=1> )

**Beschreibung:** Führt eine Varimax-Rotation der angegebenen Matrix F durch. Gibt eine Liste zurück, die die rotierte Matrix und die orthogonale Rotationsmatrix enthält. Standardmäßig wird eine normalisierte Varimax-Rotation durchgeführt. Geben Sie norm = 0 an, um eine nicht-normalisierte Varimax-Rotation durchzuführen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**Syntax:** y = Vec Diag( x )

**Beschreibung:** Gibt die Diagonalelemente der Quadratmatrix als Vektor zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**Syntax:** Vec Quadratic( S, X )

**Beschreibung:** Wird ausgewertet wie Vec Diag( X * S * X` ).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### Wavelet Basis Coef

**Syntax:** y = Wavelet Basis Coef( x, grid, coef, <wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet">, <param = 0> )

**Beschreibung:** Gibt die Vorhersage an den Punkten x für das angegebene Wavelet-Modell zurück. Der Parameter grid ist ein Vektor, der das Raster der Daten für das Wavelet-Modell angibt. Der Parameter coef ist ein Vektor von Wavelet-Koeffizienten. Der Parameter wavelet ist der Name des Wavelet-Modells. Der optionale Parameter param ist der Wavelet-Modellparameter (sofern notwendig, Standardwert ist 0).

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

