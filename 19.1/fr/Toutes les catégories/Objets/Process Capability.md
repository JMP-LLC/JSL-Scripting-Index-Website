# Process Capability



## Colonnes

### By

**Syntaxe :** obj = Process Capability(...&lt;By( column(s) )&gt;...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Lance une analyse distincte pour chaque niveau de la colonne spécifiée.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Grouping

**Syntaxe :** obj = Process Capability( Process Variables( columns), Grouping( columns) )

**Description :** Spécifie les colonnes en tant que variables de groupement.

**Exemple 1**

```jsl

dtLimits = Open( "$SAMPLE_DATA/Cheese Manufacturing Limits.jmp" );dt = Open( "$SAMPLE_DATA/Cheese Manufacturing Data.jmp" );dt << Process Capability(	Process Variables( :pH, :Salt Concentration, :Moisture Content ),	Grouping( :Cheese Type ),	Spec Limits( Use Limits Table( dtLimits ) ),	Moving Range Method( Average of Moving Ranges ),	Goal Plot( 1 ),	Capability Index Plot( 1 ),	Process Performance Plot( 0 ));

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :NPN1[:lot_id], :PNP1[:lot_id], :PNP2[:lot_id] ),	Grouping( :site ));

```

### Process Variables

**Syntaxe :** obj = Process Capability(...Process Variables( column(s) )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie les colonnes de données de processus qui contiennent les mesures à analyser.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));

```

## Constructeurs associés

### Process Capability

**Syntaxe :** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**Description :** Calcule l&apos;analyse de capabilité pour chaque processus et crée des graphiques permettant d&apos;analyser la capabilité de plusieurs processus à la fois. Les limites de spécification peuvent aussi être définies.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));

```

## Messages d'éléments

### AIAG (Ppk) Labeling

**Syntaxe :** obj &lt;&lt; "AIAG (Ppk) Labeling"n( state=0|1 )

**Description :** Active ou désactive l&apos;étiquetage AIAG des indices de capabilité en remplaçant l&apos;étiquetage « Cp » par l&apos;étiquetage « Pp ». Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer] ));obj << Individual Detail Reports( 1 );Wait( 1 );obj << "AIAG (Ppk) Labeling"n( 0 );

```

### Capability Box Plots

**Syntaxe :** obj &lt;&lt; Capability Box Plots( state=0|1 )

**Description :** Affiche ou masque une boîte à moustaches pour chaque processus. Pour créer des boîtes à moustaches, les valeurs de chaque processus sont centrées sur leur cible et standardisées par leurs limites de spécification. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ));Wait( 1 );obj << Capability Box Plots( 1 );

```

### Capability Index Plot

**Syntaxe :** obj &lt;&lt; Capability Index Plot( state=0|1, &lt;plot options&gt; )

**Description :** Affiche ou masque un graphique qui représente le Ppk global pour chaque processus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1 & Dist( Lognormal ), :Process 2 & Dist( Lognormal ),		:Process 3 & Dist( Weibull ), :Process 4 & Dist( Lognormal ),		:Process 5 & Dist( Weibull ), :Process 6 & Dist( Johnson ), :Process 7	),	Capability Index Plot( 0 ),	Goal Plot( 0 ));Wait( 1 );obj << Capability Index Plot( 1 );

```

### Color Out of Spec Values

**Syntaxe :** obj &lt;&lt; Color Out of Spec Values( state=0|1 )

**Description :** Colorie les cellules de la table de données correspondant aux valeurs qui se trouvent en dehors des spécifications. Les cellules dont les valeurs se trouvent en dessous de la tolérance inférieure sont coloriées en rouge, et les cellules dont les valeurs se trouvent au dessus de la tolérance supérieure sont coloriées en bleu.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Color Out of Spec Values( 1 );

```

### Get Limits

**Syntaxe :** obj = Process Capability(...Spec Limits(Get Limits( data table ) )...)

**Description :** Charge les limites de spécification depuis une table de limites.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Get Limits( dt2 ) ));

```

### Goal Plot

**Syntaxe :** obj &lt;&lt; Goal Plot( state=0|1, &lt;plot options&gt; )

**Description :** Affiche ou masque un graphique avec un point pour chaque processus. La moyenne standardisée par rapport aux spécifications se trouve sur l&apos;axe horizontal et l&apos;écart-type standardisé par rapport aux spécifications sur l&apos;axe vertical. Les points qui se trouvent au-dessus de l&apos;arc d&apos;objectif représentent les processus qui se trouvent sous le seuil Ppk (Cpk) spécifié. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Goal Plot( 0 ));Wait( 1 );obj << Goal Plot( 1 );

```

### Individual Detail Reports

**Syntaxe :** obj &lt;&lt; Individual Detail Reports( state=0|1 )

