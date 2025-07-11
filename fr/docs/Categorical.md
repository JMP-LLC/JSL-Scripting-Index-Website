# Categorical



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

### Agreement Statistic

**Syntaxe :** obj << Agreement Statistic( state=0|1 )

**Description :** Teste dans quelle mesure les évaluateurs concordent entre eux et si le manque de concordance est symétrique. Disponible uniquement pour une réponse Concordance des évaluateurs. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Rater Agreement( :First Survey, :Second Survey ),
	Freq( :Count ),
	Agreement Statistic( 0 )
);
Wait( 1 );
obj << Agreement Statistic( 1 );

```

### Aligned Responses

**Syntaxe :** obj = Categorical(...Aligned Responses( columns )...)

<b>Élément lanceur : Oui</b>

**Description :** Résume les données de plusieurs colonnes qui ont les mêmes niveaux de réponse dans un rapport unique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Aligned Responses( :First Survey, :Second Survey ),
	Freq( :Count )
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
obj << Apply Preset(
	"Sample Presets",
	"t-Tests",
	Folder( "Compare Means" )
);

```

**Rechercher par nom**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Arrange in Rows

**Syntaxe :** obj << Arrange in Rows( number )

**Description :** Réorganise les rapports de manière à ce qu&apos;ils dépassent de la page. Spécifiez le nombre de rapports à afficher dans chaque ligne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Responses( :country ),
	Legend( 0 ),
	Arrange in Rows( 2 )
);
Wait( 1 );
obj << Arrange in Rows( 1 );

```

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Binomial

**Syntaxe :** obj << Binomial( state=0|1 )

**Description :** Effectue un test du khi-deux d’indépendance des niveaux de réponse en supposant une distribution binomiale pour chaque catégorie. Remarque : disponible uniquement pour les réponses multiples.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Homogeneity Test( 1 );

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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);

```

### Categorical

**Syntaxe :** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Description :** Résume et analyse des données de réponses catégorielles. Les données peuvent être des réponses simples, des réponses multiples, des mesures répétées, une concordance des évaluateurs, des réponses alignées, ou du texte libre. Inclut la possibilité de générer des tabulations croisées personnalisées des réponses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);

```

### Cell Chisq

**Syntaxe :** obj << Cell Chisq( state=0|1 )

**Description :** Affiche ou masque les p-valeurs pour chaque cellule dans la table pour un test du khi deux d&apos;indépendance. Les p-valeurs sont coloriées et ombrées selon le dénombrement observé, s&apos;il est supérieur ou inférieur au dénombrement attendu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :size ), Responses( :country ) );
obj << Cell Chisq( 1 );

```

### Cell Chisq FDR

**Syntaxe :** obj << Cell Chisq FDR( state=0|1 )

**Description :** Affiche ou masque les p-values ajustées pour le FDR (taux de fausses découvertes) pour chaque cellule dans la table pour un test du khi deux d&apos;indépendance. Les p-values ajustées pour le FDR sont coloriées et ombrées selon que le dénombrement observé est supérieur ou inférieur au dénombrement attendu.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :size ), Responses( :country ) );
obj << Cell Chisq( 1 );

```

### ChiSquare Test Choices

**Syntaxe :** obj << ChiSquare Test Choices( "Rapport de vraisemblance et Pearson"|"Rapport de vraisemblance uniquement"|"Pearson uniquement" )

**Description :** Spécifie les tests affichés dans les tests de l&apos;homogénéité, soit le khi deux du rapport de vraisemblance, soit le khi deux de Pearson, ou les deux. Disponible uniquement pour une réponse unique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << ChiSquare Test Choices( "Pearson Only" );
obj << Test Response Homogeneity( 1 );

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj <<
Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Compare Each Cell

**Syntaxe :** obj << Compare Each Cell( state=0|1 )

**Description :** Compare chaque niveau de réponse par rapport à tous les autres niveaux combinés dans l&apos;ensemble des niveaux d&apos;une variable de regroupement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Employee Tenure ),
	Responses( :Job Satisfaction )
);
obj << Compare Each Cell( 1 );

```

### Compare Each Cell FDR

**Syntaxe :** obj << Compare Each Cell FDR( state=0|1 )

