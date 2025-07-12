# Optimization



## Funciones

### Constrained Maximize

**Sintaxis:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({lowerLimitVector,upperLimitVector})

**Descripción:** Busca valores para los argumentos de la función, especificados en la lista {x1, x2, ...}, que maximizan la expresión expr con restricciones lineales opcionales. Las variables, x1, x2, etc. pueden ser escalares o vectores. Deben especificarse límites inferior y superior para cada variable entre paréntesis siguiendo el nombre de la variable o con el parámetro opcional <<SetVariableLimits(). Los argumentos opcionales para la función Constrained Maximize le permiten especificar lo siguiente: restricciones lineales, número máximo de iteraciones, tolerancia deseada, detalles de salida, valores de inicio y límites para las variables de optimización. (Consulte el ejemplo 2.) Las restricciones lineales se especifican con la matriz de coeficientes mat_A y el vector de la parte derecha vec_b.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

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

**Ejemplo 2**

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

**Sintaxis:** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({low,high})

**Descripción:** Busca valores para los argumentos de la función, especificados en la lista {x1, x2, ...}, que minimizan la expresión expr con restricciones lineales opcionales. Las variables, x1, x2, etc. pueden ser escalares o vectores. Deben especificarse límites inferior y superior para cada variable entre paréntesis siguiendo el nombre de la variable o con el parámetro opcional <<SetVariableLimits(). Los argumentos opcionales para la función Constrained Minimize le permiten especificar lo siguiente: restricciones lineales, número máximo de iteraciones, tolerancia deseada, detalles de salida, valores de inicio y límites para las variables de optimización. (Consulte el ejemplo 2.) Las restricciones lineales se especifican con la matriz de coeficientes mat_A y el vector de la parte derecha vec_b.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

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

**Ejemplo 2**

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

**Sintaxis:** des = Desirability( yVector, dVector, y )

**Descripción:** Devuelve una curva de deseabilidad tal que yVector es un vector que contiene 3 valores de entrada, dVector son los 3 valores de deseabilidad correspondientes y y es el argumento del cual se desea calcular la deseabilidad.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, <slackVars=0> )

**Descripción:** Minimiza la función objetivo sujeta a las restricciones especificadas y devuelve una lista de dos elementos. El primer elemento de la lista, x, contiene las variables de decisión (y valores de variables de holgura si slackVars=1). El segundo elemento de la lista, z, contiene el valor óptimo de la función objetivo (si es que existe). Los primeros cinco argumentos son matrices. El argumento A es la matriz de coeficientes de restricción. El argumento b es la columna de los valores de la derecha de las restricciones. El argumento c es el vector de los coeficientes de coste de la función objetivo. Los argumentos L y U son los límites inferior y superior de las variables, respectivamente. Los argumentos neq, nle y nge son el número de restricciones de igualdad, de restricciones de tipo menor o igual que y de restricciones de tipo mayor o igual que, respectivamente. Nótese que las restricciones se deben listar indicando las de igualdad en primer lugar, seguidas de las de tipo menor o igual que y, finalmente, las de tipo mayor o igual que.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Maximize( expr, {x1, x2, ...} );

Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<hessian(), method(NR | SR1), <<useNumericDeriv(True))

**Descripción:** Busca valores para los argumentos de la función, especificados en la lista {x1, x2, ...}, que maximizan la expresión expr. Puede especificar los límites inferior y superior para cada argumento entre paréntesis después del nombre del argumento. Si expr no es una función cóncava, es posible que Maximize encuentre un máximo local en lugar de un máximo global. Si esto supone un problema, pruebe a utilizar varios valores iniciales. Además, Maximize funciona mejor con las funciones que tienen una segunda derivada continua. Los argumentos adicionales para la función Maximize le permiten establecer el número máximo de iteraciones y la tolerancia de la convergencia, así como ver más detalles acerca de la optimización. Haga clic en el botón Tema de ayuda para obtener más información acerca de los argumentos opcionales.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**Ejemplo 2**

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

**Ejemplo 3**

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

**Sintaxis:** Minimize( expr, {x1, x2, ...} );

Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<Hessian(), <<method(NR | SR1), <<useNumericDeriv(True))

**Descripción:** Busca valores para los argumentos de la función, especificados en la lista {x1, x2, ...}, que minimizan la expresión expr. Puede especificar los límites inferior y superior para cada argumento entre paréntesis después del nombre del argumento. Si expr no es una función convexa, es posible que Minimize encuentre un mínimo local en lugar de un mínimo global. Si esto supone un problema, pruebe a utilizar varios valores iniciales. Además, Minimize funciona mejor con las funciones que tienen una segunda derivada continua. Los argumentos adicionales para la función Minimize le permiten establecer el número máximo de iteraciones y la tolerancia de la convergencia, así como ver más detalles acerca de la optimización. Haga clic en el botón Tema de ayuda para obtener más información acerca de los argumentos opcionales.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**Ejemplo 2**

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

**Ejemplo 3**

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

**Ejemplo 4**

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

**Ejemplo 5**

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

