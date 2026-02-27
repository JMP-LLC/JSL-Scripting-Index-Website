# Explore Outliers



## Colonnes

### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Columns

**Syntaxe :** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Label

**Syntaxe :** obj &lt;&lt; Label( column )

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Validation

**Syntaxe :** obj &lt;&lt; Validation( column )

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Y

**Syntaxe :** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## Constructeurs associés

### Explore Outliers

**Syntaxe :** Explore Outliers( Y( columns ) )

**Description :** Identifie, explore et gère les valeurs aberrantes dans les données univariées ou multivariées.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## Messages d'éléments

### K Nearest Neighbor Outliers

**Syntaxe :** obj &lt;&lt; K Nearest Neighbor Outliers

**Description :** Pour chaque point, trouve la distance du K plus proche voisin.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << k Nearest Neighbor Outliers( K( 5 ) );

```

### Multivariate k Nearest Neighbor Outliers

**Syntaxe :** obj &lt;&lt; Multivariate k Nearest Neighbor Outliers

**JMP Version ajoutée :** 14

### Quantile Range Outliers

**Syntaxe :** obj &lt;&lt; Quantile Range Outliers

**Description :** Trouve les valeurs correspondant à plus d&apos;un multiple codé d&apos;une étendue interquantile au-delà des quantiles.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;

```

### Robust Fit Outliers

**Syntaxe :** obj &lt;&lt; Robust Fit Outliers

**Description :** Trouve les valeurs correspondant à plus d&apos;un multiple du paramètre de dispersion et éloignées du paramètre de position à l&apos;aide des estimations robustes du paramètre de position et du paramètre de dispersion.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;

```

### Robust PCA Outliers

**Syntaxe :** obj &lt;&lt; Robust PCA Outliers

**Description :** Décompose de manière robuste les données en une matrice de rang faible et une matrice de résidus clairsemée. Les valeurs aberrantes sont détectées dans les résidus. Les valeurs manquantes peuvent également être imputées.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( 2 :: 10 ) );obj << Robust PCA Outliers;

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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Explore Outliers(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## K Nearest Neighbor Outliers

### Messages d'éléments

#### Close

**Syntaxe :** obj &lt;&lt; Close

**JMP Version ajoutée :** 16

#### Exclude Selected Rows

**Syntaxe :** obj &lt;&lt; Exclude Selected Rows

**JMP Version ajoutée :** 16

#### Impute Missing

**Syntaxe :** obj &lt;&lt; Impute Missing( state=0 )

**Description :** En cas de valeurs manquantes, ACP robuste est utilisé pour les imputer avant l&apos;analyse avec K plus proches voisins. Actif par défaut.

**JMP Version ajoutée :** 16

#### K

**Syntaxe :** obj &lt;&lt; K( number=8 )

**Description :** Le nombre de lignes de proche voisin à trouver pour chaque ligne de la table. "8" par défaut.

**JMP Version ajoutée :** 16

#### Save NN Distances

**Syntaxe :** obj &lt;&lt; Save NN Distances

**Description :** Enregistre les nouvelles colonnes dans la table de données contenant les distances jusqu&apos;au K plus proche voisin.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( 2 :: 10 ) );obj << k Nearest Neighbor Outliers( K( 4 ) );obj << Save NN Distances;

```

#### Scatterplot Matrix

**Syntaxe :** obj &lt;&lt; Scatterplot Matrix

**Description :** Ouvre une fenêtre contenant une matrice de nuages de points pour toutes les colonnes.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( 2 :: 10 ) );obj << k Nearest Neighbor Outliers( K( 4 ) );obj << Scatterplot Matrix;

```

## Multivariate Robust Outliers

### Messages d'éléments

#### Close

**Syntaxe :** obj &lt;&lt; Close

**JMP Version ajoutée :** 16

#### Exclude Selected Rows

**Syntaxe :** obj &lt;&lt; Exclude Selected Rows

**JMP Version ajoutée :** 16

## Quantile Range Outliers

### Messages d'éléments

#### Add Highest Nines to Missing Value Codes

**Syntaxe :** obj &lt;&lt; Add Highest Nines to Missing Value Codes( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments et trouve les neuf plus élevées dans chaque colonne. Crée une propriété Codes des valeurs manquantes pour ces valeurs, dans chaque colonne sélectionnée.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Responses" ) ),	Quantile Range Outliers( Show only columns with outliers( 1 ) ));obj << Add Highest Nines to Missing Value Codes( :PS_RPNBR );dt:PS_RPNBR << Get Column Properties;//See Log for Missing Value Codes column property

```

#### Add to Missing Value Codes

