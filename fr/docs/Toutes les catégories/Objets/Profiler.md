# Profiler



## Colonnes

### Noise Factors

**Syntaxe :** obj = Profiler(...&lt;Noise Factors( column(s) )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les facteurs de bruit, qui doivent être des colonnes qui servent de constituants aux colonnes de formules. Les facteurs de bruit sont utilisés pour étudier la robustesse (ou la monotonie) par rapport aux variations de ces facteurs. Le profileur résultant inclut les dérivées des formules par rapport aux facteurs de bruit.

**Exemple de profileur**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

**Exemple de profileur de mélange**

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

**Exemple de profileur d'isoréponses**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

**Exemple de profileur sur mesure**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

### Prediction Formula

**Syntaxe :** obj = Profiler(...Prediction Formula( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les colonnes de réponse qui contiennent des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));

```

### Y

**Syntaxe :** obj = Profiler(...Y( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les colonnes de réponse qui contiennent des formules.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));

```

## Constructeurs associés

### Profiler

**Syntaxe :** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**Description :** Produit un graphique interactif qui vous permet d&apos;observer les modifications de la réponse prévue lorsque les paramètres des facteurs sont modifiés. Pour chaque facteur, le profileur affiche les traces de prévision qui sont basées sur les contraintes linéaires et les formules de prévision enregistrées et indique comment la réponse change par rapport à ce facteur. L&apos;argument Étendre correspond à l&apos;option Étendre les formules intermédiaires dans la fenêtre de lancement.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));

```

**Exemple 2**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );colNum = N Items( dt << Get Column Names );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Screening" ),	Run());obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );obj << Close Window( 1 );predCol = Column( dt, colNum + 1 );stderrCol = Column( dt, colNum + 2 );dt << Profiler(	Y( predCol, stderrCol ),	Profiler( 1, Confidence Intervals( 1 ), ),	Use SE Formula( 1 ));

```

**Exemple 3**

```jsl

dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

## Messages d'éléments

### Adapt Y Axis

**Syntaxe :** obj &lt;&lt; Adapt Y Axis( state=0|1 )

**Description :** Remet à l&apos;échelle l&apos;axe vertical si la réponse est hors de la plage de l&apos;axe, de manière à ce que la plage de la réponse soit incluse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Maximize Desirability;Wait( 1 );obj << Adapt Y Axis;

```

### Add Shapley graph scripts to data table

**Syntaxe :** obj &lt;&lt; Add Shapley graph scripts to data table( state=0|1 )

**Description :** Ajoute des scripts de diagramme en barres du constructeur de graphiques JSL pour les valeurs de Shapley par lignes pour chaque réponse dans le modèle.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );obj = dt << Neural(	Y( :Percent Body Fat ),	X(		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n	),	Validation Method( :Validation ),	Set Random Seed( 123 ),	Fit( NTanH( 3 ) ));obj << (Fit[1] << Profiler(	1,	Add Shapley graph scripts to data table( 1 ),	Save Shapley Values));

```

### Animation

**Syntaxe :** obj &lt;&lt; Animation( &lt;Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )&gt;, &lt;Speed(ticks)&gt;, &lt;Go&gt;, &lt;Stop&gt; )

**Description :** Démarre ou arrête l&apos;animation du profileur. Vous pouvez également spécifier comment l&apos;animation parcourt les combinaisons de facteurs.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Animation( Tour Type( "Sequential" ), Go );Wait( 3 );obj << Animation( "Stop" );

```

### Append Settings to Table

**Syntaxe :** obj &lt;&lt; Append Settings to Table

**Description :** Enregistre les paramètres du profileur actuel dans une nouvelle ligne à la fin de la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Append Settings to Table;

```

### Arrange in Rows

**Syntaxe :** obj &lt;&lt; Arrange in Rows( number )

**Description :** Spécifie le nombre de graphiques qui s&apos;affichent dans une ligne.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));Wait( 2 );obj << Arrange in Rows( 2 );

```

### Broadcast Factor Settings

**Syntaxe :** obj &lt;&lt; Broadcast Factor Settings

**Description :** Envoie les paramètres du facteur du profileur actuel à tous les autres profileurs. Cette option ne lie pas les profileurs.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ),	Term Value(		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )	));obj << Contour Profiler( 1 );Wait( 1 );obj << Broadcast Factor Settings;

```

### Colorize

**Syntaxe :** obj &lt;&lt; Colorize( matrix )

**Description :** Spécifie une matrice des proportions entre 0, pour non coloré, et 1 pour rouge foncé. Les lignes et les colonnes de la matrice correspondent aux variables Y et X du profileur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Colorize( [.0 .4 .5, .1 .2 .3, .4 .5 .3, .5 .1 .1] );

```

### Colorize Profiler

**Syntaxe :** subobj &lt;&lt; Colorize Profiler

**Description :** Colorie les cellules dans le profileur selon les indices d&apos;importance de l&apos;effet total en utilisant une échelle d&apos;intensité du rouge au blanc.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fit = Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);fit << Save Formulas;obj = Profiler( Y( :Predicted Y ), Expand );obj << Independent Uniform Inputs( 1 );Wait( 1 );subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<get scriptable object);subobj << Colorize Profiler;

```

### Combinations

**Syntaxe :** obj &lt;&lt; Combinations( "Mixte"|"Bivariée"|"Multivariée" )

**Description :** Spécifie les types d&apos;interactions affichées comme courbes d&apos;interaction superposées dans le profileur.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Overlaid Interactions( 1 );Wait( 1 );obj << Combinations( "Many-Way" );

```

### Compute Shapley values for all rows

**Syntaxe :** obj &lt;&lt; Compute Shapley values for all rows( state=0|1 )

**Description :** Calcule les valeurs de Shapley pour toutes les lignes dans la table de données, exclues et non exclues.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );r << Exclude;obj = dt << Neural(	Y( :Percent Body Fat ),	X(		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n	),	Validation Method( :Validation ),	Set Random Seed( 123 ),	Fit( NTanH( 3 ) ));obj << (Fit[1] << Profiler(	1,	Compute Shapley values for all rows( 1 ),	Save Shapley Values));

```

### Conditional Predictions

**Syntaxe :** obj &lt;&lt; Conditional Predictions( state=0|1 )

**Description :** Inclut les effets aléatoires lors de la formulation de la valeur prévue et des profils. Cette option est uniquement disponible dans la méthode d&apos;analyse statistique du modèle linéaire mixte de la plate-forme Modèle linéaire lorsque les effets aléatoires sont inclus dans le modèle.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );obj1 = dt << Run Script( "Repeated Measures Model" );obj1 << Profiler( Conditional Predictions( 1 ) );

```

### Confidence Intervals

**Syntaxe :** obj &lt;&lt; Confidence Intervals( state=0|1 )

