# Comparison



### Equal

**Syntaxe :** z = x == y == ...; z = Equal( x, y, ... )

**Description :** Renvoie 1 si chaque argument est égal à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 == 1;

```

### Greater

**Syntaxe :** z = x &gt; y &gt; ... ; z = Greater( x, y, ... )

**Description :** Renvoie 1 si chaque argument est supérieur à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

3 > 2 > 1;

```

### Greater or Equal

**Syntaxe :** z = x &gt;= y &gt;= ... ; z = Greater or Equal( x, y, ... )

**Description :** Renvoie 1 si chaque argument est supérieur ou égal à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

3 >= 2 >= 2;

```

### Is Missing

**Syntaxe :** y = Is Missing( x )

**Description :** Renvoie 1 si l’argument x est une valeur manquante, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

Is Missing( . );

```

### Is Same Color

**Syntaxe :** x = Is Same Color( color1, color2, ... )

**Description :** Compare les couleurs pour déterminer l&apos;égalité.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Is Same Color( "black", 0 );

```

**Exemple 2**

```jsl

Is Same Color( "red", "green", "blue" );

```

**Exemple 3**

```jsl

Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**Exemple 4**

```jsl

Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Less

**Syntaxe :** z = x &lt; y &lt; ... ; z = Less( x, y, ... )

**Description :** Renvoie 1 si chaque argument est inférieur à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

[1 1 1] < [0 1 2];

```

### Less LessEqual

**Syntaxe :** z = x &lt; y &lt;= ... ; z = Less LessEqual( x, y, ... )

**Description :** Renvoie 1 si le premier argument est inférieur au second et que chaque argument, sauf le premier, est inférieur ou égal à l&apos;argument suivant ; retourne 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 < 2 <= 2;

```

### Less or Equal

**Syntaxe :** z = x &lt;= y &lt;= ... ; z = Less or Equal( x, y, ... )

**Description :** Renvoie 1 si chaque argument est inférieur ou égal à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 <= 2 <= 2;

```

### LessEqual Less

**Syntaxe :** z = x &lt;= y &lt; ... ; z = LessEqual Less( x, y, ... )

**Description :** Renvoie 1 si le premier argument est inférieur ou égal au second et que chaque argument, sauf le premier, est inférieur à l&apos;argument suivant ; retourne 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

2 <= 2 < 3;

```

### Not Equal

**Syntaxe :** z = x != y != ...; z = Not Equal( x, y, ... )

**Description :** Renvoie 1 si chaque argument n&apos;est pas égal à l&apos;argument suivant, et 0 dans le cas contraire.

**JMP Version ajoutée :** Avant la version 14

```jsl

1 != 2 != 1;

```

