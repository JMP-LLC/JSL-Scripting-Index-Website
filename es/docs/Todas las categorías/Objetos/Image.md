# Image



## Constructores asociados

### New Image

**Sintaxis:** img = Open( filepath, jpg|png|gif|bmp|tif )

New Image(<width, height>, <existing image> )

**Descripción:** Objeto imagen que se puede usar para agregar una imagen a un marco o un cuadro de visualización.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );

```

### Open

**Sintaxis:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Descripción:** Devuelve una referencia a una tabla de datos u otro archivo JMP o un objeto creado a partir de un archivo. Si no se especifica ninguna ruta, aparece el cuadro de diálogo Abrir. Si se especifica una ruta de carpetas, se abre el explorador de archivos del sistema y no se devuelve ningún objeto. Consulte la referencia de sintaxis para obtener una descripción completa de las opciones disponibles.

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

## Mensajes del elemento

### Add Frame

**Sintaxis:** obj << Add Frame

**Descripción:** Añade un nuevo marco a una imagen animada. El cuadro no tendrá contenido hasta que se utilice Establecer píxeles. Se puede especificar un argumento de duración opcional, lo que indica la duración del marco en milisegundos. Si se omite el argumento de duración, la duración del marco actual se utilizará como la duración del marco añadido. Si no hay otros marcos, se utilizará una duración predeterminada de 100 milisegundos.

**JMP Versión agregada:** 16

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

**Sintaxis:** obj << Crop( Left( number ), Right( number ), Top( number ), Bottom( number ) )

**Descripción:** Modifies the image to be the sub-image at the specified pixel coordinates within the existing image.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Crop( Left( 50 ), Right( 300 ), Top( 20 ), Bottom( 200 ) );
obj2 = New Window( "Cropped", img );

```

### Filter

**Sintaxis:** obj << Filter( despeckle|edge|enhance|median|negate|normalize|sharpen|contrast|gamma|reduce noise|gaussian blur|canny, <number> )

**Descripción:** Filtra la imagen sobre la base del algoritmo especificado. El filtrado resulta útil para limpiar el ruido de la imagen. El contraste, el valor gamma y la reducción de ruido requieren un parámetro adicional (numérico). Para el desenfoque gaussiano se requieren dos parámetros: el radio y sigma.

**Ejemplo 1**

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

**Ejemplo 2**

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

**Sintaxis:** obj << Flip Both

**Descripción:** Voltea la imagen horizontal y verticalmente.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Both;
obj2 = New Window( "Diagonal Flip", img );

```

### Flip Horizontal

**Sintaxis:** obj << Flip Horizontal

**Descripción:** Voltea la imagen horizontalmente.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Horizontal;
obj2 = New Window( "Horizontal Flip", img );

```

### Flip Vertical

**Sintaxis:** obj << Flip Vertical

**Descripción:** Voltea la imagen de arriba abajo.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Vertical;
obj2 = New Window( "Vertical Flip", img );

```

### Get Current Frame

**Sintaxis:** obj << Get Current Frame

**Descripción:** Devuelve el número de marco actual. Para la mayoría de las imágenes, el valor es 0. Para los archivos GIF animados, el valor puede ser entre 0 y 1 menos que el número de marcos. Las acciones, como getPixels y setPixels, actuarán en el marco actual.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get Current Frame();

```

### Get EXIF

**Sintaxis:** obj << Get EXIF

**Descripción:** Obtiene datos EXIF que se guardan internamente con la imagen. Se devolverá un arreglo de pares clave/valor.

**JMP Versión agregada:** 14

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

**Sintaxis:** obj << Get Frame Durations

**Descripción:** Devuelve una matriz de la duración de pausa entre marcos. El tiempo se especifica en milisegundos.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
durs = img << Get Frame Durations();

```

### Get N Frames

**Sintaxis:** obj << Get N Frames

**Descripción:** Devuelve el número de marcos de la imagen. En la mayoría de imágenes, es uno. En el caso de archivos de GIF animados puede ser mayor que uno.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get N Frames();

```

### Get N Loops

**Sintaxis:** obj << Get N Loops

**Descripción:** Devuelve el número de veces que una imagen animada debe repetir cíclicamente su secuencia. Un valor cero indica que debería repetirse cíclicamente de forma indefinida.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
loops = img << Get N Loops();

