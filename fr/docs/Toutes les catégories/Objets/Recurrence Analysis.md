# Recurrence Analysis



## Colonnes

### Age

**Syntaxe :** obj &lt;&lt; Age( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Cause

**Syntaxe :** obj &lt;&lt; Cause( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Cost

**Syntaxe :** obj &lt;&lt; Cost( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Event Timestamp

**Syntaxe :** obj &lt;&lt; Event Timestamp( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Failure Mode

**Syntaxe :** obj &lt;&lt; Failure Mode( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Grouping

**Syntaxe :** obj &lt;&lt; Grouping( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Label

**Syntaxe :** obj &lt;&lt; Label( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### System ID

**Syntaxe :** obj &lt;&lt; System ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Timestamp at End

**Syntaxe :** obj &lt;&lt; Timestamp at End( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Timestamp at Start

**Syntaxe :** obj &lt;&lt; Timestamp at Start( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Y

**Syntaxe :** obj &lt;&lt; Y( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

## Constructeurs associés

### Recurrence Analysis

**Syntaxe :** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), &lt;Grouping( column )&gt; )

**Description :** Analyse la distribution dans le temps d’un événement récurrent jusqu’à la mise hors service du système.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

## Messages d'éléments

### Calendar Event Plot

**Syntaxe :** obj &lt;&lt; Calendar Event Plot( state=0|1 )

**Description :** Affiche ou masque un graphique des événements en fonction du temps, plutôt qu&apos;en fonction de l&apos;âge.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Diesel Ship Engines.jmp" );obj = dt << Recurrence Analysis(	Y( :event time ),	Label( :System ID ),	Grouping( :System ID ),	Timestamp at Start( :orig time ),	Timestamp at End( :end time ));obj << Calendar Event Plot( 1 );

```

### Event Plot

**Syntaxe :** obj &lt;&lt; Event Plot( state=0|1 )

**Description :** Affiche ou masque le graphique d&apos;événements.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	Event Plot( 0 ));Wait( 1 );obj << Event Plot( 1 );

```

### Fit Model

**Syntaxe :** obj &lt;&lt; Fit Model

**Description :** Vous permet d&apos;ajuster des modèles pour la fonction cumulée et la fonction d&apos;intensité de récurrence.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	Event Plot( 0 ));obj << Fit Model;

```

### MCF Confid Limits

**Syntaxe :** obj &lt;&lt; MCF Confid Limits( state=0|1 )

**Description :** Sur le graphique de la fonction cumulée moyenne (MCF), affiche ou masque des lignes qui correspondent aux bornes de l&apos;intervalle de confiance à 95 % approximatives de la fonction MCF.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	Event Plot( 0 ));obj << MCF Confid Limits( 1 );

```

### MCF Plot

**Syntaxe :** obj &lt;&lt; MCF Plot( state=0|1 )

**Description :** Affiche ou masque le graphique de la fonction cumulée moyenne (MCF). Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	Event Plot( 0 ),	MCF Plot( 0 ));Wait( 1 );obj << MCF Plot( 1 );

```

### MCF Plot Each Group

**Syntaxe :** obj &lt;&lt; MCF Plot Each Group( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient un graphique de la fonction cumulée moyenne (MCF) pour chaque niveau de la variable de groupement. Cette option est disponible uniquement lorsque vous spécifiez une variable de groupement.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	Event Plot( 0 ));obj << MCF Plot Each Group( 1 );

```

### Plot Interarrival by Age

**Syntaxe :** obj &lt;&lt; Plot Interarrival by Age( state=0|1 )

**Description :** Affiche ou masque un graphique temporel depuis le dernier événement et en fonction de l&apos;âge de l&apos;événement actuel.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Diesel Ship Engines.jmp" );obj = dt << Recurrence Analysis(	Y( :event time ),	Label( :System ID ),	Grouping( :System ID ),	Timestamp at Start( :orig time ),	Timestamp at End( :end time ));obj << Plot Interarrival by Age( 1 );

```

### Plot MCF Differences

**Syntaxe :** obj &lt;&lt; Plot MCF Differences( state=0|1 )

**Description :** Affiche ou masque un graphique pour chaque différence des fonctions cumulées moyennes (MCF), qui comprend l&apos;intervalle de confiance à 95 % pour cette différence. Cette option est disponible uniquement lorsque vous spécifiez une variable de groupement.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	Event Plot( 0 ));obj << Plot MCF Differences( 1 );

```

### Save MCF Differences

**Syntaxe :** obj &lt;&lt; Save MCF Differences( &lt;Last&gt; )

**Description :** Crée une table de données qui contient les différences de la fonction cumulée moyenne (MCF) pour chaque niveau de la variable de groupement. L&apos;argument facultatif indique que seule la dernière ligne de chaque différence est enregistrée dans la nouvelle table de données. Cette option est disponible uniquement lorsque vous spécifiez une variable de groupement.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	Event Plot( 0 ));obj << Save MCF Differences;obj << Save MCF Differences( Last );

```

### Show MCF Legend

**Syntaxe :** obj &lt;&lt; Show MCF Legend( state=0|1 )

**Description :** Affiche ou masque la légende du graphique de la fonction cumulée moyenne (MCF). Cette option est disponible uniquement lorsque vous spécifiez une variable de groupement. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	Event Plot( 0 ),	Show MCF Legend( 0 ));Wait( 1 );obj << Show MCF Legend( 1 );

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

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntaxe :** obj = Recurrence Analysis(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

