# Factor Analysis



## Factor Analysis Fit Options

### Arrow Lines

**Syntaxe :** obj << (Fit[number] << Arrow Lines( state=0|1 ))

**Description :** Affiche ou masque les traits de flèche sur le graphique. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
Wait( 1 );
obj << (Fit[1] << Arrow Lines( 0 ));

```

### Copy Model Specification for SEM

**Syntaxe :** obj << (Fit[number] << Copy Model Specification for SEM)

**Description :** Copie les définitions de facteur dans le presse-papiers. Vous pouvez ensuite coller les définitions de facteur dans la plate-forme SEM avec des données indépendantes pour confirmer le modèle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Factor Analysis(
	Y( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit( "ML", "SMC", 1, "Varimax" )
);
obj << (Fit[1] << Copy Model Specification for SEM);
obj2 = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj2 << Paste Model Specification;

```

### Eigenvalues

**Syntaxe :** obj << (Fit[number] << Eigenvalues( state=0|1 ))

**Description :** Affiche ou masque les valeurs propres de la matrice de corrélation réduite et le pourcentage de la variance commune qu&apos;elles représentent.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Eigenvalues( 1 ));

```

### Factor Loading Plot

**Syntaxe :** obj << (Fit[number] << Factor Loading Plot( state=0|1 ))

**Description :** Affiche ou masque un graphique des loadings du facteur pivoté. Lorsque plus de deux facteurs sont modélisés, le graphique des loadings des facteurs est une matrice de graphiques. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
Wait( 1 );
obj << (Fit[1] << Factor Loading Plot( 0 ));

```

### Factor Structure

**Syntaxe :** obj << (Fit[number] << Factor Structure( state=0|1 ))

**Description :** Affiche ou masque la matrice des corrélations entre les variables et les facteurs communs. Cette option n&apos;est disponible que pour les rotations obliques. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Promax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
Wait( 1 );
obj << (Fit[1] << Factor Structure( 0 ));

```

### Final Communality Estimates

**Syntaxe :** obj << (Fit[number] << Final Communality Estimates( state=0|1 ))

**Description :** Affiche ou masque les estimations des points communs après l&apos;ajustement du modèle factoriel. Lorsque les facteurs sont orthogonaux, l&apos;estimation finale de caractère commun pour une variable est égale à la somme des carrés des loadings pour cette variable. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Final Communality Estimates( 0 ));

```

### Interfactor Correlations

**Syntaxe :** obj << (Fit[number] << Interfactor Correlations( state=0|1 ))

**Description :** Affiche ou masque la matrice des corrélations entre les facteurs. Cette option n&apos;est disponible que pour les rotations obliques.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Quartimin" )
);
obj << (Fit[1] << Interfactor Correlations( 1 ));

```

### Measures of Factor Scores

**Syntaxe :** obj << (Fit[number] << Measures of Factor Scores( state=0|1 ))

**Description :** Affiche ou masque les mesures de la détermination des scores des facteurs, notamment les scores R multiple, R carré multiple et Corrélation minimum.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
obj << (Fit[1] << Measures of Factor Scores( 1 ));

```

### Measures of Fit

**Syntaxe :** obj << (Fit[number] << Measures of Fit( state=0|1 ))

**Description :** Affiche ou masque les mesures de l&apos;ajustement, y compris le khi-deux sans correction de Bartlett, l&apos;AIC, le BIC, l&apos;indice de Tucker-Lewis et la racine de l&apos;erreur quadratique moyenne de l&apos;approximation. Cette option est uniquement disponible lorsque Maximum de vraisemblance est sélectionné comme Méthode de factorisation. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Measures of Fit( 0 ));

```

### Prior Communality

**Syntaxe :** obj << (Fit[number] << Prior Communality( state=0|1 ))

**Description :** Affiche ou masque une estimation initiale du caractère commun pour chaque variable.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Prior Communality( 1 ));

```

### Remove Fit

**Syntaxe :** obj << (Fit[number] << Remove Fit)

**Description :** Supprime l&apos;ajustement spécifié du rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Remove Fit);

```

### Rotated Factor Loading

**Syntaxe :** obj << (Fit[number] << Rotated Factor Loading( state=0|1 ))

**Description :** Affiche ou masque la matrice des loadings des facteurs après rotation. Si la rotation est orthogonale, ces valeurs sont les corrélations entre les variables et les facteurs pivotés. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
Wait( 1 );
obj << (Fit[1] << Rotated Factor Loading( 0 ));

```

