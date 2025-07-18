# ColorBox



## Messages d'éléments partagés

### Add Line Annotation

**Syntaxe :** obj &lt;&lt; Add Line Annotation

**Description :** Ajoute une ligne au haut de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Syntaxe :** obj &lt;&lt; Add Pin Annotation

**Description :** Ajoute une annotation épinglée en haut de la boîte d’affichage. La plupart des attributs (comme Index Row, UniqueID et FoundPt) sont conçus pour une utilisation interne uniquement.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 17 ),
				Index Row( 17 ),
				UniqueID( -960001792 ),
				FoundPt( {238, 219} ),
				Origin( {64.9765625, 142} ),
				Offset( {-174, -40} ),
				Tag Line( 1 ),
				Font( "Helvetica", 11, "Plain" )
			)
		)
	)
);

```

### Add Polygon Annotation

**Syntaxe :** obj &lt;&lt; Add Polygon Annotation

**Description :** Ajoute un polygone au haut de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Polygon Annotation(
	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),
	Color( "Red" ),
	Closed( 1 )
);

```

### Add Simple Shape Annotation

**Syntaxe :** obj &lt;&lt; Add Simple Shape Annotation

**Description :** Ajoute une forme simple au haut de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Syntaxe :** obj &lt;&lt; Add Text Annotation

**Description :** Ajoute un texte au haut de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);

```

### Append

**Syntaxe :** obj &lt;&lt; Append( db2 )

**Description :** Ajoute db2 à l’arbre d’affichage après db.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Syntaxe :** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**Description :** Si la couleur de fond est définie, la boîte est remplie de cette couleur avant de dessiner son contenu. Si la couleur de fond n&apos;est pas définie, le fond et le contenu des boîtes contenantes sont visibles l&apos;un au travers de l&apos;autre.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Border

**Syntaxe :** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**Description :** Les bordures sont des lignes pleines dessinées tout autour d&apos;une boîte d&apos;affichage. Si vous spécifiez une seule valeur, celle-ci sera appliquée à toutes les bordures. Si vous spécifiez deux valeurs, elles seront appliquées aux bordures horizontales et verticales.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Border Color

**Syntaxe :** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**Description :** Couleur facultative pour remplacer la couleur par défaut des bordures de boîte.

**JMP Version ajoutée :** 19

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Bring Window To Front

**Syntaxe :** obj &lt;&lt; Bring Window To Front

**Description :** Amène la fenêtre en premier plan.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Syntaxe :** obj &lt;&lt; Child

**Description :** Renvoie l’enfant de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
axisChild = axisParent << child();
Print( axisChild << Class Name() );

```

### Class Name

**Syntaxe :** obj &lt;&lt; Class Name

**Description :** Renvoie le nom de la classe d’affichage associée à la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**Syntaxe :** obj &lt;&lt; Clone Box

**Description :** Crée une nouvelle copie de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**Syntaxe :** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**Description :** Ferme la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**Syntaxe :** obj &lt;&lt; Copy Data

**Description :** copie les données séparées par des tabulations d&apos;une matrice ou d&apos;un tableau dans le presse-papiers.

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Syntaxe :** obj &lt;&lt; Copy Graph

**Description :** Copie une image du graphique et des axes dans le presse-papier.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**Syntaxe :** obj &lt;&lt; Copy Picture

**Description :** Place une image de la boîte d’affichage dans le presse-papier.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**Syntaxe :** obj &lt;&lt; Delete Box

**Description :** Supprime la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Deselect

**Syntaxe :** obj &lt;&lt; Deselect

**Description :** Désélectionne cet objet à utiliser par les commandes du menu Édition.

```jsl

//This message applies to all display box objects
selected = 0;
New Window( "Example",
	ex = Button Box( "Press Me",
		selected = !selected;
		refresh;
	)
);
refresh = Function( {},
	If( selected,
		ex << Select,
		ex << Deselect
	)
);

```

### Dispatch

**Syntaxe :** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**Description :** Envoie la commande command vers une partie spécifique d’un arbre d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Syntaxe :** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```jsl

//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Find

**Syntaxe :** obj &lt;&lt; Find

**Description :** Renvoie une boîte d’affichage avec l’argument argument donné.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get Annotation

**Syntaxe :** obj &lt;&lt; Get Annotation

**Description :** Renvoie la première annotation ancrée à la boîte d&apos;affichage. Il est possible d&apos;accéder aux autres annotations en exécutant Sib() sur le résultat.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);
annotation = rbiv << Get Annotation;
annotation << delete;

```

