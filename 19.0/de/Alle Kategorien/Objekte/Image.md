# Image



## Elementmeldungen

### Add Frame

**Syntax:** obj &lt;&lt; Add Frame

**Beschreibung:** Fügt einem animierten Bild einen neuen Frame hinzu. Der Frame enthält nur dann Inhalt, wenn „Pixel festlegen“ verwendet wird. Ein optionales Dauer-Argument kann angegeben werden, das die Frame-Dauer in Millisekunden angibt. Wenn das Dauer-Argument weggelassen wird, wird die Dauer des aktuellen Frames als Dauer des hinzugefügten Frames verwendet. Wenn keine anderen Frames vorhanden sind, wird eine Standarddauer von 100 Millisekunden verwendet.

**JMP Version hinzugefügt:** 16

```jsl

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

**Beschreibung:** Modifies the image to be the sub-image at the specified pixel coordinates within the existing image.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Crop( Left( 50 ), Right( 300 ), Top( 20 ), Bottom( 200 ) );
obj2 = New Window( "Cropped", img );

```

### Filter

**Syntax:** obj &lt;&lt; Filter( despeckle|edge|enhance|median|negate|normalize|sharpen|contrast|gamma|reduce noise|gaussian blur|canny, &lt;number&gt; )

**Beschreibung:** Filtert das Bild basierend auf dem angegebenen Algorithmus. Filtern ist nützlich, um Rauschen im Bild zu bereinigen. Kontrast, Gamma und Rauschreduktion benötigen einen zusätzlichen (numerischen) Parameter. Gaußscher Weichzeichner benötigt zwei: Radius und Sigma.

#### Beispiel 1

```jsl

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

#### Beispiel 2

```jsl

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

**Beschreibung:** Spiegelt das Bild horizontal und vertikal.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Both;
obj2 = New Window( "Diagonal Flip", img );

```

### Flip Horizontal

**Syntax:** obj &lt;&lt; Flip Horizontal

**Beschreibung:** Spiegelt das Bild horizontal.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Horizontal;
obj2 = New Window( "Horizontal Flip", img );

```

### Flip Vertical

**Syntax:** obj &lt;&lt; Flip Vertical

**Beschreibung:** Spiegelt das Bild vertikal.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Vertical;
obj2 = New Window( "Vertical Flip", img );

```

### Get Current Frame

**Syntax:** obj &lt;&lt; Get Current Frame

**Beschreibung:** Legt die aktuelle Frameanzahl fest. Bei den meisten Bildern ist der Wert 0. Bei animierten GIF-Bildern kann dieser Wert zwischen 0 und der Framezahl minus 1 liegen. Aktionen wie getPixels und setPixels werden mit dem aktuellen Frame ausgeführt.

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get Current Frame();

```

### Get EXIF

**Syntax:** obj &lt;&lt; Get EXIF

**Beschreibung:** Ruft EXIF-Daten ab, die intern mit dem Bild gespeichert sind. Ein Array aus Schlüssel/Wert-Paaren wird zurückgegeben.

**JMP Version hinzugefügt:** 14

```jsl

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

**Beschreibung:** Gibt eine Matrix der Pausendauer zwischen jedem Frame zurück. Die Zeit ist in Millisekunden angegeben.

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );
durs = img << Get Frame Durations();

```

### Get N Frames

**Syntax:** obj &lt;&lt; Get N Frames

**Beschreibung:** Gibt die Anzahl der Frames im Bild zurück. Bei den meisten Bildern ist dies 1. Bei animierten GIF-Dateien können es mehrere sein.

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get N Frames();

```

### Get N Loops

**Syntax:** obj &lt;&lt; Get N Loops

**Beschreibung:** Gibt an, wie häufig ein animiertes Bild seine Sequenz durchlaufen soll. Der Wert 0 gibt an, dass es auf unbestimmte Zeit laufen soll.

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );
loops = img << Get N Loops();

```

### Get Path

**Syntax:** obj &lt;&lt; Get Path

### Get Pixels

**Syntax:** mat = img &lt;&lt; Get Pixels();{r, g, b} = img &lt;&lt; Get Pixels("rgb");{r, g, b, a} = img &lt;&lt; Get Pixels("rgba")

**Beschreibung:** Wenn keine Farbkennung angegeben wird, wird eine Matrix der JSL-Farben mit den Pixelwerten zurückgegeben. Die Farbkennung rgb gibt eine Liste mit drei Matrizen mit jeweils rot, grün und blau zurück. Bei Angabe von rgba werden der Alphakanal (Transparenz) sowie rot, grün und blau zurückgegeben.

#### Beispiel 1

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
m = img << Get Pixels;
Show( m );

```

#### Beispiel 2

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b} = img << Get Pixels( "rgb" );

```

#### Beispiel 3

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b, a} = img << Get Pixels( "rgba" );

```

### GetSize

**Syntax:** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**Beschreibung:** Gibt eine Liste mit der Breite und Höhe des Bilds zurück.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Remove Frame

**Syntax:** obj &lt;&lt; Remove Frame

**Beschreibung:** Entfernt einen Frame von einem animierten Bild. Der Index des zu entfernenden Frames wird übergeben.

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Remove Frame( 0 );

```

