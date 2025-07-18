# Preferences



## Messages d'éléments

### Add Color Theme

**Syntaxe :** obj &lt;&lt; Add Color Theme( Add Color Theme({"Name", &lt;type|style&gt;, {color, ..., &lt;Missing(color)&gt;}, &lt;{position, ...}&gt;}, &lt;color blindness discernability&gt;) )

**Description :** Crée un nouveau thème de couleur personnalisé et l&apos;enregistre avec le sélecteur de thème.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference(
	Add Color Theme(
		{"Sunny", {{255, 255, 0}, {255, 128, 64}, {255, 0, 0}, {163, 12, 27}}, {0,
		0.5, 0.642857142857143, 1}}
	)
);
Show( Get Color Theme Detail( "Sunny" ) );

```

### Add Rows default number of rows

**Syntaxe :** obj &lt;&lt; Add Rows default number of rows( number )

**Description :** Nombre initial de lignes dans la fenêtre Ajouter des lignes

**JMP Version ajoutée :** 18

### Add Rows recall last value

**Syntaxe :** obj &lt;&lt; Add Rows recall last value( state=0|1 )

**Description :** La dernière valeur saisie est utilisée pour le nombre de lignes à ajouter

**JMP Version ajoutée :** 18

### Add files opened by scripts to the Recent Files list

**Syntaxe :** obj &lt;&lt; Add files opened by scripts to the Recent Files list( state=0|1 )

**Description :** Modifie l&apos;option prédéfinie selon laquelle les fichiers ouverts avec la fonction JSL Open() sont ajoutés à la liste des fichiers récents.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Add files opened by scripts to the Recent Files list( 1 ) );

```

### Allow 16 Bit List Check Compression

**Syntaxe :** obj &lt;&lt; Allow 16 Bit List Check Compression( state=0|1 )

**Description :** Spécifie s&apos;il faut utiliser la Vérification de liste pour encoder les valeurs lorsqu&apos;il y a plus de 255 valeurs distinctes dans la colonne. Si elles sont encodées, ces colonnes ne peuvent pas être lues par JMP 14 ou une version antérieure.

**JMP Version ajoutée :** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow 16 Bit List Check Compression( 1 ) );

```

### Allow Compress Selected Columns to create compact columns

**Syntaxe :** obj &lt;&lt; Allow Compress Selected Columns to create compact columns( state=0|1 )

**Description :** Compresser les colonnes sélectionnées permet de compacter les colonnes si cela utilise moins d&apos;espace disque.

**JMP Version ajoutée :** 18

### Allow Unquoted Strings in JSL

**Syntaxe :** obj &lt;&lt; Allow Unquoted Strings in JSL( "Non"|"Oui (avec un avertissement)"|"Oui (aucun avertissement)" )

### Allow mixed ISO format patterns

**Syntaxe :** obj &lt;&lt; Allow mixed ISO format patterns( state=0|1 )

**Description :** Autoriser les dates des modèles de format avec des semaines ISO (<ww>) et des années non ISO (<YYYY> ou <YY>), et avec des semaines non ISO (<WW1> ou <WW2>) et des années ISO (<yyyy> ou <yy>). Les semaines et années ISO ne sont pas compatibles avec les semaines et années non ISO. Elles ne doivent pas être mélangées. Par défaut, JMP n&apos;autorise pas la création de ce format de date.

**JMP Version ajoutée :** 18

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow mixed ISO format patterns( 1 ) );

```

### Allow short numeric data format

**Syntaxe :** obj &lt;&lt; Allow short numeric data format( state=0|1 )

**Description :** Modifie le paramètre par défaut pour permettre l’utilisation du format de données numérique court.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow short numeric data format( 1 ) );

```

### Auto Hide Menus

**Syntaxe :** obj &lt;&lt; Auto Hide Menus( "Toujours"|"Jamais"|"En fonction de la taille de la fenêtre" )

**Description :** Détermine si et quand JMP masque automatiquement le menu et les barres d’outils. Remarque : ces options ne sont disponibles que sous Windows.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Auto Hide Menus( "Always" ) );

```

### Auto Run Recent JSL

**Syntaxe :** obj &lt;&lt; Auto Run Recent JSL( state=0|1 )

**Description :** Modifie le comportement par défaut selon lequel les scripts JSL récemment soumis sont exécutés automatiquement. Remarque : ces options ne sont disponibles que sous Windows.

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto Run Recent JSL( 1 ) );

```

### Auto match brackets in script editor

**Syntaxe :** obj &lt;&lt; Auto match brackets in script editor( state=0|1 )

**Description :** Modifie le paramètre par défaut pour l’appariement automatique des crochets dans la fenêtre de script. Remarque : ces options ne sont disponibles que sous Windows.

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto match brackets in script editor( 1 ) );

```

### Autosave maximum data table columns

**Syntaxe :** obj &lt;&lt; Autosave maximum data table columns( number )

**Description :** Nombre maximum de colonnes de la table de données qui seront automatiquement enregistrées.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Columns( 1000 ) );

```

### Autosave maximum data table rows

**Syntaxe :** obj &lt;&lt; Autosave maximum data table rows( number )

**Description :** Nombre maximum de lignes de la table de données qui seront automatiquement enregistrées.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Rows( 10000 ) );

```

### Autosave timeout

**Syntaxe :** obj &lt;&lt; Autosave timeout( number )

**Description :** L&apos;intervalle de temps entre chaque enregistrement automatique est en minutes. Une fois l&apos;intervalle de temps écoulé, tous les fichiers ouverts et modifiés seront enregistrés. La valeur par défaut est "0" et indique qu&apos;aucun enregistrement automatique ne sera exécuté.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Timeout( 15 ) );

```

### Axis Title Above

**Syntaxe :** obj &lt;&lt; Axis Title Above( state=0|1 )

**Description :** Modifie la position de l&apos;étiquette de l&apos;axe y dans les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Axis Title Above( 1 ) );

```

### Background Color

**Syntaxe :** obj &lt;&lt; Background Color( color )

**Description :** Modifie le paramètre par défaut relatif à la couleur de fond dans toutes les fenêtres. Remarque : cette option n’est disponible que sous Windows.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Background Color( "Light Blue" ) );

```

### Bad to Good Color Theme

**Syntaxe :** obj &lt;&lt; Bad to Good Color Theme( "name" )

**Description :** Modifie le paramètre par défaut pour que le thème de couleur des variables continues apparaisse dans tous les graphiques.

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Bad to Good Color Theme( "Green to Purple" ) );
Show( Get Preference( Bad to Good Color Theme ) );

```

### Box Plot Line Width

**Syntaxe :** obj &lt;&lt; Box Plot Line Width( number )

**Description :** Modifie la largeur de ligne par défaut des boîtes à moustaches.

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Box Plot Line Width( 2 ) );

```

### Bypass Proxy

**Syntaxe :** obj &lt;&lt; Bypass Proxy( text )

**Description :** Désactiver l&apos;utilisation du proxy pour certains hôtes spécifiques

**JMP Version ajoutée :** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Bypass Proxy( "www.example.com" ) );

```

### Categorical Color Theme

**Syntaxe :** obj &lt;&lt; Categorical Color Theme( "name" )

**Description :** Modifie le paramètre par défaut pour que le thème de couleur des variables catégorielles apparaisse dans tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Categorical Color Theme ) );
Set Preference( Categorical Color Theme( "Jet" ) );
Show( Get Preference( Categorical Color Theme ) );

```

### Categorical graph type

**Syntaxe :** obj &lt;&lt; Categorical graph type( "Auto"|"Histogramme"|"Barres"|"Carte thermique"|"Mosaïque"|"Carte de suivi"|"Carte de suivi" )

**Description :** Graphique par défaut à afficher dans l&apos;en-tête de colonne pour les colonnes nominales et ordinales.

**JMP Version ajoutée :** 18

### Classic Data Table Selection

**Syntaxe :** obj &lt;&lt; Classic Data Table Selection( state=0|1 )

**Description :** Active le comportement classique de sélection par clic dans la table de données. Dans ce mode, sélectionner une colonne n&apos;a aucun effet sur la sélection des lignes, et sélectionner une ligne n&apos;a aucun effet sur la sélection des colonnes.

**JMP Version ajoutée :** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Classic Data Table Selection( 1 ) );

```

### Color Mode