**Description :** Compare chaque niveau de la réponse par rapport à tous les autres niveaux combinés dans l&apos;ensemble des niveaux d&apos;une variable de regroupement, avec l&apos;ajustement FDR (taux de fausses découvertes).

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Employee Tenure ),
	Responses( :Job Satisfaction )
);
obj << Compare Each Cell FDR( 1 );

```

### Compare Each Sample

**Syntaxe :** obj << Compare Each Sample( state=0|1 )

**Description :** Compare les réponses dans l&apos;ensemble des niveaux d&apos;une variable de regroupement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career )
);
obj << Compare Each Sample( 1 );

```

### Compare Each Sample FDR

**Syntaxe :** obj << Compare Each Sample FDR( state=0|1 )

**Description :** Compare les réponses dans l&apos;ensemble des niveaux d&apos;une variable de groupement avec l&apos;ajustement FDR (taux de fausses découvertes).

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career )
);
obj << Compare Each Sample FDR( 1 );

```

### Conditional Association

**Syntaxe :** obj << Conditional Association( state=0|1 )

**Description :** Affiche ou masque le taux d&apos;obtention d&apos;une réponse dans une colonne, en ayant la même réponse dans une ligne. Disponible uniquement pour les modèles Réponses multiples, Réponses multiples délimitées et Réponses multiples par identifiant avec Occurrences uniques dans l&apos;identifiant sélectionné.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	ID( :Response ID ),
	Unique Occurrences within ID( 1 ),
	Structured( :Brush, :Brush Delimited ),
	Share Chart( 0 ),
	Legend( 0 ),
	Conditional Association( 1 )
);

```

### Confidence Interval Coverage

**Syntaxe :** obj = Categorical(...Confidence Interval Coverage( number=0.95 )...)

<b>Élément lanceur : Oui</b>

**Description :** Définit la couverture des intervalles de confiance pour les taux et le partage des réponses. La couverture est égale à (1-alpha). "0.95" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Confidence Interval Coverage( 0.99 ),
	Share Confidence Interval( 1 )
);

```

### Confidence Limits Format

**Syntaxe :** obj << Confidence Limits Format( format, <options> )

**Description :** Formate les bornes de l&apos;intervalle de confiance pour les valeurs Partage et Taux dans la table de données. La valeur par défaut est « pourcentage », 6, 2.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Confidence Interval Coverage( 0.99 ),
	Share Confidence Interval( 1 )
);
Wait( 1 );
obj << Confidence Limits Format( "Percent", 6, 0 );

```

### Contents Summary

**Syntaxe :** obj << Contents Summary( state=0|1 )

**Description :** Recueille tous les tests et les p-valeurs dans un rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Contents Summary( 1 );

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Copy Script;

```

### Count Missing Responses

**Syntaxe :** obj = Categorical(...Count Missing Responses( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Inclut les valeurs manquantes en tant que catégorie de réponse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Missing Data Pattern.jmp" );
Categorical(
	X( :Trial 1 ),
	Count Missing Responses( 1 ),
	Responses( :Trial 4 )
);

```

### Count Test

**Syntaxe :** obj << Count Test( state=0|1 )

**Description :** Effectue un test du khi-deux d’indépendance des taux en utilisant une régression de Poisson. Remarque : disponible uniquement pour les réponses multiples.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Count Test( 1 );

```

### Crosstab

**Syntaxe :** obj << Crosstab( state=0|1 )

**Description :** Génère une tabulation croisée des dénombrements avec les niveaux de réponse définissant les colonnes et les niveaux de variable de regroupement définissant les lignes. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Crosstab Transposed( 1 );
obj << Crosstab( 1 );

```

### Crosstab Transposed

**Syntaxe :** obj << Crosstab Transposed( state=0|1 )

**Description :** Génère une tabulation croisée des dénombrements avec les niveaux de réponse définissant les lignes et les niveaux de variable de regroupement définissant les colonnes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Crosstab Transposed( 1 );

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Data Table Window;

