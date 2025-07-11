# Formula Depot



### Action

**Syntaxe :** obj << Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Add Formula from Column

**Syntaxe :** Régresseur = obj << Add Formula from Column( Table(name|reference), Columns(name|index|reference, ...), <Expand Intermediate Formulas(number)> )

**Description :** Ajouter une colonne de formule de prévision de la table spécifiée au dépôt des formules

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
model << Save Probability Formula;
mp = fd << Add Formula From Column( Table( dt ), Columns( 11 ) ); // "Most Likely Species"
mp << Generate Python Code;

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

**Préconfiguration anonyme**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Rechercher dans les dossiers**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Rechercher par nom**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Copy Formulas as Functions

**Syntaxe :** obj << Copy Formulas as Functions( <Formulas(name|index|reference, ...)> )

**Description :** Copie les modèles spécifiés dans le presse-papiers en tant qu&apos;instruction scalaire Function().

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
predictor = model << Publish Probability Formulas;
fd << Copy Formulas as Functions( Formulas( predictor ) );
Wait( 0 );
text = Get Clipboard();
Show( text );

```

### Copy Formulas as Transforms

**Syntaxe :** obj << Copy Formulas as Transforms( <Table(name|reference)>, <Formulas(name|index|reference, ...)> )

**Description :** Copie les modèles spécifiés dans le presse-papiers au sein d&apos;une instruction Transform Column().

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
model << Publish Probability Formulas;
fd << Copy Formulas as Transforms(
    // English: Formulas("Fit Nominal Logistic - Species")
	Formulas( 1 )
);
Wait( 0 );
text = Get Clipboard();
Show( text );

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Copy Script;

```

### Copy Scripts

**Syntaxe :** obj << Copy Scripts( <Formulas(name|index|reference, ...)> )

**Description :** Copie les scripts des formules spécifiées, stockées dans le dépôt des formules, dans le presse-papiers.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
predictor = model << Publish Probability Formulas;
fd << Copy Scripts( Formulas( predictor ) );
Wait( 0 );
text = Get Clipboard();
Show( text );

```

### Formula Depot

**Syntaxe :** Formula Depot

**Description :** Un conteneur pour les modèles de prévision qui prend en charge la comparaison de modèles, le profilage et la génération du code de calcul du score. Le dépôt des formules est lancé via le menu Analyse, les commandes Publier dans les plates-formes de modélisation, Recoder et l&apos;éditeur de formules.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];

```

### Generate C Code

**Syntaxe :** obj << Generate C Code( <Formulas(name|index|reference, ...)>, <No Editor> )

**Description :** Génère le code C pour les modèles spécifiés enregistrés dans le dépôt des formules. La sortie est destinée à une fenêtre de l&apos;éditeur ou à une variable de chaîne si l&apos;argument &apos;No Editor&apos; est spécifié.

```js

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
c_code = fd << Generate C Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// c_code = predictor << Generate C Code(No Editor);
Save Text File( "$TEMP\logist.c", c_code );
// Open code in editor window
fd << Generate C Code( Formulas( predictor ) );

```

### Generate JavaScript Code

**Syntaxe :** obj << Generate JavaScript Code( <Formulas(name|index|reference, ...)>, <No Editor> )

**Description :** Génère le code JavaScript pour les modèles spécifiés enregistrés dans le dépôt des formules. La sortie est destinée à une fenêtre de l&apos;éditeur ou à une variable de chaîne si l&apos;argument &apos;No Editor&apos; est spécifié.

```js

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
js_code = fd << Generate JavaScript Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// js_code = predictor << Generate JavaScript Code(No Editor);
Save Text File( "$TEMP\logist.js", js_code );
// Open code in editor window
fd << Generate JavaScript Code( Formulas( predictor ) );

```

### Generate Python Code

**Syntaxe :** obj << Generate Python Code( <Formulas(name|index|reference, ...)>, <No Editor> )

**Description :** Génère le code Python pour les modèles spécifiés enregistrés dans le dépôt des formules. La sortie est destinée à une fenêtre de l&apos;éditeur ou à une variable de chaîne si l&apos;argument &apos;No Editor&apos; est spécifié.

```js

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
py_code = fd << Generate Python Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// py_code = predictor << Generate Python Code(No Editor);
Save Text File( "$TEMP\logist.py", py_code );
// Open code in editor window
fd << Generate Python Code( Formulas( predictor ) );

```

### Generate SAS Code

**Syntaxe :** obj << Generate SAS Code( <Formulas(name|index|reference, ...)>, <No Editor> )

**Description :** Génère le code SAS (DS2) pour les modèles spécifiés enregistrés dans le dépôt des formules. La sortie est destinée à une fenêtre de l&apos;éditeur ou à une variable de chaîne si l&apos;argument &apos;No Editor&apos; est spécifié.

```js

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
sas_code = fd << Generate SAS Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// sas_code = predictor << Generate SAS Code(No Editor);
Save Text File( "$TEMP\logist.sas", sas_code );
// Open code in editor window
fd << Generate SAS Code( Formulas( predictor ) );

```

### Generate SQL Code

**Syntaxe :** obj << Generate SQL Code( <Formulas(name|index|reference, ...)>, <No Editor>, <QUOTE_STYLE> )