**Syntaxe :** obj &lt;&lt; Color Mode( "Utiliser les paramètres système"|"Clair"|"Foncé"|"Contraste élevé" )

**Description :** Définit si JMP utilise un thème de couleurs de fenêtres spécifique ou s&apos;il se conforme aux paramètres du système d&apos;exploitation.

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Color Mode( Dark ) );

```

### Columns Manager

**Syntaxe :** obj &lt;&lt; Columns Manager

**JMP Version ajoutée :** 18

### Conditional formatting rules

**Syntaxe :** obj &lt;&lt; Conditional formatting rules

**Description :** Crée une règle conditionnelle personnalisée qui s&apos;affiche ou non selon les paramètres de préférences Afficher le format conditionnel.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences(
	Conditional Formatting Rules(
		RuleSet(
			RuleName( "My Special Rule" ),
			GreaterThan(
				Value( 0 ),
				Inclusive( 0 ),
				Format(
					Text Color( "Medium Dark Red" ),
					Back Color( "Light Yellow" ),
					Annotation( 1 ),
					FontStyle( Bold )
				)
			)
		)
	)
);

```

### Continuous Color Theme

**Syntaxe :** obj &lt;&lt; Continuous Color Theme( "name" )

**Description :** Modifie le paramètre par défaut pour que le thème de couleur des variables continues apparaisse dans tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Continuous Color Theme( "Green to Purple" ) );
Show( Get Preference( Continuous Color Theme ) );

```

### Continuous graph type

**Syntaxe :** obj &lt;&lt; Continuous graph type( "Auto"|"Histogramme"|"Barres"|"Carte thermique"|"Mosaïque"|"Carte de suivi"|"Carte de suivi" )

**Description :** Graphique par défaut à afficher dans l&apos;en-tête de colonne pour les colonnes continues.

**JMP Version ajoutée :** 18

### Custom Locale Settings

**Syntaxe :** obj &lt;&lt; Custom Locale Settings

**Description :** Remplace les paramètres régionaux comme le séparateur décimal et le séparateur des milliers

**JMP Version ajoutée :** 16

#### Exemple 1

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Custom Locale Settings( Decimal Separator( "," ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator( "." ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator() ) );

```

#### Exemple 2

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

// Clear all locale overrides...
Preferences( Custom Locale Settings( Reset to Defaults ) );

```

#### Exemple 3

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Get Preferences( Custom Locale Settings );

```

### Data Filter Auto Clear

**Syntaxe :** obj &lt;&lt; Data Filter Auto Clear( state=0|1 )

### Data Filter Check Box Display

**Syntaxe :** obj &lt;&lt; Data Filter Check Box Display( state=0|1 )

**Description :** L&apos;affichage par défaut relatif à la colonne de filtre des variables catégorielles est l&apos;affichage d&apos;une case à cocher.

### Data Filter Conditional

**Syntaxe :** obj &lt;&lt; Data Filter Conditional( state=0|1 )

### Data Filter Group is AND

**Syntaxe :** obj &lt;&lt; Data Filter Group is AND( state=0|1 )

### Data Filter Histograms and Bars

**Syntaxe :** obj &lt;&lt; Data Filter Histograms and Bars( state=0|1 )

**Description :** Afficher les histogrammes et les barres correspondant aux colonnes de filtre (le cas échéant)

**JMP Version ajoutée :** 15

### Data Filter Include Check

**Syntaxe :** obj &lt;&lt; Data Filter Include Check( state=0|1 )

### Data Filter Select Check

**Syntaxe :** obj &lt;&lt; Data Filter Select Check( state=0|1 )

### Data Filter Show Check

**Syntaxe :** obj &lt;&lt; Data Filter Show Check( state=0|1 )

### Data Table Actions

**Syntaxe :** obj &lt;&lt; Data Table Actions( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Actions( 1 ) );

```

### Data Table Title on Output

**Syntaxe :** obj &lt;&lt; Data Table Title on Output( state=0|1 )

**Description :** Modifie le paramètre par défaut pour afficher les noms de la table de données au haut de la sortie du rapport.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Title on Output( 1 ) );

```

### Date Title on Output

**Syntaxe :** obj &lt;&lt; Date Title on Output( state=0|1 )

**Description :** Modifie le paramètre par défaut pour afficher la date dans le titre de la sortie.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Date Title on Output( 1 ) );

```

### Default Field Width

**Syntaxe :** obj &lt;&lt; Default Field Width( number )

**Description :** Modifier la largeur de champ par défaut des nouvelles colonnes numériques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Default Field Width( 16 ) );

```

### Default Project Show Bookmarks

**Syntaxe :** obj &lt;&lt; Default Project Show Bookmarks( state=0|1 )

**Description :** Afficher le volet Projet dans les nouveaux projets

**JMP Version ajoutée :** 16

### Default Project Show Contents

**Syntaxe :** obj &lt;&lt; Default Project Show Contents( state=0|1 )

**Description :** Afficher le volet Contenu dans les nouveaux projets

**JMP Version ajoutée :** 16

### Default Project Show Log

**Syntaxe :** obj &lt;&lt; Default Project Show Log( state=0|1 )

**Description :** Afficher le volet Journal dans les nouveaux projets

**JMP Version ajoutée :** 16

### Default Project Show Recent Files

**Syntaxe :** obj &lt;&lt; Default Project Show Recent Files( state=0|1 )

**Description :** Afficher le volet Fichiers récents dans les nouveaux projets

**JMP Version ajoutée :** 16

### Default Project Show Workspace

**Syntaxe :** obj &lt;&lt; Default Project Show Workspace( state=0|1 )

**Description :** Afficher le volet Espace de travail dans les nouveaux projets

**JMP Version ajoutée :** 16

### Display JSL SAS results as HTML

**Syntaxe :** obj &lt;&lt; Display JSL SAS results as HTML( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Display JSL SAS results as HTML"n( 1 ) );

```

### Display indexes in English

**Syntaxe :** obj &lt;&lt; Display indexes in English( state=0|1 )

**Description :** Affiche l’index des script d’objet, l’index des fonctions JSL et l’index des boîtes d’affichage en anglais.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Display indexes in English( 1 ) );

```

### Double Click Opens Column Info

**Syntaxe :** obj &lt;&lt; Double Click Opens Column Info( state=0|1 )

**Description :** Un double clic sur un en-tête de colonne ouvre une boîte de dialogue contenant des informations sur la colonne au lieu de modifier son nom.

**JMP Version ajoutée :** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Double Click Opens Column Info( 1 ) );

```

### Empty Project at Startup

**Syntaxe :** obj &lt;&lt; Empty Project at Startup( "Toujours"|"Si aucun autre projet n&apos;est ouvert"|"Jamais" )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Create an empty project when starting JMP( "Always" ) );

```

### Emulate Zoom Mode

**Syntaxe :** obj &lt;&lt; Emulate Zoom Mode( state=0|1 )

**Description :** Détermine si JMP inclut ou non la liste des fenêtres dans les fenêtres agrandies

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Emulate Zoom Mode( 1 ) );

```

### Enable Advanced Linear Algebra Routines

**Syntaxe :** obj &lt;&lt; Enable Advanced Linear Algebra Routines( state=0|1 )

**Description :** Modifie les routines de calcul d&apos;algèbre linéaire qui sont utilisées dans les plateformes multiples et les fonctions JSL. Lorsque cette préférence est sélectionnée, les routines d&apos;algèbre linéaire avancée qui sont basées sur les bibliothèques BLAS et LAPACK sont activées. La documentation JMP contient davantage d&apos;information sur les plateformes et les fonctions JSL qui sont affectées par cette préférence.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enable Advanced Linear Algebra Routines( 0 ) );

```

### Enable Telemetry

**Syntaxe :** obj &lt;&lt; Enable Telemetry( state=0|1 )

### Enable direct input from IME

**Syntaxe :** obj &lt;&lt; Enable direct input from IME( state=0|1 )

### End Menu Item Marking After Deadline

**Syntaxe :** obj &lt;&lt; End Menu Item Marking After Deadline( state=0|1 )

**Description :** Les éléments de menu ne seront plus marqués après l&apos;expiration de la durée limite

**JMP Version ajoutée :** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( End Menu Item Marking After Deadline( 0 ) );

```

### Enhanced Log Alternate Table Rows

**Syntaxe :** obj &lt;&lt; Enhanced Log Alternate Table Rows( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Alternate Table Rows( 1 ) );

```

### Enhanced Log Color By Window

