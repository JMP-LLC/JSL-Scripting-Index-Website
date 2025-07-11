# Fit Life by X



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

### Add Density Curve to Scatterplot

**Syntaxe :** obj << Add Density Curve to Scatterplot( number )

**Description :** Ajoute une courbe de densité au nuage de points à la valeur spécifiée de la variable X. Les courbes de densité sont dessinées pour chaque distribution sélectionnée dans la légende. La légende se trouve à droite du nuage de points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Add Density Curve to Scatterplot( 50 );

```

### Add Quantile Line to Scatterplot

**Syntaxe :** obj << Add Quantile Line to Scatterplot( quantile )

**Description :** Ajoute une ligne au nuage de points au quantile spécifié. Une droite de quantile est dessinée pour chaque distribution sélectionnée dans la légende. La légende se trouve à droite du nuage de points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Add Quantile Line to Scatterplot( 0.1 );

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

### Automatic Recalc

**Syntaxe :** obj << Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj << Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntaxe :** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);

```

### Censor

**Syntaxe :** obj << Censor( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Censor Code

**Syntaxe :** obj = Fit Life by X(...Censor Code( value=1 )...)

<b>Élément lanceur : Oui</b>

**Description :** Identifie la valeur de la colonne Censure qui désigne les observations censurées à droite. "1" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Status ),
	Freq( :Weight ),
	Censor Code( "Censored" ),
	Relationship( Arrhenius Celsius )
);

```

### Column Switcher

**Syntaxe :** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Confidence Interval Method

**Syntaxe :** obj = Fit Life by X(...Confidence Interval Method( method="Wald" )...)

**Description :** Spécifie la méthode utilisée pour calculer les intervalles de confiance pour les paramètres. Choisissez entre la méthode de Wald et de vraisemblance. La méthode de Wald est une approximation et s&apos;exécute plus rapidement. La méthode par vraisemblance donne des paramètres plus précis mais prend plus de temps à calculer. "Wald" par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	Confidence Interval Method( "Likelihood" )
);

```

### Copy ByGroup Script

**Syntaxe :** obj << Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj << Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj << Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Data Table Window;

```

### Density

**Syntaxe :** obj << Density( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**Description :** Renvoie la densité pour une distribution spécifiée, pour une durée de vie t et une valeur de covariable de x.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
d = obj << Density( Lognormal, 30000, 10 );
Show( d );

```

### Distribution

**Syntaxe :** obj = Fit Life by X(...Distribution( Weibull|Lognormal|Loglogistic|Frechet |SEV|Log|Normal|Logistic|LEV )...)

**Description :** Spécifie la distribution utilisée pour modéliser la relation entre les variables X et Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Frechet ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Fit All Distributions

**Syntaxe :** obj << Fit All Distributions

**Description :** Ajuste toutes les distributions disponibles aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit All Distributions;

```

### Fit Exponential

**Syntaxe :** obj << Fit Exponential

**Description :** Ajuste une distribution exponentielle aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Exponential;

```

### Fit Frechet

**Syntaxe :** obj << Fit Frechet

**Description :** Ajuste une distribution de Fréchet aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Frechet;

```

### Fit LEV

**Syntaxe :** obj << Fit LEV

**Description :** Ajuste une distribution de la plus grande valeur extrême (LEV) aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit LEV;

```

### Fit Life by X

**Syntaxe :** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), <Censor( column )> )

**Description :** Analyse la distribution des données Temps avant événement paramétrées par un seul facteur de régression. Les options de l&apos;analyse incluent les modèles accélérés de défaillance, les distributions de survie dans les groupes et les transformations des facteurs de régression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Fit Logistic

**Syntaxe :** obj << Fit Logistic

**Description :** Ajuste une distribution log-logistique aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Logistic;

```

### Fit Loglogistic

**Syntaxe :** obj << Fit Loglogistic

**Description :** Ajuste une distribution log-logistique aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Loglogistic;

```

### Fit Lognormal

**Syntaxe :** obj << Fit Lognormal

**Description :** Ajuste une distribution log-normale aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Weibull ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Lognormal;

```

### Fit Normal

**Syntaxe :** obj << Fit Normal

**Description :** Ajuste une distribution normale en fonction des données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Normal;

```

### Fit SEV

**Syntaxe :** obj << Fit SEV

**Description :** Ajuste une distribution de la plus petite valeur extrême (SEV) aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit SEV;

```

### Fit Weibull

**Syntaxe :** obj << Fit Weibull

**Description :** Ajuste une distribution de Weibull aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Inverse Power ),
	Freq( :Weight ),
	Show Density Curves( 1 )
);
Wait( 1 );
obj << Fit Weibull;

```