```

### Exclude Nonresponses

**Syntaxe :** obj << Exclude Nonresponses( state=0|1 )

**Description :** Exclut les non réponses du nombre et des tests d&apos;homogénéité lors de la comparaison de plusieurs catégories de réponse. Les cellules vides ou manquantes sont traitées comme des non réponses. Il n&apos;est pas recommandé d&apos;utiliser une catégorie séparée.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	Structured(
		:"What is your gender ? "n,
		:"What colors do you like? (with nonresponse)"n
	),
	Share Chart( 0 ),
	Homogeneity Test( 1 )
);
Wait( 1 );
obj << Exclude Nonresponses( 1 );

```

### FDR Adjusted PValues

**Syntaxe :** obj << FDR Adjusted PValues( state=0|1 )

**Description :** Les p-valeurs ajustées de taux de fausses découvertes (Benjamini et Hochberg, 1995) sont utilisées lorsqu&apos;il existe de nombreuses p-valeurs et qu&apos;il est facile pour des tests de devenir significatifs simplement par chance.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured(
		:I am working on my career, :Age Group * :Employee Tenure
	),
	Share Chart( 0 ),
	Test Response Homogeneity( 1 )
);
obj << FDR Adjusted PValues( 1 );

```

### Filter

**Syntaxe :** obj << Filter( state=0|1 )

**Description :** Filtre les données sur des groupes ou des étendues spécifiques, localement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Responses( :country ),
	Legend( 0 ),
	Local Data Filter(
		Location( {634, 43} ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
		Add Filter( columns( :sex ), Where( :sex == "Female" ) )
	)
);
Wait( 1.0 );
obj << Filter( 0 );

```

### Force Crosstab Shading

**Syntaxe :** obj << Force Crosstab Shading( state=0|1 )

**Description :** Utilise l&apos;ombrage sur les rapports de table croisée, même si les préférences globales sont définies pour ne pas utiliser l’ombrage. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Force Crosstab Shading( 0 );
Wait( 1 );
obj << Force Crosstab Shading( 1 );

```

### Force Labels Horizontal

**Syntaxe :** obj << Force Labels Horizontal( state=0|1 )

**Description :** Utilise des étiquettes horizontales sur le tableau croisé, quelle que soit la longueur du texte. Le texte de l&apos;étiquette est ajusté sur plusieurs lignes plutôt que pivoté.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Employee Tenure ),
	Responses( :Job Satisfaction )
);
Wait( 1 );
obj << Force Labels Horizontal( 1 );

```

### Format Elements

**Syntaxe :** obj << Format Elements

**Description :** Ouvre une fenêtre qui vous permet de spécifier les formats de différents éléments du rapport.

### Freq

**Syntaxe :** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Freq( _freqcol )
);

```

### Frequencies

**Syntaxe :** obj << Frequencies( state=0|1 )

**Description :** Affiche ou masque la table Fréquence dans le rapport. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Frequencies( 0 )
);
Wait( 1 );
obj << Frequencies( 1 );

```

### Frequencies Format

**Syntaxe :** obj << Frequencies Format( format, <options> )

**Description :** Formate les valeurs de fréquence dans la table de données. La valeur par défaut est « décimale fixe », 7, 0.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
Wait( 1 );
obj << Frequencies Format( "Fixed Dec", 7, 2 );

```

### Frequency Chart

**Syntaxe :** obj << Frequency Chart( state=0|1 )

**Description :** Affiche ou masque le graphique de fréquence dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Frequency Chart( 1 );

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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
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
	Elements(
		Points( X, Y, Legend( 1 ) ),
		Smoother( X, Y, Legend( 2 ) )
	),
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
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

### Grouping Category

**Syntaxe :** obj << Grouping Category( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);

```

### Grouping Option

**Syntaxe :** obj = Categorical(...Grouping Option( "Combinaisons"|"Chacun individuellement"|"Les deux" )...)

<b>Élément lanceur : Oui</b>

**Description :** Définit la méthode de groupement pour les variables X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Aligned Responses( :country, :size ),
	Grouping Option( Each Individually )
);

```

### Hide Nonsignificant

**Syntaxe :** obj << Hide Nonsignificant( state=0|1 )

**Description :** Supprime les rapports non significatifs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Grouping Option( Each Individually ),
	X( :Age Group, :School Age Children ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Test Response Homogeneity( 1 )
);
obj << Hide Nonsignificant( 1 );

```

### Highlight Cells

**Syntaxe :** obj << Highlight Cells

**Description :** Surligne les cellules satisfaisant aux conditions spécifiées.

