# Principal Components



### 3D Score Plot

**Syntaxe :** obj << 3D Score Plot( state=0|1 )

**Description :** Affiche ou masque un nuage de points 3D des composantes principales représentées comme des rayons dans un espace tridimensionnel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << "3D Score Plot"n( 1 );

```

### Arrow Lines

**Syntaxe :** obj << Arrow Lines( state=0|1 )

**Description :** Affiche ou masque les traits de flèche sur le graphique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Arrow Lines( 0 );

```

### Bartlett Test

**Syntaxe :** obj << Bartlett Test( state=0|1 )

**Description :** Affiche ou masque un rapport des résultats du test d&apos;homogénéité pour chacune des composantes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Bartlett Test( 1 );

```

### Biplot

**Syntaxe :** obj << Biplot( number )

**Description :** Affiche ou masque un graphique qui superpose le graphique des scores et le graphique des loadings pour le nombre de composantes spécifié.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Biplot( 2 );

```

### By

**Syntaxe :** obj = Principal Components(...<By( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);

```

### Cluster Components

**Syntaxe :** obj << Cluster Components( state=0|1 )

**Description :** Affiche ou masque le rapport Composants standardisés, qui contient les vecteurs propres de la première composante principale dans chaque cluster. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Correlations"
);
obj << Cluster Variables( Cluster Components( 1 ) );

```

### Cluster Members

**Syntaxe :** obj << Cluster Members( state=0|1 )

**Description :** Affiche ou masque un rapport des variables dans chaque cluster. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Correlations"
);
obj << Cluster Variables( Cluster Members( 1 ) );

```

### Cluster Summary

**Syntaxe :** obj << Cluster Summary( state=0|1 )

**Description :** Affiche ou masque un rapport qui résume les résultats de la classification des variables. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Correlations"
);
obj << Cluster Variables( Cluster Summary( 1 ) );

```

### Cluster Variables

**Syntaxe :** obj << Cluster Variables( state=0|1 )

**Description :** Classifie les variables dans des groupes similaires.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Cluster Variables( 1 );

```

### Color Map on Correlations

**Syntaxe :** obj << Color Map on Correlations( state=0|1 )

**Description :** Affiche ou masque une palette de couleurs associée aux corrélations entre les variables, où les variables sont organisées de manière à ce que les membres d&apos;un même cluster sont adjacents dans le graphique. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Correlations"
);
obj << Cluster Variables( Color Map On Correlations( 1 ) );

```

### Columns

**Syntaxe :** obj = Principal Components(...<Columns( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les variables à analyser pour les composantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Coordinate Matrix

**Syntaxe :** obj << Coordinate Matrix( state=0|1 )

**Description :** Shows or hides a table that contains the component coordinates. This option is available only when there is a categorical variable in the analysis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Species ),
	Standardize( "Standardized" )
);
obj << Coordinate  Matrix( 1 );

```

### Correlations

**Syntaxe :** obj << Correlations( state=0|1 )

**Description :** Affiche ou masque une matrice des coefficients de corrélation résumant la force des relations linéaires entre chaque paire de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Correlations( 1 );

```

### Covariance Matrix

**Syntaxe :** obj << Covariance Matrix( state=0|1 )

**Description :** Affiche ou masque une matrice des covariances pour chaque paire de variables Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Covariance Matrix( 1 );

```

### Eigenvalues

**Syntaxe :** obj << Eigenvalues( state=0|1 )

**Description :** Affiche ou masque les valeurs propres triées, leur pourcentage de variation et leur pourcentage de variation cumulé.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Eigenvalues( 1 );

```

### Eigenvectors

**Syntaxe :** obj << Eigenvectors( state=0|1 )

**Description :** Affiche ou masque un rapport des vecteurs propres pour chacune des composantes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Eigenvectors( 1 );

```

### Estimation Method

**Syntaxe :** Estimation Method( REML | ML | Robust | Row-wise | Pairwise | Full SVD | Truncated SVD | Randomized SVD | Robust SVD | Sparse SVD)

<b>Élément lanceur : Oui</b>

**Description :** Définit la méthode d&apos;estimation pour le calcul des corrélations.

S&apos;il n&apos;y a aucune valeur manquante, la méthode par défaut est Par ligne.

S&apos;il y a des valeurs manquantes et le nombre de variables <= 10 et le nombre de lignes <=5000, alors la méthode par défaut est Maximum de vraisemblance restreint (REML).

S&apos;il y a des valeurs manquantes et le nombre de variables > 10 ou le nombre de lignes > 5000, alors la méthode par défaut est Par paire. "Par défaut" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "REML" )
);

```

