# ShapeSeg



## Costruttori associati

### Shape Seg

**Sintassi:** ss = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**Descrizione:** Restituisce un segmento di visualizzazione con una raccolta di forme. Ciascuna forma disegna un tratto lungo il percorso specificato se il riempimento è 0, oppure dipinge l&apos;interno del percorso dato se il riempimento non è 0. Il percorso può essere specificato con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude anche il percorso. Il testo del percorso supporta la sintassi SVG.

**Esempio 1**

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));

```

**Esempio 2**

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )},			Row States( {Selected State( 1 ), Color State( "red" )} )		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));

```

## Messaggi degli elementi

### Child

**Sintassi:** seg2 = obj &lt;&lt; Child

**Descrizione:** Restituisce il primo elemento figlio del segmento di visualizzazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Child; // not many segs support children

```

### Class Name

**Sintassi:** classname = obj &lt;&lt; Class Name

**Descrizione:** Restituisce il nome della classe di visualizzazione per il segmento di visualizzazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Class Name;

```

### Clip Shape

**Sintassi:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Descrizione:** Restringe la geometria della forma specificata. La forma può essere specificata utilizzando un file di forma o un percorso. È possibile specificare un ID facoltativo con un file di forma per selezionare una singola forma dal file, altrimenti come zona di ritaglio si utilizza l&apos;unione di tutte le forme. È possibile specificare un percorso di ritaglio con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude il percorso. Il testo del percorso supporta la sintassi SVG.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );Wait( 2 );cs << Clip Shape( Boundaries( "US States" ) );

```

### Color

**Sintassi:** obj &lt;&lt; Color( color )

**Descrizione:** Imposta il colore per tutte le forme.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Color( "Green" );

```

### Color Theme

**Sintassi:** obj &lt;&lt; Color Theme

### Delete

**Sintassi:** obj &lt;&lt; Delete

**Descrizione:** Elimina il segmento di visualizzazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Delete;

```

### Density Gradient

**Sintassi:** obj &lt;&lt; Density Gradient( "Ombreggia in bianco"|"Ombreggia in grigio"|"Colore pieno"="Ombreggia in bianco" )

**Descrizione:** Imposta il comportamento di colorazione dei gradienti di densità. "Ombreggia in bianco", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Density Gradient( "Fade to Gray" );

```

### Enabled

**Sintassi:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Descrizione:** Un oggetto non abilitato non risponderà agli input della tastiera o del mouse. Questa proprietà è ereditata da oggetti secondari, pertanto un oggetto contenitore non abilitato causerà la disabilitazione di tutti gli oggetti dipendenti.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Fill Color

**Sintassi:** obj &lt;&lt; Fill Color( color )

**Descrizione:** Imposta il colore di riempimento per tutte le forme.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Fill Color( "Green" );

```

### Frame

**Sintassi:** FrameBox = obj &lt;&lt; Frame

**Descrizione:** Restituisce il riquadro del frame in cui si trova il segmento di visualizzazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Frame;

```

### Get Clip Shape

**Sintassi:** obj &lt;&lt; Get Clip Shape

**Descrizione:** Restituisce la forma di ritaglio corrente

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Color

**Sintassi:** color = obj &lt;&lt; Get Color

**Descrizione:** Restituisce il colore della forma.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Color;

```

### Get Density Gradient

**Sintassi:** obj &lt;&lt; Get Density Gradient

**Descrizione:** Ottiene il comportamento di colorazione dei gradienti di densità.

**JMP Versione aggiunta:** 15

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Density Gradient;

```

### Get Description

**Sintassi:** description = obj &lt;&lt; Get Description

**Descrizione:** Ottiene la descrizione del segmento di visualizzazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << get description();

```

### Get Enabled

**Sintassi:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Descrizione:** Un oggetto non abilitato non risponderà agli input della tastiera o del mouse. Questa proprietà è ereditata da oggetti secondari, pertanto un oggetto contenitore non abilitato causerà la disabilitazione di tutti gli oggetti dipendenti.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Fill Color

**Sintassi:** obj &lt;&lt; Get Fill Color

**Descrizione:** Restituisce il colore di riempimento delle forme.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Fill Color;

```