### Homogeneity Test

**Syntaxe :** obj << Homogeneity Test( state=0|1 )

**Description :** Effectue un test du khi-deux d’indépendance des niveaux de réponse en supposant une distribution binomiale pour chaque catégorie. Remarque : disponible uniquement pour les réponses multiples.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Homogeneity Test( 1 );

```

### ID

**Syntaxe :** obj << ID( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);

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

### Include Response Categories in Excluded Rows

**Syntaxe :** obj = Categorical(...Include Response Categories in Excluded Rows( state=0|1 )...)

**Description :** Spécifie que le rapport inclut les catégories de réponse qui apparaissent uniquement dans les lignes exclues. Le nombre pour ces catégories est zéro.

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Select Where( :size == "Small" );
dt << Exclude;
obj = Categorical(
	Include Response Categories in Excluded Rows( 1 ),
	X( :marital status ),
	Responses( :size )
);

```

### Include Responses Not in Data

**Syntaxe :** obj = Categorical(...Include Responses Not in Data( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Affiche les catégories de réponse qui présentent des étiquettes de valeur, même si elles n&apos;apparaissent pas dans les données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
:type << Set Property(
	Value Labels,
	{"Family" = "Family", "Sporty" = "Sporty", "Utility" = "SUV",
	"Work" = "Work"}
);
obj = Categorical( X( :marital status ), Responses( :type ) );
obj << Include Responses Not in Data( 1 );

```

### Indicator Group

**Syntaxe :** obj = Categorical(...Indicator Group( columns )...)

<b>Élément lanceur : Oui</b>

**Description :** Résume les données d&apos;une variable à réponses multiples où les réponses se trouvent dans plusieurs colonnes d&apos;indicateurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Indicators.jmp" );
obj = dt << Categorical(
	X( :clean, :date ),
	Indicator Group(
		:contamination, :corrosion, :doping, :metallization,
		:miscellaneous, :oxide defect, :silicon defect
	)
);

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

### Mean Confidence Interval

**Syntaxe :** obj << Mean Confidence Interval( state=0|1 )

**Description :** Affiche ou masque l&apos;intervalle de confiance pour les moyennes

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Mean Confidence Interval( 1 );

```

### Mean Score

**Syntaxe :** obj << Mean Score( state=0|1 )

**Description :** Affiche les scores de la moyenne, basés sur des codes numérique bruts ou des scores de valeur, dans la table croisée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Mean Score( 1 );

```

### Mean Score Comparisons

**Syntaxe :** obj << Mean Score Comparisons( state=0|1 )

**Description :** Compare les scores de la moyenne dans l&apos;ensemble des catégories de regroupement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Mean Score Comparisons( 1 );

```

### Mean Score Comparisons FDR

**Syntaxe :** obj << Mean Score Comparisons FDR( state=0|1 )

**Description :** Compare les scores de la moyenne dans l&apos;ensemble des catégories de regroupement.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Mean Score Comparisons FDR( 1 );

```

### Mean Score Comparisons as Suffix

**Syntaxe :** obj << Mean Score Comparisons as Suffix( state=0|1 )

**Description :** Compare les scores de la moyenne dans l&apos;ensemble des catégories de regroupement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Mean Score Comparisons Suffixed( 1 );

```

### Mean Std Error

**Syntaxe :** obj << Mean Std Error( state=0|1 )

**Description :** Affiche ou masque l&apos;erreur standard pour les moyennes

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Mean Std Error( 1 );

```

### Means Format

**Syntaxe :** obj << Means Format( format, <options> )

**Description :** Formate les scores des moyennes dans la table de données. La valeur par défaut est « Fixed », 6, 2.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Mean Score( 1 );
Wait( 1 );
obj << Means Format( "Fixed", 6, 4 );

```

### Multiple Delimited

**Syntaxe :** obj = Categorical(...Multiple Delimited( column )...)

<b>Élément lanceur : Oui</b>

**Description :** Résume les données d&apos;une variable à réponses multiples où les réponses sont dans une seule colonne avec chaque réponse séparée par une virgule, un point-virgule ou une tabulation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );
obj = dt << Categorical(
	Multiple Delimited( :failureS ),
	ID( :ID ),
	X( :clean, :date )
);

```

### Multiple Response

**Syntaxe :** obj = Categorical(...Multiple Response( columns )...)

<b>Élément lanceur : Oui</b>

**Description :** Résume les données d&apos;une variable à réponses multiples dont chaque réponse possible est enregistrée dans sa propre colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );
obj = dt << Categorical(
	X( :clean, :date ),
	Multiple Response( :Failure1, :Failure2, :Failure3 ),
	Frequency Chart( 0 )
);

```

### Multiple Response by ID

**Syntaxe :** obj = Categorical(...Multiple Response by ID( column )...)

<b>Élément lanceur : Oui</b>

**Description :** Résume les données d&apos;une variable à réponses multiples comprenant une seule colonne de réponses et une deuxième colonne contenant un ID pour le sujet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
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
preset = obj << New JSL Preset(
	Oneway( Y( :A ), X( :B ), Each Pair( 1 ) )
);
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

### Order Response Levels High to Low

**Syntaxe :** obj = Categorical(...Order Response Levels High to Low( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Réorganise le rapport de manière à ce que les catégories ayant les plus hautes valeurs se retrouvent au sommet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Order Response Levels High to Low( 1 ),
	Responses( :country )
);

```

### Order by Significance

**Syntaxe :** obj << Order by Significance( state=0|1 )

**Description :** Réorganise les rapports de manière à placer les plus significatifs au sommet.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Grouping Option( Each Individually ),
	X( :Age Group, :School Age Children ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Test Response Homogeneity( 1 )
);
obj << Order by Significance( 1 );

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

### Poisson

**Syntaxe :** obj << Poisson( state=0|1 )

**Description :** Effectue un test du khi-deux d’indépendance des taux en utilisant une régression de Poisson. Remarque : disponible uniquement pour les réponses multiples.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Count Test( 1 );

```

### Rate Confidence Interval

**Syntaxe :** obj << Rate Confidence Interval( state=0|1 )

**Description :** Affiche ou masque l&apos;intervalle de confiance pour la probabilité du taux. L&apos;intervalle de confiance est un intervalle normal qui utilise les erreurs standard du modèle linéaire de Poisson.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Gender ),
	Multiple Delimited( :Brush Delimited )
);
obj << Rate Confidence Interval( 1 );

