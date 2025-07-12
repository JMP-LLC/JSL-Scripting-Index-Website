# Distribution



## Colonnes

### By

**Syntaxe :** obj = Distribution(...<By( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );

```

### Column

**Syntaxe :** obj = Distribution(...<Column( column(s) )>...)

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

### Columns

**Syntaxe :** obj = Distribution(...Columns( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les colonnes catégorielles ou continues à analyser.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

### Freq

**Syntaxe :** obj = Distribution(...<Freq( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Distribution( Column( :Age, :Weight ), Freq( _freqcol ) );

```

### Weight

**Syntaxe :** obj = Distribution(...<Weight( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Weight( _weightcol ) );

```

### Y

**Syntaxe :** obj = Distribution(...Y( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les colonnes catégorielles ou continues à analyser.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

## Constructeurs associés

### Distribution

**Syntaxe :** Distribution( Column() )

**Description :** Affiche la distribution et les statistiques de résumé univariées pour chaque variable. Les résultats et options dépendent du type de modélisation de chaque variable. Certaines options incluent les histogrammes, les boîtes à moustaches, les graphiques des quantiles, l&apos;ajustement des distributions et l&apos;analyse de capabilité.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

## Messages d'éléments

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Arrange in Rows

**Syntaxe :** obj << Arrange in Rows( number )

**Description :** Permet de spécifier le nombre de rapports de distribution à afficher dans l&apos;ensemble de la fenêtre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << ArrangeInRows( 3 );

```

### Axes on Left

**Syntaxe :** obj << Axes on Left( state=0|1 )

**Description :** Déplace les axes de dénombrement, de probabilité, de densité et du graphique des quantiles normaux sur la partie gauche d’un graphique horizontal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Column( :Height ),
	Horizontal Layout( 1 ),
	Count Axis( 1 )
);
obj << Axes on Left( 1 );

```

### CDF Plot

**Syntaxe :** obj << CDF Plot( state=0|1 )

**Description :** Affiche ou masque un graphique de la fonction de distribution cumulée empirique.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

### Capability Analysis

**Syntaxe :** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Description :** Effectue une analyse de capabilité avec la limite de spécification inférieure (LSL), la cible et la limite de spécification supérieure (USL) indiquées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

### Confidence Interval

**Syntaxe :** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**Description :** Calcule les intervalles de confiance spécifiés autour de la moyenne et de l&apos;écart-type. Si vous spécifiez le sigma, la valeur spécifiée est utilisée pour calculer l&apos;intervalle de confiance autour de la moyenne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

### Count Axis

**Syntaxe :** obj << Count Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de dénombrement de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

### Custom Quantiles

**Syntaxe :** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Description :** Crée un rapport de l’estimation des quantiles basée sur les rangs et un rapport de l’estimation des quantiles de vraisemblance emprique lissée pour les quantiles spécifiés. Utilise la fraction en tant que niveau de confiance pour les intervalles de confiance dans les deux rapports.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

### Customize Summary Statistics

**Syntaxe :** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**Description :** Personnalise les statistiques de résumé affichées dans le rapport Statistiques de résumé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Density Axis

**Syntaxe :** obj << Density Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de densité de la courbe de densité de cet histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

### Fit All

**Syntaxe :** obj << Fit All

**Description :** Compare toutes les distributions possibles.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

### Fit Beta

**Syntaxe :** obj << Fit Beta

**Description :** Ajuste une distribution bêta à deux paramètres aux données comprises entre 0 et 1 (non inclus).

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

### Fit Beta Binomial

**Syntaxe :** obj << Fit Beta Binomial( Sample Size( n | column ) )

**Description :** Ajuste une distribution bêta binomiale avec la taille d&apos;échantillon de constante spécifiée ou une colonne contenant les tailles d&apos;échantillon données. Cette distribution est une version plus flexible de la distribution binomiale.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

### Fit Binomial

**Syntaxe :** obj << Fit Binomial( Sample size( n | column ) )

**Description :** Ajuste une distribution binomiale avec la taille d&apos;échantillon de constante spécifiée ou une colonne contenant les tailles d&apos;échantillon données. Cette distribution modélise le nombre total de réussites parmi n essais indépendants.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

### Fit Cauchy

**Syntaxe :** obj << Fit Cauchy

**Description :** Ajuste une distribution de Cauchy en fonction des données. La distribution de Cauchy est robuste aux valeurs aberrantes et est équivalente à une distribution t à un degré de liberté.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

### Fit ExGaussian

**Syntaxe :** obj << Fit ExGaussian

**Description :** Ajuste une distribution gaussienne exponentiellement modifiée aux données.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

### Fit Exponential

**Syntaxe :** obj << Fit Exponential

**Description :** Ajuste une distribution exponentielle aux données non-négatives.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

### Fit Gamma

**Syntaxe :** obj << Fit Gamma

**Description :** Ajuste une distribution gamma à deux paramètres aux données positives.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

### Fit Handle

**Syntaxe :** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**Description :** Tableau de poignées aux distributions ajustées. Cela vous permet d&apos;envoyer des commandes aux distributions spécifiques qui ont été ajustées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

### Fit Johnson

**Syntaxe :** obj << Fit Johnson

**Description :** Ajuste une distribution de Johnson en fonction des données. Le plus approprié des trois types de distributions de Johnson (Su, Sb et Sl) est choisi en fonction des quantiles.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

### Fit Largest Extreme Value

**Syntaxe :** obj << Fit Largest Extreme Value

**Description :** Ajuste une distribution de la plus grande valeur extrême aux données.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

### Fit Lognormal

**Syntaxe :** obj << Fit Lognormal

**Description :** Ajuste une distribution log-normale aux données positives.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

### Fit Negative Binomial

**Syntaxe :** obj << Fit Negative Binomial

**Description :** Ajuste une distribution binomiale négative en fonction des données. Cette distribution est équivalente à la distribution Gamma de Poisson.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

### Fit Normal

**Syntaxe :** obj << Fit Normal

**Description :** Ajuste une distribution normale en fonction des données.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

### Fit Normal 2 Mixture

**Syntaxe :** obj << Fit Normal 2 Mixture

**Description :** Ajuste un mélange de deux distributions normales. Cette distribution est capable d&apos;ajuster des données bimodales.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

### Fit Normal 3 Mixture

**Syntaxe :** obj << Fit Normal 3 Mixture

**Description :** Ajuste un mélange de trois distributions normales. Cette distribution est capable d&apos;ajuster des données multimodales.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

### Fit Poisson

**Syntaxe :** obj << Fit Poisson

**Description :** Ajuste une distribution de Poisson en fonction des données. Cette distribution est souvent utilisée pour les données de dénombrement. La moyenne ajustée de la distribution de Poisson est égale à la variance.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

### Fit SHASH

**Syntaxe :** obj << Fit Shash

**Description :** Ajuste une distribution sinh-arcsinh (SHASH) en fonction des données.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

### Fit Smallest Extreme Value

**Syntaxe :** obj << Fit Smallest Extreme Value

**Description :** Ajuste une distribution de la plus petite valeur extrême aux données.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

### Fit Smooth Curve

**Syntaxe :** obj << Fit Smooth Curve( <Bandwidth( number )> )

**Description :** Ajuste une courbe de lissage aux données en utilisant une estimation de densité non paramétrique. Vous pouvez définir le lissage en spécifiant la largeur de bande.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

### Fit Student's t

**Syntaxe :** obj << Fit Student&apos;s t

**Description :** Ajuste une distribution t de Student en fonction des données. Cette distribution est une option robuste qui recouvre l&apos;espace entre une distribution normale et une distribution de Cauchy.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

### Fit Weibull

**Syntaxe :** obj << Fit Weibull

**Description :** Ajuste une distribution de Weibull à deux paramètres aux données positives.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

### Fit ZI Beta Binomial

**Syntaxe :** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**Description :** Ajuste une distribution binomiale bêta comportant un Dirac en 0 avec la taille d&apos;échantillon constante spécifiée ou une colonne contenant la taille d&apos;échantillon. Cette distribution modélise le nombre total de réussites parmi n essais indépendants où plus de zéros sont observés que ceux attendus pour la distribution binomiale bêta.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Binomial

**Syntaxe :** obj << Fit ZI Binomial( Sample Size( n | column ) )

**Description :** Ajuste une distribution binomiale comportant un Dirac en 0 avec la taille d&apos;échantillon constante spécifiée ou une colonne contenant la taille d&apos;échantillon. Cette distribution modélise le nombre total de réussites parmi n essais indépendants où plus de zéros sont observés que ceux attendus pour la distribution binomiale.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Negative Binomial

**Syntaxe :** obj << Fit ZI Negative Binomial

**Description :** Ajuste une distribution binomiale négative comportant un Dirac en 0 aux données qui contiennent des valeurs de zéro.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

### Fit ZI Poisson

**Syntaxe :** obj << Fit ZI Poisson

**Description :** Ajuste une distribution de Poisson comportant un Dirac en 0 aux données qui contiennent des valeurs de zéro.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

### Fit ZI SHASH

**Syntaxe :** obj << Fit ZI SHASH

**Description :** Ajuste une distribution SHASH par rapport aux données avec une masse de points égale à zéro.

```jsl

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

### Frequencies

**Syntaxe :** obj << Frequencies( state=0|1 )

**Description :** Affiche ou masque le rapport Fréquences, qui énumère les dénombrements et les probabilités pour chaque niveau. Actif par défaut.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
Wait( 1 );
obj << Frequencies( 0 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

### Histogram

**Syntaxe :** obj << Histogram( state=0|1 )

**Description :** Affiche ou masque l&apos;histogramme. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

### Histogram Color

**Syntaxe :** obj << Histogram Color( color )

**Description :** Change la couleur des barres de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

### Horizontal Layout

**Syntaxe :** obj << Horizontal Layout( state=0|1 )

**Description :** Change l&apos;orientation de l&apos;histogramme et des rapports à l&apos;horizontale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

### Mosaic Plot

**Syntaxe :** obj << Mosaic Plot( state=0|1 )

**Description :** Affiche ou masque un diagramme en barres en mosaïque pour chaque variable de réponse nominale ou ordinale. Un graphique en mosaïque est un diagramme en barres empilées où chaque segment est proportionnel au dénombrement de fréquence de son groupe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

### Normal Quantile Plot

**Syntaxe :** obj << Normal Quantile Plot( state=0|1 )

**Description :** Affiche ou masque un graphique qui peut être utilisé pour visualiser à quel point une variable est normalement distribuée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

### Order By

**Syntaxe :** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**Description :** Trie l&apos;histogramme, le graphique en mosaïque, et le rapport Fréquences dans l&apos;ordre croissant ou décroissant, par dénombrement. Vous pouvez également revenir au tri par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

### Outlier Box Plot

**Syntaxe :** obj << Outlier Box Plot( state=0|1 )

**Description :** Affiche ou masque une boîte à moustaches qui vous permet de voir la distribution et d&apos;identifier les valeurs aberrantes possibles. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

### Outlier Box Plot Row Cutoff

**Syntaxe :** obj << Outlier Box Plot Row Cutoff( number )

**Description :** Définit l’option de lancement pour le nombre maximal de lignes avant la désactivation initiale de la boîte à moustaches des valeurs. "100000" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

### PpK Capability Labeling

**Syntaxe :** obj << PpK Capability Labeling( state=0|1 )

**Description :** Dans une sortie Capabilité du processus, change l&apos;étiquetage des indices de capabilité globaux de manière à utiliser le préfixe Pp au lieu de Cp. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Prediction Interval

**Syntaxe :** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**Description :** Calcul les intervalles de prévision pour une observation future individuelle et la moyenne d&apos;un nombre spécifié (N échantillons) d&apos;observations futures. Vous pouvez créer des intervalles de prévision unilatéraux ou bilatéraux.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

### Prob Axis

**Syntaxe :** obj << Prob Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de probabilité ou de proportion de cet histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

### Process Capability

**Syntaxe :** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**Description :** Calcule une analyse de capabilité de processus avec la limite de spécification inférieure (LSL), la cible et la limite de spécification supérieure (USL) données. Le rapport Capabilité du processus comprend un histogramme, les détails de résumé, les indices de capabilité et les statistiques de non-conformité.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Quantile Box Plot

**Syntaxe :** obj << Quantile Box Plot( state=0|1 )

**Description :** Affiche ou masque une boîte à moustaches avec les quantiles suivants : 0 %, 0,5 %, 2,5 %, 10 %, 25 %, 50 %, 75 %, 90 %, 97,5 %, 99 %, et 100 %.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

### Quantiles

**Syntaxe :** obj << Quantiles( state=0|1 )

**Description :** Affiche ou masque le rapport Quantiles, qui énumère les valeurs des quantiles sélectionnés. Par défaut, les quantiles listés sont 0 %, 0,5 %, 2,5 %, 10 %, 25 %, 50 %, 75 %, 90 %, 97,5 %, 99,5 %, et 100 %. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

### Save

**Syntaxe :** obj << Save( "Nombres de niveaux"|"Points milieu des niveaux"|"Rangs de la variable"|"Rangs moyens"|"Scores de probabilité"|"Quantiles normaux"|"Standardisé"|"Centré"|"Standardisation robuste"|"Centrage robuste"|"Limites de spécification"|"Script dans le log" )

**Description :** Enregistre la statistique de l&apos;observation spécifiée dans une nouvelle colonne de la table de données. Une option permet également d&apos;imprimer les commandes de script qui génèrent le rapport actuel dans la fenêtre de log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

### Separate Bars

**Syntaxe :** obj << Separate Bars( state=0|1 )

**Description :** Ajoute un espace entre les barres de l&apos;histogramme. Cette option est uniquement disponible pour les variables catégorielles.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Separate Bars( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

### Set Bin Width

**Syntaxe :** obj << Set Bin Width( number )

**Description :** Définit la largeur des intervalles de classe de l&apos;histogramme, en utilisant l&apos;axe comme origine. Cette option est uniquement disponible pour les variables continues.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

### Set Quantile Increment

**Syntaxe :** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**Description :** Définit l&apos;incrément utilisé dans le rapport Quantiles à la fraction spécifiée ou revient aux quantiles par défaut. Cette option est uniquement disponible pour les variables continues.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

### Shadowgram

**Syntaxe :** obj << Shadowgram( state=0|1 )

**Description :** Affiche ou masque un shadowgramme lisse à la place de l&apos;histogramme. Un shadowgramme superpose les histogrammes de différentes largeurs de bin. Cette option est uniquement disponible pour les variables continues.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

### Show Counts

**Syntaxe :** obj << Show Counts( state=0|1 )

**Description :** Affiche ou masque les dénombrements des barres sur l&apos;histogramme, qui indique la fréquence des valeurs de colonne représentée par chaque barre de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

### Show Percents

**Syntaxe :** obj << Show Percents( state=0|1 )

**Description :** Affiche ou masque les barres de pourcentage sur l&apos;histogramme, qui indique le pourcentage des valeurs de colonne représenté par chaque barre de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

### Stack

**Syntaxe :** obj << Stack( state=0|1 )

**Description :** Change l&apos;orientation de l&apos;histogramme et des rapports à l&apos;horizontale et empile verticalement les rapports de distribution individuels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Stack( 1 );

```

### Std Error Bars

**Syntaxe :** obj << Std Error Bars( state=0|1 )

**Description :** Affiche ou masque les barres d&apos;erreur standard sur chaque barre de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

### Stem and Leaf

**Syntaxe :** obj << Stem and Leaf( state=0|1 )

**Description :** Affiche ou masque un diagramme en tiges et feuilles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

### Summary Statistics

**Syntaxe :** obj << Summary Statistics( state=0|1 )

**Description :** Affiche ou masque le rapport Statistiques de résumé, qui énumère la moyenne, l&apos;écart-type et d&apos;autres statistiques de résumé pour les variables continues. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

### Test Equivalence

**Syntaxe :** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**Description :** Teste si la moyenne de l&apos;échantillon est équivalente à la valeur hypothétique (cible) en utilisant l&apos;approche par deux tests unilatéraux (TOST).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence(
	Target( 62 ),
	Practical Difference( 1 ),
	Confidence( 0.95 )
);

```

### Test Mean

**Syntaxe :** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**Description :** Effectue un test à un échantillon pour la moyenne. Si vous spécifiez une valeur pour l&apos;écart-type (Sigma), un test z est effectué. Sinon, l&apos;écart-type de l&apos;échantillon est utilisé pour effectuer un test t. Vous avez également l&apos;option d&apos;effectuer en supplément un test des signes de rangs non-paramétrique de Wilcoxon.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

### Test Probabilities

**Syntaxe :** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**Description :** Teste les probabilités estimées des niveaux d&apos;une variable catégorielle en comparaison avec les probabilités hypothétiques spécifiées (p1, p2, p3, ainsi de suite). Pour les variables à deux niveaux, utiliser l&apos;option Test pour spécifier le signe de l&apos;hypothèse alternative du test. Pour les variables avec plus de deux niveaux, utiliser l&apos;option Fixé pour spécifier comment traiter les valeurs hypothétiques manquantes. Notez que f est un argument facultatif qui spécifie que le niveau précédent est traité comme fixé.

**Exemple à niveaux multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Exemple bilatéral à deux niveaux**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**Exemple unilatéral à deux niveaux**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

### Test Std Dev

**Syntaxe :** obj << Test Std Dev( number )

**Description :** Effectue un test du khi deux pour l&apos;écart-type, avec la valeur hypothétique (nombre) donnée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

### Tolerance Interval

**Syntaxe :** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**Description :** Calcule un intervalle qui contient au moins une proportion spécifiée de la population. Une distribution normale standard est supposée. Vous pouvez également spécifier d&apos;autres distributions non normales, notamment les distributions log-normale, Gamma, exponentielle, Weibull, la plus petite valeur extrême, la plus grande valeur extrême, et non paramétrique. Des options vous permettent également de calculer des intervalles unilatéraux.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

### Uniform Scaling

**Syntaxe :** obj << Uniform Scaling( state=0|1 )

**Description :** Définit tous les axes des histogrammes à la même valeur de minimum, maximum et incrément de manière à pouvoir facilement les comparer.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Uniform Scaling( 1 );

```

### Vertical

**Syntaxe :** obj << Vertical( state=0|1 )

**Description :** Change l&apos;orientation de l&apos;histogramme, des boîtes à moustaches, et des graphique de quantiles à la verticale. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

## Messages d'éléments partagés

### Action

**Syntaxe :** obj << Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj << Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj << Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj << Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj << Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj << Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

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

```jsl

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

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntaxe :** obj << Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

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

### Paste Local Data Filter

**Syntaxe :** obj << Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

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

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj << Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

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

```jsl

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

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

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

```jsl

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

```jsl

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

### Sync to Data Table Changes

**Syntaxe :** obj << Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntaxe :** obj << View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Élément lanceur : Oui</b>

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

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

## Capability Analysis

### Messages d'éléments

#### Capability Animation

**Syntaxe :** obj << Capability Animation

**Description :** Ouvre une fenêtre séparée qui affiche une animation de la distribution normale qui utilise les paramètres et les statistiques de capabilité de l&apos;échantillon actuel.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis(
	LSL( 16 ),
	USL( 24 ),
	Target( 20 ),
	Capability Animation
);

```

#### Z Bench

**Syntaxe :** obj << Z Bench( state=0|1 )

**Description :** Affiche ou masque les statistiques Z, définies par AIAG comme le nombre d’unités d’écart type entre la moyenne du processus et une tolérance donnée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Z Bench( 1 ) );

```

## Continuous Distribution

### Colonnes

#### Column

**Syntaxe :** obj = Quantiles(...<Column( column(s) )>...)

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Messages d'éléments

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Syntaxe :** obj << Axes on Left( state=0|1 )

**Description :** Déplace les axes de dénombrement, de probabilité, de densité et du graphique des quantiles normaux sur la partie gauche d’un graphique horizontal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Column( :Height ),
	Horizontal Layout( 1 ),
	Count Axis( 1 )
);
obj << Axes on Left( 1 );

```

#### CDF Plot

**Syntaxe :** obj << CDF Plot( state=0|1 )

**Description :** Affiche ou masque un graphique de la fonction de distribution cumulée empirique.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

#### Capability Analysis

**Syntaxe :** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Description :** Effectue une analyse de capabilité avec la limite de spécification inférieure (LSL), la cible et la limite de spécification supérieure (USL) indiquées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

#### Confidence Interval

**Syntaxe :** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**Description :** Calcule les intervalles de confiance spécifiés autour de la moyenne et de l&apos;écart-type. Si vous spécifiez le sigma, la valeur spécifiée est utilisée pour calculer l&apos;intervalle de confiance autour de la moyenne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

#### Count Axis

**Syntaxe :** obj << Count Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de dénombrement de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

#### Custom Quantiles

**Syntaxe :** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Description :** Crée un rapport de l’estimation des quantiles basée sur les rangs et un rapport de l’estimation des quantiles de vraisemblance emprique lissée pour les quantiles spécifiés. Utilise la fraction en tant que niveau de confiance pour les intervalles de confiance dans les deux rapports.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

#### Customize Summary Statistics

**Syntaxe :** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**Description :** Personnalise les statistiques de résumé affichées dans le rapport Statistiques de résumé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Density Axis

**Syntaxe :** obj << Density Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de densité de la courbe de densité de cet histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

#### Fit All

**Syntaxe :** obj << Fit All

**Description :** Compare toutes les distributions possibles.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

#### Fit Beta

**Syntaxe :** obj << Fit Beta

**Description :** Ajuste une distribution bêta à deux paramètres aux données comprises entre 0 et 1 (non inclus).

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

#### Fit Beta Binomial

**Syntaxe :** obj << Fit Beta Binomial( Sample Size( n | column ) )

**Description :** Ajuste une distribution bêta binomiale avec la taille d&apos;échantillon de constante spécifiée ou une colonne contenant les tailles d&apos;échantillon données. Cette distribution est une version plus flexible de la distribution binomiale.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit Binomial

**Syntaxe :** obj << Fit Binomial( Sample size( n | column ) )

**Description :** Ajuste une distribution binomiale avec la taille d&apos;échantillon de constante spécifiée ou une colonne contenant les tailles d&apos;échantillon données. Cette distribution modélise le nombre total de réussites parmi n essais indépendants.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

#### Fit Cauchy

**Syntaxe :** obj << Fit Cauchy

**Description :** Ajuste une distribution de Cauchy en fonction des données. La distribution de Cauchy est robuste aux valeurs aberrantes et est équivalente à une distribution t à un degré de liberté.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

#### Fit ExGaussian

**Syntaxe :** obj << Fit ExGaussian

**Description :** Ajuste une distribution gaussienne exponentiellement modifiée aux données.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

#### Fit Exponential

**Syntaxe :** obj << Fit Exponential

**Description :** Ajuste une distribution exponentielle aux données non-négatives.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

#### Fit Gamma

**Syntaxe :** obj << Fit Gamma

**Description :** Ajuste une distribution gamma à deux paramètres aux données positives.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

#### Fit Handle

**Syntaxe :** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**Description :** Tableau de poignées aux distributions ajustées. Cela vous permet d&apos;envoyer des commandes aux distributions spécifiques qui ont été ajustées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

#### Fit Johnson

**Syntaxe :** obj << Fit Johnson

**Description :** Ajuste une distribution de Johnson en fonction des données. Le plus approprié des trois types de distributions de Johnson (Su, Sb et Sl) est choisi en fonction des quantiles.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

#### Fit Largest Extreme Value

**Syntaxe :** obj << Fit Largest Extreme Value

**Description :** Ajuste une distribution de la plus grande valeur extrême aux données.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

#### Fit Lognormal

**Syntaxe :** obj << Fit Lognormal

**Description :** Ajuste une distribution log-normale aux données positives.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

#### Fit Negative Binomial

**Syntaxe :** obj << Fit Negative Binomial

**Description :** Ajuste une distribution binomiale négative en fonction des données. Cette distribution est équivalente à la distribution Gamma de Poisson.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

#### Fit Normal

**Syntaxe :** obj << Fit Normal

**Description :** Ajuste une distribution normale en fonction des données.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

#### Fit Normal 2 Mixture

**Syntaxe :** obj << Fit Normal 2 Mixture

**Description :** Ajuste un mélange de deux distributions normales. Cette distribution est capable d&apos;ajuster des données bimodales.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

#### Fit Normal 3 Mixture

**Syntaxe :** obj << Fit Normal 3 Mixture

**Description :** Ajuste un mélange de trois distributions normales. Cette distribution est capable d&apos;ajuster des données multimodales.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

#### Fit Poisson

**Syntaxe :** obj << Fit Poisson

**Description :** Ajuste une distribution de Poisson en fonction des données. Cette distribution est souvent utilisée pour les données de dénombrement. La moyenne ajustée de la distribution de Poisson est égale à la variance.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

#### Fit SHASH

**Syntaxe :** obj << Fit Shash

**Description :** Ajuste une distribution sinh-arcsinh (SHASH) en fonction des données.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

#### Fit Smallest Extreme Value

**Syntaxe :** obj << Fit Smallest Extreme Value

**Description :** Ajuste une distribution de la plus petite valeur extrême aux données.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

#### Fit Smooth Curve

**Syntaxe :** obj << Fit Smooth Curve( <Bandwidth( number )> )

**Description :** Ajuste une courbe de lissage aux données en utilisant une estimation de densité non paramétrique. Vous pouvez définir le lissage en spécifiant la largeur de bande.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

#### Fit Student's t

**Syntaxe :** obj << Fit Student&apos;s t

**Description :** Ajuste une distribution t de Student en fonction des données. Cette distribution est une option robuste qui recouvre l&apos;espace entre une distribution normale et une distribution de Cauchy.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

#### Fit Weibull

**Syntaxe :** obj << Fit Weibull

**Description :** Ajuste une distribution de Weibull à deux paramètres aux données positives.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

#### Fit ZI Beta Binomial

**Syntaxe :** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**Description :** Ajuste une distribution binomiale bêta comportant un Dirac en 0 avec la taille d&apos;échantillon constante spécifiée ou une colonne contenant la taille d&apos;échantillon. Cette distribution modélise le nombre total de réussites parmi n essais indépendants où plus de zéros sont observés que ceux attendus pour la distribution binomiale bêta.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Binomial

**Syntaxe :** obj << Fit ZI Binomial( Sample Size( n | column ) )

**Description :** Ajuste une distribution binomiale comportant un Dirac en 0 avec la taille d&apos;échantillon constante spécifiée ou une colonne contenant la taille d&apos;échantillon. Cette distribution modélise le nombre total de réussites parmi n essais indépendants où plus de zéros sont observés que ceux attendus pour la distribution binomiale.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Negative Binomial

**Syntaxe :** obj << Fit ZI Negative Binomial

**Description :** Ajuste une distribution binomiale négative comportant un Dirac en 0 aux données qui contiennent des valeurs de zéro.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

#### Fit ZI Poisson

**Syntaxe :** obj << Fit ZI Poisson

**Description :** Ajuste une distribution de Poisson comportant un Dirac en 0 aux données qui contiennent des valeurs de zéro.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

#### Fit ZI SHASH

**Syntaxe :** obj << Fit ZI SHASH

**Description :** Ajuste une distribution SHASH par rapport aux données avec une masse de points égale à zéro.

```jsl

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

#### Histogram

**Syntaxe :** obj << Histogram( state=0|1 )

**Description :** Affiche ou masque l&apos;histogramme. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**Syntaxe :** obj << Histogram Color( color )

**Description :** Change la couleur des barres de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Syntaxe :** obj << Horizontal Layout( state=0|1 )

**Description :** Change l&apos;orientation de l&apos;histogramme et des rapports à l&apos;horizontale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

#### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Normal Quantile Plot

**Syntaxe :** obj << Normal Quantile Plot( state=0|1 )

**Description :** Affiche ou masque un graphique qui peut être utilisé pour visualiser à quel point une variable est normalement distribuée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

#### Outlier Box Plot

**Syntaxe :** obj << Outlier Box Plot( state=0|1 )

**Description :** Affiche ou masque une boîte à moustaches qui vous permet de voir la distribution et d&apos;identifier les valeurs aberrantes possibles. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

#### Outlier Box Plot Row Cutoff

**Syntaxe :** obj << Outlier Box Plot Row Cutoff( number )

**Description :** Définit l’option de lancement pour le nombre maximal de lignes avant la désactivation initiale de la boîte à moustaches des valeurs. "100000" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

#### PpK Capability Labeling

**Syntaxe :** obj << PpK Capability Labeling( state=0|1 )

**Description :** Dans une sortie Capabilité du processus, change l&apos;étiquetage des indices de capabilité globaux de manière à utiliser le préfixe Pp au lieu de Cp. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Prediction Interval

**Syntaxe :** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**Description :** Calcul les intervalles de prévision pour une observation future individuelle et la moyenne d&apos;un nombre spécifié (N échantillons) d&apos;observations futures. Vous pouvez créer des intervalles de prévision unilatéraux ou bilatéraux.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

#### Prob Axis

**Syntaxe :** obj << Prob Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de probabilité ou de proportion de cet histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

#### Process Capability

**Syntaxe :** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**Description :** Calcule une analyse de capabilité de processus avec la limite de spécification inférieure (LSL), la cible et la limite de spécification supérieure (USL) données. Le rapport Capabilité du processus comprend un histogramme, les détails de résumé, les indices de capabilité et les statistiques de non-conformité.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Quantile Box Plot

**Syntaxe :** obj << Quantile Box Plot( state=0|1 )

**Description :** Affiche ou masque une boîte à moustaches avec les quantiles suivants : 0 %, 0,5 %, 2,5 %, 10 %, 25 %, 50 %, 75 %, 90 %, 97,5 %, 99 %, et 100 %.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

#### Quantiles

**Syntaxe :** obj << Quantiles( state=0|1 )

**Description :** Affiche ou masque le rapport Quantiles, qui énumère les valeurs des quantiles sélectionnés. Par défaut, les quantiles listés sont 0 %, 0,5 %, 2,5 %, 10 %, 25 %, 50 %, 75 %, 90 %, 97,5 %, 99,5 %, et 100 %. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

#### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**Syntaxe :** obj << Save( "Nombres de niveaux"|"Points milieu des niveaux"|"Rangs de la variable"|"Rangs moyens"|"Scores de probabilité"|"Quantiles normaux"|"Standardisé"|"Centré"|"Standardisation robuste"|"Centrage robuste"|"Limites de spécification"|"Script dans le log" )

**Description :** Enregistre la statistique de l&apos;observation spécifiée dans une nouvelle colonne de la table de données. Une option permet également d&apos;imprimer les commandes de script qui génèrent le rapport actuel dans la fenêtre de log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

#### Set Bin Width

**Syntaxe :** obj << Set Bin Width( number )

**Description :** Définit la largeur des intervalles de classe de l&apos;histogramme, en utilisant l&apos;axe comme origine. Cette option est uniquement disponible pour les variables continues.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

#### Set Quantile Increment

**Syntaxe :** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**Description :** Définit l&apos;incrément utilisé dans le rapport Quantiles à la fraction spécifiée ou revient aux quantiles par défaut. Cette option est uniquement disponible pour les variables continues.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

#### Shadowgram

**Syntaxe :** obj << Shadowgram( state=0|1 )

**Description :** Affiche ou masque un shadowgramme lisse à la place de l&apos;histogramme. Un shadowgramme superpose les histogrammes de différentes largeurs de bin. Cette option est uniquement disponible pour les variables continues.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

#### Show Counts

**Syntaxe :** obj << Show Counts( state=0|1 )

**Description :** Affiche ou masque les dénombrements des barres sur l&apos;histogramme, qui indique la fréquence des valeurs de colonne représentée par chaque barre de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

#### Show Percents

**Syntaxe :** obj << Show Percents( state=0|1 )

**Description :** Affiche ou masque les barres de pourcentage sur l&apos;histogramme, qui indique le pourcentage des valeurs de colonne représenté par chaque barre de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**Syntaxe :** obj << Std Error Bars( state=0|1 )

**Description :** Affiche ou masque les barres d&apos;erreur standard sur chaque barre de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

#### Stem and Leaf

**Syntaxe :** obj << Stem and Leaf( state=0|1 )

**Description :** Affiche ou masque un diagramme en tiges et feuilles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

#### Summary Statistics

**Syntaxe :** obj << Summary Statistics( state=0|1 )

**Description :** Affiche ou masque le rapport Statistiques de résumé, qui énumère la moyenne, l&apos;écart-type et d&apos;autres statistiques de résumé pour les variables continues. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

#### Test Equivalence

**Syntaxe :** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**Description :** Teste si la moyenne de l&apos;échantillon est équivalente à la valeur hypothétique (cible) en utilisant l&apos;approche par deux tests unilatéraux (TOST).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence(
	Target( 62 ),
	Practical Difference( 1 ),
	Confidence( 0.95 )
);

```

#### Test Mean

**Syntaxe :** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**Description :** Effectue un test à un échantillon pour la moyenne. Si vous spécifiez une valeur pour l&apos;écart-type (Sigma), un test z est effectué. Sinon, l&apos;écart-type de l&apos;échantillon est utilisé pour effectuer un test t. Vous avez également l&apos;option d&apos;effectuer en supplément un test des signes de rangs non-paramétrique de Wilcoxon.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

#### Test Std Dev

**Syntaxe :** obj << Test Std Dev( number )

**Description :** Effectue un test du khi deux pour l&apos;écart-type, avec la valeur hypothétique (nombre) donnée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

#### Tolerance Interval

**Syntaxe :** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**Description :** Calcule un intervalle qui contient au moins une proportion spécifiée de la population. Une distribution normale standard est supposée. Vous pouvez également spécifier d&apos;autres distributions non normales, notamment les distributions log-normale, Gamma, exponentielle, Weibull, la plus petite valeur extrême, la plus grande valeur extrême, et non paramétrique. Des options vous permettent également de calculer des intervalles unilatéraux.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

#### Vertical

**Syntaxe :** obj << Vertical( state=0|1 )

**Description :** Change l&apos;orientation de l&apos;histogramme, des boîtes à moustaches, et des graphique de quantiles à la verticale. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

## Distribution Fit

### Messages d'éléments

#### Density Curve

**Syntaxe :** obj << Fit Distribution Name( Density Curve( state=0|1 ) ); 

obj << ( Fit Handle[number] << Density Curve( state=0|1 ))

**Description :** Affiche ou masque une courbe de densité sur l&apos;histogramme. Les paramètres estimés de l&apos;ajustement spécifié sont utilisés pour créer la courbe de densité. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Density Curve( 0 ) );

```

#### Distribution Profiler

**Syntaxe :** obj << Fit Distribution Name( Distribution Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Distribution Profiler( state=0|1 ) )

**Description :** Affiche ou masque un profileur de prévision de la fonction de distribution cumulée pour la distribution ajustée spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Distribution Profiler( 1 ) );

```

#### Fitted CDF

**Syntaxe :** obj << Fit Distribution Name( Fitted CDF( vector ));

 obj << ( Fit Handle[number] << Fitted CDF( vector ))

**Description :** Affiche ou masque les probabilités ajustées spécifiées pour la distribution ajustée.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted CDF( [5 8 11] ) );

