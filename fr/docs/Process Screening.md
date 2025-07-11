# Process Screening



## Chart Options Drift Graph

### Circle Alarm Points

**Syntaxe :** obj << Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Description :** Affiche ou masque des cercles rouges autour des points en état d&apos;alarme. Le code d&apos;alarme correspondant est affiché à côté de chaque point encerclé. Cette option n&apos;est pas disponible pour les graphiques des dérives. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

### Connect Points

**Syntaxe :** obj << Chart Options as Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Description :** Affiche ou masque les droites qui relient les points. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

### Dispersion Chart

**Syntaxe :** obj << Chart Options as Selected( Dispersion Chart( state=0|1 ) ); 

 obj << Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Description :** Affiche ou masque une étendue, un écart-type, ou une carte à étendue mobile en plus de la carte de contrôle pour chaque processus. Cette option n&apos;est pas disponible pour les graphiques des dérives.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

### Frame Size

**Syntaxe :** obj << Chart Options as Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options for Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Description :** Définit la taille du graphique. "500,170" par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

### Number of Plots Across

**Syntaxe :** obj << Chart Options as Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options for Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Description :** Spécifie la mise en page pour les graphiques. "1" par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

### Remove

**Syntaxe :** obj << Chart Options as Selected( Remove ); 

 obj << Chart Options for Selected( Remove ); 

 obj << Chart Options Drift Graph( Remove )

**Description :** Supprime les graphiques du rapport.

**JMP Version ajoutée :** 14

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

### Show Centerline

**Syntaxe :** obj << Chart Options as Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Description :** Affiche ou masque une ligne verte pleine représentant la moyenne du processus. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

### Show Control Limits

**Syntaxe :** obj << Chart Options as Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Description :** Affiche ou masque les limites de contrôle supérieure et inférieure. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

### Show Markers

**Syntaxe :** obj << Chart Options as Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Description :** Affiche ou masque les points individuels sur les graphiques.

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

### Show Spec Limits

**Syntaxe :** obj << Chart Options as Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Description :** Affiche ou masque les limites de spécification supérieure et inférieure sous la forme de lignes bleues pointillées.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

### Show Zones

