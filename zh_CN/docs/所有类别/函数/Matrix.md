# Matrix



### Add Vectors BLAS

**语法:** z = Add Vectors BLAS( x, y, alpha )

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### All

**语法:** y = All( x, ... )

**说明:** 若所有元素均非 0，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
All( [1 2 3] );

```

### Any

**语法:** y = Any( x, ... )

**说明:** 若有任何元素非 0，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Any( [1 0 2] );

```

### B Spline Coef

**语法:** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**说明:** 返回 B 样条系数的矩阵。Internal Knot Grid 是基于 x 的百分位数的所需结点数或指定内部结点的向量。可选参数 degree 指定 B 样条的次数，默认值为 3。可选参数 KnotEndPoints 取 2x1 矩阵，它包含边界上结点的 [下限, 上限] 位置。结点端点默认为 x 的最小值和最大值。第二个示例显示 B 样条系数如何用作线性模型中的设计矩阵。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

**示例 2**

```jsl

Names Default To Here( 1 );
xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression( yy, designMat, <<nointercept );

```

### CDF

**语法:** {QuantVec, CumProbVec} = CDF( Y )

**说明:** 返回向量或列表 Y 的经验累积概率分布函数的值。累积概率为小于等于向量 QuantVec 中对应项的数据值的比例。

**JMP添加的版本:** 早于版本 14

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

**语法:** L2 = Chol Update( L, V, C )

**说明:** 返回更新的 A+V*C*V&apos; 的 Cholesky 根，其中 C 为 m×m 对称矩阵，V 为 n ×m 矩阵。参数 L 必须是 n×n 矩阵 A 的 Cholesky 根。

**JMP添加的版本:** 早于版本 14

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

**语法:** L = Cholesky( A )

**说明:** 返回正半定矩阵的 Cholesky 分解。L 是下三角矩阵，使得 L*L` = A。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Cholesky( [1 2, 2 13] );

```

### Correlation

**语法:** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**说明:** 返回矩阵参数“x”的相关性矩阵。“"Pairwise"”参数成对而不是逐行处理缺失值。“"Shrink"”参数通过 Schafer and Strimmer, 2005 中描述的方法所确定的因子来减少非对角线元素。“Freq”和“Weight”参数分别指定频数向量或权重值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Covariance

**语法:** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**说明:** 返回矩阵参数“x”的协方差矩阵。“"Pairwise"”参数成对而不是逐行处理缺失值。“"Shrink"”参数通过 Schafer and Strimmer, 2005 中描述的方法所确定的因子来减少非对角线元素。“Freq”和“Weight”参数分别指定频数向量或权重值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Design

**语法:** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**说明:** 创建一个设计矩阵，其中包含一个由 1 和 0 组成的列，对应于参数的每个唯一值。使用 levelsList 参数指定设计矩阵的水平列表。若指定了 <<Levels 参数，则返回值为包含设计矩阵及水平列表的列表。若指定了 <<ElseMissing 参数，对于 v 参数中不出现在 levelsList 中的值，则会在设计矩阵中放入缺失值。否则，会在设计矩阵中放入 0。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**说明:** 创建一个设计矩阵，其中包含一个由 1 和 0 组成的列，对应于参数唯一值除最后一个之外的所有值。最后一个水平编码为值为 0 的行。若指定了 levelsList 参数，则最后一个水平为 levelsList 中的最后一个水平。否则，最后一个水平定义为 v 中的最大值。若指定了 <<Levels 参数，返回值为包含设计矩阵和水平列表的列表。若指定了 <<ElseMissing 参数，对于 v 参数中不出现在 levelsList 中的值，则会在设计矩阵中放入缺失值。否则，会在设计矩阵中放入 0。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**说明:** 为参数唯一值除最后一个之外的所有值创建一个设计矩阵，其中包含一个由 1 和 0 组成的列。最后一个水平编码为值为 -1 的行。若指定了 levelsList 参数，则最后一个水平为 levelsList 中的最后一个水平。否则，最后一个水平定义为 v 中的最大值。若指定了 <<Levels 参数，返回值为包含设计矩阵和水平列表的列表。若指定了 <<ElseMissing 参数，对于 v 参数中不出现在 levelsList 中的值，则会在设计矩阵中放入缺失值。否则，会在设计矩阵中放入 0。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**说明:** 创建一个设计矩阵，其中包含一列，对应于参数唯一值除最后一个之外的所有值。第一个水平编码为值为 0 的行。levelsList 参数中每个后续（第 n 个）的水平编码为 (n-1) 个值为 1 的行，其余为 0。若指定了 <<Levels 参数，返回值为包含设计矩阵和水平列表的列表。若指定了 <<ElseMissing 参数，对于 v 参数中不出现在 levelsList 中的值，则会在设计矩阵中放入缺失值。否则，会在设计矩阵中放入 0。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**说明:** 为参数唯一值除最后一个之外的所有值创建一个设计矩阵，其中包含一个由 1 和 0 组成的列。最后一个水平编码为值为 -1 的行。若指定了 levelsList 参数，则最后一个水平为 levelsList 中的最后一个水平。否则，最后一个水平定义为 v 中的最大值。若指定了 <<Levels 参数，返回值为包含设计矩阵和水平列表的列表。若指定了 <<ElseMissing 参数，对于 v 参数中不出现在 levelsList 中的值，则会在设计矩阵中放入缺失值。否则，会在设计矩阵中放入 0。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Det( x )

