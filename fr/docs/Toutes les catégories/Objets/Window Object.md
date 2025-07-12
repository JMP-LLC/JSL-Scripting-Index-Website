# Window Object



## Messages d'éléments

### Set Window Title

**Syntaxe :** obj << Set Window Title

**Description :** Définit le titre de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Title( "New Title" );

```

## Messages d'éléments partagés

### Bring Window To Front

**Syntaxe :** obj << Bring Window To Front

**Description :** Amène la fenêtre en premier plan.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Close Window

**Syntaxe :** obj << Close Window( <"NoSave"> )

**Description :** Ferme la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Get Content Size

**Syntaxe :** obj << Get Content Size

**Description :** Renvoie la taille du contenu dans la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get On Close

**Syntaxe :** obj << Get On Close

**Description :** Renvoie le script ou la fonction qui sera exécuté(e) à la fermeture de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);
Show( w << Get On Close );

```

### Get Page Setup

**Syntaxe :** obj << Get Page Setup

**Description :** Obtenir les informations de mise en page du pdf

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Project

**Syntaxe :** project = obj << Get Project()

**Description :** Renvoie le projet parent de la fenêtre, ou Empty() si elle ne se trouve pas dans un projet.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Show Window

**Syntaxe :** obj << Get Show Window

**Description :** Renvoie la visibilité de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Web Support

**Syntaxe :** obj << Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Window Icon

**Syntaxe :** obj << Get Window Icon

**Description :** Renvoie l’icône de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Syntaxe :** obj << Get Window Position

**Description :** Renvoie la position de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Syntaxe :** obj << Get Window Size

**Description :** Renvoie la taille de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Syntaxe :** obj << Get Window Title

**Description :** Renvoie le titre de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Syntaxe :** obj << Get Window View

**Description :** Renvoie l&apos;affichage de fenêtre actuel. Les fenêtres peuvent être « Visibles », « Invisibles », ou « Privées ».

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Is Modal Dialog

**Syntaxe :** obj << Is Modal Dialog

**Description :** Renvoie vrai si la fenêtre est une boîte de dialogue modale. Utile uniquement si appelé à partir d&apos;un rappel de gestionnaire de fenêtre.

```jsl

Names Default To Here( 1 );
With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Maximize Window

**Syntaxe :** obj << Maximize Window( <state=0|1> )

**Description :** Agrandir la fenêtre. L&apos;argument par défaut est 1.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**Syntaxe :** obj << Minimize Window( <state=0|1> )

**Description :** Réduire la fenêtre. L&apos;argument par défaut est 1.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**Syntaxe :** obj << Move Window( x,y )

**Description :** Déplace la fenêtre à la position spécifiée.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### On Close

**Syntaxe :** obj << On Close( script )

**Description :** Définit l&apos;exécution d&apos;un script ou d&apos;une fonction à la fermeture d&apos;une fenêtre. Ce script renvoie 1 pour autoriser la fermeture, ou 0 pour empêcher la fermeture de la fenêtre.

**Fermer la fonction**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box(
					"Press OK to allow " || (this << Get Window Title) || " to close"
				),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

**Fermer le script**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);

```

### Optimize Display

**Syntaxe :** obj << Optimize Display

**Description :** Définit les largeurs de colonne et la fenêtre d&apos;une table de données pour une taille optimale.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Syntaxe :** obj << Pad Window( bool )

**Description :** Ajoute ou supprime les marges de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Print Window

**Syntaxe :** obj << Print Window

**Description :** Imprime la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Save Window Report

**Syntaxe :** obj << Save Window Report( pathname, <embed data(0|1)> )

**Description :** Enregistre la fenêtre du rapport actuel dans un fichier de rapport JMP (.jrp).

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Set Content Size

**Syntaxe :** obj << Set Content Size( x,y )

**Description :** Définit la taille du contenu dans la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Test",
	lb = List Box( {"a", "b", "c", "d"} ),
	Button Box( "Enable 2nd item",
		lb << enable item( 2, 1 );
		Show( lb << item enabled( 2 ) );
	),
	Button Box( "Disable 2nd item",
		lb << enable item( 2, 0 );
		Show( lb << item enabled( 2 ) );
	)
);
Wait( 2 );
w << Set Content Size( 400, 300 );

```

### Set Main Window

**Syntaxe :** obj << Set Main Window

**Description :** Définit la fenêtre active en tant que fenêtre principale de JMP alors que la fenêtre principale précédente devient une fenêtre normale.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Page Setup

**Syntaxe :** obj << Set Page Setup( <margins(left, top, right, bottom)>, <scale(s)>, <portrait(0|1)>, <paper size(p)>, <Table of Contents(always, never, default)>  )

**Description :** Définit les informations de mise en page utilisées pour l&apos;impression ou l&apos;enregistrement en tant que PDF. Une table des matières peut éventuellement être générée à partir de boîtes de structure.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );
w << Set page setup(
	margins( 1, 1, 1, 1 ),
	scale( 1 ),
	portrait( 1 ),
	paper size( "Letter" ),
	Table of Contents( "always" )
);
w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Syntaxe :** obj << Set Print Footers( left footer, center footer, right header )

**Description :** Définit les pieds de page de gauche, du centre et de droite de la sortie imprimée

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**Syntaxe :** obj << Set Print Headers( left header, center header, right header )

**Description :** Définit les en-têtes de gauche, du centre et de droite de la sortie imprimée

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Window Icon

**Syntaxe :** obj << Set Window Icon( icon name )

**Description :** Définit l’icône de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntaxe :** obj << Set Window Size( x,y )

**Description :** Définit la taille de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Show Window

**Syntaxe :** obj << Show Window( state=0|1 )

**Description :** Affiche ou masque la fenêtre. Ceci s’avère utile pour les fenêtres provisoirement masquées. Actif par défaut.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Size Window

**Syntaxe :** obj << Size Window( x,y )

**Description :** Définit la taille de la fenêtre.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Zoom Window

**Syntaxe :** obj << Zoom Window

**Description :** Redimensionne la fenêtre de sorte qu&apos;elle soit suffisamment grande pour afficher tout son contenu.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