```

### Rate Per Case

**Syntaxe :** obj << Rate Per Case( state=0|1 )

**Description :** Affiche ou masque la table Taux par cas dans le rapport. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date ),
	Rate Per Case( 0 )
);
Wait( 1 );
obj << Rate Per Case( 1 );

```

### Rate per Case Responding

**Syntaxe :** obj << Rate per Case Responding( state=0|1 )

**Description :** Affiche ou masque le taux de réponse par cas correspondant (données manquantes exclues).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case Responding( 1 );

```

### Rater Agreement

**Syntaxe :** obj = Categorical(...Rater Agreement( columns )...)

<b>Élément lanceur : Oui</b>

**Description :** Résume les données de plusieurs colonnes contenant les évaluations d&apos;une même question ou élément, données par différentes personnes (évaluateurs).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Rater Agreement( :First Survey, :Second Survey ),
	Freq( :Count )
);

```

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relative Risk

**Syntaxe :** obj << Relative Risk( state=0|1, {}, {level of interest} )

**Description :** Affiche ou masque les risques relatifs pour une variable de regroupement à deux niveaux pour chaque niveau de réponse. Disponible lorsque la variable de regroupement a deux niveaux ou est une réponse multiple et que l&apos;option Occurrences uniques dans l&apos;identifiant est sélectionnée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = dt << Categorical(
	Response Frequencies(
		:contamination, :corrosion, :doping, :metallization,
		:miscellaneous, :oxide defect, :silicon defect,
	),
	Sample Size( :SampleSize ),
	X( :clean )
);
obj << Relative Risk( 1, {}, {"after"} );

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
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
ColumnSwitcherObject = obj <<
Column Switcher( :marital status, {:sex, :country, :marital status} );
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
obj << Render Preset(
	Expr(
		Oneway( Y( :A ), X( :B ), Each Pair( 1 ) )
	)
);

