# TreeMapSeg



## Constructeurs associés

### Treemap

**Syntaxe :** Treemap

**Description :** Affiche une réponse sommée par plusieurs catégories.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));

```

## Messages d'éléments

### Child

**Syntaxe :** seg2 = obj &lt;&lt; Child

**Description :** Renvoie le premier enfant du seg affiché.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Child; // not many segs support children

```

### Class Name

**Syntaxe :** classname = obj &lt;&lt; Class Name

**Description :** Renvoie le nom de la classe d’affichage associée au seg d’affichage.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Class Name;

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Delete;

```

### Density Gradient

**Syntaxe :** obj &lt;&lt; Density Gradient( "Estomper vers le blanc"|"Estomper vers le gris"|"Couleur pleine"="Estomper vers le blanc" )

**Description :** Définit le comportement de couleur des gradients de densité. "Estomper vers le blanc" par défaut.

**JMP Version ajoutée :** 15

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Density Gradient( "Fade to Gray" );

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

### Fill Color

**Syntaxe :** obj &lt;&lt; Fill Color( color )

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Fill Color( "Green" );

```

### First Value

**Syntaxe :** obj &lt;&lt; First Value( state=0|1 )

**JMP Version ajoutée :** 16

### Frame

**Syntaxe :** FrameBox = obj &lt;&lt; Frame

**Description :** Renvoie le cadre qui contient le seg affiché.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Frame;

```

### Get Base Font

**Syntaxe :** font = obj &lt;&lt; Get Base Font

**Description :** Renvoie la police de base utilisée pour le texte apparaissant dans la zone. Les polices de base sont des noms prédéfinis tels que Title, Text, Annotation, et autres, qui sont spécifiés dans les Préférences des polices.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Get Base Font;

```

### Get Clip Shape

**Syntaxe :** obj &lt;&lt; Get Clip Shape

**Description :** Renvoie la forme de détourage actuelle

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Density Gradient

**Syntaxe :** obj &lt;&lt; Get Density Gradient

**Description :** Obtient le comportement de couleur des gradients de densité.

**JMP Version ajoutée :** 15

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Density Gradient;

```

### Get Description

**Syntaxe :** description = obj &lt;&lt; Get Description

**Description :** Obtient la description du seg d&apos;affichage.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << get description();

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

### Get Fill Color

**Syntaxe :** color = obj &lt;&lt; Get Fill Color

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Fill Color;

```

### Get Fill Pattern

**Syntaxe :** obj &lt;&lt; Get Fill Pattern

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Fill Pattern;

```

### Get Font

**Syntaxe :** obj &lt;&lt; Get Font

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Get Font;

```

### Get Font Name

**Syntaxe :** obj &lt;&lt; Get Font Name

**Description :** Renvoie le nom de la police.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Set Font Name( "Times New Roman" );fontobj << Get Font Name;

```

### Get Font Scale

**Syntaxe :** obj &lt;&lt; Get Font Scale

**Description :** Renvoie le facteur d&apos;échelle actuel de la police.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Get Font Scale;

```

### Get Font Size

**Syntaxe :** obj &lt;&lt; Get Font Size

**Description :** Renvoie la taille de la police.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Get Font Size;

```

### Get Font Style

**Syntaxe :** obj &lt;&lt; Get Font Style

**Description :** Renvoie le nom du style de police.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Set Font Name( "Arial" );fontobj << Set Font Style( "Italic" );fontobj << Get Font Style;

```

### Get Gradient

**Syntaxe :** obj &lt;&lt; Get Gradient

**Description :** Obtient le gradient de couleur.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntaxe :** obj &lt;&lt; Get Gradient Color Theme

**Description :** Obtient le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntaxe :** obj &lt;&lt; Get Gradient Discrete Colors

**Description :** Obtient si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Discrete Colors;

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Label Count;

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntaxe :** obj &lt;&lt; Get Gradient Legend Label Format

**Description :** Obtient le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntaxe :** obj &lt;&lt; Get Gradient Legend Label Width

**Description :** Obtient la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntaxe :** obj &lt;&lt; Get Gradient Legend Show Labels

**Description :** Obtient si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntaxe :** obj &lt;&lt; Get Gradient Level Count

**Description :** Obtient le nombre de niveaux dans un gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntaxe :** obj &lt;&lt; Get Gradient Lightness Range

