# Legend Item



## Messages d'éléments

### Get Label

**Syntaxe :** obj &lt;&lt; Get Label

**Description :** Renvoie l&apos;étiquette de l&apos;élément de légende.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );Print( item << Get Label );

```

### Get Position

**Syntaxe :** obj &lt;&lt; Get Position

**Description :** Renvoie la position séquentielle d&apos;un élément dans la légende, ou un code négatif si l&apos;élément n&apos;est pas affiché. Codes : -1 = Masqué par l&apos;utilisateur, -2 = Masqué par Si afficher, -3 = Masqué par dépendance, -4 = Masqué par le paramètre initial

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );Print( item << Get Position );

```

### Get Type

**Syntaxe :** obj &lt;&lt; Get Type

**Description :** Renvoie le type de l&apos;élément de légende. Les types sont : « None », « Marker », « H Line », « V Line », « Step », « Bar », « V Box Plot », « H Interval », « V Interval », « H Bar Box Plot », « V Bar Box Plot », « OHLC Plot », « H Box Plot », « Gradient », « Density Gradient », « Fill and Line », « Marker Size », « Line Size », « Gradient Line », « Gradient Contour », « Mark Color », « Marker Size Categorical » et « Cell Size ».

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );Print( item << Get Type );

```

### Set Label

**Syntaxe :** obj &lt;&lt; Set Label( text )

**Description :** Définit l&apos;étiquette d&apos;un élément dans la légende.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );item << Set Label( "Label Set Through Script" );

```

### Set Visible

**Syntaxe :** obj &lt;&lt; Set Visible( state=0|1 )

**Description :** Définit la visibilité d&apos;un élément dans la légende.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );item << Set Visible( 0 );

```

