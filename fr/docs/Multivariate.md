# Multivariate



## Principal Component Options

### 3D Score Plot

**Syntaxe :** obj << 3D Score Plot( state=0|1 )

**Description :** Affiche ou masque un nuage de points 3D des composantes principales représentées comme des rayons dans un espace tridimensionnel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", "3D Score Plot"n );

```

### Bartlett Test

**Syntaxe :** obj << Bartlett Test( state=0|1 )

**Description :** Affiche ou masque un rapport des résultats du test d&apos;homogénéité pour chacune des composantes principales.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Bartlett Test( 1 ) );

```

### Eigenvectors

**Syntaxe :** obj << Eigenvectors( state=0|1 )

**Description :** Affiche ou masque un rapport des vecteurs propres pour chacune des composantes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Eigenvectors( 1 ) );

```

### Factor Rotation

**Syntaxe :** obj << Factor Rotation( <ML|PC>, 1|SMC, n Rotated, Varimax|Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| Promax )

**Description :** Affiche ou masque un rapport du motif de pivotement du facteur pour les composantes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "ML", "SMC", 2, "Varimax" )
);

```

### Loading Plot

**Syntaxe :** obj << Loading Plot( number )

**Description :** Affiche ou masque une matrice de graphiques représentant les loadings de facteur en deux dimensions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Loading Plot( 2 ) );

```

### Save Principal Components

**Syntaxe :** obj << Save Principal Components( number )

**Description :** Enregistre le nombre donné de composantes principales dans de nouvelles colonnes de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Save Principal Components( 3 ) );

```

### Save Principal Components with Imputation

**Syntaxe :** obj << Save Principal Components with Imputation( number )

**Description :** Enregistre le nombre donné de composantes principales calculées en utilisant l’imputation sur les valeurs manquantes, dans de nouvelles colonnes de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Save Principal Components with Imputation( 3 )
);

```

### Save Rotated Components

**Syntaxe :** obj << Save Rotated Components

**Description :** Enregistre les composantes pivotées dans de nouvelles colonnes de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "SMC", 2, "Varimax" ),
	Save Rotated Components
);

```

### Save Rotated Components with Imputation

**Syntaxe :** obj << Save Rotated Components with Imputation

**Description :** Enregistre les composantes pivotées, calculées en utilisant l’imputation sur les valeurs manquantes, dans de nouvelles colonnes de la table de données. Remarque : cette option est disponible uniquement après que le pivotement du facteur a été exécuté.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "SMC", 2, "Varimax" ),
	Save Rotated Components with Imputation
);

```

### Score Plot

**Syntaxe :** obj << Score Plot( number )

**Description :** Affiche ou masque une matrice de nuages de points contenant les scores pour chaque paire du nombre spécifié de composantes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Score Plot( 2 ) );

```

### Score Plot with Imputation

**Syntaxe :** obj << Score Plot with Imputation( number )

**Description :** Affiche ou masque une matrice de nuages de points contenant les scores pour chaque paire du nombre spécifié de composantes principales, avec imputation des valeurs manquantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Score Plot with Imputation( 2 ) );

```

### Scree Plot

**Syntaxe :** obj << Scree Plot( state=0|1 )

**Description :** Affiche ou masque un graphique linéaire des valeurs propres pour chaque composante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Scree Plot( 1 ) );

```

## Scatterplot Matrix Message

### Density Ellipses

**Syntaxe :** Density Ellipses( state=0|1 )

**Description :** Affiche ou masque les ellipses de densité sur la matrice de nuages de points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ) )
);

```

### Ellipse Alpha

**Syntaxe :** obj << Ellipse Alpha( "0.90"|"0.95"|"0.99"|"Autre..." )

**Description :** Modifie le niveau alpha des ellipses de densité sur la matrice de nuages de points entre toutes les variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) )
);

```

### Ellipse Color

**Syntaxe :** Ellipse Color( color )

**Description :** Modifie la couleur des ellipses de densité ombrés sur la matrice de nuages de points entre toutes les variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( "Blue" ) )
);

```

### Ellipse α

**Syntaxe :** obj << Ellipse α( "0.90"|"0.95"|"0.99"|"Autre..." )

**Description :** Modifie le niveau alpha des ellipses de densité sur la matrice de nuages de points entre toutes les variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) )
);

```

