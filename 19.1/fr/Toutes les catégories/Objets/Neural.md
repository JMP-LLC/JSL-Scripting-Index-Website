# Neural



## Colonnes

### By

**Syntaxe :** obj = Neural(...&lt;By( column(s) )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);

```

### Factor

**Syntaxe :** obj = Neural(...Factor( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les régresseurs.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### Freq

**Syntaxe :** obj = Neural(...&lt;Freq( column )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Freq( :_freqcol ),	Go);

```

### Response

**Syntaxe :** obj = Neural(...Response( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la ou les réponses que vous souhaitez analyser.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### Validation

**Syntaxe :** obj = Neural(...&lt;Validation( column )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie une colonne numérique qui définit les échantillons de validation. Cette colonne doit contenir au maximum trois valeurs distinctes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ));obj << Go;

```

### X

**Syntaxe :** obj = Neural(...X( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les régresseurs.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### Y

**Syntaxe :** obj = Neural(...Y( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie la ou les réponses que vous souhaitez analyser.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

## Constructeurs associés

### Neural

**Syntaxe :** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**Description :** Prévoit une ou plusieurs variables de réponse à l’aide d’une fonction flexible des variables d’entrée. La structure flexible inclut les superpositions et les fonctions en S.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

## Messages d'éléments

### Fit

**Syntaxe :** obj &lt;&lt; Fit( NTanH|NLinear|NTanH2|NLinear2|NGaussian|NGaussian2( number ) )

**Description :** Spécifie et ajuste la structure des couches masquées du modèle neuronal en fonction des données. Les couches multiples et les fonctions d’activation non-TanH ne sont disponibles que dans JMP Pro. Pour spécifier les couches multiples et les fonctions d’activation, séparez les arguments par des virgules.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Fit( NTanH( 4 ) );

```

### Go

**Syntaxe :** obj &lt;&lt; Go

**Description :** Démarre la résolution du modèle de réseau neuronal.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));Wait( 1 );obj << Go;

```

### Informative Missing

**Syntaxe :** obj = Neural(...Informative Missing( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Permet le codage et l’imputation des valeurs manquantes. Si cette option n’est pas sélectionnée, les lignes comportant des valeurs manquantes sont ignorées.



Pour les variables continues, les valeurs manquantes sont remplacées par la moyenne de la variable. Une variable indicatrice de valeur manquante est également créée et incluse dans le modèle.



Pour les variables catégorielles, les valeurs manquantes ne sont pas modifiées mais sont traitées comme un autre niveau de la variable dans le modèle. Cette option n&apos;est disponible que dans JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Neural( Y( :weight ), X( :height, :age ), Informative Missing( 1 ), Go );

```

### Learning Rate

**Syntaxe :** obj &lt;&lt; Learning Rate( fraction )