**说明:** 返回方矩阵的行列式。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Det( [11 22, 33 44] );

```

### Diag

**语法:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**说明:** 根据矩阵或向量构造对角矩阵。若指定了两个参数，函数会返回沿对角线拼接的矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Diag( [11 22] );

```

### Direct Product

**语法:** y = Direct Product( A, B )

**说明:** 返回直积或 Kronecker 积。结果为 A[i,j]*B，扩展到所有可能的乘积。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**说明:** 生成行 x1 和行 x2 之间距离的矩阵。要定制每列的尺度和幂，指定额外的参数 scale 和 powers。对于 Kriging，使用 Exp(-distance(x1,x2))。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = A :/ B; y = E Div( A, B )

**说明:** 返回矩阵的逐元素相除结果。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
[11 22 33] :/ [1 2 3];

```

### E Max

**语法:** y = E Max( A, B )

**说明:** 返回一个矩阵，该矩阵由其参数的相应元素的最大值组成。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
E Max( [1 22 33], [11 2 3] );

```

### E Min

**语法:** y = E Min( A, B )

**说明:** 返回一个矩阵，该矩阵由其参数的相应元素的最小值组成。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
E Min( [1 22 33], [11 2 3] );

```

### E Mult

**语法:** y = A :* B; y = E Mult( A, B )

**说明:** 返回矩阵的逐元素乘积。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
[1 2 3] :* [11 22 33];

```

### Eigen

**语法:** {M, E} = Eigen( X )

**说明:** 执行对称矩阵 X 的特征值分解。返回列表 {M, E}，使得 E*Diag(M)*E` = X。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**语法:** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Estimate Bartlett Factor Score

**语法:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**说明:** 使用 Bartlett 方法从结构化方程模型 (SEM) 估计因子得分。输入参数是数据的行向量、隐含模型的清单变量均值、隐含模型的潜在变量均值、来自 SEM 的 S RAM 矩阵和来自 SEM 的 A RAM 矩阵。它返回具有基于 SEM 的估计因子得分的行向量。

**JMP添加的版本:** 16

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

**语法:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**说明:** 使用回归方法估计结构化方程模型 (SEM) 的因子得分。输入参数是数据的行向量、隐含模型的方差-协方差矩阵、隐含模型的清单变量均值的向量以及隐含模型的潜在变量均值的向量。它返回具有基于 SEM 的估计因子得分的行向量。

**JMP添加的版本:** 15

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

**语法:** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**说明:** 返回傅里叶基函数系数的矩阵。Number Pairs 是基函数的 sin() 和 cos() 对的个数。可选参数 Period 指定三角函数的周期，默认值为 max(x) - min(x) + 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### G Inverse

**语法:** g = G Inverse( A )

**说明:** 返回广义 (Moore-Penrose) 逆矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Round( G Inverse( [11 22, 33 44] ), 2 );

```

