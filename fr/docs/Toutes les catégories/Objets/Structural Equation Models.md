# Structural Equation Models



## Colonnes

### Freq

**Syntaxe :** obj << Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Freq( _freqcol )
);

```

### Groups

**Syntaxe :** obj << Groups( column )

**Description :** Spécifie la variable de regroupement pour effectuer plusieurs analyses de groupe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
dt << Structural Equation Models( Model Variables( 4 :: 7 ), Groups( :Sex ) );

```

### Mean

**Syntaxe :** obj = Structural Equation Models(...<Mean( column )>...)

**Description :** Spécifie la moyenne de chaque variable manifeste dans une matrice de covariance ou de corrélation.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) <<
Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Model Variables

**Syntaxe :** obj << Model Variables( column(s) )

**Description :** Spécifie les variables qui seront soumises à analyse.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);

```

### Std Dev

**Syntaxe :** obj = Structural Equation Models(...<Std Dev( column )>...)

**Description :** Spécifie les écarts-types de chaque variable manifeste dans une matrice de corrélation.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
mat = dt[0, 2 :: 5];
mat_cor = Correlation( mat );
mat_means = V Mean( mat );
mat_sds = V Std( mat );
As Table( mat_cor || mat_means` || mat_sds` ) << Set Name( "Correlation" );
Data Table( "Correlation" ) <<
Structural Equation Models(
	Data Format( "Matrix" ),
	Model Variables( 1 :: 4 ),
	Mean( :Col5 ),
	Std Dev( :Col6 ),
	Sample Size( 200 )
);

```

### Weight

**Syntaxe :** obj << Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	Weight( _weightcol )
);

```

## Constructeurs associés

### Structural Equation Models

**Syntaxe :** Structural Equation Models( Model Variables ( columns ) )

**Description :** Fournit une structure permettant d&apos;ajuster toute une variété de modèles, notamment les modèles d&apos;analyse factorielle confirmatoire, les modèles en pistes causales avec ou sans variables latentes, les modèles d&apos;erreur de mesure et les modèles de courbe de croissance latente.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);

```

## Messages d'éléments

### Add Manifest Variables

**Syntaxe :** obj << Add Manifest Variables

**Description :** Relance la plate-forme avec la spécification de modèle existante et inclut les variables manifestes nouvellement créées.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Add Manifest Variables();

```

### Bootstrap Inference

**Syntaxe :** obj << Bootstrap Inference

**Description :** Effectue le bootstrap pour une sélection d&apos;estimations spécifiée par l&apos;utilisateur dans les modèles d&apos;ajustement disponibles du rapport SEM.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Bootstrap Inference( Parameter Estimates( 1 ), Indirect Effects( 1 ) );

```

### Compare Selected Models

**Syntaxe :** obj << Compare Selected Models

**Description :** Compare les modèles sélectionnés dans la table de données Comparaison de modèles.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Compare Selected Models( {"Orthogonal 3-Factor CFA", "3-Factor CFA"} );

```

### Copy Diagram Properties

**Syntaxe :** obj << Copy Diagram Properties

**Description :** Copie les propriétés du diagramme de chemin actif dans le presse-papiers. Vous pouvez ensuite coller les propriétés dans un autre diagramme de chemin SEM.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Copy Model Specification

**Syntaxe :** obj << Copy Model Specification

**Description :** Copie les spécifications du modèle d&apos;équation structurelle actif dans le presse-papiers. Vous pouvez ensuite coller les spécifications du modèle dans un autre rapport de plate-forme SEM.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Estimation Method

**Syntaxe :** obj = Structural Equation Models(...Estimation Method( "Maximum de vraisemblance (ML et FIML)"|"Maximum de vraisemblance avec inférence robuste"|"MIIV moindres carrés en deux étapes" )...)

**Description :** Permet d&apos;utiliser différents estimateurs pour l&apos;analyse.

**JMP Version ajoutée :** 19

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Goal_L, :Work_L, :Interact_L, "Leader"}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 ),
		Assess Measurement Model( 1 )
	)
);

```

### Fit

**Syntaxe :** obj << Fit

**Description :** Détermine le modèle d&apos;équation structurelle à ajuster.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

### Fit Independence Model

**Syntaxe :** obj = Structural Equation Models(...Fit Independence Model( state=0|1 )...)

**Description :** Désactive l&apos;ajustement du modèle d&apos;indépendance au lancement de la plate-forme. Actif par défaut.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Independence Model( 0 )
);

```

### Fit Unrestricted Model

**Syntaxe :** obj << Fit Unrestricted Model( state=0|1 )

**Description :** Désactive l&apos;ajustement du modèle non restreint, également appelé saturé, au lancement de la plate-forme.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit Unrestricted Model( 0 )
);

```

### Full Information Multivariate Statistics

**Syntaxe :** obj << Full Information Multivariate Statistics( state=0|1 )