**Syntaxe :** obj &lt;&lt; Enhanced Log Color By Window( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Color By Window( 1 ) );

```

### Enhanced Log Color By Window Color Theme

**Syntaxe :** obj &lt;&lt; Enhanced Log Color By Window Color Theme( "name" )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Enhanced Log Color By Window Color Theme ) );
Set Preference( Enhanced Log Color By Window Color Theme( "Jet" ) );
Show( Get Preference( Enhanced Log Color By Window Color Theme ) );

```

### Enhanced Log Filter Action

**Syntaxe :** obj &lt;&lt; Enhanced Log Filter Action( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Action( 1 ) );

```

### Enhanced Log Filter Error

**Syntaxe :** obj &lt;&lt; Enhanced Log Filter Error( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Error( 1 ) );

```

### Enhanced Log Filter Log

**Syntaxe :** obj &lt;&lt; Enhanced Log Filter Log( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Log( 1 ) );

```

### Enhanced Log Filter Result

**Syntaxe :** obj &lt;&lt; Enhanced Log Filter Result( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Result( 1 ) );

```

### Enhanced Log Filter Script

**Syntaxe :** obj &lt;&lt; Enhanced Log Filter Script( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Script( 1 ) );

```

### Enhanced Log Filter Warn

**Syntaxe :** obj &lt;&lt; Enhanced Log Filter Warn( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Warn( 1 ) );

```

### Enhanced Log Origin Column

**Syntaxe :** obj &lt;&lt; Enhanced Log Origin Column( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Origin Column( 1 ) );

```

### Enhanced Log Result Column

**Syntaxe :** obj &lt;&lt; Enhanced Log Result Column( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Result Column( 1 ) );

```

### Enhanced Log Shade Table Cells

**Syntaxe :** obj &lt;&lt; Enhanced Log Shade Table Cells( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Cells( 1 ) );

```

### Enhanced Log Shade Table Headings

**Syntaxe :** obj &lt;&lt; Enhanced Log Shade Table Headings( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Headings( 1 ) );

```

### Enhanced Log Table Column Borders

**Syntaxe :** obj &lt;&lt; Enhanced Log Table Column Borders( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Column Borders( 1 ) );

```

### Enhanced Log Table Heading Column Borders

**Syntaxe :** obj &lt;&lt; Enhanced Log Table Heading Column Borders( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Heading Column Borders( 1 ) );

```

### Enhanced Log Table Row Borders

**Syntaxe :** obj &lt;&lt; Enhanced Log Table Row Borders( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Row Borders( 1 ) );

```

### Enhanced Log Timestamp Column

**Syntaxe :** obj &lt;&lt; Enhanced Log Timestamp Column( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Timestamp Column( 1 ) );

```

### Enhanced Log Underline Table Headings

**Syntaxe :** obj &lt;&lt; Enhanced Log Underline Table Headings( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Underline Table Headings( 1 ) );

```

### Enter Key moves down

**Syntaxe :** obj &lt;&lt; Enter Key moves down( state=0|1 )

**Description :** Modifie le paramètre par défaut pour le déplacement de la touche d’entrée.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enter Key moves down( 1 ) );

```

### Evaluate OnOpen Scripts

**Syntaxe :** obj &lt;&lt; Evaluate OnOpen Scripts( "Invite"|"Jamais"|"Toujours" )

**Description :** Spécifier "Jamais" pour ne jamais autoriser l&apos;exécution des scripts OnOpen. Les scripts provenant de sources inconnues ne doivent pas être exécutés.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Evaluate OnOpen Scripts( "Prompt" ) );

```

### Excel Open Method

**Syntaxe :** obj &lt;&lt; Excel Open Method( "Ouvrir toutes les feuilles"|"Sélectionner individuellement les feuilles de calcul"|"Utiliser l&apos;assistant Excel" )

### Fast Marker Threshold

**Syntaxe :** obj &lt;&lt; Fast Marker Threshold( number )

**Description :** Modifie les paramètres par défaut pour actualiser les marqueurs dans les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fast Marker Threshold( 100000 ) );

```

### Fill Hollow Markers

**Syntaxe :** obj &lt;&lt; Fill Hollow Markers( state=0|1 )

**Description :** Les marqueurs creux seront colorés avec la couleur de fond du graphique

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Hollow Markers( 1 ) );

```

### Fill Selection Color

**Syntaxe :** obj &lt;&lt; Fill Selection Color( color )

**Description :** Couleur des remplis sélectionnés lorsque le mode de sélection du remplissage est défini à Même couleur pour les sélectionnés.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Color( "Red" ) );

```

### Fill Selection Fade

**Syntaxe :** obj &lt;&lt; Fill Selection Fade( number )

**Description :** Modifie le paramètre par défaut d&apos;estompage des remplissages non sélectionnés.

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Fade( 50 ) );

```

### Fill Selection Mode

**Syntaxe :** obj &lt;&lt; Fill Selection Mode( "Configuré sélectionné"|"Plus sombre sélectionné"|"Cercler les points sélectionnés"|"Même couleur pour les points sélectionnés"|"Atténuer les points non sélectionnés" )

**Description :** Modifie la façon d&apos;indiquer la sélection des zones remplies. L&apos;option par défaut est « à motifs ».

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Mode( "Selected Patterned" ) );

```

### Formula Evaluation

**Syntaxe :** obj &lt;&lt; Formula Evaluation( "En veille"|"Immédiat(e)" )

**Description :** Détermine si l&apos;évaluation des formules se fait en veille ou immédiatement en avant-plan

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Formula Evaluation( "Immediate" ) );

```

### Frame Border

**Syntaxe :** obj &lt;&lt; Frame Border( state=0|1 )

**Description :** Modifie le paramètre d&apos;affichage par défaut relatif à la bordure du cadre sur les côtés sans axe de tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Border( 1 ) );

```

### Frame Color

**Syntaxe :** obj &lt;&lt; Frame Color( color )

**Description :** Modifie le paramètre d’affichage par défaut des bordures de cadre dans tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Color( "Green" ) );

```

### Get

**Syntaxe :** obj &lt;&lt; Get

**Description :** Renvoie le script pour définir une préférence spécifique.

```jsl

a = Preferences[1] << Get( Show the Tip of the Day at startup );
Show( a );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Renvoie le script pour définir les préférences.

```jsl

a = Preferences[1] << Get Script;
Show( a );

```

### Graph Background Color

**Syntaxe :** obj &lt;&lt; Graph Background Color( color )

**Description :** Modifie le paramètre par défaut relatif à la couleur d’arrière plan dans tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Background Color( "Light Green" ) );

```

### Graph Border

**Syntaxe :** obj &lt;&lt; Graph Border( state=0|1 )

**Description :** Modifie le paramètre d’affichage par défaut des bordures de tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Border( 1 ) );

```

### Graph Height

**Syntaxe :** obj &lt;&lt; Graph Height( number )

**Description :** Modifie le paramètre par défaut spécifiant la hauteur de tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Height( 1 ) );

```

### Graph Marker

**Syntaxe :** obj &lt;&lt; Graph Marker( marker )

**Description :** Modifie le paramètre par défaut pour que la forme du marqueur apparaisse dans tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker( "Diamond" ) );

```

### Graph Marker Theme

**Syntaxe :** obj &lt;&lt; Graph Marker Theme( "Standard"|"Creux"|"Plein"|"Apparié"|"Classique"|"Alphanumérique" )

**Description :** Modifie le paramètre par défaut pour que la famille de marqueurs apparaisse dans tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Theme( "Classic" ) );

```

### Graph Marker Unselected Fade

**Syntaxe :** obj &lt;&lt; Graph Marker Unselected Fade( number )

**Description :** Modifie le paramètre par défaut d&apos;estompage des marqueurs non sélectionnés.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Unselected Fade( 45 ) );

```

### Graph Marker size

**Syntaxe :** obj &lt;&lt; Graph Marker size( "Point"|"Petit"|"Moyen"|"Grand"|"XL"|"XXL"|"XXXL" )

**Description :** Modifie le paramètre par défaut pour que la taille du marqueur apparaisse dans tous les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker size( "Large" ) );

