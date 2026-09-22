# Marker Admixture



## Colonnes

### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Pour chaque niveau de la colonne spécifiée, analyse et présente les résultats dans des tables et des rapports distincts.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );	//Run platformdt << Marker Admixture( Marker( Column Group( "Markers" ) ), By( :Sex ), Fit );

```

### Label

**Syntaxe :** obj &lt;&lt; Label( column )

**Description :** Spécifie une colonne qui contient une étiquette pour chaque échantillon.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Run platformdt << Marker Admixture( Marker( Column Group( "Markers" ) ), Label( :Sex ), Fit );

```

### Marker

**Syntaxe :** obj &lt;&lt; Marker( column(s) )

**Description :** Spécifie les colonnes qui contiennent des marqueurs génétiques.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Run platformdt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Sample ID( :SampleID ),	Label( :Sex ),	Fit);

```

### Sample ID

**Syntaxe :** obj &lt;&lt; Sample ID( column )

**Description :** Spécifie une colonne qui contient un identifiant unique pour chaque échantillon.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Set up ID Columndt << New Column( "SampleID",	Character,	"Nominal",	Formula( Char( :Pedigree ) || Char( :Sample ) ));//Run platformdt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Sample ID( :SampleID ),	Label( :Sex ),	Fit);

```

## Constructeurs associés

### Marker Admixture

**Syntaxe :** Marker Admixture( Marker( columns ) )

**Description :** Calcule une estimation du mélange de population pour les individus en fonction des génotypes de marqueur.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(		Missing Marker Imputation Method( "Specified" ),		Estimation Method( "Fixed Parameter" ),		Unthreaded( 1 ),		Imputation Value( 1 ),		Number of Ancestral Populations( 3 )	),	Fit(		Missing Marker Imputation Method( "Specified" ),		Estimation Method( "Fixed Parameter" ),		Unthreaded( 1 ),		Imputation Value( 1 ),		Number of Ancestral Populations( 3 )	));

```

## Messages d'éléments

### Compare

**Syntaxe :** obj &lt;&lt; Compare

**Description :** Met à jour les métriques de comparaison du mélange de marqueurs.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit,	Fit( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) ),	Set( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) ));obj << Compare( LogLikehood( 0 ) );

```

### Fit

**Syntaxe :** obj &lt;&lt; Fit

**Description :** Ajuste un modèle de mélange de marqueurs. Vous pouvez spécifier les paramètres et les spécifications d&apos;ajustement dans la commande.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit(		Estimation Method( "Fixed Parameter" ),		Number of Ancestral Populations( 3 ),		Unthreaded( 1 ),		Missing Marker Imputation Method( "Specified" ),		Imputation Value( 1 )	));

