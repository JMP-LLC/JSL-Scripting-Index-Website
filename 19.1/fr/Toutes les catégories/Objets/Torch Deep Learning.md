# Torch Deep Learning



## Colonnes

### Censor

**Syntaxe :** obj &lt;&lt; Censor( column )

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Freq

**Syntaxe :** obj &lt;&lt; Freq( column )

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Inputs

**Syntaxe :** obj &lt;&lt; Inputs( column(s) )

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Responses

**Syntaxe :** obj &lt;&lt; Responses( column(s) )

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Subject

**Syntaxe :** obj &lt;&lt; Subject( column )

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Validation

**Syntaxe :** obj &lt;&lt; Validation( column(s) )

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Weight

**Syntaxe :** obj &lt;&lt; Weight( column )

**Description :** Spécifie une colonne dont les valeurs attribuent une pondération à chaque ligne pour l&apos;analyse.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### X

**Syntaxe :** obj &lt;&lt; X( column(s) )

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Y

**Syntaxe :** obj &lt;&lt; Y( column(s) )

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## Constructeurs associés

### Torch Deep Learning

**Syntaxe :** Torch Deep Learning(Y( columns ), X( columns ))

**Description :** Interface to predictive modeling via the Torch Deep Learning add-in

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## Messages d'éléments

### Change Variables

**Syntaxe :** obj &lt;&lt; Change Variables

**Description :** Changes X, Y, and other variables for subsequent models.

**JMP Version ajoutée :** 18

### Compare

**Syntaxe :** obj &lt;&lt; Compare

**Description :** Updates the Torch Deep Learning comparison metrics.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Compare( AUC( 1 ) );

```

### Fit

**Syntaxe :** obj &lt;&lt; Fit

**Description :** Fits a Torch Deep Learning model. You can specify parameters and fitting specifications within this command.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Get Measures

**Syntaxe :** obj &lt;&lt; Get Measures

**JMP Version ajoutée :** 18

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Return to the launcher for this analysis.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Relaunch Analysis;

```

### Set

**Syntaxe :** obj &lt;&lt; Set

**Description :** Specifies parameters for a Torch Deep Learning model.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Set( Epochs( 5 ) ) );

