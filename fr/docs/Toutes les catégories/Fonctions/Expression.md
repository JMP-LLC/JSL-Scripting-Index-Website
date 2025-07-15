# Expression



### Arg

**Syntaxe :** y = Arg( x, i )

**Description :** Renvoie le i-ième argument de l’expression évaluée ou Empty() s’il n’y a pas de i-ième argument.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Syntaxe :** y = Arg Expr( expr, i )

**Description :** Renvoie le i-ième argument de l’expression évaluée ou Empty() s’il n’y a pas de i-ième argument. Cette fonction est déconseillée. Veuillez plutôt utiliser Arg().

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### Eval Expr

**Syntaxe :** y = Eval Expr( x )

**Description :** Renvoie une copie de l&apos;expression x avec chaque clause Expr() dans x remplacée par sa valeur évaluée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Expr

**Syntaxe :** y = Expr( x )

**Description :** Renvoie son argument non évalué. Utilisé pour citer des expressions.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Expr( x + y );

```

### Extract Expr

**Syntaxe :** y = Extract Expr( expr, pattern )

**Description :** Renvoie une sous-expression correspondant à la configuration spécifiée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Extract Expr( a + b * c, Wild() * Wild() );

```

### Head

**Syntaxe :** y = Head( x )

**Description :** Renvoie la tête de l&apos;expression évaluée, sans ses arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Syntaxe :** y = Head Expr( expr )

**Description :** Renvoie la tête de l&apos;expression, sans ses arguments. Cette fonction est déconseillée. Veuillez plutôt utiliser Tête().

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**Syntaxe :** y = Head Name( x )

**Description :** Renvoie la tête de l&apos;expression évaluée sous forme de chaîne, sans ses arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Syntaxe :** y = Head Name Expr( expr )

**Description :** Renvoie la tête de l&apos;expression sous forme de chaîne, sans ses arguments. Cette fonction est déconseillée. Veuillez plutôt utiliser Nom de la tête().

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### N Arg

**Syntaxe :** n = N Arg( expr )

**Description :** Renvoie le nombre d&apos;arguments de la tête de l&apos;expression évaluée.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Syntaxe :** n = N Arg Expr( expr )

**Description :** Renvoie le nombre d&apos;arguments de la tête de l&apos;expression. Cette fonction est déconseillée. Veuillez plutôt utiliser N Arg().

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### Name Expr

**Syntaxe :** y = Name Expr( x )

**Description :** Renvoie la valeur d&apos;un symbole, sans l&apos;évaluer s&apos;il s&apos;agit d&apos;une expression.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

```

