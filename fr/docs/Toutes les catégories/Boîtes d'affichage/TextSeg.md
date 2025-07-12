# TextSeg



## Constructeurs associés

### Text Seg

**Syntaxe :** seg = Text Seg("text")

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);

```

## Messages d'éléments

### Child

**Syntaxe :** seg2 = obj << Child

**Description :** Renvoie le premier enfant du seg affiché.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Child; // not many segs support children

```

### Class Name

**Syntaxe :** classname = obj << Class Name

**Description :** Renvoie le nom de la classe d’affichage associée au seg d’affichage.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
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

### Color Theme

**Syntaxe :** obj << Color Theme

### Delete

**Syntaxe :** obj << Delete

**Description :** Supprimer le seg d’affichage.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Delete;

```

### Density Gradient

**Syntaxe :** obj << Density Gradient( "Estomper vers le blanc"|"Estomper vers le gris"|"Couleur pleine"="Estomper vers le blanc" )

**Description :** Définit le comportement de couleur des gradients de densité. "Estomper vers le blanc" par défaut.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**Syntaxe :** obj << Error Bar Cap( "Aucun(e)"|"Minuscule"|"Petit"|"Moyen"|"Grand" )

**Description :** Spécifie quel type de plafond mettre sur les barres d&apos;erreur.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**Syntaxe :** obj << Error Bar Cap Shape( begin, end )

**Description :** Spécifie la forme de l&apos;extrémité à afficher sur les barres d&apos;erreur. Un seul argument définit la forme pour les deux extrémités de la barre, ou des arguments distincts peuvent être fournis pour le début et la fin. La forme par défaut est "Line". Une forme de "Arrow" dessine une flèche vers l&apos;extérieur et "None" omet l&apos;extrémité.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Fill Color

**Syntaxe :** obj << Fill Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Fill Color( "Green" );

```

### First Value

**Syntaxe :** obj << First Value( state=0|1 )

**JMP Version ajoutée :** 16

### Frame

**Syntaxe :** FrameBox = obj << Frame

**Description :** Renvoie le cadre qui contient le seg affiché.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Frame;

```

### Get Base Font

**Syntaxe :** font = obj << Get Base Font

**Description :** Renvoie la police de base utilisée pour le texte apparaissant dans la zone. Les polices de base sont des noms prédéfinis tels que Title, Text, Annotation, et autres, qui sont spécifiés dans les Préférences des polices.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Get Base Font;

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

### Get Density Gradient

**Syntaxe :** obj << Get Density Gradient

**Description :** Obtient le comportement de couleur des gradients de densité.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Density Gradient;

```

### Get Description

**Syntaxe :** description = obj << Get Description

**Description :** Obtient la description du seg d&apos;affichage.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << get description();

```

### Get Error Bar Cap

**Syntaxe :** obj << Get Error Bar Cap

**Description :** Renvoie le type de plafond de barre d&apos;erreur actuel.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**Syntaxe :** { begin, end } = obj << Get Error Bar Cap Shape

**Description :** Renvoie la forme de l&apos;extrémité des barres d&apos;erreur.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap Shape();

```

### Get Fill Color

**Syntaxe :** color = obj << Get Fill Color

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Fill Color;

```

### Get Fill Pattern

**Syntaxe :** obj << Get Fill Pattern

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Fill Pattern;

```

### Get Font

**Syntaxe :** obj << Get Font

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Get Font;

```

### Get Font Name

**Syntaxe :** obj << Get Font Name

**Description :** Renvoie le nom de la police.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**Syntaxe :** obj << Get Font Scale

**Description :** Renvoie le facteur d&apos;échelle actuel de la police.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Get Font Scale;

```

### Get Font Size

**Syntaxe :** obj << Get Font Size

**Description :** Renvoie la taille de la police.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Get Font Size;