```

### Show Details

**Syntaxe :** obj &lt;&lt; Show Details( state=0|1 )

**Description :** Shows more details.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Show Details( 1 ) );

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Copy Script;

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Torch Deep Learning Compare

### Constructeurs associés

#### Torch Deep Learning Compare

**Syntaxe :** Torch Deep Learning Compare

### Messages d'éléments

#### AUC

**Syntaxe :** obj &lt;&lt; AUC( state=0|1 )

**Description :** Shows or hides the AUROC, which is the area under the receiver operating characteristic curve. Actif par défaut.

**JMP Version ajoutée :** 18

#### Accuracy

**Syntaxe :** obj &lt;&lt; Accuracy( state=0|1 )

**Description :** Shows or hides the accuracy, which is the proportion of correct classifications. Actif par défaut.

**JMP Version ajoutée :** 18

#### Censor

**Syntaxe :** obj &lt;&lt; Censor( state=0|1 )

**Description :** Shows or hides the Censor command Actif par défaut.

**JMP Version ajoutée :** 18

#### Concordance

**Syntaxe :** obj &lt;&lt; Concordance( state=0|1 )

**Description :** Shows or hides the concordance, which is the Harrell C-Index and measures strength of sorting efficiency Actif par défaut.

**JMP Version ajoutée :** 18

#### Correlation

**Syntaxe :** obj &lt;&lt; Correlation( state=0|1 )

**Description :** Shows or hides the Pearson correlation, which is a measure of the strength of the linear relationship. Actif par défaut.

**JMP Version ajoutée :** 18

#### F1

**Syntaxe :** obj &lt;&lt; F1( state=0|1 )

**Description :** Shows or hides the F1 Score, which is the harmonic average of precision and recall. Actif par défaut.

**JMP Version ajoutée :** 18

#### Freq

**Syntaxe :** obj &lt;&lt; Freq( state=0|1 )

**Description :** Shows or hides the Freq column. Actif par défaut.

**JMP Version ajoutée :** 18

#### H Measure

**Syntaxe :** obj &lt;&lt; H Measure( state=0|1 )

**Description :** Shows or hides the H Measure, which measures proportion improvement over baseline. Actif par défaut.

**JMP Version ajoutée :** 18

#### Hide All Models

**Syntaxe :** obj &lt;&lt; Hide All Models

**Description :** Hides all models.

**JMP Version ajoutée :** 18

#### LogLoss

**Syntaxe :** obj &lt;&lt; LogLoss( state=0|1 )

**Description :** Shows or hides the logarithm of the likelihood-based loss function. Actif par défaut.

**JMP Version ajoutée :** 18

#### MAE

**Syntaxe :** obj &lt;&lt; MAE( state=0|1 )

**Description :** Shows or hides the MAE, which is the mean absolute error. Actif par défaut.

**JMP Version ajoutée :** 18

#### MCC

**Syntaxe :** obj &lt;&lt; MCC( state=0|1 )

**Description :** Shows or hides the Matthews correlation coefficient, which is the Pearson correlation for binary variables. Actif par défaut.

**JMP Version ajoutée :** 18

#### Misclass

**Syntaxe :** obj &lt;&lt; Misclass( state=0|1 )

**Description :** Shows or hides the misclassification rate, which is the proportion of incorrect classifications. Actif par défaut.

**JMP Version ajoutée :** 18

#### Precision Recall AUC

**Syntaxe :** obj &lt;&lt; Precision Recall AUC( state=0|1 )

**Description :** Shows or hides the Precision Recall AUC, which is the area under the precision-recall curve. Actif par défaut.

**JMP Version ajoutée :** 18

#### Predictors

**Syntaxe :** obj &lt;&lt; Predictors( state=0|1 )

**Description :** Shows or hides the Predictors column. Actif par défaut.

**JMP Version ajoutée :** 18

#### Profit

**Syntaxe :** obj &lt;&lt; Profit( state=0|1 )

**Description :** Shows or hides the expected profit. Actif par défaut.

**JMP Version ajoutée :** 18

#### RMSE

**Syntaxe :** obj &lt;&lt; RMSE( state=0|1 )

**Description :** Shows or hides the RMSE, which is the root mean square error. Actif par défaut.

**JMP Version ajoutée :** 18

#### RSquare

**Syntaxe :** obj &lt;&lt; RSquare( state=0|1 )

**Description :** Shows or hides RSquare value, which is the proportion of variability explained. Actif par défaut.

**JMP Version ajoutée :** 18

#### Remove Hidden Models

**Syntaxe :** obj &lt;&lt; Remove Hidden Models

**Description :** Removes all models for which the Show box is not checked.

**JMP Version ajoutée :** 18

#### Remove Shown Models

**Syntaxe :** obj &lt;&lt; Remove Shown Models

**Description :** Removes all models for which the Show check box is checked and shows the remaining models.

**JMP Version ajoutée :** 18

#### Response

**Syntaxe :** obj &lt;&lt; Response( state=0|1 )

**Description :** Shows or hides the Response column. Actif par défaut.

**JMP Version ajoutée :** 18

#### Show All Models

**Syntaxe :** obj &lt;&lt; Show All Models

**Description :** Shows all models.

**JMP Version ajoutée :** 18

#### Subject

**Syntaxe :** obj &lt;&lt; Subject( state=0|1 )

**Description :** Shows or hides the Subject column Actif par défaut.

**JMP Version ajoutée :** 18

#### Training Metrics

**Syntaxe :** obj &lt;&lt; Training Metrics( state=0|1 )

**Description :** Shows or hides all training metrics. Actif par défaut.

**JMP Version ajoutée :** 18

#### Validation

**Syntaxe :** obj &lt;&lt; Validation( state=0|1 )

**Description :** Shows or hides the Validation column. Actif par défaut.

**JMP Version ajoutée :** 18

#### Validation Metrics

**Syntaxe :** obj &lt;&lt; Validation Metrics( state=0|1 )

**Description :** Shows or hides all validation metrics. Actif par défaut.

**JMP Version ajoutée :** 18

#### Weight

**Syntaxe :** obj &lt;&lt; Weight( state=0|1 )

**Description :** Shows or hides the Weight column. Actif par défaut.

**JMP Version ajoutée :** 18

## Torch Deep Learning Fit > Post

### Messages d'éléments

#### Actual by Predicted Plots

**Syntaxe :** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**Description :** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis. Actif par défaut.

**JMP Version ajoutée :** 18

#### Confusion Matrices

**Syntaxe :** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**Description :** Shows or hides a crosstabulation matrix of actual and predicted levels. Actif par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Torch Deep Learning(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler.

**Syntaxe :** obj &lt;&lt; Contour Profiler.

**Description :** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP Version ajoutée :** 18

#### Decision Thresholds

**Syntaxe :** obj &lt;&lt; Decision Thresholds( state=0|1 )

**Description :** Shows or hides decision threshold graphs and tables. Actif par défaut.

**JMP Version ajoutée :** 18

#### Fit Details

**Syntaxe :** obj &lt;&lt; Fit Details( state=0|1 )

**Description :** Shows or hides the statistics for the fitted model. Actif par défaut.

**JMP Version ajoutée :** 18

#### Lift Curves

**Syntaxe :** obj &lt;&lt; Lift Curves( state=0|1 )

**Description :** Plots how much more saturated the top x-percent of predicted values are compared to the whole population.

**JMP Version ajoutée :** 18

#### Model Details

**Syntaxe :** obj &lt;&lt; Model Details( state=0|1 )

**Description :** Shows or hides model details Actif par défaut.

**JMP Version ajoutée :** 18

#### Precision Recall Curves

**Syntaxe :** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**Description :** Plots the trade-off between precision and recall for different classification thresholds. It is preferred in scenarios where class imbalances exist.

**JMP Version ajoutée :** 18

#### Profiler

**Syntaxe :** obj &lt;&lt; Profiler

**Description :** Shows or hides the Prediction Profiler.

**JMP Version ajoutée :** 18

#### ROC Curves

**Syntaxe :** obj &lt;&lt; ROC Curves( state=0|1 )

**Description :** Plots the response-category sorting efficiency of the model predictions.

**JMP Version ajoutée :** 18

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; Surface Profiler

**Description :** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP Version ajoutée :** 18

## Torch Deep Learning Fit

### Constructeurs associés

#### Post

**Syntaxe :** Post

#### Torch Deep Learning Fit

**Syntaxe :** Torch Deep Learning Fit

### Messages d'éléments

#### Activation

**Syntaxe :** obj &lt;&lt; Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="ReLU" )

**Description :** Specifies the activation function to use after each layer. "ReLU" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activation( "ReLU" ) ) );

```

