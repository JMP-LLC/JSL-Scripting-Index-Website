# TextSeg



### Child

**Sintassi:** seg2 = obj << Child

**Descrizione:** Restituisce il primo elemento figlio del segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Child; // not many segs support children

```

### Class Name

**Sintassi:** classname = obj << Class Name

**Descrizione:** Restituisce il nome della classe di visualizzazione per il segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Class Name;

```

### Clip Shape

**Sintassi:** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Descrizione:** Restringe la geometria della forma specificata. La forma può essere specificata utilizzando un file di forma o un percorso. È possibile specificare un ID facoltativo con un file di forma per selezionare una singola forma dal file, altrimenti come zona di ritaglio si utilizza l&apos;unione di tutte le forme. È possibile specificare un percorso di ritaglio con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude il percorso. Il testo del percorso supporta la sintassi SVG.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
Wait( 2 );
cs << Clip Shape( Boundaries( "US States" ) );

```

### Color Theme

**Sintassi:** obj << Color Theme

### Delete

**Sintassi:** obj << Delete

**Descrizione:** Elimina il segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Delete;

```

### Density Gradient

**Sintassi:** obj << Density Gradient( "Ombreggia in bianco"|"Ombreggia in grigio"|"Colore pieno"="Ombreggia in bianco" )

**Descrizione:** Imposta il comportamento di colorazione dei gradienti di densità. "Ombreggia in bianco", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Density Gradient( "Fade to Gray" );

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

### Error Bar Cap

**Sintassi:** obj << Error Bar Cap( "Nessuno"|"Minuscolo"|"Piccolo"|"Medio"|"Grande" )

**Descrizione:** Specifica quale tipo di estremità di chiusura inserire nelle barre di errore.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**Sintassi:** obj << Error Bar Cap Shape( begin, end )

**Descrizione:** Specifica la forma dell&apos;estremità di chiusura da visualizzare sulle barre di errore. Un singolo argomento imposta la forma per entrambe le estremità della barra oppure è possibile fornire argomenti separati per l&apos;inizio e la fine. La forma di default è "Line". Una forma a "Arrow" disegna una freccia rivolta verso l&apos;esterno e "None" omette la chiusura.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Fill Color

**Sintassi:** obj << Fill Color( color )

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Fill Color( "Green" );

```

### First Value

**Sintassi:** obj << First Value( state=0|1 )

**JMP Versione aggiunta:** 16

### Frame

**Sintassi:** FrameBox = obj << Frame

**Descrizione:** Restituisce il riquadro del frame in cui si trova il segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Frame;

```

### Get Base Font

**Sintassi:** font = obj << Get Base Font

**Descrizione:** Restituisce il carattere di base usato per il testo tracciato dal riquadro. I caratteri di base sono nomi già definiti come Title, Text, Annotation e altri, che sono specificati nelle Preferenze dei caratteri.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Base Font;

```

### Get Clip Shape

**Sintassi:** obj << Get Clip Shape

**Descrizione:** Restituisce la forma di ritaglio corrente

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
cs << Clip Shape( Boundaries( "US States" ) );
Wait( 2 );
cs << Get Clip Shape();

```

### Get Density Gradient

**Sintassi:** obj << Get Density Gradient

**Descrizione:** Ottiene il comportamento di colorazione dei gradienti di densità.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Density Gradient;

```

### Get Description

**Sintassi:** description = obj << Get Description

**Descrizione:** Ottiene la descrizione del segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << get description();

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

### Get Error Bar Cap

**Sintassi:** obj << Get Error Bar Cap

**Descrizione:** Restituisce il tipo corrente di estremità di chiusura della barra di errore

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**Sintassi:** { begin, end } = obj << Get Error Bar Cap Shape

**Descrizione:** Restituisce la forma dell’estremità di chiusura sulle barre di errore.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap Shape();

```

### Get Fill Color

**Sintassi:** color = obj << Get Fill Color

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Fill Color;

```

### Get Fill Pattern

**Sintassi:** obj << Get Fill Pattern

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Fill Pattern;

```

### Get Font

**Sintassi:** obj << Get Font

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Font;

```

### Get Font Name

**Sintassi:** obj << Get Font Name

**Descrizione:** Restituisce il nome del carattere.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**Sintassi:** obj << Get Font Scale

**Descrizione:** Restituisce il fattore di scala corrente per il carattere.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Font Scale;

```

### Get Font Size

**Sintassi:** obj << Get Font Size