```

#### Fitted Quantiles

**Syntaxe :** obj << Fit Distribution Name( Fitted Quantiles( vector ));

 obj << ( Fit Handle[number] << Fitted Quantiles( vector ))

**Description :** Affiche ou masque les quantiles spécifiés pour la distribution ajustée spécifiée.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted Quantiles( [.9 .95 .99] ) );

```

#### Fix Parameters

**Syntaxe :** obj << Fit Distribution Name( Fix Parameters( vector ));

 obj << ( Fit Handle[number] << Fix Parameters( vector ))

**Description :** Fixe les paramètres spécifiés en tant que constantes et estime de nouveau les paramètres non fixés.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Normal( Fix Parameters( [. 2.8] ) );

```

#### Goodness of Fit

**Syntaxe :** obj << Fit Distribution Name( Goodness of Fit( state=0|1 )); 

obj << ( Fit Handle[number] << Goodness of Fit( state=0|1 ))

**Description :** Affiche ou masque un rapport contenant un test de bon ajustement pour la distribution ajustée spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Goodness of Fit( 1 ) );

```

#### PP Plot

**Syntaxe :** obj << Fit Distribution Name( PP Plot( state=0|1 ) ); 

 obj << (Fit Handle[ number ] << PP Plot( state=0|1 ) )

