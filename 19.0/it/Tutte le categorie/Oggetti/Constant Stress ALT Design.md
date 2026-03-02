# Constant Stress ALT Design



## Costruttori associati

### ALT Plan

**Sintassi:** ALT Plan

### Factors

**Sintassi:** Factors

**Descrizione:** Crea la tabella dei fattori nella piattaforma CSALT.

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

## Messaggi degli elementi

### Factor

**Sintassi:** obj &lt;&lt; Factor

**Descrizione:** Aggiunge un fattore con le proprietà specificate.

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

**Sintassi:** obj &lt;&lt; Factor Name

**Descrizione:** Imposta il nome del fattore.

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

**Sintassi:** obj &lt;&lt; Factor Transformation( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Reciprocal|Log|Root|None )

**Descrizione:** Imposta la funzione di trasformazione per i livelli del fattore.

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

**Sintassi:** obj &lt;&lt; High Test Condition

**Descrizione:** Imposta il livello di test più alto per il fattore.

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

**Sintassi:** obj &lt;&lt; High Usage Condition

**Descrizione:** Imposta il livello più alto per la condizione di utilizzo del fattore. Questo valore può corrispondere alla condizione di utilizzo minimo.

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

**Sintassi:** obj &lt;&lt; Low Test Condition

**Descrizione:** Imposta il livello di test più basso per il fattore.

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

**Sintassi:** obj &lt;&lt; Low Usage Condition

**Descrizione:** Imposta il livello più basso per la condizione di utilizzo del fattore. Questo valore può corrispondere alla condizione di utilizzo massimo.

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

**Sintassi:** obj &lt;&lt; Number of Levels

**Descrizione:** Imposta il numero di livelli per il fattore. Utilizzato principalmente per piani bilanciati.

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

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script che riprodurrà questo piano.

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

