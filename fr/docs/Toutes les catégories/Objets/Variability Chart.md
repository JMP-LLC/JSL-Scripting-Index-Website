# Variability Chart



## Colonnes

### By

**Syntaxe :** obj = Variability Chart(...<By( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Produire plusieurs rapports, un pour chaque niveau de la ou des variables.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :new Y ),
	X( :Operator, :part ),
	Model( "Crossed" ),
	By( :Instrument )
);

```

### Freq

**Syntaxe :** obj = Variability Chart(...<Freq( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Freq( _freqcol )
);

```

### Grouping

**Syntaxe :** obj = Variability Chart(...<Grouping( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les colonnes catégorielles comme variables de regroupement. La dernière colonne dans la liste doit être la pièce ou l&apos;unité mesurée.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Response

**Syntaxe :** obj = Variability Chart(...Response( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les colonnes continues des mesures.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

### Standard

**Syntaxe :** obj = Variability Chart(...<Standard( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne standard ou de référence qui contient les valeurs connues pour la partie mesurée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Variability Analysis( :Response, Std Dev Chart( 0 ), Linearity Study( 1 ) )
);

```

### X

**Syntaxe :** obj = Variability Chart(...<X( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les colonnes catégorielles comme variables de regroupement. La dernière colonne dans la liste doit être la pièce ou l&apos;unité mesurée.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Y

**Syntaxe :** obj = Variability Chart(...Y( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la ou les colonnes continues des mesures.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

## Constructeurs associés

### Variability Chart

**Syntaxe :** Variability Chart( Y( column ), X( columns ) )

**Description :** Analyse les mesures continues pour déterminer la performance de votre système de mesure. Vous pouvez également effectuer une étude du système de mesure pour obtenir les sources de variation de vos données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

## Messages d'éléments

### Analysis Type

**Syntaxe :** obj = Variability Chart(...Analysis Type( "Choisir la meilleure analyse (carrés moyens prévus, maximum de vraisemblance restreint ou bayésienne)"|"Choisir la meilleure analyse (carrés moyens prévus ou maximum de vraisemblance restreint)"|"Utiliser l&apos;analyse du maximum de vraisemblance restreint"|"Utiliser l&apos;analyse bayésienne" )...)

<b>Élément lanceur : Oui</b>

**Description :** Identifie la méthode utilisée pour le calcul des composants de la variance.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Conv Limit

**Syntaxe :** obj = Variability Chart(...Conv Limit( number )...)

<b>Élément lanceur : Oui</b>

**Description :** Définit la limite de convergence utilisée pour le calcul des composants de la variance. Cette option affecte uniquement les analyses du maximum de vraisemblance restreint (REML).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Conv Limit( 0.0000001 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Edit MSA Metadata

**Syntaxe :** obj << Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), <Historical Mean( number ), Historical Process Sigma( number )> ) )

**Description :** Ouvre une fenêtre qui vous permet d&apos;ajouter ou de modifier la plage de tolérance, les limites de tolérance, la moyenne historique et le sigma du processus historique pour toutes les analyses. Les rapports sont automatiquement mis à jour.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << Edit MSA Metadata(
	:Measurement( Lower Tolerance( .1 ), Upper Tolerance( 1.4 ) )
);

```

### Max Iter

**Syntaxe :** obj = Variability Chart(...Max Iter( number )...)

<b>Élément lanceur : Oui</b>

**Description :** Définit le nombre maximum d&apos;itérations utilisées pour le calcul des composants de la variance. Cette option affecte uniquement les analyses du maximum de vraisemblance restreint (REML).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Max Iter( 50 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Function Evals

**Syntaxe :** obj = Variability Chart(...Number Function Evals( number )...)

<b>Élément lanceur : Oui</b>

**Description :** Définit le nombre maximum d&apos;évaluations de fonction utilisées pour le calcul des composants de la variance. Cette option affecte uniquement les analyses bayésiennes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Function Evals( 10000 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Integration Abscissas

**Syntaxe :** obj = Variability Chart(...Number Integration Abscissas( number )...)

<b>Élément lanceur : Oui</b>

**Description :** Définit le nombre d&apos;abscisses d&apos;intégration utilisées pour le calcul des composants de la variance. Cette option affecte uniquement les analyses bayésiennes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Integration Abscissas( 90 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Save All Metadata to Table

**Syntaxe :** obj << Save All Metadata to Table( < MSA( state=0|1 ) >, < Measurement Sigma( state=0|1 ) >, < Tolerance as Specs( state=0|1 ) > )

**Description :** Crée une nouvelle table de données qui contient les métadonnées MSA et le Sigma de mesure pour chaque colonne des données de mesure. La table utilise un format en lignes et contient une ligne pour chaque variable de mesure. Une option permet d&apos;enregistrer les valeurs de tolérance inférieure et supérieure en tant que colonnes supplémentaires dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement(
			Lower Tolerance( 0.2 ),
			Upper Tolerance( 1.3 ),
			Historical Process Sigma( 0.2 )
		)
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save All Metadata to Table;

```

### Save Metadata as Column Properties

**Syntaxe :** obj << Save Metadata as Column Properties( < MSA( 0|1 ) >, < Measurement Sigma( 0|1 ) >, < Tolerance as Specs( 0|1 ) > )

**Description :** Pour chaque colonne des données de mesure, enregistre les métadonnées MSA et le Sigma de mesure comme propriétés de colonne au sein de la colonne de la table de données d&apos;origine. Une option permet d&apos;enregistrer les valeurs de la tolérance inférieure et supérieure comme propriétés de colonne Limites de spécification.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement(
			Lower Tolerance( 0.2 ),
			Upper Tolerance( 1.3 ),
			Historical Process Sigma( 0.2 )
		)
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save Metadata as Column Properties;

```

### Set Alpha Level

**Syntaxe :** obj = Variability Chart(...Set Alpha Level( number )...)

<b>Élément lanceur : Oui</b>

**Description :** Change le niveau alpha utilisé pour les intervalles de confiance et les losanges des moyennes. Cette option correspond à l&apos;option Spécifier le niveau alpha dans la fenêtre de lancement Graphe de variabilité.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Set Alpha Level( .1 )
);
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

### Set Random Seed

**Syntaxe :** obj = Variability Chart(...Set Random Seed( number )...)

<b>Élément lanceur : Oui</b>

**Description :** Définit une valeur spécifique pour la graine aléatoire en assurant ainsi que toutes les exécutions successives utilisant la même graine aléatoire sont reproductibles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Set Random Seed( 1234 )
);
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

### Sigma Multiplier

**Syntaxe :** obj = Variability Chart(...Sigma Multiplier( number=6 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une valeur constante qui est multipliée par sigma. "6" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Sigma Multiplier( 5.15 ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);

```

### Variability Analysis

**Syntaxe :** obj << Variability Analysis

**Description :** Permet de spécifier les options du rapport Analyse de variabilité pour chaque réponse de mesure.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Variability Analysis(
		"Measurement",
		Variance Components( 1 ),
		"Gauge R&R Report"n( 1 )
	)
);

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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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

**Syntaxe :** obj = Variability Chart(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Variability Analysis > Bias Report

### Messages d'éléments

#### Confidence Intervals

**Syntaxe :** obj << (Variability Analysis[number] << Bias Report(Confidence Intervals( state=0|1 )))

**Description :** Affiche ou masque les intervalles de confiance sur le graphique dans la section Rapport de biais de mesure par erreur standard. Cette option est uniquement disponible lorsqu&apos;une variable standard est spécifiée dans la fenêtre de lancement.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( Confidence Intervals( 1 ) ));

```

#### Measurement Error Graphs

**Syntaxe :** obj << (Variability Analysis[number] << Bias Report(Measurement Error Graphs( state=0|1 )))

**Description :** Affiche ou masque les graphiques d&apos;erreur de mesure représentant le biais par pièce. Cette option est uniquement disponible lorsqu&apos;une variable standard est spécifiée dans la fenêtre de lancement.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( Measurement Error Graphs( 1 ) ));

```

## Variability Analysis > Heterogeneity of Variance Test

### Messages d'éléments

#### Point Options

**Syntaxe :** obj << (Variability Analysis[number] << Heterogeneity of Variance Tests(1, Point Options("Show Needles" | "Show Connected Points" | "Show Only Points")))

**Description :** Permet de spécifier le style de dessin des points dans le graphique. Vous pouvez choisir bâtons verticaux, points connectés ou points seuls. Par défaut, le graphique est dessiné avec des bâtons qui connectent les points à la ligne horizontale dessinée à la moyenne.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Point Options( Show Only Points ) ));

```

#### Set Alpha Level

**Syntaxe :** obj << (Variability Analysis[number] << Heterogeneity of Variance Tests(1, Set Alpha Level( number )))

**Description :** Change le niveau alpha utilisé pour calculer les limites de décision.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Set Alpha Level( 0.1 ) ));

```

#### Show Center Line

**Syntaxe :** obj << (Variability Analysis[number] << Heterogeneity of Variance Tests(1, Show Center Line(state=0|1)))

**Description :** Affiche ou masque la ligne centrale (moyenne générale ADM). Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Center Line( 0 ) ));

```

#### Show Decision Limit Shading

**Syntaxe :** obj << (Variability Analysis[number] << Heterogeneity of Variance Tests(1, Show Decision Limit Shading(state=0|1)))

**Description :** Affiche ou masque l&apos;ombrage des limites de décision sur le graphique de l&apos;analyse des moyennes pour les variances de Levenne (ANOMV-Levene ADM). Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Decision Limit Shading( 0 ) ));

```

#### Show Decision Limits

**Syntaxe :** obj << (Variability Analysis[number] << Heterogeneity of Variance Tests(1, Show Decision Limits(state=0|1)))

**Description :** Affiche ou masque les lignes représentant les limites de décision sur le graphique de l&apos;analyse des moyennes pour les variances de Levenne (ANOMV-Levene ADM). Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Decision Limits( 0 ) ));

```

#### Show Summary Report

**Syntaxe :** obj << (Variability Analysis[number] << Heterogeneity of Variance Tests(1, Show Summary Report(state=0|1)))

**Description :** Affiche ou masque un rapport qui contient les écart-types du groupe et les limites de décision correspondantes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Summary Report( 1 ) ));

```

## Variability Analysis > Linearity Study

### Messages d'éléments

#### Linearity by Groups

**Syntaxe :** obj << (Variability Analysis[number] << Linearity Study(1, Linearity By Groups( state=0|1 )))

**Description :** Affiche ou masque les graphiques de linéarité individuels pour chaque facteur du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Linearity By Groups( 1 ) ));

```

#### Set Alpha Level

**Syntaxe :** obj << (Variability Analysis[number] << Linearity Study(1, Set Alpha Level( number )))

**Description :** Spécifie le niveau alpha utilisé pour calculer les limites de confiance du biais. "0.05" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Set Alpha Level( .01 ) ));

