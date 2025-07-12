# Partial Least Squares



## Colonnes

### By

**Syntaxe :** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);

```

### Factor

**Syntaxe :** obj << Factor( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

### Freq

**Syntaxe :** obj << Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Freq( _freqcol ),
	Go
);

```

### Response

**Syntaxe :** obj << Response( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

### Validation

**Syntaxe :** obj << Validation( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

### X

**Syntaxe :** obj << X( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

### Y

**Syntaxe :** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

## Constructeurs associés

### Partial Least Squares

**Syntaxe :** Partial Least Squares( Y( columns ), X( columns ) )

**Description :** Ajuste un modèle à une ou plusieurs variables de réponse en utilisant des facteurs latents. Cela permet d&apos;ajuster les modèles lorsque les variables explicatives sont fortement corrélées, ou lorsqu&apos;il y a plus de variables explicatives que d&apos;observations.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Go
);

```

## Messages d'éléments

### Centering

**Syntaxe :** obj = Partial Least Squares(...Centering( state=0|1)...)

<b>Élément lanceur : Oui</b>

**Description :** Centre toutes les variables Y et les effets du modèle en soustrayant la moyenne de chaque colonne. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Centering( 0 ),
	Validation Method( KFold( 7 ) ),
	Go
);

```

### Fit

**Syntaxe :** obj << Fit( SVD( Fast|Classical ), Method( NIPALS|SIMPLS ), Number of Factors( number ) )

**Description :** Ajuste le modèle des moindres carrés partiels avec une méthode et un nombre de facteurs spécifiés.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Method( NIPALS ), Number of Factors( 7 ) ),
	Go
);

```

### Go

**Syntaxe :** obj << Go

**Description :** Lance l&apos;ajustement du modèle des moindres carrés partiels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	)
);
obj << Go;

```

### Imputation Method

**Syntaxe :** obj = Partial Least Squares(...Imputation Method( "Moyenne"|"EM" )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie la méthode d&apos;imputation. La méthode Moyenne remplace les valeurs manquantes par la moyenne des valeurs non manquantes dans la même colonne. La méthode EM utilise une approche itérative Espérance-Maximisation (EM) pour imputer les valeurs manquantes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Partial Least Squares(
	Y( :Y ),
	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 2 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Fit( Method( NIPALS ), Number of Factors( 6 ) )
);

```

### Impute Missing Data

**Syntaxe :** obj = Partial Least Squares(...Impute Missing Data( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Remplace les valeurs de données manquantes dans les réponses et les régresseurs par des valeurs non manquantes pour éviter que les lignes ayant des valeurs manquantes ne soient exclues de l&apos;analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Partial Least Squares(
	Y( :Y ),
	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Impute Missing Data( 1 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Go
);

```

### Initial Number of Factors

**Syntaxe :** obj << Partial Least Squares( Validation Method(...Initial Number of Factors( number )...) )

**Description :** Spécifie le nombre initial de facteurs pour la validation croisée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Validation Method( KFold( 7 ), Initial Number of Factors( 10 ) ), 

);
obj << Go;

```

### Max Iterations

**Syntaxe :** obj = Partial Least Squares(...Max Iterations( number=1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie le nombre maximum d&apos;itérations à exécuter dans la boucle d&apos;imputation EM. "1" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Partial Least Squares(
	Y( :Y ),
	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 2 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Fit( Method( NIPALS ), Number of Factors( 6 ) )
);

```

### Method

**Syntaxe :** obj = Partial Least Squares(...Fit( Method( NIPALS|SIMPLS)... )

**Description :** Spécifie la méthode utilisée pour ajuster le modèle des moindres carrés partiels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Method( NIPALS ), Number of Factors( 11 ) ),
	Go
);

```

### Model Dialog

**Syntaxe :** obj << Model Dialog

**Description :** Ouvre la fenêtre de lancement du modèle linéaire. Vous pouvez ajuster un modèle des moindres carrés partiels à partir de la fenêtre de lancement en sélectionnant la méthode d&apos;analyse statistique Moindres carrés partiels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Model Dialog;

```

### SVD