```

### Get Font Style

**Syntaxe :** obj << Get Font Style

**Description :** Renvoie le nom du style de police.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**Syntaxe :** obj << Get Gradient

**Description :** Obtient le gradient de couleur.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntaxe :** obj << Get Gradient Color Theme

**Description :** Obtient le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntaxe :** obj << Get Gradient Discrete Colors

**Description :** Obtient si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Syntaxe :** obj << Get Gradient Fill

**Description :** Obtient le comportement de couleur des valeurs se trouvant en-dehors de l&apos;étendue de l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Syntaxe :** obj << Get Gradient Label Count

**Description :** Obtient le nombre d&apos;étiquettes dans une légende de gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Syntaxe :** [value1,value1, ... value N] = obj << Get Gradient Label Levels

**Description :** Obtient le jeu de valeurs utilisées pour les étiquettes dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Syntaxe :** obj << Get Gradient Legend Horizontal

**Description :** Obtient si la légende du gradient doit être dessinée horizontalement.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntaxe :** obj << Get Gradient Legend Label Format

**Description :** Obtient le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntaxe :** obj << Get Gradient Legend Label Width

**Description :** Obtient la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntaxe :** obj << Get Gradient Legend Show Labels

**Description :** Obtient si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntaxe :** obj << Get Gradient Level Count

**Description :** Obtient le nombre de niveaux dans un gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntaxe :** obj << Get Gradient Lightness Range

**Description :** Obtient la luminosité minimum et maximum des couleurs de niveau dans un gradient. Des valeurs manquantes indiquent que la valeur d&apos;origine du thème de couleurs est utilisée.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Syntaxe :** obj << Get Gradient Range

**Description :** Obtient la plage sur laquelle les échelles de gradient non personnalisées sont générées.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Syntaxe :** obj << Get Gradient Reverse Color Order

**Description :** Obtient si l&apos;ordre des couleurs dans un gradient est inversé.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntaxe :** obj << Get Gradient Reverse Label Order

**Description :** Obtient si l&apos;ordre des étiquettes dans un gradient est inversé.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Syntaxe :** obj << Get Gradient Scale

**Description :** Obtient le type d&apos;échelle des gradients.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Syntaxe :** [value1,value1, ... value N] = obj << Get Gradient Scale Values

**Description :** Obtient le jeu de valeurs utilisées pour les étiquettes dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Syntaxe :** obj << Get Gradient Show Missing

**Description :** Obtient quand afficher l&apos;entrée de la légende pour les valeurs manquantes.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntaxe :** obj << Get Gradient Transparency

**Description :** Obtient le comportement de transparence des gradients.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**Syntaxe :** obj << Get Interval Draw Directions

**Description :** Obtient les directions dans lesquelles les intervalles doivent être dessinés.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Interval Draw Directions;

```

### Get Line Color

**Syntaxe :** color = obj << Get Line Color

**Description :** Renvoie la couleur des lignes.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Line Color;

```

### Get Line Style

**Syntaxe :** pen style = obj << Get Line Style

**Description :** Renvoie le style des lignes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Line Style;

```

### Get Line Width

**Syntaxe :** number = obj << Get Line Width

**Description :** Renvoie l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Line Width;

```

### Get Location

**Syntaxe :** obj << Get Location

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts = Text Seg( "moves with axes" ) );
ts << set location( 60, 60 );
ts << get location();

```

### Get Marker

**Syntaxe :** marker = obj << Get Marker

**Description :** Renvoie le style du marqueur.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Marker;

```

### Get Marker Size

**Syntaxe :** size = obj << Get Marker Size

**Description :** Renvoie la taille des marqueurs.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Marker Size;

```

### Get Relative

**Syntaxe :** obj << Get Relative

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
seg << get relative();

```

### Get Text

**Syntaxe :** obj << Get Text

**Description :** Renvoie la chaîne utilisée par le seg. texte.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 1 ), Jitter( 1 ) ),
		Line Of Fit(
			X,
			Y,
			Legend( 4 ),
			Confidence of Fit( 1 ),
			Confidence of Prediction( 1 ),
			Degree( "Cubic" ),
			Equation( 1 ),
			Root Mean Square Error( 1 ),
			R²( 0 )
		)
	)
);
fontobj = seg = Report( gb )[Framebox( 1 )] << Find Seg( "TextSeg" );
seg << Get Text;

```

### Get Text Color

**Syntaxe :** obj << Get Text Color

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Text Color;

```

### Get Text Style

**Syntaxe :** obj << Get Text Style

**Description :** Obtient comment le texte est dessiné par rapport au stylo curseur.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 3 ) ),
		Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) )
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Get Text Style;

```

### Get Transparency

**Syntaxe :** obj << Get Transparency

**Description :** Renvoie une valeur numérique, comprise entre 0 (transparent) et 1 (opaque), représentant la transparence.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Get Transparency;

