# Fit Group



## Constructeurs associés

### Fit Group

**Syntaxe :** Fit Group( model1, model2, ... );

Fit Group( model1; model2; ... )

**Description :** Regroupe dans une même fenêtre de sortie les ajustements par moindres carrés, par modèle non linéaire, par modèle neuronal, par modèle de Gauss et modèle mixte séparément à l’aide d’un profileur partagé.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);

```

## Messages d'éléments

### Arrange in Rows

**Syntaxe :** obj << Arrange in Rows( number )

**Description :** Réorganise les rapports pour les analyses de la plate-forme avec un nombre de lignes spécifié.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
Wait( 1 );
obj << Arrange in Rows( 2 );

```

### Contour Profiler

**Syntaxe :** obj << Contour Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur d&apos;isoréponses pour toutes les réponses. Vous pouvez explorer les effets des termes du modèle simultanément sur toutes les réponses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Contour Profiler( 1 );

```

### Order by Goodness of Fit

**Syntaxe :** obj << Order by Goodness of Fit

**Description :** Trie les rapports par significativité d&apos;ajustement, où la significativité est mesurée par la statistique du R carré pour chaque modèle. Cette option est applicable uniquement pour les plates-formes qui font ressortir la statistique du R carré au niveau de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Bivariate( Y( :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Fit Line( 1 ) ),
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	)
);
Wait( 1 );
obj << Order by Goodness of Fit;

```

### Profiler

**Syntaxe :** obj << Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur de prédiction pour toutes les réponses. Vous pouvez afficher les effets des termes du modèle simultanément sur toutes les réponses. Vous pouvez également effectuer des optimisations multiples sur les réponses.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Profiler( 1 );

```

### Surface Profiler

**Syntaxe :** obj << Surface Profiler( state=0|1 )

**Description :** Affiche ou masque des rapports de profileur de surface distincts pour chaque réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Surface Profiler( 1 );

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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
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

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntaxe :** obj << Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Relaunch Analysis;

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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA,
			:SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	),
	Gaussian Process(
		Y( :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Set Correlation Function( "Cubic" )
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