### H Direct Product

**语法:** y = H Direct Product( A, B )

**说明:** 返回水平直积，即矩阵 A 和 B 每行的直积。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Hadamard( n, &lt;normalize = 0&gt; )

**说明:** 创建 n 阶 Hadamard 矩阵。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Hough Line Transform

**语法:** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**说明:** 返回用于检测图像数据内线的 Hough 变换

**JMP添加的版本:** 早于版本 14

**示例 1**

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

**示例 2**

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

**语法:** y = Identity( n )

**说明:** 创建一个 n×n 的单位矩阵，对角线元素为 1，其余元素为 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Identity( 2 );

```

### Index

**语法:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**说明:** 返回包含从 n1 到 n2 增量为 n3 的一系列值的行矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
1 :: 10;

```

### Inner Product BLAS

**语法:** y = Inner Product BLAS( A, B, ... )

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Inv

**语法:** y = Inverse( x ); y = Inv( x )

**说明:** 返回逆 x 参数，该参数必须是非奇异的方矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**语法:** y = Inv Update( S, X, &lt;w=1&gt; )

**说明:** 返回更新的逆矩阵。第一个参数 S 是对称正定矩阵，列数与 X 相同。第二个参数 X 是包含要添加或删除的行的矩阵。第三个参数 w 确定是否添加或删除行（使用 1 添加行，使用 -1 删除行）。该函数按照 S-w*S*X`*Inv(I+w*X*S*X`)*X*S 计算，其中 I 是单位矩阵，Inv(A) 表示 A 的逆矩阵。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Inverse( x ); y = Inv( x )

**说明:** 返回逆 x 参数，该参数必须是非奇异的方矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Round( Inverse( [11 22, 33 44] ), 2 );

```

### Is Matrix

**语法:** y = Is Matrix( x )

**说明:** 若参数是矩阵则返回 1，否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Is Matrix( [11 22 33] );

```

### J

**语法:** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**说明:** 创建由第三个参数确定的值组成的矩阵 (nr * nc)。第二个参数的默认值等于第一个参数。第三个参数的默认值为 1。但是第三个参数可以是数字、数字的变量名或 JSL 代码。若第三个参数是代码，则对代码进行求值并将返回值分配给矩阵中的每个元素，逐元素逐行地分配。

**JMP添加的版本:** 早于版本 14

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

**语法:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**说明:** 返回一个用于有效查找近邻的表。矩阵参数为 k 维点。该函数本身未对维数和点数进行限制。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### Least Squares Solve

**语法:** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**说明:** 返回包含估计值 Beta = Inverse(X&apos;X)X&apos;y 和 Beta 的估计方差矩阵的向量的列表。可选 <<noIntercept 参数指定无截距模型。可选 <<weights 参数指定用于执行加权最小二乘的权重向量。可选 <<method 参数支持您在默认 Sweep 方法和广义逆矩阵 ("GInv") 方法之间选择，以求解正规方差。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Linear Regression

**语法:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**说明:** 拟合假设模型 y = X * beta + error 的线性回归。可选 <<noIntercept 参数指定无截距模型。可选 <<printToLog 参数指定打印至日志窗口的拟合汇总。可选 weight 参数指定用于执行加权最小二乘的权重向量，可选 freq 参数指定频数向量。返回包含估计值向量、标准误差向量和诊断列表的列表。诊断列表包含估计值的 t 统计量和 p 值，以及回归拟合的 R 方和调整 R 方值的向量。

**JMP添加的版本:** 14

**示例 1**

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

**示例 2**

```jsl

Names Default To Here( 1 );
/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<noIntercept, <<printToLog );

```

**示例 3**

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

**语法:** y = Loc( m ); y = Loc( v, x )

**说明:** 返回一个矩阵，其中显示非零矩阵 m 的位置。若指定了两个参数，则 Loc(v, x) 返回一个矩阵，其中显示列表位置或等于值 x 的矩阵 v。可能的话首选 Where。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

**示例 3**

```jsl

Names Default To Here( 1 );
Loc( [5, 7, 5, ., 5], 5 );

```

**示例 4**