#### Activations

**Syntaxe :** obj &lt;&lt; Activations( text )

**Description :** Specifies a space-delimited list of activation functions to use in sequential layers.  This parameter overrides Activation when it is specified, and the last value carries forward.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activations( "ReLU" ) ) );

```

#### Anchor Scale

**Syntaxe :** obj &lt;&lt; Anchor Scale( number=16 )

**Description :** Specifies a multiplier applied to an internal range of anchor sizes.  Larger values tend to work better for larger boxes. "16" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Anchor Scale( "16" ) ) );

```

#### Aspect Sigma

**Syntaxe :** obj &lt;&lt; Aspect Sigma( number=0 )

**Description :** Standard deviation of Gaussian aspect ratio deformation "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Aspect Sigma( 0.0 ) ) );

```

#### Attention Heads

**Syntaxe :** obj &lt;&lt; Attention Heads( text=4 )

**Description :** For transformer models, specifies the number of attention heads as a space delimited list of positive integers, each of which must evenly divide its corresponding layer size. Last value carries forward if necessary. "4" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Attention Heads( 1 ) ) );

```

#### Base Activation

**Syntaxe :** obj &lt;&lt; Base Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="GELU" )

**Description :** Specifies the base activation function for Kolmogorov Arnold B Splines. "GELU" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Base Activation( "GELU" ) ) );

