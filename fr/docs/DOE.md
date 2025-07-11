# DOE



### A-Optimality Parameter Weights

**Syntaxe :** obj << A-Optimality Parameter Weights

**Description :** Définit les pondérations à utiliser pour créer un plan A-Optimal.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Term( {1, 0} ), Add Term( {1, 1} ),
	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ), Set Sample Size( 14 ),
	Optimality Criterion( "Make A-Optimal Design"n ),
	"A-Optimality Parameter Weights"n( [1 1 1 1 0.1 0.1 0.1] )}
);

```

### ALT Factor Settings

**Syntaxe :** obj << ALT Factor Settings

**Description :** Pour le numéro de facteur donné d&apos;un plan de test accéléré de survie, permet de spécifier le nom du facteur, le nombre de niveaux, la transformation du facteur, et les conditions d&apos;utilisation et de test.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### ALT Plan Setup

**Syntaxe :** obj << ALT Plan Setup( 1|2|3 )

**Description :** Spécifie le choix initial du modèle pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Add Alias Term

**Syntaxe :** obj << Add Alias Term

**Description :** Ajoute un terme d&apos;alias à la liste des termes d&apos;alias. Spécifier le numéro et la puissance du facteur pour chaque effet d&apos;une liste. Créer des interactions en séparant les effets à l&apos;aide de virgules.

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Alias Term( {1, 1}, {2, 1} );
d << Add Alias Term( {1, 2} );

```

### Add Constraint

**Syntaxe :** obj << Add Constraint

**Description :** Ajoute des contraintes linéaires à travers une matrice. Chaque ligne représente une contrainte. La dernière colonne est destinée aux valeurs situées sur le côté droit des contraintes d&apos;inégalité. Dans JSL, les contraintes d&apos;inégalité doivent être inférieures ou égales aux valeurs de droite.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} )
);

```

### Add Factor

**Syntaxe :** obj << Add Factor( Continuous|Discrete Numeric|Blocking|Constant|Categorical|Mixture )

**Description :** Ajoute un facteur du type spécifié et des arguments facultatifs. En absence de spécifications, cette commande ajoute un facteur continu.

```js

Names Default To Here( 1 );
d = DOE( Custom Design );
d << Add Factor( Continuous, -1, 1, "X1", 0 );
d << Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 );
d << Add Factor( Categorical, {"L1", "L2"}, "X3", 0 );
d << Add Factor( Blocking, 8, "X4" );
d << Add Factor( Constant, 3, "X5" );

```

### Add Functional Response

**Syntaxe :** obj << Add Functional Response

**Description :** Ajoute une réponse fonctionnelle avec le nom, le nombre de mesures par essai et les valeurs spécifiés.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Functional Response( "Y", 5, {1, 2, 3, 4, 5} ),
	Set Random Seed( 46055034 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 )
);

```

### Add Potential Term

**Syntaxe :** obj << Add Potential Term

**Description :** Ajoute un terme Si possible à la liste des termes du modèle. Spécifier le numéro et la puissance du facteur pour chaque effet d&apos;une liste. Créer des interactions en séparant les effets à l&apos;aide de virgules.

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Potential Term( {1, 1}, {2, 1} );
d << Add Potential Term( {1, 2} );

```

### Add Response

**Syntaxe :** obj << Add Response( goal, name, lower limit, upper limit, importance, lower detection limit, upper detection limit )

**Description :** Ajoute une réponse avec l&apos;objectif, le nom, la limite inférieure, la limite supérieure et l&apos;importance spécifiés.

**Exemple 1**

```js

Names Default To Here( 1 );
DOE( Custom Design, Add Response( Match Target, "Y", 10, 30, 1 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
DOE( Custom Design, Add Response( Match Target, "Y", ., ., 1, 10, 30 ) );

```

### Add Term

**Syntaxe :** obj << Add Term

**Description :** Ajoute un terme « Nécessaire » à la liste des termes du modèle. Les effets sont spécifiés par {numéro de facteur, puissance}. Des interactions peuvent être créées en séparant les effets à l&apos;aide de virgules.

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Term( {1, 1}, {2, 1} );
d << Add Term( {1, 2} );

```

### Additional Designs

**Syntaxe :** obj << Additional Designs

**Description :** Spécifier jusqu&apos;à neuf plans supplémentaires à comparer au plan de référence.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 12 ),
	Make Design,
	Make Table
);
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 4 ),
	Make Design,
	Make Table
);
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs(
		"Custom Design 2",
		X( :X1, :X2, :X3 ),
		"Custom Design 3",
		X( :X1, :X2, :X3 )
	)
);