```jsl

Names Default To Here( 1 );
Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

**示例 5**

```jsl

Names Default To Here( 1 );
Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**语法:** y = Loc Max( x )

**说明:** 返回 x 中最大值的第一个位置。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**语法:** y = Loc Min( x )

**说明:** 返回 x 中最小值的第一个位置。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**语法:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**说明:** 返回由不带缺失值的参数矩阵行的行号组成的向量，或者返回非缺失数或非空字符的列表。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**语法:** idx = Loc Sorted( x, y )

**说明:** 创建下标位置的列向量，其中“x”的值具有小于等于基于二进制搜索的“y”中的值。“x”必须是按升序排序并且不含缺失值的矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

```

### Low Rank Symmetric Update BLAS

**语法:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Matrix

**语法:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} )y = Matrix( {x1, ..., xn} )y = Matrix( n, m )

**说明:** 构建 n×m 矩阵。若您指定包含 n 个列表的列表，其中每个列表包含 m 个行值，则通过垂直拼接计算过的列表组成矩阵。若您指定包含 n 项的单个列表，则返回值为 n×1 列向量。若您指定两个整数参数，则返回值是包含 n 行和 m 列的零矩阵。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Matrix( {2, 3 + 7} );

```

**示例 4**

```jsl

Names Default To Here( 1 );
Matrix( 2, 3 );

```

### Matrix Mult

**语法:** y = Matrix Mult( A, B, ... ); y = A * B

**说明:** 将矩阵相乘。矩阵参数必须是可相乘的，即 NCol(a)==NRow(b)。注意: 也可采用 A * B 方式。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = Matrix Mult BLAS( A, B, ... )

**说明:** 将矩阵相乘。矩阵参数必须是可相乘的，即 NCol(A)==NRow(B)。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**语法:** r = Matrix Rank( X )

**说明:** 返回矩阵 X 的秩。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Mode

**语法:** y = Mode( list or matrix )

**说明:** 挑出矩阵或列表中“最频繁”项，结值的下限值

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Multivariate Normal Impute

**语法:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**说明:** 对于响应的 yVec 向量中的缺失值，返回具有插补值的响应向量。插补基于均值向量为 meanYvec 且对称协方差矩阵为 symCovMat 的多元正态分布。可选参数 colMin 和 colMax 分别是列最小值和最大值的向量。这些参数提供插补的边界。

**JMP添加的版本:** 早于版本 14

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

**语法:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**说明:** 返回当前数据表、指定数据表或矩阵的列数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
N Col( [11 22, 33 44] );

```

### N Cols

**语法:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**说明:** 返回当前数据表、指定数据表或矩阵的列数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
N Col( [11 22, 33 44] );

```

### NChooseK Matrix

**语法:** m = NChooseK Matrix( n, k )

**说明:** 创建 nChooseK(n,k) 行、k 列的矩阵，形成 k 个整数从 1 到 n 的所有组合。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Print( NChooseK Matrix( 5, 3 ) );

```

### Ortho

**语法:** L = Ortho( A, &lt;Centered( 0 )&gt;, &lt;Scaled( 1 )&gt; )

**说明:** 正交化矩阵的列。“中心”选项使其总和为 0。“尺度”选项将其限制为单位长度。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**语法:** L = Ortho Poly( V, order )

**说明:** 返回向量 V 的正交多项式，其阶数最多只能到 order 参数指定的阶数。V 参数可以是行向量或列向量。“尺度”选项将其限制为单位长度。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Ortho Poly( 1 :: 10, 2 );

```

### P Spline Coef

**语法:** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**说明:** 返回 P 样条系数的矩阵。Internal Knot Grid 是基于 x 的百分位数的所需结点数或指定内部结点的向量。可选参数 degree 指定 P 样条的次数，默认值为 3。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Parallel Assign

**语法:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**说明:** 使用多个线程赋值给矩阵。若有任何线程抛出异常，则将在日志中显示一条消息，并且返回值将为 0。若所有线程完成而没有错误，则返回值为 1。启动平台、创建或使用数据表或访问图形子系统的函数仅在主线程上受支持，若从工作节点线程调用，将抛出异常。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
m = J( 3, 2, -1 );
If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Print Matrix

