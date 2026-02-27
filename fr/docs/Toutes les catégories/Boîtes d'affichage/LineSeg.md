# LineSeg



## Constructeurs associés

### Line Seg

**Syntaxe :** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**Description :** Crée un seg d’affichage des segments de droite connectés. Le troisième argument facultatif active les affectations des états de ligne, à partir d’une table de données (dt) ou indépendamment.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));

```

## Messages d'éléments

### Arrowhead

**Syntaxe :** obj &lt;&lt; Arrowhead( "None"|"Start"|"End"|"Both" )

**Description :** Indique quand dessiner les pointes de flèche aux extrémités d&apos;un segment de ligne.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Arrowhead( "Both" );

```

### Child

**Syntaxe :** seg2 = obj &lt;&lt; Child

**Description :** Renvoie le premier enfant du seg affiché.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Child; // not many segs support children

```

### Class Name

**Syntaxe :** classname = obj &lt;&lt; Class Name

**Description :** Renvoie le nom de la classe d’affichage associée au seg d’affichage.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Class Name;

```

### Clip Shape

**Syntaxe :** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Description :** Coupe la géométrie selon la forme donnée. La forme peut être spécifiée à l&apos;aide d&apos;un fichier de forme ou d&apos;un chemin. Afin de sélectionner une seule forme, un ID facultatif peut être spécifié au moyen d&apos;un fichier de forme, sinon l&apos;union de toutes les formes sera utilisée pour définir la région de détourage. Un chemin de détourage peut être spécifié par une matrice N x 3 ou par une représentation textuelle. Une matrice de chemin a trois colonnes pour x, y et les indicateurs pour chaque point du chemin. Les valeurs des indicateurs sont 0 pour le contrôle, 1 pour le déplacement, 2 pour le segment de ligne, 3 pour le segment cubique de Bézier et sont négatives si le point ferme aussi le chemin. Le texte de chemin autorise la syntaxe SVG.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );Wait( 2 );cs << Clip Shape( Boundaries( "US States" ) );

```

### Color Theme

**Syntaxe :** obj &lt;&lt; Color Theme

### Delete

**Syntaxe :** obj &lt;&lt; Delete

**Description :** Supprimer le seg d’affichage.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Delete;

```

### Density Gradient

**Syntaxe :** obj &lt;&lt; Density Gradient( "Estomper vers le blanc"|"Estomper vers le gris"|"Couleur pleine"="Estomper vers le blanc" )

**Description :** Définit le comportement de couleur des gradients de densité. "Estomper vers le blanc" par défaut.

**JMP Version ajoutée :** 15

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**Syntaxe :** obj &lt;&lt; Error Bar Cap( "Aucun(e)"|"Minuscule"|"Petit"|"Moyen"|"Grand" )

**Description :** Spécifie quel type de plafond mettre sur les barres d&apos;erreur.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**Syntaxe :** obj &lt;&lt; Error Bar Cap Shape( begin, end )

**Description :** Spécifie la forme de l&apos;extrémité à afficher sur les barres d&apos;erreur. Un seul argument définit la forme pour les deux extrémités de la barre, ou des arguments distincts peuvent être fournis pour le début et la fin. La forme par défaut est "Line". Une forme de "Arrow" dessine une flèche vers l&apos;extérieur et "None" omet l&apos;extrémité.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### First Value

**Syntaxe :** obj &lt;&lt; First Value( state=0|1 )

**JMP Version ajoutée :** 16

### Frame

**Syntaxe :** FrameBox = obj &lt;&lt; Frame

**Description :** Renvoie le cadre qui contient le seg affiché.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Frame;

```

### Get Arrowhead

**Syntaxe :** obj &lt;&lt; Get Arrowhead

**Description :** La valeur actuelle pour indiquer quand les pointes de flèche seront dessinées sur un segment de ligne.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Arrowhead( "Both" );Show( seg << Get Arrowhead );

```

### Get Clip Shape

**Syntaxe :** obj &lt;&lt; Get Clip Shape

**Description :** Renvoie la forme de détourage actuelle

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Connect Missing

**Syntaxe :** obj &lt;&lt; Get Connect Missing

**Description :** Obtient le mode de connexion des valeurs manquantes. Parmi "Connecter sans tenir compte des valeurs manquantes", "Connecter en atténuant les valeurs manquantes", "Connecter en pointillés" ou "Aucune connexion".

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));Show( seg << Get Connect Missing() );

