# Explore Missing Values



## Colonnes

### By

**Syntaxe :** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);

```

### Columns

**Syntaxe :** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Validation

**Syntaxe :** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Y

**Syntaxe :** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

## Constructeurs associés

### Explore Missing Values

**Syntaxe :** Explore Missing Values( Y( columns ) )

**Description :** Trouver les modèles des valeurs manquantes et conduire l&apos;imputation.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

## Messages d'éléments

### ADI Loading Matrix

**Syntaxe :** obj &lt;&lt; ADI Loading Matrix( state=0|1 )

**Description :** Affiche ou masque un rapport qui affiche les colonnes correspondant au loading des facteurs pour chaque composante.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Set Random Seed( 123 ),
	Automated Data Imputation
);
obj << ADI Loading Matrix( 1 );

```

### Automated Data Imputation

**Syntaxe :** obj &lt;&lt; Automated Data Imputation

**Description :** Impute les valeurs manquantes en utilisant une méthode d&apos;approximation de matrice de rang faible. Cette méthode sélectionne automatiquement la meilleure dimension pour l&apos;approximation de rang faible en fonction des données.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Automated Data Imputation;

```

### Close

**Syntaxe :** obj &lt;&lt; Close

**Description :** Ferme le rapport Colonnes manquantes.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ),
	Missing Value Report
);
Wait( 2 );
obj << Close;

```

### Color Cells

**Syntaxe :** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**Description :** Colorie les cellules de la table de données qui contiennent des valeurs manquantes pour la ou les colonnes sélectionnées dans le rapport Colonnes manquantes.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Color cells( :OZONE );

```

### Color Rows

**Syntaxe :** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**Description :** Colorie les lignes de la table de données qui contiennent des valeurs manquantes pour la ou les colonnes sélectionnées dans le rapport Colonnes manquantes.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Color rows( :OZONE );

```

### Exclude Rows

**Syntaxe :** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**Description :** Applique l&apos;état de ligne exclu aux lignes de la table de données qui contiennent des valeurs manquantes pour la ou les colonnes sélectionnées dans le rapport Colonnes manquantes.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Exclude rows( :OZONE );

```

### Get U V Sigma ADI Matrices

**Syntaxe :** obj &lt;&lt; Get U V Sigma ADI Matrices

**Description :** Renvoie les matrices U, V et Sigma de l&apos;approximation de rang faible dans la méthode ADI.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Set Random Seed( 123 ),
	Automated Data Imputation
);
obj << Get U V Sigma ADI Matrices;

```

### Maximum Dimension

**Syntaxe :** obj &lt;&lt; Maximum Dimension( number )

**Description :** Définit la dimension maximum pour l&apos;imputation automatisée des données.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Maximum Dimension( 3 ),
	Automated Data Imputation
);

```

### Maximum Iteration

**Syntaxe :** obj &lt;&lt; Maximum Iteration( number=10 )

**Description :** Définit le nombre maximum d&apos;itérations pour l&apos;imputation automatisée des données. "10" par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Maximum Iteration( 8 ),
	Automated Data Imputation
);

```

### Missing Value Clustering

**Syntaxe :** obj &lt;&lt; Missing Value Clustering

**Description :** Fournit une analyse de classification hiérarchique des données manquantes.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Missing Value Clustering;

```

### Missing Value Report

**Syntaxe :** obj &lt;&lt; Missing Value Report

**Description :** Ouvre le rapport Colonnes manquantes, qui liste le nom de chaque colonne et le nombre de valeurs manquantes dans cette colonne.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Missing Value Report;

```

### Missing Value Snapshot

**Syntaxe :** obj &lt;&lt; Missing Value Snapshot

**Description :** Affiche un graphique de cellules pour les valeurs manquantes. Une cellule noire indique une valeur manquante.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Missing Value Snapshot;

```

### Multivariate Normal Imputation

**Syntaxe :** obj &lt;&lt; Multivariate Normal Imputation( Shrink Covariances( state=0|1 ) )

**Description :** Impute les valeurs manquantes en fonction de la distribution normale multivariée. Pour améliorer l&apos;estimation de la matrice de covariance, utilisez l&apos;option d&apos;estimation de réduction.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Multivariate Normal Imputation( Shrink Covariances( 1 ) );

```

