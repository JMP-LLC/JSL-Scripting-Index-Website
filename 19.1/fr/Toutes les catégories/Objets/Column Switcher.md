# Column Switcher



## Messages d'éléments

### Close Outline

**Syntaxe :** obj &lt;&lt; Close Outline( state=0|1 )

**Description :** Ouvre ou ferme la zone de structure du sélecteur de colonnes

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Close Outline( 1 );

```

### Get Current

**Syntaxe :** obj &lt;&lt; Get Current

**Description :** obtenir le nom de la variable active

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Current( "country" );ColumnSwitcherObject << Get Current/*country*/ ;

```

### Get Layout

**Syntaxe :** obj &lt;&lt; Get Layout

**Description :** Obtient la mise en page de plusieurs sélecteurs de colonnes. Vertical(0) ou horizontal(1).

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );gb = dt << Graph Builder(	Variables( X( :Country ), Y( :Weight ) ),	Elements( Bar( X, Y, Legend( 4 ) ) ));cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type}, Layout( 1 ) );cs2 = gb << Column Switcher(	:Weight,	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size});If( cs2 << Get Layout() == 1,	Print( "Horizontal" ),	Print( "Vertical" ));

```

### Get List

**Syntaxe :** obj &lt;&lt; Get List

**Description :** obtenir la liste des variables disponibles

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Get List/*{"sex","country","marital status"}*/ ;

```

### Get Original

**Syntaxe :** obj &lt;&lt; Get Original

**Description :** obtenir le nom de la variable d&apos;origine

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Next;ColumnSwitcherObject << Get Original/*marital status*/ ;

```

### Get Speed

**Syntaxe :** obj &lt;&lt; Get Speed

**Description :** fpm = obj<<getSpeed /\* in Frames Per Minute \*/;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});FPM = ColumnSwitcherObject << Get Speed;

```

### Link Platform

**Syntaxe :** obj &lt;&lt; Link Platform( platform )

**Description :** Lie une plate-forme à ce sélecteur de colonnes.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );columnSwitcher = dt << Column Switcher(	:Process 1,	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7});gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );columnSwitcher << Link Platform( gb );

```

### Make Column Switch Handler

**Syntaxe :** handler = cs &lt;&lt; Make Column Switch Handler( function(pre), function(post) )

**Description :** Crée un gestionnaire pour les sélecteurs de colonnes avec des fonctions de rappel appelées avant et après le remplacement de la colonne. Les fonctions de rappel reçoivent la colonne précédente, la colonne suivante et le sélecteur de colonnes. La fonction spécifiée avant le remplacement renvoie une valeur différente de zéro pour autoriser le remplacement. La valeur 0 empêche le remplacement. La fonction appelée après le remplacement ne renvoie aucune valeur.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );columnSwitcher = gb << Column Switcher(	:Process 1,	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7});pre = Function( {currentColumn, nextColumn, switcher},	Print(		"Before switch: " || (currentColumn << get name) || " >> " || (nextColumn << get name		) || " [Column Switcher] current: " || (columnSwitcher << Get Current)	);	If( nextColumn << get name == "Process 4",		0,		1	););post = Function( {previousColumn, currentColumn, switcher},	Print(		"After switch: " || (previousColumn << get name) || " >> " || (currentColumn <<		get name) || " [Column Switcher] current: " || (columnSwitcher << Get Current)	));handler = columnSwitcher << Make Column Switch Handler( pre, post );columnSwitcher << Run;

```

### Next

**Syntaxe :** obj &lt;&lt; Next

**Description :** Remplacer la sélection du sélecteur de colonne par le choix disponible suivant.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Next;

```

### Pause

**Syntaxe :** obj &lt;&lt; Pause

**Description :** mettre l&apos;animation en pause

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Run;Wait( 5/*seconds, while it animates*/ );ColumnSwitcherObject << Pause;

```

### Previous

**Syntaxe :** obj &lt;&lt; Previous

**Description :** Remplacer la sélection du sélecteur de colonne par le choix disponible précédent.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Previous;

```

### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprimer ce sélecteur de colonne

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Run;Wait( 2/*seconds, while it animates*/ );ColumnSwitcherObject << Remove Column Switcher;

```

### Retain Axis Settings

**Syntaxe :** obj &lt;&lt; Retain Axis Settings( state=0|1 )

**Description :** Certains graphiques stockent les personnalisations d&apos;axe en fonction du nom de la colonne. Par défaut, ces personnalisations sont supprimées lors du basculement des colonnes. Si cette option est activée, la colonne est mise à jour au moment du basculement, de manière à ce que les personnalisations s&apos;appliquent au nouveau graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );Graph Builder(	Variables( X( :Process 1 ), Y( :Process 2 ) ),	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) ),	Column Switcher(		:Process 1,		{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7},		Retain Axis Settings( 1 )	),	SendToReport(		Dispatch( {}, "Process 1", ScaleBox,			{Min( -0.5 ), Max( 22 ), Inc( 4 ), Minor Ticks( 3 ),			Add Ref Line( 12, "Solid", "Black", "", 1 )}		)	));

```

### Run

**Syntaxe :** obj &lt;&lt; Run

**Description :** lancer l&apos;animation

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Run;

```

### Script

**Syntaxe :** obj &lt;&lt; Script( script )

**Description :** Définir un script exécuté lors du remplacement de la colonne

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Script(	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) ));ColumnSwitcherObject << Run;Wait( 5/*seconds, while it animates*/ );

```

### Set Current

**Syntaxe :** obj &lt;&lt; Set Current( string )

**Description :** définir la variable active

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Current( "country" );

```

### Set Layout

**Syntaxe :** obj &lt;&lt; Set Layout( 0 = Vertical | 1 = Horizontal )

**Description :** Définit la mise en page de plusieurs sélecteurs de colonnes à vertical(0) ou horizontal(1).

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );gb = dt << Graph Builder(	Variables( X( :Country ), Y( :Weight ) ),	Elements( Bar( X, Y, Legend( 4 ) ) ));cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type} );cs2 = gb << Column Switcher(	:Weight,	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size});cs1 << Set Layout( 1 );

```

### Set N Lines

**Syntaxe :** obj &lt;&lt; Set N Lines( number )

**Description :** Définir le nombre de lignes dans la liste des noms de colonne

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set N Lines( 20 );

```

### Set Script

**Syntaxe :** obj &lt;&lt; Set Script( script )

**Description :** Définir un script exécuté lors du remplacement de la colonne

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Script(	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) ));ColumnSwitcherObject << Run;Wait( 5/*seconds, while it animates*/ );

```

### Set Size

**Syntaxe :** obj &lt;&lt; Set Size( number )

**Description :** Définir la largeur en pixels de la liste des noms de colonne

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Size( 300 );

```

### Set Speed

**Syntaxe :** obj &lt;&lt; Set Speed( number )

**Description :** obj<<setSpeed(60) /\* in Frames Per Minute \*/;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Speed( 60 );/*FPM*/ColumnSwitcherObject << Run;

```

### Title

**Syntaxe :** obj &lt;&lt; Title( string )

**Description :** Définit le titre de la zone de structure du sélecteur de colonnes

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Title( "Switch on X" );

```