### Get Background Color

**Syntaxe :** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**Description :** Si la couleur de fond est définie, la boîte est remplie de cette couleur avant de dessiner son contenu. Si la couleur de fond n&apos;est pas définie, le fond et le contenu des boîtes contenantes sont visibles l&apos;un au travers de l&apos;autre.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Get Border

**Syntaxe :** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**Description :** Les bordures sont des lignes pleines dessinées tout autour d&apos;une boîte d&apos;affichage. Si vous spécifiez une seule valeur, celle-ci sera appliquée à toutes les bordures. Si vous spécifiez deux valeurs, elles seront appliquées aux bordures horizontales et verticales.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Get Border Color

**Syntaxe :** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**Description :** Couleur facultative pour remplacer la couleur par défaut des bordures de boîte.

**JMP Version ajoutée :** 19

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Get Content Size

**Syntaxe :** obj &lt;&lt; Get Content Size

**Description :** Renvoie la taille du contenu dans la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**Syntaxe :** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**Description :** Obtient une expression relativement robuste pour naviguer entre parent box et obj. Ce chemin n&apos;est pas garanti comme étant stable dans toutes les versions de JMP. Le receiver expr est intégré dans l&apos;expression de sortie s&apos;il est fourni. Sinon, l&apos;expression fournie pour parent box est utilisée à la place. Comme indiqué dans l&apos;exemple, ce message est principalement utile pour augmenter la robustesse d&apos;un chemin déjà disponible. Le mode XPath est défini par défaut.

#### Élémentaire

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] <<
Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

#### Mode indice

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] <<
Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

```

### Get Enabled

**Syntaxe :** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```jsl

//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get HTML

**Syntaxe :** obj &lt;&lt; Get HTML( &lt;format&gt; )

**Description :** Renvoie une chaîne contenant le code source HTLM de la boîte d’affichage.

#### Exemple 1

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

#### Exemple 2

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway(
	Y( :height ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 )
);
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Syntaxe :** width = obj &lt;&lt; Get Height

**Description :** Renvoie la hauteur de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**Syntaxe :** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Description :** L&apos;alignement horizontal gère le positionnement de la boîte dans un contenant lorsque la boîte ne remplit pas tout l&apos;espace.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Get Journal

**Syntaxe :** obj &lt;&lt; Get Journal

**Description :** Renvoie une chaîne contenant le code source du journal de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**Syntaxe :** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**Description :** La marge ajoute un espace entre la bordure de la boîte et les boîtes adjacentes. Utilisez des arguments nommés ou fournissez une liste de valeurs. Si une seule valeur est spécifiée, elle sera appliquée à tous les côtés. Si deux valeurs sont spécifiées, elles seront appliquées aux marges horizontale et verticale.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**Syntaxe :** width,height = obj &lt;&lt; Get Max Size

**Description :** Renvoie la taille maximale de la boîte d’affichage afin de permettre l’ajustement automatique de la boîte.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**Syntaxe :** width,height = obj &lt;&lt; Get Min Size

**Description :** Renvoie la taille minimale de la boîte d’affichage afin de permettre l’ajustement automatique de la boîte.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

```

### Get Namespace

**Syntaxe :** obj &lt;&lt; Get Namespace

**Description :** Renvoie l&apos;espace de noms associé à cet objet d&apos;affichage.

```jsl

//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get On Close

**Syntaxe :** obj &lt;&lt; Get On Close

**Description :** Renvoie le script ou la fonction qui sera exécuté(e) à la fermeture de la fenêtre.

```jsl

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

### Get Padding

**Syntaxe :** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**Description :** Le remplissage ajoute un espace entre le contenu et la bordure de la boîte. Utilisez des arguments nommés ou fournissez une liste de valeurs. Si une seule valeur est spécifiée, elle sera appliquée à tous les côtés. Si deux valeurs sont spécifiées, elles seront appliquées aux remplissages horizontal et vertical.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Syntaxe :** obj &lt;&lt; Get Page Setup

**Description :** Obtenir les informations de mise en page du pdf

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Syntaxe :** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Description :** Capture db comme objet image. L&apos;argument facultatif Scale restituera l&apos;image à une résolution mise à l&apos;échelle. La mise à l&apos;échelle requiert que la boîte d&apos;affichage soit ajustable. L&apos;argument Type détermine si le résultat sera une image vectorielle pouvant être mise à l&apos;échelle ou un bitmap. Par défaut, une image pouvant être mise a l&apos;échelle est renvoyée, ce qui convient à l&apos;enregistrement aux formats vectoriels comme PDF. L&apos;option View change le comportement de certaines boîtes. L&apos;option par défaut "Picture" affiche le rapport comme il le serait à l&apos;exportation au format image, avec les zones déroulées complètement affichées. Le mode d&apos;affichage "Screen" affiche le rapport comme vu à l&apos;écran, et "Print" affiche le rapport comme à l&apos;impression, sans aucune fonction de configuration de page. L&apos;option SubRect capturera une portion de l&apos;image résultante plutôt que l&apos;image entière. L&apos;option Appearance peut changer des couleurs de sortie "Default" aux couleurs "Current" comme vu à l&apos;écran. Les options View, SubRect et Appearance sont uniquement prises en charge pour Type "Bitmap".

#### Affichage et apparence

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example",
	H List Box(
		rbiv << Get Picture(
			View( "Screen" ),
			Appearance( "Current" )
		),
		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )
	)
);

```

