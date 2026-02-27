# Constant Stress ALT Design



## 연결된 생성자

### ALT Plan

**구문:** ALT Plan

### Factors

**구문:** Factors

**설명:** CSALT 플랫폼에서 요인 테이블을 생성합니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

## 항목 메시지

### Factor

**구문:** obj &lt;&lt; Factor

**설명:** 지정된 특성을 가진 요인을 추가합니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Factor Name

**구문:** obj &lt;&lt; Factor Name

**설명:** 요인 이름을 설정합니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Factor Transformation

**구문:** obj &lt;&lt; Factor Transformation( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Reciprocal|Log|Root|None )

**설명:** 요인 수준에 대한 변환 함수를 설정합니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### High Test Condition

**구문:** obj &lt;&lt; High Test Condition

**설명:** 요인의 최고 시험 수준을 설정합니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### High Usage Condition

**구문:** obj &lt;&lt; High Usage Condition

**설명:** 요인 사용 조건의 최고 수준을 설정합니다. 이 값은 최저 사용 조건과 동일할 수 있습니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Low Test Condition

**구문:** obj &lt;&lt; Low Test Condition

**설명:** 요인의 최저 시험 수준을 설정합니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Low Usage Condition

**구문:** obj &lt;&lt; Low Usage Condition

**설명:** 요인 사용 조건의 최저 수준을 설정합니다. 이 값은 최고 사용 조건과 동일할 수 있습니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Number of Levels

**구문:** obj &lt;&lt; Number of Levels

**설명:** 요인의 수준 수를 설정합니다. 주로 균형 설계에 사용됩니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 설계를 재현할 스크립트를 생성합니다.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	),	ALT Plan(),	Save Script to Script Window);

```