### Get Fill Pattern

**Sintassi:** obj &lt;&lt; Get Fill Pattern

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Fill Pattern;

```

### Get Gradient

**Sintassi:** obj &lt;&lt; Get Gradient

**Descrizione:** Ottiene il gradiente di colorazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient;

```

### Get Gradient Color Theme

**Sintassi:** obj &lt;&lt; Get Gradient Color Theme

**Descrizione:** Ottiene il tema colori del gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Sintassi:** obj &lt;&lt; Get Gradient Discrete Colors

**Descrizione:** Indica se ogni livello in un gradiente deve essere di un colore singolo o se i colori devono avere una transizione graduale.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Sintassi:** obj &lt;&lt; Get Gradient Fill

**Descrizione:** Ottiene il comportamento di colorazione per valori al di fuori del range della scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Sintassi:** obj &lt;&lt; Get Gradient Label Count

**Descrizione:** Ottiene il numero di etichette nella legenda di un gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Sintassi:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**Descrizione:** Ottiene l’insieme di valori usati per le etichette nella scala del gradiente.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Sintassi:** obj &lt;&lt; Get Gradient Legend Horizontal

**Descrizione:** Indica se la legenda del gradiente deve essere disegnata orizzontalmente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Sintassi:** obj &lt;&lt; Get Gradient Legend Label Format

**Descrizione:** Ottiene il formato delle etichette della legenda del gradiente

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Sintassi:** obj &lt;&lt; Get Gradient Legend Label Width

**Descrizione:** Ottiene la lunghezza massima in caratteri delle etichette della legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Sintassi:** obj &lt;&lt; Get Gradient Legend Show Labels

**Descrizione:** Indica se le etichette del livello devono essere mostrate nella legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Sintassi:** obj &lt;&lt; Get Gradient Level Count

**Descrizione:** Ottiene il numero di livelli in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Sintassi:** obj &lt;&lt; Get Gradient Lightness Range

**Descrizione:** Ottiene la luminosità minima e massima per i colori dei livelli in un gradiente. I valori mancanti indicano che è stato utilizzato il valore originale del tema colori.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Sintassi:** obj &lt;&lt; Get Gradient Range

**Descrizione:** Ottiene il range entro il quale vengono generate scale di gradiente non personalizzate.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Sintassi:** obj &lt;&lt; Get Gradient Reverse Color Order

**Descrizione:** Indica se l&apos;ordine dei colori in un gradiente è invertito.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Sintassi:** obj &lt;&lt; Get Gradient Reverse Label Order

**Descrizione:** Indica se l&apos;ordine delle etichette in un gradiente è invertito.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Sintassi:** obj &lt;&lt; Get Gradient Scale

**Descrizione:** Ottiene il tipo di scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Sintassi:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**Descrizione:** Ottiene l’insieme di valori usati per le etichette nella scala del gradiente.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Sintassi:** obj &lt;&lt; Get Gradient Show Missing

**Descrizione:** Indica quando mostrare la voce della legenda per i valori mancanti.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Sintassi:** obj &lt;&lt; Get Gradient Transparency

**Descrizione:** Ottiene il comportamento di trasparenza dei gradienti.

**JMP Versione aggiunta:** 15

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Gradient Transparency;

```

### Get Line Style

**Sintassi:** pen style = obj &lt;&lt; Get Line Style

**Descrizione:** Restituisce lo stile delle linee.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Line Style;

```

### Get Line Width

**Sintassi:** number = obj &lt;&lt; Get Line Width

**Descrizione:** Restituisce la larghezza delle linee.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Line Width;

