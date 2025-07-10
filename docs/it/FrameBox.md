# FrameBox



### Add Graphics Script

**Sintassi:** obj << Add Graphics Script( <"Back" | "Front" | position>, <Description("name")>, <"Selected Layer">, <Scale IDs(XID, YID)>, script )

**Descrizione:** Inserisce uno script da disegnare entro questo frame. Gli elementi selezionati sono sempre sopra quelli non selezionati. Se si specifica un livello selezionato, questo script verrà richiamato durante il secondo passaggio di disegno, quando vengono disegnati gli elementi selezionati.

**Esempio 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[frame box( 1 )];
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {1.0, 0.5, 0.0} );
	Polygon( [60, 72, 57], [75, 120, 120] );
);

```

**Esempio 2**

```js

Names Default To Here( 1 );

gbox = Graph Box(
	Frame Size( 300, 300 ),
	X Axis( Scale ID( 1 ), Side( 1 ), Min( 1 ), Max( 100 ), Inc( 5 ) ),
	X Axis( Scale ID( 2 ), Side( 2 ), Min( 4 ), Max( 50 ), Inc( 3 ) ),
	Y Axis( Scale ID( 3 ), Min( -100 ), Max( 200 ) ),
	Y Axis( Scale ID( 4 ), Side( 2 ), Min( 1 ), Max( 10 ), Inc( 1 ) ), 

);

fbox = gbox[frame box( 1 )];

fbox << Add Graphics Script(
	Scale IDs( 1, 4 ), //use scale ID's 1 and 4 for this graphics script
	Pen Color( "Green" );
	Line( [20 50 80], [4 3 6] );
);
New Window( "Example", gbox );

```

**Esempio 3**

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
table = New Table( "test table",
	Add Rows( 150000 ),
	<<New Column( "X", "Numeric", <<Set Each Value( Random Normal() ) ),
	<<New Column( "Y", "Numeric", <<Set Each Value( Random Normal() ) )
);
b = Bivariate( X( :x ), Y( :y ) );
table << select rows( 1 :: 10000 );
Report( b )[Frame Box( 1 )] << Add Graphics Script(
	Description( "Red Line Above Selected" ),
	"selected layer",
	Pen Color( "Red" );
	Pen Size( 5 );
	Line( [-5, 5], [-5, 5] );
);
Report( b )[Frame Box( 1 )] << Add Graphics Script(
	Description( "Green Line Below Selected Above Unselected" ),
	Pen Color( "Green" );
	Pen Size( 3 );
	Line( [5, -5], [-5, 5] );
);

```

### Add Image

**Sintassi:** obj << Add Image( image | open("image filename"), <bounds( left(value), top(value), bottom(value), right(value) ) | move(centerX, centerY)> )

**Descrizione:** 

Aggiunge una immagine al frame.



Si può fare riferimento a una immagine esistente (già creata con un comando new image() o open()) oppure si può specificare un file di immagine direttamente con il parametro open(). Si può indicare la posizione dell&apos;immagine nel frame mediante il comando move(), che specifica dove va posizionato il centro delle immagini in base alle unità degli assi. Oppure si possono indicare le dimensioni e la posizione dell&apos;immagine nel frame specificando i bounds().

```js

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/windmap.png", "png" );
w = New Window( "View Image",
	Graph Box(
		FrameSize( 500, 500 ),
		X Scale( 0, 100 ),
		Y Scale( 0, 100 ),
		<<Add Image(
			image( img ),
			bounds( top( 90 ), Left( 10 ), bottom( 10 ), Right( 90 ) )
		)
	)
);

```

### Add Line Annotation

**Sintassi:** obj << Add Line Annotation

**Descrizione:** Aggiunge una linea sopra il riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Sintassi:** obj << Add Pin Annotation

**Descrizione:** Aggiunge un&apos;annotazione sopra il riquadro di visualizzazione. La maggior parte degli attributi (come Riga indice, IDUnico e PtTrovato) è progettata solo per uso interno.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 17 ),
				Index Row( 17 ),
				UniqueID( -960001792 ),
				FoundPt( {238, 219} ),
				Origin( {64.9765625, 142} ),
				Offset( {-174, -40} ),
				Tag Line( 1 ),
				Font( "Helvetica", 11, "Plain" )
			)
		)
	)
);

```

### Add Polygon Annotation

**Sintassi:** obj << Add Polygon Annotation

**Descrizione:** Aggiunge un poligono sopra il riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Polygon Annotation(
	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),
	Color( "Red" ),
	Closed( 1 )
);

```

### Add Simple Shape Annotation

**Sintassi:** obj << Add Simple Shape Annotation

**Descrizione:** Aggiunge una forma semplice sopra il riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Sintassi:** obj << Add Text Annotation

**Descrizione:** Aggiunge testo sopra il riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);

```

### Append

**Sintassi:** obj << Append( db2 )

**Descrizione:** Aggiunge db2 alla struttura di visualizzazione dopo db.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Append Seg

**Sintassi:** obj << Append Seg( display seg )

**Descrizione:** Aggiunge un segmento di visualizzazione alla casella del frame.

```js

Names Default To Here( 1 );
x = [20, 40, 60, 80];
New Window( "Example",
	Graph Box( Frame Size( 300, 120 ), Append Seg( Marker Seg( x, x ), Line Seg( x, x ) ) ),
	Graph Box( Frame Size( 300, 120 ) )
);
gb2 = Current Report()[FrameBox( 2 )];
gb2 << append seg( Current Report()[FrameBox( 1 )] << find seg( Marker Seg( 1 ) ) );

```

### Background Color

**Sintassi:** obj << Background Color( color );

color = obj << Get Background Color

**Descrizione:** Se è impostato un colore di sfondo, il riquadro è riempito con il colore di sfondo prima di visualizzarne il contenuto. Se non è impostato alcun colore di sfondo, traspare lo sfondo e il contenuto dei riquadri.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Background Map

**Sintassi:** obj << Background Map( <Images("None" | "Simple Earth" | "Detailed Earth" | "Nasa Server" | ("Web Map Service", url, layer) , <Transparency(0-1)> )> | <Boundaries("None" | Shape File)> )

**Descrizione:** 

Aggiunge una mappa di sfondo al frame.



Le immagini sono mappe rasterizzate e supportano la trasparenza. I limiti sono mappe vettoriali, definite da un shapefile, e possono essere creati dall&apos;utente, che può specificare una immagine, un limite o entrambi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hurricanes.jmp" );
plot = Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :"Wind (Knots)"n ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Speed( 1 ),
	Time Index( 2117.70195 ),
	Trail Bubbles( 1 ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position( -88.679, 59.73 )
);
rplot = plot << report;
framebox = rplot[Frame Box( 1 )];
framebox << Background Map(
	Images( "Simple Earth", Transparency( 0.7 ) ),
	Boundaries( "World" )
);

```

### Border

**Sintassi:** obj << Border( sides );

sides = obj << Get Border

**Descrizione:** I bordi sono linee continue tracciate attorno alla parte esterna di un riquadro di visualizzazione. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai bordi orizzontali e verticali.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Border Color

**Sintassi:** obj << Border Color( color );

color = obj << Get Border Color

**Descrizione:** Colore facoltativo che sostituisce il colore di default per i bordi dei riquadri.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Bottom

**Sintassi:** obj << Bottom( state=0|1 )

**Descrizione:** Mostra/Nasconde un bordo sul lato inferiore del frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Bottom( 0 );

```

### Bring Window To Front

**Sintassi:** obj << Bring Window To Front

**Descrizione:** Porta la finestra in primo piano.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Sintassi:** obj << Child

**Descrizione:** Restituisce il nodo di livello inferiore a questo riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
axisChild = axisParent << child();
Print( axisChild << Class Name() );

```

### Child Seg

**Sintassi:** obj << Child Seg

**Descrizione:** Restituisce l&apos;elemento figlio del segmento di visualizzazione della casella del frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[Frame Box( 1 )] << Child Seg();

