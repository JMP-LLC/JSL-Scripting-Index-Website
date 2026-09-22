# Cumulative Damage



## Constructeurs associés

### Cumulative Damage

**Syntaxe :** Cumulative Damage

**Description :** Analyse les modèles à contrainte variable et à contrainte échelonnée.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));

```

## Messages d'éléments

### Fit All

**Syntaxe :** obj &lt;&lt; Fit All

**Description :** Ajuste toutes les distributions disponibles.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ),	Fit All);

```

### Get Results

**Syntaxe :** obj &lt;&lt; Get Results

**Description :** Obtient les résultats disponibles en tant qu&apos;objets JSL.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ), );obj << Get Results;

```

### Model Type

**Syntaxe :** obj &lt;&lt; Model Type( Step Stress | Ramp Stress | Sinusoid Stress | Piecewise Ramp Stress )

**Description :** Spécifie le type de modèle de contrainte pour le modèle de dommages cumulés. Cette option doit être spécifiée dans le script de lancement.

```jsl

/*See sample scripts in the following data tables.*/Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Ramp Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Sinusoid Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Piecewise Ramp Stress.jmp" );

```

### Simulate

**Syntaxe :** obj &lt;&lt; Simulate

**Description :** Affiche ou masque le panneau Configuration de la simulation.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ),	Simulate);

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

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Timing;Show( t );

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

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Relaunch Analysis;

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

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script to Script Window;

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

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