**Description :** Obtient la luminosité minimum et maximum des couleurs de niveau dans un gradient. Des valeurs manquantes indiquent que la valeur d&apos;origine du thème de couleurs est utilisée.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Lightness Range;

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntaxe :** obj &lt;&lt; Get Gradient Reverse Label Order

**Description :** Obtient si l&apos;ordre des étiquettes dans un gradient est inversé.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Reverse Label Order;

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntaxe :** obj &lt;&lt; Get Gradient Transparency

**Description :** Obtient le comportement de transparence des gradients.

**JMP Version ajoutée :** 15

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Gradient Transparency;

```

### Get Group Label Border Color

**Syntaxe :** color = obj &lt;&lt; Get Group Label Border Color

**Description :** Obtient la couleur de bordure d&apos;étiquette du groupe flottant.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :State ), X( :city, Position( 1 ) ), ),	Elements( Treemap( X( 1 ), X( 2 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Group Label Border Color();

```

### Get Group Label Color

**Syntaxe :** color = obj &lt;&lt; Get Group Label Color

**Description :** Obtient la couleur de remplissage d&apos;étiquette du groupe flottant.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :State ), X( :city, Position( 1 ) ), ),	Elements( Treemap( X( 1 ), X( 2 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Group Label Color();

```

### Get Group Label Font

**Syntaxe :** font = obj &lt;&lt; Get Group Label Font

**Description :** Obtient la police d&apos;étiquette du groupe.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :State ), X( :city, Position( 1 ) ), ),	Elements( Treemap( X( 1 ), X( 2 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Group Label Font();

```

### Get Group Label Font Color

**Syntaxe :** color = obj &lt;&lt; Get Group Label Font Color

**Description :** Obtient la couleur de la police d&apos;étiquette du groupe.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :State ), X( :city, Position( 1 ) ), ),	Elements( Treemap( X( 1 ), X( 2 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Group Label Font Color();

```

### Get Group Spacing

**Syntaxe :** obj &lt;&lt; Get Group Spacing

**Description :** Renvoie l&apos;espace autour des mosaïques de groupe.

**JMP Version ajoutée :** 16

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Group Spacing();

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Line Color;

```

### Get Line Style

**Syntaxe :** pen style = obj &lt;&lt; Get Line Style

**Description :** Renvoie le style des lignes.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Line Style;

```

### Get Line Width

**Syntaxe :** number = obj &lt;&lt; Get Line Width

**Description :** Renvoie l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Line Width;

```

### Get Marker

**Syntaxe :** marker = obj &lt;&lt; Get Marker

**Description :** Renvoie le style du marqueur.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Marker;

```

### Get Marker Size

**Syntaxe :** size = obj &lt;&lt; Get Marker Size

**Description :** Renvoie la taille des marqueurs.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Marker Size;

```

### Get Orientation Bias

**Syntaxe :** bias = obj &lt;&lt; Get Orientation Bias

**Description :** Obtient la préférence relative de la découpe de zone horizontale par rapport à verticale.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );gb = Graph Builder( Variables( X( :State ), Size( :Population ) ), Elements( Treemap( X ) ) );frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Orientation Bias();

```

### Get Text Color

**Syntaxe :** obj &lt;&lt; Get Text Color

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Text Color;

```

### Get Text Style

**Syntaxe :** obj &lt;&lt; Get Text Style

**Description :** Obtient comment le texte est dessiné par rapport au stylo curseur.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( “Text Seg” ));seg << Get Text Style;

```

### Get Transparency

**Syntaxe :** obj &lt;&lt; Get Transparency

**Description :** Renvoie une valeur numérique, comprise entre 0 (transparent) et 1 (opaque), représentant la transparence.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Get Transparency;

```

### Gradient

**Syntaxe :** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Description :** Définit le gradient de couleur.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntaxe :** obj &lt;&lt; Gradient Color Theme

**Description :** Définit le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Color Theme( "Viridis" );

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Label Count( 8 );

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntaxe :** obj &lt;&lt; Gradient Legend Label Format

**Description :** Définit le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntaxe :** obj &lt;&lt; Gradient Legend Label Width

**Description :** Définit la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntaxe :** obj &lt;&lt; Gradient Legend Show Labels

**Description :** Définit si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntaxe :** obj &lt;&lt; Gradient Level Count

**Description :** Définit le nombre de niveaux dans un gradient. Ce nombre est inférieur d&apos;une unité au nombre d&apos;étiquettes.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntaxe :** obj &lt;&lt; Gradient Lightness Range

**Description :** Définit la luminosité minimum et maximum des couleurs de niveau dans un gradient. Les couleurs seront réduites pour couvrir cette plage. Une valeur manquante est traitée comme sans aucune modification.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Exemple 3**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Lightness Range( ., 0.75 );

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntaxe :** obj &lt;&lt; Gradient Reverse Label Order

**Description :** Inverse l&apos;ordre des étiquettes dans un gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Reverse Label Order( 1 );

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Gradient Transparency( "None" );

```

### Group Label Background

**Syntaxe :** obj &lt;&lt; Group Label Background( transparency )

**Description :** Définit la transparence de fond des étiquettes de groupe.

```jsl

Open( "$SAMPLE_DATA/Animals.jmp" );gb = Graph Builder(	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( Treemap Seg( 1 ) ));seg << Group Label Background( 0.4 );

```

### Ignore Group Hierarchy

**Syntaxe :** obj &lt;&lt; Ignore Group Hierarchy( state=0|1 )

**Description :** Si plusieurs catégories sont spécifiées, celles-ci seront groupées.  Si ce message est activé, la hiérarchie de groupe est ignorée.

```jsl

Open( "$SAMPLE_DATA/Animals.jmp" );gb = Graph Builder(	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( Treemap Seg( 1 ) ));seg << Ignore Group Hierarchy( 1 );

```

### Last Value

**Syntaxe :** obj &lt;&lt; Last Value( state=0|1 )

**JMP Version ajoutée :** 16

### Line Color

**Syntaxe :** obj &lt;&lt; Line Color( color )

**Description :** Définit la couleur de toutes les lignes présentes dans le seg d’affichage.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Line Color( "Green" );

```

### Line Style

**Syntaxe :** obj &lt;&lt; Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntaxe :** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Line Width( 3 );

```

### Marker

**Syntaxe :** obj &lt;&lt; Marker( marker )

**Description :** Définit le style de tous les marqueurs.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Marker( "Square" );

```

### Marker Size

**Syntaxe :** obj &lt;&lt; Marker Size( size )

**Description :** Définit la taille des marqueurs. Les options de taille sont : Point, Petit, Moyen, Grand, XL, XXL et XXXL.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Parent;

```

### Revert

**Syntaxe :** obj &lt;&lt; Revert

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Revert;

```

### Set Base Font

**Syntaxe :** obj &lt;&lt; Set Base Font( "Texte"|"En-tête"|"Titre"|"Petit"|"Mono"|"Éditeur de formules"|"Annotation"|"Axe"|"Marqueur"|"Titre de l&apos;axe"|"Étiquette du graphique"|"Légende"|"Titre du graphique"|"Légende"|"Table de données"|"Étiquette de survol" )

**Description :** Définit la police de base pour le texte apparaissant dans la zone.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));Wait( 2 );fontobj << Set Base Font( "Title" );

