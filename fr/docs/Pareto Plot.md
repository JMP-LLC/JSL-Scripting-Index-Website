# Pareto Plot



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

### Alias

**Syntaxe :** obj << Alias( cause, alias )

**Description :** Définit un nom différent pour une cause.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Alias( "doping", "substitution" )
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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bar Label Format

**Syntaxe :** obj << Bar Label Format

**Description :** Définit le format des étiquettes des barres de Pareto.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Label( 1 ),
	Bar Label Format( "Currency", "USD", Use thousands separator( 0 ), 12, 0 )
);

```

### Bar Style

**Syntaxe :** obj << Bar Style( "Barre"|"Flottant" )

**Description :** Contrôle l&apos;affichage des barres de Pareto.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Bar Style( Float );

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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );

```

### Cause

**Syntaxe :** obj << Cause( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );

```

### Cause Colors

**Syntaxe :** obj << Cause Colors( { { causeName, color },  ...} )

**Description :** Change la couleur des barres spécifiées.

**JMP Version ajoutée :** 17

**Couleur RVB unique**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 )
);
obj << Cause Colors( {117, 150, 200} );

```

**Liste de couleurs uniques**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 )
);
obj << Cause Colors( {"corrosion", "Light Gray"} );

```

**Liste des couleurs multiples**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 )
);
obj << Cause Colors( {{"miscellaneous", "Purple"}, {"silicon defect", "Red"}} );

```

**Toutes les couleurs**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 )
);
obj << Cause Colors( "Orange" );

```

### Cause Labels

**Syntaxe :** obj << Cause Labels( { { causeName, 0|1 },  ...} )

**Description :** Affiche le dénombrement dans une étiquette pour les barres spécifiées.

**JMP Version ajoutée :** 17

**Cause unique**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Cause Labels( {"contamination", 1} )
);

```

**Liste de causes**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Cause Labels( {{"contamination", 1}, {"oxide defect", 1}} )
);

```

**Toutes les causes**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Cause Labels( 1 ) );

```

### Cause Markers

**Syntaxe :** obj << Cause Markers( { { causeName, marker },  ...} )

**Description :** Change le marqueur de pourcentage cumulé indiqué sur le graphique pour les barres spécifiées.

**JMP Version ajoutée :** 17

**Cause unique**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 )
);
obj << Cause Markers( {"silicon defect", "Diamond"} );

```

**Liste de causes**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 )
);
obj << Cause Markers( {{"miscellaneous", "Square"}, {"silicon defect", "Diamond"}} );

```

**Toutes les causes**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 )
);
obj << Cause Markers( 1 );

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

### Combine Causes

**Syntaxe :** obj << Combine Causes( {cause1, cause2, ... } | << First(N) | << Last(N), <label> )

**Description :** Combine les causes spécifiées en une seule cause. Les causes peuvent être spécifiées comme une liste de noms de causes ou en envoyant le message Premier ou Dernier avec un nombre de causes à combiner. Une étiquette facultative peut être spécifiée pour la cause combinée.

**Aucune étiquette**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
Wait( 2 );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );

```

**Envoyer dernier**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Combine Causes( <<Last( 2 ), "Last 2" )
);

```

**Étiqueté(e)**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Others" )
);

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Copy Script;

```

### Cum Line Connect Style

**Syntaxe :** obj << Cum Line Connect Style( "Droite"|"Courbe"|"Pas" )

**Description :** Contrôle le style de connexion de la ligne de pourcentage cumulatif.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Cum Line Connect Style( "Step" );

```

### Cum Percent Curve Color

**Syntaxe :** obj << Cum Percent Curve Color( color )

**Description :** Change la couleur de la courbe des pourcentages cumulés sur le graphique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Cum Percent Curve Color( "Red" );

```

### Cum Percent Label Format

**Syntaxe :** obj << Cum Percent Label Format

**Description :** Définit le format des étiquettes de marqueur du pourcentage cumulatif.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Label Cum Percent Points( 1 ),
	Cum Percent Label Format( "Percent", 12, 1 )
);

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Data Table Window;

```