**Description :** Spécifie le facteur de mise à l&apos;échelle pour le boosting. Un taux d&apos;apprentissage proche de 1 entraîne une convergence plus rapide sur un modèle final, avec une tendance également plus élevée à surajuster les données. Cette option n&apos;est disponible que dans JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	N Boost( 2 ));obj << Learning Rate( 0.2 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Multithreading

**Syntaxe :** obj = Neural(...Multithreading( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Divise les calculs entre les chaînes disponibles sur l’ordinateur. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 0 ));obj << Go;

```

### N Boost

**Syntaxe :** obj &lt;&lt; N Boost( number )

**Description :** Spécifie le nombre maximum de modèles utilisés pour le boosting. Cette option n&apos;est disponible que dans JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << N Boost( 2 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Penalty Method

**Syntaxe :** obj &lt;&lt; Penalty Method( "Carré"|"Absolu"|"Décroissance pondérée"|"Sans pénalité" )

**Description :** Définit une méthode de pénalité pour imposer une pénalité sur la vraisemblance lors du processus d&apos;ajustement. Un paramètre de pénalité atténue la tendance de surajustement des données dans les réseaux neuronaux. L&apos;option Carré fonctionne bien si vous estimez que la plupart de vos variables X contribuent à la capacité de prédiction du modèle. Les options Absolu et Décroissance pondérée fonctionnent bien si vous disposez d&apos;un gros volume de variables X et que vous pensez qu&apos;un petit nombre d&apos;entre elles contribuent plus que les autres à la prédiction.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Penalty Method( "Absolute" );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Robust Fit

**Syntaxe :** obj &lt;&lt; Robust Fit( state=0|1 )

**Description :** Effectue l&apos;apprentissage du modèle à l&apos;aide des moindres écarts absolus plutôt que des moindres carrés. Cette option est utile si vous souhaitez minimiser l&apos;impact des valeurs aberrantes de la réponse. Cette option n&apos;est disponible que pour les réponses continues dans JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Robust Fit( 1 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Set Random Seed

**Syntaxe :** obj = Neural(...Set Random Seed( number )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie une graine aléatoire utilisée pour reproduire les valeurs de démarrage et l&apos;affectation de la validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ));Wait( 1 );obj << Go;

```

### Transform Covariates

**Syntaxe :** obj &lt;&lt; Transform Covariates( state=0|1 )

**Description :** Transforme toutes les variables continues à la quasi normale à l’aide de la distribution de Johnson Su ou de Johnson Sb. La transformation des variables continues aide à atténuer les effets négatifs des valeurs aberrantes ou des distributions très dissymétriques. Cette option n&apos;est disponible que dans JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Transform Covariates( 1 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Validation Method

**Syntaxe :** obj = Neural(...Validation Method( "Excluded Rows Holdback"|"Holdback", &lt;fraction = 0.3333&gt;|"KFold", &lt;number = 5&gt; )...);

**Description :** Spécifie la méthode utilisée pour la validation du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Method( "Holdback", 0.4 ),	Go);

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntaxe :** obj = Neural(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Neural Fit

### Messages d'éléments

#### Categorical Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Categorical Profiler( state=0|1 ))

**Description :** Affiche ou masque un profileur de prédiction avec toutes les réponses catégorielles combinées en une seule ligne du profileur.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Categorical Profiler( 1 ));

```

#### Contour Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**Description :** Affiche ou masque le profileur d&apos;isoréponses, qui représente graphiquement les isoréponses de la réponse pour deux facteurs à la fois. Disponible uniquement lorsque le modèle contient plusieurs facteurs continus.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Contour Profiler( 1 ));

```

#### Decision Threshold

**Syntaxe :** obj &lt;&lt; fit([number] &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) ))

**Description :** Affiche ou masque la distribution des probabilités ajustées ainsi que la table des valeurs prédites versus des valeurs réelles pour chaque modèle. Vous pouvez modifier le seuil de probabilité afin d&apos;explorer l&apos;impact des différents seuils sur les résultats de classification.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));Wait( 0 );obj << (Fit[1] << Decision Threshold( 1 ));Wait( 1 );obj << (Fit[1] << Decision Threshold( 1, Set Probability Threshold( .7 ) ));

```

#### Diagram

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Diagram( state=0|1 ))

**Description :** Affiche ou masque un diagramme représentant la structure de la couche masquée.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Diagram( 1 ));

```

#### Get Average Absolute Error Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Test)

**Description :** Renvoie la statistique Écart absolu moyen pour l&apos;échantillon test. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));ae = obj << (Fit[1] << Get Average Absolute Error Test);Show( ae );

```

#### Get Average Absolute Error Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Training)

**Description :** Renvoie la statistique Écart absolu moyen pour l&apos;échantillon d&apos;apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));ae = obj << (Fit[1] << Get Average Absolute Error Training);Show( ae );

```

#### Get Average Absolute Error Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Validation)

**Description :** Renvoie la statistique Écart absolu moyen pour l&apos;échantillon de validation. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));ae = obj << (Fit[1] << Get Average Absolute Error Validation);Show( ae );

```

#### Get Average Log Error Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Test)

**Description :** Renvoie la moyenne de -log(p), où p est égale à la probabilité que la réponse donnée par le modèle se produise réellement, pour l’ensemble de test. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));avg = obj << (Fit[1] << Get Average Log Error Test);Show( avg );

```

