# Attribute Chart



## Conformance Report

### Calculate Escape Rate

**Syntaxe :** obj << Calculate Escape Rate( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient le taux d’échappement basé sur la probabilité de non-conformité donnée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Probability of Nonconformance( 0.1 )
);
obj << Calculate Escape Rate( 1 );

```

### Change Conforming Category

**Syntaxe :** obj << Change Conforming Category( state=0|1 )

**Description :** Spécifie la catégorie utilisée comme identificateur de conformité.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Change Conforming Category( 1 );

```

### Probability of Nonconformance

**Syntaxe :** Attribute Chart( Probability of Nonconformance( probability ) )

**Description :** Définit la probabilité de non-conformité pour un usage ultérieur dans les calculs de taux de fuite.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Probability of Nonconformance( 0.1 )
);
obj << Calculate Escape Rate( 1 );

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

### Agreement by Rater Confid Intervals

**Syntaxe :** obj << Agreement by Rater Confid Intervals( state=0|1 )

**Description :** Affiche ou masque des intervalles de confiance concernant les pourcentages de concordance des cellules sur le graphique d&apos;efficacité. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
Wait( 2 );
obj << Agreement by Rater Confid Intervals( 0 );

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

### Attribute Chart

**Syntaxe :** Attribute Chart( Y( columns ), X( columns ) )

**Description :** Analyse les mesures catégorielles pour vous donner les mesures de la concordance entre les réponses, les évaluateurs notamment.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);

```

### Attribute Gauge Charts

**Syntaxe :** obj << Attribute Gauge Charts( state=0|1 )

**Description :** Affiche ou masque la carte des systèmes de mesure aux attributs. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
Wait( 2 );
obj << Attribute Gauge Charts( 0 );

```

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
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

**Syntaxe :** obj = Attribute Chart(...<By( column(s) )>...)

<b>Élément lanceur : Oui</b>

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);

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

### Connect Agreement Points

**Syntaxe :** obj << Connect Agreement Points( state=0|1 )

**Description :** Affiche ou masque une ligne reliant les moyennes des cellules dans un groupe de cellules, à la fois sur la carte des systèmes de mesure aux attributs et sur le graphique d&apos;efficacité. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
Wait( 2 );
obj << Connect Agreement Points( 0 );

```

### Connect Effectiveness Points

**Syntaxe :** obj << Connect Effectiveness Points( state=0|1 )

**Description :** Affiche ou masque une ligne rouge reliant les valeurs de la concordance des pourcentages entre l&apos;évaluateur et l&apos;étalon, à la fois sur la carte des systèmes de mesure aux attributs et sur le graphique d&apos;efficacité.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Connect Effectiveness Points( 1 );

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Data Table Window;

```

### Effectiveness Report

**Syntaxe :** obj << Effectiveness Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les dénombrements de concordance, l&apos;efficacité, les erreurs de classification et la conformité. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
Wait( 2 );
obj << Effectiveness Report( 0 );

```

### Effectiveness by Rater Confid Intervals

**Syntaxe :** obj << Effectiveness by Rater Confid Intervals( state=0|1 )

**Description :** Affiche ou masque les intervalles de confiance pour les pourcentages d&apos;efficacité des cellules sur le graphique d&apos;efficacité.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Effectiveness by Rater Confid Intervals( 1 );

```

### Freq

**Syntaxe :** obj = Attribute Chart(...<Freq( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
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
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
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
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
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
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
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
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
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

### Grouping

**Syntaxe :** obj = Attribute Chart(...Grouping( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les colonnes de classification qui regroupent les scores, généralement des pièces.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
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
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
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

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
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
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Report View( "Summary" );

```

### Response

**Syntaxe :** obj = Attribute Chart(...Response( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les colonnes de scores donnés par chaque évaluateur.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Effectiveness Report( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Response( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Effectiveness Report( 1 );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
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
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
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

### Show Agreement Grand Mean

**Syntaxe :** obj << Show Agreement Grand Mean( state=0|1 )

**Description :** Affiche ou masque une ligne à la valeur de la concordance des pourcentages globale sur la carte des systèmes de mesure aux attributs. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
Wait( 2 );
obj << Show Agreement Grand Mean( 0 );

```

### Show Agreement Group Means

**Syntaxe :** obj << Show Agreement Group Means( state=0|1 )

**Description :** Affiche ou masque une ligne à la valeur de la concordance des pourcentages au sein des groupes sur la carte des systèmes de mesure aux attributs. Cette option requiert plus d&apos;une variable de groupement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
dt << New Column( "Group", formula( Sequence( 1, 3, 1, 50 ) ) );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Group, :Part ),
	Standard( :Standard )
);
obj << Show Agreement Group Means( 1 );

```

### Show Agreement Points

**Syntaxe :** obj << Show Agreement Points( state=0|1 )

**Description :** Affiche ou masque les points de concordance sur la carte des systèmes de mesure aux attributs et sur le graphique d&apos;efficacité. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
Wait( 2 );
obj << Show Agreement Points( 0 );

```

### Show Effectiveness Points

**Syntaxe :** obj << Show Effectiveness Points( state=0|1 )

**Description :** Affiche ou masque les points d&apos;efficacité sur la carte des systèmes de mesure aux attributs et sur le graphique d&apos;efficacité.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Show Effectiveness Points( 1 );

```

### Standard

**Syntaxe :** obj = Attribute Chart(...<Standard( column )>...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie une colonne de référence qui contient les valeurs connues pour chaque niveau (pièce) de la variable de regroupement.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
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
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
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
	Transform Column(
		"age^2",
		Format( "Fixed Dec", 5, 0 ),
		Formula( :age * :age )
	),
	Continuous Distribution( Column( :"age^2"n ) )
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

**Syntaxe :** obj = Attribute Chart(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Syntaxe :** obj = Attribute Chart(...X( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les colonnes de classification qui regroupent les scores, généralement des pièces.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);

```

### Y

**Syntaxe :** obj = Attribute Chart(...Y( column(s) )...)

<b>Élément lanceur : Oui</b>

**Description :** Spécifie les colonnes de scores donnés par chaque évaluateur.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Effectiveness Report( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart(
	Response( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard )
);
obj << Effectiveness Report( 1 );

```