### Factor Analysis

**Syntaxe :** obj << Factor Analysis( ML|PC, ONE|SMC, n Rotated, Varimax| Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| UnRotated| Promax )

**Description :** Affiche ou masque un rapport du motif de pivotement du facteur pour les composantes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Factor Analysis( "ML", "SMC", 2, "Varimax" );

```

### Formatted Loading Matrix

**Syntaxe :** obj << Formatted Loading Matrix( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les loadings de la composante formatée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Formatted Loading Matrix( 1 );

```

### Freq

**Syntaxe :** obj = Principal Components(...<Freq( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Impute Missing Data

**Syntaxe :** obj << Impute Missing Data

**Description :** Impute des valeurs manquantes à toutes les variables Y et crée une nouvelle table de données contenant les valeurs existantes et les nouvelles valeurs imputées aux données manquantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data( 1 );

```

### Launch Fit Model

**Syntaxe :** obj << Launch Fit Model

**Description :** Lance le modèle linéaire avec les variables les plus représentatives en tant que régresseurs. Commencez par sélectionner Enregistrer les composantes des classes si vous souhaitez les utiliser en tant que régresseurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Correlations"
);
obj << Cluster Variables( Launch Fit Model );

```

### Loading Matrix

**Syntaxe :** obj << Loading Matrix( number )

**Description :** Affiche ou masque une table de données qui contient les loadings de la composante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Matrix( 1 );

```

### Loading Plot

**Syntaxe :** obj << Loading Plot( number )

**Description :** Affiche ou masque une matrice de graphiques représentant les loadings de facteur en deux dimensions.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Loading Plot( 2 );

```

### Missing value imputation

**Syntaxe :** obj = Principal Components(...Missing value imputation( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Impute les valeurs manquantes à l&apos;aide du remplissage de la matrice. Cette option s&apos;applique aux méthodes en grande dimension. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Estimation Method( "Truncated SVD" ),
	Number of Components( 6 ),
	Missing value imputation( 0 ),
	Standardize( "Standardized" )
);

```

### Model Driven Multivariate Control Chart

**Syntaxe :** obj << Model Driven Multivariate Control Chart

**Description :** Lance la carte de contrôle multivariée déterminée par modèle pour le nombre spécifié de composantes

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Model Driven Multivariate Control Chart( 2 );

```

### Number of Components

**Syntaxe :** obj = Principal Components(...Number of Components( number=10 )...)

<b>Élément lanceur : Oui</b>

**Description :** Définit le nombre de composantes à extraire. Pour réduire le temps de calcul, entrez un petit nombre de composantes. "10" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Sparse" ),
	Number of Components( 3 ),
	Standardize( "Standardized" )
);

```

### Outlier Analysis

**Syntaxe :** obj << Outlier Analysis( state=0|1 )

**Description :** Affiche ou masque le rapport de recherche des valeurs aberrantes, qui vous permet de détecter les valeurs aberrantes dans les données grâce au T² et aux statistiques de contribution.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Default" ),
	Standardize( "Standardized" ),
	Outlier Analysis( 1 )
);

```

### Partial Contribution of Variables

**Syntaxe :** obj << Partial Contribution of Variables( number )

**Description :** Affiche ou masque une table contenant les contributions partielles des variables et un graphique des contributions partielles pour les trois premières composantes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Partial Contribution of Variables(
	Plot of Partial Contribution of Variables( Overview( 3 ), "Side by side" )
);

```

### Principal Components

**Syntaxe :** Principal Components( Y( columns ) )

**Description :** Modélise la variation d&apos;un ensemble de variables à partir d&apos;un plus petit nombre de combinaisons linéaires indépendantes (composantes principales) de ces variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Profiler for Predicteds

**Syntaxe :** obj << Profiler for Predicteds

**Description :** Lance un profileur pour les prévisions en utilisant le nombre spécifié de composantes.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Profiler for Predicteds( 2 );

```

### Publish Components Formulas

**Syntaxe :** obj << Publish Components Formulas( number )

**Description :** Crée un nombre spécifié de formules des composantes principales et les enregistre comme scripts de colonne de formule dans la plate-forme de dépôt des formules. Si un rapport de dépôt des formules n&apos;est pas ouvert, cette option en crée un nouveau.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Estimation Method( "Wide" )
);
obj << Publish Components Formulas( 3 );

```

### Publish Normalized DModX Formula

**Syntaxe :** obj << Publish Normalized DModX Formula( number )

**Description :** Enregistre la formule DModX normalisée en fonction d&apos;un nombre spécifié de composantes principales en tant que script de colonne de formule dans la plate-forme de dépôt des formules. Si un rapport de dépôt des formules n&apos;est pas ouvert, cette option en crée un nouveau.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Publish Normalized DModX Formula( 3 );

```

### Save Cluster Components

**Syntaxe :** obj << Save Cluster Components

**Description :** Enregistre la (première) composante principale du cluster pour chaque cluster dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Correlations"
);
obj << Cluster Variables( Save Cluster Components );