**Syntaxe :** obj << Chart Options as Selected( Show Zones( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Zones( state=0|1 ) )

**Description :** Affiche ou masque les zones à un et deux écarts-types sur les graphiques. Cette option n&apos;est pas disponible pour les graphiques des dérives.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

### V Axis Label

**Syntaxe :** obj << Chart Options as Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options for Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Description :** Affiche ou masque l&apos;étiquette de l&apos;axe vertical sur chaque graphique. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

## Chart Options Graphlet

### Circle Alarm Points

**Syntaxe :** obj << Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Description :** Affiche ou masque des cercles rouges autour des points en état d&apos;alarme. Le code d&apos;alarme correspondant est affiché à côté de chaque point encerclé. Cette option n&apos;est pas disponible pour les graphiques des dérives. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

### Connect Points

**Syntaxe :** obj << Chart Options as Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Description :** Affiche ou masque les droites qui relient les points. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

### Dispersion Chart

**Syntaxe :** obj << Chart Options as Selected( Dispersion Chart( state=0|1 ) ); 

 obj << Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Description :** Affiche ou masque une étendue, un écart-type, ou une carte à étendue mobile en plus de la carte de contrôle pour chaque processus. Cette option n&apos;est pas disponible pour les graphiques des dérives.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

### Frame Size

**Syntaxe :** obj << Chart Options as Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options for Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Description :** Définit la taille du graphique. "500,170" par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

### Number of Plots Across

**Syntaxe :** obj << Chart Options as Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options for Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Description :** Spécifie la mise en page pour les graphiques. "1" par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

### Remove

**Syntaxe :** obj << Chart Options as Selected( Remove ); 

 obj << Chart Options for Selected( Remove ); 

 obj << Chart Options Drift Graph( Remove )

**Description :** Supprime les graphiques du rapport.

**JMP Version ajoutée :** 14

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

### Show Centerline

**Syntaxe :** obj << Chart Options as Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Description :** Affiche ou masque une ligne verte pleine représentant la moyenne du processus. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

### Show Control Limits

**Syntaxe :** obj << Chart Options as Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Description :** Affiche ou masque les limites de contrôle supérieure et inférieure. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

### Show Markers

**Syntaxe :** obj << Chart Options as Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Description :** Affiche ou masque les points individuels sur les graphiques.

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

### Show Spec Limits

**Syntaxe :** obj << Chart Options as Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Description :** Affiche ou masque les limites de spécification supérieure et inférieure sous la forme de lignes bleues pointillées.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

### Show Zones

**Syntaxe :** obj << Chart Options as Selected( Show Zones( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Zones( state=0|1 ) )

**Description :** Affiche ou masque les zones à un et deux écarts-types sur les graphiques. Cette option n&apos;est pas disponible pour les graphiques des dérives.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

### V Axis Label

**Syntaxe :** obj << Chart Options as Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options for Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Description :** Affiche ou masque l&apos;étiquette de l&apos;axe vertical sur chaque graphique. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

## Chart Options as Selected

### Circle Alarm Points

**Syntaxe :** obj << Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Description :** Affiche ou masque des cercles rouges autour des points en état d&apos;alarme. Le code d&apos;alarme correspondant est affiché à côté de chaque point encerclé. Cette option n&apos;est pas disponible pour les graphiques des dérives. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

### Connect Points

**Syntaxe :** obj << Chart Options as Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Description :** Affiche ou masque les droites qui relient les points. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

### Dispersion Chart

**Syntaxe :** obj << Chart Options as Selected( Dispersion Chart( state=0|1 ) ); 

 obj << Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Description :** Affiche ou masque une étendue, un écart-type, ou une carte à étendue mobile en plus de la carte de contrôle pour chaque processus. Cette option n&apos;est pas disponible pour les graphiques des dérives.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

### Frame Size

**Syntaxe :** obj << Chart Options as Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options for Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Description :** Définit la taille du graphique. "500,170" par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

### Number of Plots Across

**Syntaxe :** obj << Chart Options as Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options for Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Description :** Spécifie la mise en page pour les graphiques. "1" par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

### Remove

**Syntaxe :** obj << Chart Options as Selected( Remove ); 

 obj << Chart Options for Selected( Remove ); 

 obj << Chart Options Drift Graph( Remove )

**Description :** Supprime les graphiques du rapport.

**JMP Version ajoutée :** 14

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

### Show Centerline

**Syntaxe :** obj << Chart Options as Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Description :** Affiche ou masque une ligne verte pleine représentant la moyenne du processus. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

### Show Control Limits

**Syntaxe :** obj << Chart Options as Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Description :** Affiche ou masque les limites de contrôle supérieure et inférieure. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

### Show Markers

**Syntaxe :** obj << Chart Options as Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Description :** Affiche ou masque les points individuels sur les graphiques.

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

### Show Spec Limits

**Syntaxe :** obj << Chart Options as Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Description :** Affiche ou masque les limites de spécification supérieure et inférieure sous la forme de lignes bleues pointillées.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

### Show Zones

**Syntaxe :** obj << Chart Options as Selected( Show Zones( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Zones( state=0|1 ) )

**Description :** Affiche ou masque les zones à un et deux écarts-types sur les graphiques. Cette option n&apos;est pas disponible pour les graphiques des dérives.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

### V Axis Label

**Syntaxe :** obj << Chart Options as Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options for Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Description :** Affiche ou masque l&apos;étiquette de l&apos;axe vertical sur chaque graphique. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

## Chart Options for Selected

### Circle Alarm Points

**Syntaxe :** obj << Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**Description :** Affiche ou masque des cercles rouges autour des points en état d&apos;alarme. Le code d&apos;alarme correspondant est affiché à côté de chaque point encerclé. Cette option n&apos;est pas disponible pour les graphiques des dérives. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

### Connect Points

**Syntaxe :** obj << Chart Options as Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options for Selected( Connect Points( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Connect Points( state=0|1 ) )

**Description :** Affiche ou masque les droites qui relient les points. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

### Dispersion Chart

**Syntaxe :** obj << Chart Options as Selected( Dispersion Chart( state=0|1 ) ); 

 obj << Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**Description :** Affiche ou masque une étendue, un écart-type, ou une carte à étendue mobile en plus de la carte de contrôle pour chaque processus. Cette option n&apos;est pas disponible pour les graphiques des dérives.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

### Frame Size

**Syntaxe :** obj << Chart Options as Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options for Selected( Frame Size( width=500, height=170 ) ); 

 obj << Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**Description :** Définit la taille du graphique. "500,170" par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

### Number of Plots Across

**Syntaxe :** obj << Chart Options as Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options for Selected( Number of Plots Across( number=1 ) ); 

 obj << Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**Description :** Spécifie la mise en page pour les graphiques. "1" par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

### Remove

**Syntaxe :** obj << Chart Options as Selected( Remove ); 

 obj << Chart Options for Selected( Remove ); 

 obj << Chart Options Drift Graph( Remove )

**Description :** Supprime les graphiques du rapport.

**JMP Version ajoutée :** 14

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

### Show Centerline

**Syntaxe :** obj << Chart Options as Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Centerline( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**Description :** Affiche ou masque une ligne verte pleine représentant la moyenne du processus. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

### Show Control Limits

**Syntaxe :** obj << Chart Options as Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Control Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**Description :** Affiche ou masque les limites de contrôle supérieure et inférieure. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

### Show Markers

**Syntaxe :** obj << Chart Options as Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Markers( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Markers( state=0|1 ) )

**Description :** Affiche ou masque les points individuels sur les graphiques.

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

### Show Spec Limits

**Syntaxe :** obj << Chart Options as Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Spec Limits( state=0|1 ) ); 

 obj << Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**Description :** Affiche ou masque les limites de spécification supérieure et inférieure sous la forme de lignes bleues pointillées.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

### Show Zones

**Syntaxe :** obj << Chart Options as Selected( Show Zones( state=0|1 ) ); 

 obj << Chart Options for Selected( Show Zones( state=0|1 ) )

**Description :** Affiche ou masque les zones à un et deux écarts-types sur les graphiques. Cette option n&apos;est pas disponible pour les graphiques des dérives.

**JMP Version ajoutée :** 17

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

### V Axis Label

**Syntaxe :** obj << Chart Options as Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options for Selected( V Axis Label( state=0|1 ) ); 

 obj << Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**Description :** Affiche ou masque l&apos;étiquette de l&apos;axe vertical sur chaque graphique. Actif par défaut.

**JMP Version ajoutée :** 17

**Exemple d'options des graphiques des dérives**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**Exemples d'options de graphiques de sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2},
		{:DIAMETER, "A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**Exemples d'options de graphiques selon sélection**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

### Action

**Syntaxe :** obj << Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Action Lower Quantile Prob

**Syntaxe :** obj = Process Screening(...Action Lower Quantile Prob( number=. )...)

**Description :** Spécifie une probabilité qui détermine la valeur pour la limite d&apos;action. Pour les processus de dénombrement, si la limite d&apos;action n&apos;est pas spécifiée dans la table des limites, elle est définie à partir du quantile estimé en fonction de cette probabilité. "." par défaut.

**JMP Version ajoutée :** 19

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Action Upper Quantile Prob

**Syntaxe :** obj = Process Screening(...Action Upper Quantile Prob( number=0.9985 )...)

**Description :** Spécifie une probabilité qui détermine la valeur pour la limite d&apos;action. Pour les processus de dénombrement, si la limite d&apos;action n&apos;est pas spécifiée dans la table des limites, elle est définie à partir du quantile estimé en fonction de cette probabilité. "0.9985" par défaut.

**JMP Version ajoutée :** 19

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Alarm Graph

**Syntaxe :** obj << Alarm Graph( state=0|1 )

**Description :** Affiche ou masque un graphique des alarmes, avec les processus qui ont des alarmes sur l&apos;axe Y, et l&apos;occurrence chronologique sur l&apos;axe X.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);

```

### Alert Lower Quantile Prob

**Syntaxe :** obj = Process Screening(...Alert Lower Quantile Prob( number=. )...)

**Description :** Spécifie une probabilité qui détermine la valeur pour la limite d&apos;alerte. Pour les processus de dénombrement, si la limite d&apos;alerte n&apos;est pas spécifiée dans la table des limites, elle est définie à partir du quantile estimé en fonction de cette probabilité. "." par défaut.

**JMP Version ajoutée :** 19

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Alert Upper Quantile Prob

**Syntaxe :** obj = Process Screening(...Alert Upper Quantile Prob( number=0.975 )...)

**Description :** Spécifie une probabilité qui détermine la valeur pour la limite d&apos;alerte. Pour les processus de dénombrement, si la limite d&apos;alerte n&apos;est pas spécifiée dans la table des limites, elle est définie à partir du quantile estimé en fonction de cette probabilité. "0.975" par défaut.

**JMP Version ajoutée :** 19

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj << Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntaxe :** obj = Process Screening(...<By( column(s) )>...)

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);

```

### Chart Options Drift Graph

**Syntaxe :** obj << Chart Options Drift Graph( options )

**Description :** Vous permet d&apos;ajouter des options supplémentaires sous forme de script pour les graphiques générés par l&apos;option Graphique des dérives sélectionné.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ), Connect Points( 0 ) );

```

### Chart Options Graphlet

**Syntaxe :** obj << Chart Options Graphlet( options )

**Description :** Vous permet d&apos;ajouter des options supplémentaires sous forme de script pour les mini-graphiques.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Process Variables( :NPN1, :PNP1, :PNP2, :NPN2, :PNP3 ),
	Subgroup( :lot_id, :wafer ),
	Control Chart Type( "XBar and R" ),
	Process Performance Graph( 1 ),
	Chart Options Graphlet( Show Markers( 1 ) ),
	SendToReport(
		Dispatch( {"Process Performance Graph"}, "ProcessScreening Graph", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 4 ),
				Index Row( 4 ),
				UniqueID( 4 ),
				FoundPt( {320, 564} ),
				Origin( {1, 0.24} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);

```

### Chart Options as Selected

**Syntaxe :** obj << Chart Options as Selected( options )

**Description :** Vous permet d&apos;ajouter des options supplémentaires sous forme de script pour les graphiques générés par l&apos;option Afficher les graphiques selon sélection.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

### Chart Options for Selected

**Syntaxe :** obj << Chart Options for Selected( options )

**Description :** Vous permet d&apos;ajouter des options supplémentaires sous forme de script pour les graphiques générés par l&apos;option Afficher les graphiques selon sélection.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

### Color Out of Spec Values

**Syntaxe :** obj << Color Out of Spec Values

**Description :** Colorie les valeurs dans la table de données en fonction des limites de spécification. Le bleu indique que la valeur est inférieure à la limite de spécification inférieure. Le rouge indique que la valeur est supérieure à la limite de spécification supérieure.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :PNP3, :IVP1, :IVP2 ) );
obj << Color Out of Spec Values;