**Description :** Affiche ou masque les intervalles de confiance à 95 % pour la moyenne simulée sur les courbes du graphique du profileur. Disponible uniquement si la formule Erreur standard est spécifiée dans la fenêtre de lancement.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj1 = dt << Run Script( "RSM for 4 Responses" );obj1 << Prediction Formula;obj1 << StdErr Pred Formula;obj = dt << Profiler(	Y(		:Pred Formula ABRASION 2, :Pred Formula MODULUS 2, :Pred SE ABRASION,		:Pred SE MODULUS	));Wait( 1 );obj << Confidence Intervals( 0 );

```

### Contour Profiler

**Syntaxe :** obj &lt;&lt; Contour Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur d&apos;isoréponses.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Contour Profiler( 1 );

```

### Converge Limit

**Syntaxe :** obj &lt;&lt; Converge Limit( number )

**Description :** Spécifie le critère de convergence de l&apos;algorithme d&apos;optimisation. Si le critère de convergence est inférieur à cette valeur sur deux itérations consécutives, l&apos;algorithme s&apos;arrête.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Converge limit( 0.0001 );obj << Optimize;

```

### Copy Settings Script

**Syntaxe :** obj &lt;&lt; Copy Settings Script

**Description :** Copie les paramètres actuels du facteur dans le presse-papiers. Les paramètres peuvent ensuite être collés dans un autre profileur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set to Data in Row( 4 );obj << Copy Settings Script;obj2 = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj2 << Paste Settings Script;

```

### Custom Profiler

**Syntaxe :** obj &lt;&lt; Custom Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur personnalisé.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Custom Profiler( 1 );

```

### Data Points

**Syntaxe :** obj &lt;&lt; Data Points( state=0|1 )

**Description :** Affiche ou masque des points de données individuels dans le graphique Profileur de prévision. Les points de données s&apos;estompent avec la distance à laquelle ils se trouvent du plan de chaque profileur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Data Points( 1 );

```

### Default N Grid Points

**Syntaxe :** obj &lt;&lt; Default N Grid Points( number )

**Description :** Définit le nombre de niveaux pour chaque facteur continu.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Default N Grid Points( 5 );

```

### Default N Levels

**Syntaxe :** obj &lt;&lt; Default N Levels( number )

### Dependent Resampled Inputs

**Syntaxe :** obj &lt;&lt; Dependent Resampled Inputs( state=0|1 )

**Description :** Calcule les indices utilisés dans l&apos;option Évaluer l&apos;importance des variables en rééchantillonnant la table de données en présumant que les entrées sont dépendantes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fit = Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);fit << Save Formulas;obj = Profiler( Y( :Predicted Y ), Expand );obj << Dependent Resampled Inputs( 1 );

```

### Design Space

**Syntaxe :** obj &lt;&lt; Design Space( state=0|1 )

### Design Space Profiler

**Syntaxe :** obj &lt;&lt; Design Space Profiler( state=0|1 )

**Description :** Lance le profileur d&apos;espace expérimental, qui aide au mappage des limites de spécifications sur les variables Y avec les limites de spécification des variables X.

```jsl

dt = Open( "$Sample_Data/Tiretread.jmp" );dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 1 )} );dt:Pred Formula ELONG << Set Property(	"Spec Limits",	{LSL( 350 ), USL( 500 ), Show Limits( 1 )});dt:Pred Formula HARDNESS << Set Property(	"Spec Limits",	{LSL( 65 ), USL( 75 ), Show Limits( 1 )});dt:Pred Formula ABRASION << Set Property(	"Predicting",	{:ABRASION, Creator( "Fit Least Squares" ), RMSE( 3 )});dt:Pred Formula MODULUS << Set Property(	"Predicting",	{:MODULUS, Creator( "Fit Least Squares" ), RMSE( 100 )});dt:Pred Formula ELONG << Set Property(	"Predicting",	{:ELONG, Creator( "Fit Least Squares" ), RMSE( 10 )});dt:Pred Formula HARDNESS << Set Property(	"Predicting",	{:HARDNESS, Creator( "Fit Least Squares" ), RMSE( .6 )});Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Profiler( 1, Desirability Functions( 0 ), Design Space Profiler( 1 ) ));

```

### Desirability Functions

**Syntaxe :** obj &lt;&lt; Desirability Functions( state=0|1 )

**Description :** Affiche ou masque les fonctions de désirabilité, qui sont utiles lors de l&apos;optimisation sur plusieurs réponses.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );

```

### Edit Constraints

**Syntaxe :** obj &lt;&lt; Edit Constraints

**Description :** Ajoute, modifie ou supprime les contraintes linéaires.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Edit Constraints;

```

### Extrapolation Control Option

**Syntaxe :** obj &lt;&lt; Extrapolation Control Option( "Désactivé"|"Activé"|"Avertissement activé" )

**Description :** Spécifie si la commande d&apos;extrapolation est activée ou désactivée, ou si seuls les avertissements de commande d&apos;extrapolation sont activés.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Profiler( Extrapolation Control Option( "On" ) );

```

### Extrapolation Details

**Syntaxe :** obj &lt;&lt; Extrapolation Details( state=0|1 )

**Description :** Affiche ou masque les détails de contrôle d&apos;extrapolation qui donnent la métrique d&apos;extrapolation du point actif et le seuil d&apos;extrapolation.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Fitness.jmp" );obj = dt << Fit Model(	Y( :Oxy ),	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run);obj << Profiler( Extrapolation Control Option( "On" ), Extrapolation Details( 1 ) );

```

### Extrapolation Type Option

**Syntaxe :** obj &lt;&lt; Extrapolation Type Option( "T2 régularisé"|"K plus proches voisins" )

**JMP Version ajoutée :** 18

### Formulas for OPTMODEL

**Syntaxe :** obj &lt;&lt; Formulas for OPTMODEL

**Description :** Enregistre les formules de prévision du modèle dans un nouveau fichier sous forme d’instructions SAS pour la procédure PROC OPTMODEL.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Formulas for OPTMODEL;

```

### Get Constraints

**Syntaxe :** obj &lt;&lt; Get Constraints

**Description :** Renvoie une liste de contraintes de facteur.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Profiler(	Y( :Pred Formula Y ),	Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), ));obj << Get Constraints;

```

### Get Desirability

**Syntaxe :** obj &lt;&lt; Get Desirability

**Description :** Renvoie les paramètres de désirabilité actuels.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );d = obj << Get Desirability;Show( d );

```

### Get Factor Settings

**Syntaxe :** obj &lt;&lt; Get Factor Settings

**Description :** Renvoie une liste des paramètres de facteur actuels.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Get Factor Settings;

```

### Get Factor Settings Script

**Syntaxe :** obj &lt;&lt; Get Factor Settings Script

**Description :** Renvoie les paramètres du facteur actuel sous la forme d&apos;une expression pouvant être utilisée dans un script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Get Factor Settings Script;

```

### Get Main Indices

**Syntaxe :** obj &lt;&lt; Get Main Indices

**Description :** Enregistre les indices principaux de l&apos;analyse Évaluer l&apos;importance des variables dans un nouveau fichier en tant que déclarations SAS pour PROC OPTMODEL.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fit = Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);fit << Save Formulas;obj = Profiler( Y( :Predicted Y ), Expand );obj << Independent Resampled Inputs( 1 );obj << Get Main Indices;

```