```

#### Basis Function

**Syntaxe :** obj &lt;&lt; Basis Function( "Gaussian"|"Linear"|"Quadradic"|"InverseQuadradic"|"MultiQuadric"|"InverseMultiQuadric"|"Spline"|"Poisson1"|"Poisson2"|"Matern32"|"Matern52"="Gaussian" )

**Description :** For Radial Basis Machine models, specify the basis function. "Gaussian" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :height, :weight ),	Fit( Tabular Model( "RadialBasisMachine" ), Basis Function( "Gaussian" ) ));

```

#### Batch Size

**Syntaxe :** obj &lt;&lt; Batch Size( number=128 )

**Description :** Specifies the number of rows to randomly sample for each training batch and optimization update. Decrease it to save memory and update gradients more frequently; increase it to pass through the data faster and regularize the model more. "128" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Batch Size( 128 ) ) );

```

#### Binary Loss

**Syntaxe :** obj &lt;&lt; Binary Loss( "BCE"|"SM"="BCE" )

**Description :** Specifies the loss function for binary responses. Choose from Binary Cross Entropy (BCE) or Soft Margin (SM). "BCE" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Binary Loss( "BCE" ) ) );

```

#### Blur Max Sigma

**Syntaxe :** obj &lt;&lt; Blur Max Sigma( number=0 )

**Description :** Maximum standard deviation of Gaussian blur "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Blur Max Sigma( 1 ) ) );

```

#### Class Loss Weight

**Syntaxe :** obj &lt;&lt; Class Loss Weight( number=4.0 )

**Description :** Specifies the multiplier for class loss. "4.0" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Class Loss Weight( 4.0 ) ) );

```

#### Confidence Threshold

**Syntaxe :** obj &lt;&lt; Confidence Threshold( number=0.05 )

**Description :** Specifies the confidence score threshold for predicted boxes.  Boxes with probability score less than this threshold are dropped. "0.05" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Confidence Threshold( 0.05 ) ) );

```

#### Continuous Loss

**Syntaxe :** obj &lt;&lt; Continuous Loss( "MSE"|"L1"|"SmoothL1"|"Huber"|"Poisson"|"Quantile"|"CoxPH"="MSE" )

**Description :** Specifies the loss function for continuous responses. Choose from Mean Squared Error (MSE), Mean Absolute Error (L1), Smoothed L1 (with margin), Huber (with margin), or Poisson (for count responses). "MSE" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :weight ), X( :picture ), Fit( Continuous Loss( "MSE" ) ) );

```

#### Copy Parameters to Launch

**Syntaxe :** obj &lt;&lt; Copy Parameters to Launch

**Description :** Copies the parameter values from this model to the model launch section.

**JMP Version ajoutée :** 18

#### Covariance Structure

**Syntaxe :** obj &lt;&lt; Covariance Structure( "DotProduct"|"Gaussian"="DotProduct" )

**Description :** For mixed models, specify the covariance structure. "DotProduct" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :height, :weight ),	Fit( Tabular Model( "MixedModel" ), Covariance Structure( "DotProduct" ) ));

```

#### Data Threads

**Syntaxe :** obj &lt;&lt; Data Threads( number=4 )

**Description :** Specifies the number of threads to use to load data into memory. A number near half the number of actual cores is usually near optimal. "4" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Data Threads( 0 ) ) );

```

#### Device

**Syntaxe :** obj &lt;&lt; Device( "auto"|"cpu"|"cuda:0"|"cuda:1"|"cuda:2"|"cuda:3"="auto" )

**Description :** Specifies the computational device that Torch uses. "auto" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Device( "cpu" ) ) );

```

#### Dilations

**Syntaxe :** obj &lt;&lt; Dilations( text=1 )

**Description :** For custom convolutional models, specifies the dilations as a space-delimited list of positive integers. Last value carries forward if necessary. "1" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dilations( "1" ) ) );

```