```

### Allow covariate rows to be repeated

**Syntaxe :** obj << Allow covariate rows to be repeated( state=0|1 )

**Description :** Spécifie si les lignes de la covariable peuvent être répétées dans le plan.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Augment Method

**Syntaxe :** obj << Augment Method( Replicate|Centerpoints|Fold Over|Add Axial|Augment )

**Description :** Spécifie le type de la méthode d&apos;augmentation et ses paramètres.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Augment );
d << Set Sample Size( 24 );
d << Make Design;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Augment Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Augment Method( Replicate, 2 );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Centerpoints, 3 );

```

**Exemple 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Fold Over, [1 2] );

```

**Exemple 5**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Add Axial, 1, 2 );

```

### Blocks

**Syntaxe :** obj << Blocks

**Description :** Spécifie la taille des blocs pour un plan en blocs incomplets équilibré (BIBD).

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
d = DOE( Balanced Incomplete Block Design, Treatments( 3, {"L1", "L2", "L3"} ) );
d << Blocks( 2 );
d << Make Design;

```

### Center Points

**Syntaxe :** obj << Center Points

**Description :** Spécifie le nombre de points centraux.

**Exemple 1**

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Center Points( 2 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 ),
	Center Points( 1 )
);

```

### Change Anticipated Coefficients

**Syntaxe :** obj << Change Anticipated Coefficients

**Description :** Modifier les coefficients prévus dans l&apos;Analyse de puissance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Change Anticipated Coefficients( [1 2 3 4 2 2 2 3 3 3] );

```

### Change Factor Settings

**Syntaxe :** obj << Change Factor Settings

**Description :** Spécifie le minimum, le maximum et le nom du facteur continu ou de mélange que vous avez inclus dans le premier argument. Très utile pour les plates-formes qui disposent de facteurs prédéfinis.

**Exemple 1**

```js

Names Default To Here( 1 );
d = DOE( Response Surface Design );
d << Change Factor Settings( 1, 2, 3, "A" );
d << Change Factor Settings( 2, 0, 4 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
d = DOE( Mixture Design );
d << Change Factor Settings( 1, 0.1, 0.4, "A" );
d << Change Factor Settings( 3, 0, 0.8, "C" );

```

### Check Inscribe

**Syntaxe :** obj << Check Inscribe

**Description :** Réajuste l&apos;échelle du plan de sorte que les points axiaux se trouvent aux extrémités inférieure et supérieure de l&apos;étendue.

```js

Names Default To Here( 1 );
d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );
d << Check Inscribe;

```

### Choice Design Table Output

**Syntaxe :** obj << Choice Design Table Output( "Séparé"|"Combiné" )

**Description :** Spécifie comment créer une table de données pour un plan de préférences.

```js

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Add Term( {1, 1} ),
	Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 ), Make Design,
	Choice Design Table Output( Combined )}
);

```

### D Efficiency Weight

**Syntaxe :** obj << D Efficiency Weight

**Description :** Cette option vous permet de contrôler l’importance relative de l’efficacité D et la réduction du crénelage. Indiquez un nombre compris entre zéro et un.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	D Efficiency Weight( 0.5 ),
	Make Design
);

```

### DOE

**Syntaxe :** DOE

### Design Search Time

**Syntaxe :** obj << Design Search Time( number )

**Description :** Spécifie le nombre de secondes dédiées à la recherche d&apos;un plan.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ), Set Sample Size( 7 ),
	Design Search Time( 8 ), Make Design}
);

```

### Disallowed Combinations

**Syntaxe :** obj << Disallowed Combinations

**Description :** Cette option vous permet de fournir un script qui renvoie la valeur vrai pour toutes les combinaisons de facteurs qui doivent être exclues du plan.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Number of Starts( 100 ),
	Disallowed Combinations( X1 > 0.5 & X2 == 2 ),
	Make Design
);

```

### Discrete Numeric Powers Set to Necessary

**Syntaxe :** obj << Discrete Numeric Powers Set to Necessary( state=0|1 )

**Description :** Indique si les puissances dans les facteurs numériques discrets doivent obligatoirement être des termes du modèle.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Discrete Numeric, {1, 2, 3}, "X1", 0 ),
	Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 ),
	Discrete Numeric Powers Set to Necessary( 1 ),
	Make Model( Linear )
);

```

### Distribution Choice

**Syntaxe :** obj << Distribution Choice

**Description :** Spécifie la distribution pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Enforce Use of Selected Covariate Rows

**Syntaxe :** obj << Enforce Use of Selected Covariate Rows( state=0|1 )

**Description :** Spécifie si toutes les lignes de la covariable sélectionnées doivent être incluses dans le plan.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### FFF Optimality Criterion

**Syntaxe :** obj << FFF Optimality Criterion( "ProMax"|"Centroïde" )

**Description :** Spécifie le critère utilisé dans le plan. La valeur par défaut est recommandée.

**Exemple 1**

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Factor

**Syntaxe :** obj << Factor( column(s) )

### Find Subset

**Syntaxe :** obj << Find Subset

**Description :** Trouve le sous-ensemble D-optimal d&apos;un plan de mélanges aux sommets extrêmes.

```js