### Multivariate RPCA Imputation

**Syntaxe :** obj &lt;&lt; Multivariate RPCA Imputation( Lambda( number ), Tolerance( number = 1e-7 ), MaxIt( number ) )

**Description :** Impute les valeurs manquantes en utilisant les composantes principales robustes, ce qui remplace les valeurs manquantes en utilisant une factorisation de matrice de rang faible (SVD) qui est robuste aux valeurs aberrantes. Cette méthode est utile pour les problèmes larges. La valeur par défaut pour lambda est 2/sqrt(max(n, p)), où n est le nombre de lignes et p est le nombre de colonnes. Si min(n, p) < 100, la valeur par défaut pour le nombre maximum d&apos;itérations (MaxIt) est 75. Si 100<= min(n, p) < 1000, la valeur par défaut pour MaxIt est 100. Si min(n, p) >= 1000, la valeur par défaut pour MaxIt est 200. Si l&apos;algorithme ne converge pas après le nombre maximum spécifié d&apos;itérations, la solution à MaxIt est acceptée et indiquée dans le rapport.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Multivariate RPCA Imputation;

```

### Multivariate SVD Imputation

**Syntaxe :** obj &lt;&lt; Multivariate SVD Imputation( Number of Singular Vectors( number ), Maximum Iterations( number ), Show Iteration Log( state=0|1 ) )

**Description :** Impute rapidement les valeurs manquantes pour les grands problèmes en itérant une méthode de remplissage de matrice SVD de rang faible.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Multivariate SVD Imputation(
	Number of Singular Vectors( 3 ),
	Maximum Iterations( 10 ),
	Show Iteration Log( 1 ),

);

```

### Options for Saving Imputed Values

**Syntaxe :** obj &lt;&lt; Options for Saving Imputed Values(1|2|3)

**Description :** Spécifie la méthode d&apos;enregistrement des valeurs imputées pour la méthode ADI. Entrer 1 pour spécifier l&apos;option Créer une nouvelle table de données, 2 pour spécifier l&apos;option Enregistrer la formule de calcul du score dans la table de données active et 3 pour spécifier l&apos;option Imputer les valeurs sur place.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Options for Saving Imputed Values( 1 ),
	Set Random Seed( 123 ),
	Automated Data Imputation
);

```

### Select Rows

**Syntaxe :** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**Description :** Sélectionne les lignes de la table de données qui contiennent des valeurs manquantes pour la ou les colonnes sélectionnées dans le rapport Colonnes manquantes.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Select rows( :OZONE );

```

### Set Random Seed

**Syntaxe :** obj &lt;&lt; Set Random Seed( number=0 )

**Description :** Définit la graine aléatoire pour l&apos;imputation automatisée des données. "0" par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Set Random Seed( 1234 ),
	Automated Data Imputation
);

```

### Show only columns with missing

**Syntaxe :** obj &lt;&lt; Show only columns with missing( state=0|1 )

**Description :** Supprime les colonnes de la liste qui n&apos;ont pas de valeurs manquantes.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Show Only Columns With Missing( 1 );

```

### Undo Imputation

**Syntaxe :** obj &lt;&lt; Undo Imputation

**Description :** Remplace les données imputées les plus récentes par des données manquantes.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Multivariate Normal Imputation
);
Wait( 2 );
obj << Undo Imputation;

```

### Validation Proportion

**Syntaxe :** obj &lt;&lt; Validation Proportion( number=0.3 )

**Description :** Définit la proportion de lignes à utiliser en tant que lignes de validation pour l&apos;imputation automatisée des données. "0.3" par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Validation Proportion( 0.25 ),
	Automated Data Imputation
);

```

## Messages d'éléments partagés

### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

#### Préconfiguration anonyme

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Rechercher dans les dossiers

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Rechercher par nom

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

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

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntaxe :** New JSL Preset( preset )

**Description :** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version ajoutée :** 18

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

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

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntaxe :** obj &lt;&lt; Redo ByGroup Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntaxe :** obj &lt;&lt; Relaunch ByGroup

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

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

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntaxe :** obj &lt;&lt; Report;Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

#### Exemple 1

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Exemple 2

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

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

```jsl


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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Explore Missing Values(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

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