**Description :** Affiche ou masque un rapport de capabilité détaillé sur les observations distinct pour chaque processus.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Individual Detail Reports( 1 );

```

### Individual Detail Reports Cutoff

**Syntaxe :** obj &lt;&lt; Individual Detail Reports Cutoff( number=1 )

**Description :** Affiche les rapports détaillés sur les observations et masque le graphique d&apos;objectif et les boîtes à moustaches de capabilité si le nombre de variables du processus est inférieur ou égal à la valeur limite. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Individual Detail Reports Cutoff( 7 );

```

### Make Goal Plot Summary Table

**Syntaxe :** obj &lt;&lt; Make Goal Plot Summary Table

**Description :** Crée une nouvelle table de données qui contient les coordonnées des points intra et global tracés dans le graphique d&apos;objectif.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Make Goal Plot Summary Table;

```

### Order By

**Syntaxe :** obj &lt;&lt; Order By( "Ordre initial"|"Inverser l&apos;ordre initial"|"Cpk Sigma intra par ordre croissant"|"Cpk Sigma intra par ordre décroissant"|"Ppk Sigma global par ordre croissant"|"Ppk Sigma global par ordre décroissant" )

**Description :** Réordonne toutes les boîtes à moustaches, les rapports résumés et les rapports détaillés individuels dans l&apos;ordre spécifié.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Within Sigma Summary Report( 1 );Wait( 1 );obj << Order By( "Within Sigma Cpk Ascending" );

```

### Overall Sigma Normalized Box Plots

**Syntaxe :** obj &lt;&lt; Overall Sigma Normalized Box Plots( state=0|1 )

**Description :** Affiche ou masque une boîte à moustaches pour chaque processus. Les valeurs des boîtes à moustaches sont centrées sur la moyenne générale et standardisées par l&apos;estimation globale de l&apos;écart-type.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Overall Sigma Normalized Box Plots( 1 );

```

### Overall Sigma Summary Report

**Syntaxe :** obj &lt;&lt; Overall Sigma Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport résumé des indices de capabilité. Les indices de capabilité sont calculés à l&apos;aide de l&apos;estimation globale de l&apos;écart-type.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Overall Sigma Summary Report( 1 );

```

### Process Performance Plot

**Syntaxe :** obj &lt;&lt; Process Performance Plot( state=0|1, &lt;plot options&gt; )

**Description :** Affiche ou masque un graphique à quatre quadrants du Ppk de capabilité global par rapport à la stabilité.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ),);obj << Process Performance Plot( 1 );

```

### Save Distributions as Column Properties

**Syntaxe :** obj &lt;&lt; Save Distributions as Column Properties

**Description :** Enregistre la distribution utilisée pour calculer la capabilité comme propriété de colonne Distribution de la capabilité du processus. Une propriété de colonne est enregistrée pour chaque variable de processus dans l&apos;analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE & Dist( Johnson ), :CO, :SO2 & Dist( Lognormal ), :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Save Distributions as Column Properties;

```

### Save In Spec Indicator Formulas

**Syntaxe :** obj &lt;&lt; Save In Spec Indicator Formulas

**Description :** Crée une colonne de formules dans la table de données. La nouvelle colonne contient une valeur qui indique si une ligne se trouve dans les limites de spécification ou non.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save In Spec Indicator Formulas;

```

### Save Spec Limits as Column Properties

**Syntaxe :** obj &lt;&lt; Save Spec Limits as Column Properties

**Description :** Enregistre les limites de spécification dans une propriété de colonne pour chaque variable de processus dans l&apos;analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Save Spec Limits as Column Properties;

```

### Save Spec Limits to New Table

**Syntaxe :** obj &lt;&lt; Save Spec Limits to New Table

**Description :** Crée une nouvelle table de données contenant les limites de spécification, l&apos;importance du processus et les distributions pour chaque variable de processus. La table utilise un format en lignes et contient une ligne pour chaque variable du processus. L&apos;importance du processus et le type de distribution ne sont enregistrés que lorsqu&apos;ils sont applicables.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Spec Limits to New Table;

```

### Select Out of Spec Values

**Syntaxe :** obj &lt;&lt; Select Out of Spec Values( state=0|1 )

**Description :** Sélectionne toutes les lignes et colonnes dans la table de données qui contiennent au moins une valeur en dehors des limites de spécification.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Select Out of Spec Values( 1 );

```

### Use Limits Table

**Syntaxe :** obj = Process Capability(...Spec Limits(Use Limits Table( data table ) )...)

**Description :** Charge les limites de spécification depuis une table de limites.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Use Limits Table( dt2 ) ));