```

### Color Selected Items

**Syntaxe :** obj << Color Selected Items( color )

**Description :** Applique la couleur sélectionnée aux lignes sélectionnées dans le tableau récapitulatif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Find and Select( "PNP1" ),
	Color Selected Items( "Blue" )
);
obj << Find and Select( "NPN1" );
obj << Color Selected Items( "Red" );
obj << Find and Select( "NPN2" );

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Control Chart Builder

**Syntaxe :** obj << Control Chart Builder

**Description :** Ouvre une fenêtre de rapport Générateur de carte de contrôle pour les processus que vous avez sélectionnés dans le tableau récapitulatif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Control Chart Builder
);

```

### Control Chart Type

**Syntaxe :** obj = Process Screening(...Control Chart Type( "Indiv and MR"|"XBar and R"|"XBar and S"|"XBar MR and R"|"XBar MR and S"|"Count"|"Nonnegative Continuous"|"Proportion" )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie l&apos;un des cinq types de calculs de carte de contrôle. Le type par défaut est « Indiv. et Étendue mobile ».

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" )
);

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Copy Script;

```

### Count

**Syntaxe :** obj << Count( state=0|1 )

**Description :** Affiche ou masque la colonne Dénombrement dans le tableau récapitulatif. Cette colonne contient le nombre d&apos;observations. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Count( 0 );

```

### Cp

**Syntaxe :** obj << Cp( state=0|1 )

**Description :** Affiche ou masque la colonne Cp dans le tableau récapitulatif. Cette colonne contient la capabilité potentielle si les problèmes de cible et de dérive sont résolus.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cp( 1 ) );

```

### Cpk

**Syntaxe :** obj << Cpk( state=0|1 )

**Description :** Affiche ou masque la colonne Cpk dans le tableau récapitulatif. Cette colonne contient l&apos;indice de capabilité Cpk à court terme basé sur le sigma intra ou le sigma inter et intra et supposant une distribution normale. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cpk( 0 ) );
Wait( 1 );
obj << Cpk( 1 );

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Data Table Window;

```

### Drift Alpha

**Syntaxe :** obj = Process Screening(...Drift Alpha( number=. )...)

**Description :** Spécifie le poids de lissage de Holt-Winters pour la position dans la détection de la dérive. Cette valeur est généralement estimée, plutôt que spécifiée. Si elle est spécifiée, vous devez la spécifier dans le script de lancement. "." par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Alpha( .6 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Beta

**Syntaxe :** obj = Process Screening(...Drift Beta( number=.05 )...)

**Description :** Specifies the weight that is used in the Holt Double-Exponential Smoother for drift detection. ".05" par défaut.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Beta( .1 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Graph Selected

**Syntaxe :** obj << Drift Graph Selected( <{ process list }> )

**Description :** Affiche un graphique des dérives pour chaque processus sélectionné dans le tableau récapitulatif. Les valeurs tracées représentent les estimations de pente issues d&apos;un modèle de lissage exponentiel double de Holt.

**JMP Version ajoutée :** 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), );
Wait( 1 );
obj << Drift Graph Selected( {{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}} );