#### Échelle

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

#### Par défaut

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

### Get Project

**Syntaxe :** project = obj &lt;&lt; Get Project()

**Description :** Renvoie le projet parent de la fenêtre, ou Empty() si elle ne se trouve pas dans un projet.

**JMP Version ajoutée :** 14

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Syntaxe :** obj &lt;&lt; Get Properties

**Description :** Renvoie un tableau associatif qui contient les propriétés de la boîte d&apos;affichage et leurs valeurs.

```jsl

New Window( "Example",
	bb = Button Box( "Press Me", Print( "Pressed" ) )
);
bb << Get Properties;

```

### Get Property

**Syntaxe :** obj &lt;&lt; Get Property( "property" )

**Description :** Renvoie le paramètre actuel pour la property nommée.

```jsl

New Window( "Example",
	bb = Button Box( "Press Me", Print( "Pressed" ) )
);
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntaxe :** obj &lt;&lt; Get Property List

**Description :** Renvoie la liste des propriétés de la boîte d&apos;affichage.

```jsl

New Window( "Example",
	bb = Button Box( "Press Me", Print( "Pressed" ) )
);
bb << Get Property List;

```

### Get RTF

**Syntaxe :** obj &lt;&lt; Get RTF( &lt;format&gt; )

**Description :** Renvoie une chaîne contenant le code source RTF de la boîte d’affichage.

#### Exemple 1

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

#### Exemple 2

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway(
	Y( :height ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 )
);
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Syntaxe :** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**Description :** Renvoie un vecteur contenant l&apos;état de ligne de toutes les lignes de la table de données spécifiée ou active. Les états de ligne peuvent être issus de la table ou du contexte du filtre de la zone.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter(
					columns( :height ),
					Where( :height >= 51 & :height <= 62 )
				),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter(
				columns( :height ),
				Where( :height >= 51 & :height <= 62 )
			),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Get Show Window

**Syntaxe :** obj &lt;&lt; Get Show Window

**Description :** Renvoie la visibilité de la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**Syntaxe :** width,height = obj &lt;&lt; Get Size

**Description :** Renvoie la taille de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**Syntaxe :** x,y = obj &lt;&lt; Get Stretch

**Description :** Renvoie les drapeaux d&apos;ajustement pour la boîte d&apos;affichage dans les directions horizontale et verticale.

**JMP Version ajoutée :** 16

```jsl

//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box(
			Text Edit Box( "String1" ),
			Text Edit Box( "String2" )
		),
		spacer = Spacer Box(
			Size( 20, 20 ),
			Color( "Light Red" ),
			<<Set Stretch( "Fill", "Off" )
		)
	)
);
spacer << Get Stretch();

```

### Get Text

**Syntaxe :** obj &lt;&lt; Get Text

**Description :** Renvoie une chaîne contenant le texte de la boîte d’affichage.

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**Syntaxe :** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**Description :** Le texte sera écrit dans une couleur de texte si celle-ci a été préalablement définie. Dans le cas contraire, la boîte héritera la couleur de la boîte conteneur.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Get UI Only

**Syntaxe :** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Get Vertical Alignment

**Syntaxe :** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Description :** L&apos;alignement vertical gère le positionnement de la boîte dans un conteneur lorsque la boîte ne remplit pas tout l&apos;espace..

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Syntaxe :** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Description :** La visibilité détermine si une boîte est affichée et si elle occupe un espace. La valeur par défaut de la visibilité "Visible" indique que l&apos;objet sera affiché. Une boîte "Hidden" n&apos;est pas affichée mais elle occupe encore un espace, alors qu&apos;une boîte "Collapsed" n&apos;occupe pas d&apos;espace dans la mise en page.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Syntaxe :** width = obj &lt;&lt; Get Width

**Description :** Renvoie la largeur de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Width;

```

