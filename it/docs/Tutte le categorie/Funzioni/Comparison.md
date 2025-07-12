# Comparison



## Funzioni

### Equal

**Sintassi:** z = x == y == ...; z = Equal( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è uguale al successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
1 == 1;

```

### Greater

**Sintassi:** z = x > y > ... ; z = Greater( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è maggiore del successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
3 > 2 > 1;

```

### Greater or Equal

**Sintassi:** z = x >= y >= ... ; z = Greater or Equal( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è maggiore o uguale al successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
3 >= 2 >= 2;

```

### Is Missing

**Sintassi:** y = Is Missing( x )

**Descrizione:** Restituisce 1 se l&apos;argomento x è un valore mancante e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Is Missing( . );

```

### Is Same Color

**Sintassi:** x = Is Same Color( color1, color2, ... )

**Descrizione:** Confronta i colori per verificarne l&apos;uguaglianza.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Names Default To Here( 1 );
Is Same Color( "black", 0 );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Is Same Color( "red", "green", "blue" );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Less

**Sintassi:** z = x < y < ... ; z = Less( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è minore del successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
[1 1 1] < [0 1 2];

```

### Less LessEqual

**Sintassi:** z = x < y <= ... ; z = Less LessEqual( x, y, ... )

**Descrizione:** Restituisce 1 se il primo argomento è minore del secondo e se ciascun argomento eccetto il primo è minore o uguale al successivo; restituisce 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
1 < 2 <= 2;

```

### Less or Equal

**Sintassi:** z = x <= y <= ... ; z = Less or Equal( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento è minore o uguale al successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
1 <= 2 <= 2;

```

### LessEqual Less

**Sintassi:** z = x <= y < ... ; z = LessEqual Less( x, y, ... )

**Descrizione:** Restituisce 1 se il primo argomento è minore o uguale al secondo e se ciascun argomento eccetto il primo è minore del successivo; restituisce 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
2 <= 2 < 3;

```

### Not Equal

**Sintassi:** z = x != y != ...; z = Not Equal( x, y, ... )

**Descrizione:** Restituisce 1 se ciascun argomento non è uguale al successivo e 0 in caso contrario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
1 != 2 != 1;

```