#### Dropout Probs

**Syntaxe :** obj &lt;&lt; Dropout Probs( text=0.0 )

**Description :** Specifies the probabilities of dropout to use after each layer as a space-delimited list of decimals between 0 and 1. Last value carries forward if necessary. "0.0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dropout Probs( "0.1" ) ) );

```

#### Epochs

**Syntaxe :** obj &lt;&lt; Epochs( number=20 )

**Description :** Specifies the number of iterations through the training data to optimize the loss function for each batch and train the model. "20" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Epochs( 100 ) ) );

```

#### Factorization Machine Layers

**Syntaxe :** obj &lt;&lt; Factorization Machine Layers( text=0 )

**Description :** Specify a space-separated list of 0s and 1s indicating if factorization machine interactions should be added to each linear layer.  Last value carries forward. "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :height, :weight ),	Fit( Factorization Machine Layers( "1" ) ));

```

#### Fit Ys Separately

**Syntaxe :** obj &lt;&lt; Fit Ys Separately( state=0 )

**Description :** Check to fit a distinct model for each Y variable, and uncheck to model them jointly. "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex, :height ), X( :picture ), Fit( Model Ys Separately( 1 ) ) );

```

#### Fixed Effects

**Syntaxe :** obj &lt;&lt; Fixed Effects( number=0 )

**Description :** Specify the number of fixed effects, all of which must be at the beginning of the X variable list "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Fixed Effects( 0 ) ) );

```

#### Folder

**Syntaxe :** obj &lt;&lt; Folder( text )

**Description :** Select a folder in which to save modeling results. A subfolder for each model is created in this folder.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Folder( "" ) ) );

```

#### Frozen Epochs

**Syntaxe :** obj &lt;&lt; Frozen Epochs( number=0 )

**Description :** Specifies the number of epochs for which pretrained model bodies remain frozen.  After this number there is full training gradients for all parameters. "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Frozen Epochs( 3 ) ) );

```

#### Generate Python Code

**Syntaxe :** obj &lt;&lt; Generate Python Code

**Description :** Creates Python code for model deployment.

**JMP Version ajoutée :** 18

#### Grid Size

**Syntaxe :** obj &lt;&lt; Grid Size( number=5 )

**Description :** For Kolmogorov Arnold B Spline networks, specifies the number of points in the grid for the spline interpolation. "5" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Grid Size( 5 ) ) );

```

#### HFlip Prob

**Syntaxe :** obj &lt;&lt; HFlip Prob( number=0 )

**Description :** Probability of horizontal flip "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( HFlip Prob( 0.3 ) ) );

```

#### Highway Layers

**Syntaxe :** obj &lt;&lt; Highway Layers( text=0 )

**Description :** Specify a space-separated list of nonnegative integers specifying the number of highway layers to insert in the network.  Last value carries forward. "0" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Highway Layers( "1" ) ) );

```

#### Image Model

**Syntaxe :** obj &lt;&lt; Image Model( ="LeNet5" )

**Description :** Specifies the image network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. "LeNet5" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Model( "LeNet5" ) ) );

```

#### Image Size

**Syntaxe :** obj &lt;&lt; Image Size( number=28 )

**Description :** Specifies the size of image to use while training. Input images are transformed to this size square; larger images have higher resolution but slower training times. "28" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Size( 28 ) ) );

```

#### Kernel Sizes

**Syntaxe :** obj &lt;&lt; Kernel Sizes( text=3 )

**Description :** For custom convolutional models, specifies the kernel sizes as a space-delimited list of positive integers. Last value carries forward if necessary. "3" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Kernel Sizes( "3" ) ) );

```

#### L1 Penalty

**Syntaxe :** obj &lt;&lt; L1 Penalty( number=0.0 )

**Description :** Specifies a multiplier for the sum of absolute values of weight parameters to be added to the loss and induce sparsity. "0.0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( L1 Penalty( 0.0001 ) ) );

```

#### Layer Sizes

**Syntaxe :** obj &lt;&lt; Layer Sizes( text=16 )

