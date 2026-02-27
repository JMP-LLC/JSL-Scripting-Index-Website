# Degradation



## Colonnes

### Censor

**Syntaxe :** obj &lt;&lt; Censor( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Application( Destructive Degradation )
);

```

### Freq

**Syntaxe :** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	Freq( _freqcol )
);

```

### Label

**Syntaxe :** obj &lt;&lt; Label( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Response

**Syntaxe :** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### System ID

**Syntaxe :** obj &lt;&lt; System ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Time

**Syntaxe :** obj &lt;&lt; Time( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### X

**Syntaxe :** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

### Y

**Syntaxe :** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	X( :Batch ),
	Application( "Repeated Measures Degradation" )
);

```

## Constructeurs associés

### Degradation

**Syntaxe :** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**Description :** Modélise la dégradation dans le temps en utilisant des courbes linéaires et non linéaires. Les options de l&apos;analyse incluent l&apos;analyse de la stabilité et la génération de pseudo-données de défaillance.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);

```

## Messages d'éléments

### Censor Code

**Syntaxe :** obj = Degradation(...Censor Code( value=1 )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Identifie la valeur de la colonne Censure qui désigne les observations censurées à droite. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Application( "Destructive Degradation" )
);

```

### Connect Data Markers

**Syntaxe :** obj &lt;&lt; Connect Data Markers( state=0|1 )

**Description :** Affiche ou masque les droites qui relient les points sur la courbe superposée. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Connect Data Markers( 0 )
);
Wait( 1 );
obj << Connect Data Markers( 1 );

```

### Curve Interval Alpha

**Syntaxe :** obj &lt;&lt; Curve Interval Alpha( fraction )

**Description :** Spécifie le niveau alpha utilisé pour les courbes d&apos;intervalle de confiance sur la courbe superposée.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Curve Interval( "Prediction Interval" );
Wait( 1 );
obj << Curve Interval Alpha( .01 );

```

### Generate Pseudo Failure Data

**Syntaxe :** Generate Pseudo Failure Data(interval_censor, &lt;alpha&gt;)

**Description :** Enregistre le temps prévu que chaque unité dépasse la limite de spécification dans une nouvelle table de données. La nouvelle table de données contient un script Distribution de survie ou Ajuster Survie en fonction de X qui peut servir à ajuster une distribution aux pseudo temps de défaillance.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Lower Spec Limit( 0 );
obj << Set Upper Spec Limit( 6 );
obj << Set Censoring Time( 6 );
dt1 = obj << Generate Pseudo Failure Data( 1, .05 );

```

### Generate Report for Current Model

**Syntaxe :** obj &lt;&lt; Generate Report for Current Model

**Description :** Crée un rapport des paramètres actuels du modèle. Cela comprend un rapport Résumé du modèle et un rapport Estimations qui contient l&apos;estimation des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Generate Report for Current Model;

```

### Get Inverse Prediction Results

**Syntaxe :** obj &lt;&lt; Get Inverse Prediction Results

**Description :** Renvoie une liste nommée qui contient les résultats du graphique de prévision inverse.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 10 );
obj << Get Inverse Prediction Results;

```

### Get Prediction Results

**Syntaxe :** obj &lt;&lt; Get Prediction Results

**Description :** Renvoie une liste nommée qui contient les résultats du graphique de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Longitudinal Prediction Time( 4500 );
obj << Get Prediction Results;

```

### Get Residuals

**Syntaxe :** obj &lt;&lt; Get Residuals

**Description :** Renvoie une liste nommée qui contient les résultats du graphique des résidus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Get Residuals;

```

### Get Results

**Syntaxe :** obj &lt;&lt; Get Results

**Description :** Renvoie une liste nommée qui contient les résultats de tous les modèles ajustés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Generate Report for Current Model;
obj << Get Results;

```

### Inverse Prediction Alpha

**Syntaxe :** obj &lt;&lt; Inverse Prediction Alpha( fraction )

**Description :** Spécifie le niveau alpha utilisé pour les intervalles dans le graphique de prévision inverse.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << Show Residual Plot( 0 );
obj << No Tab List( 1 );
obj << Inverse Prediction Interval( "Prediction Interval" );
Wait( 1 );
obj << Inverse Prediction Alpha( .01 );

```

### Inverse Prediction Interval

**Syntaxe :** obj &lt;&lt; Inverse Prediction Interval( "Aucun intervalle"|"Intervalle de confiance"|"Intervalle de prévision" )

**Description :** Affiche ou masque les intervalles de confiance ou de prévision pour les pseudo temps de défaillance affichés sur le graphique Prévision inverse. Lorsque les intervalles sont activés, les intervalles sont également inclus dans la table de données créée avec l&apos;option Enregistrer le temps de croisement.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << Show Residual Plot( 0 );
obj << No Tab List( 1 );
Wait( 1 );
obj << Inverse Prediction Interval( "Prediction Interval" );

```

### Inverse Prediction Side

**Syntaxe :** obj &lt;&lt; Inverse Prediction Side( "Bilatéral"|"Unilatéral inférieur"|"Unilatéral supérieur" )

**Description :** Spécifie si les intervalles unilatéraux ou bilatéraux sont affichés dans le graphique de prévision inverse.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Inverse Prediction Interval( "Prediction Interval" );
Wait( 1 );
obj << Inverse Prediction Side( "Lower One Sided" );

```

### Longitudinal Prediction Alpha

**Syntaxe :** obj &lt;&lt; Longitudinal Prediction Alpha( fraction )

**Description :** Spécifie le niveau alpha utilisé pour les intervalles dans le graphique de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Show Inverse Prediction Plot( 0 );
obj << Longitudinal Prediction Interval( "Prediction Interval" );
obj << Longitudinal Prediction Time( 4500 );
Wait( 1 );
obj << Longitudinal Prediction Alpha( .01 );

```

### Longitudinal Prediction Interval

**Syntaxe :** obj &lt;&lt; Longitudinal Prediction Interval( "Aucun intervalle"|"Intervalle de confiance"|"Intervalle de prévision" )

**Description :** Affiche ou masque les intervalles de confiance ou de prévision pour les réponses estimées affichées sur le graphique de prévision. Lorsque les intervalles sont activés, les intervalles sont également inclus dans la table de données créée avec l&apos;option Enregistrer les prévisions.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Show Inverse Prediction Plot( 0 );
obj << Longitudinal Prediction Time( 4500 );
Wait( 1 );
obj << Longitudinal Prediction Interval( "Prediction Interval" );

```

### Longitudinal Prediction Time

**Syntaxe :** obj &lt;&lt; Longitudinal Prediction Time( number )

**Description :** Spécifie la valeur de temps pour laquelle vous souhaitez prévoir la réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << No Tab List( 1 );
obj << Show Residual Plot( 0 );
obj << Show Inverse Prediction Plot( 0 );
obj << Longitudinal Prediction Interval( "Prediction Interval" );
Wait( 1 );
obj << Longitudinal Prediction Time( 3000 );

```

### No Tab List

**Syntaxe :** obj &lt;&lt; No Tab List( state=0|1 )

**Description :** Organise les onglets des graphiques des résidus, de prévision inverse et de prévision en tant que rapport empilé.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << No Tab List( 1 );

```

### Nonlinear Path

**Syntaxe :** obj &lt;&lt; Nonlinear Path

**Description :** Définit le style du chemin de dégradation comme étant le modèle non linéaire.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Nonlinear Path;

```

### Prediction Settings

**Syntaxe :** obj &lt;&lt; Prediction Settings

**Description :** Ouvre une fenêtre contenant des options de modification des paramètres utilisés dans les prévisions du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 0 );
obj << Prediction Settings;

```

### Residual Plot

**Syntaxe :** obj &lt;&lt; Residual Plot( &lt;Jittering( state=0|1 )&gt;, &lt;Jittering Scale( number )&gt;, &lt;Separate Groups( state=0|1 )&gt; )

**Description :** Vous permet de spécifier des options pour le graphique des résidus.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Residual Plot( Jittering( 1 ), Jittering Scale( 0.5 ) );
Wait( 1 );
obj << Residual Plot( Jittering Scale( 1.5 ) );

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Residual Plot( Jittering( 1 ), Separate Groups( 1 ) );

```

### Save Crossing Time

**Syntaxe :** obj &lt;&lt; Save Crossing Time

**Description :** Enregistre les pseudo-temps de défaillance du modèle actuel dans une nouvelle table de données. La nouvelle table de données contient un script Distribution de survie ou Ajuster Survie en fonction de X qui peut servir à ajuster une distribution aux pseudo temps de défaillance. Lorsque l&apos;une des options Intervalle de prévision inverse est activée, la table inclut également les intervalles.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Crossing Time;

```

### Save Predictions

**Syntaxe :** obj &lt;&lt; Save Predictions

**Description :** Enregistre les valeurs de réponse prévues pour le modèle actuel dans une nouvelle table de données. La table contient également des colonnes pour les limites inférieure et supérieure basées sur le paramètre de l&apos;option Intervalle de prévision longitudinal.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Longitudinal Prediction Time( 4500 );
obj << Save Predictions;

```

### Save Residuals

**Syntaxe :** obj &lt;&lt; Save Residuals

**Description :** Enregistre les résidus du modèle actuel dans une nouvelle table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Residuals;

```

### Set Baseline

**Syntaxe :** obj &lt;&lt; Set Baseline( number )

**Description :** Spécifie les conditions d&apos;utilisation normale de la variable explicative dans les chemins de dégradation non linéaires. La valeur de référence apparaît sur la courbe superposée sous forme d&apos;une ligne noire.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( "Repeated Measures Degradation" ),
	Show Fitted Lines( 1 ),
	Path Specifications(
		Nonlinear Path(
			Add Formula(
				Formula Name( "Reaction Rate 1" ),
				Formula(
					Parameter(
						{DInf = -1.4423, Ru = 0.000526206474198, Ea =
						0.816981438481622},
						DInf * (1 - Exp(
							-Ru * Exp(
								Ea * (11604.5181215503 / (193.5 + 273.15)
								-11604.5181215503 / (Degrees C + 273.15))
							) * Hours
						))
					)
				),
				Initial Values( [-1.4423, 0.000526206474198, 0.816981438481622] ),
				Lower( [-1.58653, 0.0004735858267782, 0.73528329463346] ),
				Upper( [-1.29807, 0.0005788271216178, 0.898679582329784] ),
				Fitting Method( Newton ),
				Fixed( [0, 0, 0] )
			),
			Select Formula( "Reaction Rate 1" )
		)
	),
	Nonlinear Path( 1 )
);
Wait( 1 );
obj << Set Baseline( 130 );