```

### HDF5PathDelimiter

**Syntaxe :** obj &lt;&lt; HDF5PathDelimiter( text )

**JMP Version ajoutée :** 17

### Header summary heat map color theme

**Syntaxe :** obj &lt;&lt; Header summary heat map color theme( "name" )

**Description :** Modifie le paramètre par défaut pour que le thème de couleur des variables continues apparaisse dans tous les graphiques.

**JMP Version ajoutée :** 18

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.
Show( Get Preference( Header summary heat map color theme ) );
Set Preference( Header summary heat map color theme( "Green to Purple" ) );
Show( Get Preference( Header summary heat map color theme ) );

```

### Hide 'Find and Replace' window

**Syntaxe :** obj &lt;&lt; Hide &apos;Find and Replace&apos; window( state=0|1 )

**Description :** Modifie le paramètre par défaut pour maintenir ouverte la fenêtre &apos;Rechercher et remplacer&apos; après avoir exécuté l&apos;action.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Hide 'Find and Replace' window"n( 1 ) );

```

### Hide ODBC Connection Strings

**Syntaxe :** obj &lt;&lt; Hide ODBC Connection Strings( state=0|1 )

### Hide Overlapping Labels

**Syntaxe :** obj &lt;&lt; Hide Overlapping Labels( state=0|1 )

**Description :** Masque les étiquettes superposées sur un graphique.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hide Overlap Labels( 0 ) );

```

### Histogram Color

**Syntaxe :** obj &lt;&lt; Histogram Color( color )

**Description :** Modifie la couleur par défaut des histogrammes.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Histogram Color( "Light Yellow" ) );

```

### Histogram Line Color

**Syntaxe :** obj &lt;&lt; Histogram Line Color( color )

**Description :** Modifie la couleur de ligne par défaut des histogrammes.

**JMP Version ajoutée :** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
 
Preferences[1] << Set( Histogram Line Color( "Red" ) );

```

### Hover Help

**Syntaxe :** obj &lt;&lt; Hover Help( state=0|1 )

**Description :** Aide de type info-bulle qui s&apos;affiche lorsque des mouvements circulaires sont réalisés avec la souris.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hover Help( 1 ) );

```

### Image Format for PowerPoint

**Syntaxe :** obj &lt;&lt; Image Format for PowerPoint( "Format OS par défaut"|"PNG"|"JPEG" )

### Include Responses Not in Data

**Syntaxe :** obj &lt;&lt; Include Responses Not in Data( state=0|1 )

**Description :** Afficher les étiquettes de ces réponses sans occurrence dans la table de données.

### Initial JMP Window

**Syntaxe :** obj &lt;&lt; Initial JMP Window( "Fenêtre d’accueil"|"JMP Starter"|"Liste des fenêtres" )

**Description :** Détermine la fenêtre JMP qui est créée au démarrage de JMP

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial JMP Window( "Home Window" ) );

```

### Initial Log Window

**Syntaxe :** obj &lt;&lt; Initial Log Window( state=0|1 )

**Description :** Modifie le paramètre par défaut pour afficher la fenêtre log initiale.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Log Window( 1 ) );

```

### Initial Splash Window

**Syntaxe :** obj &lt;&lt; Initial Splash Window( state=0|1 )

**Description :** Modifie le paramètre par défaut pour afficher la fenêtre de démarrage initial.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Splash Window( 1 ) );

```

### Inside Ticks

**Syntaxe :** obj &lt;&lt; Inside Ticks( state=0|1 )

**Description :** Modifie le paramètre d’affichage par défaut des marques de graduation des axes à l’intérieur des cadres de graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Inside Ticks( 1 ) );

```

### Interactive HTML Color

**Syntaxe :** obj &lt;&lt; Interactive HTML Color( "Fond clair"|"Arrière-plan foncé"|"Fond gris" )

**Description :** Change le paramètre par défaut pour le thème de couleurs HTML interactif.

**JMP Version ajoutée :** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Interactive HTML Color( "Light Background" ) );

```

### Internet Open Timeout

**Syntaxe :** obj &lt;&lt; Internet Open Timeout( number )

**Description :** L&apos;ouverture d&apos;Internet se terminera après ce nombre de secondes.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Internet Open Timeout( 300 /* 5 minutes */ ) );

```

### JMP Live Timeout

**Syntaxe :** obj &lt;&lt; JMP Live Timeout( number )

**Description :** Définit la valeur de dépassement de temps pour la publication sur JMP Live. La valeur par défaut est 180 secondes.

**JMP Version ajoutée :** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( JMP Live Timeout( 120 ) );

```

### JMP Theme

**Syntaxe :** obj &lt;&lt; JMP Theme( "Classique"|"Confortable"|"JMP Live"|"JMP Clinical" )

**Description :** Change le thème pour l&apos;ensemble de JMP.

**JMP Version ajoutée :** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

restore theme = Get Preference( JMP Theme );
Set Preference( JMP Theme( "Traditional" ) );
Wait( 2 );
Set Preference( JMP Theme( "Comfortable" ) );
Wait( 2 );
Set Preference( JMP Theme( "JMP Live" ) );
Wait( 2 );
restore theme;

```

### JSL save column groups with group name

**Syntaxe :** obj &lt;&lt; JSL save column groups with group name( state=0|1 )

**Description :** Lors de l&apos;enregistrement d&apos;un script avec une liste de colonnes, utiliser la syntaxe « Groupe de colonnes » si la liste de colonnes est un groupe de colonnes

**JMP Version ajoutée :** 16

### JSS Dir

**Syntaxe :** obj &lt;&lt; JSS Dir( text )

**Description :** Changes the JSS directory for development use.

**JMP Version ajoutée :** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference( JSS Dir( "C:\My\Path\To\jss\" ) );

```

### Journal Freeze Backward Compatible

**Syntaxe :** obj &lt;&lt; Journal Freeze Backward Compatible( state=0|1 )

### Language Switch Warning

**Syntaxe :** obj &lt;&lt; Language Switch Warning( state=0|1 )

**Description :** Modifie les paramètres par défaut pour signaler la détection d’un changement de langue. Remarque : disponible sous Windows uniquement.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Language Switch Warning( 1 ) );

```

### Laser pointer

**Syntaxe :** obj &lt;&lt; Laser pointer( "Désactivé(e)"|"Violet"|"Bleu"|"Vert"|"Jaune"|"Orange"|"Rouge" )

**Description :** Modifie les paramètres par défaut pour afficher le pointeur laser et accentuer certaines parties d’un rapport.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Laser pointer( "Purple" ) );

```

### Line Width

**Syntaxe :** obj &lt;&lt; Line Width( number )

**Description :** Modifie la largeur de ligne par défaut du contenu graphique.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Line Width( 2 ) );

```

### Log Mode

**Syntaxe :** obj &lt;&lt; Log Mode( "Accentué"|"Texte" )

**Description :** Modifie les paramètres par défaut d&apos;affichage des registres. Cela comprend les registres de projet et le registre principal.

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Log Mode( "Text" ) );

```

### Log Window Height

**Syntaxe :** obj &lt;&lt; Log Window Height( number )

**Description :** Modifie le paramètre par défaut pour définir la taille de la fenêtre log. Remarque : ces options ne sont disponibles que sous Windows.

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Log Window Height( 200 ) );

```

### Major Grid Line Color

**Syntaxe :** obj &lt;&lt; Major Grid Line Color( color )

**Description :** Modifie la couleur par défaut des lignes de la grande grille dans les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Line Color( "Blue" ) );

```

### Major Grid Lines

**Syntaxe :** obj &lt;&lt; Major Grid Lines( state=0|1 )

**Description :** Modifie les paramètres par défaut d’affichage des lignes de la grande grille dans les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Lines( 1 ) );

```

### Mark Menu Items Added Since

**Syntaxe :** obj &lt;&lt; Mark Menu Items Added Since( "Aucun(e)"|"Version actuelle"|"18"|"17"|"16"|"15"|"14" )

**Description :** Marquer les éléments de menu plus récents qu&apos;une version JMP donnée.

**JMP Version ajoutée :** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Mark Items Added Since( "16" ) );

```

### Marker Label Color

**Syntaxe :** obj &lt;&lt; Marker Label Color( color )

**Description :** Couleur des étiquettes de marqueur si l&apos;option "Style de couleur des étiquettes de marqueur" est définie à "Fixe"

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color( "Blue" ) );

```

### Marker Label Color Style

**Syntaxe :** obj &lt;&lt; Marker Label Color Style( "Couleur des marqueurs"|"Couleur des marqueurs estompée"|"Couleur fixe" )

**Description :** Modifie le style de couleur par défaut des étiquettes de marqueur

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color Style( "Marker Color" ) );

```

