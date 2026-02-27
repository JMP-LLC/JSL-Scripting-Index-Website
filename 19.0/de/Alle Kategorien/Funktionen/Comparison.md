# Comparison



### Equal

**Syntax:** z = x == y == ...; z = Equal( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument gleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 == 1;

```

### Greater

**Syntax:** z = x &gt; y &gt; ... ; z = Greater( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument größer als das nächste Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

3 > 2 > 1;

```

### Greater or Equal

**Syntax:** z = x &gt;= y &gt;= ... ; z = Greater or Equal( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument größer oder gleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

3 >= 2 >= 2;

```

### Is Missing

**Syntax:** y = Is Missing( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x ein fehlender Wert ist, andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is Missing( . );

```

### Is Same Color

**Syntax:** x = Is Same Color( color1, color2, ... )

**Beschreibung:** Vergleicht Farben auf Gleichheit.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

Is Same Color( "black", 0 );

```

#### Beispiel 2

```jsl

Is Same Color( "red", "green", "blue" );

```

#### Beispiel 3

```jsl

Is Same Color( "red", To Color Space( "hls", "red" ) );

```

#### Beispiel 4

```jsl

Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Less

**Syntax:** z = x &lt; y &lt; ... ; z = Less( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument kleiner als das nächste Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

[1 1 1] < [0 1 2];

```

### Less LessEqual

**Syntax:** z = x &lt; y &lt;= ... ; z = Less LessEqual( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn das erste Argument kleiner als das zweite Argument ist und jedes Argument außer dem ersten kleiner oder gleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 < 2 <= 2;

```

### Less or Equal

**Syntax:** z = x &lt;= y &lt;= ... ; z = Less or Equal( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument kleiner oder gleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 <= 2 <= 2;

```

### LessEqual Less

**Syntax:** z = x &lt;= y &lt; ... ; z = LessEqual Less( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn das erste Argument kleiner oder gleich dem zweiten Argument ist und jedes Argument außer dem ersten kleiner als das nächste Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

2 <= 2 < 3;

```

### Not Equal

**Syntax:** z = x != y != ...; z = Not Equal( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument ungleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 != 2 != 1;

```