### Ellipses Coverage

**Syntaxe :** obj << Ellipses Coverage( "0.90"|"0.95"|"0.99"|"Autre..." )

**Description :** Modifie le niveau alpha des ellipses de densité sur la matrice de nuages de points entre toutes les variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipses Coverage( 0.9 ) )
);

```

### Ellipses Transparency

**Syntaxe :** obj << Ellipses Transparency( "0.20"|"0.40"|"0.60"|"Autre..." )

**Description :** Modifie la transparence des ellipses de densité ombrés sur la matrice de nuages de points entre toutes les variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Ellipses Transparency( 0.6 ), Shaded Ellipses( 1 ) )
);

```

### Fit Line

**Syntaxe :** obj << Fit Line( state=0|1 )

**Description :** Affiche ou masque la droite de régression et l’intervalle de confiance sur la matrice de nuages de points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Fit line( 1 ) )
);

```

### Heat Map

**Syntaxe :** Heat Map( state=0|1 )

**Description :** Affiche ou masque une carte thermique des corrélations dans le triangle situé en haut à droite de la matrice de nuages de points. La couleur de chaque cellule de la carte thermique représente la corrélation entre chaque paire de variables.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Heat Map( 1 ) )
);

```

### Horizontal

**Syntaxe :** Horizontal( state=0|1 )

**Description :** Affiche des histogrammes, en horizontal, sur la diagonale de la matrice de nuages de points entre toutes les variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Horizontal( 1 ) )
);

```

### Nonpar Density

**Syntaxe :** Nonpar Density( state=0|1 )

**Description :** Affiche ou masque les isoréponses de densité non paramétrique ombrées pour les quantiles 0,90 et 0,50.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Nonpar Density( 1 ) )
);

```

### Shaded Ellipses

**Syntaxe :** Shaded Ellipses( state=0|1 )

**Description :** Assombrit ou éclaircit la zone à l’intérieur des ellipses de densité sur la matrice de nuages de points entre toutes les variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Shaded Ellipses( 1 ) )
);

```

### Show Correlations

**Syntaxe :** Show Correlations( state=0|1 )

**Description :** Affiche ou masque la corrélation de chaque paire de variables dans le coin supérieur gauche de chaque nuage de points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Show Correlations( 1 ) )
);

```

### Show Counts

**Syntaxe :** Show Counts( state=0|1 )

**Description :** Affiche ou masque les dénombrements qui étiquettent les barres des histogrammes sur la diagonale de la matrice de nuages de points entre toutes les variables Y. Remarque : disponible uniquement après l’affichage de l’histogramme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Vertical( 1 ), Show Counts( 1 ) )
);

```

### Show Points

**Syntaxe :** Show Points( state=0|1 )

**Description :** Affiche ou masque les points sur la matrice de nuages de points. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Show Points( 1 ) )
);

```

### Significance Circles

**Syntaxe :** Significance Circles( state=0|1 )

**Description :** Affiche ou masque les cercles de corrélation dans le triangle situé en haut à droite de la matrice de nuages de points. La couleur du cercle représente la corrélation et la taille du cercle représente le test de significativité entre chaque paire de variables.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Significance Circles( 1 ) )
);

```

### Vertical

**Syntaxe :** Vertical( state=0|1 )

**Description :** Affiche des histogrammes, en vertical, sur la diagonale de la matrice de nuages de points entre toutes les variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Vertical( 1 ) )
);

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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
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

**Syntaxe :** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);

```

### CI of Correlation

**Syntaxe :** obj << CI of Correlation( state=0|1 )

**Description :** Affiche ou masque un rapport des corrélations entre chaque variable Y ainsi que les intervalles de confiance pour chaque corrélation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << CI of Correlation( 1 );

```

### Cluster the Correlations

**Syntaxe :** obj << Cluster the Correlations( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations de classe, en partant du bleu pour les corrélations négatives et en se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Cluster the Correlations( 1 );

```

### Color Map on Correlations