**语法:** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**说明:** 打印矩阵 M。可选参数 ignore locale 确定小数分隔符的打印格式是否遵循语言/区域规范，其中零值表示遵循语言/区域规范。可选参数 style 确定是否使用样式以及使用何种样式。可用的样式是 parseable（重新格式化的 JSL 矩阵表达式）、latex 和 other。若 style 参数为 other，最后三个可选参数将定义打印行的开始字符和结束字符，以及拼接项的分隔字符。

**JMP添加的版本:** 早于版本 14

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

**语法:** {Q, R} = QR( X )

**说明:** 创建 m×m 正交矩阵 Q 和 m×n 上三角矩阵 R，使得 X = Q * R。参数 X 是 m×n 矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
QR( [11 22, 33 44] );

```

### QR LAPACK

**语法:** {Q, R} = QR LAPACK( X )

**说明:** 创建 k×m 正交矩阵 Q 和 n×k 上三角矩阵 R，使得 X = Q * R。参数 X 是 n×m 矩阵，其中 k 是 min(m, n)。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**语法:** y = Quadratic Form BLAS( A, x )

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Random SVD

**语法:** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**说明:** 使用随机奇异值分解计算矩阵 X 的奇异值分解，返回列表 {U、M、V}，使得 U*diag(M)*V` 等于 X。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
Random SVD( [11 22, 33 44], 1 );

```

### Rank

**语法:** y = Rank Index( x )

**说明:** 返回用作原向量 v 下标的指数向量，按秩对向量排序。排除缺失值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**语法:** y = Rank Index( x )

**说明:** 返回用作原向量 v 下标的指数向量，按秩对向量排序。排除缺失值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**语法:** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**说明:** 返回 x 值的秩的向量，从低到高（如从 1 到 n）排列，结值随意排列。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**语法:** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**说明:** 返回 x 值的秩的向量，但结值的秩取平均值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Ranking Tie( [33, 22, 44, 11, 33] );

```

### Robust PCA

**语法:** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**说明:** 将数据稳健分解为残差的低秩矩阵和稀疏矩阵。残差中会检测离群值。它还可以插补缺失值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### SVD

**语法:** {U, M, V} = SVD( X )

**说明:** 计算矩阵 X 的奇异值分解，返回列表 {U、M、V}，使得 U*diag(M)*V` 等于 X。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
SVD( [11 22, 33 44] );

```

### SVD LAPACK

**语法:** {U, M, V} = SVD LAPACK( X )

**说明:** 计算矩阵 X 的奇异值分解，返回列表 {U、M、V}，使得 U*diag(M)*V` 等于 X。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
SVD LAPACK( [11 22, 33 44] );

```

### Scoring Impute

**语法:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**说明:** 提供自动数据插补 (ADI) 算法的流功能。输入参数是包含缺失值的行向量、ADI 算法生成的载荷矩阵（也称为 V 矩阵）、忽略缺失单元格的列均值向量，以及忽略缺失单元格的列标准差向量。它返回使用最小二乘估计值插补缺失值的行向量。

**JMP添加的版本:** 14

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

**语法:** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**说明:** 将 M 矩阵或标量各行重构为 nr 行×nc 列。nr 允许缺失值。M 中的数据根据需要重复填充该 nr×nc 矩阵。可选参数 <<bycol 按列填充数据。默认情况下，数据按行填充。常见用法是将向量重构为矩阵或向量化成一个矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ), Shape( [11 22, 33 44], ., 4 )
	}
);

```

### Solve

**语法:** y = Solve( A, B )

**说明:** 在线性系统 A*x=B 中求解 x。若 A 是非奇异矩阵，则 Solve() 函数等价于 Inverse(A)*B。注意: A 参数必须为方矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**语法:** y = Sort Ascending( x )

**说明:** 返回项以升序排序的列表或矩阵 x 的副本。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**语法:** y = Sort Descending( x )

**说明:** 返回项以降序排序的列表或矩阵 x 的副本。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Sort Descending( {111, 212, 133, 114, 55} );

```

### Sparse SVD

