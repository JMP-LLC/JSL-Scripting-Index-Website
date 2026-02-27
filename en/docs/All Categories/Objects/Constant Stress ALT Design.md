# Constant Stress ALT Design



## Associated Constructors

### ALT Plan

**Syntax:** ALT Plan

### Factors

**Syntax:** Factors

**Description:** Creates the Factor Table in the CSALT platform.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

## Item Messages

### Factor

**Syntax:** obj &lt;&lt; Factor

**Description:** Adds a factor with the specified properties.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Factor Name

**Syntax:** obj &lt;&lt; Factor Name

**Description:** Sets the name of the factor.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Factor Transformation

**Syntax:** obj &lt;&lt; Factor Transformation( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Reciprocal|Log|Root|None )

**Description:** Sets the transformation function for the levels of the factor.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### High Test Condition

**Syntax:** obj &lt;&lt; High Test Condition

**Description:** Sets the highest testing level for the factor.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### High Usage Condition

**Syntax:** obj &lt;&lt; High Usage Condition

**Description:** Sets the highest level for the usage condition for the factor. This value can be the same as the lowest usage condition.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Low Test Condition

**Syntax:** obj &lt;&lt; Low Test Condition

**Description:** Sets the lowest testing level for the factor.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Low Usage Condition

**Syntax:** obj &lt;&lt; Low Usage Condition

**Description:** Sets the lowest level for the usage condition for the factor. This value can be the same as the highest usage condition.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Number of Levels

**Syntax:** obj &lt;&lt; Number of Levels

**Description:** Sets the number of levels for the factor. Primarily used for balanced designs.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	));

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a Script that will reproduce this design.

```jsl

d = Constant Stress ALT Design(	Factors(		Factor(			Factor Name( "X1" ),			Number of Levels( 3 ),			Factor Transformation( "Arrhenius Celsius" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		),		Factor(			Factor Name( "X2" ),			Number of Levels( 3 ),			Factor Transformation( "Log" ),			Low Usage Condition( 20 ),			High Usage Condition( 30 ),			Low Test Condition( 90 ),			High Test Condition( 110 ),		)	),	ALT Plan(),	Save Script to Script Window);

```