**Description :** Affiche ou masque un rapport d&apos;analyse statistique simple multivariée, où les statistiques sont estimées avec le maximum de vraisemblance à informations complètes afin de tenir compte des données manquantes.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Full Information Multivariate Statistics( 1 );

```

### Generate R Code

**Syntaxe :** obj << Generate R Code

**Description :** Génère le code R pour le modèle actuellement spécifié. Le code est écrit dans une fenêtre d&apos;éditeur de scripts.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Generate R Code();

```

### Hide Model

**Syntaxe :** obj << Hide Model

**Description :** Masque des modèles en fonction des sélections dans la table de comparaison des modèles.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	),
	Hide Model( {3} )
);

```

### Launch Explore Missing Values

**Syntaxe :** obj << Launch Explore Missing Values

**Description :** Lance la plate-forme Examiner les valeurs manquantes.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Missing Values( 1 );

```

### Launch Explore Outliers

**Syntaxe :** obj << Launch Explore Outliers

**Description :** Lance la plate-forme d&apos;exploration des valeurs aberrantes.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Launch Explore Outliers( 1 );

```

### Model Specification

**Syntaxe :** obj << Model Specification

**Description :** Permet de spécifier un modèle d&apos;équation structurelle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

### Paste Diagram Properties

**Syntaxe :** obj << Paste Diagram Properties

**Description :** Colle les propriétés du diagramme de chemin du presse-papiers dans le diagramme de chemin SEM actif.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

### Paste Model Specification

**Syntaxe :** obj << Paste Model Specification

**Description :** Colle les spécifications du modèle du presse-papiers dans les spécifications du modèle actuel.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis no Latent" );
obj << Copy Model Specification();
obj2 = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg )
);
obj2 << Paste Model Specification();

```

### Path Diagram Properties

**Syntaxe :** obj << Path Diagram Properties

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

### Remove Manifest Variables

**Syntaxe :** obj << Remove Manifest Variables

**Description :** Relance la plate-forme avec la spécification de modèle existante mais sans les variables manifestes supprimées.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: CFA 1Factor Conflict UI" );
obj << Remove Manifest Variables();

```

### Reset Independence Model

**Syntaxe :** obj << Reset Independence Model

**Description :** Remplace un modèle d&apos;indépendance spécifié par l&apos;utilisateur par le modèle par défaut.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );
obj << Reset Independence Model();

```

### Robust Inference

**Syntaxe :** obj << Robust Inference( state=0|1 )

**Description :** Calcule les erreurs standard de Sandwich pour l&apos;estimation des paramètres ML ou FIML et les statistiques de l&apos;ajustement robuste. Cette option est utilisée pour les résultats distribués non-normalement où une distribution sous-jacente continue est supposée.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Robust Inference( 1 );

```

### Set as Independence Model

**Syntaxe :** obj << Set as Independence Model( number )

**Description :** Remplace le modèle d&apos;indépendance par défaut par un modèle spécifié par l&apos;utilisateur.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
obj << Set as Independence Model( 2 );

```

### Standardize Latent Variables

**Syntaxe :** obj = Structural Equation Models(...Standardize Latent Variables( state=0|1 )...)

**Description :** Définit la variance des variables latentes à l&apos;unité lors de la spécification.

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Standardize Latent Variables( 1 )
);

```

### Univariate Simple Statistics

**Syntaxe :** obj << Univariate Simple Statistics( state=0|1 )

**Description :** Affiche ou masque un rapport d&apos;analyse statistique simple univariée, où les statistiques sont calculées pour chaque colonne indépendamment des autres colonnes qui pourraient contenir des données manquantes.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L )
);
obj << Univariate Simple Statistics( 1 );

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

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
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

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
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

### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
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
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
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

**Syntaxe :** obj = Structural Equation Models(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Structural Equation Models Fit

### Messages d'éléments

#### All Modification Indices

**Syntaxe :** obj << All Modification Indices( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les estimations des indices de modification du modèle. Ces valeurs peuvent être utilisées pour déterminer les paramètres susceptibles d&apos;être ajoutés au modèle pour améliorer son ajustement.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

#### Assess Measurement Model

**Syntaxe :** obj << Assess Measurement Model( state=0|1 )

**Description :** Affiche ou masque différentes statistiques pour quantifier la fiabilité et la validité des tests et mesures, y compris la fiabilité de l&apos;indicateur, les coefficients oméga et H, ainsi que la matrice de validité de construction.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Measurement Models" );
obj << Assess Measurement Model( 1 );

```

#### Confidence Intervals

**Syntaxe :** obj << Confidence Intervals( state=0|1 )

**Description :** Affiche ou masque les intervalles de confiance à 95 % pour toutes les estimations des coefficients.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Confidence Intervals( 1 );