```

### Drift Summaries

**Syntaxe :** obj << Drift Summaries( state=0|1 )

**Description :** Affiche ou masque les colonnes récapitulatives de dérive dans le tableau récapitulatif. Ces colonnes contiennent la dérive supérieure moyenne, la dérive inférieure moyenne et la dérive absolue moyenne.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Summaries( 1 )
);

```

### Enable All Tests

**Syntaxe :** obj << Enable All Tests

**Description :** Inclut tous les tests de Nelson dans les taux et les dénombrements d&apos;alarmes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Enable All Tests
);

```

### Expected Out of Spec Rate

**Syntaxe :** obj << Expected Out of Spec Rate( state=0|1 )

**Description :** Affiche ou masque la colonne Proportion attendue de valeurs hors spécifications dans le tableau récapitulatif. Cette colonne contient la proportion attendue d&apos;observations qui se trouvent en dehors des limites de spécification. La valeur de la Proportion attendue de valeurs hors spécifications suppose un processus stable et normalement distribué et utilise le sigma global.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Expected Out of Spec Rate( 1 )
);

```

### Filter Where

**Syntaxe :** obj << Filter Where( condition )

**Description :** Filtre et supprime les processus dans le tableau récapitulatif. Le filtre est basé sur la condition spécifiée.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Filter Where( Alarm Rate > 0 )
);
Wait( 1 );
obj << Reset Filter;
obj << Filter Where( Stability Index > 1.3 | Mean <= 4.3 );

```

### Find and Select

**Syntaxe :** obj << Find and Select( condition )

**Description :** Recherche toutes les colonnes et groupes où la chaîne de recherche apparaît, et sélectionne ces processus dans le tableau récapitulatif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);

```

### Get By Levels

**Syntaxe :** obj << Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj << Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container",
			(gb << Get Container) << Get Picture
		)
	)
);

```

### Get Data Table

**Syntaxe :** obj << Get Data Table

**Description :** Renvoie une référence à la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj << Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntaxe :** obj << Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj << Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntaxe :** obj << Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate(
	X( :height ),
	Y( :weight ),
	Where( :age < 14 & :height > 60 )
);
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Goal Plot

**Syntaxe :** obj << Goal Plot( state=0|1 )

**Description :** Affiche ou masque un graphique qui contient un point pour chaque variable. Le décalage moyen normalisé aux spécifications se trouve sur l&apos;axe horizontal et l&apos;écart-type normalisé aux spécifications sur l&apos;axe vertical. Cette option n&apos;est disponible que si des limites de spécification sont définies pour au moins une variable de processus.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Goal Plot( 1 ) );

```

### Grouping

**Syntaxe :** obj = Process Screening(...<Grouping( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Analyse chaque variable de processus à chaque combinaison de niveaux des colonnes de groupement spécifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### KSigma

**Syntaxe :** obj = Process Screening(...KSigma( number=3 )...)

**Description :** Spécifie le nombre d&apos;écarts-types (en termes de sigma) auquel les limites de contrôle doivent se trouver à partir de la ligne centrale. "3" par défaut.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( X( :Process ), Y( Eval( 5 :: 132 ) ), K Sigma( 4 ) );

```

### KSigma for Proportion

**Syntaxe :** obj = Process Screening(...KSigma for Proportion( number=3 )...)

**Description :** Spécifie le nombre d&apos;écarts-types (en termes de sigma) auquel les limites de contrôle doivent se trouver à partir de la ligne centrale. "3" par défaut.

**JMP Version ajoutée :** 19

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	K Sigma for Proportion( 2.5 ),
	Use Upper Limit( 1 ),
	Use Lower Limit( 1 )
);

```

### Keep Distribution Details

**Syntaxe :** obj = Process Screening(...Keep Distribution Details( state=0|1 )...)

**Description :** Conserve les estimations des paramètres et les détails des quantiles d&apos;ajustement de toutes les distributions, de manière qu&apos;ils puissent être affichés dans le rapport.

**JMP Version ajoutée :** 19

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Keep Distribution Details( 1 ),
	SendToReport(
		Dispatch( {}, "Poisson λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin σ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB σ", NumberColBox, {Visibility( "Visible" )} )
	)
);

```

### Largest Downshift

**Syntaxe :** obj << Largest Downshift( state=0|1 )

**Description :** Affiche ou masque les colonnes Plus grand décalage inférieur et Position du décalage inférieur dans le tableau récapitulatif. Ces colonnes contiennent le plus grand décalage inférieur, dans les séries, qui dépasse une unité sigma intra, ainsi que la position à laquelle ce décalage s&apos;est produit dans la série.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Largest Downshift( 1 )
);

```

### Largest Upshift

**Syntaxe :** obj << Largest Upshift( state=0|1 )

**Description :** Affiche ou masque les colonnes Plus grand décalage supérieur et Position du décalage supérieur dans le tableau récapitulatif. Ces colonnes contiennent le plus grand décalage supérieur, dans les séries, qui dépasse une unité sigma intra, ainsi que la position à laquelle ce décalage s&apos;est produit dans la série.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Largest Upshift( 1 )
);

```

### Latest Out of Spec

**Syntaxe :** obj << Latest Out of Spec( state=0|1 )

**Description :** Affiche ou masque la colonne Dernière valeur hors spécifications dans le tableau récapitulatif. Cette colonne contient le nombre d&apos;observations qui se trouvent entre la dernière observation hors limites de spécification et l&apos;observation finale. Si l&apos;observation finale est hors limites de spécification, la Dernière valeur hors spécifications est 1. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Latest Out of Spec( 0 )
);
Wait( 1 );
obj << Latest Out of Spec( 1 );

```

### Local Data Filter

**Syntaxe :** obj << Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Make Detailed Shift Data

**Syntaxe :** obj = Process Screening(...Make Detailed Shift Data( state=0|1 )...)

