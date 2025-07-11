# TreeMapSeg



### Child

**Syntaxe :** seg2 = obj << Child

**Description :** Renvoie le premier enfant du seg affiché.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Child; // not many segs support children

```

### Class Name

**Syntaxe :** classname = obj << Class Name

**Description :** Renvoie le nom de la classe d’affichage associée au seg d’affichage.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Class Name;

```

### Clip Shape

**Syntaxe :** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Description :** Coupe la géométrie selon la forme donnée. La forme peut être spécifiée à l&apos;aide d&apos;un fichier de forme ou d&apos;un chemin. Afin de sélectionner une seule forme, un ID facultatif peut être spécifié au moyen d&apos;un fichier de forme, sinon l&apos;union de toutes les formes sera utilisée pour définir la région de détourage. Un chemin de détourage peut être spécifié par une matrice N x 3 ou par une représentation textuelle. Une matrice de chemin a trois colonnes pour x, y et les indicateurs pour chaque point du chemin. Les valeurs des indicateurs sont 0 pour le contrôle, 1 pour le déplacement, 2 pour le segment de ligne, 3 pour le segment cubique de Bézier et sont négatives si le point ferme aussi le chemin. Le texte de chemin autorise la syntaxe SVG.

**JMP Version ajoutée :** 14

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Delete;

```

### Density Gradient

**Syntaxe :** obj << Density Gradient( "Estomper vers le blanc"|"Estomper vers le gris"|"Couleur pleine"="Estomper vers le blanc" )

**Description :** Définit le comportement de couleur des gradients de densité. "Estomper vers le blanc" par défaut.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Density Gradient( "Fade to Gray" );

```

### Enabled

**Syntaxe :** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```js

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

### Error Bar Cap

**Syntaxe :** obj << Error Bar Cap( "Aucun(e)"|"Minuscule"|"Petit"|"Moyen"|"Grand" )

**Description :** Spécifie quel type de plafond mettre sur les barres d&apos;erreur.

**JMP Version ajoutée :** 14

```js

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

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Fill Color( "Green" );

```

### First Value

**Syntaxe :** obj << First Value( state=0|1 )

**JMP Version ajoutée :** 16

### Frame

**Syntaxe :** FrameBox = obj << Frame

**Description :** Renvoie le cadre qui contient le seg affiché.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Frame;

```

### Frame Size

**Syntaxe :** obj << Frame Size( width,height )

**Description :** Définit la taille du cadre de la TreeMapBox.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
Show( prefVal );
tmbox = If( prefVal == 1,
	tmr[FrameBox( 1 )],
	tmr[Treemap Box( 1 )]
);
tmbox << Frame Size( 200, 200 );

```

### Get Base Font

**Syntaxe :** font = obj << Get Base Font

**Description :** Renvoie la police de base utilisée pour le texte apparaissant dans la zone. Les polices de base sont des noms prédéfinis tels que Title, Text, Annotation, et autres, qui sont spécifiés dans les Préférences des polices.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Base Font;

```

### Get Clip Shape

**Syntaxe :** obj << Get Clip Shape

**Description :** Renvoie la forme de détourage actuelle

**JMP Version ajoutée :** 14

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Density Gradient;

```

### Get Description

**Syntaxe :** description = obj << Get Description

**Description :** Obtient la description du seg d&apos;affichage.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << get description();

```

### Get Enabled

**Syntaxe :** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description :** Un objet qui n&apos;est pas activé ne répondra pas aux commandes du clavier ou de la souris. Cette propriété est héritée par les objets enfants, donc le fait de désactiver un objet de type conteneur entraînera la désactivation de tous les objets descendants.

```js

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

### Get Error Bar Cap

**Syntaxe :** obj << Get Error Bar Cap

**Description :** Renvoie le type de plafond de barre d&apos;erreur actuel.

**JMP Version ajoutée :** 14

```js

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

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Fill Color;