```

### Gradient

**Syntaxe :** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Description :** Définit le gradient de couleur.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntaxe :** obj << Gradient Color Theme

**Description :** Définit le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Syntaxe :** obj << Gradient Discrete Colors

**Description :** Définit si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Points( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Syntaxe :** obj << Gradient Fill( "Entre"|"Au-dessus"|"Au-dessous"|"Au-dessus au-dessous"="Au-dessus au-dessous" )

**Description :** Définit le comportement de couleur des valeurs se trouvant en-dehors de l&apos;étendue de l&apos;échelle du gradient. "Au-dessus au-dessous" par défaut.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Syntaxe :** obj << Gradient Label Count

**Description :** Définit le nombre d&apos;étiquettes dans une légende de gradient. Ce nombre est supérieur d&apos;une unité au nombre de niveaux d&apos;isoréponses.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Syntaxe :** obj << Gradient Label Levels( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Syntaxe :** obj << Gradient Legend Horizontal

**Description :** Définit si la légende du gradient doit être dessinée horizontalement.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntaxe :** obj << Gradient Legend Label Format

**Description :** Définit le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntaxe :** obj << Gradient Legend Label Width

**Description :** Définit la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntaxe :** obj << Gradient Legend Show Labels

**Description :** Définit si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntaxe :** obj << Gradient Level Count

**Description :** Définit le nombre de niveaux dans un gradient. Ce nombre est inférieur d&apos;une unité au nombre d&apos;étiquettes.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntaxe :** obj << Gradient Lightness Range

**Description :** Définit la luminosité minimum et maximum des couleurs de niveau dans un gradient. Les couleurs seront réduites pour couvrir cette plage. Une valeur manquante est traitée comme sans aucune modification.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Syntaxe :** obj << Gradient Range( "Par défaut"|"Étendue de données exacte"|"Milieu 90 %"="Par défaut" )

**Description :** Définit la plage sur laquelle les échelles de gradient non personnalisées sont générées. "Par défaut" par défaut.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Syntaxe :** obj << Gradient Reverse Color Order

**Description :** Inverse l&apos;ordre des couleurs dans un gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntaxe :** obj << Gradient Reverse Label Order

**Description :** Inverse l&apos;ordre des étiquettes dans un gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Syntaxe :** obj << Gradient Scale( "Linéaire"|"Quantile"|"Écart-type"|"Logarithme"|"Offset du log"|"Personnaliser"="Linéaire" )

**Description :** Définit le type d&apos;échelle des gradients. "Linéaire" par défaut.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Syntaxe :** obj << Gradient Scale Values( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Syntaxe :** obj << Gradient Show Missing( "Auto"|"Activé(e)"|"Désactivé(e)"="Auto" )

**Description :** Définit quand afficher l&apos;entrée de la légende pour les valeurs manquantes. "Auto" par défaut.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**Syntaxe :** obj << Gradient Transparency( "Aucun(e)"|"Linéaire"="Linéaire" )

**Description :** Définit le comportement de transparence des gradients. "Linéaire" par défaut.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Gradient Transparency( "None" );

```

### Last Value

**Syntaxe :** obj << Last Value( state=0|1 )

**JMP Version ajoutée :** 16

### Line Color

**Syntaxe :** obj << Line Color( color )

**Description :** Définit la couleur de toutes les lignes présentes dans le seg d’affichage.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Line Color( "Green" );

```

### Line Style

**Syntaxe :** obj << Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntaxe :** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Line Width( 3 );

```

### Marker

**Syntaxe :** obj << Marker( marker )

**Description :** Définit le style de tous les marqueurs.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Marker( "Square" );

```

### Marker Size

**Syntaxe :** obj << Marker Size( size )

**Description :** Définit la taille des marqueurs. Les options de taille sont : Point, Petit, Moyen, Grand, XL, XXL et XXXL.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

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
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Parent;

```

### Revert

**Syntaxe :** obj << Revert

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Revert;

```

### Set Base Font

**Syntaxe :** obj << Set Base Font( "Texte"|"En-tête"|"Titre"|"Petit"|"Mono"|"Éditeur de formules"|"Annotation"|"Axe"|"Marqueur"|"Titre de l&apos;axe"|"Étiquette du graphique"|"Légende"|"Titre du graphique"|"Légende"|"Table de données"|"Étiquette de survol" )

**Description :** Définit la police de base pour le texte apparaissant dans la zone.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**Syntaxe :** obj << Set Description( description )

**Description :** Définit la description du seg d&apos;affichage.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << set description( "my seg" );

```

### Set Error Bar Cap

**Syntaxe :** obj << Set Error Bar Cap( "Aucun(e)"|"Minuscule"|"Petit"|"Moyen"|"Grand" )

**Description :** Spécifie quel type de plafond mettre sur les barres d&apos;erreur.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**Syntaxe :** obj << Set Error Bar Cap Shape( begin, end )

**Description :** Spécifie la forme de l&apos;extrémité à afficher sur les barres d&apos;erreur. Un seul argument définit la forme pour les deux extrémités de la barre, ou des arguments distincts peuvent être fournis pour le début et la fin. La forme par défaut est "Line". Une forme de "Arrow" dessine une flèche vers l&apos;extérieur et "None" omet l&apos;extrémité.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Fill Color

