# Fit Model



## Fit Causal Treatment

### Constructeurs associés

#### Fit Causal Treatment

**Syntaxe :** Fit Model( Y( columns ), &lt;Effects( columns )&gt;, Treatment( column ), Personality( "Causal Treatment" ) )

**Description :** Ajuste des modèles pour un traitement de causalité où les ajustements sont effectués pour la probabilité d&apos;un traitement.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);

```

### Messages d'éléments

#### Fit

**Syntaxe :** Fit Model(...Run( Fit( options ) )...); obj &lt;&lt; Fit( options ); obj &lt;&lt; (Fit[number] &lt;&lt; option)

**Description :** Vous permet d&apos;envoyer des messages à la plate-forme. Cette option peut être utilisée dans un script de lancement du modèle ou pour générer un handle vers un modèle spécifique dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run( Fit ));

```

#### Go

**Syntaxe :** obj &lt;&lt; Go

**Description :** Vous permet de modifier certaines valeurs de paramètres et d&apos;exécuter à nouveau l&apos;analyse. Cette option est disponible uniquement pour les modèles IPWR et AIPW.

**JMP Version ajoutée :** 19

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);fm << Model Dialog;

```

#### Show Tips and Interpretations

**Syntaxe :** obj &lt;&lt; Show Tips and Interpretations( state=0|1 )

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);fm << Show Tips and Interpretations;

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Treatment( :Treatment ),	Effects( :Age, :Diag Time ),	Treatment Effects( :Age, :Diag Time, :Cell Type ),	Personality( "Causal Treatment" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Causal Treatment(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Generalized Linear Model

### Constructeurs associés

#### Generalized Linear Model

**Syntaxe :** Fit Model( Y( column ), Effects( columns ), Personality( "Generalized Linear Model" ), GLM Distribution( distribution name ), Link Function( link type ) )

**Description :** Ajuste un modèle linéaire généralisé à l&apos;aide de plusieurs fonctions de distribution et de lien. Les modèles incluent la régression logistique, Poisson et la régression exponentielle.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

### Messages d'éléments

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur d&apos;isoréponses, qui affiche la représentation graphique des isoréponses de la réponse pour deux facteurs en même temps.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Contour Profiler( 1 );

```

#### Contrast

**Syntaxe :** obj &lt;&lt; (effect name &lt;&lt; Contrast( [l1 l2 l3 ...] ))

**Description :** Exécute un test F personnalisé pour les contrastes statistiques des niveaux de traitement pour un effet dans le modèle. Spécifiez chaque contraste comme vecteur de ligne. Remarque : spécifiez le nom de l&apos;effet en tant que chaîne.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Overdispersion Tests and Intervals( 0 ),	"Firth Bias-Adjusted Estimates"n( 0 ),	Run);obj << ("color" << Contrast( [1 0 -0.5 -0.5] ));

```

#### Correlation of Estimates

**Syntaxe :** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Description :** Pour l&apos;ajustement spécifié, affiche ou masque la matrice des corrélations entre les estimateurs des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Binomial" ),	Link Function( "Logit" ),	Run);obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**Syntaxe :** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**Description :** Pour l&apos;ajustement spécifié, affiche ou masque la matrice des covariances entre les estimateurs des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Covariance of Estimates( 1 );

```

#### Custom Test

**Syntaxe :** obj &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; )

**Description :** Lance un test F personnalisé qui compare les différents effets dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Overdispersion Tests and Intervals( 0 ),	"Firth Bias-Adjusted Estimates"n( 0 ),	Run);obj << Custom Test( [0 .5 0 0 0 0 0 .5 -1], Label( "Test 1" ) );

```

#### Deviance Residuals

**Syntaxe :** obj &lt;&lt; Deviance Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus de la déviance.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Deviance Residuals;

```

#### Deviance Residuals by Predicted

**Syntaxe :** obj &lt;&lt; Deviance Residuals by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique des résidus de la déviance sur l&apos;axe vertical et les valeurs de réponse prédites sur l&apos;axe horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Deviance Residuals by Predicted( 1 );

```

#### Effect Summary

**Syntaxe :** obj &lt;&lt; Effect Summary( state=0|1 )

**Description :** Affiche ou masque le rapport Résumé des effets, qui vous permet de mettre à jour les effets dans le modèle de manière interactive. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntaxe :** obj &lt;&lt; FDR( state=0|1 )

**Description :** Indique si les valeurs logworth et leurs p-values correspondantes dans la table Résumé des effets sont ajustées en utilisant le taux de fausses découvertes (FDR).

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Firth Bias-Adjusted Estimates

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie que la méthode de correction du biais de Firth est utilisée pour ajuster le modèle. Disponible uniquement pour la méthode du Modèle linéaire généralisé.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	"Firth Bias-Adjusted Estimates"n( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### GLM Distribution

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie une distribution des probabilités pour la variable de réponse. Disponible uniquement pour la méthode du Modèle linéaire généralisé.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Binomial" ),	Link Function( "Logit" ),	Run);

```

#### Inverse Prediction

**Syntaxe :** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description :** Génère une valeur prévue X et un intervalle de confiance en se basant sur les valeurs de Y et sur tous les autres facteurs spécifiés.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Overdispersion Tests and Intervals( 0 ),	"Firth Bias-Adjusted Estimates"n( 0 ),	Run);// Exactly one term value must be set to missing.obj << Inverse Prediction(	Response( 5, 6 ),	Term Value(		color( "Dark" ),		spine( "Both Good" ),		width( 26.2988439306358 ),		weight( . )	));

```

#### Linear Predictor Plot

**Syntaxe :** obj &lt;&lt; Linear Predictor Plot( state=0|1 )

**Description :** Affiche ou masque un graphique des réponses transformées par la fonction de lien inverse sur l&apos;axe vertical et le prédicteur continu sur l&apos;axe horizontal. Disponible uniquement si un prédicteur continu et au plus un prédicteur catégoriel sont présents.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :weight, :color ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run());obj << Linear Predictor Plot( 1 );

```

#### Link Function

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la fonction de lien pour le modèle. Disponible uniquement pour la méthode du Modèle linéaire généralisé.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Mean Confidence Interval

**Syntaxe :** obj &lt;&lt; Mean Confidence Interval

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les bornes de l&apos;intervalle de confiance à 95 % pour l&apos;équation de prédiction du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Mean Confidence Interval;

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Model Dialog;

```

#### Overdispersion Tests and Intervals

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie qu&apos;un paramètre d&apos;hyperdispersion doit être inclus dans le modèle. Disponible uniquement pour la méthode du Modèle linéaire généralisé.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	Overdispersion Tests and Intervals( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Pearson Residuals

**Syntaxe :** obj &lt;&lt; Pearson Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus de Pearson.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Pearson Residuals;

```

#### Pearson Residuals by Predicted

**Syntaxe :** obj &lt;&lt; Pearson Residuals by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique des résidus de Pearson sur l&apos;axe vertical et les valeurs de réponse prédites sur l&apos;axe horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Pearson Residuals by Predicted( 1 );

```

#### Power Link Parameter

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie le paramètre pour la fonction de lien de puissance. Disponible uniquement lorsque la fonction de lien spécifiée est Puissance dans la méthode du Modèle linéaire généralisé. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	Overdispersion Tests and Intervals( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Power" ),	Power Link Parameter( 0.5 ),	Run);

```

#### Predicted Values

**Syntaxe :** obj &lt;&lt; Predicted Values

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs prédites par le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Predicted Values;

```

#### Prediction Formula

**Syntaxe :** obj &lt;&lt; Prediction Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule pour les valeurs prédites de la moyenne, telles que calculées par le modèle spécifié.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntaxe :** obj &lt;&lt; Prediction and Interval Formulas

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les colonnes contiennent les formules pour les prévisions et les intervalles de confiance. Les colonnes de limites créées par cette option contiennent des propriétés utilisées par le profileur de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Prediction and Interval Formulas;

```

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Binomial" ),	Link Function( "Logit" ),	Run);obj << Profiler( 1 );

```

#### Regression Plot

**Syntaxe :** obj &lt;&lt; Regression Plot( state=0|1 )

**Description :** Affiche ou masque un graphique de la réponse sur l&apos;axe vertical et le prédicteur continu sur l&apos;axe horizontal. Disponible uniquement si un prédicteur continu et au plus un prédicteur catégoriel sont présents. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :weight, :color ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run( Regression Plot( 0 ) ));Wait( 1 );obj << Regression Plot( 1 );

```

#### Save Indiv Confid Limits

**Syntaxe :** obj &lt;&lt; Save Indiv Confid Limits

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les bornes de l&apos;intervalle de confiance à 95 % pour une valeur individuelle donnée du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Indiv Confid Limits;

```

#### Studentized Deviance Residuals

**Syntaxe :** obj &lt;&lt; Studentized Deviance Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus de la déviance de Student.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Studentized Deviance Residuals;

```

#### Studentized Deviance Residuals by Predicted

**Syntaxe :** obj &lt;&lt; Studentized Deviance Residuals by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique des résidus de la déviance de Student sur l&apos;axe vertical et les valeurs de réponse prédites sur l&apos;axe horizontal. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run( Studentized Deviance Residuals by Predicted( 0 ) ));Wait( 1 );obj << Studentized Deviance Residuals by Predicted( 1 );

```

#### Studentized Pearson Residuals

**Syntaxe :** obj &lt;&lt; Studentized Pearson Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus studentisés de Pearson.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Studentized Pearson Residuals;

```

#### Studentized Pearson Residuals by Predicted

**Syntaxe :** obj &lt;&lt; Studentized Pearson Residuals by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique des résidus studentisés de Pearson sur l&apos;axe vertical et les valeurs de réponse prédites sur l&apos;axe horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Studentized Pearson Residuals by Predicted( 1 );

```

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description :** Affiche ou masque une surface de réponse interactive pour la réponse.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Surface Profiler( 1 );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Generalized Linear Model(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Least Squares > Effect Fit > Control Differences Chart

### Messages d'éléments

#### Point Options

**Syntaxe :** scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Description :** Permet de spécifier le style de dessin des points dans le graphique. Vous pouvez choisir bâtons verticaux, points connectés ou points seuls. Par défaut, le graphique est dessiné avec des bâtons qui connectent les points à la ligne horizontale dessinée à la moyenne.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1, Point Options( "Show Only Points" ) )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Point Options( "Show Connected Points" );

```

#### Show Center Line

**Syntaxe :** scrobj &lt;&lt; Show Center Line( state=0|1 )

**Description :** Affiche ou masque la ligne centrale (grande moyenne) sur la carte des différences avec le niveau de contrôle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1, Show Center Line( 0 ) )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Syntaxe :** scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de décision sur la carte des différences avec le niveau de contrôle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1, Show Decision Limit Shading( 0 ) )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Syntaxe :** scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Description :** Affiche ou masque les lignes représentant les limites de décision sur la carte des différences avec le niveau de contrôle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1, Show Decision Limits( 0 ) )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Syntaxe :** scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient les moyennes du groupe et les limites de décision.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 1 )		)}	));Wait( 1 );scrobj = (Report( obj )["Control Differences"] << get scriptable object);scrobj << Show Summary Report( 1 );

```

## Fit Least Squares > Effect Fit

### Messages d'éléments

#### LSMeans Contrast

**Syntaxe :** scrobj &lt;&lt; LSMeans Contrast( [ l1, l2, l3, ... ] ); obj &lt;&lt; ( effect &lt;&lt; {LSMeans Contrast( [ l1, l2, l3, ... ] )} )

**Description :** Exécute un test F personnalisé pour les contrastes statistiques de différents niveaux d&apos;un effet.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 1 );obj << (:Drug << {LSMeans Contrast( [1 0 -1] )});

```

#### LSMeans Dunnett

**Syntaxe :** scrobj &lt;&lt; LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; ); obj &lt;&lt; ( effect &lt;&lt; {LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; )} )

**Description :** Affiche ou masque les tests et intervalles de confiance pour les comparaisons par paire par rapport au niveau de contrôle spécifié.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);obj << (:Drug << {LSMeans Dunnett( 1, Control Level( "a" ) )});

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);obj << (:Drug << {LSMeans Dunnett( .01, Control Level( "a" ) )});

```

#### LSMeans Plot

**Syntaxe :** scrobj &lt;&lt; LSMeans Plot; obj &lt;&lt; ( effect &lt;&lt; {LSMeans Plot} )

**Description :** Affiche des graphiques de moyennes des moindres carrés pour les effets nominaux et ordinaux. Si l&apos;effet est une interaction, cette option affiche la fenêtre Options du graphique des moyennes des moindres carrés.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 1 );obj << (:Drug << {LSMeans Plot});

```

#### LSMeans Student's t

**Syntaxe :** scrobj &lt;&lt; Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; ); obj &lt;&lt; ( effect &lt;&lt; {Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**Description :** Affiche ou masque les tests et intervalles de confiance pour les comparaisons par paire des moyennes des moindres carrés à l&apos;aide de tests t de Student.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);obj << (:Drug << {LSMeans Student's t( 1 )});

```

#### LSMeans Table

**Syntaxe :** scrobj &lt;&lt; LSMeans Table( state=0|1 ); obj &lt;&lt; ( effect &lt;&lt; {LSMeans Table( state=0|1 )} )

**Description :** Affiche ou masque une table de données des statistiques comparées lorsque des effets sont testés. Cette option n&apos;est pas disponible pour les effets continus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Table( 0 )} ));Wait( 1 );obj << (:Drug << {LSMeans Table( 1 )});

```

#### LSMeans Tukey HSD

**Syntaxe :** scrobj &lt;&lt; LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; ); obj &lt;&lt; ( effect &lt;&lt; {LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**Description :** Affiche ou masque les tests et intervalles de confiance pour les comparaisons par paire des moyennes des moindres carrés à l&apos;aide du test HSD (différences honnêtement significatives) de Tukey-Kramer.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);obj << (:Drug << {LSMeans Tukey HSD( 1 )});

```

#### Power Analysis

**Syntaxe :** scrobj &lt;&lt; Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;); obj &lt;&lt; ( effect &lt;&lt; {Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;)} )

**Description :** Affiche le rapport Détails de la puissance, qui vous permet d&apos;analyser la puissance pour le test d&apos;effet.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 1 );obj << (:Drug << {Power Analysis(	Alpha( 0.05 ),	Sigma( 4.00577754367453 ),	Delta( 1.51166255719209 ),	Number( 10, 100, 10 ),	Solve for Power,	Power Plot,	Done)});

```

#### Test Slices

**Syntaxe :** scrobj &lt;&lt; Test Slices( state=0|1 ); obj &lt;&lt; ( response &lt;&lt; { effect1 * effect2 &lt;&lt; {Test Slices( state=0|1 )} } )

**Description :** Exécute un test F personnalisé pour chaque niveau des deux facteurs dans un terme d&apos;interaction. Cette option n&apos;est disponible que pour les interactions qui impliquent des effets nominaux et ordinaux.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Model(	Y( :height ),	Effects( :age, :sex, :age * :sex ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 1 );obj << (:height << {:age * :sex << {Test Slices( 1 )}});

```

## Fit Least Squares > LSMeans Comparisons

### Messages d'éléments

#### Connecting Letters Report

**Syntaxe :** scrobj &lt;&lt; Connecting Letters Report( state=0|1 )

**Description :** Affiche ou masque les comparaisons significatives et non-significatives avec les lettres de connexion. Les niveaux qui ne sont pas connectés par la même lettre sont significativement différents. Les niveaux qui sont connectés par la même lettre ne sont pas significativement différents. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Tukey HSD( 1, Connecting Letters Report( 0 ) )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);scrobj << Connecting Letters Report( 1 );

```

#### Control Differences Chart

**Syntaxe :** scrobj &lt;&lt; Control Differences Chart( state=0|1 )

**Description :** Shows or hides a chart that contains a point for each level of the effect other than the control. Each point shows the least squares mean for that level in relation to the least squares mean for the control level. Upper decision limits (UDL) and lower decision limits (LDL) are plotted.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Chart( 0 )		)}	));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);scrobj << Control Differences Chart( 1 );

```

#### Control Differences Report

**Syntaxe :** scrobj &lt;&lt; Control Differences Report( state=0|1 )

**Description :** Affiche ou masque une table de données qui contient une ligne pour chaque niveau de l&apos;effet autre que le contrôle. Chaque ligne contient le niveau comparé au niveau de contrôle, la différence estimée, l&apos;erreur standard de la différence, un intervalle de confiance, et la p-value pour la comparaison. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run(		:Drug << {LSMeans Dunnett(			.05,			Control Level( "a" ),			Control Differences Report( 0 )		)}	));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);scrobj << Control Differences Report( 1 );

```

#### Crosstab Report

**Syntaxe :** scrobj &lt;&lt; Crosstab Report( state=0|1 )

**Description :** Affiche ou masque un rapport de tableau croisé qui contient les différences dans chaque combinaison de moyenne des moindres carrés, d&apos;erreur standard de la différence et de bornes de l&apos;intervalle de confiance pour la différence. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Student's t( 1, Crosstab Report( 0 ) )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);scrobj << Crosstab Report( 1 );

```

#### Detailed Comparisons

**Syntaxe :** scrobj &lt;&lt; Detailed Comparisons( state=0|1 )

**Description :** Affiche ou masque un rapport détaillé pour chaque combinaison des moyennes des moindres carrés. Le rapport contient également un graphique qui montre la significativité de chaque comparaison.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Student's t( .05 )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);scrobj << Detailed Comparisons( 1 );

```

#### Equivalence Test

**Syntaxe :** scrobj &lt;&lt; Equivalence Test( difference )

**Description :** Vérifie que les moyennes ne diffèrent pas de plus de la différence spécifiée afin de les considérer comme pratiquement équivalentes. Il s&apos;agit de l&apos;inverse du test de significativité habituel.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Student's t( .05 )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);scrobj << Equivalence Test( 1.5 );

```

#### Ordered Differences Report

**Syntaxe :** scrobj &lt;&lt; Ordered Differences Report( state=0|1 )

**Description :** Affiche ou masque un rapport qui classe les différences pour chaque niveau des moyennes des moindres carrés de la plus grande à la plus petite. Le rapport contient également l&apos;erreur standard des différences, les bornes de l&apos;intervalle de confiance et les p-values.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Tukey HSD( .05 )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);scrobj << Ordered Differences Report( 1 );

```

#### Save Connecting Letters Table

**Syntaxe :** scrobj &lt;&lt; Save Connecting Letters Table

**Description :** Crée une table de données avec des colonnes qui contiennent les niveaux de l&apos;effet, les lettres de connexion, les moyennes des moindres carrés, leurs erreurs standard et les intervalles de confiance.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( :Drug << {LSMeans Student's t( 1 )} ));Wait( 1 );scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);scrobj << Save Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Equivalence Tests

### Messages d'éléments

#### Forest Plot

**Syntaxe :** scrobj &lt;&lt; Forest Plot( state=0|1 )

**Description :** Affiche ou masque le graphique de forêt des tests d&apos;équivalence. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );Wait( 1 );scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;scrobj << Forest Plot( 1 );

```

#### Remove

**Syntaxe :** scrobj &lt;&lt; Remove

**Description :** Supprime le rapport Tests d&apos;équivalence.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );Wait( 2 );scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;scrobj << Remove;

```

#### Scatterplot

**Syntaxe :** scrobj &lt;&lt; Scatterplot( state=0|1 )

**Description :** Affiche ou masque le nuage de points des tests d&apos;équivalence. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Scatterplot( 0 ) ) );Wait( 1 );scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;scrobj << Scatterplot( 1 );

```

#### Test Report

**Syntaxe :** scrobj &lt;&lt; Test Report( state=0|1 )

**Description :** Affiche ou masque le rapport Tests d&apos;équivalence, qui contient les résultats de la méthode TOST (deux tests unilatéraux) qui est utilisée pour tester une différence pratique entre les moyennes. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Test Report( 0 ) ) );Wait( 1 );scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;scrobj << Test Report( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Mean Mean Scatterplot

### Messages d'éléments

#### Show Reference Lines

**Syntaxe :** scrobj &lt;&lt; Show Reference Lines( state=0|1 )

**Description :** Affiche ou masque un quadrillage de référence pour les points du nuage de points.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1 ) );Wait( 1 );scrobj = Report( obj )["All Pairwise Comparisons Scatterplot"] << get scriptable object;scrobj << Show Reference Lines( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons

### Messages d'éléments

#### All Pairwise Comparisons Scatterplot

**Syntaxe :** scrobj &lt;&lt; All Pairwise Comparisons Scatterplot( state=0|1 )

**Description :** Affiche ou masque le nuage de points de toutes les comparaisons par paire. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( Drug ),	Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);scrobj << All Pairwise Comparisons Scatterplot( 1 );

```

#### All Pairwise Differences

**Syntaxe :** scrobj &lt;&lt; All Pairwise Differences( state=0|1 )

**Description :** Affiche ou masque le rapport Toutes les différences par paire. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1, All Pairwise Differences( 0 ) ) );Wait( 1 );scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);scrobj << All Pairwise Differences( 1 );

```

#### All Pairwise Differences Connecting Letters

**Syntaxe :** scrobj &lt;&lt; All Pairwise Differences Connecting Letters( state=0|1 )

**Description :** Affiche ou masque le rapport Lettres de connexion - Toutes les différences par paire.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );obj = dt << Fit Model(	Y( :pain ),	Effects( :gender, :drug, :gender * :drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( Drug ),	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) ));

```

#### Save All Pairwise Differences Connecting Letters Table

**Syntaxe :** scrobj &lt;&lt; Save All Pairwise Differences Connecting Letters Table

**Description :** Crée une table de données avec des colonnes qui contiennent les niveaux de l&apos;effet, les lettres de connexion, les moyennes des moindres carrés, leurs erreurs standard et les intervalles de confiance.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );obj = dt << Fit Model(	Y( :pain ),	Effects( :gender, :drug, :gender * :drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run(		Multiple Comparisons(			Effect( Drug ),			Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )		)	));Wait( 1 );scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);scrobj << Save All Pairwise Differences Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Control

### Messages d'éléments

#### Calculate Adjusted P-Values

**Syntaxe :** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**Description :** Affiche ou masque une colonne de p-values dans le rapport Différences par rapport au contrôle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Control( 1, Control Level( "Drug:a" ) ));Wait( 1 );scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Control Decision Chart

**Syntaxe :** scrobj &lt;&lt; Comparisons with Control Decision Chart( state=0|1 )

**Description :** Affiche ou masque le graphique de décision des comparaisons avec le contrôle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Control(		1,		Control Level( "Drug:a" ),		Comparisons with Control Decision Chart( 0 )	));Wait( 1 );scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);scrobj << Comparisons with Control Decision Chart( 1 );

```

#### Differences from Control

**Syntaxe :** scrobj &lt;&lt; Differences from Control( state=0|1 )

**Description :** Affiche ou masque le rapport Différences par rapport au contrôle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Control( 1, Control Level( "Drug:a" ), Differences from Control( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);scrobj << Differences from Control( 1 );

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Overall Average

### Messages d'éléments

#### Calculate Adjusted P-Values

**Syntaxe :** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**Description :** Affiche ou masque une colonne de p-values dans le rapport Différences par rapport à la moyenne générale.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );Wait( 1 );scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Overall Average Decision Chart

**Syntaxe :** scrobj &lt;&lt; Comparisons with Overall Average Decision Chart( state=0|1 )

**Description :** Affiche ou masque le graphique de décision des comparaisons avec la moyenne générale. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Overall Average(		1,		Comparisons with Overall Average Decision Chart( 0 )	));Wait( 1 );scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);scrobj << Comparisons with Overall Average Decision Chart( 1 );

```

#### Differences from Overall Average

**Syntaxe :** scrobj &lt;&lt; Differences from Overall Average( state=0|1 )

**Description :** Affiche ou masque le rapport Différences par rapport à la moyenne générale. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Overall Average( 1, Differences from Overall Average( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);scrobj << Differences from Overall Average( 1 );

```

## Fit Least Squares > Multiple Comparisons > Least Squares Means Plot

### Messages d'éléments

#### Remove

**Syntaxe :** scrobj &lt;&lt; Remove

**Description :** Supprime le graphique des moyennes des moindres carrés du rapport.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Least Squares Means Plot( Show Connected Points( 0 ) ));Wait( 2 );scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);scrobj << Remove;

```

#### Show Confidence Limits

**Syntaxe :** scrobj &lt;&lt; Show Confidence Limits( state=0|1 )

**Description :** Affiche ou masque les bornes de l&apos;intervalle de confiance pour chaque estimation dans le graphique. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Least Squares Means Plot( Show Confidence Limits( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);scrobj << Show Confidence Limits( 1 );

```

#### Show Connected Points

**Syntaxe :** scrobj &lt;&lt; Show Connected Points( state=0|1 )

**Description :** Affiche ou masque une ou plusieurs lignes qui connectent les moyennes des moindres carrés pour chaque niveau dans le graphique. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Effect( :Drug ),	Least Squares Means Plot( Show Connected Points( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);scrobj << Show Connected Points( 1 );

```

## Fit Least Squares > Multiple Comparisons

### Messages d'éléments

#### Comparisons with Control

**Syntaxe :** scrobj &lt;&lt; Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; ) )

**Description :** Affiche ou masque un test de comparaisons multiples qui compare la moyenne des moindres carrés de chaque effet avec la moyenne des moindres carrés d&apos;un niveau de contrôle. C&apos;est ce qu&apos;on appelle également un test de Dunnett.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons(	Effect( :Drug ),	Comparisons with Control( 1, Control Level( "Drug:a" ) ));

```

#### Comparisons with Overall Average

**Syntaxe :** scrobj &lt;&lt; Comparisons with Overall Average( state=0|1, &lt;options&gt; ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Overall Average( state=0|1, &lt;options&gt; ) )

**Description :** Affiche ou masque un test de comparaisons multiples qui compare la moyenne des moindres carrés de chaque effet avec la moyenne des moindres carrés de la moyenne globale. C&apos;est ce qu&apos;on appelle également un test d&apos;analyse des moyennes.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );

```

#### Equivalence Tests

**Syntaxe :** scrobj &lt;&lt; Equivalence Tests( number ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Equivalence Tests( number ) )

**Description :** Affiche ou masque un test de comparaisons multiples de toutes les comparaisons des moyennes des moindres carrés par paire par rapport à une différence spécifiée considérée pratiquement équivalente.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons( Effect( :Drug ), Equivalence Tests( 5 ) );

```

#### Least Squares Means Plot

**Syntaxe :** scrobj &lt;&lt; Least Squares Means Plot; obj &lt;&lt; Multiple Comparisons( Effect( effect ), Least Squares Means Plot )

**Description :** Affiche ou masque un graphique des moyennes des moindres carrés avec les barres d&apos;erreur standard.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );

```

#### Remove

**Syntaxe :** scrobj &lt;&lt; Remove

**Description :** Supprime le rapport Comparaisons multiples.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 0 );obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );Wait( 2 );scrobj = (Report( obj )["Multiple Comparisons for Drug"] << get scriptable object);scrobj << Remove;

```

#### Slice F Test

**Syntaxe :** scrobj &lt;&lt; Slice F Test( state=0|1 ); obj &lt;&lt; Multiple Comparisons( Sliced Effect Estimates( Sliced Effect( effect1 * effect2 ), Slice Term List( effect_level ) ), Slice F Test( state=0|1 ) )

**Description :** Affiche ou masque le test F pour l&apos;effet tranché. Actif par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Model(	Y( :height ),	Effects( :age, :sex, :age * :sex ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run);Wait( 0 );obj << Multiple Comparisons(	Sliced Effect Estimates( Sliced Effect( :age * :sex ), Slice Term List( :age( "12" ) ) ),	Slice F Test( 1 ));Wait( 1 );scrobj = (Report( obj )["Multiple Comparisons for Slice of age*sex where age = 12"] <<get scriptable object);scrobj << Slice F Test( 0 );Wait( 1 );scrobj << Slice F Test( 1 );

```

#### Student's t

**Syntaxe :** scrobj &lt;&lt; Student&apos;s t( state=0|1, &lt;options&gt; ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Student&apos;s t( state=0|1, &lt;options&gt; ) )