```

### Class Name

**Sintassi:** obj << Class Name

**Descrizione:** Restituisce il nome della classe di visualizzazione per questo riquadro.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**Sintassi:** obj << Clone Box

**Descrizione:** Crea una nuova copia del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**Sintassi:** obj << Close Window( <"NoSave"> )

**Descrizione:** Chiude la finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Customizations

**Sintassi:** obj << Copy Customizations

**Descrizione:** Copia uno script che contiene impostazioni personalizzate per il grafico.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Marker Drawing Mode( outlined );
framebox1 << Copy Customizations;
framebox2 << Paste Customizations;

```

### Copy Data

**Sintassi:** obj << Copy Data

**Descrizione:** copia i dati delimitati da tabulazioni da una matrice o tabella negli Appunti.

```js

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Frame Contents

**Sintassi:** obj << Copy Frame Contents

**Descrizione:** Crea un testo di journal contenente le impostazioni per questo frame e lo copia negli Appunti.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
biv << Fit Line;
framebox1 << Copy Frame Contents;
framebox2 << Paste Frame Contents;

```

### Copy Frame Settings

**Sintassi:** obj << Copy Frame Settings

**Descrizione:** Crea uno script contenente le impostazioni per questo frame e lo copia negli Appunti.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Background Color( "Green" );
framebox1 << Copy Frame Settings;
framebox2 << Paste Frame Settings;

```

### Copy Graph

**Sintassi:** obj << Copy Graph

**Descrizione:** Trasferisce negli Appunti un&apos;immagine del grafico con gli assi.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**Sintassi:** obj << Copy Picture

**Descrizione:** Trasferisce negli Appunti un&apos;immagine del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Copy Polygons

**Sintassi:** obj << Copy Polygons

**Descrizione:** Salva negli Appunti una copia dei poligoni che si trovano nel frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
pa = framebox << Add Polygon Annotation(
	Points( {144, 53}, {182, 30}, {213, 80}, {181, 95} )
);
pa << Closed( 1 );
framebox << Copy Polygons;

```

### Customize

**Sintassi:** obj << Customize

**Descrizione:** Cambia le proprietà del contenuto del grafico.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Customize;

```

### Delete Box

**Sintassi:** obj << Delete Box

**Descrizione:** Elimina il riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Deselect

**Sintassi:** obj << Deselect

**Descrizione:** Deseleziona questo oggetto per essere utilizzato dai comandi del menu Modifica.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
selected = 0;
New Window( "Example",
	ex = Button Box( "Press Me",
		selected = !selected;
		refresh;
	)
);
refresh = Function( {},
	If( selected,
		ex << Select,
		ex << Deselect
	)
);

```

### Dispatch

**Sintassi:** obj << Dispatch( {outline node, ...}, display element, display element type, command )

**Descrizione:** Invia command a una sezione specificata della struttura di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Dispatch Segs

**Sintassi:** obj << Dispatch Segs( command )

**Descrizione:** Invia il comando a tutti gli elementi visivi (&apos;seg&apos;) del riquadro di visualizzazione.

**JMP Versione aggiunta:** 15

### DispatchSeg

**Sintassi:** obj << DispatchSeg( command )

**Descrizione:** Invia il comando al riquadro di visualizzazione.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Distribution(
	Continuous Distribution( Column( :weight ), Fit Distribution( Normal ) ),
	Nominal Distribution( Column( :age ) ),
	SendToReport(
		Dispatch( {"weight"}, "Distrib Histogram", FrameBox,
			{DispatchSeg(
				Hist Seg( 1 ),
				{Line Style( "Dotted" ), Fill Color( {0, 128, 0} ), Histogram Color( -32768 )
				}
			), DispatchSeg( Line Seg( 1 ), {Line Color( {0, 0, 255} ), Line Width( 5 )} )}
		)
	)
);

```

### Edit Graphics Script

**Sintassi:** obj << Edit Graphics Script

**Descrizione:** Modifica gli script già installati in questo frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[frame box( 1 )];
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {1.0, 0.5, 0.0} );
	Polygon( [60, 72, 57], [75, 120, 120] );
);
framebox << Edit Graphics Script;

```

### Enabled

**Sintassi:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Descrizione:** Un oggetto non abilitato non risponderà agli input della tastiera o del mouse. Questa proprietà è ereditata da oggetti secondari, pertanto un oggetto contenitore non abilitato causerà la disabilitazione di tutti gli oggetti dipendenti.

```js

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Fill Selection Mode

**Sintassi:** obj << Fill Selection Mode( "Modalità preferita"|"Selezionati con pattern"|"Selezionati più scuri"|"Selezionato riquadrato"|"Selezionato lo stesso colore"|"Non selezionato ombreggiato" )

**Descrizione:** Imposta lo stile di selezione per i riempimenti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = Distribution( Continuous Distribution( Column( :height ) ), Histograms Only );
rdist = dist << report;
dt << Select Where( dt:age == 12 );
framebox = rdist[Frame Box( 1 )];
framebox << Fill Selection Mode( "Selected Darker" );

```

### Find

**Sintassi:** obj << Find

**Descrizione:** Restituisce un riquadro di visualizzazione con argument indicato.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Find Seg

**Sintassi:** obj << Find Seg( display seg )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
ms = rbiv[Frame Box( 1 )] << Find Seg( Marker Seg( 1 ) );
ms << delete;

```

### Find Segs

**Sintassi:** obj << Find Segs

**JMP Versione aggiunta:** 15

### Frame Size

**Sintassi:** obj << Frame Size

**Descrizione:** Cambia la dimensione del frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Frame Size( 300, 300 );

```

### Get Annotation

**Sintassi:** obj << Get Annotation

**Descrizione:** Restituisce la prima annotazione ancorata a questo riquadro di visualizzazione. È possibile accedere ad altre annotazioni utilizzando Sib() sul risultato.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);
annotation = rbiv << Get Annotation;
annotation << delete;

```

### Get Background Color

**Sintassi:** obj << Background Color( color );

color = obj << Get Background Color

**Descrizione:** Se è impostato un colore di sfondo, il riquadro è riempito con il colore di sfondo prima di visualizzarne il contenuto. Se non è impostato alcun colore di sfondo, traspare lo sfondo e il contenuto dei riquadri.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Get Background Fill

**Sintassi:** obj << Get Background Fill

**Descrizione:** Restituisce lo stato (0|1) del colore di riempimento dello sfondo del grafico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
//Set background color
framebox << Background Color( "red" );
//Wait to see the color change
Wait( 1 );
//Turn off background fill color
framebox << Set Background Fill( 0 );
val1 = framebox << Get Background Fill;

```

### Get Border

**Sintassi:** obj << Border( sides );

sides = obj << Get Border

**Descrizione:** I bordi sono linee continue tracciate attorno alla parte esterna di un riquadro di visualizzazione. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai bordi orizzontali e verticali.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Get Border Color

**Sintassi:** obj << Border Color( color );

color = obj << Get Border Color

**Descrizione:** Colore facoltativo che sostituisce il colore di default per i bordi dei riquadri.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Get Content Size

**Sintassi:** obj << Get Content Size

**Descrizione:** Restituisce le dimensioni del contenuto nella finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**Sintassi:** obj << Get Display Path( parent box, <receiver expr>, <Mode("XPath"|"Subscript")> )

**Descrizione:** Ottiene un&apos;espressione relativamente robusta per navigare tra parent box e obj. Non si garantisce la stabilità di questo percorso in tutte le versioni di JMP. receiver expr è incorporato nell&apos;espressione di output se fornita. In caso contrario viene utilizzata in sostituzione l&apos;espressione fornita per parent box. Come mostrato nell&apos;esempio, questo messaggio è utile principalmente per aumentare la robustezza di un percorso già disponibile. La modalità XPath è predefinita.

**Di base**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

**Modalità indice**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