**Syntaxe :** obj &lt;&lt; Add to Missing Value Codes( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments et ajoute une propriété Code de valeur manquante pour les valeurs aberrantes de ces colonnes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Change Highest Nines to Missing

**Syntaxe :** obj &lt;&lt; Change Highest Nines to Missing( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments et trouve les neuf plus élevées parmi ces colonnes. Change les neuf plus élevées en manquantes. Noter que cela modifie la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Responses" ) ),	Quantile Range Outliers( Show only columns with outliers( 1 ) ));obj << Change Highest Nines to Missing( :PS_RPNBR );

```

#### Change to Missing

**Syntaxe :** obj &lt;&lt; Change to Missing( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments. Dans les colonnes sélectionnées, modifie les valeurs identifiées comme aberrantes en valeurs manquantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );Wait( 2 );obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**Syntaxe :** obj &lt;&lt; Close

**Description :** Supprime une section de l&apos;analyse et rouvre la structure de la commande.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Robust Fit Outliers;Wait( 2 );obj << Close;

```

#### Color Cells

**Syntaxe :** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments. Dans les colonnes sélectionnées, colore les cellules qui correspondent aux valeurs aberrantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**Syntaxe :** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments. Dans les colonnes sélectionnées, assigne l&apos;état de ligne Couleur aux lignes qui correspondent aux valeurs aberrantes.

**JMP Version ajoutée :** 16

#### Exclude Rows

**Syntaxe :** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments. Dans les colonnes sélectionnées, exclut les lignes contenant des valeurs identifiées comme aberrantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**Syntaxe :** obj &lt;&lt; Formula Columns( ALL or column1, column2, ... )

**Description :** Crée de nouvelles colonnes de formule à partir des colonnes sélectionnées en modifiant les valeurs aberrantes en valeurs manquantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );Wait( 2 );obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**Syntaxe :** obj &lt;&lt; Formula Script( ALL or column1, column2, ... )

**Description :** Crée un script pour créer de nouvelles colonnes de formule à partir des colonnes sélectionnées en modifiant les valeurs aberrantes en valeurs manquantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );Wait( 2 );obj << Formula Script( Suffix( "Culled" ) );

```

#### Get Quantile Outliers

**Syntaxe :** obj &lt;&lt; Get Quantile Outliers

**Description :** Renvoie une liste contenant une liste des colonnes qui contiennent des valeurs aberrantes et une liste des vecteurs qui contiennent des valeurs aberrantes dans ces colonnes.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Get Quantile Outliers;

```

#### Q

**Syntaxe :** obj &lt;&lt; Q( number=3 )

**Description :** Définit le multiple codé, Q, pour la distance interquantile. Les valeurs qui se trouvent à plus de Q fois la distance interquantile au-delà des quantiles de queue sont considérées comme des valeurs aberrantes. Utiliser Analyser à nouveau pour appliquer le paramètre. "3" par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Q( 4 ) );

```

#### Rescan

**Syntaxe :** obj &lt;&lt; Rescan

**Description :** À utiliser après avoir changé les paramètres pour recalculer les critères et analyser à nouveau les données pour obtenir les valeurs aberrantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Tail Quantile( 0.2 );obj << Rescan;

```

#### Restrict search to integers

**Syntaxe :** obj &lt;&lt; Restrict search to integers( state=0|1 )

**Description :** Restreint les valeurs aberrantes uniquement aux valeurs entières. Ce paramètre limite la recherche des valeurs aberrantes de sorte à trouver les codes des valeurs manquantes et les codes d&apos;erreur spécifiques à l&apos;industrie. Disponible pour les méthodes des valeurs aberrantes de l&apos;étendue des quantiles et des valeurs aberrantes de l&apos;ajustement robuste. Désactivé par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Quantile Range Outliers( Restrict search to integers( 1 ) ));

```

#### Save Quantile Outlier Limits

**Syntaxe :** obj &lt;&lt; Save Quantile Outlier Limits

**Description :** Ouvre une nouvelle table de données contenant les informations du rapport des valeurs aberrantes de l&apos;étendue des quantiles et une colonne des valeurs aberrantes.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers;obj << Save Quantile Outlier Limits;

```

#### Select Rows

**Syntaxe :** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments et les lignes qui ont des valeurs externes dans ces colonnes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

#### Show only columns with outliers

**Syntaxe :** obj &lt;&lt; Show only columns with outliers( state=0|1 )

**Description :** Limite la liste des colonnes dans le rapport pour celles contenant des valeurs aberrantes. Disponible pour les méthodes des valeurs aberrantes de l&apos;étendue des quantiles et des valeurs aberrantes de l&apos;ajustement robuste. Désactivé par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Quantile Range Outliers( Show only columns with outliers( 1 ) ));