**Description :** Affiche ou masque un test de comparaisons multiples de toutes les comparaisons des moyennes des moindres carrés par paire à l&apos;aide du test t de Student.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons(	Effect( :Drug ),	Student's t( 1, All Pairwise Differences Connecting Letters( 1 ) ));

```

#### Tukey HSD

**Syntaxe :** scrobj &lt;&lt; Tukey HSD( state=0|1, &lt;options&gt; ); obj &lt;&lt; Multiple Comparisons( Effect( effect ), Tukey HSD( state=0|1, &lt;options&gt; ) )

**Description :** Affiche ou masque un test de comparaisons multiples de toutes les comparaisons des moyennes des moindres carrés par paire à l&apos;aide du test HSD (différences honnêtement significatives) de Tukey-Kramer.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Multiple Comparisons(	Effect( :Drug ),	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) ));

```

## Fit Least Squares > REML

### Messages d'éléments

#### Convergence Limit

**Syntaxe :** obj = Fit Model(...Convergence Limit( number=0.00000001 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la limite de convergence pour l&apos;ajustement du modèle. Si votre modèle ne converge pas facilement, vous pourriez augmenter la limite de convergence. Par défaut, la limite de convergence est de 0,00000001.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Convergence Limit( 0.0001 ),	Run);

```

#### Maximum Iterations

**Syntaxe :** obj = Fit Model(...Maximum Iterations( number=100 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie le nombre maximum d&apos;itérations utilisées dans l&apos;ajustement du modèle. Par défaut, le nombre maximum d&apos;itérations est de 100.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Maximum Iterations( 150 ),	Run);

```

#### Method

**Syntaxe :** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la méthode utilisée pour ajuster des modèles mixtes dans la méthode des Moindres carrés standard.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	NoBounds( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Emphasis( "Minimal Report" ),	Run);

```

#### NoBounds

**Syntaxe :** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Supprime les limites des estimations de la variance. Lorsqu&apos;elle est désactivée, la limite inférieure des estimations de la variance est définie sur zéro. Disponible uniquement pour la méthode des Moindres carrés standard. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	NoBounds( 0 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Emphasis( "Minimal Report" ),	Run);

```

## Fit Least Squares > Response Fit

### Messages d'éléments

#### AICc

**Syntaxe :** obj &lt;&lt; AICc( state=0|1 )

**Description :** Affiche ou masque les valeurs du critère d&apos;information d&apos;Akaike corrigé (AICc) et du critère d&apos;information bayésien (BIC) dans le rapport Résumé de l&apos;ajustement.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << AICc( 1 );

```

#### Analysis of Variance

**Syntaxe :** obj &lt;&lt; Analysis of Variance( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient des statistiques pour comparer le modèle ajusté à un simple modèle de moyenne.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Analysis of Variance( 0 ) ));Wait( 1 );obj << Analysis of Variance( 1 );

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Lack of Fit( 0 );obj << Effect Details( 0 );Report( obj )["Parameter Estimates"] << Close( 1 );preset = obj << (:y << New Preset);dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );obj2 = dt2 << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**Syntaxe :** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**Description :** Affiche ou masque un graphique qui calcule les probabilités a posteriori pour tous les termes du modèle à l&apos;aide de l&apos;approche bayésienne.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**Syntaxe :** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**Description :** Affiche ou masque le rapport Transformations de Box-Cox, qui montre les modifications apportées à l&apos;ajustement par une transformation Box-Cox de la réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**Syntaxe :** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**Description :** Génère un rapport d&apos;analyse des moyennes (ANOM) qui compare les pentes des interactions avec la pente moyenne pour un modèle Analyse de covariance (ANCOVA). Cette option n&apos;est disponible que lorsqu&apos;il y a un effet nominal, un effet continu et leur effet d&apos;interaction pour les effets fixes.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );obj = dt << Fit Model(	Y( :Eighth Grade Math ),	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Compare Slopes(	Effect( :Region * :High School Graduates ),	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) ));

```

#### Conditional Indiv CI

**Syntaxe :** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;intervalle de confiance de la valeur individuelle de la prédiction conditionnelle. Les intervalles de confiance comprennent les estimations de l&apos;effet aléatoire pour les modèles avec des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**Syntaxe :** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;intervalle de confiance de la valeur attendue de la prédiction conditionnelle. Les intervalles de confiance comprennent les estimations de l&apos;effet aléatoire pour les modèles avec des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**Syntaxe :** obj &lt;&lt; Conditional Pred Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule qui comprend les estimations de l&apos;effet aléatoire pour les modèles avec des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**Syntaxe :** obj &lt;&lt; Conditional Pred Values

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs prédites conditionnelles qui sont calculées à l&apos;aide des meilleurs prédicteurs linéaires non biaisés (BLUP) pour les paramètres des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Pred Values;

```

#### Conditional Residuals

**Syntaxe :** obj &lt;&lt; Conditional Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus de la prédiction conditionnelle. Les valeurs du résidu comprennent les estimations de l&apos;effet aléatoire pour les modèles avec des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Residuals;

```

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur d&apos;isoréponses, qui représente graphiquement les isoréponses de la réponse pour deux facteurs à la fois. Disponible uniquement lorsque le modèle contient plusieurs facteurs continus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**Syntaxe :** obj &lt;&lt; Cook&apos;s D Influence

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient une mesure de l&apos;influence de chaque observation dans l&apos;estimation du modèle. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Cook's D Influence;

```

#### Correlation of Estimates

**Syntaxe :** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Description :** Pour l&apos;ajustement spécifié, affiche ou masque la matrice des corrélations entre les estimateurs des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**Syntaxe :** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**Description :** Affiche ou masque les estimations des paramètres pour le modèle de mélange de Cox en fonction des valeurs du mélange de référence spécifiées. Cette option n&apos;est disponible que lorsque le modèle contient des effets de mélange.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,		:p3 * :p2	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**Syntaxe :** obj &lt;&lt; Cube Plots( state=0|1 )

**Description :** Affiche ou masque les valeurs prédites des extrêmes des étendues de facteurs disposées dans un ou plusieurs cubes.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Cube Plots( 1 );

```

#### Custom Test

**Syntaxe :** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**Description :** Lance un test F personnalisé qui compare les différents effets dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**Syntaxe :** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**Description :** Affiche ou masque le rapport Durbin-Watson, qui contient une statistique pour tester si les résidus présentent une autocorrélation de premier ordre. Le rapport montre également l&apos;autocorrélation des résidus et la probabilité exacte associée à la statistique. Cette option convient uniquement aux données de série chronologique et suppose que vos observations sont dans l&apos;ordre chronologique.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );obj = dt << Fit Model(	Y( :CO2 ),	Effects( :Year, :Month ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Durbin Watson Test( 1 );

```

#### Effect Details

**Syntaxe :** obj &lt;&lt; Effect Details( state=0|1 )

**Description :** Affiche ou masque des rapports détaillés sur chaque effet dans le modèle, y compris le tableau des moyennes des moindres carrés pour chaque effet catégoriel. Il est possible d&apos;afficher des informations supplémentaires en envoyant des messages aux effets du modèle. Veuillez consulter l&apos;objet Ajustement de l&apos;effet sous Modèle linéaire, pour de plus amples informations à ce propos. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( Effect Details( 0 ) ));Wait( 1 );obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**Syntaxe :** obj &lt;&lt; Effect Leverage Pairs

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les valeurs X et Y tracées dans les graphiques des leviers des effets. La valeur Y correspond au résidu partiel. La valeur X est le régresseur réduit dans les graphiques des leviers des effets. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Effect Leverage Pairs;

```

#### Effect Summary

**Syntaxe :** obj &lt;&lt; Effect Summary( state=0|1 )

**Description :** Affiche ou masque le rapport Résumé des effets, qui vous permet de mettre à jour les effets dans le modèle de manière interactive. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**Syntaxe :** obj &lt;&lt; Effect Tests( state=0|1 )

**Description :** Affiche ou masque un rapport contenant des tests pour les effets fixes dans le modèle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Effect Tests( 0 ) ));Wait( 1 );obj << Effect Tests( 1 );

```

#### Error Specification

**Syntaxe :** obj &lt;&lt; Error Specification( "Estimation par défaut"|"Erreur pure"|"Spécifié" )

**Description :** Spécifie la variance de l&apos;erreur et les degrés de liberté des erreurs utilisés pour les erreurs standard et les tests dans le rapport Ajustement par moindres carrés. Cette option n&apos;est disponible que lorsque le modèle ne contient aucun effet aléatoire.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**Syntaxe :** obj &lt;&lt; Expanded Estimates( state=0|1 )

**Description :** Affiche ou masque les estimations des paramètres pour tous les niveaux d&apos;un effet de modèle nominal. Pour un effet nominal à k niveaux, le tableau Estimations des coefficients contient les coefficients pour k-1 paramètres, et le tableau Estimations étendues contient les coefficients de l&apos;effet pour les k niveaux. Cette option n&apos;est disponible que lorsqu&apos;au moins un effet n&apos;est pas continu.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**Syntaxe :** obj &lt;&lt; Externally Studentized Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus studentisés externes. Il s&apos;agit des résidus divisés par les estimations d&apos;écart-type excluant la ligne active. Maintenez la touche Maj enfoncée pour entrer un suffixe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Externally Studentized Residuals;

```

#### FDR

**Syntaxe :** obj &lt;&lt; FDR( state=0|1 )

**Description :** Indique si les valeurs logworth et leurs p-values correspondantes dans la table Résumé des effets sont ajustées en utilisant le taux de fausses découvertes (FDR).

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**Syntaxe :** obj &lt;&lt; Get Conditional Formula

**Description :** Renvoie une formule de prédiction qui comprend les estimations de l&apos;effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Conditional Formula;

```

#### Get Effect Names

**Syntaxe :** obj &lt;&lt; Get Effect Names

**Description :** Renvoie les noms des effets.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Effect Names;Show( G );

```

#### Get Effect PValues

**Syntaxe :** obj &lt;&lt; Get Effect PValues

**Description :** Renvoie les p-value des effets.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Effect PValues;Show( G );

```

#### Get Estimates

**Syntaxe :** obj &lt;&lt; Get Estimates

**Description :** Renvoie les estimations.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Estimates;Show( G );

```

#### Get Indiv Confid Limit Formula

**Syntaxe :** obj &lt;&lt; Get Indiv Confid Limit Formula

**Description :** Renvoie une formule des bornes de l&apos;intervalle de confiance individuel.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get MM SAS DATA Step

**Description :** Crée du code SAS que vous pouvez enregistrer dans le gestionnaire de modèles SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**Syntaxe :** obj &lt;&lt; Get Mean Confid Limit Formula

**Description :** Renvoie une formule des bornes de l&apos;intervalle de confiance de la moyenne.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Get Measures;

```

#### Get Parameter Names

**Syntaxe :** obj &lt;&lt; Get Parameter Names

**Description :** Renvoie les noms des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Parameter Names;Show( G );

```

#### Get Parameterized Formula

**Syntaxe :** obj &lt;&lt; Get Parameterized Formula

**Description :** Renvoie une formule de prédiction qui utilise des paramètres plutôt que des constantes.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**Syntaxe :** obj &lt;&lt; Get Prediction Formula

**Description :** Construit un script pour créer une colonne de formule de prévision et la renvoie.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**Syntaxe :** obj &lt;&lt; Get Random Effect Names

**Description :** Renvoie les noms des effets aléatoires.  Disponible pour les méthodes d’analyse REML (maximum de vraisemblance restreint).

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);G = obj << Get Random Effect Names;Show( G );

```

#### Get SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get SAS DATA Step

**Description :** Crée le code SAS que vous pouvez utiliser pour évaluer le score d’un nouveau jeu de données.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**Syntaxe :** obj &lt;&lt; Get SQL prediction expression

**Description :** Crée une expression SQL que vous pouvez coller dans une instruction SQL Select pour la prédiction d&apos;une réponse

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**Syntaxe :** obj &lt;&lt; Get Standard Error Formula

**Description :** Renvoie une formule de l&apos;erreur standard.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**Syntaxe :** obj &lt;&lt; Get Std Errors

**Description :** Renvoie les erreurs standard.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Std Errors;Show( G );

```

#### Get Variance Components

**Syntaxe :** obj &lt;&lt; Get Variance Components

**Description :** Renvoie les composants de la variance.  Disponible pour les méthodes d’analyse REML (maximum de varisemblance restreint).

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);G = obj << Get Variance Components;Show( G );

```

#### Get X Matrix

**Syntaxe :** obj &lt;&lt; Get X Matrix

**Description :** Renvoie la matrice du plan.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get X Matrix;Show( G );

```

#### Get XPX Inverse

**Syntaxe :** obj &lt;&lt; Get XPX Inverse

**Description :** Renvoie la matrice inverse X&apos;X.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get XPX Inverse;Show( G );

```

#### Get Y Matrix

**Syntaxe :** obj &lt;&lt; Get Y Matrix

**Description :** Renvoie la matrice Y.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Y Matrix;Show( G );

```

#### Hats

**Syntaxe :** obj &lt;&lt; Hats

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs diagonales de la matrice xInv(x`x)x`. Ces valeurs sont également appelées valeurs des classes ou de levier. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Hats;

```

#### Indicator Parameterization Estimates

**Syntaxe :** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**Description :** Affiche ou masque le rapport Paramétrisation de la fonction indicatrice, qui contient les estimations des paramètres avec les effets nominaux dans le modèle paramétré à l&apos;aide des fonctions indicatrices classiques. Cette option n&apos;est disponible que lorsque les effets du modèle comprennent des colonnes nominales et une constante.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**Syntaxe :** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les limites de l&apos;intervalle de confiance pour une réalisation individuelle de la réponse. Cette option englobe la variation dans la réponse et dans son estimation. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**Syntaxe :** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Il y a des colonnes pour les limites de confiance inférieure et supérieure pour une prévision individuelle qui sont des fonctions des régresseurs. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);ref = obj << Indiv Confidence Limit Formula( .001 );Show( ref );

```

#### Interaction Plots

**Syntaxe :** obj &lt;&lt; Interaction Plots( state=0|1 )

**Description :** Affiche ou masque une matrice de graphiques des interactions. Cette option n&apos;est disponible que lorsque des effets d&apos;interaction sont présents dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**Syntaxe :** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description :** Génère une valeur prévue X et un intervalle de confiance en se basant sur les valeurs de Y et sur tous les autres facteurs spécifiés.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :RunTime ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**Syntaxe :** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**Description :** Affiche ou masque un test joint pour chaque effet principal dans le modèle. Le test joint comprend tous les paramètres qui impliquent l&apos;effet principal. Cette option n&apos;est disponible que lorsque le modèle contient des interactions.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**Syntaxe :** obj &lt;&lt; Lack of Fit( state=0|1 )

**Description :** Affiche ou masque un test qui évalue si le modèle a les effets appropriés. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Lack Of Fit( 0 ) ));Wait( 1 );obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**Syntaxe :** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les limites de l&apos;intervalle de confiance pour la valeur attendue. La variation est comprise dans l&apos;estimation, mais pas dans la réponse. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**Syntaxe :** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Il y a des colonnes pour les limites de confiance inférieure et supérieure pour la réponse moyenne qui sont des fonctions des régresseurs. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);r = obj << Mean Confidence Limit Formula( .01 );Show( r );

```

#### Mixture Profiler

**Syntaxe :** obj &lt;&lt; Mixture Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur de mélange qui représente les isoréponses de la réponse sur un graphique ternaire. Cette option n&apos;est disponible que si l&apos;attribut Effet de mélange est appliqué à au moins trois facteurs dans le modèle ou si la propriété Mélange est appliquée à au moins trois colonnes de facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,		:p3 * :p2	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Mixture Profiler( 1 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Model Dialog;

```

#### Multiple Comparisons

**Syntaxe :** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**Description :** Génère les estimations des moyennes des moindres carrés, ou les estimations définies par l&apos;utilisateur. Le rapport Comparaisons multiples vous permet d&apos;effectuer des comparaisons avec la moyenne générale, avec un contrôle ou par paire.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Lack of Fit( 0 );obj << Effect Details( 0 );Report( obj )["Parameter Estimates"] << Close( 1 );preset = obj << (:y << New Preset);

```

#### Normal Plot

**Syntaxe :** obj &lt;&lt; Normal Plot( state=0|1 )

**Description :** Affiche ou masque un graphique qui identifie les estimations des paramètres qui dévient de la normalité. Cela peut vous aider à déterminer les effets actifs.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Normal Plot( 1 );

```

#### Parameter Estimates

**Syntaxe :** obj &lt;&lt; Parameter Estimates( state=0|1 )

**Description :** Affiche ou masque un rapport contenant les estimations des paramètres et les tests t pour l&apos;hypothèse que chaque paramètre est égal à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Parameter Estimates( 0 ) ));Wait( 1 );obj << Parameter Estimates( 1 );

```

#### Parameter Power

**Syntaxe :** obj &lt;&lt; Parameter Power( state=0|1 )

**Description :** Ajoute ou supprime des colonnes dans le rapport Estimations des paramètres. Ces colonnes contiennent la puissance et d&apos;autres détails liés aux tests de l&apos;hypothèse correspondante.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Parameter Power( 1 );

```

#### Parameterized Formula

**Syntaxe :** obj &lt;&lt; Parameterized Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule de prédiction qui utilise les paramètre de la table plutôt que des constantes.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Parameterized Formula;

```

#### Pareto Plot

**Syntaxe :** obj &lt;&lt; Pareto Plot( state=0|1 )

**Description :** Affiche ou masque un graphique des valeurs absolues des estimations orthogonalisées et standardisées des paramètres. Ce graphique montre leur composition relative à la somme des valeurs absolues.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**Syntaxe :** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Description :** Affiche ou masque le graphique des valeurs observées en fonction des valeurs prédites, qui représente les valeurs observées de la réponse par rapport à ses valeurs prédites.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**Syntaxe :** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**Description :** Affiche ou masque le rapport Graphique des leviers pour chaque effet dans le modèle. Le graphique montre comment les observations influencent le test pour cet effet et donne des informations sur la multicolinéarité.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run( Plot Effect Leverage( 0 ) ));Wait( 1 );obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**Syntaxe :** obj &lt;&lt; Plot Regression( state=0|1 )

**Description :** Affiche ou masque le rapport Graphique de régression, qui contient un nuage de points des données et des droites de régression pour chaque niveau de l&apos;effet catégoriel. Cette option n&apos;est disponible que si le modèle contient exactement un effet continu et au plus un effet catégoriel. Dans ce cas, le rapport Graphique de régression est proposé par défaut. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Plot Regression( 0 ) ));Wait( 1 );obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**Syntaxe :** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**Description :** Affiche ou masque un graphique avec les résidus sur l&apos;axe vertical et les quantiles normaux des résidus sur l&apos;axe horizontal. Cette option n&apos;est pas disponible avec la méthode Maximum de vraisemblance restreint.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**Syntaxe :** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique avec les résidus sur l&apos;axe vertical et les valeurs prédites de la réponse sur l&apos;axe horizontal. Cette option n&apos;est disponible que pour les réponses continues.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**Syntaxe :** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**Description :** Affiche ou masque un graphique avec les résidus sur l&apos;axe vertical et le numéro de ligne sur l&apos;axe horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**Syntaxe :** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**Description :** Affiche ou masque un graphique avec les résidus de Student sur l&apos;axe vertical et le numéro de ligne sur l&apos;axe horizontal. Chaque point sur le graphique est calculé à l&apos;aide d&apos;une estimation de son écart-type obtenu avec l&apos;observation actuelle supprimée.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**Syntaxe :** obj &lt;&lt; Predicted Values

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs prédites du modèle ajusté. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Predicted Values;

```

#### Prediction Formula

**Syntaxe :** obj &lt;&lt; Prediction Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient la formule de prédiction du modèle ajusté. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntaxe :** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les colonnes contiennent les formules pour les prévisions et les intervalles de confiance et de prévision. Les colonnes de limites créées par cette option contiennent des propriétés utilisées par le profileur de prévision. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Prediction and Interval Formulas;dt << Profiler(	Y( :Pred Formula y ),	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ));Wait( 2 );obj << Prediction and Interval Formulas( 0.01 );dt << Profiler(	Y( :Pred Formula y2 ),	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ));

```

#### Press

**Syntaxe :** obj &lt;&lt; Press( state=0|1 )

**Description :** Affiche ou masque la statistique Somme des carrés des erreurs de prédiction (PRESS) et la racine de son erreur quadratique moyenne (RMSE). Cette statistique est utile pour la comparaison de plusieurs modèles. Les modèles avec une statistique PRESS inférieure sont préférés.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Press( 1 );

```

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Profiler( 1 );

```

#### Publish Conditional Formula

**Syntaxe :** obj &lt;&lt; Publish Conditional Formula

**Description :** Crée une formule de prédiction qui comprend les estimations de l&apos;effet aléatoire et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**Syntaxe :** obj &lt;&lt; Publish Indiv Confid Limit Formula

**Description :** Crée des formules pour les bornes de l&apos;intervalle de confiance individuel et les publie sous la forme de scripts de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**Syntaxe :** obj &lt;&lt; Publish Mean Confid Limit Formula

**Description :** Crée des formules pour les bornes de l&apos;intervalle de confiance de la moyenne et les publie sous la forme de scripts de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**Syntaxe :** obj &lt;&lt; Publish Parameterized Formula

**Description :** Crée une formule de prédiction qui utilise des paramètres plutôt que des constantes et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**Syntaxe :** obj &lt;&lt; Publish Prediction Formula

**Description :** Crée une formule de prévision et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**Syntaxe :** obj &lt;&lt; Publish Standard Error Formula

**Description :** Crée une formule d&apos;erreur standard et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );code = obj << Publish Standard Error Formula;

```

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs du résidu du modèle ajusté. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Residuals;

```

#### Save Coding Table

**Syntaxe :** obj &lt;&lt; Save Coding Table

**Description :** Crée une nouvelle table de données qui contient le codage JMP pour tous les paramètres du modèle. La dernière colonne affiche les valeurs de la variable de réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Save Coding Table;

```

#### Scaled Estimates

**Syntaxe :** obj &lt;&lt; Scaled Estimates( state=0|1 )

**Description :** Affiche ou masque les estimations des paramètres correspondant aux facteurs standardisés de manière à avoir une moyenne de zéro et une étendue de deux.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**Syntaxe :** obj &lt;&lt; Sequential Tests( state=0|1 )

**Description :** Affiche ou masque le rapport Tests séquentiels (type 1), qui contient les sommes des carrés alors que des effets sont ajoutés au modèle de manière séquentielle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**Syntaxe :** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**Description :** Affiche ou masque des intervalles de confiance pour les estimations des paramètres et de la moyenne des moindres carrés.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show All Confidence Intervals( 1 );

```

#### Show CV

**Syntaxe :** obj &lt;&lt; Show CV( state=0|1 )

**Description :** Affiche ou masque la colonne Coefficient de variation dans le rapport Estimations du composant de la variance du maximum de vraisemblance restreint (REML).

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Show CV( 1 );

```

#### Show Prediction Expression

**Syntaxe :** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**Description :** Affiche ou masque le rapport Expression de la prédiction, qui contient l&apos;équation du modèle estimé.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**Syntaxe :** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**Description :** Affiche ou masque la colonne Racine carrée du composant de variance dans le rapport Estimations du composant de la variance du maximum de vraisemblance restreint (REML).

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**Syntaxe :** obj &lt;&lt; Show VIF( state=0|1 )

**Description :** Affiche ou masque les valeurs des facteurs d&apos;inflation de la variance (VIF) dans le rapport Estimations des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show VIF( 1 );

```

#### Sorted Estimates

**Syntaxe :** obj &lt;&lt; Sorted Estimates( state=0|1 )

**Description :** Affiche ou masque le rapport Estimations des coefficients triées, qui est utile dans les situations de criblage. Ce rapport contient les estimations des coefficients triées par valeur absolue du t ratio pour chaque estimation.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**Syntaxe :** obj &lt;&lt; Std Error of Individual

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;erreur standard d&apos;une valeur prédite individuelle. Elle est utilisée pour calculer l&apos;intervalle de confiance individuel. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Individual;

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;erreur standard des valeurs prédites. Elle est utilisée pour calculer l&apos;intervalle de confiance de la moyenne. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Predicted;

```

#### Std Error of Residual

**Syntaxe :** obj &lt;&lt; Std Error of Residual

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;erreur standard des valeurs du résidu. Elle est utilisée pour calculer les résidus de Student. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Residual;

```

#### StdErr Pred Formula

**Syntaxe :** obj &lt;&lt; StdErr Pred Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient la formule de l&apos;erreur standard pour les valeurs prédites comme une fonction des régresseurs. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << StdErr Pred Formula;

```

#### Studentized Residuals

**Syntaxe :** obj &lt;&lt; Studentized Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient le résidu de Student, qui est le résidu divisé par son erreur standard. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Studentized Residuals;

```

#### Summary of Fit

**Syntaxe :** obj &lt;&lt; Summary of Fit( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient un résumé des statistiques d&apos;ajustement du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );

```

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description :** Affiche ou masque une représentation 3D de la surface de réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Surface Profiler( 1 );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Summary of Fit(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Least Squares

### Constructeurs associés

#### Fit Least Squares

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**Description :** Ajuste un modèle de régression linéaire pour une réponse continue. Les techniques incluent la régression, l&apos;analyse de la variance, l&apos;analyse de la covariance, les modèles mixtes et l&apos;analyse des plans d&apos;expérience. L&apos;option Choix du rapport vous permet de spécifier la mise en page du rapport.

**Ajuster des pentes parallèles (ANCOVA)**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);

```

**Ajuster des pentes séparées croisées**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x, :Drug * :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Ajuster des pentes séparées imbriquées**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x[:Drug] ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Ajuster plusieurs effets aléatoires**

```jsl

dt = Open( "$Sample_Data/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Center Polynomials( 0 ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Ajuster plusieurs réponses**

```jsl

dt = Open( "$Sample_Data/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE,		:SULFUR * :SILICA, :SULFUR * :SILANE, :SULFUR * :SULFUR	),	Personality( "Standard Least Squares" ),	Run);

```

**Ajuster un effet de traitement en blocs**

```jsl

dt = Open( "$Sample_Data/Snapdragon.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Soil ),	Random Effects( :Block ),	Personality( "Standard Least Squares" ),	Run);

```

**Ajuster un modèle croisé bivarié**

```jsl

dt = Open( "$Sample_Data/Analgesics.jmp" );obj = dt << Fit Model(	Y( :pain ),	Effects( :gender, :drug, :gender * :drug ),	Personality( "Standard Least Squares" ),	Run);

```

**Ajuster un modèle mixte à pentes aléatoires**

```jsl

dt = Open( "$Sample_Data/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects( :Variety, :Moisture[:Variety] ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Ajuster un plan de criblage avec interactions**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Screening" ),	Run);

```

**Ajuster un plan split plot**

```jsl

dt = Open( "$Sample_Data/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);

```

**Ajuster une régression multiple**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Standard Least Squares" ),	Run);

```

**Ajuster une surface de réponse quadratique**

```jsl

dt = Open( "$Sample_Data/Tiretread.jmp" );obj = dt << Fit Model(	Y( :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE,		:SULFUR * :SILICA, :SULFUR * :SILANE, :SULFUR * :SULFUR	),	Personality( "Standard Least Squares" ),	Run);

```

### Messages d'éléments

#### AICc

**Syntaxe :** obj &lt;&lt; AICc( state=0|1 )

**Description :** Affiche ou masque les valeurs du critère d&apos;information d&apos;Akaike corrigé (AICc) et du critère d&apos;information bayésien (BIC) dans le rapport Résumé de l&apos;ajustement.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << AICc( 1 );

```

#### Analysis of Variance

**Syntaxe :** obj &lt;&lt; Analysis of Variance( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient des statistiques pour comparer le modèle ajusté à un simple modèle de moyenne.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Analysis of Variance( 0 ) ));Wait( 1 );obj << Analysis of Variance( 1 );

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Lack of Fit( 0 );obj << Effect Details( 0 );Report( obj )["Parameter Estimates"] << Close( 1 );preset = obj << (:y << New Preset);dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );obj2 = dt2 << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**Syntaxe :** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**Description :** Affiche ou masque un graphique qui calcule les probabilités a posteriori pour tous les termes du modèle à l&apos;aide de l&apos;approche bayésienne.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**Syntaxe :** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**Description :** Affiche ou masque le rapport Transformations de Box-Cox, qui montre les modifications apportées à l&apos;ajustement par une transformation Box-Cox de la réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**Syntaxe :** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**Description :** Génère un rapport d&apos;analyse des moyennes (ANOM) qui compare les pentes des interactions avec la pente moyenne pour un modèle Analyse de covariance (ANCOVA). Cette option n&apos;est disponible que lorsqu&apos;il y a un effet nominal, un effet continu et leur effet d&apos;interaction pour les effets fixes.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );obj = dt << Fit Model(	Y( :Eighth Grade Math ),	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Compare Slopes(	Effect( :Region * :High School Graduates ),	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) ));

```

#### Conditional Indiv CI

**Syntaxe :** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;intervalle de confiance de la valeur individuelle de la prédiction conditionnelle. Les intervalles de confiance comprennent les estimations de l&apos;effet aléatoire pour les modèles avec des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**Syntaxe :** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;intervalle de confiance de la valeur attendue de la prédiction conditionnelle. Les intervalles de confiance comprennent les estimations de l&apos;effet aléatoire pour les modèles avec des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**Syntaxe :** obj &lt;&lt; Conditional Pred Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule qui comprend les estimations de l&apos;effet aléatoire pour les modèles avec des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**Syntaxe :** obj &lt;&lt; Conditional Pred Values

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs prédites conditionnelles qui sont calculées à l&apos;aide des meilleurs prédicteurs linéaires non biaisés (BLUP) pour les paramètres des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Pred Values;

```

#### Conditional Residuals

**Syntaxe :** obj &lt;&lt; Conditional Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus de la prédiction conditionnelle. Les valeurs du résidu comprennent les estimations de l&apos;effet aléatoire pour les modèles avec des effets aléatoires. Cette option n&apos;est disponible que pour les méthodes d&apos;analyse Maximum de vraisemblance restreint. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);obj << Conditional Residuals;

```

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur d&apos;isoréponses, qui représente graphiquement les isoréponses de la réponse pour deux facteurs à la fois. Disponible uniquement lorsque le modèle contient plusieurs facteurs continus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**Syntaxe :** obj &lt;&lt; Cook&apos;s D Influence

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient une mesure de l&apos;influence de chaque observation dans l&apos;estimation du modèle. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Cook's D Influence;

```

#### Correlation of Estimates

**Syntaxe :** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Description :** Pour l&apos;ajustement spécifié, affiche ou masque la matrice des corrélations entre les estimateurs des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**Syntaxe :** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**Description :** Affiche ou masque les estimations des paramètres pour le modèle de mélange de Cox en fonction des valeurs du mélange de référence spécifiées. Cette option n&apos;est disponible que lorsque le modèle contient des effets de mélange.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,		:p3 * :p2	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**Syntaxe :** obj &lt;&lt; Cube Plots( state=0|1 )

**Description :** Affiche ou masque les valeurs prédites des extrêmes des étendues de facteurs disposées dans un ou plusieurs cubes.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Cube Plots( 1 );

