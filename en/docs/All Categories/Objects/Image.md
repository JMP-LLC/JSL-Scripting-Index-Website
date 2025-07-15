# Image



## Associated Constructors

### New Image

**Syntax:** img = Open( filepath, jpg|png|gif|bmp|tif )New Image(&lt;width, height&gt;, &lt;existing image&gt; )

**Description:** A picture object, which can be used for adding a picture to a frame or a display box.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );

```

### Open

**Syntax:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Description:** Returns a reference to a data table or other JMP file or object created from a file. If no path is specified, the Open dialog appears. If a folder path is specified, the system file browser is opened and no object is returned. Refer to the Syntax Reference for a complete description of available options.

```jsl

Names Default To Here( 1 );
/* Data tables, other JMP files, external files:
   Open( filePath,
     <Invisible | Private>,
     <Select Columns( "col", ... )>,
     <Ignore Columns( "col", ... )>,
     <Add to Recent Files(bool)>,
     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>
     <Force Refresh>,
     <Enable Filter Views(bool)>,
     <"file type">
   )
*/
//Basic data table open
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
//Data table open with some options
dt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

## Item Messages

### Add Frame

**Syntax:** obj &lt;&lt; Add Frame

**Description:** Adds a new frame to an animated image. The frame will not contain any content until Set Pixels is used. An optional duration argument can be specified, which indicates the frame duration in milliseconds. If the duration argument is omitted, the duration of the current frame will be used as the duration of the added frame. If there are no other frames, a default duration of 100 milliseconds is used.

```jsl

Names Default To Here( 1 );
dim = 100;
mat0 = J( dim, dim, 0 );
mat1 = J( dim, dim, 1 );
multiImage = New Image( "rgb", {mat1, mat0, mat0} );
multiImage << Add Frame( 2000 );
multiImage << Set Pixels( "rgb", {mat0, mat1, mat0} );
multiImage << Add Frame( 1000 );
multiImage << Set Pixels( "rgb", {mat0, mat0, mat1} );
win = New Window( "Multi-Frame Image", multiImage );
durs = multiImage << Get Frame Durations();
For( i = 0, i < 3, i++,
	multiImage << Set Current Frame( i );
	win << reshow();
	dur = durs[i + 1] / 1000.0;
	Wait( dur );
);
win << Close Window();

```

### Crop

**Syntax:** obj &lt;&lt; Crop( Left( number ), Right( number ), Top( number ), Bottom( number ) )

**Description:** Modifies the image to be the sub-image at the specified pixel coordinates within the existing image.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Crop( Left( 50 ), Right( 300 ), Top( 20 ), Bottom( 200 ) );
obj2 = New Window( "Cropped", img );