```

### Get Density Gradient

**Syntaxe :** obj &lt;&lt; Get Density Gradient

**Description :** Obtient le comportement de couleur des gradients de densité.

**JMP Version ajoutée :** 15

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Density Gradient;

```

### Get Description

**Syntaxe :** description = obj &lt;&lt; Get Description

**Description :** Obtient la description du seg d&apos;affichage.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << get description();

```

### Get Error Bar Cap

**Syntaxe :** obj &lt;&lt; Get Error Bar Cap

**Description :** Renvoie le type de plafond de barre d&apos;erreur actuel.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**Syntaxe :** { begin, end } = obj &lt;&lt; Get Error Bar Cap Shape

**Description :** Renvoie la forme de l&apos;extrémité des barres d&apos;erreur.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Error Bar Cap Shape();

```

### Get Gradient

**Syntaxe :** obj &lt;&lt; Get Gradient

**Description :** Obtient le gradient de couleur.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntaxe :** obj &lt;&lt; Get Gradient Color Theme

**Description :** Obtient le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntaxe :** obj &lt;&lt; Get Gradient Discrete Colors

**Description :** Obtient si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Syntaxe :** obj &lt;&lt; Get Gradient Fill

**Description :** Obtient le comportement de couleur des valeurs se trouvant en-dehors de l&apos;étendue de l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Syntaxe :** obj &lt;&lt; Get Gradient Label Count

**Description :** Obtient le nombre d&apos;étiquettes dans une légende de gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Syntaxe :** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**Description :** Obtient le jeu de valeurs utilisées pour les étiquettes dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Syntaxe :** obj &lt;&lt; Get Gradient Legend Horizontal

**Description :** Obtient si la légende du gradient doit être dessinée horizontalement.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntaxe :** obj &lt;&lt; Get Gradient Legend Label Format

**Description :** Obtient le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntaxe :** obj &lt;&lt; Get Gradient Legend Label Width

**Description :** Obtient la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntaxe :** obj &lt;&lt; Get Gradient Legend Show Labels

**Description :** Obtient si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntaxe :** obj &lt;&lt; Get Gradient Level Count

**Description :** Obtient le nombre de niveaux dans un gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntaxe :** obj &lt;&lt; Get Gradient Lightness Range

**Description :** Obtient la luminosité minimum et maximum des couleurs de niveau dans un gradient. Des valeurs manquantes indiquent que la valeur d&apos;origine du thème de couleurs est utilisée.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Syntaxe :** obj &lt;&lt; Get Gradient Range

**Description :** Obtient la plage sur laquelle les échelles de gradient non personnalisées sont générées.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Syntaxe :** obj &lt;&lt; Get Gradient Reverse Color Order

**Description :** Obtient si l&apos;ordre des couleurs dans un gradient est inversé.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntaxe :** obj &lt;&lt; Get Gradient Reverse Label Order

**Description :** Obtient si l&apos;ordre des étiquettes dans un gradient est inversé.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Syntaxe :** obj &lt;&lt; Get Gradient Scale

**Description :** Obtient le type d&apos;échelle des gradients.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Syntaxe :** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**Description :** Obtient le jeu de valeurs utilisées pour les étiquettes dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Syntaxe :** obj &lt;&lt; Get Gradient Show Missing

**Description :** Obtient quand afficher l&apos;entrée de la légende pour les valeurs manquantes.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntaxe :** obj &lt;&lt; Get Gradient Transparency

**Description :** Obtient le comportement de transparence des gradients.

**JMP Version ajoutée :** 15

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**Syntaxe :** obj &lt;&lt; Get Interval Draw Directions

**Description :** Obtient les directions dans lesquelles les intervalles doivent être dessinés.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Standard Deviation" )		)	),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Reference Line Order( 3 ), DispatchSeg(				BarSeg( 1 ),				{Set Interval Draw Directions( "Upper" )}			)}		)	));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Interval Draw Directions;

```

### Get Line Color

**Syntaxe :** color = obj &lt;&lt; Get Line Color

**Description :** Renvoie la couleur des lignes.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Line Color;

```

### Get Line Style

**Syntaxe :** pen style = obj &lt;&lt; Get Line Style

**Description :** Renvoie le style des lignes.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Line Style;

```

### Get Line Width

**Syntaxe :** number = obj &lt;&lt; Get Line Width

**Description :** Renvoie l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Line Width;

```

### Get Log Curve

**Syntaxe :** 0|1 = obj &lt;&lt; Get Log Curve