#### Get Average Log Error Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Training)

**Description :** Renvoie la moyenne de -log(p), où p est égale à la probabilité que la réponse donnée par le modèle se produise réellement, pour l’ensemble d’apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));avg = obj << (Fit[1] << Get Average Log Error Training);Show( avg );

```

#### Get Average Log Error Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Validation)

**Description :** Renvoie la moyenne de -log(p), où p est égale la probabilité que la réponse donnée par le modèle se produise réellement, pour l’ensemble de validation. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));avg = obj << (Fit[1] << Get Average Log Error Validation);Show( avg );

```

#### Get Confusion Matrix Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Test)

**Description :** Renvoie la matrice de confusion de l&apos;ensemble de test. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cm = obj << (Fit[1] << Get Confusion Matrix Test);Show( cm );

```

#### Get Confusion Matrix Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Training)

**Description :** Renvoie la matrice de confusion de l&apos;ensemble d’apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cm = obj << (Fit[1] << Get Confusion Matrix Training);Show( cm );

```

#### Get Confusion Matrix Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Validation)

**Description :** Renvoie la matrice de confusion de l&apos;ensemble de validation. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cm = obj << (Fit[1] << Get Confusion Matrix Validation);Show( cm );

```

#### Get Confusion Rates Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Test)

**Description :** Renvoie les taux de confusion de l&apos;ensemble de test. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cr = obj << (Fit[1] << Get Confusion Rates Test);Show( cr );

```

#### Get Confusion Rates Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Training)

**Description :** Renvoie les taux de confusion de l&apos;ensemble d’apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cr = obj << (Fit[1] << Get Confusion Rates Training);Show( cr );

```

#### Get Confusion Rates Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Validation)

**Description :** Renvoie les taux de confusion de l&apos;ensemble de validation. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cr = obj << (Fit[1] << Get Confusion Rates Validation);Show( cr );

```

#### Get Gen RSquare Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Test)

**Description :** Renvoie la statistique R carré généralisé pour l&apos;échantillon test. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get Gen RSquare Test);Show( rt );

```

#### Get Gen RSquare Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Training)

**Description :** Renvoie la statistique R carré généralisé pour l&apos;échantillon d&apos;apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get Gen RSquare Training);Show( rt );

```

#### Get Gen RSquare Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Validation)

**Description :** Renvoie la statistique R carré généralisé pour l&apos;échantillon de validation. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get Gen RSquare Validation);Show( rt );

```

#### Get MM SAS DATA Step

**Syntaxe :** text = obj &lt;&lt; (fit[number] &lt;&lt; Get MM SAS Data Step)

**Description :** Crée du code SAS que vous pouvez enregistrer dans le gestionnaire de modèles SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));code = obj << (Fit[1] << Get MM SAS Data Step);

```

#### Get Measures

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Measures)

**Description :** Renvoie les mesures d&apos;ajustement résumées à partir du modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Diagram( 1 ));obj << (Fit[1] << Get Measures);

```

#### Get Misclassification Rate Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Test)

**Description :** Renvoie le taux d&apos;erreur de classification de l&apos;ensemble de test. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));mr = obj << (Fit[1] << Get Misclassification Rate Test);Show( mr );

```

#### Get Misclassification Rate Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Training)

**Description :** Renvoie le taux d&apos;erreur de classification de l&apos;ensemble d’apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));mrt = obj << (Fit[1] << Get Misclassification Rate Training);Show( mrt );

```

#### Get Misclassification Rate Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Validation)

**Description :** Renvoie le taux d&apos;erreur de classification de l&apos;ensemble de validation. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));mrt = obj << (Fit[1] << Get Misclassification Rate Validation);Show( mrt );

```

#### Get NBoost

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get NBoost)

**Description :** Renvoie le nombre de modèles utilisés pour le boosting.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	N Boost( 2 ),	Go);n = obj << (fit[1] << Get NBoost);Show( n );

