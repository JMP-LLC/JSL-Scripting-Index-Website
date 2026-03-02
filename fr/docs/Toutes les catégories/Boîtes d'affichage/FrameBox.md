# FrameBox



## Messages d'éléments

### Add Graphics Script

**Syntaxe :** obj &lt;&lt; Add Graphics Script( &lt;"Back" | "Front" | position&gt;, &lt;Description("name")&gt;, &lt;"Selected Layer"&gt;, &lt;Scale IDs(XID, YID)&gt;, script )

**Description :** Entrez un script qui dessinera dans ce cadre. Les éléments sélectionnés se trouvent toujours au-dessus des éléments non sélectionnés. Si vous spécifiez une couche sélectionnée, ce script est appelé lors du deuxième passage de dessin, lorsque les éléments sélectionnés sont dessinés.

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;framebox = rbiv[frame box( 1 )];framebox << Add Graphics Script(	Transparency( 0.5 );	Fill Color( {1.0, 0.5, 0.0} );	Polygon( [60, 72, 57], [75, 120, 120] ););

```

**Exemple 2**

```jsl

gbox = Graph Box(	Frame Size( 300, 300 ),	X Axis( Scale ID( 1 ), Side( 1 ), Min( 1 ), Max( 100 ), Inc( 5 ) ),	X Axis( Scale ID( 2 ), Side( 2 ), Min( 4 ), Max( 50 ), Inc( 3 ) ),	Y Axis( Scale ID( 3 ), Min( -100 ), Max( 200 ) ),	Y Axis( Scale ID( 4 ), Side( 2 ), Min( 1 ), Max( 10 ), Inc( 1 ) ), );fbox = gbox[frame box( 1 )];fbox << Add Graphics Script(	Scale IDs( 1, 4 ), //use scale ID's 1 and 4 for this graphics script	Pen Color( "Green" );	Line( [20 50 80], [4 3 6] ););New Window( "Example", gbox );

```

**Exemple 3**

```jsl

table = New Table( "test table",	Add Rows( 150000 ),	<<New Column( "X", "Numeric", <<Set Each Value( Random Normal() ) ),	<<New Column( "Y", "Numeric", <<Set Each Value( Random Normal() ) ));b = Bivariate( X( :x ), Y( :y ) );table << select rows( 1 :: 10000 );Report( b )[Frame Box( 1 )] << Add Graphics Script(	Description( "Red Line Above Selected" ),	"selected layer",	Pen Color( "Red" );	Pen Size( 5 );	Line( [-5, 5], [-5, 5] ););Report( b )[Frame Box( 1 )] << Add Graphics Script(	Description( "Green Line Below Selected Above Unselected" ),	Pen Color( "Green" );	Pen Size( 3 );	Line( [5, -5], [-5, 5] ););

```

### Add Image

**Syntaxe :** obj &lt;&lt; Add Image( image | open("image filename"), &lt;bounds( left(value), top(value), bottom(value), right(value) ) | move(centerX, centerY)&gt; )

**Description :** 

Ajoute une image au cadre.



Vous pouvez faire référence à une image existante (déjà créée via une commande new image() ou open()) ou spécifier directement un fichier image avec le paramètre de la commande open().  Vous pouvez positionner l&apos;image dans le cadre à l&apos;aide de la commande move(), qui permet de spécifier l’emplacement du centre de l’image exprimé dans les unités des axes.  Vous pouvez également redimensionner l’image et la positionner dans le cadre en spécifiant les limites via la commande bounds().

```jsl

img = Open( "$SAMPLE_IMAGES/windmap.png", "png" );w = New Window( "View Image",	Graph Box(		FrameSize( 500, 500 ),		X Scale( 0, 100 ),		Y Scale( 0, 100 ),		<<Add Image(			image( img ),			bounds( top( 90 ), Left( 10 ), bottom( 10 ), Right( 90 ) )		)	));

```

### Append Seg

**Syntaxe :** obj &lt;&lt; Append Seg( display seg )

**Description :** Ajoute un seg affiché au cadre

```jsl

x = [20, 40, 60, 80];New Window( "Example",	Graph Box( Frame Size( 300, 120 ), Append Seg( Marker Seg( x, x ), Line Seg( x, x ) ) ),	Graph Box( Frame Size( 300, 120 ) ));gb2 = Current Report()[FrameBox( 2 )];gb2 << append seg( Current Report()[FrameBox( 1 )] << find seg( Marker Seg( 1 ) ) );

```

### Background Map

**Syntaxe :** obj &lt;&lt; Background Map( &lt;Images("None" | "Simple Earth" | "Detailed Earth" | "Nasa Server" | ("Web Map Service", url, layer) , &lt;Transparency(0-1)&gt; )&gt; | &lt;Boundaries("None" | Shape File)&gt; )

**Description :** 

Ajoute un fond de carte au cadre. Les images sont des cartes rastérisées et prennent en charge la transparence.



Les délimitations sont des cartes vecteur, définies par un fichier de forme, et peuvent être créées par l’utilisateur. Vous pouvez spécifier une image, une délimitation ou les deux.

```jsl

dt = Open( "$SAMPLE_DATA/Hurricanes.jmp" );plot = Bubble Plot(	X( :Longitude ),	Y( :Latitude ),	Sizes( :"Wind (Knots)"n ),	Time( :Date ),	Coloring( :Landfall in USA ),	ID( :Name and ID ),	Speed( 1 ),	Time Index( 2117.70195 ),	Trail Bubbles( 1 ),	All Labels( 0 ),	No Labels( 0 ),	Title Position( -88.679, 59.73 ));rplot = plot << report;framebox = rplot[Frame Box( 1 )];framebox << Background Map(	Images( "Simple Earth", Transparency( 0.7 ) ),	Boundaries( "World" ));

```

### Bottom

**Syntaxe :** obj &lt;&lt; Bottom( state=0|1 )

**Description :** Affiche ou masque une bordure au bas du cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Bottom( 0 );

```

### Child Seg

**Syntaxe :** obj &lt;&lt; Child Seg

**Description :** Renvoie le seg enfant affiché du cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;rbiv[Frame Box( 1 )] << Child Seg();

```

### Copy Customizations

**Syntaxe :** obj &lt;&lt; Copy Customizations

**Description :** Copie un script qui contient les personnalisations du graphique.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv1 = biv << report;rbiv2 = rbiv1 << Clone Box;rbiv1 << append( rbiv2 );framebox1 = rbiv1[Frame Box( 1 )];framebox2 = rbiv2[Frame Box( 1 )];framebox1 << Marker Drawing Mode( outlined );framebox1 << Copy Customizations;framebox2 << Paste Customizations;

```

### Copy Frame Contents

**Syntaxe :** obj &lt;&lt; Copy Frame Contents

**Description :** Crée un texte de journal contenant les paramètres de ce cadre, puis le copie dans le presse-papiers.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv1 = biv << report;rbiv2 = rbiv1 << Clone Box;rbiv1 << append( rbiv2 );framebox1 = rbiv1[Frame Box( 1 )];framebox2 = rbiv2[Frame Box( 1 )];biv << Fit Line;framebox1 << Copy Frame Contents;framebox2 << Paste Frame Contents;

```

### Copy Frame Settings

**Syntaxe :** obj &lt;&lt; Copy Frame Settings

**Description :** Crée un script contenant les paramètres de ce cadre, puis le copie dans le presse-papiers.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv1 = biv << report;rbiv2 = rbiv1 << Clone Box;rbiv1 << append( rbiv2 );framebox1 = rbiv1[Frame Box( 1 )];framebox2 = rbiv2[Frame Box( 1 )];framebox1 << Background Color( "Green" );framebox1 << Copy Frame Settings;framebox2 << Paste Frame Settings;

```

### Copy Polygons

**Syntaxe :** obj &lt;&lt; Copy Polygons

**Description :** Enregistre dans le presse-papier une copie des polygones situés sur le cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];pa = framebox << Add Polygon Annotation(	Points( {144, 53}, {182, 30}, {213, 80}, {181, 95} ));pa << Closed( 1 );framebox << Copy Polygons;

```

### Customize

**Syntaxe :** obj &lt;&lt; Customize

**Description :** Modifie les propriétés du contenu du graphique.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Customize;

```

### Dispatch Segs

**Syntaxe :** obj &lt;&lt; Dispatch Segs( command )

**Description :** Envoie la commande à tous les éléments visuels (segs) de la boîte d&apos;affichage.

**JMP Version ajoutée :** 15

### DispatchSeg

**Syntaxe :** obj &lt;&lt; DispatchSeg( command )

**Description :** Envoie la commande à la boîte d&apos;affichage.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Distribution(	Continuous Distribution( Column( :weight ), Fit Distribution( Normal ) ),	Nominal Distribution( Column( :age ) ),	SendToReport(		Dispatch( {"weight"}, "Distrib Histogram", FrameBox,			{DispatchSeg(				Hist Seg( 1 ),				{Line Style( "Dotted" ), Fill Color( {0, 128, 0} ), Histogram Color( -32768 )				}			), DispatchSeg( Line Seg( 1 ), {Line Color( {0, 0, 255} ), Line Width( 5 )} )}		)	));