```

#### Custom Test

**Syntaxe :** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**Description :** Lance un test F personnalisé qui compare les différents effets dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**Syntaxe :** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**Description :** Affiche ou masque le rapport Durbin-Watson, qui contient une statistique pour tester si les résidus présentent une autocorrélation de premier ordre. Le rapport montre également l&apos;autocorrélation des résidus et la probabilité exacte associée à la statistique. Cette option convient uniquement aux données de série chronologique et suppose que vos observations sont dans l&apos;ordre chronologique.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );obj = dt << Fit Model(	Y( :CO2 ),	Effects( :Year, :Month ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Durbin Watson Test( 1 );

```

#### Effect Details

**Syntaxe :** obj &lt;&lt; Effect Details( state=0|1 )

**Description :** Affiche ou masque des rapports détaillés sur chaque effet dans le modèle, y compris le tableau des moyennes des moindres carrés pour chaque effet catégoriel. Il est possible d&apos;afficher des informations supplémentaires en envoyant des messages aux effets du modèle. Veuillez consulter l&apos;objet Ajustement de l&apos;effet sous Modèle linéaire, pour de plus amples informations à ce propos. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Leverage" ),	Run( Effect Details( 0 ) ));Wait( 1 );obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**Syntaxe :** obj &lt;&lt; Effect Leverage Pairs

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les valeurs X et Y tracées dans les graphiques des leviers des effets. La valeur Y correspond au résidu partiel. La valeur X est le régresseur réduit dans les graphiques des leviers des effets. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Effect Leverage Pairs;

```

#### Effect Summary

**Syntaxe :** obj &lt;&lt; Effect Summary( state=0|1 )

**Description :** Affiche ou masque le rapport Résumé des effets, qui vous permet de mettre à jour les effets dans le modèle de manière interactive. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**Syntaxe :** obj &lt;&lt; Effect Tests( state=0|1 )

**Description :** Affiche ou masque un rapport contenant des tests pour les effets fixes dans le modèle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Effect Tests( 0 ) ));Wait( 1 );obj << Effect Tests( 1 );

```

#### Error Specification

**Syntaxe :** obj &lt;&lt; Error Specification( "Estimation par défaut"|"Erreur pure"|"Spécifié" )

**Description :** Spécifie la variance de l&apos;erreur et les degrés de liberté des erreurs utilisés pour les erreurs standard et les tests dans le rapport Ajustement par moindres carrés. Cette option n&apos;est disponible que lorsque le modèle ne contient aucun effet aléatoire.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**Syntaxe :** obj &lt;&lt; Expanded Estimates( state=0|1 )

**Description :** Affiche ou masque les estimations des paramètres pour tous les niveaux d&apos;un effet de modèle nominal. Pour un effet nominal à k niveaux, le tableau Estimations des coefficients contient les coefficients pour k-1 paramètres, et le tableau Estimations étendues contient les coefficients de l&apos;effet pour les k niveaux. Cette option n&apos;est disponible que lorsqu&apos;au moins un effet n&apos;est pas continu.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**Syntaxe :** obj &lt;&lt; Externally Studentized Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus studentisés externes. Il s&apos;agit des résidus divisés par les estimations d&apos;écart-type excluant la ligne active. Maintenez la touche Maj enfoncée pour entrer un suffixe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Externally Studentized Residuals;

```

#### FDR

**Syntaxe :** obj &lt;&lt; FDR( state=0|1 )

**Description :** Indique si les valeurs logworth et leurs p-values correspondantes dans la table Résumé des effets sont ajustées en utilisant le taux de fausses découvertes (FDR).

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**Syntaxe :** obj &lt;&lt; Get Conditional Formula

**Description :** Renvoie une formule de prédiction qui comprend les estimations de l&apos;effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Conditional Formula;

```

#### Get Effect Names

**Syntaxe :** obj &lt;&lt; Get Effect Names

**Description :** Renvoie les noms des effets.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Effect Names;Show( G );

```

#### Get Effect PValues

**Syntaxe :** obj &lt;&lt; Get Effect PValues

**Description :** Renvoie les p-value des effets.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Effect PValues;Show( G );

```

#### Get Estimates

**Syntaxe :** obj &lt;&lt; Get Estimates

**Description :** Renvoie les estimations.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Estimates;Show( G );

```

#### Get Indiv Confid Limit Formula

**Syntaxe :** obj &lt;&lt; Get Indiv Confid Limit Formula

**Description :** Renvoie une formule des bornes de l&apos;intervalle de confiance individuel.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get MM SAS DATA Step

**Description :** Crée du code SAS que vous pouvez enregistrer dans le gestionnaire de modèles SAS.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**Syntaxe :** obj &lt;&lt; Get Mean Confid Limit Formula

**Description :** Renvoie une formule des bornes de l&apos;intervalle de confiance de la moyenne.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Get Measures;

```

#### Get Parameter Names

**Syntaxe :** obj &lt;&lt; Get Parameter Names

**Description :** Renvoie les noms des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Parameter Names;Show( G );

```

#### Get Parameterized Formula

**Syntaxe :** obj &lt;&lt; Get Parameterized Formula

**Description :** Renvoie une formule de prédiction qui utilise des paramètres plutôt que des constantes.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**Syntaxe :** obj &lt;&lt; Get Prediction Formula

**Description :** Construit un script pour créer une colonne de formule de prévision et la renvoie.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**Syntaxe :** obj &lt;&lt; Get Random Effect Names

**Description :** Renvoie les noms des effets aléatoires.  Disponible pour les méthodes d’analyse REML (maximum de vraisemblance restreint).

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);G = obj << Get Random Effect Names;Show( G );

```

#### Get SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get SAS DATA Step

**Description :** Crée le code SAS que vous pouvez utiliser pour évaluer le score d’un nouveau jeu de données.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**Syntaxe :** obj &lt;&lt; Get SQL prediction expression

**Description :** Crée une expression SQL que vous pouvez coller dans une instruction SQL Select pour la prédiction d&apos;une réponse

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**Syntaxe :** obj &lt;&lt; Get Standard Error Formula

**Description :** Renvoie une formule de l&apos;erreur standard.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**Syntaxe :** obj &lt;&lt; Get Std Errors

**Description :** Renvoie les erreurs standard.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Std Errors;Show( G );

```

#### Get Variance Components

**Syntaxe :** obj &lt;&lt; Get Variance Components

**Description :** Renvoie les composants de la variance.  Disponible pour les méthodes d’analyse REML (maximum de varisemblance restreint).

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);G = obj << Get Variance Components;Show( G );

```

#### Get X Matrix

**Syntaxe :** obj &lt;&lt; Get X Matrix

**Description :** Renvoie la matrice du plan.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get X Matrix;Show( G );

```

#### Get XPX Inverse

**Syntaxe :** obj &lt;&lt; Get XPX Inverse

**Description :** Renvoie la matrice inverse X&apos;X.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get XPX Inverse;Show( G );

```

#### Get Y Matrix

**Syntaxe :** obj &lt;&lt; Get Y Matrix

**Description :** Renvoie la matrice Y.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);G = obj << Get Y Matrix;Show( G );

```

#### Hats

**Syntaxe :** obj &lt;&lt; Hats

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs diagonales de la matrice xInv(x`x)x`. Ces valeurs sont également appelées valeurs des classes ou de levier. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Hats;

```

#### Indicator Parameterization Estimates

**Syntaxe :** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**Description :** Affiche ou masque le rapport Paramétrisation de la fonction indicatrice, qui contient les estimations des paramètres avec les effets nominaux dans le modèle paramétré à l&apos;aide des fonctions indicatrices classiques. Cette option n&apos;est disponible que lorsque les effets du modèle comprennent des colonnes nominales et une constante.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**Syntaxe :** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les limites de l&apos;intervalle de confiance pour une réalisation individuelle de la réponse. Cette option englobe la variation dans la réponse et dans son estimation. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**Syntaxe :** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Il y a des colonnes pour les limites de confiance inférieure et supérieure pour une prévision individuelle qui sont des fonctions des régresseurs. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);ref = obj << Indiv Confidence Limit Formula( .001 );Show( ref );

```

#### Interaction Plots

**Syntaxe :** obj &lt;&lt; Interaction Plots( state=0|1 )

**Description :** Affiche ou masque une matrice de graphiques des interactions. Cette option n&apos;est disponible que lorsque des effets d&apos;interaction sont présents dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**Syntaxe :** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description :** Génère une valeur prévue X et un intervalle de confiance en se basant sur les valeurs de Y et sur tous les autres facteurs spécifiés.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :RunTime ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**Syntaxe :** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**Description :** Affiche ou masque un test joint pour chaque effet principal dans le modèle. Le test joint comprend tous les paramètres qui impliquent l&apos;effet principal. Cette option n&apos;est disponible que lorsque le modèle contient des interactions.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**Syntaxe :** obj &lt;&lt; Lack of Fit( state=0|1 )

**Description :** Affiche ou masque un test qui évalue si le modèle a les effets appropriés. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Lack Of Fit( 0 ) ));Wait( 1 );obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**Syntaxe :** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les limites de l&apos;intervalle de confiance pour la valeur attendue. La variation est comprise dans l&apos;estimation, mais pas dans la réponse. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**Syntaxe :** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données d&apos;origine. Il y a des colonnes pour les limites de confiance inférieure et supérieure pour la réponse moyenne qui sont des fonctions des régresseurs. Le niveau par défaut pour alpha est 0,05, ce qui crée des limites de confiance de 95 %.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);r = obj << Mean Confidence Limit Formula( .01 );Show( r );

```

#### Mixture Profiler

**Syntaxe :** obj &lt;&lt; Mixture Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur de mélange qui représente les isoréponses de la réponse sur un graphique ternaire. Cette option n&apos;est disponible que si l&apos;attribut Effet de mélange est appliqué à au moins trois facteurs dans le modèle ou si la propriété Mélange est appliquée à au moins trois colonnes de facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,		:p3 * :p2	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Mixture Profiler( 1 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Model Dialog;

```

#### Multiple Comparisons

**Syntaxe :** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**Description :** Génère les estimations des moyennes des moindres carrés, ou les estimations définies par l&apos;utilisateur. Le rapport Comparaisons multiples vous permet d&apos;effectuer des comparaisons avec la moyenne générale, avec un contrôle ou par paire.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :x, :Drug ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Lack of Fit( 0 );obj << Effect Details( 0 );Report( obj )["Parameter Estimates"] << Close( 1 );preset = obj << (:y << New Preset);

```

#### Normal Plot

**Syntaxe :** obj &lt;&lt; Normal Plot( state=0|1 )

**Description :** Affiche ou masque un graphique qui identifie les estimations des paramètres qui dévient de la normalité. Cela peut vous aider à déterminer les effets actifs.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Normal Plot( 1 );

```

#### Parameter Estimates

**Syntaxe :** obj &lt;&lt; Parameter Estimates( state=0|1 )

**Description :** Affiche ou masque un rapport contenant les estimations des paramètres et les tests t pour l&apos;hypothèse que chaque paramètre est égal à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Parameter Estimates( 0 ) ));Wait( 1 );obj << Parameter Estimates( 1 );

```

#### Parameter Power

**Syntaxe :** obj &lt;&lt; Parameter Power( state=0|1 )

**Description :** Ajoute ou supprime des colonnes dans le rapport Estimations des paramètres. Ces colonnes contiennent la puissance et d&apos;autres détails liés aux tests de l&apos;hypothèse correspondante.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Parameter Power( 1 );

```

#### Parameterized Formula

**Syntaxe :** obj &lt;&lt; Parameterized Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule de prédiction qui utilise les paramètre de la table plutôt que des constantes.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Parameterized Formula;

```

#### Pareto Plot

**Syntaxe :** obj &lt;&lt; Pareto Plot( state=0|1 )

**Description :** Affiche ou masque un graphique des valeurs absolues des estimations orthogonalisées et standardisées des paramètres. Ce graphique montre leur composition relative à la somme des valeurs absolues.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**Syntaxe :** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Description :** Affiche ou masque le graphique des valeurs observées en fonction des valeurs prédites, qui représente les valeurs observées de la réponse par rapport à ses valeurs prédites.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**Syntaxe :** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**Description :** Affiche ou masque le rapport Graphique des leviers pour chaque effet dans le modèle. Le graphique montre comment les observations influencent le test pour cet effet et donne des informations sur la multicolinéarité.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run( Plot Effect Leverage( 0 ) ));Wait( 1 );obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**Syntaxe :** obj &lt;&lt; Plot Regression( state=0|1 )

**Description :** Affiche ou masque le rapport Graphique de régression, qui contient un nuage de points des données et des droites de régression pour chaque niveau de l&apos;effet catégoriel. Cette option n&apos;est disponible que si le modèle contient exactement un effet continu et au plus un effet catégoriel. Dans ce cas, le rapport Graphique de régression est proposé par défaut. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Plot Regression( 0 ) ));Wait( 1 );obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**Syntaxe :** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**Description :** Affiche ou masque un graphique avec les résidus sur l&apos;axe vertical et les quantiles normaux des résidus sur l&apos;axe horizontal. Cette option n&apos;est pas disponible avec la méthode Maximum de vraisemblance restreint.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**Syntaxe :** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique avec les résidus sur l&apos;axe vertical et les valeurs prédites de la réponse sur l&apos;axe horizontal. Cette option n&apos;est disponible que pour les réponses continues.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**Syntaxe :** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**Description :** Affiche ou masque un graphique avec les résidus sur l&apos;axe vertical et le numéro de ligne sur l&apos;axe horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**Syntaxe :** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**Description :** Affiche ou masque un graphique avec les résidus de Student sur l&apos;axe vertical et le numéro de ligne sur l&apos;axe horizontal. Chaque point sur le graphique est calculé à l&apos;aide d&apos;une estimation de son écart-type obtenu avec l&apos;observation actuelle supprimée.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**Syntaxe :** obj &lt;&lt; Predicted Values

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs prédites du modèle ajusté. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Predicted Values;

```

#### Prediction Formula

**Syntaxe :** obj &lt;&lt; Prediction Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient la formule de prédiction du modèle ajusté. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntaxe :** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les colonnes contiennent les formules pour les prévisions et les intervalles de confiance et de prévision. Les colonnes de limites créées par cette option contiennent des propriétés utilisées par le profileur de prévision. Maintenez la touche Maj enfoncée pour entrer un niveau alpha ou un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Prediction and Interval Formulas;dt << Profiler(	Y( :Pred Formula y ),	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ));Wait( 2 );obj << Prediction and Interval Formulas( 0.01 );dt << Profiler(	Y( :Pred Formula y2 ),	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ));

```

#### Press

**Syntaxe :** obj &lt;&lt; Press( state=0|1 )

**Description :** Affiche ou masque la statistique Somme des carrés des erreurs de prédiction (PRESS) et la racine de son erreur quadratique moyenne (RMSE). Cette statistique est utile pour la comparaison de plusieurs modèles. Les modèles avec une statistique PRESS inférieure sont préférés.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Press( 1 );

```

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Profiler( 1 );

```

#### Publish Conditional Formula

**Syntaxe :** obj &lt;&lt; Publish Conditional Formula

**Description :** Crée une formule de prédiction qui comprend les estimations de l&apos;effet aléatoire et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**Syntaxe :** obj &lt;&lt; Publish Indiv Confid Limit Formula

**Description :** Crée des formules pour les bornes de l&apos;intervalle de confiance individuel et les publie sous la forme de scripts de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**Syntaxe :** obj &lt;&lt; Publish Mean Confid Limit Formula

**Description :** Crée des formules pour les bornes de l&apos;intervalle de confiance de la moyenne et les publie sous la forme de scripts de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**Syntaxe :** obj &lt;&lt; Publish Parameterized Formula

**Description :** Crée une formule de prédiction qui utilise des paramètres plutôt que des constantes et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**Syntaxe :** obj &lt;&lt; Publish Prediction Formula

**Description :** Crée une formule de prévision et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**Syntaxe :** obj &lt;&lt; Publish Standard Error Formula

**Description :** Crée une formule d&apos;erreur standard et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);code = obj << Publish Standard Error Formula;

```

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs du résidu du modèle ajusté. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Residuals;

```

#### Save Coding Table

**Syntaxe :** obj &lt;&lt; Save Coding Table

**Description :** Crée une nouvelle table de données qui contient le codage JMP pour tous les paramètres du modèle. La dernière colonne affiche les valeurs de la variable de réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Save Coding Table;

```

#### Scaled Estimates

**Syntaxe :** obj &lt;&lt; Scaled Estimates( state=0|1 )

**Description :** Affiche ou masque les estimations des paramètres correspondant aux facteurs standardisés de manière à avoir une moyenne de zéro et une étendue de deux.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR	),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**Syntaxe :** obj &lt;&lt; Sequential Tests( state=0|1 )

**Description :** Affiche ou masque le rapport Tests séquentiels (type 1), qui contient les sommes des carrés alors que des effets sont ajoutés au modèle de manière séquentielle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**Syntaxe :** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**Description :** Affiche ou masque des intervalles de confiance pour les estimations des paramètres et de la moyenne des moindres carrés.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show All Confidence Intervals( 1 );

```

#### Show CV

**Syntaxe :** obj &lt;&lt; Show CV( state=0|1 )

**Description :** Affiche ou masque la colonne Coefficient de variation dans le rapport Estimations du composant de la variance du maximum de vraisemblance restreint (REML).

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Show CV( 1 );

```

#### Show Prediction Expression

**Syntaxe :** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**Description :** Affiche ou masque le rapport Expression de la prédiction, qui contient l&apos;équation du modèle estimé.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**Syntaxe :** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**Description :** Affiche ou masque la colonne Racine carrée du composant de variance dans le rapport Estimations du composant de la variance du maximum de vraisemblance restreint (REML).

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Run);Wait( 1 );obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**Syntaxe :** obj &lt;&lt; Show VIF( state=0|1 )

**Description :** Affiche ou masque les valeurs des facteurs d&apos;inflation de la variance (VIF) dans le rapport Estimations des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Show VIF( 1 );

```

#### Sorted Estimates

**Syntaxe :** obj &lt;&lt; Sorted Estimates( state=0|1 )

**Description :** Affiche ou masque le rapport Estimations des coefficients triées, qui est utile dans les situations de criblage. Ce rapport contient les estimations des coefficients triées par valeur absolue du t ratio pour chaque estimation.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**Syntaxe :** obj &lt;&lt; Std Error of Individual

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;erreur standard d&apos;une valeur prédite individuelle. Elle est utilisée pour calculer l&apos;intervalle de confiance individuel. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Individual;

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;erreur standard des valeurs prédites. Elle est utilisée pour calculer l&apos;intervalle de confiance de la moyenne. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Predicted;

```

#### Std Error of Residual

**Syntaxe :** obj &lt;&lt; Std Error of Residual

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient l&apos;erreur standard des valeurs du résidu. Elle est utilisée pour calculer les résidus de Student. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Std Error of Residual;

```

#### StdErr Pred Formula

**Syntaxe :** obj &lt;&lt; StdErr Pred Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient la formule de l&apos;erreur standard pour les valeurs prédites comme une fonction des régresseurs. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << StdErr Pred Formula;

```

#### Studentized Residuals

**Syntaxe :** obj &lt;&lt; Studentized Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient le résidu de Student, qui est le résidu divisé par son erreur standard. Maintenez la touche Maj enfoncée pour entrer un suffixe.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Studentized Residuals;

```

#### Summary of Fit

**Syntaxe :** obj &lt;&lt; Summary of Fit( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient un résumé des statistiques d&apos;ajustement du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run( Summary of Fit( 0 ) ));Wait( 1 );obj << Summary of Fit( 1 );

```

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description :** Affiche ou masque une représentation 3D de la surface de réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);Wait( 1 );obj << Surface Profiler( 1 );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$Sample_Data/Drug.jmp" );obj = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Least Squares(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit LogVariance > Response Fit LogVariance

### Messages d'éléments

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Pressure, :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << (:Pressure << Plot Actual By Predicted( 0 ));Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );Wait( 1 );preset = obj << (1 << New Preset);obj << (2 << Apply Preset( preset ));

```

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur d&apos;isoréponses, qui affiche la représentation graphique des isoréponses de la réponse pour deux facteurs en même temps.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Contour Profiler( 1 );

```

#### Indiv Confidence Interval

**Syntaxe :** obj &lt;&lt; Indiv Confidence Interval

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les bornes de l&apos;intervalle de confiance pour les valeurs de réponse individuelles.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Indiv Confidence Interval;

```

#### Mean Confidence Interval

**Syntaxe :** obj &lt;&lt; Mean Confidence Interval

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les limites d&apos;un intervalle de confiance pour la moyenne de la prédiction.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Mean Confidence Interval;

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Model Dialog;

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Pressure, :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << (:Pressure << Plot Actual By Predicted( 0 ));Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );Wait( 1 );preset = obj << (1 << New Preset);

```

#### Plot Actual by Predicted

**Syntaxe :** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique de diagnostic avec les valeurs observées sur l&apos;axe vertical et les valeurs prédites sur l&apos;axe horizontal. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run( Plot Actual by Predicted( 0 ) ));Wait( 1 );obj << Plot Actual by Predicted( 1 );

```

#### Plot Studentized Residual by Predicted

**Syntaxe :** obj &lt;&lt; Plot Studentized Residual by Predicted( state=0|1 )

**Description :** Affiche ou masque un graphique de diagnostic avec les résidus de Student sur l&apos;axe vertical et les valeurs prédites sur l&apos;axe horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Plot Studentized Residual by Predicted( 1 );

```

#### Plot Studentized Residual by Row

**Syntaxe :** obj &lt;&lt; Plot Studentized Residual by Row( state=0|1 )

**Description :** Affiche ou masque un graphique de diagnostic avec les résidus de Student sur l&apos;axe vertical et le numéro de ligne sur l&apos;axe horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Plot Studentized Residual by Row( 1 );

```

#### Prediction Formula

**Syntaxe :** obj &lt;&lt; Prediction Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient les valeurs prédites de la moyenne, telles que calculées par le modèle spécifié.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;

```

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Profiler( 1 );

```

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus, c&apos;est-à-dire les valeurs de la réponse observée moins les valeurs prédites.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Residuals;

```

#### Std Dev Formula

**Syntaxe :** obj &lt;&lt; Std Dev Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient les valeurs prédites de l&apos;écart-type, telles que calculées par le modèle spécifié.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Std Dev Formula;

```

#### Std Error of Individual

**Syntaxe :** obj &lt;&lt; Std Error of Individual

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les erreurs standard des valeurs prédites individuelles.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Std Error of Individual;

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; Std Error of Predicted

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les erreurs standard des valeurs prédites.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Std Error of Predicted;

```

#### Studentized Residuals

**Syntaxe :** obj &lt;&lt; Studentized Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. Les valeurs de la nouvelle colonne sont les résidus divisés par leur erreur standard.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Studentized Residuals;

```

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description :** Affiche ou masque des surfaces de réponse interactives pour la réponse et l&apos;écart-type de la réponse.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Surface Profiler( 1 );

```

#### Variance Formula

**Syntaxe :** obj &lt;&lt; Variance Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient les valeurs prédites de la variance, telles que calculées par le modèle spécifié.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Variance Formula;

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Prediction Formula;obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Prediction Formula;r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Prediction Formula(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit LogVariance

### Constructeurs associés

#### Fit LogVariance

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Loglinear Variance" ) )

**Description :** Ajuste un modèle pour la moyenne et la variance d&apos;une variable de réponse continue. Vous pouvez spécifier différents ensembles d&apos;effets pour les deux modèles.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);

```

### Messages d'éléments

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur d&apos;isoréponses, qui affiche la représentation graphique des isoréponses de la réponse pour deux facteurs en même temps.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Contour Profiler( 1 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Model Dialog;

```

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Profiler( 1 );

```

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description :** Affiche ou masque des surfaces de réponse interactives pour la réponse et l&apos;écart-type de la réponse.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);Wait( 0 );obj << Surface Profiler( 1 );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Report View( "Summary" );

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );obj = dt << Fit Model(	Y( :Shrinkage ),	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),	Personality( "Loglinear Variance" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Fit Manova > Effect

### Messages d'éléments

#### Centroid Plot

**Syntaxe :** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Centroid Plot( state=0|1 )))

**Description :** Affiche ou masque une table de données de valeurs centroïdes et un graphique de centroïdes (moyennes des moindres carrés multivariées) sur les deux premières variables canoniques formées à partir de l&apos;espace test. Remarque : le terme Constante est spécifié comme Effet[0].

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));Wait( 0 );obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

#### Contrast

**Syntaxe :** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Contrast( [ l1 l2 l3 ... ] )))

**Description :** Exécute un test F personnalisé pour les contrastes statistiques de niveaux de traitement pour un effet dans le modèle. Spécifiez les contrastes comme argument de vecteur. Remarque : le terme Constante est spécifié comme Effet[0].

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));Wait( 0 );obj << (Response[1] << (Effect[3] << Contrast( [0.5 0.5 -0.5 -0.5] )));

```

#### Save Canonical Scores

**Syntaxe :** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Save Cannonical Scores

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les scores canoniques pour l&apos;effet spécifié. Remarque : le terme Constante est spécifié comme Effet[0].

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));Wait( 0 );obj << (Response[1] << (Effect[1] << Save Canonical Scores));

```

#### Test Details

**Syntaxe :** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Test Details( state=0|1 )))

**Description :** Affiche ou masque les détails canoniques du test pour l&apos;effet spécifié. Remarque : le terme Constante est spécifié comme Effet[0].

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));Wait( 0 );obj << (Response[1] << (Effect[1] << Test Details( 1 )));

```

## Fit Manova > Response

### Messages d'éléments

#### Custom Test

**Syntaxe :** obj &lt;&lt; (Response[i] &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; ))

**Description :** Lance un test F personnalisé qui compare les différents effets dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ), Response Function( "Contrast" ) ));Wait( 0 );obj << (Response[2] << Custom Test( [0 1 0 -1 0], Label( "Test 1" ) ));

```

#### Effect

**Syntaxe :** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; effect options))

**Description :** Vous permet d&apos;envoyer des messages à un effet spécifique dans une réponse spécifique de la fenêtre de rapport. Pour plus d&apos;informations à propos des messages pouvant être envoyés à un effet, sélectionnez Objets > Modèle linéaire > Ajustement par MANOVA > Effet dans l&apos;index des scripts. Remarque : le terme Constante est spécifié comme effet[0].

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run( Response Function( "Sum" ) ));obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

## Fit Manova

### Constructeurs associés

#### Fit Manova

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Manova" ) )

**Description :** Ajuste un modèle impliquant plusieurs variables de réponse continues. Les méthodes incluent l&apos;analyse de la variance multivariée, les mesures répétées, l&apos;analyse discriminante et les corrélations canoniques.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);

```

### Messages d'éléments

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Model Dialog;

```

#### Response Function

**Syntaxe :** obj &lt;&lt; Response Function( matrix type, &lt;Univariate Tests Also&gt; )

**Description :** Spécifie le type de matrice pour la fonction de réponse. Cette matrice est la matrice M, dont les colonnes définissent un ensemble de variables de transformation pour l&apos;analyse multivariée. L&apos;argument facultatif Tests univariés également spécifie que le rapport inclut les tests de mesures répétées univariés ajustés et non ajustés, ainsi que les tests multivariés.

**Exemple de base**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Response Function( "Sum" );

```

**Inclure les tests univariés**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);Wait( 0 );obj << Response Function( "Contrast", Univariate Tests Also );

```

#### Save Discrim

**Syntaxe :** obj &lt;&lt; Save Discrim

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les distances de Mahalanobis, la probabilité d&apos;appartenance à chaque niveau de l&apos;effet ainsi que le niveau prédit ayant la probabilité la plus élevée. Remarque : cette option est disponible uniquement lorsque le modèle contient un effet catégoriel.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Fit Model(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Effects( :Species ),	Personality( "Manova" ),	Run);obj << Save Discrim;

```

#### Save Predicted

**Syntaxe :** obj &lt;&lt; Save Predicted

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les valeurs prédites pour chaque réponse dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Predicted;

```

#### Save Residuals

**Syntaxe :** obj &lt;&lt; Save Residuals

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les résidus pour chaque réponse dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Residuals;

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Fit Model(	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Effects( :drug, :dep1, :drug * :dep1 ),	Personality( "Manova" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Manova(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Mixed

### Constructeurs associés

#### Fit Mixed

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Random Effects( columns ), Repeated Effects( columns ), Repeated Structure( type ), Personality( "Mixed Model" ) )

**Description :** Ajuste un modèle linéaire mixte pour une variété de structures de covariance complexes en utilisant le REML. Ces modèles peuvent être utilisés pour les coefficients aléatoires, les mesures répétées, les split-plots, les données spatiales et les données avec plusieurs réponses corrélées.

**Modèle à coefficients aléatoires**

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());

```

**Modèle à mesures répétées**

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Time ),	Repeated Structure( "Unstructured" ),	Run);

```

**Modèle en blocs aléatoires**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = dt << Fit Model(	Y( :Calories ),	Effects( :Sugars, :Fiber Gr, :Sugars * :Fiber Gr ),	Random Effects( :Manufacturer ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Run);

```

**Modèle spatial**

```jsl

dt = Open( "$SAMPLE_DATA/Uniformity Trial.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects,	Center Polynomials( 0 ),	Personality( "Mixed Model" ),	Repeated Effects( :Row, :Column ),	Repeated Structure( "Spatial" ),	Repeated Structure Type( "Spherical" ),	Run);

```

**Modèle split-plot**

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);

```

### Messages d'éléments

#### Actual by Conditional Predicted Plot

**Syntaxe :** obj &lt;&lt; Actual by Conditional Predicted Plot( state=0|1 )

**Description :** Affiche ou masque un graphique des valeurs observées en fonction des valeurs prédites par le modèle, tout en tenant compte des effets aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Actual by Conditional Predicted Plot( 0 ) ));Wait( 1 );obj << Actual by Conditional Predicted Plot( 1 );

```

#### Actual by Predicted Plot

**Syntaxe :** obj &lt;&lt; Actual by Predicted Plot( state=0|1 )

**Description :** Affiche ou masque un graphique des valeurs observées en fonction des valeurs prédites par le modèle, sans considérer les effets aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Actual by Predicted Plot( 0 ) ));Wait( 1 );obj << Actual by Predicted Plot( 1 );

```

#### Between-Within Degrees of Freedom

**Syntaxe :** obj &lt;&lt; Between-Within Degrees of Freedom( state=0|1)

**Description :** Remplace les erreurs standard par des estimations non ajustées et les degrés de liberté vers une base inter-intra dans l&apos;ensemble du rapport. Pour utiliser les degrés de liberté inter-intra dans un rapport Comparaisons multiples, vous devez sélectionner cette option avant d&apos;ajouter un rapport Comparaisons multiples.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Time ),	Repeated Structure( "Unstructured" ),	Run);Wait( 1 );obj << "Between-Within Degrees of Freedom"n( 1 );