```

### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**JMP Version ajoutée :** 19

### Set

**Syntaxe :** obj &lt;&lt; Set

**Description :** Spécifie les paramètres pour un modèle de mélange de marqueurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(		Estimation Method( "Fixed Parameter" ),		Number of Ancestral Populations( 3 ),		Unthreaded( 1 ),		Missing Marker Imputation Method( "Specified" ),		Imputation Value( 1 )	));

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(),	Fit(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(),	Fit(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(),	Fit(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(),	Fit(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(),	Fit(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(),	Fit(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(),	Fit(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntaxe :** obj = Marker Admixture(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Marker Admixture Compare

### Constructeurs associés

#### Marker Admixture Compare

**Syntaxe :** Marker Admixture Compare

### Messages d'éléments

#### Hide All Models

**Syntaxe :** obj &lt;&lt; Hide All Models

**Description :** Masque tous les modèles.

**JMP Version ajoutée :** 19

#### Iterations

**Syntaxe :** obj &lt;&lt; Iterations( state=0|1 )

**Description :** Affiche ou masque le nombre d&apos;itérations au moment où l&apos;algorithme de factorisation s&apos;est arrêté. Actif par défaut.

**JMP Version ajoutée :** 19

#### Log Likelihood

**Syntaxe :** obj &lt;&lt; Log Likelihood( state=0|1 )

**Description :** Affiche ou masque le logarithme négatif de la fonction basée sur la vraisemblance. Actif par défaut.

**JMP Version ajoutée :** 19

#### Number of Ancestral Populations

**Syntaxe :** obj &lt;&lt; Number of Ancestral Populations( state=0|1 )

**Description :** Affiche ou masque le nombre de populations ancestrales. Actif par défaut.

**JMP Version ajoutée :** 19

#### Predictors

**Syntaxe :** obj &lt;&lt; Predictors( state=0|1 )

**Description :** Affiche ou masque la colonne Régresseurs. Actif par défaut.

**JMP Version ajoutée :** 19

#### Remove Hidden Models

**Syntaxe :** obj &lt;&lt; Remove Hidden Models

**Description :** Supprime tous les modèles dont la case Afficher est décochée.

**JMP Version ajoutée :** 19

#### Remove Shown Models

**Syntaxe :** obj &lt;&lt; Remove Shown Models

**Description :** Supprime tous les modèles pour lesquels la case Afficher est cochée et affiche les modèles restants.

**JMP Version ajoutée :** 19

#### Show All Models

**Syntaxe :** obj &lt;&lt; Show All Models

**Description :** Affiche tous les modèles.

**JMP Version ajoutée :** 19

#### Tolerance

**Syntaxe :** obj &lt;&lt; Tolerance( state=0|1 )

**Description :** Affiche ou masque la valeur de tolérance (RMSE du mélange d&apos;individus estimé) au moment où l&apos;algorithme de factorisation s&apos;est arrêté. Actif par défaut.

**JMP Version ajoutée :** 19

## Marker Admixture Fit

### Constructeurs associés

#### Marker Admixture Fit

**Syntaxe :** Marker Admixture Fit

### Messages d'éléments

#### Cluster Individuals

**Syntaxe :** obj &lt;&lt; Cluster Individuals( state=0|1 )

**Description :** Regroupe les individus en cluster en fonction de leurs probabilités de mélange de population ancestrale estimées.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );Wait( 2 );obj << (Fit[1] << Cluster Individuals( 1 ));

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit( Cluster Individuals( 1 ) ));

```

#### Cluster Markers

**Syntaxe :** obj &lt;&lt; Cluster Markers( state=0|1 )

**Description :** Regroupe les marqueurs en fonction des fréquences de leur allèle de référence estimées sur chaque population ancestrale.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );Wait( 2 );obj << (Fit[1] << Cluster Markers( 1 ));

```

#### Copy Parameters to Launch

**Syntaxe :** obj &lt;&lt; Copy Parameters to Launch

**Description :** Copie les paramètres de ce modèle dans la section de lancement de modèle.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );Wait( 2 );obj << (Fit[1] << Copy Parameters to Launch());

```

#### Estimation Method