```

### Repeated Measures

**Syntaxe :** obj = Categorical(...Repeated Measures( columns )...)

<b>Élément lanceur : Oui</b>

**Description :** Résume les données de plusieurs colonnes contenant les réponses aux mêmes questions à différents points temporels.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Repeated Measures( :First Survey, :Second Survey ),
	Freq( :Count )
);

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Report View( "Summary" );

```

### Response Frequencies

**Syntaxe :** obj = Categorical(...Response Frequencies( columns )...)

<b>Élément lanceur : Oui</b>

**Description :** Résume une variable à réponses multiples où la fréquence de chaque réponse possible est enregistrée dans sa propre colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = dt << Categorical(
	Response Frequencies(
		:contamination, :corrosion, :doping, :metallization,
		:miscellaneous, :oxide defect, :silicon defect
	),
	X( :clean, :date ),
	Sample Size( :SampleSize )
);

```

### Response Levels

**Syntaxe :** obj << Response Levels( state=0|1 )

**Description :** Affiche ou masque les niveaux de données pour chaque réponse. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Response Levels( 0 );
Wait( 1 );
obj << Response Levels( 1 );

```

### Responses

**Syntaxe :** obj = Categorical(...Responses( column )...)

<b>Élément lanceur : Oui</b>

**Description :** Résume les réponses d&apos;une seule colonne. Si plusieurs colonnes sont sélectionnées, le rapport catégoriel contient un rapport distinct pour chaque colonne individuelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);

```

### Sample Size

**Syntaxe :** obj << Sample Size( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Contingency Table

**Syntaxe :** obj << Save Contingency Table

**Description :** Enregistre les valeurs du tableau croisé dans une nouvelle table de données. La nouvelle table de données utilise les noms de colonne d&apos;origine.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :size )
);
obj << Save Contingency Table;

```

### Save DocX File

**Syntaxe :** obj << Save DocX File

**Description :** Undocumented and Experimental Feature

### Save Excel File

**Syntaxe :** obj << Save Excel File

**Description :** Enregistre les tables dans un fichier Excel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :size )
);
obj << Save Excel File(
	"$DOCUMENTS\ExcelCarSize.xlsx",
	Separate Rows for Each Cell Statistic( 1 )
);

```

### Save Frequencies

**Syntaxe :** obj << Save Frequencies

**Description :** Enregistre les fréquences dans une nouveau tableau.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Frequencies;

```

### Save Mean Scores

**Syntaxe :** obj << Save Mean Scores

**Description :** Enregistre les scores de la moyenne pour chaque groupe d&apos;échantillons dans une nouvelle table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :size )
);
obj << Save Mean Scores;

```

### Save Rate Per Case

**Syntaxe :** obj << Save Rate Per Case

**Description :** Enregistre le taux pas cas dans une nouvelle table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Rate Per Case;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Script to Data Table(
	"My Analysis", <<Prompt( 0 ), <<Replace( 0 )
);

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Script to Script Window;

```

### Save Share of Responses

**Syntaxe :** obj << Save Share of Responses

**Description :** Enregistre le partage des réponses dans un nouveau tableau.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Share of Responses;

```

### Save Stacked Table

**Syntaxe :** obj << Save Stacked Table

**Description :** Enregistre les valeurs du tableau croisé dans une nouvelle table de données. La nouvelle table de données utilise des noms de colonne généraux.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :size )
);
obj << Save Stacked Table;

```

### Save Test Homogeneity

**Syntaxe :** obj << Save Test Homogeneity

**Description :** Enregistre les résultats des tests d&apos;homogénéité dans une nouvelle table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Test Homogeneity;

```

### Save Test Rates

**Syntaxe :** obj << Save Test Rates

**Description :** Enregistre les résultats de l&apos;option Test des réponses multiples dans une nouvelle table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Test Rates;

```

### Save Transposed Frequencies

**Syntaxe :** obj << Save Transposed Frequencies

**Description :** Enregistre les fréquences transposées dans une nouvelle table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Transposed Frequencies;

```

### Save Transposed Rate Per Case

**Syntaxe :** obj << Save Transposed Rate Per Case

**Description :** Enregistre le taux transformé par cas transposé dans un nouveau tableau.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Transposed Rate Per Case;

```

### Save Transposed Share of Responses

**Syntaxe :** obj << Save Transposed Share of Responses

