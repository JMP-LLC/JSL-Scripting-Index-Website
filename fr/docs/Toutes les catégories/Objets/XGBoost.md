# XGBoost



## Colonnes

### Censor

**Syntaxe :** obj = XGBoost(...&lt;Censor( column )&gt;...)

**JMP Version ajoutée :** 17

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Factor

**Syntaxe :** obj = XGBoost(...Factor( column(s) )...)

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Freq

**Syntaxe :** obj = XGBoost(...&lt;Freq( column )&gt;...)

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Response

**Syntaxe :** obj = XGBoost(...Response( column(s) )...)

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Validation

**Syntaxe :** obj = XGBoost(...&lt;Validation( column(s) )&gt;...)

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Weight

**Syntaxe :** obj = XGBoost(...&lt;Weight( column )&gt;...)

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### X

**Syntaxe :** obj = XGBoost(...X( column(s) )...)

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Y

**Syntaxe :** obj = XGBoost(...Y( column(s) )...)

**JMP Version ajoutée :** 15

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## Constructeurs associés

### XGBoost

**Syntaxe :** XGBoost(Y( columns ), X( columns ))

**Description :** Interface de modélisation prédictive vers les arbres boostés à gradient eXtreme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## Messages d'éléments

### Change Variables

**Syntaxe :** obj &lt;&lt; Change Variables

**Description :** Modifie X, Y et d&apos;autres variables pour les modèles consécutifs.

**JMP Version ajoutée :** 16

### Compare

**Syntaxe :** obj &lt;&lt; Compare

**Description :** Met à jour les métriques de comparaison XGBoost.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Objective( 0 ) ) );obj << Compare( Correlation( 1 ) );

```

### Fit

**Syntaxe :** obj &lt;&lt; Fit

**Description :** Ajuste un modèle XGBoost. Vous pouvez spécifier les paramètres XGBoost et les spécifications d&apos;ajustement contenues.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**JMP Version ajoutée :** 16

### Method

**Syntaxe :** obj &lt;&lt; Method( "xgboost"|"lightgbm"="xgboost" )

**Description :** Select either XGBoost or LightGBM as a method for gradient boosting fitting. "xgboost" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Fit( Method( "lightgbm" ), objective( "regression" ) ));

```

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Relaunch Analysis;

```

### Show Details

**Syntaxe :** obj &lt;&lt; Show Details( state=0|1 )

**Description :** Affiche plus de détails.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Show Details( 1 ) );

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

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Copy Script;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Timing;Show( t );

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

### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Script Window;

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

### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## XGBoost Compare

### Constructeurs associés

#### XGBoost Compare

**Syntaxe :** XGBoost Compare

### Messages d'éléments

#### AUC

**Syntaxe :** obj &lt;&lt; AUC( state=0|1 )

**Description :** Affiche ou masque l&apos;AUROC, qui est la zone au-dessous de la courbe ROC. Actif par défaut.

**JMP Version ajoutée :** 16

#### AUPRC

**Syntaxe :** obj &lt;&lt; AUPRC( state=0|1 )

**Description :** Zone sous la courbe de précision rappel Actif par défaut.

**JMP Version ajoutée :** 17

#### Accuracy

**Syntaxe :** obj &lt;&lt; Accuracy( state=0|1 )

**Description :** Affiche ou masque la précision, qui est la proportion de classifications correctes. Actif par défaut.

**JMP Version ajoutée :** 15

#### Censor

**Syntaxe :** obj &lt;&lt; Censor( state=0|1 )

**Description :** Affiche ou masque la commande Censure Actif par défaut.

**JMP Version ajoutée :** 17

#### Concordance

**Syntaxe :** obj &lt;&lt; Concordance( state=0|1 )

**Description :** Affiche ou masque la concordance, qui correspond au C-Index de Harrell et mesure la force de l&apos;efficacité de triage. Actif par défaut.

**JMP Version ajoutée :** 17

#### Correlation

**Syntaxe :** obj &lt;&lt; Correlation( state=0|1 )

**Description :** Affiche ou masque la corrélation de Pearson, qui est une mesure de la force de la relation linéaire. Actif par défaut.

**JMP Version ajoutée :** 15

#### F1

**Syntaxe :** obj &lt;&lt; F1( state=0|1 )

**Description :** Affiche ou masque le score F1, qui est la moyenne harmonique de précision et de rappel. Actif par défaut.

**JMP Version ajoutée :** 15

#### Features

**Syntaxe :** obj &lt;&lt; Features( state=0|1 )

**Description :** Affiche ou masque la colonne Fonctions. Actif par défaut.

**JMP Version ajoutée :** 16

#### Freq

**Syntaxe :** obj &lt;&lt; Freq( state=0|1 )

**Description :** Affiche ou masque la colonne Fréquence. Actif par défaut.

**JMP Version ajoutée :** 16

#### H Measure

**Syntaxe :** obj &lt;&lt; H Measure( state=0|1 )

**Description :** Affiche ou masque la mesure H, qui mesure l&apos;amélioration de la proportion par rapport à la référence. Actif par défaut.

**JMP Version ajoutée :** 17

#### Hide All Models

**Syntaxe :** obj &lt;&lt; Hide All Models

**Description :** Masque tous les modèles.

**JMP Version ajoutée :** 16

#### LogLoss

**Syntaxe :** obj &lt;&lt; LogLoss( state=0|1 )

**Description :** Affiche ou masque le logarithme de la fonction de perte basée sur la vraisemblance. Actif par défaut.

**JMP Version ajoutée :** 15

#### MAE

**Syntaxe :** obj &lt;&lt; MAE( state=0|1 )

**Description :** Affiche ou masque le MAE, qui est l&apos;erreur moyenne absolue. Actif par défaut.

**JMP Version ajoutée :** 15

#### MCC

**Syntaxe :** obj &lt;&lt; MCC( state=0|1 )

**Description :** Affiche ou masque le coefficient de corrélation de Matthews, qui correspond à la corrélation de Pearson pour les variables binaires. Actif par défaut.

**JMP Version ajoutée :** 15

#### Misclass

**Syntaxe :** obj &lt;&lt; Misclass( state=0|1 )

**Description :** Affiche ou masque le taux de mauvaises classifications, qui est la proportion de classifications incorrectes. Actif par défaut.

**JMP Version ajoutée :** 15

#### Predictors

**Syntaxe :** obj &lt;&lt; Predictors( state=0|1 )

**Description :** Affiche ou masque la colonne Régresseurs. Actif par défaut.

**JMP Version ajoutée :** 16

#### Profit

**Syntaxe :** obj &lt;&lt; Profit( state=0|1 )

**Description :** Affiche ou masque le profit attendu. Actif par défaut.

**JMP Version ajoutée :** 16

#### RMSE

**Syntaxe :** obj &lt;&lt; RMSE( state=0|1 )

**Description :** Affiche ou masque le RMSE, qui est la racine de l&apos;erreur quadratique moyenne. Actif par défaut.

**JMP Version ajoutée :** 15

#### RSquare

**Syntaxe :** obj &lt;&lt; RSquare( state=0|1 )

**Description :** Affiche ou masque la valeur du R carré, qui correspond à la proportion de variabilité expliquée. Actif par défaut.

**JMP Version ajoutée :** 15

#### Remove Hidden Models

**Syntaxe :** obj &lt;&lt; Remove Hidden Models

**Description :** Supprime tous les modèles dont la case Afficher est décochée.

**JMP Version ajoutée :** 16

#### Remove Shown Models

**Syntaxe :** obj &lt;&lt; Remove Shown Models

**Description :** Supprime tous les modèles pour lesquels la case Afficher est cochée et affiche les modèles restants.

**JMP Version ajoutée :** 15

#### Response

**Syntaxe :** obj &lt;&lt; Response( state=0|1 )

**Description :** Affiche ou masque la colonne Réponse. Actif par défaut.

**JMP Version ajoutée :** 16

#### Show All Models

**Syntaxe :** obj &lt;&lt; Show All Models

**Description :** Affiche tous les modèles.

**JMP Version ajoutée :** 16

#### Training Metrics

**Syntaxe :** obj &lt;&lt; Training Metrics( state=0|1 )

**Description :** Affiche ou masque toutes les métriques d&apos;apprentissage. Actif par défaut.

**JMP Version ajoutée :** 15

#### Validation

**Syntaxe :** obj &lt;&lt; Validation( state=0|1 )

**Description :** Affiche ou masque la colonne Validation. Actif par défaut.

**JMP Version ajoutée :** 16

#### Validation Metrics

**Syntaxe :** obj &lt;&lt; Validation Metrics( state=0|1 )

**Description :** Affiche ou masque toutes les métriques de validation. Actif par défaut.

**JMP Version ajoutée :** 15

#### Weight

**Syntaxe :** obj &lt;&lt; Weight( state=0|1 )

**Description :** Affiche ou masque la colonne Pondération. Actif par défaut.

**JMP Version ajoutée :** 16

## XGBoost Fit

### Constructeurs associés

#### XGBoost Fit

**Syntaxe :** XGBoost Fit

### Messages d'éléments

#### Actual by Predicted Plots

**Syntaxe :** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**Description :** Affiche ou masque un graphique à l’aide des données d’apprentissage, avec les valeurs prévues sur l’axe X et les valeurs effectives sur l’axe Y. Actif par défaut.

**JMP Version ajoutée :** 15

#### Autotune

**Syntaxe :** obj &lt;&lt; Autotune( state=0 )

**Description :** Crée un plan uniforme flexible rapide entre les paramètres min et max pour ajuster n modèles, où n est le nombre d&apos;essais. "0" par défaut.

**JMP Version ajoutée :** 17

#### Confusion Matrices

**Syntaxe :** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**Description :** Affiche ou masque une matrice de tabulation croisée des niveaux réels et prévus. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler

**Description :** Affiche ou masque les graphiques interactifs des sections croisées de la fonction de prévision.

**JMP Version ajoutée :** 15

#### Copy Parameters to Launch

**Syntaxe :** obj &lt;&lt; Copy Parameters to Launch

**Description :** Copie les paramètres de ce modèle dans la section de lancement de modèle.

**JMP Version ajoutée :** 16

#### Decision Thresholds

**Syntaxe :** obj &lt;&lt; Decision Thresholds( state=0|1 )

**Description :** Affiche ou masque les tables et les graphiques de seuil de décision. Actif par défaut.

**JMP Version ajoutée :** 16

#### Fit Details

**Syntaxe :** obj &lt;&lt; Fit Details( state=0|1 )

**Description :** Affiche ou masque les statistiques pour le modèle ajusté. Actif par défaut.

**JMP Version ajoutée :** 15

#### Generate Python Code

**Syntaxe :** obj &lt;&lt; Generate Python Code

**Description :** Crée le code Python pour l&apos;apprentissage et le calcul du score.

**JMP Version ajoutée :** 16

#### Importances

**Syntaxe :** obj &lt;&lt; Importances( state=0|1 )

**Description :** Affiche ou masque les statistiques d&apos;importance pour chaque régresseur. Actif par défaut.

**JMP Version ajoutée :** 15

#### Lift Curves

**Syntaxe :** obj &lt;&lt; Lift Curves( state=0|1 )

**Description :** Affiche ou masque la courbe Lift. La courbe Lift représente le lift en fonction de la proportion des observations et propose une autre vision de la capacité prédictive d&apos;un modèle.

**JMP Version ajoutée :** 15

#### Number of Design Points

**Syntaxe :** obj &lt;&lt; Number of Design Points( number=10 )

**Description :** Spécifie le nombre d&apos;essais du plan de tuning à réaliser. Si vous avez un problème important, conservez une valeur relativement faible. "10" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Design Points( 10 ) ) );

```

