# Image



## Constructeurs associés

### New Image

**Syntaxe :** img = Open( filepath, jpg|png|gif|bmp|tif )New Image(&lt;width, height&gt;, &lt;existing image&gt; )

**Description :** Un objet image, qui peut servir à ajouter une image à un cadre ou à une boîte d’affichage.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );

```

### Open

**Syntaxe :** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Description :** Renvoie une référence vers une table de données, ou vers un autre fichier JMP ou objet créé à partir d&apos;un fichier. Si aucun chemin n&apos;est spécifié, la boîte de dialogue Ouvrir s&apos;affiche. Si un chemin vers un répertoire est spécifié, l&apos;explorateur de fichiers du système est ouvert et aucun objet n&apos;est renvoyé. Consultez la syntaxe de référence pour obtenir une description complète des options disponibles.

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
dt2 = Open(
	"$SAMPLE_DATA/Fitness.jmp",
	Select Columns( "Name", "Sex", "Age", "Weight" )
);

```

## Messages d'éléments

### Add Frame

**Syntaxe :** obj &lt;&lt; Add Frame

**Description :** Ajoute un nouveau cadre à une image animée. Le cadre ne contiendra rien jusqu&apos;à ce que Définir les pixels soit utilisé. Un argument de durée facultatif peut être spécifié, lequel indique la durée du cadre en millisecondes. Si l&apos;argument de durée est omis, la durée du cadre actif sera utillisée pour le cadre ajouté. S&apos;il n&apos;y a pas d&apos;autre cadre, une durée par défaut de 100 millisecondes est utilisée.

**JMP Version ajoutée :** 16

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

**Syntaxe :** obj &lt;&lt; Crop( Left( number ), Right( number ), Top( number ), Bottom( number ) )

**Description :** Modifies the image to be the sub-image at the specified pixel coordinates within the existing image.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Crop( Left( 50 ), Right( 300 ), Top( 20 ), Bottom( 200 ) );
obj2 = New Window( "Cropped", img );

```

### Filter

**Syntaxe :** obj &lt;&lt; Filter( despeckle|edge|enhance|median|negate|normalize|sharpen|contrast|gamma|reduce noise|gaussian blur|canny, &lt;number&gt; )

**Description :** Filtre l’image selon l’algorithme spécifié. Le filtrage permet d’éliminer le bruit dans l’image. Le contraste, le gamma et la réduction du bruit requièrent un paramètre (numérique) supplémentaire. Le flou gaussien en requiert deux : le rayon et sigma.

**Exemple 1**

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

**Exemple 2**

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
		largeThreshold( largeThreshold )/*tracing begins when a large-value edge is found*/
	,
		smallThreshold( smallThreshold )/*tracing stops when the edge value gets too small*/
	,
		radius( radius )/*a blur-filter, use 0 for no blurring*/,
		Repeat( sigma )/* number of repeats of a box-blur; 3 approximates a gaussian-blur filter */
	);
	edges << filter( "negate" );/*black on white*/
);
refilter();

```

### Flip Both

**Syntaxe :** obj &lt;&lt; Flip Both

**Description :** Remet l’image à l’horizontale et à la verticale.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Both;
obj2 = New Window( "Diagonal Flip", img );

```

### Flip Horizontal

**Syntaxe :** obj &lt;&lt; Flip Horizontal

**Description :** Remet l’image à l’horizontale.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Horizontal;
obj2 = New Window( "Horizontal Flip", img );

```

### Flip Vertical

**Syntaxe :** obj &lt;&lt; Flip Vertical

**Description :** Retourne l’image vers le bas.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Flip Vertical;
obj2 = New Window( "Vertical Flip", img );

```

### Get Current Frame

**Syntaxe :** obj &lt;&lt; Get Current Frame

**Description :** Renvoit le numéro du cadre actif. Cette valeur sera égale à 0 pour la plupart des images ou, pour les fichiers GIF animés, comprise entre 0 et le nombre de cadres moins un. Les actions, telles que getPixels et setPixels, agiront sur le cadre actif.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get Current Frame();

```

### Get EXIF

**Syntaxe :** obj &lt;&lt; Get EXIF

**Description :** Obtient les données EXIF qui sont enregistrées en interne avec l&apos;image. Un tableau avec les paires de clés/valeurs sera renvoyé.

**JMP Version ajoutée :** 14

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

**Syntaxe :** obj &lt;&lt; Get Frame Durations

**Description :** Renvoie une matrice de durée de pause entre chaque cadre. Le temps est exprimé en millisecondes.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
durs = img << Get Frame Durations();

```

### Get N Frames

**Syntaxe :** obj &lt;&lt; Get N Frames

**Description :** Renvoie le nombre de cadres dans l&apos;image. Pour la plupart des images, ce nombre est un. Pour les fichiers animés GIF, ce nombre pourrait être supérieur à un.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
num = img << Get N Frames();

```

### Get N Loops

**Syntaxe :** obj &lt;&lt; Get N Loops

**Description :** Renvoie le nombre de fois qu&apos;une image animée doit répéter la boucle de sa séquence. Un zéro indique qu&apos;elle doit la répéter à l&apos;infini.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
loops = img << Get N Loops();