```

#### Compare Slopes

**Syntaxe :** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**Description :** Affiche ou masque un rapport qui vous permet de comparer les pentes de chaque niveau de l&apos;effet d&apos;interaction dans un modèle d&apos;analyse de covariance (ANCOVA). Cette option n&apos;est disponible que lorsqu&apos;il y a un terme nominal, un terme continu et leur effet d&apos;interaction pour les effets fixes.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );obj = dt << Fit Model(	Y( :Calories ),	Effects( :Sugars, :Fiber Gr, :Sugars * :Fiber Gr ),	Random Effects( :Manufacturer ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Compare Slopes(	Effect( :Sugars * :Fiber Gr ),	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) ));

```

#### Conditional Contour Profiler

**Syntaxe :** obj &lt;&lt; Conditional Contour Profiler( state=0|1 )

**Description :** Affiche ou masque une représentation graphique d&apos;un profileur d&apos;isoréponses de la réponse conditionnelle pour deux facteurs à la fois. Cette option n&apos;est disponible que lorsque le modèle contient au moins deux effets continus et au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );obj = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept,	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Contour Profiler( 1 );

```

#### Conditional Mean CI

**Syntaxe :** obj &lt;&lt; Conditional Mean CI

**Description :** Enregistre deux nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les limites de confiance inférieure et supérieure pour la valeur attendue de la prédiction conditionnelle. Les intervalles de confiance comprennent les estimations des effets aléatoires pour les modèles qui en contiennent. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects( :Variety, :Variety * :Moisture ),	Personality( "Mixed Model" ),	Run);obj << Conditional Mean CI;

```

#### Conditional Mixture Profiler

**Syntaxe :** obj &lt;&lt; Conditional Mixture Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur de mélange qui représente les isoréponses de la réponse conditionnelle sur un graphique ternaire. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire et si l&apos;attribut Effet de mélange est appliqué à au moins trois facteurs dans le modèle ou si la propriété Mélange est appliquée à au moins trois colonnes de facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );obj = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept,	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Mixture Profiler( 1 );

```

#### Conditional Prediction Formula

**Syntaxe :** obj &lt;&lt; Conditional Prediction Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient la formule de prédiction de la moyenne conditionnelle. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Conditional Prediction Formula;

```

#### Conditional Predictions

**Syntaxe :** obj &lt;&lt; Conditional Predictions

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs prédites pour la moyenne conditionnelle. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Conditional Predictions;

```

#### Conditional Profiler

**Syntaxe :** obj &lt;&lt; Conditional Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prédiction, qui permet de donner pour chaque facteur la coupe de la surface de prédiction conditionnelle. Le profileur de prédiction est doté de fonctions d&apos;optimisation. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Profiler( 1 );

```

#### Conditional Residual Plots

**Syntaxe :** obj &lt;&lt; Conditional Residual Plots( state=0|1 )

**Description :** Affiche ou masque les graphiques des résidus qui évaluent l&apos;ajustement du modèle, tout en tenant compte des effets aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Residual Plots( 1 );

```

#### Conditional Residuals

**Syntaxe :** obj &lt;&lt; Conditional Residuals

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule pour les résidus conditionnels, donnée sous la forme des valeurs de la réponse observée moins la formule de prédiction.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Conditional Residuals;

```

#### Conditional Surface Profiler

**Syntaxe :** obj &lt;&lt; Conditional Surface Profiler( state=0|1 )

**Description :** Affiche ou masque une surface de réponse 3D de la réponse conditionnelle. Cette option n&apos;est disponible que lorsque le modèle contient au moins deux effets et au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Conditional Surface Profiler( 1 );

```

#### Containment Degrees of Freedom

**Syntaxe :** obj &lt;&lt; Containment Degrees of Freedom( state=0|1 )

**Description :** Remplace les erreurs standard par des estimations non ajustées et les degrés de liberté vers une base de confinement (méthode containment) dans l&apos;ensemble du rapport. Pour utiliser les degrés de liberté avec la méthode containment (confinement) dans un rapport Comparaisons multiples, vous devez sélectionner cette option avant d&apos;ajouter un rapport Comparaisons multiples.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Fixed Effects Tests( 0 ) ));Wait( 1 );obj << Containment Degrees of Freedom( 1 );

```

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description :** Affiche ou masque une représentation graphique d&apos;un profileur d&apos;isoréponses de la réponse marginale pour deux facteurs à la fois. Cette option n&apos;est disponible que lorsque le modèle contient au moins deux effets fixes continus.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );obj = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept,	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Contour Profiler( 1 );

```

#### Correlation of Fixed Effects

**Syntaxe :** obj &lt;&lt; Correlation of Fixed Effects( state=0|1 )

**Description :** Affiche ou masque la matrice de corrélation pour les effets fixes dans le modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	Random Effects( :Patient[:Treatment] ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Days ),	Repeated Structure( "AR(1)" ),	Run);Wait( 1 );obj << Correlation of Fixed Effects( 1 );

```

#### Covariance of All Parameters

**Syntaxe :** obj &lt;&lt; Covariance of All Parameters( state=0|1 )

**Description :** Affiche ou masque la matrice de covariance pour tous les effets dans le modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	Random Effects( :Patient[:Treatment] ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Days ),	Repeated Structure( "AR(1)" ),	Run);Wait( 1 );obj << Covariance of All Parameters( 1 );

```

#### Covariance of Covariance Parameters

**Syntaxe :** obj &lt;&lt; Covariance of Covariance Parameters( state=0|1 )

**Description :** Affiche ou masque la matrice de covariance pour les effets aléatoires dans le modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	Random Effects( :Patient[:Treatment] ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Days ),	Repeated Structure( "AR(1)" ),	Run);Wait( 1 );obj << Covariance of Covariance Parameters( 1 );

```

#### Covariance of Fixed Effects

**Syntaxe :** obj &lt;&lt; Covariance of Fixed Effects( state=0|1 )

**Description :** Affiche ou masque la matrice de covariance pour les effets fixes dans le modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	Random Effects( :Patient[:Treatment] ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Days ),	Repeated Structure( "AR(1)" ),	Run);Wait( 1 );obj << Covariance of Fixed Effects( 1 );

```

#### Dispose Reports

**Syntaxe :** obj = Fit Model(...Dispose Reports( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Permet de spécifier qu&apos;aucun rapport du modèle individuel n&apos;est affiché et qu&apos;ils sont supprimés de la mémoire après l&apos;ajustement. Lorsqu&apos;il y a des milliers de réponses, cette option réduit le temps de calcul et économise la mémoire. Utiliser cette option avec l&apos;option Résultats dans les tables de données pour collecter les résultats à partir des modèles ajustés.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Mixed Model" ),	Results in Data Tables( 1 ),	Dispose Reports( 1 ),	Run);

```

#### Empirical Standard Errors

**Syntaxe :** obj &lt;&lt; Empirical Standard Errors( state=0|1 )

**Description :** Remplace les erreurs standard par des estimations de Sandwich dans l&apos;ensemble du rapport. Pour utiliser les estimations de Sandwich dans un rapport de comparaisons multiples, vous devez sélectionner cette option avant d&apos;ajouter un rapport Comparaisons multiples.

**JMP Version ajoutée :** 19

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Empirical Standard Errors( 1 );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run( Empirical Standard Errors( 1 ) ));Wait( 1 );obj << Multiple Comparisons(	Effect( :species ),	Comparisons with Control( 1, Control Level( "species:COYOTE" ) ));

```

#### Fit Statistics

**Syntaxe :** obj &lt;&lt; Fit Statistics( state=0|1 )

**Description :** Affiche ou masque un rapport sur les statistiques d&apos;ajustement du modèle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Fit Statistics( 0 ) ));Wait( 1 );obj << Fit Statistics( 1 );

```

#### Fixed Effects Parameter Estimates

**Syntaxe :** obj &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 )

**Description :** Affiche ou masque une table de données des estimations des paramètres des effet fixes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Fixed Effects Parameter Estimates( 0 ) ));Wait( 1 );obj << Fixed Effects Parameter Estimates( 1 );

```

#### Fixed Effects Tests

**Syntaxe :** obj &lt;&lt; Fixed Effects Tests( state=0|1 )

**Description :** Affiche ou masque les tests des effets fixes. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Fixed Effects Tests( 0 ) ));Wait( 1 );obj << Fixed Effects Tests( 1 );

```

#### Homogeneity of Variance Test

**Syntaxe :** obj &lt;&lt; Homogeneity of Variance Test( state=0|1 )

**Description :** Calcule un test d&apos;homogénéité de la variance pour la variable de groupement spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Repeated Effects( :Tenderizer ),	Repeated Structure( "Unequal Variances" ),	Run);Wait( 1 );obj << Homogeneity of Variance Test( 1 );

```

#### Indiv Confidence Interval

**Syntaxe :** obj &lt;&lt; Indiv Confidence Interval

**Description :** Enregistre deux nouvelles colonnes dans la table de données. Ces nouvelles colonnes contiennent les bornes de l&apos;intervalle de confiance pour les valeurs individuelles de réponse.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects( :Variety, :Variety * :Moisture ),	Personality( "Mixed Model" ),	Run);obj << Indiv Confidence Interval;

```

#### Inverse Prediction

**Syntaxe :** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description :** Génère une valeur prévue X et un intervalle de confiance en se basant sur les valeurs de Y et sur tous les autres facteurs spécifiés.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Inverse Prediction( Response( 75 ), Term Value( Moisture( . ), Variety( All ) ) );

```

#### Linear Combination of Variance Components

**Syntaxe :** obj &lt;&lt; Linear Combination of Variance Components( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**Description :** Affiche un rapport qui vous permet de calculer les intervalles de confiance pour des combinaisons linéaires des composantes de la variance. Cette option n&apos;est disponible que lorsqu&apos;il y a des effets sur le côté G.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects,	Random Effects( :Operator, :Instrument[:Operator], :Part[:Operator, :Instrument] ),	NoBounds( 0 ),	Personality( "Mixed Model" ),	Run(		Repeated Effects Covariance Parameter Estimates( 0 ),		Linear Combination of Variance Components( [1 1 0 1], Label( " " ) )	));

```

#### Mean Confidence Interval

**Syntaxe :** obj &lt;&lt; Mean Confidence Interval

**Description :** Enregistre deux nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les limites de confiance inférieure et supérieure pour la réponse moyenne.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects( :Variety, :Variety * :Moisture ),	Personality( "Mixed Model" ),	Run);obj << Mean Confidence Interval;

```

#### Mixture Profiler

**Syntaxe :** obj &lt;&lt; Mixture Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur de mélange qui représente les isoréponses de la réponse marginale sur un graphique ternaire. Cette option n&apos;est disponible que si l&apos;attribut Effet de mélange est appliqué à au moins trois facteurs dans le modèle ou si la propriété Mélange est appliquée à au moins trois colonnes de facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );obj = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept,	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Mixture Profiler( 1 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run);obj << Model Dialog;

```

#### Multiple Comparisons

**Syntaxe :** obj &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; )

**Description :** Génère les estimations des moyennes des moindres carrés, ou les estimations définies par l&apos;utilisateur, qui vous permettent d&apos;effectuer des comparaisons avec la moyenne générale, avec un contrôle ou par paire. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe.

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n	),	Random Effects( :Patient[:Treatment] ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Multiple Comparisons(	Effect( :Treatment ),	Comparisons with Control( 1, Control Level( "Treatment:Control" ) ));

```

#### Prediction Formula

**Syntaxe :** obj &lt;&lt; Prediction Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient la formule de prédiction de la moyenne marginale.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**Syntaxe :** obj &lt;&lt; Prediction and Interval Formulas

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les colonnes contiennent les formules pour les prévisions et les intervalles de confiance. Les colonnes de limites créées par cette option contiennent des propriétés utilisées par le profileur de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Prediction and Interval Formulas;Wait( 1 );Profiler( Y( :Pred Formula Yield 2 ) );

```

#### Predictions

**Syntaxe :** obj &lt;&lt; Predictions

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les valeurs prédites pour la moyenne marginale.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Predictions;

```

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prédiction, qui permet de donner pour chaque facteur la coupe de la surface de prédiction marginale. Le profileur de prédiction est doté de fonctions d&apos;optimisation. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Profiler( 1 );

```

#### Random Coefficients

**Syntaxe :** obj &lt;&lt; Random Coefficients( state=0|1 )

**Description :** Affiche ou masque un rapport des estimations pour les coefficients aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Random Coefficients( 0 ) ));Wait( 1 );obj << Random Coefficients( 1 );

```

#### Random Effects Covariance Parameter Estimates

**Syntaxe :** obj &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 )

**Description :** Affiche ou masque une table de données des estimations des paramètres de covariance des effets aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run( Random Effects Covariance Parameter Estimates( 0 ) ));Wait( 1 );obj << Random Effects Covariance Parameter Estimates( 1 );

```

#### Random Effects Predictions

**Syntaxe :** obj &lt;&lt; Random Effects Predictions( state=0|1 )

**Description :** Affiche ou masque une table de données des prédictions des effets aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Random Effects Predictions( 1 );

```

#### Repeated Effects Covariance Parameter Estimates

**Syntaxe :** obj &lt;&lt; Repeated Effects Covariance Parameter Estimates( state=0|1 )

**Description :** Affiche ou masque un tableau des estimations des paramètres de covariance des effets répétés. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet répété. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n	),	Subject( :Patient ),	Repeated Effects( :Time ),	Repeated Structure( "Unstructured" ),	Personality( "Mixed Model" ),	Run( Repeated Effects Covariance Parameter Estimates( 0 ) ));Wait( 1 );obj << Repeated Effects Covariance Parameter Estimates( 1 );

```

#### Repeated Measures Covariance Diagnostics

**Syntaxe :** obj &lt;&lt; Repeated Measures Covariance Diagnostics( state=0|1 )

**Description :** Affiche ou masque un rapport qui contient des outils de diagnostic permettant de déterminer des structures de covariance candidates pour l&apos;analyse des mesures répétées. Cette option n&apos;est disponible que pour les modèles qui spécifient une structure de covariance répétée non structurée.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Treatment, :Month, :Month * :Treatment ),	NoBounds( 1 ),	Personality( "Mixed Model" ),	Subject( :Patient ),	Repeated Effects( :Time ),	Repeated Structure( "Unstructured" ),	Run);Wait( 1 );obj << Repeated Measures Covariance Diagnostics( 1 );

```

#### Residual Plots

**Syntaxe :** obj &lt;&lt; Residual Plots( state=0|1 )

**Description :** Affiche ou masque les graphiques des résidus qui évaluent l&apos;ajustement du modèle, sans tenir compte des effets aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Residual Plots( 1 );

```

#### Residuals

**Syntaxe :** obj &lt;&lt; Residuals

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les résidus, c&apos;est-à-dire les valeurs de la réponse observée moins leurs valeurs prédites marginales moyennes.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Residuals;

```

#### Results in Data Tables

**Syntaxe :** obj = Fit Model(...Results in Data Tables( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Enregistre les résultats individuels du modèle sur de nombreuses réponses dans des tables de données. Le contenu et le nombre de tables de données de sortie dépendent du modèle en cours d&apos;ajustement.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Mixed Model" ),	Results in Data Tables( 1 ),	Run);

```

#### Save Simulation Formula

**Syntaxe :** obj &lt;&lt; Save Simulation Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. la nouvelle colonne peut servir à créer des valeurs de réponse aléatoires à partir du modèle ajusté. Vous pouvez utiliser la colonne de formule avec la fonction Simuler dans JMP Pro. Cette option n&apos;est pas disponible si une variable Par est utilisée. Utilisez des tables extraites si des formules de simulation de groupe Par sont nécessaires.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Save Simulation Formula;

```

#### Sequential Tests

**Syntaxe :** obj &lt;&lt; Sequential Tests( state=0|1 )

**Description :** Affiche ou masque le rapport Tests séquentiels (type 1), qui contient les sommes des carrés alors que des effets sont ajoutés au modèle de manière séquentielle. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Sequential Tests( 1 );

```

#### Show Sqrt Variance Component

**Syntaxe :** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**Description :** Affiche ou masque la colonne Racine carrée du composant de variance dans le rapport Estimations du composant de la variance du maximum de vraisemblance restreint (REML).

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**Syntaxe :** obj &lt;&lt; Show VIF( state=0|1 )

**Description :** Affiche ou masque les valeurs des facteurs d&apos;inflation de la variance (VIF) dans l&apos;onglet Codage de l&apos;effet du rapport Estimations des paramètres des effets fixes.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Show VIF( 1 );

```

#### Stability Analysis

**Syntaxe :** obj &lt;&lt; Stability Analysis

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );obj = dt << Fit Model(	Y( :"Concentration (mg/Kg)"n ),	Effects( :Time ),	Random Effects( :Batch Number, :Batch Number * :Time ),	NoBounds( 0 ),	Personality( "Mixed Model" ),	Run( Repeated Effects Covariance Parameter Estimates( 0 ) ));obj << Stability Analysis( Quantile( 0.1 ), Lower Spec Limit( 99 ) );

```

#### Standard Error of Conditional Predicted

**Syntaxe :** obj &lt;&lt; Standard Error of Conditional Predicted

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les erreurs standard des prédictions de la moyenne conditionnelle. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Standard Error of Conditional Predicted;

```

#### Standard Error of Predicted

**Syntaxe :** obj &lt;&lt; Standard Error of Predicted

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les erreurs standard de la prédiction de la moyenne marginale.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run);obj << Standard Error of Predicted;

```

#### Suppress Reports