### Rotate

**Syntax:** obj &lt;&lt; Rotate( angle )

**Beschreibung:** Dreht das Bild um den angegebenen Drehwinkel.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Rotate( 45 );
obj2 = New Window( "Rotated", img );

```

### Save Image

**Syntax:** obj &lt;&lt; Save Image( filePath, image type )

**Beschreibung:** Speichert das Bild am angegebenen Speicherort und mit dem angegebenen Dateinamen. Der zweite Parameter gibt an, welche Art von Bild gespeichert werden soll, unabhängig von der Erweiterung im Dateinamen. Gültige Bildtypen sind u.a. PNG, JPG, GIF, TIFF, BMP und PDF. Wird kein Bildtyp angegeben oder wird der angegebene Bildtyp nicht erkannt, wird das Bild als PNG-Datei gespeichert.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Save Image( "$TEMP/Mediterranean.jpg", "jpg" );

```

### Scale

**Syntax:** obj &lt;&lt; Scale( scale | xscale, yscale )

**Beschreibung:** Wendet einen Skalierungsfaktor auf die Breite und Höhe des Bilds an oder skaliert die Breite (xscale) und Höhe (yscale) unabhängig voneinander.

#### Beispiel 1

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 0.5 );
obj2 = New Window( "Tile scaled by 0.5", img );

```

#### Beispiel 2

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 2, 0.5 );
obj2 = New Window( "Tile scaled by 2 vertically and by 0.5 horizontally", img );

```

### Set Blob

**Syntax:** obj &lt;&lt; Set Blob

**Beschreibung:** Legt das Bild aus einem Blob fest.

### Set Current Frame

**Syntax:** obj &lt;&lt; Set Current Frame( frame )

**Beschreibung:** Legt die aktuelle Frameanzahl fest. Bei den meisten Bildern ist dies 0. Bei animierten GIF-Bildern kann dieser Wert zwischen 0 und der Framezahl minus 1 liegen. Aktionen wie getPixels und setPixels werden mit dem aktuellen Frame ausgeführt.

```jsl

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

**Beschreibung:** Legt die Dauer des aktuellen Frames in einem animierten Bild fest. Die Zeit ist in Millisekunden angegeben.

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set Frame Duration( 1000 );
durs = img << Get Frame Durations();

```

### Set N Loops

**Syntax:** obj &lt;&lt; Set N Loops( loops )

**Beschreibung:** Legt fest, wie häufig ein animiertes Bild seine Sequenz durchlaufen soll. Der Wert 0 gibt an, dass das Bild auf unbestimmte Zeit laufen soll.

```jsl

img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set N Loops( 3 );
loops = img << Get N Loops();

```

### Set Pixels

**Syntax:** img &lt;&lt; Set Pixels(jslmat);img &lt;&lt; Set Pixels ("rgb", {r, g, b})

**Beschreibung:** Legt die Pixelmatrix bzw. die Pixelmatrizen für das Bild fest. Wenn eine Matrix ohne Farbkennung angegeben wird, wird die Matrix als eine Matrix der JSL-Farben behandelt. Es kann eine Farbkennung wie rgb angegeben werden, um darauf hinzuweisen, dass die folgenden Matrizen jeweils rot, grün und blau sind. In diesem Fall muss die Größe aller angegebenen Matrizen gleich sein.

#### Beispiel 1

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
m = img << Get Pixels;
Wait( 1 );
n = m`;
img << Set Pixels( n );
win2 = New Window( "Transformed", img );

```

#### Beispiel 2

```jsl

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

**Beschreibung:** Legt die Bildgröße basierend auf der angegebenen Breite und Höhe fest.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Set Size( {600, 600} );
obj2 = New Window( "Larger tile(40,40)", img );

```

### Size

**Syntax:** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**Beschreibung:** Gibt eine Liste mit der Breite und Höhe des Bilds zurück.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Transparency

**Syntax:** obj &lt;&lt; Transparency( fraction )

**Beschreibung:** Wendet Transparenz auf ein Bild an. Gültige Werte liegen zwischen 0,0 (transparent) und 1,0 (undurchsichtig).

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
Wait( 1 );
img << Transparency( 0.5 );
win << reshow;

```

## Zugehörige Konstruktoren

### New Image

**Syntax:** img = Open( filepath, jpg|png|gif|bmp|tif )New Image(&lt;width, height&gt;, &lt;existing image&gt; )

**Beschreibung:** Ein Bildobjekt, das verwendet werden kann, um ein Bild zu einem Rahmen oder einem Anzeigefeld hinzuzufügen.

```jsl

img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );

```

### Open

**Syntax:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Beschreibung:** Gibt eine Referenz auf eine Datentabelle oder eine andere JMP-Datei oder auf ein über eine Datei erstelltes Objekt zurück. Wenn kein Pfad angegeben ist, wird das Dialogfeld „Öffnen“ angezeigt. Wenn ein Ordnerpfad angegeben ist, wird der Dateibrowser des Systems geöffnet und kein Objekt zurückgegeben. Eine vollständige Beschreibung der verfügbaren Optionen finden Sie in der Syntaxreferenz.

```jsl

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