Names Default To Here( 1 );
d = DOE( Mixture Design, Add Factor( Mixture, 0.1, 1, "X4", 0 ) );
d << Mixture Design Type( Extreme Vertices, 3 );
d << Find Subset( 10 );

```

### GOSSDDetails

**Syntaxe :** obj << GOSSDDetails

**Description :** Renvoie une liste des paramètres de facteur actuels.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design );
Show( d << GOSSDDetails );

```

### GOSSDStructure

**Syntaxe :** obj << GOSSDStructure

**Description :** Spécifie la structure d&apos;un PGOS (Plan de groupe orthogonal sursaturé)

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design );
d << GOSSDStructure( 6, 8 );

```

### Get Alias Matrix

**Syntaxe :** obj << Get Alias Matrix

**Description :** Renvoie la matrice des alias à partir de l&apos;évaluation des plans.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Alias Matrix;

```

### Get Design Diagnostics

**Syntaxe :** obj << Get Design Diagnostics

**Description :** Renvoyer l&apos;efficacité D, l&apos;efficacité G, l&apos;efficacité A et la variance moyenne de prévision.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Design Diagnostics;

```

### Get Effect Power

**Syntaxe :** obj << Get Effect Power

**Description :** Renvoyer le vecteur des puissances des estimations des effets.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Evaluate Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Get Effect Power;

```

### Get Estimation Efficiencies

**Syntaxe :** obj << Get Estimation Efficiencies

**Description :** Renvoie un vecteur pour l&apos;augmentation de la largeur de chaque estimation des paramètres par rapport à un plan idéal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Estimation Efficiencies;

```

### Get MaxPro Values

**Syntaxe :** obj << Get MaxPro Values

**Description :** Renvoie les valeurs ProMax pour un plan rapide-flexible, y compris tous les plans secondaires basés sur les niveaux d&apos;un facteur catégoriel.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
d = DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),
	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),
	Space Filling Design Type( Fast Flexible Filling, 100 )}
);
d << Get MaxPro Values;

```

### Get Number of Random Starts

**Syntaxe :** obj << Get Number of Random Starts

**Description :** Renvoie le nombre de départs aléatoires utilisés dans la génération du plan.

**JMP Version ajoutée :** 15

### Get Power

**Syntaxe :** obj << Get Power

**Description :** Renvoyer le vecteur des puissances des estimations des paramètres.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Power;

```

### Get Prediction Variances

**Syntaxe :** obj << Get Prediction Variances

**Description :** Renvoie le vecteur des variances de prévision depuis le Graphe « Fraction of design space ».

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ), Set Sample Size( 7 ),
	Design Search Time( 8 ), Set Number of FDS points( 20000 ), Make Design}
);
d << Get Prediction Variances;

```

### Get X Matrix

**Syntaxe :** obj << Get X Matrix

**Description :** Renvoie la matrice de plans (aussi nommée matrice X).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get X Matrix;

```

### Group New Runs Into Separate Block

**Syntaxe :** obj << Group New Runs Into Separate Block

**Description :** Ajoute un facteur de bloc, qui groupe de nouveaux essais en blocs séparés lors de l&apos;augmentation d&apos;un plan.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Group New Runs Into Separate Block;

```

### Load Constraints

**Syntaxe :** obj << Load Constraints

**Description :** Charge une table de contraintes de facteur enregistrée au préalable pour l&apos;utiliser dans ce plan.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Diamond Constraints.jmp" );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 0} ),
	Load Constraints
);

```

### Load Design

**Syntaxe :** obj << Load Design

**Description :** Charger le plan

```js

Names Default To Here( 1 );
d = DOE( Custom Design );
d << Load Design();

```

### Load Factors

**Syntaxe :** obj << Load Factors

**Description :** Charge une table de facteurs enregistrée au préalable pour l&apos;utiliser dans ce plan.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Factors.jmp" );
DOE( Custom Design, Load Factors );

```

### Load Responses

**Syntaxe :** obj << Load Responses

**Description :** Charge une table de données des réponses, préalablement enregistrée.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Response.jmp" );
DOE( Custom Design, Load Responses );

```

### Local Design

**Syntaxe :** obj << Local Design( state=0|1 )

**Description :** Spécifie si le plan local devrait être créé pour la moyenne a priori.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Local Design( 0 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs(
		[90 0 150, 100 0 150, 110 0 150]
	)}
);

```

### Make Design