```

### Within Sigma Normalized Box Plots

**Syntaxe :** obj &lt;&lt; Within Sigma Normalized Box Plots( state=0|1 )

**Description :** Affiche ou masque un graphique qui contient une boîte à moustaches pour chaque processus. Les valeurs des boîtes à moustaches sont centrées sur la moyenne et divisées par l&apos;estimation intra de l&apos;écart-type.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Within Sigma Normalized Box Plots( 1 );

```

### Within Sigma Summary Report

**Syntaxe :** obj &lt;&lt; Within Sigma Summary Report( state=0|1 )

**Description :** Affiche ou masque un rapport résumé des indices de capabilité. Les indices de capabilité sont calculés à l&apos;aide de l&apos;estimation de l&apos;écart-type au sein du sous-groupe. Les résultats s&apos;affichent uniquement pour les variables avec les distributions normales spécifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Within Sigma Summary Report( 1 );

```

### Within or Between-and-Within Sigma Normalized Box Plots

**Syntaxe :** obj &lt;&lt; "Within or Between-and-Within Sigma Normalized Box Plots"n( state=0|1 )

**Description :** Affiche ou masque un graphique qui contient une boîte à moustaches pour chaque processus. Les valeurs des boîtes à moustaches sont centrées sur la moyenne et divisées par l&apos;estimation intra de l&apos;écart-type ou, le cas échéant, l&apos;estimation inter et intra.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( 1 );

```

### Within or Between-and-Within Sigma Summary Report

**Syntaxe :** obj &lt;&lt; "Within or Between-and-Within Sigma Summary Report"n( state=0|1 )

**Description :** Affiche ou masque un rapport résumé des indices de capabilité. Les indices de capabilité sont calculés à l&apos;aide de l&apos;estimation intra de l&apos;écart-type ou, le cas échéant, de l&apos;estimation du groupe inter et intra. Cette option n&apos;est disponible que lorsque l&apos;option Calculer la capabilité inter et intra est sélectionnée pour au moins un processus dans la fenêtre de lancement.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << "Within or Between-and-Within Sigma Summary Report"n( 1 );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntaxe :** obj = Process Capability(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Process Capability Analysis > Process Capability Analysis Comparisons > Process Capability Probability Plots

### Messages d'éléments

#### Parametric Fit Confidence Limits Shading

**Syntaxe :** scrobj &lt;&lt; Parametric Fit Confidence Limits Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de confiance de l&apos;ajustement paramétrique.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots(				1,				Lognormal Probability Plot( Parametric Fit Confidence Limits Shading( 1 ) )			)		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Parametric Fit Confidence Limits Shading( 0 );

```

#### Parametric Fit Line

**Syntaxe :** scrobj &lt;&lt; Parametric Fit Line( state=0|1 )

**Description :** Affiche ou masque la ligne de l&apos;ajustement paramétrique. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots( 1, Lognormal Probability Plot( Parametric Fit Line( 0 ) ) )		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Parametric Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Syntaxe :** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits( state=0|1 )

**Description :** Affiche ou masque les limites de confiance empiriques simultanées. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots(				1,				Lognormal Probability Plot( Simultaneous Empirical Confidence Limits( 0 ) )			)		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Syntaxe :** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage pour les limites de confiance empiriques simultanées. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots(				1,				Lognormal Probability Plot(					Simultaneous Empirical Confidence Limits Shading( 0 )				)			)		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons

### Messages d'éléments

#### Comparison Details

**Syntaxe :** scrobj &lt;&lt; Comparison Details( state=0|1 )

**Description :** Affiche ou masque un rapport contenant les valeurs AICc, BIC et -2Log-vraisemblance pour chaque distribution. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Normal,			<<Fit Gamma,			<<Fit Johnson,			<<Fit Lognormal,			<<Fit Weibull,			Comparison Details( 0 )		)	)});Wait( 1 );scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;scrobj << Comparison Details( 1 );

```

#### Comparison Histogram

**Syntaxe :** scrobj &lt;&lt; Comparison Histogram( state=0|1 )

**Description :** Affiche ou masque l&apos;histogramme de la comparaison de la distribution. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Normal,			<<Fit Gamma,			<<Fit Johnson,			<<Fit Lognormal,			<<Fit Weibull,			Comparison Histogram( 0 )		)	)});Wait( 1 );scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;scrobj << Comparison Histogram( 1 );

```

#### Fit Beta

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Beta )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution bêta dans le rapport Détails de la comparaison, et la courbe de densité dans l&apos;histogramme.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE ),	Spec Limits( OZONE( LSL( 0.05 ), Target( 0.15 ), USL( 0.4 ) ) ),	Individual Detail Reports( 1 ),	{:OZONE << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["OZONE Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Beta );

```

#### Fit Exponential

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Exponential )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution exponentielle dans le rapport Détails de la comparaison, et la courbe de densité dans l&apos;histogramme.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Exponential );

