# Time Series



## ARIMA

### Messages d'éléments

#### Actual

**Syntaxe :** obj &lt;&lt; Actual( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs observées afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntaxe :** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un tâche SAS pour lancer SAS et exécuter l&apos;analyse dans PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntaxe :** obj &lt;&lt; Innovations( state=0|1 )

**Description :** Actif par défaut.

**JMP Version ajoutée :** 16

#### Lower Confidence Limit

**Syntaxe :** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance  inférieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntaxe :** obj &lt;&lt; No Constrain( state=0|1 )

**Description :** Augmente la contrainte sur les paramètres d’autorégression de manière à ce qu’ils restent toujours dans la zone stable et sur les paramètres à moyenne mobile pour qu’ils restent dans la zone inversible lors du lancement d’un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntaxe :** obj &lt;&lt; No Intercept( state=0|1 )

**Description :** Fixe la constante à l&apos;origine à zéro lors du lancement d&apos;un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntaxe :** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations partielles. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntaxe :** obj &lt;&lt; Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntaxe :** obj &lt;&lt; Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntaxe :** obj &lt;&lt; Prediction Interval( level )

**Description :** Définit la taille de l&apos;intervalle de confiance de la prévision pour le modèle ARIMA. La taille par défaut est 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs des résidus afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntaxe :** obj &lt;&lt; Save Columns

**Description :** Crée une nouvelle table de données contenant les valeurs observées et prévues, ainsi que les erreurs standard, les résidus et les intervalles de prévision à 95 % relatifs à la réponse. Cette option est disponible pour tous les modèles ARIMA, de lissage et de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de prévision dans une nouvelle colonne de la table de données. Cette option est disponible pour tous les modèles ARIMA et de lissage.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntaxe :** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntaxe :** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données Erreur standard des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntaxe :** obj &lt;&lt; Time( state=0|1 )

**Description :** Sélectionne la colonne de données Temps afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntaxe :** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance supérieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Colonnes

### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );

```

### Input List

**Syntaxe :** obj &lt;&lt; Input List( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time ID

**Syntaxe :** obj &lt;&lt; Time ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### X

**Syntaxe :** obj &lt;&lt; X( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Y

**Syntaxe :** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## Constructeurs associés

### Time Series

**Syntaxe :** Time Series( Y( column ) )

**Description :** Modélise une série d&apos;observations sur des points temporels également espacés. Inclut le graphique des séries chronologiques, les autocorrélations, le variogramme, la densité spectrale, l&apos;ARIMA, l&apos;ARIMA saisonnière, les modèles de lissage et les prévisions.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## Messages d'éléments

### AR Coefficients

**Syntaxe :** obj &lt;&lt; AR Coefficients( state=0|1 )

**Description :** Affiche ou masque le graphique du coefficient d’autocorrélation.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << AR Coefficients( 1 );

```

### ARIMA

**Syntaxe :** obj &lt;&lt; ARIMA( p, d, q, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**Description :** Ajuste un modèle ARIMA. Définit l’ordre p,d et q pour un modèle ARIMA(p,d,q). Définit le level pour les valeurs autres que 0.95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima(
	1,
	0,
	0,
	No Intercept( 1 ),
	No Constrain( 1 ),
	Confidence Intervals( 0.99 )
);

```

### ARIMA Model Group

**Syntaxe :** obj &lt;&lt; ARIMA Model Group( AR(p0,p1),Diff(d0,d1),MA(q0,q1),Seasonal AR(P0,P1),Seasonal Diff(D0,D1),Seasonal MA(Q0,Q1),Seasonal Period(S0,S1),Confidence Intervals(C),Intercept(1),Constrain fit(1) )

**Description :** Ajuste un jeu de modèles ARIMA dont les ordres se trouvent dans les étendues spécifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );

```

### Autocorrelation

**Syntaxe :** obj &lt;&lt; Autocorrelation( state=0|1 )

**Description :** Affiche ou masque le graphique d’autocorrélation. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Autocorrelation( 1 );

```

### Autocorrelation Lags

**Syntaxe :** obj = Time Series(...Autocorrelation Lags( number=25 )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définit l’option de lancement pour le nombre maximal de périodes entre les points utilisés pour le calcul des autocorrélations. "25" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Autocorrelation Lags( 10 ) );

```

### Combine and Save Forecasts from Models

**Syntaxe :** obj &lt;&lt; Combine and Save Forecasts from Models

**Description :** Crée une nouvelle table de données contenant les résultats combinés de tous les ajustements de modèle présents dans le rapport.

**JMP Version ajoutée :** 16

### Connecting Lines

**Syntaxe :** obj &lt;&lt; Connecting Lines( state=0|1 )

**Description :** Affiche ou masque les droites reliées dans le graphique des séries chronologiques de base. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Connecting Lines( 1 );

```

### Cross Correlation

**Syntaxe :** obj &lt;&lt; Cross Correlation( state=0|1 )

**Description :** Affiche ou masque le graphique de corrélation croisée.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Cross Correlation( 1 );

```

### Damped-Trend Linear Exponential Smoothing

**Syntaxe :** obj &lt;&lt; Damped-Trend Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Damping|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description :** Ajuste un modèle par lissage à tendance amortie.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	"Damped-Trend Linear Exponential Smoothing"n( Zero to One )
);

```

### Difference

**Syntaxe :** obj &lt;&lt; Difference( d, &lt;D&gt;, &lt;S&gt; )

**Description :** Calcule la série des différences et trace les graphiques des autocorrélations et des autocorrélations partielles de la série des différences. La série des différences est donnée par  (1-B)^d * (1-B^S)^D * y_t , où y_t est la série chronologique, B est l&apos;opérateur de retard défini par B * y_t = y_(t-1), d est l&apos;ordre des différences non saisonnier, D est l&apos;ordre des différences saisonnier et S est le nombre d&apos;observations par période.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Difference( 1 );
obj << Difference( 1, 1, 12 );

```

### Double Exponential Smoothing

**Syntaxe :** obj &lt;&lt; Double Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description :** Appelle l’ajustement d’un modèle par lissage exponentiel double.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Double Exponential Smoothing( Zero to One ),
	Double Exponential Smoothing( Unconstrained ),
	Double Exponential Smoothing( Stable Invertible ),
	Double Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Fit Recommended ETS

**Syntaxe :** obj &lt;&lt; Fit Recommended ETS( Period( m ),Constrained( "Yes"|"No" ) )

**Description :** Ajuste tous les modèles de lissage à espace d&apos;état recommandés

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );

