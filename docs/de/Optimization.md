# Optimization



### Constrained Maximize

**Syntax:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<LessThanEQ({mat_A, vec_b}), <<GreaterThanEQ({mat_A, vec_b}), <<EqualTo({mat_A, vec_b}), <<MaxIter( 250 ), <<tolerance( .00001 ), <<ShowDetails(True), <<StartingValues([x1, x2, ... ])), <<SetVariableLimit({lowerLimitVector,upperLimitVector})

**Beschreibung:** Findet Werte für die Argumente der Funktion, die in der Liste {x1, x2, ...} angegeben werden, die den Ausdruck expr mit optionalen linearen Nebenbedingungen maximieren. Die Variablen, x1, x2 usw., können Skalare oder Vektoren sein. Untere und obere Grenzen müssen für jede Variable auf den Variablennamen folgend in Klammern oder mit dem optionalen Parameter <<SetVariableLimits() angegeben werden. Optionale Argumente für die Funktion Constrained Maximize ermöglichen Ihnen, Folgendes anzugeben: lineare Nebenbedingungen, maximale Anzahl von Iterationen, gewünschte Toleranz, Ausgabedetails, Startwerte und Grenzen für die Optimierungsvariablen. (Siehe Beispiel 2.) Lineare Nebenbedingungen werden über die Koeffizientenmatrix mat_A und den rechten Vektor vec_b angegeben.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

```js

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

**Beschreibung:** Findet Werte für die Argumente der Funktion, die in der Liste {x1, x2, ...} angegeben werden, die den Ausdruck expr mit optionalen linearen Nebenbedingungen minimieren. Die Variablen, x1, x2 usw., können Skalare oder Vektoren sein. Untere und obere Grenzen müssen für jede Variable auf den Variablennamen folgend in Klammern oder mit dem optionalen Parameter <<SetVariableLimits() angegeben werden. Optionale Argumente für die Funktion Constrained Minimize ermöglichen Ihnen, Folgendes anzugeben: lineare Nebenbedingungen, maximale Anzahl von Iterationen, gewünschte Toleranz, Ausgabedetails, Startwerte und Grenzen für die Optimierungsvariablen. (Siehe Beispiel 2.) Lineare Nebenbedingungen werden über die Koeffizientenmatrix mat_A und den rechten Vektor vec_b angegeben.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

```js

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

**Beschreibung:** Gibt eine Wünschbarkeitskurve zurück, wobei yVector ein Vektor mit 3 Werten ist, dVector sind die entsprechenden 3 Wünschbarkeitswerte und y ist das Argument, dessen Wünschbarkeit berechnet wird.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, <slackVars=0> )

**Beschreibung:** Minimiert die Zielfunktion unter den vorgegebenen Nebenbedingungen und gibt eine Liste mit zwei Elementen zurück. Das erste Listenelement, x, enthält die Entscheidungsvariablen (und Slack-Variablenwerte, wenn slackVars=1 ist). Das zweite Listenelement, z, enthält den optimalen Zielfunktionswert (sofern einer vorhanden ist). Die ersten fünf Argumente sind Matrizen. Das Argument A ist die Matrix der Nebenbedingungskoeffizienten. Das Argument b ist die Spalte der rechten Seiten der Nebenbedingungen. Das Argument c ist der Vektor der Kostenkoeffizienten der Zielfunktion. Die Argumente L und U sind die untere und obere Schranke für die Variablen. Die Argumente neq, nle und nge ist die Anzahl der Gleichheitsnebenbedingungen, die Anzahl von Ungleichungen „kleiner als oder gleich“ und die Anzahl von Ungleichungen „größer als oder gleich“. Beachten Sie, dass für die Nebenbedingungen zuerst die Gleichungen, danach die Ungleichungen „kleiner als oder gleich“ und zuletzt die Ungleichungen „größer als oder gleich“ aufgeführt werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Maximize( expr, {x1, x2, ...} );

Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<hessian(), method(NR | SR1), <<useNumericDeriv(True))

**Beschreibung:** Findet Werte für die Argumente der Funktion, angegeben in der Liste {x1, x2, ...}, die den Ausdruck expr maximieren. Auf den Namen des Arguments folgend können Sie für jedes Argument untere und obere Grenzen in Klammern angeben. Wenn expr keine konkave Funktion ist, findet Maximize möglicherweise statt des globalen Maximum ein lokales Maximum. Sollten Sie deswegen Bedenken haben, können Sie versuchen, mehrere Startwerte zu verwenden. Auch funktioniert Maximize am besten für Funktionen mit einer stetigen zweiten Ableitung. Mit zusätzlichen Argumenten für die Funktion Maximize können Sie die maximale Anzahl von Iterationen und Toleranz für Konvergenz angeben und weitere Details über die Optimierung anzeigen. Klicken Sie auf die Schaltfläche „Hilfethemen“, um weitere Informationen über die optionalen Argumente zu erhalten.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**Beispiel 2**

```js

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

**Beispiel 3**

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

**Syntax:** Minimize( expr, {x1, x2, ...} );

Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, <<MaxIter( 250 ), <<Tolerance( .00000001 ), <<details(both | returnDetails | displaySteps), <<gradient(), <<Hessian(), <<method(NR | SR1), <<useNumericDeriv(True))

**Beschreibung:** Findet Werte für die Argumente der Funktion, angegeben in der Liste {x1, x2, ...}, die den Ausdruck expr minimieren. Auf den Namen des Arguments folgend können Sie für jedes Argument untere und obere Grenzen in Klammern angeben. Wenn expr keine konvexe Funktion ist, findet Minimize möglicherweise statt des globalen Minimum ein lokales Minimum. Sollten Sie deswegen Bedenken haben, können Sie versuchen, mehrere Startwerte zu verwenden. Auch funktioniert Minimize am besten für Funktionen mit einer stetigen zweiten Ableitung. Mit zusätzlichen Argumenten für die Funktion Minimize können Sie die maximale Anzahl von Iterationen und Toleranz für Konvergenz angeben und weitere Details über die Optimierung anzeigen. Klicken Sie auf die Schaltfläche „Hilfethemen“, um weitere Informationen über die optionalen Argumente zu erhalten.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**Beispiel 2**

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

**Beispiel 3**

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

**Beispiel 4**

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
		Summation( i = 1, 6, 2 * Ln( xx[i] ) * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i]) )},
		{Summation(
			i = 1,
			6,
			2 * b1 * Ln( xx[i] ) ^ 2 * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}}
	)
);

```

**Beispiel 5**

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