```

### Get Namespace

**Sintassi:** obj &lt;&lt; Get Namespace

**Descrizione:** Restituisce lo spazio dei nomi associato a questo oggetto di visualizzazione.

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get Properties

**Sintassi:** obj &lt;&lt; Get Properties

**Descrizione:** Restituisce un array associativo che contiene le proprietà del riquadro di visualizzazione e i rispettivi valori.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Properties;

```

### Get Property

**Sintassi:** obj &lt;&lt; Get Property( "property" )

**Descrizione:** Restituisce l&apos;impostazione corrente per la property nominata.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property( "Enabled" );

```

### Get Property List

**Sintassi:** obj &lt;&lt; Get Property List

**Descrizione:** Restituisce un elenco di proprietà del riquadro di visualizzazione.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property List;

```

### Get Transparency

**Sintassi:** obj &lt;&lt; Get Transparency

**Descrizione:** Restituisce un valore numerico rappresentante la trasparenza compreso tra 0 e 1.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Get Transparency;

```

### Gradient

**Sintassi:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Descrizione:** Imposta il gradiente di colorazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Sintassi:** obj &lt;&lt; Gradient Color Theme

**Descrizione:** Imposta il tema colori del gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Sintassi:** obj &lt;&lt; Gradient Discrete Colors

**Descrizione:** Indica se ogni livello in un gradiente deve essere di un colore singolo o se i colori devono avere una transizione graduale.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Sintassi:** obj &lt;&lt; Gradient Fill( "Tra"|"Sopra"|"Sotto"|"Sopra Sotto"="Sopra Sotto" )

**Descrizione:** Imposta il comportamento di colorazione per valori al di fuori del range della scala del gradiente. "Sopra Sotto", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Sintassi:** obj &lt;&lt; Gradient Label Count

**Descrizione:** Imposta il numero di etichette nella legenda di un gradiente. È uno in più rispetto al numero di curve di livello.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Sintassi:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Sintassi:** obj &lt;&lt; Gradient Legend Horizontal

**Descrizione:** Indica se la legenda del gradiente deve essere disegnata orizzontalmente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Sintassi:** obj &lt;&lt; Gradient Legend Label Format

**Descrizione:** Imposta il formato per le etichette della legenda del gradiente

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Sintassi:** obj &lt;&lt; Gradient Legend Label Width

**Descrizione:** Imposta la lunghezza massima in caratteri delle etichette della legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Sintassi:** obj &lt;&lt; Gradient Legend Show Labels

**Descrizione:** Indica se le etichette di livello devono essere mostrate nella legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Sintassi:** obj &lt;&lt; Gradient Level Count

**Descrizione:** Imposta il numero di livelli in un gradiente. È uno in meno rispetto al numero di etichette.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Sintassi:** obj &lt;&lt; Gradient Lightness Range

**Descrizione:** Imposta la luminosità minima e massima per i colori dei livelli in un gradiente. I colori saranno scalati per coprire questo range. Un valore mancante viene trattato come nessuna modifica.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Esempio 2**

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Esempio 3**

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Sintassi:** obj &lt;&lt; Gradient Range( "Impostazione predefinita"|"Range di dati esatto"|"Intermedio 90%"="Impostazione predefinita" )

**Descrizione:** Imposta il range entro il quale vengono generate scale di gradiente non personalizzate. "Impostazione predefinita", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Sintassi:** obj &lt;&lt; Gradient Reverse Color Order

**Descrizione:** Inverte l&apos;ordine dei colori in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Sintassi:** obj &lt;&lt; Gradient Reverse Label Order

**Descrizione:** Inverte l&apos;ordine delle etichette in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Sintassi:** obj &lt;&lt; Gradient Scale( "Lineare"|"Quantile"|"Deviazione standard"|"Log"|"Offset logaritmi"|"Personalizzata"="Lineare" )

**Descrizione:** Imposta il tipo di scala del gradiente. "Lineare", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Sintassi:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Sintassi:** obj &lt;&lt; Gradient Show Missing( "Automatica"|"Attivato"|"Disattivato"="Automatica" )

**Descrizione:** Indica quando mostrare la voce della legenda per i valori mancanti. "Automatica", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**Sintassi:** obj &lt;&lt; Gradient Transparency( "Nessuno"|"Lineare"="Lineare" )

**Descrizione:** Imposta il comportamento di trasparenza dei gradienti. "Lineare", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Gradient Transparency( "None" );

```