### Freq

**Syntaxe :** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	Freq( _freqcol )
);

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

### Get ByGroup Script

**Syntaxe :** obj << Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj << Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

**Général**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
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
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj << Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Results

**Syntaxe :** obj << Get Results

**Description :** Renvoie les estimations, les erreurs standard, la matrice de covariance et les résultats de la convergence pour chaque ajustement de distribution.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
r = obj << Get Results;
Show( r );

```

### Get Script

**Syntaxe :** obj << Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj << Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj << Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
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

### Hazard

**Syntaxe :** obj << Hazard( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**Description :** Renvoie le risque pour une distribution spécifiée, pour une durée de vie t et une valeur de covariable de x.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
h = obj << Hazard( Lognormal, 30000, 10 );
Show( h );

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

### Local Data Filter

**Syntaxe :** obj << Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Maximum Iterations

**Syntaxe :** obj << Maximum Iterations( number )

**Description :** Spécifie le nombre maximum d&apos;itérations utilisées pour trouver une convergence.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Frechet ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Maximum Iterations( 20 ),
	Nested Model Tests( Regression )
);

```

### Nested Model Tests

**Syntaxe :** obj << Nested Model Tests( Saturated Location|Location|Location and Scale|Saturated Location and Scale|Regression|No Effect )

**Description :** Ajoute une courbe superposée non paramétrique, des tests de modèles imbriqués et un graphique de probabilité multiple au rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	Nested Model Tests( Regression )
);

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

### Paste Local Data Filter

**Syntaxe :** obj << Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Probability

**Syntaxe :** obj << Probability( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**Description :** Renvoie la probabilité pour une distribution spécifiée, pour une durée de vie t et une valeur de covariable de x.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
p = obj << Probability( Lognormal, 30000, 10 );
Show( p );

```

### Quantile

**Syntaxe :** obj << Quantile( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, p, x )

**Description :** Renvoie le quantile pour une distribution spécifiée, pour une probabilité p et une valeur de covariable de x.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
q = obj << Quantile( Lognormal, 0.005, 10 );
Show( q );

```

### Redo Analysis

**Syntaxe :** obj << Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj << Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Rejection Sampler Maximum Trials

**Syntaxe :** obj << Rejection Sampler Maximum Trials( number=10000 )

**Description :** "10000" par défaut.

**JMP Version ajoutée :** 14

### Relationship

**Syntaxe :** obj = Fit Life by X(...Relationship( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Inverse Power|Linear|Log|Logit|Reciprocal|Square Root|Box-Cox|Custom|No Effect|Location|Location and Scale )...)

**Description :** Identifie la relation de transformation entre l&apos;événement et le facteur.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Frechet ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Inverse Power )
);

```

### Relaunch Analysis

**Syntaxe :** obj << Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj << Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj << Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntaxe :** obj << Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

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
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj << Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj << Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj << Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj << Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj << Save Script for All Objects To Data Table( <name> )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj << Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj << Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj << Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
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

### Set Level of Quantile Line CI Bands

**Syntaxe :** obj << Set Level of Quantile Line CI Bands( alpha=0.95 )

**Description :** Spécifie le niveau de confiance pour les intervalles de confiance autour des droites des quantiles.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
obj << Add Quantile Line to Scatterplot( 0.1 );
obj << Show Quantile Line CI Bands( 1 );
Wait( 1 );
obj << Set Level of Quantile Line CI Bands( .90 );

```

### Set Scale

**Syntaxe :** obj << Set Scale( Weibull|Lognormal|Loglogistic|Frechet|SEV |Normal|Logistic|LEV|Linear )

**Description :** Spécifie l&apos;échelle utilisée pour la courbe superposée non paramétrique.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
Wait( 1 );
obj << Set Scale( Logistic );

```

### Set Scriptables

**Syntaxe :** obj << Set Scriptables( {<Distribution Comparisons( options )>, <Quantile Comparisons( options )>, <Hazard Comparisons( options )>, <Density Comparisons( options )>} )

**Description :** Définit des options scriptables au sein des profileurs dans différentes sections de la sortie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
obj << Set Scriptables(
	{Distribution Comparisons(
		Profiler( 1, Term Value( Temp( 50 ), Hours( 2600 ) ) )
	)}
);

```

### Show Density Curves

**Syntaxe :** obj << Show Density Curves( state=0|1 )

**Description :** Affiche ou masque les courbes de densité sur le nuage de points.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Show Density Curves( 1 );