**Syntaxe :** obj << Make Design

**Description :** Crée le plan que vous avez spécifié dans le script.

```js

Names Default To Here( 1 );
d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( RSM );
d << Make Design;

```

### Make Model

**Syntaxe :** obj << Make Model( Linear|Interactions|RSM )

**Description :** Ajoute des termes à la liste des termes du modèle pour le modèle spécifié.

**Exemple 1**

```js

Names Default To Here( 1 );
d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( RSM );

```

**Exemple 2**

```js

Names Default To Here( 1 );
d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( Interactions );

```

### Make Strip Plot Design

**Syntaxe :** obj << Make Strip Plot Design

**Description :** Spécifie un plan strip-plot lorsque les facteurs difficiles à faire varier varient indépendamment des facteurs très difficiles à faire varier.

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Make Strip Plot Design;

```

### Make Table

**Syntaxe :** obj << Make Table

**Description :** Crée une table de données à partir du plan en cours.

```js

Names Default To Here( 1 );
d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Make Table;

```

### Make Test Plan

**Syntaxe :** obj << Make Test Plan

**Description :** Crée le plan de test pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice(
		"Monitoring at Intervals",
		{5, 200, 200}
	), ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] ), Make Design,
	Make Test Plan}
);

```

### MaxPro Categorical Weight

**Syntaxe :** obj << MaxPro Categorical Weight

**Description :** Spécifie la pondération ProMax. Les valeurs supérieures à 1 augmentent la séparation des points qui ont le même niveau catégoriel.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),
	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),
	Space Filling Design Type( Fast Flexible Filling, 100 )}
);

```

### Mixture Design Type

**Syntaxe :** obj << Mixture Design Type( Simplex Centroid|Simplex Lattice|ABCD|Extreme Vertices|Space Filling )

**Description :** Spécifie le type de plan de mélanges. Les paramètres par défaut sont utilisés sauf si vous spécifiez le paramètre en tant que deuxième argument.

**Exemple 1**

```js

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Mixture Design Type( Simplex Centroid, 2 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Mixture Design Type( Simplex Lattice, 4 );

```

**Exemple 3**

```js

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Mixture Design Type( ABCD );

```

**Exemple 4**

```js

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Change Factor Settings( 1, .05, .25 );
d << Mixture Design Type( Extreme Vertices, 3 );

```

**Exemple 5**

```js

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Mixture Design Type( Space Filling, 25 );

```

### Mixture Sum

**Syntaxe :** obj << Mixture Sum

**Description :** Utilisez cette option lorsque vous souhaitez que la somme des teneurs de tous les constituants soit différente de 1. Le total des taux du mélange est la somme de toutes les teneurs.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Mixture Sum( 50 ),
	Add Factor( Mixture, 10, 25, "X1", 0 ),
	Add Factor( Mixture, 0, 15, "X2", 0 ),
	Add Factor( Mixture, 25, 40, "X3", 0 ),
	Make Design
);

```

### Nesting Structure

**Syntaxe :** obj << Nesting Structure

**Description :** Spécifie la structure d&apos;imbrication du plan. Utiliser une liste entre crochets pour indiquer l&apos;imbrication (le premier élément est le facteur d&apos;imbrication, le deuxième élément est la liste entre crochets des structures ou des facteurs imbriqués). Utiliser la concaténation horizontale (&apos;||&apos;) pour indiquer les structures ou les facteurs croisés.

```js

Names Default To Here( 1 );
DOE(
	MSA Design,
	Add Factor( Categorical, {"L1", "L2"}, "X1", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1, 1 ) ),
	Nesting Structure( {"X1", {"X2"}} || "X3" )
);

```

### Number of Column Starts

**Syntaxe :** obj << Number of Column Starts

**Description :** Spécifie à combien de reprises les colonnes aléatoires sont optimisées pour chaque facteur d&apos;un plan de criblage avec effets principaux.

```js

Names Default To Here( 1 );
DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Screening Type( 1 ),
	Number of Column Starts( 100 ),
	Set Sample Size( 12 ),
	Make Design
);

```

### Number of Extra Runs

**Syntaxe :** obj << Number of Extra Runs

**Description :** Spécifie le nombre d&apos;essais supplémentaires à inclure dans un plan de criblage définitif.

```js

Names Default To Here( 1 );
DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Number of Starts

**Syntaxe :** obj << Number of Starts

**Description :** Spécifie à combien de reprises le plan est régénéré pour optimiser le plan global.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Number of Starts( 1000 ),
	Make Design
);

```

### Optimality Criterion

**Syntaxe :** obj << Optimality Criterion( "Recommandé"|"Construire un plan D-Optimal"|"Construire un plan I-Optimal"|"Construire un plan A-Optimal"|"Construire un plan alias optimal" )

**Description :** Spécifie le critère utilisé dans le plan. La valeur par défaut est recommandée.

**Exemple 1**

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Order Column

**Syntaxe :** obj << Order Column

**Description :** Demande une colonne Ordre lors de la création de la table de données.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;
d << OrderColumn( 1 );

```

### Prior Parameter Variance

**Syntaxe :** obj << Prior Parameter Variance

**Description :** Utilisez cette option pour contrôler le poids utilisé pour les termes Si possible d&apos;un modèle. Les plus hautes valeurs signifient plus d&apos;informations a priori et une plus petite variance. Les variances sont les inverses des valeurs saisies.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Potential Term( {1, 1} ),
	Add Potential Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Prior Parameter Variance( [0, 1, 2, 6] ),
	Make Design
);

```

### Prior Specification Choice

**Syntaxe :** obj << Prior Specification Choice

**Description :** Définit l&apos;option permettant de spécifier les paramètres antérieurs, où 1 indique Spécifier une constante et 2 indique Spécifier un quantile.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Prior Specification Choice( 1 ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Reference Design

**Syntaxe :** obj << Reference Design

**Description :** Spécifier le plan de référence pour la comparaison des plans.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 12 ),
	Make Design,
	Make Table
);
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 4 ),
	Make Design,
	Make Table
);
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs(
		"Custom Design 2",
		X( :X1, :X2, :X3 ),
		"Custom Design 3",
		X( :X1, :X2, :X3 )
	)
);

