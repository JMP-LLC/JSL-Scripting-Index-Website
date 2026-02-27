# Expression



### Arg

**Sintassi:** y = Arg( x, i )

**Descrizione:** Restituisce l&apos;i-esimo argomento dell&apos;espressione valutata o Empty() se non esiste nessun i-esimo argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Sintassi:** y = Arg Expr( expr, i )

**Descrizione:** Restituisce l&apos;iesimo argomento dell&apos;espressione o Empty() se non esiste alcun iesimo argomento. Questa funzione è obsoleta. Al suo posto usare Arg().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

// See Example 2 for the deprecated Arg Expr() equivalentArg( Expr( Sum( a, b, c ) ), 2 );

```

**Esempio 2**

```jsl

// DeprecatedArg Expr( Sum( a, b, c ), 2 );

```

### Eval Expr

**Sintassi:** y = Eval Expr( x )

**Descrizione:** Restituisce una copia dell&apos;espressione x con ogni clausola Expr() entro x sostituita con il valore valutato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Expr

**Sintassi:** y = Expr( x )

**Descrizione:** Restituisce l&apos;argomento non valutato. Usato per citare espressioni.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Expr( x + y );

```

### Extract Expr

**Sintassi:** y = Extract Expr( expr, pattern )

**Descrizione:** Restituisce una sottoespressione corrispondente al pattern specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Extract Expr( a + b * c, Wild() * Wild() );

```

### Head

**Sintassi:** y = Head( x )

**Descrizione:** Restituisce la testa dell&apos;espressione valutata, senza argomenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Sintassi:** y = Head Expr( expr )

**Descrizione:** Restituisce la testa dell&apos;espressione, senza argomenti. Questa funzione è obsoleta. Al suo posto usare Head().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

// See Example 2 for the deprecated Head Expr() equivalentHead( Expr( Sum( a, b, c ) ) );

```

**Esempio 2**

```jsl

// DeprecatedHead Expr( Sum( a, b, c ) );

```

### Head Name

**Sintassi:** y = Head Name( x )

**Descrizione:** Restituisce la testa dell&apos;espressione valutata come stringa, senza argomenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Sintassi:** y = Head Name Expr( expr )

**Descrizione:** Restituisce la testa dell&apos;espressione come stringa, senza argomenti. Questa funzione è obsoleta. Al suo posto usare Head Name().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

// See Example 2 for the deprecated Head Name Expr() equivalentHead Name( Expr( Sum( a, b, c ) ) );

```

**Esempio 2**

```jsl

// DeprecatedHead Name Expr( Sum( a, b, c ) );

```

### N Arg

**Sintassi:** n = N Arg( expr )

**Descrizione:** Restituisce il numero di argomenti della testa dell&apos;espressione valutata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Sintassi:** n = N Arg Expr( expr )

**Descrizione:** Restituisce il numero di argomenti della testa dell&apos;espressione. Questa funzione è obsoleta. Al suo posto usare N Arg().

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

// See Example 2 for the deprecated N Arg Expr() equivalentN Arg( Expr( Sum( a, b, c ) ) );

```

**Esempio 2**

```jsl

// DeprecatedN Arg Expr( Sum( a, b, c ) );

```

### Name Expr

**Sintassi:** y = Name Expr( x )

**Descrizione:** Restituisce il valore di un simbolo, senza valutarlo se è una espressione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

ex = Expr( 1 + 2 );Eval List( {ex, Name Expr( ex )} );

```