```

### Forecast Periods

**Syntaxe :** obj = Time Series(...Forecast Periods( number=25 )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définit l’option de lancement pour le nombre d’étapes dans le rapport de prévision. "25" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast Periods( 10 ) );
obj << ARIMA( 1, 0, 0 );

```

### Forecast on Holdback

**Syntaxe :** obj = Time Series(...Forecast on Holdback( state=0|1 )...)

**Description :** Détermine si les prévisions sont réalisées sur les observations futures ou sur les observations tests. Si cette option est sélectionnée, les prévisions sont réalisées sur l&apos;ensemble de test déterminé par le nombre spécifié dans l&apos;option Périodes de prévision.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast on Holdback( 1 ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Generate Simulation

**Syntaxe :** obj &lt;&lt; Generate Simulation( id, seed, length, n )

**Description :** Génère une table de données de plusieurs trajectoires futures d’un modèle ajusté. Renvoie la référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
dt = obj << Generate Simulation( 1, 11111, 100, 5 );

```

### Get Model Specs

**Syntaxe :** obj &lt;&lt; Get Model Specs

**Description :** Renvoie une liste nommée des résultats du modèle, chacun d’eux étant nommé selon les descriptions du modèle. La sortie inclut les estimations et les erreurs standard. Cette option est disponible pour ARIMA, ARIMA saisonnière, pour tous les modèles de lissage et de fonctions de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Model Specs;
Show( l );

```

### Get Models

**Syntaxe :** obj &lt;&lt; Get Models

**Description :** Renvoie une liste nommée des résultats du modèle, chacun d’eux étant nommé selon les descriptions du modèle. La sortie inclut les estimations et les erreurs standard. Cette option est disponible pour ARIMA, ARIMA saisonnière, pour tous les modèles de lissage et de fonctions de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Models;
Show( l );

```

### Hide All Reports

**Syntaxe :** obj &lt;&lt; Hide All Reports

**Description :** Masque tous les modèles listés dans la table Comparaison de modèles de la fenêtre du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
obj << Hide All Model Reports;

```

### Input Series

**Syntaxe :** obj &lt;&lt; Input Series( Column, &lt;ARIMA( )&gt;| &lt;Prewhitening( )&gt; ... )

**Description :** Regroupe les messages envoyés aux séries d’entrées. Remarque : requiert la spécification d’une variable Liste d’entrée.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Input Series( :Input Gas Rate, ARIMA( 1, 0, 0 ) );

```

### Keep Best Models

**Syntaxe :** obj &lt;&lt; Keep Best Models( "AIC"|"SBC" )

**Description :** Conserve les meilleurs modèles des classes de modèles individuelles et supprime les modèles restant.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
Wait( 1 );
obj << Keep Best Models( "AIC" );

```

### Lambda for Box-Cox

**Syntaxe :** obj = Time Series(...Lambda for Box-Cox( number=0 )...)

**Description :** Spécifie le paramètre lambda utilisé pour la transformation de Box-Cox des données d&apos;origine. "0" par défaut.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series(
	Y( :Steel Shipments ),
	Name( "Use Box-Cox Transformation" )(1),
	Name( "Lambda for Box-Cox" )(0)
);
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Linear Exponential Smoothing

**Syntaxe :** obj &lt;&lt; Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Trend|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description :** Ajuste un modèle par lissage exponentiel linéaire.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Linear Exponential Smoothing( Zero to One ),
	Linear Exponential Smoothing( Unconstrained ),
	Linear Exponential Smoothing( Stable Invertible ),
	Linear Exponential Smoothing(
		Custom( Level( Bounded( 0.8, 1 ) ), Trend( Bounded( 0.7, 0.9 ) ) )
	),
	Linear Exponential Smoothing(
		Custom( Level( Fixed( 0 ) ), Trend( Fixed( .3 ) ) )
	),
	Linear Exponential Smoothing(
		Custom( Level( Unconstrained ), Trend( Fixed( .4 ) ) )
	)
);