**Syntaxe :** obj << SVD( Fast|Classical )

**Description :** Définit l&apos;implémentation de l&apos;algorithme SVD permettant de calculer le modèle des moindres carrés partiels Rapide ou Classique. L&apos;option Rapide implémente la routine SVD de Lanczos et l&apos;option Classique implémente la routine de Golub-Kahan.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Validation Method( KFold( 7 ) ),
	Go
);
obj << Fit( SVD( Classical ), Method( SIMPLS ) );

```

### Scaling

**Syntaxe :** obj = Partial Least Squares(...Scaling( state=0|1)...)

<b>Élément lanceur : Oui</b>

**Description :** Met à l&apos;échelle toutes les variables Y et les coefficients du modèle en divisant chaque colonne par son écart-type. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Scaling( 0 ),
	Validation Method( KFold( 7 ) ),
	Go
);

```

### Set Random Seed

**Syntaxe :** obj << Set Random Seed( number )

**Description :** Spécifie la graine aléatoire pour exécuter le modèle des moindres carrés partiels avec validation croisée.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Set Random Seed( 12345 ),
	Validation Method( KFold( 7 ) ),
	Go
);

```

### Validation Method

**Syntaxe :** obj << Validation Method( KFold( number )|Holdback( fraction )|"Leave-One-Out"|None, Initial Number of Factors( number )  )

**Description :** Définit la méthode utilisée pour la validation du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
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

**Syntaxe :** obj = Partial Least Squares(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## Partial Least Squares Fit

### Messages d'éléments

#### Coefficient Plots

**Syntaxe :** obj << (Fit[number] << Coefficient Plots( state=0|1 ))

**Description :** Affiche ou masque les graphiques des coefficients du modèle pour chaque réponse dans l&apos;ensemble des variables X. Il y a un graphique pour les données centrées et mises à l&apos;échelle et un graphique pour les données d&apos;origine.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Coefficient Plots( 1 ));

```

#### Correlation Loading Plot

**Syntaxe :** obj << (Fit[number] << Correlation Loading Plot( state=0|1 ))

**Description :** Affiche ou masque un nuage de points seul ou une matrice de nuages de points des loadings X et Y superposés sur le même graphique. La matrice de nuages de points est affichée si le nombre de facteurs est supérieur à 2.

**Exemple 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Correlation Loading Plot( 2 ));

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Correlation Loading Plot( 4 ));

```

#### Diagnostics Plots

**Syntaxe :** obj << (Fit[number] << Diagnostics Plots( state=0|1 ))

**Description :** Affiche ou masque les graphiques de diagnostic.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Diagnostics Plots( 1 ));

```

#### Distance Plots

**Syntaxe :** obj << (Fit[number] << Distance Plots( state=0|1 ))

**Description :** Affiche ou masque les graphiques de distance. Il y a un graphique de la distance de chaque observation au modèle X, un graphique de la distance de chaque observation au modèle Y, et une nuage de points des distances aux modèles X et Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Distance Plots( 1 ));

```

#### Fit Line

**Syntaxe :** obj << (Fit[number] << Fit Line( state=0|1 ))

**Description :** Affiche ou masque une ligne d&apos;ajustement qui passe par les points des graphiques des scores X-Y. Actif par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
Wait( 2 );
obj << (Fit[1] << Fit Line( 0 ));

```

#### Get Measures

**Syntaxe :** obj << (Fit[number] << Get Measures)

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Get Measures);

```

#### Loading Plots

**Syntaxe :** obj << (Fit[number] << Loading Plots( state=0|1 ))

**Description :** Affiche ou masque les graphiques des loadings X et Y pour chaque facteur extrait. Il y a des graphiques distincts pour les variables X et Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Loading Plots( 1 ));

```

#### Loading Scatterplot Matrices

**Syntaxe :** obj << (Fit[number] << Loading Scatterplot Matrices( state=0|1 ))

**Description :** Affiche ou masque des matrices de nuages de points des loadings X et Y. Il y a des matrices de nuages de points distinctes pour les variables X et Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Loading Scatterplot Matrices( 1 ));