```

#### Show Avg Bias Points

**Syntaxe :** obj << (Variability Analysis[number] << Linearity Study(1, Show Avg Bias Points( state=0|1 )))

**Description :** Affiche ou masque la moyenne des points de biais sur le graphique. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));

```

#### Show Bias Points

**Syntaxe :** obj << (Variability Analysis[number] << Linearity Study(1, Show Bias Points( state=0|1 )))

**Description :** Affiche ou masque les points de biais sur le graphique. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));

```

#### Show Fit Confidence Curves

**Syntaxe :** obj << (Variability Analysis[number] << Linearity Study(1, Show Fit Confidence Curves( state=0|1 )))

**Description :** Affiche ou masque la ligne des courbes de confiance de l&apos;ajustement sur le graphique. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study(
	1,
	Show Fit Confidence Curves( 1 )
));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study(
	1,
	Show Fit Confidence Curves( 0 )
));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study(
	1,
	Show Fit Confidence Curves( 1 )
));

```

#### Show Line of Fit

**Syntaxe :** obj << (Variability Analysis[number] << Linearity Study(1, Show Line of Fit( state=0|1 )))

**Description :** Affiche ou masque la ligne d&apos;ajustement sur le graphique. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));

```

#### Show Overall Avg Bias Line

**Syntaxe :** obj << (Variability Analysis[number] << Linearity Study(1, Show Overall Avg Bias Line( state=0|1 )))

**Description :** Affiche ou masque la ligne du biais moyen global sur le graphique. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study(
	1,
	Show Overall Avg Bias Line( 1 )
));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study(
	1,
	Show Overall Avg Bias Line( 0 )
));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study(
	1,
	Show Overall Avg Bias Line( 1 )
));

```

