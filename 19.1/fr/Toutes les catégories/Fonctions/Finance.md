# Finance



### Double Declining Balance

**Syntaxe :** x = Double Declining Balance( cost, salvage, life, period, &lt;factor=2&gt; )

**Description :** Renvoie l’amortissement d’un capital sur une période donnée à l’aide la méthode dégressive à taux double ou d’un autre facteur d’amortissement. Équivalent à la fonction DDB de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Double Declining Balance( 10000, 100, 3, 2 );

```

### Future Value

**Syntaxe :** x = Future Value( rate, nper, pmt, &lt;pv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie la valeur future d’un investissement en se basant sur des paiements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction FV de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Future Value( .03, 12, 100, 0, 1 );

```

### Interest Payment

**Syntaxe :** x = Interest Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie le paiement des intérêts d’un investissement sur une période donnée en se basant sur des paiements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction IPMT de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**Syntaxe :** x = Interest Rate( nper, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt;, &lt;guess=0.1&gt; )

**Description :** Renvoie le taux d’intérêt d’une annuité par période. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction RATE de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**Syntaxe :** x = Internal Rate of Return( values, &lt;guess=0.1&gt; ); x = Internal Rate of Return( guess, value1, value2, &lt;value3, ...&gt; )

**Description :** Renvoie le taux de rentabilité interne pour une série de flux de trésorerie représentée par les chiffres dans l’argument values. Équivalent à la fonction IRR de Microsoft Excel. Le deuxième prototype de la fonction n’accepte que des arguments scalaires.

**JMP Version ajoutée :** Avant la version 14

```jsl

Internal Rate of Return( [-10000, 1000, 900, 950] );Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Modified Internal Rate of Return

**Syntaxe :** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate ); x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, &lt;value3, ...&gt; )

**Description :** Renvoie le taux de rentabilité interne pour une série de flux de trésorerie en fonction du coût de l&apos;investissement et de l&apos;intérêt sur le réinvestissement des liquidités. Équivalent à la fonction MIRR de Microsoft Excel. Le deuxième prototype de la fonction n’accepte que des arguments scalaires.

**JMP Version ajoutée :** Avant la version 14

```jsl

Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Net Present Value

**Syntaxe :** x = Net Present Value( rate, values ); x = Net Present Value( rate, value1, value2, &lt;value3, ...&gt; )

**Description :** Renvoie la valeur actuelle nette d&apos;un investissement calculée en fonction d’un taux d’escompte et d’une série de débits (valeurs négatives) et de crédits (valeurs positives) futurs. L’argument values est une matrice unidimensionnelle. Équivalent à la fonction NPV de Microsoft Excel. Le deuxième prototype de la fonction n’accepte que des arguments scalaires.

**JMP Version ajoutée :** Avant la version 14

```jsl

Net Present Value( .05, [-10000, 1000, 900, 9500] );Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### Number of Periods

**Syntaxe :** x = Number of Periods( rate, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie le nombre de périodes d’un investissement en se basant sur des paiements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction NPER de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Number of Periods( .05 / 12, -2000, 100000 );

```

### Payment

**Syntaxe :** x = Payment( rate, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie le remboursement d’un prêt en se basant sur des paiements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction PMT de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Present Value

**Syntaxe :** x = Present Value( rate, nper, pmt, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie la valeur actuelle d’un investissement. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction PV de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**Syntaxe :** x = Principal Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Description :** Renvoie la part de remboursement du capital total sur une période donnée en se basant sur des remboursements et un taux d’intérêt constants. L’argument type est 0 pour les paiements en fin de période et 1 pour les paiements en début de période. Équivalent à la fonction PPMT de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Straight Line Depreciation

**Syntaxe :** x = Straight Line Depreciation( cost, salvage, life )

**Description :** Renvoie l’amortissement linéaire d’un capital sur une période. Équivalent à la fonction SLN de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Straight Line Depreciation( 1000, 100, 3 );

```

### Sum Of Years Digits Depreciation

**Syntaxe :** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**Description :** Renvoie l’amortissement d’un capital sur une période donnée calculé selon la méthode « sum-of-years&apos; digits ». Équivalent à la fonction SYD de Microsoft Excel.

**JMP Version ajoutée :** Avant la version 14

```jsl

Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