**Description :** Affiche ou masque un graphique centile-centile (PP) indiquant la relation entre la fonction de distribution cumulée (CDF) empirique et la CDF de la distribution ajustée spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( PP Plot( 1 ) );

```

#### Process Capability

**Syntaxe :** obj << Fit Distribution Name( Process Capability( LSL( number ), Target( number ), USL( number ))); 

 obj << (Fit Handle[number] << ( Process Capability( LSL( number ), Target( number ), USL( number ))))

**Description :** Calcule une analyse de capabilité de processus avec la limite de spécification inférieure (LSL), la cible et la limite de spécification supérieure (USL) données. Le rapport Capabilité du processus comprend un histogramme, les détails de résumé, les indices de capabilité et les statistiques de non-conformité.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Lognormal( Process Capability( LSL( .03 ), Target( .15 ), USL( .27 ) ) );

```

#### QQ Plot

**Syntaxe :** obj << Fit Distribution Name( QQ Plot( state=0|1 ) ); 

obj << ( Fit Handle[number] << QQ Plot( state=0|1 ) )

**Description :** Affiche ou masque un graphique quantile-quantile (QQ) indiquant la relation entre les données observées et les quantiles de la distribution ajustée spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( QQ Plot( 1 ) );

```

#### Quantile Profiler

**Syntaxe :** obj << Fit Distribution Name( Quantile Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Quantile Profiler( state=0|1 ) )

**Description :** Affiche ou masque un profileur de prévision de la fonction de quantile pour la distribution ajustée spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Quantile Profiler( 1 ) );

```