```

### Remove Alias Term

**Syntaxe :** obj << Remove Alias Term

**Description :** Supprime un terme de la liste des termes d&apos;alias. Spécifier le numéro et la puissance du facteur pour chaque effet d&apos;une liste. Créer des interactions en séparant les effets à l&apos;aide de virgules.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Alias Term( {1, 1}, {3, 1} );

```

### Remove All Alias Terms

**Syntaxe :** obj << Remove All Alias Terms

**Description :** Supprime tous les termes d&apos;alias de la liste des termes d&apos;alias

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Remove All Alias Terms;

```

### Remove Term

**Syntaxe :** obj << Remove Term

**Description :** Supprime un terme de la liste des termes du modèle. Spécifier le numéro et la puissance du facteur pour chaque effet d&apos;une liste. Créer des interactions en séparant les effets à l&apos;aide de virgules.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Term( {1, 1}, {3, 1} );
d << Remove Term( {3, 2} );

```

### Replicates

**Syntaxe :** obj << Replicates

**Description :** Spécifie le nombre d&apos;essais répliqués. Pour les plans MSA, un deuxième argument spécifie la structure de réplication : 0=Complètement randomisé, 1=Répéter par lot, 2=Répéter rapidement.

**Exemple 1**

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Replicates( 2 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
d = DOE(
	MSA Design,
	{Add Response( None, "Y", ., ., . ), Add Factor(
		Categorical,
		{"L1", "L2"},
		"X1",
		MSA( 4, 1 )
	), Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1 ) ),
	Set Random Seed( 3983347 ), Replicates( 2, 0 ), Simulate Responses( 0 )}
);

```

### Report

**Syntaxe :** obj << Report

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );
d = DOE( Custom Design );
r = d << report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Response

**Syntaxe :** obj << Response( column(s) )

### Save Constraints

**Syntaxe :** obj << Save Constraints

**Description :** Enregistre les contraintes factorielles du plan en cours sur une table JMP qui pourra être utilisée dans un autre plan.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} ),
	Save Constraints
);

```

### Save Factors

**Syntaxe :** obj << Save Factors

**Description :** Enregistre les facteurs que vous venez de créer dans une table de données, vous permettant ainsi d&apos;utiliser ces facteurs pour une autre étude.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Factors
);

```

### Save Responses

**Syntaxe :** obj << Save Responses

**Description :** Enregistre les réponses que vous avez créées sous la forme d&apos;une table de données JMP. Vous pouvez charger ces réponses dans d&apos;autres plans.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Responses
);

```

### Save Script to Data Table

**Syntaxe :** obj << Save Script to Data Table

**Description :** Créez un script qui reproduira ce plan.

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Créez un script qui reproduira ce plan.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Save Script to Script Window
);

```

### Save X Matrix

**Syntaxe :** obj << Save X Matrix( state=0|1 )

**Description :** Enregistre la matrice de plans (aussi nommée matrice X) sous la forme d&apos;une propriété de table dans la table de données JMP contenant le plan.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Save X Matrix,
	Make Design,
	Make Table
);

```

### Screening Type

**Syntaxe :** obj << Screening Type

**Description :** Spécifie un plan de criblage orthogonal ou quasi-orthogonal avec effets principaux.