```

### Edit Graphics Script

**Syntaxe :** obj &lt;&lt; Edit Graphics Script

**Description :** Modifie les scripts déjà installés dans ce cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;framebox = rbiv[frame box( 1 )];framebox << Add Graphics Script(	Transparency( 0.5 );	Fill Color( {1.0, 0.5, 0.0} );	Polygon( [60, 72, 57], [75, 120, 120] ););framebox << Edit Graphics Script;

```

### Fill Selection Mode

**Syntaxe :** obj &lt;&lt; Fill Selection Mode( "Mode préféré"|"Configuré sélectionné"|"Plus sombre sélectionné"|"Cercler les points sélectionnés"|"Même couleur pour les points sélectionnés"|"Atténuer les points non sélectionnés" )

**Description :** Définit le style de sélection pour les zones à remplir.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = Distribution( Continuous Distribution( Column( :height ) ), Histograms Only );rdist = dist << report;dt << Select Where( dt:age == 12 );framebox = rdist[Frame Box( 1 )];framebox << Fill Selection Mode( "Selected Darker" );

```

### Find Seg

**Syntaxe :** obj &lt;&lt; Find Seg( display seg )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;ms = rbiv[Frame Box( 1 )] << Find Seg( Marker Seg( 1 ) );ms << delete;

```

### Find Segs

**Syntaxe :** obj &lt;&lt; Find Segs

**JMP Version ajoutée :** 15

### Frame Size

**Syntaxe :** obj &lt;&lt; Frame Size

**Description :** Modifie la taille du cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Frame Size( 300, 300 );

```

### Get Background Fill

**Syntaxe :** obj &lt;&lt; Get Background Fill

**Description :** Renvoie l’état (0|1) de la couleur de remplissage du fond du graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( weight ), x( height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];//Set background colorframebox << Background Color( "red" );//Wait to see the color changeWait( 1 );//Turn off background fill colorframebox << Set Background Fill( 0 );val1 = framebox << Get Background Fill;

```

### Get Fill Selection Mode

**Syntaxe :** obj &lt;&lt; Get Fill Selection Mode

**Description :** Renvoie le style de sélection pour les zones à remplir.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = Distribution( Continuous Distribution( Column( :height ) ), Histograms Only );rdist = dist << report;dt << Select Where( dt:age == 12 );framebox = rdist[Frame Box( 1 )];framebox << Fill Selection Mode( "Selected Darker" );framebox << Get Fill Selection Mode;

```

### Get Image

**Syntaxe :** image = obj &lt;&lt; Get Image

**Description :** Renvoie une référence à l’image de fond.

```jsl

Open( "$SAMPLE_DATA/Animals.jmp" );op = Overlay Plot( X( :subject ), Y( :miles ), Separate Axes( 1 ) );opr = op << report;fb = opr[Frame Box( 1 )];fb << Add Image(	Open( Convert File Path( "$SAMPLE_IMAGES/black rhino footprint.jpg" ) ),	Transparency( 0.9 ),	Rotate( 90 ),	Bounds(		Left( 0.135416666666667 ),		Right( 3.26041666666667 ),		Top( 11.8333333333333 ),		Bottom( -1 )	),	SetSize( {300, 210} ));fb << Marker Size( 8 );Print( fb << Get Image );

```

### Get Marker Selection Mode

**Syntaxe :** obj &lt;&lt; Get Marker Selection Mode

**Description :** Renvoie le style de sélection du marqueur.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Where( dt:age == 12 );framebox = rbiv[Frame Box( 1 )];framebox << Marker Selection Mode( "Selected Haloed" );framebox << Get Marker Selection Mode;

```

### Get Marker Size

**Syntaxe :** obj &lt;&lt; Get Marker Size

**Description :** Renvoie la taille du marqueur du graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Marker Size( 4 );Print( framebox << Get Marker Size() );

```

### Get Polygons

**Syntaxe :** obj &lt;&lt; Get Polygons

**Description :** Renvoie une liste des polygones situés sur le cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];pa = framebox << Add Polygon Annotation(	Points( {144, 53}, {182, 30}, {213, 80}, {181, 95} ));pa << Closed( 1 );Print( framebox << Get Polygons );

```

### Grid Line Order

**Syntaxe :** obj &lt;&lt; Grid Line Order( position )

**Description :** Dessiner le quadrillage devant ou derrière les autres objets du graphique.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );rbiv[axis box( 2 )] << Show Major Grid( 1 );framebox = rbiv[frame box( 1 )];framebox << Grid Line Order( 1 );

```

### Hover Label Editor

**Syntaxe :** obj &lt;&lt; Hover Label Editor

**Description :** Affiche la fenêtre de l&apos;éditeur d&apos;étiquette de survol.

**JMP Version ajoutée :** 15

### Left

**Syntaxe :** obj &lt;&lt; Left( state=0|1 )

**Description :** Affiche ou masque une bordure à gauche du cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Left( 0 );

```

### Line Width Scale

**Syntaxe :** obj &lt;&lt; Line Width Scale( 0|scale )

**Description :** Définit l’épaisseur de trait à la valeur saisie. La valeur 0 signifie que l’échelle des épaisseurs de trait est déterminée par l&apos;échelle des polices.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ), FitLine );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Line Width Scale( 2.0 );

```

### Make table of graphs like this

**Syntaxe :** obj &lt;&lt; Make table of graphs like this

**Description :** crée une table de données de graphiques

### Marker Drawing Mode

**Syntaxe :** obj &lt;&lt; Marker Drawing Mode( "Normal"|"Rapide"|"Cerclées" )

**Description :** Définit le style du marqueur.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Marker Drawing Mode( "outlined" );

```

### Marker Label Color Style

**Syntaxe :** obj &lt;&lt; Marker Label Color Style( "Mode préféré"|"Couleur des marqueurs"|"Couleur des marqueurs estompée"|"Couleur fixe" )

**Description :** Change la couleur des étiquettes de marqueur

### Marker Selection Mode

**Syntaxe :** obj &lt;&lt; Marker Selection Mode( "Mode préféré"|"Atténuer les points non sélectionnés"|"Agrandir les points sélectionnés"|"Auréoler les points sélectionnés"|"Cercler les points sélectionnés"|"Même couleur pour les points sélectionnés" )

**Description :** Définit le style de sélection du marqueur.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Where( dt:age == 12 );framebox = rbiv[Frame Box( 1 )];framebox << Marker Selection Mode( "Selected Haloed" );

```

### Marker Size

**Syntaxe :** obj &lt;&lt; Marker Size( 0=dot/1=small/2=medium/... )

**Description :** Définit la taille du marqueur.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Marker Size( 4 );

```

### Name Selection in Column

**Syntaxe :** obj &lt;&lt; Name Selection in Column

**Description :** Étiquette les lignes sélectionnées et enregistre la valeur (étiquette) dans une colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Rows( 1 );dt:(Column( 2 )) << Set Selected( 1 );framebox = rbiv[Frame Box( 1 )];framebox << Select Matching Cells;framebox << Name Selection in Column;

```

### Paste Background Image

**Syntaxe :** obj &lt;&lt; Paste Background Image

**Description :** Coller dans le presse-papier l’image d’arrière-plan enregistrée dans la mémoire.

```jsl

Open( "$SAMPLE_DATA/Animals.jmp" );op = Overlay Plot( X( :subject ), Y( :miles ), Separate Axes( 1 ) );opr1 = op << report;opr2 = opr1 << Clone Box;opr1 << append( opr2 );fb1 = opr1[Frame Box( 1 )];fb1 << Add Image(	Open( Convert File Path( "$SAMPLE_IMAGES/black rhino footprint.jpg" ) ),	Transparency( 0.9 ),	Rotate( 90 ),	Bounds(		Left( 0.135416666666667 ),		Right( 3.26041666666667 ),		Top( 11.8333333333333 ),		Bottom( -1 )	),	SetSize( {300, 210} ));fb1 << Copy Picture;fb2 = opr2[Frame Box( 1 )];fb2 << Paste Background Image;

```

### Paste Customizations

**Syntaxe :** obj &lt;&lt; Paste Customizations

**Description :** Colle un script qui contient des personnalisations de graphique.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv1 = biv << report;rbiv2 = rbiv1 << Clone Box;rbiv1 << append( rbiv2 );framebox1 = rbiv1[Frame Box( 1 )];framebox2 = rbiv2[Frame Box( 1 )];framebox1 << Marker Drawing Mode( outlined );framebox1 << Copy Customizations;framebox2 << Paste Customizations;

```

### Paste Frame Contents

**Syntaxe :** obj &lt;&lt; Paste Frame Contents

**Description :** Analyse et colle dans ce cadre le texte du journal contenu dans le presse-papiers.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv1 = biv << report;rbiv2 = rbiv1 << Clone Box;rbiv1 << append( rbiv2 );framebox1 = rbiv1[Frame Box( 1 )];framebox2 = rbiv2[Frame Box( 1 )];biv << Fit Line;framebox1 << Copy Frame Contents;framebox2 << Paste Frame Contents;

```

### Paste Frame Settings

**Syntaxe :** obj &lt;&lt; Paste Frame Settings

**Description :** Colle le contenu du presse-papiers dans ce cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv1 = biv << report;rbiv2 = rbiv1 << Clone Box;rbiv1 << append( rbiv2 );framebox1 = rbiv1[Frame Box( 1 )];framebox2 = rbiv2[Frame Box( 1 )];framebox1 << Background Color( "Green" );framebox1 << Copy Frame Settings;framebox2 << Paste Frame Settings;

```