```

#### Copy Diagram Properties

**Syntaxe :** obj << Copy Diagram Properties

**Description :** Copie les propriétés du diagramme de chemin actif dans le presse-papiers. Vous pouvez ensuite coller les propriétés dans un autre diagramme de chemin SEM.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

#### Copy Model Specification

**Syntaxe :** obj << Copy Model Specification

**Description :** Copie les spécifications du modèle d&apos;équation structurelle actif dans le presse-papiers. Vous pouvez ensuite coller les spécifications du modèle dans un autre rapport de plate-forme SEM.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
obj << (Fit[1] << Copy Model Specification());
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Model Specification();

```

#### Correlation of Estimates

**Syntaxe :** obj << Correlation of Estimates( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient la matrice de corrélation des estimations des paramètres du modèle.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates( 1 );

```

#### Correlation of Estimates Heat Map

**Syntaxe :** obj << Correlation of Estimates Heat Map( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient une carte thermique des corrélations qui se trouvent dans les estimations du modèle.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Correlation of Estimates Heat Map( 1 );

```

#### Covariance of Estimates

**Syntaxe :** obj << Covariance of Estimates( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient la matrice de covariance des estimations des paramètres du modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates( 1 );

```

#### Covariance of Estimates Heat Map

**Syntaxe :** obj << Covariance of Estimates Heat Map( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient une carte thermique des covariances qui se trouvent dans les estimations du modèle.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Covariance of Estimates Heat Map( 1 );

```

#### Covariances

**Syntaxe :** obj << Covariances

**Description :** Ajoute des covariances entre les variables du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

#### Define Time Values

**Syntaxe :** obj << Define Time Values

**Description :** Définit les occasions de mesure pour les observations répétées. Ces valeurs sont utilisées pour spécifier les modèles longitudinaux.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		Define Time Values( {0, 2, 3} ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year3,
			:Multiple Choice Year4}, {1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year3,
			:Multiple Choice Year4}, {0, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) ),
		Predicted Values Plot( 1, 1 )
	)
);

```

#### Equation Details

**Syntaxe :** obj << Equation Details( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les détails de chaque équation du modèle.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Estimation Method( "MIIV Two-Stage Least Squares" ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);
obj << Equation Details( 0 );

```

#### Fit Indices

