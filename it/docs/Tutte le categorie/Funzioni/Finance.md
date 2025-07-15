# Finance



### Double Declining Balance

**Sintassi:** x = Double Declining Balance( cost, salvage, life, period, &lt;factor=2&gt; )

**Descrizione:** Restituisce l&apos;ammortamento di un asset per un periodo specificato tramite il metodo di doppio ammortamento a quote decrescenti o qualche altro fattore di ammortamento. Equivalente alla funzione DDB in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Double Declining Balance( 10000, 100, 3, 2 );

```

### Future Value

**Sintassi:** x = Future Value( rate, nper, pmt, &lt;pv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il valore futuro di un investimento basato su pagamenti periodici, costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione FV in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Future Value( .03, 12, 100, 0, 1 );

```

### Interest Payment

**Sintassi:** x = Interest Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il pagamento dell&apos;interesse per un dato periodo per un investimento basato su pagamenti periodici, costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione IPMT in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**Sintassi:** x = Interest Rate( nper, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt;, &lt;guess=0.1&gt; )

**Descrizione:** Restituisce il tasso di interesse per periodo di una rendita. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione RATE in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**Sintassi:** x = Internal Rate of Return( values, &lt;guess=0.1&gt; );x = Internal Rate of Return( guess, value1, value2, &lt;value3, ...&gt; )

**Descrizione:** Restituisce il tasso di ritorno interno per una serie di flussi di cassa rappresentati dai numeri nell&apos;argomento values. Equivalente alla funzione IRR in Microsoft Excel. Il secondo prototipo della funzione accetta tutti gli argomenti scalari.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Internal Rate of Return( [-10000, 1000, 900, 950] );
Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Modified Internal Rate of Return

**Sintassi:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate );x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, &lt;value3, ...&gt; )

**Descrizione:** Restituisce il tasso di ritorno interno modificato per una serie di flussi di cassa periodici prendendo in considerazione sia il costo dell&apos;investimento sia l&apos;interesse ricevuto sul reinvestimento di cassa. Equivalente alla funzione MIRR in Microsoft Excel. Il secondo prototipo della funzione accetta tutti gli argomenti scalari.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );
Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Net Present Value

**Sintassi:** x = Net Present Value( rate, values );x = Net Present Value( rate, value1, value2, &lt;value3, ...&gt; )

**Descrizione:** Restituisce il valore attuale netto di un investimento mediante un tasso di sconto e una serie di pagamenti (valori negativi) e reddito (valori positivi) futuri. L&apos;argomento values è una matrice monodimensionale. Equivalente alla funzione NPV in Microsoft Excel. Il secondo prototipo della funzione accetta tutti gli argomenti scalari.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Net Present Value( .05, [-10000, 1000, 900, 9500] );
Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### Number of Periods

**Sintassi:** x = Number of Periods( rate, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il numero di periodi per un investimento basato su pagamenti periodici, costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione NPER in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Number of Periods( .05 / 12, -2000, 100000 );

```

### Payment

**Sintassi:** x = Payment( rate, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il pagamento per un prestito basato su pagamenti costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione PMT in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Present Value

**Sintassi:** x = Present Value( rate, nper, pmt, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il valore presente di un investimento. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione PV in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**Sintassi:** x = Principal Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descrizione:** Restituisce il pagamento sul capitale per un dato periodo per un investimento basato su pagamenti periodici, costanti e un tasso di interesse costante. L&apos;argomento type è 0 per pagamenti a fine periodo e 1 per pagamenti a inizio periodo. Equivalente alla funzione PPMT in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Straight Line Depreciation

**Sintassi:** x = Straight Line Depreciation( cost, salvage, life )

**Descrizione:** Restituisce l&apos;ammortamento a quote costanti di un asset per un periodo. Equivalente alla funzione SLN in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Straight Line Depreciation( 1000, 100, 3 );

```

### Sum Of Years Digits Depreciation

**Sintassi:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**Descrizione:** Restituisce l&apos;ammortamento proporzionale all&apos;ordine numerico inverso degli anni di un asset per un periodo specifico. Equivalente alla funzione SYD in Microsoft Excel.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