```

### Set Censoring Time

**Syntaxe :** obj &lt;&lt; Set Censoring Time( number )

**Description :** Spécifie le temps de censure, qui apparaît sur la courbe superposée et de prévision inverse sous la forme d&apos;une ligne verticale pointillée. Lorsque l&apos;option Intervalle de prévision inverse est définie sur Aucun intervalle, les observations qui dépassent le temps de censure sont affichées sur des lignes horizontales commençant au temps de censure. Si l&apos;option Intervalle de confiance ou Intervalle de prévision est sélectionnée pour l&apos;option Intervalle de prévision inverse, les lignes horizontales s&apos;étendent indéfiniment à droite des observations dont les limites supérieures dépassent le temps de censure. Le temps de censure est répercuté dans les tables de données créées avec les options Enregistrer le temps de croisement et Générer les pseudo-données de défaillance.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Fitted Lines( 1 );
Wait( 1 );
obj << Set Censoring Time( 3800 );

```

### Set Lower Spec Limit

**Syntaxe :** obj &lt;&lt; Set Lower Spec Limit( number )

**Description :** Spécifie la tolérance inférieure. Les limites de spécification apparaissent sur la courbe superposée.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Fitted Lines( 1 );
Wait( 1 );
obj << Set Lower Spec Limit( -1.5 );