### Paste Graphlet

**Syntaxe :** obj &lt;&lt; Paste Graphlet

**Description :** Ajoute une personnalisation Graphlet sur la base du contenu du presse-papiers.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Legend( 7 ) ) ));Set Clipboard(JSLQuote(Bivariate(                             Y( :height ),                             X( :weight ),                             Histogram Borders( 1 ),                             Fit Robust( {Line Color( {212, 73, 88} )} ),                             Fit Cauchy( {Line Color( {61, 174, 70} )} ),                             SendToReport(                                 Dispatch(                                     {},                                     "Bivar Plot",                                     FrameBox,                                     {Grid Line Order( 1 ), Reference Line Order( 2 )}                                 )                             )                         )));frame = (gb << report)[FrameBox( 1 )];frame << Paste Graphlet();gpin = frame << Add Pin Annotation(	Seg( BarSeg( 1 ) ),	Index( {0, 0} ),	Index Row( {0, 0} ),	UniqueID( 1513503376 ),	FoundPt( {107, 211} ),	Origin( {0.00867052023121384, 96.6870397553517} ),	Tag Line( 1 ));gpin << Launch Graphlet;

```

### Reference Line Order

**Syntaxe :** obj &lt;&lt; Reference Line Order( position )

**Description :** Dessine les droites de référence devant ou derrière les autres objets du graphique.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );rbiv[axis box( 2 )] << Show Major Grid( 1 );framebox = rbiv[frame box( 1 )];framebox << Reference Line Order( 1 );

```

### Remove Graphics Script

**Syntaxe :** obj &lt;&lt; Remove Graphics Script( position )

**Description :** Supprime le script des graphiques lié au cadre à la position position donnée.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;framebox = rbiv[frame box( 1 )];framebox << Add Graphics Script(	Transparency( 0.5 );	Fill Color( {1.0, 0.5, 0.0} );	Polygon( [60, 72, 57], [75, 120, 120] ););framebox << Add Graphics Script(	Transparency( 0.5 );	Fill Color( {0.0, 0.5, 1.0} );	Polygon( [60, 72, 57], [150, 120, 120] ););Wait( 2 );framebox << Remove Graphics Script( 2 );

```

### Reorder Segs

**Syntaxe :** obj &lt;&lt; Reorder Segs( List of integers representing the current segs in the new order. )

**Description :** Modifie l&apos;ordre des segs qui se trouvent dans un graphique.

**JMP Version ajoutée :** 16

```jsl

Open( "$sample_data\big class.jmp" );gb = Graph Builder(	Size( 534, 456 ),	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 6 ) ), Bar( X, Y, Legend( 7 ) ) ),	SendToReport(		Dispatch( {}, "weight", ScaleBox,			{Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}		)	));For( blink = 1, blink < 4, blink++,	Wait( .5 );	(gb << report)[FrameBox( 1 )] << reorder segs( {4, 3, 2, 1} ););

```

### Right

**Syntaxe :** obj &lt;&lt; Right( state=0|1 )

**Description :** Affiche ou masque une bordure à droite du cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Right( 0 );

```

### Right Y Axis

**Syntaxe :** obj &lt;&lt; Right Y Axis( &lt; Min( min ) &gt;, &lt; Max( max ) &gt;, &lt; Inc( n ) &gt;, ... )

**Description :** Applique un ou plusieurs changements de l’axe Y de droite en un seul message. Ouvre la fenêtre des paramètres de l’axe Y de droite en cas d’absence d’arguments.

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )	));gbr = gb << report;fb = gbr[Frame Box( 1 )];fb << Right Y Axis;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Variables(		X( :age, Size( 23 ) ),		Y( :height, Size( 37 ) ),		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )	),	Elements(		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )	));framebox = Report( gb )[framebox( 1 )];framebox << Right Y Axis(	Rotated Labels( "Angled" ),	Scale( "Log" ),	Add Ref Line( 125, dashed, "red" ));

```

### Row Colors

**Syntaxe :** obj &lt;&lt; Row Colors( couleur )

**Description :** Définit la couleur des lignes sélectionnées.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Where( dt:age == 12 );framebox = rbiv[Frame Box( 1 )];framebox << Row Colors( "Red" );

```

### Row Editor

**Syntaxe :** obj &lt;&lt; Row Editor

**Description :** Active la fenêtre Éditeur de lignes, en débutant sur le premier point sélectionné.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Row Editor;

```

### Row Exclude

**Syntaxe :** obj &lt;&lt; Row Exclude

**Description :** Exclut (ou inclut) les lignes correspondantes dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Where( dt:age == 12 );framebox = rbiv[Frame Box( 1 )];framebox << Row Exclude( 1 );

```

### Row Hide

**Syntaxe :** obj &lt;&lt; Row Hide

**Description :** Masque (ou affiche) les lignes correspondantes dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Where( dt:age == 12 );framebox = rbiv[Frame Box( 1 )];framebox << Row Hide( 1 );

```

### Row Hide and Exclude

**Syntaxe :** obj &lt;&lt; Row Hide and Exclude

**Description :** Masque et exclut (ou affiche ou annule l&apos;exclusion) les lignes correspondantes dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Where( dt:age == 12 );framebox = rbiv[Frame Box( 1 )];framebox << Row Hide and Exclude( 1 );

```

### Row Label

**Syntaxe :** obj &lt;&lt; Row Label

**Description :** Ajoute (ou élimine) les étiquettes sur les lignes correspondantes dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Where( dt:age == 12 );framebox = rbiv[Frame Box( 1 )];framebox << Row Label( 1 );

```

### Row Legend

**Syntaxe :** obj &lt;&lt; Row Legend( Color( 0|1), Marker( 0|1 ), &lt;Color theme( string )&gt;, &lt;Marker theme( string )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**Description :** Colorie les points en fonction des valeurs de la colonne sélectionnée et indique la correspondance couleur/valeur.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Row Legend( "age", color( 1 ), Marker( 1 ) );

```

### Row Markers

**Syntaxe :** obj &lt;&lt; Row Markers( marker )

**Description :** Définit le marqueur des lignes sélectionnées.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Where( dt:age == 12 );framebox = rbiv[Frame Box( 1 )];framebox << Row Markers( 3 );

```

### Scale with Font

**Syntaxe :** obj &lt;&lt; Scale with Font

**Description :** Ajuste l&apos;échelle des épaisseurs de trait à l&apos;échelle des polices. Équivaut à <<Échelle des épaisseurs de trait(0).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( weight ), x( height ), FitLine );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Scale with Font;

```

### Seg Count

**Syntaxe :** obj &lt;&lt; Seg Count( &lt;seg type&gt; )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = Bivariate( Y( :weight ), X( :height ), FitLine );rbiv = biv << report;rbiv[Frame Box( 1 )] << Seg Count( MarkerSeg );

```

### Select Matching Cells

**Syntaxe :** obj &lt;&lt; Select Matching Cells

**Description :** Sélectionne des points dont les étiquettes sont semblables aux lignes sélectionnées.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Rows( 1 );dt:(Column( 2 )) << Set Selected( 1 );framebox = rbiv[Frame Box( 1 )];framebox << Select Matching Cells;

```

### Select Similar

**Syntaxe :** obj &lt;&lt; Select Similar

**Description :** Sélectionne les lignes dont les données sont semblables à celle de la colonne sélectionnée.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;dt << Select Rows( 1 );dt:(Column( 3 )) << Set Selected( 1 );framebox = rbiv[Frame Box( 1 )];framebox << Select Similar;

```

### Set Background Fill

**Syntaxe :** obj &lt;&lt; Set Background Fill( state=0|1 )

**Description :** Active ou désactive le remplissage du fond du graphique avec la couleur de fond.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( weight ), x( height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];//Set background colorframebox << Background Color( "red" );//Wait to see the color changeWait( 1 );//Turn off background fill colorframebox << Set Background Fill( 0 );

```

### Set Graphlet

**Syntaxe :** obj &lt;&lt; Set Graphlet

**Description :** Définit la visualisation intégrée de l&apos;étiquette de survol pour ce graphique (graphlet).

**JMP Version ajoutée :** 15