```

### Get Enabled

**Sintassi:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Descrizione:** Un oggetto non abilitato non risponderà agli input della tastiera o del mouse. Questa proprietà è ereditata da oggetti secondari, pertanto un oggetto contenitore non abilitato causerà la disabilitazione di tutti gli oggetti dipendenti.

```js

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get Fill Selection Mode

**Sintassi:** obj << Get Fill Selection Mode

**Descrizione:** Restituisce lo stile di selezione per i riempimenti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = Distribution( Continuous Distribution( Column( :height ) ), Histograms Only );
rdist = dist << report;
dt << Select Where( dt:age == 12 );
framebox = rdist[Frame Box( 1 )];
framebox << Fill Selection Mode( "Selected Darker" );
framebox << Get Fill Selection Mode;

```

### Get HTML

**Sintassi:** obj << Get HTML( <format> )

**Descrizione:** Restituisce una stringa che contiene l&apos;origine HTML del riquadro di visualizzazione.

**Esempio 1**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**Esempio 2**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Sintassi:** width = obj << Get Height

**Descrizione:** Restituisce l&apos;altezza del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**Sintassi:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Descrizione:** L&apos;allineamento orizzontale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Get Image

**Sintassi:** image = obj << Get Image

**Descrizione:** Restituisce un riferimento all&apos;immagine di sfondo.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
op = Overlay Plot( X( :subject ), Y( :miles ), Separate Axes( 1 ) );
opr = op << report;
fb = opr[Frame Box( 1 )];
fb << Add Image(
	Open( Convert File Path( "$SAMPLE_IMAGES/black rhino footprint.jpg" ) ),
	Transparency( 0.9 ),
	Rotate( 90 ),
	Bounds(
		Left( 0.135416666666667 ),
		Right( 3.26041666666667 ),
		Top( 11.8333333333333 ),
		Bottom( -1 )
	),
	SetSize( {300, 210} )
);
fb << Marker Size( 8 );
Print( fb << Get Image );

```

### Get Journal

**Sintassi:** obj << Get Journal

**Descrizione:** Restituisce una stringa che contiene l&apos;origine journal del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**Sintassi:** obj << Margin( sides );

sides = obj << Get Margin

**Descrizione:** Il margine aggiunge spazio tra il bordo del riquadro e i riquadri adiacenti. Usare argomenti con nome, oppure fornire un elenco di valori. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai margini orizzontali e verticali.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Marker Selection Mode

**Sintassi:** obj << Get Marker Selection Mode

**Descrizione:** Restituisce lo stile di selezione dell&apos;indicatore

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Selection Mode( "Selected Haloed" );
framebox << Get Marker Selection Mode;

```

### Get Marker Size

**Sintassi:** obj << Get Marker Size

**Descrizione:** Restituisce la dimensione dell&apos;indicatore grafico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Size( 4 );
Print( framebox << Get Marker Size() );

```

### Get Max Size

**Sintassi:** width,height = obj << Get Max Size

**Descrizione:** Restituisce la dimensione massima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**Sintassi:** width,height = obj << Get Min Size

**Descrizione:** Restituisce la dimensione minima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

```

### Get Namespace

**Sintassi:** obj << Get Namespace

**Descrizione:** Restituisce lo spazio dei nomi associato a questo oggetto di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get On Close

**Sintassi:** obj << Get On Close

**Descrizione:** Restituisce lo script o la funzione che verrà eseguita alla chiusura della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);
Show( w << Get On Close );

```

### Get Padding

**Sintassi:** obj << Padding( sides );

sides = obj << Get Padding

**Descrizione:** La spaziatura interna aggiunge spazio tra il contenuto e il bordo del riquadro. Usare argomenti con nome, oppure fornire un elenco di valori. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati alle spaziature interne orizzontali e verticali.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Sintassi:** obj << Get Page Setup

**Descrizione:** Ottieni le informazioni di impostazione della pagina per il pdf

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Sintassi:** obj << Get Picture( <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Descrizione:** Cattura db come un oggetto immagine. L&apos;argomento facoltativo Scale effettuerà il rendering dell&apos;immagine a una risoluzione ridimensionata. Il ridimensionamento richiede che il riquadro di visualizzazione sia estensibile. L&apos;argomento Type determina se il risultato sarà un&apos;immagine vettoriale scalabile o una bitmap. Per impostazione predefinita viene restituita un&apos;immagine scalabile, adatta al salvataggio in formati vettoriali come PDF. L&apos;opzione View cambia il comportamento di alcuni riquadri. L&apos;opzione predefinita di "Picture" rappresenta il report come sarebbe se fosse esportato in un formato immagine, con aree fatte scorrere completamente visibili. La modalità di visualizzazione di "Screen" rappresenta il report come visibile sullo schermo e "Print" rappresenta il report come se fosse stampato, senza funzioni di impostazione della pagina. L&apos;opzione SubRect acquisisce una parte dell&apos;immagine risultante piuttosto che un&apos;immagine completa. L&apos;opzione Appearance può cambiare dai colori di output "Default" ai colori "Current" come visibili sullo schermo. Le opzioni View, SubRect e Appearance sono supportate solo per Type "Bitmap".

**Default**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

**Scala**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**Vista e aspetto**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example",
	H List Box(
		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),
		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )
	)
);

```

### Get Polygons

**Sintassi:** obj << Get Polygons

**Descrizione:** Restituisce un elenco dei poligoni che si trovano nel frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
pa = framebox << Add Polygon Annotation(
	Points( {144, 53}, {182, 30}, {213, 80}, {181, 95} )
);
pa << Closed( 1 );
Print( framebox << Get Polygons );

```

### Get Project

**Sintassi:** project = obj << Get Project()

**Descrizione:** Restituisce il progetto padre della finestra, o Vuoto() se non è in un progetto.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Sintassi:** obj << Get Properties

**Descrizione:** Restituisce un array associativo che contiene le proprietà del riquadro di visualizzazione e i rispettivi valori.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Sintassi:** obj << Get Property( "property" )

**Descrizione:** Restituisce l&apos;impostazione corrente per la property nominata.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Sintassi:** obj << Get Property List

**Descrizione:** Restituisce un elenco di proprietà del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**Sintassi:** obj << Get RTF( <format> )

**Descrizione:** Restituisce una stringa che contiene l&apos;origine RTF del riquadro di visualizzazione.

**Esempio 1**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**Esempio 2**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Sintassi:** rs = obj << Get Row States( <dt> )

**Descrizione:** Restituisce un vettore contenente lo stato della riga per ogni riga nella tabella di dati specificata o nella tabella di dati corrente. Gli stati delle righe possono provenire dalla tabella o dal contesto del filtro del riquadro.

**Single table**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Get Show Window

**Sintassi:** obj << Get Show Window

**Descrizione:** Restituisce la visibilità della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**Sintassi:** width,height = obj << Get Size

**Descrizione:** Restituisce la dimensione del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**Sintassi:** x,y = obj << Get Stretch

**Descrizione:** Restituisce i flag di estensione per questo riquadro di visualizzazione in direzione orizzontale e verticale.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		spacer = Spacer Box(
			Size( 20, 20 ),
			Color( "Light Red" ),
			<<Set Stretch( "Fill", "Off" )
		)
	)
);
spacer << Get Stretch();

```

### Get Text

**Sintassi:** obj << Get Text

**Descrizione:** Restituisce una stringa che contiene il testo del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**Sintassi:** obj << Text Color( color );

color = obj << Get Text Color

**Descrizione:** Il testo sarà visualizzato nel colore del testo, se impostato. Se questa proprietà non è stata impostata, il riquadro assumerà il colore del testo del riquadro che lo contiene.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Get UI Only

**Sintassi:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Get User Resizable

**Sintassi:** obj << User Resizable;

obj << Get User Resizable

**Descrizione:** Se il riquadro è ridimensionabile dall&apos;utente, il cursore cambierà in prossimità dei bordi inferiore e destro per consentire di ridimensionare il riquadro in modalità drag-and-drop.

```js

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
New Window( "resize",
	H Splitter Box(
		Size( 600, 200 ),
		tree = Tree Box( {root1, root2} ),
		scroll = Scroll Box(
			Size( 300, 200 ),
			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )
		)
	)
);
tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
Wait( 2 );
tree << User Resizable( {0, 0} );
scroll << User Resizable( {0, 0} );