### Marker Selection Mode

**Syntaxe :** obj &lt;&lt; Marker Selection Mode( "Atténuer les points non sélectionnés"|"Agrandir les points sélectionnés"|"Auréoler les points sélectionnés"|"Cercler les points sélectionnés"|"Même couleur pour les points sélectionnés" )

**Description :** Modifie le paramètre par défaut du mode de sélection du marqueur. Le mode par défaut est Non sélectionné estompé.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Selection Mode( "Selection Haloed" ) );

```

### Maximum Auto Size Column List Width

**Syntaxe :** obj &lt;&lt; Maximum Auto Size Column List Width( number )

**JMP Version ajoutée :** 18

### Maximum JMP Call Depth

**Syntaxe :** obj &lt;&lt; Maximum JMP Call Depth( number )

**Description :** Modifie le paramètre par défaut relatif à la profondeur d’appel JMP maximale.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum JMP call depth( 50 ) );

```

### Maximum Parse Depth

**Syntaxe :** obj &lt;&lt; Maximum Parse Depth( number )

**Description :** Modifie le paramètre par défaut pour la profondeur d’analyse maximum. La valeur par défaut est 512.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Parse Depth( 600 ) );

```

### Maximum Symbol Evaluation Recursion Depth

**Syntaxe :** obj &lt;&lt; Maximum Symbol Evaluation Recursion Depth( number )

**Description :** Modifie le paramètre par défaut pour la Profondeur maximum de récursion de l&apos;évaluation du symbole. La valeur par défaut est 25.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Symbol Evaluation Recursion Depth( 50 ) );

```

### Minor Grid Line Color

**Syntaxe :** obj &lt;&lt; Minor Grid Line Color( color )

**Description :** Modifie la couleur par défaut des lignes de la petite grille dans les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Line Color( "Black" ) );

```

### Minor Grid Lines

**Syntaxe :** obj &lt;&lt; Minor Grid Lines( state=0|1 )

**Description :** Modifie les paramètres par défaut d’affichage des lignes de la petite grille dans les graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Lines( 1 ) );

```

### New Project Template

**Syntaxe :** obj &lt;&lt; New Project Template( text )

**Description :** Fichier à utiliser pour les nouveaux projets vides.

**JMP Version ajoutée :** 16

### New character columns default to compact

**Syntaxe :** obj &lt;&lt; New character columns default to compact( state=0|1 )

**Description :** Les nouvelles colonnes de caractères ou les colonnes basculées au type de données de caractères sont automatiquement des colonnes compactes

**JMP Version ajoutée :** 18

### OAuth2 Authentication Browser

**Syntaxe :** obj &lt;&lt; OAuth2 Authentication Browser( text=Default )

**Description :** S&apos;identifier aux serveurs OAuth2 avec le type de navigateur spécifié. Valeurs valides : « Par défaut », « Intégré », « Externe ». "Default" par défaut.

**JMP Version ajoutée :** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set(
	Sign in to OAuth2 servers with the specified browser type( "Embedded" )
);

```

### ODBC Allow Table Replace

**Syntaxe :** Preferences[1] &lt;&lt; Name("ODBC Allow Table Replace") ( state = 0|1 )

**Description :** Sélectionnez cette option pour autoriser le remplacement de la table ODBC. Cette option est sélectionnée par défaut. Le remplacement d&apos;une table ODBC cause l&apos;abandon de la table existante dans la base de données et son remplacement par une nouvelle table de données.

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.
     
Preferences[1] << Name( "ODBC Allow Table Replace" )(0);

```

### ODBC Hide Connection String

**Syntaxe :** obj &lt;&lt; ODBC Hide Connection String( state=0|1 )

### Open Text File Charset

**Syntaxe :** obj &lt;&lt; Open Text File Charset( "Meilleure supposition"|"ASMO-708"|"big5"|"cp1025"|"cp866"|"cp875"|"csISO2022JP"|"DOS-720"|"DOS-862"|"EUC-CN"|"EUC-JP"|"euc-kr"|"GB18030"|"gb2312"|"hz-gb-2312"|"IBM00858"|"IBM00924"|"IBM01047"|"IBM01140"|"IBM01141"|"IBM01142"|"IBM01143"|"IBM01144"|"IBM01145"|"IBM01146"|"IBM01147"|"IBM01148"|"IBM01149"|"IBM037"|"IBM1026"|"IBM273"|"IBM277"|"IBM278"|"IBM280"|"IBM284"|"IBM285"|"IBM290"|"IBM297"|"IBM420"|"IBM423"|"IBM424"|"IBM437"|"IBM500"|"ibm737"|"ibm775"|"ibm850"|"ibm852"|"IBM855"|"ibm857"|"IBM860"|"ibm861"|"IBM863"|"IBM864"|"IBM865"|"ibm869"|"IBM870"|"IBM871"|"IBM880"|"IBM905"|"IBM-Thai"|"iso-2022-jp"|"iso-2022-jp"|"iso-2022-kr"|"iso-8859-1"|"iso-8859-13"|"iso-8859-15"|"iso-8859-2"|"iso-8859-3"|"iso-8859-4"|"iso-8859-5"|"iso-8859-6"|"iso-8859-7"|"iso-8859-8"|"iso-8859-8-i"|"iso-8859-9"|"Johab"|"koi8-r"|"koi8-u"|"ks_c_5601-1987"|"macintosh"|"shift_jis"|"us-ascii"|"utf-16"|"utf-16BE"|"utf-32"|"utf-7"|"utf-8"|"windows-1250"|"windows-1251"|"Windows-1252"|"windows-1253"|"windows-1254"|"windows-1255"|"windows-1256"|"windows-1257"|"windows-1258"|"windows-874"|"x-Chinese-CNS"|"x-Chinese-Eten"|"x-cp20001"|"x-cp20003"|"x-cp20004"|"x-cp20005"|"x-cp20261"|"x-cp20269"|"x-cp20936"|"x-cp20949"|"x-cp50227"|"x-EBCDIC-KoreanExtended"|"x-IA5"|"x-IA5-German"|"x-IA5-Norwegian"|"x-IA5-Swedish"|"x-iscii-as"|"x-iscii-be"|"x-iscii-de"|"x-iscii-gu"|"x-iscii-ka"|"x-iscii-ma"|"x-iscii-or"|"x-iscii-pa"|"x-iscii-ta"|"x-iscii-te"|"x-mac-arabic"|"x-mac-ce"|"x-mac-chinesesimp"|"x-mac-chinesetrad"|"x-mac-croatian"|"x-mac-cyrillic"|"x-mac-greek"|"x-mac-hebrew"|"x-mac-icelandic"|"x-mac-japanese"|"x-mac-korean"|"x-mac-romanian"|"x-mac-thai"|"x-mac-turkish"|"x-mac-ukrainian" )

**Description :** Indique le codage à utiliser si aucun marqueur Unicode n’a été trouvée ; l’option par défaut consiste à évaluer le codage en se basant sur le contenu du fichier.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Open Text File Charset( "utf-8" ) );

```

### Open character columns as compact columns

**Syntaxe :** obj &lt;&lt; Open character columns as compact columns( state=0|1 )

**Description :** Ouvrir automatiquement les colonnes de caractères comme colonnes compactes lorsque JMP détermine que cela est intéressant

**JMP Version ajoutée :** 18

### Open files from outside projects in

**Syntaxe :** obj &lt;&lt; Open files from outside projects in( "Aucun projet"|"Ouvrir un projet ou Aucun projet"|"Ouvrir un projet ou Nouveau projet"|"Nouveau projet" )

**JMP Version ajoutée :** 16

### Outline Close Orientation

**Syntaxe :** obj &lt;&lt; Outline Close Orientation( "Auto"|"Horizontal"|"Vertical" )

**Description :** Possibilité de réduire verticalement les boîtes de structure pour gagner de l&apos;espace horizontal

### Parallel Data Table Column Decompression

**Syntaxe :** obj &lt;&lt; Parallel Data Table Column Decompression( state=0|1 )

**Description :** Modifie le paramètre par défaut pour la décompression des colonnes en parallèle. La valeur par défaut est activée. Désactiver cette option peut permettre de charger de très grandes tables de données.

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Parallel Data Table Column Decompression( 0 ) );

```

### Partial Selection Indicator