```

### Set Description

**Syntaxe :** obj &lt;&lt; Set Description( description )

**Description :** Définit la description du seg d&apos;affichage.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << set description( "my seg" );

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

### Set Fill Color

**Syntaxe :** obj &lt;&lt; Set Fill Color( color )

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Syntaxe :** obj &lt;&lt; Set Fill Pattern

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**Syntaxe :** obj &lt;&lt; Set Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Set Font( "Arial Black" );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Syntaxe :** obj &lt;&lt; Set Font Name( fontname )

**Description :** Définit la police des chaînes de texte.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Syntaxe :** obj &lt;&lt; Set Font Scale( f )

**Description :** Définit un facteur d&apos;échelle pour la police actuelle. Le facteur d&apos;échelle sera appliqué à la taille déterminée par la police de base et la taille du point.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));Wait( 2 );fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Syntaxe :** obj &lt;&lt; Set Font Size( n )

**Description :** Définit la taille de police des chaînes de texte.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Set Font Size( 14 );

```

### Set Font Style

**Syntaxe :** obj &lt;&lt; Set Font Style( style )

**Description :** Définit le style de police des chaînes de texte. Pour définir plusieurs styles à la fois, les placer dans la même chaîne, séparés par des espaces (voir l&apos;exemple 2 ci-dessous).

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Set Font Style( "Italic" );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**Syntaxe :** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Description :** Définit le gradient de couleur.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntaxe :** obj &lt;&lt; Set Gradient Color Theme

