# Comparison



### Equal

**语法:** z = x == y == ...; z = Equal( x, y, ... )

**说明:** 若每个参数都等于下一个参数，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
1 == 1;

```

### Greater

**语法:** z = x &gt; y &gt; ... ; z = Greater( x, y, ... )

**说明:** 若每个参数都大于下一个参数，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
3 > 2 > 1;

```

### Greater or Equal

**语法:** z = x &gt;= y &gt;= ... ; z = Greater or Equal( x, y, ... )

**说明:** 若每个参数都大于等于下一个参数，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
3 >= 2 >= 2;

```

### Is Missing

**语法:** y = Is Missing( x )

**说明:** 若 x 参数是缺失值，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Is Missing( . );

```

### Is Same Color

**语法:** x = Is Same Color( color1, color2, ... )

**说明:** 比较颜色是否相等。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );
Is Same Color( "black", 0 );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Is Same Color( "red", "green", "blue" );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**示例 4**

```jsl

Names Default To Here( 1 );
Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Less

**语法:** z = x &lt; y &lt; ... ; z = Less( x, y, ... )

**说明:** 若每个参数都小于下一个参数，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
[1 1 1] < [0 1 2];

```

### Less LessEqual

**语法:** z = x &lt; y &lt;= ... ; z = Less LessEqual( x, y, ... )

**说明:** 若第一个参数小于第二个参数，并且除第一个参数之外的其他所有参数都小于等于下一个参数，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
1 < 2 <= 2;

```

### Less or Equal

**语法:** z = x &lt;= y &lt;= ... ; z = Less or Equal( x, y, ... )

**说明:** 若每个参数都小于等于下一个参数，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
1 <= 2 <= 2;

```

### LessEqual Less

**语法:** z = x &lt;= y &lt; ... ; z = LessEqual Less( x, y, ... )

**说明:** 若第一个参数小于等于第二个参数，并且除第一个参数之外的所有其他参数都小于下一个参数，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
2 <= 2 < 3;

```

### Not Equal

**语法:** z = x != y != ...; z = Not Equal( x, y, ... )

**说明:** 若每个参数都不等于下一个参数，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
1 != 2 != 1;

```