**Descrizione:** Restituisce la dimensione del carattere.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Get Font Size;

```

### Get Font Style

**Sintassi:** obj << Get Font Style

**Descrizione:** Restituisce il nome dello stile carattere.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**Sintassi:** obj << Get Gradient

**Descrizione:** Ottiene il gradiente di colorazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient;

```

### Get Gradient Color Theme

**Sintassi:** obj << Get Gradient Color Theme

**Descrizione:** Ottiene il tema colori del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Sintassi:** obj << Get Gradient Discrete Colors

**Descrizione:** Indica se ogni livello in un gradiente deve essere di un colore singolo o se i colori devono avere una transizione graduale.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Sintassi:** obj << Get Gradient Fill

**Descrizione:** Ottiene il comportamento di colorazione per valori al di fuori del range della scala del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Sintassi:** obj << Get Gradient Label Count

**Descrizione:** Ottiene il numero di etichette nella legenda di un gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Sintassi:** [value1,value1, ... value N] = obj << Get Gradient Label Levels

**Descrizione:** Ottiene l’insieme di valori usati per le etichette nella scala del gradiente.

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Esempio 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Sintassi:** obj << Get Gradient Legend Horizontal

**Descrizione:** Indica se la legenda del gradiente deve essere disegnata orizzontalmente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Sintassi:** obj << Get Gradient Legend Label Format

**Descrizione:** Ottiene il formato delle etichette della legenda del gradiente

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Sintassi:** obj << Get Gradient Legend Label Width

**Descrizione:** Ottiene la lunghezza massima in caratteri delle etichette della legenda del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Sintassi:** obj << Get Gradient Legend Show Labels

**Descrizione:** Indica se le etichette del livello devono essere mostrate nella legenda del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Sintassi:** obj << Get Gradient Level Count

**Descrizione:** Ottiene il numero di livelli in un gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Sintassi:** obj << Get Gradient Lightness Range

**Descrizione:** Ottiene la luminosità minima e massima per i colori dei livelli in un gradiente. I valori mancanti indicano che è stato utilizzato il valore originale del tema colori.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Sintassi:** obj << Get Gradient Range

**Descrizione:** Ottiene il range entro il quale vengono generate scale di gradiente non personalizzate.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Sintassi:** obj << Get Gradient Reverse Color Order

**Descrizione:** Indica se l&apos;ordine dei colori in un gradiente è invertito.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Sintassi:** obj << Get Gradient Reverse Label Order

**Descrizione:** Indica se l&apos;ordine delle etichette in un gradiente è invertito.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Sintassi:** obj << Get Gradient Scale

**Descrizione:** Ottiene il tipo di scala del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Sintassi:** [value1,value1, ... value N] = obj << Get Gradient Scale Values

**Descrizione:** Ottiene l’insieme di valori usati per le etichette nella scala del gradiente.

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Esempio 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Sintassi:** obj << Get Gradient Show Missing

**Descrizione:** Indica quando mostrare la voce della legenda per i valori mancanti.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Sintassi:** obj << Get Gradient Transparency

**Descrizione:** Ottiene il comportamento di trasparenza dei gradienti.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**Sintassi:** obj << Get Interval Draw Directions

**Descrizione:** Ottiene le direzioni in cui devono essere tracciati gli intervalli.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Interval Draw Directions;

```

### Get Line Color

**Sintassi:** color = obj << Get Line Color

**Descrizione:** Restituisce il colore delle linee.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Line Color;

```

### Get Line Style

**Sintassi:** pen style = obj << Get Line Style

**Descrizione:** Restituisce lo stile delle linee.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Line Style;

```

### Get Line Width

**Sintassi:** number = obj << Get Line Width

**Descrizione:** Restituisce la larghezza delle linee.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Line Width;

```

### Get Location

**Sintassi:** obj << Get Location

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts = Text Seg( "moves with axes" ) );
ts << set location( 60, 60 );
ts << get location();

```

### Get Marker

**Sintassi:** marker = obj << Get Marker

**Descrizione:** Restituisce lo stile dell&apos;indicatore.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Marker;

```

### Get Marker Size

**Sintassi:** size = obj << Get Marker Size

**Descrizione:** Restituisce la dimensione degli indicatori.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Marker Size;

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

### Get Relative

**Sintassi:** obj << Get Relative

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
seg << get relative();