**Description :** Specifies output sizes of hidden layers as a space-delimited list of integers (actual sizes) or decimals (multipliers of the previous layer size). The final value is the embedding size. "16" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Layer Sizes( "16" ) ) );

```

#### Learning Rate

**Syntaxe :** obj &lt;&lt; Learning Rate( number=0.001 )

**Description :** Specifies the learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. "0.001" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Learning Rate( 0.001 ) ) );

```

#### Margin

**Syntaxe :** obj &lt;&lt; Margin( number=1.0 )

**Description :** Specifies the margin used in margin-based loss functions. Larger values should produce larger embedding distances between nominal responses with different levels, but may adversely affect training. "1.0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Margin( 1.0 ) ) );

```

#### Max Boxes

**Syntaxe :** obj &lt;&lt; Max Boxes( number=5 )

**Description :** Specifies the maximum number of predicted boxes per image. "5" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Max Boxes( 5 ) ) );

```

#### Max Seq Length

**Syntaxe :** obj &lt;&lt; Max Seq Length( number=512 )

**Description :** For text models, specifies the maximum number of tokens to create for each text item. "512" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );Torch Deep Learning(	Y( :Buy again? ),	X( :Potato Chip Product Review ),	Fit( Max Seq Length( 512 ) ));

```

#### Mixup Portion

**Syntaxe :** obj &lt;&lt; Mixup Portion( number=0.0 )

**Description :** Specifies portion of mixup samples to add to each training batch. For example, if Batch Size is 128 and Mixup Portion is 0.5, then 64 mixup samples are added. "0.0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Mixup Portion( 0.5 ) ) );

```

#### NMS Threshold

**Syntaxe :** obj &lt;&lt; NMS Threshold( number=0.5 )

**Description :** Specifies the non-maximum suppression threshold for predicted boxes.  Overlapping boxes with IOU values above this threshold are dropped. "0.5" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( NMS Threshold( 0.5 ) ) );

```

#### Noise Max Sigma

**Syntaxe :** obj &lt;&lt; Noise Max Sigma( number=0 )

**Description :** Maximum standard deviation of additive Gaussian noise "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Noise Max Sigma( 1 ) ) );

```

#### Nominal Image Threshold

**Syntaxe :** obj &lt;&lt; Nominal Image Threshold( number=10 )

**Description :** Specifies the cutoff for determining if images in a column are nominal or continuous.  If the number of unique pixel levels is <= this number, then the images are considered to be nominal. "10" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Image Threshold( 10 ) ) );

```

#### Nominal Loss

**Syntaxe :** obj &lt;&lt; Nominal Loss( "NLL"="NLL" )

**Description :** Specifies the loss function for nominal responses. Choose from Negative Loglikelihood (NLL). "NLL" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Loss( "NLL" ) ) );

```

#### Norm

**Syntaxe :** obj &lt;&lt; Norm( "None"|"Batch"|"Group"|"Instance"="Batch" )

**Description :** Specifies the type of normalization to apply to each MLP layer. "Batch" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm( "Batch" ) ) );

```

#### Norm First

**Syntaxe :** obj &lt;&lt; Norm First( "None"|"Batch"="Batch" )

**Description :** Specifies the type of normalization to apply to the input data to the tabular model. Batch norm effectively centers and scales each input. "Batch" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm First( "Batch" ) ) );

```

#### Num Linear

**Syntaxe :** obj &lt;&lt; Num Linear( number=1 )

**Description :** For custom convolutional and message passing models, specifies the number of linear layers at the end of Layer Sizes. "1" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Num Linear( 1 ) ) );

```

#### Optimizer

**Syntaxe :** obj &lt;&lt; Optimizer( "Adam"|"AdamW"|"SGD"|"SGDAGC"="AdamW" )

**Description :** Specifies the optimization method. Choose between Adaptive moment estimation (Adam), Adam weight decay (AdamW), Stochastic Gradient Descent (SGD), or SGD with Adaptive Gradient Clipping (SGDAGC). "AdamW" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Optimizer( "AdamW" ) ) );

```

#### Pitch Sigma

