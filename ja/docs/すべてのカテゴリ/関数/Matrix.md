# Matrix



### Add Vectors BLAS

**構文:** z = Add Vectors BLAS( x, y, alpha )

**JMP追加されたバージョン:** 17

```jsl

x = [1, 2, 3, 4];y = [5, 6, 7, 8];alpha = 0.5;z = Add Vectors BLAS( x, y, alpha );

```

### All

**構文:** y = All( x, ... )

**説明:** すべての要素がゼロ以外の場合は1を戻し、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

All( [1 2 3] );

```

### Any

**構文:** y = Any( x, ... )

**説明:** いずれかの要素がゼロ以外の場合は1を戻し、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Any( [1 0 2] );

```

### B Spline Coef

**構文:** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**説明:** B-スプライン曲線の係数の行列を戻す。Internal Knot Gridは、xのパーセント点に基づく、必要な節点の数か、または内部節点を指定するベクトル。オプションのパラメータdegreeは、Bスプライン曲線の次数を指定し、デフォルトの値は3。オプションのパラメータKnotEndPointsは、境界線上の節点の[下側, 上側]位置から成る2X1行列を取る。境界線上の節点は、デフォルトではxの最小値と最大値。2つ目の例は、B-スプライン曲線の係数を計画行列として使用した線形モデル。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

**例 2**

```jsl

xx = (0 :: 10)`;yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];designMat = B Spline Coef( xx, 2 );Linear Regression( yy, designMat, <<nointercept );

```

### CDF

**構文:** {QuantVec, CumProbVec} = CDF( Y )

**説明:** ベクトルまたはリストYに対する経験累積分布関数の値を戻す。累積確率(CumProbVec)は、ベクトルQuantVecの各値以下であるデータの割合。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* Generate random values, Normal(0,1) */Y = J( 150, 1, Random Normal() );/* CDF function */{Quant, CumProb} = CDF( Y ); /* Draw empirical and theorical CDF */New Window( "Empirical CDF",	Graph Box(		X Scale( -3, 3 ),		Y Scale( 0, 1 ),		Pen Color( "red" );		For( i = 2, i <= N Row( Quant ), i++,			H Line( Quant[i - 1], Quant[i], CumProb[i] );			V Line( Quant[i - 1], CumProb[i - 1], CumProb[i] );		);		i = N Row( Quant );		V Line( Quant[i], CumProb[i], 1 );		Pen Color( "blue" );		Y Function( Normal Distribution( q ), q );	));

```

### Chol Update

**構文:** L2 = Chol Update( L, V, C )

**説明:** 更新されたA+V\*C\*V&apos;のCholesky根を戻す。ここで、Cはmxm対称行列、Vはnxm行列。引数Lは、nxn行列AのCholesky根でなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* The inner product of a design matrix */exS = [16 1 0 11 -1 12,1 11 -1 1 -1 1,0 -1 12 -1 1 0,11 1 -1 11 -1 9,-1 -1 1 -1 9 -1,12 1 0 9 -1 12];/* Conduct the Cholesky decomposition */exAchol = Cholesky( exS );/* Two column vectors to be applied to change the design matrix */exV = [1 1, 0 0, 0 1, 0 0, 0 0, 0 1];/* The first column vector is added to one of the rows in the design matrix *//* The second column vector is subtracted from one of the rows in the design matrix */exC = [1 0, 0 -1];/* Update the Cholesky decomposition manually */exAnew = exS + exV * exC * exV`;exAcholnew = Cholesky( exAnew );/* Update the Cholesky decomposition more efficiently */exAcholnew_test = Chol Update( exAchol, exV, exC );/* Results are the same */Show( exAcholnew_test );Show( exAcholnew );

```

### Cholesky

**構文:** L = Cholesky( A )

**説明:** 半正値定符号行列のCholesky分解を戻す。Lは、L\*L` = Aとなるような下三角行列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Cholesky( [1 2, 2 13] );

```

### Correlation

**構文:** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**説明:** 引数に指定された行列xの相関行列を戻す。引数"Pairwise"は、欠測値を行ごとにではなくペアごとに処理する。引数"Shrink"は、Schafer and Strimmer(2005)の方法で、非対角要素を縮小させる。引数Freqと引数Weightに、度数と重みのベクトルを指定することもできる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Covariance

**構文:** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**説明:** 引数に指定された行列xの共分散行列を戻す。引数"Pairwise"は、欠測値を行ごとにではなくペアごとに処理する。引数"Shrink"は、Schafer and Strimmer(2005)の方法で、非対角要素を縮小させる。引数Freqと引数Weightに、度数と重みのベクトルを指定することもできる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Design