```

#### Fit Gamma

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Gamma )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution gamma dans le rapport Détails de la comparaison, et la courbe de densité dans l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Gamma );

```

#### Fit Johnson

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Johnson )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution de Johnson dans le rapport Détails de la comparaison, et la courbe de densité dans l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Johnson );

```

#### Fit Largest Extreme Value

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Largest Extreme Value )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution de la plus grande valeur extrême dans le rapport Détails de la comparaison et la courbe de densité dans l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value );

```

#### Fit Lognormal

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Lognormal )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution log-normale dans le rapport Détails de la comparaison, et la courbe de densité dans l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

#### Fit Nonparametric

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Nonparametric )

**Description :** Affiche le curseur de la largeur de bande du noyau de la distribution non paramétrique et la courbe de densité dans l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Nonparametric );

```

#### Fit Normal

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Normal )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution normale dans le rapport Détails de la comparaison, et la courbe de densité dans l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});

```

#### Fit SHASH

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit SHASH )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution SHASH dans le rapport Détails de la comparaison, et la courbe de densité dans l&apos;histogramme.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit SHASH );

```

#### Fit Smallest Extreme Value

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Smallest Extreme Value )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution de la plus petite valeur extrême dans le rapport Détails de la comparaison et la courbe de densité dans l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value );

```

#### Fit Weibull

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Weibull )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution de Weibull dans le rapport Détails de la comparaison, et la courbe de densité dans l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Weibull );

```

#### Mixture of 2 Normals

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Mixture of 2 Normals )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution de mélange de 2 normales dans le rapport Détails de la comparaison et la courbe de densité dans l&apos;histogramme.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Mixture of 2 Normals );

```

#### Mixture of 3 Normals

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Mixture of 3 Normals )

**Description :** Affiche l&apos;ajustement des statistiques de la distribution de mélange de 3 normales dans le rapport Détails de la comparaison et la courbe de densité dans l&apos;histogramme.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Mixture of 3 Normals );

```

#### Order by Comparison Criterion

**Syntaxe :** scrobj &lt;&lt; Order by Comparison Criterion( "AICc"|"BIC"|"-2Loglikelihood" )

**Description :** Réorganise le rapport Détails de la comparaison. Il peut être réorganisé en fonction de AICc, BIC, ou -2 Log-vraisemblance.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1, <<Fit Normal, <<Fit Gamma, <<Fit Johnson, <<Fit Lognormal, <<Fit Weibull,		)	)});Wait( 1 );scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);scrobj << Order by Comparison Criterion( "-2Loglikelihood" );

```

#### Probability Plots

**Syntaxe :** scrobj &lt;&lt; Probability Plots( state=0|1 )

**Description :** Affiche ou masque les graphiques de probabilité de la comparaison de la distribution.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal, <<Fit Lognormal ) )});Wait( 1 );scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);scrobj << Probability Plots( 1 );

```

## Process Capability Analysis > Process Capability Analysis Histogram

### Messages d'éléments

#### Show Between-and-Within Sigma Density

**Syntaxe :** scrobj &lt;&lt; "Show Between-and-Within Sigma Density"n( state=0|1 )

**Description :** Affiche ou masque la courbe de densité qui utilise le sigma inter et intra dans l&apos;histogramme. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Within Subgroup Variation( Average of Unbiased Standard Deviations ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		Histogram( 1, "Show Between-and-Within Sigma Density"n( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << "Show Between-and-Within Sigma Density"n( 1 );

```

#### Show Count Axis

**Syntaxe :** scrobj &lt;&lt; Show Count Axis( state=0|1 )