```

### Maximum Iterations

**Syntaxe :** obj &lt;&lt; Maximum Iterations( maxIter=250 )

**Description :** Rétablit le nombre maximal d&apos;itérations à effectuer dans les futures optimisations d’ajustement du modèle ARIMA. "250" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Maximum Iterations( 2 );
obj << ARIMA( 1, 0, 0 );

```

### Mean Line

**Syntaxe :** obj &lt;&lt; Mean Line( state=0|1 )

**Description :** Affiche ou masque la droite moyenne dans le graphique des séries chronologiques de base. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Mean Line( 1 );

```

### Model Comparison Report

**Syntaxe :** obj &lt;&lt; Model Comparison Report

**Description :** Configure les paramètres du rapport Comparaison de modèles.

### Number of Forecast Periods

**Syntaxe :** obj &lt;&lt; Number of Forecast Periods( number )

**Description :** Remet à zéro le nombre de périodes de prévisions et actualise le rapport de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Partial Autocorrelation

**Syntaxe :** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**Description :** Affiche ou masque le graphique d’autocorrélation partielle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Partial Autocorrelation( 1 );

```

### Prewhitening

**Syntaxe :** obj &lt;&lt; Prewhitening( Order(p, d, q), Seasonal(P, D, Q, S) )

**Description :** Définit l’ordre de centrage et réduction.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Input Series(
		:Input Gas Rate,
		Prewhitening( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 12 ) )
	)
);

```

### Remove All Simulation

**Syntaxe :** obj &lt;&lt; Remove All Simulation

**Description :** Supprime toutes les trajectoires futures simulées.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove All Simulation;

```

### Remove Cycle

**Syntaxe :** obj &lt;&lt; Remove Cycle( Units per Cycle( number ), Has Constant( 0|1 ) )

**Description :** Estime la composante cyclique en utilisant une fonction cosinus, puis la supprime des données.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Cycle( Units per Cycle( 12 ), Has Constant( 1 ) );

```

### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

### Remove Linear Trend

**Syntaxe :** obj &lt;&lt; Remove Linear Trend

**Description :** Estime la tendance linéaire, puis la supprime des données.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Linear Trend;

```

### Remove Model Simulation

**Syntaxe :** obj &lt;&lt; Remove Model Simulation( id )

**Description :** Supprime les trajectoires futures simulées d’un modèle ajusté.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove Model Simulation( 1 );

```

### Save Spectral Density

**Syntaxe :** obj &lt;&lt; Save Spectral Density

**Description :** Enregistre la densité spectrale dans un tableau.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Save Spectral Density;

```

### Seasonal ARIMA

**Syntaxe :** obj &lt;&lt; Seasonal ARIMA( p, d, q, P, D, Q, S, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**Description :** Ajuste un modèle ARIMA saisonnier. Définit l’ordre p,d,q,P,D,Q et S pour un modèle ARIMA(p,d,q)(P,D,Q)S.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << seasonal arima( 1, 0, 0, 1, 0, 0, 12 );
obj << seasonal arima(
	1,
	0,
	0,
	1,
	0,
	0,
	12,
	No Intercept( 1 ),
	No Constrain( 1 ),
	Confidence Intervals( 0.99 )
);

```

### Seasonal Exponential Smoothing

**Syntaxe :** obj &lt;&lt; Seasonal Exponential Smoothing( Zero to One|Unconstrained|Custom( (Level| Seasonal)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description :** Ajuste un modèle par lissage exponentiel saisonnier.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Seasonal Exponential Smoothing(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) )
	)
);

```

### Set Seed

**Syntaxe :** obj &lt;&lt; Set Seed( seed )

**Description :** Définit la graine aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );

```

### Show Box-Cox Transformation Plot

**Syntaxe :** obj &lt;&lt; Show Box-Cox Transformation Plot( state=0|1 )

**JMP Version ajoutée :** 16

### Show Lag Plot

**Syntaxe :** obj &lt;&lt; Show Lag Plot( state=0|1 )

### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique des séries chronologiques de base. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Show Points( 1 );

```

### Simple Exponential Smoothing

**Syntaxe :** obj &lt;&lt; Simple Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description :** Ajuste un modèle par lissage exponentiel simple.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Simple Exponential Smoothing( Zero to One ),
	Simple Exponential Smoothing( Unconstrained ),
	Simple Exponential Smoothing( Stable Invertible ),
	Simple Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Simple Moving Average