**Syntaxe :** obj << Set Fill Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Syntaxe :** obj << Set Fill Pattern

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**Syntaxe :** obj << Set Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**Exemple 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Set Font( "Arial Black" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Syntaxe :** obj << Set Font Name( fontname )

**Description :** Définit la police des chaînes de texte.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Syntaxe :** obj << Set Font Scale( f )

**Description :** Définit un facteur d&apos;échelle pour la police actuelle. Le facteur d&apos;échelle sera appliqué à la taille déterminée par la police de base et la taille du point.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Syntaxe :** obj << Set Font Size( n )

**Description :** Définit la taille de police des chaînes de texte.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Set Font Size( 14 );

```

### Set Font Style

**Syntaxe :** obj << Set Font Style( style )

**Description :** Définit le style de police des chaînes de texte. Pour définir plusieurs styles à la fois, les placer dans la même chaîne, séparés par des espaces (voir l&apos;exemple 2 ci-dessous).

**Exemple 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Set Font Style( "Italic" );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**Syntaxe :** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Description :** Définit le gradient de couleur.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntaxe :** obj << Set Gradient Color Theme

**Description :** Définit le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntaxe :** obj << Set Gradient Custom Scale

**Description :** Définit le gradient de sorte à utiliser une liste de valeurs pour une échelle personnalisée.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Syntaxe :** obj << Set Gradient Discrete Colors

**Description :** Définit si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Points( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Syntaxe :** obj << Set Gradient Fill( "Entre"|"Au-dessus"|"Au-dessous"|"Au-dessus au-dessous"="Au-dessus au-dessous" )

**Description :** Définit le comportement de couleur des valeurs se trouvant en-dehors de l&apos;étendue de l&apos;échelle du gradient. "Au-dessus au-dessous" par défaut.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Syntaxe :** obj << Set Gradient Label Count

**Description :** Définit le nombre d&apos;étiquettes dans une légende de gradient. Ce nombre est supérieur d&apos;une unité au nombre de niveaux d&apos;isoréponses.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Syntaxe :** obj << Set Gradient Label Levels( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Syntaxe :** obj << Set Gradient Legend Horizontal

**Description :** Définit si la légende du gradient doit être dessinée horizontalement.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntaxe :** obj << Set Gradient Legend Label Format

**Description :** Définit le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntaxe :** obj << Set Gradient Legend Label Width

**Description :** Définit la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntaxe :** obj << Set Gradient Legend Show Labels

**Description :** Définit si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntaxe :** obj << Set Gradient Level Count

**Description :** Définit le nombre de niveaux dans un gradient. Ce nombre est inférieur d&apos;une unité au nombre d&apos;étiquettes.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntaxe :** obj << Set Gradient Lightness Range

**Description :** Définit la luminosité minimum et maximum des couleurs de niveau dans un gradient. Les couleurs seront réduites pour couvrir cette plage. Une valeur manquante est traitée comme sans aucune modification.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Syntaxe :** obj << Set Gradient Range( "Par défaut"|"Étendue de données exacte"|"Milieu 90 %"="Par défaut" )

**Description :** Définit la plage sur laquelle les échelles de gradient non personnalisées sont générées. "Par défaut" par défaut.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Syntaxe :** obj << Set Gradient Reverse Color Order

**Description :** Inverse l&apos;ordre des couleurs dans un gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntaxe :** obj << Set Gradient Reverse Label Order

**Description :** Inverse l&apos;ordre des étiquettes dans un gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Syntaxe :** obj << Set Gradient Scale( "Linéaire"|"Quantile"|"Écart-type"|"Logarithme"|"Offset du log"|"Personnaliser"="Linéaire" )

**Description :** Définit le type d&apos;échelle des gradients. "Linéaire" par défaut.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Syntaxe :** obj << Set Gradient Scale Values( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Syntaxe :** obj << Set Gradient Show Missing( "Auto"|"Activé(e)"|"Désactivé(e)"="Auto" )

**Description :** Définit quand afficher l&apos;entrée de la légende pour les valeurs manquantes. "Auto" par défaut.

**JMP Version ajoutée :** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Interval Draw Directions

**Syntaxe :** obj << Set Interval Draw Directions( Both|Upper|Lower|None )

**Description :** Définit les directions dans lesquelles les intervalles doivent être dessinés.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Interval Draw Directions( "Lower" );

```

### Set Line Color

**Syntaxe :** obj << Set Line Color( color )

**Description :** Définit la couleur de toutes les lignes présentes dans le seg d’affichage.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntaxe :** obj << Set Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntaxe :** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Line Width( 3 );

```

### Set Location

**Syntaxe :** obj << Set Location

**Description :** Définit l&apos;emplacement du texte. Si Relative est défini, le 0,0 sera le coin supérieur gauche et 1,1 sera le coin inférieur droit. Si Relative n&apos;est pas défini, les coordonnées seront relatives aux axes.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
w[FrameBox( 1 )] << append seg( ts2 = Text Seg( "moves with axes" ) );
ts2 << set location( 60, 60 );
ts2 << get location();

```

### Set Marker

**Syntaxe :** obj << Set Marker( marker )

**Description :** Définit le style de tous les marqueurs.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Marker( "Square" );

```

### Set Marker Size

**Syntaxe :** obj << Set Marker Size( size )

**Description :** Définit la taille des marqueurs. Les options de taille sont : Point, Petit, Moyen, Grand, XL, XXL et XXXL.

**JMP Version ajoutée :** 14

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Relative

**Syntaxe :** obj << Set Relative( 0|1,0|1 )

**Description :** Une valeur de 0 signifie que la coordonnée x ou y sera relative à la boîte du cadre et une valeur de 1 signifie que la coordonnée x ou y sera relative aux axes. Lorsque Relative est défini sur 0, les coordonnées x et y seront mappées de 0,0 à 1,1 pour le coin supérieur gauche jusqu&apos;au coin inférieur droit de la boîte du graphique.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
w[FrameBox( 1 )] << append seg( ts2 = Text Seg( "moves with axes" ) );
ts2 << set location( 60, 60 );

```

### Set Text

**Syntaxe :** obj << Set Text( text )

**Description :** Définit la chaîne utilisée par le seg. texte.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 1 ), Jitter( 1 ) ),
		Line Of Fit(
			X,
			Y,
			Legend( 4 ),
			Confidence of Fit( 1 ),
			Confidence of Prediction( 1 ),
			Degree( "Cubic" ),
			Equation( 1 ),
			Root Mean Square Error( 1 ),
			R²( 0 )
		)
	)
);
g = Report( gb );
fontobj = seg = g[Framebox( 1 )] << Find Seg( "TextSeg" );
seg << Get Text;
seg << Set Text( seg << Get Text || "  Tallest: Lawrence" );