**Description :** Enregistre le partage des réponses transposé dans un nouveau tableau.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Save Transposed Share of Responses;

```

### Save tTests and pValues

**Syntaxe :** obj << Save tTests and pValues

**Description :** Enregistrez t tests et p-valeurs des tests Comparer les moyennes dans une nouvelle table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :size )
);
obj << Save ttests and pvalues;

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
		Continuous Distribution(
			Column( :weight ),
			Normal Quantile Plot( 1 )
		)
	),
	SendToByGroup(
		{:sex == "M"},
		Continuous Distribution( Column( :weight ) )
	)
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
			{1, Confidence Intervals( 0 ),
			Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
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
		Dispatch( "age", "Distrib Nom Hist", FrameBox,
			{Frame Size( 178, 318 )}
		)
	)
);

```

### Share Chart

**Syntaxe :** obj << Share Chart( state=0|1 )

**Description :** Affiche ou masque le graphique de partage dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Share Chart( 0 )
);
Wait( 1 );
obj << Share Chart( 1 );

```

### Share Confidence Interval

**Syntaxe :** obj << Share Confidence Interval( state=0|1 )

**Description :** Affiche ou masque l&apos;intervalle de confiance pour la probabilité de réponse de partage. L&apos;intervalle de confiance est construit à l&apos;aide de la méthode de test du score de Wilson.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career )
);
obj << Share Confidence Interval( 1 );

```

### Share Of Responses

**Syntaxe :** obj << Share Of Responses( state=0|1 )

**Description :** Affiche ou masque la table Partage des réponses dans le rapport. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Share of Responses( 0 )
);
Wait( 1 );
obj << Share of Responses( 1 );

```

### Shares and Rates Format

**Syntaxe :** obj << Shares and Rates Format( format, <options> )

**Description :** Formate les valeurs Partage, Taux, et Taux par réponse dans la table de données. La valeur par défaut est « pourcentage », 6, 1.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
Wait( 1 );
obj << Shares and Rates Format( "Percent", 7, 2 );

```

### Shorten Labels

**Syntaxe :** obj = Categorical(...Shorten Labels( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Raccourcit les étiquettes en supprimant les préfixes et les suffixes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Age Range",
	Numeric,
	"Continuous",
	Formula( :age > 12 ),
	Value Labels(
		{0 = "Age Range: Adolescent", 1 = "Age Range: Teenager"}
	)
);
obj = dt << Categorical( Responses( :Age Range ), Legend( 0 ) );
Wait( 2 );
obj << Shorten Labels( 1 );

```

### Show Columns Used in Report

**Syntaxe :** obj << Show Columns Used in Report( state=0|1 )

**Description :** Affiche ou masque les informations des colonnes utilisées dans le rapport. Cette option affecte uniquement les colonnes qui ont un nom SPSS ou SAS ou une propriété Colonne d&apos;étiquette SPSS ou SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
:country << Set Property(
	"SAS Label", "Country of Manufacture Origin"
);
obj = Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Show Columns Used in Report( 1 );

```

### Show Highlight Legend

**Syntaxe :** obj << Show Highlight Legend( state=0|1 )

**Description :** Actif par défaut.

### Show Supercategories

**Syntaxe :** obj << Show Supercategories( state=0|1 )

**Description :** Affiche ou masque les supercatégories. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Responses( :I like the color orange. ),
	Supercategories(
		:I like the color orange.(
			{Group(
				"Positive Response",
				{"Neutral", "Agree", "Strongly agree"}
			)}
		)
	),
	Legend( 0 )
);
obj << Show Supercategories( 0 );
Wait( 1 );
obj << Show Supercategories( 1 );

```

### Show Warnings

**Syntaxe :** obj << Show Warnings( state=0|1 )

**Description :** Affiche les avertissements des tests du khi deux associés aux échantillons de petite taille.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured(
		:I am working on my career, :Age Group * :Employee Tenure
	),
	Share Chart( 0 ),
	Test Response Homogeneity( 1 )
);
obj << Show Warnings( 1 );

```

### Std Dev Format

**Syntaxe :** obj << Std Dev Format( format, <options> )

**Description :** Formate les scores des écarts-types dans la table de données. La valeur par défaut est « Fixed », 6, 2.

