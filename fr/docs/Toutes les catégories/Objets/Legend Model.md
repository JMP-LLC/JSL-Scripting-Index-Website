# Legend Model



## Messages d'éléments

### Get Fill Color

**Syntaxe :** obj &lt;&lt; Get Fill Color

**Description :** Renvoie la couleur de remplissage de l&apos;élément de modèle de légende qui est lié à un seg d&apos;affichage dans le graphe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 1 ) ), Ellipse( X, Y, Legend( 3 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 3, 1 );Show( item << Get Fill Color );

```

### Get Gradient Settings

**Syntaxe :** obj &lt;&lt; Get Gradient Settings

**Description :** Renvoie une liste des paramètres de gradient pour l&apos;élément de modèle de légende qui est lié à un seg d&apos;affichage dans le graphe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Color( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 1, 1 );Print( item << Get Gradient Settings );

```

### Get Label

**Syntaxe :** obj &lt;&lt; Get Label

**Description :** Renvoie l&apos;étiquette de l&apos;élément de modèle de légende.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 2, 1 );Print( item << Get Label );

```

### Get Marker Size Settings

**Syntaxe :** obj &lt;&lt; Get Marker Size Settings

**Description :** Renvoie une liste des paramètres de taille du marqueur pour l&apos;élément de modèle de légende qui est lié à un seg d&apos;affichage dans le graphe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Size( :height ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 1, 1 );Print( item << Get Marker Size Settings );

```

### Get Pen Settings

**Syntaxe :** obj &lt;&lt; Get Pen Settings

**Description :** Renvoie une liste des paramètres du stylo pour l&apos;élément de modèle de légende qui est lié à un seg d&apos;affichage dans le graphe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 1, 7 );Print( item << Get Pen Settings );

```

### Get Type

**Syntaxe :** obj &lt;&lt; Get Type

**Description :** Renvoie le type de l&apos;élément de modèle de légende. Les types sont : « None », « Marker », « H Line », « V Line », « Step », « Bar », « V Box Plot », « H Interval », « V Interval », « H Bar Box Plot », « V Bar Box Plot », « OHLC Plot », « H Box Plot », « Gradient », « Density Gradient », « Fill and Line », « Marker Size », « Line Size », « Gradient Line », « Gradient Contour », « Mark Color », « Marker Size Categorical » et « Cell Size ».

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 2, 1 );Print( item << Get Type );

```

### Set Label

**Syntaxe :** obj &lt;&lt; Set Label( text )

**Description :** Définit l&apos;étiquette pour l&apos;élément de modèle de légende qui est lié à un seg d&apos;affichage dans le graphe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;items = server << Get Legend Items;For Each( {item, index}, items[1], item << Set Label( "Item " || Char( index ) ) );

```

### Set Properties

**Syntaxe :** obj &lt;&lt; Set Properties

**Description :** Définissez des propriétés d&apos;affichage arbitraires pour l&apos;élément de modèle de légende qui est lié à un seg d&apos;affichage dans le graphe.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Size( :height ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 1, 1 );item << Set Properties(	{Marker Size( 5 ), Marker Scale( {Marker Size Minimum( "Dot" ), Style( "Nested Full" )} )	});

```