## Variability Analysis

### Messages d'éléments

#### AIAG Labels

**Syntaxe :** obj << (Variability Analysis[number] << AIAG Labels( state=0|1 ))

**Description :** Affiche ou masque les étiquettes dans la sortie de Gage R&R (Répétabilité et Reproductibilité). Les étiquettes sont définies par l&apos;Automotive Industry Action Group (AIAG). Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) ),

);
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 1 ));

```

#### Bias Report

**Syntaxe :** obj << (Variability Analysis[number] << Bias Report( state=0|1 ))

**Description :** Affiche ou masque un rapport qui contient la différence des moyennes entre les valeurs observées et l&apos;étalon. Cette option est uniquement disponible lorsqu&apos;une variable standard est spécifiée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( 1 ));

```

#### Connect Cell Means

**Syntaxe :** obj << (Variability Analysis[number] << Connect Cell Means( state=0|1 ))

**Description :** Affiche ou masque une ligne reliant les moyennes des cellules dans un groupe de cellules sur le graphe de variabilité.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Connect Cell Means( 1 ));

```

#### Discrimination Ratio

**Syntaxe :** obj << (Variability Analysis[number] << Discrimination Ratio( state=0|1 ))

**Description :** Affiche ou masque le rapport de discrimination pour le modèle donné.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Discrimination Ratio( 1 ));

```

