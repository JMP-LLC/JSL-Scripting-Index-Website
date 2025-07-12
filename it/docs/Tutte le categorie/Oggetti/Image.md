# Image



## Costruttori associati

### New Image

**Sintassi:** img = Open( filepath, jpg|png|gif|bmp|tif )

New Image(<width, height>, <existing image> )

**Descrizione:** Un oggetto immagine che può essere utilizzato per aggiungere un&apos;immagine a un frame o a un riquadro di visualizzazione.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );

```

### Open

**Sintassi:** Open( filePath, <data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options > )

**Descrizione:** Restituisce un riferimento a una tabella di dati o altro file di JMP o oggetto creato da un file. Se non si specifica alcun percorso, viene visualizzata la finestra di dialogo Apri. Se viene specificato il percorso di una cartella, viene aperto il browser dei file di sistema e non viene restituito alcun oggetto. Consultare Syntax Reference per una descrizione completa delle opzioni disponibili.

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

## Messaggi degli elementi

### Add Frame

**Sintassi:** obj << Add Frame

**Descrizione:** Aggiunge un nuovo frame a un&apos;immagine animata. Il frame non ha contenuto fino a quando viene usata l&apos;opzione Imposta pixel. Si può specificare un argomento di durata facoltativo che indica la durata del frame in millisecondi. Se si omette l&apos;argomento della durata, la durata del frame corrente verrà usato come durata del frame aggiunto. Se non vi sono altri frame, viene usata una durata predefinita di 100 millisecondi.

**JMP Versione aggiunta:** 16

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

**Sintassi:** obj << Crop( Left( number ), Right( number ), Top( number ), Bottom( number ) )

**Descrizione:** Modifies the image to be the sub-image at the specified pixel coordinates within the existing image.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Crop( Left( 50 ), Right( 300 ), Top( 20 ), Bottom( 200 ) );
obj2 = New Window( "Cropped", img );

```

### Filter

**Sintassi:** obj << Filter( despeckle|edge|enhance|median|negate|normalize|sharpen|contrast|gamma|reduce noise|gaussian blur|canny, <number> )

**Descrizione:** Filtra l&apos;immagine sulla base dell&apos;algoritmo specificato. Questa operazione è utile per eliminare i disturbi dell&apos;immagine. I comandi Contrasto, Gamma e Riduci disturbi richiedono un parametro aggiuntivo (numerico). Il comando Sfocatura con funzione gaussiana ne richiede due: raggio e sigma.

**Esempio 1**

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

**Esempio 2**

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

**Sintassi:** obj << Flip Both

**Descrizione:** Capovolge l&apos;immagine nelle due direzioni, orizzontale e verticale.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Both;
obj2 = New Window( "Diagonal Flip", img );

```

### Flip Horizontal

**Sintassi:** obj << Flip Horizontal

**Descrizione:** Capovolge l&apos;immagine in direzione orizzontale.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Horizontal;
obj2 = New Window( "Horizontal Flip", img );

```

### Flip Vertical

**Sintassi:** obj << Flip Vertical

**Descrizione:** Capovolge l&apos;immagine in direzione verticale.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Vertical;
obj2 = New Window( "Vertical Flip", img );

```

### Get Current Frame

**Sintassi:** obj << Get Current Frame

**Descrizione:** Restituisce il numero del frame corrente. Per la maggior parte delle immagini, il valore è 0. Per file GIF animati, il valore può essere fra 0 e uno meno rispetto al numero dei fotogrammi. Azioni, quali getPixels e setPixels, agiscono sul frame corrente.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get Current Frame();

```

### Get EXIF

**Sintassi:** obj << Get EXIF

**Descrizione:** Ottiene i dati EXIF memorizzati all&apos;interno dell&apos;immagine. Verrà restituito un array di coppie chiave/valore.

**JMP Versione aggiunta:** 14

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

**Sintassi:** obj << Get Frame Durations

**Descrizione:** Restituisce una matrice della durata della pausa tra ciascun frame. Il tempo è specificato in millisecondi.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
durs = img << Get Frame Durations();

```

### Get N Frames

**Sintassi:** obj << Get N Frames

**Descrizione:** Restituisce il numero di frame nell&apos;immagine. Per la maggior parte delle immagini sarà uno solo. Per i file GIF animati potrebbero essere più di uno.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get N Frames();

```

### Get N Loops

**Sintassi:** obj << Get N Loops

**Descrizione:** Restituisce il numero di volte in cui un&apos;immagine animata deve effettuare il ciclo della propria sequenza. Un valore pari a zero indica che l&apos;immagine deve effettuare il ciclo indefinitamente.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
loops = img << Get N Loops();