```

### Set Upper Spec Limit

**Syntaxe :** obj &lt;&lt; Set Upper Spec Limit( number )

**Description :** Spécifie la limite de spécification supérieure. Les limites de spécification apparaissent sur la courbe superposée.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Fitted Lines( 1 );
Wait( 1 );
obj << Set Upper Spec Limit( 6 );

```

### Show Curve Interval

**Syntaxe :** obj &lt;&lt; Show Curve Interval( "Aucun intervalle"|"Intervalle de confiance"|"Intervalle de prévision" )

**Description :** Affiche ou masque les intervalles de confiance ou de prévision pour les lignes d&apos;ajustement affichées sur la courbe superposée.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Show Curve Interval( "Prediction Interval" );

```

### Show Fitted Lines

**Syntaxe :** obj &lt;&lt; Show Fitted Lines( state=0|1 )

**Description :** Affiche ou masque les droites ajustées sur la courbe superposée.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Show Fitted Lines( 0 )
);
Wait( 1 );
obj << Show Fitted Lines( 1 );

```

### Show Inverse Prediction Plot

**Syntaxe :** obj &lt;&lt; Show Inverse Prediction Plot( state=0|1 )

**Description :** Affiche ou masque le graphique de prévision inverse. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Show Residual Plot( 0 ),
	Show Inverse Prediction Plot( 0 )
);
obj << Set Upper Spec Limit( 6 );
obj << No Tab List( 1 );
Wait( 1 );
obj << Show Inverse Prediction Plot( 1 );