```

#### Get Precision Recall Area Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Test)

**Description :** Renvoie la zone sous la courbe précision-rappel pour l&apos;ensemble de test. La courbe précision-rappel doit être affichée avant le calcul de la zone. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));ra = obj << (Fit[1] << Get Precision Recall Area Test);Show( ra );

```

#### Get Precision Recall Area Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Training)

**Description :** Renvoie la zone sous la courbe précision-rappel pour l&apos;ensemble d&apos;apprentissage. La courbe précision-rappel doit être affichée avant le calcul de la zone.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));ra = obj << (Fit[1] << Get Precision Recall Area Training);Show( ra );

```

#### Get Precision Recall Area Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Validation)

**Description :** Renvoie la zone sous la courbe précision-rappel pour l&apos;ensemble de validation. La courbe précision-rappel doit être affichée avant le calcul de la zone. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));ra = obj << (Fit[1] << Get Precision Recall Area Validation);Show( ra );

```

#### Get Prediction Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**Description :** Construit un script pour créer une colonne de formule de prévision et la renvoie.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Get Prediction Formula);

```

#### Get RMS Error Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Test)

**Description :** Renvoie la racine carrée du carré moyen des erreurs de test. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));re = obj << (Fit[1] << Get RMS Error Test);Show( re );

```

#### Get RMS Error Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Training)

**Description :** Renvoie la racine carrée du carré moyen des erreurs d’apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));re = obj << (Fit[1] << Get RMS Error Training);Show( re );

```

#### Get RMS Error Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Validation)

**Description :** Renvoie la racine carrée du carré moyen des erreurs de validation. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));re = obj << (Fit[1] << Get RMS Error Validation);Show( re );

```

#### Get ROC Area Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Test)

**Description :** Renvoie l&apos;aire en-dessous de la courbe ROC pour les données de test. La courbe ROC doit être affichée avant que l&apos;aire ne soit calculée. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));ra = obj << (Fit[1] << Get ROC Area Test);Show( ra );

```

#### Get ROC Area Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Training)

**Description :** Renvoie la zone au-dessous de la courbe ROC relative au jeu de données d&apos;apprentissage. La courbe ROC doit être affichée avant que la zone ne soit calculée.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));ra = obj << (Fit[1] << Get ROC Area Training);Show( ra );

```

#### Get ROC Area Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Validation)

**Description :** Renvoie la zone au-dessous de la courbe ROC relative au jeu de données de validation. La courbe ROC doit être affichée avant que la zone ne soit calculée. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));ra = obj << (Fit[1] << Get ROC Area Validation);Show( ra );

```

#### Get RSquare Test

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Test)

**Description :** Renvoie la statistique R carré de l&apos;entropie pour l&apos;échantillon test. Cette option n&apos;est disponible que dans JMP Pro, lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get RSquare Test);Show( rt );

```

#### Get RSquare Training

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Training)

**Description :** Renvoie la statistique R carré de l&apos;entropie pour l&apos;échantillon d&apos;apprentissage.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get RSquare Training);Show( rt );

```

#### Get RSquare Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Validation)

**Description :** Renvoie la statistique R carré de l&apos;entropie pour l&apos;échantillon de validation. Cette option n&apos;est disponible que lorsqu&apos;un échantillon de validation est utilisé.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get RSquare Validation);Show( rt );

```

#### Get SAS DATA Step

**Syntaxe :** text = obj &lt;&lt; (fit[number] &lt;&lt; Get SAS Data Step)

**Description :** Crée le code SAS que vous pouvez utiliser pour évaluer le score d’un nouveau jeu de données.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));code = obj << (Fit[1] << Get SAS Data Step);

```

#### Get Seconds

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Get Seconds)

**Description :** Renvoie les secondes passées pour effectuer l’analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));s = obj << (Fit[1] << Get Seconds);Show( s );

```

#### Lift Curve

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**Description :** Affiche ou masque la courbe Lift. La courbe Lift représente le lift en fonction de la proportion des observations et propose une autre vision de la capacité prédictive d&apos;un modèle. Si vous avez utilisé la validation, la courbe Lift s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Lift Curve( 1 ));