### Freq

**Syntaxe :** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Freq( _freqcol )
);
obj << Show Pareto Bars( 0 );

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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Causes

**Syntaxe :** obj << Get Causes( <"First" | "Last" | "First %" | "Last %", number> )

**Description :** Renvoie une liste des noms de cause à partir du graphique de Pareto dans l&apos;ordre actuel d&apos;apparence. Si aucune option n&apos;est fournie, toutes les causes sont renvoyées. Sinon, il utilise le mot-clé et le nombre pour renvoyer les N premiers, les N derniers, les premiers N pour cent ou les derniers N pour cent.

**JMP Version ajoutée :** 17

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes( "First", 3 );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes( "Last %", 10 );

```

**Exemple 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot(
	Cause( :Causes ),
	Freq( :Count ),
	Combine Causes( {"Corrosion", "Metallization", "Doping"}, "3 Others" ),
	Move to Last( {"3 Others"} )
);
obj << Get Causes( "Last", 3 );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
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

### Group Settings

**Syntaxe :** obj << Group Settings( Column, <Levels In View( number )>, <Start Level( number ), <Show Title (0|1)>, <Title Color( color )>, <Levels Color( color )> )

**Description :** Contrôle l&apos;apparence du Pareto groupé

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Group Settings(
		:clean,
		Levels In View( 1 ),
		Start Level( 1 ),
		Title Color( "Blue" ),
		Levels Color( "Light Blue" )
	)
);

```

### Grouping

**Syntaxe :** obj << Grouping( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );

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

### Label Cum Percent Points

**Syntaxe :** obj << Label Cum Percent Points( state=0|1 )

**Description :** Affiche ou masque les étiquettes indiquant les pourcentages cumulés pour chaque barre du graphique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Label Cum Percent Points( 1 );

```

### Legend Position

**Syntaxe :** obj << Legend Position( ("Right" | "Bottom" | "Left" | "Top") )

**Description :** Définit la position de la légende.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Legend Position( "Bottom" );

```

### Legend Settings

**Syntaxe :** obj << Legend Settings

**Description :** Ouvre une boîte de dialogue permettant de modifier les propriétés de la légende.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
Wait( 1 );
obj << Legend Settings();

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

### Move to First

**Syntaxe :** obj << Move to First( {level1, level2, ...} | << First(N) | << Last(N) )

**Description :** Déplace la ou les barres de manière à ce que le ou les niveaux spécifiés apparaissent en premier. Les niveaux peuvent être spécifiés comme une liste de noms de causes ou en envoyant le message Premier ou Dernier avec un nombre de causes à combiner.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Move to First( {"corrosion", "doping"} );

```

### Move to Last

**Syntaxe :** obj << Move to Last( {level1, level2, ...} | << First(N) | << Last(N) )

**Description :** Déplace la ou les barres de manière à ce que le ou les niveaux spécifiés apparaissent en dernier. Les niveaux peuvent être spécifiés comme une liste de noms de causes ou en envoyant le message Premier ou Dernier avec un nombre de causes à combiner.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Move to Last( {"miscellaneous"} );

```

### N Legend

**Syntaxe :** obj << N Legend( state=0|1 )

**Description :** Affiche la taille totale de l&apos;échantillon dans la zone du graphique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << N Legend( 1 );

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

### No Plot

**Syntaxe :** obj << No Plot( state=0|1 )

**Description :** Ferme le nœud de contour du diagramme de Pareto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ), Per Unit Rates( 1 ) );
obj << No Plot( 1 );

```

### Orientation

**Syntaxe :** obj << Orientation( "Vertical"|"Horizontal" )

**Description :** Contrôle l&apos;orientation du graphique de Pareto.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Orientation( "Horizontal" );

```

### Pareto Line Connect Style

**Syntaxe :** obj << Pareto Line Connect Style( "Droite"|"Courbe"|"Pas" )