### Get Simulator

**Syntaxe :** obj &lt;&lt; Get Simulator

**Description :** Renvoie une référence au simulateur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ),		SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << Add Random Noise( 1 ),		Pred Formula HARDNESS << Add Random Weighted Noise( 1 )	));obj2 = obj << Get Simulator;obj2 << Simulation Experiment;

```

### Get Total Indices

**Syntaxe :** obj &lt;&lt; Get Total Indices

**Description :** Enregistre les indices totaux de l&apos;analyse Évaluer l&apos;importance des variables dans un nouveau fichier en tant que déclarations SAS pour PROC OPTMODEL.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fit = Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);fit << Save Formulas;obj = Profiler( Y( :Predicted Y ), Expand );obj << Independent Resampled Inputs( 1 );obj << Get Total Indices;

```

### Graph Spacing

**Syntaxe :** obj &lt;&lt; Graph Spacing( number )

**Description :** Définit la largeur de l&apos;espace horizontal entre les panneaux du graphique.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));Wait( 2 );obj << Graph Spacing( 20 );

```

### Hide Desirability Row

**Syntaxe :** obj &lt;&lt; Hide Desirability Row( state=0|1 )

**Description :** Masque ou affiche la ligne des profils de désirabilité.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Desirability Functions( 1 );Wait( 1 );obj << Hide Desirability Row( 1 );

```

### Hide Y Variables

**Syntaxe :** obj &lt;&lt; Hide Y Variables( Y columns )

**Description :** Spécifie les variables de réponse que vous souhaitez afficher ou masquer dans le profileur.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 0.5 );obj << Hide Y Variables( :Pred Formula MODULUS );

```

### Independent Resampled Inputs

**Syntaxe :** obj &lt;&lt; Independent Resampled Inputs( state=0|1 )

**Description :** Calcule les indices utilisés dans l&apos;option Évaluer l&apos;importance des variables en rééchantillonnant la table de données en présumant que les entrées sont indépendantes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fit = Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);fit << Save Formulas;obj = Profiler( Y( :Predicted Y ), Expand );obj << Independent Resampled Inputs( 1 );

```

### Independent Uniform Inputs

**Syntaxe :** obj &lt;&lt; Independent Uniform Inputs( state=0|1 )

**Description :** Calcule les indices utilisés dans l&apos;option Évaluer l&apos;importance des variables en rééchantillonnant la table de données en présumant que les entrées ont des distributions uniformes indépendantes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fit = Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);fit << Save Formulas;obj = Profiler( Y( :Predicted Y ), Expand );obj << Independent Uniform Inputs( 1 );

```

### Interaction Profiler

**Syntaxe :** obj &lt;&lt; Interaction Profiler( state=0|1 )

**Description :** Affiche ou masque un profileur d&apos;interactions pour chaque réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Interaction Profiler( 1 );

```

### Linearly Constrained Inputs

**Syntaxe :** obj &lt;&lt; Linearly Constrained Inputs( state=0|1 )

**Description :** Calcule les indices utilisés dans l&apos;option Évaluer l&apos;importance des variables en rééchantillonnant la table de données sur une distribution uniforme définie par des contraintes linéaires.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Script( "Constraint", {1 * :LDL + 1 * :HDL <= 250} );fit = Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);fit << Save Formulas;obj = Profiler( Y( :Predicted Y ), Expand );obj << Linearly Constrained Inputs( 1 );

```

### Link Profilers

**Syntaxe :** obj &lt;&lt; Link Profilers( state=0|1 )

**Description :** Lie ensemble tous les profileurs dans un même rapport, de manière à ce que toute modification de valeur d’un facteur dans un profileur se reflète dans les autres profileurs.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Prediction Profiler( 1 );obj << Contour Profiler( 1 );obj << Link Profilers( 1 );Wait( 1 );obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Load Constraints from Table

**Syntaxe :** obj &lt;&lt; Load Constraints from Table

**Description :** Charge les contraintes linéaires à partir d&apos;une table de données.

```jsl

dtlc = New Table( "Linear Constraints",	Add Rows( 2 ),	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) ));dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Load Constraints from Table( dtlc );obj << Profile at Boundary( "Stop at Boundaries" );

```

### Log Iterations

**Syntaxe :** obj &lt;&lt; Log Iterations( state=0|1 )

**Description :** Crée une nouvelle table de données qui contient des itérations de l&apos;algorithme d&apos;optimisation.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Log Iterations( 1 );obj << Optimize;

```

### Max Cycles

**Syntaxe :** obj &lt;&lt; Max Cycles( number )

**Description :** Spécifie le nombre maximum de cycles dans chaque passage de l&apos;algorithme d&apos;optimisation.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Max Cycles( 5 );obj << Optimize;

```

### MaxIter

**Syntaxe :** obj &lt;&lt; MaxIter( number )

**Description :** Spécifie le nombre maximum d&apos;itérations dans chaque passage de l&apos;algorithme d&apos;optimisation.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << MaxIter( 10 );obj << Optimize;

```

### Maximize Desirability

**Syntaxe :** obj &lt;&lt; Maximize Desirability

**Description :** Définit les valeurs de facteur actuelles pour maximiser les fonctions de désirabilité.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );Wait( 2 );obj << Maximize Desirability;

```

### Maximize and Remember

**Syntaxe :** obj &lt;&lt; Maximize and Remember

**Description :** Maximise les fonctions de désirabilité et enregistre les paramètres correspondants.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Maximize and Remember;

```

### Maximize for Each Grid Point

**Syntaxe :** obj &lt;&lt; Maximize for Each Grid Point

**Description :** Maximise les fonctions de désirabilité sur chaque point de la grille, en maintenant constant un ou plusieurs facteurs. Cette option requiert le verrouillage d&apos;au moins un facteur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Term Value( SILANE( 60, Lock( 1 ) ) );obj << Maximize For Each Grid Point;

```

### Maximum Number of Curves

**Syntaxe :** obj &lt;&lt; Maximum Number of Curves( number=500 )

**Description :** Spécifie le nombre maximum de courbes à afficher lorsque l&apos;option Interactions superposées est sélectionnée. Si le nombre total possible de courbes est supérieur au nombre maximum de courbes spécifié, un échantillon arbitraire est tiré. "500" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Overlaid Interactions( 1 );Wait( 1 );obj << Maximum Number of Curves( 100 );

```

### Optimization Control Panel

**Syntaxe :** obj &lt;&lt; Optimization Control Panel( state=0|1 )

### Output Grid Table

**Syntaxe :** obj &lt;&lt; Output Grid Table

**Description :** Crée une nouvelle table de données contenant des colonnes pour les facteurs qui contiennent les valeurs de grille, des colonnes pour chacune des réponses avec les valeurs calculées sur chaque point de la grille, et le calcul de désirabilité à chaque point de la grille.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Output Grid Table;

