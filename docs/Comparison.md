# Comparison



### Equal

**Syntax:** z = x == y == ...; z = Equal( x, y, ... )

**Description:** Returns 1 if each argument is equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
1 == 1;

```

### Greater

**Syntax:** z = x > y > ... ; z = Greater( x, y, ... )

**Description:** Returns 1 if each argument is greater than the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
3 > 2 > 1;

```

### Greater or Equal

**Syntax:** z = x >= y >= ... ; z = Greater or Equal( x, y, ... )

**Description:** Returns 1 if each argument is greater than or equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
3 >= 2 >= 2;

```

### Is Missing

**Syntax:** y = Is Missing( x )

**Description:** Returns 1 if the x argument is a missing value; returns 0 otherwise.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
Is Missing( . );

```

### Is Same Color

**Syntax:** x = Is Same Color( color1, color2, ... )

**Description:** Compares colors for equality.

**JMP Version Added:** 18

**Example 1**

```

Names Default To Here( 1 );
Is Same Color( "black", 0 );

```

**Example 2**

```

Names Default To Here( 1 );
Is Same Color( "red", "green", "blue" );

```

**Example 3**

```

Names Default To Here( 1 );
Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**Example 4**

```

Names Default To Here( 1 );
Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Less

**Syntax:** z = x < y < ... ; z = Less( x, y, ... )

**Description:** Returns 1 if each argument is less than the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
[1 1 1] < [0 1 2];

```

### Less LessEqual

**Syntax:** z = x < y <= ... ; z = Less LessEqual( x, y, ... )

**Description:** Returns 1 if the first argument is less than the second argument and each argument except the first is less than or equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
1 < 2 <= 2;

```

### Less or Equal

**Syntax:** z = x <= y <= ... ; z = Less or Equal( x, y, ... )

**Description:** Returns 1 if each argument is less than or equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
1 <= 2 <= 2;

```

### LessEqual Less

**Syntax:** z = x <= y < ... ; z = LessEqual Less( x, y, ... )

**Description:** Returns 1 if the first argument is less than or equal to the second argument and each argument except the first is less than the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
2 <= 2 < 3;

```

### Not Equal

**Syntax:** z = x != y != ...; z = Not Equal( x, y, ... )

**Description:** Returns 1 if each argument is not equal to the next argument; returns 0 otherwise.

**JMP Version Added:** Before version 14

```

Names Default To Here( 1 );
1 != 2 != 1;

```