```

#### Make Model Using VIP

**Syntaxe :** obj << (Fit[number] << Make Model Using VIP)

**Description :** Ouvre et remplit une fenêtre de lancement avec les réponses appropriées entrées en Y et les variables dont les VIP dépassent le seuil spécifié entrées en X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Make Model Using VIP);

```

#### Model Driven Multivariate Control Chart for Saved X Scores

**Syntaxe :** obj << (Fit[number] << Model Driven Multivariate Control Chart for Saved X Scores)

**Description :** Enregistre les formules pour chaque score X et lance la fenêtre de lancement Carte de contrôle multivariée déterminée par modèle (MDMCC).

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Model Driven Multivariate Control Chart for Saved X Scores);

```

#### Percent Variation Plots

**Syntaxe :** obj << (Fit[number] << Percent Variation Plots( state=0|1 ))

**Description :** Affiche ou masque les graphiques du pourcentage de variation expliqué pour les Effets de X et pour les Réponses Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Percent variation plots( 1 ));

```

#### Profiler

**Syntaxe :** obj << (Fit[number] << Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur pour chaque réponse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Profiler( 1 ));

```

#### Profiler for Predicteds

**Syntaxe :** obj << (Fit[number] << Model Driven Multivariate Control Chart for Saved X Scores)

**Description :** Enregistre les formules pour chaque Y en tant que fonction du score X et ouvre la fenêtre de lancement du Profileur.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Profiler for Predicteds);

```

#### Publish Prediction Formula

**Syntaxe :** obj << (Fit[number] << Publish Prediction Formula)

**Description :** Crée une formule de prévision et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Publish Prediction Formula);

```

#### Publish Score Formula

**Syntaxe :** obj << (Fit[number] << Publish Score Formula)

**Description :** Crée des formules de score X et Y et les enregistre sous la forme de scripts de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Publish Score Formula);

```

#### Remove Fit

**Syntaxe :** obj << (Fit[number] << Remove Fit)

**Description :** Supprime le rapport du modèle du rapport principal de la plate-forme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
Wait( 3 );
obj << (Fit[1] << Remove Fit);

```

#### Save Distance

**Syntaxe :** obj << (Fit[number] << Save Distance)

**Description :** Enregistre de nouvelles colonnes dans la table de données d&apos;origine. Les nouvelles colonnes contiennent les valeurs de Distance par rapport au modèle X (DModX) et de Distance par rapport au modèle Y (DModY).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Distance);

```

#### Save Distance as X Score Formula

**Syntaxe :** obj << (Fit[number] << Save Distance as X Score Formula)

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Les nouvelles colonnes contiennent les formules de Distance par rapport au modèle X (DModX) et de Distance par rapport au modèle Y (DModY) qui sont des fonctions des formules de score X.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Distance as X Score Formula);

```

#### Save Imputation

**Syntaxe :** obj << (Fit[number] << Save Imputation)

**Description :** Enregistre des colonnes dans une nouvelle table de données. Pour chaque variable X et Y, il y a une colonne qui contient la colonne de données d&apos;origine avec les valeurs manquantes remplacées par leurs valeurs imputées.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Partial Least Squares(
	Y( :Y ),
	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 2 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Fit( Method( NIPALS ), Number of Factors( 6 ) )
);
obj << (Fit[1] << Save Imputation);

```

#### Save Indiv Confidence Limit Formula

**Syntaxe :** obj << (Fit[number] << Save Indiv Confidence Limit Formula)

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Pour chaque variable Y, il y a des colonnes pour les limites de confiance inférieure et supérieure pour une prévision individuelle qui sont des fonctions des formules de score X. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Indiv Confidence Limit Formula);

```

#### Save Loadings

**Syntaxe :** obj << (Fit[number] << Save Loadings)

**Description :** Enregistre des colonnes dans deux nouvelles tables de données. Il y a une table de données qui contient les loadings pour les variables X et une table de données qui contient les loadings pour les variables Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Loadings);

```

#### Save Mean Confidence Limit Formula