**Description :** Définit le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntaxe :** obj &lt;&lt; Set Gradient Custom Scale

**Description :** Définit le gradient de sorte à utiliser une liste de valeurs pour une échelle personnalisée.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Label Count( 8 );

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntaxe :** obj &lt;&lt; Set Gradient Legend Label Format

**Description :** Définit le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntaxe :** obj &lt;&lt; Set Gradient Legend Label Width

**Description :** Définit la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntaxe :** obj &lt;&lt; Set Gradient Legend Show Labels

**Description :** Définit si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntaxe :** obj &lt;&lt; Set Gradient Level Count

**Description :** Définit le nombre de niveaux dans un gradient. Ce nombre est inférieur d&apos;une unité au nombre d&apos;étiquettes.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntaxe :** obj &lt;&lt; Set Gradient Lightness Range

**Description :** Définit la luminosité minimum et maximum des couleurs de niveau dans un gradient. Les couleurs seront réduites pour couvrir cette plage. Une valeur manquante est traitée comme sans aucune modification.

**JMP Version ajoutée :** 18

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Exemple 3**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Lightness Range( ., 0.75 );

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntaxe :** obj &lt;&lt; Set Gradient Reverse Label Order

**Description :** Inverse l&apos;ordre des étiquettes dans un gradient.

**JMP Version ajoutée :** 18

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Gradient Reverse Label Order( 1 );

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

### Set Group Label Border Color

**Syntaxe :** obj &lt;&lt; Set Group Label Border Color( color )