```

### Show Overlay by Levels

**Syntaxe :** obj << Show Overlay by Levels( state=0|1 )

**Description :** Affiche ou masque le graphique superposé par niveaux.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Location ),
	Freq( :Weight )
);
rpt = obj << report;
rpt["Scatterplot"] << Close( 1 );
rpt["Nonparametric Overlay"] << Close( 1 );
rpt["Comparisons"] << Close( 1 );
rpt[TabListBox( 2 )] << SetSelected( 2 );
rpt["Overlay by Levels"] << Close( 0 );
Wait( 1 );
obj << Show Overlay by Levels( 0 );
Wait( 1 );
obj << Show Overlay by Levels( 1 );

```

### Show Points

**Syntaxe :** obj << Show Points( state=0|1 )

**Description :** Affiche ou masque les points des données dans la courbe superposée non paramétrique et dans les graphiques de probabilité multiples. Si les points sont masqués, les fonctions incrémentales sont affichées. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
Wait( 1 );
obj << Show Points( 0 );
Wait( 1 );
obj << Show Points( 1 );

```

### Show Quantile Line CI Bands

**Syntaxe :** obj << Show Quantile Line CI Bands( state=0|1 )

**Description :** Affiche ou masque les intervalles de confiance autour des droites des quantiles.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
obj << Add Quantile Line to Scatterplot( 0.1 );
Wait( 1 );
obj << Show Quantile Line CI Bands( 1 );

```

### Show Surface Plot

**Syntaxe :** obj << Show Surface Plot( state=0|1 )

**Description :** Affiche ou masque les surfaces de réponse dans la section des résultats de la distribution individuelle du rapport. Les surfaces de réponse apparaissent dans les sections Distribution, Quantile, Risque et Densité pour les distributions individuelles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
rpt = obj << report;
rpt["Scatterplot"] << Close( 1 );
rpt["Comparisons"] << Close( 1 );
rpt[TabListBox( 2 )] << SetSelected( 2 );
rpt["Lognormal"] << Close( 0 );
Wait( 1 );
obj << Show Surface Plot( 0 );
Wait( 1 );
obj << Show Surface Plot( 1 );

```

### Sync to Data Table Changes

**Syntaxe :** obj << Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### TAF

**Syntaxe :** obj << TAF( Weibull|Lognormal|Loglogistic|Frechet, value, x )

**Description :** Renvoie le facteur d&apos;accélération temporelle pour une distribution spécifiée, une condition d&apos;accélération x et une valeur de condition de référence.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
af = obj << TAF( Lognormal, 10, 40 );
Show( af );

```

### Tabbed Individual Report

**Syntaxe :** obj << Tabbed Individual Report( state=0|1 )

**Description :** Organise les rapports individuels en panneaux d&apos;onglets. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
rpt = obj << report;
rpt["Scatterplot"] << Close( 1 );
rpt["Comparisons"] << Close( 1 );
Wait( 1 );
obj << Tabbed Individual Report( 0 );

```

### Tabbed Overall Report

**Syntaxe :** obj << Tabbed Overall Report( state=0|1 )

**Description :** Organise le rapport global en onglets pour les graphiques, les comparaisons et les sections de résultats du rapport global.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight ),
	Nested Model Tests( Regression )
);
Wait( 1 );
obj << Tabbed Overall Report( 1 );

```

### Time Acceleration Baseline

**Syntaxe :** obj << Time Acceleration Baseline( number )

**Description :** Spécifie la condition d&apos;utilisation pour le facteur d&apos;accélération.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
obj << Time Acceleration Baseline( 20 );

```

### Time to Event

**Syntaxe :** obj << Time to Event( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Title

**Syntaxe :** obj << Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj << Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Transposed Axes

**Syntaxe :** obj << Transposed Axes( state=0|1 )

**Description :** Permet de spécifier que le facteur d&apos;accélération s&apos;affiche sur l&apos;axe vertical au lieu de l&apos;axe horizontal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Transposed Axes( 1 );

```

### Use Transformation Scale

**Syntaxe :** obj << Use Transformation Scale( state=0|1 )

**Description :** Spécifie que l&apos;échelle de transformation est utilisée pour l&apos;axe du facteur d&apos;accélération dans le nuage de points. Cette option bascule entre l&apos;échelle linéaire et non linéaire pour l&apos;axe du facteur d&apos;accélération. Actif par défaut.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Relationship( Arrhenius Celsius ),
	Freq( :Weight )
);
Wait( 1 );
obj << Use Transformation Scale( 1 );

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

### Window View

**Syntaxe :** obj = Fit Life by X(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Élément lanceur : Oui</b>

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Window View( "Private" ),
	Y( :weight ),
	X( :height ),
	Fit Line
);
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit",
		Text Box( eqn, <<Set Base Font( "Title" ) )
	)
);

```

### X

**Syntaxe :** obj << X( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Y

**Syntaxe :** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

