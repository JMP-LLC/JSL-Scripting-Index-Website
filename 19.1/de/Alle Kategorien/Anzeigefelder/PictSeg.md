# PictSeg



## Elementmeldungen

### Bounds

**Syntax:** obj &lt;&lt; Bounds( left(value), right(value), top(value), bottom(value) )

**Beschreibung:** Legt die Grenzen des PictSeg in Achsenkoordinaten fest.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ) );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) );{l, r, t, b} = imgSeg << getBounds;

```

### Contrast

**Syntax:** obj &lt;&lt; filter("contrast")

**Beschreibung:** Wendet Kontrast auf das Bild im PictSeg an. Ein positiver Wert macht das Bild heller, ein negativer Wert macht das Bild dunkler. Nützlicher Wert ist -10 bis 10.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "contrast", 3 );

```

### Crop

**Syntax:** obj &lt;&lt; Crop

**Beschreibung:** Schneidet das PictSeg auf die angegebene Größe und entfernt alle Teile des Bilds außerhalb der angegebenen Ränder. Für die Reihenfolge gilt: links, oben, rechts, unten. Dadurch wird das Bild möglicherweise verzerrt, weil das Seitenverhältnis nicht beibehalten wird.

```jsl

imgBox = Graph Box( frameSize( 451, 451 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << Crop( 10, 90, 90, 10 );

```

### Despeckle

**Syntax:** obj &lt;&lt; filter("despeckle")

**Beschreibung:** Wendet einen Entstörfilter auf das Bild im PictSeg an, um Störungen zu entfernen.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "despeckle" );

```

### Edge

**Syntax:** obj &lt;&lt; filter("edge")

**Beschreibung:** Wendet einen Kantenerkennungsfilter auf das Bild im PictSeg an. Die Kanten werden schwarz gezeichnet, alles andere wird weiß.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "edge" );

```

### Enhance

**Syntax:** obj &lt;&lt; filter("enhance")

**Beschreibung:** Wendet einen Verstärkungsfilter auf das Bild im PictSeg an, um das Bild schärfer erscheinen zu lassen.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "enhance" );

```

### Fill Graph

**Syntax:** obj &lt;&lt; Fill Graph

**Beschreibung:** Legt für die Ränder die Länge der Achsen fest, wodurch das PictSeg den Graphen ausfüllt. Dadurch wird das Bild möglicherweise verzerrt, weil das Seitenverhältnis nicht beibehalten wird.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ), bounds( Left( 0 ), Right( 50 ), top( 50 ), bottom( 0 ) ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << fill graph;

```

### Flip both

**Syntax:** obj &lt;&lt; flip both

**Beschreibung:** Spiegelt das Bild im PictSeg in vertikaler und horizontaler Richtung.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip both;

```

### Flip horizontal

**Syntax:** obj &lt;&lt; flip horizontal

**Beschreibung:** Spiegelt das Bild im PictSeg in horizontaler Richtung.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip horizontal;

```

### Flip vertical

**Syntax:** obj &lt;&lt; flip vertical

**Beschreibung:** Spiegelt das Bild im PictSeg in vertikaler Richtung.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << flip vertical;

```

### Gamma

**Syntax:** obj &lt;&lt; filter("gamma")

**Beschreibung:** Passt das Gamma im Bild im PictSeg an. Nützlicher Bereich ist 0 bis 10. Ein Wert von 0 bis 1 verringert das Gamma. Ein Wert größer als 1 erhöht das Gamma.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "gamma", 1.5 );

```

### Gaussian Blur

**Syntax:** obj &lt;&lt; filter("gaussian blur", radius, sigma)

**Beschreibung:** Wendet einen Weichzeichner auf das Bild im PictSeg an. Nützlicher Bereich für den Radius ist 0 bis 5.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "gaussian blur", 0.0, 1.0 );

```

### Get Bounds

**Syntax:** {left, right, top, bottom} = obj &lt;&lt; Get Bounds

**Beschreibung:** Gibt die Grenzen des PictSeg in Achsenkoordinaten in der Reihenfolge links, rechts, oben und unten zurück.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ) );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );{l, r, t, b} = imgSeg << getBounds;

```

### Get Size

**Syntax:** {width, height} = obj &lt;&lt; Get Size

**Beschreibung:** Gibt die Größe des PictSeg in Pixelkoordinaten als Breite und Höhe zurück.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );{w, h} = imgSeg << getSize;