**Description :** Génère le code SQL (définitions de colonne appropriées pour une instruction SQL Select) pour les modèles spécifiés enregistrés dans le dépôt des formules. La sortie est destinée à une fenêtre de l&apos;éditeur ou à une variable de chaîne si l&apos;argument « No Editor » est spécifié. QUOTE_STYLE est une chaîne indiquant une des bases de données SQL prises en charge par JMP (MySQL, Impala, Hive, etc.) ou un type de symbole d&apos;enserrement SQL (« Underline », « Backquote », « Bracket » ou « Doublequote »).

```js

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
md = dt << Run Script( "Elastic Net Poisson, BIC" );
mp_obs = md << xpath( "//OutlineBox" );
scriptables = Filter Each( {ob}, mp_obs << Get Scriptable Object(), !Is Empty( ob ) );
mp = scriptables[2];
predictor = mp << Publish Prediction Formula;
// Save code to string 
sql_code = fd << Generate SQL Code( Formulas( 1 ), No Editor );
// shortcut using predictor reference
// sql_code = predictor << Generate SQL Code(No Editor);
Save Text File( "$TEMP\genreg.sql", sql_code );
// Open code in editor window
fd << Generate SQL Code( Formulas( predictor ), "MySQL" );

```

### Get By Levels

**Syntaxe :** obj << Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plate-forme avec filtre**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container",
			(gb << Get Container) << Get Picture
		)
	)
);

```

### Get Data Table

**Syntaxe :** obj << Get Data Table

**Description :** Renvoie une référence à la table de données.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntaxe :** obj << Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj << Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntaxe :** obj << Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate(
	X( :height ),
	Y( :weight ),
	Where( :age < 14 & :height > 60 )
);
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Model Comparison

**Syntaxe :** obj << Model Comparison( <Table(name|reference)>, <Formulas(name|index|reference, ...)> )

**Description :** Compare les modèles spécifiés, enregistrés dans le dépôt des formules, à l&apos;aide de l&apos;utilitaire de comparaison des modèles et sur la base du contenu de la table de données spécifiée.

```js

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_mp = nl_md << Publish Probability Formulas;
nn_md = Neural(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 3 ) )
);
nn_mp = nn_md << Publish Prediction Formula;
mc_plat = fd << ModelComparison( Formulas( 1, 2 ) );
// Other options:
// mds = {"Fit Nominal Logistic - Species", "Neural - Species"};
// fd << ModelComparison( Formulas( mds ) );
// fd << ModelComparison( Formulas( 1 ), Formulas( 2 ) );
// fd << ModelComparison; // all models

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Profiler

**Syntaxe :** obj << Profiler( <Table(name|reference)>, <Formulas(name|index|reference, ...)> )

**Description :** Profile les modèles spécifiés, enregistrés dans le dépôt des formules, à l&apos;aide de l&apos;utilitaire Profileur et sur la base du contenu de la table de données spécifiée.

```js

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_mp = nl_md << Publish Probability Formulas;
nn_md = Neural(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 3 ) )
);
nn_mp = nn_md << Publish Prediction Formula;
fd << Profiler( Formulas( nl_mp, nn_mp ) );

```

### Remove Model Comparison

**Syntaxe :** obj << Remove Model Comparison

**Description :** Supprime tous les rapports Comparaison de modèles du dépôt des formules actif.

```js

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_md << Publish Probability Formulas;
fd << Model Comparison();
fd << Remove Model Comparison();

```

### Remove Profiler

**Syntaxe :** obj << Remove Profiler

**Description :** Supprime tous les Profileurs du dépôt des formules actif.

```js

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_md << Publish Probability Formulas;
fd << Profiler();
fd << Remove Profiler();

```

### Rename Formula Depot

**Syntaxe :** obj << Rename Formula Depot( text )

```js

Names Default To Here( 1 );

fd = Formula Depot();
fd << Rename Formula Depot( "New Name" );

```

### Render Preset

**Syntaxe :** Render Preset( preset )

**Description :** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj << Report;

Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Run Scripts

**Syntaxe :** obj << Run Scripts( <Table(name|reference)>, <Formulas(name|index|reference, ...)> )

**Description :** Enregistre les modèles spécifiés dans la table de données JMP active ou spécifiée, sous la forme d&apos;une ou plusieurs colonnes de formule.

```js

Names Default To Here( 1 );

// Create a Formula Depot to store the model
dt1 = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt1 << RunScript( "Nominal Logistic" );
fd1 = Formula Depot();
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
// Clean-up
Close( dt1, NoSave );
fd1 << Close Window;
// Read FD from disk
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
// Create columns from stored model; usually this is a new table with a compatible schema
dt2 = Open( "$SAMPLE_DATA\Iris.jmp" );
fd2 << Run Scripts( Table( dt2 ), Formulas( 1 ) );

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ), By( _bycol ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ), By( _bycol ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Show Scripts

**Syntaxe :** obj << Show Scripts( <Formulas(name|index|reference, ...)> )

**Description :** Ouvre une nouvelle fenêtre Formule (ou s&apos;ajoute à une fenêtre Formule ouverte) contenant les scripts des formules spécifiées et enregistrées dans le dépôt des formules.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
model << Publish Probability Formulas;
fd << Show Scripts( Formulas( 1 ) );

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Syntaxe :** obj << View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

