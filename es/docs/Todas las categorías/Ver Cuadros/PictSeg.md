# PictSeg



## Mensajes del elemento

### Bounds

**Sintaxis:** obj << Bounds( left(value), right(value), top(value), bottom(value) )

**Descripción:** Establece las líneas divisorias de PictSeg en coordenadas de los ejes.

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

**Sintaxis:** obj << filter("contrast")

**Descripción:** Aplica un contraste a la imagen en PictSeg. Los valores positivos hacen que la imagen sea más brillante, los valores negativos oscurecen la imagen. El valor útil es de -10 a 10.

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

**Sintaxis:** obj << Crop

**Descripción:** Recorta PictSeg al tamaño especificado, quitando cualquier parte de la imagen que quede fuera de los límites especificados. El orden es izquierda, arriba, derecha, abajo. Esto puede provocar que la imagen se distorsione, ya que no se conserva la relación de aspecto.

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

**Sintaxis:** obj << filter("despeckle")

**Descripción:** Aplica un filtro de desmotado a la imagen en PictSeg para quitar el ruido.

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

**Sintaxis:** obj << filter("edge")

**Descripción:** Aplica un filtro de detección de bordes a la imagen en PictSeg. Los bordes se dibujan en negro y todo lo demás se vuelve blanco.

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

**Sintaxis:** obj << filter("enhance")

**Descripción:** Aplica un filtro de mejora a la imagen en PictSeg, lo que hace que la imagen sea más nítida.

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

**Sintaxis:** obj << Fill Graph

**Descripción:** Establece que los límites sean las extensiones de los ejes, lo que provoca que PictSeg rellene el gráfico. Esto puede provocar que la imagen se distorsione, ya que no se conserva la relación de aspecto.

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

**Sintaxis:** obj << flip both

**Descripción:** Voltea la imagen en PictSeg en dirección vertical y horizontal.

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

**Sintaxis:** obj << flip horizontal

**Descripción:** Voltea la imagen en PictSeg en dirección horizontal.

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

**Sintaxis:** obj << flip vertical

**Descripción:** Voltea la imagen en PictSeg en dirección vertical.

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

**Sintaxis:** obj << filter("gamma")

**Descripción:** Ajusta el valor gamma de la imagen en PictSeg. El rango útil es de 0 a 10. Un valor de 0 a 1 reduce el valor gamma. Un mayor que 1 aumenta el valor gamma.

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

**Sintaxis:** obj << filter("gaussian blur", radius, sigma)

**Descripción:** Aplica un desenfoque a la imagen en PictSeg. El rango útil para el radio es de 0 a 5.

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

**Sintaxis:** {left, right, top, bottom} = obj << Get Bounds

**Descripción:** Devuelve los límites de PictSeg en coordenadas de los ejes en el siguiente orden: izquierda, derecha, arriba y abajo.

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

**Sintaxis:** {width, height} = obj << Get Size

**Descripción:** Devuelve el tamaño de PictSeg en coordenadas de píxeles como ancho y alto.

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

**Sintaxis:** obj << Lock( state=0|1 )

**Descripción:** Bloquea la imagen en PictSeg en su ubicación, por lo que se evita que se mueva, cambie de tamaño o gire de forma interactiva.

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

**Sintaxis:** obj << filter("median")

**Descripción:** Aplica un filtro de mediana a la imagen en PictSeg. Este filtro sustituye cada valor de píxel por la media de la mediana de los píxeles de alrededor.

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

**Sintaxis:** obj << Move( xcenter, ycenter )

**Descripción:** Desplaza el centro de la imagen hasta la ubicación x,y especificada, donde xcenter y ycenter se expresan en coordenadas de los ejes.

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

**Sintaxis:** obj << filter("negate")

**Descripción:** Aplica un filtro a la imagen en PictSeg que reserva los colores. Rojo, verde, azul se convierte en cian, amarillo, magenta, blanco se convierte en negro, etc.

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

**Sintaxis:** obj << filter("normalize")

**Descripción:** Aplica un filtro de normalización a la imagen en PictSeg. Este filtro toma el rango de los valores del píxel de la imagen y los ajusta en el rango de color, por lo que se crea un mayor contraste de colores.

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

**Sintaxis:** obj << Open( filename )

**Descripción:** Abre un archivo de imagen y añade la imagen a PictSeg.

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

**Sintaxis:** obj << filter("reduce noise", radius)

**Descripción:** Aplica un filtro de reducción del ruido a la imagen en PictSeg. Este filtro calcula la media de un píxel con sus vecinos, en función del radio. El rango útil es de 0 a 5.

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

**Sintaxis:** obj << Remove

**Descripción:** Quita PictSeg del cuadro de visualización.

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

**Sintaxis:** obj << Rotate( degrees )

**Descripción:** Gira PictSeg hacia la derecha el número de grados especificado.

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

**Sintaxis:** obj << SetSize( {width, height} )

**Descripción:** Establece el tamaño de PictSeg en coordenadas de píxeles como ancho y alto.

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

**Sintaxis:** obj << filter("sharpen")

**Descripción:** Aplica un filtro de enfoque a la imagen en PictSeg, lo que hace que la imagen sea más nítida.

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

**Sintaxis:** obj << Specify Size

**Descripción:** Establece los límites de PictSeg. Es similar a la acción de establecer límites, pero el orden es izquierda, arriba, derecha, abajo. Esto puede provocar que la imagen se distorsione, ya que no se conserva la relación de aspecto.

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

**Sintaxis:** obj << Transparency( transparency )

**Descripción:** Establece la transparencia de PictSeg, donde 0,0 es completamente transparente y 1,0 es completamente opaco.

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

