# Multivariate



## Colonnes

### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Columns

**Syntaxe :** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Freq

**Syntaxe :** obj &lt;&lt; Freq( column )

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Freq( :_freqcol ));

```

### Weight

**Syntaxe :** obj &lt;&lt; Weight( column )

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Weight( :_weightcol ));

```

### Y

**Syntaxe :** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## Constructeurs associés

### Multivariate

**Syntaxe :** Multivariate( Y( columns ) )

**Description :** Explore les corrélations et associations entre les variables numériques en utilisant toute une variété de techniques d&apos;analyses multivariées. Ces techniques incluent les mesures d&apos;associations paramétriques et non paramétriques, les matrices de nuages de points, l&apos;analyse en composantes principales, l&apos;analyse des valeurs aberrantes et la fiabilité des éléments.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## Messages d'éléments

### CI of Correlation

**Syntaxe :** obj &lt;&lt; CI of Correlation( state=0|1 )

**Description :** Affiche ou masque un rapport des corrélations entre chaque variable Y ainsi que les intervalles de confiance pour chaque corrélation.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << CI of Correlation( 1 );

```

### Cluster the Correlations

**Syntaxe :** obj &lt;&lt; Cluster the Correlations( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations de classe, en partant du bleu pour les corrélations négatives et en se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Cluster the Correlations( 1 );

```

### Color Map on Correlations

