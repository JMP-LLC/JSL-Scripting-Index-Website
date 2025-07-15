# Constant Stress ALT Design



## 关联的构造器

### ALT Plan

**语法:** ALT Plan

### Factors

**语法:** Factors

**说明:** 在 CSALT 平台中创建因子表。

```jsl

Names Default To Here( 1 );
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

## 项消息

### Factor

**语法:** obj &lt;&lt; Factor

**说明:** 添加具有指定属性的因子。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Factor Name

**说明:** 设置因子的名称。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Factor Transformation( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Reciprocal|Log|Root|None )

**说明:** 为因子水平设置变换函数。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; High Test Condition

**说明:** 设置因子的最高试验水平。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; High Usage Condition

**说明:** 设置因子的使用条件的最高水平。该值可以与最低使用条件相同。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Low Test Condition

**说明:** 设置因子的最低试验水平。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Low Usage Condition

**说明:** 设置因子的使用条件的最低水平。该值可以与最高使用条件相同。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Number of Levels

**说明:** 设置因子的水平数。主要用于平衡设计。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建可重新生成该设计的脚本。

```jsl

Names Default To Here( 1 );
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