```

### Filter

**Syntax:** obj &lt;&lt; Filter( despeckle|edge|enhance|median|negate|normalize|sharpen|contrast|gamma|reduce noise|gaussian blur|canny, &lt;number&gt; )

**Description:** Filters the image based on the specified algorithm. Filtering is useful for cleaning up noise in the image. Contrast, gamma and reduce noise require one additional (numeric) parameter. Gaussian blur requires two: radius and sigma.

**Example 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "tile(40,40)", New Image( img ) );
Wait( 1 );
img << Filter( "negate" );
New Window( "Neg filter", img ); 
//contrast filter example 
img2 = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
obj = New Window( "Black Rhino", New Image( img2 ) );
Wait( 1 );
img3 = New Image( img2 );/*save a copy for later*/ img2 << Filter( "Contrast", 4 );
New Window( "Contrast filter", New Image( img2 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
/* http://en.wikipedia.org/wiki/Canny_edge_detector */ 
radius = 1;
sigma = 3;
smallThreshold = .01;
largeThreshold = .3;
file = Pick File(
	"pick picture",
	"$SAMPLE_IMAGES",
	{"pictures|png;jpg", "All Files|*"},
	1,
	0,
	"black rhino footprint.jpg"
);
original = New Image( file );
edges = New Image( original );
New Window( "canny",
	H List Box(
		Slider Box(
			0,
			10,
			radius,
			refilter();
			hb << reshow;
			t1 << settext( Char( Floor( radius ) ) );,
			<<setwidth( 100 )
		),
		Text Box( "radius of smoothing filter=" ),
		t1 = Text Box( Char( Floor( radius ) ) )
	),
	H List Box(
		Slider Box(
			1,
			5,
			sigma,
			refilter();
			hb << reshow;
			t2 << settext( Char( Floor( sigma ) ) );,
			<<setwidth( 100 )
		),
		Text Box( "smoothing repeat=" ),
		t2 = Text Box( Char( Floor( sigma ) ) )
	),
	H List Box(
		sb1 = Slider Box(
			.0001,
			1,
			largeThreshold,
			If( smallThreshold >= largeThreshold,
				sb0 << set( largeThreshold / 2 )
			);
			refilter();
			hb << reshow;
			t3 << settext( Char( largeThreshold ) );
			t4 << settext( Char( smallThreshold ) );,
			<<setwidth( 300 )
		),
		Text Box( "large (start) threshold=" ),
		t3 = Text Box( Char( largeThreshold ) )
	),
	H List Box(
		sb0 = Slider Box(
			.0001,
			1,
			smallThreshold,
			If( smallThreshold >= largeThreshold,
				sb1 << set( smallThreshold + .1 )
			);
			refilter();
			hb << reshow;
			t4 << settext( Char( smallThreshold ) );
			t3 << settext( Char( largeThreshold ) );,
			<<setwidth( 300 )
		),
		Text Box( "small (stop) threshold=" ),
		t4 = Text Box( Char( smallThreshold ) )
	),
	Spacer Box( size( 10, 20 ) ),
	hb = H List Box( original, edges )
);
refilter = Function( {},
	edges << setpixels( original << getpixels );
    //edges << filter( "gaussian blur", radius, sigma ); //you could use the gaussian blur filter by setting radius(0), below
	edges << filter(
		"canny"/* here it is! */,
		largeThreshold( largeThreshold )/*tracing begins when a large-value edge is found*/,
		smallThreshold( smallThreshold )/*tracing stops when the edge value gets too small*/,
		radius( radius )/*a blur-filter, use 0 for no blurring*/,
		Repeat( sigma )/* number of repeats of a box-blur; 3 approximates a gaussian-blur filter */
	);
	edges << filter( "negate" );/*black on white*/
);
refilter();

```

### Flip Both

**Syntax:** obj &lt;&lt; Flip Both

**Description:** Flips the image both horizontally and vertically.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Both;
obj2 = New Window( "Diagonal Flip", img );

```

### Flip Horizontal

**Syntax:** obj &lt;&lt; Flip Horizontal

**Description:** Flips the image horizontally.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Horizontal;
obj2 = New Window( "Horizontal Flip", img );

```

### Flip Vertical

**Syntax:** obj &lt;&lt; Flip Vertical

**Description:** Flips the image upside down.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Vertical;
obj2 = New Window( "Vertical Flip", img );

```

### Get Current Frame

**Syntax:** obj &lt;&lt; Get Current Frame

**Description:** Returns the current frame number. For most images, the value is 0. For animated GIF files, the value can be between 0 and one less than the number of frames. Actions, such as getPixels and setPixels, will act on the current frame.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get Current Frame();

```

### Get EXIF

**Syntax:** obj &lt;&lt; Get EXIF

**Description:** Gets EXIF data that is stored internally with the image. An array of key/value pairs will be returned.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/tile.jpg" );
exifData = img << getEXIF();
key = exifData << first;
While( !Is Empty( key ),
	v = exifData << getValue( key );
	Show( key, v );
	key = exifData << next( key );
);

```

### Get Frame Durations

**Syntax:** obj &lt;&lt; Get Frame Durations

**Description:** Returns a matrix of the pause duration between each frame. The time is specified in milliseconds.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
durs = img << Get Frame Durations();

```

### Get N Frames

**Syntax:** obj &lt;&lt; Get N Frames

**Description:** Returns the number of frames in the image. For most images this will be one. For animated GIF files this could be more than one.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get N Frames();

```

### Get N Loops

**Syntax:** obj &lt;&lt; Get N Loops

**Description:** Returns the number of times an animated image should loop through its sequence. A value of zero indicates it should loop indefinitely.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
loops = img << Get N Loops();

```

### Get Path

**Syntax:** obj &lt;&lt; Get Path

### Get Pixels

**Syntax:** mat = img &lt;&lt; Get Pixels();{r, g, b} = img &lt;&lt; Get Pixels("rgb");{r, g, b, a} = img &lt;&lt; Get Pixels("rgba")

