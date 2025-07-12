# PictSeg



## Item Messages

### Bounds

**Syntax:** obj << Bounds( left(value), right(value), top(value), bottom(value) )

**Description:** Sets the boundaries of the PictSeg in axes coordinates.

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

**Syntax:** obj << filter("contrast")

**Description:** Applies contrast to the image in the PictSeg. A positive value makes the image brighter, a negative value makes the image darker. Useful value is -10 to 10.

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

**Syntax:** obj << Crop

**Description:** Crops the PictSeg to the specified size, removing any portion of the image outside the specified bounds. The order is implied as left, top, right, bottom. This might cause the image to be distorted as the aspect ratio is not preserved.

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

**Syntax:** obj << filter("despeckle")

**Description:** Applies a despeckling filter to the image in the PictSeg, to remove noise.

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

**Syntax:** obj << filter("edge")

**Description:** Applies an edge detection filter to the image in the PictSeg. Edges are drawn as black, everything else becomes white.

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

**Syntax:** obj << filter("enhance")

**Description:** Applies an enhancement filter to the image in the PictSeg, making the image appear crisper.

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

**Syntax:** obj << Fill Graph

**Description:** Sets the bounds to be the extents of the axes, causing the PictSeg to fill the graph. This might cause the image to be distorted as the aspect ratio is not preserved.

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

**Syntax:** obj << flip both

**Description:** Flips the image in the PictSeg in both a vertical and horizontal direction.

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

**Syntax:** obj << flip horizontal

**Description:** Flips the image in the PictSeg in a horizontal direction.

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

**Syntax:** obj << flip vertical

**Description:** Flips the image in the PictSeg in a vertical direction.

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

**Syntax:** obj << filter("gamma")

**Description:** Adjusts the gamma in the image in the PictSeg. Useful range is 0 to 10. A value of 0 to 1, decreases the gamma. A value greater than 1 increases the gamma.

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

**Syntax:** obj << filter("gaussian blur", radius, sigma)

**Description:** Applies a blur to the image in the PictSeg. Useful range for radius is 0 to 5.

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

**Syntax:** {left, right, top, bottom} = obj << Get Bounds

**Description:** Returns the boundaries of the PictSeg in axes coordinates in the order of left, right, top and bottom.

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

**Syntax:** {width, height} = obj << Get Size

**Description:** Returns the size of the PictSeg in pixel coordinates as width and height.

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

**Syntax:** obj << Lock( state=0|1 )

**Description:** Locks the image in the PictSeg in place, preventing it from being moved, resized or rotated interactively.

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

**Syntax:** obj << filter("median")

**Description:** Applies a median filter to the image in the PictSeg. This replaces each pixel value with the median average of the surrounding pixels.

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

**Syntax:** obj << Move( xcenter, ycenter )

**Description:** Moves the center of the image to the specified x,y location, where xcenter and ycenter are expressed in axes coordinates.

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

**Syntax:** obj << filter("negate")

**Description:** Applies a filter to the image in the PictSeg which reverses the colors. Red, green, blue becomes cyan, yellow magenta, white becomes black, etc.

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

**Syntax:** obj << filter("normalize")

**Description:** Applies a normalization filter to the image in the PictSeg. This takes the range of the pixel values in the image and stretches them out across the color range, creating a wider contrast of colors.

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

**Syntax:** obj << Open( filename )

**Description:** Opens an image file and adds the image to the PictSeg.

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

**Syntax:** obj << filter("reduce noise", radius)

**Description:** Applies a noise reduction filter to the image in the PictSeg. This averages a pixel with its neighbors, based on the radius. Useful range is 0 to 5.

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

**Syntax:** obj << Remove

**Description:** Removes the PictSeg from the display box.

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

**Syntax:** obj << Rotate( degrees )

**Description:** Rotates the PictSeg in a clockwise direction by the specified number of degrees.

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

**Syntax:** obj << SetSize( {width, height} )

**Description:** Sets the size of the PictSeg in pixel coordinates as width and height.

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

**Syntax:** obj << filter("sharpen")

**Description:** Applies a sharpening filter to the image in the PictSeg, making the image appear crisper.

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

**Syntax:** obj << Specify Size

**Description:** Sets the bounds of the PictSeg. Similar to set bounds except the order is implied as left, top, right, bottom. This might cause the image to be distorted as the aspect ratio is not preserved.

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

**Syntax:** obj << Transparency( transparency )

**Description:** Sets the transparency for the PictSeg where 0.0 is completely transparent and 1.0 is completely opaque.

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