```

### Output Random Table

**Syntaxe :** obj &lt;&lt; Output Random Table( number of runs,&lt;Add Random Noise&gt; )

**Description :** Crée une nouvelle table de données de niveaux de facteur aléatoires et des valeurs prévues sur les niveaux de facteur pour le nombre spécifié d&apos;exécutions. Il existe également une option pour ajouter un bruit aléatoire aux réponses.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Output Random Table( 1000 );

```

### Overlaid Interactions

**Syntaxe :** obj &lt;&lt; Overlaid Interactions( state=0|1 )

**Description :** Affiche ou masque des courbes estompées dans les graphiques Profileur de prévision. Les courbes estompées représentent les profileurs pour différents types d&apos;interactions dans les étendues des facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Overlaid Interactions( 1 );

```

### Paste Settings Script

**Syntaxe :** obj &lt;&lt; Paste Settings Script

**Description :** Colle les paramètres du profileur depuis le presse-papiers vers un profileur dans un autre rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set to Data in Row( 4 );obj << Copy Settings Script;obj2 = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj2 << Paste Settings Script;

```

### Predict for Another Table

**Syntaxe :** obj &lt;&lt; Predict for Another Table( &lt;data table&gt; )

**Description :** Ajoute des colonnes de prévision à une table de données spécifiée, à l&apos;aide des facteurs dans cette table de données. Cette option est disponible uniquement pour les réponses continues.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));dt2 = dt << Subset(	All rows,	columns( :SILICA, :SILANE, :SULFUR ),	Output Table( "Subset" ));obj << Predict For Another Table( dt2 );

```

### Prediction Intervals

**Syntaxe :** obj &lt;&lt; Prediction Intervals( state=0|1 )

**Description :** Affiche ou masque les intervalles de prévision à 95 % qui incluent la variation dans l&apos;estimation du modèle et la variation dans l&apos;erreur des résidus.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Fit Model(	Y( :ELONG ),	Effects( :SILICA, :SILANE, :SULFUR, :SILANE * :SILANE ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run(		Profiler(			1,			Confidence Intervals( 1 ),			Prediction Intervals( 1 ),			Desirability Functions( 0 )		),		:ELONG << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ),		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),		Effect Summary( 0 )}	));

```

### Prediction Profiler

**Syntaxe :** obj &lt;&lt; Prediction Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Prediction Profiler( 1 );

```

### Profile at Boundary

**Syntaxe :** obj &lt;&lt; Profile at Boundary( "Tourner aux frontières"|"Arrêter aux frontières" )

**Description :** Identifie la méthode de traitement de la frontière pour les facteurs qui ont des contraintes. Cette option est uniquement disponible pour les modèles de prévision contenant des variables de mélange, lorsqu&apos;il y a une contrainte linéaire, ou lorsque l&apos;option Modifier les contraintes linéaires est spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Donev Mixture Data.jmp" );obj1 = Fit Model(	Y( :Damping ),	Effects( :CuSO4 & RS & Mixture, :Na2S2O3 & RS & Mixture, :Glyoxal & RS & Mixture ),	Personality( "Standard Least Squares" ),	Run Model( 1 ));obj1 << Prediction Formula;obj2 = Profiler( Y( :Pred Formula Damping ) );Wait( 1 );obj2 << Profile at Boundary( "Stop at Boundaries" );

```

### Prop of Error Bars

**Syntaxe :** obj &lt;&lt; Prop of Error Bars( state=0|1 )

**Description :** Affiche ou masque les barres d&apos;erreur sur le graphique du profileur. Cette option est disponible uniquement lorsque la colonne contient une propriété de colonne Sigma.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );:Pred Formula ABRASION << Set Property( Sigma, 5 );:Pred Formula MODULUS << Set Property( Sigma, 100 );obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Prop of Error Bars( 1 );

```

### Remember Settings

**Syntaxe :** obj &lt;&lt; Remember Settings

**Description :** Ajoute un nœud de contour au rapport avec les valeurs des paramètres de facteur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Remember Settings;

```

### Remove Profiler

**Syntaxe :** scobj &lt;&lt; Remove Profiler

**Description :** Supprime le profileur du rapport de la plate-forme. Cette option est uniquement disponible dans un nombre limité de plates-formes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Run Script( "SEM: Path Analysis w / Latent" );rpt = obj << Report();rpt["Model Specification"] << Close( 1 );obj << Prediction Profiler(	1,	Confidence Intervals( 1 ),	Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ), Conflict( 0, Lock( 0 ), Show( 1 ) ) ),	Y Terms( Conflict, Satisfaction ));scobj = rpt[Outline Box( "Prediction Profiler" )] << Get Scriptable Object();scobj << Remove Profiler;

```

### Reorder X Variables

**Syntaxe :** obj &lt;&lt; Reorder X Variables( columns )

**Description :** Trie de nouveau les effets principaux du modèle dans le profileur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 2 );obj << Reorder X Variables( :SULFUR, :SILANE, :SILICA );

```

### Reorder Y Variables

**Syntaxe :** obj &lt;&lt; Reorder Y Variables( columns )

**Description :** Trie de nouveau les variables de réponse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 2 );obj << Reorder Y Variables(	:Pred Formula HARDNESS, :Pred Formula MODULUS, :Pred Formula ELONG);

```

### Reorder factors by main effect importance

**Syntaxe :** subobj &lt;&lt; Reorder factors by main effect importance

**Description :** Trie de nouveau les cellules dans le Profileur de prévision selon les indices d&apos;importance pour les effets principaux.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fit = Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);fit << Save Formulas;obj = Profiler( Y( :Predicted Y ), Expand );obj << Independent Uniform Inputs( 1 );Wait( 1 );subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<get scriptable object);subobj << Reorder factors by main effect importance;

```

### Reorder factors by total importance

**Syntaxe :** subobj &lt;&lt; Reorder factors by total importance

**Description :** Trie de nouveau les cellules dans le Profileur de prévision selon les indices d&apos;importance totale pour les facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );fit = Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);fit << Save Formulas;obj = Profiler( Y( :Predicted Y ), Expand );obj << Independent Uniform Inputs( 1 );subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<get scriptable object);subobj << Reorder factors by main effect importance;Wait( 1 );subobj << Reorder factors by total importance;

```

### Reset

**Syntaxe :** obj &lt;&lt; Reset

**Description :** Réinitialise les fonctions de désirabilité.

### Reset Factor Grid

**Syntaxe :** obj &lt;&lt; Reset Factor Grid

### Reset Factors

**Syntaxe :** obj &lt;&lt; Reset Factors

**Description :** Ouvre une fenêtre permettant de modifier la grille des facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Reset Factor Grid;

```

### Response Limits

**Syntaxe :** Pred Y &lt;&lt; Response Limits( {Lower( value, fraction ), Middle( value, fraction ), Upper( value, fraction ), Goal( Minimize|Maximize|Target ), Importance( number )} )