#### Edit MSA Metadata

**Syntaxe :** obj << (Variability Analysis[number] << Edit MSA Metadata(Lower Tolerance(number), Upper Tolerance(number), Tolerance Range(number), Historical Mean(number), Historical Process Sigma(number)))

**Description :** Ouvre une fenêtre qui vous permet d&apos;ajouter ou de modifier la plage de tolérance, les limites de tolérance, la moyenne historique et le sigma du processus historique pour toutes les analyses. Les rapports sont automatiquement mis à jour.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << (Variability Analysis[1] << Edit MSA Metadata(
	Lower Tolerance( .1 ),
	Upper Tolerance( 1.2 )
));

```

#### Group Means of Std Dev

**Syntaxe :** obj << (Variability Analysis[number] << Group Means of Std Dev( state=0|1 ))

**Description :** Affiche ou masque les droites de moyenne des écarts-types des groupes de cellules sur le graphique de l&apos;écart-type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Group Means of Std Dev( 1 ));

```

#### Heterogeneity of Variance Tests

**Syntaxe :** obj << (Variability Analysis[number] << Heterogeneity of Variance Tests( state=0|1 ))

**Description :** Affiche ou masque un rapport qui compare les variances intergroupes. Le rapport comprend des graphiques qui illustrent le test de l&apos;hétérogénéité de la variance pour chaque facteur du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

#### Linearity Study

**Syntaxe :** obj << (Variability Analysis[number] << Linearity Study( state=0|1 ))

**Description :** Effectue une régression qui utilise les valeurs standard en tant que variable X et le biais en tant que variable Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( 1.1 ) ) ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Linearity Study( 1 ));

```

#### Mean Diamonds

**Syntaxe :** obj << (Variability Analysis[number] << Mean Diamonds( state=0|1 ))

**Description :** Affiche ou masque les losanges des moyennes sur le graphe de variabilité. Les intervalles de confiance utilisent l&apos;écart-type intra-groupe pour chaque cellule.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

#### Mean Plots

**Syntaxe :** obj << (Variability Analysis[number] << Mean Plots( state=0|1 ))

**Description :** Affiche ou masque un graphique des moyennes des niveaux des facteurs pour chaque facteur du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Mean Plots( 1 ));

```

#### Mean of Std Dev

**Syntaxe :** obj << (Variability Analysis[number] << Mean of Std Dev( state=0|1 ))

**Description :** Affiche ou masque une ligne grise en pointillé à l&apos;écart-type de la moyenne sur le graphique de l&apos;écart-type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean of Std Dev( 1 ));

```

#### Misclassification Probabilities

**Syntaxe :** obj << (Variability Analysis[number] << Misclassification Probabilities( state=0|1 ))

**Description :** Affiche ou masque un rapport contenant les probabilités d&apos;erreur de classification pour le modèle donné.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Misclassification Probabilities( 1 ));

```

#### Points Jittered

**Syntaxe :** obj << (Variability Analysis[number] << Points Jittered( state=0|1 ))

**Description :** Ajoute un jitter horizontal aléatoire aux points du graphe de variabilité.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Points Jittered( 1 ));

```

#### Rapport du Gage R&R (Répétabilité et Reproductibilité)

**Syntaxe :** obj << (Variability Analysis[number] << "Gauge R & R Report"n( state=0|1 ))

**Description :** Calcule et affiche un rapport résumé Répétabilité et reproductibilité des systèmes de mesure.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),

);
obj << (Variability Analysis[1] << "Gauge R&R Report"n( 1 ));

```

#### S Control Limits

**Syntaxe :** obj << (Variability Analysis[number] << S Control Limits( state=0|1 ))

**Description :** Affiche ou masque des lignes rouges à la limite de contrôle inférieure (LCL) et à la limite de contrôle supérieure (UCL) sur le graphique de l&apos;écart-type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << S Control Limits( 1 ));

