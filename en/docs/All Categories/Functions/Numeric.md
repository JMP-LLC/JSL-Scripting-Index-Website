# Numeric



### Abs

**Syntax:** y = Abs( x )

**Description:** Returns the absolute value of x. Argument can be a number, matrix, or list of numbers.

**JMP Version Added:** Before version 14

```jsl

Abs( -5 );

```

### Ceiling

**Syntax:** y = Ceiling( x )

**Description:** Returns the smallest integer greater than or equal to x. Argument can be a number, matrix, or list of numbers.

**JMP Version Added:** Before version 14

```jsl

Ceiling( 1.2 );

```

### Derivative

**Syntax:** y = Derivative( expr, name )

**Description:** Returns the symbolic derivative for the given expression with respect to the specified variable name.

**JMP Version Added:** Before version 14

```jsl

Derivative( Sin( x ), x );

```

### Floor

**Syntax:** y = Floor( x )

**Description:** Returns the largest integer less than or equal to x. Argument can be a number, matrix, or list of numbers.

**JMP Version Added:** Before version 14

```jsl

Floor( 1.2 );

```

### Integrate

**Syntax:** y = Integrate( expr, varname, lowLimit, upLimit, &lt;&lt;Tolerance(1e-10), &lt;&lt;StoreInfo(list), &lt;&lt;StartingValue(val) )

**Description:** Integrates an expression with respect to a scalar value, using adaptive quadrature method from Gander and Gautschi (2000). If the variable specified with varname has a value assigned to it or the <<StartingValue() optional argument specifies a starting value, that value is used as a typical value to improve the accuracy of the integral. To specify infinite ranges of integration, set lowLimit, upLimit, or both to missing. If <<StoreInfo() is specified, the argument of <<StoreInfo() will contain diagnostics of the numerical integration routine. If <<Tolerance() is specified, the argument of <<Tolerance() is used as the tolerance level in the autointegration function used to evaluate the integral. Smaller values result in longer run time but more precise results.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Integrate( Exp( -x ), x, 0, . );

```

**Example 2**

```jsl

x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Invert Expr

**Syntax:** y = Invert Expr( expr, xname, yname )

**Description:** Inverts the expr expression argument, unfolding around the single occurrence of xname.

**JMP Version Added:** Before version 14

```jsl

Invert Expr( Sqrt( Log( x ) ), x, y );

```

### Mod

**Syntax:** z = Modulo( x, y )

**Description:** Returns the remainder from dividing x by y. The remainder has the same sign as x.

**JMP Version Added:** Before version 14

```jsl

Modulo( 10, 3 );

```

### Modulo

**Syntax:** z = Modulo( x, y )

**Description:** Returns the remainder from dividing x by y. The remainder has the same sign as x.

**JMP Version Added:** Before version 14

```jsl

Modulo( 10, 3 );

```

### Normal Integrate

**Syntax:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Description:** Returns the result of radial-spherical integration for smooth functions of multivariate normal variables. The basic idea is the same as one method in Genz and Monahan(1996). But Radau-Gauss-Laguerre type quadrature is used for the radial direction.

**JMP Version Added:** Before version 14

```jsl

Normal Integrate(
	J( 3, 1, 0 ),
	Identity( 3 ),
	ex[1] ^ 4 * ex[2] ^ 2 * ex[3] ^ 2,
	ex,
	2,
	5000
);

```

### Num Deriv

**Syntax:** y = Num Deriv( f( x, ... ), &lt;parnum&gt;)

**Description:** Returns the numerical derivative of the f( x,... ) function with respect to one of its arguments. You can specify that argument as the second argument in the Num Deriv function. If no second argument is specified, the derivative is taken with respect to the function&apos;s first argument. The derivative is evaluated using numeric values specified in the f( x,... ) function expression.

**JMP Version Added:** Before version 14

```jsl

f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Syntax:** y = Num Deriv2( f( x, ... ) )

**Description:** Returns the numerical second derivative of the f( x,... ) function with respect to x. The derivative is evaluated using numeric values specified in the f( x,... ) function expression.

**JMP Version Added:** Before version 14

```jsl

f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Round

**Syntax:** y = Round( x, &lt;n&gt; )

**Description:** Rounds x to n digits after the decimal point (or 0 digits if n is not specified). Note that the n argument can be negative.

**JMP Version Added:** Before version 14

```jsl

Round( 213, -1 );

```

### Simplify Expr

**Syntax:** resultExpr = Simplify Expr( expr( ... ) )

**Description:** Returns an equivalent expression that simplifies the argument expression in various ways.

**JMP Version Added:** Before version 14

```jsl

Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