**Description :** Définit les paramètres de la fonction de désirabilité d’une réponse individuelle, ainsi que les valeurs de désirabilité correspondantes.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Pred Formula ABRASION << Response Limits(		{Lower( 90, 0.9819 ), Middle( 145, 0.5 ), Upper( 200, 0.066 ), Goal( Minimize ),		Importance( 1 )}	));obj << Desirability Functions( 1 );

```

### Samples per Factor

**Syntaxe :** obj &lt;&lt; Samples per Factor( number=6 )

**Description :** Spécifie le nombre de valeurs d&apos;échantillons prises pour chaque facteur continu pour les interactions à deux facteurs. Cette valeur est réduite pour les interactions à nombreux facteurs et dépend du nombre maximum de courbes. "6" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Overlaid Interactions( 1 );Wait( 1 );obj << Samples per Factor( 10 );

```

### Save Bagged Predictions

**Syntaxe :** obj &lt;&lt; Save Bagged Predictions( nsample, Random Seed(number), Fractional Weights(0|1), Save Prediction Formulas(0|1) )

**Description :** Utilise l&apos;agrégation (bagging) bootstrap pour faire des prévisions et enregistre les moyennes des prévisions agrégées et les erreurs standard dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Neural(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Crossvalidation( No Crossvalidation ),	Go);obj << Profiler( Save Bagged Predictions( 10 ) );

```

### Save Constraints to New Table

**Syntaxe :** obj &lt;&lt; Save Constraints to New Table

**Description :** Enregistre les contraintes linéaires existantes dans une nouvelle table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Script(	"Constraint",	{1 * :SILICA + 1 * :SULFUR >= 3, 2 * :SILICA + 1 * :SULFUR <= 6});obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Constraints to New Table;

```

### Save Constraints to Table Script

**Syntaxe :** obj &lt;&lt; Save Constraints to Table Script

**Description :** Enregistre les contraintes linéaires existantes dans un script de table de données nommé Contrainte.

```jsl

dtlc = New Table( "Linear Constraints",	Add Rows( 2 ),	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) ));dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Load Constraints from Table( dtlc );obj << Save Constraints to Table Script;

```

### Save Desirabilities

**Syntaxe :** obj &lt;&lt; Save Desirabilities

**Description :** Enregistre les trois paramètres de la fonction de désirabilité pour chaque réponse, ainsi que les valeurs de désirabilité correspondantes en tant que propriété de colonne Limites de réponse dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Save Desirabilities;

```

### Save Desirability Formula

**Syntaxe :** obj &lt;&lt; Save Desirability Formula

**Description :** Enregistre une nouvelle colonne de formules dans la table de données. La nouvelle colonne contient une formule pour la désirabilité combinée dans l&apos;ensemble des réponses.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Save Desirability Formula;

```

### Save Expanded Formulas

**Syntaxe :** obj &lt;&lt; Save Expanded Formulas

**Description :** Enregistre une nouvelle colonne de formule dans la table de données. La nouvelle colonne contient les références de formule résolues au sein des formules utilisées comme variables Y pour voir les variables sous-jacentes. Disponible uniquement après que l&apos;option Étendre les formules intermédiaires soit sélectionnée dans la fenêtre de lancement ou que le message Étendre soit spécifié dans le script du profileur.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );obj << Save Expanded Formulas;

```

### Save Shapley Values

**Syntaxe :** obj &lt;&lt; Save Shapley Values

**Description :** Calcule les valeurs de Shapley pour chaque ligne non exclue de la table de données.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );obj = dt << Neural(	Y( :Percent Body Fat ),	X(		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n	),	Validation Method( :Validation ),	Set Random Seed( 123 ),	Fit( NTanH( 3 ) ));obj << (Fit[1] << Profiler( 1, Save Shapley Values ));

```

### Sensitivity Indicator

**Syntaxe :** obj &lt;&lt; Sensitivity Indicator( state=0|1 )

**Description :** Affiche ou masque un triangle violet qui peut aider à découvrir rapidement les cellules sensibles dans de grands profils. La hauteur et la direction du triangle correspondent à la valeur de la dérivée partielle de la fonction de profil à sa valeur actuelle.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Sensitivity Indicator( 1 );

```

### Set Desirabilities

**Syntaxe :** obj &lt;&lt; Set Desirabilities

**Description :** Ouvre la fenêtre Cible pour la réponse où vous pouvez spécifier les valeurs de désirabilité.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Set Desirabilities;

```

### Set Script

**Syntaxe :** obj &lt;&lt; Set Script( Function( {arguments}, &lt;{locals}&gt;, expr ) )

**Description :** Définit un script exécuté chaque fois qu&apos;un facteur est modifié.

```jsl

ProfileCallbackLog = Function( {arg}, Show( arg ) );dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Set Script( ProfileCallbackLog );obj << Term Value( :Silica( 1 ) );

```

### Set Threshold Criterion

**Syntaxe :** obj &lt;&lt; Set Threshold Criterion( Extrapolation Control Criterion( "Num Model Terms / Num Observations " | "Maximum Leverage" ), &lt;multiplier&gt; )

**Description :** Peut être utilisé pour spécifier le multiplicateur de seuil d&apos;extrapolation général. Vous pouvez également utiliser cette fonction pour ouvrir une fenêtre qui vous permet d&apos;ajuster le multiplicateur de seuil d&apos;extrapolation.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Informative Missing( 0 ),	Validation Method( "Holdback", 0.3333 ),	Set Random Seed( 123 ),	Fit( NTanH( 3 ) ));obj << (Fit[1] << Profiler(	1,	Desirability Functions( 1 ),	Extrapolation Details( 1 ),	Extrapolation Control Option( "Warning On" ),	Set Threshold Criterion( General Extrapolation Control Multiplier( 4 ) )));

```

### Set to Data in Row

**Syntaxe :** obj &lt;&lt; Set to Data in Row( row number )

**Description :** Affecte les valeurs d&apos;une ligne de la table de données aux variables X dans le profileur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));Wait( 2 );obj << Set to Data in Row( 4 );

```

### Shapley Background Data Choice

**Syntaxe :** obj &lt;&lt; Shapley Background Data Choice( "Pourcentage pour l’ensemble de données d&apos;apprentissage"|"Nombre de lignes de l’ensemble de données d&apos;apprentissage" )

**Description :** Spécifie les données d&apos;arrière-plan dans les calculs de Shapley comme un pourcentage des données d&apos;apprentissage ou un nombre de lignes des données d&apos;apprentissage.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );obj = dt << Neural(	Y( :Percent Body Fat ),	X(		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n	),	Validation Method( :Validation ),	Set Random Seed( 123 ),	Fit( NTanH( 3 ) ));obj << (Fit[1] << Profiler(	1,	Shapley Background Data Choice( Number of rows of training data set ),	Shapley Number of Rows of Training Data( 150 ),	Save Shapley Values));