```

### Get Vertical Alignment

**Sintassi:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Descrizione:** L&apos;allineamento verticale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Sintassi:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Descrizione:** La visibilità determina se mostrare un riquadro e se richiede spazio. Il valore predefinito di "Visible" significa che l&apos;oggetto verrà mostrato. Un riquadro "Hidden" non viene mostrato ma richiede spazio, mentre un riquadro "Collapsed" non richiede spazio nel layout.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**Sintassi:** obj << Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Sintassi:** width = obj << Get Width

**Descrizione:** Restituisce la larghezza del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Width;

```

### Get Window Icon

**Sintassi:** obj << Get Window Icon

**Descrizione:** Restituisce l&apos;icona della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Sintassi:** obj << Get Window Position

**Descrizione:** Restituisce la posizione della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Sintassi:** obj << Get Window Size

**Descrizione:** Restituisce le dimensioni della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Sintassi:** obj << Get Window Title

**Descrizione:** Restituisce il titolo della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Sintassi:** obj << Get Window View

**Descrizione:** Restituisce la visualizzazione della finestra corrente. Le finestre possono essere "Visibile", "Invisibile" o "Privata".

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Sintassi:** obj << Get XML( <English(0|1)>, <NoData(0|1)> )

**Descrizione:** Recupera la struttura di visualizzazione formattata come XML. Di default, le stringhe vengono restituite nella lingua locale e l&apos;XML include i valori dei dati in alcuni riquadri. Usare l&apos;opzione English per restituire le stringhe in inglese, se disponibili. Usare l&apos;opzione NoData per omettere i valori dei dati all&apos;interno dei riquadri, che possono essere molto grandi per alcune strutture di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**Sintassi:** x,y = obj << GetOffset

**Descrizione:** Restituisce l&apos;offset del riquadro di visualizzazione rispetto al riquadro principale. Potrebbe essere necessario usare il messaggio <<principale in un ciclo per accumulare diversi offset.

```js

Names Default To Here( 1 );
New Window( "example",
	MouseBox(
		Graph Box(
			title( "title" ),
			Pen Size( 3 );
			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );
		),
		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"
	,
		<<settrack( // events from the mouse (movement, with button up or down)
			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y
				{fb, offset, t, off, size}, // local variables
				// recalulate offset and size each time, the values can change
				fb = this[framebox( 1 )]; // the framebox in the graph 
				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox
				t = fb; // a temporary box that starts at the frame 
				While( t != this, // and walks up to the mousebox
					off = t << getOffset; // ask each box for its offset to the immediate parent
					offset += Matrix( off ); // convert list answer to matrix so + will work
					t = t << parent; // crawl up to the mousebox, one box at a time
				);
				size = Matrix( fb << getSize ); // the frame knows its size
				If( // over the frame box
					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]
					 + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Grid Line Order

**Sintassi:** obj << Grid Line Order( position )

**Descrizione:** Traccia le linee della griglia davanti o dietro altri oggetti nel grafico

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );
rbiv[axis box( 2 )] << Show Major Grid( 1 );
framebox = rbiv[frame box( 1 )];
framebox << Grid Line Order( 1 );

```

### Horizontal Alignment

**Sintassi:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Descrizione:** L&apos;allineamento orizzontale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Hover Label Editor

**Sintassi:** obj << Hover Label Editor

**Descrizione:** Visualizza la finestra dell&apos;Editor etichette al passaggio del mouse.

**JMP Versione aggiunta:** 15

### Inval

**Sintassi:** obj << Inval

**Descrizione:** Invalida il riquadro di visualizzazione.  La finestra verrà aggiornata quando viene inviato il messaggio <<Aggiorna finestra o il sistema operativo avrà tempo per l&apos;aggiornamento.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Inval example",
	Button Box( "red",
		color = "red";
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	),
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change 
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	),
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Is Dirty

**Sintassi:** obj << Is Dirty

**Descrizione:** Ottiene lo stato modificato del documento. 1 significa che il documento è stato modificato e richiederà il salvataggio; 0 significa che il documento non è stato modificato.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Sintassi:** obj << Is Modal Dialog

**Descrizione:** Restituisce vero se la finestra è una finestra di dialogo modale. Utile solo se chiamato da un callback del gestore della finestra.

```js

Names Default To Here( 1 );
With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**Sintassi:** obj << Journal

**Descrizione:** Crea un journal dal riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**Sintassi:** obj << Journal Window

**Descrizione:** Apre una finestra journal della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Sintassi:** obj << Launch

**Descrizione:** Valuta argument indicato nel contesto del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "example",
	ob1 = Outline Box( "treemap launcher" ),
	ob2 = Outline Box( "bivariate partial" ),
	ob3 = Outline Box( "bivariate launched" )
);
ob1 << launch( Treemap() );
ob2 << launch( Bivariate( Y( :height ) ) );
ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Left

**Sintassi:** obj << Left( state=0|1 )

**Descrizione:** Mostra/Nasconde un bordo a sinistra del frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Left( 0 );

```

### Line Width Scale

**Sintassi:** obj << Line Width Scale( 0|scale )

**Descrizione:** Imposta la larghezza della linea al valore inserito. Un valore pari a 0 significa che la scala di larghezza della linea è determinata dalla scala del carattere.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Line Width Scale( 2.0 );

```

### Make RowState Handler

**Sintassi:** rs = obj << Make RowState Handler( <dt>, function(a) )

**Descrizione:** Crea un gestore dello stato delle righe per la tabella di dati specificata o per la tabella di dati corrente. La funzione viene chiamata quando gli stati delle righe cambiano nel contesto del filtro del riquadro. L&apos;argomento della funzione contiene i numeri di riga che sono cambiati o -1 se il filtro di stato della riga è cambiato.

**Single table**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Make table of graphs like this

**Sintassi:** obj << Make table of graphs like this

**Descrizione:** crea una tabella di dati di grafici

### Margin

**Sintassi:** obj << Margin( sides );

sides = obj << Get Margin

**Descrizione:** Il margine aggiunge spazio tra il bordo del riquadro e i riquadri adiacenti. Usare argomenti con nome, oppure fornire un elenco di valori. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai margini orizzontali e verticali.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Marker Drawing Mode

**Sintassi:** obj << Marker Drawing Mode( "Normale"|"Veloce"|"Riquadrato" )

**Descrizione:** Imposta lo stile dell&apos;indicatore.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Drawing Mode( "outlined" );

```

### Marker Label Color Style

**Sintassi:** obj << Marker Label Color Style( "Modalità preferita"|"Colore dell&apos;indicatore"|"Colore dell&apos;indicatore ombreggiato"|"Colore fisso" )

**Descrizione:** Modifica il colore delle etichette degli indicatori

### Marker Selection Mode

**Sintassi:** obj << Marker Selection Mode( "Modalità preferita"|"Non selezionato ombreggiato"|"Selezionato più grande"|"Selezionato con alone"|"Selezionato riquadrato"|"Selezionato lo stesso colore" )

**Descrizione:** Imposta lo stile di selezione dell&apos;indicatore.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Selection Mode( "Selected Haloed" );

```

### Marker Size

**Sintassi:** obj << Marker Size( 0=dot/1=small/2=medium/... )

**Descrizione:** Imposta la dimensione dell&apos;indicatore.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Size( 4 );

```

### Maximize Window

**Sintassi:** obj << Maximize Window( <state=0|1> )

**Descrizione:** Ingrandisce la finestra. L&apos;argomento predefinito è 1.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Messaggi degli elementi condivisi

### Minimize Window

