# Constant Stress ALT Design



### ALT Plan

**Syntaxe :** ALT Plan

### Factor

**Syntaxe :** obj << Factor

**Description :** Ajoute un facteur avec les propriétés spécifiées.

```js

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

**Syntaxe :** obj << Factor Name

**Description :** Définit le nom du facteur.

```js

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

**Syntaxe :** obj << Factor Transformation( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Reciprocal|Log|Root|None )

**Description :** Définit la fonction de transformation pour les niveaux du facteur.

```js

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

### Factors

**Syntaxe :** Factors

**Description :** Crée le tableau des facteurs dans la plate-forme CSALT.

```js

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

**Syntaxe :** obj << High Test Condition

**Description :** Définit le niveau de test le plus élevé pour le facteur.

```js

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

**Syntaxe :** obj << High Usage Condition

**Description :** Définit le niveau le plus élevé pour la condition d&apos;utilisation du facteur. Cette valeur peut être identique à la condition d&apos;utilisation la plus basse.

```js

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

**Syntaxe :** obj << Low Test Condition

**Description :** Définit le niveau de test le plus bas pour le facteur.

```js

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

**Syntaxe :** obj << Low Usage Condition

**Description :** Définit le niveau le plus bas pour la condition d&apos;utilisation du facteur. Cette valeur peut être identique à la condition d&apos;utilisation la plus élevée.

```js

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

**Syntaxe :** obj << Number of Levels

**Description :** Définit le nombre de niveaux pour le facteur. Principalement utilisé pour les plans équilibrés.

```js

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

**Syntaxe :** obj << Save Script to Script Window

**Description :** Créez un script qui reproduira ce plan.

```js

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