### Get Window Icon

**Syntaxe :** obj &lt;&lt; Get Window Icon

**Description :** Renvoie l’icône de la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Syntaxe :** obj &lt;&lt; Get Window Position

**Description :** Renvoie la position de la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Syntaxe :** obj &lt;&lt; Get Window Size

**Description :** Renvoie la taille de la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Syntaxe :** obj &lt;&lt; Get Window Title

**Description :** Renvoie le titre de la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Syntaxe :** obj &lt;&lt; Get Window View

**Description :** Renvoie l&apos;affichage de fenêtre actuel. Les fenêtres peuvent être « Visibles », « Invisibles », ou « Privées ».

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Syntaxe :** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Description :** Récupère l&apos;arbre d&apos;affichage au format XML. Par défaut, les chaînes sont renvoyées dans la langue locale et le XML contient les valeurs des données dans des boîtes. Utilisez l&apos;option English pour renvoyer des chaînes anglaises, le cas échéant. Utilisez l&apos;option NoData pour omettre les valeurs des données dans les boîtes, qui peuvent être volumineuses pour certains arbres d&apos;affichage.

```jsl

//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**Syntaxe :** x,y = obj &lt;&lt; GetOffset

**Description :** Renvoie l&apos;offset de cette boîte d&apos;affichage en relation avec la boîte parent. Vous pouvez avoir besoin d&apos;utiliser le message <<parent dans une boucle pour cumuler plusieurs offsets.

```jsl

New Window( "example",
	MouseBox(
		Graph Box(
			title( "title" ),
			Pen Size( 3 );
			Y Function(
				-3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )),
				x
			);
		),
		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"
	,
		<<settrack( // events from the mouse (movement, with button up or down)
			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y
				{fb, offset, t, off, size}, // local variables
				// recalulate offset and size each time, the values can change
				fb = this[framebox( 1 )]; // the framebox in the graph 
				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox
				t = fb; // a temporary box that starts at the frame 
				While( t != this, // and walks up to the mousebox
					off = t << getOffset; // ask each box for its offset to the immediate parent
					offset += Matrix( off ); // convert list answer to matrix so + will work
					t = t << parent; // crawl up to the mousebox, one box at a time
				);
				size = Matrix( fb << getSize ); // the frame knows its size
				If( // over the frame box
					offset[1] < pt[1] < offset[1] + size[1] & offset[2]
					 < pt[2] < offset[2] + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Horizontal Alignment

**Syntaxe :** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Description :** L&apos;alignement horizontal gère le positionnement de la boîte dans un contenant lorsque la boîte ne remplit pas tout l&apos;espace.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Inval

**Syntaxe :** obj &lt;&lt; Inval

**Description :** Invalider la boîte d&apos;affichage. La fenêtre sera actualisée lorsque le message <<Actualiser la fenêtre sera envoyé, ou lorsque le système d&apos;exploitation disposera de temps pour la mise à jour.

```jsl

//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Inval example",
	Button Box( "red",
		color = "red";
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5,
			0 /* delay without wait(.5) */
		);
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	),
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change 
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	),
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Is Dirty

**Syntaxe :** obj &lt;&lt; Is Dirty

**Description :** Obtient le statut de modification du document. 1 signifie que le document a été modifié et invitera l&apos;utilisateur à l&apos;enregistrer ; 0 signifie que le document n&apos;est pas modifié.

**JMP Version ajoutée :** 14

```jsl


ww = New Window( "Test",
	<<Script,
	"Open(\!"$SAMPLE_DATA\Big Class.jmp\!");"
);
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntaxe :** obj &lt;&lt; Is Modal Dialog

**Description :** Renvoie vrai si la fenêtre est une boîte de dialogue modale. Utile uniquement si appelé à partir d&apos;un rappel de gestionnaire de fenêtre.

```jsl

With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**Syntaxe :** obj &lt;&lt; Journal

**Description :** Crée un journal à partir de la boîte de dialogue.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**Syntaxe :** obj &lt;&lt; Journal Window

**Description :** Ouvre une fenêtre de journal de la fenêtre.

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Syntaxe :** obj &lt;&lt; Launch

**Description :** Calcule l’argument donné argument dans le contexte de la boîte d’affichage.

```jsl

//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "example",
	ob1 = Outline Box( "treemap launcher" ),
	ob2 = Outline Box( "bivariate partial" ),
	ob3 = Outline Box( "bivariate launched" )
);
ob1 << launch( Treemap() );
ob2 << launch( Bivariate( Y( :height ) ) );
ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**Syntaxe :** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**Description :** Crée un gestionnaire d&apos;état de ligne pour la table de données spécifiée ou pour la table de données active. La fonction est appelée lorsque les états de ligne changent dans le contexte du filtre de la zone. L&apos;argument de la fonction contient les numéros de lignes modifiés, ou -1 si le filtre de l&apos;état de ligne a été modifié.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter(
					columns( :height ),
					Where( :height >= 51 & :height <= 62 )
				),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter(
				columns( :height ),
				Where( :height >= 51 & :height <= 62 )
			),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Margin

**Syntaxe :** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**Description :** La marge ajoute un espace entre la bordure de la boîte et les boîtes adjacentes. Utilisez des arguments nommés ou fournissez une liste de valeurs. Si une seule valeur est spécifiée, elle sera appliquée à tous les côtés. Si deux valeurs sont spécifiées, elles seront appliquées aux marges horizontale et verticale.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**Syntaxe :** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**Description :** Agrandir la fenêtre. L&apos;argument par défaut est 1.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**Syntaxe :** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**Description :** Réduire la fenêtre. L&apos;argument par défaut est 1.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**Syntaxe :** obj &lt;&lt; Move Window( x,y )

**Description :** Déplace la fenêtre à la position spécifiée.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**Syntaxe :** obj &lt;&lt; Next

**Description :** Renvoie la boîte d’affichage immédiatement après celle-ci.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**Syntaxe :** obj &lt;&lt; On Close( script )

**Description :** Définit l&apos;exécution d&apos;un script ou d&apos;une fonction à la fermeture d&apos;une fenêtre. Ce script renvoie 1 pour autoriser la fermeture, ou 0 pour empêcher la fermeture de la fenêtre.

#### Fermer la fonction

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box(
					"Press OK to allow " || (this << Get Window Title)
					 || " to close"
				),
				H List Box(
					Button Box( "OK" ),
					Button Box( "Cancel" )
				)
			)
		)["button"] == 1
	)
);

