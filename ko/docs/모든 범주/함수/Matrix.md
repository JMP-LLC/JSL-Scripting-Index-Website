# Matrix



### Add Vectors BLAS

**구문:** z = Add Vectors BLAS( x, y, alpha )

**JMP추가된 버전:** 17

```jsl

x = [1, 2, 3, 4];y = [5, 6, 7, 8];alpha = 0.5;z = Add Vectors BLAS( x, y, alpha );

```

### All

**구문:** y = All( x, ... )

**설명:** 모든 요소가 0이 아니면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

All( [1 2 3] );

```

### Any

**구문:** y = Any( x, ... )

**설명:** 임의 요소가 0이 아니면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Any( [1 0 2] );

```

### B Spline Coef

**구문:** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**설명:** B-스플라인 계수의 행렬을 반환합니다. Internal Knot Grid는 x의 백분위수를 기반으로 하는 원하는 매듭 점의 수이거나 내부 매듭 점을 지정하는 벡터입니다. 선택적 모수 degree는 B-스플라인의 차수를 지정하며 기본값은 3입니다. 선택적 모수 KnotEndPoints는 경계의 매듭에 대한 [하위, 상위] 위치가 포함된 2x1 행렬을 사용합니다. 매듭 끝점은 기본적으로 x의 최소값 및 최대값입니다. 두 번째 예제에서는 선형 모형에서 B-스플라인 계수를 설계 행렬로 사용하는 방법을 보여 줍니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

**예제 2**

```jsl

xx = (0 :: 10)`;yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];designMat = B Spline Coef( xx, 2 );Linear Regression( yy, designMat, <<nointercept );

```

### CDF

**구문:** {QuantVec, CumProbVec} = CDF( Y )

**설명:** 벡터 또는 목록 Y에 대한 경험적 누적 확률 분포 함수의 값을 반환합니다. 누적 확률은 벡터 QuantVec에서 해당 항목보다 작거나 같은 데이터 값의 비율입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/* Generate random values, Normal(0,1) */Y = J( 150, 1, Random Normal() );/* CDF function */{Quant, CumProb} = CDF( Y ); /* Draw empirical and theorical CDF */New Window( "Empirical CDF",	Graph Box(		X Scale( -3, 3 ),		Y Scale( 0, 1 ),		Pen Color( "red" );		For( i = 2, i <= N Row( Quant ), i++,			H Line( Quant[i - 1], Quant[i], CumProb[i] );			V Line( Quant[i - 1], CumProb[i - 1], CumProb[i] );		);		i = N Row( Quant );		V Line( Quant[i], CumProb[i], 1 );		Pen Color( "blue" );		Y Function( Normal Distribution( q ), q );	));

```

### Chol Update

**구문:** L2 = Chol Update( L, V, C )

**설명:** A+V\*C\*V&apos;의 업데이트된 Cholesky 근을 반환합니다. 여기서 C는 m x m 대칭 행렬이고 V는 n x m 행렬입니다. 인수 L은 n x n 행렬 A의 Cholesky 근이어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/* The inner product of a design matrix */exS = [16 1 0 11 -1 12,1 11 -1 1 -1 1,0 -1 12 -1 1 0,11 1 -1 11 -1 9,-1 -1 1 -1 9 -1,12 1 0 9 -1 12];/* Conduct the Cholesky decomposition */exAchol = Cholesky( exS );/* Two column vectors to be applied to change the design matrix */exV = [1 1, 0 0, 0 1, 0 0, 0 0, 0 1];/* The first column vector is added to one of the rows in the design matrix *//* The second column vector is subtracted from one of the rows in the design matrix */exC = [1 0, 0 -1];/* Update the Cholesky decomposition manually */exAnew = exS + exV * exC * exV`;exAcholnew = Cholesky( exAnew );/* Update the Cholesky decomposition more efficiently */exAcholnew_test = Chol Update( exAchol, exV, exC );/* Results are the same */Show( exAcholnew_test );Show( exAcholnew );

```

### Cholesky

**구문:** L = Cholesky( A )

**설명:** 양의 준정부호 행렬의 Cholesky 분해 결과를 반환합니다. L은 L\*L` = A을 만족하는 하삼각 행렬입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Cholesky( [1 2, 2 13] );

```

### Correlation

**구문:** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**설명:** 행렬 인수 x의 상관 행렬을 반환합니다. "Pairwise" 인수는 행별 방식 대신 쌍별로 결측값을 처리합니다. "Shrink" 인수는 Schafer and Strimmer(2005)에 설명된 방법을 사용하여 결정된 요인만큼 비대각 요소를 줄입니다. Freq 및 Weight 인수는 각각 빈도 또는 가중치 값의 벡터를 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Covariance

**구문:** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**설명:** 행렬 인수 x의 공분산 행렬을 반환합니다. "Pairwise" 인수는 행별 방식 대신 쌍별로 결측값을 처리합니다. "Shrink" 인수는 Schafer and Strimmer (2005)에 설명된 방법을 사용하여 결정된 요인만큼 비대각 요소를 줄입니다. Freq 및 Weight 인수는 각각 빈도 또는 가중치 값의 벡터를 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Design