```

### Save Imputed Formula

**Syntaxe :** obj << Save Imputed Formula

**Description :** Impute les valeurs lorsque les valeurs de la colonne Y sont manquantes. Crée et enregistre une nouvelle colonne avec une formule d&apos;imputation dans la table de données d&apos;origine.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula( 1 );

```

### Save Individual Partial Contributions

**Syntaxe :** obj << Save Individual Partial Contributions( number )

**Description :** Enregistre mes contributions partielles individuelles dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Covariances"
);
obj << Save Individual Partial Contributions( 3 );

```

### Save Individual Squared Cosines

**Syntaxe :** obj << Save Individual Squared Cosines( number )

**Description :** Enregistre les cosinus carrés individuels dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Covariances"
);
obj << Save Individual Squared Cosines( 3 );

```

### Save Low Rank Principal Components

**Syntaxe :** obj << Save Low Rank Principal Components( number )

**Description :** Enregistre les scores de la composante principale à partir des données de rang faible, sans les valeurs aberrantes et sans le bruit. Cette option s&apos;applique uniquement à la méthode d&apos;estimation ACP robuste.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Estimation Method( "Robust PCA" ),
	Number of Components( 3 )
);
obj << Save Low Rank Principal Components( 3 );

```

### Save Normalized DModX

**Syntaxe :** obj << Save Normalized DModX( number )

**Description :** Enregistre les valeurs de la DModX normalisée dans une nouvelle colonne de la table de données.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Covariances"
);
obj << Save Normalized DMODX( 3 );

```

### Save Predicteds

**Syntaxe :** obj << Save Predicteds( number )

**Description :** Enregistre les variables prévues avec un nombre donné de composantes principales dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	"on Covariances"
);
obj << Save Predicteds( 3 );

```

### Save Predicteds as Component Formulas

**Syntaxe :** obj << Save Predicteds as Component Formulas

**Description :** Enregistre les formules de composante pour un nombre donné de composantes principales dans de nouvelles colonnes de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Save Predicteds As Component Formulas( 3 );

```

### Save Principal Component Script

**Syntaxe :** obj << Save Principal Component Script( number )

**Description :** Enregistre un script dans la fenêtre de script qui, lorsqu&apos;il sera exécuté, créera de nouvelles colonnes dans la table de données pour le nombre d&apos;analyses en composantes principales donné.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << save principal Component script( 3 );

```

### Save Principal Component Values

**Syntaxe :** obj << Save Principal Component Values( number )

**Description :** Enregistre le nombre donné de composantes principales dans de nouvelles colonnes de non-formule de la table de données, en incluant les cellules imputées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Component Values( 3 );

```

### Save Principal Components

**Syntaxe :** obj << Save Principal Components( number )

**Description :** Enregistre le nombre donné de composantes principales dans de nouvelles colonnes de formule de la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components( 3 );

```

### Save Principal Components with Imputation

**Syntaxe :** obj << Save Principal Components with Imputation( number )

**Description :** Enregistre le nombre donné de composantes principales calculées en utilisant l’imputation sur les valeurs manquantes, dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Save Principal Components with Imputation( 3 );

```

### Save Rotated Components

**Syntaxe :** obj << Save Rotated Components

**Description :** Enregistre les composantes pivotées dans de nouvelles colonnes de la table de données.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components;

```

### Save Rotated Components with Imputation

**Syntaxe :** obj << Save Rotated Components with Imputation

**Description :** Enregistre les composantes pivotées, calculées en utilisant l’imputation sur les valeurs manquantes, dans de nouvelles colonnes de la table de données. Remarque : cette option est disponible uniquement après que le pivotement du facteur a été exécuté.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" ),
	Factor Analysis( "SMC", 2, "Varimax" )
);
obj << Save Rotated Components with Imputation;

```

### Scatterplot Matrix

**Syntaxe :** obj << Scatterplot Matrix( number )

**Description :** Affiche ou masque une matrice de score et des graphiques de loadings pour un nombre spécifié de composantes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Scatterplot Matrix( 4 );

