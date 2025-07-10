# Finance



### Double Declining Balance

**Syntax:** x = Double Declining Balance( cost, salvage, life, period, <factor=2> )

**Beschreibung:** Gibt die Abschreibung eines Vermögenswerts für einen bestimmten Zeitraum zurück, wobei die geometrisch degressive Abschreibungsmethode oder ein anderer Abschreibungsfaktor verwendet wird. Entspricht der DDB-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Double Declining Balance( 10000, 100, 3, 2 );

```

### Future Value

**Syntax:** x = Future Value( rate, nper, pmt, <pv=0>, <type=0> )

**Beschreibung:** Gibt den zukünftigen Wert einer Annuität zurück, die auf regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz basiert. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der FV-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Future Value( .03, 12, 100, 0, 1 );

```

### Interest Payment

**Syntax:** x = Interest Payment( rate, per, nper, pv, <fv=0>, <type=0> )

**Beschreibung:** Gibt die Zinszahlung für einen bestimmten Zeitraum einer Annuität basierend auf regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der IPMT-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**Syntax:** x = Interest Rate( nper, pmt, pv, <fv=0>, <type=0>, <guess=0.1> )

**Beschreibung:** Gibt den Zinssatz pro Zeitraum für eine Annuität zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der RATE-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**Syntax:** x = Internal Rate of Return( values, <guess=0.1> );

x = Internal Rate of Return( guess, value1, value2, <value3, ...> )

**Beschreibung:** Gibt den internen Ertragssatz für eine Folge von Zahlungsflüssen zurück, die von den Zahlen im Argument values dargestellt werden. Entspricht der IRR-Funktion in Microsoft Excel. Der zweite Prototyp der Funktion akzeptiert alle skalaren Argumente.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Internal Rate of Return( [-10000, 1000, 900, 950] );
Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Modified Internal Rate of Return

**Syntax:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate );

x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, <value3, ...> )

**Beschreibung:** Gibt den geänderten internen Ertragssatz für eine Folge regelmäßiger Zahlungsflüsse zurück, wobei die Investitionskosten sowie die bei der Wiederanlage von Kapital erhaltenen Zinsen berücksichtigt werden. Entspricht der MIRR-Funktion in Microsoft Excel. Der zweite Prototyp der Funktion akzeptiert alle skalaren Argumente.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );
Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Net Present Value

**Syntax:** x = Net Present Value( rate, values );

x = Net Present Value( rate, value1, value2, <value3, ...> )

**Beschreibung:** Gibt den aktuellen Nettowert einer Annuität zurück, wobei ein Diskontsatz und eine Reihe künftiger Auszahlungen (negative Werte) und Einzahlungen (positive Werte) berücksichtigt werden. Das Argument values ist eine eindimensionale Matrix. Entspricht der NPV-Funktion in Microsoft Excel. Der zweite Prototyp der Funktion akzeptiert alle skalaren Argumente.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Net Present Value( .05, [-10000, 1000, 900, 9500] );
Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### Number of Periods

**Syntax:** x = Number of Periods( rate, pmt, pv, <fv=0>, <type=0> )

**Beschreibung:** Gibt die Anzahl von Zeiträumen für eine Annuität bei regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der NPER-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Number of Periods( .05 / 12, -2000, 100000 );

```

### Payment

**Syntax:** x = Payment( rate, nper, pv, <fv=0>, <type=0> )

**Beschreibung:** Gibt die Zahlung für ein Darlehen bei konstanten Zahlungen und einem konstanten Zinssatz zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der PMT-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Present Value

**Syntax:** x = Present Value( rate, nper, pmt, <fv=0>, <type=0> )

**Beschreibung:** Gibt den aktuellen Wert einer Annuität zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der PV-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**Syntax:** x = Principal Payment( rate, per, nper, pv, <fv=0>, <type=0> )

**Beschreibung:** Gibt die Kapitalzahlung für einen bestimmten Zeitraum einer Annuität bei regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der PPMT-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Straight Line Depreciation

**Syntax:** x = Straight Line Depreciation( cost, salvage, life )

**Beschreibung:** Gibt die lineare Abschreibung eines Vermögenswerts für einen Zeitraum zurück. Entspricht der SLN-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Straight Line Depreciation( 1000, 100, 3 );

```

### Sum Of Years Digits Depreciation

**Syntax:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**Beschreibung:** Gibt die arithmetisch-degressive Abschreibung eines Vermögenswerts für einen bestimmten Zeitraum zurück. Entspricht der SYD-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

