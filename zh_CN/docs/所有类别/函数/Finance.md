# Finance



## 函数

### Double Declining Balance

**语法:** x = Double Declining Balance( cost, salvage, life, period, <factor=2> )

**说明:** 使用双倍余额递减法或其他折旧因子，返回指定期间内资产的折旧。等价于 Microsoft Excel 中的 DDB 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Double Declining Balance( 10000, 100, 3, 2 );

```

### Future Value

**语法:** x = Future Value( rate, nper, pmt, <pv=0>, <type=0> )

**说明:** 基于等额分期付款方式和固定利率，返回投资的终值。对于期末付款，type 参数为 0；对于期初付款，该参数为 1。等价于 Microsoft Excel 中的 FV 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Future Value( .03, 12, 100, 0, 1 );

```

### Interest Payment

**语法:** x = Interest Payment( rate, per, nper, pv, <fv=0>, <type=0> )

**说明:** 基于等额分期付款方式和固定利率，返回在指定期间内投资的利息偿还额。对于期末付款，type 参数为 0；对于期初付款，该参数为 1。等价于 Microsoft Excel 中的 IPMT 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**语法:** x = Interest Rate( nper, pmt, pv, <fv=0>, <type=0>, <guess=0.1> )

**说明:** 返回年金的每期利率。对于期末付款，type 参数为 0；对于期初付款，该参数为 1。等价于 Microsoft Excel 中的 RATE 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**语法:** x = Internal Rate of Return( values, <guess=0.1> );

x = Internal Rate of Return( guess, value1, value2, <value3, ...> )

**说明:** 返回由 values 参数中的数值表示的一系列现金流的内部收益率。等价于 Microsoft Excel 中的 IRR 函数。该函数的第二个原型接受所有标量参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Internal Rate of Return( [-10000, 1000, 900, 950] );
Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Modified Internal Rate of Return

**语法:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate );

x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, <value3, ...> )

**说明:** 返回一系列定期现金流的修正内部收益率，该函数同时考虑了投资成本和现金再投资的收益。等价于 Microsoft Excel 中的 MIRR 函数。该函数的第二个原型接受所有标量参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );
Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Net Present Value

**语法:** x = Net Present Value( rate, values );

x = Net Present Value( rate, value1, value2, <value3, ...> )

**说明:** 通过使用贴现率、一系列将来的支出（负值）和收入（正值）进行计算，返回投资的净现值。values 参数是个一维矩阵。等价于 Microsoft Excel 中的 NPV 函数。该函数的第二个原型接受所有标量参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Net Present Value( .05, [-10000, 1000, 900, 9500] );
Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### Number of Periods

**语法:** x = Number of Periods( rate, pmt, pv, <fv=0>, <type=0> )

**说明:** 基于等额分期付款方式和固定利率，返回投资的期数。对于期末付款，type 参数为 0；对于期初付款，该参数为 1。等价于 Microsoft Excel 中的 NPER 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Number of Periods( .05 / 12, -2000, 100000 );

```

### Payment

**语法:** x = Payment( rate, nper, pv, <fv=0>, <type=0> )

**说明:** 基于等额还款方式和固定利率，返回贷款的偿还额。对于期末付款，type 参数为 0；对于期初付款，该参数为 1。等价于 Microsoft Excel 中的 PMT 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Present Value

**语法:** x = Present Value( rate, nper, pmt, <fv=0>, <type=0> )

**说明:** 返回投资现值。对于期末付款，type 参数为 0；对于期初付款，该参数为 1。等价于 Microsoft Excel 中的 PV 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**语法:** x = Principal Payment( rate, per, nper, pv, <fv=0>, <type=0> )

**说明:** 基于等额分期付款方式和固定利率，返回在指定期间内投资的本金偿还额。对于期末付款，type 参数为 0；对于期初付款，该参数为 1。等价于 Microsoft Excel 中的 PPMT 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Straight Line Depreciation

**语法:** x = Straight Line Depreciation( cost, salvage, life )

**说明:** 返回在单期里一项资产的直线折旧。等价于 Microsoft Excel 中的 SLN 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Straight Line Depreciation( 1000, 100, 3 );

```

### Sum Of Years Digits Depreciation

**语法:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**说明:** 返回指定期间内资产的年数总和折旧值。等价于 Microsoft Excel 中的 SYD 函数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