```

### Get Fill Pattern

**Syntaxe :** obj << Get Fill Pattern

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Fill Pattern;

```

### Get Font

**Syntaxe :** obj << Get Font

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Font;

```

### Get Font Name

**Syntaxe :** obj << Get Font Name

**Description :** Renvoie le nom de la police.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**Syntaxe :** obj << Get Font Scale

**Description :** Renvoie le facteur d&apos;échelle actuel de la police.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Font Scale;

```

### Get Font Size

**Syntaxe :** obj << Get Font Size

**Description :** Renvoie la taille de la police.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Font Size;

```

### Get Font Style

**Syntaxe :** obj << Get Font Style

**Description :** Renvoie le nom du style de police.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**Syntaxe :** obj << Get Gradient

**Description :** Obtient le gradient de couleur.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntaxe :** obj << Get Gradient Color Theme

**Description :** Obtient le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntaxe :** obj << Get Gradient Discrete Colors

**Description :** Obtient si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Syntaxe :** obj << Get Gradient Fill

**Description :** Obtient le comportement de couleur des valeurs se trouvant en-dehors de l&apos;étendue de l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Syntaxe :** [value1,value1, ... value N] = obj << Get Gradient Label Levels

**Description :** Obtient le jeu de valeurs utilisées pour les étiquettes dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

**Exemple 1**

```js

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

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntaxe :** obj << Get Gradient Legend Label Format

**Description :** Obtient le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntaxe :** obj << Get Gradient Legend Label Width

**Description :** Obtient la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntaxe :** obj << Get Gradient Legend Show Labels

**Description :** Obtient si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntaxe :** obj << Get Gradient Level Count

**Description :** Obtient le nombre de niveaux dans un gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntaxe :** obj << Get Gradient Lightness Range

**Description :** Obtient la luminosité minimum et maximum des couleurs de niveau dans un gradient. Des valeurs manquantes indiquent que la valeur d&apos;origine du thème de couleurs est utilisée.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Syntaxe :** obj << Get Gradient Range

**Description :** Obtient la plage sur laquelle les échelles de gradient non personnalisées sont générées.

**JMP Version ajoutée :** 18

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntaxe :** obj << Get Gradient Reverse Label Order

**Description :** Obtient si l&apos;ordre des étiquettes dans un gradient est inversé.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Syntaxe :** obj << Get Gradient Scale

**Description :** Obtient le type d&apos;échelle des gradients.

**JMP Version ajoutée :** 18

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntaxe :** obj << Get Gradient Transparency

**Description :** Obtient le comportement de transparence des gradients.

**JMP Version ajoutée :** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Transparency;

```

### Get Group Label Border Color

**Syntaxe :** color = obj << Get Group Label Border Color

**Description :** Obtient la couleur de bordure d&apos;étiquette du groupe flottant.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Border Color();

```

### Get Group Label Color

**Syntaxe :** color = obj << Get Group Label Color

**Description :** Obtient la couleur de remplissage d&apos;étiquette du groupe flottant.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Color();

```

### Get Group Label Font

**Syntaxe :** font = obj << Get Group Label Font

**Description :** Obtient la police d&apos;étiquette du groupe.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Font();

```

### Get Group Label Font Color

**Syntaxe :** color = obj << Get Group Label Font Color

**Description :** Obtient la couleur de la police d&apos;étiquette du groupe.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Font Color();

```

### Get Group Spacing

**Syntaxe :** obj << Get Group Spacing

**Description :** Renvoie l&apos;espace autour des mosaïques de groupe.

**JMP Version ajoutée :** 16

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Spacing();

```

### Get Interval Draw Directions

**Syntaxe :** obj << Get Interval Draw Directions

**Description :** Obtient les directions dans lesquelles les intervalles doivent être dessinés.

**JMP Version ajoutée :** 17

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Line Color;