**Description:** If no color designator is specified, a matrix of JSL colors representing the pixel values is returned. A color designator of  rgb will return a list of three matrices, red, green, and blue, respectively. Specifying rgba will return the alpha (transparency) channel as well as the red, green, and blue.

**Example 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
m = img << Get Pixels;
Show( m );

```

**Example 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b} = img << Get Pixels( "rgb" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b, a} = img << Get Pixels( "rgba" );

```

### GetSize

**Syntax:** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**Description:** Returns a list containing the width and height of the image.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Remove Frame

**Syntax:** obj &lt;&lt; Remove Frame

**Description:** Removes a frame from an animated image. The index of the frame to remove is passed.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Remove Frame( 0 );

```

### Rotate

**Syntax:** obj &lt;&lt; Rotate( angle )

**Description:** Rotates the image by the specified angle of rotation.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Rotate( 45 );
obj2 = New Window( "Rotated", img );

```

### Save Image

**Syntax:** obj &lt;&lt; Save Image( filePath, image type )

**Description:** Saves the image in the specified location and file name. The second parameter indicates what type of image to save, regardless of the extension used in the file name. Valid image types include PNG, JPG, GIF, TIFF, BMP, and PDF. If no image type is specified, or the specified image type is not understood, the image is saved as a PNG file.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Save Image( "$TEMP/Mediterranean.jpg", "jpg" );

```

### Scale

**Syntax:** obj &lt;&lt; Scale( scale | xscale, yscale )

**Description:** Applies a scale factor to the width and height of the image or scales the width (xscale) and height (yscale) independently.

**Example 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 0.5 );
obj2 = New Window( "Tile scaled by 0.5", img );

```

**Example 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 2, 0.5 );
obj2 = New Window( "Tile scaled by 2 vertically and by 0.5 horizontally", img );

```

### Set Blob

**Syntax:** obj &lt;&lt; Set Blob

**Description:** Sets the image from a blob.

### Set Current Frame

**Syntax:** obj &lt;&lt; Set Current Frame( frame )

**Description:** Sets the current frame number. For most images this will be 0. For animated GIF files, this can be between 0 and one less than the number of frames. Actions, such as getPixels and setPixels, will act on the current frame.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get N Frames();
win = New Window( "Progress", img );
For( i = 0, i < num, i++,
	img << Set Current Frame( i );
	win << reshow();
	Wait( 1 );
);
win << Close Window();

```

### Set Frame Duration

**Syntax:** obj &lt;&lt; Set Frame Duration( duration )

**Description:** Set the duration of the current frame in an animated image. The time is specified in milliseconds.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set Frame Duration( 1000 );
durs = img << Get Frame Durations();

```

### Set N Loops

**Syntax:** obj &lt;&lt; Set N Loops( loops )

**Description:** Sets the number of times an animated image should loop through its sequence. A value of 0 indicates that the image should loop indefinitely.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set N Loops( 3 );
loops = img << Get N Loops();

```

### Set Pixels

**Syntax:** img &lt;&lt; Set Pixels(jslmat);img &lt;&lt; Set Pixels ("rgb", {r, g, b})

**Description:** Sets the pixel matrix, or matrices, for the image. If one matrix is specified with no color designator, the matrix is treated as a matrix of JSL colors. A color designator can be specified, such as rgb, to indicate the following matrices are red, green, and blue, respectively. In this case, the size of all the specified matrices should be the same.

**Example 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
m = img << Get Pixels;
Wait( 1 );
n = m`;
img << Set Pixels( n );
win2 = New Window( "Transformed", img );

```

**Example 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b} = img << Get Pixels( "rgb" );
Wait( 1 );
i = .30 * r + .59 * g + .11 * b;
img << Set Pixels( "rgb", {i, i, i} );
win2 = New Window( "Gray Scale", img );

```

### SetSize

**Syntax:** obj &lt;&lt; SetSize( {width, height} )

**Description:** Sets the image size based on the specified width and height.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Set Size( {600, 600} );
obj2 = New Window( "Larger tile(40,40)", img );

```

### Size

**Syntax:** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**Description:** Returns a list containing the width and height of the image.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Transparency

**Syntax:** obj &lt;&lt; Transparency( fraction )

**Description:** Applies transparency to an image. Valid values are between 0.0 (transparent) and 1.0 (opaque)

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
Wait( 1 );
img << Transparency( 0.5 );
win << reshow;

```

