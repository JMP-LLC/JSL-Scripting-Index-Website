# Expression



### Arg

**Sintaxis:** y = Arg( x, i )

**Descripción:** Devuelve el i-ésimo argumento de la expresión evaluada o Empty() si no hay ningún argumento i-ésimo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Sintaxis:** y = Arg Expr( expr, i )

**Descripción:** Devuelve el i-ésimo argumento de la expresión o Empty() si no hay ningún argumento i-ésimo. Esta función está en desuso. Utilice Arg() en su lugar.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

// See Example 2 for the deprecated Arg Expr() equivalentArg( Expr( Sum( a, b, c ) ), 2 );

```

**Ejemplo 2**

```jsl

// DeprecatedArg Expr( Sum( a, b, c ), 2 );

```

### Eval Expr

**Sintaxis:** y = Eval Expr( x )

**Descripción:** Devuelve una copia de la expresión x donde cada una de las cláusulas Expr() dentro de x está sustituida por el valor calculado correspondiente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Expr

**Sintaxis:** y = Expr( x )

**Descripción:** Devuelve el argumento sin evaluar. Se utiliza para entrecomillar expresiones.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Expr( x + y );

```

### Extract Expr

**Sintaxis:** y = Extract Expr( expr, pattern )

**Descripción:** Devuelve una expresión secundaria que corresponde con el patrón especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Extract Expr( a + b * c, Wild() * Wild() );

```

### Head

**Sintaxis:** y = Head( x )

**Descripción:** Devuelve el inicio de la expresión evaluada, sin sus argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Sintaxis:** y = Head Expr( expr )

**Descripción:** Devuelve el inicio de la expresión, sin sus argumentos. Esta función está en desuso. Utilice Head() en su lugar.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

// See Example 2 for the deprecated Head Expr() equivalentHead( Expr( Sum( a, b, c ) ) );

```

**Ejemplo 2**

```jsl

// DeprecatedHead Expr( Sum( a, b, c ) );

```

### Head Name

**Sintaxis:** y = Head Name( x )

**Descripción:** Devuelve el inicio de la expresión evaluada en forma de cadena de caracteres, sin sus argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Sintaxis:** y = Head Name Expr( expr )

**Descripción:** Devuelve el inicio de la expresión como cadena, sin sus argumentos. Esta función está en desuso. Utilice Head Name() en su lugar.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

// See Example 2 for the deprecated Head Name Expr() equivalentHead Name( Expr( Sum( a, b, c ) ) );

```

**Ejemplo 2**

```jsl

// DeprecatedHead Name Expr( Sum( a, b, c ) );

```

### N Arg

**Sintaxis:** n = N Arg( expr )

**Descripción:** Devuelve el número de argumentos del principio de la expresión evaluada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Sintaxis:** n = N Arg Expr( expr )

**Descripción:** Devuelve el número de argumentos del principio de la expresión. Esta función está en desuso. Utilice N Arg() en su lugar.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

// See Example 2 for the deprecated N Arg Expr() equivalentN Arg( Expr( Sum( a, b, c ) ) );

```

**Ejemplo 2**

```jsl

// DeprecatedN Arg Expr( Sum( a, b, c ) );

```

### Name Expr

**Sintaxis:** y = Name Expr( x )

**Descripción:** Devuelve el valor de un símbolo, sin evaluarlo cuando se trata de una expresión.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = Expr( 1 + 2 );Eval List( {ex, Name Expr( ex )} );

```