**Syntaxe :** obj = Marker Admixture Fit(...Estimation Method( "Point de stabilité"|"Paramètre fixé"="Point de stabilité" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la méthode d&apos;estimation du nombre de populations ancestrales. "Point de stabilité" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit(		Estimation Method( "Fixed Parameter" ),		Number of Ancestral Populations( 3 ),		Unthreaded( 1 ),		Missing Marker Imputation Method( "Specified" ),		Imputation Value( 1 )	));

```

#### Imputation Value

**Syntaxe :** obj = Marker Admixture Fit(...Imputation Value( number=0 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie un nombre entier allant de zéro à la ploïdie pour le remplacement des scores de marqueur manquants. "0" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit(		Set Random Seed( 12345 ),		Missing Marker Imputation Method( "HWE On" ),		Imputation Value( 1 )	));

```

#### Missing Marker Imputation Method

**Syntaxe :** obj = Marker Admixture Fit(...Missing Marker Imputation Method( "HWE désactivé"|"HWE activé"|"Aléatoire"|"Spécifiée"="HWE désactivé" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie un des quatre types de méthodes d&apos;imputation des marqueurs manquants. "HWE désactivé" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit(		Set Random Seed( 12345 ),		Missing Marker Imputation Method( "HWE On" ),		Imputation Value( 1 )	));

```

#### Number of Ancestral Populations

**Syntaxe :** obj = Marker Admixture Fit(...Number of Ancestral Populations( number=2 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie le nombre de populations ancestrales. "2" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit(		Estimation Method( "Fixed Parameter" ),		Number of Ancestral Populations( 3 ),		Unthreaded( 1 )	));

```

#### Order Populations Method

**Syntaxe :** obj = Marker Admixture Fit(...Order Populations Method( "Mélange moyen"|"Variance expliquée"="Mélange moyen" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la méthode de tri des colonnes de la matrice P (m x d, où m est le nombre de marqueurs génétiques et d est le nombre de populations ancestrales) et des lignes de la matrice Q (d x n, où n est le nombre d&apos;échantillons). "Mélange moyen" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit(		Estimation Method( "Fixed Parameter" ),		Order Populations Method( "Variance Explained" ),		Number of Ancestral Populations( 3 )	),	Set(		Estimation Method( "Fixed Parameter" ),		Order Populations Method( "Variance Explained" ),		Number of Ancestral Populations( 3 )	));

```

#### Parallel Plot for Individuals

**Syntaxe :** obj &lt;&lt; Parallel Plot for Individuals( state=0|1 )

**Description :** Crée un graphique de superposition de tous les individus en fonction de leurs probabilités de mélange de population ancestrale.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );Wait( 2 );obj << (Fit[1] << Parallel Plot for Individuals( 1 ));

```

#### Parallel Plot for Markers

**Syntaxe :** obj &lt;&lt; Parallel Plot for Markers( state=0|1 )

**Description :** Crée un graphique de superposition de tous les marqueurs en fonction des fréquences de leur allèle de référence estimées sur chaque population ancestrale.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );Wait( 2 );obj << (Fit[1] << Parallel Plot for Markers( 1 ));

```

#### Remove All But This Fit

**Syntaxe :** obj &lt;&lt; ( Fit[number] &lt;&lt; Remove All But This Fit( state=0|1 ) )

**Description :** Supprime les rapports et graphiques de tous les modèles, sauf le présent modèle.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit,	Fit( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) ),	Set( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) ));Wait( 2 );obj << (Fit[2] << Remove All But This Fit( 1 ));

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; ( Fit[number] &lt;&lt; Remove Fit( state=0|1 ) )

**Description :** Supprime le rapport du modèle tout entier.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit(		Set Random Seed( 12345 ),		Missing Marker Imputation Method( "HWE On" ),		Imputation Value( 1 )	));Wait( 2 );obj << (Fit[1] << Remove Fit( 1 ));

```

#### Save F Table

**Syntaxe :** obj &lt;&lt; Save F Table

**Description :** Enregistre le produit de matrices P fois Q dans une table de données.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );Wait( 2 );obj << (Fit[1] << Save F Table());

```

#### Save P Table

**Syntaxe :** obj &lt;&lt; Save P Table

**Description :** Enregistre la fréquence estimée de l&apos;allèle de référence (P) pour chaque marqueur génétique dans une table de données.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );Wait( 2 );obj << (Fit[1] << Save P Table());

```

#### Save Q Table

**Syntaxe :** obj &lt;&lt; Save Q Table

**Description :** Enregistre les probabilités de mélange estimées (Q) des populations ancestrales pour chaque échantillon dans une table de données.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );Wait( 2 );obj << (Fit[1] << Save Q Table());

```

#### Set Random Seed

**Syntaxe :** obj = Marker Admixture Fit(...Set Random Seed( number=0 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définit une valeur spécifique pour la graine aléatoire en assurant ainsi que toutes les exécutions successives utilisant la même graine aléatoire sont reproductibles. "0" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit(		Set Random Seed( 12345 ),		Missing Marker Imputation Method( "HWE On" ),		Imputation Value( 1 )	));

```

#### Unthreaded

**Syntaxe :** obj = Marker Admixture Fit(...Unthreaded( state=0 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Utiliser uniquement le Thread principal pour les calculs "0" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Fit(		Estimation Method( "Fixed Parameter" ),		Number of Ancestral Populations( 3 ),		Unthreaded( 1 )	));

```