**Syntaxe :** obj &lt;&lt; Simple Moving Average

**Description :** Appelle une boîte de dialogue de spécification de la moyenne mobile simple et ajuste un modèle, s’il n’existe aucun argument supplémentaire. Passe les arguments à l’objet scriptable du modèle de la moyenne mobile simple. Renvoie une valeur qui correspond au handle scriptable du modèle de la moyenne mobile simple. Voir l’objet scriptable Moyenne mobile simple pour plus d’informations sur les arguments.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = dt << Time Series( Y( :Close ) );
sma = obj << Simple Moving Average;
sma << Add Model( 10 );

```

### Simple Moving Average Centering Method

**Syntaxe :** obj &lt;&lt; Simple Moving Average Centering Method( "Aucun centrage"|"Centrée"|"Centrée et double lissée pour un nombre de termes pair." )

### Simulate More

**Syntaxe :** obj &lt;&lt; Simulate More( id, n )

**Description :** Simule plusieurs trajectoires futures d’un modèle ajusté.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );

```

### Simulate Once

**Syntaxe :** obj &lt;&lt; Simulate Once( id )

**Description :** Simule une trajectoire future d’un modèle ajusté.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate Once( 1 );
obj << Simulate Once( 2 );

```

### Spectral Density

**Syntaxe :** obj &lt;&lt; Spectral Density( state=0|1 )

**Description :** Affiche ou masque les graphiques de densité spectrale.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Spectral Density( 1 );

```

### State Space Smoothing

**Syntaxe :** obj &lt;&lt; State Space Smoothing( Error Type( "Additive"|"Multiplicative" ),Trend Type( "None"|"Additive"|"Multiplicative" ),Seasonal Type( "None"|"Additive"|"Multiplicative" ),Damped( "Yes"|"No" ),Period( m ),Constrained( "Yes"|"No" ) )

**Description :** Ajuste un modèle de lissage à espace d&apos;état

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << State Space Smoothing(
	Error Type( "Multiplicative" ),
	Trend Type( "Additive" ),
	Seasonal Type( "Multiplicative" ),
	Damped( "No" ),
	Period( 12 ),
	Constrained( "Yes" )
);

```

### Time Series Graph

**Syntaxe :** obj &lt;&lt; Time Series Graph( state=0|1 )

**Description :** Active ou désactive le graphique de série chronologique de base. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Time Series Graph( 1 );

```

### Transfer Function

**Syntaxe :** obj &lt;&lt; Transfer Function( Order(p, d, q), Seasonal(P, D, Q, S), input1(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag)), &lt;input2(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag))&gt;, ..., &lt;No Intercept(flag1)&gt;, &lt;No Constrain(flag2)&gt;, &lt;Alternative Parameterization( flag3 )&gt;, &lt;Confidence Intervals( level )&gt;, &lt;Number of Forecast Periods( nAhead )&gt; )

**Description :** Ajuste un modèle de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 ),
	Alternative Parameterization( 1 ),
	Confidence Intervals( 0.99 ),
	Number of Forecast Periods( 10 )
);

```

### Use Box-Cox Transformation

**Syntaxe :** obj = Time Series(...Use Box-Cox Transformation( state=0|1 )...)

**Description :** Transforme les données d&apos;origine en utilisant la transformation de Box-Cox avec le lambda spécifié dans l&apos;option Lambda pour Box-Cox. Si cette option est sélectionnée, toutes les analyses du rapport Série chronologique sont réalisées sur les données transformées.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series(
	Y( :Steel Shipments ),
	Name( "Use Box-Cox Transformation" )(1)
);
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le graphique variogramme dans le rapport de diagnostics de base des séries chronologiques.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Variogram( 1 );

```

### Winters Method

