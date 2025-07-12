# PictSeg



## Messaggi degli elementi

### Bounds

**Sintassi:** obj << Bounds( left(value), right(value), top(value), bottom(value) )

**Descrizione:** Imposta i limiti del segmento immagine in coordinate degli assi.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ) );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage( Image( img ) );
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) );
{l, r, t, b} = imgSeg << getBounds;

```

### Contrast

**Sintassi:** obj << filter("contrast")

**Descrizione:** Applica un contrasto all&apos;immagine nel segmento immagine. Un valore positivo rende l&apos;immagine più luminosa, un valore negativo rende l&apos;immagine più scura. Il range utile dei valori va da -10 a 10.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "contrast", 3 );

```

### Crop

**Sintassi:** obj << Crop

**Descrizione:** Ritaglia il segmento immagine alle dimensioni specificate rimuovendo qualsiasi porzione dell&apos;immagine al di fuori dei limiti specificati. L&apos;ordine implicito è sinistra, alto, destra, basso. L&apos;immagine potrebbe pertanto risultare distorta in quanto non vengono conservate le proporzioni.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 451, 451 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
Wait( 1 );
imgSeg << Crop( 10, 90, 90, 10 );

```

### Despeckle

**Sintassi:** obj << filter("despeckle")

**Descrizione:** Applica un filtro all&apos;immagine nel segmento immagine per rimuovere il rumore.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "despeckle" );

```

### Edge

**Sintassi:** obj << filter("edge")

**Descrizione:** Applica un filtro di rilevamento dei bordi all&apos;immagine nel segmento immagine. I bordi sono disegnati in nero mentre tutto il resto diventa bianco.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "edge" );

```

### Enhance

**Sintassi:** obj << filter("enhance")

**Descrizione:** Applica un filtro di miglioramento all&apos;immagine nel segmento immagine rendendone più nitido l&apos;aspetto.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "enhance" );

```

### Fill Graph

**Sintassi:** obj << Fill Graph

**Descrizione:** Imposta i limiti pari all&apos;estensione degli assi, causando il riempimento del grafico da parte del segmento immagine. L&apos;immagine potrebbe pertanto risultare distorta in quanto non vengono conservate le proporzioni.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 50 ), top( 50 ), bottom( 0 ) ) );
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
Wait( 1 );
imgSeg << fill graph;

```

### Flip both

**Sintassi:** obj << flip both

**Descrizione:** Capovolge l&apos;immagine nel segmento immagine sia in senso verticale che orizzontale.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << flip both;

```

### Flip horizontal

**Sintassi:** obj << flip horizontal

**Descrizione:** Capovolge l&apos;immagine nel segmento immagine in senso orizzontale.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << flip horizontal;

```

### Flip vertical

**Sintassi:** obj << flip vertical

**Descrizione:** Capovolge l&apos;immagine nel segmento immagine in senso verticale.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << flip vertical;

```

### Gamma

**Sintassi:** obj << filter("gamma")

**Descrizione:** Regola la gamma nell&apos;immagine nel segmento immagine. Il  range utile va da 0 a 10. Un valore da 0 a 1 diminuisce la gamma. Un valore maggiore di 1 aumenta la gamma.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "gamma", 1.5 );

```

### Gaussian Blur

**Sintassi:** obj << filter("gaussian blur", radius, sigma)

**Descrizione:** Applica una sfocatura all&apos;immagine nel segmento immagine. Il range utile per il raggio va da 0 a 5.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "gaussian blur", 0.0, 1.0 );

```

### Get Bounds

**Sintassi:** {left, right, top, bottom} = obj << Get Bounds

**Descrizione:** Restituisce i limiti del segmento immagine in coordinate degli assi nell&apos;ordine sinistra, destra, alto e basso.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ) );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
{l, r, t, b} = imgSeg << getBounds;

```

### Get Size

**Sintassi:** {width, height} = obj << Get Size

**Descrizione:** Restituisce le dimensioni del segmento immagine in coordinate dei pixel quali larghezza e altezza.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
{w, h} = imgSeg << getSize;

```

