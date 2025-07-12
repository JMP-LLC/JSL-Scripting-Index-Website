# Optimization



## 函数

### Constrained Maximize

**语法:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({lowerLimitVector,upperLimitVector})

**说明:** 在列表 {x1, x2, ...} 中查找将带有可选线性约束的 expr 表达式最大化的函数参数的值。变量 x1、x2 等可以是标量或向量。必须在变量名称之后的括号中或使用可选参数 <<SetVariableLimits() 指定每个变量的下限和上限。Constrained Maximize 函数的可选参数支持您进行以下指定: 线性约束、最大迭代次数、所需容差、输出详细信息、起始值和优化变量的限值。（请参见示例 2。）线性约束使用 mat_A 系数矩阵和 vec_b 右侧向量指定。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
/*Simple Example*/
f = Expr(
	-2 * x1 ^ 2 - 2 * x2 ^ 2 + 2 * x1 * x2 + 4 * x1 + 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Maximize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	-2 * x[1] ^ 2 - 2 * x[2] ^ 2 + 2 * x[1] * x[2] + 4 * x[1] + 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Maximize(
	f,
	{x},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Constrained Minimize

**语法:** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({low,high})

**说明:** 在列表 {x1, x2, ...} 中查找将带有可选线性约束的 expr 表达式最小化的函数参数的值。变量 x1、x2 等可以是标量或向量。必须在变量名称之后的括号中或使用可选参数 <<SetVariableLimits() 指定每个变量的下限和上限。Constrained Minimize 函数的可选参数支持您进行以下指定: 线性约束、最大迭代次数、所需容差、输出详细信息、起始值和优化变量的限值。（请参见示例 2。）线性约束使用 mat_A 系数矩阵和 vec_b 右侧向量指定。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
/*Simple Example*/
f = Expr(
	2 * x1 ^ 2 + 2 * x2 ^ 2 - 2 * x1 * x2 - 4 * x1 - 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Minimize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	2 * x[1] ^ 2 + 2 * x[2] ^ 2 - 2 * x[1] * x[2] - 4 * x[1] - 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Minimize(
	f,
	{x},
	<<lessthanEQ( {A, b} ) /*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Desirability

**语法:** des = Desirability( yVector, dVector, y )

**说明:** 返回意愿曲线，其中 yVector 为 3 个输入值的向量，dVector 为相应的 3 个意愿值，而 y 为计算意愿的参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
dvec = [0.1 0.9 0.1];
yvec = [1 5 10];
New Window( "Desirability",
	Graph Box(
		X Scale( 0, 12 ),
		Y Scale( 0, 1 ),
		Frame Size( 500, 400 ),
		Drag Marker( yvec, dvec );
		Y Function( Desirability( yvec, dvec, x ), x );
	)
);

```

### LPSolve

**语法:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, <slackVars=0> )

**说明:** 最小化受限于给定约束的目标函数并返回两个项组成的列表。第一个列表项 x 包含决策变量（若 slackVars=1，还包含松弛变量）。第二个列表项 z 包含最优目标函数值（若存在）。前五个参数都是矩阵。A 参数是约束系数矩阵。b 参数是约束的右侧值列。c 参数是目标函数的成本系数向量。L 和 U 参数分别为变量的下限和上限。neq、nle 和 nge 参数分别是等式约束个数、小于等于约束的个数以及大于等于约束的个数。注意: 列出约束时必须先列出等式约束，然后列出小于等于约束，最后列出大于等于约束。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
A = [5 -2 6, 2 4 0, 3 8 -4];
b = [17, 19, 14];
c = [9 6 -4];
L = [. 0 .];
U = [0 . .];
{x, z} = LPSolve( A, b, c, L, U, 1, 1, 1, 1 );
Show( x, z );

```

### Maximize

**语法:** Maximize( expr, {x1, x2, ...} );

Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<hessian(), method(NR | SR1), <<useNumericDeriv(True))

**说明:** 在列表 {x1, x2, ...} 中查找可最大化 expr 表达式的函数参数的值。您可以为每个参数指定上限和下限，将限值用括号引起放在参数名后。若 expr 不是凹函数，则 Maximize 可能找到一个局部最大值而非全局最大值。若这是个问题，尝试使用多个起始值。另外，Maximize 对于具有连续二阶导数的函数效果最佳。Maximize 函数的其他参数允许您设置最大迭代数、收敛的容差，并查看有关优化的更多详细信息。点击“主题帮助”按钮获取有关可选参数的更多信息。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
/*Find the MLE for a Normal Distribution with a random sample of 3 observations*/
x = [3 4 5]; /* observed values*/ 
n = 3;
logDens = Expr(
	(-n / 2) * Log( 2 * Pi() * sigSq ) - Summation( i = 1, 3, ((x[i] - mu) ^ 2) ) / (2 *
	sigSq)
);
mu = 3;
sigSq = 1;/*initial values*/ 
{maxReached, iters, gradient, hessian} = Maximize(
	logDens,
	{mu, sigSq( 0, . )},
	<<details( both )
);

```

**示例 3**

```jsl

Names Default To Here( 1 );
/*Simple example with all optional arguments*/ 
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Maximize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

### Minimize

**语法:** Minimize( expr, {x1, x2, ...} );

Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<Hessian(), <<method(NR | SR1), <<useNumericDeriv(True))

**说明:** 在列表 {x1, x2, ...} 中查找可最小化 expr 表达式的函数参数的值。您可以为每个参数指定上限和下限，将限值用括号引起放在参数名后。若 expr 不是凸函数，则 Minimize 可能找到一个局部最小值而非全局最小值。若这是个问题，尝试使用多个起始值。另外，Minimize 对于具有连续二阶导数的函数效果最佳。Minimize 函数的其他参数允许您设置最大迭代数、收敛的容差，并查看有关优化的更多详细信息。点击“主题帮助”按钮获取有关可选参数的更多信息。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
/*Nonlinear Sums of Squares Example*/
x = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
y = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
sseExpr = Expr(
	Summation( i = 1, 6, (y[i] - b1 * x[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objVal, iters, gradient, hessian} = Minimize(
	sseExpr,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 )
);

```

**示例 3**

```jsl

Names Default To Here( 1 );
/*Simple example with some optional arguments*/
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Minimize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
/*Example with gradient, hessian, and method(nr) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -10 ),
	<<Method( nr ),
	<<gradient(
		{Summation( i = 1, 6, -2 * xx[i] ^ b2 * (yy[i] - b1 * xx[i] ^ b2) ),
		Summation(
			i = 1,
			6,
			2 * (b1 * Ln( xx[i] ) * xx[i] ^ b2) * (b1 * xx[i] ^ b2 - yy[i])
		)}
	),
	<<hessian(
		{{Summation( i = 1, 6, 2 * xx[i] ^ (2 * b2) ),
		Summation( i = 1, 6, 2 * Ln( xx[i] ) * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i]) )},
		{Summation(
			i = 1,
			6,
			2 * b1 * Ln( xx[i] ) ^ 2 * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}}
	)
);

```

**示例 5**

```jsl

Names Default To Here( 1 );
/*Example with usNumericDeriv and method(sr1) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objValue, iter, gradient, hessian} = Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 ),
	<<Method( sr1 ),
	<<useNumericDeriv( True )
);

```