#### Image externe

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );gb = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),	Elements( Points( X, Y, Legend( 2 ) ) ));frame = (gb << report)[FrameBox( 1 )];frame << Set Graphlet(	Picture(		local:img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/" ||		Match( local:_Species,			"versicolor", "2/27/Blue_Flag%2C_Ottawa.jpg/240px-Blue_Flag%2C_Ottawa.jpg",			"virginica", "f/f8/Iris_virginica_2.jpg/240px-Iris_virginica_2.jpg",			"setosa",				"5/56/Kosaciec_szczecinkowaty_Iris_setosa.jpg/180px-Kosaciec_szczecinkowaty_Iris_setosa.jpg"		);		Open( local:img_url );	),	Click( Web( "https://en.wikipedia.org/wiki/Iris_" || local:_Species ) ),	Title( "External Image" ),	Reapply( 1 ));gpin = frame << Add Pin Annotation(	Seg( Marker Seg( 1 ) ),	Index( 18 ),	Index Row( 18 ),	UniqueID( 1441114818 ),	FoundPt( {123, 293} ),	Origin( {1.70752129817444, 5.66359183673469} ),	Tag Line( 1 ));gpin << Launch Graphlet;

```

#### Préconfiguration

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Legend( 7 ) ) ));frame = (gb << report)[FrameBox( 1 )];frame << Set Graphlet(	Picture(		loader = Include( "$BUILTIN_SCRIPTS/hllib.jsl" );		hlp = loader:lazyLoad( "hllPresets" );		hlp:launchPie();	),	Title( "Pie Preset" ),	Reapply( 1 ));gpin = frame << Add Pin Annotation(	Seg( BarSeg( 1 ) ),	Index( {0, 0} ),	Index Row( {0, 0} ),	UniqueID( 1513503376 ),	FoundPt( {107, 211} ),	Origin( {0.00867052023121384, 96.6870397553517} ),	Tag Line( 1 ));gpin << Launch Graphlet;

```

### Set Gridlet

**Syntaxe :** obj &lt;&lt; Set Gridlet

**Description :** Définit la grille de contenu de l&apos;étiquette de survol pour ce graphique (gridlet).

**JMP Version ajoutée :** 15

#### Ajouter

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );gb = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),	Elements( Points( X, Y, Legend( 2 ) ) ));frame = (gb << report)[FrameBox( 1 )];frame << Set Gridlet(	Expunge( {{Matcher( "Species" )}} ),	Annex(		{{Matcher( "Species@Wikipedia" ), value( local:_Species ),		click( Web( "https://wikipedia.com/wiki/Iris_" || local:_Species ) )}}	));frame << Add Pin Annotation(	Seg( Marker Seg( 1 ) ),	Index( 133 ),	Index Row( 133 ),	UniqueID( 1441114933 ),	FoundPt( {384, 228} ),	Origin( {5.08093306288033, 6.30828571428571} ),	Tag Line( 1 ));

```

#### Changer le nom

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );gb = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),	Elements( Points( X, Y, Legend( 2 ) ) ));frame = (gb << report)[FrameBox( 1 )];frame << Set Gridlet( Rename( {{Matcher( "Row" ), value( "Observation" )}} ) );frame << Add Pin Annotation(	Seg( Marker Seg( 1 ) ),	Index( 133 ),	Index Row( 133 ),	UniqueID( 1441114933 ),	FoundPt( {384, 228} ),	Origin( {5.08093306288033, 6.30828571428571} ),	Tag Line( 1 ));

```

#### Reformater

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );gb = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),	Elements( Points( X, Y, Legend( 2 ) ) ));frame = (gb << report)[FrameBox( 1 )];frame << Set Gridlet(	Reformat(		{{Matcher( "Petal length" ), Format( "Scientific", 80 ), 80},		{Matcher( "Sepal length" ), Format( "Scientific", 80 ), 80}}	));frame << Add Pin Annotation(	Seg( Marker Seg( 1 ) ),	Index( 133 ),	Index Row( 133 ),	UniqueID( 1441114933 ),	FoundPt( {384, 228} ),	Origin( {5.08093306288033, 6.30828571428571} ),	Tag Line( 1 ));

```

#### Style

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );gb = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),	Elements( Points( X, Y, Legend( 2 ) ) ));frame = (gb << report)[FrameBox( 1 )];frame << Set Gridlet(	Style(		{{Matcher( "Species" ), Text Color( "Red" ), Background Color( "Light Yellow" ),		Justification( "Center" ), "Font"("Times New Roman", 14, "Italic")}}	));frame << Add Pin Annotation(	Seg( Marker Seg( 1 ) ),	Index( 133 ),	Index Row( 133 ),	UniqueID( 1441114933 ),	FoundPt( {384, 228} ),	Origin( {5.08093306288033, 6.30828571428571} ),	Tag Line( 1 ));

```

#### Supprimer

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );gb = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),	Elements( Points( X, Y, Legend( 2 ) ) ));frame = (gb << report)[FrameBox( 1 )];frame << Set Gridlet( Expunge( {{Matcher( "Row" )}} ) );frame << Add Pin Annotation(	Seg( Marker Seg( 1 ) ),	Index( 133 ),	Index Row( 133 ),	UniqueID( 1441114933 ),	FoundPt( {384, 228} ),	Origin( {5.08093306288033, 6.30828571428571} ),	Tag Line( 1 ));

```

### Set Textlet

**Syntaxe :** obj &lt;&lt; Set Textlet

**Description :** Définit le contenu Rich Text de l&apos;étiquette de survol pour ce graphique (textlet).

**JMP Version ajoutée :** 15

```jsl

//This example uses hardcoded content from Wikipedia// For a complete example that uses dynamic, data-driven content, please see// https://community.jmp.com/t5/JMP-Scripts/WikiReader-Augmenting-Hover-Labels-with-web-data-and-images/ta-p/237488dt = Open( "$SAMPLE_DATA/Iris.jmp" );gb = dt << Graph Builder(	Size( 531, 456 ),	Show Control Panel( 0 ),	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),	Elements( Points( X, Y, Legend( 2 ) ) ));frame = (gb << report)[FrameBox( 1 )];frame << Set Textlet(	Setup(		local:description =		"Iris virginica, with the common name Virginia iris, is a perennial species of flowering plant, native to eastern North America.";		local:text = Substr( local:description, 1, 140 ) || "...";	),	Markup(		"<background color='white'><i><font family='Arial' size='12'>{local:text}</font></i></background>"	),	Width( 320 ));gpin = frame << Add Pin Annotation(	Seg( Marker Seg( 1 ) ),	Index( 133 ),	Index Row( 133 ),	UniqueID( 1441114933 ),	FoundPt( {384, 228} ),	Origin( {5.08093306288033, 6.30828571428571} ),	Tag Line( 1 ));

```

### Size to Isometric

**Syntaxe :** obj &lt;&lt; Size to Isometric

**Description :** Redimensionne le cadre de sorte que le nombre d&apos;unités réelles par pixel soit le même dans les directions X et Y.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Size To Isometric;

```

### Ternary X Title

**Syntaxe :** obj &lt;&lt; Ternary X Title( text )

**Description :** Définit le titre de l&apos;axe X pour un cadre ternaire.

**JMP Version ajoutée :** 15

### Ternary Y Title

**Syntaxe :** obj &lt;&lt; Ternary Y Title( text )

**Description :** Définit le titre de l&apos;axe Y pour un cadre ternaire.

**JMP Version ajoutée :** 15

### Ternary Y1 Title

**Syntaxe :** obj &lt;&lt; Ternary Y1 Title( text )

**Description :** Définit le titre de l&apos;axe Y1 pour un cadre ternaire.

**JMP Version ajoutée :** 15

### Top

**Syntaxe :** obj &lt;&lt; Top( state=0|1 )

**Description :** Affiche ou masque une bordure au haut du cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Top( 0 );

```

### Transparency

**Syntaxe :** obj &lt;&lt; Transparency

**Description :** Définit la transparence du cadre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;framebox = rbiv[Frame Box( 1 )];framebox << Transparency( 0.5 );

```

### X Axis

**Syntaxe :** obj &lt;&lt; X Axis( &lt; Min( min ) &gt;, &lt; Max( max ) &gt;, &lt; Inc( n ) &gt;, ... )

**Description :** Applique un ou plusieurs changements de l’axe X en un seul message. Ouvre la fenêtre des paramètres de l’axe X en cas d’absence d’arguments.

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )	));gbr = gb << report;fb = gbr[Frame Box( 1 )];fb << X Axis;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Variables(		X( :age, Size( 23 ) ),		Y( :height, Size( 37 ) ),		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )	),	Elements(		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )	));framebox = Report( gb )[framebox( 1 )];framebox << X Axis(	Min( -2 ),	Max( 7 ),	Inc( 1 ),	Add Ref Line( 5, "Solid", "Blue" ),	Rotated Labels( "Vertical" ));

```

### Y Axis

**Syntaxe :** obj &lt;&lt; Y Axis( &lt; Min( min ) &gt;, &lt; Max( max ) &gt;, &lt; Inc( n ) &gt;, ... )

**Description :** Applique un ou plusieurs changements de l’axe Y en un seul message. Ouvre la fenêtre des paramètres de l’axe Y en cas d’absence d’arguments.

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )	));gbr = gb << report;fb = gbr[Frame Box( 1 )];fb << Y Axis;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Variables(		X( :age, Size( 23 ) ),		Y( :height, Size( 37 ) ),		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )	),	Elements(		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )	));framebox = Report( gb )[framebox( 1 )];framebox << Y Axis(	Add Ref Line( 61.25, "Solid", "Medium Dark Green" ),	Show Major Grid( 1 ),	Show Minor Grid( 1 ),	Format( "Fixed Dec", 5, 2 ),	Rotated Labels( "Perpendicular" ));

```

## Messages d'éléments partagés

### Add Line Annotation

**Syntaxe :** obj &lt;&lt; Add Line Annotation

**Description :** Ajoute une ligne au haut de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Syntaxe :** obj &lt;&lt; Add Pin Annotation

**Description :** Ajoute une annotation épinglée en haut de la boîte d’affichage. La plupart des attributs (comme Index Row, UniqueID et FoundPt) sont conçus pour une utilisation interne uniquement.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :weight ),	X( :height ),	SendToReport(		Dispatch( {}, "Bivar Plot", FrameBox,			Add Pin Annotation(				Seg( Marker Seg( 1 ) ),				Index( 17 ),				Index Row( 17 ),				UniqueID( -960001792 ),				FoundPt( {238, 219} ),				Origin( {64.9765625, 142} ),				Offset( {-174, -40} ),				Tag Line( 1 ),				Font( "Helvetica", 11, "Plain" )			)		)	));