```

#### Fermer le script

```jsl

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

**Syntaxe :** obj &lt;&lt; Optimize Display

**Description :** Définit les largeurs de colonne et la fenêtre d&apos;une table de données pour une taille optimale.

**JMP Version ajoutée :** 14

```jsl

//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Syntaxe :** obj &lt;&lt; Pad Window( bool )

**Description :** Ajoute ou supprime les marges de la fenêtre.

```jsl

//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**Syntaxe :** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**Description :** Le remplissage ajoute un espace entre le contenu et la bordure de la boîte. Utilisez des arguments nommés ou fournissez une liste de valeurs. Si une seule valeur est spécifiée, elle sera appliquée à tous les côtés. Si deux valeurs sont spécifiées, elles seront appliquées aux remplissages horizontal et vertical.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Syntaxe :** obj &lt;&lt; Page Break

**Description :** Insère un saut de page avant la boîte d’affichage.

```jsl

//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box(
					Text Edit Box( "Top Left" ),
					Text Edit Box( "Top Right" )
				)
			),
			ob3 = Outline Box( "Outline Box",
				H List Box(
					Text Edit Box( "Bottom Left" ),
					Text Edit Box( "Bottom Right" )
				)
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**Syntaxe :** obj &lt;&lt; Parent

**Description :** Renvoie le parent de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Prepend

**Syntaxe :** obj &lt;&lt; Prepend( db2 )

**Description :** Ajoute db2 à l’arbre d’affichage avant db.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Syntaxe :** obj &lt;&lt; Prev Sib

**Description :** Renvoie le frère précédent de la boîte d’affichage.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**Syntaxe :** obj &lt;&lt; Print Window

**Description :** Imprime la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**Syntaxe :** obj &lt;&lt; Reshow

**Description :** Invalider la boîte d&apos;affichage et mettre à jour la fenêtre avec le nouveau contenu. Consulter les messages <<Inval et <<Actualiser la fenêtre si la synchronisation de la mise à jour requiert un contrôle plus poussé.

```jsl

