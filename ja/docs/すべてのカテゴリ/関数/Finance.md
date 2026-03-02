# Finance



### Double Declining Balance

**構文:** x = Double Declining Balance( cost, salvage, life, period, &lt;factor=2&gt; )

**説明:** 倍額定率法、または、他の償却率によって、指定の期における減価償却費を戻す。Microsoft ExcelのDDB関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Double Declining Balance( 10000, 100, 3, 2 );

```

### Future Value

**構文:** x = Future Value( rate, nper, pmt, &lt;pv=0&gt;, &lt;type=0&gt; )

**説明:** 利率が一定な状況で、定期に定額支払をした場合の、投資の将来価値を戻す。引数typeは、期末払いの場合は0、期首払いの場合は1に設定する。Microsoft ExcelのFV関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Future Value( .03, 12, 100, 0, 1 );

```

### Interest Payment

**構文:** x = Interest Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**説明:** 利率が一定な状況で、定期に定額支払をした場合の、支払いにおける利子額を戻す。引数typeは、期末払いの場合は0、期首払いの場合は1に設定する。Microsoft ExcelのIPMT関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**構文:** x = Interest Rate( nper, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt;, &lt;guess=0.1&gt; )

**説明:** 投資の1期あたりの利率を戻す。引数typeは、期末払いの場合は0、期首払いの場合は1に設定する。Microsoft ExcelのRATE関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**構文:** x = Internal Rate of Return( values, &lt;guess=0.1&gt; ); x = Internal Rate of Return( guess, value1, value2, &lt;value3, ...&gt; )

**説明:** 一連の定期的なキャッシュフローに対して、内部収益率を戻す。一連のキャッシュフローは、引数valuesによって指定する。Microsoft ExcelのIRR関数に相当。別の指定方法として、すべての引数をスカラーで指定することも可能。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Internal Rate of Return( [-10000, 1000, 900, 950] );Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Modified Internal Rate of Return

**構文:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate ); x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, &lt;value3, ...&gt; )

**説明:** 一連の定期的なキャッシュフローに対して、修正内部収益率を戻す。その際、投資コストと、現金の再投資によって得た利子の両方を考慮する。Microsoft ExcelのMIRR関数に相当。別の指定方法として、すべての引数をスカラーで指定することも可能。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Net Present Value

**構文:** x = Net Present Value( rate, values ); x = Net Present Value( rate, value1, value2, &lt;value3, ...&gt; )

**説明:** 割引率、および、一連の将来の支払(負の値)と収入(正の値)を考慮して、投資の正味現在価値を戻す。引数valuesは1次元の行列。Microsoft ExcelのNPV関数に相当。別の指定方法として、すべての引数をスカラーで指定することも可能。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Net Present Value( .05, [-10000, 1000, 900, 9500] );Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### Number of Periods

**構文:** x = Number of Periods( rate, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**説明:** 利率が一定な状況で、定期に定額支払をした場合の、投資の期間を戻す。引数typeは、期末払いの場合は0、期首払いの場合は1に設定する。Microsoft ExcelのNPER関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Number of Periods( .05 / 12, -2000, 100000 );

```

### Payment

**構文:** x = Payment( rate, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**説明:** 利率が一定な状況で、定期に定額支払をした場合の、ローンの支払額を戻す。引数typeは、期末払いの場合は0、期首払いの場合は1に設定する。Microsoft ExcelのPMT関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Present Value

**構文:** x = Present Value( rate, nper, pmt, &lt;fv=0&gt;, &lt;type=0&gt; )

**説明:** 投資の現在価値を戻す。引数typeは、期末払いの場合は0、期首払いの場合は1に設定する。Microsoft ExcelのPV関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**構文:** x = Principal Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**説明:** 利率が一定な状況で、定期に定額支払をした場合の、支払いにおける元金分を戻す。引数typeは、期末払いの場合は0、期首払いの場合は1に設定する。Microsoft ExcelのPPMT関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Straight Line Depreciation

**構文:** x = Straight Line Depreciation( cost, salvage, life )

**説明:** 定額法によって、ある期における減価償却額を戻す。Microsoft ExcelのSLN関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Straight Line Depreciation( 1000, 100, 3 );

```

### Sum Of Years Digits Depreciation

**構文:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**説明:** 級数法によって、ある期における減価償却額を戻す。Microsoft ExcelのSYD関数に相当。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