**구문:** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**설명:** 인수의 각 고유 값에 대해 1과 0으로 구성된 설계 행렬을 생성합니다. 설계 행렬에 수준을 지정하기 위해 levelsList 인수를 사용합니다. <<Levels 인수를 지정한 경우 반환 값은 설계 행렬 및 수준이 포함된 목록입니다. <<ElseMissing 인수를 지정한 경우 levelsList에 없는 v 인수 값은 설계 행렬에서 결측값으로 처리됩니다. 지정하지 않은 경우 0으로 채워집니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/* example that Design(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( Design( exLevels ) );/* Also see DesignNom, DesignOrd *//* example that Design(...) takes two arguments */Show( Design( 3, {1, 2, 3} ) );Show( Design( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( Design( exLevels, {1, 2, 3} ) );Show( Design( {"a", "b"}, {"a", "b", "c"} ) );/* example that Design(...) takes three arguments */Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Last

**구문:** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**설명:** 인수의 마지막 고유 값을 제외한 전체에 대해 1 및 0의 열을 포함하는 설계 행렬을 생성합니다. 마지막 수준은 0의 행으로 코딩됩니다. levelsList 인수가 지정된 경우 마지막 수준은 levelsList의 마지막 수준입니다. 이 인수가 지정되지 않은 경우에는 v의 가장 큰 값으로 마지막 수준이 정의됩니다. <<Levels 인수가 지정된 경우 반환되는 값은 수준 목록과 설계 행렬이 포함된 목록입니다. <<ElseMissing 인수가 지정된 경우 결측값은 levelsList에 없는 v 인수의 값에 대한 설계 행렬에 추가됩니다. 그렇지 않으면 0이 설계 행렬에 추가됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/* example that Design Last(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( Design Last( exLevels ) );/* see what is different from Design(...) */Show( Design( exLevels ) );/* Also see Design, DesignOrd *//* example that Design Last(...) takes two arguments */Show( Design Last( 3, {1, 2, 3} ) );Show( Design( 3, {1, 2, 3} ) );Show( Design Last( [1 2], {1, 2, 3} ) );Show( Design( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( Design Last( exLevels, {1, 2, 3} ) );Show( Design( exLevels, {1, 2, 3} ) );Show( Design Last( {"a", "b"}, {"a", "b", "c"} ) );Show( Design( {"a", "b"}, {"a", "b", "c"} ) );/* example that Design Last(...) takes three arguments */Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Nom

**구문:** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**설명:** 인수의 마지막 고유 값을 제외한 전체에 대해 1 및 0의 열을 포함하는 설계 행렬을 생성합니다. 마지막 수준은 -1의 행으로 코딩됩니다. levelsList 인수가 지정된 경우 마지막 수준은 levelsList의 마지막 수준입니다. 이 인수가 지정되지 않은 경우에는 v의 가장 큰 인수로 마지막 수준이 정의됩니다. <<Levels 인수가 지정된 경우 반환되는 값은 수준 목록과 설계 행렬이 포함된 목록입니다. <<ElseMissing 인수가 지정된 경우에는 levelsList에 나타나지 않는 v 인수 값을 설계 행렬에 결측값으로 나타내게 됩니다. 그렇지 않으면 0이 설계 행렬에 추가됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/* example that Design Nom(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( Design Nom( exLevels ) );/* see what is different from Design(...) */Show( Design( exLevels ) );/* Also see Design, DesignOrd *//* example that Design Nom(...) takes two arguments */Show( Design Nom( 3, {1, 2, 3} ) );Show( Design( 3, {1, 2, 3} ) );Show( Design Nom( [1 2], {1, 2, 3} ) );Show( Design( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( Design Nom( exLevels, {1, 2, 3} ) );Show( Design( exLevels, {1, 2, 3} ) );Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );Show( Design( {"a", "b"}, {"a", "b", "c"} ) ); /* example that Design Nom(...) takes three arguments */Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Ord

**구문:** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**설명:** 인수의 마지막 고유 값을 제외한 전체에 대해 하나의 열을 포함하는 설계 행렬을 생성합니다. 첫 번째 수준은 0의 행으로 코딩됩니다. levelsList의 그 다음 수준(n번째 수준)은 (n-1) 1과 나머지 0의 행으로 코딩됩니다. <<Levels 인수가 지정된 경우 반환되는 값은 수준 목록과 설계 행렬이 포함된 목록입니다. <<ElseMissing 인수가 지정된 경우에는 levelsList에 나타나지 않는 v 인수 값을 설계 행렬에 결측값으로 나타내게 됩니다. 그렇지 않으면 0이 설계 행렬에 추가됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/* example that Design Ord(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( Design Ord( exLevels ) );/* see what is different from Design Nom(...) */Show( Design Nom( exLevels ) );/* Also see Design, Design Nom *//* example that Design Ord(...) takes two arguments */Show( Design Ord( 3, {1, 2, 3} ) );Show( Design Nom( 3, {1, 2, 3} ) );Show( Design Ord( [1 2], {1, 2, 3} ) );Show( Design Nom( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( Design Ord( exLevels, {1, 2, 3} ) );Show( Design Nom( exLevels, {1, 2, 3} ) );Show( Design Ord( {"a", "b"}, {"a", "b", "c"} ) );Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );/* example that Design Ord(...) takes three arguments */Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### DesignF

**구문:** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**설명:** 인수의 마지막 고유 값을 제외한 전체에 대해 1 및 0의 열을 포함하는 설계 행렬을 생성합니다. 마지막 수준은 -1의 행으로 코딩됩니다. levelsList 인수가 지정된 경우 마지막 수준은 levelsList의 마지막 수준입니다. 이 인수가 지정되지 않은 경우에는 v의 가장 큰 인수로 마지막 수준이 정의됩니다. <<Levels 인수가 지정된 경우 반환되는 값은 수준 목록과 설계 행렬이 포함된 목록입니다. <<ElseMissing 인수가 지정된 경우에는 levelsList에 나타나지 않는 v 인수 값을 설계 행렬에 결측값으로 나타내게 됩니다. 그렇지 않으면 0이 설계 행렬에 추가됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/* example that DesignF(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( DesignF( exLevels ) );/* see what is different from Design(...) */Show( Design( exLevels ) );/* Also see Design, DesignOrd *//* example that DesignF(...) takes two arguments */Show( DesignF( 3, {1, 2, 3} ) );Show( Design( 3, {1, 2, 3} ) );Show( DesignF( [1 2], {1, 2, 3} ) );Show( Design( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( DesignF( exLevels, {1, 2, 3} ) );Show( Design( exLevels, {1, 2, 3} ) );Show( DesignF( {"a", "b"}, {"a", "b", "c"} ) );Show( Design( {"a", "b"}, {"a", "b", "c"} ) );/* example that DesignF(...) takes three arguments */Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Det

**구문:** y = Det( x )

**설명:** 정방 행렬의 행렬식을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Det( [11 22, 33 44] );

```

### Diag

**구문:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**설명:** 행렬 또는 벡터에서 대각 행렬을 생성합니다. 두 개의 인수를 지정하면 대각선으로 연결된 행렬이 반환됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Diag( [11 22] );

```

### Direct Product

**구문:** y = Direct Product( A, B )

**설명:** 직접곱 또는 Kronecker 곱을 반환합니다. A[i,j]\*B의 형태이며, 모든 가능한 곱으로 확장되어 표시됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

exA = [1 2, 3 4];exB = [1 1 1, 2 2 2, 3 3 3];exProd = Direct Product( exA, exB );Show( exProd );/* verify results */Show( exProd[1 :: 3, 1 :: 3] == exB );Show( exProd[4 :: 6, 1 :: 3] == (exB * 3) );Show( exProd[1 :: 3, 4 :: 6] == (exB * 2) );Show( exProd[4 :: 6, 4 :: 6] == (exB * 4) );/* Also see H Direct Product */

```

### Distance

**구문:** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**설명:** x1 행과 x2 행 사이의 거리 행렬을 생성합니다. 각 열에 대한 척도 및 멱을 사용자 정의하려면 추가 인수 scale 및 powers를 지정하십시오. Kriging의 경우 Exp(-distance(x1,x2))가 사용됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/*1-D example*/exX1 = [1, 2, 3, 4];exX2 = [2, 4, 6, 8]; /*Compute squared Euclidean distance*/exD = Distance( exX1, exX2 ); /*Verify result*/exDm = J( 4, 4, . );For( exi = 1, exi <= 4, exi++,	For( exj = 1, exj <= 4, exj++,		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )	));Show( exDm == exD ); /*2-D example*/exX1 = [1 1, 2 2, 3 3, 4 4];exX2 = [2 1, 4 2, 6 0, 8 7]; /*Compute squared Euclidean distance*/exD = Distance( exX1, exX2 ); /*Verify result*/exDm = J( 4, 4, . );For( exi = 1, exi <= 4, exi++,	For( exj = 1, exj <= 4, exj++,		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )	));Show( exDm == exD ); /*2-D example*/exX1 = [1 1, 2 2, 3 3, 4 4];exX2 = [2 1, 4 2, 6 0, 8 7]; /*Compute squared Euclidean distance, with a scaler [0.5 2.0]*/exD = Distance( exX1, exX2, [0.5 2.0] ); /*Verify result*/exDm = J( 4, 4, . );For( exi = 1, exi <= 4, exi++,	For( exj = 1, exj <= 4, exj++,		exDm[exi, exj] = Sum( [0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) ^ 2) )	));Show( exDm == exD ); /*2-D example*/exX1 = [1 1, 2 2, 3 3, 4 4];exX2 = [2 1, 4 2, 6 0, 8 7]; /*Compute squared Euclidean distance, with scalers [0.5 2.0] and powers [1.5 2.0]*/exD = Distance( exX1, exX2, [0.5 2.0], [1.5 2.0] ); /*Verify result*/exDm = J( 4, 4, . );For( exi = 1, exi <= 4, exi++,	For( exj = 1, exj <= 4, exj++,		exDm[exi, exj] = Sum( [0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) :^ [1.5 2.0]) )	));Show( exDm == exD );

```

### E Div

**구문:** y = A :/ B; y = E Div( A, B )

**설명:** 행렬의 요소별 나눗셈을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

[11 22 33] :/ [1 2 3];

```

### E Max

**구문:** y = E Max( A, B )

**설명:** 인수의 해당 요소에 대한 최대값 행렬을 반환합니다.

**JMP추가된 버전:** 16

```jsl

E Max( [1 22 33], [11 2 3] );

```

### E Min

**구문:** y = E Min( A, B )

**설명:** 인수의 해당 요소에 대한 최소값 행렬을 반환합니다.

**JMP추가된 버전:** 16

```jsl

E Min( [1 22 33], [11 2 3] );

```

### E Mult

**구문:** y = A :* B; y = E Mult( A, B )

**설명:** 행렬의 요소별 곱셈을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

[1 2 3] :* [11 22 33];

```

### Eigen

**구문:** {M, E} = Eigen( X )

**설명:** 대칭 행렬 X에 대해 고유값 분해를 수행합니다. E\*Diag(M)\*E` = X와 같도록 목록 {M, E}를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

X = [11 22, 22 33];{M, E} = Eigen( X );E * Diag( M ) * E`;

```

### Eigen BLAS

**구문:** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP추가된 버전:** 17

```jsl

X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];{M1, E1} = Eigen BLAS( X );

```

### Estimate Bartlett Factor Score

**구문:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**설명:** Bartlett 방법을 사용하여 SEM(구조 방정식 모형)에서 요인 스코어를 추정합니다. 입력 인수는 데이터의 행 벡터, 명시 변수에 대한 모형 내재 평균, 잠재 변수에 대한 모형 내재 평균, SEM의 S RAM 행렬 및 SEM의 A RAM 행렬입니다. 반환 값은 SEM을 기반으로 추정된 요인 스코어가 포함된 행 벡터입니다.

**JMP추가된 버전:** 16

```jsl

Estimate Bartlett Factor Score(	[2 2 0],	[2.085 2.76 1.56],	[0],	[1 0 0 0 0,	0 0.684181992749 0 0 0,	0 0 1.19686444665695 0 0,	0 0 0 0.875198112795068 0,	0 0 0 0 0.953592961124492],	[0 0 0 0 0, 2.085 0 0 0 1, 2.76 0 0 0 0.61913203807175, 1.56 0 0 0 0.710365935511608, 0 0 0 0 0]);

```

### Estimate Factor Score

**구문:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**설명:** 회귀 방법을 사용하여 SEM(구조 방정식 모형)에서 요인 스코어를 추정합니다. 입력 인수는 데이터의 행 벡터, 모형 내재 분산-공분산 행렬, 모형 내재 명시 변수 평균의 벡터, 그리고 모형 내재 잠재 변수 평균의 벡터입니다. 반환 값은 SEM을 기반으로 추정된 요인 스코어가 포함된 행 벡터입니다.

**JMP추가된 버전:** 15

```jsl

Estimate Factor Score(	[7 10 5 2 2 0],	[1.66 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,	0.45 1.22 0.44 -0.44 -0.33 -0.38 0.45 -0.44,	0.58 0.44 1.88 -0.57 -0.43 -0.49 0.58 -0.57,	-0.58 -0.44 -0.57 1.64 0.57 0.65 -0.58 0.76,	-0.44 -0.33 -0.43 0.57 1.56 0.49 -0.44 0.57,	-0.5 -0.38 -0.49 0.65 0.49 1.36 -0.5 0.65,	0.59 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,	-0.58 -0.44 -0.57 0.76 0.57 0.65 -0.58 0.76],	[6.59, 8.81, 2.92, 2.09, 2.76, 1.56],	[0, 0]);

```

### Fourier Basis Coef

**구문:** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**설명:** Fourier 기저 계수의 행렬을 반환합니다. Number Pairs는 Fourier 기저의 sin() 및 cos() 쌍의 수입니다. 선택적 모수 Period는 삼각 함수의 기간을 지정하며 기본값은 max(x) - min(x) + 1입니다.

**JMP추가된 버전:** 14

```jsl

Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### G Inverse

**구문:** g = G Inverse( A )

**설명:** 일반화(Moore-Penrose) 역행렬을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Round( G Inverse( [11 22, 33 44] ), 2 );

```

### H Direct Product

**구문:** y = H Direct Product( A, B )

**설명:** 수평 직접곱(행렬 A 및 B에 있는 각 행의 직접곱)을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

exA = [1 2, 3 4];exB = [1 1 1, 2 2 2];exProd = H Direct Product( exA, exB );Show( exProd );/* verify result */Show( exProd[1, 1 :: 6] == Direct Product( exA[1, 1 :: 2], exB[1, 1 :: 3] ) );Show( exProd[2, 1 :: 6] == Direct Product( exA[2, 1 :: 2], exB[2, 1 :: 3] ) );

```

### Hadamard

**구문:** y = Hadamard( n, &lt;normalize = 0&gt; )

**설명:** 차수 n의 Hadamard 행렬을 생성합니다.

**JMP추가된 버전:** 15

```jsl

Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Hough Line Transform

**구문:** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**설명:** 이미지 데이터에서 선을 검색하기 위한 Hough 변환을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

xx = .4;yy = .4;angleDegrees = (1 :: 180)`;angle = Pi() * angleDegrees / (180);New Window( "Hough Transform Demo 1",	Border Box( Left( 20 ), Top( 20 ), Right( 15 ), Bottom( 15 ),		V List Box(			Text Box( "Click and drag the circle in a straight line." ),			Graph Box(				X Scale( -1, 1 ),				Y Scale( -1, 1 ),				Circle( {xx, yy}, .05 );				Text( {xx + .1, yy + .1}, Char( xx, 4 ) || " " || Char( yy, 4 ) );				Mousetrap(					xx = x;					yy = y;					gb << reshow;				);			),			Text Box( "For angle 1 to 180 , x*Cos(angle)+y*Sin(angle)" ),			Text Box( "What position stays constant as you move?" ),			gb = Graph Box(				X Scale( 0, 180 ),				XName( "Angle" ),				Y Scale( -1.5, 1.5 ),				YName( "Distance to Line" ),				Line( angleDegrees, xx * Cos( angle ) + yy * Sin( angle ) )			)		)	));

```

**예제 2**

```jsl

nRow = 35;nCol = 35;// Make a wafer template missing outside a radiuswaferTemplate = J( nRow, nCol, 0 );If( 0,	For( i = 1, i <= nRow, i++,		For( j = 1, j <= nCol, j++,			If( (i - nrow / 2) ^ 2 + (j - nCol / 2) ^ 2 > ((nRow + nCol) / 4) ^ 2,				waferTemplate[i, j] = .			)		)	));wafer = waferTemplate;wafer[5, 22] = 1;lightGray = RGB Color( .9, .9, .9 );showWafer = Expr(	For( i = 1, i <= nRow, i++,		For( j = 1, j <= nCol, j++,			z = wafer[i, j];			If( Is Missing( z ),				Continue()			);			Fill Color( If( z == 0, lightGray, 3 ) );			Rect( i - nrow / 2, j - nCol / 2, i - nrow / 2 - 1, j - nCol / 2 + 1, 1 );		)	));showHough = Expr(	accum = Hough Line Transform( wafer );	maxAccum = Max( Max( accum ), 1 );	accumHeat = Heat Color( accum / maxAccum );	nr = N Row( accum );	nc = N Col( accum );	For( i = 1, i <= nr, i++,		For( j = 1, j <= nc, j++,			z = accumHeat[i, j];			Fill Color( z );			Rect( j - 1, nr - i, j, nr - i + 1, 1 );		)	);    //Marginals	radiusDensity = V Max( accum` );	radiusScale = 3 * Max( radiusDensity ) / Mean( radiusDensity );	radiusColor = Heat Color( radiusDensity / radiusScale );	If( 1,		angleDensity = V Max( accum );		angleScale = 3 * Max( angleDensity ) / Mean( angleDensity );		angleColor = Heat Color( angleDensity / angleScale );	,		angle1 = angleDensity - Mean( angleDensity );		angle1 = angle1 :* (angle1 > 0);		angleColor = Heat Color( angle1 / Max( angle1 ) );	);	For( j = 1, j <= nc, j++,		Fill Color( angleColor[j] );		Rect( j - 1, -5, j, -8, 1 );	);	For( i = 1, i <= nr, i++,		Fill Color( radiusColor[i] );		Rect( 185, nr - i, 190, nr - i + 1, 1 );	););mouseAction = Expr(	i = Floor( x + nrow / 2 + .5 );	j = Floor( y + ncol / 2 + .5 );	If( i > 0 & i <= nRow & j > 0 & j <= nCol,		wafer[i, j]		++);	bothBox << reshow;);New Window( "Hough Transform Demo 2",	Border Box( Left( 15 ), Top( 15 ), Right( 10 ), Bottom( 10 ),		bothBox = V List Box(			Text Box( "Click to add points in the top frame along a slanted line." ),			Text Box( "The Hough transform is shown below with marginal densities." ),			Text Box( "" ),			H List Box(				Button Box( "Clear",					wafer = waferTemplate;					bothBox << Reshow;				),				Button Box( "Add Random",					wafer = wafer | J( nRow, nCol, Random Uniform() < .05 );					bothBox << Reshow;				)			),			waferBox = Graph Box(				X Scale( -18, 18 ),				Y Scale( -18, 18 ),				FrameSize( 300, 300 ),				XName( "Angle" ),				YName( "Radius" ),				Mousetrap( mouseAction ),				showWafer			),			houghBox = Graph Box( X Scale( 0, 190 ), Y Scale( -10, 50 ), FrameSize( 500, 200 ), showHough )		)	));

```

### Identity

**구문:** y = Identity( n )

**설명:** n x n 단위 행렬을 생성합니다. 대각 요소는 1이고 다른 요소는 0입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Identity( 2 );

```

### Index

**구문:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**설명:** n3씩 증분하여 n1 ~ n2 사이의 값 시퀀스가 포함된 행 행렬을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

1 :: 10;

```

### Inner Product BLAS

**구문:** y = Inner Product BLAS( A, B, ... )

**JMP추가된 버전:** 17

```jsl

a = [1, 2, 3, -2, 0, -1, 0, 1, 1];b = [4, 5, 6, -2, 0, -1, 0, 7, 2];y = Inner Product BLAS( a, b );

```

### Inv

**구문:** y = Inverse( x ); y = Inv( x )

**설명:** x 인수의 역을 반환합니다. 정방 비특이 행렬이어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**구문:** y = Inv Update( S, X, &lt;w=1&gt; )

**설명:** 업데이트된 역행렬을 반환합니다. 여기서 첫 번째 인수S는 X와 동일한 수의 열을 가진 대칭 양정치 행렬이고 두 번째 인수 X는 추가 또는 삭제할 행이 포함된 행렬이며 세 번째 인수 w는 행을 추가할지 아니면 삭제할지 결정합니다. 행을 추가하려면 1을 사용하고 삭제하려면 -1을 사용하십시오. 이 함수는 S-w\*S\*X`\*Inv(I+w\*X\*S\*X`)\*X\*S로 실행되며 여기서 I는 단위 행렬이고 Inv(A)는 A의 역행렬을 의미합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/* Generate a design matrix */exX = [1 0 4 2,1 0 5 1,1 0 2 4,5 4 4 5,0 1 4 3,0 1 9 1,0 1 2 4,0 1 1 9,0 1 5 2,0 1 2 1,0 1 4 5];S = Inverse( exX` * exX );Show( "----------Adding Rows (w=1) --------" );X = [5 4 3 3, 4 3 2 1, 9 1 2 5];w = 1;y = Inv Update( S, X, w );Show( "Result of Inv Update" );Show( y );Show( "Result of updating formula" );Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );Show( "Result of direct calculation" );Show( Inverse( (exX |/ X)` * (exX |/ X) ) );Show( "----------Deleting Rows (w=-1) --------" );X = [0 1 5 2, 0 1 2 1, 0 1 4 5];w = -1;y = Inv Update( S, X, w );Show( "Result of Inv Update" );Show( y );Show( "Result of updating formula" );Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );Show( "Result of direct calculation" );p = N Row( exX ) - 3;Show( Inverse( exX[Index( 1, p ), 0]` * exX[Index( 1, p ), 0] ) );

```

### Inverse

**구문:** y = Inverse( x ); y = Inv( x )

**설명:** x 인수의 역을 반환합니다. 정방 비특이 행렬이어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Is Matrix

**구문:** y = Is Matrix( x )

**설명:** 인수가 행렬이면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Is Matrix( [11 22 33] );

```

### J

**구문:** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**설명:** 세 번째 인수에 의해 결정되는 값 행렬(nr x nc)을 생성합니다. 두 번째 인수의 기본값은 첫 번째 인수와 같고 세 번째 인수의 기본값은 1입니다. 그러나 세 번째 인수는 숫자, 숫자의 변수 이름 또는 JSL 코드일 수 있습니다. 세 번째 인수가 코드인 경우 코드가 실행되고 행렬의 모든 요소에 요소별, 행별로 반환 값이 할당됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

// Produce a 2x3 matrix, filled with 15.m = J( 2, 3, 15 );// Produce a default 4x4 matrix, filled with 1.m = J( 4 );// Produce a 2x3 matrix, filled with a number determined by a variable.a = 3.14;m = J( 2, 3, a );// Produce a vector of random numbers from the Uniform distribution.m = J( 1, 100, Random Uniform() );// Produce a 2x3 matrix, filled with a sequence of integers.a = 0;m = J( 2, 3, a = a + 1 );// This is a fun example to illustrate what is possible for the third argument.i = 1;J(	10,	1,	Print(		Eval Insert(			"For the ^i^^if(i < 4, words(\!"st,nd,rd\!",\!",\!")[i], \!"th\!")^ time, I'm not a loop!"		)	);	Round( 1 / Sqrt( 5 ) * ((1 + Sqrt( 5 )) / 2) ^ i++ ););

```

### KDTable

**구문:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**설명:** 근접 이웃을 효율적으로 찾기 위한 테이블을 반환합니다. 행렬 인수는 k-차원 점입니다. 차원 또는 점의 수에는 기본적으로 적용되는 제한이 없습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );{rows, dist} = tab << K nearest rows( 2, 1 );"2 nearest rows to row 1 are " || Char( rows );

```

### Least Squares Solve

**구문:** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**설명:** 추정값의 벡터, Beta = Inverse(X&apos;X)X&apos;y 및 Beta의 추정 분산 행렬이 포함된 목록을 반환합니다. 선택적 <<noIntercept 인수는 절편이 없는 모형을 지정합니다. 선택적 <<weights 인수는 가중 최소 제곱을 수행하기 위한 가중치의 벡터를 지정합니다. 선택적 <<method 인수를 사용하면 정규 방정식의 해를 찾기 위한 방법으로 기본 Sweep 방법과 일반화 역행렬("GInv") 방법 중에서 선택할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

/*Simple Linear Regression*/y = [3, 5, 7, 5];X = [1, 2, 3, 4];{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Linear Regression

**구문:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**설명:** 가정된 모형 y = X \* beta + error에 대해 선형 회귀를 적합시킵니다. 선택적 인수 <<noIntercept는 절편이 없는 모형을 지정합니다. 선택적 인수 <<printToLog는 적합 요약을 로그 창에 인쇄하도록 지정합니다. 선택적 인수 weight는 가중 최소 제곱을 수행하기 위한 가중치의 벡터를 지정하고 선택적 인수 freq는 빈도 벡터를 지정합니다. 추정값의 벡터가 포함된 목록, 표준 오차의 벡터 및 진단 목록을 반환합니다. 진단 목록에는 t 통계량의 벡터 및 추정값에 대한 p 값과 회귀 적합에 대한 R² 및 수정 R²이 포함됩니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

/*Simple Linear Regression: y = intercept + beta * x + error*/y = [3, 5, 7, 5];X = [1, 2, 3, 4];{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<printToLog ); /*t_ratio = Diagnostics["t_ratio"]; p_value = Diagnostics["p_value"]; RSquare = Diagnostics["RSquare"]; RSquare Adj = Diagnostics["RSquare Adj"];*/

```

**예제 2**

```jsl

/*Model: y = beta_1*x + beta_2*x^2 + error*/y = [3, 5, 7, 5];X = [1 1, 2 4, 3 9, 4 16];{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<noIntercept, <<printToLog );

```

**예제 3**

```jsl

/*Categorical Variable Example*//*Model: y = beta_1*boy + beta_2*girl + beta_3*x + error*/y = [3, 5, 7, 5];x = [1, 2, 3, 4];gender = {"boy", "girl", "girl", "boy"};designMat = Design( gender ) || x;{Estimates, Std_Error, Diagnostics} = Linear Regression( y, designMat, <<noIntercept, <<printToLog );

```

### Loc

**구문:** y = Loc( m ); y = Loc( v, x )

**설명:** m 행렬에서 0이 아닌 위치를 포함하는 행렬을 반환합니다. Loc(v, x)와 같이 인수가 두 개 지정된 경우 목록 또는 v 행렬에서 x 값과 동일한 위치를 포함하는 행렬을 반환합니다. 가능하면 Where를 대신 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

/*more examples, above*/Show( Loc( [1 0 1 0 1 0] ) );Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**예제 2**

```jsl

Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

**예제 3**

```jsl

Loc( [5, 7, 5, ., 5], 5 );

```

**예제 4**

```jsl

Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

**예제 5**

```jsl

Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**구문:** y = Loc Max( x )

**설명:** 최대값의 x에서 첫 번째 위치를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**구문:** y = Loc Min( x )

**설명:** 최소값의 x에서 첫 번째 위치를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**구문:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**설명:** 인수 행렬에서 결측값이 없는 행의 행 번호 벡터를 반환합니다. 인수가 목록인 경우에는 비결측 숫자 또는 비어 있지 않은 문자가 있는 위치를 벡터로 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**구문:** idx = Loc Sorted( x, y )

**설명:** 이진 검색을 기반으로 x의 값이 y의 값보다 작거나 같은 서브스크립트 위치의 열 벡터를 생성합니다. x는 결측값이 없고 오름차순으로 정렬된 행렬이어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Show(	Loc Sorted( [11 22 33 44 55], [11 33 55] ),	Loc Sorted( [11 22 33 44 55], [1] ),	Loc Sorted( [11 22 33 44 55], [500] ));

```

### Low Rank Symmetric Update BLAS

**구문:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP추가된 버전:** 17

```jsl

A = [2 0, 0 2];U = [2 4, 3 5];s = 2.5;AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Matrix

**구문:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} ) y = Matrix( {x1, ..., xn} ) y = Matrix( n, m )

**설명:** n x m 행렬을 생성합니다. 각각 m개의 행 값을 포함하는 n개의 목록으로 구성된 목록을 지정하면 평가된 목록을 세로로 연결하여 행렬을 생성합니다. n개의 항목으로 구성된 단일 목록을 지정할 경우 반환 값은 n x 1 열 벡터입니다. 두 개의 정수 인수를 지정할 경우 반환 값은 n개의 행과 m개의 열을 포함하는 0 행렬입니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**예제 2**

```jsl

Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**예제 3**

```jsl

Matrix( {2, 3 + 7} );

```

**예제 4**

```jsl

Matrix( 2, 3 );

```

### Matrix Mult

**구문:** y = Matrix Mult( A, B, ... ); y = A * B

**설명:** 행렬 곱셈을 수행합니다. 행렬 인수는 NCol(a)==NRow(b) 형태가 되어야 합니다. A \* B도 가능합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];exMatB = [1 2, 1 2, 1 2];exMatM1 = exMatA * exMatB;exMatM2 = Matrix Mult( exMatA, exMatB );exMatC = [1 2, 1 2];exMatM3 = Matrix Mult( exMatA, exMatB, exMatC );Show( exMatM1 );Show( exMatM2 );Show( exMatM3 );

```

### Matrix Mult BLAS

**구문:** y = Matrix Mult BLAS( A, B, ... )

**설명:** 행렬 곱셈을 수행합니다. 행렬 인수는 NCol(A)==NRow(B) 형태가 되어야 합니다.

**JMP추가된 버전:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];exMatB = [1 2, 1 2, 1 2];exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**구문:** r = Matrix Rank( X )

**설명:** 행렬 X의 계수를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Mode

**구문:** y = Mode( list or matrix )

**설명:** 행렬 또는 목록에서 &apos;최빈&apos; 항목을 선택합니다. 동등인 경우 낮은 값이 선택됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Multivariate Normal Impute

**구문:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**설명:** 반응 yVec 벡터에 있는 결측값을 대치 값으로 채워 반응 벡터를 반환합니다. 대치 값은 평균 벡터 meanYvec 및 공분산 행렬 symCovMat으로 정의되는 다변량 정규 분포에서 생성됩니다. 선택적 인수 colMin 및 colMax는 열 최소값 및 최대값의 벡터입니다. 이러한 인수는 결측값 대치에 대한 한계를 제공합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

mat = [0.430735257211985 -0.935632420013493 . 0.424649913158299,. -0.687720061441453 0.29665732536624 -1.94898001941576,-0.0425472526673373 0.463229145080277 0.635619352779951 .];cov = Covariance( mat, <<"Pairwise"/*, <<"shrink"*/ );colMean = V Mean( mat );colMin = V Min( mat );colMax = V Max( mat );For( it = 1, it <= N Row( mat ), it++,	mat[it, 0] = Multivariate Normal Impute( mat[it, 0], colMean, cov, colMin, colMax )`);Print( mat );

```

### N Col

**구문:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**설명:** 현재 데이터 테이블, 지정된 데이터 테이블 또는 행렬의 열 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

N Col( [11 22, 33 44] );

```

### N Cols

**구문:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**설명:** 현재 데이터 테이블, 지정된 데이터 테이블 또는 행렬의 열 수를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

N Col( [11 22, 33 44] );

```

### NChooseK Matrix

**구문:** m = NChooseK Matrix( n, k )

**설명:** 1부터 n까지의 숫자 중 k개를 선택하는 모든 가능한 조합을 nChooseK(n,k)개 행과 k개의 열로 행렬을 생성하여 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Print( NChooseK Matrix( 5, 3 ) );

```

### Ortho

**구문:** L = Ortho( A, &lt;Centered( 1 )&gt;, &lt;Scaled( 1 )&gt; )

**설명:** 행렬의 열을 직교화합니다. 중심화 옵션은 열 합을 0으로 만듭니다. 척도화 옵션은 열을 단위 길이로 만듭니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**구문:** L = Ortho Poly( V, order )

**설명:** order 인수에 지정된 차수까지 벡터 V의 직교 다항식을 반환합니다. V 인수는 행 또는 열 벡터일 수 있습니다. Scale 옵션은 이들을 단위 길이로 만듭니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Ortho Poly( 1 :: 10, 2 );

```

### P Spline Coef

**구문:** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**설명:** P-스플라인 계수의 행렬을 반환합니다. Internal Knot Grid는 x의 백분위수를 기반으로 하는 원하는 매듭 점의 수이거나 내부 매듭 점을 지정하는 벡터입니다. 선택적 모수 degree는 P-스플라인의 차수를 지정하며 기본값은 3입니다.

**JMP추가된 버전:** 14

```jsl

P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Parallel Assign

**구문:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**설명:** 여러 스레드를 사용하여 행렬에 값을 할당합니다. 스레드에서 예외가 발생하면 메시지가 로그에 인쇄되고 반환 값은 0입니다. 모든 스레드가 오류 없이 완료되면 반환 값은 1입니다. 플랫폼 시작, 데이터 테이블 생성 또는 사용, 그래픽 부시스템 액세스를 수행하는 함수는 주 스레드에서만 지원되며, 작업자 스레드에서 호출할 경우 예외가 발생합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

m = J( 3, 2, -1 );If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,	Throw( "thread failed" ));m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Print Matrix

**구문:** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**설명:** M 행렬을 다양한 방법으로 표시합니다. 선택적 인수 ignore locale은 로케일 정보를 따를지 여부를 지정합니다. 0은 로케일 정보를 따르는 것을 의미합니다. 선택적 인수 style은 스타일을 사용할지 여부와 사용할 스타일을 지정합니다. 사용 가능한 스타일은 parseable(형식이 조정된 JSL 행렬 표현식), latex 및 other입니다. style 인수가 other이면 마지막 세 개의 선택적 인수는 인쇄된 행의 시작 및 끝 문자와 연결된 항목을 구분하는 문자를 정의합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

A = [3.509 0.003, 874.4 0.00384, 0.03 0.093];Print Matrix( A );Print Matrix( A, <<ignore locale( 1 ) );Print Matrix( A, <<style( "latex" ) );Print Matrix( A, <<style( "other" ), <<line begin( "| " ), <<line end( " |" ), <<separate( " | " ) );

```

### QR

**구문:** {Q, R} = QR( X )

**설명:** X = Q \* R이 되도록 m x m 직교 행렬 Q 및 m x n 상삼각 행렬 R을 생성합니다. X 인수는 m x n 행렬입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

QR( [11 22, 33 44] );

```

### QR LAPACK

**구문:** {Q, R} = QR LAPACK( X )

**설명:** X = Q \* R이 되도록 m x k 직교 행렬 Q 및 k x n 상삼각 행렬 R을 생성합니다. X 인수는 m x n 행렬이며, 여기서 k는 min(m, n)입니다.

**JMP추가된 버전:** 17

```jsl

QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**구문:** y = Quadratic Form BLAS( A, x )

**JMP추가된 버전:** 17

```jsl

A = [2 0, 0 2];x = [2, 3];y = Quadratic Form BLAS( A, x );

```

### Random SVD

**구문:** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**설명:** 행렬 X에 대한 특이값 분해를 계산합니다. 이때 U\*diag(M)\*V`가 X와 동일하도록 {U, M, V} 목록을 반환하여 랜덤화 특이값 분해를 사용합니다.

**JMP추가된 버전:** 17

```jsl

Random SVD( [11 22, 33 44], 1 );

```

### Rank

**구문:** y = Rank Index( x )

**설명:** 벡터 v에서 원래 위치를 참조하기 위한 인덱스 벡터를 반환하고 벡터를 순서대로 정렬합니다. 결측값은 제외합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**구문:** y = Rank Index( x )

**설명:** 벡터 v에서 원래 위치를 참조하기 위한 인덱스 벡터를 반환하고 벡터를 순서대로 정렬합니다. 결측값은 제외합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**구문:** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**설명:** 1(낮음)에서 n(높음)까지 x 값의 순위 벡터를 반환합니다. 같은 값의 경우 임의로 순위가 정해집니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Ranking( [33, 22, 44, 11, 33] );Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**구문:** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**설명:** 1(낮음)에서 n(높음)까지 x 값의 순위 벡터를 반환합니다. 같은 값의 경우 순위를 평균합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Ranking Tie( [33, 22, 44, 11, 33] );

```

### Robust PCA

**구문:** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**설명:** 데이터를 낮은 계수 행렬 및 잔차 희소 행렬로 로버스트하게 분해합니다. 잔차에서 이상치가 감지됩니다. 결측값을 대치할 수도 있습니다.

**JMP추가된 버전:** 16

```jsl

X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];X[2, 3] += 15;Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### SVD

**구문:** {U, M, V} = SVD( X )

**설명:** U\*diag(M)\*V`가 X와 동일하도록 목록 {UM, V}를 반환하여 행렬 X의 특이값 분해를 계산합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

SVD( [11 22, 33 44] );

```

### SVD LAPACK

**구문:** {U, M, V} = SVD LAPACK( X )

**설명:** U\*diag(M)\*V`가 X와 동일하도록 목록 {UM, V}를 반환하여 행렬 X의 특이값 분해를 계산합니다.

**JMP추가된 버전:** 17

```jsl

SVD LAPACK( [11 22, 33 44] );

```

### Scoring Impute

**구문:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**설명:** 자동 데이터 결측값 대치(ADI) 알고리즘에 스트리밍 기능을 제공합니다. 입력 인수는 결측값, ADI 알고리즘에 의해 생성된 적재 행렬(또는 V 행렬), 결측 셀을 무시한 열 평균의 벡터, 결측 셀을 무시한 열 표준편차의 벡터가 포함된 행 벡터입니다. 이 인수는 최소 제곱 추정을 사용하여 대치된 결측값이 포함된 행 벡터를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Scoring Impute(	[1 2 3 . 4 .],	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],	[0, 0, 0, 0, 0, 0],	[1, 1, 1, 1, 1, 1]);

```

### Shape

**구문:** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**설명:** 전체 행에 대한 M 행렬 또는 스칼라를 nr행 x nc열 형식으로 재구성합니다. nr에는 결측값이 허용됩니다. M의 데이터가 nr x nc 행렬을 채우는 데 필요한 만큼 복제됩니다. 선택적인 <<bycol 인수를 사용하면 열별로 데이터가 채워집니다. 기본적으로는 행별로 데이터가 채워집니다. 일반적으로 벡터를 행렬로 재구성하거나 행렬을 벡터화할 때 이 방법을 사용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Eval List( {Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ), Shape( [11 22, 33 44], ., 4 )} );

```

### Solve

**구문:** y = Solve( A, B )

**설명:** x에 대한 선형 시스템 A\*x=B의 해를 찾습니다. A가 비특이일 경우Solve() 함수는 Inverse(A)\*B와 동등합니다. A 인수는 정방 행렬이어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**구문:** y = Sort Ascending( x )

**설명:** 목록 또는 행렬 x의 항목을 오름차순으로 정렬한 복사본을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**구문:** y = Sort Descending( x )

**설명:** 목록 또는 행렬 x의 항목을 내림차순으로 정렬한 복사본을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Sort Descending( {111, 212, 133, 114, 55} );

```

### Sparse SVD

**구문:** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**설명:** 행렬 X에 대한 특이값 분해를 수행합니다. U\*diag(M)\*V`가 X와 동일하게 되는 {U, M, V}를 반환하며 희소 행렬에 대해 부분적으로 재직교된 Lanczos 방법을 사용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Spline Coef

**구문:** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**설명:** x의 각 고유 값에 대해 knots||a||b||c||d 순서로 구성된 5열 계수 행렬을 반환합니다. 평활 모수 lambda는 양수여야 하며, lambda 값이 클수록 스플라인의 경직도가 증가합니다. 선택적 weights 벡터는 x의 각 값에 대한 가중치를 지정합니다. 가중치가 0이면 해당 점이 스플라인 적합에서 제거됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**구문:** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**설명:** Spline Coef() 함수에서 반환된 것과 동일한 형식의 coef 행렬을 사용하여 스플라인 예측을 실행합니다. extrapolation은 결측값을 반환하기 전에 스플라인 범위(범위에 대한 분수로 지정)에서 어느 정도까지 계산을 확장할지를 나타냅니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Spline Fit",	window:x = 20 :: 80;	window:y = 50 + Sin( (20 :: 80) / 10 ) * 40 + J( 1, N Col( window:x ), Random Normal( 0, 10 ) );	window:loglambda = 2;	window:g = Graph Box(		Pen Color( "blue" );		window:m = Spline Coef( window:x, window:y, Power( 10, window:loglambda ) );		Marker( window:x, window:y );		Y Function( Spline Eval( a, window:m, 0.05 ), a );	);,	H List Box( Text Box( "Lambda: " ), Slider Box( -2, 5, window:loglambda, window:g << reshow ) ));

```

### Spline Smooth

**구문:** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**설명:** 스플라인 적합에서 평활 예측값을 반환합니다. 평활 모수 lambda는 양수여야 하며, lambda 값이 클수록 스플라인의 경직도가 증가합니다. 선택적 weights 벡터는 x의 각 값에 대한 가중치를 지정합니다. 가중치가 0이면 해당 점이 스플라인 적합에서 제거됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sweep

**구문:** y = Sweep( A, &lt;indices&gt; )

**설명:** indices로 지정된 대각 피벗에서의 A 행렬 지우기를 반환합니다. 이것은 행렬을 한 번에 한 피벗씩 반전하는 방법입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];exMatswp = Sweep( exMat, [1, 2, 3, 4] );exMatinv = Inverse( exMat );Show( exMatswp );Show( exMatinv );

```

### Sym Matrix Mult BLAS

**구문:** y = Sym Matrix Mult BLAS( A, B, ... )

**설명:** A가 대칭 행렬인 경우 행렬 곱셈을 수행합니다. 행렬 인수는 NCol(A)==NRow(B) 형태가 되어야 합니다.

**JMP추가된 버전:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];exMatA = exMatA` * exMatA;exMatB = [1 2, 1 2, 1 2];exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### Trace

**구문:** y = Trace( x )

**설명:** 정방 행렬의 대각 요소 합을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Trace( [11 22, 33 44] );

```

### Transpose

**구문:** y = Transpose( matrix ); y = matrix`

**설명:** 행과 열을 교환하여 행렬 인수를 전치합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### V Concat

**구문:** y = a |/ b; y = V Concat( a, b, ... )

**설명:** 행렬을 세로로 연결합니다. 인수에 동일한 수의 열이 있어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

[11 22] |/ [33 44];

```

### V Concat To

**구문:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**설명:** 제자리에 세로로 연결합니다. a |/= b는 a = a |/ b와 동등합니다. 할당 연산자입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

exA = [1 2, 3 4];exB = [5 6, 7 8, 9 10];exC = [1, 1, 1, 1, 1];exD = V Concat To( exA, exB );exE = Concat( exD, exC );/* exA is changed and exD is not. */Show( exA, exB, exC, exD, exE );/* Also see ConcatTo(), VConcat() */

```

### V Max

**구문:** b = V Max( matrix )

**설명:** 인수에 있는 각 열의 최대값이 포함된 행 벡터를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**구문:** m = V Mean( matrix )

**설명:** 인수에 있는 각 열의 평균이 포함된 행 벡터를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**구문:** m = V Median( matrix )

**설명:** 인수에 있는 각 열의 중앙값이 포함된 행 벡터를 반환합니다.

**JMP추가된 버전:** 15

```jsl

V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**구문:** a = V Min( matrix )

**설명:** 인수에 있는 각 열의 최소값이 포함된 행 벡터를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**구문:** m = V Quantile( matrix, p )

**설명:** 인수에 있는 각 열의 지정된 분위수 p가 포함된 행 벡터를 반환합니다.

**JMP추가된 버전:** 15

```jsl

V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**구문:** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**설명:** 중앙값으로 중심화되고 X 행렬의 표준편차에 대한 로버스트 추정값으로 척도화된 행렬을 반환합니다. 선택적 부울 인수는 중심화 및 척도화가 수행되는지 여부를 지정합니다.

**JMP추가된 버전:** 17

```jsl

V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Standardize

**구문:** b = V Standardize( X )

**설명:** 행렬 X에 대한 중심화 및 척도화된 행렬을 반환합니다. b의 각 열은 평균 0과 표준편차 1을 갖습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**구문:** b = V Std( matrix )

**설명:** 인수에 있는 각 열의 표준편차가 포함된 행 벡터를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**구문:** s = V Sum( matrix )

**설명:** 인수에 있는 각 열의 합이 포함된 행 벡터를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

V Sum( [11 22, 33 44, 55 66] );

```

### VPTree

**구문:** tab = VPTree( [ matrix ] )

**설명:** 근접 이웃을 효율적으로 찾기 위한 테이블을 반환합니다. 행렬 인수는 k-차원 점입니다. 차원 또는 점의 수에는 기본적으로 적용되는 제한이 없습니다.

**JMP추가된 버전:** 16

```jsl

tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Varimax

**구문:** {R,T} = Varimax( F, &lt;norm=1&gt; )

**설명:** 지정된 행렬 F에 대한 Varimax 회전을 수행합니다. 회전된 행렬 및 직교 회전 행렬이 포함된 목록을 반환합니다. 기본적으로 정규화된 Varimax 회전이 수행됩니다. 정규화되지 않은 Varimax 회전을 수행하려면 norm = 0을 지정하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**구문:** y = Vec Diag( x )

**설명:** 정방 행렬의 대각 요소를 벡터로 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**구문:** Vec Quadratic( S, X )

**설명:** Vec Diag( X \* S \* X` )로 실행합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

exS = [1 3 5, 3 2 6, 5 6 1];exX = [1 3 5, 2 4 6];Vec Quadratic( exS, exX );

```

### Wavelet Basis Coef

**구문:** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**설명:** 지정된 소파동 모형에 대해 점 x에서의 예측을 반환합니다. grid 모수는 소파동 모형의 데이터 격자를 지정하는 벡터입니다. coef 모수는 소파동 계수의 벡터이고, wavelet 모수는 소파동 모형의 이름입니다. 선택적 param 모수는 소파동 모형 모수(필요한 경우, 기본값 0)입니다.

**JMP추가된 버전:** 17

```jsl

Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