**Syntaxe :** obj &lt;&lt; Partial Selection Indicator( "Aucun(e)"|"Barre"|"Secteur"|"Gaufre" )

**Description :** Manière dont la sélection partielle d&apos;un groupe est indiquée.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Partial Selection Mode( "Bar" ) );

```

### Platform Launch Actions

**Syntaxe :** obj &lt;&lt; Platform Launch Actions( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Platform Launch Actions( 1 ) );

```

### Prefer DSN-less ODBC Connection Strings

**Syntaxe :** Preferences[1] &lt;&lt; Name("Prefer DSN-less ODBC Connection Strings") ( state = 0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
     
Preferences[1] << Name( "Prefer DSN-less ODBC Connection Strings" )(1);

```

### Preserve SAS formats when exporting to SAS

**Syntaxe :** obj &lt;&lt; Preserve SAS formats when exporting to SAS( state=0|1 )

**Description :** Modifie le paramètre par défaut pour préserver les formats SAS lors de l&apos;exportation vers SAS.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS formats when exporting to SAS( 1 ) );

```

### Preserve SAS variable names when exporting to SAS

**Syntaxe :** obj &lt;&lt; Preserve SAS variable names when exporting to SAS( state=0|1 )

**Description :** Modifie le paramètre par défaut pour préserver les noms des variables SAS lors de l&apos;exportation vers SAS.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS variable names when exporting to SAS( 1 ) );

```

### Print Data Grid as is

**Syntaxe :** obj &lt;&lt; Print Data Grid as is( state=0|1 )

**Description :** Modifie le paramètre par défaut pour imprimer la grille de données telle qu’elle est affichée à l’écran.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Print Data Grid as is( 1 ) );

```

### Prompt to save when closing summary tables

**Syntaxe :** obj &lt;&lt; Prompt to save when closing summary tables( state=0|1 )

**Description :** Présence ou absence d&apos;invite à la fermeture du tableau récapitulatif.

**JMP Version ajoutée :** 14

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Close report action( "Prompt" ) );

```

### Proxy Port

**Syntaxe :** obj &lt;&lt; Proxy Port( number )

**Description :** Utiliser le port proxy spécifié.

**JMP Version ajoutée :** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy Port( 80 ) );

```

### Proxy Server

**Syntaxe :** obj &lt;&lt; Proxy Server( text )

**Description :** Utiliser le proxy spécifié.

**JMP Version ajoutée :** 15

```jsl


//Caution: Changing a preference will 
//affect the default behavior of JMP.

url = "http:://myproxy.com:80";
Preferences[1] << Set( Proxy Server( url ) );

```

### Proxy User

**Syntaxe :** obj &lt;&lt; Proxy User( text )

**Description :** Le nom d&apos;utilisateur et le mot de passe à utiliser pour l&apos;authentification proxy. [nom d&apos;utilisateur]:[mot de passe]

**JMP Version ajoutée :** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy User( "clark%20kent:superman" ) );

```

### Reopen the initial JMP window on last window close

**Syntaxe :** obj &lt;&lt; Reopen the initial JMP window on last window close( state=0|1 )

**Description :** Détermine si la fenêtre initiale de JMP est automatiquement rouverte à fermeture de la dernière fenêtre de JMP

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Reopen the initial JMP window on last window close( 1 ) );

```

### Report Invalid Display Box Messages

**Syntaxe :** obj &lt;&lt; Report Invalid Display Box Messages( state=0|1 )

**Description :** Modifie le paramètre par défaut pour afficher les messages d’erreurs relatifs aux boîtes d’affichage incorrectes.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Invalid Display Box Messages( 1 ) );

```

### Report JSL warnings and errors interactively

**Syntaxe :** obj &lt;&lt; Report JSL warnings and errors interactively( state=0|1 )

**Description :** Les avertissements et erreurs issus de la soumission JSL seront journalisés et affichés de façon interactive. Si cette option est désactivée, les avertissements et erreurs seront uniquement journalisés

**JMP Version ajoutée :** 15

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report JSL warnings and errors interactively( 1 ) );

```

### Report Recent Problems

**Syntaxe :** obj &lt;&lt; Report Recent Problems( state=0|1 )

### Report Snapshot On Close

**Syntaxe :** obj &lt;&lt; Report Snapshot On Close( state=0|1 )

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Snapshot On Close( 1 ) );

```

### Row Editor Always Show All Columns

**Syntaxe :** obj &lt;&lt; Row Editor Always Show All Columns( state=0|1 )

**Description :** Si sélectionné, l&apos;éditeur de lignes affichera toutes les colonnes dans la table de données, peu importe si des colonnes sont sélectionnées.

**JMP Version ajoutée :** 16

### Ruler Tool Units

**Syntaxe :** obj &lt;&lt; Ruler Tool Units( "Kilomètres"|"Miles" )

**Description :** Modifie les unités affichées sur l&apos;outil règle quand utilisé sur une carte dans le Constructeur de graphiques.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Ruler Tool Units( "Miles" ) );

```

### SAS Automatically Generate ODS results

**Syntaxe :** obj &lt;&lt; SAS Automatically Generate ODS results( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Automatically Generate ODS results"n( 1 ) );

```

### SAS Connect to CAS with SAS Viya

**Syntaxe :** obj &lt;&lt; SAS Connect to CAS with SAS Viya( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
          
Preferences[1] << Set( "SAS Connect to CAS with SAS Viya"n( 1 ) );

```

### SAS Data Import Close Warning

**Syntaxe :** obj &lt;&lt; SAS Data Import Close Warning( state=0|1 )

**JMP Version ajoutée :** 19

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Close Warning"n( 0 ) );

```

### SAS Data Import Uses Labels

**Syntaxe :** obj &lt;&lt; SAS Data Import Uses Labels( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Uses Labels"n( 1 ) );

```

### SAS Import generated datasets into JMP

**Syntaxe :** obj &lt;&lt; SAS Import generated datasets into JMP( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Import generated datasets into JMP"n( 1 ) );

```

### SAS ODS Results Format

**Syntaxe :** obj &lt;&lt; SAS ODS Results Format( "HTML"|"TEXTE" )

### SAS ODS Style

**Syntaxe :** obj &lt;&lt; SAS ODS Style( text=Statistical )

**Description :** "Statistical" par défaut.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS ODS Style"n( "HTMLBlue" ) );

```

### SAS Organize results in JMP project

**Syntaxe :** obj &lt;&lt; SAS Organize results in JMP project( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Organize results in JMP project"n( 1 ) );

```

### SAS Transport Use UTF8

**Syntaxe :** obj &lt;&lt; SAS Transport Use UTF8( state=0|1 )

**Description :** Changez l&apos;encodage de caractères par défaut pour permettre aux fichiers de transport d&apos;utiliser UTF-8

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( SAS Transport Use UTF8( 1 ) );

```

### SPSSMultiResponseDelimiter

**Syntaxe :** obj &lt;&lt; SPSSMultiResponseDelimiter( text=| )

**Description :** "|" par défaut.

**JMP Version ajoutée :** 16

### Save Data Table Columns GZ Compressed

**Syntaxe :** obj &lt;&lt; Save Data Table Columns GZ Compressed( state=0|1 )

**Description :** Modifie le paramètre par défaut pour enregistrer les tables de données sous le format de fichier compressé GZip.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Data Table Columns GZ Compressed( 1 ) );

```

### Save Image DPI

**Syntaxe :** obj &lt;&lt; Save Image DPI( number )

**Description :** Spécifie un paramétrage DPI à utiliser lors de l&apos;enregistrement des images, sinon une valeur par défaut est utilisée.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
            
Preferences[1] << Set( Save Image DPI( 300 ) );

```

### Save Journals GZ Compressed

**Syntaxe :** obj &lt;&lt; Save Journals GZ Compressed( state=0|1 )

**Description :** Modifie le paramètre par défaut pour enregistrer les journaux sous le format de fichier compressé GZip.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Journals GZ Compressed( 1 ) );

```

### Save Scripts in English

**Syntaxe :** obj &lt;&lt; Save Scripts in English( state=0|1 )

**Description :** Modifie le paramètre par défaut pour enregistrer les scripts en anglais plutôt que dans la langue affichée.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Scripts in English( 1 ) );

```

### Save Text Files as Unicode

**Syntaxe :** obj &lt;&lt; Save Text Files as Unicode( state=0|1 )

**Description :** Modifie le paramètre par défaut pour enregistrer les fichiers texte au format Unicode.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Text Files as Unicode( 1 ) );

