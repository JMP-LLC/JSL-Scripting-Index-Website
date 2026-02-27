# Numeric



### Abs

**语法:** y = Abs( x )

**说明:** 返回 x 的绝对值。参数可以是数值、矩阵或数值列表。

**JMP添加的版本:** 早于版本 14

```jsl

Abs( -5 );

```

### Ceiling

**语法:** y = Ceiling( x )

**说明:** 返回大于等于 x 的最小整数。参数可以是数值、矩阵或数值列表。

**JMP添加的版本:** 早于版本 14

```jsl

Ceiling( 1.2 );

```

### Derivative

**语法:** y = Derivative( expr, name )

**说明:** 返回给定表达式对指定变量名的符号导数。

**JMP添加的版本:** 早于版本 14

```jsl

Derivative( Sin( x ), x );

```

### Floor

**语法:** y = Floor( x )

**说明:** 返回小于等于 x 的最大整数。参数可以是数字、矩阵或数字列表。

**JMP添加的版本:** 早于版本 14

```jsl

Floor( 1.2 );

```

### Integrate

**语法:** y = Integrate( expr, varname, lowLimit, upLimit, &lt;&lt;Tolerance(1e-10), &lt;&lt;StoreInfo(list), &lt;&lt;StartingValue(val) )

**说明:** 使用 Gander 和 Gautschi 在 2000 年提出的自适应求积法，根据标量值对表达式求积分。若使用 varname 指定的变量分配了值，或 <<StartingValue() 可选参数指定了起始值，则该值将用作典型值以提高积分的准确性。要指定无限范围的积分，将 lowLimit 和/或 upLimit 设置为缺失。若指定了 <<StoreInfo()，则 <<StoreInfo() 的参数将包含数值积分例程的诊断。若指定了 <<Tolerance()，则 <<Tolerance() 的参数用作计算积分的自积分函数中的容差水平。值越小，运行时间越长，但结果越精确。

**JMP添加的版本:** 早于版本 14

#### 示例 1

```jsl

Integrate( Exp( -x ), x, 0, . );

```

#### 示例 2

```jsl

x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Invert Expr

**语法:** y = Invert Expr( expr, xname, yname )

**说明:** 对 expr 表达式参数求逆，围绕 xname 的单个实例展开。

**JMP添加的版本:** 早于版本 14

```jsl

Invert Expr( Sqrt( Log( x ) ), x, y );

```

### Mod

**语法:** z = Modulo( x, y )

**说明:** 返回 x 除以 y 的余数。余数与 x 的符号相同。

**JMP添加的版本:** 早于版本 14

```jsl

Modulo( 10, 3 );

```

### Modulo

**语法:** z = Modulo( x, y )

**说明:** 返回 x 除以 y 的余数。余数与 x 的符号相同。

**JMP添加的版本:** 早于版本 14

```jsl

Modulo( 10, 3 );

```

### Normal Integrate

**语法:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**说明:** 返回多元正态变量平滑函数的径向球积分值。其基本思想与 Genz and Monahan(1996) 中的一种方法相同。但是径向积分采用 Radau-Gauss-Laguerre 求积法。

**JMP添加的版本:** 早于版本 14

```jsl

Normal Integrate(
	J( 3, 1, 0 ),
	Identity( 3 ),
	ex[1] ^ 4 * ex[2] ^ 2 * ex[3] ^ 2,
	ex,
	2,
	5000
);

```

### Num Deriv

**语法:** y = Num Deriv( f( x, ... ), &lt;parnum&gt;)

**说明:** 返回 f( x,... ) 函数相对于其参数之一的数值导数。您可以将该参数指定为 Num Deriv 函数中的第二个参数。若不指定第二个参数，则相对于该函数的第一个参数取其导数。导数使用 f( x,... ) 函数表达式中指定的数值计算得到。

**JMP添加的版本:** 早于版本 14

```jsl

f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**语法:** y = Num Deriv2( f( x, ... ) )

**说明:** 返回 f( x,... ) 函数相对于 x 的二阶数值导数。导数使用 f( x,... ) 函数表达式中指定的数值计算得到。

**JMP添加的版本:** 早于版本 14

```jsl

f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Round

**语法:** y = Round( x, &lt;n&gt; )

**说明:** 将 x 舍入到小数点后 n 位（若未指定 n，则为 0 位）。注意: n 参数可以为负。

**JMP添加的版本:** 早于版本 14

```jsl

Round( 213, -1 );

```

### Simplify Expr

**语法:** resultExpr = Simplify Expr( expr( ... ) )

**说明:** 返回一个以不同方式简化参数表达式的等价表达式。

**JMP添加的版本:** 早于版本 14

```jsl

Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