**Description :** Obtient le paramétrage d&apos;une Courbe logarithmique. Si l&apos;axe d&apos;un graphique a une échelle logarithmique, la ligne fléchit de manière à ce que les valeurs x et y de tous les points situés le long de la ligne correspondent exactement aux valeurs que ces points auraient si l&apos;axe était linéaire.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));// Change Y Axis scale to Logg[AxisBox( 1 )] << Scale( "Log" );seg << Set Log Curve( 1 );seg << Get Log Curve;

```

### Get Marker

**Syntaxe :** marker = obj &lt;&lt; Get Marker

**Description :** Renvoie le style du marqueur.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Marker;

```

### Get Marker Size

**Syntaxe :** size = obj &lt;&lt; Get Marker Size

**Description :** Renvoie la taille des marqueurs.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Marker Size;

```

### Get Point

**Syntaxe :** point = obj &lt;&lt; Get Point( index )

**Description :** Renvoie les coordonnées X et Y du point spécifié.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Point( 2 );

```

### Get Point Count

**Syntaxe :** Number = obj &lt;&lt; Get Point Count

**Description :** Renvoie le nombre de points dans le seg d’affichage.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Point Count;

```

### Get Row Numbers

**Syntaxe :** matrix = obj &lt;&lt; Get Row Numbers

**Description :** Renvoie un vecteur des numéros de ligne du marqueur.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Row Numbers;

```

### Get Smooth

**Syntaxe :** 0|1 = obj &lt;&lt; Get Smooth

**Description :** Renvoie les paramètres de la courbe plus lissée.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Smooth( 1 );seg << Get Smooth;

```

### Get Smoothness

**Syntaxe :** 0..1 = obj &lt;&lt; Get Smoothness

**Description :** Renvoie les paramètres de la courbe plus lissée.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Smoothness( 0.5 );seg << Get Smoothness;

```

### Get Unconnected Marker

**Syntaxe :** obj &lt;&lt; Get Unconnected Marker

**Description :** Obtient le marqueur à utiliser pour représenter des segments de droites avec un seul point final.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));Show( seg << Get Unconnected Marker() );

```

### Get X Values

**Syntaxe :** matrix = obj &lt;&lt; Get X Values

**Description :** Renvoie un vecteur de valeurs de coordonnées X.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get X Values;

```

### Get Y Values

**Syntaxe :** matrix = obj &lt;&lt; Get Y Values

**Description :** Renvoie un vecteur de valeurs de coordonnées Y.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get Y Values;

```

### Get halfpoint is unbounded line

**Syntaxe :** 0|1 = obj &lt;&lt; Get halfpoint is unbounded line

**Description :** Renvoie si un point unique avec une coordonnée manquante est traité comme une droite non bornée.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Get halfpoint is unbounded line;

```

### Gradient

**Syntaxe :** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Description :** Définit le gradient de couleur.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntaxe :** obj &lt;&lt; Gradient Color Theme

**Description :** Définit le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Syntaxe :** obj &lt;&lt; Gradient Discrete Colors

**Description :** Définit si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Syntaxe :** obj &lt;&lt; Gradient Fill( "Entre"|"Au-dessus"|"Au-dessous"|"Au-dessus au-dessous"="Au-dessus au-dessous" )

**Description :** Définit le comportement de couleur des valeurs se trouvant en-dehors de l&apos;étendue de l&apos;échelle du gradient. "Au-dessus au-dessous" par défaut.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Syntaxe :** obj &lt;&lt; Gradient Label Count

**Description :** Définit le nombre d&apos;étiquettes dans une légende de gradient. Ce nombre est supérieur d&apos;une unité au nombre de niveaux d&apos;isoréponses.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Syntaxe :** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Syntaxe :** obj &lt;&lt; Gradient Legend Horizontal

**Description :** Définit si la légende du gradient doit être dessinée horizontalement.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntaxe :** obj &lt;&lt; Gradient Legend Label Format

**Description :** Définit le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntaxe :** obj &lt;&lt; Gradient Legend Label Width

**Description :** Définit la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntaxe :** obj &lt;&lt; Gradient Legend Show Labels

**Description :** Définit si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntaxe :** obj &lt;&lt; Gradient Level Count

**Description :** Définit le nombre de niveaux dans un gradient. Ce nombre est inférieur d&apos;une unité au nombre d&apos;étiquettes.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntaxe :** obj &lt;&lt; Gradient Lightness Range