**Syntaxe :** obj &lt;&lt; Color Map on Correlations( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Correlations( 1 );

```

### Color Map on Hoeffding's D

**Syntaxe :** obj &lt;&lt; Color Map on Hoeffding&apos;s D( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient D de Hoeffding, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Hoeffding's D( 1 );

```

### Color Map on Kendall's Tau

**Syntaxe :** obj &lt;&lt; Color Map on Kendall&apos;s Tau( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient Tau de Kendall, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Kendall's τ

**Syntaxe :** obj &lt;&lt; Color Map on Kendall&apos;s τ( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient Tau de Kendall, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Pairwise Correlations

**Syntaxe :** obj &lt;&lt; Color Map on Pairwise Correlations( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations par paire, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Pairwise Correlations( 1 );

```

### Color Map on Spearman's Rho

**Syntaxe :** obj &lt;&lt; Color Map on Spearman&apos;s Rho( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient Rho de Spearman, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on Spearman's ρ

**Syntaxe :** obj &lt;&lt; Color Map on Spearman&apos;s ρ( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations non paramétriques du coefficient Rho de Spearman, partant du bleu pour les corrélations négatives et se déplaçant progressivement vers le rouge lorsque les valeurs de corrélation s’approchent de 1.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on p-Values

**Syntaxe :** obj &lt;&lt; Color Map on p-Values( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux p-valeurs, partant du rouge pour les p-valeurs proches de zéro et se déplaçant progressivement vers le bleu lorsque les p-valeurs s’approchent de 1.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << "Color Map on p-Values"n( 1 );

```

### Correlation Probability

**Syntaxe :** obj &lt;&lt; Correlation Probability( state=0|1 )

**Description :** Affiche ou masque une matrice de p-valeurs, chacune correspondant à un test de l&apos;hypothèse zéro indiquant que la vraie corrélation entre les variables est égale à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Correlation Probability( 1 );

```

### Correlations Multivariate

**Syntaxe :** obj &lt;&lt; Correlations Multivariate( state=0|1 )

**Description :** Affiche ou masque une matrice des coefficients de corrélation résumant la force des relations linéaires entre chaque paire de variables Y. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Correlations Multivariate( 1 );

```

### Covariance Matrix

**Syntaxe :** obj &lt;&lt; Covariance Matrix( state=0|1 )

**Description :** Affiche ou masque une matrice des covariances pour chaque paire de variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Covariance Matrix( 1 );

```

### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Crée un code SAS Proc Mixed pour exécuter des méthodes d’estimation similaires via SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "REML" ) );obj << Create SAS Job();

```

### Cronbach's Alpha

**Syntaxe :** obj &lt;&lt; Cronbach&apos;s Alpha( state=0|1 )

**Description :** Affiche ou masque un rapport du coefficient Alpha de Cronbach pour l&apos;ensemble complet des variables ainsi que le coefficient Alpha si chaque variable Y a été individuellement supprimée.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Cronbach's alpha( 1 );

```

### Cronbach's α

**Syntaxe :** obj &lt;&lt; Cronbach&apos;s α( state=0|1 )

**Description :** Affiche ou masque un rapport du coefficient Alpha de Cronbach pour l&apos;ensemble complet des variables ainsi que le coefficient Alpha si chaque variable Y a été individuellement supprimée.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Cronbach's alpha( 1 );

```

### Ellipsoid 3D Plot

**Syntaxe :** obj &lt;&lt; Ellipsoid 3D Plot( column1, column2, column3 )

**Description :** Affiche ou masque une surface de réponse affichant un ellipsoïde à 95 % pour les trois variables Y choisies.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Ellipsoid 3D Plot( :Ether, :Chloroform, :Benzene );

```

### Get Correlation Matrix

**Syntaxe :** obj &lt;&lt; Get Correlation Matrix

**Description :** Renvoie la matrice de corrélation.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );corr = obj << Get Correlation Matrix;Show( corr );

```

### Get Inv Correlation Matrix

**Syntaxe :** obj &lt;&lt; Get Inv Correlation Matrix

**Description :** Renvoie la matrice de corrélation inverse.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Inverse Correlations( 1 ) );icorr = obj << Get Inv Correlation Matrix;Show( icorr );

```

### Hoeffding's D

**Syntaxe :** obj &lt;&lt; Hoeffding&apos;s D( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient D de Hoeffding pour chaque paire de variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Hoeffding's D( 1 );

```

### Hotelling's T Square Test

**Syntaxe :** obj &lt;&lt; Hotelling&apos;s T Square Test

**Description :** Exécute un test à un échantillon de la moyenne de la distribution multivariée des variables Y, avec le vecteur moyenne spécifié selon l&apos;hypothèse nulle donné.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Hotelling's T Square Test( 1, 0.7, 0.5, 0, -1 );

```

### Impute Missing Data

**Syntaxe :** obj &lt;&lt; Impute Missing Data

**Description :** Impute des valeurs manquantes à toutes les variables Y et crée une nouvelle table de données contenant les valeurs existantes et les nouvelles valeurs imputées aux données manquantes.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Impute Missing Data;

```

### Inverse Correlations

**Syntaxe :** obj &lt;&lt; Inverse Correlations( state=0|1 )

**Description :** Affiche ou masque une matrice des corrélations inverses entre chaque variable Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Inverse Correlations( 1 );

```

### Jackknife Distances

**Syntaxe :** obj &lt;&lt; Jackknife Distances( state = 0|1, &lt;Save Jackknife Distances&gt; )

**Description :** Affiche ou masque un graphique des distances de Jackknife pour chaque ligne, conjointement à une ligne de référence indiquant les possibles valeurs aberrantes.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Jackknife Distances( 1 );

```

### Kendall's Tau

**Syntaxe :** obj &lt;&lt; Kendall&apos;s Tau( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient Tau de Kendall pour chaque paire de variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Kendall's Tau( 1 );

```

### Kendall's τ

**Syntaxe :** obj &lt;&lt; Kendall&apos;s τ( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient Tau de Kendall pour chaque paire de variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Kendall's Tau( 1 );

```

### Mahalanobis Distances

**Syntaxe :** obj &lt;&lt; Mahalanobis Distances( state = 0|1, &lt;Save Outlier Distances&gt; )

**Description :** Affiche ou masque un graphique des distances de Mahalanobis pour chaque ligne, conjointement à une ligne de référence indiquant les possibles valeurs aberrantes.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Mahalanobis Distances( 1 );

```

### Matrix Format

**Syntaxe :** obj = Multivariate(...Matrix Format( "Triangulaire inférieur"|"Triangulaire supérieur"|"Carré" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la manière dont les variables sont affichées sur la matrice de nuages de points.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Matrix Format( "Lower Triangular" ) );

```

### Multivariate Simple Statistics

**Syntaxe :** obj &lt;&lt; Multivariate Simple Statistics( state=0|1 )

**Description :** Affiche ou masque un rapport statistique d’analyse simple multivariée, dans lequel les statistiques sont calculées en éliminant toutes les lignes possédant des valeurs manquantes.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );obj << Multivariate Simple Statistics( 1 );

```

### Pairwise Correlations

**Syntaxe :** obj &lt;&lt; Pairwise Correlations( state=0|1 )

**Description :** Affiche ou masque un rapport des corrélations par paire pour toutes les combinaisons de variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Pairwise Correlations( 1 );

```

### Parallel Coord Plot

**Syntaxe :** obj &lt;&lt; Parallel Coord Plot( state=0|1 )

**Description :** Affiche ou masque un diagramme des coordonnées parallèles des variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Parallel Coord Plot( 1 );

```

### Partial Correlation Diagram

**Syntaxe :** obj &lt;&lt; Partial Correlation Diagram( state=0|1 )

**Description :** Affiche ou masque le rapport Diagramme des corrélations partielles. Cette option réalise une décomposition des valeurs propres sur la matrice des corrélations partielles et utilise les résultats pour donner une représentation visuelle des corrélations partielles.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Partial Correlation Diagram( 1 );

```

### Partial Correlation Probability

**Syntaxe :** obj &lt;&lt; Partial Correlation Probability( state=0|1 )

**Description :** Affiche ou masque une matrice de p-valeurs, chacune correspondant à un test de l&apos;hypothèse nulle indiquant que la vraie corrélation partielle entre les variables est égale à zéro.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Partial Correlation Probability( 1 );

```

### Partial Correlations

**Syntaxe :** obj &lt;&lt; Partial Correlations( state=0|1 )

**Description :** Affiche ou masque une matrice des corrélations partielles entre chaque variable Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Partial Correlations( 1 );

```

### Save Imputed Formula

**Syntaxe :** obj &lt;&lt; Save Imputed Formula

**Description :** Impute les valeurs lorsque les valeurs de la colonne Y sont manquantes. Crée et enregistre une nouvelle colonne avec une formule d&apos;imputation dans la table de données d&apos;origine.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Save Imputed Formula;

```

### Scatterplot Matrix

**Syntaxe :** obj &lt;&lt; Scatterplot Matrix( state=0|1 )

**Description :** Affiche ou masque une matrice de graphiques de nuages de points pour chaque paire de variables Y. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( 0 ));

```

### Set Alpha Level

**Syntaxe :** obj &lt;&lt; Set Alpha Level( "0.01"|"0.05"|"0.10"|"0.50"|"Autre..."=0.05 )

**Description :** Modifie le niveau alpha pour les intervalles de confiance relatifs à chaque corrélation. "0.05" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Set Alpha Level( 0.01 );obj << CI of Correlation( 1 );

```

### Set α Level

**Syntaxe :** obj &lt;&lt; Set α Level( "0.01"|"0.05"|"0.10"|"0.50"|"Autre..."=0.05 )

**Description :** Modifie le niveau alpha pour les intervalles de confiance relatifs à chaque corrélation. "0.05" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Set α Level( 0.01 );obj << CI of Correlation( 1 );

```

### Spearman's Rho

**Syntaxe :** obj &lt;&lt; Spearman&apos;s Rho( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient Rho de Spearman pour chaque paire de variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Spearman's Rho( 1 );

```

### Spearman's ρ

**Syntaxe :** obj &lt;&lt; Spearman&apos;s ρ( state=0|1 )

**Description :** Affiche ou masque un rapport de la statistique du coefficient Rho de Spearman pour chaque paire de variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Spearman's Rho( 1 );

```

### Standardized Alpha

**Syntaxe :** obj &lt;&lt; Standardized Alpha( state=0|1 )

**Description :** Affiche ou masque un rapport du coefficient Alpha standardisé de Cronbach pour l&apos;ensemble complet des variables ainsi que le coefficient Alpha standardisé si chaque variable Y a été individuellement supprimée.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Standardized alpha( 1 );

```

### Standardized α

**Syntaxe :** obj &lt;&lt; Standardized α( state=0|1 )

**Description :** Affiche ou masque un rapport du coefficient Alpha standardisé de Cronbach pour l&apos;ensemble complet des variables ainsi que le coefficient Alpha standardisé si chaque variable Y a été individuellement supprimée.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Standardized alpha( 1 );

```

### T Square

**Syntaxe :** obj &lt;&lt; T Square( state = 0|1, &lt;Save T Square&gt; )

**Description :** Affiche ou masque un graphique des valeurs T² pour chaque ligne, conjointement à une ligne de référence indiquant les possibles valeurs aberrantes.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << T Square( 1 );

```

### T²

**Syntaxe :** obj &lt;&lt; T²( state = 0|1, &lt;Save T Square&gt; )

**Description :** Affiche ou masque un graphique des valeurs T² pour chaque ligne, conjointement à une ligne de référence indiquant les possibles valeurs aberrantes.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << T Square( 1 );

```

### Univariate Simple Statistics

**Syntaxe :** obj &lt;&lt; Univariate Simple Statistics( state=0|1 )

**Description :** Affiche ou masque un rapport d&apos;analyse statistique simple univariée, où les statistiques sont calculées pour chaque colonne indépendamment des autres colonnes qui pourraient contenir des données manquantes.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );obj << Univariate Simple Statistics( 1 );

```

### Variance Estimation

**Syntaxe :** Variance Estimation( REML|ML|Robust|Row-wise|Pairwise ) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définit la méthode d&apos;estimation pour le calcul des corrélations.

S&apos;il n&apos;y a aucune valeur manquante, la méthode par défaut est Par ligne.

S&apos;il y a des valeurs manquantes et le nombre de variables <= 10 et le nombre de lignes <=5000, alors la méthode par défaut est Maximum de vraisemblance restreint (REML).

S&apos;il y a des valeurs manquantes et le nombre de variables > 10 ou le nombre de lignes > 5000, alors la méthode par défaut est Par paire.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "ML" ) );

```

## Messages d'éléments partagés

### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

#### Préconfiguration anonyme

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Rechercher dans les dossiers

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Rechercher par nom

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Multivariate(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Principal Component Options

### Messages d'éléments

#### 3D Score Plot

**Syntaxe :** obj &lt;&lt; 3D Score Plot( state=0|1 )

**Description :** Affiche ou masque un nuage de points 3D des composantes principales représentées comme des rayons dans un espace tridimensionnel.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", "3D Score Plot"n );

```

#### Bartlett Test

**Syntaxe :** obj &lt;&lt; Bartlett Test( state=0|1 )

**Description :** Affiche ou masque un rapport des résultats du test d&apos;homogénéité pour chacune des composantes principales.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Bartlett Test( 1 ) );

```

#### Eigenvectors

**Syntaxe :** obj &lt;&lt; Eigenvectors( state=0|1 )

**Description :** Affiche ou masque un rapport des vecteurs propres pour chacune des composantes principales.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Eigenvectors( 1 ) );

```

#### Factor Rotation

**Syntaxe :** obj &lt;&lt; Factor Rotation( &lt;ML|PC&gt;, 1|SMC, n Rotated, Varimax|Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| Promax )

**Description :** Affiche ou masque un rapport du motif de pivotement du facteur pour les composantes principales.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Factor Rotation( "ML", "SMC", 2, "Varimax" ));

```

#### Loading Plot

**Syntaxe :** obj &lt;&lt; Loading Plot( number )

**Description :** Affiche ou masque une matrice de graphiques représentant les loadings de facteur en deux dimensions.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Loading Plot( 2 ) );

```

#### Save Principal Components

**Syntaxe :** obj &lt;&lt; Save Principal Components( number )

**Description :** Enregistre le nombre donné de composantes principales dans de nouvelles colonnes de la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Save Principal Components( 3 ) );

```

#### Save Principal Components with Imputation

**Syntaxe :** obj &lt;&lt; Save Principal Components with Imputation( number )

**Description :** Enregistre le nombre donné de composantes principales calculées en utilisant l’imputation sur les valeurs manquantes, dans de nouvelles colonnes de la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Save Principal Components with Imputation( 3 ));

```

#### Save Rotated Components

**Syntaxe :** obj &lt;&lt; Save Rotated Components

**Description :** Enregistre les composantes pivotées dans de nouvelles colonnes de la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Factor Rotation( "SMC", 2, "Varimax" ),	Save Rotated Components);

```

#### Save Rotated Components with Imputation

**Syntaxe :** obj &lt;&lt; Save Rotated Components with Imputation

**Description :** Enregistre les composantes pivotées, calculées en utilisant l’imputation sur les valeurs manquantes, dans de nouvelles colonnes de la table de données. Remarque : cette option est disponible uniquement après que le pivotement du facteur a été exécuté.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components(	"on Correlations",	Factor Rotation( "SMC", 2, "Varimax" ),	Save Rotated Components with Imputation);

```

#### Score Plot

**Syntaxe :** obj &lt;&lt; Score Plot( number )

**Description :** Affiche ou masque une matrice de nuages de points contenant les scores pour chaque paire du nombre spécifié de composantes principales.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Score Plot( 2 ) );

```

#### Score Plot with Imputation

**Syntaxe :** obj &lt;&lt; Score Plot with Imputation( number )

**Description :** Affiche ou masque une matrice de nuages de points contenant les scores pour chaque paire du nombre spécifié de composantes principales, avec imputation des valeurs manquantes.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Score Plot with Imputation( 2 ) );