**Sintassi:** obj << Minimize Window( <state=0|1> )

**Descrizione:** Riduce a icona la finestra. L&apos;argomento predefinito è 1.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**Sintassi:** obj << Move Window( x,y )

**Descrizione:** Sposta la finestra nella posizione specificata.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Name Selection in Column

**Sintassi:** obj << Name Selection in Column

**Descrizione:** Etichetta le righe al momento selezionate e salva il valore (etichetta) in una colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
dt:(Column( 2 )) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Matching Cells;
framebox << Name Selection in Column;

```

### Next

**Sintassi:** obj << Next

**Descrizione:** Restituisce il riquadro di visualizzazione successivo a questo.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**Sintassi:** obj << On Close( script )

**Descrizione:** Imposta l&apos;esecuzione di uno script o di una funzione alla chiusura della finestra. Questo script dovrebbe restituire 1 per consentire la chiusura o 0 per impedire la chiusura della finestra.

**Chiudi funzione**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

**Chiudi script**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);

```

### Optimize Display

**Sintassi:** obj << Optimize Display

**Descrizione:** Imposta la larghezza delle colonne della tabella di dati e la finestra a una dimensione ottimale.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Sintassi:** obj << Pad Window( bool )

**Descrizione:** Attiva o disattiva la spaziatura interna della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**Sintassi:** obj << Padding( sides );

sides = obj << Get Padding

**Descrizione:** La spaziatura interna aggiunge spazio tra il contenuto e il bordo del riquadro. Usare argomenti con nome, oppure fornire un elenco di valori. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati alle spaziature interne orizzontali e verticali.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Sintassi:** obj << Page Break

**Descrizione:** Inserisce un&apos;interruzione di pagina prima del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**Sintassi:** obj << Parent

**Descrizione:** Restituisce il nodo di livello superiore a questo riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Paste Background Image

**Sintassi:** obj << Paste Background Image

**Descrizione:** Incolla negli Appunti un&apos;immagine di sfondo salvata in memoria.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
op = Overlay Plot( X( :subject ), Y( :miles ), Separate Axes( 1 ) );
opr1 = op << report;
opr2 = opr1 << Clone Box;
opr1 << append( opr2 );
fb1 = opr1[Frame Box( 1 )];
fb1 << Add Image(
	Open( Convert File Path( "$SAMPLE_IMAGES/black rhino footprint.jpg" ) ),
	Transparency( 0.9 ),
	Rotate( 90 ),
	Bounds(
		Left( 0.135416666666667 ),
		Right( 3.26041666666667 ),
		Top( 11.8333333333333 ),
		Bottom( -1 )
	),
	SetSize( {300, 210} )
);
fb1 << Copy Picture;
fb2 = opr2[Frame Box( 1 )];
fb2 << Paste Background Image;

```

### Paste Customizations

**Sintassi:** obj << Paste Customizations

**Descrizione:** Incolla uno script che contiene impostazioni personalizzate per il grafico.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Marker Drawing Mode( outlined );
framebox1 << Copy Customizations;
framebox2 << Paste Customizations;

```

### Paste Frame Contents

**Sintassi:** obj << Paste Frame Contents

**Descrizione:** Analizza e incolla in questo frame il testo di journal contenuto negli Appunti.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
biv << Fit Line;
framebox1 << Copy Frame Contents;
framebox2 << Paste Frame Contents;

```

### Paste Frame Settings

**Sintassi:** obj << Paste Frame Settings

**Descrizione:** Incolla il contenuto degli Appunti in questo frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Background Color( "Green" );
framebox1 << Copy Frame Settings;
framebox2 << Paste Frame Settings;

```

### Paste Graphlet

**Sintassi:** obj << Paste Graphlet

**Descrizione:** Aggiunge una personalizzazione del graphlet in base al contenuto degli Appunti.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Legend( 7 ) ) )
);
Set Clipboard(JSLQuote(Bivariate(
                             Y( :height ),
                             X( :weight ),
                             Histogram Borders( 1 ),
                             Fit Robust( {Line Color( {212, 73, 88} )} ),
                             Fit Cauchy( {Line Color( {61, 174, 70} )} ),
                             SendToReport(
                                 Dispatch(
                                     {},
                                     "Bivar Plot",
                                     FrameBox,
                                     {Grid Line Order( 1 ), Reference Line Order( 2 )}
                                 )
                             )
                         )));
frame = (gb << report)[FrameBox( 1 )];
frame << Paste Graphlet();
gpin = frame << Add Pin Annotation(
	Seg( BarSeg( 1 ) ),
	Index( {0, 0} ),
	Index Row( {0, 0} ),
	UniqueID( 1513503376 ),
	FoundPt( {107, 211} ),
	Origin( {0.00867052023121384, 96.6870397553517} ),
	Tag Line( 1 )
);
gpin << Launch Graphlet;

```

### Prepend

**Sintassi:** obj << Prepend( db2 )

**Descrizione:** Aggiunge db2 alla struttura di visualizzazione prima di db.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Sintassi:** obj << Prev Sib

**Descrizione:** Restituisce l&apos;elemento di pari livello precedente del riquadro di visualizzazione.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**Sintassi:** obj << Print Window

**Descrizione:** Stampa la finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reference Line Order

**Sintassi:** obj << Reference Line Order( position )

**Descrizione:** Traccia le linee di riferimento davanti o dietro altri oggetti nel grafico

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );
rbiv[axis box( 2 )] << Show Major Grid( 1 );
framebox = rbiv[frame box( 1 )];
framebox << Reference Line Order( 1 );

```

### Remove Graphics Script

**Sintassi:** obj << Remove Graphics Script( position )

**Descrizione:** Rimuove gli script grafici aggiunti al frame nella position specificata.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[frame box( 1 )];
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {1.0, 0.5, 0.0} );
	Polygon( [60, 72, 57], [75, 120, 120] );
);
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {0.0, 0.5, 1.0} );
	Polygon( [60, 72, 57], [150, 120, 120] );
);
Wait( 2 );
framebox << Remove Graphics Script( 2 );

```

### Reorder Segs

**Sintassi:** obj << Reorder Segs( List of integers representing the current segs in the new order. )

**Descrizione:** Riordina i segmenti presenti in un grafico.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
Open( "$sample_data\big class.jmp" );
gb = Graph Builder(
	Size( 534, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 6 ) ), Bar( X, Y, Legend( 7 ) ) ),
	SendToReport(
		Dispatch( {}, "weight", ScaleBox,
			{Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}
		)
	)
);
For( blink = 1, blink < 4, blink++,
	Wait( .5 );
	(gb << report)[FrameBox( 1 )] << reorder segs( {4, 3, 2, 1} );
);

```

### Reshow

**Sintassi:** obj << Reshow