```

### Shapley Number of Permutations

**Syntaxe :** obj &lt;&lt; Shapley Number of Permutations( number=10 )

**Description :** Définit le nombre de permutations à utiliser pour le calcul des valeurs de Shapley. "10" par défaut.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );obj = dt << Neural(	Y( :Percent Body Fat ),	X(		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n	),	Validation Method( :Validation ),	Set Random Seed( 123 ),	Fit( NTanH( 3 ) ));obj << (Fit[1] << Profiler( 1, Shapley Number of Permutations( 15 ), Save Shapley Values ));

```

### Shapley Number of Rows of Training Data

**Syntaxe :** obj &lt;&lt; Shapley Number of Rows of Training Data( number=100 )

**Description :** Définit le nombre de lignes des données d&apos;apprentissage utilisé pour ajuster le modèle pour une utilisation comme données d&apos;arrière-plan dans les calculs de Shapley. "100" par défaut.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );obj = dt << Neural(	Y( :Percent Body Fat ),	X(		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n	),	Validation Method( :Validation ),	Set Random Seed( 123 ),	Fit( NTanH( 3 ) ));obj << (Fit[1] << Profiler(	1,	Shapley Background Data Choice( Number of rows of training data set ),	Shapley Number of Rows of Training Data( 125 ),	Save Shapley Values));

```

### Shapley Percent Training Data

**Syntaxe :** obj &lt;&lt; Shapley Percent Training Data( number=100 )

**Description :** Définit le pourcentage des données d&apos;apprentissage utilisé pour ajuster le modèle pour une utilisation comme données d&apos;arrière-plan dans les calculs de Shapley. "100" par défaut.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );obj = dt << Neural(	Y( :Percent Body Fat ),	X(		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n	),	Validation Method( :Validation ),	Set Random Seed( 123 ),	Fit( NTanH( 3 ) ));obj << (Fit[1] << Profiler(	1,	Shapley Background Data Choice( Percent training data set ),	Shapley Percent Training Data( 50 ),	Save Shapley Values));

```

### Shapley Set Random Seed

**Syntaxe :** obj &lt;&lt; Shapley Set Random Seed( number )

**Description :** Définit une graine aléatoire pour le calcul des valeurs de Shapley.

**JMP Version ajoutée :** 17

```jsl

dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );obj = dt << Neural(	Y( :Percent Body Fat ),	X(		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n	),	Validation Method( :Validation ),	Set Random Seed( 123 ),	Fit( NTanH( 3 ) ));obj << (Fit[1] << Profiler( 1, Shapley Set Random Seed( 12345 ), Save Shapley Values ));

```

### Show Creator

**Syntaxe :** obj &lt;&lt; Show Creator( state=0|1 )

**Description :** Affiche ou masque le nom de la plate-forme qui a créé la formule dans la colonne de réponse. Le nom de la plate-forme apparaît sur l&apos;axe vertical. Disponible uniquement si la colonne de réponse contient un argument nommé Créateur dans la propriété de colonne Prévision.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );fm = dt << Fit Model(	Y( :y ),	Effects( :Drug, :x, :Drug * :x ),	Personality( "Standard Least Squares" ),	Emphasis( "Minimal Report" ),	Run(		:y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ),		Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},		Effect Summary( 0 )	));predForm = fm << Save Columns( "Prediction Formula" );Profiler( Y( predForm ), Show Creator( 1 ) );

```

### Show Formulas

**Syntaxe :** obj &lt;&lt; Show Formulas

**Description :** Ouvre une fenêtre de script qui contient le JSL pour toutes les formules en cours de profilage.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Show Formulas;

```

### Simulator

**Syntaxe :** obj &lt;&lt; Simulator( state=0|1 )

**Description :** Affiche ou masque le simulateur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Simulator( 1 );

```

### Spanning Range

**Syntaxe :** obj &lt;&lt; Spanning Range( "Étendue de l&apos;axe interne"|"Étendue de l&apos;axe complète"|"Un écart-type"|"Deux écarts-types"|"Étendue de données" )

**Description :** Spécifie la manière dont l&apos;étendue d&apos;échantillonnage de chaque facteur continu et déterminée. L&apos;étendue d&apos;échantillonnage pour chaque facteur définit la valeur la plus faible et la valeur la plus élevée pour lesquelles les courbes d&apos;interaction sont créées.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Overlaid Interactions( 1 );Wait( 1 );obj << Spanning Range( "Two Standard Deviations" );

```

### Surface Profiler

**Syntaxe :** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description :** Affiche ou masque le profileur de surfaces.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Surface Profiler( 1 );

```

### Term Value

**Syntaxe :** obj &lt;&lt; Term Value( factor( current value, &lt;Lock( 0|1 )&gt;, &lt;Min( number )&gt;, &lt;Max( number)&gt; ) )

**Description :** Spécifie les paramètres des facteurs individuels, y compris la valeur actuelle, le statut de verrouillage et l&apos;étendue.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );Wait( 2 );obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

### Trips

**Syntaxe :** obj &lt;&lt; Trips( number )

**Description :** Spécifie le nombre de départs aléatoires dans l&apos;algorithme d&apos;optimisation. Chaque passage redémarre l&apos;algorithme à un point de démarrage différent.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Trips( 10 );obj << Optimize;

```

### Unthreaded

**Syntaxe :** obj &lt;&lt; Unthreaded( state=0|1 )

**Description :** Permet d&apos;empêcher le multithreading dans l&apos;évaluation des traces de profil, de la grille des isoréponses et des trajets de l&apos;optimiseur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Unthreaded( 1 );obj << Maximize Desirability;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Design Space Profiler

### Constructeurs associés

#### Design Space Profiler

**Syntaxe :** Design Space Profiler

**Description :** Lance le profileur d&apos;espace expérimental, qui aide au mappage des limites de spécifications sur les variables Y avec les limites de spécification des variables X.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );

```

### Messages d'éléments

#### Connect Hide Mode

**Syntaxe :** obj &lt;&lt; Connect Hide Mode( state=0|1 )

**Description :** Pour la table de données connectée, au lieu de sélectionner les points qui se trouvent dans les limites, cette option masque les points en dehors des limites.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Connect Hide Mode( 1 );dt2 = obj2 << Make and Connect Random Table( 10000, Add Random Noise );dt2 << Run Script( (dt2 << Get Table Script Names)[1] );obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Connect to Table

**Syntaxe :** obj &lt;&lt; Connect to Table( data table )

**Description :** Relie le rapport du Profileur d&apos;espace expérimental à la table de données spécifiée. Les lignes contenant des facteurs compris dans les limites inférieure et supérieure actuelles sont sélectionnées dans la table connectée.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );dt2 = obj << Output Random Table( 10000, Add Random Noise );dt2 << Run Script( (dt2 << Get Table Script Names)[1] );obj2 << Connect to Table( dt2 );obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Error StdDev

**Syntaxe :** obj &lt;&lt; Error StdDev( Set Error StdDev(colume name(value),...) )

**Description :** Définit l&apos;écart-type utilisé pour simuler l&apos;erreur des réponses.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Error StdDev( Pred Formula Yield( 2.0 ) );

```