**Description :** Définit la luminosité minimum et maximum des couleurs de niveau dans un gradient. Les couleurs seront réduites pour couvrir cette plage. Une valeur manquante est traitée comme sans aucune modification.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Exemple 2**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Exemple 3**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Syntaxe :** obj &lt;&lt; Gradient Range( "Par défaut"|"Étendue de données exacte"|"Milieu 90 %"="Par défaut" )

**Description :** Définit la plage sur laquelle les échelles de gradient non personnalisées sont générées. "Par défaut" par défaut.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Syntaxe :** obj &lt;&lt; Gradient Reverse Color Order

**Description :** Inverse l&apos;ordre des couleurs dans un gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntaxe :** obj &lt;&lt; Gradient Reverse Label Order

**Description :** Inverse l&apos;ordre des étiquettes dans un gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Syntaxe :** obj &lt;&lt; Gradient Scale( "Linéaire"|"Quantile"|"Écart-type"|"Logarithme"|"Offset du log"|"Personnaliser"="Linéaire" )

**Description :** Définit le type d&apos;échelle des gradients. "Linéaire" par défaut.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Syntaxe :** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Syntaxe :** obj &lt;&lt; Gradient Show Missing( "Auto"|"Activé(e)"|"Désactivé(e)"="Auto" )

**Description :** Définit quand afficher l&apos;entrée de la légende pour les valeurs manquantes. "Auto" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**Syntaxe :** obj &lt;&lt; Gradient Transparency( "Aucun(e)"|"Linéaire"="Linéaire" )

**Description :** Définit le comportement de transparence des gradients. "Linéaire" par défaut.

**JMP Version ajoutée :** 15

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Gradient Transparency( "None" );

```

### Label Offset

**Syntaxe :** obj &lt;&lt; Label Offset

**JMP Version ajoutée :** 16

### Last Value

**Syntaxe :** obj &lt;&lt; Last Value( state=0|1 )

**JMP Version ajoutée :** 16

### Line Color

**Syntaxe :** obj &lt;&lt; Line Color( color )

**Description :** Définit la couleur de toutes les lignes présentes dans le seg d’affichage.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Color( "Green" );

```

### Line Style

**Syntaxe :** obj &lt;&lt; Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntaxe :** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Width( 3 );

```

### Marker

**Syntaxe :** obj &lt;&lt; Marker( marker )

**Description :** Définit le style de tous les marqueurs.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Marker( "Square" );

```

### Marker Size

**Syntaxe :** obj &lt;&lt; Marker Size( size )

**Description :** Définit la taille des marqueurs. Les options de taille sont : Point, Petit, Moyen, Grand, XL, XXL et XXXL.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

```

### Max Value

**Syntaxe :** obj &lt;&lt; Max Value( state=0|1 )

**JMP Version ajoutée :** 16

### Min Value

**Syntaxe :** obj &lt;&lt; Min Value( state=0|1 )

**JMP Version ajoutée :** 16

### Name

**Syntaxe :** obj &lt;&lt; Name( state=0|1 )

**JMP Version ajoutée :** 16

### Parent

**Syntaxe :** seg2 = obj &lt;&lt; Parent

**Description :** Renvoie le parent du seg affiché.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Parent;

```

### Set Arrowhead

**Syntaxe :** obj &lt;&lt; Set Arrowhead( "None"|"Start"|"End"|"Both" )

**Description :** Indique quand dessiner les pointes de flèche aux extrémités d&apos;un segment de ligne.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Arrowhead( "Both" );

```

### Set Connect Missing

**Syntaxe :** obj &lt;&lt; Set Connect Missing( "Connecter sans tenir compte des valeurs manquantes"|"Connecter en atténuant les valeurs manquantes"|"Connecter en pointillés"|"Aucune connexion" )

**Description :** Définit le mode de connexion des valeurs manquantes. Parmi "Connecter sans tenir compte des valeurs manquantes", "Connecter en atténuant les valeurs manquantes", "Connecter en pointillés" ou "Aucune connexion".

```jsl