```

### Save table with report

**Syntaxe :** obj &lt;&lt; Save table with report( "Incorporer"|"Séparer"|"Invite" )

**Description :** Modifie la manière d&apos;enregistrer les données des rapports enregistrés.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( prompt | embed | separate ) );

```

### Save the session when exiting

**Syntaxe :** obj &lt;&lt; Save the session when exiting( "Toujours"|"Jamais"|"Invite" )

**Description :** Modifie le paramètre par défaut pour enregistrer la session en quittant JMP.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( "Prompt" ) );

```

### Selected Marker Color

**Syntaxe :** obj &lt;&lt; Selected Marker Color( color )

**Description :** Modifie la couleur des marqueurs sélectionnés en Mode de sélection des marqueurs avec l&apos;option Même couleur des points sélectionnés

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Selected Marker Color( "Cyan" ) );

```

### Semantic formatting

**Syntaxe :** obj &lt;&lt; Semantic formatting

**Description :** Crée un format sémantique utilisé lorsque ses critères correspondent au contexte du rapport actuel.

**JMP Version ajoutée :** 17

#### Exemple 1

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

Preferences(
	Semantic formatting(
		Add Semantic Format(
			Format Name( "My Format 1" ),
			Semantic Format( Format( "Fixed Dec", 11, 1 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" )
			)
		),
		Add Semantic Format(
			Format Name( "My Format 2" ),
			Semantic Format( Format( "Fixed Dec", 11, 2 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" ),
				Row Name( "M" )
			)
		)
	)
);

```

#### Exemple 2

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Semantic formatting( Clear ) );

```

### Sequential Color Theme

**Syntaxe :** obj &lt;&lt; Sequential Color Theme( "name" )

**Description :** Modifie le paramètre par défaut pour que le thème de couleur des variables continues apparaisse dans tous les graphiques.

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Sequential Color Theme( "Green to Purple" ) );
Show( Get Preference( Sequential Color Theme ) );

```

### Set

**Syntaxe :** obj &lt;&lt; Set

**Description :** Définit une préférence spécifiée.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 
Preferences[1] << Set( Show the Tip of the Day at startup( 1 ) );

```

### Shade Alternate Table Rows

**Syntaxe :** obj &lt;&lt; Shade Alternate Table Rows( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Alternate Table Rows( 1 ) );

```

### Shade Table Cells

**Syntaxe :** obj &lt;&lt; Shade Table Cells( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Cells( 1 ) );

```

### Shade Table Headings

**Syntaxe :** obj &lt;&lt; Shade Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Headings( 1 ) );

```

### Shape Boundary Color

**Syntaxe :** obj &lt;&lt; Shape Boundary Color( color )

**Description :** Change le paramètre par défaut pour la couleur des frontières de forme dessinées sur tous les graphes, comme les cartes d&apos;arrière-plan.

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shape Boundary Color( "Black" ) );

```

### Show Alternate Column Name

**Syntaxe :** obj &lt;&lt; Show Alternate Column Name( state=0|1 )

**Description :** Modifier le paramètre par défaut pour afficher le nom alternatif dans la boîte de dialogue et dans le panneau des colonnes de la table de données

### Show Personalization at startup

**Syntaxe :** obj &lt;&lt; Show Personalization at startup( state=0|1 )

**Description :** La boîte de dialogue de personnalisation s’affichera au prochain démarrage de JMP.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Personalization at startup( 1 ) );

```

### Show SAS Log

**Syntaxe :** obj &lt;&lt; Show SAS Log( "Never"|"Always"|"On Error" )

### Show Search box on Columns Panel

**Syntaxe :** obj &lt;&lt; Show Search box on Columns Panel( state=0|1 )

**Description :** Afficher la fenêtre de modification de la recherche dans le panneau des colonnes par défaut

**JMP Version ajoutée :** 16

### Show Status Bar

**Syntaxe :** obj &lt;&lt; Show Status Bar( state=0|1 )

**Description :** Modifie le paramètre par défaut pour afficher la barre d’état.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Status Bar( 1 ) );

```

### Show conditional formatting

**Syntaxe :** obj &lt;&lt; Show conditional formatting( "Toujours"|"Écran uniquement"|"Jamais" )

**Description :** Modifie les paramètres par défaut pour afficher la mise en forme conditionnelle dans les rapports.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show conditional formatting( "Always" ) );

```

### Show menu tips

**Syntaxe :** obj &lt;&lt; Show menu tips( state=0|1 )

**Description :** Modifie le paramètre par défaut pour afficher les conseils qui s’affichent lorsque vous pointez la souris sur le triangle rouge d’un élément de menu.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show menu tips( 1 ) );

```

### Show missing data bars or bins in summary graphs

**Syntaxe :** obj &lt;&lt; Show missing data bars or bins in summary graphs( state=0|1 )

**Description :** Indique si les bins ou les barres de données manquants sont initialement affichés dans les graphes de résumé. Quelle que soit la valeur indiquée, ils peuvent être affichés ou masqués sur un graphe de résumé donné en cliquant avec le bouton droit sur le graphe de résumé et en sélectionnant « Barre des valeurs manquantes » ou « Bin des valeurs manquantes ».

**JMP Version ajoutée :** 16

### Show semantic formatting

**Syntaxe :** obj &lt;&lt; Show semantic formatting( "Toujours"|"No Row Matching"|"Jamais" )

**Description :** Modifie le paramètre par défaut pour l&apos;utilisation du formatage sémantique dans les rapports. Valeurs possibles : « Toujours », « Pas de correspondance de ligne » et « Jamais ». Utiliser « Pas de correspondance de ligne » pour désactiver les formats sémantiques spécifiques par ligne.

**JMP Version ajoutée :** 17

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show semantic formatting( "Always" ) );

```

### Show summary graphs below column names

**Syntaxe :** obj &lt;&lt; Show summary graphs below column names( state=0|1 )

**Description :** Afficher initialement les graphes de résumé dans la table de données, entre les noms de colonne et les cellules de données, pour un nombre de lignes inférieur à un seuil de performance (3 millions de lignes). Quel que soit l&apos;état initial, l&apos;affichage de chaque table de données peut être basculé à l&apos;aide de l&apos;icône située à côté des noms de colonne.

**JMP Version ajoutée :** 15

### Show the Quick Start at startup

**Syntaxe :** obj &lt;&lt; Show the Quick Start at startup( state=0|1 )

**Description :** Modifie le paramètre par défaut pour afficher la fenêtre de démarrage rapide.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show the Quick Start at startup( 1 ) );

```

### Summary Graph Continuous Color

**Syntaxe :** obj &lt;&lt; Summary Graph Continuous Color( color )

**Description :** Définir la couleur pour les données continues dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Highlight Color

**Syntaxe :** obj &lt;&lt; Summary Graph Continuous Highlight Color( color )

**Description :** Définir la couleur de surlignement pour les données continues dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Color

**Syntaxe :** obj &lt;&lt; Summary Graph Continuous Missing Color( color )

**Description :** Définir la couleur pour les données continues manquantes dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Missing Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Highlight Color

**Syntaxe :** obj &lt;&lt; Summary Graph Continuous Missing Highlight Color( color )

**Description :** Définir la couleur de surlignement pour les données continues manquantes dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences(
	Summary Graph Continuous Missing Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) )
);

```

### Summary Graph Name Ordered Color

**Syntaxe :** obj &lt;&lt; Summary Graph Name Ordered Color( color )

**Description :** Définir la couleur pour les données triées par nom dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Name Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Highlight Color

**Syntaxe :** obj &lt;&lt; Summary Graph Name Ordered Highlight Color( color )

**Description :** Définir la couleur de surlignement pour les données triées par nom dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences(
	Summary Graph Name Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) )
);

```

### Summary Graph Other Color

**Syntaxe :** obj &lt;&lt; Summary Graph Other Color( color )

**Description :** Définir la couleur de l&apos;autre barre dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Highlight Color

**Syntaxe :** obj &lt;&lt; Summary Graph Other Highlight Color( color )

**Description :** Définir la couleur de surlignement de l&apos;autre barre dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Run Chart Color

**Syntaxe :** obj &lt;&lt; Summary Graph Run Chart Color( color )

**Description :** Définir la couleur de l&apos;autre barre dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 18