```

### Lock

**Syntax:** obj &lt;&lt; Lock( state=0|1 )

**Beschreibung:** Sperrt das Bild im PictSeg an seiner Stelle, so dass es nicht interaktiv verschoben, in der Größe geändert oder gedreht werden kann.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << lock( 1 );

```

### Median

**Syntax:** obj &lt;&lt; filter("median")

**Beschreibung:** Wendet einen Medianfilter auf das Bild im PictSeg an. Dadurch wird jeder Pixelwert durch den Median der umgebenden Pixel ersetzt.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "median" );

```

### Move

**Syntax:** obj &lt;&lt; Move( xcenter, ycenter )

**Beschreibung:** Verschiebt den Mittelpunkt des Bilds an die angegeben Stelle x,y, wobei xcenter und ycenter in Achsenkoordinaten ausgedrückt werden.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );imgBox = win[framebox( 1 )];imgBox << AddImage( Open( "$SAMPLE_IMAGES/tile.jpg" ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Move( 75, 75 );

```

### Negate

**Syntax:** obj &lt;&lt; filter("negate")

**Beschreibung:** Wendet einen Filter auf das Bild im PictSeg an, der die Farben umkehrt. Rot, Grün, Blau werden zu Cyan, Gelb, Magenta, Weiß wird Schwarz usw.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "negate" );

```

### Normalize

**Syntax:** obj &lt;&lt; filter("normalize")

**Beschreibung:** Wendet einen Normalisierungsfilter auf das Bild im PictSeg an. Dabei wird der Bereich der Pixelwerte im Bild über den Farbbereich gestreckt, um einen breiteren Kontrast der Farben zu erzeugen.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "normalize" );

```

### Open

**Syntax:** obj &lt;&lt; Open( filename )

**Beschreibung:** Öffnet eine Bilddatei und fügt das Bild zum PictSeg hinzu.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );imgBox = win[framebox( 1 )];imgBox << AddImage(	Open( "$SAMPLE_IMAGES/tile.jpg" ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));

```

### Reduce Noise

**Syntax:** obj &lt;&lt; filter("reduce noise", radius)

**Beschreibung:** Wendet einen Rauschunterdrückungsfilter auf das Bild im PictSeg an. Dadurch wird ein Pixel basierend auf dem Radius mit seinen Nachbarn gemittelt. Nützlicher Bereich ist 0 bis 5.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "reduce noise", 2.0 );

```

### Remove

**Syntax:** obj &lt;&lt; Remove

**Beschreibung:** Entfernt das PictSeg aus dem Anzeigefeld.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << remove;

```

### Rotate

**Syntax:** obj &lt;&lt; Rotate( degrees )

**Beschreibung:** Dreht das PictSeg um die angegebene Gradzahl im Uhrzeigersinn.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << rotate( 45 );

```

### SetSize

**Syntax:** obj &lt;&lt; SetSize( {width, height} )

**Beschreibung:** Legt die Größe des PictSeg in Pixelkoordinaten als Breite und Höhe fest.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << setSize( {300, 500} );{w, h} = imgSeg << getSize;

```

### Sharpen

**Syntax:** obj &lt;&lt; filter("sharpen")

**Beschreibung:** Wendet einen Schärfefilter auf das Bild im PictSeg an, um das Bild schärfer erscheinen zu lassen.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Filter( "sharpen" );

```

### Specify Size

**Syntax:** obj &lt;&lt; Specify Size

**Beschreibung:** Legt die Ränder des PictSeg fest. Ähnlich wie das Festlegen von Rändern, mit Ausnahme der Reihenfolge, für die gilt: links, oben, rechts, unten. Dadurch wird das Bild möglicherweise verzerrt, weil das Seitenverhältnis nicht beibehalten wird.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage( Image( img ) );imgSeg = imgBox << FindSeg( PictSeg( 1 ) );Wait( 1 );imgSeg << Specify Size( 0, 100, 100, 0 );

```

### Transparency

**Syntax:** obj &lt;&lt; Transparency( transparency )

**Beschreibung:** Legt die Transparenz für das PictSeg fest. Dabei ist 0,0 vollständig transparent und 1,0 ist vollständig undurchsichtig.

```jsl

imgBox = Graph Box( frameSize( 150, 150 ), SuppressAxes );win = New Window( "Image", imgBox );img = New Image( "$SAMPLE_IMAGES/tile.jpg" );imgBox = win[framebox( 1 )];imgBox << AddImage(	Image( img ),	bounds( Left( 0 ), Right( 100 ), top( 100 ), bottom( 0 ) ));imgSeg = imgBox << FindSeg( PictSeg( 1 ) );imgSeg << Transparency( 0.5 );

```

