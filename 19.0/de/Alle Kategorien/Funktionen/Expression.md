# Expression



### Arg

**Syntax:** y = Arg( x, i )

**Beschreibung:** Gibt das i-te Argument des ausgewerteten Ausdrucks zurück, oder Empty(), wenn es kein i-tes Argument gibt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Syntax:** y = Arg Expr( expr, i )

**Beschreibung:** Gibt das i-te Argument des Ausdrucks zurück, oder Empty(), wenn es kein i-tes Argument gibt. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen Arg().

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

#### Beispiel 2

```jsl

// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### Eval Expr

**Syntax:** y = Eval Expr( x )

**Beschreibung:** Gibt eine Kopie des Ausdrucks x zurück, wobei jeder Ausdruck Expr() innerhalb von x durch den ausgewerteten Wert ersetzt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Expr

**Syntax:** y = Expr( x )

**Beschreibung:** Gibt das Argument unausgewertet zurück. Dient zum Zitieren von Ausdrücken.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Expr( x + y );

```

### Extract Expr

**Syntax:** y = Extract Expr( expr, pattern )

**Beschreibung:** Gibt einen Unterausdruck zurück, der dem angegebenen Muster entspricht.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Extract Expr( a + b * c, Wild() * Wild() );

```

### Head

**Syntax:** y = Head( x )

**Beschreibung:** Gibt den Kopf des ausgewerteten Ausdrucks ohne dessen Argumente zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Syntax:** y = Head Expr( expr )

**Beschreibung:** Gibt den Kopf des Ausdrucks ohne dessen Argumente zurück. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen Head().

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

#### Beispiel 2

```jsl

// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**Syntax:** y = Head Name( x )

**Beschreibung:** Gibt den Kopf des ausgewerteten Ausdrucks als Zeichenkette ohne dessen Argumente zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Syntax:** y = Head Name Expr( expr )

**Beschreibung:** Gibt den Kopf des Ausdrucks als Zeichenkette ohne dessen Argumente zurück. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen Head Name().

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

#### Beispiel 2

```jsl

// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### N Arg

**Syntax:** n = N Arg( expr )

**Beschreibung:** Gibt die Anzahl der Argumente im Kopf des ausgewerteten Ausdrucks zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Syntax:** n = N Arg Expr( expr )

**Beschreibung:** Gibt die Anzahl der Argumente im Kopf des Ausdrucks zurück. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen N Arg().

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

#### Beispiel 2

```jsl

// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### Name Expr

**Syntax:** y = Name Expr( x )

**Beschreibung:** Gibt den Wert eines Symbols zurück, ohne dieses auszuwerten, wenn es ein Ausdruck ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

```