**Syntaxe :** obj << Fit Indices( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les indices d&apos;ajustement pour le modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Fit Indices( 1 );

```

#### Indirect Effects

**Syntaxe :** obj << Indirect Effects( state=0|1 )

**Description :** Affiche ou masque tous les coefficients indirects disponibles dans le modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Indirect Effects( 1 );

```

#### Loadings

**Syntaxe :** obj << Loadings

**Description :** Ajoute des loadings aux variables latentes du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Means/Intercepts

**Syntaxe :** obj << Means/Intercepts

**Description :** Ajoute des moyennes ou des constantes aux variables du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

#### Model Implied Correlations

**Syntaxe :** obj << Model Implied Correlations( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient la matrice de corrélation rendue implicite par le modèle.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations( 1 );

```

#### Model Implied Correlations Heat Map

**Syntaxe :** obj << Model Implied Correlations Heat Map( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient une carte thermique des corrélations impliquées par le modèle.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Correlations Heat Map( 1 );

```

#### Model Implied Covariances

**Syntaxe :** obj << Model Implied Covariances( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient la matrice de covariance rendue implicite par le modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances( 1 );

```

#### Model Implied Covariances Heat Map

**Syntaxe :** obj << Model Implied Covariances Heat Map( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient une carte thermique des covariances impliquées par le modèle.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Covariances Heat Map( 1 );

```

#### Model Implied Means

**Syntaxe :** obj << Model Implied Means( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les moyennes de chaque variable rendue implicite par le modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Model Implied Means( 1 );

```

#### Model Name

**Syntaxe :** obj << Model Name

**Description :** Définit un nom de modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

#### Modification Indices

**Syntaxe :** obj << Modification Indices( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les estimations des indices de modification du modèle. Ces valeurs peuvent être utilisées pour déterminer les paramètres susceptibles d&apos;être ajoutés au modèle pour améliorer son ajustement.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices( 1 );

```

#### Modification Indices for Covariances

**Syntaxe :** obj << Modification Indices for Covariances( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les estimations des indices de modification du modèle. Ces valeurs peuvent être utilisées pour déterminer les paramètres susceptibles d&apos;être ajoutés au modèle pour améliorer son ajustement.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Covariances( 1 );

```

#### Modification Indices for Loadings

**Syntaxe :** obj << Modification Indices for Loadings( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les estimations des indices de modification du modèle. Ces valeurs peuvent être utilisées pour déterminer les paramètres susceptibles d&apos;être ajoutés au modèle pour améliorer son ajustement.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Loadings( 1 );

```

#### Modification Indices for Means

**Syntaxe :** obj << Modification Indices for Means( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les estimations des indices de modification du modèle. Ces valeurs peuvent être utilisées pour déterminer les paramètres susceptibles d&apos;être ajoutés au modèle pour améliorer son ajustement.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Means( 1 );

```

#### Modification Indices for Regressions

**Syntaxe :** obj << Modification Indices for Regressions( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les estimations des indices de modification du modèle. Ces valeurs peuvent être utilisées pour déterminer les paramètres susceptibles d&apos;être ajoutés au modèle pour améliorer son ajustement.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Modification Indices for Regressions( 1 );

```

#### Modification Indices for Variances

**Syntaxe :** obj << Modification Indices for Variances( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les estimations des indices de modification du modèle. Ces valeurs peuvent être utilisées pour déterminer les paramètres susceptibles d&apos;être ajoutés au modèle pour améliorer son ajustement.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {.25}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {.25}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {.25}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {.25}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);
obj << Modification Indices for Variances( 1 );

```

#### New Latent

**Syntaxe :** obj << New Latent

**Description :** Ajoute une nouvelle variable latente au modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Normalized Residuals

**Syntaxe :** obj << Normalized Residuals( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient une matrice des résidus normalisés du modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals( 1 );

```

#### Normalized Residuals Heat Map

**Syntaxe :** obj << Normalized Residuals Heat Map( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient une carte thermique des résidus normalisés du modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Normalized Residuals Heat Map( 1 );

```

#### Parameter Estimates

**Syntaxe :** obj << Parameter Estimates( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les estimations non standardisées des paramètres du modèle. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Parameter Estimates( 0 );

```

#### Paste Diagram Properties

**Syntaxe :** obj << Paste Diagram Properties

**Description :** Colle les propriétés du diagramme de chemin du presse-papiers dans le diagramme de chemin SEM actif.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
dt2 = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt2 << Run Script( "SEM: Compare Growth Trajectories" );
obj << Copy Diagram Properties();
obj2 = dt << Structural Equation Models( Model Variables( 2 :: 12 ) );
obj2 << Paste Diagram Properties();

```

#### Path Diagram Properties

**Syntaxe :** obj << Path Diagram Properties

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,
		:Multiple Choice Year4
	),
	Fit(
		Model Name( "Linear Growth Model" ),
		New Latent( "Intercept", "Slope" ),
		Means( {"Constant", {"Intercept", "Slope"}} ),
		Loadings(
			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},
			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2,
			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 2, 3}}
		),
		Variances(
			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},
			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},
			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},
			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},
			{"Intercept", {"Intercept"}},
			{"Slope", {"Slope"}}
		),
		Covariances( {"Intercept", {"Slope"}} ),
		Path Diagram Properties( Show Means( 1 ) )
	)
);

```

#### Predicted Values Plot

**Syntaxe :** obj << Predicted Values Plot( state=0|1 )

**Description :** Affiche ou masque un graphique des valeurs prévues pour les variables endogènes dans le modèle.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Run Script( "SEM: LGC with LDF" );
obj << Predicted Values Plot( 1, 1 );

```

#### Prediction Profiler

**Syntaxe :** obj << Prediction Profiler

**Description :** Affiche ou masque un profileur de prévision pour les sorties sélectionnées avec comme données les régresseurs sélectionnés et le modèle spécifié.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value(
		Leadership( 0, Lock( 0 ), Show( 1 ) ),
		Conflict( 0, Lock( 0 ), Show( 1 ) )
	),
	Y Terms( Conflict, Satisfaction )
);

```

#### R Square for Endogenous Variables

**Syntaxe :** obj << R Square for Endogenous Variables( state=0|1 )

**Description :** Affiche ou masque un rapport avec les valeurs R carré de toutes les variables endogènes du modèle.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << R Square for Endogenous Variables( 1 );

```

#### RAM Matrices

**Syntaxe :** obj << RAM Matrices( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les matrices du modèle utilisées dans la notation du modèle d&apos;action réticulaire (MAR).

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << RAM Matrices( 1 );

```

#### Recall in Model Specification

**Syntaxe :** obj << Recall in Model Specification

**Description :** Définit le modèle dans le rapport Construction du modèle de sorte qu&apos;il corresponde au modèle spécifié.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Recall in Model Specification( 1 );

```

#### Regressions

**Syntaxe :** obj << Regressions

**Description :** Ajoute des chemins de régression au modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

#### Remove Fit

**Syntaxe :** obj << Remove Fit

**Description :** Supprime le rapport du modèle spécifié de la fenêtre de rapport.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Remove Fit( 1 );

```

#### Residuals

**Syntaxe :** obj << Residuals( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient une matrice des résidus du modèle. Cette matrice représente la différence entre la matrice de covariance implicite du modèle et la matrice de covariance de l&apos;échantillon.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Residuals( 1 );

```

#### Save Bartlett Factor Scores

**Syntaxe :** obj << Save Bartlett Factor Scores

**Description :** Enregistre, dans les colonnes de la table de données, une colonne avec le score des facteurs de chaque variable. Les scores des facteurs sont calculés dans une colonne masquée qui est elle aussi ajoutée à la table de données. La méthode de Bartlett sert à estimer ces scores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Bartlett Factor Scores();

```

#### Save Factor Scores

**Syntaxe :** obj << Save Factor Scores

**Description :** Enregistre, dans les colonnes de la table de données, une colonne avec le score des facteurs de chaque variable. Les scores des facteurs sont calculés dans une colonne masquée qui est elle aussi ajoutée à la table de données. La méthode par régression sert à estimer ces scores.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Factor Scores();

```

#### Save Observational Residuals

**Syntaxe :** obj << Save Observational Residuals

**Description :** Enregistre les colonnes dans la table de données contenant les valeurs du résidu des résultats observés dans le modèle.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Observational Residuals();

```

#### Save Prediction Formulas

**Syntaxe :** obj << Save Prediction Formulas

**Description :** Enregistre les colonnes dans la table de données contenant les formules pour les valeurs prévues des résultats observés dans le modèle.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Save Prediction Formulas();

```

#### Show Path Diagram

**Syntaxe :** obj << Show Path Diagram( state=0|1 )

**Description :** Affiche ou masque le diagramme de chemin du modèle d&apos;équation structurelle. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Show Path Diagram( 0 );

```

#### Specific Indirect Effects

**Syntaxe :** obj << Specific Indirect Effects

**Description :** Vous permet d&apos;indiquer les effets indirects spécifiques à estimer à partir du modèle.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Specific Indirect Effects( {"Ind60", "Dem65"} );

```

#### Standardized Parameter Estimates

**Syntaxe :** obj << Standardized Parameter Estimates( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les estimations standardisées des paramètres du modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Standardized Parameter Estimates( 1 );

```

#### Summary of Fit

**Syntaxe :** obj << Summary of Fit( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les détails de l&apos;ajustement du modèle. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Summary of Fit( 0 );

```

#### Total Effects

**Syntaxe :** obj << Total Effects( state=0|1 )

**Description :** Affiche ou masque tous les coefficients totaux disponibles dans le modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Total Effects( 1 );

```

#### Variances

**Syntaxe :** obj << Variances

**Description :** Ajoute des variances aux variables du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

## Structural Equation Models Path Diagram

### Constructeurs associés

#### SEM Node Graph Display

**Syntaxe :** SEM Node Graph Display

### Messages d'éléments

#### Constant Border Color

**Syntaxe :** obj << Path Diagram Properties( Constant Border Color ( color ) );

**Description :** Modifie la couleur de bordure des variables constantes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Border Color( "Blue" ) );

```

#### Constant Fill Color

**Syntaxe :** obj << Path Diagram Properties( Constant Fill Color ( color ) );

**Description :** Modifie la couleur de remplissage des variables constantes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Fill Color( "Blue" ) );

```

#### Constant Font

**Syntaxe :** obj << Path Diagram Properties( Constant Font ( font ) );

**Description :** Modifie la police des variables manifestes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Font( "Sitka Small" ) );

```

#### Constant Height

**Syntaxe :** obj << Path Diagram Properties( Constant Height ( number ) );

**Description :** Modifie la hauteur (pixels) des variables constantes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Height( 20 ) );

```

#### Constant Shape

**Syntaxe :** obj << Constant Shape

**Description :** Modifie l&apos;apparence par défaut des constantes dans le diagramme de chemin, qui sert à représenter les moyennes et les constantes des variables.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Show Means( 1 ),
	Constant Shape(
		{Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )}
	)
);

```

#### Constant Size Option

**Syntaxe :** obj << Path Diagram Properties( Constant Size Option ( <Default | Scale To Text | Custom> ) );

**Description :** Change le mode de taille pour la constante dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Constant Size Option( "Scale To Text" ) );

```

#### Constant Text Color

**Syntaxe :** obj << Path Diagram Properties( Constant Text Color ( color ) );

**Description :** Modifie la couleur du texte des variables constantes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Text Color( "Blue" ) );

```

#### Constant Width

**Syntaxe :** obj << Path Diagram Properties( Constant Width ( number ) );

**Description :** Modifie la largeur (pixels) des variables constantes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ), Constant Width( 71 ) );

```

#### Copy Diagram

**Syntaxe :** obj << Copy Diagram

**Description :** Enregistre une image de la fenêtre du diagramme dans le presse-papiers.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
rpt[Node Graph Box( 1 )] << Copy Diagram;

```

#### Copy Diagram Properties

**Syntaxe :** obj << Copy Diagram Properties

**Description :** Enregistre une copie des paramètres de script spécifiques au diagramme dans le presse-papiers. Ces paramètres peuvent alors être appliqués à d&apos;autres diagrammes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

#### Dashed Lines for Nonsignificant p-values

**Syntaxe :** obj << Path Diagram Properties ("Dashed Lines for Nonsignificant p - values"n( 0 | 1 ) )

**Description :** Affiche ou masque des lignes en pointillés pour les chemins dotés de p-valeurs non significatives. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( "Dashed Lines for Nonsignificant p - values"n( 0 ) );

```

#### Diagram Size

**Syntaxe :** obj << Path Diagram Properties( Diagram Size ( {x, y} ) )

**Description :** Modifie la taille du diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60",
		301, 94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515,
		184}, {"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184},
		{"Prod60", 16, 184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60",
		4.712}, {"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712},
		{"Legis60", 4.712}, {"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

#### Enable Grid

**Syntaxe :** obj << Path Diagram Properties ( Enable Grid( 0|1) )

**Description :** Active une grille visuelle dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Enable Grid( 1 ) );

```

#### Fill Nodes With R Squared

**Syntaxe :** obj << Path Diagram Properties ( Fill Nodes With R Squared ( 0|1) )

**Description :** Indique que les nœuds dans le modèle ajusté seront partiellement remplis en fonction de leur coefficient de détermination estimé. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Fill Nodes With R Squared( 1 ) );

```

#### Latent Border Color

**Syntaxe :** obj << Path Diagram Properties( Latent Border Color ( color ) );

**Description :** Modifie la couleur de bordure des variables latentes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Border Color( "Blue" ) );

```

#### Latent Fill Color

**Syntaxe :** obj << Path Diagram Properties( Latent Fill Color ( color ) );

**Description :** Modifie la couleur de remplissage des variables latentes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Fill Color( "Blue" ) );

```

#### Latent Font

**Syntaxe :** obj << Path Diagram Properties( Manifest Font ( font ) );

**Description :** Modifie la police des variables latentes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Font( "Sitka Small" ) );

```

#### Latent Height

**Syntaxe :** obj << Path Diagram Properties( Latent Height ( number ) );

**Description :** Modifie la hauteur (pixels) des variables latentes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Height( 30 ) );

```

#### Latent Shape

**Syntaxe :** obj << Latent Shape

**Description :** Modifie l&apos;apparence par défaut des variables latentes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Latent Shape(
		{Fill Color( "Medium Light BlueCyan" ), Width( 80 ), Height( 40 )}
	)
);

```

#### Latent Size Option

**Syntaxe :** obj << Path Diagram Properties( Latent Size Option ( <Default | Scale To Text | Custom> ) );

**Description :** Change le mode de taille des nœuds des variables latentes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Size Option( "Scale To Text" ) );

```

#### Latent Text Color

**Syntaxe :** obj << Path Diagram Properties( Latent Text Color ( color ) );

**Description :** Modifie la couleur du texte des variables latentes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Text Color( "Blue" ) );

```

#### Latent Width

**Syntaxe :** obj << Path Diagram Properties( Latent Width ( number ) );

**Description :** Modifie la largeur (pixels) des variables latentes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Latent Width( 71 ) );

```

#### Layout

**Syntaxe :** obj << Path Diagram Properties ( Layout("Left To Right"|"Top To Bottom") )

**Description :** Définit la mise en page initiale du diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Layout( "Top To Bottom" ) );