#### Number of Inner Folds

**Syntaxe :** obj &lt;&lt; Number of Inner Folds( number=2 )

**Description :** Spécifie le nombre de blocs internes imbriqués durant le processus de réglage automatique. "2" par défaut.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Inner Folds( 2 ) ) );

```

#### Precision Recall Curves

**Syntaxe :** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**Description :** Représente graphiquement le compromis entre la précision et le rappel pour différents seuils de classification. A privilégier dans les scénarios avec des déséquilibres de classe.

**JMP Version ajoutée :** 15

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

**JMP Version ajoutée :** 15

#### Publish Prediction Formula

**Syntaxe :** obj &lt;&lt; Publish Prediction Formula

**Description :** Crée des formules de prédiction et les enregistre sous la forme de scripts de colonne de formule dans la plate-forme Dépôt des formules.

**JMP Version ajoutée :** 15

#### ROC Curves

**Syntaxe :** obj &lt;&lt; ROC Curves( state=0|1 )

**Description :** Affiche ou masque la courbe ROC pour chaque niveau de la variable de réponse. La courbe ROC est un graphique de la sensibilité par rapport à (1 - spécificité).

**JMP Version ajoutée :** 15

#### Remove All But This Fit

**Syntaxe :** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**Description :** Supprime les rapports et graphiques de tous les modèles, sauf le présent modèle.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**Description :** Supprime le rapport du modèle tout entier.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Predicteds

**Syntaxe :** obj &lt;&lt; Save Predicteds

**Description :** Enregistre les valeurs prévues dans une nouvelle colonne de la table de données.

**JMP Version ajoutée :** 15

#### Save Prediction Formula

**Syntaxe :** obj &lt;&lt; Save Prediction Formula

**Description :** Enregistre la formule de régression dans une nouvelle colonne de la table de données. Pour les grands modèles, les calculs peuvent être lents.

**JMP Version ajoutée :** 15

#### Save SHAPs

**Syntaxe :** obj &lt;&lt; Save SHAPs

**Description :** Enregistre les valeurs de Shapley dans la table de données. Ces valeurs décomposent les prévisions en composants pour chaque régresseur.

**JMP Version ajoutée :** 17

#### Set Random Seed

**Syntaxe :** obj &lt;&lt; Set Random Seed( number=0 )

**Description :** Définit une valeur spécifique pour la graine aléatoire en assurant ainsi que toutes les exécutions successives utilisant la même graine aléatoire sont reproductibles. "0" par défaut.

**JMP Version ajoutée :** 19

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; Surface Profiler

**Description :** Affiche ou masque les graphiques interactifs des sections croisées de la fonction de prévision.

**JMP Version ajoutée :** 15

#### Tree Details

**Syntaxe :** obj &lt;&lt; Tree Details( state=0|1 )

**Description :** Affiche ou masque la décomposition de chaque division de l&apos;arbre.

**JMP Version ajoutée :** 15

#### Tuning Design Table

**Syntaxe :** Tuning Design Table( "table name" )

**Description :** Spécifie le nom d&apos;une table de données JMP de paramètres ouverte utilisée pour ajuster une série de modèles. Les colonnes de cette table doivent correspondre exactement aux noms des paramètres, et chaque ligne doit contenir les valeurs de ces paramètres à utiliser pour l&apos;ajustement de ce modèle. Les paramètre non spécifiés sont définis aux valeurs indiquées dans cette boîte de dialogue.

**JMP Version ajoutée :** 15

#### alpha

**Syntaxe :** obj &lt;&lt; alpha( number=0.0 )

**Description :** Spécifie la valeur du terme de régularisation L1 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "0.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha( 0.0 ) ) );

```

#### alpha_max

**Syntaxe :** obj &lt;&lt; alpha_max( number=0.5 )

**Description :** Spécifie la valeur maximum du terme de régularisation L1 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "0.5" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_max( 2.0 ) ) );

```

#### alpha_min

**Syntaxe :** obj &lt;&lt; alpha_min( number=0.0 )

**Description :** Spécifie la valeur minimum du terme de régularisation L1 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "0.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_min( 0.0 ) ) );

```

#### bagging_by_query

**Syntaxe :** obj &lt;&lt; bagging_by_query( state=0 )

**Description :** Spécifie s&apos;il faut forcer la construction de l&apos;histogramme par lignes. L&apos;activation de cette option réduit le coût en utilisation mémoire, notamment pour les données ayant de nombreux échantillons et associées à une faible fraction de bagging ou à la stratégie d&apos;échantillonnage GOSS. Cette option ne peut pas être utilisée conjointement avec le mode forcé par colonnes. "0" par défaut.