**Syntaxe :** obj &lt;&lt; Winters Method( Zero to One|Unconstrained|Custom( (Level|Seasonal|Trend)( Unconstrained| Seasonal| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Description :** Ajuste un modèle par lissage à l’aide de la méthode de Winter.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom(
			Level( Bounded( 0, 1 ) ),
			Trend( Bounded( 0, 1 ) ),
			Seasonal( Bounded( 0, 1 ) )
		)
	)
);

```

### X11

**Syntaxe :** obj &lt;&lt; X11( Additive|Multiplicative )

**Description :** Supprime la tendance et les effets saisonniers en utilisant la méthode X-11 développée par le Bureau du Recensement des États-Unis.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( X( :Date ), Y( :Sales ) );
obj << X11( Additive );

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj &lt;&lt; Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj &lt;&lt; Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

**Syntaxe :** obj = Time Series(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

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

## Damped-Trend Linear Exponential Smoothing

### Messages d'éléments

#### Actual

**Syntaxe :** obj &lt;&lt; Actual( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs observées afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntaxe :** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un tâche SAS pour lancer SAS et exécuter l&apos;analyse dans PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntaxe :** obj &lt;&lt; Innovations( state=0|1 )

**Description :** Actif par défaut.

**JMP Version ajoutée :** 16

#### Lower Confidence Limit

**Syntaxe :** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance  inférieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntaxe :** obj &lt;&lt; No Constrain( state=0|1 )

**Description :** Augmente la contrainte sur les paramètres d’autorégression de manière à ce qu’ils restent toujours dans la zone stable et sur les paramètres à moyenne mobile pour qu’ils restent dans la zone inversible lors du lancement d’un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntaxe :** obj &lt;&lt; No Intercept( state=0|1 )

**Description :** Fixe la constante à l&apos;origine à zéro lors du lancement d&apos;un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntaxe :** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations partielles. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntaxe :** obj &lt;&lt; Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntaxe :** obj &lt;&lt; Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntaxe :** obj &lt;&lt; Prediction Interval( level )

**Description :** Définit la taille de l&apos;intervalle de confiance de la prévision pour le modèle ARIMA. La taille par défaut est 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs des résidus afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntaxe :** obj &lt;&lt; Save Columns

**Description :** Crée une nouvelle table de données contenant les valeurs observées et prévues, ainsi que les erreurs standard, les résidus et les intervalles de prévision à 95 % relatifs à la réponse. Cette option est disponible pour tous les modèles ARIMA, de lissage et de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de prévision dans une nouvelle colonne de la table de données. Cette option est disponible pour tous les modèles ARIMA et de lissage.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntaxe :** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntaxe :** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données Erreur standard des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntaxe :** obj &lt;&lt; Time( state=0|1 )

**Description :** Sélectionne la colonne de données Temps afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntaxe :** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance supérieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Difference

### Messages d'éléments

#### Autocorrelation

**Syntaxe :** obj &lt;&lt; Autocorrelation( state=0|1 )

**Description :** Affiche ou masque l’autocorrélation dans le rapport de différences. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Autocorrelation( 1 ) );

```

#### Connecting Lines

**Syntaxe :** obj &lt;&lt; Connecting Lines( state=0|1 )

**Description :** Affiche ou masque les droites reliant les points sur le graphique de différences. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Connecting Lines( 1 ) );

```

#### Difference Graph

**Syntaxe :** obj &lt;&lt; Difference Graph( state=0|1 )

**Description :** Affiche ou masque le graphique de différences. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Difference Graph( 1 ) );

```

#### Mean Line

**Syntaxe :** obj &lt;&lt; Mean Line( state=0|1 )

**Description :** Affiche ou masque la droite de la moyenne sur le graphique de différences.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Mean Line( 1 ) );

```

#### Partial Autocorrelation

**Syntaxe :** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**Description :** Affiche ou masque l’autocorrélation partielle dans le rapport de différences. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Partial Autocorrelation( 1 ) );

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Save

**Syntaxe :** obj &lt;&lt; Save

**Description :** Enregistre les valeurs de différence dans une nouvelle colonne de la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Save );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points sur le graphique de différences. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Show Points( 1 ) );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme dans le rapport de différences.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Variogram( 1 ) );

```

## Double (Brown) Exponential Smoothing

### Messages d'éléments

#### Actual