**Syntaxe :** obj = Fit Model(...Suppress Reports( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Permet de spécifier que les rapports du modèle sont masqués. Lorsqu&apos;il y a des milliers de réponses, cette option réduit le temps de calcul. Les objets d&apos;ajustement et certains éléments de menu restent disponibles. Utiliser l&apos;option Résultats dans les tables de données pour collecter les résultats à partir des rapports du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Mixed Model" ),	Results in Data Tables( 1 ),	Suppress Reports( 1 ),	Run);

```

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description :** Affiche ou masque une surface de réponse 3D de la réponse marginale. Cette option n&apos;est disponible que lorsque le modèle contient au moins deux effets.

```jsl

dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),	Random Effects( :Carcass, :Carcass * :Tenderizer ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Surface Profiler( 1 );

```

#### Variogram

**Syntaxe :** obj &lt;&lt; Variogram( &lt;X( columns )&gt;, &lt;Model 1, Model 2, ...&gt; )

**Description :** Affiche ou masque un graphique variogramme qui montre le changement de la covariance avec l&apos;augmentation de la distance entre les observations. Lorsque l&apos;option Structure résiduelle est sélectionnée, vous pouvez sélectionner les colonnes à utiliser comme coordonnées spatiales ou temporelles.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );obj = dt << Fit Model(	Y( :Ozone Concentration ),	Effects,	Center Polynomials( 0 ),	Personality( "Mixed Model" ),	Run);Wait( 1 );obj << Variogram( X( :month ), Exponential, Exponential with Nugget );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Wheat.jmp" );obj = dt << Fit Model(	Y( :Yield ),	Effects( :Moisture ),	Random Effects(		Intercept[:Variety] & Random Coefficients( 1 ),		:Moisture[:Variety] & Random Coefficients( 1 )	),	Personality( "Mixed Model" ),	Run());r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Mixed(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Nominal Logistic

### Constructeurs associés

#### Fit Nominal Logistic

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Nominal Logistic" ) )

**Description :** Ajuste un modèle de régression logistique de catégories de réponses nominales, pour des régresseurs continus et catégoriels.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);

```

### Messages d'éléments

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**Description :** Affiche ou masque les intervalles de confiance fondés sur la vraisemblance profilée à (1 - fraction) % des paramètres du modèle. L&apos;argument fraction remplace le niveau alpha défini au lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Confidence Intervals( 0.01 );Wait( 1 );obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**Syntaxe :** obj &lt;&lt; Confusion Matrix( state=0|1 )

**Description :** Affiche ou masque une matrice de tabulation croisée des réponses réelles et prévues.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur d&apos;isoréponses, qui représente graphiquement les isoréponses de la réponse pour deux facteurs à la fois. Disponible uniquement lorsque le modèle contient plusieurs facteurs continus.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Fit Model(	Y( :Species ),	Effects(		:Sepal length, :Sepal width, :Petal length, :Petal width,		:Sepal length * :Petal width, :Petal width * :Petal width	),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Contour Profiler( 1 );

```

#### Decision Threshold

**Syntaxe :** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number=0.5 ) )

**Description :** Affiche ou masque la distribution des probabilités ajustées ainsi que la table des valeurs prédites versus des valeurs réelles pour chaque modèle. Vous pouvez modifier le seuil de probabilité afin d&apos;explorer l&apos;impact des différents seuils sur les résultats de classification.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Decision Threshold( 1, Set Probability Threshold( 0.33 ) );

```

#### Dispose Reports

**Syntaxe :** obj = Fit Model(...Dispose Reports( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Permet de spécifier qu&apos;aucun rapport du modèle individuel n&apos;est affiché et qu&apos;ils sont supprimés de la mémoire après l&apos;ajustement. Lorsqu&apos;il y a des milliers de réponses, cette option réduit le temps de calcul et économise la mémoire. Utiliser cette option avec l&apos;option Résultats dans les tables de données pour collecter les résultats à partir des modèles ajustés.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Dispose Reports( 1 ),	Run);

```

#### Effect Summary

**Syntaxe :** obj &lt;&lt; Effect Summary( state=0|1 )

**Description :** Affiche ou masque le rapport Résumé des effets, qui vous permet de mettre à jour les effets dans le modèle de manière interactive. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntaxe :** obj &lt;&lt; FDR( state=0|1 )

**Description :** Indique si les valeurs logworth et leurs p-values correspondantes dans la table Résumé des effets sont ajustées en utilisant le taux de fausses découvertes (FDR).

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**Syntaxe :** obj &lt;&lt; Get Confusion Matrix Test

**Description :** Renvoie la matrice de confusion de l&apos;ensemble de test.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :BAD ),	Effects(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**Syntaxe :** obj &lt;&lt; Get Confusion Matrix Training

**Description :** Renvoie la matrice de confusion de l&apos;ensemble d’apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**Syntaxe :** obj &lt;&lt; Get Confusion Matrix Validation

**Description :** Renvoie la matrice de confusion de l&apos;ensemble de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**Syntaxe :** obj &lt;&lt; Get Confusion Rates Test

**Description :** Renvoie les taux de confusion de l&apos;ensemble de test.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :BAD ),	Effects(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**Syntaxe :** obj &lt;&lt; Get Confusion Rates Training

**Description :** Renvoie les taux de confusion de l&apos;ensemble d’apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**Syntaxe :** obj &lt;&lt; Get Confusion Rates Validation

**Description :** Renvoie les taux de confusion de l&apos;ensemble de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get MM SAS DATA Step

**Description :** Crée du code SAS que vous pouvez enregistrer dans le gestionnaire de modèles SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);code = obj << Get MM SAS Data Step;

```

#### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Get Measures;

```

#### Get Probability Formulas

**Syntaxe :** obj &lt;&lt; Get Probability Formulas

**Description :** Renvoie un script pour créer les formules de probabilité.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get SAS DATA Step

**Description :** Crée le code SAS que vous pouvez utiliser pour évaluer le score d’un nouveau jeu de données.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);code = obj << Get SAS Data Step;

```

#### Indicator Parameterization Estimates

**Syntaxe :** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**Description :** Affiche ou masque le rapport de la Paramétrisation par fonction indicatrice. Ce rapport contient les estimations des paramètres pour le modèle où les colonnes nominales sont codées à l&apos;aide de la paramétrisation par fonction indicatrice (SAS GLM) et sont traitées comme continues.

```jsl

dt = Open( "$Sample_Data/Detergent.jmp" );obj = dt << Fit Model(	Freq( :count ),	Y( :brand ),	Effects( :softness, :previous use, :temperature ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Indicator Parameterization Estimates( 1 );

```

#### Inverse Prediction

**Syntaxe :** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**Description :** Génère une valeur prévue X et un intervalle de confiance en se basant sur les valeurs de Y et sur tous les autres facteurs spécifiés.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Inverse Prediction( Response( 0.5, 0.75, 0.9 ) );

```

#### Lift Curve

**Syntaxe :** obj &lt;&lt; Lift Curve( state=0|1 )

**Description :** Affiche ou masque la courbe Lift. La courbe Lift représente le lift en fonction de la proportion des observations et propose une autre vision de la capacité prédictive d&apos;un modèle. Si vous avez utilisé la validation, la courbe Lift s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**Syntaxe :** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Description :** Affiche ou masque les tests du rapport de vraisemblance pour chaque effet. Chaque test compare la log-vraisemblance du modèle ajusté à la log-vraisemblance du modèle qui supprime un effet.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Likelihood Ratio Test( 1 );

```

#### Line Color

**Syntaxe :** obj &lt;&lt; Line Color( color )

**Description :** Vous permet de sélectionner la couleur des courbes du graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 1 );obj << Line Color( "Magenta" );

```

#### Logistic Plot

**Syntaxe :** obj &lt;&lt; Logistic Plot( state=0|1 )

**Description :** Affiche ou masque le rapport du Graphique logistique. Disponible uniquement si le modèle comporte un seul effet continu. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Logistic Plot( 0 );Wait( 1 );obj << Logistic Plot( 1 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Model Dialog;

```

#### Odds Ratios

**Syntaxe :** obj &lt;&lt; Odds Ratios( state=0|1 )

**Description :** Affiche ou masque un rapport sur les rapports de probabilités, contenant à la fois les rapports de probabilités unitaires et les rapports de probabilités de l&apos;étendue. Cette option n&apos;est pas disponible pour les réponses nominales avec plus de deux niveaux.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Odds Ratios( 1 );

```

#### Positive Level

**Syntaxe :** obj &lt;&lt; Positive Level

**Description :** Définit le niveau jugé positif pour être utilisé dans les courbes ROC.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Positive Level( "Cured" );obj << ROC Curve( 1 );

```

#### Precision Recall Curve

**Syntaxe :** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Description :** Affiche ou masque la courbe précision-rappel, qui contient une courbe pour chaque niveau de la variable de réponse. Une courbe précision-rappel représente les valeurs de précision en fonction des valeurs de rappel pour différents seuils. Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Positive Level( "Cured" );Wait( 0 );obj << Precision Recall Curve( 1 );

```

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prédiction, qui affiche les valeurs ajustées pour une probabilité de réponse spécifiée en fonction des variations des facteurs du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Profiler( 1 );

```

#### Publish Probability Formulas

**Syntaxe :** obj &lt;&lt; Publish Probability Formulas

**Description :** Construit les formules de probabilité et les publie sous la forme d&apos;un script de colonne de formule dans le dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Publish Probability Formulas;

```

#### ROC Curve

**Syntaxe :** obj &lt;&lt; ROC Curve( state=0|1 )

**Description :** Affiche ou masque la courbe ROC pour chaque niveau de la variable de réponse. La courbe ROC est un graphique de la sensibilité par rapport à (1 - spécificité). Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Positive Level( "Cured" );Wait( 0 );obj << ROC Curve( 1 );

```

#### Results in Data Tables

**Syntaxe :** obj = Fit Model(...Results in Data Tables( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Enregistre les résultats individuels du modèle sur de nombreuses réponses dans des tables de données. Le contenu et le nombre de tables de données de sortie dépendent du modèle en cours d&apos;ajustement.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Run);

```

#### Save Probability Formula

**Syntaxe :** obj &lt;&lt; Save Probability Formula

**Description :** Enregistre de nouvelles colonnes dans la table de données. Ces nouvelles colonnes contiennent des formules pour les combinaisons linéaires des niveaux de réponse, des formules de prédiction pour ces niveaux, et une formule de prédiction indiquant la réponse la plus probable.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Probability Formula;

```

#### Show Points

**Syntaxe :** obj &lt;&lt; Show Points( state=0|1 )

**Description :** Affiche ou masque les points dans le graphique logistique. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 1 );obj << Show Points( 0 );

```

#### Show Rate Curve

**Syntaxe :** obj &lt;&lt; Show Rate Curve( state=0|1 )

**Description :** Affiche ou masque la courbe de probabilité dans le graphique logistique. La courbe de probabilité est utile uniquement si vous avez plusieurs points pour chaque valeur de la variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);Wait( 1 );obj << Show Rate Curve( 1 );

```

#### Specify Profit Matrix

**Syntaxe :** obj &lt;&lt; Specify Profit Matrix( matrix, level1, level2, ... )

**Description :** Vous permet de spécifier les profits ou les coûts associés aux décisions correctes ou incorrectes de classification.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y Binary ),	Effects( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Nominal Logistic" ),	Run);Wait( 0 );obj << Specify Profit Matrix( [0 -1, -1 0, . .], "High", "Low", "Undecided" );

```

#### Suppress Reports

**Syntaxe :** obj = Fit Model(...Suppress Reports( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Permet de spécifier que les rapports du modèle sont masqués. Lorsqu&apos;il y a des milliers de réponses, cette option réduit le temps de calcul. Les objets d&apos;ajustement et certains éléments de menu restent disponibles. Utiliser l&apos;option Résultats dans les tables de données pour collecter les résultats à partir des rapports du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Suppress Reports( 1 ),	Run);

```

#### Wald Tests

**Syntaxe :** obj &lt;&lt; Wald Tests( state=0|1 )

**Description :** Affiche ou masque les statistiques du test du khi deux et les p-values des tests de Wald indiquant si chaque paramètre est égal à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Wald Tests( 1 );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Nominal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Ordinal Logistic

### Colonnes

#### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);

```

### Constructeurs associés

#### Fit Ordinal Logistic

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Ordinal Logistic" ) )

**Description :** Ajuste un modèle de régression logistique de catégories de réponses ordinales, pour des régresseurs continus et catégoriels.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);

```

### Messages d'éléments

#### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**Description :** Affiche ou masque les intervalles de confiance fondés sur la vraisemblance profilée à (1 - fraction) % des paramètres du modèle. L&apos;argument fraction remplace le niveau alpha défini au lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Confidence Intervals( 0.01 );Wait( 1 );obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**Syntaxe :** obj &lt;&lt; Confusion Matrix( state=0|1 )

**Description :** Affiche ou masque une matrice de tabulation croisée des réponses réelles et prévues.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);Wait( 0 );obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur d&apos;isoréponses, qui représente graphiquement les isoréponses de la réponse pour deux facteurs à la fois. Disponible uniquement lorsque le modèle contient plusieurs facteurs continus.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Fit Model(	Y( :Job Satisfaction ),	Effects(		:Years at Current Employer, :Salary, :Single Status, :Age in Years,		:Age in Years * :Years at Current Employer	),	Personality( "Ordinal Logistic" ),	Run);Wait( 0 );obj << Contour Profiler( 1 );

```

#### Dispose Reports

**Syntaxe :** obj = Fit Model(...Dispose Reports( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Permet de spécifier qu&apos;aucun rapport du modèle individuel n&apos;est affiché et qu&apos;ils sont supprimés de la mémoire après l&apos;ajustement. Lorsqu&apos;il y a des milliers de réponses, cette option réduit le temps de calcul et économise la mémoire. Utiliser cette option avec l&apos;option Résultats dans les tables de données pour collecter les résultats à partir des modèles ajustés.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Fit Model(	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),	Personality( "Ordinal Logistic" ),	Results in Data Tables( 1 ),	Dispose Reports( 1 ),	Run);

```

#### Effect Summary

**Syntaxe :** obj &lt;&lt; Effect Summary( state=0|1 )

**Description :** Affiche ou masque le rapport Résumé des effets, qui vous permet de mettre à jour les effets dans le modèle de manière interactive. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntaxe :** obj &lt;&lt; FDR( state=0|1 )

**Description :** Indique si les valeurs logworth et leurs p-values correspondantes dans la table Résumé des effets sont ajustées en utilisant le taux de fausses découvertes (FDR).

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**Syntaxe :** obj &lt;&lt; Get Confusion Matrix Test

**Description :** Renvoie la matrice de confusion de l&apos;ensemble de test.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Fit Model(	Validation( :Validation 2 ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**Syntaxe :** obj &lt;&lt; Get Confusion Matrix Training

**Description :** Renvoie la matrice de confusion de l&apos;ensemble d’apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**Syntaxe :** obj &lt;&lt; Get Confusion Matrix Validation

**Description :** Renvoie la matrice de confusion de l&apos;ensemble de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**Syntaxe :** obj &lt;&lt; Get Confusion Rates Test

**Description :** Renvoie les taux de confusion de l&apos;ensemble de test.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Fit Model(	Validation( :Validation 2 ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**Syntaxe :** obj &lt;&lt; Get Confusion Rates Training

**Description :** Renvoie les taux de confusion de l&apos;ensemble d’apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**Syntaxe :** obj &lt;&lt; Get Confusion Rates Validation

**Description :** Renvoie les taux de confusion de l&apos;ensemble de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run( Confusion Matrix( 1 ) ));obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get MM SAS DATA Step

**Description :** Crée du code SAS que vous pouvez enregistrer dans le gestionnaire de modèles SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);code = obj << Get MM SAS Data Step;

```

#### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Get Measures;

```

#### Get Probability Formulas

**Syntaxe :** obj &lt;&lt; Get Probability Formulas

**Description :** Renvoie un script pour créer les formules de probabilité.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**Syntaxe :** obj &lt;&lt; Get SAS DATA Step

**Description :** Crée le code SAS que vous pouvez utiliser pour évaluer le score d’un nouveau jeu de données.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);code = obj << Get SAS Data Step;

```

#### Lift Curve

**Syntaxe :** obj &lt;&lt; Lift Curve( state=0|1 )

**Description :** Affiche ou masque la courbe Lift. La courbe Lift représente le lift en fonction de la proportion des observations et propose une autre vision de la capacité prédictive d&apos;un modèle. Si vous avez utilisé la validation, la courbe Lift s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Cheese.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :Cheese ),	Personality( "Ordinal Logistic" ),	Run);obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**Syntaxe :** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Description :** Affiche ou masque les tests du rapport de vraisemblance pour chaque effet. Chaque test compare la log-vraisemblance du modèle ajusté à la log-vraisemblance du modèle qui supprime un effet.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Likelihood Ratio Tests( 1 );

```

#### Logistic Plot

**Syntaxe :** obj &lt;&lt; Logistic Plot( state=0|1 )

**Description :** Affiche ou masque le rapport du Graphique logistique. Disponible uniquement si le modèle comporte un seul effet continu. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Logistic Plot( 0 );Wait( 1 );obj << Logistic Plot( 1 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Model Dialog;

```

#### Odds Ratios

**Syntaxe :** obj &lt;&lt; Odds Ratios( state=0|1 )

**Description :** Affiche ou masque un rapport sur les rapports de probabilités contenant à la fois les rapports de probabilités unitaires et les rapports de probabilités pour l&apos;étendue.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Ordinal Logistic" ),	Run);Wait( 0 );obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**Syntaxe :** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Description :** Affiche ou masque la courbe précision-rappel, qui contient une courbe pour chaque niveau de la variable de réponse. Une courbe précision-rappel représente les valeurs de précision en fonction des valeurs de rappel pour différents seuils. Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Precision Recall Curve( 1 );

```

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prédiction, qui affiche les valeurs ajustées pour une probabilité de réponse spécifiée en fonction des variations des facteurs du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);Wait( 0 );obj << Profiler( 1 );

```

#### Publish Probability Formulas

**Syntaxe :** obj &lt;&lt; Publish Probability Formulas

**Description :** Construit les formules de probabilité et les publie sous la forme d&apos;un script de colonne de formule dans le dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Publish Probability Formulas;

```

#### ROC Curve

**Syntaxe :** obj &lt;&lt; ROC Curve( state=0|1 )

**Description :** Affiche ou masque la courbe ROC pour chaque niveau de la variable de réponse. La courbe ROC est un graphique de la sensibilité par rapport à (1 - spécificité). Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << ROC Curve( 1 );

```

#### Results in Data Tables

**Syntaxe :** obj = Fit Model(...Results in Data Tables( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Enregistre les résultats individuels du modèle sur de nombreuses réponses dans des tables de données. Le contenu et le nombre de tables de données de sortie dépendent du modèle en cours d&apos;ajustement.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Fit Model(	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),	Personality( "Ordinal Logistic" ),	Results in Data Tables( 1 ),	Run);

```

#### Save Expected Value

**Syntaxe :** obj &lt;&lt; Save Expected Value

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient la combination linéaire des valeurs de la réponse avec les probabilités de réponse ajustées pour chaque ligne et donne la valeur attendue.

```jsl

dt = Open( "$SAMPLE_DATA/Cheese.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :Cheese ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Expected Value;

```

#### Save Probability Formula

**Syntaxe :** obj &lt;&lt; Save Probability Formula

**Description :** Enregistre de nouvelles colonnes dans la table de données. Ces nouvelles colonnes contiennent des formules pour les combinaisons linéaires des niveaux de réponse, des formules de prédiction pour ces niveaux, et une formule de prédiction indiquant la réponse la plus probable.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Probability Formula;

```

#### Save Quantiles

**Syntaxe :** obj &lt;&lt; Save Quantiles

**Description :** Enregistre de nouvelles colonnes dans la table de données. Ces nouvelles colonnes sont nommées OrdQ.05, OrdQ.50, et OrdQ.95, et contiennent les valeurs ajustées aux quantiles pour les probabilités correspondantes.

```jsl

dt = Open( "$SAMPLE_DATA/Cheese.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :Cheese ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Quantiles;

```

#### Suppress Reports

**Syntaxe :** obj = Fit Model(...Suppress Reports( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Permet de spécifier que les rapports du modèle sont masqués. Lorsqu&apos;il y a des milliers de réponses, cette option réduit le temps de calcul. Les objets d&apos;ajustement et certains éléments de menu restent disponibles. Utiliser l&apos;option Résultats dans les tables de données pour collecter les résultats à partir des rapports du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Fit Model(	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),	Personality( "Ordinal Logistic" ),	Results in Data Tables( 1 ),	Suppress Reports( 1 ),	Run);

```

#### Wald Tests

**Syntaxe :** obj &lt;&lt; Wald Tests( state=0|1 )

**Description :** Affiche ou masque les statistiques du test du khi deux et les p-values des tests de Wald indiquant si chaque paramètre est égal à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Wald Tests( 1 );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Denim.jmp" );obj = dt << Fit Model(	Y( :Thread Wear ),	Effects( :"Size of Load (lbs)"n ),	Personality( "Ordinal Logistic" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Ordinal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Parametric Survival

### Constructeurs associés

#### Fit Parametric Survival

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Description :** Ajuste un modèle général de régression linéaire aux durées de survie. Ces modèles peuvent être utilisés pour les durées de survie qui peuvent être exprimées comme une fonction d&apos;une ou plusieurs variables explicatives. Prend en compte différentes distributions de survie et la censure.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);

```

### Messages d'éléments

#### Correlation of Estimates

**Syntaxe :** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**Description :** Pour l&apos;ajustement spécifié, affiche ou masque la matrice des corrélations entre les estimateurs des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**Syntaxe :** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**Description :** Pour l&apos;ajustement spécifié, affiche ou masque la matrice des covariances entre les estimateurs des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Covariance of Estimates( 1 );

```

#### Distribution

**Syntaxe :** obj = Fit Model(...Distribution("Weibull"|"Lognormal"|"Exponential"|"Frechet"|"Loglogistic"|"All Distributions"|"SEV"|"Normal"|"LEV"|"Logistic"...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la distribution à utiliser pour la modélisation de la réponse Temps avant événement. L&apos;option « Toutes les distributions » ajuste toutes les distributions disponibles.

**Distribution unique**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Lognormal" ),	Censor( :censor ),	Run Model);

```

**Toutes les distributions**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "All Distributions" ),	Censor( :censor ),	Run Model);

```

#### Distribution Plot by Level Combinations

**Syntaxe :** obj &lt;&lt; Distribution Plot by Level Combinations( state=0|1 )

**Description :** Affiche ou masque un rapport qui compare trois modèles imbriqués en fonction des niveaux de la variable X. Ce rapport contient trois graphiques de probabilité pour évaluer l&apos;ajustement du modèle. Les graphiques présentent différentes droites pour chaque combination des niveaux X.

```jsl

dt = Open( "$SAMPLE_DATA/reliability/Devalt.jmp" );dt << Fit Model(	Censor( :Censor ),	Censor Code( "1" ),	Freq( :Weight ),	Y( :Hours ),	Effects( :x ),	Personality( "Parametric Survival" ),	Distribution( "Lognormal" ),	Run( Likelihood Ratio Tests( 1 ), Distribution Plot by Level Combinations( 1 ), ));

```

#### Distribution Profiler

**Syntaxe :** obj &lt;&lt; Distribution Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur de la fonction de distribution cumulée des régresseurs et de la réponse. La réponse est affichée dans la cellule la plus à droite.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Distribution Profiler( 1 );

```

#### Effect Summary

**Syntaxe :** obj &lt;&lt; Effect Summary( state=0|1 )

**Description :** Affiche ou masque le rapport Résumé des effets, qui vous permet de mettre à jour les effets dans le modèle de manière interactive. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Estimate Quantile

**Syntaxe :** obj &lt;&lt; Estimate Quantile( x1 = [number, ...], x2 = [number, ...], [p1, p2, ...], Alpha( fraction ) )

**Description :** Estime les quantiles pour les valeurs d&apos;effet et les probabilités spécifiées. Utilisez un vecteur pour spécifier plusieurs valeurs pour un effet, ou plusieurs valeurs de probabilité.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Estimate Quantile(	:Age = [55, 60],	:Diag Time = [8.77],	[0.5, 0.10, 0.05],	Alpha( 0.05 ));

```

#### Estimate Survival Probability

**Syntaxe :** obj &lt;&lt; Estimate Survival Probability( x1 = [number, ...], x2 = [number, ...], [time1, time2, ...], Alpha( fraction ) )

**Description :** Estime les probabilités d&apos;échec et de survie pour les valeurs d&apos;effet et les valeurs de temps spécifiées. Utilisez un vecteur pour spécifier plusieurs valeurs pour un effet, ou plusieurs valeurs de temps.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Estimate Survival Probability(	:Age = [55, 60],	:Diag Time = [8.77],	[50, 100, 150],	Alpha( 0.05 ));

```

#### FDR

**Syntaxe :** obj &lt;&lt; FDR( state=0|1 )

**Description :** Indique si les valeurs logworth et leurs p-values correspondantes dans la table Résumé des effets sont ajustées en utilisant le taux de fausses découvertes (FDR).

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Effect Names

**Syntaxe :** obj &lt;&lt; Get Effect Names

**Description :** Renvoie les noms des effets utilisés dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);n = obj << Get Effect Names;Show( n );

```

#### Get Effect PValues

**Syntaxe :** obj &lt;&lt; Get Effect PValues

**Description :** Renvoie les p-values pour chaque effet dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);p = obj << Get Effect PValues;Show( p );

```

#### Get Estimates

**Syntaxe :** obj &lt;&lt; Get Estimates

**Description :** Renvoie les estimations des coefficients dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);e = obj << Get Estimates;Show( e );

```

#### Get Parameter Names

**Syntaxe :** obj &lt;&lt; Get Parameter Names

**Description :** Renvoie les noms de paramètre utilisés dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);n = obj << Get Parameter Names;Show( n );

```

#### Get Std Errors

**Syntaxe :** obj &lt;&lt; Get Std Errors

**Description :** Renvoie les erreurs standard relatives aux estimations des coefficients dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);std = obj << Get Std Errors;Show( std );

```

#### Hazard Profiler

**Syntaxe :** obj &lt;&lt; Hazard Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur qui affiche le taux de risque comme une fonction des régresseurs et de la réponse. La réponse est affichée dans la cellule la plus à droite.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Hazard Profiler( 1 );

```

#### Likelihood Confidence Intervals

**Syntaxe :** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**Description :** Spécifie le type d&apos;intervalles de confiance affichés dans la table de données Estimations des paramètres. Lorsque cette option est sélectionnée, un intervalle de confiance de vraisemblance du profil s&apos;affiche. Dans le cas contraire, un intervalle de Wald s&apos;affiche. Cette option est activée par défaut lorsque le temps de calcul de l&apos;intervalle de confiance de vraisemblance du profil n&apos;est pas élevé.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**Syntaxe :** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Description :** Affiche ou masque les tests du rapport de vraisemblance pour chaque effet. Chaque test compare la log-vraisemblance du modèle ajusté à la log-vraisemblance du modèle qui supprime un effet. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Model Dialog;

```

#### Publish Probability Formula

**Syntaxe :** obj &lt;&lt; Publish Probability Formula

**Description :** Crée une formule de probabilité et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Publish Probability Formula;

```

#### Publish Quantile Formula

**Syntaxe :** obj &lt;&lt; Publish Quantile Formula( probability )

**Description :** Crée une formule du quantile et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Publish Quantile Formula( 0.1 );

```

#### Quantile Profiler

**Syntaxe :** obj &lt;&lt; Quantile Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur qui affiche la réponse prédite comme une fonction des prédicteurs et le quantile de la fonction de distribution cumulée. Le quantile est appelé Probabilité de défaillance et est affiché dans la cellule la plus à droite.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Quantile Profiler( 1 );

```

#### Residual Probability Plot

**Syntaxe :** obj &lt;&lt; Residual Probability Plot( state=0|1 )

**Description :** Affiche ou masque un graphique de probabilité des résidus standardisés avec les intervalles de confiance.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Residual Probability Plot( 1 );

```

#### Response versus Fitted Median

**Syntaxe :** obj &lt;&lt; Response versus Fitted Median( state=0|1 )

**Description :** Affiche ou masque un graphique des réponses sur l&apos;axe vertical et la médiane ajustée sur l&apos;axe horizontal.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Response versus Fitted Median( 1 );

```

#### Save Probability Formula

**Syntaxe :** obj &lt;&lt; Save Probability Formula

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule pour la probabilité de défaillance estimée.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Probability Formula;

```

#### Save Quantile Formula

**Syntaxe :** obj &lt;&lt; Save Quantile Formula( probability )

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule pour le quantile estimé de la valeur de probabilité spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Quantile Formula( 0.8 );

```

#### Save Residuals

**Syntaxe :** obj &lt;&lt; Save Residuals

**Description :** Enregistre une ou deux nouvelles colonnes dans la table de données. Le nombre de colonnes de résidu correspond au nombre de colonnes Temps avant événement dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Residuals;

```

#### Standardized Residuals versus Fitted Median

**Syntaxe :** obj &lt;&lt; Standardized Residuals versus Fitted Median( state=0|1 )

**Description :** Affiche ou masque un graphique des résidus standardisés sur l&apos;axe vertical et la médiane ajustée sur l&apos;axe horizontal.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Standardized Residuals versus Fitted Median( 1 );

```

#### Survival Profiler

**Syntaxe :** obj &lt;&lt; Survival Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur de la fonction de survie des prédicteurs et de la réponse. La réponse est affichée dans la cellule la plus à droite.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Survival Profiler( 1 );

```

#### Wald Tests

**Syntaxe :** obj &lt;&lt; Wald Tests( state=0|1 )

**Description :** Affiche ou masque les statistiques du test du khi deux et les p-values des tests de Wald indiquant si chaque paramètre est égal à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Wald Tests( 0 );Wait( 2 );obj << Wald Tests( 1 );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Parametric Survival(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Proportional Hazards

### Colonnes

#### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);

```

### Constructeurs associés

#### Fit Proportional Hazards

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Description :** Ajuste un modèle de régression semiparamétrique (le modèle des risques proportionnels de Cox) pour évaluer l&apos;effet des variables explicatives sur les durées de survie tout en tenant compte de la censure.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);

```

### Messages d'éléments

#### Effect Summary

**Syntaxe :** obj &lt;&lt; Effect Summary( state=0|1 )

**Description :** Affiche ou masque le rapport Résumé des effets, qui vous permet de mettre à jour les effets dans le modèle de manière interactive. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Effect Summary( 0 );Wait( 1 );obj << Effect Summary( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**Syntaxe :** obj &lt;&lt; FDR( state=0|1 )

**Description :** Indique si les valeurs logworth et leurs p-values correspondantes dans la table Résumé des effets sont ajustées en utilisant le taux de fausses découvertes (FDR).

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << FDR( 1 );Report( obj )["Effect Summary"] << Close( 0 );

```

#### Hazard Ratios

**Syntaxe :** obj &lt;&lt; Hazard Ratios( state=0|1 )

**Description :** Affiche ou masque les rapports des risques pour les effets.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Hazard Ratios( 1 );

```

#### Likelihood Confidence Intervals

**Syntaxe :** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**Description :** Spécifie le type d&apos;intervalles de confiance affichés dans la table de données Estimations des paramètres. Lorsque cette option est sélectionnée, un intervalle de confiance de vraisemblance du profil s&apos;affiche. Dans le cas contraire, un intervalle de Wald s&apos;affiche. Cette option est activée par défaut lorsque le temps de calcul de l&apos;intervalle de confiance de vraisemblance du profil n&apos;est pas élevé.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**Syntaxe :** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**Description :** Affiche ou masque les tests du rapport de vraisemblance pour chaque effet. Chaque test compare la log-vraisemblance du modèle ajusté à la log-vraisemblance du modèle qui supprime un effet.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Model Dialog;

```

#### Wald Tests

**Syntaxe :** obj &lt;&lt; Wald Tests( state=0|1 )

**Description :** Affiche ou masque les statistiques du test du khi deux et les p-values des tests de Wald indiquant si chaque paramètre est égal à zéro. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Wald Tests( 0 );Wait( 2 );obj << Wald Tests( 1 );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run Model);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Proportional Hazards(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Response Screening

### Constructeurs associés

#### Fit Response Screening

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ) )

**Description :** Automatise le processus de conduite des tests pour les effets du modèle linéaire et pour un grand nombre de réponses. Les résultats des tests et les statistiques de résumé sont présentés sous forme de tables de données et de graphiques. Le taux de fausses découvertes (FDR) protège de fausses alarmes (fausse significativités). Une méthode d&apos;estimation robuste permet de réduire la sensibilité des tests aux valeurs aberrantes.

**Ajuster avec un effet aléatoire**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	Effects( :Sex, :Disease Status ),	Random Effects( :Sample ),	Personality( "Response Screening" ),	Run( (Sliced LSMeans Differences( 1 )) ));

```

**Ajuster de nombreuses colonnes avec différences des moyennes des moindres carrés tranchées**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Father, :Mother, :Sex, :Disease Status ),	Personality( "Response Screening" ),	Run( (Sliced LSMeans Differences( 1 )) ));

```

**Ajuster de nombreuses colonnes avec sous-groupes**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Subgroup( :Father, :Mother, :Sex, :Disease Status ),	Run);

```

**Ajuster de nombreuses colonnes sur quatre régresseurs**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);

```

**Ajuster quelques colonnes avec de nombreux régresseurs changés**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	Switch( Column Group( "Markers" ) ),	Effects( :Disease Status ),	Personality( "Response Screening" ),	Run);

```

### Messages d'éléments

#### Effect Plots

**Syntaxe :** obj &lt;&lt; Effect Plots( state=0|1 )

**Description :** Affiche ou masque le graphique p-value FDR pour les effets et le graphique logworth FDR par taille de l&apos;effet. Actif par défaut.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run( Effect Plots( 0 ) ));Wait( 1 );obj << Effect Plots( 1 );

```

#### Effect Tests

**Syntaxe :** obj &lt;&lt; Effect Tests( state=0|1 )

**Description :** Affiche ou masque la table de données Tests des effets. Actif par défaut.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run( Effect Tests( 0 ) ));Wait( 1 );obj << Effect Tests( 1 );

```

#### Force G Side

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force G Side ) )

**Description :** Force l&apos;estimation des effets aléatoires sur le côté G, même si la matrice des effets aléatoires a plus de colonnes que de lignes.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :season, :species * :season ),	Random Effects( :subject[:species] ),	Personality( "Response Screening" ),	Run( Force G Side ));

```

#### Force R Side

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force R Side ) )

**Description :** Force l&apos;estimation des effets aléatoires sur le côté R, même si la matrice des effets aléatoires a plus de lignes que de colonnes.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Y( :Trait1 ),	Run( Force R Side ));

```

#### Least Squares Means

**Syntaxe :** obj &lt;&lt; Least Squares Means( state=0|1 )

**Description :** Calcule toutes les moyennes (marginales) des moindres carrés.

```jsl

dt = Open( "$Sample_Data/Popcorn.jmp" );obj = dt << Fit Model(	Y( :yield ),	Effects(		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,		:popcorn * :oil amt * :batch	),	Personality( "Response Screening" ),	Run);Wait( 0 );obj << Least Squares Means( 1 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Model Dialog;

```

#### Overall Plots

**Syntaxe :** obj &lt;&lt; Overall Plots( state=0|1 )

**Description :** Affiche ou masque le graphique p-value FDR global et le graphique logworth FDR par R carré.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Overall Plots( 1 );

```

#### Overall Report

**Syntaxe :** obj &lt;&lt; Overall Report( state=0|1 )

**Description :** Affiche ou masque la table de données Ajustement global.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);Wait( 0 );obj << Overall Report( 1 );

```

#### Save BLUPs

**Syntaxe :** obj &lt;&lt; Save BLUPs

**Description :** Crée une nouvelle table de données qui contient les meilleurs régresseurs linéaires non biaisés (BLUP) pour les effets aléatoires du modèle.

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Run);obj << Save BLUPs;

```

#### Save Conditional Predicted Values

**Syntaxe :** obj &lt;&lt; Save Conditional Predicted Values

**Description :** Enregistre une nouvelle colonne pour chaque réponse dans la table de données. La colonne contient les valeurs prédites conditionnelles qui sont calculées à l&apos;aide des meilleurs prédicteurs linéaires non biaisés (BLUP) pour les paramètres des effets aléatoires.

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Run);obj << Save Conditional Predicted Values;

```

#### Save Conditional Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Conditional Prediction Formula

**Description :** Enregistre une nouvelle colonne de formule pour chaque réponse dans la table de données. La nouvelle colonne contient une formule qui comprend les estimations de l&apos;effet aléatoire pour les modèles avec des effets aléatoires. Disponible uniquement pour les méthodes d&apos;analyse Maximum de vraisemblance restreint.

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = Fit Model(	Y( :Trait1, :Trait2, :Trait3 ),	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Run);obj << Save Conditional Prediction Formula;

```

#### Save Effect Tests

**Syntaxe :** obj &lt;&lt; Save Effect Tests

**Description :** Crée une nouvelle table de données qui contient une ligne pour chaque test d&apos;effet.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Save Effect Tests;

```

#### Save Estimates

**Syntaxe :** obj &lt;&lt; Save Estimates

**Description :** Crée une nouvelle table de données qui contient une ligne pour chaque variable de réponse et une colonne pour chaque terme du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Save Estimates;

```

#### Save LSMeans Differences

**Syntaxe :** obj &lt;&lt; Save LSMeans Differences

**Description :** Crée une nouvelle table de données qui contient toutes les différences des moyennes des moindres carrés tranchées.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );obj = dt << Fit Model(	Effects( :age, :sex, :age * :sex ),	Personality( "Response Screening" ),	Y( :height, :weight ),	Sliced LSMeans Differences( 1 ),	Run);obj << Save LSMeans Differences;

```

#### Save Least Squares Means

**Syntaxe :** obj &lt;&lt; Save Least Squares Means

**Description :** Crée une nouvelle table de données qui contient toutes les moyennes des moindres carrés.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );obj = dt << Fit Model(	Y( :height, :weight ),	Effects( :age, :sex ),	Personality( "Response Screening" ),	Run);obj << Save Least Squares Means;

```

#### Save Overall Fit

**Syntaxe :** obj &lt;&lt; Save Overall Fit

**Description :** Crée une nouvelle table de données qui contient une ligne par variable de réponse. Pour chaque Y, les colonnes de la table de données résument les informations à propos de l&apos;ajustement du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Save Overall Fit;

```

#### Save Predicted Values

**Syntaxe :** obj &lt;&lt; Save Predicted Values

**Description :** Enregistre une nouvelle colonne pour chaque réponse dans la table de données. Chaque colonne contient les valeurs prédites pour la réponse correspondante.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run( Save Predicted Values ));

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre une nouvelle colonne de formule pour chaque réponse dans la table de données. Chaque colonne contient une équation de prédiction pour la réponse correspondante.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run( Save Prediction Formula ));

```

#### Select Effects Where

**Syntaxe :** obj &lt;&lt; Select Effects Where( condition )

**Description :** Ouvre la fenêtre Sélectionner où, qui vous permet de sélectionner les lignes de la table de données Tests des effets qui correspondent à la condition particulière spécifiée dans la fenêtre Sélectionner où.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run);obj << Select Effects Where( FDR Logworth > 4 );

```

#### Select Responses for Selected Effects

**Syntaxe :** obj &lt;&lt; Select Responses for Selected Effects

**Description :** Sélectionne les colonnes de réponse dans la table de données d&apos;origine correspondant aux effets sélectionnés.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Response Screening" ),	Run());obj << Select Effects Where( FDR Logworth > 4 );obj << Select Responses for Selected Effects;

```

#### Sliced LSMeans Differences

**Syntaxe :** obj &lt;&lt; Sliced LSMeans Differences( state=0|1 )

**Description :** Calcule des tests comparant toutes les moyennes des moindres carrés sur les effets principaux et les tranches d&apos;interactions à deux et trois facteurs.

```jsl

dt = Open( "$Sample_Data/Popcorn.jmp" );obj = dt << Fit Model(	Y( :yield ),	Effects(		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,		:popcorn * :oil amt * :batch	),	Personality( "Response Screening" ),	Run);Wait( 0 );obj << Sliced LSMeans Differences( 1 );

```

#### Unthreaded

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Unthreaded ) )

**Description :** Supprime le multithreading entre les réponses (et Changer les variables).

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Effects( :Sex ),	Random Effects( Grouped( Column Group( "Markers" ) ) ),	Personality( "Response Screening" ),	Y( :Trait1 ),	Run( Unthreaded ));

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Fit Model(	Y( Column Group( "Markers" ) ),	Effects( :Trait1, :Trait2, :Trait3, :Trait4 ),	Personality( "Response Screening" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Stepwise

### Colonnes

#### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;

```

### Constructeurs associés

#### Fit Stepwise

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Stepwise" ) )

**Description :** Ajuste les modèles de régression pas à pas, ce qui facilite la sélection des variables pour les moindres carrés standard et les modèles logistiques ordinaux, ainsi que pour les modèles logistiques nominaux avec une réponse binaire.