```

### Get Text

**Sintassi:** obj << Get Text

**Descrizione:** Restituisce la stringa usata dal segmento di testo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 1 ), Jitter( 1 ) ),
		Line Of Fit(
			X,
			Y,
			Legend( 4 ),
			Confidence of Fit( 1 ),
			Confidence of Prediction( 1 ),
			Degree( "Cubic" ),
			Equation( 1 ),
			Root Mean Square Error( 1 ),
			R²( 0 )
		)
	)
);
fontobj = seg = Report( gb )[Framebox( 1 )] << Find Seg( "TextSeg" );
seg << Get Text;

```

### Get Text Color

**Sintassi:** obj << Get Text Color

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Text Color;

```

### Get Text Style

**Sintassi:** obj << Get Text Style

**Descrizione:** Ottiene la modalità di rappresentazione del testo rispetto alla penna del cursore.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Get Text Style;

```

### Get Transparency

**Sintassi:** obj << Get Transparency

**Descrizione:** Restituisce un valore numerico rappresentante la trasparenza compreso tra 0 (trasparente) e 1 (opaco).

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Get Transparency;

```

### Gradient

**Sintassi:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Descrizione:** Imposta il gradiente di colorazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Sintassi:** obj << Gradient Color Theme

**Descrizione:** Imposta il tema colori del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Sintassi:** obj << Gradient Discrete Colors

**Descrizione:** Indica se ogni livello in un gradiente deve essere di un colore singolo o se i colori devono avere una transizione graduale.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Sintassi:** obj << Gradient Fill( "Tra"|"Sopra"|"Sotto"|"Sopra Sotto"="Sopra Sotto" )

**Descrizione:** Imposta il comportamento di colorazione per valori al di fuori del range della scala del gradiente. "Sopra Sotto", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Sintassi:** obj << Gradient Label Count

**Descrizione:** Imposta il numero di etichette nella legenda di un gradiente. È uno in più rispetto al numero di curve di livello.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Sintassi:** obj << Gradient Label Levels( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Sintassi:** obj << Gradient Legend Horizontal

**Descrizione:** Indica se la legenda del gradiente deve essere disegnata orizzontalmente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Sintassi:** obj << Gradient Legend Label Format

**Descrizione:** Imposta il formato per le etichette della legenda del gradiente

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Sintassi:** obj << Gradient Legend Label Width

**Descrizione:** Imposta la lunghezza massima in caratteri delle etichette della legenda del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Sintassi:** obj << Gradient Legend Show Labels

**Descrizione:** Indica se le etichette di livello devono essere mostrate nella legenda del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Sintassi:** obj << Gradient Level Count

**Descrizione:** Imposta il numero di livelli in un gradiente. È uno in meno rispetto al numero di etichette.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Sintassi:** obj << Gradient Lightness Range

**Descrizione:** Imposta la luminosità minima e massima per i colori dei livelli in un gradiente. I colori saranno scalati per coprire questo range. Un valore mancante viene trattato come nessuna modifica.

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Esempio 3**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Sintassi:** obj << Gradient Range( "Impostazione predefinita"|"Range di dati esatto"|"Intermedio 90%"="Impostazione predefinita" )

**Descrizione:** Imposta il range entro il quale vengono generate scale di gradiente non personalizzate. "Impostazione predefinita", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Sintassi:** obj << Gradient Reverse Color Order

**Descrizione:** Inverte l&apos;ordine dei colori in un gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Sintassi:** obj << Gradient Reverse Label Order

**Descrizione:** Inverte l&apos;ordine delle etichette in un gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Sintassi:** obj << Gradient Scale( "Lineare"|"Quantile"|"Deviazione standard"|"Log"|"Offset logaritmi"|"Personalizzata"="Lineare" )

**Descrizione:** Imposta il tipo di scala del gradiente. "Lineare", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Sintassi:** obj << Gradient Scale Values( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Sintassi:** obj << Gradient Show Missing( "Automatica"|"Attivato"|"Disattivato"="Automatica" )

**Descrizione:** Indica quando mostrare la voce della legenda per i valori mancanti. "Automatica", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**Sintassi:** obj << Gradient Transparency( "Nessuno"|"Lineare"="Lineare" )

**Descrizione:** Imposta il comportamento di trasparenza dei gradienti. "Lineare", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Gradient Transparency( "None" );

```

### Last Value

**Sintassi:** obj << Last Value( state=0|1 )

**JMP Versione aggiunta:** 16

### Line Color

**Sintassi:** obj << Line Color( color )

**Descrizione:** Imposta il colore per tutte le linee nel segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Color( "Green" );