**JMP Version ajoutée :** 19

#### bagging_fraction

**Syntaxe :** obj &lt;&lt; bagging_fraction( number=1 )

**Description :** Spécifie la proportion de lignes à échantillonner durant chaque itération. Cette valeur doit être comprise entre 0 et 1. Il s&apos;agit d&apos;un type d&apos;agrégation. "1" par défaut.

**JMP Version ajoutée :** 19

#### bagging_fraction_max

**Syntaxe :** obj &lt;&lt; bagging_fraction_max( number=1.0 )

**Description :** Spécifie la proportion maximum de lignes à échantillonner durant chaque itération. Cette valeur doit être comprise entre 0 et 1. Il s&apos;agit d&apos;un type d&apos;agrégation. "1.0" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_max( 1.0 ) ) );

```

#### bagging_fraction_min

**Syntaxe :** obj &lt;&lt; bagging_fraction_min( number=0.3 )

**Description :** Spécifie la proportion minimum de lignes à échantillonner durant chaque itération. Cette valeur doit être comprise entre 0 et 1. Il s&apos;agit d&apos;un type d&apos;agrégation. "0.3" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_min( 0.3 ) ) );

```

#### bagging_freq

**Syntaxe :** obj &lt;&lt; bagging_freq( number=0 )

**Description :** Spécifie la fréquence de bagging. Cette valeur détermine le nombre d&apos;itérations auquel un nouvel échantillon aléatoire de données d&apos;apprentissage est prélevé pour entraîner le modèle. "0" par défaut.

**JMP Version ajoutée :** 19

#### bagging_seed

**Syntaxe :** obj &lt;&lt; bagging_seed( number=3 )

**Description :** Spécifie la graine utilisée pour le générateur de nombres aléatoires du bagging. "3" par défaut.

**JMP Version ajoutée :** 19

#### base_score

**Syntaxe :** obj &lt;&lt; base_score( number=0.5 )

**Description :** Spécifie le score de prévision initial de toutes les instances, correspondant au biais global. La moyenne de y est généralement un bon choix. "0.5" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( base_score( 0.5 ) ) );

```

#### bin_construct_sample_cnt

**Syntaxe :** obj &lt;&lt; bin_construct_sample_cnt( number=200000 )

**Description :** Spécifie le nombre d&apos;observations échantillonnées pour construire les bins discrets de fonctions. Si cette option est définie sur de petites valeurs, vous risquez de rencontrer des erreurs inattendues et une faible précision. "200000" par défaut.

**JMP Version ajoutée :** 19

#### boost_from_average

**Syntaxe :** obj &lt;&lt; boost_from_average( state=1 )

**Description :** Spécifie si la prévision initiale est définie sur la moyenne de la variable réponse ou sur une constante égale à zéro. Cette option est utilisée uniquement pour les objectifs de régression, binaire, multiclasse et d&apos;entropie croisée. Actif par défaut.

**JMP Version ajoutée :** 19

#### booster

**Syntaxe :** obj &lt;&lt; booster( "gbtree"|"gblinear"|"dart"="gbtree" )

**Description :** Spécifie le booster à utiliser. "gbtree" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gbtree" ) ) );

```

#### boosting

**Syntaxe :** obj &lt;&lt; boosting( "gbdt"|"rf"|"dart"="gbdt" )

**Description :** Spécifie la stratégie de boosting utilisée lors de l&apos;entraînement du modèle. "gbdt" par défaut.

**JMP Version ajoutée :** 19

#### cat_l2

**Syntaxe :** obj &lt;&lt; cat_l2( number=10 )

**Description :** Spécifie la valeur de régularisation L2 pour les fonctions catégorielles. "10" par défaut.

**JMP Version ajoutée :** 19

#### cat_l2_max

**Syntaxe :** obj &lt;&lt; cat_l2_max( number=15 )

**Description :** Spécifie la valeur maximum de régularisation L2 pour les fonctions catégorielles. "15" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_max( 2.0 ) ) );

```

#### cat_l2_min

**Syntaxe :** obj &lt;&lt; cat_l2_min( number=5 )

**Description :** Spécifie la valeur minimum de régularisation L2 pour les fonctions catégorielles. "5" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_min( 0.0 ) ) );

```

#### cat_smooth

**Syntaxe :** obj &lt;&lt; cat_smooth( number=10 )

**Description :** Spécifie la valeur de régularisation utilisée pour réduire l&apos;impact du bruit dans les fonctions catégorielles, en particulier pour celles ayant peu d&apos;observations. "10" par défaut.

**JMP Version ajoutée :** 19

#### cegb_penalty_split

**Syntaxe :** obj &lt;&lt; cegb_penalty_split( number=0 )

**Description :** "0" par défaut.

**JMP Version ajoutée :** 19

#### cegb_tradeoff

**Syntaxe :** obj &lt;&lt; cegb_tradeoff( number=1 )

**Description :** "1" par défaut.

**JMP Version ajoutée :** 19

#### colsample_bylevel

**Syntaxe :** obj &lt;&lt; colsample_bylevel( number=1.0 )

**Description :** Spécifie la proportion de colonnes à échantillonner pour chaque niveau. L&apos;échantillonnage est réalisé une fois pour chaque nouveau niveau de profondeur atteint dans un arbre. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bylevel( 1.0 ) ) );

```

#### colsample_bynode

**Syntaxe :** obj &lt;&lt; colsample_bynode( number=1.0 )

**Description :** Spécifie la proportion de colonnes à échantillonner pour chaque nœud (division). L&apos;échantillonnage se produit une fois à chaque évaluation d&apos;une nouvelle division. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bynode( 1.0 ) ) );

```

#### colsample_bytree

**Syntaxe :** obj &lt;&lt; colsample_bytree( number=1.0 )

**Description :** Spécifie la proportion de colonnes à échantillonner lors de la construction de chaque arbre. L&apos;échantillonnage est réalisé une fois pour chaque arbre. Cette valeur doit être comprise entre 0 et 1. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree( 1.0 ) ) );

```

#### colsample_bytree_max

**Syntaxe :** obj &lt;&lt; colsample_bytree_max( number=1.0 )

**Description :** Spécifie la proportion maximum de colonnes à échantillonner lors de la construction de chaque arbre. L&apos;échantillonnage est réalisé une fois pour chaque arbre. Cette valeur doit être comprise entre 0 et 1. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_max( 1.0 ) ) );

```

#### colsample_bytree_min

**Syntaxe :** obj &lt;&lt; colsample_bytree_min( number=0.5 )

**Description :** Spécifie la proportion minimum de colonnes à échantillonner lors de la construction de chaque arbre. L&apos;échantillonnage est réalisé une fois pour chaque arbre. Cette valeur doit être comprise entre 0 et 1. "0.5" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_min( 0.3 ) ) );