**Détermination de la moyenne du modèle**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Stepwise" ),	Run);obj << Model Averaging( 10, 0.95 );

```

**Interactions respectant l'effet d'hérédité**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Stepwise" ),	Run( Rules( "Whole Effects Respecting Heredity" ) ));obj << Finish;

```

**Régresseurs catégoriels**

```jsl

dt = Open( "$Sample_Data/Tablet Production.jmp" );obj = dt << Fit Model(	Y( :Dissolution ),	Effects(		:Mill Time, :Screen Size, :Mag. Stearate Supplier, :Lactose Supplier, :Sugar Supplier,		:Talc Supplier, :Blend Time, :Blend Speed, :Compressor, :Force, :Coating Supplier,		:Coating Viscosity, :Inlet Temp, :Exhaust Temp, :Spray Rate, :Atomizer Pressure	),	Personality( "Stepwise" ),	Run);obj << Finish;

```

**Sélection Forward**

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;

```

**Tous les modèles possibles**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Stepwise" ),	Run);obj << All Possible Models( 10, 5, Heredity Restriction( 1 ) );

```

### Messages d'éléments

#### All Possible Models

**Syntaxe :** obj &lt;&lt; All Possible Models( max_terms, max_models, &lt;Heredity Restriction( state=0|1 )&gt; )

**Description :** Ajuste tous les modèles possibles jusqu&apos;aux limites spécifiées et affiche les meilleurs modèles pour chaque nombre de termes. Spécifiez le nombre maximum de termes à ajuster dans n&apos;importe quel modèle. Spécifiez le nombre maximum de résultats du modèle à afficher pour chaque nombre de termes du modèle. Vous pouvez restreindre les modèles affichés à ceux qui répondent à une forte hérédité. L&apos;option Tous les modèles possibles est uniquement disponible pour les réponses continues.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << All Possible Models( 5, 10 );

```

#### Backward Step

**Syntaxe :** obj &lt;&lt; Backward Step

**Description :** Supprime le terme qui présente la plus grande p-value. Si la règle d&apos;arrêt Seuil P-value est sélectionnée, ce terme ne doit pas être significatif au niveau spécifié par l&apos;option Probabilité de sortie.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Enter All;Wait( 1 );obj << Backward Step;

```

#### Clear History

**Syntaxe :** obj &lt;&lt; Clear History

**Description :** Efface et réinitialise l&apos;historique des étapes.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << Clear History;

```

#### Direction

**Syntaxe :** obj &lt;&lt; Direction( "Montante"|"Descendante"|"Mixte" )

**Description :** Spécifie la direction utilisée pour suivre pas-à-pas le processus de sélection des termes. La direction peut être vers l&apos;avant, vers l&apos;arrière ou un mélange des deux. L&apos;option de direction mixte requiert que la règle d&apos;arrêt Seuil p-valeur soit sélectionnée.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Stopping Rule( "P-value Threshold" );obj << Direction( "Mixed" );obj << Finish;

```

#### Enter

**Syntaxe :** obj &lt;&lt; Enter( term )

**Description :** Insère un terme dans le modèle. Cette option n&apos;a aucun effet sur les termes verrouillés.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Enter( :Runtime );

```

#### Enter All

**Syntaxe :** obj &lt;&lt; Enter All

**Description :** Saisit tous les termes dans le modèle, si possible.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run( Direction( "Backward" ) ));obj << Enter All;

```

#### Export Model With Validation

**Syntaxe :** obj &lt;&lt; Export Model With Validation( state=0|1 )

**Description :** Ajoute la colonne Validation à la fenêtre Construction du modèle lorsque vous sélectionnez l&apos;option Construire un modèle. Cette option exécute également le modèle avec la colonne Validation lorsque vous sélectionnez l&apos;option Exécuter le modèle. Cette option est uniquement disponible lorsque vous avez spécifié une colonne de validation. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Validation( :Validation ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Make Model;Wait( 1 );obj << Export Model With Validation( 0 );obj << Make Model;

```

#### Finish

**Syntaxe :** obj &lt;&lt; Finish

**Description :** Termine immédiatement le processus de sélection des termes. Dans les scripts, l&apos;option Terminer est recommandée à la place de l&apos;option OK.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;

```

#### Forward Step

**Syntaxe :** obj &lt;&lt; Forward Step

**Description :** Entre le terme avec la plus petite p-value. Si la règle d&apos;arrêt Seuil P-value est sélectionnée, ce terme doit être significatif au niveau spécifié par l&apos;option Probabilité d&apos;entrée.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);Wait( 1 );obj << Forward Step;

```

#### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Get Measures;

```

#### Get Prospectives

**Syntaxe :** obj &lt;&lt; Get Prospectives

**Description :** Renvoie un tableau associatif qui contient les estimations et les intervalles de confiance. Pour les termes inclus dans le modèle, les valeurs sont obtenues à partir du modèle actuel. Pour les termes non inclus dans le modèle actuel, les valeurs sont les estimations et les intervalles de confiance d&apos;un modèle qui inclut le terme correspondant.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Show(	obj << Enter( :Runtime );	obj << Get Prospectives;);

```

#### Go

**Syntaxe :** obj &lt;&lt; Go

**Description :** Lance une tâche en arrière-plan pour le processus de sélection des termes. Dans les scripts, l&apos;option Terminer est recommandée à la place de l&apos;option OK.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Go;

```

#### K-Fold Crossvalidation

**Syntaxe :** obj &lt;&lt; "K-Fold Crossvalidation"n( &lt;k&gt; )

**Description :** Effectue la validation croisée en k blocs dans le processus de sélection des variables. Lorsqu&apos;elle est sélectionnée, cette option active la règle d&apos;arrêt R carré max KFolds dans le panneau de configuration. La validation croisée en K blocs dans la plate-forme Pas à pas divise l&apos;échantillon en k sous-ensembles et utilise les sous-ensembles en tant qu&apos;ensemble de validation. L&apos;option de validation croisée en K blocs est uniquement disponible pour les réponses continues.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << "K-Fold Crossvalidation"n( 5 );obj << Finish;

```

#### Lock

**Syntaxe :** obj &lt;&lt; Lock( term )

**Description :** Verrouille un terme dans ou en-dehors du modèle. Un terme verrouillé qui ne se trouve pas dans le modèle ne peut pas être entré dans le modèle, et un terme verrouillé qui se trouve dans le modèle ne peut pas être supprimé du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Enter( :Runtime );obj << Lock( :Runtime );

```

#### Make Model

**Syntaxe :** obj &lt;&lt; Make Model

**Description :** Ouvre une fenêtre de lancement Modèle linéaire pour le modèle spécifié dans la table Estimations actuelles. Dans les cas où il y a des termes nominaux ou ordinaux, l&apos;option Construire un modèle crée des colonnes de transformation temporaires qui contiennent les termes nécessaires au modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Make Model;

```

#### Model Averaging

**Syntaxe :** obj &lt;&lt; Model Averaging( max_terms, AICc_cutoff )

**Description :** Vous permet de calculer la moyenne des ajustements sur un nombre de modèles, plutôt que de sélectionner un seul meilleur modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << Model Averaging( 5, .90 );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << Model Dialog;

```

#### Plot Criterion History

**Syntaxe :** obj &lt;&lt; Plot Criterion History( state=0|1 )

**Description :** Crée un graphique de AICc et BIC par rapport au nombre de paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Stopping Rule( "P-value Threshold" );obj << Direction( "Mixed" );obj << Finish;obj << Plot Criterion History( 1 );

```

#### Plot RSquare History

**Syntaxe :** obj &lt;&lt; Plot RSquare History( state=0|1 )

**Description :** Crée un graphique du R carré d&apos;apprentissage et de validation par rapport au nombre de paramètres. Cette option est uniquement disponible pour les modèles de réponse continue qui ont des données de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << "K-Fold Crossvalidation"n( 5 );obj << Finish;obj << Plot RSquare History( 1 );

```

#### Prob to Enter

**Syntaxe :** obj &lt;&lt; Prob to Enter( number )

**Description :** Spécifie la p-value maximum qu&apos;un effet doit avoir pour être entré dans le modèle durant un pas vers l&apos;avant.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Stopping Rule( "P-value Threshold" );obj << Prob to Enter( .20 );obj << Finish;

```

#### Prob to Leave

**Syntaxe :** obj &lt;&lt; Prob to Leave( number )

**Description :** Spécifie la p-value minimum qu&apos;un effet doit avoir pour être supprimé du modèle durant un pas vers l&apos;arrière.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Stopping Rule( "P-value Threshold" );obj << Prob to Leave( .20 );obj << Enter All;obj << Direction( "Backward" );obj << Finish;

```

#### Remove

**Syntaxe :** obj &lt;&lt; Remove( term )

**Description :** Supprime un terme du modèle. Cette option n&apos;a aucun effet sur les termes verrouillés.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Remove( :RunPulse );

```

#### Remove All

**Syntaxe :** obj &lt;&lt; Remove All

**Description :** Supprime tous les termes du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;Wait( 1 );obj << Remove All;

```

#### Rules

**Syntaxe :** obj &lt;&lt; Rules( "Combiner"|"Restreindre"|"Aucune règle"|"Tous les coefficients"|"Tous les coefficients qui respectent l&apos;hérédité" )

**Description :** Spécifie les règles qui sont appliquées lorsque le modèle contient une hiérarchie de termes. Cette option apparaît uniquement si votre modèle contient des termes hiérarchiques.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects(		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,		:RunPulse * :MaxPulse	),	Personality( "Stepwise" ),	Run);obj << Rules( "Whole Effects" );obj << Stopping Rule( "P-value Threshold" );obj << Direction( "Mixed" );obj << Finish;

```

#### Run Model

**Syntaxe :** obj &lt;&lt; Run Model

**Description :** Ouvre un rapport des moindres carrés standard pour le modèle spécifié dans la table des estimations actuelles. Dans les cas où des termes nominaux ou ordinaux sont présents, l&apos;option Exécuter le modèle crée des colonnes de transformation temporaires qui contiennent les termes nécessaires au modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Run Model;

```

#### Step

**Syntaxe :** obj &lt;&lt; Step

**Description :** Réalise l&apos;étape suivante dans le processus de sélection des termes. L&apos;option Pas à pas entre les termes un par un dans le sens vers l&apos;avant ou les supprime un par un dans le sens vers l&apos;arrière.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);Wait( 1 );obj << Step;

```

#### Stop

**Syntaxe :** obj &lt;&lt; Stop

**Description :** Arrête le processus de sélection automatique lancé avec les options OK ou Terminer.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Stop;

```

#### Stopping Rule

**Syntaxe :** obj &lt;&lt; Stopping Rule( "Seuil P-value"|"AICc minimum"|"BIC minimum"|"R carré de validation max"|"R carré max K fois" )

**Description :** Spécifie la règle qui est utilisée pour arrêter le processus de sélection des termes lorsque les options OK ou Terminer sont spécifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects(		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,		:RunPulse * :MaxPulse	),	Personality( "Stepwise" ),	Run Model( Stopping Rule( "Minimum AICc" ) ));obj << Finish;

```

#### Unlock

**Syntaxe :** obj &lt;&lt; Unlock( term )

**Description :** Déverrouille un terme préalablement verrouillé dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Enter( :Runtime );obj << Lock( :Runtime );Wait( 1 );obj << Unlock( :Runtime );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj << Finish;obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Stepwise" ),	Run);obj << Finish;r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Stepwise(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Fit Varcomp

### Colonnes

#### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);

```

### Constructeurs associés

#### Estimate Only Variance Components

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Method( "REML" ), Estimate Only Variance Components( 1 ) )

**Description :** Lance une analyse du maximum de vraisemblance restreint (REML) à l’aide du modèle spécifié et affiche les composants de la variance à partir du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);

```

### Messages d'éléments

#### Get Random Effect Names

**Syntaxe :** obj &lt;&lt; Get Random Effect Names

**Description :** Renvoie les noms des effets aléatoires.  Disponible pour les méthodes d’analyse REML (maximum de vraisemblance restreint).

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);vn = obj << Get Random Effect Names;Show( vn );

```

#### Get Variance Components

**Syntaxe :** obj &lt;&lt; Get Variance Components

**Description :** Renvoie les composants de la variance générées par l’ajustement du modèle spécifié.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);vc = obj << Get Variance Components;Show( vc );

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Run);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Estimate Only Variance Components(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Generalized Linear Mixed Model > Fit GLMM

### Messages d'éléments

#### Between-Within Degrees of Freedom

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Between-Within Degrees of Freedom( state=0|1 ))

**Description :** Remplace les erreurs standard par des estimations non ajustées et les degrés de liberté vers une base inter-intra dans l&apos;ensemble du rapport. Pour utiliser les degrés de liberté inter-intra dans un rapport Comparaisons multiples, vous devez sélectionner cette option avant d&apos;ajouter un rapport Comparaisons multiples.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Repeated Measures Binomial.jmp" );fm = Fit Model(	Y( :No Headache, :Number of Patients ),	Effects( :Treatment, :Week, :Treatment * :Week ),	Personality( "Generalized Linear Mixed Model" ),	Subject( :"Treatment(Clinic)"n ),	Repeated Effects( :Week Continuous ),	Repeated Structure( "AR(1)" ),	Generalized Distribution( "Binomial" ),	Link Function( "Logit" ),	Run());Wait( 1 );fm << (Fit[1] << "Between-Within Degrees of Freedom"n( 1 ));

```

#### Conditional Contour Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Contour Profiler( state=0|1 ))

**Description :** Affiche ou masque une représentation graphique d&apos;un profileur d&apos;isoréponses de la réponse conditionnelle pour deux facteurs à la fois. Cette option n&apos;est disponible que lorsque le modèle contient au moins deux effets continus et au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );fm = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept( 1 ),	Center Polynomials( 0 ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 0 );fm << (Fit[1] << Conditional Contour Profiler( 1 ));

```

#### Conditional Diagnostic Bundle

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Diagnostic Bundle( state=0|1 ))

**Description :** Affiche ou masque un groupe de graphiques de diagnostic qui sont utiles pour décider si un modèle de régression ajuste bien les données observées. Cette option n&apos;est pas disponible si la distribution Binomiale est sélectionnée ou si aucun effet aléatoire n&apos;est présent dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 1 );fm << (fit[1] << Conditional Diagnostic Bundle( 1 ));

```

#### Conditional Mean CI

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mean CI)

**Description :** Enregistre deux nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les limites de confiance inférieure et supérieure pour la valeur attendue de la prédiction conditionnelle. Les intervalles de confiance comprennent les estimations des effets aléatoires pour les modèles qui en contiennent. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Conditional Mean CI);

```

#### Conditional Mixture Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mixture Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur de mélange qui représente les isoréponses de la réponse conditionnelle sur un graphique ternaire. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire et si l&apos;attribut Effet de mélange est appliqué à au moins trois facteurs dans le modèle ou si la propriété Mélange est appliquée à au moins trois colonnes de facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );fm = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept( 1 ),	Center Polynomials( 0 ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 0 );fm << (Fit[1] << Conditional Mixture Profiler( 1 ));

```

#### Conditional Prediction Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Prediction Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient la formule de prédiction de la moyenne conditionnelle. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Conditional Prediction Formula);

```

#### Conditional Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Profiler( state=0|1 ))

**Description :** Affiche ou masque le profileur de prédiction, qui permet de donner pour chaque facteur la coupe de la surface de prédiction conditionnelle. Le profileur de prédiction est doté de fonctions d&apos;optimisation. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Conditional Profiler( 1 ));

```

#### Conditional Surface Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Surface Profiler( state=0|1 ))

**Description :** Affiche ou masque une surface de réponse 3D de la réponse conditionnelle. Cette option n&apos;est disponible que lorsque le modèle contient au moins deux effets et au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Conditional Surface Profiler( 1 ));

```

#### Containment Degrees of Freedom

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Containment Degrees of Freedom( state=0|1 ))

**Description :** Remplace les erreurs standard par des estimations non ajustées et les degrés de liberté vers une base de confinement (méthode containment) dans l&apos;ensemble du rapport. Pour utiliser les degrés de liberté avec la méthode containment (confinement) dans un rapport Comparaisons multiples, vous devez sélectionner cette option avant d&apos;ajouter un rapport Comparaisons multiples.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Containment Degrees of Freedom( 1 ));

```

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**Description :** Affiche ou masque une représentation graphique d&apos;un profileur d&apos;isoréponses de la réponse marginale pour deux facteurs à la fois. Cette option n&apos;est disponible que lorsque le modèle contient au moins deux effets fixes continus.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );fm = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept( 1 ),	Center Polynomials( 0 ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 0 );fm << (Fit[1] << Contour Profiler( 1 ));

```

#### Correlation of Fixed Effects

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Fixed Effects( state=0|1 ))

**Description :** Affiche ou masque la matrice de corrélation pour les effets fixes dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Correlation of Fixed Effects( 1 ));

```

#### Covariance of All Parameters

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of All Parameters( state=0|1 ))

**Description :** Affiche ou masque la matrice de covariance pour tous les effets dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Covariance of All Parameters( 1 ));

```

#### Covariance of Covariance Parameters

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Covariance Parameters( state=0|1 ))

**Description :** Affiche ou masque la matrice de covariance pour les effets aléatoires dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Covariance of Covariance Parameters( 1 ));

```

#### Covariance of Fixed Effects

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Fixed Effects( state=0|1 ))

**Description :** Affiche ou masque la matrice de covariance pour les effets fixes dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Covariance of Fixed Effects( 1 ));

```

#### Diagnostic Bundle

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**Description :** Affiche ou masque un groupe de graphiques de diagnostic qui sont utiles pour décider si un modèle de régression ajuste bien les données observées. Cette option n&apos;est pas disponible si la distribution Binomiale est sélectionnée ou si des effets aléatoires sont présents dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 1 );fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Empirical Standard Errors

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Empirical Standard Errors( state=0|1 ))

**Description :** Remplace les erreurs standard par des estimations de Sandwich dans l&apos;ensemble du rapport. Pour utiliser les estimations de Sandwich dans un rapport de comparaisons multiples, vous devez sélectionner cette option avant d&apos;ajouter un rapport Comparaisons multiples.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Empirical Standard Errors( 1 ));

```

#### Fit Statistics

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Fit Statistics( state=0|1 ))

**Description :** Affiche ou masque les rapports Ajustement des statistiques et Résumé du modèle qui comprennent des informations sur la spécification et la qualité de l&apos;ajustement des statistiques pour le modèle. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Fit Statistics( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Fixed Effects Parameter Estimates

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 ))

**Description :** Affiche ou masque une table de données des estimations des paramètres des effet fixes. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Fixed Effects Parameter Estimates( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Fixed Effects Parameter Estimates( 1 ));

```

#### Fixed Effects Tests

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Tests( state=0|1 ))

**Description :** Affiche ou masque les tests des effets fixes. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Fixed Effects Tests( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Fixed Effects Tests( 1 ));

```

#### Mean Confidence Interval

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**Description :** Enregistre deux nouvelles colonnes dans la table de données. Les nouvelles colonnes contiennent les limites de confiance inférieure et supérieure pour la réponse moyenne.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Mean Confidence Interval);

```

#### Mixture Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Mixture Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur de mélange qui représente les isoréponses de la réponse marginale sur un graphique ternaire. Cette option n&apos;est disponible que si l&apos;attribut Effet de mélange est appliqué à au moins trois facteurs dans le modèle ou si la propriété Mélange est appliquée à au moins trois colonnes de facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );fm = dt << Fit Model(	Y( :thickness ),	Effects(		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,		:extrusion rate * :temperature	),	Random Effects( :Whole Plots ),	No Intercept( 1 ),	Center Polynomials( 0 ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);Wait( 0 );fm << (Fit[1] << Mixture Profiler( 1 ));

```

#### Multiple Comparisons

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**Description :** Génère les estimations des moyennes des moindres carrés, ou les estimations définies par l&apos;utilisateur, qui vous permettent d&apos;effectuer des comparaisons avec la moyenne générale, avec un contrôle ou par paire. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Target Level( "Pass" ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (fit[1] << Multiple Comparisons(	Effect( :Program ),	Least Squares Means Plot,	Student's t( 1 )));

```

#### Odds Ratios

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**Description :** Affiche ou masque un rapport contenant les rapports de probabilités pour les prédicteurs catégoriels, ainsi que les rapports de probabilités unitaires et les rapports de probabilités pour l&apos;étendue pour les prédicteurs continus.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y Ordinal ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Linear Mixed Model" ),	Run);Wait( 0 );obj << (fit[1] << Odds Ratios( 1 ));

```

#### Prediction Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Prediction Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient la formule de prédiction de la moyenne marginale.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Prediction Formula);

```

#### Prediction and Interval Formulas

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Prediction and Interval Formulas)

**Description :** Enregistre de nouvelles colonnes dans la table de données. Les colonnes contiennent les formules pour les prévisions et les intervalles de confiance. Les colonnes de limites créées par cette option contiennent des propriétés utilisées par le profileur de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Prediction and Interval Formulas);

```

#### Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**Description :** Affiche ou masque le profileur de prédiction, qui permet de donner pour chaque facteur la coupe de la surface de prédiction marginale. Le profileur de prédiction est doté de fonctions d&apos;optimisation. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Profiler( 1 ));

```

#### Random Coefficients

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Random Coefficients( state=0|1 ))

**Description :** Affiche ou masque un rapport des estimations pour les coefficients aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Random Coefficients( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Random Coefficients( 1 ));Report( fm )["Random Coefficients"] << Close( 0 );

```

#### Random Effects Covariance Parameter Estimates

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 ))

**Description :** Affiche ou masque une table de données des estimations des paramètres de covariance des effets aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Random Effects Covariance Parameter Estimates( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Random Effects Covariance Parameter Estimates( 1 ));

```

#### Random Effects Predictions

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Predictions( state=0|1 ))

**Description :** Affiche ou masque une table de données des prédictions des effets aléatoires. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Random Effects Predictions( 1 ));

```

#### Save Conditional Residual Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Conditional Residual Formula )

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule pour les résidus conditionnels, donnée sous la forme Y moins la formule de prédiction. Cette option n&apos;est disponible que si la distribution Binomiale est sélectionnée ou si des effets aléatoires sont présents dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);fm << (fit[1] << Save Conditional Residual Formula);

```

#### Save Residual Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula )

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient une formule pour les résidus marginaux, donnée sous la forme Y moins la formule de prédiction. Cette option n&apos;est disponible que si la distribution Binomiale est sélectionnée.

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Poisson" ),	Run);fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. la nouvelle colonne peut servir à créer des valeurs de réponse aléatoires à partir du modèle ajusté. Vous pouvez utiliser la colonne de formule avec la fonction Simuler dans JMP Pro. Cette option n&apos;est pas disponible si une variable Par est utilisée. Utilisez des tables extraites si des formules de simulation de groupe Par sont nécessaires.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Save Simulation Formula);

```

#### Sequential Tests

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Sequential Tests( state=0|1 ))

**Description :** Affiche ou masque le rapport Tests séquentiels (type 1), qui contient les sommes des carrés alors que des effets sont ajoutés au modèle de manière séquentielle. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet fixe.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);Wait( 1 );fm << (Fit[1] << Sequential Tests( 1 ));

```

#### Standard Error of Conditional Predicted

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Conditional Predicted)

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les erreurs standard des prédictions de la moyenne conditionnelle. Cette option n&apos;est disponible que lorsque le modèle contient au moins un effet aléatoire.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Standard Error of Conditional Predicted);

```

#### Standard Error of Predicted

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Predicted)

**Description :** Enregistre une nouvelle colonne dans la table de données. La nouvelle colonne contient les erreurs standard de la prédiction de la moyenne marginale.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Standard Error of Predicted);

```

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**Description :** Affiche ou masque une surface de réponse 3D de la réponse marginale. Cette option n&apos;est disponible que lorsque le modèle contient au moins deux effets.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << (Fit[1] << Surface Profiler( 1 ));

```

## Generalized Linear Mixed Model

### Colonnes

#### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Constructeurs associés

#### Fit GLMM Platform

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Random Effects( columns ), Repeated Effects( columns ), Repeated Structure( type ), Personality( "Generalized Linear Mixed Model" ) )

**Description :** Ajuste un modèle mixte linéaire généralisé. Ces modèles peuvent être utilisés pour les coefficients aléatoires, les split-plots et les plans bloqués lorsque la réponse est non gaussienne. Les distributions de réponse prennent en charge les données continues, catégorielles, de dénombrement et de temps avant événement.

**Modèle à coefficients aléatoires**

```jsl

dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );fm = dt << Fit Model(	Y( :Defect ),	Effects( :Finishing Treatment ),	Random Effects( :Lot, :Lot * :Finishing Treatment ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Negative Binomial" ),	Run());

```

**Modèle à mesures répétées**

```jsl

dt = Open( "$SAMPLE_DATA/Repeated Measures Binomial.jmp" );fm = Fit Model(	Y( :No Headache, :Number of Patients ),	Effects( :Treatment, :Week, :Treatment * :Week ),	Personality( "Generalized Linear Mixed Model" ),	Subject( :"Treatment(Clinic)"n ),	Repeated Effects( :Week Continuous ),	Repeated Structure( "AR(1)" ),	Generalized Distribution( "Binomial" ),	Link Function( "Logit" ),	Run());

```

**Modèle d'effets aléatoires imbriqués**

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());

```

**Modèle spatial**

```jsl

dt = Open( "$SAMPLE_DATA/Hessian Fly.jmp" );fm = Fit Model(	Y( :Y, :N ),	Effects( :Entry ),	Personality( "Generalized Linear Mixed Model" ),	Repeated Effects( :Latitude, :Longitude ),	Repeated Structure( "Spatial" ),	Repeated Structure Type( "Exponential" ),	Generalized Distribution( "Binomial" ),	Link Function( "Logit" ),	Run());

```

**Modèle split-plot**

```jsl

dt = Open( "$SAMPLE_DATA/Time to Flower.jmp" );fm = dt << Fit Model(	Y( :Days ),	Effects( :A, :B, :A * :B ),	Random Effects( :Block, :Block * :A ),	NoBounds( 1 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Gamma" ),	Run());

```

### Messages d'éléments

#### Fit

**Syntaxe :** Fit Model(...Run( Fit( options ) )...); obj &lt;&lt; Fit( options ); obj &lt;&lt; (Fit[number] &lt;&lt; option)

**Description :** Vous permet d&apos;envoyer des messages à la plate-forme. Cette option peut être utilisée dans un script de lancement du modèle ou pour générer un handle vers un modèle spécifique dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Fit Statistics( 0 ) ) ));Wait( 1 );fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run);fm << Model Dialog;

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run(),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );fm = dt << Fit Model(	Y( :Grade ),	Effects( :Program ),	Random Effects( :School, :Class[:School] ),	NoBounds( 0 ),	Personality( "Generalized Linear Mixed Model" ),	Generalized Distribution( "Binomial" ),	Run());r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit GLMM Platform(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Generalized Regression > Generalized Regression Fit

### Messages d'éléments

#### Active Parameter Estimates

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Active Parameter Estimates( state=0|1 ))

**Description :** Affiche ou masque un tableau des estimations des paramètres actives ou non nulles pour le modèle actuellement sélectionné. Cette option n&apos;est pas disponible pour les modèles Maximum de vraisemblance ou Régression Ridge.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Active Parameter Estimates( 1 ));

```

#### Confusion Matrix

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Confusion Matrix( &lt;probability=0.5&gt; ))

**Description :** Génère une matrice de tabulation croisée des réponses observées et prévues. Utilisez l&apos;argument facultatif pour spécifier une probabilité de seuil différente de 0,5. Cette option est uniquement disponible lorsque la distribution spécifiée est binomiale, multinomiale ou logistique ordinale. "0.5" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( "Logistic Regression" ),			Validation Method( "None" ),			Confusion Matrix( 0.5 )		)	));

```

#### Cook's D Influence

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Cook&apos;s D Influence)

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La nouvelle colonne contient les valeurs de la statistique d&apos;influence du coefficient D de Cook. Cette option est uniquement disponible si la distribution spécifiée est Normale et la méthode d&apos;estimation spécifiée est celle des moindres carrés standard.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ) ) ));fm << (fit[1] << Cook's D Influence);

```

#### Correlation of Estimates

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Estimates( state=0|1 ))

**Description :** Pour l&apos;ajustement spécifié, affiche ou masque la matrice des corrélations entre les estimateurs des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Correlation of Estimates);

```

#### Covariance of Estimates

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Covariance Of Estimates( state=0|1 ))

**Description :** Pour l&apos;ajustement spécifié, affiche ou masque la matrice des covariances entre les estimateurs des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Covariance of Estimates);

```

#### Custom Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; ))

**Description :** Affiche ou masque un rapport Test personnalisé qui vous permet de tester une hypothèse personnalisée. Si le modèle a un chemin de solution, les résultats des tests personnalisés sont mis à jour quand vous mettez à jour la solution.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :BMI, :BP, :LDL, :HDL, :TCH ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ) ) ));fm << (fit[1] << Custom Test( [0 0 0 1 -1 0], Label() ));

```

#### Decision Threshold

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Decision Threshold( state=0|1, Set Probability Threshold( number=0.5 ))