```

### Show Legend

**Syntaxe :** obj &lt;&lt; Show Legend( state=0|1 )

**Description :** Affiche ou masque une légende pour les marqueurs utilisés sur la courbe superposée.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Show Legend( 1 );

```

### Show Residual Plot

**Syntaxe :** obj &lt;&lt; Show Residual Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Show Residual Plot( 0 )
);
Wait( 1 );
obj << Show Residual Plot( 1 );

```

### Show Spec Limits

**Syntaxe :** obj &lt;&lt; Show Spec Limits( state=0|1 )

**Description :** Affiche ou masque les limites de spécification sur la courbe superposée.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Set Upper Spec Limit( 7.5 ),
	Application( "Repeated Measures Degradation" )
);
Wait( 1 );
obj << Show Spec Limits( 0 );

```

### Simple Linear Path

**Syntaxe :** obj &lt;&lt; Simple Linear Path

**Description :** Définit le style du chemin de dégradation comme étant le modèle linéaire simple.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Nonlinear Path;
Wait( 1 );
obj << Simple Linear Path;

```

### Specify and Fit Path

**Syntaxe :** obj &lt;&lt; Specify and Fit Path( Formula Name( string ), Formula( Model Type( string ), Parameter(...)|specification ), fitting command )

**Description :** Vous permet de spécifier et d&apos;ajuster un chemin de modèle directement dans un script. La plate-forme Dégradation identifie les valeurs initiales et ajuste le modèle automatiquement sans autre intervention de l&apos;utilisateur. Chaque modèle est spécifié avec un nom de modèle, une définition du modèle et une commande d&apos;ajustement. Le type de modèle dans l&apos;argument Formule doit être l&apos;un des suivants : Linéaire personnalisé, Taux de réaction, Taux de réaction de type I, ou Taux constant. Pour un modèle linéaire personnalisé, utilisez la fonction Parameter() pour définir la formule, de manière similaire à la spécification de modèles sur la plate-forme Non linéaire. Pour les autres types de modèle, les informations de specification diffèrent selon le type de modèle. Pour plus de détails, consultez les exemples. Le fitting command peut être Fit Model ou Fit by System ID.

#### Autres exemples

```jsl

dt = Open( "$sample_data/reliability/Device B.jmp" );
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Nonlinear Path( 1 ),
	Mean Path( 1 ),
	Application( "Repeated Measures Degradation" )
);
obj << Specify and Fit Path(
	Formula Name( "Reaction Rate 1" ),
	Formula(
		Model Type( "Reaction Rate" ),
		Temperature Unit( "Celsius" ),
		Baseline Temperature( . )
	), //Illustration of using builtin models in script without going through UI interaction to setup.
	Fit by System ID()
);
obj << Generate Report for Current Model();
obj << Specify and Fit Path(
	Formula Name( "Reaction Rate 2" ),
	Formula(
		Model Type( "Reaction Rate" ),
		Temperature Unit( "Celsius" ),
		Baseline Temperature( 100 )
	), //Illustration of using builtin models in script without going through UI interaction to setup.
	Fit by System ID()
);
obj << Generate Report for Current Model();
obj << Specify and Fit Path(
	Formula Name( "Reaction Rate Type I 1" ),
	Formula(
		Model Type( "Reaction Rate Type I" ),
		Temperature Unit( "Celsius" ),
		Baseline Temperature( . )
	), //Illustration of using builtin models in script without going through UI interaction to setup. This is not a proper model for the data. For illustration purpose only.
	Fit by System ID()
);
obj << Generate Report for Current Model();
obj << Specify and Fit Path(
	Formula Name( "Constant Rate 1" ),
	Formula(
		Model Type( "Constant Rate" ),
		Path Transformation( "No Transformation" ),
		Rate Transformation( "Arrhenius Celsius" ),
		Time Transformation( Custom( "Function({x}, x^(1/3))" ) )
	), //Illustration of using builtin models in script without going through UI interaction to setup. This is not a proper model for the data. For illustration purpose only.
	Fit Model()
);
obj << Generate Report for Current Model();