//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Reshow example",
	Button Box( "red",
		color = "red";
		g << reshow/* tell the graph that something changed */;
	),
	Button Box( "blue",
		color = "blue";
		g << reshow/* tell the graph that something changed */;
	),
	g = Graph Box(/* the graph does NOT watch for the color variable to change
                     but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);

```

### Save Capture

**Syntaxe :** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**Description :** Enregistre la capture d&apos;écran de la boîte d&apos;affichage au path spécifié. Si un path n&apos;est pas spécifié, la fenêtre Enregistrer sous s&apos;affiche.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Syntaxe :** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**Description :** Enregistre le code source HTML et le dossier du graphique au format format spécifié.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Syntaxe :** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**Description :** Enregistre l&apos;HTML interactif avec les données dans un fichier. L&apos;argument Boolean indique que le rapport est statique.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Syntaxe :** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**Description :** Enregistre le code source du journal de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Syntaxe :** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**Description :** Enregistre la boîte d’affichage en tant que document Microsoft Word. (Windows uniquement)

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Syntaxe :** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**Description :** Enregistre un PDF de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Syntaxe :** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Description :** Enregistre une image de la boîte d&apos;affichage. Les formats pris en charge sont EMF (Windows), PICT (Macintosh), JPEG ou JPG, GIF et PNG. L&apos;argument facultatif Scale restituera l&apos;image à une résolution mise à l&apos;échelle. La mise à l&apos;échelle requiert que la boîte d&apos;affichage soit ajustable. L&apos;argument Type détermine si le résultat sera une image vectorielle pouvant être mise à l&apos;échelle ou un bitmap. Par défaut, une image pouvant être mise a l&apos;échelle est renvoyée, ce qui convient à l&apos;enregistrement aux formats vectoriels comme PDF. L&apos;option View change le comportement de certaines boîtes. L&apos;option par défaut "Picture" affiche le rapport comme il le serait à l&apos;exportation au format image, avec les zones déroulées complètement affichées. Le mode d&apos;affichage "Screen" affiche le rapport comme vu à l&apos;écran, et "Print" l&apos;affiche comme à l&apos;impression, sans aucune fonction de configuration de page. L&apos;option SubRect capturera une portion de l&apos;image résultante plutôt que l&apos;image entière. L&apos;option Appearance peut changer des couleurs de sortie "Default" aux couleurs "Current" comme vu à l&apos;écran. Les options View, SubRect et Appearance sont uniquement prises en charge pour Type "Bitmap".

#### Affichage et apparence

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv << Save Picture(
	"$TEMP/jmp_example_screen.png",
	"png",
	View( "Screen" ),
	Appearance( "Current" )
);
rbiv << Save Picture(
	"$TEMP/jmp_example_print.png",
	"png",
	View( "Print" ),
	Appearance( "Default" )
);
New Window( "Example",
	H List Box(
		New Image( "$TEMP/jmp_example_screen.png" ),
		New Image( "$TEMP/jmp_example_print.png" )
	)
);

```

#### Échelle

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture(
	"$TEMP/jmp_example_scale.png",
	"png",
	Scale( 1.5 )
);
New Window( "scaled image",
	New Image( "$TEMP/jmp_example_scale.png" )
);

```

#### Par défaut

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

### Save Presentation

**Syntaxe :** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**Description :** Enregistre les tables de la boîte d&apos;affichage et les diapositives de graphiques dans une présentation qui peut être vue avec Microsoft PowerPoint ou un autre logiciel de présentation.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Syntaxe :** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**Description :** Enregistre le code source RTF avec le graphique au format format spécifié.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Syntaxe :** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**Description :** Enregistre un fichier contenant le texte de la boîte d’affichage.

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntaxe :** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**Description :** Enregistre la fenêtre du rapport actuel dans un fichier de rapport JMP (.jrp).

**JMP Version ajoutée :** 16

```jsl

//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Syntaxe :** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**Description :** Ajustez la barre de défilement de la fenêtre de manière à afficher l&apos;objet DisplayBox donnée, ou à faire défiler un nombre relatif de pixels, ou à afficher un emplacement de pixel absolu. Pour remplacer un nombre de pixels, vous pouvez utiliser les mots-clés "Start" ou "End".

#### Absolute

```jsl


Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F,
		:BP 12F, :BP 6F
	),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Absolute( "End", "End" ) );
Wait( 1 );
fm << scroll window( Absolute( 0, 300 ) );
Wait( 1 );

```

#### Box

```jsl


Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F,
		:BP 12F, :BP 6F
	),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
For( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second
	fm << scroll window( Report( fm )[framebox( 2 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 3 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 1 )] );
	Wait( .5 );
);

```

#### Relative

```jsl


Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F,
		:BP 12F, :BP 6F
	),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Relative( 300 ) );
Wait( 1 );
fm << scroll window( Relative( -50 ) );
Wait( 1 );
fm << scroll window( Relative( "Start" ) );
Wait( 1 );

```

### Select

**Syntaxe :** obj &lt;&lt; Select

**Description :** Sélectionne cet objet à utiliser par les commandes du menu Édition.

```jsl

//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**Syntaxe :** obj &lt;&lt; Set Content Size( x,y )

**Description :** Définit la taille du contenu dans la fenêtre.

```jsl

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

### Set Dirty

**Syntaxe :** obj &lt;&lt; Set Dirty

**Description :** Définit le statut de modification du document. 0 n&apos;invitera pas à enregistrer ; 1 y invitera.

**JMP Version ajoutée :** 14

```jsl


ww = New Window( "Test",
	<<Script,
	"Open(\!"$SAMPLE_DATA\Big Class.jmp\!");"
);
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**Syntaxe :** obj &lt;&lt; Set Height( width )

**Description :** Définit la hauteur de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**Syntaxe :** obj &lt;&lt; Set Main Window

**Description :** Définit la fenêtre active en tant que fenêtre principale de JMP alors que la fenêtre principale précédente devient une fenêtre normale.

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Syntaxe :** obj &lt;&lt; Set Max Size( width,height )

**Description :** Définit la taille maximale de cette boîte d’affichage afin de permettre l’ajustement automatique de la boîte.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**Syntaxe :** obj &lt;&lt; Set Min Size( width,height )

**Description :** Définit la taille minimale de cette boîte d’affichage afin de permettre l’ajustement automatique de la boîte.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**Syntaxe :** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**Description :** Définit les informations de mise en page utilisées pour l&apos;impression ou l&apos;enregistrement en tant que PDF. Une table des matières peut éventuellement être générée à partir de boîtes de structure.

```jsl

//This message applies to all display box objects
w = New Window( "Window",
	Outline Box( "TOC", Text Box( "Page Setup Test" ) )
);
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

**Syntaxe :** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**Description :** Définit les pieds de page de gauche, du centre et de droite de la sortie imprimée

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**Syntaxe :** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**Description :** Définit les en-têtes de gauche, du centre et de droite de la sortie imprimée

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**Syntaxe :** obj &lt;&lt; Set Property( "property", value )

**Description :** Définit la valeur pour la property nommée pour la boîte d&apos;affichage.

```jsl

New Window( "Example",
	bb = Button Box( "Press Me", Print( "Pressed" ) )
);
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntaxe :** obj &lt;&lt; Set Report Title( "string" )

**Description :** Modifie le titre du rapport.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Syntaxe :** obj &lt;&lt; Set Stretch( x,y )

**Description :** Définit le comportement d&apos;ajustement horizontal et vertical de la boîte. Les boîtes ajustées avec Window seront redimensionnées lorsque la dimension de la fenêtre ou du séparateur est modifiée. Les boîtes ajustées pour Fill seront ajustées pour remplir l&apos;espace disponible dans leur conteneur. Les boîtes avec ajustement Off ne seront généralement pas ajustées. La plupart des boîtes sont réglées par défaut à Neutral, ce qui signifie que leur comportement sera déterminé en fonction de leurs boîtes enfant.

**JMP Version ajoutée :** 16

#### Ajuster avec la fenêtre

```jsl

//This message applies to all display box objects
New Window( "Example",
	H List Box(
		tv = Text Box( "V+V", <<rotate text( left ) ),
		V List Box(
			Text Box( "resize the containing window" ),
			th = Text Box( "H+H" ),
			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )
		)
	)
);
tv << Vertical Alignment( "Center" );
th << Horizontal Alignment( "Center" );
th << Set Stretch( "Window", "Off" );
ts << Set Min Size( 5, 20 );
ts << Set Max Size( 100000, 100 );
ts << Set Stretch( "Window", "Window" );

```

#### Ajuster pour remplir

```jsl

//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box(
			Text Edit Box( "String1" ),
			Text Edit Box( "String2" )
		),
		Spacer Box(
			Size( 20, 20 ),
			Color( "Light Red" ),
			<<Set Stretch( "Fill", "Off" )
		)
	)
);

```

### Set Summary Behavior

**Syntaxe :** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Description :** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Width

**Syntaxe :** obj &lt;&lt; Set Width( width )

**Description :** Définit la largeur de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**Syntaxe :** obj &lt;&lt; Set Window Icon( icon name )

**Description :** Définit l’icône de la fenêtre.

```jsl

//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntaxe :** obj &lt;&lt; Set Window Size( x,y )

**Description :** Définit la taille de la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntaxe :** obj &lt;&lt; Set Window Title( "string" )

**Description :** Modifie le titre de la fenêtre.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Syntaxe :** obj &lt;&lt; Show Properties

**Description :** Affiche un éditeur de propriétés des boîtes d&apos;affichage

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**Syntaxe :** obj &lt;&lt; Show Tree Structure

**Description :** Affiche une structure hiérarchique de la boîte d’affichage et de ses nœuds.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**Syntaxe :** obj &lt;&lt; Show Window( state=0|1 )

**Description :** Affiche ou masque la fenêtre. Ceci s’avère utile pour les fenêtres provisoirement masquées. Actif par défaut.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**Syntaxe :** obj &lt;&lt; Sib

**Description :** Renvoie le frère de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**Syntaxe :** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**Description :** Ajoute une boîte d’affichage immédiatement après celle-ci.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r()[framebox( 1 )];
fb << sib append(
	Text Box(
		"============ after ==============",
		Rotate Text( "Right" )
	),
	"Horizontal"
);
fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Syntaxe :** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**Description :** Ajoute une boîte d’affichage immédiatement avant celle-ci.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << sib prepend(
	Text Box(
		"    ============ before ==============",
		Rotate Text( "Right" )
	),
	"Horizontal"
);
fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**Syntaxe :** obj &lt;&lt; Size Window( x,y )

**Description :** Définit la taille de la fenêtre.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**Syntaxe :** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**Description :** Le texte sera écrit dans une couleur de texte si celle-ci a été préalablement définie. Dans le cas contraire, la boîte héritera la couleur de la boîte conteneur.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Top Parent

**Syntaxe :** obj &lt;&lt; Top Parent

**Description :** Renvoie le parent racine de la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**Syntaxe :** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Update Window

**Syntaxe :** obj &lt;&lt; Update Window

**Description :** Mettre à jour la fenêtre contenant la boîte d&apos;affichage s&apos;il y a des régions invalidées. Le message <<Inval crée les régions invalidées.

```jsl

//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "UpdateWindow example",
	Button Box( "red",
		color = "red";
        // try commenting out each of the 4 lines that follow, run the script,
		// click the buttons, and resize the windows (for example) to force a
		// redraw.  All 4 lines are important, though the last two may be
		// slightly different on Windows and Mac OSs.
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the oval window to update immediately */
		g2 << updateWindow; /* tell the rect window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5,
			0 /* delay without wait(.5) */
		);
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		g2 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	)
);
New Window( "oval",
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);
New Window( "rect",
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Vertical Alignment

**Syntaxe :** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Description :** L&apos;alignement vertical gère le positionnement de la boîte dans un conteneur lorsque la boîte ne remplit pas tout l&apos;espace..

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Syntaxe :** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Description :** La visibilité détermine si une boîte est affichée et si elle occupe un espace. La valeur par défaut de la visibilité "Visible" indique que l&apos;objet sera affiché. Une boîte "Hidden" n&apos;est pas affichée mais elle occupe encore un espace, alors qu&apos;une boîte "Collapsed" n&apos;occupe pas d&apos;espace dans la mise en page.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Window Class Name

**Syntaxe :** obj &lt;&lt; Window Class Name

**Description :** Renvoie le nom de la classe de fenêtre associée à la boîte d’affichage.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**Syntaxe :** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Description :** Applique une expression Xpath à la représentation XML de l’arbre d’affichage et renvoie les résultats. Par défaut, les chaînes sont renvoyées dans la langue locale et le XML contient les valeurs des données dans des boîtes. Utilisez l&apos;option English pour renvoyer des chaînes anglaises, le cas échéant. Utilisez l&apos;option NoData pour omettre les valeurs des données dans les boîtes, ce qui peut être utile pour optimiser les performances des requêtes basées uniquement sur des attributs de boîte.

#### Attributes

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) <<
Close( 0 );

```

#### Box type

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

#### Child box

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath(
	"//OutlineBox[text()='Summary of Fit']/TableBox"
)) << Make Into Data Table;

```

#### Data

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" ))
 << Text Color( "Green" );

```

#### Display Seg

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

#### Text

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )
) << Close;

```

### Zoom Window

**Syntaxe :** obj &lt;&lt; Zoom Window

**Description :** Redimensionne la fenêtre de sorte qu&apos;elle soit suffisamment grande pour afficher tout son contenu.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