### Line Style

**Sintassi:** obj &lt;&lt; Line Style( pen style )

**Descrizione:** Imposta lo stile delle linee. Le opzioni sono Continua, Punteggiata, Tratteggiata, Trattino-punto e Trattino-punto-punto.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Line Width

**Sintassi:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Altro..." )

**Descrizione:** Imposta la larghezza delle linee.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Line Width( 3 );

```

### Messaggi degli elementi condivisi

### Parent

**Sintassi:** seg2 = obj &lt;&lt; Parent

**Descrizione:** Restituisce l&apos;elemento principale del segmento di visualizzazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Parent;

```

### Revert

**Sintassi:** obj &lt;&lt; Revert

**Descrizione:** Riporta il segmento allo stato originale.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));Wait( 1 );seg << Set Color( "Red" );Wait( 1 );seg << Revert;

```

### Set Color

**Sintassi:** obj &lt;&lt; Set Color( color )

**Descrizione:** Imposta il colore per tutte le forme.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Color( "Green" );

```

### Set Description

**Sintassi:** obj &lt;&lt; Set Description( description )

**Descrizione:** Imposta la descrizione del segmento di visualizzazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << set description( "my seg" );

```

### Set Fill Color

**Sintassi:** obj &lt;&lt; Set Fill Color( color )

**Descrizione:** Imposta il colore di riempimento per tutte le forme.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Sintassi:** obj &lt;&lt; Set Fill Pattern

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Fill Color( "Blue" );seg << Set Fill Pattern( "h wave medium" );

```

### Set Gradient

**Sintassi:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Descrizione:** Imposta il gradiente di colorazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Sintassi:** obj &lt;&lt; Set Gradient Color Theme

**Descrizione:** Imposta il tema colori del gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Sintassi:** obj &lt;&lt; Set Gradient Custom Scale

**Descrizione:** Imposta il gradiente per l’utilizzo di un elenco di valori per una scala personalizzata.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Sintassi:** obj &lt;&lt; Set Gradient Discrete Colors

**Descrizione:** Indica se ogni livello in un gradiente deve essere di un colore singolo o se i colori devono avere una transizione graduale.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Sintassi:** obj &lt;&lt; Set Gradient Fill( "Tra"|"Sopra"|"Sotto"|"Sopra Sotto"="Sopra Sotto" )

**Descrizione:** Imposta il comportamento di colorazione per valori al di fuori del range della scala del gradiente. "Sopra Sotto", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Sintassi:** obj &lt;&lt; Set Gradient Label Count

**Descrizione:** Imposta il numero di etichette nella legenda di un gradiente. È uno in più rispetto al numero di curve di livello.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Sintassi:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Sintassi:** obj &lt;&lt; Set Gradient Legend Horizontal

**Descrizione:** Indica se la legenda del gradiente deve essere disegnata orizzontalmente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Sintassi:** obj &lt;&lt; Set Gradient Legend Label Format

**Descrizione:** Imposta il formato per le etichette della legenda del gradiente

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Sintassi:** obj &lt;&lt; Set Gradient Legend Label Width

**Descrizione:** Imposta la lunghezza massima in caratteri delle etichette della legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Sintassi:** obj &lt;&lt; Set Gradient Legend Show Labels

**Descrizione:** Indica se le etichette di livello devono essere mostrate nella legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Sintassi:** obj &lt;&lt; Set Gradient Level Count

**Descrizione:** Imposta il numero di livelli in un gradiente. È uno in meno rispetto al numero di etichette.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Sintassi:** obj &lt;&lt; Set Gradient Lightness Range