**Description :** Stores all of the shift information so that it can be saved to a data table later using the Save Shift Table option. This option must be specified in the launch script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Maximum

**Syntaxe :** obj << Maximum( state=0|1 )

**Description :** Shows or hides the Maximum for Count and Nonnegative Continuous chart types. Actif par défaut.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time )
);
Wait( 1 );
obj << Maximum( 0 );

```

### Mean

**Syntaxe :** obj << Mean( state=0|1 )

**Description :** Affiche ou masque la colonne Moyenne dans le tableau récapitulatif. Cette colonne contient la moyenne des données du processus. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Mean( 0 );

```

### Minimum Process Length

**Syntaxe :** obj = Process Screening(...Minimum Process Length( number=3 )...)

**Description :** Spécifie le nombre minimum de valeurs de données qu&apos;un processus doit avoir pour être inclus dans l&apos;analyse. "3" par défaut.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Minimum Process Length( 40 )
);

```

### Moving Range Limit Exceeded

**Syntaxe :** obj << Moving Range Limit Exceeded( state=0|1 )

**Description :** Affiche ou masque la colonne Limite d&apos;étendue mobile dépassée dans le tableau récapitulatif. Cette colonne contient le nombre de sous-groupes qui dépassent la limite d&apos;étendue mobile sur le calcul de la carte de contrôle à 3 niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Vial Fill Weights.jmp" );
obj = dt << Process Screening(
	Y( :Fill Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar MR and R" ),
	Moving Range Limit Exceeded( 1 )
);

```

### N Subgroups

**Syntaxe :** obj << N Subgroups( state=0|1 )

**Description :** Affiche ou masque la colonne Nombre de sous-groupes dans le tableau récapitulatif. Cette colonne contient le nombre de sous-groupes. Actif par défaut.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Control Chart Type( "XBar and R" )
);
Wait( 1 );
obj << N Subgroups( 0 );

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Out of Spec Count

**Syntaxe :** obj << Out of Spec Count( state=0|1 )

**Description :** Affiche ou masque la colonne Nombre hors spécifications dans le tableau récapitulatif. Cette colonne contient le nombre d&apos;observations qui se trouvent en dehors des limites de spécification. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Out of Spec Count( 0 )
);
Wait( 1 );
obj << Out of Spec Count( 1 );

```

### Out of Spec Rate

**Syntaxe :** obj << Out of Spec Rate( state=0|1 )

**Description :** Affiche ou masque la colonne Taux hors spécifications dans le tableau récapitulatif. Cette colonne contient la proportion d&apos;observations qui se trouvent en dehors des limites de spécification. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Out of Spec Rate( 0 )
);
Wait( 1 );
obj << Out of Spec Rate( 1 );

```

### Outlier Threshold

**Syntaxe :** obj = Process Screening(...Outlier Threshold( number=5 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le nombre d&apos;unités sigma intra qu&apos;une observation doit dépasser en magnitude, à partir de ses deux voisins, pour être traitée en tant que valeur aberrante. "5" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Outlier Threshold( 1.1 ),
	Shift Graph( 1 )
);

```

### Overall Sigma

**Syntaxe :** obj << Overall Sigma( state=0|1 )

**Description :** Affiche ou masque la colonne Sigma global dans le tableau récapitulatif. Cette colonne contient une estimation de l&apos;écart-type basée sur toutes les observations. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Overall Sigma( 0 );

```

### Paste Local Data Filter

**Syntaxe :** obj << Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Performance Graph Boundaries

**Syntaxe :** obj << Performance Graph Boundaries( <Capability Ppk boundary, Stability Ratio boundary> )

**Description :** Spécifie les limites pour les régions de Capabilité Ppk et de ratio de stabilité dans le graphique de performance des processus. Si aucun argument n&apos;est spécifié, cette option ouvre une fenêtre dans laquelle vous pouvez spécifier les limites.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);
Wait( 1 );
obj << Performance Graph Boundaries( 1.7, 1.2 );

```

### Ppk

**Syntaxe :** obj << Ppk( state=0|1 )

**Description :** Affiche ou masque la colonne Ppk dans le tableau récapitulatif. Cette colonne contient l&apos;indice de capabilité Ppk à long terme basé sur le sigma global et supposant une distribution normale. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Ppk( 0 ) );
Wait( 1 );
obj << Ppk( 1 );

```

### Ppk Capability Boundary

**Syntaxe :** obj << Ppk Capability Boundary( number=1.33 )

**Description :** Spécifie une frontière entre les régions capable et incapable pour la capabilité Ppk dans le graphique de performance des processus. "1.33" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Ppk Capability Boundary( 1.7 ),
	Process Performance Graph( 1 )
);

```

### Process Capability

**Syntaxe :** obj << Process Capability

**Description :** Ouvre une fenêtre de rapport Capabilité du processus qui montre les rapports détaillés individuels pour les processus que vous avez sélectionnés dans le tableau récapitulatif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Capability
);

```

### Process Performance Graph

**Syntaxe :** obj << Process Performance Graph( state=0|1 )

**Description :** Affiche ou masque un graphique de Capabilité Ppk en fonction du ratio de stabilité avec quatre quadrants colorés. Par défaut, un ratio de stabilité qui dépasse 1,5 indique que le processus est instable, et un Ppk inférieur à 1,33 indique que le processus n&apos;est pas capable.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);

```

### Process Potential Graph

**Syntaxe :** obj << Process Potential Graph( state=0|1 )

**Description :** Affiche ou masque le graphique du potentiel du processus, qui représente Cp sur l&apos;axe vertical et % Sigma de mesure^2 sur l&apos;axe horizontal. Ce graphique montre les bénéfices relatifs de l&apos;amélioration du système de mesure ou du processus.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Coating.jmp" );
Column( "Weight" ) << Set Property(
	"Process Screening",
	{Centerline( 20.5 ), Specified Sigma( 1.5 ), Measurement Sigma( .8 )}
);
Column( "Weight" ) << Set Property( "Spec Limits", {LSL( 17 ), USL( 24 )} );
obj = dt << Process Screening(
	Process Variables( :Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar and R" ),
	Out of Spec Count( 0 ),
	Out of Spec Rate( 0 ),
	Latest Out of Spec( 0 ),
	Process Potential Graph( 1 )
);

```