**Syntaxe :** obj << (Fit[number] << Save Mean Confidence Limit Formula( <alpha=0.05> ))

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Pour chaque variable Y, il y a des colonnes pour les limites de confiance inférieure et supérieure pour la réponse moyenne qui sont des fonctions des formules de score X. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Mean Confidence Limit Formula);

```

#### Save Percent Variation Explained For X Effects

**Syntaxe :** obj << (Fit[number] << Save Percent Variation Explained For X Effects)

**Description :** Enregistre des colonnes dans une nouvelle table de données. Pour chaque variable X, il y a une colonne qui contient le pourcentage de variation expliqué sur l&apos;ensemble des facteurs extraits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Percent Variation Explained For X Effects);

```

#### Save Percent Variation Explained For Y Responses

**Syntaxe :** obj << (Fit[number] << Save Percent Variation Explained For Y Responses)

**Description :** Enregistre des colonnes dans une nouvelle table de données. Pour chaque variable Y, il y a une colonne qui contient le pourcentage de variation expliqué sur l&apos;ensemble des facteurs extraits.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Percent Variation Explained For Y Responses);

```

#### Save Prediction As X Score Formula

**Syntaxe :** obj << (Fit[number] << Save Prediction as X Score Formula)

**Description :** Enregistre des nouvelles colonnes de formule dans la table de données d&apos;origine. Pour chaque variable Y, il y a une colonne qui contient une formule de prévision qui est une fonction des formules de score X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Prediction as X Score Formula);

```

#### Save Prediction Formula

**Syntaxe :** obj << (Fit[number] << Save Prediction Formula)

**Description :** Enregistre des nouvelles colonnes de formule dans la table de données d&apos;origine. Pour chaque variable Y, il y a une colonne qui contient une formule de prévision qui est une fonction des variables X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Prediction Formula);

```

#### Save Score Formula

**Syntaxe :** obj << (Fit[number] << Save Score Formula)

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Pour chaque facteur extrait, il y a une colonne qui contient une formule de score X et une colonne qui contient une formule de score Y. Les formules de score X sont des fonctions des variables X et les formules de score Y sont des fonctions des formules de score X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Score Formula);

```

#### Save Scores

**Syntaxe :** obj << (Fit[number] << Save Scores)

**Description :** Enregistre de nouvelles colonnes dans la table de données d&apos;origine. Pour chaque facteur extrait, il y a une colonne qui contient les scores X et une colonne qui contient les scores Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Scores);

```

#### Save Standard Errors of Prediction Formula

**Syntaxe :** obj << (Fit[number] << Save Standard Errors of Prediction Formula)

**Description :** Enregistre des nouvelles colonnes de formule dans la table de données d&apos;origine. Pour chaque variable Y, il y a une colonne qui contient la formule de l&apos;erreur standard de la moyenne prévue qui est une fonction des variables X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Standard Errors of Prediction Formula);

```

#### Save Standardized Loadings

**Syntaxe :** obj << (Fit[number] << Save Standardized Loadings)

**Description :** Enregistre des colonnes dans deux nouvelles tables de données. Il y a une table de données qui contient les loadings standardisés pour les variables X et une table de données qui contient les loadings standardisés pour les variables Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Standardized Loadings);

```

#### Save Standardized Scores

**Syntaxe :** obj << (Fit[number] << Save Standardized Scores)

**Description :** Enregistre de nouvelles colonnes dans la table de données d&apos;origine. Les nouvelles colonnes contiennent les scores standardisés X et Y pour chaque facteur extrait.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Standardized Scores);

```

#### Save T Square

**Syntaxe :** obj << (Fit[number] << Save T Square)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule du T carré comme fonction des variables X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save T Square);

```

#### Save T Square as X Score Formula

**Syntaxe :** obj << (Fit[number] << Save T Square as X Score Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule du T carré comme fonction des formules de score X.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save T Square as X Score Formula);

```

#### Save Validation

**Syntaxe :** obj << (Fit[number] << Save Validation)

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La nouvelle colonne contient des nombres qui indiquent comment chaque observation a été utilisée dans la validation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Validation);