```

#### Make SAS DATA Step

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Make SAS Data Step)

**Description :** Crée le code SAS que vous pouvez utiliser pour évaluer le score d’un nouveau jeu de données.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Make SAS Data Step);

```

#### Plot Actual by Predicted

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual by Predicted( state=0|1 ))

**Description :** Affiche ou masque un graphique avec les valeurs observées sur l&apos;axe vertical et les valeurs prédites sur l&apos;axe horizontal. Cette option n&apos;est disponible que pour les réponses continues. Si vous avez utilisé la validation, un graphique est affiché pour chaque échantillon d&apos;apprentissage, de validation et de test.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Plot Actual By Predicted( 1 ));

```

#### Plot Residual by Predicted

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual by Predicted( state= 0|1 ))

**Description :** Affiche ou masque un graphique avec les résidus sur l&apos;axe vertical et les valeurs prédites sur l&apos;axe horizontal. Cette option n&apos;est disponible que pour les réponses continues. Si vous avez utilisé la validation, un graphique est affiché pour chaque échantillon d&apos;apprentissage, de validation et de test.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Plot Residual By Predicted( 1 ));

```

#### Precision Recall Curve

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**Description :** Affiche ou masque la courbe précision-rappel, qui contient une courbe pour chaque niveau de la variable de réponse. Une courbe précision-rappel représente les valeurs de précision en fonction des valeurs de rappel pour différents seuils. Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**Description :** Affiche ou masque le profileur de prévision, qui permet de donner pour chaque facteur la coupe de la surface de prévision. Le profileur de prévision est doté de fonctions d&apos;optimisation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Profiler( 1 ));

```

#### Publish Prediction Formula

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**Description :** Crée des formules de prédiction et les enregistre sous la forme de scripts de colonne de formule dans la plate-forme Dépôt des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Publish Prediction Formula);

```

#### ROC Curve

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**Description :** Affiche ou masque la courbe ROC pour chaque niveau de la variable de réponse. La courbe ROC est un graphique de la sensibilité par rapport à (1 - spécificité). Si vous avez utilisé la validation, un graphique s&apos;affiche pour chaque échantillon test, d&apos;apprentissage et de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));

```

#### Remove Fit

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**Description :** Supprime le rapport du modèle tout entier.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Fast Formulas

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Fast Formulas)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La colonne contient une formule pour la réponse prédite qui comprend les formules incorporées pour les nœuds de la couche cachée. Cette option produit des formules évaluées rapidement, mais qui ne peuvent pas être utilisées par la version interactive du profileur.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Fast Formulas);

```

#### Save Formulas

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Formulas)

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données. Les nœuds de la réponse prédite et de la couche cachée ont des colonnes de formule distinctes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Formulas);

```

#### Save Profile Formulas

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Profile Formulas)

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La colonne contient une formule pour la réponse prédite qui comprend les formules incorporées pour les nœuds de la couche cachée. Cette option produit des formules qui peuvent être utilisées par la version interactive du profileur.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Profile Formulas);

```

#### Save Transformed Covariates

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Transformed Covariates)

**Description :** Enregistre de nouvelles colonnes de formule dans la table de données. Les nouvelles colonnes contiennent les formules utilisées pour transformer les covariables. Cette option n&apos;est disponible que dans JMP Pro, lorsque l&apos;option Transformer les covariables est spécifiée au lancement.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Transform Covariates( 1 ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Transformed Covariates);

```

#### Save Validation

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation)

**Description :** Enregistre une nouvelle colonne dans la table de données. La colonne identifie les lignes utilisées dans l&apos;échantillon d&apos;apprentissage et l&apos;échantillon de validation.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Validation);

```

#### Show Estimates

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Show Estimates( state=0|1 ))

**Description :** Affiche ou masque un rapport des estimations des paramètres.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Show Estimates( 1 ));

```

#### Surface Profiler

**Syntaxe :** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**Description :** Affiche ou masque une surface de réponse 3D. Cette option est uniquement disponible pour les modèles contenant au moins deux variables X.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Surface Profiler( 1 ));

```