x = (1 :: 9) * 10;y = [10, 20, ., 60, ., 40, 30, ., 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Connect Missing( "Connect Faded" );

```

### Set Description

**Syntaxe :** obj &lt;&lt; Set Description( description )

**Description :** Définit la description du seg d&apos;affichage.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << set description( "my seg" );

```

### Set Error Bar Cap

**Syntaxe :** obj &lt;&lt; Set Error Bar Cap( "Aucun(e)"|"Minuscule"|"Petit"|"Moyen"|"Grand" )

**Description :** Spécifie quel type de plafond mettre sur les barres d&apos;erreur.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**Syntaxe :** obj &lt;&lt; Set Error Bar Cap Shape( begin, end )

**Description :** Spécifie la forme de l&apos;extrémité à afficher sur les barres d&apos;erreur. Un seul argument définit la forme pour les deux extrémités de la barre, ou des arguments distincts peuvent être fournis pour le début et la fin. La forme par défaut est "Line". Une forme de "Arrow" dessine une flèche vers l&apos;extérieur et "None" omet l&apos;extrémité.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Gradient

**Syntaxe :** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Description :** Définit le gradient de couleur.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntaxe :** obj &lt;&lt; Set Gradient Color Theme

**Description :** Définit le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntaxe :** obj &lt;&lt; Set Gradient Custom Scale

**Description :** Définit le gradient de sorte à utiliser une liste de valeurs pour une échelle personnalisée.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Syntaxe :** obj &lt;&lt; Set Gradient Discrete Colors

**Description :** Définit si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Syntaxe :** obj &lt;&lt; Set Gradient Fill( "Entre"|"Au-dessus"|"Au-dessous"|"Au-dessus au-dessous"="Au-dessus au-dessous" )

**Description :** Définit le comportement de couleur des valeurs se trouvant en-dehors de l&apos;étendue de l&apos;échelle du gradient. "Au-dessus au-dessous" par défaut.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Syntaxe :** obj &lt;&lt; Set Gradient Label Count

**Description :** Définit le nombre d&apos;étiquettes dans une légende de gradient. Ce nombre est supérieur d&apos;une unité au nombre de niveaux d&apos;isoréponses.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Syntaxe :** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Syntaxe :** obj &lt;&lt; Set Gradient Legend Horizontal

**Description :** Définit si la légende du gradient doit être dessinée horizontalement.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntaxe :** obj &lt;&lt; Set Gradient Legend Label Format

**Description :** Définit le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntaxe :** obj &lt;&lt; Set Gradient Legend Label Width

**Description :** Définit la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntaxe :** obj &lt;&lt; Set Gradient Legend Show Labels

**Description :** Définit si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntaxe :** obj &lt;&lt; Set Gradient Level Count

**Description :** Définit le nombre de niveaux dans un gradient. Ce nombre est inférieur d&apos;une unité au nombre d&apos;étiquettes.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntaxe :** obj &lt;&lt; Set Gradient Lightness Range

**Description :** Définit la luminosité minimum et maximum des couleurs de niveau dans un gradient. Les couleurs seront réduites pour couvrir cette plage. Une valeur manquante est traitée comme sans aucune modification.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Exemple 2**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Exemple 3**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Syntaxe :** obj &lt;&lt; Set Gradient Range( "Par défaut"|"Étendue de données exacte"|"Milieu 90 %"="Par défaut" )

**Description :** Définit la plage sur laquelle les échelles de gradient non personnalisées sont générées. "Par défaut" par défaut.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Syntaxe :** obj &lt;&lt; Set Gradient Reverse Color Order

**Description :** Inverse l&apos;ordre des couleurs dans un gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntaxe :** obj &lt;&lt; Set Gradient Reverse Label Order

**Description :** Inverse l&apos;ordre des étiquettes dans un gradient.

**JMP Version ajoutée :** 18

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Syntaxe :** obj &lt;&lt; Set Gradient Scale( "Linéaire"|"Quantile"|"Écart-type"|"Logarithme"|"Offset du log"|"Personnaliser"="Linéaire" )

**Description :** Définit le type d&apos;échelle des gradients. "Linéaire" par défaut.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Syntaxe :** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Syntaxe :** obj &lt;&lt; Set Gradient Show Missing( "Auto"|"Activé(e)"|"Désactivé(e)"="Auto" )

**Description :** Définit quand afficher l&apos;entrée de la légende pour les valeurs manquantes. "Auto" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Set Interval Draw Directions

**Syntaxe :** obj &lt;&lt; Set Interval Draw Directions( Both|Upper|Lower|None )

**Description :** Définit les directions dans lesquelles les intervalles doivent être dessinés.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Standard Deviation" )		)	),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Reference Line Order( 3 ), DispatchSeg(				BarSeg( 1 ),				{Set Interval Draw Directions( "Upper" )}			)}		)	));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Interval Draw Directions( "Lower" );

```

### Set Line Color

**Syntaxe :** obj &lt;&lt; Set Line Color( color )

**Description :** Définit la couleur de toutes les lignes présentes dans le seg d’affichage.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntaxe :** obj &lt;&lt; Set Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntaxe :** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Line Width( 3 );

```

### Set Log Curve

**Syntaxe :** obj &lt;&lt; Set Log Curve( state=0|1 )

**Description :** Définit le paramétrage d&apos;une Courbe logarithmique. Si l&apos;axe d&apos;un graphique a une échelle logarithmique, la ligne se courbe de manière à ce que les valeurs de x et y de tous les points situés le long de la ligne correspondent exactement aux valeurs que ces points auraient si l&apos;axe était linéaire.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));// Change Y Axis scale to Logg[AxisBox( 1 )] << Scale( "Log" );seg << Set Log Curve( 1 );