**Syntaxe :** obj << Color Map on Correlations( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Color Map on Correlations( 1 );

```

### Color Map on Hoeffding's D

**Syntaxe :** obj << Color Map on Hoeffding&apos;s D( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient D de Hoeffding, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Color Map on Hoeffding's D( 1 );

```

### Color Map on Kendall's Tau

**Syntaxe :** obj << Color Map on Kendall&apos;s Tau( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient Tau de Kendall, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Kendall's τ

**Syntaxe :** obj << Color Map on Kendall&apos;s τ( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient Tau de Kendall, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Pairwise Correlations

**Syntaxe :** obj << Color Map on Pairwise Correlations( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations par paire, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Color Map on Pairwise Correlations( 1 );

```

### Color Map on Spearman's Rho

**Syntaxe :** obj << Color Map on Spearman&apos;s Rho( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient Rho de Spearman, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on Spearman's ρ

**Syntaxe :** obj << Color Map on Spearman&apos;s ρ( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient Rho de Spearman, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on p-Values

**Syntaxe :** obj << Color Map on p-Values( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux p-valeurs, partant du rouge pour les p-valeurs proches de zéro et se déplaçant progressivement vers le bleu lorsque les p-valeurs s’approchent de 1.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << "Color Map on p-Values"n( 1 );

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

### Columns

**Syntaxe :** obj << Columns( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Copy Script;

```

### Correlation Probability

**Syntaxe :** obj << Correlation Probability( state=0|1 )

**Description :** Affiche ou masque une matrice de p-valeurs, chacune correspondant à un test de l&apos;hypothèse zéro indiquant que la vraie corrélation entre les variables est égale à zéro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Correlation Probability( 1 );

```

### Correlations Multivariate

**Syntaxe :** obj << Correlations Multivariate( state=0|1 )

**Description :** Affiche ou masque une matrice des coefficients de corrélation résumant la force des relations linéaires entre chaque paire de variables Y. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Correlations Multivariate( 1 );

```

### Covariance Matrix

**Syntaxe :** obj << Covariance Matrix( state=0|1 )

**Description :** Affiche ou masque une matrice des covariances pour chaque paire de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Covariance Matrix( 1 );

```

### Create SAS Job

**Syntaxe :** obj << Create SAS Job

**Description :** Crée un code SAS Proc Mixed pour exécuter des méthodes d’estimation similaires via SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Variance Estimation( "REML" )
);
obj << Create SAS Job();

```

### Cronbach's Alpha

**Syntaxe :** obj << Cronbach&apos;s Alpha( state=0|1 )

**Description :** Affiche ou masque un rapport du coefficient Alpha de Cronbach pour l&apos;ensemble complet des variables ainsi que le coefficient Alpha si chaque variable Y a été individuellement supprimée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Cronbach's alpha( 1 );

```

### Cronbach's α

**Syntaxe :** obj << Cronbach&apos;s α( state=0|1 )

**Description :** Affiche ou masque un rapport du coefficient Alpha de Cronbach pour l&apos;ensemble complet des variables ainsi que le coefficient Alpha si chaque variable Y a été individuellement supprimée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Cronbach's alpha( 1 );

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Data Table Window;

```

### Ellipsoid 3D Plot

**Syntaxe :** obj << Ellipsoid 3D Plot( column1, column2, column3 )

**Description :** Affiche ou masque une surface de réponse affichant un ellipsoïde à 95 % pour les trois variables Y choisies.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Ellipsoid 3D Plot( :Ether, :Chloroform, :Benzene );

```

### Freq

**Syntaxe :** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
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

### Get Correlation Matrix

**Syntaxe :** obj << Get Correlation Matrix

**Description :** Renvoie la matrice de corrélation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
corr = obj << Get Correlation Matrix;
Show( corr );

```

### Get Data Table

**Syntaxe :** obj << Get Data Table

**Description :** Renvoie une référence à la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
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

### Get Inv Correlation Matrix

**Syntaxe :** obj << Get Inv Correlation Matrix

**Description :** Renvoie la matrice de corrélation inverse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Inverse Correlations( 1 ) );
icorr = obj << Get Inv Correlation Matrix;
Show( icorr );

```

### Get Script

**Syntaxe :** obj << Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
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

### Hoeffding's D

**Syntaxe :** obj << Hoeffding&apos;s D( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient D de Hoeffding pour chaque paire de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Hoeffding's D( 1 );

```

### Hotelling's T Square Test

**Syntaxe :** obj << Hotelling&apos;s T Square Test

**Description :** Exécute un test à un échantillon de la moyenne de la distribution multivariée des variables Y, avec le vecteur moyenne spécifié selon l&apos;hypothèse nulle donné.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Hotelling's T Square Test( 1, 0.7, 0.5, 0, -1 );

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

### Impute Missing Data

**Syntaxe :** obj << Impute Missing Data

**Description :** Impute des valeurs manquantes à toutes les variables Y et crée une nouvelle table de données contenant les valeurs existantes et les nouvelles valeurs imputées aux données manquantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data;

```

### Inverse Correlations

**Syntaxe :** obj << Inverse Correlations( state=0|1 )

**Description :** Affiche ou masque une matrice des corrélations inverses entre chaque variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Inverse Correlations( 1 );

```

### Jackknife Distances

**Syntaxe :** obj << Jackknife Distances( state = 0|1, <Save Jackknife Distances> )

**Description :** Affiche ou masque un graphique des distances de Jackknife pour chaque ligne, conjointement à une ligne de référence indiquant les possibles valeurs aberrantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Jackknife Distances( 1 );

```

### Kendall's Tau

**Syntaxe :** obj << Kendall&apos;s Tau( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient Tau de Kendall pour chaque paire de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Kendall's Tau( 1 );

```

### Kendall's τ

**Syntaxe :** obj << Kendall&apos;s τ( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient Tau de Kendall pour chaque paire de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Kendall's Tau( 1 );

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

### Mahalanobis Distances

**Syntaxe :** obj << Mahalanobis Distances( state = 0|1, <Save Outlier Distances> )

**Description :** Affiche ou masque un graphique des distances de Mahalanobis pour chaque ligne, conjointement à une ligne de référence indiquant les possibles valeurs aberrantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Mahalanobis Distances( 1 );

```

### Matrix Format

**Syntaxe :** obj = Multivariate(...Matrix Format( "Triangulaire inférieur"|"Triangulaire supérieur"|"Carré" )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la manière dont les variables sont affichées sur la matrice de nuages de points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Matrix Format( "Lower Triangular" )
);

```

### Multivariate

**Syntaxe :** Multivariate( Y( columns ) )

**Description :** Explore les corrélations et associations entre les variables numériques en utilisant toute une variété de techniques d&apos;analyses multivariées. Ces techniques incluent les mesures d&apos;associations paramétriques et non paramétriques, les matrices de nuages de points, l&apos;analyse en composantes principales, l&apos;analyse des valeurs aberrantes et la fiabilité des éléments.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Multivariate Simple Statistics

**Syntaxe :** obj << Multivariate Simple Statistics( state=0|1 )

**Description :** Affiche ou masque un rapport statistique d’analyse simple multivariée, dans lequel les statistiques sont calculées en éliminant toutes les lignes possédant des valeurs manquantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );
obj << Multivariate Simple Statistics( 1 );

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

### Pairwise Correlations

**Syntaxe :** obj << Pairwise Correlations( state=0|1 )

**Description :** Affiche ou masque un rapport des corrélations par paire pour toutes les combinaisons de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Pairwise Correlations( 1 );

```

### Parallel Coord Plot

**Syntaxe :** obj << Parallel Coord Plot( state=0|1 )

**Description :** Affiche ou masque un diagramme des coordonnées parallèles des variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Parallel Coord Plot( 1 );

```

### Partial Correlation Diagram

**Syntaxe :** obj << Partial Correlation Diagram( state=0|1 )

**Description :** Affiche ou masque le rapport Diagramme des corrélations partielles. Cette option réalise une décomposition des valeurs propres sur la matrice des corrélations partielles et utilise les résultats pour donner une représentation visuelle des corrélations partielles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Partial Correlation Diagram( 1 );

```

### Partial Correlation Probability

**Syntaxe :** obj << Partial Correlation Probability( state=0|1 )

**Description :** Affiche ou masque une matrice de p-valeurs, chacune correspondant à un test de l&apos;hypothèse nulle indiquant que la vraie corrélation partielle entre les variables est égale à zéro.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Partial Correlation Probability( 1 );

```

### Partial Correlations

**Syntaxe :** obj << Partial Correlations( state=0|1 )

**Description :** Affiche ou masque une matrice des corrélations partielles entre chaque variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Partial Correlations( 1 );

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

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Imputed Formula

**Syntaxe :** obj << Save Imputed Formula

**Description :** Impute les valeurs lorsque les valeurs de la colonne Y sont manquantes. Crée et enregistre une nouvelle colonne avec une formule d&apos;imputation dans la table de données d&apos;origine.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Save Script to Script Window;

```

### Scatterplot Matrix

**Syntaxe :** obj << Scatterplot Matrix( state=0|1 )

**Description :** Affiche ou masque une matrice de graphiques de nuages de points pour chaque paire de variables Y. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( 0 )
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

### Set Alpha Level

**Syntaxe :** obj << Set Alpha Level( "0.01"|"0.05"|"0.10"|"0.50"|"Autre..."=0.05 )

**Description :** Modifie le niveau alpha pour les intervalles de confiance relatifs à chaque corrélation. "0.05" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Set Alpha Level( 0.01 );
obj << CI of Correlation( 1 );

```

### Set α Level

**Syntaxe :** obj << Set α Level( "0.01"|"0.05"|"0.10"|"0.50"|"Autre..."=0.05 )

**Description :** Modifie le niveau alpha pour les intervalles de confiance relatifs à chaque corrélation. "0.05" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Set α Level( 0.01 );
obj << CI of Correlation( 1 );

```

### Spearman's Rho

**Syntaxe :** obj << Spearman&apos;s Rho( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient Rho de Spearman pour chaque paire de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Spearman's Rho( 1 );

```

### Spearman's ρ

**Syntaxe :** obj << Spearman&apos;s ρ( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient Rho de Spearman pour chaque paire de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Spearman's Rho( 1 );

```

### Standardized Alpha

**Syntaxe :** obj << Standardized Alpha( state=0|1 )

**Description :** Affiche ou masque un rapport du coefficient Alpha standardisé de Cronbach pour l&apos;ensemble complet des variables ainsi que le coefficient Alpha standardisé si chaque variable Y a été individuellement supprimée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Standardized alpha( 1 );

```

### Standardized α

**Syntaxe :** obj << Standardized α( state=0|1 )

**Description :** Affiche ou masque un rapport du coefficient Alpha standardisé de Cronbach pour l&apos;ensemble complet des variables ainsi que le coefficient Alpha standardisé si chaque variable Y a été individuellement supprimée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Standardized alpha( 1 );

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

### T Square

**Syntaxe :** obj << T Square( state = 0|1, <Save T Square> )

**Description :** Affiche ou masque un graphique des valeurs T² pour chaque ligne, conjointement à une ligne de référence indiquant les possibles valeurs aberrantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << T Square( 1 );

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
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

### T²

**Syntaxe :** obj << T²( state = 0|1, <Save T Square> )

**Description :** Affiche ou masque un graphique des valeurs T² pour chaque ligne, conjointement à une ligne de référence indiquant les possibles valeurs aberrantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);
obj << T Square( 1 );

```

### Univariate Simple Statistics

**Syntaxe :** obj << Univariate Simple Statistics( state=0|1 )

**Description :** Affiche ou masque un rapport d&apos;analyse statistique simple univariée, où les statistiques sont calculées pour chaque colonne indépendamment des autres colonnes qui pourraient contenir des données manquantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );
obj << Univariate Simple Statistics( 1 );

```

### Variance Estimation

**Syntaxe :** Variance Estimation( REML|ML|Robust|Row-wise|Pairwise )

<b>Élément lanceur : Oui</b>

**Description :** Définit la méthode d&apos;estimation pour le calcul des corrélations.

S&apos;il n&apos;y a aucune valeur manquante, la méthode par défaut est Par ligne.

S&apos;il y a des valeurs manquantes et le nombre de variables <= 10 et le nombre de lignes <=5000, alors la méthode par défaut est Maximum de vraisemblance restreint (REML).

S&apos;il y a des valeurs manquantes et le nombre de variables > 10 ou le nombre de lignes > 5000, alors la méthode par défaut est Par paire.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "ML" ) );

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

### Weight

**Syntaxe :** obj << Weight( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Window View

**Syntaxe :** obj = Multivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Y

**Syntaxe :** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