#### Remove Fit

**Syntaxe :** obj << (Fit Handle[number] << Remove Fit )

**Description :** Supprime l&apos;ajustement et l&apos;objet JSL de la distribution spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Weibull;
obj << Fit Lognormal;
Wait( 1 );
obj << (Fit Handle[1] << Remove Fit);

```

#### Save Density Formula

**Syntaxe :** obj << Fit Distribution Name( Save Density Formula ) ; 

obj << ( Fit Handle[number] << Save Density Formula )

**Description :** Enregistre une colonne dans la table de données contenant la formule de densité de la distribution ajustée spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Density Formula );

```

#### Save Distribution Formula

**Syntaxe :** obj << Fit Distribution Name( Save Distribution Formula ) ; 

obj << ( Fit Handle[number] << Save Distribution Formula )

**Description :** Enregistre une colonne dans la table de données contenant la fonction de distribution cumulée de la distribution ajustée spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Distribution Formula );

```

#### Save Simulation Formula

**Syntaxe :** obj << Fit Distribution Name( Save Simulation Formula ) ; 

obj << ( Fit Handle[number] << Save Simulation Formula )

**Description :** Enregistre une colonne dans la table de données contenant une formule qui génère les valeurs simulées à partir de la distribution ajustée spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Simulation Formula );

```