```

#### data_random_seed

**Syntaxe :** obj &lt;&lt; data_random_seed( number=1 )

**Description :** Spécifie la graine utilisée pour le générateur aléatoire lors de l&apos;échantillonnage des données pour construire les bins d&apos;histogramme. "1" par défaut.

**JMP Version ajoutée :** 19

#### data_sample_strategy

**Syntaxe :** obj &lt;&lt; data_sample_strategy( "bagging"|"goss"="bagging" )

**Description :** Spécifie la stratégie d&apos;échantillonnage à utiliser à chaque itération boosting. "bagging" par défaut.

**JMP Version ajoutée :** 19

#### deterministic

**Syntaxe :** obj &lt;&lt; deterministic( state=0 )

**Description :** Spécifie que les résultats peuvent être reproduits. Le fait de définir cette option sur Vrai garantit des résultats stables lorsque différents nombres de threads sont utilisés pour les mêmes échantillons de données et paramètres. Cette option est utile pour la reproductibilité. "0" par défaut.

**JMP Version ajoutée :** 19

#### device_type

**Syntaxe :** obj &lt;&lt; device_type( "cpu"|"gpu"="cpu" )

**Description :** Spécifie s&apos;il faut utiliser le périphérique CPU ou GPU. "cpu" par défaut.

**JMP Version ajoutée :** 19

#### drop_rate

**Syntaxe :** obj &lt;&lt; drop_rate( number=0.1 )

**Description :** Spécifie la fraction d&apos;arbres précédents à ignorer lors de la suppression dans le boosting DART. "0.1" par défaut.

**JMP Version ajoutée :** 19

#### drop_seed

**Syntaxe :** obj &lt;&lt; drop_seed( number=4 )

**Description :** Spécifie la graine utilisée pour la procédure de dropout dans le boosting DART. "4" par défaut.

**JMP Version ajoutée :** 19

#### early_stopping_min_delta

**Syntaxe :** obj &lt;&lt; early_stopping_min_delta( number=0 )

**Description :** Spécifie la valeur minimum d&apos;amélioration requise de la métrique d&apos;apprentissage à chaque itération. Sans quoi le processus d&apos;apprentissage s&apos;arrête lors de l&apos;utilisation d&apos;une série d&apos;arrêt précoce. "0" par défaut.

**JMP Version ajoutée :** 19

#### early_stopping_round

**Syntaxe :** obj &lt;&lt; early_stopping_round( number=0 )

**Description :** Spécifie le nombre maximum d&apos;itérations pendant lesquelles poursuivre l&apos;apprentissage tant que la métrique d&apos;apprentissage ne s&apos;améliore pas. Une valeur de zéro signifie qu&apos;il n&apos;y a pas d&apos;arrêt précoce. "0" par défaut.

**JMP Version ajoutée :** 19

#### enable_bundle

**Syntaxe :** obj &lt;&lt; enable_bundle( state=1 )

**Description :** Spécifie s&apos;il faut utiliser le regroupement de fonctions exclusives. Si cette option est définie sur faux, la vitesse d&apos;apprentissage peut être faible pour les jeux de données clairsemés. Actif par défaut.

**JMP Version ajoutée :** 19

#### eval_at

**Syntaxe :** obj &lt;&lt; eval_at( text=1,2,3,4,5 )

**Description :** Spécifie les points limites pour le classement des modèles à l&apos;aide des métriques NDGG ou MAP. "1,2,3,4,5" par défaut.

**JMP Version ajoutée :** 19

#### eval_metric

**Syntaxe :** obj &lt;&lt; eval_metric( text )

**Description :** Spécifie la métrique affichée dans le graphique historique des itérations mais n&apos;affecte pas l&apos;ajustement de modèle réel. Laissez cette valeur vide pour la métrique par défaut correspondant à la fonction objectif, ou spécifiez l&apos;une des métriques suivantes : rmse, rmsle, mae, logloss, error, error@t, merror, auc, aucpr, ndcg, map, ndcg@n, map@n, ndcg-, map-, ndcg@n-, map@n-, poisson-nloglik, gamma-nloglik, cox-nloglik, gamma-deviance, tweedie-nloglik.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( eval_metric( rmse ) ) );

```

#### extra_seed

**Syntaxe :** obj &lt;&lt; extra_seed( number=6 )

**Description :** Spécifie la graine utilisée pour sélectionner les seuils lorsque l&apos;option pour les arbres supplémentaires est activée. "6" par défaut.

**JMP Version ajoutée :** 19

#### extra_trees

**Syntaxe :** obj &lt;&lt; extra_trees( state=0 )

**Description :** Spécifie s&apos;il faut utiliser des arbres extrêmement randomisés. Au lieu d&apos;évaluer tous les points de division possibles pour chaque fonction afin de trouver la division optimale, cette option sélectionne aléatoirement un sous-ensemble de fonctions à chaque nœud. Pour chaque fonction sélectionnée, cette option choisit aléatoirement un seuil unique à évaluer pour la division au nœud. "0" par défaut.

**JMP Version ajoutée :** 19

#### fair_c

**Syntaxe :** obj &lt;&lt; fair_c( number=1 )

**Description :** Spécifie le paramètre contrôlant le lissage de la fonction de perte objectif fair. "1" par défaut.

**JMP Version ajoutée :** 19

#### feature_fraction

**Syntaxe :** obj &lt;&lt; feature_fraction( number=1 )

**Description :** Spécifie la proportion de colonnes à échantillonner lors de la construction de chaque arbre. L&apos;échantillonnage est réalisé une fois pour chaque arbre. Cette valeur doit être comprise entre 0 et 1. "1" par défaut.

**JMP Version ajoutée :** 19

#### feature_fraction_bynode

**Syntaxe :** obj &lt;&lt; feature_fraction_bynode( number=1 )

**Description :** Spécifie la fraction de fonctions sélectionnées aléatoirement pendant l&apos;apprentissage. Une valeur de 0,75 signifie que 75 % des fonctions sont sélectionnées aléatoirement pour l&apos;apprentissage. "1" par défaut.

**JMP Version ajoutée :** 19

#### feature_fraction_max

**Syntaxe :** obj &lt;&lt; feature_fraction_max( number=1.0 )

**Description :** Spécifie la proportion maximum de colonnes à échantillonner lors de la construction de chaque arbre. L&apos;échantillonnage est réalisé une fois pour chaque arbre. Cette valeur doit être comprise entre 0 et 1. "1.0" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_max( 1.0 ) ) );

```

#### feature_fraction_min

**Syntaxe :** obj &lt;&lt; feature_fraction_min( number=0.2 )

**Description :** Spécifie la proportion minimum de colonnes à échantillonner lors de la construction de chaque arbre. L&apos;échantillonnage est réalisé une fois pour chaque arbre. Cette valeur doit être comprise entre 0 et 1. "0.2" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_min( 0.2 ) ) );

```

#### feature_fraction_seed

**Syntaxe :** obj &lt;&lt; feature_fraction_seed( number=2 )

**Description :** Spécifie la graine utilisée pour le générateur aléatoire de fraction de fonctions. "2" par défaut.

**JMP Version ajoutée :** 19

#### feature_pre_filter

**Syntaxe :** obj &lt;&lt; feature_pre_filter( state=1 )

**Description :** Spécifie s&apos;il faut ignorer les fonctions qui ne peuvent pas être divisées en fonction du nombre minimum d&apos;observations dans chaque feuille. Si cette option est définie sur faux, la vitesse d&apos;apprentissage peut être faible. Actif par défaut.

**JMP Version ajoutée :** 19

#### feature_selector

**Syntaxe :** obj &lt;&lt; feature_selector( "cyclic"|"shuffle"|"greedy"|"thrifty"="cyclic" )

**Description :** Spécifie la méthode de sélection de fonction et de classement pour le booster linéaire. "cyclic" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "gblinear" ),	Fit( feature_selector( "cyclic" ) ));

```

#### force_col_wise

**Syntaxe :** obj &lt;&lt; force_col_wise( state=0 )

**Description :** Spécifie s&apos;il faut forcer la construction de l&apos;histogramme par colonnes. L&apos;activation de cette option réduit le coût en utilisation mémoire, en particulier pour les données comportant de nombreuses fonctions. Cette option ne peut pas être utilisée conjointement avec le mode forcé par lignes. "0" par défaut.

**JMP Version ajoutée :** 19

#### force_row_wise

**Syntaxe :** obj &lt;&lt; force_row_wise( state=0 )

**Description :** "0" par défaut.

**JMP Version ajoutée :** 19

#### gamma

**Syntaxe :** obj &lt;&lt; gamma( number=0.0 )

**Description :** Spécifie la réduction de perte minimum requise pour créer une nouvelle partition sur un nœud de feuille de l&apos;arbre. "0.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Gamma( 0.0 ) ) );

```

#### gpu_device_id

**Syntaxe :** obj &lt;&lt; gpu_device_id( number=-1 )

**Description :** Spécifie le numéro de l&apos;appareil lors de l&apos;utilisation du GPU. "-1" par défaut.

**JMP Version ajoutée :** 19

#### gpu_platform_id

**Syntaxe :** obj &lt;&lt; gpu_platform_id( number=-1 )