**構文:** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**説明:** 1と0の列でできた計画行列を作成する。計画行列の水準のリストを指定するには、levelsList引数を使用する。<<Levels引数が指定されている場合、計画行列と水準のリストを戻す。<<ElseMissing引数が指定されている場合、levelsListに表示されない引数vの値を計画行列内で欠測値として示す。そうでない場合は、0を挿入する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* example that Design(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( Design( exLevels ) );/* Also see DesignNom, DesignOrd *//* example that Design(...) takes two arguments */Show( Design( 3, {1, 2, 3} ) );Show( Design( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( Design( exLevels, {1, 2, 3} ) );Show( Design( {"a", "b"}, {"a", "b", "c"} ) );/* example that Design(...) takes three arguments */Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Last

**構文:** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**説明:** 0と1の指示変数を列とした計画行列を戻す。なお、最後の水準は0だけの行とし、計画行列の列には含まない。levelsList引数が指定されている場合、levelsListで最後に指定されている値が最後の水準とみなされる。そうでない場合、v内の最も大きな値が最後の水準とみなされる。<<Levels引数が指定されている場合、計画行列、および、全水準のリストが、リスト形式で戻される。<<ElseMissing引数が指定されている場合、levelsListで指定されていないv引数に対しては、計画行列で欠測値の行とする(指定されている場合には、0だけの行とする)。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* example that Design Last(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( Design Last( exLevels ) );/* see what is different from Design(...) */Show( Design( exLevels ) );/* Also see Design, DesignOrd *//* example that Design Last(...) takes two arguments */Show( Design Last( 3, {1, 2, 3} ) );Show( Design( 3, {1, 2, 3} ) );Show( Design Last( [1 2], {1, 2, 3} ) );Show( Design( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( Design Last( exLevels, {1, 2, 3} ) );Show( Design( exLevels, {1, 2, 3} ) );Show( Design Last( {"a", "b"}, {"a", "b", "c"} ) );Show( Design( {"a", "b"}, {"a", "b", "c"} ) );/* example that Design Last(...) takes three arguments */Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Nom

**構文:** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**説明:** 引数の最後の一意の値以外の、1と0の列でできた計画行列を作成する。最後の水準は-1の行としてコード化する。levelsList引数が指定されている場合、最後の水準はlevelsList内の最後の水準となる。そうでない場合、最後の水準はv内の最も大きな値となる。<<Levels引数が指定されている場合、戻り値は計画行列と水準を含むリストとなる。<<ElseMissing引数が指定されている場合、levelsListに表示されない引数vの値を、計画行列内で欠測値として示す。そうでない場合は、0を挿入する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* example that Design Nom(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( Design Nom( exLevels ) );/* see what is different from Design(...) */Show( Design( exLevels ) );/* Also see Design, DesignOrd *//* example that Design Nom(...) takes two arguments */Show( Design Nom( 3, {1, 2, 3} ) );Show( Design( 3, {1, 2, 3} ) );Show( Design Nom( [1 2], {1, 2, 3} ) );Show( Design( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( Design Nom( exLevels, {1, 2, 3} ) );Show( Design( exLevels, {1, 2, 3} ) );Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );Show( Design( {"a", "b"}, {"a", "b", "c"} ) ); /* example that Design Nom(...) takes three arguments */Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Ord

**構文:** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**説明:** 引数の最後の一意の値以外の値の列を含む計画行列を作成する。最初の水準は0の行としてコード化する。levelsList引数の後続のn番目の水準は(n-1)個の1と残りの0の行としてコード化する。<<Levels引数が指定されている場合、戻り値は計画行列と水準を含むリストとなる。<<ElseMissing引数が指定されている場合、levelsListに表示されない引数vの値を、計画行列内で欠測値として示す。 そうでない場合は、0を挿入する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* example that Design Ord(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( Design Ord( exLevels ) );/* see what is different from Design Nom(...) */Show( Design Nom( exLevels ) );/* Also see Design, Design Nom *//* example that Design Ord(...) takes two arguments */Show( Design Ord( 3, {1, 2, 3} ) );Show( Design Nom( 3, {1, 2, 3} ) );Show( Design Ord( [1 2], {1, 2, 3} ) );Show( Design Nom( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( Design Ord( exLevels, {1, 2, 3} ) );Show( Design Nom( exLevels, {1, 2, 3} ) );Show( Design Ord( {"a", "b"}, {"a", "b", "c"} ) );Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );/* example that Design Ord(...) takes three arguments */Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### DesignF

**構文:** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**説明:** 引数の最後の一意の値以外の、1と0の列でできた計画行列を作成する。最後の水準は-1の行としてコード化する。levelsList引数が指定されている場合、最後の水準はlevelsList内の最後の水準となる。そうでない場合、最後の水準はv内の最も大きな値となる。<<Levels引数が指定されている場合、戻り値は計画行列と水準を含むリストとなる。<<ElseMissing引数が指定されている場合、levelsListに表示されない引数vの値を、計画行列内で欠測値として示す。そうでない場合は、0を挿入する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* example that DesignF(...) takes one argument */exLevels = [1, 2, 3, 2, 1];Show( DesignF( exLevels ) );/* see what is different from Design(...) */Show( Design( exLevels ) );/* Also see Design, DesignOrd *//* example that DesignF(...) takes two arguments */Show( DesignF( 3, {1, 2, 3} ) );Show( Design( 3, {1, 2, 3} ) );Show( DesignF( [1 2], {1, 2, 3} ) );Show( Design( [1 2], {1, 2, 3} ) );exLevels = [1, 2, 3, 2, 1, 2, 3];Show( DesignF( exLevels, {1, 2, 3} ) );Show( Design( exLevels, {1, 2, 3} ) );Show( DesignF( {"a", "b"}, {"a", "b", "c"} ) );Show( Design( {"a", "b"}, {"a", "b", "c"} ) );/* example that DesignF(...) takes three arguments */Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Det

**構文:** y = Det( x )

**説明:** 正方行列の行列式を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Det( [11 22, 33 44] );

```

### Diag

**構文:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**説明:** 行列またはベクトルから対角行列を作成する。引数が2つ指定された場合、行列を対角線上に連結する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Diag( [11 22] );

```

### Direct Product

**構文:** y = Direct Product( A, B )

**説明:** 直積(クロネッカー積)を戻す。結果の行列は、可能なすべての積A[i,j]\*Bから構成される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exA = [1 2, 3 4];exB = [1 1 1, 2 2 2, 3 3 3];exProd = Direct Product( exA, exB );Show( exProd );/* verify results */Show( exProd[1 :: 3, 1 :: 3] == exB );Show( exProd[4 :: 6, 1 :: 3] == (exB * 3) );Show( exProd[1 :: 3, 4 :: 6] == (exB * 2) );Show( exProd[4 :: 6, 4 :: 6] == (exB * 4) );/* Also see H Direct Product */

```

### Distance

**構文:** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**説明:** x1の行とx2の行との間の距離の行列を生成する。各列の尺度とべき乗をカスタマイズしたい場合は、追加の引数scaleとpowersを指定する。クリギングでは、Exp(-distance(x1,x2))を使用する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/*1-D example*/exX1 = [1, 2, 3, 4];exX2 = [2, 4, 6, 8]; /*Compute squared Euclidean distance*/exD = Distance( exX1, exX2 ); /*Verify result*/exDm = J( 4, 4, . );For( exi = 1, exi <= 4, exi++,	For( exj = 1, exj <= 4, exj++,		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )	));Show( exDm == exD ); /*2-D example*/exX1 = [1 1, 2 2, 3 3, 4 4];exX2 = [2 1, 4 2, 6 0, 8 7]; /*Compute squared Euclidean distance*/exD = Distance( exX1, exX2 ); /*Verify result*/exDm = J( 4, 4, . );For( exi = 1, exi <= 4, exi++,	For( exj = 1, exj <= 4, exj++,		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )	));Show( exDm == exD ); /*2-D example*/exX1 = [1 1, 2 2, 3 3, 4 4];exX2 = [2 1, 4 2, 6 0, 8 7]; /*Compute squared Euclidean distance, with a scaler [0.5 2.0]*/exD = Distance( exX1, exX2, [0.5 2.0] ); /*Verify result*/exDm = J( 4, 4, . );For( exi = 1, exi <= 4, exi++,	For( exj = 1, exj <= 4, exj++,		exDm[exi, exj] = Sum( [0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) ^ 2) )	));Show( exDm == exD ); /*2-D example*/exX1 = [1 1, 2 2, 3 3, 4 4];exX2 = [2 1, 4 2, 6 0, 8 7]; /*Compute squared Euclidean distance, with scalers [0.5 2.0] and powers [1.5 2.0]*/exD = Distance( exX1, exX2, [0.5 2.0], [1.5 2.0] ); /*Verify result*/exDm = J( 4, 4, . );For( exi = 1, exi <= 4, exi++,	For( exj = 1, exj <= 4, exj++,		exDm[exi, exj] = Sum(			[0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) :^ [1.5 2.0])		)	));Show( exDm == exD );

```

### E Div

**構文:** y = A :/ B; y = E Div( A, B )

**説明:** 行列の要素ごとの除算を行う。

**JMP追加されたバージョン:** バージョン14より前

```jsl

[11 22 33] :/ [1 2 3];

```

### E Max

**構文:** y = E Max( A, B )

**説明:** 引数に指定された行列の、各要素の最大値の行列を戻す。

**JMP追加されたバージョン:** 16

```jsl

E Max( [1 22 33], [11 2 3] );

```

### E Min

**構文:** y = E Min( A, B )

**説明:** 引数に指定された行列の、各要素の最小値の行列を戻す。

**JMP追加されたバージョン:** 16

```jsl

E Min( [1 22 33], [11 2 3] );

```

### E Mult

**構文:** y = A :* B; y = E Mult( A, B )

**説明:** 行列の要素ごとの乗算を行う。

**JMP追加されたバージョン:** バージョン14より前

```jsl

[1 2 3] :* [11 22 33];

```

### Eigen

**構文:** {M, E} = Eigen( X )

**説明:** 対称行列Xの固有値分解。E\*Diag(M)\*E` = Xとなるようなリスト{M, E}を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

X = [11 22, 22 33];{M, E} = Eigen( X );E * Diag( M ) * E`;

```

### Eigen BLAS

**構文:** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP追加されたバージョン:** 17

```jsl

X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];{M1, E1} = Eigen BLAS( X );

```

### Estimate Bartlett Factor Score

**構文:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**説明:** Bartlett法によって構造方程式モデル(SEM)の因子スコアを推定する。引数には、データの行ベクトル、推定されたモデルから求められた顕在変数の平均、推定されたモデルから求められた潜在変数の平均、SEMのRAM形式でのS行列、SEMのRAM形式でのA行列を指定する。上記の引数で指定された構造方程式モデルに基づき、因子スコアの推定値を行ベクトルの形で戻す。

**JMP追加されたバージョン:** 16

```jsl

Estimate Bartlett Factor Score(	[2 2 0],	[2.085 2.76 1.56],	[0],	[1 0 0 0 0,	0 0.684181992749 0 0 0,	0 0 1.19686444665695 0 0,	0 0 0 0.875198112795068 0,	0 0 0 0 0.953592961124492],	[0 0 0 0 0,	2.085 0 0 0 1,	2.76 0 0 0 0.61913203807175,	1.56 0 0 0 0.710365935511608,	0 0 0 0 0]);

```

### Estimate Factor Score

**構文:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**説明:** 回帰法を使って構造方程式モデル(SEM)の因子スコアを推定する。引数は、観測データの行ベクトル、推定されたモデルから求められた分散共分散行列、推定されたモデルから求められた、顕在変数の平均ベクトル、推定されたモデルから求められた、潜在変数の平均ベクトル。上記の引数で指定された構造方程式モデルに基づき、因子スコアの推定値を行ベクトルの形で戻す。

**JMP追加されたバージョン:** 15

```jsl

Estimate Factor Score(	[7 10 5 2 2 0],	[1.66 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,	0.45 1.22 0.44 -0.44 -0.33 -0.38 0.45 -0.44,	0.58 0.44 1.88 -0.57 -0.43 -0.49 0.58 -0.57,	-0.58 -0.44 -0.57 1.64 0.57 0.65 -0.58 0.76,	-0.44 -0.33 -0.43 0.57 1.56 0.49 -0.44 0.57,	-0.5 -0.38 -0.49 0.65 0.49 1.36 -0.5 0.65,	0.59 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,	-0.58 -0.44 -0.57 0.76 0.57 0.65 -0.58 0.76],	[6.59, 8.81, 2.92, 2.09, 2.76, 1.56],	[0, 0]);

```

### Fourier Basis Coef

**構文:** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**説明:** フーリエ基底の計画行列を返す。Number Pairsは、基底の個数（sin関数とcos関数のペアの個数）です。オプションのパラメータPeriodで三角関数の周期を指定できる。デフォルトの周期はmax(x)-min(x) + 1。

**JMP追加されたバージョン:** 14

```jsl

Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### G Inverse

**構文:** g = G Inverse( A )

**説明:** (Moore-Penrose型)一般逆行列を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Round( G Inverse( [11 22, 33 44] ), 2 );

```

### H Direct Product

**構文:** y = H Direct Product( A, B )

**説明:** AとBの水平方向の直積を戻す。AとBの行ごとに直積が計算される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exA = [1 2, 3 4];exB = [1 1 1, 2 2 2];exProd = H Direct Product( exA, exB );Show( exProd );/* verify result */Show( exProd[1, 1 :: 6] == Direct Product( exA[1, 1 :: 2], exB[1, 1 :: 3] ) );Show( exProd[2, 1 :: 6] == Direct Product( exA[2, 1 :: 2], exB[2, 1 :: 3] ) );

```

### Hadamard

**構文:** y = Hadamard( n, &lt;normalize = 0&gt; )

**説明:** 次数nのHadamard行列を作成する。

**JMP追加されたバージョン:** 15

```jsl

Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Hough Line Transform

**構文:** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**説明:** 画像データ内で線を検出するためのハフ変換を戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

xx = .4;yy = .4;angleDegrees = (1 :: 180)`;angle = Pi() * angleDegrees / (180);New Window( "Hough Transform Demo 1",	Border Box( Left( 20 ), Top( 20 ), Right( 15 ), Bottom( 15 ),		V List Box(			Text Box( "Click and drag the circle in a straight line." ),			Graph Box(				X Scale( -1, 1 ),				Y Scale( -1, 1 ),				Circle( {xx, yy}, .05 );				Text( {xx + .1, yy + .1}, Char( xx, 4 ) || " " || Char( yy, 4 ) );				Mousetrap(					xx = x;					yy = y;					gb << reshow;				);			),			Text Box( "For angle 1 to 180 , x*Cos(angle)+y*Sin(angle)" ),			Text Box( "What position stays constant as you move?" ),			gb = Graph Box(				X Scale( 0, 180 ),				XName( "Angle" ),				Y Scale( -1.5, 1.5 ),				YName( "Distance to Line" ),				Line( angleDegrees, xx * Cos( angle ) + yy * Sin( angle ) )			)		)	));

```

**例 2**

```jsl

nRow = 35;nCol = 35;// Make a wafer template missing outside a radiuswaferTemplate = J( nRow, nCol, 0 );If( 0,	For( i = 1, i <= nRow, i++,		For( j = 1, j <= nCol, j++,			If( (i - nrow / 2) ^ 2 + (j - nCol / 2) ^ 2 > ((nRow + nCol) / 4) ^ 2,				waferTemplate[i, j] = .			)		)	));wafer = waferTemplate;wafer[5, 22] = 1;lightGray = RGB Color( .9, .9, .9 );showWafer = Expr(	For( i = 1, i <= nRow, i++,		For( j = 1, j <= nCol, j++,			z = wafer[i, j];			If( Is Missing( z ),				Continue()			);			Fill Color( If( z == 0, lightGray, 3 ) );			Rect( i - nrow / 2, j - nCol / 2, i - nrow / 2 - 1, j - nCol / 2 + 1, 1 );		)	));showHough = Expr(	accum = Hough Line Transform( wafer );	maxAccum = Max( Max( accum ), 1 );	accumHeat = Heat Color( accum / maxAccum );	nr = N Row( accum );	nc = N Col( accum );	For( i = 1, i <= nr, i++,		For( j = 1, j <= nc, j++,			z = accumHeat[i, j];			Fill Color( z );			Rect( j - 1, nr - i, j, nr - i + 1, 1 );		)	);    //Marginals	radiusDensity = V Max( accum` );	radiusScale = 3 * Max( radiusDensity ) / Mean( radiusDensity );	radiusColor = Heat Color( radiusDensity / radiusScale );	If( 1,		angleDensity = V Max( accum );		angleScale = 3 * Max( angleDensity ) / Mean( angleDensity );		angleColor = Heat Color( angleDensity / angleScale );	,		angle1 = angleDensity - Mean( angleDensity );		angle1 = angle1 :* (angle1 > 0);		angleColor = Heat Color( angle1 / Max( angle1 ) );	);	For( j = 1, j <= nc, j++,		Fill Color( angleColor[j] );		Rect( j - 1, -5, j, -8, 1 );	);	For( i = 1, i <= nr, i++,		Fill Color( radiusColor[i] );		Rect( 185, nr - i, 190, nr - i + 1, 1 );	););mouseAction = Expr(	i = Floor( x + nrow / 2 + .5 );	j = Floor( y + ncol / 2 + .5 );	If( i > 0 & i <= nRow & j > 0 & j <= nCol,		wafer[i, j]		++);	bothBox << reshow;);New Window( "Hough Transform Demo 2",	Border Box( Left( 15 ), Top( 15 ), Right( 10 ), Bottom( 10 ),		bothBox = V List Box(			Text Box( "Click to add points in the top frame along a slanted line." ),			Text Box( "The Hough transform is shown below with marginal densities." ),			Text Box( "" ),			H List Box(				Button Box( "Clear",					wafer = waferTemplate;					bothBox << Reshow;				),				Button Box( "Add Random",					wafer = wafer | J( nRow, nCol, Random Uniform() < .05 );					bothBox << Reshow;				)			),			waferBox = Graph Box(				X Scale( -18, 18 ),				Y Scale( -18, 18 ),				FrameSize( 300, 300 ),				XName( "Angle" ),				YName( "Radius" ),				Mousetrap( mouseAction ),				showWafer			),			houghBox = Graph Box(				X Scale( 0, 190 ),				Y Scale( -10, 50 ),				FrameSize( 500, 200 ),				showHough			)		)	));

```

### Identity

**構文:** y = Identity( n )

**説明:** n X nの単位行列を作成する。単位行列とは、1を対角線上、0を非対角線上に配置した行列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Identity( 2 );

```

### Index

**構文:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**説明:** n1から始まり、n3を増分としてn2まで続く値のシーケンスを含む行ベクトルを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

1 :: 10;

```

### Inner Product BLAS

**構文:** y = Inner Product BLAS( A, B, ... )

**JMP追加されたバージョン:** 17

```jsl

a = [1, 2, 3, -2, 0, -1, 0, 1, 1];b = [4, 5, 6, -2, 0, -1, 0, 7, 2];y = Inner Product BLAS( a, b );

```

### Inv

**構文:** y = Inverse( x ); y = Inv( x )

**説明:** 引数xの逆行列を戻す。引数は、正則な正方行列でなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**構文:** y = Inv Update( S, X, &lt;w=1&gt; )

**説明:** 更新された逆行列を戻す。第1引数Sは、Xと同じ列数を持つ正値定符号の対称行列。第2引数Xは、追加または削除する行を含む行列。第3引数wは、行を追加するか削除するかを指定する(追加する場合は1を、削除する場合は-1を使用する)。この関数は、S-w\*S\*X`\*Inv(I+w\*X\*S\*X`)\*X\*Sを戻す。ここで、Iは単位行列、Inv(A)はAの逆行列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/* Generate a design matrix */exX = [1 0 4 2,1 0 5 1,1 0 2 4,5 4 4 5,0 1 4 3,0 1 9 1,0 1 2 4,0 1 1 9,0 1 5 2,0 1 2 1,0 1 4 5];S = Inverse( exX` * exX );Show( "----------Adding Rows (w=1) --------" );X = [5 4 3 3, 4 3 2 1, 9 1 2 5];w = 1;y = Inv Update( S, X, w );Show( "Result of Inv Update" );Show( y );Show( "Result of updating formula" );Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );Show( "Result of direct calculation" );Show( Inverse( (exX |/ X)` * (exX |/ X) ) );Show( "----------Deleting Rows (w=-1) --------" );X = [0 1 5 2, 0 1 2 1, 0 1 4 5];w = -1;y = Inv Update( S, X, w );Show( "Result of Inv Update" );Show( y );Show( "Result of updating formula" );Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );Show( "Result of direct calculation" );p = N Row( exX ) - 3;Show( Inverse( exX[Index( 1, p ), 0]` * exX[Index( 1, p ), 0] ) );

```

### Inverse

**構文:** y = Inverse( x ); y = Inv( x )

**説明:** 引数xの逆行列を戻す。引数は、正則な正方行列でなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Is Matrix

**構文:** y = Is Matrix( x )

**説明:** 引数が行列の場合は1を戻し、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Is Matrix( [11 22 33] );

```

### J

**構文:** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**説明:** 第3引数で指定された値を含む行列(nr行nc列)を作成する。第2引数のデフォルト値は、第1引数と等しい。第3引数は、数値、数値の変数名、JSLコードのいずれでもかまわない。第3引数がJSLコードの場合、行列の要素ごとや行ごとに、コードが評価され、戻り値が各要素に割り当てられる。第3引数を省略した場合のデフォルト値は、1。

**JMP追加されたバージョン:** バージョン14より前

```jsl

// Produce a 2x3 matrix, filled with 15.m = J( 2, 3, 15 );// Produce a default 4x4 matrix, filled with 1.m = J( 4 );// Produce a 2x3 matrix, filled with a number determined by a variable.a = 3.14;m = J( 2, 3, a );// Produce a vector of random numbers from the Uniform distribution.m = J( 1, 100, Random Uniform() );// Produce a 2x3 matrix, filled with a sequence of integers.a = 0;m = J( 2, 3, a = a + 1 );// This is a fun example to illustrate what is possible for the third argument.i = 1;J(	10,	1,	Print(		Eval Insert(			"For the ^i^^if(i < 4, words(\!"st,nd,rd\!",\!",\!")[i], \!"th\!")^ time, I'm not a loop!"		)	);	Round( 1 / Sqrt( 5 ) * ((1 + Sqrt( 5 )) / 2) ^ i++ ););

```

### KDTable

**構文:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**説明:** 近傍点を効率よく探索するためのテーブルを戻す。行列の引数はk次元の点。データの個数や次元に制限はない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );{rows, dist} = tab << K nearest rows( 2, 1 );"2 nearest rows to row 1 are " || Char( rows );

```

### Least Squares Solve

**構文:** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**説明:** 推定値のベクトル、Beta = Inverse(X&apos;X)X&apos;yと、Betaの共分散行列を含むリストを戻す。オプションの引数<<noInterceptは、切片なしのモデルを指定する。オプションの引数<<weightsは、重み付き最小2乗法を行うための重みのベクトルを指定する。オプションの引数<<methodでは、正規方程式を解く上でデフォルトのSweep法と一般化逆行列("GInv")のどちらを使用するかを指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

/*Simple Linear Regression*/y = [3, 5, 7, 5];X = [1, 2, 3, 4];{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Linear Regression

**構文:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**説明:** y = X \* beta + errorというモデルを仮定し、線形回帰をあてはめる。オプションの<<noIntercept引数は、切片なしのモデルをあてはめる。オプションの<<printToLog引数は、ログウィンドウにあてはめの要約を出力する。オプションのweight引数では、重み付き最小2乗法をあてはめるための重みのベクトルを指定する。また、オプションのfreq引数では、度数のベクトルを指定する。戻り値は、推定値のベクトルと標準誤差のベクトルのリスト、および診断統計量のリスト。 診断統計量のリストには、t値のベクトル、推定値のp値のベクトル、R2乗、自由度調整R2乗が含まれる。

**JMP追加されたバージョン:** 14

**例 1**

```jsl

/*Simple Linear Regression: y = intercept + beta * x + error*/y = [3, 5, 7, 5];X = [1, 2, 3, 4];{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<printToLog ); /*t_ratio = Diagnostics["t_ratio"]; p_value = Diagnostics["p_value"]; RSquare = Diagnostics["RSquare"]; RSquare Adj = Diagnostics["RSquare Adj"];*/

```

**例 2**

```jsl

/*Model: y = beta_1*x + beta_2*x^2 + error*/y = [3, 5, 7, 5];X = [1 1, 2 4, 3 9, 4 16];{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<noIntercept, <<printToLog );

```

**例 3**

```jsl

/*Categorical Variable Example*//*Model: y = beta_1*boy + beta_2*girl + beta_3*x + error*/y = [3, 5, 7, 5];x = [1, 2, 3, 4];gender = {"boy", "girl", "girl", "boy"};designMat = Design( gender ) || x;{Estimates, Std_Error, Diagnostics} = Linear Regression(	y,	designMat,	<<noIntercept,	<<printToLog);

```

### Loc

**構文:** y = Loc( m ); y = Loc( v, x )

**説明:** 行列mの要素のうち、ゼロ以外である要素の位置を含んだ行列を戻す。Loc(v, x)のように引数が2つ指定された場合は、リストまたは行列vの要素のうち、値xに等しくなっている要素の位置を含んだ行列が戻される。可能な限り、Whereを用いることを推奨する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

/*more examples, above*/Show( Loc( [1 0 1 0 1 0] ) );Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**例 2**

```jsl

Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

**例 3**

```jsl

Loc( [5, 7, 5, ., 5], 5 );

```

**例 4**

```jsl

Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

**例 5**

```jsl

Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**構文:** y = Loc Max( x )

**説明:** xの要素のうち、最大値の位置を戻す。最大値が複数ある場合には、最初のものの位置。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**構文:** y = Loc Min( x )

**説明:** xの要素のうち、最小値の位置を戻す。最小値が複数ある場合には、最初のものの位置。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**構文:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**説明:** 行列に対して、欠測値が1つもない行の番号を、ベクトルで戻す。引数がリストの場合には、欠測値でない数値、もしくは、空でない文字列が位置する番号を、ベクトルで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**構文:** idx = Loc Sorted( x, y )

**説明:** 二分探索を通じてxの値がyの値以下である位置を探し、その位置の添え字の列ベクトルを作成する。xは、昇順で並べられた欠測値のない行列でなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show(	Loc Sorted( [11 22 33 44 55], [11 33 55] ),	Loc Sorted( [11 22 33 44 55], [1] ),	Loc Sorted( [11 22 33 44 55], [500] ));

```

### Low Rank Symmetric Update BLAS

**構文:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP追加されたバージョン:** 17

```jsl

A = [2 0, 0 2];U = [2 4, 3 5];s = 2.5;AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Matrix

**構文:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} ) y = Matrix( {x1, ..., xn} ) y = Matrix( n, m )

**説明:** nXm行列を作成する。m個の要素からなるリストをn個だけ用意し、それらをリストにしたものを引数に指定すると、リスト内の各リストを行にした行列が作成される。n個の要素から成るリストを1つだけ指定すると、nx1の列ベクトルが戻される。整数の引数を2つ指定すると、nxmのゼロ行列が戻される。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**例 2**

```jsl

Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**例 3**

```jsl

Matrix( {2, 3 + 7} );

```

**例 4**

```jsl

Matrix( 2, 3 );

```

### Matrix Mult

**構文:** y = Matrix Mult( A, B, ... ); y = A * B

**説明:** 行列の乗算を実行する。Aの列数とBの行数が一致している、つまりNCol(a)==NRow(b)でなければならない。A \* Bでも可。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];exMatB = [1 2, 1 2, 1 2];exMatM1 = exMatA * exMatB;exMatM2 = Matrix Mult( exMatA, exMatB );exMatC = [1 2, 1 2];exMatM3 = Matrix Mult( exMatA, exMatB, exMatC );Show( exMatM1 );Show( exMatM2 );Show( exMatM3 );

```

### Matrix Mult BLAS

**構文:** y = Matrix Mult BLAS( A, B, ... )

**説明:** 行列の乗算を実行する。Aの列数とBの行数が一致している、つまりNCol(A)==NRow(B)でなければならない。

**JMP追加されたバージョン:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];exMatB = [1 2, 1 2, 1 2];exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**構文:** r = Matrix Rank( X )

**説明:** 行列Xのランクを戻す。

**JMP追加されたバージョン:** 14

```jsl

Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Mode

**構文:** y = Mode( list or matrix )

**説明:** 行列やリストから最も頻度が高い項目を選ぶ。同順位の項がある場合は小さい方の値を選ぶ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Multivariate Normal Impute

**構文:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**説明:** 応答ベクトルyVecにおける欠測値を補完したベクトルを戻す。補完は、応答平均のベクトルをmeanYvec、対称な共分散行列をsymCovMatとする多変量正規分布に基づいて行われる。オプションの引数であるcolMinとcolMaxは、それぞれ列の最小値と最大値のベクトル。これらの引数は、補完する値の範囲を与える。

**JMP追加されたバージョン:** バージョン14より前

```jsl

mat = [0.430735257211985 -0.935632420013493 . 0.424649913158299,. -0.687720061441453 0.29665732536624 -1.94898001941576,-0.0425472526673373 0.463229145080277 0.635619352779951 .];cov = Covariance( mat, <<"Pairwise"/*, <<"shrink"*/ );colMean = V Mean( mat );colMin = V Min( mat );colMax = V Max( mat );For( it = 1, it <= N Row( mat ), it++,	mat[it, 0] = Multivariate Normal Impute( mat[it, 0], colMean, cov, colMin, colMax )`);Print( mat );

```

### N Col

**構文:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**説明:** 現在のデータテーブル、指定されたデータテーブル、または行列の列数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

N Col( [11 22, 33 44] );

```

### N Cols

**構文:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**説明:** 現在のデータテーブル、指定されたデータテーブル、または行列の列数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

N Col( [11 22, 33 44] );

```

### NChooseK Matrix

**構文:** m = NChooseK Matrix( n, k )

**説明:** n個からk個を選んだ場合のすべての組み合わせを含む行列を戻す。戻り値の行列の行数はnCk 行、列数はk列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Print( NChooseK Matrix( 5, 3 ) );

```

### Ortho

**構文:** L = Ortho( A, &lt;Centered( 1 )&gt;, &lt;Scaled( 1 )&gt; )

**説明:** 行列の列を直交化する。中心化のオプションCenteredに0を指定すると、直交化後の列の和がゼロに中心化されない。Scaledに0を指定すると、長さが1に尺度化されない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**構文:** L = Ortho Poly( V, order )

**説明:** 引数orderによって指定された次数までのベクトルVの直交多項式を戻す。引数Vは行または列ベクトル。Scaleオプションを指定すると、長さが1になる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Ortho Poly( 1 :: 10, 2 );

```

### P Spline Coef

**構文:** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**説明:** P-スプライン曲線の計画行列を戻す。Internal Knot Gridには、節点の個数（位置はxのパーセント点で決められる）、もしくは、節点の位置を指定したベクトルを指定する。オプションのパラメータdegreeにはP-スプライン曲線の次数を指定する。デフォルトの次数は3。

**JMP追加されたバージョン:** 14

```jsl

P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Parallel Assign

**構文:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**説明:** 複数のスレッドを使用して行列に値を割り当てる。いずれかのスレッドが例外をスローした場合、ログにメッセージが出力され、0が戻される。すべてのスレッドがエラーなく完了した場合、1が戻される。プラットフォームの起動、データテーブルの作成または使用、グラフィックサブシステムへのアクセスを行う関数は、メインスレッドのみでサポートされるため、ワーカースレッドで呼び出されると例外をスローする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

m = J( 3, 2, -1 );If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,	Throw( "thread failed" ));m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Print Matrix

**構文:** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**説明:** 行列Mを指定された形式で出力する。オプションの引数ignore localeは、小数点記号にロケール情報を考慮するかどうかを指定する。引数が0の場合、ロケールが考慮される。オプションの引数styleは、スタイルを使用するかどうか、および、どのスタイルを使用するかを指定する。使用できるスタイルは、parseable(変更されたJSL行列式)、latex、およびother。引数styleがotherの場合、最後の3つのオプション引数によって行の開始文字と終了文字、要素間の区切り文字を定義する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

A = [3.509 0.003, 874.4 0.00384, 0.03 0.093];Print Matrix( A );Print Matrix( A, <<ignore locale( 1 ) );Print Matrix( A, <<style( "latex" ) );Print Matrix(	A,	<<style( "other" ),	<<line begin( "| " ),	<<line end( " |" ),	<<separate( " | " ));

```

### QR

**構文:** {Q, R} = QR( X )

**説明:** X = Q \* RとなるようなQ (m, m)直交行列およびR (m, n)上三角行列を生成する。引数Xは(m, n)行列。

**JMP追加されたバージョン:** バージョン14より前

```jsl

QR( [11 22, 33 44] );

```

### QR LAPACK

**構文:** {Q, R} = QR LAPACK( X )

**説明:** X = Q \* RとなるようなQ (m, k)直交行列およびR (k, n)上三角行列を生成する。引数Xは(m, n)行列。kはmin(m, n)。

**JMP追加されたバージョン:** 17

```jsl

QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**構文:** y = Quadratic Form BLAS( A, x )

**JMP追加されたバージョン:** 17

```jsl

A = [2 0, 0 2];x = [2, 3];y = Quadratic Form BLAS( A, x );

```

### Random SVD

**構文:** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**説明:** ランダム化特異値分解を使用して、行列Xの特異値分解を行う。U\*diag(M)\*V`がXとなるようなリスト{U, M, V}を戻す。

**JMP追加されたバージョン:** 17

```jsl

Random SVD( [11 22, 33 44], 1 );

```

### Rank

**構文:** y = Rank Index( x )

**説明:** 引数のベクトルを昇順に並べ替えるためのインデックスを戻す。結果のベクトルを、元のベクトルの添え字として使用すれば昇順に並べ替えることができる。なお、結果から欠測値は除外されている。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**構文:** y = Rank Index( x )

**説明:** 引数のベクトルを昇順に並べ替えるためのインデックスを戻す。結果のベクトルを、元のベクトルの添え字として使用すれば昇順に並べ替えることができる。なお、結果から欠測値は除外されている。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**構文:** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**説明:** x値の順位のベクトルを戻す。最小値は1、最大値はn。同順位のデータに対しては恣意的な順位が与えられる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Ranking( [33, 22, 44, 11, 33] );Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**構文:** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**説明:** x値の順位のベクトルを戻す。同順位のデータに対しては平均順位が与えられる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Ranking Tie( [33, 22, 44, 11, 33] );

```

### Robust PCA

**構文:** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**説明:** データの行列を、低ランク近似行列と残差行列に分解する。残差が大きくなっている外れ値が検出される。同時に、欠測値の補完もできる。

**JMP追加されたバージョン:** 16

```jsl

X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];X[2, 3] += 15;Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### SVD

**構文:** {U, M, V} = SVD( X )

**説明:** 行列Xの特異値分解を行う。U\*diag(M)\*V`がXとなるようなリスト{U, M, V}を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

SVD( [11 22, 33 44] );

```

### SVD LAPACK

**構文:** {U, M, V} = SVD LAPACK( X )

**説明:** 行列Xの特異値分解を行う。U\*diag(M)\*V`がXとなるようなリスト{U, M, V}を戻す。

**JMP追加されたバージョン:** 17

```jsl

SVD LAPACK( [11 22, 33 44] );

```

### Scoring Impute

**構文:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**説明:** Automated Data Imputation (ADI)アルゴリズムのストリーミング機能を提供する。欠測値を含む行ベクトル、ADIアルゴリズムで生成される負荷量行列(V行列とも呼ばれる)、欠測値のセルを無視した列の平均のベクトル、欠測値のセルを無視した列の標準偏差のベクトルを入力の引数として指定する。最小2乗推定を使用して欠測値が補完された行ベクトルが戻される。

**JMP追加されたバージョン:** 14

```jsl

Scoring Impute(	[1 2 3 . 4 .],	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],	[0, 0, 0, 0, 0, 0],	[1, 1, 1, 1, 1, 1]);

```

### Shape

**構文:** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**説明:** nrXncの行列になるように、行列またはスカラーのMを変形する。nrには欠測値も指定できる。Mのデータを、必要に応じて反復しながら、nrxnc行列を埋めていく。オプションの引数<<bycolを指定すると、1列ごとに順にデータを埋めていく。デフォルトでは、1行ごとに順にデータを埋めていく。通常は、ベクトルを行列にする場合や、行列をベクトルにする場合に使う。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Eval List(	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ), Shape( [11 22, 33 44], ., 4 )	});

```

### Solve

**構文:** y = Solve( A, B )

**説明:** xに関する連立一次方程式A\*x=Bを解く。Aが正則行列の場合、Solve()関数はInverse(A)\*Bと同じ。引数Aは正方行列でなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**構文:** y = Sort Ascending( x )

**説明:** リストもしくは行列xを昇順に並べたものを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**構文:** y = Sort Descending( x )

**説明:** リストもしくは行列xを降順に並べたものを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Sort Descending( {111, 212, 133, 114, 55} );

```

### Sparse SVD

**構文:** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**説明:** 疎な行列Xの特異値分解を行う。疎な行列に対して、暗黙的なリスタートと部分的な再直交化を用いたLanczos法で特異値分解を行う。U\*diag(M)\*V`がXとなるような{U, M, V}をリストで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Spline Coef

**構文:** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**説明:** 係数を次の順序でまとめた5列の行列を戻す。xにおける一意の各値のknots||a||b||c||d。平滑化パラメータlambdaは正の値を取り、lambdaに大きな値ほどスプライン曲線が硬くなる。オプションのweightsベクトルは、xの各値の重みを指定する。重みがゼロの点は、スプライン曲線のあてはめから除外される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**構文:** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**説明:** Spline Coef()関数によって戻されるのと同じ形式のcoef行列を使ってスプラインの予測値を計算する。extrapolationには、外挿して非欠測値を戻すスプラインの範囲をどの程度までに広げるかを、範囲の割合として指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

New Window( "Spline Fit",	window:x = 20 :: 80;	window:y = 50 + Sin( (20 :: 80) / 10 ) * 40 + J(		1,		N Col( window:x ),		Random Normal( 0, 10 )	);	window:loglambda = 2;	window:g = Graph Box(		Pen Color( "blue" );		window:m = Spline Coef( window:x, window:y, Power( 10, window:loglambda ) );		Marker( window:x, window:y );		Y Function( Spline Eval( a, window:m, 0.05 ), a );	);,	H List Box(		Text Box( "Lambda: " ),		Slider Box( -2, 5, window:loglambda, window:g << reshow )	));

```

### Spline Smooth

**構文:** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**説明:** スプラインのあてはめから計算した予測値を戻す。平滑化パラメータlambdaは正の値を取り、lambdaに大きな値ほどスプライン曲線が硬くなる。オプションのweightsベクトルは、xの各値の重みを指定する。重みがゼロの点は、スプライン曲線のあてはめから除外される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sweep

**構文:** y = Sweep( A, &lt;indices&gt; )

**説明:** indicesによって指定される対角ビボットにより、行列Aに掃き出し法を施す。これは、1ビボットずつ行列を逆行列に変換していく方法。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];exMatswp = Sweep( exMat, [1, 2, 3, 4] );exMatinv = Inverse( exMat );Show( exMatswp );Show( exMatinv );

```

### Sym Matrix Mult BLAS

**構文:** y = Sym Matrix Mult BLAS( A, B, ... )

**説明:** 行列の乗算を実行する。Aは対称行列でなければならない。Aの列数とBの行数が一致している、つまりNCol(A)==NRow(B)でなければならない。

**JMP追加されたバージョン:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];exMatA = exMatA` * exMatA;exMatB = [1 2, 1 2, 1 2];exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### Trace

**構文:** y = Trace( x )

**説明:** 正方行列の対角線要素の合計を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Trace( [11 22, 33 44] );

```

### Transpose

**構文:** y = Transpose( matrix ); y = matrix`

**説明:** 引数の行列を転置する。行と列を入れ替える。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### V Concat

**構文:** y = a |/ b; y = V Concat( a, b, ... )

**説明:** 行列を縦に連結する。引数の行列は列数が等しくなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

[11 22] |/ [33 44];

```

### V Concat To

**構文:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**説明:** 縦に連結する。a |/= bはa = a |/ bと等価。これは代入演算子。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exA = [1 2, 3 4];exB = [5 6, 7 8, 9 10];exC = [1, 1, 1, 1, 1];exD = V Concat To( exA, exB );exE = Concat( exD, exC );/* exA is changed and exD is not. */Show( exA, exB, exC, exD, exE );/* Also see ConcatTo(), VConcat() */

```

### V Max

**構文:** b = V Max( matrix )

**説明:** 引数の各列の最大値を、行ベクトルで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**構文:** m = V Mean( matrix )

**説明:** 引数の各列の平均を、行ベクトルで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**構文:** m = V Median( matrix )

**説明:** 引数で指定された行列について、各列の中央値を行ベクトルで戻す。

**JMP追加されたバージョン:** 15

```jsl

V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**構文:** a = V Min( matrix )

**説明:** 引数の各列の最小値を、行ベクトルで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**構文:** m = V Quantile( matrix, p )

**説明:** 引数で指定された行列について、指定された累積確率 pに対する、各列の分位点を、行ベクトルで戻す。

**JMP追加されたバージョン:** 15

```jsl

V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**構文:** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**説明:** 中央値で中心化し、行列Xの標準偏差のロバストな推定値で尺度化した行列を戻す。オプションのブール値引数は、中心化と尺度化を実行するかどうかを指定する。

**JMP追加されたバージョン:** 17

```jsl

V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Standardize

**構文:** b = V Standardize( X )

**説明:** 行列Xを中心化・尺度化した行列を戻す。bの各列は、平均が0で標準偏差が1となる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**構文:** b = V Std( matrix )

**説明:** 引数の各列の標準偏差を、行ベクトルで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**構文:** s = V Sum( matrix )

**説明:** 引数の各列の合計を、行ベクトルで戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

V Sum( [11 22, 33 44, 55 66] );

```

### VPTree

**構文:** tab = VPTree( [ matrix ] )

**説明:** 近傍点を効率よく探索するためのテーブルを戻す。行列の引数はk次元の点。データの個数や次元に制限はない。

**JMP追加されたバージョン:** 16

```jsl

tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Varimax

**構文:** {R,T} = Varimax( F, &lt;norm=1&gt; )

**説明:** Fで指定した行列のVarimax回転を実行する。回転後の行列と直交回転行列を含むリストを戻す。デフォルトでは正規化を伴うVarimax回転。正規化を伴わないVarimax回転を実行するには、normに0を指定する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**構文:** y = Vec Diag( x )

**説明:** 正方行列の対角線要素をベクトルとして戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**構文:** Vec Quadratic( S, X )

**説明:** Vec Diag( X \* S \* X` )を計算する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

exS = [1 3 5, 3 2 6, 5 6 1];exX = [1 3 5, 2 4 6];Vec Quadratic( exS, exX );

```

### Wavelet Basis Coef

**構文:** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**説明:** 指定したウェーブレットモデルの、点xにおける予測値を戻す。gridパラメータはウェーブレットモデルのデータグリッドを指定するベクトル。coefパラメータはウェーブレット係数のベクトル。waveletパラメータはウェーブレットモデルの名前。オプションのparamパラメータはウェーブレットモデルパラメータ(デフォルトは0)。

**JMP追加されたバージョン:** 17

```jsl

Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