```js

Names Default To Here( 1 );
d = DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Screening Type( 1 );
d << Set Sample Size( 12 );
d << Make Design;

```

### Select Covariate Rows

**Syntaxe :** obj << Select Covariate Rows

**Description :** Spécifie les lignes de la table de données de la covariable à sélectionner dans les plans d’expérience.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Set ALT Probability of Interest

**Syntaxe :** obj << Set ALT Probability of Interest

**Description :** Définit la probabilité d&apos;intérêt pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set ALT Time Range

**Syntaxe :** obj << Set ALT Time Range

**Description :** Définit l&apos;intervalle de temps d’intérêt pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Failure Probability Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Average Cluster Size

**Syntaxe :** obj << Set Average Cluster Size

**Description :** Contrôle le nombre de points aléatoires pour créer les clusters d&apos;un plan de remplissage flexible et rapide.

```js

Names Default To Here( 1 );
DOE(
	Space Filling Design,
	Change Factor Settings( 1, -1, 1, "X1" ),
	Change Factor Settings( 2, -1, 1, "X2" ),
	Set Average Cluster Size( 100 ),
	Space Filling Design Type( Fast Flexible Filling, 50 )
);

```

### Set Axial Choice

**Syntaxe :** obj << Set Axial Choice( 1|2|3|4 )

**Description :** Spécifie les paramètres de la valeur axiale. Utiliser 1 pour Pivotable, 2 pour Orthogonale, 3 pour En surface, et 4 pour Spécifiée par l&apos;utilisateur.

```js

Names Default To Here( 1 );
d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );

```

### Set Axial Value

**Syntaxe :** obj << Set Axial Value

**Description :** Spécifie la valeur axiale définie par l&apos;utilisateur.

```js

Names Default To Here( 1 );
d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Value( 2 );

```

### Set Candidate Runs

**Syntaxe :** obj << Set Candidate Runs

**Description :** Définit les essais candidats pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice(
		"Monitoring at Intervals",
		{5, 200, 200}
	), ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Delta For Power

**Syntaxe :** obj << Set Delta For Power

**Description :** Spécifie les valeurs des coefficients anticipés dans l&apos;analyse de puissance. Les coefficients anticipés correspondront à la moitié de la valeur spécifiée.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Delta For Power( 3 ),
	Make Design
);

```

### Set Expected Number of Respondents

**Syntaxe :** obj << Set Expected Number of Respondents

**Description :** Définit le nombre attendu de personnes interrogées par enquête.

```js

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Generators

**Syntaxe :** obj << Set Generators

**Description :** Spécifie les générateurs à utiliser dans un plan de criblage.

```js

Names Default To Here( 1 );
DOE(
	Screening Design,
	{Add Factor, Add Factor, Add Factor, Make Design( 1 ),
	Set Generators( [1, 1, 0] )}
);

```

### Set Inspection Times

**Syntaxe :** obj << Set Inspection Times

**Description :** Définit les temps d&apos;inspection pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice(
		"Monitoring at Intervals",
		{5, 200, 200}
	), ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Length of Test

**Syntaxe :** obj << Set Length of Test

**Description :** Définit la longueur de test pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Level Values

**Syntaxe :** obj << Set Level Values

**Description :** Définit la valeur des niveaux du ou des facteurs d&apos;accélération dans un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice(
		"Monitoring at Intervals",
		{5, 200, 200}
	), ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Monitoring Choice

**Syntaxe :** obj << Set Monitoring Choice

**Description :** Spécifie le type de surveillance pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set N Subplots

**Syntaxe :** obj << Set N Subplots

**Description :** Spécifie le nombre de sous-parcelles lorsqu&apos;il y a à la fois des facteurs difficiles et très difficiles à faire varier.

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Set N Subplots( 8 );

```

### Set N Whole Plots

**Syntaxe :** obj << Set N Whole Plots

**Description :** Spécifie le nombre d&apos;ensembles de parcelles lorsqu&apos;il y a des facteurs difficiles ou très difficiles à faire varier.

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 1 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Set N Whole Plots( 6 );

```

### Set Number of Attributes

**Syntaxe :** obj << Set Number of Attributes

**Description :** Définit le nombre d&apos;attributs pouvant varier dans un ensemble de préférences.

```js

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Choice Sets

**Syntaxe :** obj << Set Number of Choice Sets

**Description :** Définit le nombre d&apos;ensembles de préférences par enquête.

```js

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Number of FDS points

**Syntaxe :** obj << Set Number of FDS points

**Description :** Définit le nombre de points utilisés pour générer le Graphe « Fraction of design space ».

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ), Set Sample Size( 7 ),
	Design Search Time( 8 ), Set Number of FDS points( 20000 ), Make Design}
);