```

#### Lock Diagram

**Syntaxe :** obj << Path Diagram Properties ( Lock Diagram( 0|1) )

**Description :** Verrouille le diagramme de chemin de manière à ce que les modifications apportées au modèle ne changent pas la mise en page.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Lock Diagram( 1 ) );

```

#### Manifest Border Color

**Syntaxe :** obj << Path Diagram Properties( Manifest Border Color ( color ) );

**Description :** Modifie la couleur de bordure des variables manifestes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Border Color( "Blue" ) );

```

#### Manifest Fill Color

**Syntaxe :** obj << Path Diagram Properties( Manifest Fill Color ( color ) );

**Description :** Modifie la couleur de remplissage des variables manifestes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Fill Color( "Blue" ) );

```

#### Manifest Font

**Syntaxe :** obj << Path Diagram Properties( Manifest Font ( font ) );

**Description :** Modifie la police des variables manifestes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Font( "Sitka Small" ) );

```

#### Manifest Height

**Syntaxe :** obj << Path Diagram Properties( Manifest Height ( number ) );

**Description :** Modifie la hauteur (pixels) des variables manifestes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Height( 30 ) );

```

#### Manifest Shape

**Syntaxe :** obj << Manifest Shape

**Description :** Modifie l&apos;apparence par défaut des variables manifestes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Shape( {Fill Color( "Green" )} ) );

