# Optimization



### Constrained Maximize

**Syntaxe :** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({lowerLimitVector,upperLimitVector})

**Description :** Trouve les valeurs des arguments de la fonction, communiquées dans la liste {x1, x2, ...}, qui maximisent l&apos;expression expr avec des contraintes linéaires facultatives. Les variables, x1, x2, etc., peuvent être des scalaires ou des vecteurs. Les limites inférieures et supérieures doivent être spécifiées pour chaque variable, entre parenthèses, à la suite du nom de la variable ou avec le paramètre facultatif <<SetVariableLimits(). Les arguments facultatifs de la fonction Constrained Maximize vous permettent de spécifier ce qui suit : les contraintes linéaires, le nombre maximum d&apos;itérations, la tolérance souhaitée, les détails de la sortie, les valeurs de départ et les limites des variables d&apos;optimisation (voir exemple 2). Les contraintes linéaires sont spécifiées à l&apos;aide de la matrice des coefficients mat_A et du vecteur vec_b du côté droit.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```js

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

**Exemple 2**

```js

Names Default To Here( 1 );
/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	-2 * x[1] ^ 2 - 2 * x[2] ^ 2 + 2 * x[1] * x[2] + 4 * x[1] + 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} =
Constrained Maximize(
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

**Syntaxe :** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({low,high})

**Description :** Trouve les valeurs des arguments de la fonction, communiquées dans la liste {x1, x2, ...}, qui minimisent l&apos;expression expr avec des contraintes linéaires facultatives. Les variables, x1, x2, etc., peuvent être des scalaires ou des vecteurs. Les limites inférieures et supérieures doivent être spécifiées pour chaque variable, entre parenthèses, à la suite du nom de la variable ou avec le paramètre facultatif <<SetVariableLimits(). Les arguments facultatifs de la fonction Constrained Minimize vous permettent de spécifier ce qui suit : les contraintes linéaires, le nombre maximum d&apos;itérations, la tolérance souhaitée, les détails de la sortie, les valeurs de départ et les limites des variables d&apos;optimisation (voir exemple 2). Les contraintes linéaires sont spécifiées à l&apos;aide de la matrice des coefficients mat_A et du vecteur vec_b du côté droit.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```js

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

**Exemple 2**

```js

Names Default To Here( 1 );
/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	2 * x[1] ^ 2 + 2 * x[2] ^ 2 - 2 * x[1] * x[2] - 4 * x[1] - 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} =
Constrained Minimize(
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

**Syntaxe :** des = Desirability( yVector, dVector, y )

**Description :** Renvoie une courbe de désirabilité où yVector est un vecteur de 3 valeurs d&apos;entrée, dVector constitue les 3 valeurs de désirabilité correspondantes, et y est l&apos;argument permettant de calculer la désirabilité..

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, <slackVars=0> )

**Description :** Minimise la fonction objectif soumise aux contraintes données et renvoie une liste de deux éléments. Le premier élément de la liste, x, contient les variables de décision (et les variables d’écart si slackVars=1). Le deuxième élément de la liste, z, contient la valeur optimale de la fonction objectif (si elle existe). Les premiers cinq arguments sont des matrices. L’argument A est la matrice des coefficients de contrainte. L’argument b est la colonne des valeurs des contraintes de droite. L&apos;argument c est le vecteur des coefficients de coûts de la fonction objectif. Les arguments L et U sont respectivement les limites inférieure et supérieure des variables. Les arguments neq, nle et nge sont respectivement le nombre de contraintes d&apos;égalité, le nombre d&apos;inégalités inférieures ou égales et le nombre d&apos;inégalités supérieures ou égales. Notez que les contraintes doivent être répertoriées d&apos;abord comme égalités, puis comme inégalités inférieures ou égales, et enfin comme inégalités supérieures ou égales.

**JMP Version ajoutée :** Avant la version 14

```js

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

**Syntaxe :** Maximize( expr, {x1, x2, ...} );

Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<hessian(), method(NR | SR1), <<useNumericDeriv(True))

**Description :** Trouve les valeurs des arguments de la fonction, communiquées dans la liste {x1, x2, ...}, qui maximisent l&apos;expression expr. Vous pouvez spécifier des limites inférieures et supérieures pour chaque argument entre parenthèses à la suite du nom de l&apos;argument. Si expr n&apos;est pas une fonction concave, Maximize pourrait trouver un maximum local au lieu du maximum global. Si cela pose problème, essayez plusieurs valeurs de départ. Maximize fonctionne également mieux pour les fonctions avec une dérivée seconde continue. Les arguments supplémentaires de la fonction Maximize vous permettent de définir le nombre maximum d&apos;itérations, la tolérance pour la convergence, et d&apos;afficher davantage de détails sur l&apos;optimisation. Cliquez sur le bouton de la rubrique Aide pour davantage d&apos;informations sur les arguments facultatifs.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```js

Names Default To Here( 1 );
/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**Exemple 2**

```js

Names Default To Here( 1 );
/*Find the MLE for a Normal Distribution with a random sample of 3 observations*/
x = [3 4 5]; /* observed values*/ 
n = 3;
logDens = Expr(
	(-n / 2) * Log( 2 * Pi() * sigSq ) - Summation( i = 1, 3, ((x[i] - mu) ^ 2) ) / (
	2 * sigSq)
);
mu = 3;
sigSq = 1;/*initial values*/ 
{maxReached, iters, gradient, hessian} = Maximize(
	logDens,
	{mu, sigSq( 0, . )},
	<<details( both )
);

```

**Exemple 3**

```js

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

**Syntaxe :** Minimize( expr, {x1, x2, ...} );

Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<Hessian(), <<method(NR | SR1), <<useNumericDeriv(True))

**Description :** Trouve les valeurs des arguments de la fonction, communiquées dans la liste {x1, x2, ...}, qui minimisent l&apos;expression expr. Vous pouvez spécifier des limites inférieures et supérieures pour chaque argument entre parenthèses à la suite du nom de l&apos;argument. Si expr n&apos;est pas une fonction convexe, Minimize pourrait trouver un minimum local au lieu du minimum global. Si cela pose problème, essayez plusieurs valeurs de départ. Minimize fonctionne également mieux pour les fonctions avec une dérivée seconde continue. Les arguments supplémentaires de la fonction Minimize vous permettent de définir le nombre maximum d&apos;itérations, la tolérance pour la convergence, et d&apos;afficher davantage de détails sur l&apos;optimisation. Cliquez sur le bouton de la rubrique Aide pour davantage d&apos;informations sur les arguments facultatifs.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```js

Names Default To Here( 1 );
/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**Exemple 2**

```js

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

**Exemple 3**

```js

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

**Exemple 4**

```js

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

**Exemple 5**

```js

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