**Description :** Affiche ou masque un axe de dénombrement sur la droite du cadre de l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Count Axis( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Count Axis( 1 );

```

#### Show Density Axis

**Syntaxe :** scrobj &lt;&lt; Show Density Axis( state=0|1 )

**Description :** Affiche ou masque un axe de densité sur la droite du cadre de l&apos;histogramme.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Density Axis( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Density Axis( 1 );

```

#### Show Overall Sigma Density

**Syntaxe :** scrobj &lt;&lt; Show Overall Sigma Density( state=0|1 )

**Description :** Affiche ou masque la courbe de densité qui utilise le sigma global dans l&apos;histogramme. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis(		Histogram( 1, Show Overall Sigma Density( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Overall Sigma Density( 1 );

```

#### Show Spec Limits

**Syntaxe :** scrobj &lt;&lt; Show Spec Limits( state=0|1 )

**Description :** Affiche ou masque les limites de spécification inférieure et supérieure dans l&apos;histogramme. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Spec Limits( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Spec Limits( 1 );

```

#### Show Target

**Syntaxe :** scrobj &lt;&lt; Show Target( state=0|1 )

**Description :** Affiche ou masque la ligne cible dans l&apos;histogramme. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Target( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Target( 1 );

```

#### Show Within Sigma Density

**Syntaxe :** scrobj &lt;&lt; Show Within Sigma Density( state=0|1 )

**Description :** Affiche ou masque la courbe de densité qui utilise le sigma intra dans l&apos;histogramme. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis(		Histogram( 1, Show Within Sigma Density( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Within Sigma Density( 1 );

```

## Process Capability Analysis > Process Capability Interactive Plot

### Messages d'éléments

#### Capability

**Syntaxe :** scrobj &lt;&lt; Capability( state=0|1 )

**Description :** Affiche ou masque les indices de capabilité. Les indices de capabilité d&apos;origine sont basés sur le sigma global. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, Capability( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Capability( 1 );

```

#### Nonconformance

**Syntaxe :** scrobj &lt;&lt; Nonconformance( state=0|1 )

**Description :** Affiche ou masque la non-conformité. Les valeurs de non-conformité d&apos;origine sont basées sur le sigma global. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, Nonconformance( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Nonconformance( 1 );

```

#### Revert to Original Values

**Syntaxe :** scrobj &lt;&lt; Revert to Original Values

**Description :** Rétablit les valeurs d&apos;origine du graphique de capabilité interactif.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, New Values( Mean( 400 ) ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Revert to Original Values;

```

#### Save New Spec Limits as a Column Property

**Syntaxe :** scrobj &lt;&lt; Save New Spec Limits as a Column Property

**Description :** Enregistre les nouvelles limites de spécification en tant que propriété de colonne dans la table de données d&apos;origine.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, New Values( LSL( 150 ), Target( 300 ), USL( 450 ) ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Save New Spec Limits as a Column Property;

```

## Process Capability Analysis > Process Capability Normal Probability Plot

### Messages d'éléments

#### Normal Fit Confidence Limits Shading

**Syntaxe :** scrobj &lt;&lt; Normal Fit Confidence Limits Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de confiance de la régression normale dans le graphique de probabilité normale. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Normal Fit Confidence Limits Shading( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Normal Fit Confidence Limits Shading( 1 );

```

#### Normal Fit Line

**Syntaxe :** scrobj &lt;&lt; Normal Fit Line( state=0|1 )

**Description :** Affiche ou masque la régression normale simple dans le graphique de probabilité normale. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Normal Fit Line( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Normal Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Syntaxe :** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits( state=0|1 )

**Description :** Affiche ou masque les limites de confiance empiriques simultanées dans le graphique de probabilité normale du rapport Capabilité du processus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Syntaxe :** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage des limites de confiance empiriques simultanées dans le graphique de probabilité normale du rapport Capabilité du processus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits Shading( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis

### Messages d'éléments

#### Between-and-Within Sigma Capability

**Syntaxe :** scrobj &lt;&lt; "Between-and-Within Sigma Capability"n( state=0|1 )

**Description :** Affiche ou masque les indices de capabilité qui utilisent le sigma inter et intra. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		"Between-and-Within Sigma Capability"n( 0 )	)});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << Get Scriptable Object;scrobj << "Between-and-Within Sigma Capability"n( 1 );

```

#### Between-and-Within Sigma Target Index

**Syntaxe :** scrobj &lt;&lt; "Between-and-Within Sigma Target Index"n( state=0|1 )

**Description :** Affiche ou masque une estimation de l&apos;indice cible basé sur le sigma inter et intra.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		"Between-and-Within Sigma Target Index"n( 1 )	)});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << "Between-and-Within Sigma Target Index"n( 0 );

```

#### Between-and-Within Sigma Z Benchmark

**Syntaxe :** scrobj &lt;&lt; "Between-and-Within Sigma Z Benchmark"n( state=0|1 )

**Description :** Affiche ou masque les indices du benchmark Z qui utilisent le sigma inter et intra.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		"Between-and-Within Sigma Z Benchmark"n( 0 )	)});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << "Between-and-Within Sigma Z Benchmark"n( 1 );

```

#### Compare Distributions

**Syntaxe :** scrobj &lt;&lt; Compare Distributions( state=0|1, &lt; &lt;&lt;distribution options &gt; )

**Description :** Affiche ou masque le panneau de configuration pour comparer les distributions du processus.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis( Compare Distributions( 0 ) )});Wait( 1 );scrobj = Report( obj )["Process 1(Lognormal) Capability"] << get scriptable object;scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit SHASH );

```

**Exemple 3**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = Report( obj )["Process 1(Lognormal) Capability"] << Get Scriptable Object;scrobj << Compare Distributions(	1, <<Fit Gamma, <<Fit Johnson, <<FitLognormal, <<Fit Weibull);

```

**Exemple 4**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis(		Compare Distributions( 1, <<Fit Normal, <<Fit Gamma )	)});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 0 );