```

#### Scree Plot

**Syntaxe :** obj &lt;&lt; Scree Plot( state=0|1 )

**Description :** Affiche ou masque un graphique linéaire des valeurs propres pour chaque composante.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );obj << Principal Components( "on Correlations", Scree Plot( 1 ) );

```

## Scatterplot Matrix Message

### Messages d'éléments

#### Density Ellipses

**Syntaxe :** Density Ellipses( state=0|1 )

**Description :** Affiche ou masque les ellipses de densité sur la matrice de nuages de points.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ) ));

```

#### Ellipse Alpha

**Syntaxe :** obj &lt;&lt; Ellipse Alpha( "0.90"|"0.95"|"0.99"|"Autre..." )

**Description :** Modifie le niveau alpha des ellipses de densité sur la matrice de nuages de points entre toutes les variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) ));

```

#### Ellipse Color

**Syntaxe :** Ellipse Color( color )

**Description :** Modifie la couleur des ellipses de densité ombrés sur la matrice de nuages de points entre toutes les variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( "Blue" ) ));

```

#### Ellipse α

**Syntaxe :** obj &lt;&lt; Ellipse α( "0.90"|"0.95"|"0.99"|"Autre..." )

**Description :** Modifie le niveau alpha des ellipses de densité sur la matrice de nuages de points entre toutes les variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) ));

```