### Rotation Matrix

**Syntaxe :** obj << (Fit[number] << Rotation Matrix( state=0|1 ))

**Description :** Affiche ou masque les valeurs utilisées pour pivoter le graphique des loadings des facteurs et la matrice des loadings des facteurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Rotation Matrix( 1 ));

```

### Save Factor Scores

**Syntaxe :** obj << (Fit[number] << Save Factor Scores( state=0|1 ))

**Description :** Enregistre des nouvelles colonnes de formule dans la table de données d&apos;origine. Les nouvelles colonnes contiennent les formules pour les scores des facteurs, qui sont estimés en utilisant la méthode de Thurstone.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Save Factor Scores);

```

### Save Factor Scores with Imputation

**Syntaxe :** obj << (Fit[number] << Save Factor Scores with Imputation( state=0|1 ))

**Description :** Enregistre des nouvelles colonnes de formule dans la table de données d&apos;origine. Les nouvelles colonnes contiennent les formules pour les scores des facteurs avec des valeurs imputées aux valeurs manquantes.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Factor Analysis(
	Y( :CO, :SO2, :NO, :PM10 ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Save Factor Scores with Imputation);

```

### Score Plot

**Syntaxe :** obj << (Fit[number] << Score Plot( state=0|1 ))

**Description :** Affiche ou masque un nuage de points des scores des facteurs estimés. Lorsque plus de deux facteurs sont modélisés, le graphique des scores est une matrice de graphiques.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit(
		"ML",
		"SMC",
		2,
		"Varimax",
		Rotated Factor Loading( 0 ),
		Factor Loading Plot( 0 )
	),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
obj << (Fit[1] << Score Plot( 1 ));

```

### Score Plot with Imputation

**Syntaxe :** obj << (Fit[number] << Score Plot with Imputation( state=0|1 ))

**Description :** Affiche ou masque un nuage de points des scores des facteurs estimés avec des valeurs imputées aux valeurs manquantes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Factor Analysis(
	Y( :CO, :SO2, :NO, :PM10 ),
	Variance Scaling( "Correlations" ),
	Fit(
		"ML",
		"SMC",
		2,
		"Varimax",
		Rotated Factor Loading( 0 ),
		Factor Loading Plot( 0 )
	),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
obj << (Fit[1] << Score Plot with Imputation( 1 ));

```

### Significance Test

**Syntaxe :** obj << (Fit[number] << Significance Test( state=0|1 ))

**Description :** Affiche ou masque les résultats de deux tests de significativité. Le premier teste l&apos;hypothèse nulle indiquant qu&apos;il n&apos;y a pas de facteurs communs et le second teste l&apos;hypothèse nulle indiquant qu&apos;un nombre spécifié de facteurs est suffisant. Actif par défaut.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Significance Test( 0 ));

```

### Standard Score Coefficients

**Syntaxe :** obj << (Fit[number] << Standard Score Coefficients( state=0|1 ))

**Description :** Affiche ou masque une table des multiplicateurs utilisés pour estimer les scores des facteurs lors de l&apos;enregistrement des facteurs pivotés dans la table de données source.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Standard Score Coefficients( 1 ));

```

### Target Matrix

**Syntaxe :** obj << (Fit[number] << Target Matrix( state=0|1 ))

**Description :** Affiche ou masque la matrice à laquelle le motif de facteur varimax est pivoté. Cette option est uniquement disponible pour la rotation Promax.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Promax" )
);
obj << (Fit[1] << Target Matrix( 1 ));

```

### Unrotated Factor Loading

**Syntaxe :** obj << (Fit[number] << Unrotated Factor Loading( state=0|1 ))

**Description :** Affiche ou masque la matrice des loadings des facteurs avant la rotation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Unrotated Factor Loading( 1 ));

```

### Unsorted and Rotated Factor Loading

**Syntaxe :** obj << (Fit[number] << Unsorted and Rotated Factor Loading( state=0|1 ))

**Description :** Affiche ou masque la matrice des loadings du facteur non triée après la rotation.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
obj << (Fit[1] << Unsorted and Rotated Factor Loading( 1 ));

```

### Unsorted and Unrotated Factor Loading

**Syntaxe :** obj << (Fit[number] << Unsorted and Unrotated Factor Loading( state=0|1 ))

**Description :** Affiche ou masque la matrice des loadings des facteurs avant le tri et la rotation.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Unsorted and Unrotated Factor Loading( 1 ));