```

### Set Number of Profiles

**Syntaxe :** obj << Set Number of Profiles

**Description :** Définit le nombre de profils par ensemble de préférences.

```js

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Surveys

**Syntaxe :** obj << Set Number of Surveys

**Description :** Définit le nombre d&apos;enquêtes pour un plan de préférences.

```js

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Units

**Syntaxe :** obj << Set Number of Units

**Description :** Définit le nombre d&apos;unités sous test pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Correlation ALT

**Syntaxe :** obj << Set Prior Correlation ALT

**Description :** Définit les corrélations a priori pour un plan de test accéléré de survie.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Mean ALT

**Syntaxe :** obj << Set Prior Mean ALT

**Description :** Définit la moyenne a priori pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Mean Choice

**Syntaxe :** obj << Set Prior Mean Choice

**Description :** Définit la moyenne a priori pour un plan de préférences.

```js

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set Prior Quantile ALT

**Syntaxe :** obj << Set Prior Quantile ALT

**Description :** Définit les informations permettant de spécifier la constante antérieure en fonction d&apos;un quantile.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Prior Specification Choice( 2 ),
	Set Prior Quantile ALT( {[1.5 2], 0.065, 2642, 45} ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Std Error ALT

**Syntaxe :** obj << Set Prior Std Error ALT

**Description :** Définit l&apos;erreur standard a priori pour un plan de test accéléré de survie.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Variance ALT

**Syntaxe :** obj << Set Prior Variance ALT

**Description :** Définit la variance a priori pour un plan de test accéléré de survie.

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Variance ALT( [0.1 0 0, 0 0.1 0, 0 0 0.1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Variance Matrix

**Syntaxe :** obj << Set Prior Variance Matrix

**Description :** Définit la matrice de variances a priori pour un plan de préférences.

```js

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 )}
);

```

### Set RMSE

**Syntaxe :** obj << Set RMSE

**Description :** Spécifie la racine de l&apos;erreur quadratique moyenne (RMSE) anticipée dans l&apos;analyse de puissance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set RMSE( 1.5 );

```

### Set Random Seed

**Syntaxe :** obj << Set Random Seed

**Description :** Utile pour l&apos;enseignement. La définition de la graine aléatoire sur une valeur spécifique garantit que tous les membres d&apos;une classe obtiennent le même plan.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Random Seed( 34067086 ),
	Make Design
);

```

### Set Run Order

**Syntaxe :** obj << Set Run Order

**Description :** Spécifie la façon dont l&apos;ordre des essais doit être défini lors de la création d&apos;une table de données à partir d&apos;un plan.

```js

Names Default To Here( 1 );
d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Set Run Order( Sort Left to Right );
d << Make Table;

```

### Set Runs Per Random Block

**Syntaxe :** obj << Set Runs Per Random Block

**Description :** Spécifie la taille des blocs aléatoires du plan.

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Model( Linear )
);
d << Set Runs Per Random Block( 4 );

```

### Set Sample Size

**Syntaxe :** obj << Set Sample Size

**Description :** Spécifie la taille d&apos;échantillon avant que le plan soit créé. Si le nombre spécifié est inférieur à la valeur minimum affichée dans le concepteur, la taille d&apos;échantillon sera modifiée pour correspondre à la valeur minimum.

```js

Names Default To Here( 1 );
d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( Linear );
d << Set Sample Size( 12 );

```

### Set Significance Level

**Syntaxe :** obj << Set Significance Level

**Description :** Modifier le niveau de significativité dans l&apos;Analyse de puissance.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set Significance Level( 0.10 );

```

### Set Strength

**Syntaxe :** obj << Set Strength

**Description :** Définit la force pour les tableaux de recouvrement

```js

Names Default To Here( 1 );
d = DOE(
	Covering Array,
	Add factor( Categorical ),
	Add factor( Categorical ),
	Add factor( Categorical )
);
d << Set Strength( 3 );
d << Make Table;

```

### Show Blocking Options

**Syntaxe :** obj << Show Blocking Options

**Description :** Spécifie les préférences de blocking et le nombre de blocs pour un plan de criblage définitif. Une valeur de 0 indique qu&apos;il n&apos;y a pas de bloc.

**Exemple 1**

```js

Names Default To Here( 1 );
DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 0, 0 ),
	Number of Extra Runs( 4 )
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Simulate Responses

**Syntaxe :** obj << Simulate Responses( state=0|1 )

**Description :** Ajoute des valeurs de réponses à la table de plans JMP. Réservé à l&apos;enseignement des plans d’expériences.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Simulate Responses,
	Make Table
);

```

### Solve for Power

**Syntaxe :** obj << Solve for Power

**Description :** Définit les coefficients anticipés dans l&apos;analyse de puissance pour que la puissance approche la valeur spécifiée.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Solve for Power( 0.8 )
);

```

### Space Filling Design Type

**Syntaxe :** obj << Space Filling Design Type( Sphere Packing|Latin Hypercube|Uniform|Minimum Potential|Maximum Entropy|IMSE Optimal|Fast Flexible Filling )

**Description :** Spécifie le type de plan de remplissage de l&apos;espace et le nombre d&apos;essais.

**Exemple 1**

```js

Names Default To Here( 1 );
d = DOE( Space Filling Design );
d << Space Filling Design Type( Sphere Packing, 30 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
d = DOE( Space Filling Design );
d << Space Filling Design Type( Latin Hypercube, 100 );

```

**Exemple 3**

```js

Names Default To Here( 1 );
d = DOE( Space Filling Design );
d << Space Filling Design Type( Uniform, 20 );

```

**Exemple 4**

```js

Names Default To Here( 1 );
d = DOE( Space Filling Design );
d << Space Filling Design Type( Fast Flexible Filling, 100 );

```

**Exemple 5**

```js

Names Default To Here( 1 );
d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );
d << Make Design;

```

### Sphere Radius

**Syntaxe :** obj << Sphere Radius

**Description :** Spécifie une région de plan sphérique et vous permet d&apos;en définir le rayon.

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Sphere Radius( 1 ),
	Make Design
);

```

### Split Plot Variance Ratio

**Syntaxe :** obj << Split Plot Variance Ratio( Whole Plot Ratio | [Whole Plot Ratio, Subplot Ratio] )

**Description :** Pour les facteurs difficiles à faire varier, spécifier le rapport de la variance de l&apos;erreur de l&apos;ensemble de la parcelle sur l&apos;erreur d&apos;un essai à l&apos;autre. Pour les facteurs difficiles et très difficiles à faire varier, spécifier le rapport de l&apos;erreur de l&apos;ensemble de la parcelle et de la sous-parcelle sur l&apos;erreur d&apos;un essai à l&apos;autre.

**Exemple 1**

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 1 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set N Whole Plots( 4 ),
	Split Plot Variance Ratio( 2 ),
	Make Design
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Set N Whole Plots( 4 )
);
d << Split Plot Variance Ratio( [3, 2] );
d << Make Design;