```

### Add Polygon Annotation

**Syntaxe :** obj &lt;&lt; Add Polygon Annotation

**Description :** Ajoute un polygone au haut de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Polygon Annotation(	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),	Color( "Red" ),	Closed( 1 ));

```

### Add Simple Shape Annotation

**Syntaxe :** obj &lt;&lt; Add Simple Shape Annotation

**Description :** Ajoute une forme simple au haut de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Syntaxe :** obj &lt;&lt; Add Text Annotation

**Description :** Ajoute un texte au haut de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));

```

### Append

**Syntaxe :** obj &lt;&lt; Append( db2 )

**Description :** Ajoute db2 à l’arbre d’affichage après db.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Syntaxe :** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**Description :** Si la couleur de fond est définie, la boîte est remplie de cette couleur avant de dessiner son contenu. Si la couleur de fond n&apos;est pas définie, le fond et le contenu des boîtes contenantes sont visibles l&apos;un au travers de l&apos;autre.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Border

**Syntaxe :** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**Description :** Les bordures sont des lignes pleines dessinées tout autour d&apos;une boîte d&apos;affichage. Si vous spécifiez une seule valeur, celle-ci sera appliquée à toutes les bordures. Si vous spécifiez deux valeurs, elles seront appliquées aux bordures horizontales et verticales.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Border Color

**Syntaxe :** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**Description :** Couleur facultative pour remplacer la couleur par défaut des bordures de boîte.

**JMP Version ajoutée :** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Bring Window To Front

**Syntaxe :** obj &lt;&lt; Bring Window To Front

**Description :** Amène la fenêtre en premier plan.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Run Script( "Bivariate" );w << Bring Window To Front;

```

### Child

**Syntaxe :** obj &lt;&lt; Child

**Description :** Renvoie l’enfant de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();axisChild = axisParent << child();Print( axisChild << Class Name() );

```

### Class Name

**Syntaxe :** obj &lt;&lt; Class Name

**Description :** Renvoie le nom de la classe d’affichage associée à la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Class Name();

```

### Clone Box

**Syntaxe :** obj &lt;&lt; Clone Box

**Description :** Crée une nouvelle copie de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );clonedBox = rbiv << Clone Box();rbiv << append( clonedBox );

```

### Close Window

**Syntaxe :** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**Description :** Ferme la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Close Window;

```

### Copy Data

**Syntaxe :** obj &lt;&lt; Copy Data

**Description :** copie les données séparées par des tabulations d&apos;une matrice ou d&apos;un tableau dans le presse-papiers.

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );mat << CopyData;

```

### Copy Graph

**Syntaxe :** obj &lt;&lt; Copy Graph

**Description :** Copie une image du graphique et des axes dans le presse-papier.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;(rbiv[FrameBox( 1 )]) << Copy Graph();"paste into a paint program";

```

### Copy Picture

**Syntaxe :** obj &lt;&lt; Copy Picture

**Description :** Place une image de la boîte d’affichage dans le presse-papier.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Copy Picture();

```

### Delete Box

**Syntaxe :** obj &lt;&lt; Delete Box

**Description :** Supprime la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Delete Box();

```

### Deselect

**Syntaxe :** obj &lt;&lt; Deselect

**Description :** Désélectionne cet objet à utiliser par les commandes du menu Édition.

```jsl

//This message applies to all display box objectsselected = 0;New Window( "Example",	ex = Button Box( "Press Me",		selected = !selected;		refresh;	));refresh = Function( {},	If( selected,		ex << Select,		ex << Deselect	));

```

### Dispatch

**Syntaxe :** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**Description :** Envoie la commande command vers une partie spécifique d’un arbre d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Syntaxe :** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Find

**Syntaxe :** obj &lt;&lt; Find

**Description :** Renvoie une boîte d’affichage avec l’argument argument donné.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv << Find( axis box( 1 ) );axisbox << Delete();

```

### Get Annotation

**Syntaxe :** obj &lt;&lt; Get Annotation

**Description :** Renvoie la première annotation ancrée à la boîte d&apos;affichage. Il est possible d&apos;accéder aux autres annotations en exécutant Sib() sur le résultat.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));annotation = rbiv << Get Annotation;annotation << delete;

```

### Get Background Color

**Syntaxe :** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**Description :** Si la couleur de fond est définie, la boîte est remplie de cette couleur avant de dessiner son contenu. Si la couleur de fond n&apos;est pas définie, le fond et le contenu des boîtes contenantes sont visibles l&apos;un au travers de l&apos;autre.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Get Border

**Syntaxe :** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**Description :** Les bordures sont des lignes pleines dessinées tout autour d&apos;une boîte d&apos;affichage. Si vous spécifiez une seule valeur, celle-ci sera appliquée à toutes les bordures. Si vous spécifiez deux valeurs, elles seront appliquées aux bordures horizontales et verticales.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Get Border Color

**Syntaxe :** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**Description :** Couleur facultative pour remplacer la couleur par défaut des bordures de boîte.

**JMP Version ajoutée :** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Get Content Size

**Syntaxe :** obj &lt;&lt; Get Content Size

**Description :** Renvoie la taille du contenu dans la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Content Size();Show( c );

```

### Get Display Path

**Syntaxe :** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**Description :** Obtient une expression relativement robuste pour naviguer entre parent box et obj. Ce chemin n&apos;est pas garanti comme étant stable dans toutes les versions de JMP. Le receiver expr est intégré dans l&apos;expression de sortie s&apos;il est fourni. Sinon, l&apos;expression fournie pour parent box est utilisée à la place. Comme indiqué dans l&apos;exemple, ce message est principalement utile pour augmenter la robustesse d&apos;un chemin déjà disponible. Le mode XPath est défini par défaut.

#### Élémentaire

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robustShow( xpath expr );xpath expr << Select;

```

#### Mode indice

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robustShow( subscript expr );subscript expr << Select;

```

### Get Enabled

**Syntaxe :** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get HTML

**Syntaxe :** obj &lt;&lt; Get HTML( &lt;format&gt; )

**Description :** Renvoie une chaîne contenant le code source HTLM de la boîte d’affichage.

**Exemple 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get HTML );

```

**Exemple 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTMLWeb( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Syntaxe :** width = obj &lt;&lt; Get Height

**Description :** Renvoie la hauteur de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Height;

```

### Get Horizontal Alignment

**Syntaxe :** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Description :** L&apos;alignement horizontal gère le positionnement de la boîte dans un contenant lorsque la boîte ne remplit pas tout l&apos;espace.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Get Journal

**Syntaxe :** obj &lt;&lt; Get Journal

**Description :** Renvoie une chaîne contenant le code source du journal de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Print( rbiv << Get Journal );

```

### Get Margin

**Syntaxe :** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**Description :** La marge ajoute un espace entre la bordure de la boîte et les boîtes adjacentes. Utilisez des arguments nommés ou fournissez une liste de valeurs. Si une seule valeur est spécifiée, elle sera appliquée à tous les côtés. Si deux valeurs sont spécifiées, elles seront appliquées aux marges horizontale et verticale.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**Syntaxe :** width,height = obj &lt;&lt; Get Max Size

**Description :** Renvoie la taille maximale de la boîte d’affichage afin de permettre l’ajustement automatique de la boîte.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Max Size;

```

### Get Min Size

**Syntaxe :** width,height = obj &lt;&lt; Get Min Size

**Description :** Renvoie la taille minimale de la boîte d’affichage afin de permettre l’ajustement automatique de la boîte.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Min Size;

```

### Get Namespace

**Syntaxe :** obj &lt;&lt; Get Namespace

**Description :** Renvoie l&apos;espace de noms associé à cet objet d&apos;affichage.

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get On Close

**Syntaxe :** obj &lt;&lt; Get On Close

**Description :** Renvoie le script ou la fonction qui sera exécuté(e) à la fermeture de la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);Show( w << Get On Close );

```

### Get Padding

**Syntaxe :** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**Description :** Le remplissage ajoute un espace entre le contenu et la bordure de la boîte. Utilisez des arguments nommés ou fournissez une liste de valeurs. Si une seule valeur est spécifiée, elle sera appliquée à tous les côtés. Si deux valeurs sont spécifiées, elles seront appliquées aux remplissages horizontal et vertical.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Syntaxe :** obj &lt;&lt; Get Page Setup

**Description :** Obtenir les informations de mise en page du pdf

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Page Setup Test" ) );w << get page setup();

```

### Get Picture

**Syntaxe :** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Description :** Capture db comme objet image. L&apos;argument facultatif Scale restituera l&apos;image à une résolution mise à l&apos;échelle. La mise à l&apos;échelle requiert que la boîte d&apos;affichage soit ajustable. L&apos;argument Type détermine si le résultat sera une image vectorielle pouvant être mise à l&apos;échelle ou un bitmap. Par défaut, une image pouvant être mise a l&apos;échelle est renvoyée, ce qui convient à l&apos;enregistrement aux formats vectoriels comme PDF. L&apos;option View change le comportement de certaines boîtes. L&apos;option par défaut "Picture" affiche le rapport comme il le serait à l&apos;exportation au format image, avec les zones déroulées complètement affichées. Le mode d&apos;affichage "Screen" affiche le rapport comme vu à l&apos;écran, et "Print" affiche le rapport comme à l&apos;impression, sans aucune fonction de configuration de page. L&apos;option SubRect capturera une portion de l&apos;image résultante plutôt que l&apos;image entière. L&apos;option Appearance peut changer des couleurs de sortie "Default" aux couleurs "Current" comme vu à l&apos;écran. Les options View, SubRect et Appearance sont uniquement prises en charge pour Type "Bitmap".