**Descrizione:** Invalida riquadro di visualizzazione e aggiorna la finestra con il nuovo contenuto.  Vedere i messaggi <<Inval e <<Aggiorna finestra se è necessario un maggiore controllo sui tempi di aggiornamento.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Reshow example",
	Button Box( "red",
		color = "red";
		g << reshow/* tell the graph that something changed */;
	),
	Button Box( "blue",
		color = "blue";
		g << reshow/* tell the graph that something changed */;
	),
	g = Graph Box(/* the graph does NOT watch for the color variable to change
                     but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);

```

### Right

**Sintassi:** obj << Right( state=0|1 )

**Descrizione:** Mostra/Nasconde un bordo a destra del frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Right( 0 );

```

### Right Y Axis

**Sintassi:** obj << Right Y Axis( < Min( min ) >, < Max( max ) >, < Inc( n ) >, ... )

**Descrizione:** Applica una o più modifiche all&apos;asse Y destro in un unico messaggio. Se non è specificato alcun argomento, apre la finestra Impostazioni dell&apos;asse Y destro.

**Esempio 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
gbr = gb << report;
fb = gbr[Frame Box( 1 )];
fb << Right Y Axis;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 23 ) ),
		Y( :height, Size( 37 ) ),
		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
framebox = Report( gb )[framebox( 1 )];
framebox << Right Y Axis(
	Rotated Labels( "Angled" ),
	Scale( "Log" ),
	Add Ref Line( 125, dashed, "red" )
);

```

### Row Colors

**Sintassi:** obj << Row Colors( colore )

**Descrizione:** Imposta il colore delle righe selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Colors( "Red" );

```

### Row Editor

**Sintassi:** obj << Row Editor

**Descrizione:** Visualizza la finestra dell&apos;editor delle righe, a partire dal primo punto selezionato.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Editor;

```

### Row Exclude

**Sintassi:** obj << Row Exclude

**Descrizione:** Esclude le righe corrispondenti nella tabella di dati o ne annulla l&apos;esclusione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Exclude( 1 );

```

### Row Hide

**Sintassi:** obj << Row Hide

**Descrizione:** Nasconde/Mostra le righe corrispondenti nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Hide( 1 );

```

### Row Hide and Exclude

**Sintassi:** obj << Row Hide and Exclude

**Descrizione:** Nasconde ed esclude le righe corrispondenti nella tabella di dati o le mostra e ne annulla l&apos;esclusione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Hide and Exclude( 1 );

```

### Row Label

**Sintassi:** obj << Row Label

**Descrizione:** Applica o toglie le etichette alle righe corrispondenti nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Label( 1 );

```

### Row Legend

**Sintassi:** obj << Row Legend( Color( 0|1), Marker( 0|1 ), <Color theme( string )>, <Marker theme( string )>, < Continuous scale(0|1)>, <Reverse scale(0|1)>, <Excluded Row( 0|1 ), <Make window with legend> )

**Descrizione:** Colora le righe in base a una colonna di dati e inserisci una legenda a destra di questo frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( 1 ), Marker( 1 ) );

```

### Row Markers

**Sintassi:** obj << Row Markers( marker )

**Descrizione:** Imposta l&apos;indicatore delle righe selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Markers( 3 );

```

### Save Capture

**Sintassi:** obj << Save Capture( <"path">, <format>, <Add Sibling(n)> )

**Descrizione:** Salva una schermata del riquadro di visualizzazione nel percorso path specificato. Se non viene specificato un path, compare la finestra Salva con nome.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Sintassi:** obj << Save HTML( <pathname>, <format> )

**Descrizione:** Salva l&apos;origine HTML e la cartella di file grafici nel format specificato.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Sintassi:** obj << Save Interactive HTML( <pathname>, <Boolean> )

**Descrizione:** Salva il formato HTML interattivo con dati in un file. L&apos;argomento Boolean rappresenta la staticità del report.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Sintassi:** obj << Save Journal( <pathname> )

**Descrizione:** Salva l&apos;origine journal del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Sintassi:** obj << Save MSWord( <pathname>, <format> )

**Descrizione:** Salva il riquadro di visualizzazione come documento Microsoft Word (disponibile solo per Windows).

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Sintassi:** obj << Save PDF( <pathname>, <Show Page Setup(0|1)>, <Portrait(0|1)> )

**Descrizione:** Salva il riquadro di visualizzazione in formato PDF.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Sintassi:** obj << Save Picture( <pathname>, <format>, <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Descrizione:** Salva un&apos;immagine del riquadro di visualizzazione. I formati supportati sono EMF (Windows), PICT (Macintosh), JPEG o JPG, GIF o PNG. L&apos;argomento facoltativo Scale effettuerà il rendering dell&apos;immagine a una risoluzione ridimensionata. Il ridimensionamento richiede che il riquadro di visualizzazione sia estensibile. L&apos;argomento Type determina se il risultato sarà un&apos;immagine vettoriale scalabile o una bitmap. Per impostazione predefinita viene restituita un&apos;immagine scalabile, adatta al salvataggio in formati vettoriali come PDF. L&apos;opzione View cambia il comportamento di alcuni riquadri. L&apos;opzione predefinita di "Picture" rappresenta il report come sarebbe se fosse esportato in un formato immagine, con aree fatte scorrere completamente visibili. La modalità di visualizzazione di "Screen" rappresenta il report come visibile sullo schermo e "Print" rappresenta il report come se fosse stampato, senza funzioni di impostazione della pagina. L&apos;opzione SubRect acquisisce una parte dell&apos;immagine risultante piuttosto che un&apos;immagine completa. L&apos;opzione Appearance può cambiare dai colori di output "Default" ai colori "Current" come visibili sullo schermo. Le opzioni View, SubRect e Appearance sono supportate solo per Type "Bitmap".

**Default**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

**Scala**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

**Vista e aspetto**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv << Save Picture(
	"$TEMP/jmp_example_screen.png",
	"png",
	View( "Screen" ),
	Appearance( "Current" )
);
rbiv << Save Picture(
	"$TEMP/jmp_example_print.png",
	"png",
	View( "Print" ),
	Appearance( "Default" )
);
New Window( "Example",
	H List Box(
		New Image( "$TEMP/jmp_example_screen.png" ),
		New Image( "$TEMP/jmp_example_print.png" )
	)
);

```

### Save Presentation

**Sintassi:** obj << Save Presentation( "filename.pptx", <Template("path\to\my_template.pptx")>, <Insert(Begin|End|#) | Replace(Begin|End|#) | Append>, <Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)>, <"EMF"|"PNG"|"JPG"|"Native"> )

**Descrizione:** Salva le tabelle dei riquadri di visualizzazione e le diapositive di grafici in una presentazione. La presentazione può essere aperta con Microsoft PowerPoint o altri software di presentazione.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Sintassi:** obj << Save RTF( <pathname>, <format> )

**Descrizione:** Salva l&apos;origine RTF e la cartella di file grafici nel format specificato.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Sintassi:** obj << Save Text( <pathname>, <format> )

**Descrizione:** Salva un file che contiene il testo del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Sintassi:** obj << Save Window Report( pathname, <embed data(0|1)> )

**Descrizione:** Salva la finestra del report corrente in un file di report JMP (.jrp).

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scale with Font

**Sintassi:** obj << Scale with Font

**Descrizione:** Imposta la scala di larghezza della linea con la scala del carattere. Equivalente a <<Scala di larghezza linea(0).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( weight ), x( height ), FitLine );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Scale with Font;

```

### Scroll Window

**Sintassi:** obj << Scroll Window( DisplayBox | <Relative(<v> | <h>,<v>)> | <Absolute(<v> | <h>,<v>) )

**Descrizione:** Regola la barra di scorrimento della finestra per visualizzare il riquadro di visualizzazione specificato, oppure scorre un numero relativo di pixel o scorre fino a una posizione assoluta dei pixel. Al posto di un numero di pixel si possono usare le parole chiave "Start" o "End".

**Absolute**

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Absolute( "End", "End" ) );
Wait( 1 );
fm << scroll window( Absolute( 0, 300 ) );
Wait( 1 );

```

**Box**

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
For( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second
	fm << scroll window( Report( fm )[framebox( 2 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 3 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 1 )] );
	Wait( .5 );
);

```

**Relative**

```js

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Relative( 300 ) );
Wait( 1 );
fm << scroll window( Relative( -50 ) );
Wait( 1 );
fm << scroll window( Relative( "Start" ) );
Wait( 1 );

```

### Seg Count

**Sintassi:** obj << Seg Count( <seg type> )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[Frame Box( 1 )] << Seg Count( MarkerSeg );

```

### Select

**Sintassi:** obj << Select

**Descrizione:** Seleziona questo oggetto per essere utilizzato dai comandi del menu Modifica.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Select Matching Cells

**Sintassi:** obj << Select Matching Cells

**Descrizione:** Seleziona punti che hanno etichette simili alle righe selezionate

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
dt:(Column( 2 )) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Matching Cells;

```

### Select Similar

**Sintassi:** obj << Select Similar

**Descrizione:** Seleziona le righe che hanno valori dei dati simili a quelli delle colonne selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
dt:(Column( 3 )) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Similar;

```

### Set Background Fill

**Sintassi:** obj << Set Background Fill( state=0|1 )

**Descrizione:** Attiva o disattiva il riempimento dello sfondo del grafico con il colore di sfondo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
//Set background color
framebox << Background Color( "red" );
//Wait to see the color change
Wait( 1 );
//Turn off background fill color
framebox << Set Background Fill( 0 );

```

### Set Content Size

**Sintassi:** obj << Set Content Size( x,y )

**Descrizione:** Imposta le dimensioni del contenuto nella finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Test",
	lb = List Box( {"a", "b", "c", "d"} ),
	Button Box( "Enable 2nd item",
		lb << enable item( 2, 1 );
		Show( lb << item enabled( 2 ) );
	),
	Button Box( "Disable 2nd item",
		lb << enable item( 2, 0 );
		Show( lb << item enabled( 2 ) );
	)
);
Wait( 2 );
w << Set Content Size( 400, 300 );

```

### Set Dirty

**Sintassi:** obj << Set Dirty

**Descrizione:** Imposta lo stato modificato del documento. 0 non richiederà il salvataggio; 1 lo richiederà.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Graphlet

**Sintassi:** obj << Set Graphlet

**Descrizione:** Definisce la visualizzazione integrata dell&apos;etichetta al passaggio del mouse (graphlet) per questo grafico.

**JMP Versione aggiunta:** 15

**Immagine esterna**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Graphlet(
	Picture(
		local:img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/" ||
		Match( local:_Species,
			"versicolor", "2/27/Blue_Flag%2C_Ottawa.jpg/240px-Blue_Flag%2C_Ottawa.jpg",
			"virginica", "f/f8/Iris_virginica_2.jpg/240px-Iris_virginica_2.jpg",
			"setosa",
				"5/56/Kosaciec_szczecinkowaty_Iris_setosa.jpg/180px-Kosaciec_szczecinkowaty_Iris_setosa.jpg"
		);
		Open( local:img_url );
	),
	Click( Web( "https://en.wikipedia.org/wiki/Iris_" || local:_Species ) ),
	Title( "External Image" ),
	Reapply( 1 )
);
gpin = frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 18 ),
	Index Row( 18 ),
	UniqueID( 1441114818 ),
	FoundPt( {123, 293} ),
	Origin( {1.70752129817444, 5.66359183673469} ),
	Tag Line( 1 )
);
gpin << Launch Graphlet;

```

**Preimpostato**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Legend( 7 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Graphlet(
	Picture(
		loader = Include( "$BUILTIN_SCRIPTS/hllib.jsl" );
		hlp = loader:lazyLoad( "hllPresets" );
		hlp:launchPie();
	),
	Title( "Pie Preset" ),
	Reapply( 1 )
);
gpin = frame << Add Pin Annotation(
	Seg( BarSeg( 1 ) ),
	Index( {0, 0} ),
	Index Row( {0, 0} ),
	UniqueID( 1513503376 ),
	FoundPt( {107, 211} ),
	Origin( {0.00867052023121384, 96.6870397553517} ),
	Tag Line( 1 )
);
gpin << Launch Graphlet;

```

### Set Gridlet

**Sintassi:** obj << Set Gridlet

**Descrizione:** Definisce la griglia di contenuto dell&apos;etichetta al passaggio del mouse (gridlet) per questo grafico.

**JMP Versione aggiunta:** 15

**Aggiungi**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet(
	Expunge( {{Matcher( "Species" )}} ),
	Annex(
		{{Matcher( "Species@Wikipedia" ), value( local:_Species ),
		click( Web( "https://wikipedia.com/wiki/Iris_" || local:_Species ) )}}
	)
);
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**Elimina**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet( Expunge( {{Matcher( "Row" )}} ) );
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**Riformatta**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet(
	Reformat(
		{{Matcher( "Petal length" ), Format( "Scientific", 80 ), 80},
		{Matcher( "Sepal length" ), Format( "Scientific", 80 ), 80}}
	)
);
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**Rinomina**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet( Rename( {{Matcher( "Row" ), value( "Observation" )}} ) );
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**Stile**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet(
	Style(
		{{Matcher( "Species" ), Text Color( "Red" ), Background Color( "Light Yellow" ),
		Justification( "Center" ), "Font"("Times New Roman", 14, "Italic")}}
	)
);
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

### Set Height

**Sintassi:** obj << Set Height( width )

**Descrizione:** Imposta l&apos;altezza del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**Sintassi:** obj << Set Main Window

**Descrizione:** Imposta questa finestra come finestra principale di JMP e imposta come normale la precedente finestra principale

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Sintassi:** obj << Set Max Size( width,height )

**Descrizione:** Imposta la dimensione massima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**Sintassi:** obj << Set Min Size( width,height )

**Descrizione:** Imposta la dimensione minima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**Sintassi:** obj << Set Page Setup( <margins(left, top, right, bottom)>, <scale(s)>, <portrait(0|1)>, <paper size(p)>, <Table of Contents(always, never, default)>  )

**Descrizione:** Imposta le informazioni di impostazione della pagina che vengono utilizzate durante la stampa o il salvataggio in formato pdf. È possibile generare facoltativamente un sommario dai riquadri.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );
w << Set page setup(
	margins( 1, 1, 1, 1 ),
	scale( 1 ),
	portrait( 1 ),
	paper size( "Letter" ),
	Table of Contents( "always" )
);
w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Sintassi:** obj << Set Print Footers( left footer, center footer, right header )

**Descrizione:** Imposta i piè di pagina a sinistra, al centro e a destra per l&apos;output stampato.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**Sintassi:** obj << Set Print Headers( left header, center header, right header )

**Descrizione:** Imposta le intestazioni a sinistra, al centro e a destra per l&apos;output stampato.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**Sintassi:** obj << Set Property( "property", value )

**Descrizione:** Imposta il valore per la property nominata per il riquadro di visualizzazione.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Sintassi:** obj << Set Report Title( "string" )

**Descrizione:** Cambia il titolo del report.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Sintassi:** obj << Set Stretch( x,y )

**Descrizione:** Imposta il comportamento per l&apos;estensione orizzontale e verticale del riquadro. I riquadri che si estendono con Window si ridimensioneranno al variare delle dimensioni della finestra o della barra di divisione. I riquadri che si estendono fino a Fill si estenderanno per riempire lo spazio disponibile nel loro contenitore. I riquadri con estensione impostata a Off in genere non si estendono. La maggior parte dei riquadri è impostata per impostazione predefinita a Neutral, il che significa che determineranno il loro comportamento in base ai loro riquadri figli.

**JMP Versione aggiunta:** 16

**Estendi con finestra**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	H List Box(
		tv = Text Box( "V+V", <<rotate text( left ) ),
		V List Box(
			Text Box( "resize the containing window" ),
			th = Text Box( "H+H" ),
			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )
		)
	)
);
tv << Vertical Alignment( "Center" );
th << Horizontal Alignment( "Center" );
th << Set Stretch( "Window", "Off" );
ts << Set Min Size( 5, 20 );
ts << Set Max Size( 100000, 100 );
ts << Set Stretch( "Window", "Window" );

```

**Estendi per riempire**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

### Set Summary Behavior

**Sintassi:** obj << Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Descrizione:** Sets the behavior of the box when a report is viewed in Summary mode.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Textlet

**Sintassi:** obj << Set Textlet

**Descrizione:** Definisce il contenuto rich text dell&apos;etichetta al passaggio del mouse (textlet) per questo grafico.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
//This example uses hardcoded content from Wikipedia
// For a complete example that uses dynamic, data-driven content, please see
// https://community.jmp.com/t5/JMP-Scripts/WikiReader-Augmenting-Hover-Labels-with-web-data-and-images/ta-p/237488
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Textlet(
	Setup(
		local:description =
		"Iris virginica, with the common name Virginia iris, is a perennial species of flowering plant, native to eastern North America.";
		local:text = Substr( local:description, 1, 140 ) || "...";
	),
	Markup(
		"<background color='white'><i><font family='Arial' size='12'>{local:text}</font></i></background>"
	),
	Width( 320 )
);
gpin = frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

### Set Width

**Sintassi:** obj << Set Width( width )

**Descrizione:** Imposta la larghezza del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**Sintassi:** obj << Set Window Icon( icon name )

**Descrizione:** Imposta l&apos;icona della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Sintassi:** obj << Set Window Size( x,y )

**Descrizione:** Imposta le dimensioni della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Sintassi:** obj << Set Window Title( "string" )

**Descrizione:** Cambia il titolo della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Sintassi:** obj << Show Properties

**Descrizione:** Visualizza un editor delle proprietà per i riquadri di visualizzazione

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**Sintassi:** obj << Show Tree Structure

**Descrizione:** Visualizza la struttura gerarchica del riquadro di visualizzazione e dei nodi correlati.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**Sintassi:** obj << Show Window( state=0|1 )

**Descrizione:** Mostra/Nasconde la finestra. Questa opzione è utile per nascondere temporaneamente le finestre. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**Sintassi:** obj << Sib

**Descrizione:** Restituisce l&apos;elemento di pari livello del riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**Sintassi:** obj << Sib Append( Display box, Horizontal|Vertical )

**Descrizione:** Aggiunge un riquadro di visualizzazione immediatamente dopo questo.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r()[framebox( 1 )];
fb << sib append(
	Text Box( "============ after ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Sintassi:** obj << Sib Prepend( Display box, Horizontal|Vertical )

**Descrizione:** Aggiunge un riquadro di visualizzazione immediatamente prima di questo.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << sib prepend(
	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**Sintassi:** obj << Size Window( x,y )

**Descrizione:** Imposta le dimensioni della finestra.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Size to Isometric

**Sintassi:** obj << Size to Isometric

**Descrizione:** Ridimensiona il frame in modo che il numero di unità reali per pixel sia uguale nelle direzioni X e Y.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Size To Isometric;

```

### Ternary X Title

**Sintassi:** obj << Ternary X Title( text )

**Descrizione:** Imposta il titolo dell&apos;asse X per un frame ternario.

**JMP Versione aggiunta:** 15

### Ternary Y Title

**Sintassi:** obj << Ternary Y Title( text )

**Descrizione:** Imposta il titolo dell&apos;asse Y per un frame ternario.

**JMP Versione aggiunta:** 15

### Ternary Y1 Title

**Sintassi:** obj << Ternary Y1 Title( text )

**Descrizione:** Imposta il titolo dell&apos;asse Y1 per un frame ternario.

**JMP Versione aggiunta:** 15

### Text Color

**Sintassi:** obj << Text Color( color );

color = obj << Get Text Color

**Descrizione:** Il testo sarà visualizzato nel colore del testo, se impostato. Se questa proprietà non è stata impostata, il riquadro assumerà il colore del testo del riquadro che lo contiene.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Top

**Sintassi:** obj << Top( state=0|1 )

**Descrizione:** Mostra/Nasconde un bordo sul lato alto del frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Top( 0 );

```

### Top Parent

**Sintassi:** obj << Top Parent

**Descrizione:** Restituisce il riquadro di visualizzazione principale di livello superiore a questo.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### Transparency

**Sintassi:** obj << Transparency

**Descrizione:** Imposta la trasparenza del frame.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Transparency( 0.5 );

```

### UI Only

**Sintassi:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Update Window

**Sintassi:** obj << Update Window

**Descrizione:** Aggiorna la finestra mantenendo il riquadro di visualizzazione se sono presenti regioni invalidate.  Il messaggio <<Inval crea regioni invalidate.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "UpdateWindow example",
	Button Box( "red",
		color = "red";
        // try commenting out each of the 4 lines that follow, run the script,
		// click the buttons, and resize the windows (for example) to force a
		// redraw.  All 4 lines are important, though the last two may be
		// slightly different on Windows and Mac OSs.
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the oval window to update immediately */
		g2 << updateWindow; /* tell the rect window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		g2 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	)
);
New Window( "oval",
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);
New Window( "rect",
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### User Resizable

**Sintassi:** obj << User Resizable;

obj << Get User Resizable

**Descrizione:** Se il riquadro è ridimensionabile dall&apos;utente, il cursore cambierà in prossimità dei bordi inferiore e destro per consentire di ridimensionare il riquadro in modalità drag-and-drop.

```js

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
New Window( "resize",
	H Splitter Box(
		Size( 600, 200 ),
		tree = Tree Box( {root1, root2} ),
		scroll = Scroll Box(
			Size( 300, 200 ),
			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )
		)
	)
);
tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
Wait( 2 );
tree << User Resizable( {0, 0} );
scroll << User Resizable( {0, 0} );

```

### Vertical Alignment

**Sintassi:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Descrizione:** L&apos;allineamento verticale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Sintassi:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Descrizione:** La visibilità determina se mostrare un riquadro e se richiede spazio. Il valore predefinito di "Visible" significa che l&apos;oggetto verrà mostrato. Un riquadro "Hidden" non viene mostrato ma richiede spazio, mentre un riquadro "Collapsed" non richiede spazio nel layout.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Window Class Name

**Sintassi:** obj << Window Class Name

**Descrizione:** Restituisce il nome della classe della finestra per il riquadro di visualizzazione.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### X Axis

**Sintassi:** obj << X Axis( < Min( min ) >, < Max( max ) >, < Inc( n ) >, ... )

**Descrizione:** Applica una o più modifiche all&apos;asse X in un unico messaggio. Se non è specificato alcun argomento, apre la finestra Impostazioni dell&apos;asse X.

**Esempio 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
gbr = gb << report;
fb = gbr[Frame Box( 1 )];
fb << X Axis;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 23 ) ),
		Y( :height, Size( 37 ) ),
		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
framebox = Report( gb )[framebox( 1 )];
framebox << X Axis(
	Min( -2 ),
	Max( 7 ),
	Inc( 1 ),
	Add Ref Line( 5, "Solid", "Blue" ),
	Rotated Labels( "Vertical" )
);

```

### XPath

**Sintassi:** obj << XPath( XPath expression, <English(0|1)>, <NoData(0|1)> )

**Descrizione:** Applica un&apos;espressione XPath alla rappresentazione XML della struttura di visualizzazione e restituisce i risultati. Di default, le stringhe vengono restituite nella lingua locale e l&apos;XML include i valori dei dati all&apos;interno di alcuni riquadri. Usare l&apos;opzione English per restituire le stringhe in inglese, se disponibili. Usare l&apos;opzione NoData per omettere i valori dei dati all&apos;interno dei riquadri, utile per le prestazioni quando la query si basa solo sugli attributi dei riquadri.

**Attributes**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

**Data**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

**Display Seg**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Y Axis

**Sintassi:** obj << Y Axis( < Min( min ) >, < Max( max ) >, < Inc( n ) >, ... )

**Descrizione:** Applica una o più modifiche all&apos;asse Y in un unico messaggio. Se non è specificato alcun argomento, apre la finestra Impostazioni dell&apos;asse Y.

**Esempio 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
gbr = gb << report;
fb = gbr[Frame Box( 1 )];
fb << Y Axis;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 23 ) ),
		Y( :height, Size( 37 ) ),
		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
framebox = Report( gb )[framebox( 1 )];
framebox << Y Axis(
	Add Ref Line( 61.25, "Solid", "Medium Dark Green" ),
	Show Major Grid( 1 ),
	Show Minor Grid( 1 ),
	Format( "Fixed Dec", 5, 2 ),
	Rotated Labels( "Perpendicular" )
);

```

### Zoom Window

**Sintassi:** obj << Zoom Window

**Descrizione:** Ridimensiona la finestra in modo che sia sufficientemente grande da mostrarne tutto il contenuto.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