### Process Screening

**Syntaxe :** Process Screening( Process Variables( columns ) )

**Description :** Examine de nombreux processus de différentes perspectives, incluant la stabilité, la capabilité, les tests de carte de contrôle et le changement (la dérive). Permet de se focaliser sur les processus qui demandent d&apos;être examinés.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);

```

### Process Variables

**Syntaxe :** obj = Process Screening(...Process Variables( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les colonnes de données de processus qui contiennent les mesures à analyser.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);

```

### Range Limit Exceeded

**Syntaxe :** obj << Range Limit Exceeded( state=0|1 )

**Description :** Affiche ou masque la colonne Limite d&apos;étendue dépassée dans le tableau récapitulatif. Cette colonne contient le nombre de sous-groupes qui dépassent la limite de contrôle supérieure sur le calcul des cartes R, S ou Étendue mobile.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Range Limit Exceeded( 1 )
);

```

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Relaunch Selected Processes

**Syntaxe :** obj << Relaunch Selected Processes

**Description :** Relaunches the Process Screening platform to create a new report that contains only the selected processes from the original report.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	RowStates( [51 1, 52 1, 66 1, 85 1] )
);
Wait( 1 );
obj << Relaunch Selected Processes;

```

### Remove

**Syntaxe :** obj = Process Screening(...Remove( columns )...)

**Description :** Spécifie les processus à exclure de l&apos;analyse. Cette option doit être spécifiée dans le script de lancement et s&apos;applique uniquement lorsqu&apos;un groupe de colonnes est spécifié.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( dt << get Column Group( "Processes" ) ),
	Remove( :NPN2 ),
	Process Performance Graph( 1 )
);

```

### Remove Column Switcher

**Syntaxe :** obj << Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntaxe :** obj << Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Remove Selected Items

**Syntaxe :** obj << Remove Selected Items

**Description :** Supprime les lignes sélectionnées dans le tableau récapitulatif et exécute de nouveau l&apos;analyse sans ces processus.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
Wait( 1 );
obj << Remove Selected Items;

```

### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Report View( "Summary" );

```

### Reset Filter

**Syntaxe :** obj << Reset Filter

**Description :** Supprime tous les filtres actuellement appliqués au tableau récapitulatif.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
Wait( 1 );
obj << Filter Where( Alarm Rate > 0 );
Wait( 3 );
obj << Reset Filter;

```

### RowStates

**Syntaxe :** obj << RowStates( matrix )

**Description :** Définit les états de ligne pour les lignes dans le tableau récapitulatif. L&apos;entrée est une matrice m x 2. La première colonne contient des numéros de ligne (à partir de zéro dans l&apos;ordre d&apos;origine) et la deuxième colonne contient des valeurs numériques d&apos;état de ligne. Consultez le Guide de l&apos;utilisateur JMP pour plus d&apos;informations à propos des valeurs numériques d&apos;état de ligne.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Process Variables( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" ),
	RowStates( [0 1, 5 768] ) //Select first and Color Red the sixth of original order
);
Wait( 1 );
// sort columns to show original order
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 3, 1 )} ) );
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 2, 1 )} ) );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Details Table

**Syntaxe :** obj << Save Details Table

**Description :** Crée une nouvelle table de données qui contient les informations d&apos;alarme de test pour chaque combinaison de processus et de variables de groupement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Details Table;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Save Script to Script Window;

```

### Save Selected Details

**Syntaxe :** obj << Save Selected Details

**Description :** Crée une nouvelle table de données qui contient les informations d&apos;alarme de test pour les lignes sélectionnées dans le tableau récapitulatif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
obj << Save Selected Details;

```

### Save Shift Table

**Syntaxe :** obj << Save Shift Table

**Description :** Creates a new data table that contains the saved shift gap data. This option requires that the Make Detailed Shift Data option is specified in the launch script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Save Summary Table

**Syntaxe :** obj << Save Summary Table

**Description :** Crée une nouvelle table de données qui contient toutes les informations de résumé du processus pour toutes les variables et tous les groupes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table;

```

### Save Summary Table with Graphs

**Syntaxe :** obj << Save Summary Table with Graphs

**Description :** Crée une nouvelle table de données qui contient toutes les informations de résumé du processus et une colonne de graphiques rapides.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table with Graphs;

```

### Select All

**Syntaxe :** obj << Select All

**Description :** Sélectionne toutes les colonnes, les groupe et exécute les commandes consécutives sur celles-ci.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All
);

```

### Select Where

**Syntaxe :** obj << Select Where( condition )

**Description :** Sélectionne les colonnes de processus dans le tableau récapitulatif. Les colonnes sélectionnées correspondent à la condition spécifiée.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select Where( Alarm Rate > 0 )
);

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Set Scrolling

**Syntaxe :** obj << Set Scrolling( number=50 )

**Description :** Spécifie le nombre de lignes à afficher dans le tableau récapitulatif défilant. "50" par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Set Scrolling( 3 )
);

```

### Shift Graph

**Syntaxe :** obj << Shift Graph( state=0|1 )

**Description :** Affiche ou masque un graphique de l&apos;occurrence temporelle de tous les décalages de processus qui dépassent le nombre d&apos;unités sigma intra spécifié par l&apos;option Seuil de décalage. Les marqueurs verts indiquent un décalage supérieur et les marqueurs rouges indiquent un décalage inférieur.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" )
);
obj << Shift Graph( 1 );

```

### Shift Lambda

**Syntaxe :** obj = Process Screening(...Shift Lambda( number=.3 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le poids utilisé dans l&apos;EWMA (moyenne mobile pondérée exponentiellement) pour la détection des décalages. ".3" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Show Charts as Selected( 1 ),
	RowStates( [5 1] ),
	Shift Lambda( 0.2 ),
	Shift Graph( 1 )
);

```