```

#### Manifest Size Option

**Syntaxe :** obj << Path Diagram Properties( Manifest Size Option ( <Default | Scale To Text | Custom> ) );

**Description :** Change le mode de taille des nœuds des variables manifestes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Size Option( "Scale To Text" ) );

```

#### Manifest Text Color

**Syntaxe :** obj << Path Diagram Properties( Manifest Text Color ( color ) );

**Description :** Modifie la couleur du texte des variables manifestes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Text Color( "Blue" ) );

```

#### Manifest Width

**Syntaxe :** obj << Path Diagram Properties( Manifest Width ( number ) );

**Description :** Modifie la largeur (pixels) des variables manifestes dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Manifest Width( 67 ) );

```

#### Paste Diagram Properties

**Syntaxe :** obj << Paste Diagram Properties

**Description :** Colle une copie des paramètres de script spécifiques au diagramme qui se trouve dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Latent Fill Color( "Blue" );
diagram << Paths Color( "Green" );
diagram << Copy Diagram Properties;
obj = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" ) <<
Run Script( "SEM: Path Analysis w/ Latent" );
rpt = obj << Report();
other_diagram = rpt[Node Graph Box( 1 )];
other_diagram << Paste Diagram Properties;

```

#### Path Styles

**Syntaxe :** obj << Path Styles

**Description :** Modifie l&apos;apparence par défaut des chemins dans le diagramme de chemin

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Styles( {Color( "Green" )} ) );

```