```

#### Fix Parameters

**Syntaxe :** scrobj &lt;&lt; Fix Parameters( vector )

**Description :** Fixe certains paramètres aux valeurs spécifiées et effectue une nouvelle estimation du reste.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Weibull ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Weibull )) <<	Process Capability Analysis( Fix Parameters( [11, .] ) )});Wait( 1 );scrobj = Report( obj )["Process 1(Weibull*) Capability"] << get scriptable object;scrobj << Fix Parameters( [., .] );

```

#### Histogram

**Syntaxe :** scrobj &lt;&lt; Histogram( state=0|1 )

**Description :** Dans le rapport détaillé sur les observations, affiche ou masque l&apos;histogramme des données du processus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Histogram( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Histogram( 1 );

```

#### Interactive Capability Plot

**Syntaxe :** scrobj &lt;&lt; Interactive Capability Plot( state=0|1 )

**Description :** Affiche ou masque un rapport de capabilité interactif qui vous permet d&apos;explorer l&apos;effet des modifications du processus ou des limites de spécification sur la capabilité.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis( Interactive Capability Plot( 0 ) )});Wait( 1 );scrobj = Report( obj )["PNP1 Capability"] << get scriptable object;scrobj << Interactive Capability Plot( 1 );

```

#### Nonconformance

**Syntaxe :** scrobj &lt;&lt; Nonconformance( state=0|1 )

**Description :** Affiche ou masque un rapport du pourcentage observé et attendu des observations qui se trouvent en dehors des limites de spécification. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Nonconformance( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Nonconformance( 1 );

```

#### Nonparametric Density

**Syntaxe :** scrobj &lt;&lt; Nonparametric Density( state=0|1 )

**Description :** Affiche ou masque le rapport de densité non paramétrique, qui fournit la largeur de bande du noyau à utiliser pour ajuster la distribution non paramétrique. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Purity & Dist( Nonparametric ) ),	Individual Detail Reports( 1 ),	{(:Purity & Dist( Nonparametric )) <<	Process Capability Analysis( Nonparametric Density( 0 ) )});Wait( 1 );scrobj = Report( obj )["Purity(Nonparametric) Capability"] << get scriptable object;scrobj << Nonparametric Density( 1 );

```

#### Normal Probability Plot

**Syntaxe :** scrobj &lt;&lt; Normal Probability Plot( state=0|1 )

**Description :** Affiche ou masque un graphique de probabilité normale.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),);Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Normal Probability Plot( 1 );

```

#### Overall Sigma Capability

**Syntaxe :** scrobj &lt;&lt; Overall Sigma Capability( state=0|1 )

**Description :** Affiche ou masque les indices de capabilité basés sur le sigma global. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Capability( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Overall Sigma Capability( 1 );

```

#### Overall Sigma Z Benchmark

**Syntaxe :** scrobj &lt;&lt; Overall Sigma Z Benchmark( state=0|1 )