```jsl

//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences( Summary Graph Run Chart Color( RGB Color( 0.5, 0.1, 0.9 ) ) );

```

### Summary Graph Size Ordered Color

**Syntaxe :** obj &lt;&lt; Summary Graph Size Ordered Color( color )

**Description :** Définir la couleur pour les données triées par taille dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Size Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Size Ordered Highlight Color

**Syntaxe :** obj &lt;&lt; Summary Graph Size Ordered Highlight Color( color )

**Description :** Définir la couleur de surlignement pour les données triées par taille dans les graphes de résumé et les filtres de données

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences(
	Summary Graph Size Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) )
);

```

### Suppress Formula Eval on Open

**Syntaxe :** obj &lt;&lt; Suppress Formula Eval on Open( state=0|1 )

**Description :** Modifie le paramètre par défaut pour supprimer l’évaluations des formules à l’ouverture d’une table de données.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Suppress Formula Eval on Open( 1 ) );

```

### Table Column Borders

**Syntaxe :** obj &lt;&lt; Table Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Borders( 1 ) );

```

### Table Column Group Borders

**Syntaxe :** obj &lt;&lt; Table Column Group Borders( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Group Borders( 1 ) );

```

### Table Heading Column Borders

**Syntaxe :** obj &lt;&lt; Table Heading Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Heading Column Borders( 1 ) );

```

### Table Row Borders

**Syntaxe :** obj &lt;&lt; Table Row Borders( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Row Borders( 1 ) );

```

### Task Bar Strategy

**Syntaxe :** obj &lt;&lt; Task Bar Strategy( "All windows"|"Main window only"|"Main and data tables" )

**Description :** Détermine les fenêtres de JMP qui seront affichées dans la barre des tâches de Windows.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Task Bar Strategy( "All Windows" ) );

```

### Transparent background for report PNG images

**Syntaxe :** obj &lt;&lt; Transparent background for report PNG images( state=0|1 )

**Description :** Lorsque des rapports ou des parties de rapport sont enregistrés en tant qu&apos;images PNG, l&apos;arrière-plan est transparent.

**JMP Version ajoutée :** 14

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Transparent background for report PNG images( 1 ) );

```

### Underline Table Headings

**Syntaxe :** obj &lt;&lt; Underline Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Underline Table Headings( 1 ) );

```

### Use Excel Labels as Headings

**Syntaxe :** obj &lt;&lt; Use Excel Labels as Headings( "Utiliser la meilleure supposition"|"Toujours"|"Jamais" )

**Description :** Modifie le paramètre par défaut pour importer les étiquettes Excel en tant que noms des colonnes JMP à l’ouverture des fichiers Excel.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Excel Labels as Headings( "Always" ) );

```

### Use Greek letters

**Syntaxe :** obj &lt;&lt; Use Greek letters( state=0|1 )

**Description :** Modifie les paramètres par défaut pour utiliser les lettres grecques dans les rapports JMP.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Greek letters( 1 ) );

```

### Use JMP Locale Settings

**Syntaxe :** obj &lt;&lt; Use JMP Locale Settings( state=0|1 )

**Description :** Modifie le format d’affichage par défaut des chiffres, de la date et des devises. Remarque : ces options ne sont disponibles que sous Windows.

```jsl

//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Use JMP Locale Settings( 1 ) );

```

### Use Numerical Ordering

**Syntaxe :** obj &lt;&lt; Use Numerical Ordering( state=0|1 )

**Description :** Configurer le triage des colonnes pour les nouvelles colonnes de manière à trier les textes contenant des nombres par ordre numérique. Les colonnes converties au type caractère seront également affectées si elles ne contiennent pas encore une propriété Ordre des valeurs.

**JMP Version ajoutée :** 16

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Use Numerical Ordering( 0 ) );

```

### Use Project Log

**Syntaxe :** obj &lt;&lt; Use Project Log( "Toujours"|"Si Ouvrir"|"Jamais" )

**Description :** Indique si les messages de registre générés par les scripts et les fenêtres dans un projet doivent être envoyés vers la fenêtre de registre du projet (plutôt que la fenêtre de registre principale)

**JMP Version ajoutée :** 16

### Use SPSS labels for column names during import

**Syntaxe :** obj &lt;&lt; Use SPSS labels for column names during import( state=0|1 )

**Description :** Modifie le paramètre par défaut d&apos;importation des étiquettes SPSS en tant que noms de colonnes JMP à l’ouverture des fichiers SPSS.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use SPSS labels for column names during import( 1 ) );

```

### Use Thousands Separator

**Syntaxe :** obj &lt;&lt; Use Thousands Separator( state=0|1 )

**Description :** Modifie le paramètre par défaut pour utiliser le séparateur des milliers dans la sortie numérique.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Thousands Separator( 1 ) );

```

### Use Triple-S Labels as Headings

**Syntaxe :** obj &lt;&lt; Use Triple-S Labels as Headings( state=0|1 )

**Description :** Modifie le paramètre par défaut pour l&apos;utilisation d&apos;étiquettes en tant que noms de colonne pour les variables Triple-S

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Use Triple-S Labels as Headings"n( 1 ) );

```

### Use a Floating Window for Data Filters

**Syntaxe :** obj &lt;&lt; Use a Floating Window for Data Filters( state=0|1 )

**Description :** Une fois définis, les filtres de données ouvrent une fenêtre flottante au-dessus des fenêtres des tables de données concernées. Dans le cas contraire, les filtres de données sont contenus dans une fenêtre disposable normalement à côté des autres fenêtres.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use a Floating Window for Data Filters( 1 ) );

```

### Use an Asterisk with the PValue Format

**Syntaxe :** obj &lt;&lt; Use an Asterisk with the PValue Format( state=0|1 )

**Description :** Le format P-value ajoute un astérisque dans les colonnes numériques

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use an Asterisk with the PValue Format( 1 ) );

```

### Use column references in Dispatch

**Syntaxe :** obj &lt;&lt; Use column references in Dispatch( state=0|1 )

**Description :** Lors de l&apos;enregistrement de personnalisations de rapport, utilisez des références de colonne plutôt que des chaînes de caractères pour faire référence à des éléments personnalisés. Cela produit des scripts plus robustes en cas de modifications des noms de colonne. Notez que les personnalisations enregistrées avec cette préférence peuvent ne fonctionner que dans JMP 18.0 et versions ultérieures.

**JMP Version ajoutée :** 18

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use column references in Dispatch( 1 ) );

```

### Use math symbols

**Syntaxe :** obj &lt;&lt; Use math symbols( state=0|1 )

**Description :** Modifie les paramètres par défaut pour utiliser les symboles mathématiques dans les rapports JMP.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use math symbols( 1 ) );

```

### Virtual Join Auto Open Linked Table

**Syntaxe :** obj &lt;&lt; Virtual Join Auto Open Linked Table( state=0|1 )

**Description :** Ouvre automatiquement la table de données référencée par cette colonne.

**JMP Version ajoutée :** 16

### Virtual Join Use Linked Column Name

**Syntaxe :** obj &lt;&lt; Virtual Join Use Linked Column Name( state=0|1 )

**Description :** Nomme la colonne virtuelle avec le nom de la colonne liée.

**JMP Version ajoutée :** 16

### Warn that compact columns cannot be opened in JMP 17 and earlier

**Syntaxe :** obj &lt;&lt; Warn that compact columns cannot be opened in JMP 17 and earlier( state=0|1 )

**Description :** Le format de fichier compact ne peut pas être ouvert dans JMP 17 et les versions antérieures.

**JMP Version ajoutée :** 18

### Warn when referenced table name has changed

**Syntaxe :** obj &lt;&lt; Warn when referenced table name has changed( state=0|1 )

**Description :** Transmettre un message d&apos;avertissement lorsque le nom d&apos;une table liée (référencée) a changé.

**JMP Version ajoutée :** 15

## Platform Preferences

### Messages d'éléments

#### Get

**Syntaxe :** obj &lt;&lt; Get

**Description :** Renvoie le script pour définir une préférence spécifique.

```jsl

a = Platform Preferences[1] << Get( Distribution );
Show( a );

```

#### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Renvoie le script pour définir les préférences.

```jsl

a = Platform Preferences[1] << Get Script;
Show( a );

```

#### Set

**Syntaxe :** obj &lt;&lt; Set

**Description :** Définit une préférence spécifiée.

```jsl

//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Platform Preferences[1] << Set( Distribution( Vertical( 1 ) ) );

```