**Description :** Définit la couleur de bordure d&apos;étiquette du groupe flottant.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :State ), X( :city, Position( 1 ) ), ),	Elements( Treemap( X( 1 ), X( 2 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Group Label Border Color( "Blue" );

```

### Set Group Label Color

**Syntaxe :** obj &lt;&lt; Set Group Label Color( color )

**Description :** Définit la couleur de remplissage d&apos;étiquette du groupe flottant.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :State ), X( :city, Position( 1 ) ), ),	Elements( Treemap( X( 1 ), X( 2 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Group Label Color( "Blue" );

```

### Set Group Label Font

**Syntaxe :** obj &lt;&lt; Set Group Label Font( &lt;label position&gt; fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;, &lt;label position&gt;, &lt;Font(fontName)&gt;, &lt;Size(size)&gt;, &lt;Style("bold italic underline strikeout")&gt;, &lt;Angle(angle)&gt; )

**Description :** Définit la police d&apos;étiquette du groupe. Si un emplacement d&apos;étiquette est spécifié, la police est appliquée uniquement si les étiquettes de groupe utilisent cette position.

**JMP Version ajoutée :** 17

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :State ), X( :city, Position( 1 ) ), ),	Elements( Treemap( X( 1 ), X( 2 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Group Label Font( "Arial Black", 16 );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :State ), X( :city, Position( 1 ) ), ),	Elements( Treemap( X( 1 ), X( 2 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Group Label Font( "Floating", Size( 24 ) );

```

### Set Group Label Font Color

**Syntaxe :** obj &lt;&lt; Set Group Label Font Color( color )

**Description :** Définit la couleur de la police d&apos;étiquette du groupe.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :State ), X( :city, Position( 1 ) ), ),	Elements( Treemap( X( 1 ), X( 2 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Group Label Font Color( "Blue" );

```

### Set Group Spacing

**Syntaxe :** obj &lt;&lt; Set Group Spacing( spacing=1 )

**Description :** Définit l&apos;espace autour des mosaïques de groupe. "1" par défaut.

**JMP Version ajoutée :** 16

**Exemple 1**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Group Spacing( 5 );

```

**Exemple 2**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg( TreeMapSeg( 1 ), Set Group Spacing( 4 ) )}		)	));

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntaxe :** obj &lt;&lt; Set Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntaxe :** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Line Width( 3 );

```

### Set Marker

**Syntaxe :** obj &lt;&lt; Set Marker( marker )

**Description :** Définit le style de tous les marqueurs.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Marker( "Square" );

```

### Set Marker Size

**Syntaxe :** obj &lt;&lt; Set Marker Size( size )

**Description :** Définit la taille des marqueurs. Les options de taille sont : Point, Petit, Moyen, Grand, XL, XXL et XXXL.

**JMP Version ajoutée :** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

```

### Set Orientation Bias

**Syntaxe :** obj &lt;&lt; Set Orientation Bias( bias )

**Description :** Définit la préférence relative de la découpe de zone horizontale par rapport à verticale. L&apos;argument doit être un nombre compris entre -1 et 1.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );gb = Graph Builder( Variables( X( :State ), Size( :Population ) ), Elements( Treemap( X ) ) );frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Orientation Bias( 0.5 );

```

### Set Text Color

**Syntaxe :** obj &lt;&lt; Set Text Color( color )

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Text Color( "Green" );

```

### Set Text Style

**Syntaxe :** obj &lt;&lt; Set Text Style( [Gauche|Centre|Droite], [Haut|VCenter|Référence de base|Bas], [Effacé], [Encadré] )

**Description :** Définit comment le texte est dessiné par rapport au stylo curseur. Lorsqu&apos;il est pris en charge, « Effacé » remplit la boîte limite du texte et « Effacé » la structure. S&apos;il n&apos;est pas spécifié, l&apos;alignement par défaut est « Gauche » pour l&apos;horizontal et « Référence de base » pour le vertical.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( “Text Seg” ));seg << Set Text Style( {Center, VCenter} );

```

### Set Transparency

**Syntaxe :** obj &lt;&lt; Set Transparency( number )

**Description :** Définit la transparence de la forme. L’argument doit être une valeur numérique comprise entre 0 et 1.

**JMP Version ajoutée :** 16

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Transparency( .3 );

```

### Show Category Name

**Syntaxe :** obj &lt;&lt; Show Category Name( state=0|1 )

### Show Group Labels

**Syntaxe :** obj &lt;&lt; Show Group Labels( state=0|1 )

**Description :** Si désactivé, les étiquettes de groupe ne sont pas affichées. Actif par défaut.

```jsl

Open( "$SAMPLE_DATA/Animals.jmp" );gb = Graph Builder(	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( Treemap Seg( 1 ) ));seg << Show Group Labels( 0 );

```

### Show Group Name

**Syntaxe :** obj &lt;&lt; Show Group Name( state=0|1 )

### Show Labels

**Syntaxe :** obj &lt;&lt; Show Labels( state=0|1 )

**Description :** Si désactivé, les étiquettes ne sont pas affichées. Actif par défaut.

```jsl

Open( "$SAMPLE_DATA/Animals.jmp" );gb = Graph Builder(	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( Treemap Seg( 1 ) ));seg << Show Labels( 0 );

```

### Sib

**Syntaxe :** seg2 = obj &lt;&lt; Sib

**Description :** Renvoie le frère du seg affiché.

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Sib;

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

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Suppress Box Frames

**Syntaxe :** obj &lt;&lt; Suppress Box Frames( state=0|1 )

**Description :** Si activé, les cadres des zones ne sont pas affichés.

```jsl

Open( "$SAMPLE_DATA/Animals.jmp" );gb = Graph Builder(	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) ));frame = Report( gb )[FrameBox( 1 )];seg = (frame << Find Seg( Treemap Seg( 1 ) ));seg << Suppress Box Frames( 1 );

```

### Text Color

**Syntaxe :** obj &lt;&lt; Text Color( color )

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Text Color( "Green" );

```

### Text Style

**Syntaxe :** obj &lt;&lt; Text Style( [Gauche|Centre|Droite], [Haut|VCenter|Référence de base|Bas], [Effacé], [Encadré] )

**Description :** Définit comment le texte est dessiné par rapport au stylo curseur. Lorsqu&apos;il est pris en charge, « Effacé » remplit la boîte limite du texte et « Effacé » la structure. S&apos;il n&apos;est pas spécifié, l&apos;alignement par défaut est « Gauche » pour l&apos;horizontal et « Référence de base » pour le vertical.

**JMP Version ajoutée :** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( “Text Seg” ));seg << Set Text Style( {Center, VCenter} );

```

### Transparency

**Syntaxe :** obj &lt;&lt; Transparency( number )

**Description :** Définit la transparence de la forme. L’argument doit être une valeur numérique comprise entre 0 et 1.

**JMP Version ajoutée :** 16

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Variables( X( :Region ), X( :State, Position( 1 ) ) ),	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ));frame = Report( gb )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));seg << Set Transparency( .3 );

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