**Description :** Spécifie le numéro de plate-forme lors de l&apos;utilisation du GPU. "-1" par défaut.

**JMP Version ajoutée :** 19

#### gpu_use_dp

**Syntaxe :** obj &lt;&lt; gpu_use_dp( state=0 )

**Description :** Spécifie s&apos;il faut utiliser des calculs en double précision sur le GPU. "0" par défaut.

**JMP Version ajoutée :** 19

#### grow_policy

**Syntaxe :** obj &lt;&lt; grow_policy( "depthwise"|"lossguide"="depthwise" )

**Description :** Spécifie la méthode utilisée pour ajouter de nouveaux nœuds aux arbres. Actuellement, cette option s&apos;applique uniquement lorsque tree_method=hist. "depthwise" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( grow_policy( "depthwise" ) ) );

```

#### histogram_pool_size

**Syntaxe :** obj &lt;&lt; histogram_pool_size( number=-1 )

**Description :** Spécifie la taille mémoire maximum en méga-octets pour l&apos;histogramme historique. "-1" par défaut.

**JMP Version ajoutée :** 19

#### interaction_constraints

**Syntaxe :** obj &lt;&lt; interaction_constraints( text )

**Description :** Spécifie les contraintes d&apos;interaction des fonctions comme une liste imbriquée d&apos;indices de fonction entre crochets. Les fonctions groupées ensemble peuvent uniquement interagir entre elles.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost(	Y( :Weight ),	X( :Age, :Height ),	Fit( interaction_constraints( "[[0,1]]" ) ));

```

#### is_enable_sparse

**Syntaxe :** obj &lt;&lt; is_enable_sparse( state=1 )

**Description :** Spécifie s&apos;il faut activer l&apos;optimisation parcimonieuse. Actif par défaut.

**JMP Version ajoutée :** 19

#### is_unbalance

**Syntaxe :** obj &lt;&lt; is_unbalance( state=0 )

**Description :** Spécifie si le jeu de données d&apos;apprentissage est déséquilibré en régression binaire et multiclasse. "0" par défaut.

**JMP Version ajoutée :** 19

#### iterations

**Syntaxe :** obj &lt;&lt; iterations( number=30 )

**Description :** Spécifie le nombre d&apos;itérations boosting. "30" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations( 100 ) ) );

```

#### iterations_max

**Syntaxe :** obj &lt;&lt; iterations_max( number=100 )

**Description :** Spécifie le nombre maximum d&apos;itérations boosting. "100" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_max( 300 ) ) );

```

#### iterations_min

**Syntaxe :** obj &lt;&lt; iterations_min( number=20 )

**Description :** Spécifie le nombre minimum d&apos;itérations boosting. "20" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_min( 20 ) ) );

```

#### lambda

**Syntaxe :** obj &lt;&lt; lambda( number=1.0 )

**Description :** Spécifie la valeur du terme de régularisation L2 sur les pondérations. Une valeur plus élevée rend le modèle plus classique. Cette valeur doit être positive ou nulle. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda( 1.0 ) ) );

```

#### lambda_l1

**Syntaxe :** obj &lt;&lt; lambda_l1( number=0 )

**Description :** Spécifie la valeur du terme de régularisation L1 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "0" par défaut.

**JMP Version ajoutée :** 19

#### lambda_l1_max

**Syntaxe :** obj &lt;&lt; lambda_l1_max( number=2.0 )

**Description :** Spécifie la valeur maximum du terme de régularisation L1 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "2.0" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_max( 2.0 ) ) );

```

#### lambda_l1_min

**Syntaxe :** obj &lt;&lt; lambda_l1_min( number=0.0 )

**Description :** Spécifie la valeur minimum du terme de régularisation L1 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "0.0" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_min( 0.0 ) ) );

```

#### lambda_l2

**Syntaxe :** obj &lt;&lt; lambda_l2( number=0 )

**Description :** Spécifie la valeur du terme de régularisation L2 sur les pondérations. Une valeur plus élevée rend le modèle plus classique. Cette valeur doit être positive ou nulle. "0" par défaut.

**JMP Version ajoutée :** 19

#### lambda_l2_max

**Syntaxe :** obj &lt;&lt; lambda_l2_max( number=2.0 )

**Description :** Spécifie la valeur maximum du terme de régularisation L2 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "2.0" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_max( 2.0 ) ) );

```

#### lambda_l2_min

**Syntaxe :** obj &lt;&lt; lambda_l2_min( number=0.0 )

**Description :** Spécifie la valeur minimum du terme de régularisation L2 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "0.0" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_min( 0.0 ) ) );

```

#### lambda_max

**Syntaxe :** obj &lt;&lt; lambda_max( number=2.0 )

**Description :** Spécifie la valeur maximum du terme de régularisation L2 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "2.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_max( 2.0 ) ) );

```

#### lambda_min

**Syntaxe :** obj &lt;&lt; lambda_min( number=0.0 )

**Description :** Spécifie la valeur minimum du terme de régularisation L2 sur les pondérations. Une valeur plus élevée rend le modèle plus conservateur. Cette valeur doit être positive ou nulle. "0.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_min( 0.0 ) ) );

```

#### lambdarank_norm

**Syntaxe :** obj &lt;&lt; lambdarank_norm( state=1 )

**Description :** Spécifie s&apos;il faut normaliser les lambdas pour différentes requêtes et améliorer les performances sur des données déséquilibrées. Actif par défaut.

**JMP Version ajoutée :** 19

#### lambdarank_position_bias_regularization

**Syntaxe :** obj &lt;&lt; lambdarank_position_bias_regularization( number=0 )

**Description :** Spécifie la valeur contrôlant le biais d&apos;information de position pour l&apos;objectif LambdaRank. Des valeurs supérieures réduisent les facteurs de biais de position déduits. "0" par défaut.

**JMP Version ajoutée :** 19

#### lambdarank_truncation_level

**Syntaxe :** obj &lt;&lt; lambdarank_truncation_level( number=30 )

**Description :** Spécifie le paramètre contrôlant le nombre de meilleurs résultats sur lesquels le modèle doit se concentrer pendant l&apos;entraînement pour l&apos;objectif LambdaRank. "30" par défaut.

**JMP Version ajoutée :** 19

#### learning_rate

**Syntaxe :** obj &lt;&lt; learning_rate( number=0.3 )

**Description :** Spécifie le taux d’apprentissage. Des taux d&apos;apprentissage inférieurs s&apos;ajustent mieux mais nécessitent davantage d&apos;itérations pour converger, tandis que des taux d’apprentissage supérieurs s&apos;ajustent plus rapidement. "0.3" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate( 0.3 ) ) );

```

#### learning_rate_max

**Syntaxe :** obj &lt;&lt; learning_rate_max( number=0.4 )

**Description :** Spécifie le taux d’apprentissage maximum. Des taux d&apos;apprentissage inférieurs s&apos;ajustent mieux mais nécessitent davantage d&apos;itérations pour converger, tandis que des taux d’apprentissage supérieurs s&apos;ajustent plus rapidement. "0.4" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_max( 0.4 ) ) );

```

#### learning_rate_min

**Syntaxe :** obj &lt;&lt; learning_rate_min( number=0.05 )

**Description :** Spécifie le taux d’apprentissage minimum. Des taux d&apos;apprentissage inférieurs s&apos;ajustent mieux mais nécessitent davantage d&apos;itérations pour converger, tandis que des taux d’apprentissage supérieurs s&apos;ajustent plus rapidement. "0.05" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_min( 0.05 ) ) );

```

#### linear_lambda

**Syntaxe :** obj &lt;&lt; linear_lambda( number=0.0 )

**Description :** Spécifie le paramètre de régularisation pour les arbres linéaires. "0.0" par défaut.

**JMP Version ajoutée :** 19

#### linear_tree

**Syntaxe :** obj &lt;&lt; linear_tree( state=0 )

**Description :** Spécifie s&apos;il faut ajuster un arbre de Gradient boosting linéaire par morceaux. Les divisions sont choisies de manière habituelle, mais le modèle est linéaire dans chaque feuille plutôt que constant. "0" par défaut.

**JMP Version ajoutée :** 19

#### max_bin

**Syntaxe :** obj &lt;&lt; max_bin( number=256 )

**Description :** Spécifie le nombre maximum de bins discrets dans lesquels les fonctions continues seront regroupées. Cette option s&apos;applique uniquement pour tree_method=hist. "256" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_bin( 256 ) ) );

```

