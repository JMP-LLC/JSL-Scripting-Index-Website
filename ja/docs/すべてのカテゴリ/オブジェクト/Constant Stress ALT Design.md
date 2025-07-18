# Constant Stress ALT Design



## 関連するコンストラクター

### ALT Plan

**構文:** ALT Plan

### Factors

**構文:** Factors

**説明:** 「一定ストレス加速寿命試験」プラットフォームで因子の表を作成する。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	)
);

```

## 項目のメッセージ

### Factor

**構文:** obj &lt;&lt; Factor

**説明:** 指定された設定を持つ因子を1つ追加する。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	)
);

```

### Factor Name

**構文:** obj &lt;&lt; Factor Name

**説明:** 因子の名前を指定する。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	)
);

```

### Factor Transformation

**構文:** obj &lt;&lt; Factor Transformation( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Reciprocal|Log|Root|None )

**説明:** 因子に対する変換式を指定する。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	)
);

```

### High Test Condition

**構文:** obj &lt;&lt; High Test Condition

**説明:** 因子の最高試験水準を指定する。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	)
);

```

### High Usage Condition

**構文:** obj &lt;&lt; High Usage Condition

**説明:** 因子の使用条件に対する最高値を指定する。最低使用条件と同じでもかまわない。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	)
);

```

### Low Test Condition

**構文:** obj &lt;&lt; Low Test Condition

**説明:** 因子の最低試験水準を指定する。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	)
);

```

### Low Usage Condition

**構文:** obj &lt;&lt; Low Usage Condition

**説明:** 因子の使用条件に対する最低値を指定する。最高使用条件と同じでもかまわない。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	)
);

```

### Number of Levels

**構文:** obj &lt;&lt; Number of Levels

**説明:** 因子の水準数を指定する。主に釣合い型計画を作成するときに、因子の水準数についての情報が使われる。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	)
);

```

### Save Script to Script Window

**構文:** obj &lt;&lt; Save Script to Script Window

**説明:** この計画を再現するスクリプトを作成する。

```jsl

d = Constant Stress ALT Design(
	Factors(
		Factor(
			Factor Name( "X1" ),
			Number of Levels( 3 ),
			Factor Transformation( "Arrhenius Celsius" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		),
		Factor(
			Factor Name( "X2" ),
			Number of Levels( 3 ),
			Factor Transformation( "Log" ),
			Low Usage Condition( 20 ),
			High Usage Condition( 30 ),
			Low Test Condition( 90 ),
			High Test Condition( 110 ),

		)
	),
	ALT Plan(),
	Save Script to Script Window
);

```

