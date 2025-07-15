# Expression



### Arg

**Syntax:** y = Arg( x, i )

**Description:** Returns the ith argument of the evaluated expression or Empty() if there is no ith argument.

```jsl

Names Default To Here( 1 );
Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Syntax:** y = Arg Expr( expr, i )

**Description:** Returns the ith argument of the expression or Empty() if there is no ith argument. This function is deprecated. Please use Arg() instead.

**Example 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

**Example 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### Eval Expr

**Syntax:** y = Eval Expr( x )

**Description:** Returns a copy of expression x with each Expr() clause within x replaced with its evaluated value.

```jsl

Names Default To Here( 1 );
Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Expr

**Syntax:** y = Expr( x )

**Description:** Returns its argument unevaluated. Used to quote expressions.

```jsl

Names Default To Here( 1 );
Expr( x + y );

```

### Extract Expr

**Syntax:** y = Extract Expr( expr, pattern )

**Description:** Returns a subexpression matching the specified pattern.

```jsl

Names Default To Here( 1 );
Extract Expr( a + b * c, Wild() * Wild() );

```

### Head

**Syntax:** y = Head( x )

**Description:** Returns the head of the evaluated expression, without its arguments.

```jsl

Names Default To Here( 1 );
Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Syntax:** y = Head Expr( expr )

**Description:** Returns the head of the expression, without its arguments. This function is deprecated. Please use Head() instead.

**Example 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**Syntax:** y = Head Name( x )

**Description:** Returns the head of the evaluated expression as a string, without its arguments.

```jsl

Names Default To Here( 1 );
Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Syntax:** y = Head Name Expr( expr )

**Description:** Returns the head of the expression as a string, without its arguments. This function is deprecated. Please use Head Name() instead.

**Example 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### N Arg

**Syntax:** n = N Arg( expr )

**Description:** Returns the number of arguments of the evaluated expression head.

```jsl

Names Default To Here( 1 );
N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Syntax:** n = N Arg Expr( expr )

**Description:** Returns the number of arguments of the expression head. This function is deprecated. Please use N Arg() instead.

**Example 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### Name Expr

**Syntax:** y = Name Expr( x )

**Description:** Returns the value of a symbol, without evaluating it if it is an expression.

```jsl

Names Default To Here( 1 );
ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

```