#### Ellipses Coverage

**Syntaxe :** obj &lt;&lt; Ellipses Coverage( "0.90"|"0.95"|"0.99"|"Autre..." )

**Description :** Modifie le niveau alpha des ellipses de densité sur la matrice de nuages de points entre toutes les variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Density Ellipses( 1 ), Ellipses Coverage( 0.9 ) ));

```

#### Ellipses Transparency

**Syntaxe :** obj &lt;&lt; Ellipses Transparency( "0.20"|"0.40"|"0.60"|"Autre..." )

**Description :** Modifie la transparence des ellipses de densité ombrés sur la matrice de nuages de points entre toutes les variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Ellipses Transparency( 0.6 ), Shaded Ellipses( 1 ) ));

```

#### Fit Line

**Syntaxe :** obj &lt;&lt; Fit Line( state=0|1 )

**Description :** Affiche ou masque la droite de régression et l’intervalle de confiance sur la matrice de nuages de points.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Fit line( 1 ) ));

```

#### Heat Map

**Syntaxe :** Heat Map( state=0|1 )

**Description :** Affiche ou masque une carte thermique des corrélations dans le triangle situé en haut à droite de la matrice de nuages de points. La couleur de chaque cellule de la carte thermique représente la corrélation entre chaque paire de variables.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Heat Map( 1 ) ));

```

