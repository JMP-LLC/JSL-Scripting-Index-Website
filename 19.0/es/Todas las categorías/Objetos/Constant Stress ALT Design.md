# Constant Stress ALT Design



## Constructores asociados

### ALT Plan

**Sintaxis:** ALT Plan

### Factors

**Sintaxis:** Factors

**Descripción:** Crea la tabla de factores en la plataforma CSALT.

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

## Mensajes del elemento

### Factor

**Sintaxis:** obj &lt;&lt; Factor

**Descripción:** Agrega un factor con las propiedades especificadas.

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

**Sintaxis:** obj &lt;&lt; Factor Name

**Descripción:** Establece el nombre del factor.

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

**Sintaxis:** obj &lt;&lt; Factor Transformation( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Reciprocal|Log|Root|None )

**Descripción:** Establece la función de transformación para los niveles del factor.

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

**Sintaxis:** obj &lt;&lt; High Test Condition

**Descripción:** Establece el nivel de prueba más alto para el factor.

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

**Sintaxis:** obj &lt;&lt; High Usage Condition

**Descripción:** Establece el nivel más alto para la condición de uso del factor. Este valor puede ser el mismo que la condición de uso más baja.

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

**Sintaxis:** obj &lt;&lt; Low Test Condition

**Descripción:** Establece el nivel de prueba más bajo para el factor.

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

**Sintaxis:** obj &lt;&lt; Low Usage Condition

**Descripción:** Establece el nivel más bajo para la condición de uso del factor. Este valor puede ser el mismo que la condición de uso más alta.

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

**Sintaxis:** obj &lt;&lt; Number of Levels

**Descripción:** Establece el número de niveles para el factor. Se utiliza principalmente para diseños equilibrados.

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

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script que reproducirá este diseño.

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