**Syntaxe :** obj &lt;&lt; Pitch Sigma( number=0 )

**Description :** Standard deviation of Gaussian pitch "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Pitch Sigma( 5 ) ) );

```

#### Pooling Layers

**Syntaxe :** obj &lt;&lt; Pooling Layers( text=Max )

**Description :** Specifies pooling layers as a space-delimited list of one of four keywords:  Max, Avg, Cat, or None. Last value carries forward if necessary. "Max" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pooling Layers( "Max" ) ) );

```

#### Pretrained Tabular

**Syntaxe :** obj &lt;&lt; Pretrained Tabular( ="None" )

**Description :** Specify a pretrained tabular model that is prepended to the Tabular Model. "None" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pretrained Tabular( "None" ) ) );

```

#### Quantiles

**Syntaxe :** obj &lt;&lt; Quantiles( text=0.9 )

**Description :** Specify a space-delimited list of quantiles to use for Quantile loss. "0.9" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Quantiles( "0.9" ) ) );

```

#### RPN NMS Threshold

**Syntaxe :** obj &lt;&lt; RPN NMS Threshold( number=0.7 )

**Description :** Specifies the non-maximum suppression threshold for region proposals.  Overlapping boxes with IOU values above this threshold are dropped. "0.7" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( RPN NMS Threshold( 0.7 ) ) );

```

#### Remove All But This Fit

**Syntaxe :** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**Description :** Removes the reports and plots for all models except this one.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Torch Deep Learning(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**Description :** Removes the entire model report.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Torch Deep Learning(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Restore From

**Syntaxe :** obj &lt;&lt; Restore From( " "=" " )

**Description :** Select a subfolder containing saved files from a previously fit model. Training for a new model will begin where this model finished. Model architectures and validation variables should match. Leave this field blank to train from scratch. " " par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Restore From( "" ) ) );

```

#### Roll Sigma

**Syntaxe :** obj &lt;&lt; Roll Sigma( number=0 )

**Description :** Standard deviation of Gaussian roll "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Roll Sigma( 5 ) ) );

```

#### Save CAMs

**Syntaxe :** obj &lt;&lt; Save CAMs

**Description :** Save gradient-based class activation maps (CAMs) as a new column.

**JMP Version ajoutée :** 18

#### Save Embeddings

**Syntaxe :** obj &lt;&lt; Save Embeddings

**Description :** Saves model embeddings (from final hidden layer) as new columns in the data table

**JMP Version ajoutée :** 18

#### Save Model

**Syntaxe :** obj &lt;&lt; Save Model

**Description :** Saves serialized modeling components to disk in a folder that you name.  You can then specify this folder in Restore From to begin training with this model.

**JMP Version ajoutée :** 18

#### Save Predicteds

**Syntaxe :** obj &lt;&lt; Save Predicteds

**Description :** Saves the predicted values in a new column in the data table.

**JMP Version ajoutée :** 18

#### Screening Method

**Syntaxe :** obj &lt;&lt; Screening Method( "ResponseScreening"|"BootstrapForest"="ResponseScreening" )

**Description :** Choose a method by which to screen Tabular Model predictors prior to fitting the model within each fold.  ResponseScreening is fast and BootstrapForest is more thorough. "ResponseScreening" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :picture ),	Fit( Screening Method( "ResponseScreening" ) ));

```

#### Screening Threshold

**Syntaxe :** obj &lt;&lt; Screening Threshold( number=0 )

**Description :** If >= 1, the number of Tabular Model predictors to select by screening.  If < 1, the predictors with cumulative portion less than the threshold. "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Screening Threshold( 1 ) ) );

```

#### Seed

**Syntaxe :** obj &lt;&lt; Seed( number=0 )

**Description :** Specifies the seed for the random number generator.  Note results may not be fully reproducible with the same seed due to the stochastic nature of certain Torch calculations. "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Seed( 0 ) ) );

```

#### Segmentation Model

**Syntaxe :** obj &lt;&lt; Segmentation Model( "UNet"|"FPN"|"LinkNet"|"DeepLabV3"|"DeepLabV3Plus"|"PAN"|"PSPNet"="UNet" )