```

### Score Ellipse Coverage

**Syntaxe :** obj << Score Ellipse Coverage( "0.90"|"0.95"|"0.99"|"1 sigma"|"2 sigmas"|"3 sigmas"|"Autre..." )

**Description :** Modifie le niveau alpha des ellipses de confiance sur le graphique des scores, pour chaque paire de composantes principales.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipse Coverage( 0.9 );

```

### Score Ellipses

**Syntaxe :** obj << Score Ellipses( state=0|1 )

**Description :** Affiche ou masque les ellipses de confiance sur le graphique des scores pour chaque paire de composantes principales.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Ellipses( 1 );

```

### Score Plot

**Syntaxe :** obj << Score Plot( number )

**Description :** Affiche ou masque une matrice de nuages de points contenant les scores pour chaque paire du nombre spécifié de composantes principales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot( 2 );

```

### Score Plot with Imputation

**Syntaxe :** obj << Score Plot with Imputation( number of principal components )

**Description :** Affiche ou masque une matrice de nuages de points contenant les scores pour chaque paire du nombre spécifié de composantes principales, avec imputation des valeurs manquantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Score Plot with Imputation( 2 );

```

### Scree Plot

**Syntaxe :** obj << Scree Plot( state=0|1 )

**Description :** Affiche ou masque un graphique linéaire des valeurs propres pour chaque composante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Scree Plot( 1 );

```

### Select component

**Syntaxe :** obj << Select component( <specify dimension to plot> )

**Description :** Sélectionne les dimensions qui sont utilisées en tant qu&apos;axes dans les graphiques de résumé.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Standardize( "Standardized" )
);
obj << Select Component( 1, 3 );

```

### Show Supplementary Variable

**Syntaxe :** obj << Show Supplementary Variable( state=0|1 )

**Description :** Sur le graphique, affiche ou masque les traits de flèche pour les variables supplémentaires.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);
obj << Show Supplementary Variable( 0 );

```

### Squared Cosines of Variables

**Syntaxe :** obj << Squared Cosines of Variables( number )

**Description :** Affiche ou masque une table contenant les cosinus carrés des variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Principal Components(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Standardize( "Standardized" )
);
obj << Squared Cosines of Variables(
	Plot of Squared Cosines of Variables( Overview( 3 ), "Stacked", "Horizontal" )
);

```

### Standardize

**Syntaxe :** obj = Principal Components(...Standardize( "Standardisé"|"Non codé(e)"|"Non codé et non centré" )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie si chaque colonne doit être standardisée individuellement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Estimation Method( "Row-wise" ),
	Standardize( "Standardized" )
);

```

### Summary Plots

**Syntaxe :** obj << Summary Plots( state=0|1 )

**Description :** Affiche ou masque un nœud de contour contenant un graphique des valeurs propres, un graphique des scores et un graphique des loadings. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);
obj << Summary Plots( 1 );

```

### Supplementary Variable

**Syntaxe :** obj << Supplementary Variable( column(s) )

**Description :** Spécifie une ou plusieurs variables supplémentaires. Les variables supplémentaires ne sont utilisées dans aucun calcul sur la plate-forme. Leur inclusion n&apos;affecte pas les résultats. Elles peuvent améliorer l&apos;interprétation des données ou servir à des analyses futures.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### Weight

**Syntaxe :** obj = Principal Components(...<Weight( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**Syntaxe :** obj = Principal Components(...<Y( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les variables à analyser pour les composantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Z

**Syntaxe :** obj << Z( column(s) )

**Description :** Spécifie une ou plusieurs variables supplémentaires. Les variables supplémentaires ne sont utilisées dans aucun calcul sur la plate-forme. Leur inclusion n&apos;affecte pas les résultats. Elles peuvent améliorer l&apos;interprétation des données ou servir à des analyses futures.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Principal Components(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Z( :Species ),
	Standardize( "Standardized" )
);

```

### on Correlations

**Syntaxe :** Principal Components( Y( columns ), On Correlations )

**Description :** Crée un rapport des composantes principales en utilisant la matrice de corrélation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Standardize( "Standardized" )
);

```

### on Covariances

**Syntaxe :** Principal Components( Y( columns ), On Covariances )

**Description :** Crée un rapport des composantes principales en utilisant la matrice de covariance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Covariances"
);

```

### on Unscaled

**Syntaxe :** Principal Components( Y( column ), On Unscaled )

**Description :** Crée un rapport des composantes principales en utilisant les données non mises à l&apos;échelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	"on Unscaled"
);

```