```

#### Show Box Plots

**Syntaxe :** obj << (Variability Analysis[number] << Show Box Plots( state=0|1 ))

**Description :** Affiche ou masque les boîtes à moustaches pour chaque cellule sur le graphe de variabilité.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Box Plots( 1 ));

```

#### Show Cell Means

**Syntaxe :** obj << (Variability Analysis[number] << Show Cell Means( state=0|1 ))

**Description :** Affiche ou masque la marque de la moyenne pour chaque cellule sur le graphe de variabilité. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 1 ));

```

#### Show Grand Mean

**Syntaxe :** obj << (Variability Analysis[number] << Show Grand Mean( state=0|1 ))

**Description :** Affiche ou masque la moyenne globale, qui est représentée par une ligne grise en pointillé sur l&apos;ensemble du graphique.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Mean( 1 ));

```

#### Show Grand Median

**Syntaxe :** obj << (Variability Analysis[number] << Show Grand Median( state=0|1 ))

**Description :** Affiche ou masque la médiane générale, qui est représentée par une ligne bleue en pointillé sur l&apos;ensemble du graphique.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Median( 1 ));

```

#### Show Group Means

**Syntaxe :** obj << (Variability Analysis[number] << Show Group Means( state=0|1 ))

**Description :** Affiche ou masque la moyenne pour les groupes de cellules, qui est représentée par une ligne pleine horizontale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Group Means( 1 ));

```

#### Show Points

**Syntaxe :** obj << (Variability Analysis[number] << Show Points( state=0|1 ))

**Description :** Affiche ou masque les points sur le graphe de variabilité. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 1 ));

```

#### Show Range Bars

**Syntaxe :** obj << (Variability Analysis[number] << Show Range Bars( state=0|1 ))

**Description :** Affiche ou masque les barres indiquant la valeur minimum et maximum de chaque cellule. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 1 ));

```

#### Show Separators

**Syntaxe :** obj << (Variability Analysis[number] << Show Separators( state=0|1 ))

**Description :** Affiche ou masque les lignes de séparation entre les niveaux des variables de groupement sur le graphe de variabilité. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 1 ));

```

#### Show Standard Mean

**Syntaxe :** obj << (Variability Analysis[number] << Show Standard Mean( state=0|1 ))

**Description :** Affiche ou masque une ligne à la moyenne des valeurs standard. Cette option n&apos;est disponible que si une variable standard est spécifiée dans la fenêtre de lancement.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Standard Mean( 1 ));

```

#### Std Dev Chart

**Syntaxe :** obj << (Variability Analysis[number] << Std Dev Chart( state=0|1 ))

**Description :** Affiche ou masque un graphique qui représente graphiquement l&apos;écart-type de chaque cellule. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 1 ));

```

#### Std Dev Plots

**Syntaxe :** obj << (Variability Analysis[number] << Std Dev Plots( state=0|1 ))

**Description :** Affiche ou masque les graphiques des écarts-types groupés par niveau du facteur. Un graphique est affiché pour chaque facteur du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Std Dev Plots( 1 ));

```

#### Variability Chart

**Syntaxe :** obj << (Variability Analysis[number] << Variability Chart( state=0|1 ))

**Description :** Affiche ou masque le graphe de variabilité. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 1 ));

```

#### Variability Summary Report

**Syntaxe :** obj << (Variability Analysis[number] << Variability Summary Report( state=0|1 ))

**Description :** Affiche ou masque un rapport qui illustre la moyenne, l&apos;écart-type, le coefficient de variation (CV), l&apos;erreur standard de la moyenne, les intervalles de confiance inférieure et supérieure. Le minimum, le maximum, l&apos;étendue, la médiane et le nombre d&apos;observations sont également affichés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Variability Summary Report( 1 ));

```

#### Variance Components

**Syntaxe :** obj << (Variability Analysis[number] << Variance Components( state=0|1 ))

**Description :** Affiche ou masque les composants de la variance pour un modèle donné.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

#### Vertical Charts

**Syntaxe :** obj << (Variability Analysis[number] << Vertical Charts( state=0|1 ))

**Description :** Fait pivoter le graphe de variabilité.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Vertical Charts( 1 ));

```

#### XBar Control Limits

**Syntaxe :** obj << (Variability Analysis[number] << XBar Control Limits( state=0|1 ))

**Description :** Affiche ou masque des lignes à la limite de contrôle inférieure (LCL) et à la limite de contrôle supérieure (UCL) sur le graphe de variabilité.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << XBar Control Limits( 1 ));

```