**Description :** Specifies the image segmentation model. "UNet" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/segmentation.jmp" );Torch Deep Learning( Y( :Mask ), X( :Picture ), Sett( Segmentation Model( "VGG11_BN" ) ) );

```

#### Spline Order

**Syntaxe :** obj &lt;&lt; Spline Order( number=3 )

**Description :** For Kolmogorov Arnold B Spline networks, specifies the order of the spline used for interpolation. "3" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Spline Order( 3 ) ) );

```

#### Strides

**Syntaxe :** obj &lt;&lt; Strides( text=1 )

**Description :** For custom convolutional models, specifies the strides as a space-delimited list of positive integers. Last value carries forward if necessary. "1" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Strides( "1" ) ) );

```

#### Tabular Model

**Syntaxe :** obj &lt;&lt; Tabular Model( "MultiLayerPerceptron"|"FTTransformer"|"KolmogorovArnoldBSpline"|"CustomConv1d"|"LSTM"|"RadialBasisMachine"|"MixedModel"="MultiLayerPerceptron" )

**Description :** Specifies the tabular network architecture to use. Choose from Multilayer Perceptron (MLP), Feature Tokenized Transformer (FTTransformer), Kolmogorov Arnold Network (KolmogorovArnoldBSpline), or other options "MultiLayerPerceptron" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex ),	X( :picture ),	Fit( Tabular Model( "MultiLayerPerceptron" ) ));

```

#### Text Model

**Syntaxe :** obj &lt;&lt; Text Model( ="BertTiny" )

**Description :** Specifies the text network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. "BertTiny" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );Torch Deep Learning(	Y( :Buy again? ),	X( :Potato Chip Product Review ),	Fit( Text Model( "BERT" ) ));

```

#### Triplet Loss Weight

**Syntaxe :** obj &lt;&lt; Triplet Loss Weight( number=0.0 )

**Description :** Specifies the multiplier alpha to use in the following compound loss function: alpha \* triplet_loss + (1 - alpha) \* loss_function. Must be between 0 and 1. "0.0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Triplet Loss Weight( 0.5 ) ) );

```

#### Use Data As Knots

**Syntaxe :** obj &lt;&lt; Use Data As Knots( state=0 )

**Description :** For Radial Basis Machine models, check to use the training data as knots to form an interpolation-style model. "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning(	Y( :sex, :height ),	X( :picture ),	Fit( Tabular Model( "Radial Basis Machine" ), Use Data As Knots( 1 ) ));

```

#### VFlip Prob

**Syntaxe :** obj &lt;&lt; VFlip Prob( number=0 )

**Description :** Probability of vertical flip "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( VFlip Prob( 0.2 ) ) );

```

#### Weight Decay

**Syntaxe :** obj &lt;&lt; Weight Decay( number=0.0 )

**Description :** Specifies a penalty term multiplier of the L2 norm of the trainable parameters, which regularizes them in a way similar to ridge regression. "0.0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Weight Decay( 0.0001 ) ) );

```

#### Worker Count

**Syntaxe :** obj &lt;&lt; Worker Count( number=4 )

**Description :** Specifies the number of workers to use to load batches of data during training. A number near half the number of actual cores is usually near optimal. "4" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Worker Count( 0 ) ) );

```

#### X Slide Sigma

**Syntaxe :** obj &lt;&lt; X Slide Sigma( number=0 )

**Description :** Standard deviation of Gaussian random shift along the X axis "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( X Slide Sigma( 5 ) ) );

```

#### Y Slide Sigma

**Syntaxe :** obj &lt;&lt; Y Slide Sigma( number=0 )

**Description :** Standard deviation of Gaussian random shift along the Y axis "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Y Slide Sigma( 5 ) ) );

```

#### Yaw Sigma

**Syntaxe :** obj &lt;&lt; Yaw Sigma( number=0 )

**Description :** Standard deviation of Gaussian yaw "0" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Yaw Sigma( 5 ) ) );

```