**Syntaxe :** obj &lt;&lt; Actual( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs observées afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntaxe :** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un tâche SAS pour lancer SAS et exécuter l&apos;analyse dans PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntaxe :** obj &lt;&lt; Innovations( state=0|1 )

**Description :** Actif par défaut.

**JMP Version ajoutée :** 16

#### Lower Confidence Limit

**Syntaxe :** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance  inférieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntaxe :** obj &lt;&lt; No Constrain( state=0|1 )

**Description :** Augmente la contrainte sur les paramètres d’autorégression de manière à ce qu’ils restent toujours dans la zone stable et sur les paramètres à moyenne mobile pour qu’ils restent dans la zone inversible lors du lancement d’un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntaxe :** obj &lt;&lt; No Intercept( state=0|1 )

**Description :** Fixe la constante à l&apos;origine à zéro lors du lancement d&apos;un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntaxe :** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations partielles. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntaxe :** obj &lt;&lt; Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntaxe :** obj &lt;&lt; Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntaxe :** obj &lt;&lt; Prediction Interval( level )

**Description :** Définit la taille de l&apos;intervalle de confiance de la prévision pour le modèle ARIMA. La taille par défaut est 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs des résidus afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntaxe :** obj &lt;&lt; Save Columns

**Description :** Crée une nouvelle table de données contenant les valeurs observées et prévues, ainsi que les erreurs standard, les résidus et les intervalles de prévision à 95 % relatifs à la réponse. Cette option est disponible pour tous les modèles ARIMA, de lissage et de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de prévision dans une nouvelle colonne de la table de données. Cette option est disponible pour tous les modèles ARIMA et de lissage.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntaxe :** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntaxe :** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données Erreur standard des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntaxe :** obj &lt;&lt; Time( state=0|1 )

**Description :** Sélectionne la colonne de données Temps afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntaxe :** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance supérieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Linear (Holt) Exponential Smoothing

### Messages d'éléments

#### Actual

**Syntaxe :** obj &lt;&lt; Actual( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs observées afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntaxe :** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un tâche SAS pour lancer SAS et exécuter l&apos;analyse dans PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntaxe :** obj &lt;&lt; Innovations( state=0|1 )

**Description :** Actif par défaut.

**JMP Version ajoutée :** 16

#### Lower Confidence Limit

**Syntaxe :** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance  inférieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntaxe :** obj &lt;&lt; No Constrain( state=0|1 )

**Description :** Augmente la contrainte sur les paramètres d’autorégression de manière à ce qu’ils restent toujours dans la zone stable et sur les paramètres à moyenne mobile pour qu’ils restent dans la zone inversible lors du lancement d’un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntaxe :** obj &lt;&lt; No Intercept( state=0|1 )

**Description :** Fixe la constante à l&apos;origine à zéro lors du lancement d&apos;un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntaxe :** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations partielles. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntaxe :** obj &lt;&lt; Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntaxe :** obj &lt;&lt; Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntaxe :** obj &lt;&lt; Prediction Interval( level )

**Description :** Définit la taille de l&apos;intervalle de confiance de la prévision pour le modèle ARIMA. La taille par défaut est 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs des résidus afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntaxe :** obj &lt;&lt; Save Columns

**Description :** Crée une nouvelle table de données contenant les valeurs observées et prévues, ainsi que les erreurs standard, les résidus et les intervalles de prévision à 95 % relatifs à la réponse. Cette option est disponible pour tous les modèles ARIMA, de lissage et de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de prévision dans une nouvelle colonne de la table de données. Cette option est disponible pour tous les modèles ARIMA et de lissage.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntaxe :** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntaxe :** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données Erreur standard des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntaxe :** obj &lt;&lt; Time( state=0|1 )

**Description :** Sélectionne la colonne de données Temps afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntaxe :** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance supérieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal ARIMA

### Messages d'éléments

#### Actual

**Syntaxe :** obj &lt;&lt; Actual( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs observées afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntaxe :** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un tâche SAS pour lancer SAS et exécuter l&apos;analyse dans PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntaxe :** obj &lt;&lt; Innovations( state=0|1 )

**Description :** Actif par défaut.

**JMP Version ajoutée :** 16

#### Lower Confidence Limit

**Syntaxe :** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance  inférieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntaxe :** obj &lt;&lt; No Constrain( state=0|1 )

**Description :** Augmente la contrainte sur les paramètres d’autorégression de manière à ce qu’ils restent toujours dans la zone stable et sur les paramètres à moyenne mobile pour qu’ils restent dans la zone inversible lors du lancement d’un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntaxe :** obj &lt;&lt; No Intercept( state=0|1 )

**Description :** Fixe la constante à l&apos;origine à zéro lors du lancement d&apos;un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntaxe :** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations partielles. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntaxe :** obj &lt;&lt; Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntaxe :** obj &lt;&lt; Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntaxe :** obj &lt;&lt; Prediction Interval( level )

**Description :** Définit la taille de l&apos;intervalle de confiance de la prévision pour le modèle ARIMA. La taille par défaut est 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs des résidus afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntaxe :** obj &lt;&lt; Save Columns

**Description :** Crée une nouvelle table de données contenant les valeurs observées et prévues, ainsi que les erreurs standard, les résidus et les intervalles de prévision à 95 % relatifs à la réponse. Cette option est disponible pour tous les modèles ARIMA, de lissage et de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de prévision dans une nouvelle colonne de la table de données. Cette option est disponible pour tous les modèles ARIMA et de lissage.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntaxe :** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntaxe :** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données Erreur standard des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntaxe :** obj &lt;&lt; Time( state=0|1 )

**Description :** Sélectionne la colonne de données Temps afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntaxe :** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance supérieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal Exponential Smoothing

### Messages d'éléments

#### Actual

**Syntaxe :** obj &lt;&lt; Actual( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs observées afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntaxe :** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un tâche SAS pour lancer SAS et exécuter l&apos;analyse dans PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntaxe :** obj &lt;&lt; Innovations( state=0|1 )

**Description :** Actif par défaut.

**JMP Version ajoutée :** 16

#### Lower Confidence Limit

**Syntaxe :** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance  inférieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntaxe :** obj &lt;&lt; No Constrain( state=0|1 )

**Description :** Augmente la contrainte sur les paramètres d’autorégression de manière à ce qu’ils restent toujours dans la zone stable et sur les paramètres à moyenne mobile pour qu’ils restent dans la zone inversible lors du lancement d’un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntaxe :** obj &lt;&lt; No Intercept( state=0|1 )

**Description :** Fixe la constante à l&apos;origine à zéro lors du lancement d&apos;un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntaxe :** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations partielles. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntaxe :** obj &lt;&lt; Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntaxe :** obj &lt;&lt; Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntaxe :** obj &lt;&lt; Prediction Interval( level )

**Description :** Définit la taille de l&apos;intervalle de confiance de la prévision pour le modèle ARIMA. La taille par défaut est 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs des résidus afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntaxe :** obj &lt;&lt; Save Columns

**Description :** Crée une nouvelle table de données contenant les valeurs observées et prévues, ainsi que les erreurs standard, les résidus et les intervalles de prévision à 95 % relatifs à la réponse. Cette option est disponible pour tous les modèles ARIMA, de lissage et de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de prévision dans une nouvelle colonne de la table de données. Cette option est disponible pour tous les modèles ARIMA et de lissage.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntaxe :** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntaxe :** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données Erreur standard des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntaxe :** obj &lt;&lt; Time( state=0|1 )

**Description :** Sélectionne la colonne de données Temps afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntaxe :** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance supérieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Exponential Smoothing

### Messages d'éléments

#### Actual

**Syntaxe :** obj &lt;&lt; Actual( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs observées afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntaxe :** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un tâche SAS pour lancer SAS et exécuter l&apos;analyse dans PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntaxe :** obj &lt;&lt; Innovations( state=0|1 )

**Description :** Actif par défaut.

**JMP Version ajoutée :** 16

#### Lower Confidence Limit

**Syntaxe :** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance  inférieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntaxe :** obj &lt;&lt; No Constrain( state=0|1 )

**Description :** Augmente la contrainte sur les paramètres d’autorégression de manière à ce qu’ils restent toujours dans la zone stable et sur les paramètres à moyenne mobile pour qu’ils restent dans la zone inversible lors du lancement d’un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntaxe :** obj &lt;&lt; No Intercept( state=0|1 )

**Description :** Fixe la constante à l&apos;origine à zéro lors du lancement d&apos;un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntaxe :** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations partielles. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntaxe :** obj &lt;&lt; Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntaxe :** obj &lt;&lt; Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntaxe :** obj &lt;&lt; Prediction Interval( level )

**Description :** Définit la taille de l&apos;intervalle de confiance de la prévision pour le modèle ARIMA. La taille par défaut est 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs des résidus afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntaxe :** obj &lt;&lt; Save Columns

**Description :** Crée une nouvelle table de données contenant les valeurs observées et prévues, ainsi que les erreurs standard, les résidus et les intervalles de prévision à 95 % relatifs à la réponse. Cette option est disponible pour tous les modèles ARIMA, de lissage et de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de prévision dans une nouvelle colonne de la table de données. Cette option est disponible pour tous les modèles ARIMA et de lissage.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntaxe :** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntaxe :** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données Erreur standard des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntaxe :** obj &lt;&lt; Time( state=0|1 )

**Description :** Sélectionne la colonne de données Temps afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntaxe :** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance supérieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Moving Average

### Messages d'éléments

#### Add Model

**Syntaxe :** obj &lt;&lt; Add Model( Window Width, &lt;Centered&gt; )

**Description :** Ajouter un modèle à moyenne mobile simple. Le modèle est identifié en déplaçant la largeur de la fenêtre. L’argument facultatif indique si la moyenne est centrée.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Add Model( 10 ) );
sma << Add Model( 15, Centered );

```

#### Connecting Lines

**Syntaxe :** obj &lt;&lt; Connecting Lines( &lt;1|0&gt; )

**Description :** Option graphique pour l’affichage des droites connectées.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Connecting Lines );

```

#### Get Results

**Syntaxe :** obj &lt;&lt; Get Results

**Description :** Renvoyer tous les modèles à moyenne mobile simple en tant qu’objet JSL.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultobj = obj << Simple Moving Average( Get Result );

```

#### Remove Model

**Syntaxe :** obj &lt;&lt; Remove Model( Window Width, &lt;Centered&gt; )

**Description :** Supprimer un modèle à moyenne mobile simple. Le modèle est identifié en déplaçant la largeur de la fenêtre.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
obj << Simple Moving Average( Remove Model( 5 ) );

```

#### Remove Report

**Syntaxe :** obj &lt;&lt; Remove Report

**JMP Version ajoutée :** 16

#### Save to Data Table

**Syntaxe :** obj &lt;&lt; Save to Data Table

**Description :** Enregistrer tous les modèles à moyenne mobile dans une table de données et renvoyer le handle de la table de données

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultdt = obj << Simple Moving Average( Save to Data Table );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( &lt;1|0&gt; )

**Description :** Option graphique pour l’affichage des points.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Show Points( 0 ) );

```

## Transfer Function Model

### Messages d'éléments

#### Alternative Parameterization

**Syntaxe :** obj &lt;&lt; Alternative Parameterization( state=0|1 )

**Description :** Précise si le coefficient de régression général est calculé à partir des polynômes du numérateur.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Alternative Parameterization( 1 )
);

```

#### Autocorrelations

**Syntaxe :** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Compute Objective

**Syntaxe :** obj &lt;&lt; Compute Objective

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un tâche SAS pour lancer SAS et exécuter l&apos;analyse dans PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Create SAS Job
);

```

#### Import New Inputs

**Syntaxe :** obj &lt;&lt; Import New Inputs

**JMP Version ajoutée :** 16

#### Maximum Iterations

**Syntaxe :** obj &lt;&lt; Maximum Iterations( number )

**Description :** Spécifie le nombre maximum d&apos;itérations.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Maximum Iterations( 10 )
);

```

#### No Constrain

**Syntaxe :** obj &lt;&lt; No Constrain( state=0|1 )

**Description :** Supprime les contraintes sur les coefficients d&apos;autorégression et de moyenne mobile.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Constrain( 1 )
);

```

#### No Intercept

**Syntaxe :** obj &lt;&lt; No Intercept( state=0|1 )

**Description :** Fixe la constante à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 )
);

```

#### Number of Forecast Periods

**Syntaxe :** obj &lt;&lt; Number of Forecast Periods( number )

**Description :** Spécifie le nombre de périodes pour la prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Number of Forecast Periods( 10 )
);

