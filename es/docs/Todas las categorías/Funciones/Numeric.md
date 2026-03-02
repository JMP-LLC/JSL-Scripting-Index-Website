# Numeric



### Abs

**Sintaxis:** y = Abs( x )

**Descripción:** Devuelve el valor absoluto de x. El argumento puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Abs( -5 );

```

### Ceiling

**Sintaxis:** y = Ceiling( x )

**Descripción:** xDevuelve el entero más pequeño que sea mayor o igual que x. El argumento puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Ceiling( 1.2 );

```

### Derivative

**Sintaxis:** y = Derivative( expr, name )

**Descripción:** Devuelve la derivada simbólica de la expresión indicada respecto de la variable con el nombre indicado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Derivative( Sin( x ), x );

```

### Floor

**Sintaxis:** y = Floor( x )

**Descripción:** Devuelve el entero mayor que sea menor o igual que x. El argumento puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Floor( 1.2 );

```

### Integrate

**Sintaxis:** y = Integrate( expr, varname, lowLimit, upLimit, &lt;&lt;Tolerance(1e-10), &lt;&lt;StoreInfo(list), &lt;&lt;StartingValue(val) )

**Descripción:** Integra una expresión con respecto a un valor escalar, utilizando el método de cuadratura adaptativa de Gander y Gautschi (2000). Si la variable especificada con varname tiene un valor asignado o el argumento opcional <<StartingValue() especifica un valor de inicio, dicho valor se utilizará como valor típico para mejorar la precisión de la integral. Para especificar rangos de integración infinitos, establezca lowLimit, upLimit o ambos en faltante. Si se especifica <<StoreInfo(), el argumento de <<StoreInfo() contendrá diagnósticos de la rutina de integración numérica. Si se especifica <<Tolerance(), el argumento de <<Tolerance() se utilizará como el nivel de tolerancia en la función de autointegración utilizada para evaluar la integral. Los valores más pequeños se traducen en tiempos de corrida más prolongados pero con resultados más precisos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Integrate( Exp( -x ), x, 0, . );

```

**Ejemplo 2**

```jsl

x = 100;Integrate( Normal Density( x - 100 ), x, ., . );

```

### Invert Expr

**Sintaxis:** y = Invert Expr( expr, xname, yname )

**Descripción:** Invierte el argumento de la expresión expr, alrededor del único evento de xname.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Invert Expr( Sqrt( Log( x ) ), x, y );

```

### Mod

**Sintaxis:** z = Modulo( x, y )

**Descripción:** Devuelve el resto de la división de x entre y. El resto tiene el mismo signo que x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Modulo( 10, 3 );

```

### Modulo

**Sintaxis:** z = Modulo( x, y )

**Descripción:** Devuelve el resto de la división de x entre y. El resto tiene el mismo signo que x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Modulo( 10, 3 );

```

### Normal Integrate

**Sintaxis:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Descripción:** Devuelve el resultado de la integración radial-esférica para funciones suaves de variables normales multivariantes. La idea básica es la misma que la de un método descrito por Genz y Monahan(1996). Pero se usa la cuadratura de tipo Radau-Gauss-Laguerre en la dirección radial.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Normal Integrate(	J( 3, 1, 0 ),	Identity( 3 ),	ex[1] ^ 4 * ex[2] ^ 2 * ex[3] ^ 2,	ex,	2,	5000);

```

### Num Deriv

**Sintaxis:** y = Num Deriv( f( x, ... ), &lt;parnum&gt;)

**Descripción:** Devuelve la derivada numérica de la función f( x,... ) con respecto a uno de sus argumentos. Puede especificar ese argumento como el segundo argumento de la función Num Deriv. Si no se especifica un segundo argumento, se toma la derivada con respecto al primer argumento de la función. La derivada se evalúa mediante variables numéricas especificadas en la expresión de función f( x,... ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

f = Function( {x, y}, x ^ 2 + y );Num Deriv( f( 2, 1 ) );Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Sintaxis:** y = Num Deriv2( f( x, ... ) )

**Descripción:** Devuelve la segunda derivada numérica de la función f( x,... ) con respecto a x. La derivada se evalúa mediante variables numéricas especificadas en la expresión de función f( x,... ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

f = Function( {x}, x ^ 3 );Num Deriv2( f( 2 ) );

```

### Round

**Sintaxis:** y = Round( x, &lt;n&gt; )

**Descripción:** Redondea x a n dígitos después de la coma decimal (o a 0 dígitos si no se especifica n). Tenga en cuenta que el argumento n puede ser negativo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( 213, -1 );

```

### Simplify Expr

**Sintaxis:** resultExpr = Simplify Expr( expr( ... ) )

**Descripción:** Devuelve una expresión equivalente que simplifica la expresión del argumento de distintos modos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

