# PictSeg



## Messages d'éléments

### Bounds

**Syntaxe :** obj &lt;&lt; Bounds( left(value), right(value), top(value), bottom(value) )

**Description :** Définit les frontières du segment d&apos;image dans les coordonnées des axes.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ) );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) );{l, r, t, b} = imgSeg << getBounds;

```

### Contrast

**Syntaxe :** obj &lt;&lt; filter("contrast")

**Description :** Applique un contraste sur l&apos;image dans le segment d&apos;image. Une valeur positive éclaircit l&apos;image, et une valeur négative assombrit l&apos;image. La valeur utile va de -10 à 10.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "contrast", 3 );

```

### Crop

**Syntaxe :** obj &lt;&lt; Crop

**Description :** Ajuste le segment d&apos;image à la taille spécifiée, en supprimant toutes les parties de l&apos;image situées en-dehors des limites spécifiées. L&apos;ordre est implicite : gauche, haut, droite, bas. Cela pourrait provoquer une déformation de l&apos;image car le ratio hauteur / largeur n&apos;est pas conservé.

```jsl

imgBox = Graph Box( frameSize( 451, 451 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << Crop( 10, 90, 90, 10 );

```

### Despeckle

**Syntaxe :** obj &lt;&lt; filter("despeckle")

**Description :** Applique un filtre de déchatoiement sur l&apos;image dans le segment d&apos;image, de sorte à supprimer le bruit.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "despeckle" );

```

### Edge

**Syntaxe :** obj &lt;&lt; filter("edge")

**Description :** Applique un filtre de détection des bords sur l&apos;image dans le segment d&apos;image. Les bords apparaissent en noir et tout le reste en blanc.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "edge" );

```

### Enhance

**Syntaxe :** obj &lt;&lt; filter("enhance")

**Description :** Applique un filtre d&apos;amélioration sur l&apos;image dans le segment d&apos;image, améliorant ainsi la netteté de l&apos;image.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "enhance" );

```

### Fill Graph

**Syntaxe :** obj &lt;&lt; Fill Graph

**Description :** Définit les limites de sorte qu&apos;elles soient égales aux extensions des axes, ce qui implique que le segment d&apos;image couvre le graphique. Cela pourrait provoquer une déformation de l&apos;image car le ratio hauteur / largeur n&apos;est pas conservé.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 50 ), top( 50 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << fill graph;

```

### Flip both

**Syntaxe :** obj &lt;&lt; flip both

**Description :** Retourne l&apos;image à la verticale et à l&apos;horizontale dans le segment d&apos;image.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip both;

```

### Flip horizontal

**Syntaxe :** obj &lt;&lt; flip horizontal

**Description :** Retourne l&apos;image à l&apos;horizontale dans le segment d&apos;image.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip horizontal;

```

### Flip vertical

**Syntaxe :** obj &lt;&lt; flip vertical

**Description :** Retourne l&apos;image à la verticale dans le segment d&apos;image.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip vertical;

```

### Gamma

**Syntaxe :** obj &lt;&lt; filter("gamma")

**Description :** Ajuste le gamma de l&apos;image dans le segment d&apos;image. L&apos;étendue utile va de 0 à 10. Une valeur de 0 à 1 diminue le gamma. Une valeur supérieure à 1 augmente le gamma.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "gamma", 1.5 );

```

### Gaussian Blur

**Syntaxe :** obj &lt;&lt; filter("gaussian blur", radius, sigma)

**Description :** Applique un flou sur l&apos;image dans le segment d&apos;image. Pour le rayon, l&apos;étendue utile va de 0 à 5.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "gaussian blur", 0.0, 1.0 );

```

### Get Bounds

**Syntaxe :** {left, right, top, bottom} = obj &lt;&lt; Get Bounds

**Description :** Renvoie les frontières du segment d&apos;image dans les coordonnées des axes en suivant l&apos;ordre suivant : gauche, droite, haut et bas.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ) );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );{l, r, t, b} = imgSeg << getBounds;

```

### Get Size

**Syntaxe :** {width, height} = obj &lt;&lt; Get Size

**Description :** Renvoie la taille (largeur et hauteur) du segment d&apos;image en coordonnées de pixel.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );{w, h} = imgSeg << getSize;