#### max_bin_by_feature

**Syntaxe :** obj &lt;&lt; max_bin_by_feature( text )

**Description :** Spécifie le nombre maximum de bins pour chaque fonction.

**JMP Version ajoutée :** 19

#### max_cat_threshold

**Syntaxe :** obj &lt;&lt; max_cat_threshold( number=32 )

**Description :** Spécifie le seuil du nombre maximum de catégories uniques à considérer lors de la division des fonctions catégorielles. Des valeurs supérieures entraînent une recherche plus exhaustive des divisions catégorielles optimales, ce qui implique un temps d&apos;apprentissage accru. "32" par défaut.

**JMP Version ajoutée :** 19

#### max_cat_to_onehot

**Syntaxe :** obj &lt;&lt; max_cat_to_onehot( number=4 )

**Description :** Specifies the maximum number of categories that a categorical feature can have to use the one-vs-other split algorithm. Categorical features with more than the maximum number of categories are handled by a different algorithm. "4" par défaut.

**JMP Version ajoutée :** 19

#### max_delta_step

**Syntaxe :** obj &lt;&lt; max_delta_step( number=0.0 )

**Description :** Spécifie l&apos;étape delta maximum que chaque sortie de feuille peut recevoir. "0.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_delta_step( 0.0 ) ) );

```

#### max_depth

**Syntaxe :** obj &lt;&lt; max_depth( number=6 )

**Description :** Spécifie la profondeur maximum de l&apos;arbre. Cette valeur doit être un nombre entier. La complexité augmente avec la profondeur. Les modèles avec un paramètre max_depth plus important présentent un risque accru de surajustement. "6" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth( 6 ) ) );

```

#### max_depth_max

**Syntaxe :** obj &lt;&lt; max_depth_max( number=8 )

**Description :** Spécifie la profondeur maximum du maximum de l&apos;arbre. Cette valeur doit être un nombre entier. La complexité augmente avec la profondeur. Les modèles avec des profondeurs de 2^depth ou plus présentent un risque accru de surajustement. "8" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_max( 9 ) ) );

```

#### max_depth_min

**Syntaxe :** obj &lt;&lt; max_depth_min( number=1 )

**Description :** Spécifie la profondeur maximum du minimum de l&apos;arbre. Cette valeur doit être un nombre entier. La complexité augmente avec la profondeur. Les modèles avec des profondeurs de 2^depth ou plus présentent un risque accru de surajustement. "1" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_min( 3 ) ) );

```

#### max_drop

**Syntaxe :** obj &lt;&lt; max_drop( number=50 )

**Description :** Spécifie le nombre maximum d&apos;arbres ignorés à chaque itération de boosting DART. "50" par défaut.

**JMP Version ajoutée :** 19

#### max_leaves

**Syntaxe :** obj &lt;&lt; max_leaves( number=0 )

**Description :** Spécifie le nombre maximum de nœuds à ajouter. Cette option s&apos;applique uniquement pour grow_policy=lossguide. "0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_leaves( 0 ) ) );

```

#### metric

**Syntaxe :** obj &lt;&lt; metric( "default"|"l1"|"l2"|"rmse"|"quantile"|"mape"|"huber"|"fair"|"poisson"|"gamma"|"gamma_deviance"|"tweedie"|"ndcg"|"map"|"auc"|"average_precision"|"binary_logloss"|"binary_error"|"auc_mu"|"multi_logloss"|"multi_error"|"cross_entropy"|"cross_entropy_lambda"|"kulback_leibler"="default" )

**Description :** Spécifie la métrique évaluée dans les ensembles d&apos;apprentissage et de validation. "default" par défaut.

**JMP Version ajoutée :** 19

#### min_child_weight

**Syntaxe :** obj &lt;&lt; min_child_weight( number=1.0 )

**Description :** Spécifie la valeur minimum de la somme des pondérations d&apos;instance (hessienne) requise pour un enfant. Cette valeur correspond à la taille minimum de chaque feuille. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight( 1.0 ) ) );

```

#### min_child_weight_max

**Syntaxe :** obj &lt;&lt; min_child_weight_max( number=3.0 )

**Description :** Spécifie la valeur maximum de la somme des pondérations d&apos;instance (hessienne) requise pour un enfant. Cette valeur correspond à la taille maximum de chaque feuille. "3.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_max( 10.0 ) ) );

```

#### min_child_weight_min

**Syntaxe :** obj &lt;&lt; min_child_weight_min( number=1.0 )

**Description :** Spécifie la valeur minimum de la somme des pondérations d&apos;instance (hessienne) requise pour un enfant. Cette valeur correspond à la taille minimum de chaque feuille. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_min( 1.0 ) ) );

```

#### min_data_in_bin

**Syntaxe :** obj &lt;&lt; min_data_in_bin( number=3 )

**Description :** Spécifie le nombre minimum d&apos;observations incluses dans chaque bin. "3" par défaut.

**JMP Version ajoutée :** 19

#### min_data_in_leaf

**Syntaxe :** obj &lt;&lt; min_data_in_leaf( number=20 )

**Description :** Spécifie le nombre minimum d&apos;observations dans chaque feuille. "20" par défaut.

**JMP Version ajoutée :** 19

#### min_data_per_group

**Syntaxe :** obj &lt;&lt; min_data_per_group( number=100 )

**Description :** Spécifie le nombre minimum d&apos;observations par groupe catégoriel pour les fonctions catégorielles. "100" par défaut.

**JMP Version ajoutée :** 19

#### min_gain_to_split

**Syntaxe :** obj &lt;&lt; min_gain_to_split( number=0 )

**Description :** Spécifie la profondeur maximum de l&apos;arbre. Cette valeur doit être un nombre entier. La complexité augmente avec la profondeur. Les modèles avec un paramètre max_depth plus important présentent un risque accru de surajustement. "0" par défaut.

**JMP Version ajoutée :** 19

#### min_sum_hessian_in_leaf

**Syntaxe :** obj &lt;&lt; min_sum_hessian_in_leaf( number=0.001 )

**Description :** Spécifie la valeur minimum de la somme des pondérations d&apos;instance (hessienne) requise pour un enfant. Cette valeur correspond à la taille minimum de chaque feuille. "0.001" par défaut.

**JMP Version ajoutée :** 19

#### min_sum_hessian_in_leaf_max

**Syntaxe :** obj &lt;&lt; min_sum_hessian_in_leaf_max( number=10.0 )

**Description :** Spécifie la valeur maximum de la somme des pondérations d&apos;instance (hessienne) requise pour un enfant. Cette valeur correspond à la taille maximum de chaque feuille. "10.0" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_max( 10.0 ) ) );

```

#### min_sum_hessian_in_leaf_min

**Syntaxe :** obj &lt;&lt; min_sum_hessian_in_leaf_min( number=0.5 )

**Description :** Spécifie la valeur minimum de la somme des pondérations d&apos;instance (hessienne) requise pour un enfant. Cette valeur correspond à la taille minimum de chaque feuille. "0.5" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_min( 0.5 ) ) );

```

#### monotone_constraints

**Syntaxe :** obj &lt;&lt; monotone_constraints( text=None )

**Description :** Spécifie les contraintes de monotonie pour chaque fonction. Les contraintes doivent être spécifiées dans une liste de valeurs, séparées par des virgules, entre parenthèses, où -1 indique négative, 1 indique positive et 0 indique aucune contrainte. "None" par défaut.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( monotone_constraints( "(1,1)" ) ) );