```

### Get Path

**Sintassi:** obj << Get Path

### Get Pixels

**Sintassi:** mat = img << Get Pixels();

{r, g, b} = img << Get Pixels("rgb");

{r, g, b, a} = img << Get Pixels("rgba")

**Descrizione:** Se non viene specificato alcun indicatore di colori, viene restituita una matrice di colori JSL rappresentanti i valori dei pixel. Un indicatore di colori di rgb restituirà un elenco di tre matrici, rossa, verde e blu, rispettivamente. Specificando rgba sarà restituito il canale alfa (trasparenza) oltre al rosso, verde e blu.

**Esempio 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
m = img << Get Pixels;
Show( m );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b} = img << Get Pixels( "rgb" );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b, a} = img << Get Pixels( "rgba" );

```

### GetSize

**Sintassi:** {w,h} = pic << Get Size 

{w,h} = pic << Size

**Descrizione:** Restituisce un elenco con la larghezza e l&apos;altezza dell&apos;immagine.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Remove Frame

**Sintassi:** obj << Remove Frame

**Descrizione:** Rimuove un frame da un&apos;immagine animata. Viene passato l&apos;indice del frame da rimuovere.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Remove Frame( 0 );

```

### Rotate

**Sintassi:** obj << Rotate( angle )

**Descrizione:** Ruota l&apos;immagine dell&apos;angolo specificato.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Rotate( 45 );
obj2 = New Window( "Rotated", img );

```

### Save Image

**Sintassi:** obj << Save Image( filePath, image type )

**Descrizione:** Salva l&apos;immagine nel percorso e con il nome del file specificati. Il secondo parametro indica quale tipo di immagine salvare, indipendentemente dall&apos;estensione utilizzata nel nome del file. I tipi di immagine validi sono PNG, JPG, GIF, TIFF, BMP e PDF. Se non è specificato alcun tipo di immagine o il tipo di immagine specificato non viene riconosciuto, l&apos;immagine viene salvata come file PNG.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Save Image( "$TEMP/Mediterranean.jpg", "jpg" );

```

### Scale

**Sintassi:** obj << Scale( scale | xscale, yscale )

**Descrizione:** Applica una fattore di scala alla larghezza e altezza dell&apos;immagine o scala la larghezza (scalax) e altezza (scalay) indipendentemente.

**Esempio 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 0.5 );
obj2 = New Window( "Tile scaled by 0.5", img );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 2, 0.5 );
obj2 = New Window( "Tile scaled by 2 vertically and by 0.5 horizontally", img );

```

### Set Blob

**Sintassi:** obj << Set Blob

**Descrizione:** Imposta l&apos;immagine da un blob.

### Set Current Frame

**Sintassi:** obj << Set Current Frame( frame )

**Descrizione:** Imposta il numero di frame corrente. Per la maggiore parte delle immagini sarà pari a 0. Per i file GIF animati potrebbe essere tra 0 e uno in meno del numero di frame. Azioni quali getPixels e setPixels agiranno sul frame corrente.

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

**Sintassi:** obj << Set Frame Duration( duration )

**Descrizione:** Imposta la durata del frame corrente in un&apos;immagine animata. Il tempo viene specificato in millisecondi.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set Frame Duration( 1000 );
durs = img << Get Frame Durations();

```

### Set N Loops

**Sintassi:** obj << Set N Loops( loops )

**Descrizione:** Imposta il numero di volte in cui un&apos;immagine animata deve effettuare il ciclo della propria sequenza. Un valore pari a 0 indica che l&apos;immagine deve effettuare il ciclo indefinitamente.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set N Loops( 3 );
loops = img << Get N Loops();

```

### Set Pixels

**Sintassi:** img << Set Pixels(jslmat);

img << Set Pixels ("rgb", {r, g, b})

**Descrizione:** Imposta la matrice, o le matrici, dei pixel per l&apos;immagine. Se viene specificata una matrice senza indicatore di colore, la matrice viene trattata come una matrice di colori JSL. È possibile specificare un indicatore di colori, come rgb, per indicare rispettivamente il rosso, verde e blu delle seguenti matrici. In questo caso le dimensioni di tutte le matrici specificate devono essere le stesse.

**Esempio 1**

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

**Esempio 2**

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

**Sintassi:** obj << SetSize( {width, height} )

**Descrizione:** Imposta le dimensioni dell&apos;immagine sulla base della larghezza e dell&apos;altezza specificate.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Set Size( {600, 600} );
obj2 = New Window( "Larger tile(40,40)", img );

```

### Size

**Sintassi:** {w,h} = pic << Get Size 

{w,h} = pic << Size

**Descrizione:** Restituisce un elenco con la larghezza e l&apos;altezza dell&apos;immagine.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Transparency

**Sintassi:** obj << Transparency( fraction )

**Descrizione:** Applica la trasparenza a un&apos;immagine. I valori validi sono tra 0,0 (trasparente) e 1,0 (opaco)

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
Wait( 1 );
img << Transparency( 0.5 );
win << reshow;

```