```

### Lock

**Syntaxe :** obj &lt;&lt; Lock( state=0|1 )

**Description :** Verrouille l&apos;image dans le segment d&apos;image, de sorte qu&apos;elle ne puisse pas être déplacée, redimensionnée ou pivotée de manière interactive.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << lock( 1 );

```

### Median

**Syntaxe :** obj &lt;&lt; filter("median")

**Description :** Applique un filtre médian sur l&apos;image dans le segment d&apos;image. Il remplace chaque valeur de pixel par la moyenne médiane des pixels environnants.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "median" );

```

### Move

**Syntaxe :** obj &lt;&lt; Move( xcenter, ycenter )

**Description :** Déplace le centre de l&apos;image de sorte qu&apos;il corresponde à l&apos;emplacement x,y spécifié, où xcenter et ycenter sont exprimés dans les coordonnées des axes.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );imgBox = win[framebox( 1 )];imgBox << AddImage( Open( "$SAMPLE_IMAGES/tile.jpg" ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Move( 75, 75 );

```

### Negate

**Syntaxe :** obj &lt;&lt; filter("negate")

**Description :** Applique un filtre sur l&apos;image dans le segment d&apos;image, ce qui permet d&apos;inverser les couleurs. Rouge, vert, bleu deviennent cyan, jaune et magenta ; blanc devient noir ; etc.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "negate" );

```

### Normalize

**Syntaxe :** obj &lt;&lt; filter("normalize")

**Description :** Applique un filtre de normalisation sur l&apos;image dans le segment d&apos;image. Il prend l&apos;étendue des valeurs des pixels de l&apos;image qu&apos;il étire sur l&apos;étendue des couleurs, créant ainsi un plus grand contraste de couleurs.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "normalize" );

```

### Open

**Syntaxe :** obj &lt;&lt; Open( filename )

**Description :** Ouvre un fichier image et ajoute l&apos;image au segment d&apos;image.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );imgBox = win[framebox( 1 )];imgBox << AddImage(	Open( "$SAMPLE_IMAGES/tile.jpg" ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));

```

### Reduce Noise

**Syntaxe :** obj &lt;&lt; filter("reduce noise", radius)

**Description :** Applique un filtre de réduction du bruit sur l&apos;image dans le segment d&apos;image. Il calcule la moyenne d&apos;un pixel par rapport à ses voisins sur la base du rayon. L&apos;étendue utile va de 0 à 5.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "reduce noise", 2.0 );

```

### Remove

**Syntaxe :** obj &lt;&lt; Remove

**Description :** Supprime le segment d&apos;image de la boîte d&apos;affichage.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << remove;

```

### Rotate

**Syntaxe :** obj &lt;&lt; Rotate( degrees )

**Description :** Pivote de segment d&apos;image dans le sens des aiguilles d&apos;une montre en fonction du nombre de degrés spécifié.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << rotate( 45 );

```

### SetSize

**Syntaxe :** obj &lt;&lt; SetSize( {width, height} )

**Description :** Définit la taille (largeur et hauteur) du segment d&apos;image en coordonnées de pixel.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << setSize( {300, 500} );{w, h} = imgSeg << getSize;

```

### Sharpen

**Syntaxe :** obj &lt;&lt; filter("sharpen")

**Description :** Applique un filtre de netteté sur l&apos;image dans le segment d&apos;image, améliorant ainsi la netteté de l&apos;image.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "sharpen" );

```

### Specify Size

**Syntaxe :** obj &lt;&lt; Specify Size

**Description :** Définit les limites du segment d&apos;image. Similaire aux limites définies, sauf en ce qui concerne l&apos;ordre qui est implicite : gauche, haut, droite, bas. Cela pourrait provoquer une déformation de l&apos;image car le ratio hauteur / largeur n&apos;est pas conservé.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << Specify Size( 0, 100, 100, 0 );

```

### Transparency

**Syntaxe :** obj &lt;&lt; Transparency( transparency )

**Description :** Définit la transparence du segment d&apos;image, 0.0 correspondant à totalement transparent et 1.0 correspondant à totalement opaque.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Transparency( 0.5 );

```