**JMP Version ajoutée :** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Std Dev Score( 1 );
Wait( 1 );
obj << Std Dev Format( "Fixed", 6, 4 );

```

### Std Dev Score

**Syntaxe :** obj << Std Dev Score( state=0|1 )

**Description :** Affiche le score d&apos;écart-type, basé sur des codes numériques bruts ou des scores de valeur, dans la table croisée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Std Dev Score( 1 );

```

### Structured

**Syntaxe :** obj = Categorical(...Structured( Column * nestedColumn ... + rightColumn, sideColumn + lowerColumns...  )...)

<b>Élément lanceur : Oui</b>

**Description :** Génère une tabulation croisée structurée de deux variables ou plus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured(
		:Gender * :Age Group + :Position Tenure,
		:Job Satisfaction + :Salary Group
	)
);

```

### Supercategories

**Syntaxe :** obj << Supercategories( column, ({Group (name, {level1, level2, ... levelN})}) )

**Description :** Spécifie des supercatégories pour agréger localement les catégories de réponses.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Responses( :I like the color orange. ),
	Supercategories(
		:I like the color orange.(
			{Group(
				"Positive Response",
				{"Neutral", "Agree", "Strongly agree"}
			)}
		)
	),
	Legend( 0 )
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

### Test Response Homogeneity

**Syntaxe :** obj << Test Response Homogeneity( state=0|1 )

**Description :** Teste l&apos;homogénéité de la colonne de réponse, en effectuant à la fois les tests du khi deux de Pearson et du rapport de vraisemblance. Disponible uniquement pour une réponse unique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Test Response Homogeneity( 1 );

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Total Cases

**Syntaxe :** obj << Total Cases( state=0|1 )

**Description :** Pour les variables à réponses multiples, affiche le nombre total de cas dans la table croisée. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Multiple Response(
		:I like the color blue., :I like the color red.,
		:I like the color orange.
	)
);
obj << Total Cases( 0 );
Wait( 1 );
obj << Total Cases( 1 );

```

### Total Cases Responding

**Syntaxe :** obj << Total Cases Responding( state=0|1 )

**Description :** Pour les variables à réponses multiples, affiche le nombre total de cas ayant répondu au moins une fois dans la table croisée. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Multiple Response(
		:I like the color blue., :I like the color red.,
		:I like the color orange.
	)
);
obj << Total Cases Responding( 0 );
Wait( 1 );
obj << Total Cases Responding( 1 );

```

### Total Responses

**Syntaxe :** obj << Total Responses( state=0|1 )

**Description :** Affiche le nombre total de réponses dans la table croisée. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);
obj << Total Responses( 0 );
Wait( 1 );
obj << Total Responses( 1 );

```

### Totals First

**Syntaxe :** obj << Totals First( state=0|1 )

**Description :** Affiche les totaux de la réponse proche du haut ou de la gauche du tableau croisé, mais uniquement si les totaux sont identiques dans plusieurs tables dans chaque colonne.

### Transform Column

**Syntaxe :** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column(
		"age^2",
		Format( "Fixed Dec", 5, 0 ),
		Formula( :age * :age )
	),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Transition Report

**Syntaxe :** obj << Transition Report( state=0|1 )

**Description :** Affiche ou masque un rapport indiquant le changement des catégories dans le temps. Disponible uniquement pour le modèle Mesures répétées. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Repeated Measures( :First Survey, :Second Survey ),
	Freq( :Count )
);
obj << Transition Report( 1 );

```

### Transposed Freq Chart

**Syntaxe :** obj << Transposed Freq Chart( state=0|1 )

**Description :** Affiche ou masque un graphique de fréquence transposé qui contient une colonne pour chaque niveau de réponse et les lignes horizontales pour les différents niveaux d’échantillons.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :marital status ), Responses( :country ) );
obj << Transposed Freq Chart( 1 );

```

### Unique Occurrences within ID

**Syntaxe :** obj = Categorical(...Unique Occurrences within ID( state=0|1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Aligne les réponses multiples dans les lignes qui ont le même identifiant.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date ),
	Unique occurrences within ID( 1 ),
	Multiple Response by ID( :failure )
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

### Window View

**Syntaxe :** obj = Categorical(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### X

**Syntaxe :** obj << X( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country )
);

```