```

### Set Text Alignment

**Syntaxe :** obj << Set Text Alignment( left|center|right,<top|center|bottom> )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "center" ) );
seg << set relative( 1, 1 );
seg << set location( .5, .5 );
seg << set text alignment( center, center );

```

### Set Text Color

**Syntaxe :** obj << Set Text Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Text Color( "Green" );

```

### Set Text Style

**Syntaxe :** obj << Set Text Style( [Gauche|Centre|Droite], [Haut|VCenter|Référence de base|Bas], [Effacé], [Encadré] )

**Description :** Définit comment le texte est dessiné par rapport au stylo curseur. Lorsqu&apos;il est pris en charge, « Effacé » remplit la boîte limite du texte et « Effacé » la structure. S&apos;il n&apos;est pas spécifié, l&apos;alignement par défaut est « Gauche » pour l&apos;horizontal et « Référence de base » pour le vertical.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 3 ) ),
		Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) )
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Set Transparency

**Syntaxe :** obj << Set Transparency( number )

**Description :** Définit la transparence de la forme. L’argument doit être une valeur numérique comprise entre 0 et 1.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Transparency( .3 );

```

### Sib

**Syntaxe :** seg2 = obj << Sib

**Description :** Renvoie le frère du seg affiché.

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
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
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
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

### Text Color

**Syntaxe :** obj << Text Color( color )

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Text Color( "Green" );

```

### Text Style

**Syntaxe :** obj << Text Style( [Gauche|Centre|Droite], [Haut|VCenter|Référence de base|Bas], [Effacé], [Encadré] )

**Description :** Définit comment le texte est dessiné par rapport au stylo curseur. Lorsqu&apos;il est pris en charge, « Effacé » remplit la boîte limite du texte et « Effacé » la structure. S&apos;il n&apos;est pas spécifié, l&apos;alignement par défaut est « Gauche » pour l&apos;horizontal et « Référence de base » pour le vertical.

**JMP Version ajoutée :** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 3 ) ),
		Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) )
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Transparency

**Syntaxe :** obj << Transparency( number )

**Description :** Définit la transparence de la forme. L’argument doit être une valeur numérique comprise entre 0 et 1.

**JMP Version ajoutée :** 16

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg(
	seg = Text Seg( "default location fixed bottom left" )
);
seg << Set Transparency( .3 );

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