```

#### monotone_constraints_method

**Syntaxe :** obj &lt;&lt; monotone_constraints_method( "basic"|"intermediate"|"advanced"="basic" )

**Description :** Spécifie la méthode utilisée pour la contrainte monotone lorsqu&apos;elle doit être appliquée. "basic" par défaut.

**JMP Version ajoutée :** 19

#### monotone_penalty

**Syntaxe :** obj &lt;&lt; monotone_penalty( number=0 )

**Description :** Spécifie le degré de sévérité de la contrainte monotone lorsqu&apos;elle doit être appliquée. Une valeur spécifiée de K interdit toute division monotone sur les K premiers niveaux de l&apos;arbre. Des valeurs supérieures entraînent une pénalisation accrue dans les premières étapes de construction de l&apos;arbre. "0" par défaut.

**JMP Version ajoutée :** 19

#### multi_error_top_k

**Syntaxe :** obj &lt;&lt; multi_error_top_k( number=1 )

**Description :** Spécifie le seuil pour la métrique d&apos;erreur multiple top-k en classification multiclasse. "1" par défaut.

**JMP Version ajoutée :** 19

#### neg_bagging_fraction

**Syntaxe :** obj &lt;&lt; neg_bagging_fraction( number=1 )

**Description :** Spécifie la valeur permettant d&apos;ajuster le processus de sélection d&apos;échantillons négatifs en régression binaire déséquilibrée. "1" par défaut.

**JMP Version ajoutée :** 19

#### normalize_type

**Syntaxe :** obj &lt;&lt; normalize_type( "tree"|"forest"="tree" )

**Description :** Spécifie le type d&apos;algorithme de normalisation pour le booster DART.  "tree" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "dart" ),	Fit( normalize_type( "tree" ) ));

```

#### nthread

**Syntaxe :** obj &lt;&lt; nthread( number=0 )

**Description :** Spécifie le nombre de threads parallèles utilisés pour exécuter XGBoost. Par défaut, tous les threads disponibles sont utilisés. "0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( nthread( 8 ) ) );

```

#### num_grad_quant_bins

**Syntaxe :** obj &lt;&lt; num_grad_quant_bins( number=4 )

**Description :** Spécifie le nombre de bins pour la quantification des gradients et des matrices hessiennes lors de l&apos;utilisation du gradient quantifié. Des valeurs supérieures produisent un apprentissage quantifié plus proche d&apos;un apprentissage en précision complète. "4" par défaut.

**JMP Version ajoutée :** 19

#### num_iteration_predict

**Syntaxe :** obj &lt;&lt; num_iteration_predict( number=-1 )

**Description :** Spécifie le nombre d&apos;itérations pour effectuer les prévisions. "-1" par défaut.

**JMP Version ajoutée :** 19

#### num_iterations

**Syntaxe :** obj &lt;&lt; num_iterations( number=100 )

**Description :** Spécifie le nombre d&apos;itérations boosting. "100" par défaut.

**JMP Version ajoutée :** 19

#### num_iterations_max

**Syntaxe :** obj &lt;&lt; num_iterations_max( number=100 )

**Description :** Spécifie le nombre maximum d&apos;itérations boosting. "100" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_max( 100 ) ) );

```

#### num_iterations_min

**Syntaxe :** obj &lt;&lt; num_iterations_min( number=20 )

**Description :** Spécifie le nombre minimum d&apos;itérations boosting. "20" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_min( 20 ) ) );

```

#### num_leaves

**Syntaxe :** obj &lt;&lt; num_leaves( number=31 )

**Description :** Spécifie le nombre maximum de feuilles sur chaque arbre. "31" par défaut.

**JMP Version ajoutée :** 19

#### num_parallel_tree

**Syntaxe :** obj &lt;&lt; num_parallel_tree( number=1 )

**Description :** Spécifie le nombre d&apos;arbres boostés à construire en parallèle. La moyenne des résultats est ensuite calculée. "1" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_parallel_tree( 1 ) ) );

```

#### num_threads

**Syntaxe :** obj &lt;&lt; num_threads( number=0 )

**Description :** Spécifie le nombre de threads. Pour une vitesse optimale, définissez cette valeur sur le nombre de cœurs CPU. "0" par défaut.

**JMP Version ajoutée :** 19

#### objective

**Syntaxe :** obj &lt;&lt; objective( "reg:squarederror"|"binary:logistic"|"binary:hinge"|"count:poisson"|"multi:softprob"|"rank:pairwise"|"rank:ndcg"|"rank:map"|"reg:gamma"|"reg:logistic"|"reg:pseudohubererror"|"reg:squaredlogerror"|"reg:tweedie"|"survival:cox"="reg:squarederror" )

**Description :** Spécifie la fonction à optimiser pour l&apos;ajustement du modèle. La fonction doit être consistante avec le type de modèle de la réponse. "reg:squarederror" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), objective( "reg:squarederror" ) );

```

#### objective_seed

**Syntaxe :** obj &lt;&lt; objective_seed( number=5 )

**Description :** Specifies the seed that is used in the random number generator for the objective parameter. "5" par défaut.

**JMP Version ajoutée :** 19

#### one_drop

**Syntaxe :** obj &lt;&lt; one_drop( number=0 )

**Description :** Lorsque ce drapeau est activé dans le booster DART, au moins un arbre est supprimé à chaque suppression. "0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), one_drop( 0 ) ) );

```

#### other_rate

**Syntaxe :** obj &lt;&lt; other_rate( number=0.1 )

**Description :** Spécifie le ratio conservé des petits gradients pour la stratégie d&apos;échantillonnage GOSS. "0.1" par défaut.

**JMP Version ajoutée :** 19

#### path_smooth

**Syntaxe :** obj &lt;&lt; path_smooth( number=0 )

**Description :** "0" par défaut.

**JMP Version ajoutée :** 19

#### poisson_max_delta_step

**Syntaxe :** obj &lt;&lt; poisson_max_delta_step( number=0.7 )

**Description :** Spécifie une valeur limitant la contribution prévisionnelle maximum des feuilles pour le modèle de Poisson. "0.7" par défaut.

**JMP Version ajoutée :** 19

#### pos_bagging_fraction

**Syntaxe :** obj &lt;&lt; pos_bagging_fraction( number=1 )

**Description :** Spécifie la valeur permettant d&apos;ajuster le processus de sélection d&apos;échantillons positifs en régression binaire déséquilibrée. "1" par défaut.

**JMP Version ajoutée :** 19

#### pred_early_stop

**Syntaxe :** obj &lt;&lt; pred_early_stop( state=0 )

**Description :** Spécifie s&apos;il faut appliquer l&apos;arrêt précoce des prévisions dans les applications de classification et de classement. Si cette option est définie sur vrai, la prévision peut être plus rapide, mais la précision peut être affectée. "0" par défaut.

**JMP Version ajoutée :** 19

#### pred_early_stop_freq

**Syntaxe :** obj &lt;&lt; pred_early_stop_freq( number=10 )

**Description :** Spécifie la fréquence de vérification de l&apos;arrêt précoce des prévisions lorsque celui-ci est spécifié. "10" par défaut.

**JMP Version ajoutée :** 19

#### pred_early_stop_margin

**Syntaxe :** obj &lt;&lt; pred_early_stop_margin( number=10 )

**Description :** Specifies the threshold margin in prediction early stopping when prediction early stopping is specified. This parameter enables the prediction process to stop early if the margin is far enough from the threshold. "10" par défaut.

**JMP Version ajoutée :** 19

#### predict_disable_shape_check

**Syntaxe :** obj &lt;&lt; predict_disable_shape_check( state=0 )

**Description :** Spécifie s&apos;il faut déclencher une erreur lors de prévisions sur des données ayant un nombre de fonctions différent de celui des données d&apos;apprentissage. "0" par défaut.

**JMP Version ajoutée :** 19

#### predictor

**Syntaxe :** obj &lt;&lt; predictor( "auto"|"cpu_predictor"|"gpu_predictor"="auto" )

**Description :** Spécifie le type d&apos;algorithme régresseur. "auto" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( predictor( "cpu_predictor" ) ) );

```

#### process_type

**Syntaxe :** obj &lt;&lt; process_type( "default"|"update"="default" )

**Description :** Spécifie le type de processus de boosting à exécuter. "default" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( process_type( "default" ) ) );

```