**语法:** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**说明:** 计算矩阵“X”的奇异值分解，这需要对稀疏矩阵使用隐式重新启动的偏重新正交化的 Lanczos 方法，通过返回列表“{U, M, V}”使得“U*diag(M)*V`”等于“X”。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Spline Coef

**语法:** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**说明:** Returns a five-column matrix of coefficients in the following order: knots||a||b||c||d for each of the unique values in x. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**语法:** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**说明:** 使用 coef 矩阵计算样条预测值，该矩阵与 Spline Coef() 函数返回的矩阵形式相同。extrapolation 指示超出样条范围多远（表示为范围的比例）以在返回缺失值之前扩展计算。

**JMP添加的版本:** 早于版本 14

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

**语法:** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**说明:** Returns the smoothed predicted values from a spline fit. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sweep

**语法:** y = Sweep( A, &lt;indices&gt; )

**说明:** 返回矩阵 A 按 indices 指定的对角枢轴求得的逆矩阵。这是一种按每次一个枢轴量求逆矩阵的方法。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**语法:** y = Sym Matrix Mult BLAS( A, B, ... )

**说明:** 将矩阵相乘，其中 A 是对称矩阵。矩阵参数必须是可相乘的，即 NCol(A)==NRow(B)。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### Trace

**语法:** y = Trace( x )

**说明:** 返回方矩阵对角线元素的和。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Trace( [11 22, 33 44] );

```

### Transpose

**语法:** y = Transpose( matrix ); y = matrix`

**说明:** 通过行列互换转置矩阵参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### V Concat

**语法:** y = a |/ b; y = V Concat( a, b, ... )

**说明:** 纵向拼接矩阵。参数必须具有相同的列数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
[11 22] |/ [33 44];

```

### V Concat To

**语法:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**说明:** 在原位纵向拼接。a |/= b 等价于 a = a |/ b。这是一个赋值运算符。

**JMP添加的版本:** 早于版本 14

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

**语法:** b = V Max( matrix )

**说明:** 返回包含参数中每列的最大值的行向量。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**语法:** m = V Mean( matrix )

**说明:** 返回包含参数中每列的均值的行向量。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**语法:** m = V Median( matrix )

**说明:** 返回包含参数中每列的中位数的行向量。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**语法:** a = V Min( matrix )

**说明:** 返回包含参数中每列的最小值的行向量。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**语法:** m = V Quantile( matrix, p )

**说明:** 返回包含参数中每列的指定 p 分位数的行向量。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**语法:** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**说明:** 返回以中位数为中心，以矩阵 X 的标准差的稳健估计值为尺度的矩阵。可选布尔参数指定是否执行中心化和尺度化。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Standardize

**语法:** b = V Standardize( X )

**说明:** 返回矩阵 X 的中心化和统一尺度版本的矩阵。b 的每列具有均值 0 和标准差 1。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**语法:** b = V Std( matrix )

**说明:** 返回包含参数中每列的标准差的行向量。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**语法:** s = V Sum( matrix )

**说明:** 返回包含参数中每列的总和的行向量。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
V Sum( [11 22, 33 44, 55 66] );

```

### VPTree

**语法:** tab = VPTree( [ matrix ] )

**说明:** 返回一个用于有效查找近邻的表。矩阵参数为 k 维点。该函数本身未对维数和点数进行限制。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Varimax

**语法:** {R,T} = Varimax( F, &lt;norm=1&gt; )

**说明:** 执行指定矩阵“F”的最大方差旋转。返回包含旋转矩阵和正交旋转矩阵的列表。默认情况下，执行标准化最大方差旋转。指定 norm = 0 以执行非标准化最大方差旋转。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**语法:** y = Vec Diag( x )

**说明:** 以向量形式返回方矩阵的对角元素。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**语法:** Vec Quadratic( S, X )

**说明:** 按照 Vec Diag( X * S * X` ) 计算。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### Wavelet Basis Coef

**语法:** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**说明:** 返回指定小波模型在 x 点处的预测。grid 参数是一个向量，指定小波模型的数据网格。coef 参数是小波系数的向量。wavelet 参数是小波模型的名称。可选 param 参数是小波模型参数（若需要，默认值为 0）。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