```

#### Save X Predicted Values

**Syntaxe :** obj << (Fit[number] << Save X Predicted Values)

**Description :** Enregistre de nouvelles colonnes dans la table de données d&apos;origine. Pour chaque variable X, il y a une colonne qui contient les valeurs X prévues.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save X Predicted Values);

```

#### Save X Prediction as X Score Formula

**Syntaxe :** obj << (Fit[number] << Save X Prediction as X Score Formula)

**Description :** Enregistre des nouvelles colonnes de formule dans la table de données d&apos;origine. Pour chaque variable X, il y a une colonne qui contient une formule de prévision qui est une fonction des formules de score X.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save X Prediction as X Score Formula);

```

#### Save X Residuals

**Syntaxe :** obj << (Fit[number] << Save X Residuals)

**Description :** Enregistre de nouvelles colonnes dans la table de données d&apos;origine. Pour chaque variable X, il y a une colonne qui contient les valeurs du résidu X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save X Residuals);

```

#### Save X Score Formula

**Syntaxe :** obj << Save X Score Formula

#### Save X Weights

**Syntaxe :** obj << (Fit[number] << Save X Weights)

**Description :** Enregistre des colonnes dans une nouvelle table de données. Pour chaque facteur extrait, il y a une colonne qui contient les pondérations des variables X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save X Weights);

```

#### Save Y Predicted Values

**Syntaxe :** obj << (Fit[number] << Save Y Predicted Values)

**Description :** Enregistre de nouvelles colonnes dans la table de données d&apos;origine. Pour chaque variable Y, il y a une colonne qui contient les valeurs Y prévues.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Y Predicted Values);

```

#### Save Y Residuals

**Syntaxe :** obj << (Fit[number] << Save Y Residuals)

**Description :** Enregistre de nouvelles colonnes dans la table de données d&apos;origine. Pour chaque variable Y, il y a une colonne qui contient les valeurs du résidu Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Save Y Residuals);

```

#### Score Scatterplot Matrices

**Syntaxe :** obj << (Fit[number] << Score Scatterplot Matrices( state=0|1 ))

**Description :** Affiche ou masque une matrice de nuages de points des scores X et une matrice de nuages de points des scores Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Score Scatterplot Matrices( 1 ));

```

#### Set VIP Threshold

**Syntaxe :** obj << (Fit[number] << Set VIP Threshold( number=0.8 ))

**Description :** Définit le niveau de seuil du Graphique d&apos;importance des variables, de la table de données Importance des variables, et du graphique VIP par rapport aux graphiques des coefficients. "0.8" par défaut.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Variable Importance Plot( 1 ));
Wait( 3 );
obj << (Fit[1] << Set VIP Threshold( 0.5 ));

```

#### Show Confidence Band

**Syntaxe :** obj << (Fit[number] << Show Confidence Band( state=0|1 ))

**Description :** Affiche ou masque les bandes de confiance à 95 % pour les lignes d&apos;ajustement sur les graphiques des scores X-Y.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Show Confidence Band( 1 ));

```

#### Spectral Profiler

**Syntaxe :** obj << (Fit[number] << Spectral Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur unique où toutes les variables de réponse apparaissent dans la première cellule du graphique.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Spectral Profiler( 1 ));

```

#### T Square Plot

**Syntaxe :** obj << (Fit[number] << T Square Plot( state=0|1 ))

**Description :** Affiche ou masque un graphique des statistiques du T carré pour chaque observation, ainsi qu&apos;une limite de contrôle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << T Square Plot( 1 ));

```

#### VIP vs Coefficients Plots

**Syntaxe :** obj << (Fit[number] << VIP vs Coefficients Plots( state=0|1 ))

**Description :** Affiche ou masque un graphique des statistiques du graphique VIP par rapport aux coefficients du modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << VIP vs Coefficients Plots( 1 ));

```

#### Variable Importance Plot

**Syntaxe :** obj << (Fit[number] << Variable Importance Plot( state=0|1 ))

**Description :** Affiche ou masque un graphique qui résume la contribution apportée par chaque variable au modèle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14,
		:v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Fit( Number of Factors( 5 ) )
);
obj << (Fit[1] << Variable Importance Plot( 1 ));

```