```

#### Tail Quantile

**Syntaxe :** obj &lt;&lt; Tail Quantile( number=.10 )

**Description :** Définit la valeur du quantile pour chaque queue. Les quantiles sont utilisés dans le calcul de la distance interquantile. Utiliser Analyser à nouveau pour appliquer le paramètre. ".10" par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Quantile Range Outliers( Tail Quantile( 0.2 ) );

```

## Robust Fit Outliers

### Messages d'éléments

#### Add to Missing Value Codes

**Syntaxe :** obj &lt;&lt; Add to Missing Value Codes( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments et ajoute une propriété Code de valeur manquante pour les valeurs aberrantes de ces colonnes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Cauchy

**Syntaxe :** obj &lt;&lt; Cauchy( state=0|1 )

**Description :** Utilise une distribution de Cauchy pour estimer le paramètre de position  et de dispersion robustes des valeurs. Le paramètre de position  et de dispersion robustes sont utilisés pour déterminer les valeurs aberrantes.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << Cauchy( 1 );obj << Rescan;

```

#### Change to Missing

**Syntaxe :** obj &lt;&lt; Change to Missing( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments. Dans les colonnes sélectionnées, modifie les valeurs identifiées comme aberrantes en valeurs manquantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );Wait( 2 );obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**Syntaxe :** obj &lt;&lt; Close

**Description :** Supprime une section de l&apos;analyse et rouvre la structure de la commande.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;Wait( 2 );obj << Close;

```

#### Color Cells

**Syntaxe :** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments. Dans les colonnes sélectionnées, colore les cellules qui correspondent aux valeurs aberrantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**Syntaxe :** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments. Dans les colonnes sélectionnées, assigne l&apos;état de ligne Couleur aux lignes qui correspondent aux valeurs aberrantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );dt << Clear Row States;obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Color Rows( :"Q-E"n, :"ZN-E"n );

```

#### Exclude Rows

**Syntaxe :** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments. Dans les colonnes sélectionnées, exclut les lignes contenant des valeurs identifiées comme aberrantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**Syntaxe :** obj &lt;&lt; Formula Columns( ALL or column1, column2, ... )

**Description :** Crée de nouvelles colonnes de formule à partir des colonnes sélectionnées en modifiant les valeurs aberrantes en valeurs manquantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );Wait( 2 );obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**Syntaxe :** obj &lt;&lt; Formula Script( ALL or column1, column2, ... )

**Description :** Crée un script pour créer de nouvelles colonnes de formule à partir des colonnes sélectionnées en modifiant les valeurs aberrantes en valeurs manquantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );Wait( 2 );obj << Formula Script( Suffix( "Culled" ) );

```

#### Huber

**Syntaxe :** obj &lt;&lt; Huber( state=0|1 )

**Description :** Utilise l&apos;estimation de Huber pour estimer le paramètre de position  et de dispersion robustes des valeurs. Le paramètre de position  et de dispersion robustes sont utilisés pour déterminer les valeurs aberrantes.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << Huber( 1 );obj << Rescan;

```

#### K Sigma

**Syntaxe :** obj &lt;&lt; K Sigma( number=4 )

**Description :** Définit la valeur K sigma lorsque les valeurs aberrantes sont définies comme étant éloignées du paramètre de position robuste de K fois les valeurs du paramètre de dispersion robuste. "4" par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << K Sigma( 3 );obj << Rescan;

```

#### Quartile

**Syntaxe :** obj &lt;&lt; Quartile( state=0|1 )

**Description :** Utilise la médiane pour estimer le paramètre de position robuste et l&apos;intervalle interquartile divisé par 1,349 pour estimer le paramètre de dispersion robuste. Le paramètre de position  et de dispersion robustes sont utilisés pour déterminer les valeurs aberrantes.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << Quartile( 1 );obj << Rescan;

```

#### Rescan

**Syntaxe :** obj &lt;&lt; Rescan

**Description :** À utiliser après avoir changé les paramètres pour recalculer les critères et analyser à nouveau les données pour obtenir les valeurs aberrantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << K Sigma( 2.5 );obj << Rescan;

```

#### Save Robust Outlier Limits

**Syntaxe :** obj &lt;&lt; Save Robust Outlier Limits

**Description :** Ouvre une nouvelle table de données contenant les informations du rapport Estimations et valeurs aberrantes robustes.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers;obj << Save Robust Outlier Limits;