#### quant_train_renew_leaf

**Syntaxe :** obj &lt;&lt; quant_train_renew_leaf( state=0 )

**Description :** Spécifie s&apos;il faut réactualiser les valeurs des feuilles avec les gradients d&apos;origine lorsque l&apos;apprentissage quantifié est activé. Cette option peut améliorer la précision des objectifs de classement lors de l&apos;apprentissage quantifié. "0" par défaut.

**JMP Version ajoutée :** 19

#### rate_drop

**Syntaxe :** obj &lt;&lt; rate_drop( number=0.0 )

**Description :** Spécifie le taux de suppression pour le booster DART. "0.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), rate_drop( 0.0 ) ) );

```

#### refresh_leaf

**Syntaxe :** obj &lt;&lt; refresh_leaf( number=1 )

**Description :** Spécifie le paramètre du module de mise à jour de rafraîchissement. Si défini sur 1, les feuilles et les nœuds sont mis à jour. Si défini sur 0, seuls les nœuds sont mis à jour. "1" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( refresh_leaf( 1 ) ) );

```

#### reg_sqrt

**Syntaxe :** obj &lt;&lt; reg_sqrt( state=0 )

**Description :** Spécifie s&apos;il faut ajuster la racine carrée de la variable réponse plutôt que ses valeurs d&apos;origine pour les modèles de régression. "0" par défaut.

**JMP Version ajoutée :** 19

#### sample_type

**Syntaxe :** obj &lt;&lt; sample_type( "uniform"|"weighted"="uniform" )

**Description :** Spécifie le type d&apos;algorithme d&apos;échantillonnage pour le booster DART.  "uniform" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "dart" ),	Fit( sample_type( "uniform" ) ));

```

#### scale_pos_weight

**Syntaxe :** obj &lt;&lt; scale_pos_weight( number=1.0 )

**Description :** Spécifie le solde de pondérations positives et négatives, qui sont utiles pour les classes non équilibrées. Une valeur typique à prendre en compte est la somme des instances négatives, divisée par la somme des instances positives. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( scale_posweight( 1.0 ) ) );

```

#### seed

**Syntaxe :** obj &lt;&lt; seed( number=0 )

**Description :** Spécifie la graine pour le générateur de nombre aléatoire. Fixez cette valeur pour pouvoir reproduire les résultats. "0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( seed( 0 ) ) );

```

#### sigmoid

**Syntaxe :** obj &lt;&lt; sigmoid( number=1 )

**Description :** Spécifie le paramètre pour la fonction sigmoïde dans les modèles binaires et multiclasses. "1" par défaut.

**JMP Version ajoutée :** 19

#### sketch_eps

**Syntaxe :** obj &lt;&lt; sketch_eps( number=0.03 )

**Description :** Utilisée uniquement pour tree_method=approx, cette valeur représente environ (1 / sketch_eps) = nombre de bins. "0.03" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( sketch_eps( 0.03 ) ) );

```

#### skip_drop

**Syntaxe :** obj &lt;&lt; skip_drop( number=0.0 )

**Description :** Spécifie la probabilité d&apos;ignorer la procédure de suppression durant l&apos;itération de boosting DART. "0.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), skip_drop( 0.0 ) ) );

```

#### start_iteration_predict

**Syntaxe :** obj &lt;&lt; start_iteration_predict( number=0 )

**Description :** Spécifie l&apos;itération de départ pour effectuer les prévisions. "0" par défaut.

**JMP Version ajoutée :** 19

#### stochastic_rounding

**Syntaxe :** obj &lt;&lt; stochastic_rounding( state=1 )

**Description :** Spécifie s&apos;il faut utiliser l&apos;arrondi stochastique dans la quantification des gradients. Actif par défaut.

**JMP Version ajoutée :** 19

#### subsample

**Syntaxe :** obj &lt;&lt; subsample( number=1.0 )

**Description :** Spécifie la proportion de lignes à échantillonner durant chaque itération. Cette valeur doit être comprise entre 0 et 1. Il s&apos;agit d&apos;un type d&apos;agrégation. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample( 1.0 ) ) );

```

#### subsample_max

**Syntaxe :** obj &lt;&lt; subsample_max( number=1.0 )

**Description :** Spécifie la proportion maximum de lignes à échantillonner durant chaque itération. Cette valeur doit être comprise entre 0 et 1. Il s&apos;agit d&apos;un type d&apos;agrégation. "1.0" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_max( 1.0 ) ) );

```

#### subsample_min

**Syntaxe :** obj &lt;&lt; subsample_min( number=0.5 )

**Description :** Spécifie la proportion minimum de lignes à échantillonner durant chaque itération. Cette valeur doit être comprise entre 0 et 1. Il s&apos;agit d&apos;un type d&apos;agrégation. "0.5" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_min( 0.3 ) ) );

```

#### top_k

**Syntaxe :** obj &lt;&lt; top_k( number=256 )

**Description :** Spécifie le nombre de fonctions clés à sélectionner dans le sélecteur de fonction avide et économe. Cette option s&apos;applique uniquement pour le booster gblinear. "256" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gblinear" ), top_k( 0 ) ) );

```

#### top_rate

**Syntaxe :** obj &lt;&lt; top_rate( number=0.2 )

**Description :** Spécifie le ratio conservé des grands gradients pour la stratégie d&apos;échantillonnage GOSS. "0.2" par défaut.

**JMP Version ajoutée :** 19

#### tree_method

**Syntaxe :** obj &lt;&lt; tree_method( "auto"|"exact"|"approx"|"hist"|"gpu_exact"|"gpu_hist"="auto" )

**Description :** Spécifie l&apos;algorithme de construction de l&apos;arbre utilisé dans XGBoost. "auto" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( tree_method( "auto" ) ) );

```

#### tweedie_variance_power

**Syntaxe :** obj &lt;&lt; tweedie_variance_power( number=1.5 )

**Description :** Spécifie la puissance de la distribution Tweedie. Cette valeur doit être comprise entre 1 et 2. Cette option s&apos;applique uniquement pour objective=reg:tweedie. "1.5" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Fit( objective( "reg:tweedie" ), tweedie_variance_power( 1.5 ) ));

```

#### uniform_drop

**Syntaxe :** obj &lt;&lt; uniform_drop( state=0 )

**Description :** Specifies whether to select trees for dropping in DART boosting using uniform probability. "0" par défaut.

**JMP Version ajoutée :** 19

#### updater

**Syntaxe :** obj &lt;&lt; updater( text )

**Description :** Spécifie le module de mise à jour de l&apos;arbre à exécuter pour le booster gbtree. Spécifiez l&apos;un des modules suivants : grow_colmaker, distcol, grow_histmaker, grow_local_histmaker, grow_skmaker, sync, refresh, prune. For the gblinear booster, specify either shotgun or coord_descent.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( updater( "grow_colmaker" ) ) );

```

#### use_missing

**Syntaxe :** obj &lt;&lt; use_missing( state=1 )

**Description :** Spécifie s&apos;il faut appliquer un traitement particulier aux valeurs manquantes. Actif par défaut.

**JMP Version ajoutée :** 19

#### use_quantized_grad

**Syntaxe :** obj &lt;&lt; use_quantized_grad( state=0 )

**Description :** Spécifie s&apos;il faut utiliser la quantification des gradients lors de l&apos;apprentissage. L&apos;activation de cette option discrétise les gradients et matrices hessiennes en bins, ce qui peut accélérer l&apos;apprentissage avec une faible perte de précision dans la plupart des cas. "0" par défaut.

**JMP Version ajoutée :** 19

#### xgboost_dart_mode

**Syntaxe :** obj &lt;&lt; xgboost_dart_mode( state=0 )

**Description :** Spécifie s&apos;il faut utiliser le mode DART de XGBoost. "0" par défaut.

**JMP Version ajoutée :** 19

#### zero_as_missing

**Syntaxe :** obj &lt;&lt; zero_as_missing( state=0 )

**Description :** Spécifie s&apos;il faut traiter toutes les valeurs nulles comme des valeurs manquantes. "0" par défaut.

**JMP Version ajoutée :** 19