**Description :** Affiche ou masque les rapports Seuils de décision pour les ensembles d&apos;apprentissage, de validation et de test, si spécifié. Chaque rapport contient un graphique de la distribution des probabilités ajustées pour chaque modèle, des matrices de confusion pour chaque modèle et des graphiques de classification pour comparer les ajustements des modèles. Cette option est uniquement disponible pour les réponses catégorielles binaires.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Severity ),	Effects(		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,		:Hepatitis * :Jaundice	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( Elastic Net( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 0 );fm << (fit[1] << Decision Threshold( 1 ));

```

#### Diagnostic Bundle

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**Description :** Affiche ou masque un groupe de graphiques de diagnostic qui permettent d&apos;apprécier la qualité de l&apos;ajustement du modèle de régression par rapport aux données observées. Un ensemble de graphiques est disponible pour l&apos;échantillon d&apos;apprentissage, ainsi que pour les ensembles de validation et de tests, si vous les utilisez. Non disponible lorsque la distribution spécifiée est binomiale, multinomiale, logistique ordinale, ou Risques proportionnels de Cox.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Distribution Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Distribution Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur de la fonction de distribution cumulée des régresseurs et de la réponse. La réponse est affichée dans la cellule la plus à droite. Cette option n&apos;est pas disponible lorsque la distribution spécifiée est binomiale ou de régression de quantile.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "BIC" ),			Distribution Profiler( 1 )		)	));

```

#### Effect Tests

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Effect Tests( state=0|1 ))

**Description :** Affiche ou masque les tests pour chaque effet. Chaque test d&apos;effet teste l&apos;hypothèse zéro que tous les paramètres associés à l&apos;effet sont nuls. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Effect Tests( 0 ));

```

#### Get Prediction Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**Description :** Construit un script pour créer une colonne de formule de prévision et la renvoie.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Get Prediction Formula);

```

#### Hats

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Hats)

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La nouvelle colonne contient les éléments de la diagonale de la matrice des classes, qui sont parfois appelées valeurs des classes. Cette option est uniquement disponible si la distribution spécifiée est Normale et la méthode d&apos;estimation spécifiée est celle des moindres carrés standard.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ) ) ));fm << (fit[1] << Hats);

```

#### Hazard Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur qui affiche le taux de risque comme une fonction des régresseurs et de la réponse. La réponse est affichée dans la cellule la plus à droite. Cette option est uniquement disponible lorsque la distribution spécifiée est normale, exponentielle, de Weibull, log-normale ou Risques proportionnels de Cox.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),	No Intercept,	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Hazard Profiler( 1 )		)	));

```

#### Hazard Ratios

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Ratios( state=0|1 ))

**Description :** Affiche ou masque un rapport qui contient les ratios des risques pour les régresseurs catégoriels, et les ratios des risques unitaires et les ratios des risques d&apos;étendue pour les régresseurs continus. Un ratio de risque est le rapport du taux de risque pour deux événements. Cette option est uniquement disponible lorsque la distribution spécifiée est Risques proportionnels de Cox.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),	No Intercept,	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Hazard Ratios( 1 )		)	));

```

#### Hide Inactive Paths

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Hide Inactive Paths( state=0|1 ))

**Description :** Ajuste la transparence des chemins inactifs dans le graphique de l&apos;estimation des paramètres du chemin de la solution de sorte que les chemins qui ne sont pas actifs soient estompés.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Hide Inactive Paths);

```

#### Incidence Rate Ratios

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Incidence Rate Ratios( state=0|1 ))

**Description :** Affiche ou masque un rapport qui contient les ratios des taux d&apos;incidence pour les régresseurs catégoriels, et les ratios des taux d&apos;incidence unitaires et les ratios des taux d&apos;incidence de l&apos;étendue pour les régresseurs continus. Cette option est uniquement disponible lorsque la distribution spécifiée est Poisson ou Binomiale négative et que le modèle contient une constante.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Incidence Rate Ratios( 1 )		)	));

```

#### Inverse Prediction

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) ))

**Description :** Génère une valeur prévue X et un intervalle de confiance en se basant sur les valeurs de Y et sur tous les autres facteurs spécifiés. Cette option n&apos;est pas disponible pour les modèles qui contiennent un régresseur de type Vecteur.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Inverse Prediction(	Response( 200, 250, 300 ),	Term Value(		Age( 48.5181 ),		Gender( "1" ),		BMI( . ),		BP( 94.6470135746607 ),		Total Cholesterol( 189.140271493213 ),		LDL( 115.439140271493 ),		HDL( 49.7884615384615 ),		TCH( 4.07024886877828 ),		LTG( 4.64141085972851 ),		Glucose( 91.2601809954751 )	)));

```

#### Lift Curve

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**Description :** Affiche ou masque la courbe Lift pour le modèle. Si vous avez utilisé la validation, une courbe Lift est affichée pour chaque ensemble d&apos;apprentissage, de validation et de test. Cette option est uniquement disponible lorsque la distribution spécifiée est Binomiale, Multinomiale ou Logistique ordinale.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Severity ),	Effects(		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,		:Hepatitis * :Jaundice	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( Elastic Net( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 0 );fm << (fit[1] << Lift Curve( 1 ));

```

#### Mean Confidence Interval

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**Description :** Enregistre deux nouvelles colonnes de formule dans la table de données d&apos;origine. Les nouvelles colonnes contiennent les limites de confiance inférieure et supérieure à 95 % pour la réponse moyenne.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Save Prediction Formula);fm << (fit[1] << Mean Confidence Interval);

```

#### Model Summary

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Model Summary( state=0|1 ))

**Description :** Affiche ou masque le rapport Résumé du modèle qui comprend les informations sur la spécification et les statistiques de qualité de l&apos;ajustement du modèle. Cette option affiche également le rapport Détails de l&apos;estimation pour les modèles applicables. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Model Summary( 0 ));

```

#### Multiple Comparisons

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**Description :** Génère les estimations des moyennes des moindres carrés, ou les estimations définies par l&apos;utilisateur. Ces estimations vous permettent d&apos;effectuer des comparaisons avec la moyenne générale, des comparaisons avec un contrôle ou des comparaisons par paire. Cette option n&apos;est pas disponible pour les modèles contenant un prédicteur de type Modélisation vectorielle ou pour les modèles ne contenant aucun prédicteur catégoriel.

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Gamma" ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "BIC" ),			Multiple Comparisons(				Effect( :Genre ),				Comparisons with Overall Average(					1,					Comparisons with Overall Average Decision Chart(						ANOM( 1, Point Options( "Show Needles" ) )					)				)			)		)	),	SendToReport(		Dispatch( {}, "Parameter Estimates for Original Predictors", OutlineBox, Close( 1 ) )	));

```

#### Normal Quantile Plot

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Normal Quantile Plot( state=0|1 ))

**Description :** Affiche ou masque un graphique des quantiles normaux sur l&apos;axe vertical et des résidus standardisés sur l&apos;axe horizontal. Si vous avez utilisé la validation, un graphique est affiché pour chaque ensemble d&apos;apprentissage, de validation et de test. Cette option est uniquement disponible lorsque la distribution spécifiée est normale et qu&apos;il n&apos;y a pas de censure.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ) ) ));fm << (fit[1] << Normal Quantile Plot);

```

#### Odds Ratios

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**Description :** Affiche ou masque un rapport contenant les rapports de probabilités pour les prédicteurs catégoriels, ainsi que les rapports de probabilités unitaires et les rapports de probabilités pour l&apos;étendue pour les prédicteurs continus. Cette option est uniquement disponible lorsque la distribution spécifiée est binomiale et lorsque le modèle contient une constante. Cette option n&apos;est pas disponible pour les modèles qui contiennent un prédicteur de type Vecteur.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( "Logistic Regression" ),			Validation Method( "None" ),			Odds Ratios( 1 )		)	));

```

#### Parameter Estimates for Centered and Scaled Predictors

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Centered and Scaled Predictors( state=0|1 ))

**Description :** Affiche ou masque un tableau des estimations des paramètres centrées et réduites.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Parameter Estimates for Centered and Scaled Predictors( 1 ));

```

#### Parameter Estimates for Original Predictors

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Original Predictors( state=0|1 ))

**Description :** Affiche ou masque un tableau des estimations des paramètres dans l&apos;échelle d&apos;origine des données. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Parameter Estimates for Original Predictors( 0 ));

```

#### Plot Actual by Predicted

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predicted( state=0|1 ))

**Description :** Affiche ou masque un graphique pour l&apos;échantillon d&apos;apprentissage avec les valeurs observées sur l&apos;axe vertical et les valeurs prévues sur l&apos;axe horizontal. Si vous avez utilisé la validation, un graphique est affiché pour chaque ensemble d&apos;apprentissage, de validation et de test. Cette option n&apos;est pas disponible lorsque la distribution spécifiée est binomiale, multinomiale, logistique ordinale, ou Risques proportionnels de Cox.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));fm << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Baseline Survival and Hazard

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Plot Baseline Survival and Hazard( state=0|1 ))

**Description :** Affiche ou masque les graphiques de survie de référence et de risque, qui représentent graphiquement les fonctions de survie et de risque pour la fonction de risques proportionnels de référence par rapport à la variable de réponse. Une table contenant les valeurs tracées se trouve sous les graphiques. Cette option est uniquement disponible lorsque la distribution spécifiée est Risques proportionnels de Cox.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),	No Intercept,	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Plot Baseline Survival and Hazard( 1 )		)	));

```

#### Plot Residual by Predicted

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual By Predicted( state=0|1 ))

**Description :** Affiche ou masque un graphique pour l&apos;échantillon d&apos;apprentissage avec les valeurs du résidu sur l&apos;axe vertical et les valeurs prévues sur l&apos;axe horizontal. Si vous avez utilisé la validation, un graphique est affiché pour chaque ensemble d&apos;apprentissage, de validation et de test. Cette option n&apos;est pas disponible lorsque la distribution spécifiée est binomiale, multinomiale, logistique ordinale, ou Risques proportionnels de Cox.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));fm << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Plot Residual by Predictor

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predictor( state=0|1 ))

**Description :** Affiche ou masque un graphique des valeurs du résidu sur l&apos;axe vertical et des valeurs du régresseur sur l&apos;axe horizontal. Si vous avez utilisé la validation, un graphique est affiché pour chaque ensemble d&apos;apprentissage, de validation et de test. Cette option n&apos;est pas disponible lorsque la distribution spécifiée est binomiale, multinomiale, logistique ordinale, ou Risques proportionnels de Cox. Cette option n&apos;est pas disponible pour les modèles qui contiennent un régresseur de type Vecteur.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));fm << (fit[1] << Plot Residual by Predictor( 1 ));

```

#### Precision Recall Curve

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**Description :** Affiche ou masque la courbe précision-rappel. Une courbe précision-rappel représente les valeurs de précision en fonction des valeurs de rappel à différents seuils. Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque ensemble d&apos;apprentissage, de validation et de test.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Severity ),	Effects(		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,		:Hepatitis * :Jaundice	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( Elastic Net( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 0 );fm << (fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**Description :** Affiche ou masque le profileur de prévision. Les régresseurs qui ont une estimation des paramètres de zéro et qui ne sont impliqués dans aucun terme d&apos;interaction avec des coefficients non nuls n&apos;apparaissent pas dans le profileur.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "BIC" ),			Profiler( 1 )		)	));

```

#### Publish Prediction Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**Description :** Crée une formule de prévision et la publie sous la forme d&apos;un script de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Publish Prediction Formula);

```

#### Quantile Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Quantile Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur qui affiche la réponse prévue comme une fonction des régresseurs et le quantile de la fonction de distribution cumulée. Le quantile est appelé Probabilité et est affiché dans la cellule la plus à droite. Cette option n&apos;est pas disponible lorsque la distribution spécifiée est Binomiale ou Régression quantile.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "BIC" ),			Quantile Profiler( 1 )		)	));

```

#### ROC Curve

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**Description :** Affiche ou masque la courbe ROC. Si vous avez utilisé la validation, une courbe ROC est affichée pour chaque ensemble d&apos;apprentissage, de validation et de test. Cette option est uniquement disponible lorsque la distribution spécifiée est binomiale, multinomiale ou logistique ordinale.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Severity ),	Effects(		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,		:Hepatitis * :Jaundice	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( Elastic Net( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 0 );fm << (fit[1] << ROC Curve( 1 ));

```

#### Relaunch Active Main Effects and Full Factorial

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Full Factorial)

**Description :** Ouvre une fenêtre de lancement du modèle linéaire où la liste Choisir les effets du modèle contient un ensemble de termes basé sur les termes qui ont une estimation des paramètres non nulle. Ces termes sont les effets actifs. Toutes les autres spécifications de la fenêtre de lancement sont utilisées dans l&apos;analyse d&apos;origine. La liste Choisir les effets du modèle est remplie avec un factoriel complet construit avec les effets actifs.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Full Factorial);

```

#### Relaunch Active Main Effects and Response Surface Model

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Response Surface Model)

**Description :** Ouvre une fenêtre de lancement du modèle linéaire où la liste Choisir les effets du modèle contient un ensemble de termes basé sur les termes qui ont une estimation des paramètres non nulle. Ces termes sont les effets actifs. Toutes les autres spécifications de la fenêtre de lancement sont utilisées dans l&apos;analyse d&apos;origine. La liste Choisir les effets du modèle est remplie avec un modèle de surface de réponse construit avec les effets actifs.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Response Surface Model);

```

#### Relaunch Active Main Effects and Second Degree Factorial

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Factorial)

**Description :** Ouvre une fenêtre de lancement du modèle linéaire où la liste Choisir les effets du modèle contient un ensemble de termes basé sur les termes qui ont une estimation des paramètres non nulle. Ces termes sont les effets actifs. Toutes les autres spécifications de la fenêtre de lancement sont utilisées dans l&apos;analyse d&apos;origine. La liste Choisir les effets du modèle est remplie avec un factoriel de second degré construit avec les effets actifs.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Second Degree Factorial);

```

#### Relaunch Active Main Effects and Second Degree Polynomial

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Polynomial)

**Description :** Ouvre une fenêtre de lancement du modèle linéaire où la liste Choisir les effets du modèle contient un ensemble de termes basé sur les termes qui ont une estimation des paramètres non nulle. Ces termes sont les effets actifs. Toutes les autres spécifications de la fenêtre de lancement sont utilisées dans l&apos;analyse d&apos;origine. La liste Choisir les effets du modèle est remplie avec un polynôme de second degré construit avec les effets actifs.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Second Degree Polynomial);

```

#### Relaunch Active Main Effects and Third Degree Factorial

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Factorial)

**Description :** Ouvre une fenêtre de lancement du modèle linéaire où la liste Choisir les effets du modèle contient un ensemble de termes basé sur les termes qui ont une estimation des paramètres non nulle. Ces termes sont les effets actifs. Toutes les autres spécifications de la fenêtre de lancement sont utilisées dans l&apos;analyse d&apos;origine. La liste Choisir les effets du modèle est remplie avec un factoriel de troisième degré construit avec les effets actifs.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Third Degree Factorial);

```

#### Relaunch Active Main Effects and Third Degree Polynomial

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Polynomial)

**Description :** Ouvre une fenêtre de lancement du modèle linéaire où la liste Choisir les effets du modèle contient un ensemble de termes basé sur les termes qui ont une estimation des paramètres non nulle. Ces termes sont les effets actifs. Toutes les autres spécifications de la fenêtre de lancement sont utilisées dans l&apos;analyse d&apos;origine. La liste Choisir les effets du modèle est remplie avec un polynôme de troisième degré construit avec les effets actifs.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch Active Main Effects and Third Degree Polynomial);

```

#### Relaunch with Active Effects

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch with Active Effects)

**Description :** Ouvre une fenêtre de lancement du modèle linéaire où la liste Choisir les effets du modèle contient un ensemble de termes basé sur les termes qui ont une estimation des paramètres non nulle. Ces termes sont les effets actifs. Toutes les autres spécifications de la fenêtre de lancement sont utilisées dans l&apos;analyse d&apos;origine. La liste Choisir les effets du modèle est renseignée avec les effets actifs.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Relaunch with Active Effects);

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**Description :** Supprime l&apos;ajustement spécifié du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );fm = dt << Fit Model(	Y( :Oxy ),	Effects(		:Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,		:Runtime * :RstPulse, :Runtime * :MaxPulse, :RunPulse * :RstPulse,		:RunPulse * :MaxPulse, :RstPulse * :MaxPulse	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) ));Wait( 2 );fm << (fit[1] << Remove Fit);

```

#### Reset Solution

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Reset Solution)

**Description :** Réinitialise le modèle dans le chemin de la solution par rapport au modèle d&apos;origine.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (Fit[1] << Set Solution ID( 122 ));Wait( 1 );fm << (Fit[1] << Reset Solution);

```

#### Save Cox Snell Residual Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Cox Snell Residual Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule pour les résidus de Cox-Snell.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));fm << (fit[1] << Save Cox Snell Residual Formula);

```

#### Save Distribution Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Distribution Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule pour la fonction de distribution cumulée.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) ));fm << (Fit[1] << Save Distribution Formula);

```

#### Save Functional Prediction Formulas

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Functional Prediction Formulas)

**Description :** Enregistre de nouvelles colonnes dans la table de données d&apos;origine. Une nouvelle colonne est ajoutée pour chaque réponse en composante principale de l&apos;EDF. Chaque nouvelle colonne contient une formule de prévision pour chaque composante principale fonctionnelle. Une colonne finale est ajoutée qui contient une formule de prévision du modèle qui est une combinaison linéaire des formules de prévision et des colonnes de fonction propre de la plate-forme Explorateur de données fonctionnelles. Cette option est uniquement disponible lorsque les colonnes de réponse contiennent la propriété de colonne Nombre de CPF dans l&apos;EDF.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Simple Linear Functional Data.jmp" );fobj = Functional Data Explorer(	Y( :Y ),	X( :T ),	ID( :ID ),	Z( :X1, :X2, :X3 ),	B Splines( 1 ));dtsum = (Report( fobj )["Function Summaries"] << get scriptable object) << Save Summaries;fobj << close window;fm = dtsum << Fit Model(	Y( :Y FPC 1, :Y FPC 2 ),	Effects( :X1, :X2, :X3, :X1 * :X2, :X1 * :X3, :X2 * :X3 ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( "Best Subset" ),			Validation Method( "AICc" ),			Enforce Heredity( 1 )		)	));(Report( fm[1] )["Generalized Regression for Y FPC 1"]["Normal Best Subset with AICc Validation"] << get scriptable object) <<Save Functional Prediction Formulas;

```

#### Save Linear Predictor

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Linear Predictor)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule pour le produit de la matrice du plan et le vecteur de l&apos;estimation des paramètres.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) ));fm << (fit[1] << Save Prediction Formula);fm << (fit[1] << Save Linear Predictor);

```

#### Save Martingale Residual Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Martingale Residual Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule pour les résidus de Martingale.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));fm << (fit[1] << Save Martingale Residual Formula);

```

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Prediction Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient la formule de prévision, donnée en termes de valeurs de données (non standardisées) observées. La formule de prévision ne contient pas de termes mis à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Save Prediction Formula);

```

#### Save Resample Formulas

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Resample Formulas)

**Description :** Enregistre plusieurs colonnes de formule dans la table de données d&apos;origine. Un groupe de colonnes appelé Échantillons SVEM contient une colonne de formule par modèle individuel. Ces colonnes sont enregistrées en tant que colonnes masquées. La colonne suivante est une formule de prévision pour le modèle d&apos;ensemble auto-validé. La colonne suivante contient la formule d&apos;erreur standard pour le modèle d&apos;ensemble auto-validé. La colonne finale contient la prévision médiane du modèle d&apos;ensemble auto-validé pour chaque ligne.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run( Fit( Estimation Method( SVEM Forward Selection( Samples( 100 ) ) ) ) ));fm << (fit[1] << Save Resample Formulas);

```

#### Save Residual Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule pour les résidus, donnée sous la forme Y moins la formule de prévision. La formule des résidus ne contient pas de termes mis à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule qui génère des valeurs simulées à l&apos;aide des paramètres estimés du modèle que vous ajustez. Cette colonne peut être utilisée dans l&apos;utilitaire Simuler en tant que Colonne à échanger.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) ));fm << (fit[1] << Save Simulation Formula);

```

#### Save Survival Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Survival Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule pour la probabilité de survie au temps observé. La fonction de survie est égale à 1 moins la fonction de distribution cumulée.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));fm << (fit[1] << Save Survival Formula);

```

#### Save Validation Column

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation Column)

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La nouvelle colonne décrit l&apos;affectation des lignes aux blocs. Pour KFold, la colonne liste le bloc auquel la ligne a été assignée. Pour Retenue, chaque ligne est identifiée comme appartenant à l&apos;ensemble de validation ou d&apos;apprentissage. Pour En supprimer un(e), la valeur de la ligne indique son ordre d&apos;exclusion.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) ));fm << (fit[1] << Save Validation Column);

```

#### Save Variance Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Variance Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule pour la variance de la prévision.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects(		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,		:spine * :width, :spine * :weight, :width * :weight	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Poisson" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) ));fm << (fit[1] << Save Variance Formula);

```

#### Select Nonzero Terms

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Select Nonzero Terms)

**Description :** Met en surbrillance les termes avec des coefficients non nuls dans le rapport. Sélectionne également toutes les colonnes associées dans la table de données. Cette option n&apos;est pas disponible lorsque la méthode d&apos;estimation spécifiée est Régression Ridge.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Select Nonzero Terms);

```

#### Select Zeroed Terms

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Select Zeroed Terms)

**Description :** Met en surbrillance les termes à coefficients nuls dans le rapport. Sélectionne également toutes les colonnes associées dans la table de données. Cette option n&apos;est pas disponible lorsque la méthode d&apos;estimation spécifiée est Régression Ridge.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Select Zeroed Terms);

```

#### Set Solution ID

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Set Solution ID( number ))

**Description :** Change le modèle spécifié avec un modèle différent dans le chemin de la solution.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (Fit[1] << Set Solution ID( 122 ));

```

#### Show Prediction Expression

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Show Prediction Expression( state=0|1 ))

**Description :** Affiche ou masque le rapport Expression de la prévision qui contient l&apos;équation du modèle estimé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Show Prediction Expression);

```

#### Show Solution Path Summary

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Show Solution Path Summary( state=0|1 ))

**Description :** Affiche ou masque un rapport qui contient une table de données des statistiques d&apos;ajustement pour les points des graphiques du chemin de la solution et du chemin de validation où l&apos;ensemble actif change. Les statistiques disponibles dépendent de la méthode d&apos;estimation. Cette option n&apos;est pas disponible pour les modèles Maximum de vraisemblance ou Régression Ridge.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Show Solution Path Summary( 1 ));

```

#### Solution Path

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Solution Path( state=0|1 ))

**Description :** Affiche ou masque les graphiques du chemin de la solution et du chemin de la validation. Cette option n&apos;est pas disponible pour les modèles Maximum de vraisemblance. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));Wait( 1 );fm << (fit[1] << Solution Path( 0 ));

```

#### Std Error of Predicted

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted)

**Description :** Enregistre une nouvelle colonne dans la table de données d&apos;origine. La nouvelle colonne contient les erreurs standard de la réponse moyenne prévue.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));fm << (fit[1] << Save Prediction Formula);fm << (fit[1] << Std Error of Predicted);

```

#### Std Error of Predicted Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted Formula)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données d&apos;origine. La nouvelle colonne contient une formule pour les erreurs standard de la réponse moyenne prévue.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( Validation Column ) )	));fm << (fit[1] << Save Prediction Formula);fm << (fit[1] << Std Error of Predicted Formula);

```

#### Step Backward

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Step Backward)

**Description :** Passe au plus petit modèle suivant dans le chemin de la solution.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (Fit[1] << Step Backward);Wait( 1 );fm << (Fit[1] << Step Backward);

```

#### Step Forward

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Step Forward)

**Description :** Passe au plus grand modèle suivant dans le chemin de la solution.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) ));Wait( 1 );fm << (Fit[1] << Step Forward);Wait( 1 );fm << (Fit[1] << Step Forward);

```

#### Survival Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Survival Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur qui affiche la fonction de survie comme une fonction des régresseurs et de la réponse. La réponse est affichée dans la cellule la plus à droite. Cette option est uniquement disponible lorsque la distribution spécifiée est normale, exponentielle, de Weibull, log-normale ou Risques proportionnels de Cox.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );fm = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));fm << (fit[1] << Survival Profiler( 1 ));

```

## Generalized Regression

### Colonnes

#### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Constructeurs associés

#### Fit Generalized

**Syntaxe :** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Regression" ) )

**Description :** Ajuste les modèles linéaires généralisés en utilisant les techniques de régression pénalisée qui aident à automatiser la sélection des variables de façon à éviter un surajustement. Les techniques de régression pénalisée incluent le lasso, le lasso adaptatif, l&apos;Elastic-net, l&apos;Elastic-net adaptatif et la régression ridge. Les distributions des réponses peuvent prendre en charge des données continues, catégorielles, des dénombrements et des données de réponse temps avant événement. Il s&apos;agit de la méthode d&apos;analyse statistique recommandée pour la plupart des opérations de régression.

**Elastic-net**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));

```

**Elastic-net avec arrêt précoce**

```jsl

dt = Open( "$SAMPLE_DATA/Prostate Cancer.jmp" );obj = dt << Fit Model(	Y( :Status ),	Effects( :PSA, :PSA * :PSA, ColumnGroup( "Proteins" ) ),	Target Level( "CCD" ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run(		Fit(			Estimation Method( "Elastic Net" ),			Validation Method( "AICc" ),			Early Stopping( 1 )		)	));

```

**Élimination descendante**

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Censor( :censor ),	Censor Code( "1" ),	Y( :Time ),	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Weibull" ),	Run( Fit( Estimation Method( "Backward Elimination" ), Validation Method( "AICc" ) ) ));

```

**Lasso**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run( Fit( Estimation Method( Lasso ), Validation Method( "Validation Column" ) ) ));

```

**Lasso adaptatif**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) ));

```

**Lasso double**

```jsl

dt = Open( "$SAMPLE_DATA/Prostate Cancer.jmp" );obj = dt << Fit Model(	Y( :Status ),	Effects( ColumnGroup( "Proteins" ) ),	Target Level( "CCD" ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Estimation Method( "Double Lasso" ), Validation Method( "AICc" ) ) ));

```

**Lasso SVEM**

```jsl

dt = Open( "$SAMPLE_DATA/Reactor Half Fraction.jmp" );obj = dt << Fit Model(	Y( :Percent Reacted ),	Effects(		:Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration,		:Feed Rate * :Catalyst, :Feed Rate * :Stir Rate, :Feed Rate * :Temperature,		:Feed Rate * :Concentration, :Catalyst * :Stir Rate, :Catalyst * :Temperature,		:Catalyst * :Concentration, :Stir Rate * :Temperature, :Stir Rate * :Concentration,		:Temperature * :Concentration	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( SVEM Lasso( Samples( 200 ) ) ), Profiler( 1 ) ) ));

```

**Maximum de vraisemblance**

```jsl

dt = Open( "$SAMPLE_DATA/Fishing.jmp" );obj = dt << Fit Model(	Y( :Fish Caught ),	Effects( :Live Bait, :Fishing Poles, :Camper, :People, :Children ),	Personality( "Generalized Regression" ),	Generalized Distribution( "ZI Poisson" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Meilleur sous-ensemble**

```jsl

dt = Open( "$SAMPLE_DATA/Fishing.jmp" );obj = dt << Fit Model(	Y( :Fish Caught ),	Effects( :Live Bait, :Fishing Poles, :Camper, :People, :Children ),	Personality( "Generalized Regression" ),	Generalized Distribution( "ZI Poisson" ),	Run( Fit( Estimation Method( "Best Subset" ), Validation Method( "AICc" ) ) ));

```

**Moindres carrés standard**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ), Validation Method( "None" ) ) ));

```

**Régression logistique**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y Binary ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Target Level( "High" ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Binomial" ),	Run( Fit( Estimation Method( "Logistic Regression" ), Validation Method( "None" ) ) ));

```

**Régression quantile**

```jsl

dt = Open( "$SAMPLE_DATA/fitness.jmp" );fm = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Quantile Regression" ),	Quantile( 0.5 ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Ridge**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run( Fit( Estimation Method( Ridge ), Validation Method( "Validation Column" ) ) ));

```

**Sélecteur de Dantzig**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Dantzig Selector ), Validation Method( "AICc" ) ) ));

```

**Sélection Forward**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Forward Selection ), Validation Method( "AICc" ) ) ));

```

**Sélection Forward élaguée**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Pruned Forward Selection ), Validation Method( "AICc" ) ) ));

```

**Sélection forward élaguée avec hérédité**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Pruned Forward Selection ),			Validation Method( "AICc" ),			Enforce Heredity( 1 )		)	));

```

**Sélection forward élaguée avec termes forcés**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( "Pruned Forward Selection" ),			Validation Method( "AICc" ),			Force( [1 0 0 0 0 1 0 0 0 0 0] )		)	));

```

**Sélection Forward en deux étapes**

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		:F, :Ct, :A, :T, :Cn, :F * :Ct, :F * :A, :F * :T, :F * :Cn, :Ct * :A, :Ct * :T,		:Ct * :Cn, :A * :T, :A * :Cn, :T * :Cn	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Two Stage Forward Selection ),			Validation Method( "AICc" ),			Enforce Heredity( 1 )		)	));

```

**Sélection Forward SVEM**

```jsl

dt = Open( "$SAMPLE_DATA/Reactor Half Fraction.jmp" );obj = dt << Fit Model(	Y( :Percent Reacted ),	Effects(		:Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration,		:Feed Rate * :Catalyst, :Feed Rate * :Stir Rate, :Feed Rate * :Temperature,		:Feed Rate * :Concentration, :Catalyst * :Stir Rate, :Catalyst * :Temperature,		:Catalyst * :Concentration, :Stir Rate * :Temperature, :Stir Rate * :Concentration,		:Temperature * :Concentration	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit( Estimation Method( SVEM Forward Selection( Samples( 200 ) ) ), Profiler( 1 ) )	));

```

### Messages d'éléments

#### Estimation Method

**Syntaxe :** obj = Fit Model(...Run( Fit( Estimation Method( method ) ) )... )

**Description :** Spécifie la méthode d&apos;estimation ou la sélection de variables utilisée pour ajuster le modèle.

**Elastic-net**

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Gamma" ),	Run( Fit( Estimation Method( "Elastic Net" ), Validation Method( "AICc" ), Profiler ) ));

```