#### Affichage et apparence

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example",	H List Box(		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )	));

```

#### Échelle

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

#### Par défaut

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;New Window( "Example", rbiv << Get Picture );

```

### Get Project

**Syntaxe :** project = obj &lt;&lt; Get Project()

**Description :** Renvoie le projet parent de la fenêtre, ou Empty() si elle ne se trouve pas dans un projet.

**JMP Version ajoutée :** 14

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Project();Show( c );

```

### Get Properties

**Syntaxe :** obj &lt;&lt; Get Properties

**Description :** Renvoie un tableau associatif qui contient les propriétés de la boîte d&apos;affichage et leurs valeurs.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Properties;

```

### Get Property

**Syntaxe :** obj &lt;&lt; Get Property( "property" )

**Description :** Renvoie le paramètre actuel pour la property nommée.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property( "Enabled" );

```

### Get Property List

**Syntaxe :** obj &lt;&lt; Get Property List

**Description :** Renvoie la liste des propriétés de la boîte d&apos;affichage.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property List;

```

### Get RTF

**Syntaxe :** obj &lt;&lt; Get RTF( &lt;format&gt; )

**Description :** Renvoie une chaîne contenant le code source RTF de la boîte d’affichage.

**Exemple 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get RTF );

```

**Exemple 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTFOpen( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Syntaxe :** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**Description :** Renvoie un vecteur contenant l&apos;état de ligne de toutes les lignes de la table de données spécifiée ou active. Les états de ligne peuvent être issus de la table ou du contexte du filtre de la zone.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Get Show Window

**Syntaxe :** obj &lt;&lt; Get Show Window

**Description :** Renvoie la visibilité de la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );Print( w << Get Show Window() );

```

### Get Size

**Syntaxe :** width,height = obj &lt;&lt; Get Size

**Description :** Renvoie la taille de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];Print( fb << Get Size );

```

### Get Stretch

**Syntaxe :** x,y = obj &lt;&lt; Get Stretch

**Description :** Renvoie les drapeaux d&apos;ajustement pour la boîte d&apos;affichage dans les directions horizontale et verticale.

**JMP Version ajoutée :** 16

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		spacer = Spacer Box(			Size( 20, 20 ),			Color( "Light Red" ),			<<Set Stretch( "Fill", "Off" )		)	));spacer << Get Stretch();

```

### Get Text

**Syntaxe :** obj &lt;&lt; Get Text

**Description :** Renvoie une chaîne contenant le texte de la boîte d’affichage.

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get Text );

```

### Get Text Color

**Syntaxe :** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**Description :** Le texte sera écrit dans une couleur de texte si celle-ci a été préalablement définie. Dans le cas contraire, la boîte héritera la couleur de la boîte conteneur.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Get UI Only

**Syntaxe :** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Get User Resizable

**Syntaxe :** obj &lt;&lt; User Resizable; obj &lt;&lt; Get User Resizable

**Description :** Si la zone peut être redimensionnée par l&apos;utilisateur, le curseur situé près du bord inférieur droit changera pour permettre un redimensionnement à l&apos;aide d&apos;un glisser-déposer.

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );New Window( "resize",	H Splitter Box(		Size( 600, 200 ),		tree = Tree Box( {root1, root2} ),		scroll = Scroll Box(			Size( 300, 200 ),			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )		)	));tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );Wait( 2 );tree << User Resizable( {0, 0} );scroll << User Resizable( {0, 0} );

```

### Get Vertical Alignment

**Syntaxe :** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Description :** L&apos;alignement vertical gère le positionnement de la boîte dans un conteneur lorsque la boîte ne remplit pas tout l&apos;espace..

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Syntaxe :** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Description :** La visibilité détermine si une boîte est affichée et si elle occupe un espace. La valeur par défaut de la visibilité "Visible" indique que l&apos;objet sera affiché. Une boîte "Hidden" n&apos;est pas affichée mais elle occupe encore un espace, alors qu&apos;une boîte "Collapsed" n&apos;occupe pas d&apos;espace dans la mise en page.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Width

**Syntaxe :** width = obj &lt;&lt; Get Width

**Description :** Renvoie la largeur de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Width;

```

### Get Window Icon

**Syntaxe :** obj &lt;&lt; Get Window Icon

**Description :** Renvoie l’icône de la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Icon;Show( t );

```

### Get Window Position

**Syntaxe :** obj &lt;&lt; Get Window Position

**Description :** Renvoie la position de la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );p = w << Get Window Position();Show( p );

```

### Get Window Size

**Syntaxe :** obj &lt;&lt; Get Window Size

**Description :** Renvoie la taille de la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );s = w << Get Window Size();Show( s );

```

### Get Window Title

**Syntaxe :** obj &lt;&lt; Get Window Title

**Description :** Renvoie le titre de la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Title;Show( t );

```

### Get Window View

**Syntaxe :** obj &lt;&lt; Get Window View

**Description :** Renvoie l&apos;affichage de fenêtre actuel. Les fenêtres peuvent être « Visibles », « Invisibles », ou « Privées ».

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Print( w << Get Window View() );

```

### Get XML

**Syntaxe :** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Description :** Récupère l&apos;arbre d&apos;affichage au format XML. Par défaut, les chaînes sont renvoyées dans la langue locale et le XML contient les valeurs des données dans des boîtes. Utilisez l&apos;option English pour renvoyer des chaînes anglaises, le cas échéant. Utilisez l&apos;option NoData pour omettre les valeurs des données dans les boîtes, qui peuvent être volumineuses pour certains arbres d&apos;affichage.

```jsl

//This message applies to all display box objectswin = New Window( "test", a = Text Box( "my test" ) );a << set text( win << get xml );

```

### GetOffset

**Syntaxe :** x,y = obj &lt;&lt; GetOffset

**Description :** Renvoie l&apos;offset de cette boîte d&apos;affichage en relation avec la boîte parent. Vous pouvez avoir besoin d&apos;utiliser le message <<parent dans une boucle pour cumuler plusieurs offsets.

```jsl

New Window( "example",	MouseBox(		Graph Box(			title( "title" ),			Pen Size( 3 );			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );		),		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"	,		<<settrack( // events from the mouse (movement, with button up or down)			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y				{fb, offset, t, off, size}, // local variables				// recalulate offset and size each time, the values can change				fb = this[framebox( 1 )]; // the framebox in the graph 				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox				t = fb; // a temporary box that starts at the frame 				While( t != this, // and walks up to the mousebox					off = t << getOffset; // ask each box for its offset to the immediate parent					offset += Matrix( off ); // convert list answer to matrix so + will work					t = t << parent; // crawl up to the mousebox, one box at a time				);				size = Matrix( fb << getSize ); // the frame knows its size				If( // over the frame box					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]					 + size[2]				,					fb << setbackgroundcolor( "red" ),					fb << setbackgroundcolor( "blue" )				);			)		)	));

```

### Horizontal Alignment

**Syntaxe :** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Description :** L&apos;alignement horizontal gère le positionnement de la boîte dans un contenant lorsque la boîte ne remplit pas tout l&apos;espace.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Inval

**Syntaxe :** obj &lt;&lt; Inval

**Description :** Invalider la boîte d&apos;affichage. La fenêtre sera actualisée lorsque le message <<Actualiser la fenêtre sera envoyé, ou lorsque le système d&apos;exploitation disposera de temps pour la mise à jour.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Inval example",	Button Box( "red",		color = "red";		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	),	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                       but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	),	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### Is Dirty

**Syntaxe :** obj &lt;&lt; Is Dirty

**Description :** Obtient le statut de modification du document. 1 signifie que le document a été modifié et invitera l&apos;utilisateur à l&apos;enregistrer ; 0 signifie que le document n&apos;est pas modifié.

**JMP Version ajoutée :** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntaxe :** obj &lt;&lt; Is Modal Dialog

**Description :** Renvoie vrai si la fenêtre est une boîte de dialogue modale. Utile uniquement si appelé à partir d&apos;un rappel de gestionnaire de fenêtre.

```jsl

With Window Handler(	New Window( "Modal Window", <<Modal ),	Function( {win},		Print( win << Is Modal Dialog() );		win << close window();	));

```

### Journal

**Syntaxe :** obj &lt;&lt; Journal

**Description :** Crée un journal à partir de la boîte de dialogue.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << journal;

```

### Journal Window

**Syntaxe :** obj &lt;&lt; Journal Window

**Description :** Ouvre une fenêtre de journal de la fenêtre.

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Journal Window;

```

### Launch

**Syntaxe :** obj &lt;&lt; Launch