#### Save Transformed

**Syntaxe :** obj << Fit Distribution Name( Save Transformed ); 

obj << ( Fit Handle[number] << Save Transformed )

**Description :** Enregistre une colonne dans la table de données contenant une formule utilisée pour normaliser la colonne d&apos;analyse en utilisant la distribution ajustée spécifiée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Shash( Save Transformed );

```

## Distribution Process Capability

### Messages d'éléments

#### Color Out of Spec Values

**Syntaxe :** obj << Color Out of Spec Values

**Description :** Colorie les cellules de la table de données correspondant aux valeurs qui se trouvent en dehors des spécifications. Les cellules dont les valeurs se trouvent en dessous de la tolérance inférieure sont coloriées en rouge, et les cellules dont les valeurs se trouvent au dessus de la tolérance supérieure sont coloriées en bleu.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Color Out of Spec Values
);

```

#### Save Distribution as a Column Property

**Syntaxe :** obj << Process Capability( Save Distribution as a Column Property )

**Description :** Enregistre le type de distribution de la capabilité du processus en tant que propriété de colonne dans la colonne de la table de données d&apos;origine.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Dist( Lognormal ),
	Save Distribution as a Column Property
);

```

#### Save In Spec Indicator Formula

**Syntaxe :** obj << Save In Spec Indicator Formula

**Description :** Crée une colonne de formules dans la table de données. La nouvelle colonne contient une valeur qui indique si une ligne se trouve dans les limites de spécification ou non.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Save In Spec Indicator Formula
);

```