**Descrizione:** Imposta la luminosità minima e massima per i colori dei livelli in un gradiente. I colori saranno scalati per coprire questo range. Un valore mancante viene trattato come nessuna modifica.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Esempio 2**

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Esempio 3**

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Sintassi:** obj &lt;&lt; Set Gradient Range( "Impostazione predefinita"|"Range di dati esatto"|"Intermedio 90%"="Impostazione predefinita" )

**Descrizione:** Imposta il range entro il quale vengono generate scale di gradiente non personalizzate. "Impostazione predefinita", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Sintassi:** obj &lt;&lt; Set Gradient Reverse Color Order

**Descrizione:** Inverte l&apos;ordine dei colori in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Sintassi:** obj &lt;&lt; Set Gradient Reverse Label Order

**Descrizione:** Inverte l&apos;ordine delle etichette in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Sintassi:** obj &lt;&lt; Set Gradient Scale( "Lineare"|"Quantile"|"Deviazione standard"|"Log"|"Offset logaritmi"|"Personalizzata"="Lineare" )

**Descrizione:** Imposta il tipo di scala del gradiente. "Lineare", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Sintassi:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Sintassi:** obj &lt;&lt; Set Gradient Show Missing( "Automatica"|"Attivato"|"Disattivato"="Automatica" )

**Descrizione:** Indica quando mostrare la voce della legenda per i valori mancanti. "Automatica", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Set Label Offset

**Sintassi:** obj &lt;&lt; Set Label Offset {Index, Longitude, Latitude}, ...

**Descrizione:** Posiziona le etichette delle righe in base alle coordinate specificate.

**JMP Versione aggiunta:** 16

### Set Line Style

**Sintassi:** obj &lt;&lt; Set Line Style( pen style )

**Descrizione:** Imposta lo stile delle linee. Le opzioni sono Continua, Punteggiata, Tratteggiata, Trattino-punto e Trattino-punto-punto.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Sintassi:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Altro..." )

**Descrizione:** Imposta la larghezza delle linee.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Line Width( 3 );

```

### Set Property

**Sintassi:** obj &lt;&lt; Set Property( "property", value )

**Descrizione:** Imposta il valore per la property nominata per il riquadro di visualizzazione.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

### Set Transparency

**Sintassi:** obj &lt;&lt; Set Transparency( number )

**Descrizione:** Imposta la trasparenza della forma. L&apos;argomento deve essere un valore numerico tra 0 e 1.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Transparency( .3 );

```

### Sib

**Sintassi:** seg2 = obj &lt;&lt; Sib

**Descrizione:** Restituisce l&apos;elemento di pari livello del segmento di visualizzazione.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Sib;

```

### Sib Append

**Sintassi:** obj &lt;&lt; Sib Append( seg2 )

**Descrizione:** Aggiunge un segmento di visualizzazione immediatamente dopo questo.

```jsl

win = New Window( "World",	gb = Graph(		FrameSize( 800, 400 ),		X Scale( -180, 180 ),		Y Scale( -90, 90 ),		<<Background Map( Images( "Simple Earth" ) )	));imgBox = win[framebox( 1 )];mapSeg = imgBox << FindSeg( MapSeg( 1 ) );mapSeg << Transparency( 0.5 );Try(	xAxis = gb[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = gb[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**Sintassi:** obj &lt;&lt; Sib Prepend( seg2 )

**Descrizione:** Aggiunge un segmento di visualizzazione immediatamente prima di questo.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Transparency

**Sintassi:** obj &lt;&lt; Transparency( number )

**Descrizione:** Imposta la trasparenza della forma. L&apos;argomento deve essere un valore numerico tra 0 e 1.

```jsl

New Window( "Shape Seg Example",	g = Graph Box(		Shape Seg(			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),			Path( "M20,20 C20,60 60,60 60,20 Z" )}		)	));frame = g[Frame Box( 1 )];seg = (frame << Find Seg( Shape Seg( 1 ) ));seg << Set Transparency( .3 );

```