```

### Suppress Cotter Designs

**Syntaxe :** obj << Suppress Cotter Designs( state=0|1 )

**Description :** Affiche ou masque les plans de Cotter dans la liste des plans de criblage. Cette option est sélectionnée par défaut, ce qui implique que les plans de Cotter n&apos;apparaissent pas par défaut dans la liste des plans de criblage. Actif par défaut.

```js

Names Default To Here( 1 );
DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Suppress Cotter Designs,
	Make Design( 5 )
);

```

### Table of Correlations

**Syntaxe :** obj << Table of Correlations

**Description :** Créer une table de données avec la table des corrélations à partir des diagnostics de plan.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Table of Correlations
);

```

### Theta

**Syntaxe :** obj << Theta

**Description :** Spécifie le vecteur du paramètre de covariance pour les plans de remplissage de l&apos;espace.

```js

Names Default To Here( 1 );
d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );

```

### Treatments

**Syntaxe :** obj << Treatments

**Description :** Spécifie le nombre de traitements pour un plan en blocs incomplets équilibré (BIBD).

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;

```

### Use Bayesian information

**Syntaxe :** obj << Use Bayesian information( state=0|1 )

**Description :** Utilise des informations antérieures dans le paramètre Bayésien pour les diagnostics de plan.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Number of Starts( 10 ),
	Make Design,
	Use Bayesian Information( 1 )
);

```

### Use Blue to Red color theme for color map

**Syntaxe :** obj << Use Blue to Red color theme for color map( state=0|1 )

**Description :** Utilise le thème de couleur allant du bleu au rouge pour colorier la carte selon les corrélations.

**JMP Version ajoutée :** 15

### Use Prior Uncertainty

**Syntaxe :** obj << Use Prior Uncertainty( state=0|1 )

**Description :** Spécifie si l&apos;incertitude a priori doit être utilisée ou non pour construire le plan optimal.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Inspection Times( [200 400 600 800 1000] ), Set Number of Units( 150 ),
	Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Utility Neutral Design

**Syntaxe :** obj << Utility Neutral Design( state=0|1 )

**Description :** Spécifie si le plan de préférences neutre d&apos;utilité devrait être créé.

```js

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ), Set Expected Number of Respondents( 1 ),
	Utility Neutral Design( 1 )}
);

```

### X

**Syntaxe :** obj << X( column(s) )

### Y

**Syntaxe :** obj << Y( column(s) )