**Description :** Affiche ou masque les indices du benchmark Z basés sur le sigma global.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Z Benchmark( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Overall Sigma Z Benchmark( 1 );

```

#### Parameter Estimates

**Syntaxe :** scrobj &lt;&lt; Parameter Estimates( state=0|1 )

**Description :** Affiche ou masque le rapport d&apos;estimation des paramètres pour les distributions paramétriques non-normales. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Thickness & Dist( Johnson ) ),	Individual Detail Reports( 1 ),	{(:Thickness & Dist( Johnson )) <<	Process Capability Analysis( Parameter Estimates( 0 ) )});Wait( 1 );scrobj = Report( obj )["Thickness(Johnson) Capability"] << get scriptable object;scrobj << Parameter Estimates( 1 );

```

#### Process Summary

**Syntaxe :** scrobj &lt;&lt; Process Summary( state=0|1 )

**Description :** Affiche ou masque les statistiques de résumé du processus. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Process Summary( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Process Summary( 1 );

```

#### Within Sigma Capability

**Syntaxe :** scrobj &lt;&lt; Within Sigma Capability( state=0|1 )

**Description :** Affiche ou masque les indices de capabilité et leurs intervalles de confiance basés sur le sigma intra. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Within Sigma Capability( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Within Sigma Capability( 1 );

```

#### Within Sigma Target Index

**Syntaxe :** scrobj &lt;&lt; Within Sigma Target Index( state=0|1 )

**Description :** Affiche ou masque une estimation de l&apos;indice cible basé sur le sigma intra.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Within Sigma Target Index( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Within Sigma Target Index( 1 );

```

#### Within Sigma Z Benchmark

**Syntaxe :** scrobj &lt;&lt; Within Sigma Z Benchmark( state=0|1 )

**Description :** Affiche ou masque les indices du benchmark Z basés sur le sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Within Sigma Z Benchmark( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Within Sigma Z Benchmark( 1 );

```

## Process Capability Goal Plot

### Messages d'éléments

#### Capability Lines

**Syntaxe :** obj &lt;&lt; Goal Plot( 1, Capability Lines( number=1.0 ) ); scrobj &lt;&lt; Capability Lines( number=1.0 )

**Description :** Définit la valeur Ppk (Cpk) qui contrôle les lignes du triangle cible dans le graphique cible. Cette valeur apparaît également dans la zone d&apos;édition Ppk (Cpk). "1.0" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Capability Lines( 1.5 ) );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);Wait( 1 );scrobj << Capability Lines( 1 );

```

#### Defect Rate Contour

**Syntaxe :** obj &lt;&lt; Goal Plot( 1, Defect Rate Contour( number=0.0001 ) ); scrobj &lt;&lt; Defect Rate Contour( number=0.0001 )

**Description :** Affiche ou masque la courbe d&apos;isoréponses du taux de défaut spécifié. "0.0001" par défaut.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Defect Rate Contour( 0.01 ) );

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Defect Rate Contour( 0.01 );

```

#### Label Overall Sigma Points

**Syntaxe :** obj &lt;&lt; Goal Plot( 1, Label Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Overall Sigma Points( state=0|1 )

**Description :** Affiche ou masque les étiquettes des points sur le graphique d&apos;objectif. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma global.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Label Overall Sigma Points( 0 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Label Overall Sigma Points( 1 );

```

#### Label Within Sigma Points

**Syntaxe :** obj &lt;&lt; Goal Plot( 1, Label Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Within Sigma Points( state=0|1 )

**Description :** Affiche ou masque les étiquettes des points sur le graphique d&apos;objectif. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),);obj << Goal Plot(	1,	Show Within Sigma Points( 1 ),	Show Overall Sigma Points( 0 ),	Label Within Sigma Points( 1 ));Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Syntaxe :** obj &lt;&lt; Goal Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Description :** Affiche ou masque les étiquettes des points sur le graphique d&apos;objectif. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma intra ou, le cas échéant, de l&apos;estimation du sigma inter et intra.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),);obj << Goal Plot(	1,	"Show Within or Between-and-Within Sigma Points"n( 1 ),	Show Overall Sigma Points( 0 ),	"Label Within or Between-and-Within Sigma Points"n( 1 ));Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Syntaxe :** obj &lt;&lt; Goal Plot( 1, Shade Levels( state=0|1 ) ); scrobj &lt;&lt; Shade Levels( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage du niveau Ppk (Cpk) dans le graphique d&apos;objectif. Si p représente l&apos;objectif Ppk (Cpk) saisi dans la zone d&apos;édition, les processus avec un Ppk (Cpk) supérieur à 2\*p sont ombrés en vert ; les processus avec un Ppk (Cpk) inférieur à p sont ombrés en rouge ; et les processus avec un Ppk (Cpk) supérieur à p et inférieur à 2\*p sont ombrés en jaune.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Shade Levels( 1 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Syntaxe :** obj &lt;&lt; Goal Plot( 1, Show Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Overall Sigma Points( state=0|1 )

**Description :** Affiche ou masque les points sur le graphique d&apos;objectif. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma global. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),);Wait( 1 );obj << Goal Plot( 1, Show Overall Sigma Points( 0 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Syntaxe :** obj &lt;&lt; Goal Plot( 1, Show Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Within Sigma Points( state=0|1 )

**Description :** Affiche ou masque les points sur le graphique d&apos;objectif. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 1 );obj << Goal Plot( 1, Show Within Sigma Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Syntaxe :** obj &lt;&lt; Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Description :** Affiche ou masque les points sur le graphique d&apos;objectif. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma intra ou, le cas échéant, de l&apos;estimation du sigma inter et intra.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 1 );obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Index Plot

### Messages d'éléments

#### Capability Lines

**Syntaxe :** obj &lt;&lt; Capability Index Plot( 1, Capability Lines( number=1.0 ) ); scrobj &lt;&lt; Capability Lines( number=1.0 )

**Description :** Définit la valeur Ppk (Cpk) qui contrôle la ligne de référence du Ppk (Cpk) dans le graphique de l&apos;indice de capabilité. Cette valeur apparaît également dans la zone d&apos;édition Ppk (Cpk). "1.0" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1 & Dist( Johnson ), :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal )	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Capability Lines( 2.0 ) );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);Wait( 1 );scrobj << Capability Lines( 1.0 );

```

#### Label Overall Sigma Points

**Syntaxe :** obj &lt;&lt; Capability Index Plot( 1, Label Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Overall Sigma Points( state=0|1 )

**Description :** Affiche ou masque les étiquettes des points sur le graphique de l&apos;indice de capabilité. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma global.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Label Overall Sigma Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Label Overall Sigma Points( 0 );

```

#### Label Within Sigma Points

**Syntaxe :** obj &lt;&lt; Capability Index Plot( 1, Label Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Within Sigma Points( state=0|1 )

**Description :** Affiche ou masque les étiquettes des points sur le graphique de l&apos;indice de capabilité. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Moving Range Method( Average of Moving Ranges ),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot(	1,	Show Within Sigma Points( 1 ),	Label Within Sigma Points( 1 ));Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Syntaxe :** obj &lt;&lt; Capability Index Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Description :** Affiche ou masque les étiquettes des points sur le graphique de l&apos;indice de capabilité. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma intra ou, le cas échéant, de l&apos;estimation du sigma inter et intra.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot(	1,	"Show Within or Between-and-Within Sigma Points"n( 1 ),	"Label Within or Between-and-Within Sigma Points"n( 1 ));Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Syntaxe :** obj &lt;&lt; Capability Index Plot( 1, Shade Levels( state=0|1 ) ); scrobj &lt;&lt; Shade Levels( state=0|1 )

**Description :** Affiche ou masque l&apos;ombrage du niveau Ppk (Cpk) dans le graphique de l&apos;indice de capabilité. Si p représente la valeur Ppk (Cpk) saisie dans la zone d&apos;édition, les processus avec un Ppk (Cpk) supérieur à 2\*p sont ombrés en vert ; les processus avec un Ppk (Cpk) inférieur à p sont ombrés en rouge ; et les processus avec un Ppk (Cpk) supérieur à p et inférieur à 2\*p sont ombrés en jaune.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Shade Levels( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Syntaxe :** obj &lt;&lt; Capability Index Plot( 1, Show Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Overall Sigma Points( state=0|1 )

**Description :** Affiche ou masque les points sur le graphique de l&apos;indice de capabilité. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma global. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot(	1,	Show Within Sigma Points( 1 ),	Show Overall Sigma Points( 0 ));Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Syntaxe :** obj &lt;&lt; Capability Index Plot( 1, Show Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Within Sigma Points( state=0|1 )

**Description :** Affiche ou masque les points sur le graphique de l&apos;indice de capabilité. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Moving Range Method( Average of Moving Ranges ),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Syntaxe :** obj &lt;&lt; Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Description :** Affiche ou masque les points sur le graphique de l&apos;indice de capabilité. Les points sont calculés à l&apos;aide de l&apos;estimation du sigma intra ou, le cas échéant, de l&apos;estimation du sigma inter et intra.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Performance Plot

### Messages d'éléments

#### Capability Boundary

**Syntaxe :** obj &lt;&lt; Process Performance Plot( 1, Capability Boundary( number=1.0 ) ); scrobj &lt;&lt; Capability Boundary( number=1.0 )

**Description :** Définit la valeur du Ppk de capabilité global qui contrôle les frontières du graphique de performance des processus afin de déterminer si les processus sont capables ou non. Cette valeur s&apos;affiche également dans la zone d&apos;édition Ppk global. "1.0" par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));Wait( 1 );obj << Process Performance Plot( 1, Capability Boundary( 1.33 ) );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);Wait( 1 );scrobj << Capability Boundary( 1 );

```

#### Label Points

**Syntaxe :** obj &lt;&lt; Process Performance Plot( 1, Label Points( state=0|1 ) ); scrobj &lt;&lt; Label Points( state=0|1 )

**Description :** Affiche ou masque les noms des processus en tant qu&apos;étiquettes pour les points du graphique de performance des processus.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));obj << Process Performance Plot( 1, Label Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);scrobj << Label Points( 0 );

```

#### Show Within Cpk Curve

**Syntaxe :** obj &lt;&lt; Process Performance Plot( 1, Show Within Cpk Curve( state=0|1 ) ); scrobj &lt;&lt; Show Within Cpk Curve( state=0|1 )

**Description :** Affiche ou masque la courbe Cpk intra dans le graphique de performance des processus. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));obj << Process Performance Plot( 1, Show Within Cpk Curve( 0 ) );Wait( 1 );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);scrobj << Show Within Cpk Curve( 1 );

```

#### Stability Boundary

**Syntaxe :** obj &lt;&lt; Process Performance Plot( 1, Stability Boundary( number=1.25 ) ); scrobj &lt;&lt; Stability Boundary( number=1.25 )

**Description :** Définit la valeur du ratio de stabilité qui contrôle les frontières du graphique de performance des processus afin de déterminer si les processus sont stables ou non. "1.25" par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));Wait( 1 );obj << Process Performance Plot( 1, Stability Boundary( 1.7 ) );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);Wait( 1 );scrobj << Stability Boundary( 1.25 );

```