```

### Get Line Style

**Syntaxe :** pen style = obj << Get Line Style

**Description :** Renvoie le style des lignes.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Line Style;

```

### Get Line Width

**Syntaxe :** number = obj << Get Line Width

**Description :** Renvoie l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Line Width;

```

### Get Marker

**Syntaxe :** marker = obj << Get Marker

**Description :** Renvoie le style du marqueur.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Marker;

```

### Get Marker Size

**Syntaxe :** size = obj << Get Marker Size

**Description :** Renvoie la taille des marqueurs.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Marker Size;

```

### Get Namespace

**Syntaxe :** obj << Get Namespace

**Description :** Renvoie l&apos;espace de noms associé à cet objet d&apos;affichage.

```js

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Orientation Bias

**Syntaxe :** bias = obj << Get Orientation Bias

**Description :** Obtient la préférence relative de la découpe de zone horizontale par rapport à verticale.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = Graph Builder(
	Variables( X( :State ), Size( :Population ) ),
	Elements( Treemap( X ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Orientation Bias();

```

### Get Properties

**Syntaxe :** obj << Get Properties

**Description :** Renvoie un tableau associatif qui contient les propriétés de la boîte d&apos;affichage et leurs valeurs.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntaxe :** obj << Get Property( "property" )

**Description :** Renvoie le paramètre actuel pour la property nommée.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntaxe :** obj << Get Property List

**Description :** Renvoie la liste des propriétés de la boîte d&apos;affichage.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get Text Color

**Syntaxe :** obj << Get Text Color

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Text Color;

```

### Get Text Style

**Syntaxe :** obj << Get Text Style

**Description :** Obtient comment le texte est dessiné par rapport au stylo curseur.

**JMP Version ajoutée :** 17

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Transparency;

```

### Gradient

**Syntaxe :** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Description :** Définit le gradient de couleur.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntaxe :** obj << Gradient Color Theme

**Description :** Définit le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Syntaxe :** obj << Gradient Discrete Colors

**Description :** Définit si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```js

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

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Syntaxe :** obj << Gradient Label Levels( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntaxe :** obj << Gradient Legend Label Format

**Description :** Définit le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntaxe :** obj << Gradient Legend Label Width

**Description :** Définit la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntaxe :** obj << Gradient Legend Show Labels

**Description :** Définit si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntaxe :** obj << Gradient Level Count

**Description :** Définit le nombre de niveaux dans un gradient. Ce nombre est inférieur d&apos;une unité au nombre d&apos;étiquettes.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntaxe :** obj << Gradient Lightness Range

**Description :** Définit la luminosité minimum et maximum des couleurs de niveau dans un gradient. Les couleurs seront réduites pour couvrir cette plage. Une valeur manquante est traitée comme sans aucune modification.

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Exemple 3**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Syntaxe :** obj << Gradient Range( "Par défaut"|"Étendue de données exacte"|"Milieu 90 %"="Par défaut" )

**Description :** Définit la plage sur laquelle les échelles de gradient non personnalisées sont générées. "Par défaut" par défaut.

**JMP Version ajoutée :** 18

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntaxe :** obj << Gradient Reverse Label Order

**Description :** Inverse l&apos;ordre des étiquettes dans un gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Syntaxe :** obj << Gradient Scale( "Linéaire"|"Quantile"|"Écart-type"|"Logarithme"|"Offset du log"|"Personnaliser"="Linéaire" )

**Description :** Définit le type d&apos;échelle des gradients. "Linéaire" par défaut.

**JMP Version ajoutée :** 18

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Gradient Transparency( "None" );

```

### Group Label Background

**Syntaxe :** obj << Group Label Background( transparency )

**Description :** Définit la transparence de fond des étiquettes de groupe.

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Group Label Background( 0.4 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Group Label Background( 1 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Group Label Background( 1 );
);

```

### Ignore Group Hierarchy

**Syntaxe :** obj << Ignore Group Hierarchy( state=0|1 )

**Description :** Si plusieurs catégories sont spécifiées, celles-ci seront groupées.  Si ce message est activé, la hiérarchie de groupe est ignorée.

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Ignore Group Hierarchy( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Ignore Group Hierarchy( 1 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Ignore Group Hierarchy( 1 );
);

```

### Last Value

**Syntaxe :** obj << Last Value( state=0|1 )

**JMP Version ajoutée :** 16

### Line Color

**Syntaxe :** obj << Line Color( color )

**Description :** Définit la couleur de toutes les lignes présentes dans le seg d’affichage.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Color( "Green" );

```

### Line Style

**Syntaxe :** obj << Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntaxe :** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Width( 3 );

```

### Marker

**Syntaxe :** obj << Marker( marker )

**Description :** Définit le style de tous les marqueurs.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );

```

### Marker Size

**Syntaxe :** obj << Marker Size( size )

**Description :** Définit la taille des marqueurs. Les options de taille sont : Point, Petit, Moyen, Grand, XL, XXL et XXXL.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Parent;

```

### Revert

**Syntaxe :** obj << Revert

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Revert;

```

### Set Base Font

**Syntaxe :** obj << Set Base Font( "Texte"|"En-tête"|"Titre"|"Petit"|"Mono"|"Éditeur de formules"|"Annotation"|"Axe"|"Marqueur"|"Titre de l&apos;axe"|"Étiquette du graphique"|"Légende"|"Titre du graphique"|"Légende"|"Table de données"|"Étiquette de survol" )

**Description :** Définit la police de base pour le texte apparaissant dans la zone.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**Syntaxe :** obj << Set Description( description )

**Description :** Définit la description du seg d&apos;affichage.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << set description( "my seg" );

```

### Set Error Bar Cap

**Syntaxe :** obj << Set Error Bar Cap( "Aucun(e)"|"Minuscule"|"Petit"|"Moyen"|"Grand" )

**Description :** Spécifie quel type de plafond mettre sur les barres d&apos;erreur.

**JMP Version ajoutée :** 14

```js

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

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Syntaxe :** obj << Set Fill Pattern

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**Syntaxe :** obj << Set Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font( "Arial Black" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Syntaxe :** obj << Set Font Name( fontname )

**Description :** Définit la police des chaînes de texte.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Syntaxe :** obj << Set Font Scale( f )

**Description :** Définit un facteur d&apos;échelle pour la police actuelle. Le facteur d&apos;échelle sera appliqué à la taille déterminée par la police de base et la taille du point.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Syntaxe :** obj << Set Font Size( n )

**Description :** Définit la taille de police des chaînes de texte.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Size( 14 );

```

### Set Font Style

**Syntaxe :** obj << Set Font Style( style )

**Description :** Définit le style de police des chaînes de texte. Pour définir plusieurs styles à la fois, les placer dans la même chaîne, séparés par des espaces (voir l&apos;exemple 2 ci-dessous).

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Style( "Italic" );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**Syntaxe :** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Description :** Définit le gradient de couleur.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntaxe :** obj << Set Gradient Color Theme

**Description :** Définit le thème de couleur du gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntaxe :** obj << Set Gradient Custom Scale

**Description :** Définit le gradient de sorte à utiliser une liste de valeurs pour une échelle personnalisée.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Syntaxe :** obj << Set Gradient Discrete Colors

**Description :** Définit si chaque niveau d&apos;un gradient doit être une seule couleur ou si les couleurs doivent effectuer une transition lisse.

**JMP Version ajoutée :** 18

```js

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

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Syntaxe :** obj << Set Gradient Label Levels( [value1,value1, ... value N] )

**Description :** Définit un jeu personnalisé de valeurs à utiliser dans l&apos;échelle du gradient.

**JMP Version ajoutée :** 18

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntaxe :** obj << Set Gradient Legend Label Format

**Description :** Définit le format des étiquettes de la légende du gradient

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntaxe :** obj << Set Gradient Legend Label Width

**Description :** Définit la longueur de caractère maximum des étiquettes de légende du gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntaxe :** obj << Set Gradient Legend Show Labels

**Description :** Définit si les étiquettes de niveau doivent être affichées dans la légende du gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntaxe :** obj << Set Gradient Level Count

**Description :** Définit le nombre de niveaux dans un gradient. Ce nombre est inférieur d&apos;une unité au nombre d&apos;étiquettes.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntaxe :** obj << Set Gradient Lightness Range

**Description :** Définit la luminosité minimum et maximum des couleurs de niveau dans un gradient. Les couleurs seront réduites pour couvrir cette plage. Une valeur manquante est traitée comme sans aucune modification.

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Exemple 3**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Syntaxe :** obj << Set Gradient Range( "Par défaut"|"Étendue de données exacte"|"Milieu 90 %"="Par défaut" )

**Description :** Définit la plage sur laquelle les échelles de gradient non personnalisées sont générées. "Par défaut" par défaut.

**JMP Version ajoutée :** 18

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntaxe :** obj << Set Gradient Reverse Label Order

**Description :** Inverse l&apos;ordre des étiquettes dans un gradient.

**JMP Version ajoutée :** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Syntaxe :** obj << Set Gradient Scale( "Linéaire"|"Quantile"|"Écart-type"|"Logarithme"|"Offset du log"|"Personnaliser"="Linéaire" )

**Description :** Définit le type d&apos;échelle des gradients. "Linéaire" par défaut.

**JMP Version ajoutée :** 18

```js

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

```js

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

```js

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

### Set Group Label Border Color

**Syntaxe :** obj << Set Group Label Border Color( color )

**Description :** Définit la couleur de bordure d&apos;étiquette du groupe flottant.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Border Color( "Blue" );

```

### Set Group Label Color

**Syntaxe :** obj << Set Group Label Color( color )

**Description :** Définit la couleur de remplissage d&apos;étiquette du groupe flottant.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Color( "Blue" );

```

### Set Group Label Font

**Syntaxe :** obj << Set Group Label Font( <label position> fontName, <size>, <"bold italic underline strikeout">, <angle>; <label position>, <Font(fontName)>, <Size(size)>, <Style("bold italic underline strikeout")>, <Angle(angle)> )

**Description :** Définit la police d&apos;étiquette du groupe. Si un emplacement d&apos;étiquette est spécifié, la police est appliquée uniquement si les étiquettes de groupe utilisent cette position.

**JMP Version ajoutée :** 17

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Font( "Arial Black", 16 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Font( "Floating", Size( 24 ) );

```

### Set Group Label Font Color

**Syntaxe :** obj << Set Group Label Font Color( color )

**Description :** Définit la couleur de la police d&apos;étiquette du groupe.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Font Color( "Blue" );

```

### Set Group Spacing

**Syntaxe :** obj << Set Group Spacing( spacing=1 )

**Description :** Définit l&apos;espace autour des mosaïques de groupe. "1" par défaut.

**JMP Version ajoutée :** 16

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Spacing( 5 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{DispatchSeg( TreeMapSeg( 1 ), Set Group Spacing( 4 ) )}
		)
	)
);

```

### Set Interval Draw Directions

**Syntaxe :** obj << Set Interval Draw Directions( Both|Upper|Lower|None )

**Description :** Définit les directions dans lesquelles les intervalles doivent être dessinés.

**JMP Version ajoutée :** 17

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntaxe :** obj << Set Line Style( pen style )

**Description :** Définit le style des lignes. Les options sont : Continu, Pointillé, Tiret, Tiret-point et Tiret-point-point.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntaxe :** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Autre…" )

**Description :** Définit l’épaisseur des lignes.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Width( 3 );

```

### Set Marker

**Syntaxe :** obj << Set Marker( marker )

**Description :** Définit le style de tous les marqueurs.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );

```

### Set Marker Size

**Syntaxe :** obj << Set Marker Size( size )

**Description :** Définit la taille des marqueurs. Les options de taille sont : Point, Petit, Moyen, Grand, XL, XXL et XXXL.

**JMP Version ajoutée :** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Orientation Bias

**Syntaxe :** obj << Set Orientation Bias( bias )

**Description :** Définit la préférence relative de la découpe de zone horizontale par rapport à verticale. L&apos;argument doit être un nombre compris entre -1 et 1.

**JMP Version ajoutée :** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = Graph Builder(
	Variables( X( :State ), Size( :Population ) ),
	Elements( Treemap( X ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Orientation Bias( 0.5 );

```

### Set Property

**Syntaxe :** obj << Set Property( "property", value )

**Description :** Définit la valeur pour la property nommée pour la boîte d&apos;affichage.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Text Color

**Syntaxe :** obj << Set Text Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Text Color( "Green" );

```

### Set Text Style

**Syntaxe :** obj << Set Text Style( [Gauche|Centre|Droite], [Haut|VCenter|Référence de base|Bas], [Effacé], [Encadré] )

**Description :** Définit comment le texte est dessiné par rapport au stylo curseur. Lorsqu&apos;il est pris en charge, « Effacé » remplit la boîte limite du texte et « Effacé » la structure. S&apos;il n&apos;est pas spécifié, l&apos;alignement par défaut est « Gauche » pour l&apos;horizontal et « Référence de base » pour le vertical.

**JMP Version ajoutée :** 17

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Transparency( .3 );

```

### Show Category Name

**Syntaxe :** obj << Show Category Name( state=0|1 )

### Show Group Labels

**Syntaxe :** obj << Show Group Labels( state=0|1 )

**Description :** Si désactivé, les étiquettes de groupe ne sont pas affichées. Actif par défaut.

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Show Group Labels( 0 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Show Group Labels( 0 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Show Group Labels( 0 );
);

```

### Show Group Name

**Syntaxe :** obj << Show Group Name( state=0|1 )

### Show Labels

**Syntaxe :** obj << Show Labels( state=0|1 )

**Description :** Si désactivé, les étiquettes ne sont pas affichées. Actif par défaut.

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Show Labels( 0 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Show Labels( 0 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Show Labels( 0 );
);

```

### Sib

**Syntaxe :** seg2 = obj << Sib

**Description :** Renvoie le frère du seg affiché.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Sib;

```

### Sib Append

**Syntaxe :** obj << Sib Append( seg2 )

**Description :** Ajoute un seg d&apos;affichage immédiatement après le seg affiché.

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
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

### Suppress Box Frames

**Syntaxe :** obj << Suppress Box Frames( state=0|1 )

**Description :** Si activé, les cadres des zones ne sont pas affichés.

**Exemple 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Suppress Box Frames( 1 );

```

**Exemple 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Suppress Box Frames( 1 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Suppress Box Frames( 1 );
);

```

### Text Color

**Syntaxe :** obj << Text Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Text Color( "Green" );

```

### Text Style

**Syntaxe :** obj << Text Style( [Gauche|Centre|Droite], [Haut|VCenter|Référence de base|Bas], [Effacé], [Encadré] )

**Description :** Définit comment le texte est dessiné par rapport au stylo curseur. Lorsqu&apos;il est pris en charge, « Effacé » remplit la boîte limite du texte et « Effacé » la structure. S&apos;il n&apos;est pas spécifié, l&apos;alignement par défaut est « Gauche » pour l&apos;horizontal et « Référence de base » pour le vertical.

**JMP Version ajoutée :** 17

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Transparency( .3 );

```

### Treemap

**Syntaxe :** Treemap

**Description :** Affiche une réponse sommée par plusieurs catégories.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));

```