### Lock

**Sintassi:** obj << Lock( state=0|1 )

**Descrizione:** Blocca l&apos;immagine nel segmento immagine in posizione evitando che venga spostata, ridimensionata o ruotata interattivamente.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << lock( 1 );

```

### Median

**Sintassi:** obj << filter("median")

**Descrizione:** Applica un filtro mediano all&apos;immagine nel segmento immagine. Questa operazione sostituisce ogni valore di pixel con il valore mediano dei pixel circostanti.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "median" );

```

### Move

**Sintassi:** obj << Move( xcenter, ycenter )

**Descrizione:** Sposta il centro dell&apos;immagine alla posizione x,y specificata, dove xcentro e ycentro sono espressi in coordinate dell&apos;asse.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
imgBox = win[framebox( 1 )];
imgBox << AddImage( Open( "$SAMPLE_IMAGES/tile.jpg" ) );
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Move( 75, 75 );

```

### Negate

**Sintassi:** obj << filter("negate")

**Descrizione:** Applica un filtro all&apos;immagine nel segmento immagine che inverte i colori. Rosso, verde e blu diventano ciano, giallo e magenta, il bianco diventa nero, ecc.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "negate" );

```

### Normalize

**Sintassi:** obj << filter("normalize")

**Descrizione:** Applica un filtro di normalizzazione all&apos;immagine nel segmento immagine. Rileva il range dei valori dei pixel dell&apos;immagine e li estende al range di colori creando un contrasto di colori più ampio.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "normalize" );

```

### Open

**Sintassi:** obj << Open( filename )

**Descrizione:** Apre un file di immagine e aggiunge l&apos;immagine al segmento immagine.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Open( "$SAMPLE_IMAGES/tile.jpg" ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);

```

### Reduce Noise

**Sintassi:** obj << filter("reduce noise", radius)

**Descrizione:** Applica un filtro di riduzione del rumore all&apos;immagine nel segmento immagine. Calcola la media di un pixel rispetto ai vicini sulla base del raggio. Il range utile va da 0 a 5.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "reduce noise", 2.0 );

```

### Remove

**Sintassi:** obj << Remove

**Descrizione:** Rimuove il segmento immagine dal riquadro di visualizzazione.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
Wait( 1 );
imgSeg << remove;

```

### Rotate

**Sintassi:** obj << Rotate( degrees )

**Descrizione:** Ruota il segmento immagine in senso orario del numero di gradi specificato.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << rotate( 45 );

```

### SetSize

**Sintassi:** obj << SetSize( {width, height} )

**Descrizione:** Imposta le dimensioni del segmento immagine in coordinate dei pixel quali larghezza e altezza.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << setSize( {300, 500} );
{w, h} = imgSeg << getSize;

```

### Sharpen

**Sintassi:** obj << filter("sharpen")

**Descrizione:** Applica un filtro di nitidezza all&apos;immagine nel segmento immagine rendendone più nitido l&apos;aspetto.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Filter( "sharpen" );

```

### Specify Size

**Sintassi:** obj << Specify Size

**Descrizione:** Imposta i limiti del segmento immagine. Simile a Imposta limiti ad eccezione dell&apos;ordine implicito che qui è sinistra, alto, destra, basso. L&apos;immagine potrebbe pertanto risultare distorta in quanto non vengono conservate le proporzioni.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage( Image( img ) );
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
Wait( 1 );
imgSeg << Specify Size( 0, 100, 100, 0 );

```

### Transparency

**Sintassi:** obj << Transparency( transparency )

**Descrizione:** Imposta la trasparenza per il segmento immagine dove 0.0 è completamente trasparente e 1.0 è completamente opaco.

```jsl

Names Default To Here( 1 );
imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );
win = New Window( "Image", imgBox );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
imgBox = win[framebox( 1 )];
imgBox << AddImage(
	Image( img ),
	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) )
);
imgSeg = imgBox << FindSeg( PictSeg( 1 ) );
imgSeg << Transparency( 0.5 );

```