#### Save Spec Limits and Distribution to Column Properties without Report

**Syntaxe :** obj << Fit Distribution Name( Process Capability(Save Spec Limits and Distribution to Column Properties without Report))

**Description :** Enregistre les limites de spécification calculées et le type de distribution de la capabilité du processus pour la distribution ajustée en tant que propriétés de colonne dans la colonne de la table de données d&apos;origine et n&apos;affiche pas de rapport de capabilité.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Sigma Multiplier for Quantile Spec Limits( 4 ),
		Save Spec Limits and Distribution to Column Properties without Report
	)
);

```

#### Save Spec Limits as a Column Property

**Syntaxe :** obj << Fit Distribution Name( Process Capability( Save Spec Limits as a Column Property )); 

 obj << Process Capability( Save Spec Limits as a Column Property )

**Description :** Enregistre les limites de spécification en tant que propriété de colonne dans la colonne de la table de données d&apos;origine.

**JMP Version ajoutée :** 15

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		LSL( 0.03 ),
		Target( 0.15 ),
		USL( 0.27 ),
		Save Spec Limits as a Column Property
	)
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Save Spec Limits as a Column Property
);

```

#### Set Probabilities for Quantile Spec Limits

**Syntaxe :** obj << Fit Distribution Name( Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))); 

 obj << Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))