```

### Line Style

**Sintassi:** obj << Line Style( pen style )

**Descrizione:** Imposta lo stile delle linee. Le opzioni sono Continua, Punteggiata, Tratteggiata, Trattino-punto e Trattino-punto-punto.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Style( "Dotted" );

```

### Line Width

**Sintassi:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Altro..." )

**Descrizione:** Imposta la larghezza delle linee.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Width( 3 );

```

### Marker

**Sintassi:** obj << Marker( marker )

**Descrizione:** Imposta lo stile per tutti gli indicatori.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );

```

### Marker Size

**Sintassi:** obj << Marker Size( size )

**Descrizione:** Imposta la dimensione degli indicatori. Le opzioni per la dimensione sono Punto, Piccolo, Medio, Grande, XL, XXL e XXXL.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**Sintassi:** obj << Max Value( state=0|1 )

**JMP Versione aggiunta:** 16

### Messaggi degli elementi condivisi

### Min Value

**Sintassi:** obj << Min Value( state=0|1 )

**JMP Versione aggiunta:** 16

### Name

**Sintassi:** obj << Name( state=0|1 )

**JMP Versione aggiunta:** 16

### Parent

**Sintassi:** seg2 = obj << Parent

**Descrizione:** Restituisce l&apos;elemento principale del segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Parent;

```

### Revert

**Sintassi:** obj << Revert

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Revert;

```

### Set Base Font

**Sintassi:** obj << Set Base Font( "Testo"|"Intestazione"|"Titolo"|"Piccolo"|"Mono"|"Editor delle formule"|"Annotazione"|"Asse"|"Indicatore"|"Titolo dell&apos;asse"|"Etichetta del grafico"|"Legenda"|"Titolo del grafico"|"Didascalia"|"Tabella di dati"|"Etichetta al passaggio del mouse" )

**Descrizione:** Imposta il carattere di base del testo tracciato dal riquadro.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**Sintassi:** obj << Set Description( description )

**Descrizione:** Imposta la descrizione del segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << set description( "my seg" );

```

### Set Error Bar Cap

**Sintassi:** obj << Set Error Bar Cap( "Nessuno"|"Minuscolo"|"Piccolo"|"Medio"|"Grande" )

**Descrizione:** Specifica quale tipo di estremità di chiusura inserire nelle barre di errore.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**Sintassi:** obj << Set Error Bar Cap Shape( begin, end )

**Descrizione:** Specifica la forma dell&apos;estremità di chiusura da visualizzare sulle barre di errore. Un singolo argomento imposta la forma per entrambe le estremità della barra oppure è possibile fornire argomenti separati per l&apos;inizio e la fine. La forma di default è "Line". Una forma a "Arrow" disegna una freccia rivolta verso l&apos;esterno e "None" omette la chiusura.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Fill Color

**Sintassi:** obj << Set Fill Color( color )

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Sintassi:** obj << Set Fill Pattern

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**Sintassi:** obj << Set Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**Esempio 1**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font( "Arial Black" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Sintassi:** obj << Set Font Name( fontname )

**Descrizione:** Imposta il carattere per le stringhe di testo.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Sintassi:** obj << Set Font Scale( f )

**Descrizione:** Imposta un fattore di scala per il carattere corrente. Il fattore di scala verrà applicato alla dimensione determinata dal carattere di base e alla dimensione in punti.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Sintassi:** obj << Set Font Size( n )

**Descrizione:** Imposta la dimensione del carattere (in punti) per le stringhe di testo.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Size( 14 );

```

### Set Font Style

**Sintassi:** obj << Set Font Style( style )

**Descrizione:** Imposta lo stile carattere per le stringhe di testo. Per impostare più di uno stile contemporaneamente, posizionare le stringhe nella stessa stringa, separate da spazi (Vedere Esempio 2 di seguito).