**Description :** Contrôle le style de connexion de la ligne de Pareto.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Show Pareto Bars( 0 )
);
obj << Pareto Line Connect Style( "Step" );

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

### Per Unit Rates

**Syntaxe :** obj << Per Unit Rates( state=0|1 )

**Description :** Compare les taux de défaut entre les groupes. Si une taille d&apos;échantillon est précisée, les colonnes Défauts par unité (DPU) et Parties par million (PPM) sont ajoutées au rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot(
	Cause( :Causes ),
	Per Unit Analysis( Constant( Sample Size( 1000 ) ) ),
	Freq( :Count )
);
obj << Per Unit Rates( 1 );

```

### Percent Scale

**Syntaxe :** obj << Percent Scale( state=0|1 )

**Description :** Affiche l&apos;axe vertical de gauche sous forme d&apos;une échelle de pourcentage.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Percent Scale( 1 );

```

### Pie Chart

**Syntaxe :** obj << Pie Chart( state=0|1 )

**Description :** Affiche les barres sous la forme d&apos;un diagramme en secteurs.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Pie Chart( 1 );

```

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
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

### Reorder Horizontal

**Syntaxe :** obj << Reorder Horizontal( level1, level2, ... )

**Description :** Réarrange horizontalement les diagrammes de Pareto groupés lorsqu&apos;il y a deux groupes ou plus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
Wait( 2 );
obj << Reorder Horizontal( "before", "after" );

```

### Reorder Vertical

**Syntaxe :** obj << Reorder Vertical( level1, level2, ... )

**Description :** Réarrange verticalement les diagrammes de Pareto groupés lorsqu&apos;il y a deux variables ou plus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
Wait( 2 );
obj << Reorder Vertical( "Process B", "Process A" );

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Save Script to Script Window;

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

### Separate Causes

**Syntaxe :** obj << Separate Causes

**Description :** Sépare les causes combinées dans des barres distinctes.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );
Wait( 2 );
obj << Separate Causes;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Combine Causes(
	{"miscellaneous", "silicon defect", "doping"},
	"Other Causes"
);
Wait( 2 );
obj << Separate Causes( "Other Causes" );

```

### Show Cum Percent Axis

**Syntaxe :** obj << Show Cum Percent Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe des pourcentages cumulés situé à droite du graphique. Remarque : uniquement disponible sur le graphique le plus à droite en présence d&apos;une variable X ou de groupement. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Cum Percent Axis( 1 );

```

### Show Cum Percent Curve

**Syntaxe :** obj << Show Cum Percent Curve( state=0|1 )

**Description :** Affiche ou masque la courbe des pourcentages cumulés. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Cum Percent Curve( 1 );

```

### Show Cum Percent Points

**Syntaxe :** obj << Show Cum Percent Points( state=0|1 )

**Description :** Affiche ou masque les valeurs des pourcentages cumulés sur le graphique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Show Cum Percent Points( 1 );

```

### Show Error Bars

**Syntaxe :** obj << Show Error Bars( state=0|1 )

**Description :** Affiche ou masque les barres d&apos;erreur sur les barres de Pareto pour la plage de confiance.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Error Bars( 1 );

```

### Show Pareto Bars

**Syntaxe :** obj << Show Pareto Bars( state=0|1 )

**Description :** Affiche ou masque les barres d&apos;affichage de la valeur pour chaque cause. Actif par défaut.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );

```

### Show Pareto Line

**Syntaxe :** obj << Show Pareto Line( state=0|1 )

**Description :** Affiche ou masque une ligne reliant les valeurs pour chaque cause.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Pareto Line( 1 );

```

### Show Pareto Markers

**Syntaxe :** obj << Show Pareto Markers( state=0|1 )

**Description :** Affiche ou masque les marqueurs à la valeur de chaque cause.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Pareto Markers( 1 );

```

### Subcategory

**Syntaxe :** obj << Subcategory( column )

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );

```

### Subcategory Bar Style

**Syntaxe :** obj << Subcategory Bar Style( "Côte à côte"|"Empilé"|"Puce"|"Imbriqué"|"Unique"|"Bâton"|"Flottant" )

**Description :** Contrôle l&apos;affichage des barres lorsqu&apos;une sous-catégorie est présente.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

### Subset

**Syntaxe :** obj << Subset

**Description :** Crée une table extraite à partir des sélections dans le graphique de Pareto

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
dt << Select Where( :Causes == "Corrosion" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Subset;

```

### Swap Group Orientation

**Syntaxe :** obj << Swap Group Orientation( state=0|1 )

**Description :** Échange les groupes horizontaux et verticaux. S&apos;il n&apos;y a qu&apos;un seul groupe, change l&apos;orientation de l&apos;affichage.

**JMP Version ajoutée :** 17

**Deux groupes**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
Wait( 2 );
obj << Swap Group Orientation( true );

```

**Un groupe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );
Wait( 2 );
obj << Swap Group Orientation( true );

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

### Synchronize Y Axes

**Syntaxe :** obj << Synchronize Y Axes( state=0|1 )

**Description :** Verrouille l&apos;axe Y de droite de manière à zoomer et dézoomer en synchronisation avec l&apos;axe Y de gauche. Actif par défaut.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Synchronize Y Axes( 0 );

```

### Tables Match Plot

**Syntaxe :** obj << Tables Match Plot( {<Per Unit Rates( 0|1 )>, <Test Rate Within Groups( 0|1 )>, <Test Rates Across Groups( 0|1 )>} )

**Description :** Contrôle si les tables de données d&apos;analyse de dénombrement affichent les valeurs de la cause combinée appariées au graphique de Pareto ou les causes d&apos;origine combinées. Une valeur de 1 affichera les valeurs de la cause combinée. Une valeur de 0 affichera les valeurs combinées. Toutes les tables ne doivent pas être spécifiées dans la commande.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Per Unit Rates( 1 ),
	Test Rate Within Groups( 1 ),
	Test Rates Across Groups( 1 ),
	Combine Causes( {"silicon defect", "oxide defect", "doping"}, "3 Others" ),
	Move to Last( {"corrosion", "miscellaneous", "3 Others"} )
);
obj << Tables Match Plot(
	{Per Unit Rates( 1 ), Test Rate Within Groups( 1 ), Test Rates Across Groups( 1 )
	}
);

```

### Test Rate Within Groups

**Syntaxe :** obj << Test Rate Within Groups( state=0|1 )

**Description :** Réalise un test du rapport de vraisemblance au sein des groupes, examinant si les causes ont les mêmes taux dans les groupes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );
obj << Test Rate Within Groups( 1 );

```

### Test Rates Across Groups

**Syntaxe :** obj << Test Rates Across Groups( state=0|1 )

**Description :** Réalise un test du rapport de vraisemblance entre les groupes, examinant si les causes ont les mêmes taux entre les groupes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
obj << Test Rates Across Groups( 1 );

```

### Threshold of Combined Causes

**Syntaxe :** obj << Threshold of Combined Causes

**Description :** Combine les causes qui se trouvent au-dessous du seuil. Cela se produit au lancement initial de la plate-forme.

**Dénombrement**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Threshold of Combined Causes( Count( 5 ) )
);

```

**Extrémité %**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Threshold of Combined Causes( Tail %( 25 ) )
);

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );
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

### Ungroup Plots

**Syntaxe :** obj << Ungroup Plots( state=0|1 )

**Description :** Sépare les diagrammes de Pareto groupés lorsqu&apos;il y a deux groupes ou plus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
Wait( 2 );
obj << Ungroup Plots( 1 );

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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Weight( _weightcol )
);
obj << Show Pareto Bars( 0 );

```

### Window View

**Syntaxe :** obj = Show Pareto Bars(...Window View( "Visible"|"Invisible"|"Private" )...)

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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );

```

### Y

**Syntaxe :** obj << Y( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 )
);
obj << Show Pareto Bars( 0 );

```