### Shift Threshold

**Syntaxe :** obj = Process Screening(...Shift Threshold( number=3 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le nombre d&apos;unités sigma intra qu&apos;un décalage doit dépasser en magnitude pour apparaître dans le graphique des décalages. "3" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Shift Graph( 1 )
);

```

### Show Charts as Selected

**Syntaxe :** obj << Show Charts as Selected( state=0|1 )

**Description :** Trace des petits graphiques des processus sélectionnés dans le tableau récapitulatif. Les graphiques s&apos;affichent dans un rapport Graphiques selon sélection qui se met automatiquement à jour lorsque vous sélectionnez et désélectionnez des processus dans le tableau récapitulatif.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
obj << Select Where( :MACHINE == "C334" );
obj << Show Charts as Selected( 1 );
Wait( 2 );
obj << Select Where( :MACHINE == "A455" );

```

### Show Charts for Selected

**Syntaxe :** obj << Show Charts for Selected( <process list> )

**Description :** Trace des petits graphiques des processus sélectionnés dans le tableau récapitulatif. Les graphiques s&apos;affichent dans un rapport Graphiques selon sélection qui permet d&apos;afficher et de comparer plusieurs processus en même temps.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :OPERATOR, :MACHINE ),
	Show Charts for Selected(
		{{:DIAMETER, "DRJ", "C334"}, {:DIAMETER, "MKS", "A386"}}
	)
);

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :IVP7, :B1, :IVP8 ),
	Show Charts for Selected( {:IVP7, :IVP8} )
);

```

### Show Shifts in Graphs

**Syntaxe :** obj << Show Shifts in Graphs( state=0|1 )

**Description :** Affiche ou masque les emplacements des décalages dans les graphiques rapides à l&apos;aide de lignes verticales vertes et rouges.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Select All,
	Show Charts for Selected,
	Show Shifts in Graphs( 1 )
);

```

### Show Tests

**Syntaxe :** obj << Show Tests( state=0|1 )

**Description :** Affiche ou masque les tests de Nelson sélectionnés sous Choisir les tests. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 2( 1 ),
	Test 3( 1 )
);
Wait( 1 );
obj << Show Tests( 0 );

```

### Sort by Subgroup

**Syntaxe :** obj = Process Screening(...Sort by Subgroup( state=0|1 )...)

**Description :** Tries les données du processus par variable de sous-groupe ou combinaison de variables de sous-groupe imbriquées, avant d&apos;effectuer les calculs. Cette option n&apos;est disponible que si une variable Sous-groupe est spécifiée.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Spec Centered Mean

**Syntaxe :** obj << Spec Centered Mean( state=0|1 )

**Description :** Affiche ou masque la colonne (Moyenne-Cible)/Étendue des spécifications dans le tableau récapitulatif. Cette colonne contient la moyenne relative aux limites de spécification.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Spec Centered Mean( 1 )
);

```

### Spec Limits

**Syntaxe :** obj << Spec Limits( state=0|1 )

**Description :** Affiche ou masque les colonnes des limites de spécification dans le tableau récapitulatif. Ces colonnes contiennent la limite de spécification inférieure, la limite de spécification supérieure et les valeurs cibles.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Limits( 1 ) );

```

### Spec Scaled Std Dev

**Syntaxe :** obj << Spec Scaled Std Dev( state=0|1 )

**Description :** Affiche ou masque la colonne Écart-type/Étendue des spécifications dans le tableau récapitulatif. Cette colonne contient l&apos;écart-type global divisé par l&apos;étendue des limites de spécification.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Spec Scaled Std Dev( 1 )
);

```

### Stability Index

**Syntaxe :** obj << Stability Index( state=0|1 )

**Description :** Affiche ou masque la colonne Indice de stabilité dans le tableau récapitulatif. Cette colonne est une mesure de la stabilité d&apos;un processus, où un processus stable a un indice de stabilité proche de 1. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Stability Index( 0 );

```

### Stability Index Boundary

**Syntaxe :** obj << Stability Index Boundary( number=1.25 )

**Description :** Spécifie la limite entre les régions stables et instables pour l&apos;indice de stabilité dans le graphique de performance des processus. "1.25" par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);
Wait( 1 );
obj << Stability Index Boundary( 1.5 );

```

### Stability Ratio

**Syntaxe :** obj << Stability Ratio( state=0|1 )

**Description :** Affiche ou masque la colonne Ratio de stabilité dans le tableau récapitulatif. Cette colonne est une mesure de la stabilité d&apos;un processus, où un processus stable a un ratio de stabilité proche de 1.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
obj << Stability Ratio( 1 );

```

### Subgroup

**Syntaxe :** obj = Process Screening(...<Subgroup( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Affecte une ou plusieurs variables de sous-groupe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Subgroup Sample Size

**Syntaxe :** obj = Process Screening(...Subgroup Sample Size( number=5 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le nombre d&apos;observations dans chaque sous-groupe. La taille minimum du sous-groupe est de 2. "5" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup Sample Size( 6 )
);

```

### Summary

**Syntaxe :** obj << Summary( state=0|1 )

**Description :** Affiche ou masque le tableau récapitulatif dans le rapport. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Subgroup Sample Size( 6 ),
	Summary( 0 )
);
Wait( 1 );
obj << Summary( 1 );

```

### Sync to Data Table Changes

**Syntaxe :** obj << Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Target Index

**Syntaxe :** obj << Target Index( state=0|1 )

**Description :** Affiche ou masque la colonne Indice cible dans le tableau récapitulatif. Cette colonne contient le nombre d&apos;écarts-types à court terme par lequel la moyenne du processus diffère de la valeur cible.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Target Index( 1 ) );

```

### Test 1

**Syntaxe :** obj << Test 1( state=0|1 )

**Description :** Affiche ou masque la colonne Test1 dans le tableau récapitulatif. Ce test est déclenché lorsqu&apos;un point se trouve à plus de trois écarts-types de la ligne centrale. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 1( 0 )
);