**Esempio 1**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Style( "Italic" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**Sintassi:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Descrizione:** Imposta il gradiente di colorazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Sintassi:** obj << Set Gradient Color Theme

**Descrizione:** Imposta il tema colori del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Sintassi:** obj << Set Gradient Custom Scale

**Descrizione:** Imposta il gradiente per l’utilizzo di un elenco di valori per una scala personalizzata.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Sintassi:** obj << Set Gradient Discrete Colors

**Descrizione:** Indica se ogni livello in un gradiente deve essere di un colore singolo o se i colori devono avere una transizione graduale.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Sintassi:** obj << Set Gradient Fill( "Tra"|"Sopra"|"Sotto"|"Sopra Sotto"="Sopra Sotto" )

**Descrizione:** Imposta il comportamento di colorazione per valori al di fuori del range della scala del gradiente. "Sopra Sotto", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Sintassi:** obj << Set Gradient Label Count

**Descrizione:** Imposta il numero di etichette nella legenda di un gradiente. È uno in più rispetto al numero di curve di livello.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Sintassi:** obj << Set Gradient Label Levels( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Sintassi:** obj << Set Gradient Legend Horizontal

**Descrizione:** Indica se la legenda del gradiente deve essere disegnata orizzontalmente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Sintassi:** obj << Set Gradient Legend Label Format

**Descrizione:** Imposta il formato per le etichette della legenda del gradiente

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Sintassi:** obj << Set Gradient Legend Label Width

**Descrizione:** Imposta la lunghezza massima in caratteri delle etichette della legenda del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Sintassi:** obj << Set Gradient Legend Show Labels

**Descrizione:** Indica se le etichette di livello devono essere mostrate nella legenda del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Sintassi:** obj << Set Gradient Level Count

**Descrizione:** Imposta il numero di livelli in un gradiente. È uno in meno rispetto al numero di etichette.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Sintassi:** obj << Set Gradient Lightness Range

**Descrizione:** Imposta la luminosità minima e massima per i colori dei livelli in un gradiente. I colori saranno scalati per coprire questo range. Un valore mancante viene trattato come nessuna modifica.

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Esempio 3**

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Sintassi:** obj << Set Gradient Range( "Impostazione predefinita"|"Range di dati esatto"|"Intermedio 90%"="Impostazione predefinita" )

**Descrizione:** Imposta il range entro il quale vengono generate scale di gradiente non personalizzate. "Impostazione predefinita", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Sintassi:** obj << Set Gradient Reverse Color Order

**Descrizione:** Inverte l&apos;ordine dei colori in un gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Sintassi:** obj << Set Gradient Reverse Label Order

**Descrizione:** Inverte l&apos;ordine delle etichette in un gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Sintassi:** obj << Set Gradient Scale( "Lineare"|"Quantile"|"Deviazione standard"|"Log"|"Offset logaritmi"|"Personalizzata"="Lineare" )

**Descrizione:** Imposta il tipo di scala del gradiente. "Lineare", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Sintassi:** obj << Set Gradient Scale Values( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Sintassi:** obj << Set Gradient Show Missing( "Automatica"|"Attivato"|"Disattivato"="Automatica" )

**Descrizione:** Indica quando mostrare la voce della legenda per i valori mancanti. "Automatica", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Interval Draw Directions

**Sintassi:** obj << Set Interval Draw Directions( Both|Upper|Lower|None )

**Descrizione:** Imposta le direzioni in cui devono essere tracciati gli intervalli.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Interval Draw Directions( "Lower" );

```

### Set Line Color

**Sintassi:** obj << Set Line Color( color )

**Descrizione:** Imposta il colore per tutte le linee nel segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Color( "Green" );

```

### Set Line Style

**Sintassi:** obj << Set Line Style( pen style )

**Descrizione:** Imposta lo stile delle linee. Le opzioni sono Continua, Punteggiata, Tratteggiata, Trattino-punto e Trattino-punto-punto.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Sintassi:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Altro..." )

**Descrizione:** Imposta la larghezza delle linee.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Line Width( 3 );

```

### Set Location

**Sintassi:** obj << Set Location

**Descrizione:** Imposta la posizione del testo. Se è impostata l&apos;opzione Relativo, 0,0 sarà in alto a sinistra e 1,1 sarà in basso a destra. Se Relativo non è impostato, allora le coordinate saranno relative agli assi.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
w[FrameBox( 1 )] << append seg( ts2 = Text Seg( "moves with axes" ) );
ts2 << set location( 60, 60 );
ts2 << get location();

```

### Set Marker

**Sintassi:** obj << Set Marker( marker )

**Descrizione:** Imposta lo stile per tutti gli indicatori.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );

```

### Set Marker Size

**Sintassi:** obj << Set Marker Size( size )

**Descrizione:** Imposta la dimensione degli indicatori. Le opzioni per la dimensione sono Punto, Piccolo, Medio, Grande, XL, XXL e XXXL.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Property

**Sintassi:** obj << Set Property( "property", value )

**Descrizione:** Imposta il valore per la property nominata per il riquadro di visualizzazione.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Relative

**Sintassi:** obj << Set Relative( 0|1,0|1 )

**Descrizione:** Un valore pari a 0 significa che la coordinata x o y sarà relativa al riquadro del frame e un valore di 1 significa che il valore x o y sarà relativo agli assi. Quando relativo è impostato a 0, le coordinate x e y mapperanno da 0,0 a 1,1 per la parte da superiore sinistra a quella inferiore destra del riquadro del grafico.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "fixed bottom left" ) );
seg << set location( 0, 1 );
seg << set relative( 1, 1 );
w[FrameBox( 1 )] << append seg( ts2 = Text Seg( "moves with axes" ) );
ts2 << set location( 60, 60 );

```

### Set Text

**Sintassi:** obj << Set Text( text )

**Descrizione:** Imposta la stringa usata dal segmento di testo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 1 ), Jitter( 1 ) ),
		Line Of Fit(
			X,
			Y,
			Legend( 4 ),
			Confidence of Fit( 1 ),
			Confidence of Prediction( 1 ),
			Degree( "Cubic" ),
			Equation( 1 ),
			Root Mean Square Error( 1 ),
			R²( 0 )
		)
	)
);
g = Report( gb );
fontobj = seg = g[Framebox( 1 )] << Find Seg( "TextSeg" );
seg << Get Text;
seg << Set Text( seg << Get Text || "  Tallest: Lawrence" );

