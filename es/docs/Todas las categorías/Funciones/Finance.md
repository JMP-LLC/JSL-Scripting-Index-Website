# Finance



### Double Declining Balance

**Sintaxis:** x = Double Declining Balance( cost, salvage, life, period, &lt;factor=2&gt; )

**Descripción:** Devuelve la devaluación de un activo en el período indicado usando el método de balance de doble-declinación u otro factor de depreciación. Equivale a la función DDB de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Double Declining Balance( 10000, 100, 3, 2 );

```

### Future Value

**Sintaxis:** x = Future Value( rate, nper, pmt, &lt;pv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve el valor futuro de una inversión basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función FV de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Future Value( .03, 12, 100, 0, 1 );

```

### Interest Payment

**Sintaxis:** x = Interest Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve los intereses pagados durante un período especificado para una inversión basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función IPMT de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**Sintaxis:** x = Interest Rate( nper, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt;, &lt;guess=0.1&gt; )

**Descripción:** Devuelve la tasa de interés en un período o una anualidad. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función RATE de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**Sintaxis:** x = Internal Rate of Return( values, &lt;guess=0.1&gt; ); x = Internal Rate of Return( guess, value1, value2, &lt;value3, ...&gt; )

**Descripción:** Devuelve la tasa interna de retorno de una serie de flujos de caja representados por los números contenidos en el argumento values. Equivale a la función IRR de Microsoft Excel. El segundo prototipo de la función acepta todos los argumentos escalares.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Internal Rate of Return( [-10000, 1000, 900, 950] );Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Modified Internal Rate of Return

**Sintaxis:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate ); x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, &lt;value3, ...&gt; )

**Descripción:** Devuelve la tasa interna de retorno modificada de una serie de flujos de caja periódicos, teniendo en cuenta tanto el coste de la inversión como los intereses obtenidos mediante la reinversión de tesorería. Equivale a la función MIRR de Microsoft Excel. El segundo prototipo de la función acepta todos los argumentos escalares.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Net Present Value

**Sintaxis:** x = Net Present Value( rate, values ); x = Net Present Value( rate, value1, value2, &lt;value3, ...&gt; )

**Descripción:** Devuelve el valor actual neto de una inversión basándose en una tasa de descuento y una serie de futuros pagos (valores negativos) e ingresos (valores positivos). El argumento values es una matriz unidimensional. Equivale a la función NPV de Microsoft Excel. El segundo prototipo de la función acepta todos los argumentos escalares.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Net Present Value( .05, [-10000, 1000, 900, 9500] );Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### Number of Periods

**Sintaxis:** x = Number of Periods( rate, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve el número de períodos de una inversión basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función NPER de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Number of Periods( .05 / 12, -2000, 100000 );

```

### Payment

**Sintaxis:** x = Payment( rate, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve los pagos de un préstamo basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función PMT de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Present Value

**Sintaxis:** x = Present Value( rate, nper, pmt, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve el valor actual de una inversión. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función PV de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**Sintaxis:** x = Principal Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve los pagos de principal durante un período especificado para una inversión basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función PPMT de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Straight Line Depreciation

**Sintaxis:** x = Straight Line Depreciation( cost, salvage, life )

**Descripción:** Devuelve la devaluación en línea recta de un activo en un período determinado. Equivale a la función SLN de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Straight Line Depreciation( 1000, 100, 3 );

```

### Sum Of Years Digits Depreciation

**Sintaxis:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**Descripción:** Devuelve la devaluación de un activo durante un período determinado calculado proporcionalmente al orden numérico del año. Equivale a la función SYD de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

