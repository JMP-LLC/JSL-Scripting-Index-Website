# Expression



## 函数

### Arg

**语法:** y = Arg( x, i )

**说明:** 返回所计算表达式的第 i 个参数，若没有第 i 个参数，则返回 Empty()。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**语法:** y = Arg Expr( expr, i )

**说明:** 返回表达式的第 i 个参数，若没有第 i 个参数，则返回 Empty()。该函数已废弃。请改为使用 Arg()。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

**示例 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### Eval Expr

**语法:** y = Eval Expr( x )

**说明:** 返回表达式 x 的副本，对于 x 中的每个 Expr() 子句，均用其计算值替换。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Expr

**语法:** y = Expr( x )

**说明:** 返回其未计算的参数。用于引用表达式。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Expr( x + y );

```

### Extract Expr

**语法:** y = Extract Expr( expr, pattern )

**说明:** 返回与指定模式相匹配的子表达式。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Extract Expr( a + b * c, Wild() * Wild() );

```

### Head

**语法:** y = Head( x )

**说明:** 返回所计算表达式的头部，不带参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**语法:** y = Head Expr( expr )

**说明:** 返回表达式头部，不带参数。该函数已废弃。请改为使用 Head()。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**语法:** y = Head Name( x )

**说明:** 以字符串的形式返回所计算表达式的头部，不带参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**语法:** y = Head Name Expr( expr )

**说明:** 以字符串的形式返回表达式头部，不带参数。该函数已废弃。请改为使用 Head Name()。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### N Arg

**语法:** n = N Arg( expr )

**说明:** 返回计算的表达式头部的参数数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**语法:** n = N Arg Expr( expr )

**说明:** 返回表达式头部的参数个数。该函数已废弃。请改为使用 N Arg()。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### Name Expr

**语法:** y = Name Expr( x )

**说明:** 返回符号的值，若其为表达式则不计算。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

```