```

### Get Path

**Sintaxis:** obj << Get Path

### Get Pixels

**Sintaxis:** mat = img << Get Pixels();

{r, g, b} = img << Get Pixels("rgb");

{r, g, b, a} = img << Get Pixels("rgba")

**Descripción:** Si no se especifica ningún designador de color, se devuelve una matriz de colores JSL que representan los valores del píxel. Un designador de color de rgb devolverá una lista de tres matrices, roja, verde y azul, respectivamente. Al especificar rgba se devolverá el canal alfa (transparencia), así como rojo, verde y azul.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
m = img << Get Pixels;
Show( m );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b} = img << Get Pixels( "rgb" );

```

**Ejemplo 3**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b, a} = img << Get Pixels( "rgba" );

```

### GetSize

**Sintaxis:** {w,h} = pic << Get Size 

{w,h} = pic << Size

**Descripción:** Devuelve una lista que contiene el ancho y la altura de la imagen.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Remove Frame

**Sintaxis:** obj << Remove Frame

**Descripción:** Quita un marco de una imagen animada. Se indica el índice del marco que se va a quitar.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Remove Frame( 0 );

```

### Rotate

**Sintaxis:** obj << Rotate( angle )

**Descripción:** Gira la imagen el ángulo de rotación especificado.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Rotate( 45 );
obj2 = New Window( "Rotated", img );

```

### Save Image

**Sintaxis:** obj << Save Image( filePath, image type )

**Descripción:** Guarda la imagen en la ubicación especificada y con el nombre de archivo introducido. El segundo parámetro indica qué tipo de imagen guardar, sin importar la extensión utilizada en el nombre de archivo. Algunos tipos de imagen válidos son PNG, JPG, GIF, TIFF, BMP y PDF. Si no se especifica ningún tipo de imagen, o no se entiende el tipo de imagen especificado, la imagen se guarda como archivo PNG.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Save Image( "$TEMP/Mediterranean.jpg", "jpg" );

```

### Scale

**Sintaxis:** obj << Scale( scale | xscale, yscale )

**Descripción:** Aplica un factor de escala al ancho y la altura de la imagen o escala el ancho (xscale) y la altura (yscale) de forma independiente.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 0.5 );
obj2 = New Window( "Tile scaled by 0.5", img );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 2, 0.5 );
obj2 = New Window( "Tile scaled by 2 vertically and by 0.5 horizontally", img );

```

### Set Blob

**Sintaxis:** obj << Set Blob

**Descripción:** Establece la imagen a partir de un blob.

### Set Current Frame

**Sintaxis:** obj << Set Current Frame( frame )

**Descripción:** Establece el número de marco actual. En la mayoría de imágenes, esto será 0. En el caso de archivos de GIF animados, esto puedes ser entre 0 y el número de marcos menos uno. Las acciones, como getPixels y setPixels, actúan sobre el marco actual.

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

**Sintaxis:** obj << Set Frame Duration( duration )

**Descripción:** Establece la duración del marco actual en una imagen animada. El tiempo se especifica en milisegundos.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set Frame Duration( 1000 );
durs = img << Get Frame Durations();

```

### Set N Loops

**Sintaxis:** obj << Set N Loops( loops )

**Descripción:** Establece el número de veces que una imagen animada debe repetirse en su secuencia. Un valor de 0 indica que la imagen debe repetirse indefinidamente.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set N Loops( 3 );
loops = img << Get N Loops();

```

### Set Pixels

**Sintaxis:** img << Set Pixels(jslmat);

img << Set Pixels ("rgb", {r, g, b})

**Descripción:** Establece la matriz del píxel, o las matrices, para la imagen. Si se especifica una matriz sin un designador de color, la matriz se trata como una matriz de colores JSL. Se puede especificar un designador de color, como rgb, para indicar que las siguientes matrices son roja, verde y azul, respectivamente. En este caso, el tamaño de todas las matrices especificadas debe ser el mismo.

**Ejemplo 1**

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

**Ejemplo 2**

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

**Sintaxis:** obj << SetSize( {width, height} )

**Descripción:** Establece el tamaño de la imagen según el ancho y la altura especificados.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Set Size( {600, 600} );
obj2 = New Window( "Larger tile(40,40)", img );

```

### Size

**Sintaxis:** {w,h} = pic << Get Size 

{w,h} = pic << Size

**Descripción:** Devuelve una lista que contiene el ancho y la altura de la imagen.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Transparency

**Sintaxis:** obj << Transparency( fraction )

**Descripción:** Aplica transparencia a una imagen. Los valores válidos están comprendidos entre el 0,0 (transparente) y 1,0 (opaco).

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
Wait( 1 );
img << Transparency( 0.5 );
win << reshow;

```

