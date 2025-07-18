# Comparison



### Equal

**Sintaxis:** z = x == y == ...; z = Equal( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es igual al siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 == 1;

```

### Greater

**Sintaxis:** z = x &gt; y &gt; ... ; z = Greater( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es mayor que el siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

3 > 2 > 1;

```

### Greater or Equal

**Sintaxis:** z = x &gt;= y &gt;= ... ; z = Greater or Equal( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es mayor o igual que el siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

3 >= 2 >= 2;

```

### Is Missing

**Sintaxis:** y = Is Missing( x )

**Descripción:** Devuelve 1 si el argumento x es un valor faltante y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is Missing( . );

```

### Is Same Color

**Sintaxis:** x = Is Same Color( color1, color2, ... )

**Descripción:** Compara la igualdad de los colores.

**JMP Versión agregada:** 18

#### Ejemplo 1

```jsl

Is Same Color( "black", 0 );

```

#### Ejemplo 2

```jsl

Is Same Color( "red", "green", "blue" );

```

#### Ejemplo 3

```jsl

Is Same Color( "red", To Color Space( "hls", "red" ) );

```

#### Ejemplo 4

```jsl

Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Less

**Sintaxis:** z = x &lt; y &lt; ... ; z = Less( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es menor que el siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

[1 1 1] < [0 1 2];

```

### Less LessEqual

**Sintaxis:** z = x &lt; y &lt;= ... ; z = Less LessEqual( x, y, ... )

**Descripción:** Devuelve 1 si el primer argumento es menor que el segundo y cada uno de los argumentos salvo el primero es menor o igual que el argumento siguiente, y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 < 2 <= 2;

```

### Less or Equal

**Sintaxis:** z = x &lt;= y &lt;= ... ; z = Less or Equal( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es menor o igual que el siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 <= 2 <= 2;

```

### LessEqual Less

**Sintaxis:** z = x &lt;= y &lt; ... ; z = LessEqual Less( x, y, ... )

**Descripción:** Devuelve 1 si el primer argumento es menor o igual que el segundo y cada uno de los argumentos salvo el primero es menor que el argumento siguiente, y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

2 <= 2 < 3;

```

### Not Equal

**Sintaxis:** z = x != y != ...; z = Not Equal( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es distinto del siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 != 2 != 1;

```