**Description :** Calcule l’argument donné argument dans le contexte de la boîte d’affichage.

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );New Window( "example",	ob1 = Outline Box( "treemap launcher" ),	ob2 = Outline Box( "bivariate partial" ),	ob3 = Outline Box( "bivariate launched" ));ob1 << launch( Treemap() );ob2 << launch( Bivariate( Y( :height ) ) );ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**Syntaxe :** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**Description :** Crée un gestionnaire d&apos;état de ligne pour la table de données spécifiée ou pour la table de données active. La fonction est appelée lorsque les états de ligne changent dans le contexte du filtre de la zone. L&apos;argument de la fonction contient les numéros de lignes modifiés, ou -1 si le filtre de l&apos;état de ligne a été modifié.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Margin

**Syntaxe :** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**Description :** La marge ajoute un espace entre la bordure de la boîte et les boîtes adjacentes. Utilisez des arguments nommés ou fournissez une liste de valeurs. Si une seule valeur est spécifiée, elle sera appliquée à tous les côtés. Si deux valeurs sont spécifiées, elles seront appliquées aux marges horizontale et verticale.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**Syntaxe :** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**Description :** Agrandir la fenêtre. L&apos;argument par défaut est 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Maximize Window( 1 );Wait( 1 );w << Maximize Window( 0 );

```

### Minimize Window

**Syntaxe :** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**Description :** Réduire la fenêtre. L&apos;argument par défaut est 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Minimize Window( 1 );Wait( 1 );w << Minimize Window( 0 );

```

### Move Window

**Syntaxe :** obj &lt;&lt; Move Window( x,y )

**Description :** Déplace la fenêtre à la position spécifiée.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Move Window( 500, 500 );

```

### Next

**Syntaxe :** obj &lt;&lt; Next

**Description :** Renvoie la boîte d’affichage immédiatement après celle-ci.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;next = rbiv << Next();Print( next << Class Name() );

```

### On Close

**Syntaxe :** obj &lt;&lt; On Close( script )

**Description :** Définit l&apos;exécution d&apos;un script ou d&apos;une fonction à la fermeture d&apos;une fenêtre. Ce script renvoie 1 pour autoriser la fermeture, ou 0 pour empêcher la fermeture de la fenêtre.

#### Fermer la fonction

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	Function( {this},         // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled		New Window( "Are you sure?",			<<modal,			V List Box(				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )			)		)["button"] == 1	));

```

#### Fermer le script

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);

```

### Optimize Display

**Syntaxe :** obj &lt;&lt; Optimize Display

**Description :** Définit les largeurs de colonne et la fenêtre d&apos;une table de données pour une taille optimale.

**JMP Version ajoutée :** 14

```jsl

//This message applies to Data Table objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Optimize Display;

```

### Pad Window

**Syntaxe :** obj &lt;&lt; Pad Window( bool )

**Description :** Ajoute ou supprime les marges de la fenêtre.

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );r = d << report;r << Pad Window( 0 );

```

### Padding

**Syntaxe :** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**Description :** Le remplissage ajoute un espace entre le contenu et la bordure de la boîte. Utilisez des arguments nommés ou fournissez une liste de valeurs. Si une seule valeur est spécifiée, elle sera appliquée à tous les côtés. Si deux valeurs sont spécifiées, elles seront appliquées aux remplissages horizontal et vertical.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Syntaxe :** obj &lt;&lt; Page Break

**Description :** Insère un saut de page avant la boîte d’affichage.

```jsl

//This message applies to all display box objectsNew Window( "Example",	ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Page Break;

```

### Parent

**Syntaxe :** obj &lt;&lt; Parent

**Description :** Renvoie le parent de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();Print( axisParent << Class Name() );

```

### Prepend

**Syntaxe :** obj &lt;&lt; Prepend( db2 )

**Description :** Ajoute db2 à l’arbre d’affichage avant db.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Syntaxe :** obj &lt;&lt; Prev Sib

**Description :** Renvoie le frère précédent de la boîte d’affichage.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisSibling = axisbox << Prev Sib();Print( axisSibling << Class Name() );

```

### Print Window

**Syntaxe :** obj &lt;&lt; Print Window

**Description :** Imprime la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Print Window;

```

### Reshow

**Syntaxe :** obj &lt;&lt; Reshow

**Description :** Invalider la boîte d&apos;affichage et mettre à jour la fenêtre avec le nouveau contenu. Consulter les messages <<Inval et <<Actualiser la fenêtre si la synchronisation de la mise à jour requiert un contrôle plus poussé.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Reshow example",	Button Box( "red",		color = "red";		g << reshow/* tell the graph that something changed */;	),	Button Box( "blue",		color = "blue";		g << reshow/* tell the graph that something changed */;	),	g = Graph Box(/* the graph does NOT watch for the color variable to change                     but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));

```

### Save Capture

**Syntaxe :** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**Description :** Enregistre la capture d&apos;écran de la boîte d&apos;affichage au path spécifié. Si un path n&apos;est pas spécifié, la fenêtre Enregistrer sous s&apos;affiche.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Syntaxe :** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**Description :** Enregistre le code source HTML et le dossier du graphique au format format spécifié.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Syntaxe :** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**Description :** Enregistre l&apos;HTML interactif avec les données dans un fichier. L&apos;argument Boolean indique que le rapport est statique.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Syntaxe :** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**Description :** Enregistre le code source du journal de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Syntaxe :** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**Description :** Enregistre la boîte d’affichage en tant que document Microsoft Word. (Windows uniquement)

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Syntaxe :** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**Description :** Enregistre un PDF de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Syntaxe :** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Description :** Enregistre une image de la boîte d&apos;affichage. Les formats pris en charge sont EMF (Windows), PICT (Macintosh), JPEG ou JPG, GIF et PNG. L&apos;argument facultatif Scale restituera l&apos;image à une résolution mise à l&apos;échelle. La mise à l&apos;échelle requiert que la boîte d&apos;affichage soit ajustable. L&apos;argument Type détermine si le résultat sera une image vectorielle pouvant être mise à l&apos;échelle ou un bitmap. Par défaut, une image pouvant être mise a l&apos;échelle est renvoyée, ce qui convient à l&apos;enregistrement aux formats vectoriels comme PDF. L&apos;option View change le comportement de certaines boîtes. L&apos;option par défaut "Picture" affiche le rapport comme il le serait à l&apos;exportation au format image, avec les zones déroulées complètement affichées. Le mode d&apos;affichage "Screen" affiche le rapport comme vu à l&apos;écran, et "Print" l&apos;affiche comme à l&apos;impression, sans aucune fonction de configuration de page. L&apos;option SubRect capturera une portion de l&apos;image résultante plutôt que l&apos;image entière. L&apos;option Appearance peut changer des couleurs de sortie "Default" aux couleurs "Current" comme vu à l&apos;écran. Les options View, SubRect et Appearance sont uniquement prises en charge pour Type "Bitmap".

#### Affichage et apparence

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv << Save Picture(	"$TEMP/jmp_example_screen.png",	"png",	View( "Screen" ),	Appearance( "Current" ));rbiv << Save Picture(	"$TEMP/jmp_example_print.png",	"png",	View( "Print" ),	Appearance( "Default" ));New Window( "Example",	H List Box(		New Image( "$TEMP/jmp_example_screen.png" ),		New Image( "$TEMP/jmp_example_print.png" )	));

```

#### Échelle

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

#### Par défaut

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

### Save Presentation

**Syntaxe :** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**Description :** Enregistre les tables de la boîte d&apos;affichage et les diapositives de graphiques dans une présentation qui peut être vue avec Microsoft PowerPoint ou un autre logiciel de présentation.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Syntaxe :** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**Description :** Enregistre le code source RTF avec le graphique au format format spécifié.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Syntaxe :** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**Description :** Enregistre un fichier contenant le texte de la boîte d’affichage.

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntaxe :** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**Description :** Enregistre la fenêtre du rapport actuel dans un fichier de rapport JMP (.jrp).

**JMP Version ajoutée :** 16

```jsl

//This message can be sent to any display box object but will be applied to the report windowOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Syntaxe :** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**Description :** Ajustez la barre de défilement de la fenêtre de manière à afficher l&apos;objet DisplayBox donnée, ou à faire défiler un nombre relatif de pixels, ou à afficher un emplacement de pixel absolu. Pour remplacer un nombre de pixels, vous pouvez utiliser les mots-clés "Start" ou "End".

#### Absolute

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Absolute( "End", "End" ) );Wait( 1 );fm << scroll window( Absolute( 0, 300 ) );Wait( 1 );

```

#### Box

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowFor( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second	fm << scroll window( Report( fm )[framebox( 2 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 3 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 1 )] );	Wait( .5 ););

```

#### Relative

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Relative( 300 ) );Wait( 1 );fm << scroll window( Relative( -50 ) );Wait( 1 );fm << scroll window( Relative( "Start" ) );Wait( 1 );

```

### Select

**Syntaxe :** obj &lt;&lt; Select

**Description :** Sélectionne cet objet à utiliser par les commandes du menu Édition.

```jsl

//This message applies to all display box objectsNew Window( "Example", ex = Button Box( "Press Me" ) );ex << Select;

```

### Set Content Size

**Syntaxe :** obj &lt;&lt; Set Content Size( x,y )

**Description :** Définit la taille du contenu dans la fenêtre.

```jsl

//This message applies to all display box objectsw = New Window( "Test",	lb = List Box( {"a", "b", "c", "d"} ),	Button Box( "Enable 2nd item",		lb << enable item( 2, 1 );		Show( lb << item enabled( 2 ) );	),	Button Box( "Disable 2nd item",		lb << enable item( 2, 0 );		Show( lb << item enabled( 2 ) );	));Wait( 2 );w << Set Content Size( 400, 300 );

```

