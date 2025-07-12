# LinesSeg



## Constructeurs associés

### Lines Seg

**Syntaxe :** ls = Lines Seg([x1 y1 x2 y2,...])

**Description :** Renvoie un seg d’affichage avec une séquence de segments de droite pour les valeurs de x et de y données. Le deuxième argument facultatif active les affectations des états de ligne, à partir d’une table de données (dt) ou indépendamment.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));

```

## Messages d'éléments

### Child

**Syntaxe :** seg2 = obj << Child

**Description :** Renvoie le premier enfant du seg affiché.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**Syntaxe :** classname = obj << Class Name

**Description :** Renvoie le nom de la classe d’affichage associée au seg d’affichage.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Class Name;

```

### Clip Shape

**Syntaxe :** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Description :** Coupe la géométrie selon la forme donnée. La forme peut être spécifiée à l&apos;aide d&apos;un fichier de forme ou d&apos;un chemin. Afin de sélectionner une seule forme, un ID facultatif peut être spécifié au moyen d&apos;un fichier de forme, sinon l&apos;union de toutes les formes sera utilisée pour définir la région de détourage. Un chemin de détourage peut être spécifié par une matrice N x 3 ou par une représentation textuelle. Une matrice de chemin a trois colonnes pour x, y et les indicateurs pour chaque point du chemin. Les valeurs des indicateurs sont 0 pour le contrôle, 1 pour le déplacement, 2 pour le segment de ligne, 3 pour le segment cubique de Bézier et sont négatives si le point ferme aussi le chemin. Le texte de chemin autorise la syntaxe SVG.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
Wait( 2 );
cs << Clip Shape( Boundaries( "US States" ) );

```

### Delete

**Syntaxe :** obj << Delete

**Description :** Supprimer le seg d’affichage.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Delete;

```

### First Value

**Syntaxe :** obj << First Value( state=0|1 )

**JMP Version ajoutée :** 16

### Frame

**Syntaxe :** FrameBox = obj << Frame

**Description :** Renvoie le cadre qui contient le seg affiché.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Frame;

```

### Get Clip Shape

**Syntaxe :** obj << Get Clip Shape

**Description :** Renvoie la forme de détourage actuelle

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
cs << Clip Shape( Boundaries( "US States" ) );
Wait( 2 );
cs << Get Clip Shape();

```

### Get Connected

**Syntaxe :** 0|1 = obj << Get Connected

**Description :** Renvoie l’état de connexion de tous les segments de ligne présents dans le seg d’affichage.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Connected;

```

### Get Description

**Syntaxe :** description = obj << Get Description

**Description :** Obtient la description du seg d&apos;affichage.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << get description();

```

### Get Line

**Syntaxe :** [x1 y1 x2 y2] = obj << Get Line( index )

**Description :** Renvoie les coordonnées X et Y de la ligne spécifiée.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line( 2 );

```

### Get Line Color

**Syntaxe :** color = obj << Get Line Color

**Description :** Renvoie la couleur des lignes.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Color;

```

### Get Line Count

**Syntaxe :** Number = obj << Get Line Count

**Description :** Renvoie le nombre de lignes présentes dans le seg d’affichage.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Count;

```

### Get Line Style

**Syntaxe :** pen style = obj << Get Line Style

**Description :** Renvoie le style des lignes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Style;

```

### Get Line Width

**Syntaxe :** number = obj << Get Line Width

**Description :** Renvoie l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Width;

```

### Get Lines

**Syntaxe :** [x1 y1 x2 y2, ...] = obj << Get Lines

**Description :** Renvoie les valeurs des coordonnées X et Y de toutes les lignes.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Lines;

```

### Last Value

**Syntaxe :** obj << Last Value( state=0|1 )

**JMP Version ajoutée :** 16

### Line Color

**Syntaxe :** obj << Line Color( color )

**Description :** Définit la couleur de toutes les lignes présentes dans le seg d’affichage.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Line Style

**Syntaxe :** obj << Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntaxe :** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Max Value

**Syntaxe :** obj << Max Value( state=0|1 )

**JMP Version ajoutée :** 16

### Min Value

**Syntaxe :** obj << Min Value( state=0|1 )

**JMP Version ajoutée :** 16

### Name

**Syntaxe :** obj << Name( state=0|1 )

**JMP Version ajoutée :** 16

### Parent

**Syntaxe :** seg2 = obj << Parent

**Description :** Renvoie le parent du seg affiché.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Parent;

```

### Set Connected

**Syntaxe :** obj << Set Connected( state=0|1 )

**Description :** Définit l’état de connexion de tous les segments de ligne présents dans le seg d’affichage.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Connected( 1 );

```

### Set Description

**Syntaxe :** obj << Set Description( description )

**Description :** Définit la description du seg d&apos;affichage.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Line Color

**Syntaxe :** obj << Set Line Color( color )

**Description :** Définit la couleur de toutes les lignes présentes dans le seg d’affichage.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntaxe :** obj << Set Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntaxe :** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Sib

**Syntaxe :** seg2 = obj << Sib

**Description :** Renvoie le frère du seg affiché.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Sib;

```

### Sib Append

**Syntaxe :** obj << Sib Append( seg2 )

**Description :** Ajoute un seg d&apos;affichage immédiatement après le seg affiché.

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
win = New Window( "World",
	gb = Graph(
		FrameSize( 800, 400 ),
		X Scale( -180, 180 ),
		Y Scale( -90, 90 ),
		<<Background Map( Images( "Simple Earth" ) )
	)
);
imgBox = win[framebox( 1 )];
mapSeg = imgBox << FindSeg( MapSeg( 1 ) );
mapSeg << Transparency( 0.5 );
Try(
	xAxis = gb[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = gb[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
mapSeg << Sib Append(
	Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) )
);

```

### Sib Prepend

**Syntaxe :** obj << Sib Prepend( seg2 )

**Description :** Ajoute un seg d&apos;affichage immédiatement avant le seg affiché.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
Try(
	xAxis = g[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = g[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
seg << Sib Prepend(
	Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) )
);

```

## Messages d'éléments partagés

### Enabled

**Syntaxe :** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```jsl

Names Default To Here( 1 );
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

### Get Enabled

**Syntaxe :** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```jsl

Names Default To Here( 1 );
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

### Get Namespace

**Syntaxe :** obj << Get Namespace

**Description :** Renvoie l&apos;espace de noms associé à cet objet d&apos;affichage.

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Properties

**Syntaxe :** obj << Get Properties

**Description :** Renvoie un tableau associatif qui contient les propriétés de la boîte d&apos;affichage et leurs valeurs.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntaxe :** obj << Get Property( "property" )

**Description :** Renvoie le paramètre actuel pour la property nommée.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntaxe :** obj << Get Property List

**Description :** Renvoie la liste des propriétés de la boîte d&apos;affichage.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**Syntaxe :** obj << Set Property( "property", value )

**Description :** Définit la valeur pour la property nommée pour la boîte d&apos;affichage.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