**Lasso**

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "AICc" ), Profiler ) ));

```

**Lasso double**

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Double Lasso" ), Validation Method( "AICc" ), Profiler ) ));

```

**Sélection Forward**

```jsl

dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );fm = dt << Fit Model(	Y( :World Gross ),	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( "Forward Selection" ),			Validation Method( "AICc" ),			Profiler		)	));

```

**Sélection Forward élaguée**

```jsl

dt = Open( "$SAMPLE_DATA/flrpaste.jmp" );fm = dt << Fit Model(	Y( :Strength ),	Effects( :Liquid, :Sugar, :Flour, :Sifted, :Type, :Temp, :Salt, :Clamp, :Coat ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit( Estimation Method( "Pruned Forward Selection" ), Validation Method( "AICc" ) )	));

```

#### Fit

**Syntaxe :** obj &lt;&lt; Fit( Estimation Method( Emethod( estim_options ) ), Validation Method( Vmethod( valid_options ) ), &lt;Early Stopping&gt;, &lt;Enforce Heredity&gt;, &lt;Force( vector )&gt; )

**Description :** Spécifie la méthode et les options d&apos;estimation, la méthode et les options de validation, et d&apos;autres options d&apos;ajustement pour votre modèle. Les options d&apos;estimation disponibles dépendent de la méthode d&apos;estimation spécifiée. Les options de validation sont disponibles pour les méthodes KFold et Retenue. Les autres options d&apos;ajustement contrôlent l&apos;arrêt précoce, l&apos;application de l&apos;hérédité des termes, et l&apos;application des termes dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	),	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, Close( 0 ) ) ));

```

#### Generalized Distribution

**Syntaxe :** obj = Fit Model(...Generalized Distribution( distribution )... )

**Description :** Spécifie la distribution de la colonne de réponse, compte tenu des colonnes de régresseur, utilisée pour ajuster le modèle.

**Binomiale négative**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Regression" ),	Generalized Distribution( Negative Binomial ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Cauchy**

```jsl

dt = Open( "$SAMPLE_DATA/fitness.jmp" );fm = dt << Fit Model(	Y( :Oxy ),	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Generalized Regression" ),	Generalized Distribution( Cauchy ),	Run( Fit( Estimation Method( Maximum Likelihood ), Validation Method( None ) ) ));

```

**Distribution binomiale négative comportant un Dirac en 0**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Regression" ),	Generalized Distribution( ZI Negative Binomial ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Exponentielle**

```jsl

dt = Open( "$SAMPLE_DATA/reliability/tobit2.jmp" );fm = dt << Fit Model(	Y( :YLow, :YHigh ),	Effects( :age, :liquidity ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Exponential" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Gamma**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );fm = dt << Fit Model(	Y( :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE,		:SULFUR * :SILICA, :SULFUR * :SILANE, :SULFUR * :SULFUR	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Gamma" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Log-normale**

```jsl

dt = Open( "$SAMPLE_DATA/reliability/tobit2.jmp" );fm = dt << Fit Model(	Y( :YLow, :YHigh ),	Effects( :age, :liquidity ),	Personality( "Generalized Regression" ),	Generalized Distribution( "LogNormal" ),	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) ));

```

**Multinomial**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fm = dt << Fit Model(	Y( :Species ),	Effects(		:Region, :Culmen Length, :Culmen Depth, :Flipper Length, :Body Mass, :Sex,		:Culmen Length * :Culmen Depth, :Culmen Length * :Flipper Length,		:Culmen Length * :Body Mass, :Culmen Length * :Sex, :Culmen Depth * :Flipper Length,		:Culmen Depth * :Body Mass, :Culmen Depth * :Sex, :Flipper Length * :Body Mass,		:Flipper Length * :Sex, :Body Mass * :Sex	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Multinomial" ),	Run(		Fit(			Estimation Method( "Elastic Net" ),			Validation Method( "AICc" ),			Confusion Matrix		)	));

```

**Normal**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );fm = dt << Fit Model(	Y( :HARDNESS ),	Effects(		:SILICA, :SILANE, :SULFUR, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE,		:SULFUR * :SILICA, :SULFUR * :SILANE, :SULFUR * :SULFUR	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( "Standard Least Squares" ), Validation Method( "None" ) ) ));

```

**Poisson**

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );fm = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Regression" ),	Generalized Distribution( Poisson ),	Run( Fit( Estimation Method( Forward Selection ), Validation Method( AICc ) ) ));

```

**Régression robuste**

```jsl

dt = Open( "$SAMPLE_DATA/fitness.jmp" );fm = dt << Fit Model(	Y( :Oxy ),	Effects( Factorial To Degree( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ) ),	Personality( "Generalized Regression" ),	Generalized Distribution( "t(5)" ),	Run(		Fit( Estimation Method( "Pruned Forward Selection" ), Validation Method( "AICc" ) )	));

```

**Risques proportionnels de Cox**

```jsl

dt = Open( "$SAMPLE_DATA/rats.jmp" );fm = dt << Fit Model(	Censor( :Censor ),	Censor Code( "1" ),	Y( :days ),	Effects( :Group ),	No Intercept( 1 ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Cox Proportional Hazards" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Plot Baseline Survival and Hazard( 1 )		)	));

```

#### Get X Matrix

**Syntaxe :** obj &lt;&lt; Get X Matrix

**Description :** Renvoie la matrice de plans (aussi nommée matrice X).

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Validation( :Validation ),	Run(		Fit(			Estimation Method( Lasso( "Adaptive" ) ),			Validation Method( "Validation Column" )		)	));As Table( fm << Get X Matrix );

```

#### Model Dialog

**Syntaxe :** obj &lt;&lt; Model Dialog

**Description :** Affiche la fenêtre de lancement Modèle linéaire renseignée pour l&apos;analyse actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Model Dialog;

```

#### Save Coding Table

**Syntaxe :** obj &lt;&lt; Save Coding Table

**Description :** Crée une nouvelle table de données qui contient le codage JMP pour tous les paramètres du modèle. La dernière colonne affiche les valeurs de la variable de réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fm = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run);fm << Save Coding Table;

```

#### Set Random Seed

**Syntaxe :** obj = Fit Model(...Run( Set Random Seed( number ) )...)

**Description :** Définit la graine pour le processus de randomisation utilisé pour la validation K-Fold et Retenue.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Set Random Seed( 1111 ),		Fit( Estimation Method( "Lasso" ), Validation Method( "Holdback", 0.3 ) )	));

```

#### Validation Method

**Syntaxe :** obj &lt;&lt; Validation Method( "K fois"|"Retenue"|"En supprimer un(e)"|"BIC"|"AICc"|"ERIC"|"Aucun(e)"|"Colonne de validation" )

**Description :** Spécifie la méthode de validation utilisée pour la modélisation.

**Colonne de validation**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y Ordinal ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Ordinal Logistic" ),	Run( Fit( Estimation Method( Elastic Net ), Validation Method( Validation Column ) ) ));

```

**Critère d'information d'Akaike corrigé**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso ), Validation Method( AICc ) ) ));

```

**Critère d'information de bayes**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso ), Validation Method( BIC ) ) ));

```

**ERIC**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( ERIC ) ) ));

```

**Retenue**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Gamma" ),	Run( Fit( Estimation Method( Lasso ), Validation Method( Holdback( .3 ) ) ) ));

```

### Messages d'éléments partagés

#### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Copy Script;

```

#### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Data Table Window;

```

#### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));t = obj << Get Timing;Show( t );

```

#### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Redo Analysis;

```

#### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Relaunch Analysis;

```

#### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script to Journal;

```

#### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script to Report;

```

#### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Save Script to Script Window;

```

#### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));obj << Title( "My Platform" );

```

#### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Fit Model(	Y( :Y ),	Effects(		Factorial To Degree(			:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose		)	),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( Elastic Net( N Grid Points( 250 ), Min Ratio( .0001 ) ) ),			Validation Method( "AICc" )		)	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**Syntaxe :** obj = Fit Generalized(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Model Dialog

### Colonnes

#### ID

**Syntaxe :** obj = Run(...&lt;ID( column )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Colonne qui identifie la matrice de relation génétique.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Run( Show Prediction Expression( 1 ) ));obj << Run;

```

#### Subgroup

**Syntaxe :** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie une ou plusieurs variables de sous-groupe. Lorsqu&apos;une variable de sous-groupe est définie, des ajustements supplémentaires sont réalisés pour chaque catégorie de variable de sous-groupe.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Fit Model(	Y( :age ),	Effects( :sex, :type ),	Subgroup( :country, :marital status ),	Personality( "Response Screening" ),	Subgroup Twoway( 1 ),	Run);

```

#### Switch

**Syntaxe :** obj = Fit Model(...Switch( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les colonnes pouvant être échangées, une par une, dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Run( Show Prediction Expression( 1 ) ));obj << Run;

```

### Messages d'éléments

#### Cauchy Fit

**Syntaxe :** obj = Fit Model(...Personality( "Response Screening" ), Cauchy Fit( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Suppose que les erreurs ont une distribution de Cauchy. Une distribution de Cauchy a des queues plus épaisses qu&apos;une distribution normale, ce qui réduit l&apos;importance des valeurs aberrantes. Disponible uniquement pour la méthode de Criblage des réponses. Ce message correspond à l&apos;option Ajustement très robuste de la fenêtre de lancement Modèle linéaire.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Fit Model(	Effects( :Process, :Site, :Process * :Site ),	Personality( "Response Screening" ),	Y( 8 :: 394 ),	Cauchy Fit( 1 ),	Run);

```

#### Censor Code

**Syntaxe :** obj = Fit Model(...Censor Code( string )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Identifie la valeur de la colonne Censure qui désigne les observations censurées à droite.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Censor Code( "1" ),	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ) ));

```

#### Center Polynomials

**Syntaxe :** obj = Fit Model(...Center Polynomials( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Effectue le centrage des effets dans les modèles polynomiaux. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE, :SILICA * :SILANE ),	Center Polynomials( 0 ),	Personality( "Standard Least Squares" ),	Run);

```

#### Centering

**Syntaxe :** obj = Fit Model(...Personality( "Partial Least Squares" ), Centering( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Centre l&apos;ensemble des variables de réponse et des effets du modèle en soustrayant la moyenne de chaque colonne. Disponible uniquement pour la méthode d&apos;analyse statistique Moindres carrés partiels. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );dt << Fit Model(	Y( :ls, :ha, :dt ),	Effects( 5 :: 31 ),	No Intercept( 1 ),	Personality( "Partial Least Squares" ),	Centering( 0 ),	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) ));

```

#### Choose High Target

**Syntaxe :** obj = Fit Model(...Personality( "Nominal Logistic" ), Choose High Target( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie d&apos;utiliser la valeur supérieure d&apos;une réponse nominale binaire en tant que réponse cible. Disponible uniquement pour une colonne de réponse binaire dans la méthode d&apos;analyse statistique Logistique nominale. Ce message correspond à l&apos;option Niveau cible de la fenêtre de lancement Modèle linéaire.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Choose High Target( 1 ),	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) ));

```

#### Convergence Limit

**Syntaxe :** obj = Fit Model(...Convergence Limit( number=0.00000001 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la limite de convergence pour l&apos;ajustement du modèle. Si votre modèle ne converge pas facilement, vous pourriez augmenter la limite de convergence. Par défaut, la limite de convergence est de 0,00000001.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Convergence Limit( 0.0001 ),	Run);

```

#### Create SAS Job

**Syntaxe :** obj &lt;&lt; Create SAS Job

**Description :** Enregistre le code SAS pour la construction du modèle actuelle dans une fenêtre du programme SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Create SAS Job;

```

#### Dispose Reports

**Syntaxe :** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**Description :** Permet de spécifier qu&apos;aucun rapport du modèle individuel n&apos;est affiché et qu&apos;ils sont supprimés de la mémoire après l&apos;ajustement. Lorsqu&apos;il y a des milliers de réponses, cette option réduit le temps de calcul et économise la mémoire. Utiliser cette option avec l&apos;option Résultats dans les tables de données pour collecter les résultats à partir des modèles ajustés.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Dispose Reports( 1 ),	Run);

```

#### Effects

**Syntaxe :** obj = Run(...Effects( col, col, ... )...); obj = Run(...Effects( macro( col, col, ... ) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Affecte le rôle Effets à des termes explicatifs. Vous pouvez spécifier des effets individuellement ou à l&apos;aide des modèles préétablis disponibles dans la fenêtre de lancement Modèle linéaire. Voir les différents exemples ci-dessous.

**Cubique partiel**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Partial Cubic( :height, :weight ) ) );

```

**Facteurs**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( :sex, :age, :weight ) );

```

**Factoriel complet**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Full Factorial( :sex, :age, :weight ) ) );

```

**Factoriel de degré**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model(	Y( :height ),	Set Degree( 2 ),	Effects( Factorial to Degree( :sex, :age, :weight ) ));

```

**Factoriel trié**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Factorial Sorted( :sex, :age, :weight ) ) );

```

**Modèle cubique de Scheffé**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Scheffe Cubic( :height, :weight ) ) );

```

**Polynôme de degré**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model(	Y( :height ),	Set Degree( 5 ),	Effects( Polynomial to Degree( :height, :weight ) ));

```

**Régresseurs regroupés**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Grouped Regressors( :height, :weight ) ) );

```

**Surface de réponse**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model( Y( :height ), Effects( Response Surface( :weight, :age ) ) );

```

**Surface de réponse de mélange**

```jsl

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );dialog = dt << Fit Model(	Y( :height ),	Effects( Mixture Response Surface( :weight, :age ) ));

```

#### Emphasis

**Syntaxe :** obj = Fit Model(...Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage" | "Effect Screening" | "Minimal Report" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les types de graphiques et de statistiques qui s&apos;affichent dans le rapport par défaut pour la méthode des Moindres carrés standard.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Screening" ));obj << Run Model;

```

#### Error Specification

**Syntaxe :** obj = Fit Model(...Personality("Standard Least Squares" ), Error Specification( "Default Estimate" | "Pure Error" | "Specified" )...)

**Description :** Spécifie la variance de l&apos;erreur et les degrés de liberté de l&apos;erreur utilisés pour les erreurs standard et les tests dans le rapport Ajustement par moindres carrés. Cette option est uniquement disponible pour la méthode des Moindres carrés standard lorsque le modèle ne contient aucun effet aléatoire.

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Center Polynomials( 0 ),	Personality( "Standard Least Squares" ),	Error Specification( "Pure Error" ),	Run);

```

#### Estimate Only Variance Components

**Syntaxe :** obj = Fit Model(...Personality( "Standard Least Squares" ), Estimate Only Variance Components( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Exécute une analyse Maximum de vraisemblance restreint à l&apos;aide du modèle spécifié et affiche un rapport contenant uniquement les composantes de la variance du modèle. Disponible uniquement pour la méthode des Moindres carrés standard.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Estimate Only Variance Components( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Run);

```

#### Firth Bias-Adjusted Estimates

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie que la méthode de correction du biais de Firth est utilisée pour ajuster le modèle. Disponible uniquement pour la méthode du Modèle linéaire généralisé.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	"Firth Bias-Adjusted Estimates"n( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Fit Separately

**Syntaxe :** obj = Fit Model(...Personality( "Standard Least Squares" ), Fit Separately( state=0|1 )...)

**Description :** Ajuste un modèle distinct pour chaque variable Y à l&apos;aide de toutes les lignes non manquantes. Cette option n&apos;est disponible que dans la méthode des Moindres carrés standard avec les modèles qui ont plusieurs variables Y et ne contiennent pas d&apos;effets aléatoires.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION, :HARDNESS ),	Effects( :SILICA, :SILANE, :SULFUR ),	Personality( "Standard Least Squares" ),	Fit Separately( 1 ),	Run);

```

#### GLM Distribution

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie une distribution des probabilités pour la variable de réponse. Disponible uniquement pour la méthode du Modèle linéaire généralisé.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Binomial" ),	Link Function( "Logit" ),	Run);

```

#### Generalized Distribution

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( distribution name )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la distribution des probabilités de la réponse. Disponible uniquement pour la méthode de la Régression généralisée.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Fit Model(	Y( :height ),	Effects( :weight, :sex ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Profiler( 1 )		)	));

```

#### Imputation Method

**Syntaxe :** obj = Fit Model(...Personality( "Partial Least Squares" ), Imputation Method( "Mean" | "EM" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la méthode d&apos;imputation. Par défaut, la méthode de la moyenne est utilisée. Disponible uniquement pour la méthode d&apos;analyse statistique Moindres carrés partiels.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Fit Model(	Y( :POP, :Max deg. F Jan ),	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	No Intercept( 1 ),	Center Polynomials( 0 ),	Personality( "Partial Least Squares" ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Run(		Initial Number of Factors( 6 ),		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),		Fit( Method( NIPALS ), Number of Factors( 2 ) )	));

```

#### Impute Missing Data

**Syntaxe :** obj = Fit Model(...Personality( "Partial Least Squares" ), Impute Missing Data( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Remplace les valeurs des données manquantes dans les colonnes Y ou X par des valeurs non manquantes à l&apos;aide de la méthode d&apos;imputation spécifiée. Disponible uniquement pour la méthode des Moindres carrés partiels.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Fit Model(	Y( :POP, :Max deg. F Jan ),	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	No Intercept( 1 ),	Center Polynomials( 0 ),	Personality( "Partial Least Squares" ),	Impute Missing Data( 1 ),	Run(		Initial Number of Factors( 6 ),		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),		Fit( Method( NIPALS ), Number of Factors( 2 ) )	));

```

#### Informative Missing

**Syntaxe :** obj = Fit Model(...Informative Missing( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Permet le codage et l’imputation des valeurs manquantes. Si cette option n’est pas sélectionnée, les lignes comportant des valeurs manquantes sont ignorées.



Pour les variables continues, les valeurs manquantes sont remplacées par la moyenne de la variable. Une variable indicatrice de valeur manquante est également créée et incluse dans le modèle.



Pour les variables catégorielles, les valeurs manquantes ne sont pas modifiées mais sont traitées comme un autre niveau de la variable dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:height[3] = dt:age[2] = .;dt << Fit Model(	Y( :weight ),	Effects( :height, :age ),	Informative Missing( 1 ),	Personality( "Standard Least Squares" ),	Run);

```

#### Keep dialog open

**Syntaxe :** obj &lt;&lt; Keep dialog open( state=0|1 )

**Description :** Spécifie si la fenêtre de lancement Modèle linéaire reste ouverte ou se ferme après l&apos;exécution du modèle spécifié.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Keep dialog open( 1 ),	Run);

```

#### Link Function

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la fonction de lien pour le modèle. Disponible uniquement pour la méthode du Modèle linéaire généralisé.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Max Iterations

**Syntaxe :** obj = Fit Model(...Personality( "Partial Least Squares" ), Max Iterations( number=1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie le nombre maximum d&apos;itérations utilisées par l&apos;algorithme. L&apos;algorithme se termine si la différence maximum entre les estimations actuelles et précédentes des valeurs manquantes est limitée par 10^-8. Disponible uniquement pour la méthode des Moindres carrés partiels.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Fit Model(	Y( :POP, :Max deg. F Jan ),	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	No Intercept( 1 ),	Center Polynomials( 0 ),	Personality( "Partial Least Squares" ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 5 ),	Run(		Initial Number of Factors( 6 ),		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),		Fit( Method( NIPALS ), Number of Factors( 2 ) )	));

```

#### Maximum Iterations

**Syntaxe :** obj = Fit Model(...Maximum Iterations( number=100 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie le nombre maximum d&apos;itérations utilisées dans l&apos;ajustement du modèle. Par défaut, le nombre maximum d&apos;itérations est de 100.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Maximum Iterations( 150 ),	Run);

```

#### Method

**Syntaxe :** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la méthode utilisée pour ajuster des modèles mixtes dans la méthode des Moindres carrés standard.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	NoBounds( 1 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Emphasis( "Minimal Report" ),	Run);

```

#### No Intercept

**Syntaxe :** obj = Fit Model(...No Intercept( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définit la valeur de la constante du modèle à zéro.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	No Intercept( 1 ),	Personality( "Standard Least Squares" ),	Run);

```

#### NoBounds

**Syntaxe :** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Supprime les limites des estimations de la variance. Lorsqu&apos;elle est désactivée, la limite inférieure des estimations de la variance est définie sur zéro. Disponible uniquement pour la méthode des Moindres carrés standard. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj = dt << Fit Model(	Y( :miles ),	Effects( :species, :subject[:species] & Random, :season, :species * :season ),	NoBounds( 0 ),	Personality( "Standard Least Squares" ),	Method( "REML" ),	Emphasis( "Minimal Report" ),	Run);

```

#### Nominal Coding

**Syntaxe :** obj = Fit Model(...Nominal Coding( "Average Level" | "Last Level" )...)

**Description :** Spécifie si le codage pour les effets nominaux estime les différences à partir de la moyenne entre les niveaux (par défaut) ou à partir du dernier niveau.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Production.jmp" );dt << Fit Model(	Y( :Disso ),	Effects(		:Mill Time, :Screen Size, :Blend Time, :Blend Speed, :Compressor, :Coating Viscosity,		:Spray Rate	),	Personality( "Standard Least Squares" ),	Nominal Coding( "Last Level" ),	Emphasis( "Effect Leverage" ),	Run);

```

#### Overdispersion Tests and Intervals

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie qu&apos;un paramètre d&apos;hyperdispersion doit être inclus dans le modèle. Disponible uniquement pour la méthode du Modèle linéaire généralisé.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	Overdispersion Tests and Intervals( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Log" ),	Run);

```

#### Personality

**Syntaxe :** obj = Fit Model(...Personality( "Standard Least Sqaures" | "Stepwise" | "Generalized Regression" | "Mixed Model" | "Generalized Linear Mixed Model" | "Manova" | "Loglinear Variance" | "Nominal Logistic" | "Ordinal Logistic" | "Proportional Hazard" | "Parametric Survival" | "Generalized Linear Model" | "Partial Least Squares" | "Response Screening" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie le type d&apos;analyse utilisé pour ajuster le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Run Model;

```

#### Power Link Parameter

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie le paramètre pour la fonction de lien de puissance. Disponible uniquement lorsque la fonction de lien spécifiée est Puissance dans la méthode du Modèle linéaire généralisé. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );obj = dt << Fit Model(	Y( :satell ),	Effects( :color, :spine, :width, :weight ),	Center Polynomials( 0 ),	Personality( "Generalized Linear Model" ),	Overdispersion Tests and Intervals( 1 ),	GLM Distribution( "Poisson" ),	Link Function( "Power" ),	Power Link Parameter( 0.5 ),	Run);

```

#### Quantile

**Syntaxe :** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( "Quantile Regression" ), Quantile( q=0.5 )...)

**Description :** Spécifie le quantile de la réponse à modéliser. Disponible uniquement pour la méthode de la Régression généralisée.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Fit Model(	Y( :height ),	Effects( :weight, :sex ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Quantile Regression" ),	Quantile( 0.75 ),	Run(		Fit(			Estimation Method( "Maximum Likelihood" ),			Validation Method( "None" ),			Profiler( 1 )		)	));

```

#### Results in Data Tables

**Syntaxe :** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**Description :** Enregistre les résultats individuels du modèle sur de nombreuses réponses dans des tables de données. Le contenu et le nombre de tables de données de sortie dépendent du modèle en cours d&apos;ajustement.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Run);

```

#### Robust Fit

**Syntaxe :** obj = Fit Model(...Personality( "Response Screening" ), Robust Fit( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Utilise l&apos;estimation robuste (Huber) pour réduire le poids des valeurs aberrantes. S&apos;il n&apos;y a pas de valeurs aberrantes, ces estimations sont proches des estimations des moindres carrés. Disponible uniquement pour la méthode de Criblage des réponses. Ce message correspond à l&apos;option Ajustement robuste de la fenêtre de lancement Modèle linéaire.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Fit Model(	Effects( :Process, :Site, :Process * :Site ),	Personality( "Response Screening" ),	Y( 8 :: 394 ),	Robust Fit( 1 ),	Run);

```

#### Run

**Syntaxe :** obj = Fit Model(...Run( &lt;options&gt; )...); obj &lt;&lt; Run( &lt;options&gt; )

**Description :** Exécute le modèle spécifié dans la fenêtre de lancement Modèle linéaire, puis ferme la fenêtre de lancement.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ),	Run( Show Prediction Expression( 1 ) ));obj << Run;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Run;

```

#### Run Model

**Syntaxe :** obj &lt;&lt; Run Model

**Description :** Exécute le modèle spécifié dans la fenêtre de lancement Modèle linéaire, puis laisse la fenêtre de lancement ouverte.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Run Model;

```

#### Save to Data Table

**Syntaxe :** obj &lt;&lt; Save to Data Table

**Description :** Enregistre le modèle sous JSL dans la table de données active.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Save to DataTable;

```

#### Save to Script Window

**Syntaxe :** obj &lt;&lt; Save to Script Window

**Description :** Enregistre le modèle sous JSL dans la fenêtre de script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Personality( "Standard Least Squares" ));obj << Save to Script Window;

```

#### Scaling

**Syntaxe :** obj = Fit Model(...Personality( "Partial Least Squares" ), Scaling( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Réduit l&apos;ensemble des variables de réponse et des effets du modèle en divisant chaque colonne par son écart-type. Disponible uniquement pour la méthode d&apos;analyse statistique Moindres carrés partiels. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );dt << Fit Model(	Y( :ls, :ha, :dt ),	Effects( 5 :: 31 ),	No Intercept( 1 ),	Personality( "Partial Least Squares" ),	Scaling( 0 ),	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) ));

```

#### Set Alpha Level

**Syntaxe :** obj = Fit Model(...Set Alpha Level( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie le niveau alpha pour les intervalles de confiance dans les rapports du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Fit Model(	Y( :ABRASION ),	Effects( :SILICA, :SILANE ),	Center Polynomials( 0 ),	Personality( "Standard Least Squares" ),	Set Alpha Level( 0.01 ),	Run);

```

#### Standardize X

**Syntaxe :** obj = Fit Model(...Personality( "Partial Least Squares" ), Standardize X( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Centre et réduit toutes les colonnes utilisées dans la construction des effets du modèle. Si cette option n&apos;est pas sélectionnée, les effets d&apos;ordre plus élevé sont construits à l&apos;aide des colonnes de la table de données d&apos;origine. Puis, chaque effet d&apos;ordre plus élevé est centré ou réduit, selon les options Centrage et réduction sélectionnées. Notez que Standardiser X ne centre pas ou ne réduit pas les variables Y. Disponible uniquement pour la méthode d&apos;analyse statistique Moindres carrés partiels. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );dt << Fit Model(	Y( :ls, :ha, :dt ),	Effects( 5 :: 31 ),	No Intercept( 1 ),	Personality( "Partial Least Squares" ),	Standardize X( 0 ),	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) ));

```

#### Subgroup Twoway

**Syntaxe :** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) ), Subgroup Twoway( state=0|1 )...)

**Description :** Ajuste toutes les combinaisons de sous-groupes à deux facteurs. Cette option n&apos;est disponible que lorsqu&apos;au moins une variable de sous-groupe est définie dans la méthode de Criblage des réponses.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Fit Model(	Y( :age ),	Effects( :sex, :type ),	Subgroup( :country, :marital status ),	Personality( "Response Screening" ),	Subgroup Twoway( 1 ),	Run);

```

#### Suppress Coding

**Syntaxe :** obj = Fit Model(...Suppress Coding( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Supprime toutes les propriétés de colonne de codage pour que les estimations soient pour l&apos;échelle d&apos;origine. La propriété de colonne Codage vous permet de comparer plus facilement les estimations et est utile pour rendre les tests d&apos;effet d&apos;ordre inférieur significatifs. L&apos;option Supprimer le codage est déconseillée sauf si vous en avez besoin.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );obj = dt << Fit Model(	Y( :Stretch ),	Effects( :Silica, :Sulfur, :Silane ),	Suppress Coding( 1 ),	Personality( "Standard Least Squares" ),	Run);

```

#### Suppress Reports

**Syntaxe :** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**Description :** Permet de spécifier que les rapports du modèle sont masqués. Lorsqu&apos;il y a des milliers de réponses, cette option réduit le temps de calcul. Les objets d&apos;ajustement et certains éléments de menu restent disponibles. Utiliser l&apos;option Résultats dans les tables de données pour collecter les résultats à partir des rapports du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Fit Model(	Y(		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,		:paper mill location, :plating tank	),	Effects( "Banding?"n ),	Personality( "Nominal Logistic" ),	Results in Data Tables( 1 ),	Suppress Reports( 1 ),	Run);

```

#### Suppress Warning for Missing Effects

**Syntaxe :** obj = Fit Model(...Suppress Warning for Missing Effects( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Supprime les alertes d&apos;avertissement que les effets d&apos;ordre faible impliqués par les effets d&apos;ordre élevé ne sont pas dans le modèle. Cette option est utile pour expérimenter de nombreux modèles de sous-ensembles.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );obj = dt << Fit Model(	Y( :Stretch ),	Effects( :Silica, :Sulfur * :Silane ),	Suppress Warning for Missing Effects( 1 ),	Personality( "Standard Least Squares" ),	Run);

```

#### Target Level

**Syntaxe :** obj = Fit Model(...Target Level( level )...)

**Description :** Spécifie le niveau pour lequel vous souhaitez modéliser la probabilité. Par défaut, il s&apos;agit du niveau le plus élevé parmi les deux, selon leur ordre. Disponible uniquement dans certaines méthodes d&apos;analyse statistique lorsque la variable Y est binaire et a un type de modélisation nominal.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );dt << Fit Model(	Freq( :Count ),	Y( :Response ),	Effects( :"ln(dose)"n ),	Personality( "Nominal Logistic" ),	Target Level( "Cured" ),	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) ));

```

