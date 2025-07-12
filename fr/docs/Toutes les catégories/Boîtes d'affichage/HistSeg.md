# HistSeg



## Constructeurs associés

### Hist Seg

**Syntaxe :** b = Hist Seg([data], <[freq data]>,<[weight data]>, <vertical=0|1>, <Row States()>)

**Description :** Renvoie un seg d&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));

```

## Messages d'éléments

### Child

**Syntaxe :** seg2 = obj << Child

**Description :** Renvoie le premier enfant du seg affiché.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**Syntaxe :** classname = obj << Class Name

**Description :** Renvoie le nom de la classe d’affichage associée au seg d’affichage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Delete;

```

### Frame

**Syntaxe :** FrameBox = obj << Frame

**Description :** Renvoie le cadre qui contient le seg affiché.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
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

### Get Description

**Syntaxe :** description = obj << Get Description

**Description :** Obtient la description du seg d&apos;affichage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << get description();

```

### Get Fill Pattern

**Syntaxe :** obj << Get Fill Pattern

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Fill Pattern;

```

### Get Line Color

**Syntaxe :** color = obj << Get Line Color( color )

**Description :** Obtient la couleur du contour des barres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Line Color;

```

### Get Line Style

**Syntaxe :** linestyle = obj << Get Line Style( pen style )

**Description :** Obtient le style de trait du contour des barres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Line Style;

```

### Get Line Width

**Syntaxe :** integer = obj << Get Line Width( number )

**Description :** Obtient la largeur du contour des barres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Line Width;

```

### Get Transparency

**Syntaxe :** 0.0 to 1.0 = obj << Get Transparency( number )

**Description :** Obtient la transparence du seg d&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Transparency;

```

### Histogram Color

**Syntaxe :** obj << Histogram Color( color )

**Description :** Définit la couleur des barres de l&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Histogram Color( "Red" );

```

### Line Color

**Syntaxe :** obj << Line Color( color )

**Description :** Définit la couleur du contour des barres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Line Style

**Syntaxe :** obj << Line Style( style de ligne )

**Description :** Définit le style de trait du contour des barres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Style( "dashed" );

```

### Line Width

**Syntaxe :** obj << Line Width( integer )

**Description :** Définit la largeur du contour des barres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Parent

**Syntaxe :** seg2 = obj << Parent

**Description :** Renvoie le parent du seg affiché.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Parent;

```

### Save Color Preference

**Syntaxe :** obj << Save Color Preference

**Description :** Définit la couleur de la barre active en tant que couleur par défaut des barres d&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Save Color Preference;

```

### Set Description

**Syntaxe :** obj << Set Description( description )

**Description :** Définit la description du seg d&apos;affichage.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Fill Pattern

**Syntaxe :** obj << Set Fill Pattern

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Line Color

**Syntaxe :** obj << Set Line Color( color )

**Description :** Définit la couleur du contour des barres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntaxe :** obj << Set Line Style( style de ligne )

**Description :** Définit le style de trait du contour des barres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Style( "dashed" );

```

### Set Line Width

**Syntaxe :** obj << Set Line Width( integer )

**Description :** Définit la largeur du contour des barres.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Set Transparency

**Syntaxe :** obj << Set Transparency( 0.0 to 1.0 )

**Description :** Définit la transparence du seg d&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Transparency( .5 );

```

### Sib

**Syntaxe :** seg2 = obj << Sib

**Description :** Renvoie le frère du seg affiché.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
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

### Subset

**Syntaxe :** obj << Subset

**Description :** Crée un sous-ensemble de la table de données basé sur la sélection actuelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Subset;

```

### Transparency

**Syntaxe :** obj << Transparency( 0.0 to 1.0 )

**Description :** Définit la transparence du seg d&apos;histogramme.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Transparency( .5 );

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