### Set Dirty

**Syntaxe :** obj &lt;&lt; Set Dirty

**Description :** Définit le statut de modification du document. 0 n&apos;invitera pas à enregistrer ; 1 y invitera.

**JMP Version ajoutée :** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Set Height

**Syntaxe :** obj &lt;&lt; Set Height( width )

**Description :** Définit la hauteur de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Height( 150 );

```

### Set Main Window

**Syntaxe :** obj &lt;&lt; Set Main Window

**Description :** Définit la fenêtre active en tant que fenêtre principale de JMP alors que la fenêtre principale précédente devient une fenêtre normale.

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Set Main Window;

```

### Set Max Size

**Syntaxe :** obj &lt;&lt; Set Max Size( width,height )

**Description :** Définit la taille maximale de cette boîte d’affichage afin de permettre l’ajustement automatique de la boîte.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Max Size( 500, 500 );fb << Get Max Size;

```

### Set Min Size

**Syntaxe :** obj &lt;&lt; Set Min Size( width,height )

**Description :** Définit la taille minimale de cette boîte d’affichage afin de permettre l’ajustement automatique de la boîte.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Min Size( 30, 30 );fb << Get Min Size;

```

### Set Page Setup

**Syntaxe :** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**Description :** Définit les informations de mise en page utilisées pour l&apos;impression ou l&apos;enregistrement en tant que PDF. Une table des matières peut éventuellement être générée à partir de boîtes de structure.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );w << Set page setup(	margins( 1, 1, 1, 1 ),	scale( 1 ),	portrait( 1 ),	paper size( "Letter" ),	Table of Contents( "always" ));w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Syntaxe :** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**Description :** Définit les pieds de page de gauche, du centre et de droite de la sortie imprimée

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Footer Test" ) );w << Set Print Footers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Print Headers

**Syntaxe :** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**Description :** Définit les en-têtes de gauche, du centre et de droite de la sortie imprimée

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Header Test" ) );w << Set Print Headers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Property

**Syntaxe :** obj &lt;&lt; Set Property( "property", value )

**Description :** Définit la valeur pour la property nommée pour la boîte d&apos;affichage.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntaxe :** obj &lt;&lt; Set Report Title( "string" )

**Description :** Modifie le titre du rapport.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Syntaxe :** obj &lt;&lt; Set Stretch( x,y )

**Description :** Définit le comportement d&apos;ajustement horizontal et vertical de la boîte. Les boîtes ajustées avec Window seront redimensionnées lorsque la dimension de la fenêtre ou du séparateur est modifiée. Les boîtes ajustées pour Fill seront ajustées pour remplir l&apos;espace disponible dans leur conteneur. Les boîtes avec ajustement Off ne seront généralement pas ajustées. La plupart des boîtes sont réglées par défaut à Neutral, ce qui signifie que leur comportement sera déterminé en fonction de leurs boîtes enfant.

**JMP Version ajoutée :** 16

#### Ajuster avec la fenêtre

```jsl

//This message applies to all display box objectsNew Window( "Example",	H List Box(		tv = Text Box( "V+V", <<rotate text( left ) ),		V List Box(			Text Box( "resize the containing window" ),			th = Text Box( "H+H" ),			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )		)	));tv << Vertical Alignment( "Center" );th << Horizontal Alignment( "Center" );th << Set Stretch( "Window", "Off" );ts << Set Min Size( 5, 20 );ts << Set Max Size( 100000, 100 );ts << Set Stretch( "Window", "Window" );

```

#### Ajuster pour remplir

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )	));

```

### Set Summary Behavior

**Syntaxe :** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Description :** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );d << Report View( "Summary" );r = d << Report;tb = r[Table Box( 1 )];tb << Set Summary Behavior( "Visible" );

```

### Set Width

**Syntaxe :** obj &lt;&lt; Set Width( width )

**Description :** Définit la largeur de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Width( 400 );

```

### Set Window Icon

**Syntaxe :** obj &lt;&lt; Set Window Icon( icon name )

**Description :** Définit l’icône de la fenêtre.

```jsl

//This message applies to all display box objectsw = New Window( "Example", ex = Button Box( "New Analysis" ) );w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntaxe :** obj &lt;&lt; Set Window Size( x,y )

**Description :** Définit la taille de la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntaxe :** obj &lt;&lt; Set Window Title( "string" )

**Description :** Modifie le titre de la fenêtre.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Syntaxe :** obj &lt;&lt; Show Properties

**Description :** Affiche un éditeur de propriétés des boîtes d&apos;affichage

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Properties();

```

### Show Tree Structure

**Syntaxe :** obj &lt;&lt; Show Tree Structure

**Description :** Affiche une structure hiérarchique de la boîte d’affichage et de ses nœuds.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Tree Structure();

```

### Show Window

**Syntaxe :** obj &lt;&lt; Show Window( state=0|1 )

**Description :** Affiche ou masque la fenêtre. Ceci s’avère utile pour les fenêtres provisoirement masquées. Actif par défaut.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );w << Show Window( 1 );

```

### Sib

**Syntaxe :** obj &lt;&lt; Sib

**Description :** Renvoie le frère de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisSibling = axisbox << sib();Print( axisSibling << Class Name() );

```

### Sib Append

**Syntaxe :** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**Description :** Ajoute une boîte d’affichage immédiatement après celle-ci.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r()[framebox( 1 )];fb << sib append(	Text Box( "============ after ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Syntaxe :** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**Description :** Ajoute une boîte d’affichage immédiatement avant celle-ci.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << sib prepend(	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**Syntaxe :** obj &lt;&lt; Size Window( x,y )

**Description :** Définit la taille de la fenêtre.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Size Window( 500, 500 );

```

### Text Color

**Syntaxe :** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**Description :** Le texte sera écrit dans une couleur de texte si celle-ci a été préalablement définie. Dans le cas contraire, la boîte héritera la couleur de la boîte conteneur.

**JMP Version ajoutée :** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Top Parent

**Syntaxe :** obj &lt;&lt; Top Parent

**Description :** Renvoie le parent racine de la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rootParent = rbiv << Top Parent();Print( rootParent << Class Name() );

```

### UI Only

**Syntaxe :** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Update Window

**Syntaxe :** obj &lt;&lt; Update Window

**Description :** Mettre à jour la fenêtre contenant la boîte d&apos;affichage s&apos;il y a des régions invalidées. Le message <<Inval crée les régions invalidées.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "UpdateWindow example",	Button Box( "red",		color = "red";        // try commenting out each of the 4 lines that follow, run the script,		// click the buttons, and resize the windows (for example) to force a		// redraw.  All 4 lines are important, though the last two may be		// slightly different on Windows and Mac OSs.		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the oval window to update immediately */		g2 << updateWindow; /* tell the rect window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		g2 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	));New Window( "oval",	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                      but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));New Window( "rect",	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### User Resizable

**Syntaxe :** obj &lt;&lt; User Resizable; obj &lt;&lt; Get User Resizable

**Description :** Si la zone peut être redimensionnée par l&apos;utilisateur, le curseur situé près du bord inférieur droit changera pour permettre un redimensionnement à l&apos;aide d&apos;un glisser-déposer.

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );New Window( "resize",	H Splitter Box(		Size( 600, 200 ),		tree = Tree Box( {root1, root2} ),		scroll = Scroll Box(			Size( 300, 200 ),			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )		)	));tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );Wait( 2 );tree << User Resizable( {0, 0} );scroll << User Resizable( {0, 0} );

```

### Vertical Alignment

**Syntaxe :** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Description :** L&apos;alignement vertical gère le positionnement de la boîte dans un conteneur lorsque la boîte ne remplit pas tout l&apos;espace..

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Syntaxe :** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Description :** La visibilité détermine si une boîte est affichée et si elle occupe un espace. La valeur par défaut de la visibilité "Visible" indique que l&apos;objet sera affiché. Une boîte "Hidden" n&apos;est pas affichée mais elle occupe encore un espace, alors qu&apos;une boîte "Collapsed" n&apos;occupe pas d&apos;espace dans la mise en page.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Window Class Name

**Syntaxe :** obj &lt;&lt; Window Class Name

**Description :** Renvoie le nom de la classe de fenêtre associée à la boîte d’affichage.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Show( biv << Window Class Name() );Show( rbiv << Window Class Name() );

```

### XPath

**Syntaxe :** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Description :** Applique une expression Xpath à la représentation XML de l’arbre d’affichage et renvoie les résultats. Par défaut, les chaînes sont renvoyées dans la langue locale et le XML contient les valeurs des données dans des boîtes. Utilisez l&apos;option English pour renvoyer des chaînes anglaises, le cas échéant. Utilisez l&apos;option NoData pour omettre les valeurs des données dans les boîtes, ce qui peut être utile pour optimiser les performances des requêtes basées uniquement sur des attributs de boîte.

#### Attributes

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

#### Box type

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

#### Child box

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<Make Into Data Table;

```

#### Data

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<Text Color( "Green" );

```

#### Display Seg

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

#### Text

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Syntaxe :** obj &lt;&lt; Zoom Window

**Description :** Redimensionne la fenêtre de sorte qu&apos;elle soit suffisamment grande pour afficher tout son contenu.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 80, 120 );Wait( 2 );w << Zoom Window;

```