```

#### Select Rows

**Syntaxe :** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**Description :** Sélectionne les colonnes répertoriées comme arguments et les lignes qui ont des valeurs externes dans ces colonnes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );obj << Robust Fit Outliers( K Sigma( 2 ) );obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

## Robust PCA Outliers

### Messages d'éléments

#### Center

**Syntaxe :** obj &lt;&lt; Center( state=1 )

**Description :** Spécifie si les données doivent être centrées ou non par la médiane avant l&apos;analyse. Actif par défaut.

**JMP Version ajoutée :** 16

#### Close

**Syntaxe :** obj &lt;&lt; Close

**Description :** Supprime l&apos;analyse RPCA du rapport de la plate-forme.

**JMP Version ajoutée :** 16

#### Lambda

**Syntaxe :** obj &lt;&lt; Lambda( number )

**Description :** Tuning de l’ACP robuste doté de valeurs inférieures, plus sensible aux valeurs aberrantes indicatives. Par défaut, Lambda=2/sqrt(max(nRow,nCol))

**JMP Version ajoutée :** 16

#### MaxIt

**Syntaxe :** obj &lt;&lt; MaxIt( number )

**Description :** Le nombre maximum d&apos;itérations SVD autorisées avant échec de convergence.

**JMP Version ajoutée :** 16

#### Outlier Threshold

**Syntaxe :** obj &lt;&lt; Outlier Threshold( number=2 )

**Description :** Spécifie que les résidus mis à l&apos;échelle dont la valeur absolue est supérieure au seuil donné s&apos;affichent comme dans le rapport de valeurs aberrantes. "2" par défaut.

**JMP Version ajoutée :** 16

#### Randomized SVD Dim

**Syntaxe :** obj &lt;&lt; Randomized SVD Dim( state=0|1 )

**Description :** Spécifie le nombre de dimensions dans le SVD randomisé à laquelle réduire le grand problème.

**JMP Version ajoutée :** 17

#### Save Cleaned

**Syntaxe :** obj &lt;&lt; Save Cleaned( Trim(&lt;threshold&gt;),Impute(&lt;threshold&gt;),Make Missing(&lt;threshold&gt;),Color Impute(0|1)--if none specified it will prompt with dialog )

**Description :** Crée un nouvel ensemble de colonnes contenant les valeurs manquantes imputées et les valeurs aberrantes modifiées. Trim(arg) trouve les résidus mis à l&apos;échelle supérieurs à arg et remplace les résidus mis à l&apos;échelle dans les cellules correspondantes par l&apos;arg signé. Impute(arg) trouve les résidus mis à l&apos;échelle supérieurs à arg et remplace les résidus mis à l&apos;échelle dans les cellules correspondantes par l&apos;approximation de rang faible. Make Missing(valeur) trouve les résidus mis à l&apos;échelle supérieurs à arg et change les résidus mis à l&apos;échelle dans les cellules correspondantes en valeurs manquantes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Cleaned( Trim( 25 ), Impute( 50 ), Make Missing( 100 ) );

```

#### Save Large Outliers

**Syntaxe :** obj &lt;&lt; Save Large Outliers

**Description :** Crée une nouvelle table de données contenant les valeurs aberrantes du rapport.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Large Outliers;

```

#### Save Low Rank Approx

**Syntaxe :** obj &lt;&lt; Save Low Rank Approx

**Description :** Crée un nouvel ensemble de colonnes contenant l&apos;approximation de rang faible, qui est obtenue à partir de la décomposition en valeurs singulières.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Low Rank Approx;

```

#### Save Residuals

**Syntaxe :** obj &lt;&lt; Save Residuals

**Description :** Crée un nouvel ensemble de colonnes contenant les résidus, qui sont les observations moins l&apos;approximation de rang faible.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Residuals;

```

#### Save Scaled Residuals

**Syntaxe :** obj &lt;&lt; Save Scaled Residuals

**Description :** Crée un nouvel ensemble de colonnes contenant les résidus, qui sont les observations moins l&apos;approximation de rang faible.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers(	Y( Column Group( "Sensor Measurements" ) ),	Robust PCA Outliers);obj << Save Scaled Residuals;

```

#### Scale

**Syntaxe :** obj &lt;&lt; Scale( state=1 )

**Description :** Spécifie si les données doivent être mises à l&apos;échelle ou non par une étendue interquantile analogue à l&apos;écart-type avant l&apos;analyse. Actif par défaut.

**JMP Version ajoutée :** 16

#### Tolerance

**Syntaxe :** obj &lt;&lt; Tolerance( number )

**Description :** Spécifie le critère de convergence, qui détermine quand arrêter l&apos;algorithme. Les valeurs par défaut du critère de convergence sont définies en fonction du nombre de colonnes spécifié au lancement.

**JMP Version ajoutée :** 16

#### Use Randomized SVD

**Syntaxe :** obj &lt;&lt; Use Randomized SVD( state=0|1 )

**Description :** Réduit la dimensionnalité en utilisant le SVD randomisé. Cette approche peut accélérer les calculs pour les très grands problèmes.

**JMP Version ajoutée :** 17