#### Horizontal

**Syntaxe :** Horizontal( state=0|1 )

**Description :** Affiche des histogrammes, en horizontal, sur la diagonale de la matrice de nuages de points entre toutes les variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Horizontal( 1 ) ));

```

#### Nonpar Density

**Syntaxe :** Nonpar Density( state=0|1 )

**Description :** Affiche ou masque les isoréponses de densité non paramétrique ombrées pour les quantiles 0,90 et 0,50.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Nonpar Density( 1 ) ));

```

#### Shaded Ellipses

**Syntaxe :** Shaded Ellipses( state=0|1 )

**Description :** Assombrit ou éclaircit la zone à l’intérieur des ellipses de densité sur la matrice de nuages de points entre toutes les variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Shaded Ellipses( 1 ) ));

```

#### Show Correlations

**Syntaxe :** Show Correlations( state=0|1 )

**Description :** Affiche ou masque la corrélation de chaque paire de variables dans le coin supérieur gauche de chaque nuage de points.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Show Correlations( 1 ) ));

```

#### Show Counts

**Syntaxe :** Show Counts( state=0|1 )

**Description :** Affiche ou masque les dénombrements qui étiquettent les barres des histogrammes sur la diagonale de la matrice de nuages de points entre toutes les variables Y. Remarque : disponible uniquement après l’affichage de l’histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Vertical( 1 ), Show Counts( 1 ) ));

```

#### Show Points

**Syntaxe :** Show Points( state=0|1 )

**Description :** Affiche ou masque les points sur la matrice de nuages de points. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Show Points( 1 ) ));

```

#### Significance Circles

**Syntaxe :** Significance Circles( state=0|1 )

**Description :** Affiche ou masque les cercles de corrélation dans le triangle situé en haut à droite de la matrice de nuages de points. La couleur du cercle représente la corrélation et la taille du cercle représente le test de significativité entre chaque paire de variables.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Significance Circles( 1 ) ));

```

#### Vertical

**Syntaxe :** Vertical( state=0|1 )

**Description :** Affiche des histogrammes, en vertical, sur la diagonale de la matrice de nuages de points entre toutes les variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),	Scatterplot Matrix( Vertical( 1 ) ));

```