#### Get Midpoints from Profiler

**Syntaxe :** obj &lt;&lt; Get Midpoints from Profiler( fraction )

**Description :** Obtient les paramètres des facteurs actuels du profileur de prévision et définit les points milieu pour chaque facteur dans le Profileur d&apos;espace expérimental à ces valeurs. Les limites sont construites autour de chaque valeur de point milieu en utilisant une fraction spécifiée de l&apos;étendue des facteurs.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Get Midpoints from Profiler( 0.5 );

```

#### Lock

**Syntaxe :** obj &lt;&lt; Lock( Lock(colume name(lock_value),...) )

**Description :** Verrouille le facteur continu à la valeur spécifiée. Ce verrou est temporaire.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Lock( Ethanol( 5 ) );

```

#### Make and Connect Random Table

**Syntaxe :** obj &lt;&lt; Make and Connect Random Table( number, &lt;Add Random Noise( state=0|1 )&gt;, &lt;Embed Factor Space Scatterplots&gt;, &lt;Embed Response Space Scatterplots&gt; )

**Description :** Crée une nouvelle table de données qui contient des paramètres de facteurs uniformément distribués et leurs réponses simulées correspondantes. Des options permettent de spécifier comment les réponses sont simulées et si les nuages de points des réponses et des facteurs doivent être incorporés dans le rapport. La sélection de lignes dans la table de données est connectée aux profileurs dans le rapport.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );dt2 = obj2 << Make and Connect Random Table(	10000,	Add Random Noise( 1 ),	Embed Factor Space Scatterplots);Wait( 1 );obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Move Corner Inward

**Syntaxe :** obj &lt;&lt; Move Corner Inward

#### Move Corner Outward

**Syntaxe :** obj &lt;&lt; Move Corner Outward

#### Move Inward

**Syntaxe :** obj &lt;&lt; Move Inward( &lt;number=1&gt; )

**Description :** Trouve la limite de spécification à l&apos;aide du chemin montant le plus raide et déplace cette limite de spécification vers l&apos;intérieur. Utiliser l&apos;argument facultatif number pour spécifier combien de fois ce processus est exécuté.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Move Inward( 4 );Wait( 2 );obj2 << Move Outward;

```

#### Move Outward

**Syntaxe :** obj &lt;&lt; Move Outward( &lt;number=1&gt; )

**Description :** Trouve la limite de spécification à l&apos;aide du chemin descendant le moins raide et déplace cette limite de spécification vers l&apos;extérieur. Utilisez l&apos;argument facultatif number pour spécifier combien de fois ce processus est exécuté.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );obj2 << Move Outward( 2 );Wait( 2 );obj2 << Move Outward;

```

#### Reset Factor Space

**Syntaxe :** obj &lt;&lt; Reset Factor Space( factor1( lower, upper ), factor2( lower, upper ), ... )

**Description :** Modifie l&apos;espace des facteurs pour réduire, agrandir ou changer l&apos;étendue d&apos;un ou plusieurs facteurs. Si les intervalles des limites sont trop réduits, cela peut avoir comme résultat une petite étendue de limites et créer des estimations basées sur la simulation imprécises.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );Wait( 1 );obj2 << Reset Factor Space(	Butanol( -0.275, 11 ),	Ethanol( -0.25, 10.25 ),	Methanol( -0.25, 10.25 ),	Propanol( -0.25, 10.25 ),	Time( 0.95, 3 ));

```

#### Save Simulation Table

**Syntaxe :** obj &lt;&lt; Save Simulation Table( state=0|1 )

#### Save X Spec Limits

**Syntaxe :** obj &lt;&lt; Save X Spec Limits

**Description :** Enregistre les limites de spécification X actuelles en tant que propriétés de colonne.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );obj2 << Save X Spec Limits;

```

#### Send Limits to Profiler as Constraints

**Syntaxe :** obj &lt;&lt; Send Limits to Profiler as Constraints

**Description :** Envoie les limites X actuelles au profileur en tant que contraintes de limite.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );obj2 << Send Limits to Profiler as Constraints;

```

#### Send Limits to Simulator

**Syntaxe :** obj &lt;&lt; Send Limits to Simulator( "Uniform" | "Normal with limits at 2 sigma" | "Normal with limits at 3 sigma" | "Normal weighted with limits at 2 sigma" | "Normal weighted with limits at 3 sigma" )

**Description :** Envoie les limites X actuelles au simulateur comme paramètres d&apos;une distribution spécifiée. Envoie également les valeurs d&apos;écart-type pour chaque réponse comme écart-type pour le bruit aléatoire ajouté.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );obj2 << Send Limits to Simulator( "Normal with Limits at 3 Sigma" );

```

#### Send Midpoints to Profiler

**Syntaxe :** obj &lt;&lt; Send Midpoints to Profiler

**Description :** Envoie les points milieu pour les limites X actuelles au profileur.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );obj2 << Send Midpoints to Profiler;

```

#### Set Limits

**Syntaxe :** obj &lt;&lt; Set Limits( Set Limits(colume name(lower limit,upper limit),...) )

**Description :** Définit les limites de facteur en utilisant un script.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Show Corners

**Syntaxe :** obj &lt;&lt; Show Corners( state=0|1 )

**Description :** Affiche ou masque le rapport Coins. Ce rapport contient une table des probabilités dans la spécification aux extrêmes de l&apos;espace de facteurs. Les probabilités sont calculées à l&apos;aide d&apos;une distribution normale centrée aux valeurs prévues et coupée aux limites de spécification.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Show Corners;

```

#### Show Current Profiler Values

**Syntaxe :** obj &lt;&lt; Show Current Profiler Values( state=0|1 )

**Description :** Affiche la valeur actuelle à partir du profileur comme une ligne verticale pointillée grise.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Show Current Profiler Values( 1 );

```

#### Show Impact Ratios

**Syntaxe :** obj &lt;&lt; Show Impact Ratios( state=0|1 )

**Description :** Affiche ou masque les ratios d’impact. Ces ratios montrent dans quelle mesure les variations de chaque facteur, du point médian à chaque limite, influencent l’écart des prédictions par rapport aux limites de spécification.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} ));obj = Profiler( Y( :Pred Formula Yield ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Show Impact Ratios;

```

#### Show Portion for Each Response

**Syntaxe :** obj &lt;&lt; Show Portion for Each Response( state=0|1 )

**Description :** Ajoute une colonne qui contient la proportion dans la spécification pour chaque réponse aux limites X actuelles.

```jsl

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );New Column( "Pred Formula Yield",	Numeric,	Continuous,	Formula(		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time	),	Set Property( "Spec Limits", {LSL( 26 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.1 )} ));New Column( "Pred Formula Impurities",	Numeric,	Continuous,	Formula(		0.3 + -0.08 * :Ethanol + 0.06 * :Propanol + 0.12 * :Time + 0.06 * :Ethanol * :Time	),	Set Property( "Spec Limits", {USL( 1 ), Show Limits( 1 )} ),	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 24642 ), Std Dev( 0.2 )} ));obj = Profiler( Y( :Pred Formula Yield, :Pred Formula Impurities ) );obj2 = obj << Design Space Profiler( 1 );obj2 << Show Portion for Each Response( 1 );obj2 << Set Limits( Methanol( 5, 10 ), Propanol( 0, 5 ) );

```