**Description :** Définit les probabilités utilisées pour calculer les limites de spécification de quantile pour la distribution ajustée.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Probabilities for Quantile Spec Limits(
			LSL Prob( .0001 ),
			Target Prob( .5 ),
			USL Prob( .9999 )
		)
	)
);

```

#### Set Sigma Multiplier for Quantile Spec Limits

**Syntaxe :** obj << Fit Distribution Name( Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))); 

 obj << Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))

**Description :** Définit un multiplicateur sigma, K, utilisé pour calculer les limites de spécification de quantile pour la distribution ajustée. L&apos;argument latéral facultatif est égal à 1 pour LSL uniquement ou 2 pour USL uniquement.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability( Set Sigma Multiplier for Quantile Spec Limits( 4 ) )
);

```

## Distribution Summary Statistics

### Messages d'éléments

#### Customize Summary Statistics

**Syntaxe :** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**Description :** Personnalise les statistiques de résumé affichées dans le rapport Statistiques de résumé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Show All Modes

**Syntaxe :** obj << Customize Summary Statistics( Show all Modes( state=0|1 ))

**Description :** Affiche ou masque tous les modes dans le rapport des statistiques de résumé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( Mode( 1 ), Show All Modes( 1 ) );

```

## Multiple Response Distribution

### Messages d'éléments

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Syntaxe :** obj << Axes on Left( state=0|1 )

**Description :** Déplace les axes de dénombrement, de probabilité, de densité et du graphique des quantiles normaux sur la partie gauche d’un graphique horizontal.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

#### Confidence Interval

**Syntaxe :** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"Autre..." )

**Description :** Calcule les intervalles de confiance de score autour des probabilités.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**Syntaxe :** obj << Count Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de dénombrement de l&apos;histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Count Axis( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**Syntaxe :** obj << Density Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de densité de la courbe de densité de cet histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**Syntaxe :** obj << Frequencies( state=0|1 )

**Description :** Affiche ou masque le rapport Fréquences, qui énumère les dénombrements et les probabilités pour chaque niveau. Actif par défaut.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
Wait( 1 );
obj << Frequencies( 0 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**Syntaxe :** obj << Histogram( state=0|1 )

**Description :** Affiche ou masque l&apos;histogramme. Actif par défaut.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
Wait( 1 );
obj << Histogram( 0 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**Syntaxe :** obj << Histogram Color( color )

**Description :** Change la couleur des barres de l&apos;histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Histogram Color( "Blue" );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Syntaxe :** obj << Horizontal Layout( state=0|1 )

**Description :** Change l&apos;orientation de l&apos;histogramme et des rapports à l&apos;horizontale.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Horizontal Layout( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**Syntaxe :** obj << Mosaic Plot( state=0|1 )

**Description :** Affiche ou masque un diagramme en barres en mosaïque pour chaque variable de réponse nominale ou ordinale. Un graphique en mosaïque est un diagramme en barres empilées où chaque segment est proportionnel au dénombrement de fréquence de son groupe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**Syntaxe :** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**Description :** Trie l&apos;histogramme, le graphique en mosaïque, et le rapport Fréquences dans l&apos;ordre croissant ou décroissant, par dénombrement. Vous pouvez également revenir au tri par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**Syntaxe :** obj << Prob Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de probabilité ou de proportion de cet histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Prob Axis( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**Syntaxe :** obj << Save( "Numéros des classes"|"Ordre des valeurs"|"Script dans le log" )

**Description :** Enregistre les numéros de niveau dans une nouvelle colonne de la table de données ou le script dans le fichier log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**Syntaxe :** obj << Separate Bars( state=0|1 )

**Description :** Ajoute un espace entre les barres de l&apos;histogramme. Cette option est uniquement disponible pour les variables catégorielles.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Separate Bars( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**Syntaxe :** obj << Show Counts( state=0|1 )

**Description :** Affiche ou masque les dénombrements des barres sur l&apos;histogramme, qui indique la fréquence des valeurs de colonne représentée par chaque barre de l&apos;histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Show Counts( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**Syntaxe :** obj << Show Percents( state=0|1 )

**Description :** Affiche ou masque les barres de pourcentage sur l&apos;histogramme, qui indique le pourcentage des valeurs de colonne représenté par chaque barre de l&apos;histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Show Percents( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**Syntaxe :** obj << Std Error Bars( state=0|1 )

**Description :** Affiche ou masque les barres d&apos;erreur standard sur chaque barre de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**Syntaxe :** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**Description :** Teste les probabilités estimées des niveaux d&apos;une variable catégorielle en comparaison avec les probabilités hypothétiques spécifiées (p1, p2, p3, ainsi de suite). Pour les variables à deux niveaux, utiliser l&apos;option Test pour spécifier le signe de l&apos;hypothèse alternative du test. Pour les variables avec plus de deux niveaux, utiliser l&apos;option Fixé pour spécifier comment traiter les valeurs hypothétiques manquantes. Notez que f est un argument facultatif qui spécifie que le niveau précédent est traité comme fixé.

**Exemple à niveaux multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Exemple bilatéral à deux niveaux**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**Exemple unilatéral à deux niveaux**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

#### Vertical

**Syntaxe :** obj << Vertical( state=0|1 )

**Description :** Change l&apos;orientation de l&apos;histogramme, des boîtes à moustaches, et des graphique de quantiles à la verticale. Actif par défaut.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Vertical( 0 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Nominal Distribution

### Messages d'éléments

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Syntaxe :** obj << Axes on Left( state=0|1 )

**Description :** Déplace les axes de dénombrement, de probabilité, de densité et du graphique des quantiles normaux sur la partie gauche d’un graphique horizontal.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

#### Confidence Interval

**Syntaxe :** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"Autre..." )

**Description :** Calcule les intervalles de confiance de score autour des probabilités.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**Syntaxe :** obj << Count Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de dénombrement de l&apos;histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Count Axis( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**Syntaxe :** obj << Density Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de densité de la courbe de densité de cet histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**Syntaxe :** obj << Frequencies( state=0|1 )

**Description :** Affiche ou masque le rapport Fréquences, qui énumère les dénombrements et les probabilités pour chaque niveau. Actif par défaut.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
Wait( 1 );
obj << Frequencies( 0 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**Syntaxe :** obj << Histogram( state=0|1 )

**Description :** Affiche ou masque l&apos;histogramme. Actif par défaut.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
Wait( 1 );
obj << Histogram( 0 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**Syntaxe :** obj << Histogram Color( color )

**Description :** Change la couleur des barres de l&apos;histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Histogram Color( "Blue" );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Syntaxe :** obj << Horizontal Layout( state=0|1 )

**Description :** Change l&apos;orientation de l&apos;histogramme et des rapports à l&apos;horizontale.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Horizontal Layout( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**Syntaxe :** obj << Mosaic Plot( state=0|1 )

**Description :** Affiche ou masque un diagramme en barres en mosaïque pour chaque variable de réponse nominale ou ordinale. Un graphique en mosaïque est un diagramme en barres empilées où chaque segment est proportionnel au dénombrement de fréquence de son groupe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**Syntaxe :** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**Description :** Trie l&apos;histogramme, le graphique en mosaïque, et le rapport Fréquences dans l&apos;ordre croissant ou décroissant, par dénombrement. Vous pouvez également revenir au tri par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**Syntaxe :** obj << Prob Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe de probabilité ou de proportion de cet histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Prob Axis( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**Syntaxe :** obj << Save( "Numéros des classes"|"Ordre des valeurs"|"Script dans le log" )

**Description :** Enregistre les numéros de niveau dans une nouvelle colonne de la table de données ou le script dans le fichier log.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**Syntaxe :** obj << Separate Bars( state=0|1 )

**Description :** Ajoute un espace entre les barres de l&apos;histogramme. Cette option est uniquement disponible pour les variables catégorielles.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Separate Bars( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**Syntaxe :** obj << Show Counts( state=0|1 )

**Description :** Affiche ou masque les dénombrements des barres sur l&apos;histogramme, qui indique la fréquence des valeurs de colonne représentée par chaque barre de l&apos;histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Show Counts( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**Syntaxe :** obj << Show Percents( state=0|1 )

**Description :** Affiche ou masque les barres de pourcentage sur l&apos;histogramme, qui indique le pourcentage des valeurs de colonne représenté par chaque barre de l&apos;histogramme.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Show Percents( 1 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**Syntaxe :** obj << Std Error Bars( state=0|1 )

**Description :** Affiche ou masque les barres d&apos;erreur standard sur chaque barre de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**Syntaxe :** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**Description :** Teste les probabilités estimées des niveaux d&apos;une variable catégorielle en comparaison avec les probabilités hypothétiques spécifiées (p1, p2, p3, ainsi de suite). Pour les variables à deux niveaux, utiliser l&apos;option Test pour spécifier le signe de l&apos;hypothèse alternative du test. Pour les variables avec plus de deux niveaux, utiliser l&apos;option Fixé pour spécifier comment traiter les valeurs hypothétiques manquantes. Notez que f est un argument facultatif qui spécifie que le niveau précédent est traité comme fixé.

**Exemple à niveaux multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Exemple bilatéral à deux niveaux**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**Exemple unilatéral à deux niveaux**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

#### Vertical

**Syntaxe :** obj << Vertical( state=0|1 )

**Description :** Change l&apos;orientation de l&apos;histogramme, des boîtes à moustaches, et des graphique de quantiles à la verticale. Actif par défaut.

**Exemple de distribution des réponses multiples**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ) )
);
obj << Vertical( 0 );

```

