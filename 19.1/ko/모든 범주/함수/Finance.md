# Finance



### Double Declining Balance

**구문:** x = Double Declining Balance( cost, salvage, life, period, &lt;factor=2&gt; )

**설명:** 이중정률감가상각 방법 또는 기타 감가상각 요인을 사용하여 지정된 기간의 자산 감가상각을 반환합니다. Microsoft Excel의 DDB 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Double Declining Balance( 10000, 100, 3, 2 );

```

### Future Value

**구문:** x = Future Value( rate, nper, pmt, &lt;pv=0&gt;, &lt;type=0&gt; )

**설명:** 기간, 고정 지급 및 고정 이자율을 기반으로 투자의 미래 가치를 반환합니다. type 인수는 납입시점이 기간 말이면 0이고 기간 초이면 1입니다. Microsoft Excel의 FV 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Future Value( .03, 12, 100, 0, 1 );

```

### Interest Payment

**구문:** x = Interest Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**설명:** 기간, 고정 지급 및 고정 이자율을 기반으로 지정된 기간 동안 투자의 이자 지급액을 반환합니다. type 인수는 납입시점이 기간 말이면 0이고 기간 초이면 1입니다. Microsoft Excel의 IPMT 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**구문:** x = Interest Rate( nper, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt;, &lt;guess=0.1&gt; )

**설명:** 대출 또는 투자의 기간별 이자율을 반환합니다. type 인수는 납입시점이 기간 말이면 0이고 기간 초이면 1입니다. Microsoft Excel의 RATE 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**구문:** x = Internal Rate of Return( values, &lt;guess=0.1&gt; ); x = Internal Rate of Return( guess, value1, value2, &lt;value3, ...&gt; )

**설명:** values 인수의 숫자가 나타내는 일련의 현금 흐름에 대한 내부 수익률(IRR)을 반환합니다. Microsoft Excel의 IRR 함수와 동등합니다. 함수의 두 번째 프로토타입은 모든 스칼라 인수를 허용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Internal Rate of Return( [-10000, 1000, 900, 950] );Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Modified Internal Rate of Return

**구문:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate ); x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, &lt;value3, ...&gt; )

**설명:** 투자 비용 및 현금 재투자 시 받은 이자를 고려하여 일련의 주기적 현금 흐름에 대한 수정된 내부 수익률(MIRR)을 반환합니다. Microsoft Excel의 MIRR 함수와 동등합니다. 함수의 두 번째 프로토타입은 모든 스칼라 인수를 허용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Net Present Value

**구문:** x = Net Present Value( rate, values ); x = Net Present Value( rate, value1, value2, &lt;value3, ...&gt; )

**설명:** 할인율, 일련의 미래 지급(음수 값) 및 수입(양수 값)을 사용하여 투자의 순 현재 가치를 반환합니다. values 인수는 1차원 행렬입니다. Microsoft Excel의 NPV 함수와 동등합니다. 함수의 두 번째 프로토타입은 모든 스칼라 인수를 허용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Net Present Value( .05, [-10000, 1000, 900, 9500] );Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### Number of Periods

**구문:** x = Number of Periods( rate, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**설명:** 기간, 고정 지급 및 고정 이자율을 기반으로 투자에 대한 기간 수를 반환합니다. type 인수는 납입시점이 기간 말이면 0이고 기간 초이면 1입니다. Microsoft Excel의 NPER 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Number of Periods( .05 / 12, -2000, 100000 );

```

### Payment

**구문:** x = Payment( rate, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**설명:** 고정 지급 및 고정 이자율을 기반으로 대출에 대한 상환액을 반환합니다. type 인수는 납입시점이 기간 말이면 0이고 기간 초이면 1입니다. Microsoft Excel의 PMT 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Present Value

**구문:** x = Present Value( rate, nper, pmt, &lt;fv=0&gt;, &lt;type=0&gt; )

**설명:** 고정 지급 투자의 현재 가치를 반환합니다. type 인수는 납입시점이 기간 말이면 0이고 기간 초이면 1입니다. Microsoft Excel의 PV 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**구문:** x = Principal Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**설명:** 기간, 고정 지급 및 고정 이자율을 기반으로 지정된 기간의 투자에 대한 원금 지급액을 반환합니다. type 인수는 납입시점이 기간 말이면 0이고 기간 초이면 1입니다. Microsoft Excel의 PPMT 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Straight Line Depreciation

**구문:** x = Straight Line Depreciation( cost, salvage, life )

**설명:** 한 기간 동안의 자산의 정액감가상각을 반환합니다. Microsoft Excel의 SLN 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Straight Line Depreciation( 1000, 100, 3 );

```

### Sum Of Years Digits Depreciation

**구문:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**설명:** 지정된 기간 동안의 자산의 연수합 감가상각을 반환합니다. Microsoft Excel의 SYD 함수와 동등합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