```

#### Partial Autocorrelations

**Syntaxe :** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations partielles. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Partial Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Plot

**Syntaxe :** obj &lt;&lt; Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Plot( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Prediction Interval

**Syntaxe :** obj &lt;&lt; Prediction Interval( number )

**Description :** Définit le niveau des intervalles de confiance affichés.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Confidence Intervals( 0.99 )
);

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Save Columns

**Syntaxe :** obj &lt;&lt; Save Columns

**Description :** Crée une nouvelle table de données contenant les valeurs observées et prévues, ainsi que les erreurs standard, les résidus et les intervalles de prévision à 95 % relatifs à la réponse. Cette option est disponible pour tous les modèles ARIMA, de lissage et de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Save Columns
);

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Variogram( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

## Winters Method (Additive)

### Messages d'éléments

#### Actual

**Syntaxe :** obj &lt;&lt; Actual( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs observées afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntaxe :** obj &lt;&lt; Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un tâche SAS pour lancer SAS et exécuter l&apos;analyse dans PROC ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntaxe :** obj &lt;&lt; Innovations( state=0|1 )

**Description :** Actif par défaut.

**JMP Version ajoutée :** 16

#### Lower Confidence Limit

**Syntaxe :** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance  inférieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntaxe :** obj &lt;&lt; No Constrain( state=0|1 )

**Description :** Augmente la contrainte sur les paramètres d’autorégression de manière à ce qu’ils restent toujours dans la zone stable et sur les paramètres à moyenne mobile pour qu’ils restent dans la zone inversible lors du lancement d’un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntaxe :** obj &lt;&lt; No Intercept( state=0|1 )

**Description :** Fixe la constante à l&apos;origine à zéro lors du lancement d&apos;un modèle ARIMA.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntaxe :** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Description :** Affiche ou masque le graphique des autocorrélations partielles. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntaxe :** obj &lt;&lt; Plot( state=0|1 )

**Description :** Affiche ou masque le graphique des résidus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntaxe :** obj &lt;&lt; Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntaxe :** obj &lt;&lt; Prediction Interval( level )

**Description :** Définit la taille de l&apos;intervalle de confiance de la prévision pour le modèle ARIMA. La taille par défaut est 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; Remove Fit

**JMP Version ajoutée :** 16

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals( state=0|1 )

**Description :** Sélectionne la colonne de données Valeurs des résidus afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntaxe :** obj &lt;&lt; Save Columns

**Description :** Crée une nouvelle table de données contenant les valeurs observées et prévues, ainsi que les erreurs standard, les résidus et les intervalles de prévision à 95 % relatifs à la réponse. Cette option est disponible pour tous les modèles ARIMA, de lissage et de fonction de transfert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de prévision dans une nouvelle colonne de la table de données. Cette option est disponible pour tous les modèles ARIMA et de lissage.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntaxe :** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntaxe :** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision sur le graphique de prévision des séries chronologiques. Cette option est disponible pour tous les modèles ARIMA et de lissage. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Description :** Sélectionne la colonne de données Erreur standard des valeurs prévues afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntaxe :** obj &lt;&lt; Time( state=0|1 )

**Description :** Sélectionne la colonne de données Temps afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntaxe :** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Description :** Sélectionne la colonne de la limite de confiance supérieure à 95% afin de l&apos;enregistrer à l&apos;aide de la commande Enregistrer les colonnes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( state=0|1 )

**Description :** Affiche ou masque le variogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