```

### Set Text Alignment

**Sintassi:** obj << Set Text Alignment( left|center|right,<top|center|bottom> )

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "center" ) );
seg << set relative( 1, 1 );
seg << set location( .5, .5 );
seg << set text alignment( center, center );

```

### Set Text Color

**Sintassi:** obj << Set Text Color( color )

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Text Color( "Green" );

```

### Set Text Style

**Sintassi:** obj << Set Text Style( [Sinistra|Centro|Destra], [In alto|VCentro|Alla base|In basso], [Cancellato], [Box] )

**Descrizione:** Imposta come il testo viene rappresentato rispetto alla penna del cursore. Quando è supportato, "Cancellato" riempie il riquadro di delimitazione del testo e "Cancellato" lo delinea. Se non è specificato, l&apos;allineamento orizzontale predefinito è "Sinistra" e quello verticale è "Alla base".

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Set Transparency

**Sintassi:** obj << Set Transparency( number )

**Descrizione:** Imposta la trasparenza della forma. L&apos;argomento deve essere un valore numerico tra 0 e 1.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Transparency( .3 );

```

### Sib

**Sintassi:** seg2 = obj << Sib

**Descrizione:** Restituisce l&apos;elemento di pari livello del segmento di visualizzazione.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Sib;

```

### Sib Append

**Sintassi:** obj << Sib Append( seg2 )

**Descrizione:** Aggiunge un segmento di visualizzazione immediatamente dopo questo.

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
win = New Window( "World",
	gb = Graph(
		FrameSize( 800, 400 ),
		X Scale( -180, 180 ),
		Y Scale( -90, 90 ),
		<<Background Map( Images( "Simple Earth" ) )
	)
);
imgBox = win[framebox( 1 )];
mapSeg = imgBox << FindSeg( MapSeg( 1 ) );
mapSeg << Transparency( 0.5 );
Try(
	xAxis = gb[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = gb[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**Sintassi:** obj << Sib Prepend( seg2 )

**Descrizione:** Aggiunge un segmento di visualizzazione immediatamente prima di questo.

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
Try(
	xAxis = g[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = g[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Text Color

**Sintassi:** obj << Text Color( color )

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Text Color( "Green" );

```

### Text Seg

**Sintassi:** seg = Text Seg("text")

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );

```

### Text Style

**Sintassi:** obj << Text Style( [Sinistra|Centro|Destra], [In alto|VCentro|Alla base|In basso], [Cancellato], [Box] )

**Descrizione:** Imposta come il testo viene rappresentato rispetto alla penna del cursore. Quando è supportato, "Cancellato" riempie il riquadro di delimitazione del testo e "Cancellato" lo delinea. Se non è specificato, l&apos;allineamento orizzontale predefinito è "Sinistra" e quello verticale è "Alla base".

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Transparency

**Sintassi:** obj << Transparency( number )

**Descrizione:** Imposta la trasparenza della forma. L&apos;argomento deve essere un valore numerico tra 0 e 1.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( seg = Text Seg( "default location fixed bottom left" ) );
seg << Set Transparency( .3 );

```