## Simulator

### Constructeurs associés

#### Simulator

**Syntaxe :** obj &lt;&lt; Simulator( state=0|1, &lt;Factors( column &lt;&lt; Random( )|Fixed( constant )| Expression( )| Multivariate( ) )&gt;, &lt;Responses( column &lt;&lt; No Noise| Add Random Noise| Add Random Weighted Noise| Add Multivariate Noise ) )&gt;

**Description :** Lance le simulateur.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise	));

```

### Messages d'éléments

#### Automatic Histogram Update

**Syntaxe :** simuobj &lt;&lt; Automatic Historgram Update( state=0|1 )

**Description :** Met à jour l’histogramme avec les nouvelles valeurs simulées lorsque les distributions des facteurs changent.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise	),	Simulate);simobj = obj << Get Simulator;simobj << Automatic Histogram Update( 1 );Wait( 1 );obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise	),	Automatic Histogram Update( 1 ),	Simulate);Wait( 1 );obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

#### Defect Parametric Profile

**Syntaxe :** simobj &lt;&lt; Defect Parametric Profile( state=0|1 )

**Description :** Trace le taux de défaut moyen par coefficients distributionnels. Cette option est uniquement disponible après avoir sélectionné le profileur de défauts.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Simulator(		1,		Factors(			SILICA << Random( Normal( 1.25, 0.3266 ) ),			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )		),		Responses(			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise		),		Defect Profiler( 1 ),		Simulate	));simobj = obj << Get Simulator;simobj << Defect Parametric Profile( 1 );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Simulator(		1,		Factors(			SILICA << Random( Normal( 1.25, 0.3266 ) ),			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )		),		Responses(			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise		),		Defect Profiler( 1 ),		Defect Parametric Profile( 1 ),		Simulate	));

```

#### Defect Profiler

**Syntaxe :** simobj &lt;&lt; Defect Profiler( state=0|1 )

**Description :** Affiche le taux de défaut comme une fonction isolée de chaque facteur. Cette option est uniquement disponible si les limites de spécification sont définies.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Simulator(		1,		Factors(			SILICA << Random( Normal( 1.25, 0.3266 ) ),			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )		),		Responses(			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise		),		Simulate	));simobj = obj << Get Simulator;simobj << Defect Profiler( 1 );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Simulator(		1,		Factors(			SILICA << Random( Normal( 1.25, 0.3266 ) ),			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )		),		Responses(			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise		),		Defect Profiler( 1 ),		Simulate	));

```

#### N Runs

**Syntaxe :** obj &lt;&lt; Simulator( N Runs(number=1000) )

**Description :** Définit le nombre d&apos;exécutions de la simulation. "10000" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise	),);obj << Simulator( N Runs( 2500 ), Simulate );

```

#### Resimulate

**Syntaxe :** simobj &lt;&lt; Resimulate

**Description :** Renvoie la simulation. Cette option est utile après toute modification des distributions des facteurs.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	),	Simulate);Wait( 1 );obj << Term Value( SILANE( 60, Lock( 1 ) ) );simobj = obj << Get Simulator;simobj << Resimulate;

```

#### Set Random Seed

**Syntaxe :** obj &lt;&lt; Simulator( Set Random Seed( number ) )

**Description :** Définit une valeur spécifique pour la graine aléatoire en assurant ainsi que toutes les exécutions successives utilisant la même graine aléatoire sont reproductibles.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise	),);obj << Simulator( Set Random Seed( 1234 ), Simulate );

```

#### Simulate to table

**Syntaxe :** simobj &lt;&lt; Simulate To Table(N Runs(n),factorName&lt;&lt;Sequence Location(low,high,nSteps),factorName2&lt;&lt;Sequence Spread(low,high,nSteps),factorName3&lt;&lt;Not Sequenced)

**Description :** Crée une table des résultats de la simulation, séquencée à travers différentes moyennes ou étalements.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	));simobj = obj << Get Simulator;simobj << Simulate to table(	N Runs( 20 ),	SILICA << Sequence Location( .5, 2, 4 ),	SILANE << Sequence Location( 35, 65, 4 ),	SULFUR << Sequence Location( 1.5, 3, 4 ));

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	));obj << Simulator(	Simulate to table(		N Runs( 20 ),		SILICA << Sequence Location( .5, 2, 4 ),		SILANE << Sequence Location( 35, 65, 4 ),		SULFUR << Sequence Location( 1.5, 3, 4 )	));

```

#### Simulation Experiment

**Syntaxe :** simobj &lt;&lt; Simulation Experiment( NRun(number of experimental runs=128), Portion(factor space portion=1),NSim(number of simulations per experimental run=10000),&lt;Run&gt;,&lt;Selected Factors(factor1,..)&gt; )

**Description :** Exécute un plan de simulation en fonction des positions de distributions des facteurs dans le modèle.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise	));simobj = obj << Get Simulator;simobj << Simulation Experiment( NRun( 100 ), Portion( 0.6 ) );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise	));obj << Simulator( Simulation Experiment( NRun( 128 ), NSim( 20000 ), Portion( 1.0 ), Run ) );

```

#### X Correlations

**Syntaxe :** obj &lt;&lt; Simulator( X Correlations( state=0|1, {factor1, factor2, ..., factorN}, [NxN correlations] ) )

**Description :** Définit les corrélations sur les facteurs X lorsque le paramètre de simulation pour les facteurs est défini sur Multivarié.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Multivariate( 1.2, 0.3266 ), SILANE << Multivariate( 50, 6.532 ),		SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise	),	Automatic Histogram Update( 1 ),	X Correlations( 1, {SILICA, SILANE, SULFUR}, [1 0.3 0, 0.3 1 0, 0 0 1] ),	Simulate);

```

#### Y Correlations

**Syntaxe :** obj &lt;&lt; Simulator( Y Correlations( state=0|1, {response1, response2, ..., responseN}, [NxN correlations] ) )

**Description :** Définit les corrélations sur les réponses Y lorsqu&apos;un bruit multivarié est ajouté aux réponses.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ),		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << Add Multivariate Noise( 1 ),		Pred Formula MODULUS << No Noise, Pred Formula ELONG << Add Multivariate Noise( 1 ),		Pred Formula HARDNESS << No Noise	),	Y Correlations(		1,		{Pred Formula ABRASION, Pred Formula MODULUS, Pred Formula ELONG,		Pred Formula HARDNESS},		[1 0.15 0.27 0, 0.15 1 0 0, 0.27 0 1 0, 0 0 0 1]	),	Simulate);

```