```

### Variance Explained by Each Factor

**Syntaxe :** obj << (Fit[number] << Variance Explained by Each Factor( state=0|1 ))

**Description :** Affiche ou masque la variance, le pourcentage et le pourcentage cumulé de la variance commune expliquée par chaque facteur pivoté. Cette option n&apos;est disponible que pour les rotations orthogonales. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Variance Explained by Each Factor( 0 ));

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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bartlett's Test of Sphericity

**Syntaxe :** obj << Bartlett&apos;s Test of Sphericity( state=0|1 )

**Description :** Affiche ou masque un rapport du test d&apos;homogénéité qui détermine si les valeurs propres ont des variances égales.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Bartlett's Test of Sphericity( 1 );

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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Data Table Window;

```

### Eigenvalues

**Syntaxe :** obj << Eigenvalues( state=0|1 )

**Description :** Affiche ou masque une table des valeurs propres de la matrice de corrélation, de covariance ou non mise à l&apos;échelle d&apos;origine. La table comprend le pourcentage de la variance totale représenté par chaque valeur propre, un diagramme en barres décrivant la contribution au pourcentage, ainsi que le pourcentage cumulé contribué par chaque valeur propre successive. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << Eigenvalues( 0 );

```

### Factor Analysis

**Syntaxe :** Factor Analysis( Y( columns ) )

**Description :** Découvre la structure sous-jacente des données en extrayant les variables non observées, ou les facteurs, qui représentent la variabilité commune dans les variables observées. Le pivotement du facteur est utilisé pour accroître leur interprétabilité.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Fit

**Syntaxe :** obj << Fit( "PC"|"ML", "ONE"|"SMC", number, rotation method )

**Description :** Ajuste un modèle d&apos;analyse factorielle en utilisant la méthode de mise en facteur spécifiée, le caractère commun a priori, le nombre de facteurs et la méthode de pivotement. Les méthodes de mise en facteur disponibles sont les méthodes Axe principal (PC) et Maximum de vraisemblance (ML). Vous pouvez définir tous les points communs a priori égaux à 1 (ONE) ou égaux aux coefficients de corrélation multiple au carré (SMC). Les méthodes de pivotement disponibles sont Varimax, Biquartimax, Equamax, Factorparsimax, Orthomax, Parsimax, Quartimax, Biquartimin, Covarimin, Obbiquartimax, Obequamax, Obfactorparsimax, Oblimin, Obparsimax, Obquartimax, Obvarimax et Promax.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" )
);
obj << Fit( "ML", "SMC", 2, "Varimax" );

```

### Freq

**Syntaxe :** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
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

### Kaiser-Meyer-Olkin Test

**Syntaxe :** obj << "Kaiser-Meyer-Olkin Test"n( state=0|1 )

**Description :** Affiche ou masque les résultats du test de Kaiser-Meyer-Olkin (KMO). Le test est un indicateur de la proportion de la variance qui pourrait être une variance commune, potentiellement en raison de facteurs sous-jacents.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << "Kaiser-Meyer-Olkin Test"n( 1 );

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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Save Script to Script Window;

```

### Scree Plot

**Syntaxe :** obj << Scree Plot( state=0|1 )

**Description :** Affiche ou masque un graphique linéaire des valeurs propres pour chaque composante. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << Scree Plot( 0 );

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

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
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

### Variance Estimation

**Syntaxe :** obj = Factor Analysis(...Variance Estimation( "REML"| "ML"| "Robust"| "Row-wise"| "Pairwise" )...)

**Description :** Définit la méthode d&apos;estimation pour le calcul des corrélations.

S&apos;il n&apos;y a aucune valeur manquante, la méthode par défaut est Par ligne.

S&apos;il y a des valeurs manquantes et le nombre de variables <= 10 et le nombre de lignes <=5000, alors la méthode par défaut est Maximum de vraisemblance restreint (REML).

S&apos;il y a des valeurs manquantes et le nombre de variables > 10 ou le nombre de lignes > 5000, alors la méthode par défaut est Par paire.

**JMP Version ajoutée :** 14

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Estimation( "Robust" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Variance Scaling

**Syntaxe :** obj = Factor Analysis(...Variance Scaling( "Correlations"| "Covariances"| "Unscaled")...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la méthode utilisée pour la mise à l&apos;échelle de la variance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
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

### Weight

**Syntaxe :** obj << Weight( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Weight( _weightcol )
);

```

### Window View

**Syntaxe :** obj = Factor Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)

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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment,
		:Professional Services, :Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

