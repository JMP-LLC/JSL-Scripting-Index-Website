# Optimization



### Constrained Maximize

**Syntax:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({lowerLimitVector,upperLimitVector})

**Description:** Finds values for the function&apos;s arguments, given in the list {x1, x2, ...}, that maximize the expr expression with optional linear constraints. The variables, x1, x2, and so on, can be scalars or vectors. Lower and upper bounds must be specified for each variable in parentheses following the variable&apos;s name or with the optional parameter <<SetVariableLimits(). Optional arguments for the Constrained Maximize function enable you to specify the following: linear constraints, maximum number of iterations, desired tolerance, output details, starting values, and limits for the optimization variables. (See example 2.) Linear constraints are specified using the mat_A coefficient matrix and the vec_b right hand side vector.

**JMP Version Added:** Before version 14

**Example 1**

```

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

**Example 2**

```

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

**Syntax:** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({low,high})

**Description:** Finds values for the function&apos;s arguments, given in the list {x1, x2, ...}, that minimize the expr expression with optional linear constraints. The variables, x1, x2, and so on, can be scalars or vectors. Lower and upper bounds must be specified for each variable in parentheses following the variable&apos;s name or with the optional parameter <<SetVariableLimits(). Optional arguments for the Constrained Minimize function enable you to specify the following: linear constraints, maximum number of iterations, desired tolerance, output details, starting values, and limits for the optimization variables. (See example 2.) Linear constraints are specified using the mat_A coefficient matrix and the vec_b right hand side vector.

**JMP Version Added:** Before version 14

**Example 1**

```

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

**Example 2**

```

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

**Syntax:** des = Desirability( yVector, dVector, y )

**Description:** Returns a desirability curve, where yVector is a vector of 3 input values, dVector is the corresponding 3 desirability values, and y is the argument of which to calculate the desirability.

**JMP Version Added:** Before version 14

```

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

**Syntax:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, <slackVars=0> )

**Description:** Minimizes the objective function subject to the given constraints and returns a list of two items. The first list item, x, contains the decision variables (and slack variable values if slackVars=1). The second list item, z, contains optimal objective function value (if one exists). The first five arguments are matrices. The A argument is the matrix of constraint coefficients. The b argument is the column of right hand side values of the constraints. The c argument is the vector of cost coefficients of the objective function. The L and U arguments are the lower and upper bounds for the variables, respectively. The neq, nle, and nge arguments are the number of equality constraints, less than or equal constraints, and greater than or equal constraints, respectively. Note that the constraints must be listed as equality first, less than or equal next, and greater than or equal last.

**JMP Version Added:** Before version 14

```

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

**Syntax:** Maximize( expr, {x1, x2, ...} );

Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<hessian(), method(NR | SR1), <<useNumericDeriv(True))

**Description:** Finds values for the function&apos;s arguments, given in the list {x1, x2, ...}, that maximize the expr expression. You can specify lower and upper bounds for each argument in parentheses following the argument&apos;s name. If expr is not a concave function, Maximize might find a local maximum rather than the global maximum. If this is a concern, try multiple starting values. Also, Maximize works best for functions with a continuous second derivative. Additional arguments for the Maximize function enable you to set the maximum number of iterations, tolerance for convergence, and view more details about the optimization. Click the Topic Help button for more information about the optional arguments.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**Example 2**

```

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

**Example 3**

```

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

**Syntax:** Minimize( expr, {x1, x2, ...} );

Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<Hessian(), <<method(NR | SR1), <<useNumericDeriv(True))

**Description:** Finds values for the function&apos;s arguments, given in the list {x1, x2, ...}, that minimize the expr expression. You can specify lower and upper bounds for each argument in parentheses following the argument&apos;s name. If expr is not a convex function, Minimize might find a local minimum rather than the global minimum. If this is a concern, try multiple starting values. Also, Minimize works best for functions with a continuous second derivative. Additional arguments for the Minimize function enable you to set the maximum number of iterations, tolerance for convergence, and view more details about the optimization. Click the Topic Help button for more information about the optional arguments.

**JMP Version Added:** Before version 14

**Example 1**

```

Names Default To Here( 1 );
/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**Example 2**

```

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

**Example 3**

```

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

**Example 4**

```

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
		Summation(
			i = 1,
			6,
			2 * Ln( xx[i] ) * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}, {Summation(
			i = 1,
			6,
			2 * b1 * Ln( xx[i] ) ^ 2 * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}}
	)
);

```

**Example 5**

```

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