```

### Test 2

**Syntaxe :** obj << Test 2( state=0|1 )

**Description :** Affiche ou masque la colonne Test2 dans le tableau récapitulatif. Ce test est déclenché lorsqu&apos;au moins neuf points consécutifs se trouvent du même côté de la ligne centrale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 2( 1 )
);

```

### Test 3

**Syntaxe :** obj << Test 3( state=0|1 )

**Description :** Affiche ou masque la colonne Test3 dans le tableau récapitulatif. Ce test est déclenché lorsqu&apos;au moins six points consécutifs sont continuellement croissants ou décroissants.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 3( 1 )
);

```

### Test 4

**Syntaxe :** obj << Test 4( state=0|1 )

**Description :** Affiche ou masque la colonne Test4 dans le tableau récapitulatif. Ce test est déclenché lorsque quatorze points consécutifs sont croissants puis décroissants en alternance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 4( 1 )
);

```

### Test 5

**Syntaxe :** obj << Test 5( state=0|1 )

**Description :** Affiche ou masque la colonne Test5 dans le tableau récapitulatif. Ce test est déclenché lorsque, parmi trois points consécutifs du même côté de la ligne centrale, deux se trouvent à plus de deux écarts-types de la ligne centrale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 5( 1 )
);

```

### Test 6

**Syntaxe :** obj << Test 6( state=0|1 )

**Description :** Affiche ou masque la colonne Test6 dans le tableau récapitulatif. Ce test est déclenché lorsque, parmi cinq points consécutifs du même côté de la ligne centrale, quatre se trouvent à plus d&apos;un écart-type de la ligne centrale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 6( 1 )
);

```

### Test 7

**Syntaxe :** obj << Test 7( state=0|1 )

**Description :** Affiche ou masque la colonne Test7 dans le tableau récapitulatif. Ce test est déclenché lorsque quinze points consécutifs, de n&apos;importe quel côté de la ligne centrale, se trouvent à plus d&apos;un écart-type de la ligne centrale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 7( 1 )
);

```

### Test 8

**Syntaxe :** obj << Test 8( state=0|1 )

**Description :** Affiche ou masque la colonne Test8 dans le tableau récapitulatif. Ce test est déclenché lorsque huit points consécutifs, de n&apos;importe quel côté de la ligne centrale, se trouvent à plus d&apos;un écart-type de la ligne centrale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 8( 1 )
);

```

### Test Action

**Syntaxe :** obj << Test Action( state=0|1 )

**Description :** Shows or hides the Action column in the summary table. This test is triggered when a point is greater than an Upper Action Limit or less than a Lower Action Limit. Actif par défaut.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Action( 0 );

```

### Test Alert

**Syntaxe :** obj << Test Alert( state=0|1 )

**Description :** Shows or hides the Alert column in the summary table. This test is triggered when a point is greater than the Upper Alert Limit or less than the Lower Alert Limit.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert( 1 );

```

### Test Alert Increasing

**Syntaxe :** obj << Test Alert Increasing( state=0|1 )

**Description :** Shows or hides the Alert Increasing column in the summary table. This column counts where the process is increasing and the previous point is above the upper alert limit or if a process is decreasing and the previous point is below the lower alert limit.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert Increasing( 0 );

```

### Time

**Syntaxe :** obj = Process Screening(...<Time( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Affecte une colonne qui spécifie l&apos;ordre chronologique des données. Les données de processus sont triées par variable de temps avant d&apos;effectuer les calculs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Prices.jmp" );
obj = dt << Process Screening(
	Process Variables( :Price ),
	Grouping( :Series ),
	Control Chart Type( "XBar and R" ),
	Time( :Date ),
	Subgroup Sample Size( 3 )
);

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Use Limits Table

**Syntaxe :** obj = Process Screening(...Use Limits Table( state=0|1, data table, <options>)...)

<b>Élément lanceur : Oui</b>

**Description :** Importe les limites de contrôle historiques et les limites de spécification à partir d&apos;une table de données.

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	)
);

```

### Use Lower Limit

**Syntaxe :** obj = Process Screening(...Use Lower Limit( state=0|1 )...)

**Description :** Specifies whether to use the K-Sigma lower limit. This option is available only for Proportion charts.

**JMP Version ajoutée :** 19

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Lower Limit( 1 )
);

```

### Use Medians instead of Means

**Syntaxe :** obj = Process Screening(...Use Medians instead of Means( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Évalue la ligne centrale à l&apos;aide de la médiane des observations pour réduire l&apos;effet des valeurs aberrantes sur les tests.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Use Medians instead of Means( 1 )
);

```

### Use Upper Limit

**Syntaxe :** obj = Process Screening(...Use Upper Limit( state=0|1 )...)

**Description :** Specifies whether to use the K-Sigma upper limit. This option is available only for Proportion charts. Actif par défaut.

**JMP Version ajoutée :** 19

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Upper Limit( 0 ),
	Use Lower Limit( 1 )
);

```

### View Web XML

**Syntaxe :** obj << View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Process Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Élément lanceur : Oui</b>

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Window View( "Private" ),
	Y( :weight ),
	X( :height ),
	Fit Line
);
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit",
		Text Box( eqn, <<Set Base Font( "Title" ) )
	)
);

```

### Within Sigma

**Syntaxe :** obj << Within Sigma( state=0|1 )

**Description :** Affiche ou masque la colonne Sigma intra dans le tableau récapitulatif. Cette colonne contient une estimation de l&apos;écart-type basée sur la variation intra. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Within Sigma( 0 ) );
Wait( 1 );
obj << Within Sigma( 1 );

```

### n Trials

**Syntaxe :** obj = Process Screening(...<n Trials( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Affecte une colonne qui contient le nombre d&apos;essais. Ce nombre sert de dénominateur de la proportion de rebuts pour une carte P.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Washers.jmp" );
dt << Process Screening(
	Process Variables( :"# defective"n ),
	Control Chart Type( "Proportion" ),
	n Trials( :Lot Size 2 ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] )
);

```