**Exemple de distribution nominale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Test Mean

### Messages d'éléments

#### PValue animation

**Syntaxe :** obj << Test Mean( PValue Animation )

**Description :** Ouvre une fenêtre séparée qui affiche une animation de la variation des p-valeurs avec la variation de la moyenne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, PValue Animation );

```

#### Power animation

**Syntaxe :** obj << Test Mean( Power Animation )

**Description :** Ouvre une fenêtre séparée qui affiche une animation de la variation de puissance avec la variation de la moyenne et qui indique si le test est unilatéral ou bilatéral.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, Power Animation );

```

## Tolerance Interval

### Messages d'éléments

#### Save Distribution as a Column Property

**Syntaxe :** obj << Tolerance Interval( Save Distribution as a Column Property )

**Description :** Enregistre le type de distribution de l&apos;intervalle de tolérance en tant que propriété de colonne dans la colonne de la table de données d&apos;origine.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.90 ),
	Lognormal,
	Save Distribution as a Column Property
);

```

#### Save to Spec Limits Column Property

**Syntaxe :** obj << Save to Spec Limits Column Property( Alpha(number), Proportion(number), <Lower | Upper>, <Nonparametric>, <Save to Spec Limits Column Property> )

**Description :** Enregistre l&apos;intervalle de tolérance en tant que limites de spécification dans la propriété de colonne Limites de spécification de la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.85 ),
	Save to Spec Limits Column Property
);

```