```

### Get Path

**Syntaxe :** obj &lt;&lt; Get Path

### Get Pixels

**Syntaxe :** mat = img &lt;&lt; Get Pixels();{r, g, b} = img &lt;&lt; Get Pixels("rgb");{r, g, b, a} = img &lt;&lt; Get Pixels("rgba")

**Description :** Si aucun indicateur de couleur n&apos;est spécifié, une matrice des couleurs JSL représentant les valeurs des pixels est renvoyée. Un indicateur de couleur rgb renverra une liste de trois matrices, rouge, verte et bleue, respectivement. Spécifier rgba renverra le canal alpha (transparence) ainsi que le rouge, le vert et le bleu.

**Exemple 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
m = img << Get Pixels;
Show( m );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b} = img << Get Pixels( "rgb" );

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
{r, g, b, a} = img << Get Pixels( "rgba" );

```

### GetSize

**Syntaxe :** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**Description :** Renvoie une liste contenant la largeur et la hauteur de l’image.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Remove Frame

**Syntaxe :** obj &lt;&lt; Remove Frame

**Description :** Supprime un cadre d&apos;une image animée. L&apos;indice du cadre à supprimer est ignoré.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Remove Frame( 0 );

```

### Rotate

**Syntaxe :** obj &lt;&lt; Rotate( angle )

**Description :** Fait pivoter l’image de l’angle de rotation spécifié.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
Wait( 1 );
img << Rotate( 45 );
obj2 = New Window( "Rotated", img );

```

### Save Image

**Syntaxe :** obj &lt;&lt; Save Image( filePath, image type )

**Description :** Enregistre l&apos;image en respectant l&apos;emplacement et le nom de fichier spécifiés. Le deuxième paramètre indique quel type d&apos;image enregistrer, quelle que soit l&apos;extension utilisée dans le nom de fichier. Les types d&apos;image valides sont notamment les types PNG, JPG, GIF, TIFF, BMP, et PDF. Si aucun type d&apos;image n&apos;est spécifié, ou si le type d&apos;image n&apos;est pas compris, l&apos;image est enregistrée sous la forme d&apos;un fichier PNG.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Save Image( "$TEMP/Mediterranean.jpg", "jpg" );

```

### Scale

**Syntaxe :** obj &lt;&lt; Scale( scale | xscale, yscale )

**Description :** Applique un facteur d&apos;échelle à la hauteur et à la largeur de l&apos;image, ou applique une échelle différente pour la largeur (xscale) et la hauteur (yscale).

**Exemple 1**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 0.5 );
obj2 = New Window( "Tile scaled by 0.5", img );

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << scale( 2, 0.5 );
obj2 = New Window( "Tile scaled by 2 vertically and by 0.5 horizontally", img );

```

### Set Blob

**Syntaxe :** obj &lt;&lt; Set Blob

**Description :** Définit l’image à partir d’un blob.

### Set Current Frame

**Syntaxe :** obj &lt;&lt; Set Current Frame( frame )

**Description :** Définit le numéro du cadre actif. Ce numéro sera égal à 0 pour la plupart des images ou, pour les fichiers GIF animés, compris entre 0 et le nombre de cadres moins un. Les actions, telles que getPixels et setPixels, agiront sur le cadre actif.

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

**Syntaxe :** obj &lt;&lt; Set Frame Duration( duration )

**Description :** Définit la durée du cadre actif dans une image animée. Le temps est spécifié en millisecondes.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set Frame Duration( 1000 );
durs = img << Get Frame Durations();

```

### Set N Loops

**Syntaxe :** obj &lt;&lt; Set N Loops( loops )

**Description :** Définit le nombre de fois où une image animée doit répéter la boucle de sa séquence. Un 0 indique qu&apos;elle doit la répéter à l&apos;infini.

```jsl

Names Default To Here( 1 );
img = New Image( "$SAMPLE_IMAGES/progress.gif" );
img << Set N Loops( 3 );
loops = img << Get N Loops();

```

### Set Pixels

**Syntaxe :** img &lt;&lt; Set Pixels(jslmat);img &lt;&lt; Set Pixels ("rgb", {r, g, b})

**Description :** Définit la ou les matrices de pixels pour l&apos;image. Si une matrice est spécifiée sans indicateur de couleur, elle est traitée comme une matrice des couleurs JSL. Un indicateur de couleur peut être spécifié, comme rgb, pour indiquer que les matrices suivantes sont respectivement rouges, vertes et bleues. Dans ce cas, la taille de toutes les matrices spécifiées doit être la même.

**Exemple 1**

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

**Exemple 2**

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

**Syntaxe :** obj &lt;&lt; SetSize( {width, height} )

**Description :** Définit la taille de l’image en fonction de la hauteur et de la largeur spécifiées.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
img << Set Size( {600, 600} );
obj2 = New Window( "Larger tile(40,40)", img );

```

### Size

**Syntaxe :** {w,h} = pic &lt;&lt; Get Size {w,h} = pic &lt;&lt; Size

**Description :** Renvoie une liste contenant la largeur et la hauteur de l’image.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
obj = New Window( "tile(40,40)", img );
s = {w, h} = img << Get Size;
Show( s );

```

### Transparency

**Syntaxe :** obj &lt;&lt; Transparency( fraction )

**Description :** Applique de la transparence sur une image. Les valeurs valides sont comprises entre 0.0 (transparent) et 1.0 (opaque)

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
win = New Window( "tile(40,40)", img );
Wait( 1 );
img << Transparency( 0.5 );
win << reshow;

```