```

### Set Marker

**Syntaxe :** obj &lt;&lt; Set Marker( marker )

**Description :** Définit le style de tous les marqueurs.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Marker( "Square" );

```

### Set Marker Size

**Syntaxe :** obj &lt;&lt; Set Marker Size( size )

**Description :** Définit la taille des marqueurs. Les options de taille sont : Point, Petit, Moyen, Grand, XL, XXL et XXXL.

**JMP Version ajoutée :** 14

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

```

### Set Smooth

**Syntaxe :** obj &lt;&lt; Set Smooth( state=0|1 )

**Description :** Définit l’état d’une courbe plus lissée.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Smooth( 1 );

```

### Set Smoothness

**Syntaxe :** obj &lt;&lt; Set Smoothness( number )

**Description :** Définit l’état d’une courbe plus lissée.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Smoothness( 0.5 );

```

### Set Transparency

**Syntaxe :** obj &lt;&lt; Set Transparency( number )

**Description :** Définit la transparence de la forme. L’argument doit être une valeur numérique comprise entre 0 et 1.

**JMP Version ajoutée :** 16

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Transparency( .3 );

```

### Set Unconnected Marker

**Syntaxe :** obj &lt;&lt; Set Unconnected Marker( marker )

**Description :** Définit le marqueur à utiliser pour représenter des segments de droites avec un seul point final. Utiliser " " en cas de non-représentation.

```jsl

x = (1 :: 9) * 10;y = [10, 20, ., 60, ., 40, 30, ., 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Unconnected Marker( "diamond" );

```

### Set halfpoint is unbounded line

**Syntaxe :** obj &lt;&lt; Set halfpoint is unbounded line( state=0|1 )

**Description :** Définit si un point unique avec une coordonnée manquante est traité comme une droite non bornée.

```jsl

x = [.];y = [30];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set halfpoint is unbounded line( 1 );

```

### Sib

**Syntaxe :** seg2 = obj &lt;&lt; Sib

**Description :** Renvoie le frère du seg affiché.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Sib;

```

### Sib Append

**Syntaxe :** obj &lt;&lt; Sib Append( seg2 )

**Description :** Ajoute un seg d&apos;affichage immédiatement après le seg affiché.

```jsl

win = New Window( "World",	gb = Graph(		FrameSize( 800, 400 ),		X Scale( -180, 180 ),		Y Scale( -90, 90 ),		<<Background Map( Images( "Simple Earth" ) )	));imgBox = win[framebox( 1 )];mapSeg = imgBox << FindSeg( MapSeg( 1 ) );mapSeg << Transparency( 0.5 );Try(	xAxis = gb[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = gb[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**Syntaxe :** obj &lt;&lt; Sib Prepend( seg2 )

**Description :** Ajoute un seg d&apos;affichage immédiatement avant le seg affiché.

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Transparency

**Syntaxe :** obj &lt;&lt; Transparency( number )

**Description :** Définit la transparence de la forme. L’argument doit être une valeur numérique comprise entre 0 et 1.

**JMP Version ajoutée :** 16

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Line Seg( 1 ) ));seg << Set Transparency( .3 );

```

## Messages d'éléments partagés

### Enabled

**Syntaxe :** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Enabled

**Syntaxe :** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Namespace

**Syntaxe :** obj &lt;&lt; Get Namespace

**Description :** Renvoie l&apos;espace de noms associé à cet objet d&apos;affichage.

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

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

### Set Property

**Syntaxe :** obj &lt;&lt; Set Property( "property", value )

**Description :** Définit la valeur pour la property nommée pour la boîte d&apos;affichage.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