```

#### Exemple d'ajustement par l'ID système

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Specify and Fit Path(
	Formula Name( "custom linear model 1" ),
	Formula(
		Model Type( "Custom Linear" ),
		Parameter( {b0 = 0, b1 = 0, b2 = 0}, b0 + b1 * Hours + b2 * Hours ^ 2 )
	),
	Fit by System ID() //Illustration of using Fit by System ID in script for custom linear models.
);

```

#### Exemple de modèle linéaire

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Specify and Fit Path(
	Formula Name( "custom linear model 1" ),
	Formula(
		Model Type( "Custom Linear" ),
		Parameter( {b0 = 0, b1 = 0, b2 = 0}, b0 + b1 * Hours + b2 * Hours ^ 2 )
	),
	Fit Model() //Illustration of using Fit Model in script for custom linear models
);

```

### Test Stability

**Syntaxe :** obj &lt;&lt; Test Stability

**Description :** Exécute une analyse de stabilité pour déterminer les dates d’expiration estimées.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Degradation(
	Y( :"Concentration (mg/Kg)"n ),
	Time( :Time ),
	Label( :Batch Number ),
	Set Lower Spec Limit( 99 )
);
obj << Test Stability;

```

### Use Interpolation through Data

**Syntaxe :** obj &lt;&lt; Use Interpolation through Data( state=0|1 )

**Description :** Spécifie l&apos;utilisation de l&apos;interpolation linéaire entre les points (plutôt que le modèle ajusté) pour prévoir quand une unité dépasse la limite de spécification. Le comportement dépend du fait que l&apos;unité a des observations qui dépassent la limite de spécification. Si une unité a des observations qui dépassent la limite de spécification, la prévision inverse est l&apos;interpolation linéaire entre les observations qui entourent la limite de spécification. Si une unité n&apos;a pas d&apos;observation supérieure à la limite de spécification, la prévision inverse est censurée et a une valeur égale au temps maximum observé pour cette unité.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" )
);
obj << Set Upper Spec Limit( 6 );
obj << Show Curve Interval( "Prediction Interval" );
obj << Show Residual Plot( 0 );
obj << No Tab List( 1 );
Wait( 1 );
obj << Use Interpolation through Data( 1 );

```

### Use Pooled MSE for Nonpoolable Model

**Syntaxe :** obj = Degradation(...Use Pooled MSE for Nonpoolable Model( state=0 )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie que le premier modèle de l&apos;analyse de stabilité utilise un modèle avec une erreur du carré moyen groupé (MSE) pour calculer le temps de croisement le plus ancien. "0" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Degradation(
	Y( :"Concentration (mg/Kg)"n ),
	Time( :Time ),
	Label( :Batch Number ),
	Application( "Stability Test" ),
	Set Lower Spec Limit( 99 ),
	Use Pooled MSE for Nonpoolable Model( 1 )
);

```

## Messages d'éléments partagés

### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

#### Préconfiguration anonyme

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Rechercher dans les dossiers

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Rechercher par nom

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

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

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate(
	X( :height ),
	Y( :weight ),
	Where( :age < 14 & :height > 60 )
);
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

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

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj &lt;&lt; Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj &lt;&lt; Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

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

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

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

### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj &lt;&lt; Report;Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

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

```jsl


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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Degradation(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

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