#### Path Thickness

**Syntaxe :** obj << Path Diagram Properties (Path Thickness( "Fixed"|"Map to Stdz. Estimates" ) )

**Description :** Définit si l&apos;épaisseur des chemins dans le diagramme est une valeur fixe ou liée à la force de son estimation standardisée. "Fixed" par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Thickness( "Map to Stdz. Estimates" ) );

```

#### Path Transparency

**Syntaxe :** obj << Path Diagram Properties (Path Transparency( "Fixed"|"Map to Stdz. Estimates" ) )

**Description :** Définit si la transparence des chemins dans le diagramme est une valeur fixe ou liée à la force de son estimation standardisée.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Path Transparency( "Fixed" ) );

```

#### Paths Alpha Level

**Syntaxe :** obj << Path Diagram Properties( Paths Alpha Level ( number) );

**Description :** Modifie le seuil de p-valeur minimum pour l&apos;utilisation de lignes en pointillés dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Alpha Level( 0.01 ) );

```

#### Paths Color

**Syntaxe :** obj << Path Diagram Properties( Paths Color ( color) );

**Description :** Modifie la couleur des chemins dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Color( "Green" ) );

```

#### Paths Font

**Syntaxe :** obj << Path Diagram Properties( Paths Font ( font ) );

**Description :** Modifie la police utilisée pour étiqueter les chemins dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Font( "Segoe Script", 12, "Bold" ) );

```

#### Paths Opacity

**Syntaxe :** obj << Path Diagram Properties( Paths Opacity ( number) );

**Description :** Modifie l&apos;opacité des chemins dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Opacity( 0.5 ), Path Transparency( "Fixed" ) );

```

#### Paths Thickness

**Syntaxe :** obj << Path Diagram Properties( Paths Thickness ( number) );

**Description :** Modifie l&apos;épaisseur des chemins dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Paths Thickness( 2.7103 ) );

```

#### Place Nodes

**Syntaxe :** obj << Path Diagram Properties( Place Nodes ( { {name1, x1, y1}, {name2, x2, y2}, ...} ) )

**Description :** Contrôle le placement des nœuds individuels dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60",
		301, 94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515,
		184}, {"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184},
		{"Prod60", 16, 184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60",
		4.712}, {"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712},
		{"Legis60", 4.712}, {"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

#### R2 Fill Color

**Syntaxe :** obj << Path Diagram Properties ( R2 Fill Color ( Color ) )

**Description :** Spécifie la couleur de remplissage partiel représentant la valeur du R carré estimé d&apos;une variable.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( R2 Fill Color( Cyan ) );

```

#### Rotate Latent Groups

**Syntaxe :** obj << Rotate Latent Groups

**Description :** Change l&apos;orientation de tous les indicateurs des variables latentes dans le diagramme. Si des groupes de variables latentes sont sélectionnés, cette option change uniquement l&apos;orientation des groupes de variables latentes sélectionnés.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
rpt = obj << Report();
diagram = rpt[Node Graph Box( 1 )];
diagram << Rotate Latent Groups;

```

#### Rotate Loops

**Syntaxe :** obj << Path Diagram Properties( Rotate Loops ( { {name1, angle1}, {name2, angle2}, ...} ) )

**Description :** Contrôle la rotation des boucles de variance dans le diagramme de chemin. Les angles sont mesurés en radians dans le sens des aiguilles d&apos;une montre.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties(
	Place Nodes(
		{{"Energy60", 88, 184}, {"Fair60", 374, 94}, {"Fair65", 660, 184}, {"FrOpp60",
		301, 94}, {"FrOpp65", 587, 184}, {"FrPress60", 229, 94}, {"FrPress65", 515,
		184}, {"Labor60", 161, 184}, {"Legis60", 447, 94}, {"Legis65", 732, 184},
		{"Prod60", 16, 184}}
	),
	Rotate Loops(
		{{"Dem60", 1.571}, {"Dem65", 1.571}, {"Energy60", 4.712}, {"Fair60", 4.712},
		{"Fair65", 4.712}, {"FrOpp60", 4.712}, {"FrOpp65", 4.712}, {"FrPress60",
		4.712}, {"FrPress65", 4.712}, {"Ind60", 1.571}, {"Labor60", 4.712},
		{"Legis60", 4.712}, {"Legis65", 4.712}, {"Prod60", 4.712}}
	)
);

```

#### Show Constant Mean Square

**Syntaxe :** obj << Show Constant Mean Square( state=0|1 )

**Description :** Affiche ou masque l&apos;arête associée à la constante dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Constant Mean Square( 1 ) );

```

#### Show Covariances

**Syntaxe :** obj << Show Covariances( state=0|1 )

**Description :** Affiche ou masque les flèches bidirectionnelles qui représentent les covariances dans le diagramme de chemin. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Covariances( 0 ) );

```

#### Show Equality Constraints

**Syntaxe :** obj << Show Equality Constraints( state=0|1 )

**Description :** Affiche ou masque les contraintes d&apos;égalité (étiquettes ou valeurs fixes) sur les arêtes du diagramme de chemin. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Equality Constraints( 0 ) );

```

#### Show Estimates

**Syntaxe :** obj << Show Estimates( "Non standardisé"|"Standardisé"|"Aucun(e)" )

**Description :** Affiche ou masque les estimations non standardisées des paramètres dans le diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Estimates( "None" ) );

```

#### Show Loadings

**Syntaxe :** obj << Show Loadings( state=0|1 )

**Description :** Affiche ou masque les indicateurs de variable latente dans le diagramme de chemin. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Loadings( 0 ) );

```

#### Show Means/Intercepts

**Syntaxe :** obj << Show Means/Intercepts( state=0|1 )

**Description :** Affiche ou masque la moyenne dans la plate-forme SEM.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Means( 1 ) );

```

#### Show R Squared Values

**Syntaxe :** obj << Show R Squared Values( state=0|1 )

**Description :** Affiche ou masque les valeurs du R carré dans les nœuds du diagramme de chemin.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show R Squared Values( 1 ) );

```

#### Show Regressions

**Syntaxe :** obj << Show Regressions( state=0|1 )

**Description :** Affiche ou masque les régressions dans la plate-forme SEM. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Regressions( 0 ) );

```

#### Show Variances

**Syntaxe :** obj << Show Variances( state=0|1 )

**Description :** Affiche ou masque les flèches bidirectionnelles qui représentent les variances dans le diagramme de chemin. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Political Democracy.jmp" );
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Path Diagram Properties( Show Variances( 0 ) );

```

## Structural Equation Models Specification

### Messages d'éléments

#### Covariances

**Syntaxe :** obj << Covariances

**Description :** Ajoute des covariances entre les variables du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

#### Define Time Values

**Syntaxe :** obj << Define Time Values

**Description :** Définit les occasions de mesure pour les observations répétées. Ces valeurs sont utilisées pour spécifier les modèles longitudinaux.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );
obj = dt << Structural Equation Models(
	Model Variables(
		:Multiple Choice Year1, :Multiple Choice Year3, :Multiple Choice Year4
	),
	Model Specification(
		Model Name( "Longitudinal Model" ),
		Define Time Values( {0, 2, 3} )
	)
);

```

#### Loadings

**Syntaxe :** obj << Loadings

**Description :** Ajoute des loadings aux variables latentes du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Max Iterations

**Syntaxe :** Structural Equation Models(..., Max Iterations( 3 )

**Description :** Définit le nombre maximum d&apos;itérations pour la convergence. "1000" par défaut.

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Covariances( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		),
		Max Iterations( 3 )
	)
);

```

#### Means/Intercepts

**Syntaxe :** obj << Means/Intercepts

**Description :** Ajoute des moyennes ou des constantes aux variables du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

#### Model Name

**Syntaxe :** obj << Model Name

**Description :** Spécifie un nom pour le modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

#### Model Notes

**Syntaxe :** obj << Model Notes

**Description :** Spécifie des notes pour le modèle.

**JMP Version ajoutée :** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Model Name( "Means and Variances Model" ),
		Model Notes(
			"This is a simple model with only means and variances for each variable"
		),
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

#### New Latent

**Syntaxe :** obj << New Latent

**Description :** Ajoute une nouvelle variable latente au modèle.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		)
	)
);

```

#### Regressions

**Syntaxe :** obj << Regressions

**Description :** Ajoute des chemins de régression au modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Leadership_Avg, :Conflict_Avg ),
	Model Specification(
		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg}} ),
		Regressions( {:Leadership_Avg, {:Conflict_Avg}} ),
		Variances(
			{:Leadership_Avg, {:Leadership_Avg}},
			{:Conflict_Avg, {:Conflict_Avg}}
		)
	)
);

```

#### Variances

**Syntaxe :** obj << Variances

**Description :** Ajoute des variances aux variables du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Model Specification(
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}}
		)
	)
);

```

