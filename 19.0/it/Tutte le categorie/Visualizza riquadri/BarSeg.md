# BarSeg



## Costruttori associati

### Bar Seg

**Sintassi:** Bar Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**Descrizione:** Restituisce un segmento che rappresenta i dati sommarizzati come barre.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));

```

## Messaggi degli elementi

### Child

**Sintassi:** seg2 = obj &lt;&lt; Child

**Descrizione:** Restituisce il primo elemento figlio del segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Child; // not many segs support children

```

### Class Name

**Sintassi:** classname = obj &lt;&lt; Class Name

**Descrizione:** Restituisce il nome della classe di visualizzazione per il segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Class Name;

```

### Clip Shape

**Sintassi:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Descrizione:** Restringe la geometria della forma specificata. La forma può essere specificata utilizzando un file di forma o un percorso. È possibile specificare un ID facoltativo con un file di forma per selezionare una singola forma dal file, altrimenti come zona di ritaglio si utilizza l&apos;unione di tutte le forme. È possibile specificare un percorso di ritaglio con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude il percorso. Il testo del percorso supporta la sintassi SVG.

**JMP Versione aggiunta:** 14

```jsl

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

**Sintassi:** obj &lt;&lt; Color Theme

### Delete

**Sintassi:** obj &lt;&lt; Delete

**Descrizione:** Elimina il segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Delete;

```

### Density Gradient

**Sintassi:** obj &lt;&lt; Density Gradient( "Ombreggia in bianco"|"Ombreggia in grigio"|"Colore pieno"="Ombreggia in bianco" )

**Descrizione:** Imposta il comportamento di colorazione dei gradienti di densità. "Ombreggia in bianco", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Density Gradient( "Fade to Gray" );

```

### Enabled

**Sintassi:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Descrizione:** Un oggetto non abilitato non risponderà agli input della tastiera o del mouse. Questa proprietà è ereditata da oggetti secondari, pertanto un oggetto contenitore non abilitato causerà la disabilitazione di tutti gli oggetti dipendenti.

```jsl

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

**Sintassi:** obj &lt;&lt; Error Bar Cap( "Nessuno"|"Minuscolo"|"Piccolo"|"Medio"|"Grande" )

**Descrizione:** Specifica quale tipo di estremità di chiusura inserire nelle barre di errore.

**JMP Versione aggiunta:** 14

```jsl

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

**Sintassi:** obj &lt;&lt; Error Bar Cap Shape( begin, end )

**Descrizione:** Specifica la forma dell&apos;estremità di chiusura da visualizzare sulle barre di errore. Un singolo argomento imposta la forma per entrambe le estremità della barra oppure è possibile fornire argomenti separati per l&apos;inizio e la fine. La forma di default è "Line". Una forma a "Arrow" disegna una freccia rivolta verso l&apos;esterno e "None" omette la chiusura.

**JMP Versione aggiunta:** 18

```jsl

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

**Sintassi:** obj &lt;&lt; Fill Color( color )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Fill Color( "Green" );

```

### First Value

**Sintassi:** obj &lt;&lt; First Value( state=0|1 )

**JMP Versione aggiunta:** 16

### Frame

**Sintassi:** FrameBox = obj &lt;&lt; Frame

**Descrizione:** Restituisce il riquadro del frame in cui si trova il segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Frame;

```

### Get Base Font

**Sintassi:** font = obj &lt;&lt; Get Base Font

**Descrizione:** Restituisce il carattere di base usato per il testo tracciato dal riquadro. I caratteri di base sono nomi già definiti come Title, Text, Annotation e altri, che sono specificati nelle Preferenze dei caratteri.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Base Font;

```

### Get Clip Shape

**Sintassi:** obj &lt;&lt; Get Clip Shape

**Descrizione:** Restituisce la forma di ritaglio corrente

**JMP Versione aggiunta:** 14

```jsl

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

**Sintassi:** obj &lt;&lt; Get Density Gradient

**Descrizione:** Ottiene il comportamento di colorazione dei gradienti di densità.

**JMP Versione aggiunta:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Density Gradient;

```

### Get Description

**Sintassi:** description = obj &lt;&lt; Get Description

**Descrizione:** Ottiene la descrizione del segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << get description();

```

### Get Enabled

**Sintassi:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Descrizione:** Un oggetto non abilitato non risponderà agli input della tastiera o del mouse. Questa proprietà è ereditata da oggetti secondari, pertanto un oggetto contenitore non abilitato causerà la disabilitazione di tutti gli oggetti dipendenti.

```jsl

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

**Sintassi:** obj &lt;&lt; Get Error Bar Cap

**Descrizione:** Restituisce il tipo corrente di estremità di chiusura della barra di errore

**JMP Versione aggiunta:** 14

```jsl

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

**Sintassi:** { begin, end } = obj &lt;&lt; Get Error Bar Cap Shape

**Descrizione:** Restituisce la forma dell’estremità di chiusura sulle barre di errore.

**JMP Versione aggiunta:** 18

```jsl

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

**Sintassi:** color = obj &lt;&lt; Get Fill Color

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Fill Color;

```

### Get Fill Pattern

**Sintassi:** obj &lt;&lt; Get Fill Pattern

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Fill Pattern;

```

### Get Font

**Sintassi:** obj &lt;&lt; Get Font

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Font;

```

### Get Font Name

**Sintassi:** obj &lt;&lt; Get Font Name

**Descrizione:** Restituisce il nome del carattere.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**Sintassi:** obj &lt;&lt; Get Font Scale

**Descrizione:** Restituisce il fattore di scala corrente per il carattere.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Font Scale;

```

### Get Font Size

**Sintassi:** obj &lt;&lt; Get Font Size

**Descrizione:** Restituisce la dimensione del carattere.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Font Size;

```

### Get Font Style

**Sintassi:** obj &lt;&lt; Get Font Style

**Descrizione:** Restituisce il nome dello stile carattere.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**Sintassi:** obj &lt;&lt; Get Gradient

**Descrizione:** Ottiene il gradiente di colorazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**Sintassi:** obj &lt;&lt; Get Gradient Color Theme

**Descrizione:** Ottiene il tema colori del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Sintassi:** obj &lt;&lt; Get Gradient Discrete Colors

**Descrizione:** Indica se ogni livello in un gradiente deve essere di un colore singolo o se i colori devono avere una transizione graduale.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Sintassi:** obj &lt;&lt; Get Gradient Fill

**Descrizione:** Ottiene il comportamento di colorazione per valori al di fuori del range della scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Sintassi:** obj &lt;&lt; Get Gradient Label Count

**Descrizione:** Ottiene il numero di etichette nella legenda di un gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Sintassi:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**Descrizione:** Ottiene l’insieme di valori usati per le etichette nella scala del gradiente.

**JMP Versione aggiunta:** 18

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Sintassi:** obj &lt;&lt; Get Gradient Legend Horizontal

**Descrizione:** Indica se la legenda del gradiente deve essere disegnata orizzontalmente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Sintassi:** obj &lt;&lt; Get Gradient Legend Label Format

**Descrizione:** Ottiene il formato delle etichette della legenda del gradiente

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Sintassi:** obj &lt;&lt; Get Gradient Legend Label Width

**Descrizione:** Ottiene la lunghezza massima in caratteri delle etichette della legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Sintassi:** obj &lt;&lt; Get Gradient Legend Show Labels

**Descrizione:** Indica se le etichette del livello devono essere mostrate nella legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Sintassi:** obj &lt;&lt; Get Gradient Level Count

**Descrizione:** Ottiene il numero di livelli in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Sintassi:** obj &lt;&lt; Get Gradient Lightness Range

**Descrizione:** Ottiene la luminosità minima e massima per i colori dei livelli in un gradiente. I valori mancanti indicano che è stato utilizzato il valore originale del tema colori.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Sintassi:** obj &lt;&lt; Get Gradient Range

**Descrizione:** Ottiene il range entro il quale vengono generate scale di gradiente non personalizzate.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Sintassi:** obj &lt;&lt; Get Gradient Reverse Color Order

**Descrizione:** Indica se l&apos;ordine dei colori in un gradiente è invertito.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Sintassi:** obj &lt;&lt; Get Gradient Reverse Label Order

**Descrizione:** Indica se l&apos;ordine delle etichette in un gradiente è invertito.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Sintassi:** obj &lt;&lt; Get Gradient Scale

**Descrizione:** Ottiene il tipo di scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Sintassi:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**Descrizione:** Ottiene l’insieme di valori usati per le etichette nella scala del gradiente.

**JMP Versione aggiunta:** 18

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Sintassi:** obj &lt;&lt; Get Gradient Show Missing

**Descrizione:** Indica quando mostrare la voce della legenda per i valori mancanti.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Sintassi:** obj &lt;&lt; Get Gradient Transparency

**Descrizione:** Ottiene il comportamento di trasparenza dei gradienti.

**JMP Versione aggiunta:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**Sintassi:** obj &lt;&lt; Get Interval Draw Directions

**Descrizione:** Ottiene le direzioni in cui devono essere tracciati gli intervalli.

**JMP Versione aggiunta:** 17

```jsl

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

**Sintassi:** color = obj &lt;&lt; Get Line Color

**Descrizione:** Restituisce il colore delle linee.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Line Color;

```

### Get Line Style

**Sintassi:** pen style = obj &lt;&lt; Get Line Style

**Descrizione:** Restituisce lo stile delle linee.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Line Style;

```

### Get Line Width

**Sintassi:** number = obj &lt;&lt; Get Line Width

**Descrizione:** Restituisce la larghezza delle linee.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Line Width;

```

### Get Marker

**Sintassi:** marker = obj &lt;&lt; Get Marker

**Descrizione:** Restituisce lo stile dell&apos;indicatore.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Marker;

```

### Get Marker Size

**Sintassi:** size = obj &lt;&lt; Get Marker Size

**Descrizione:** Restituisce la dimensione degli indicatori.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Marker Size;

```

### Get Namespace

**Sintassi:** obj &lt;&lt; Get Namespace

**Descrizione:** Restituisce lo spazio dei nomi associato a questo oggetto di visualizzazione.

```jsl

//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Properties

**Sintassi:** obj &lt;&lt; Get Properties

**Descrizione:** Restituisce un array associativo che contiene le proprietà del riquadro di visualizzazione e i rispettivi valori.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Sintassi:** obj &lt;&lt; Get Property( "property" )

**Descrizione:** Restituisce l&apos;impostazione corrente per la property nominata.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Sintassi:** obj &lt;&lt; Get Property List

**Descrizione:** Restituisce un elenco di proprietà del riquadro di visualizzazione.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get Side by Side Overlap

**Sintassi:** proportion = obj &lt;&lt; Get Side by Side Overlap

**Descrizione:** Restituisce la quantità di sovrapposizione per i sotto-elementi negli stili di barra "fianco a fianco".

**JMP Versione aggiunta:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ), Overlay( :sex ) ),
	Elements( Bar( X, Y ) )
);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Side by Side Overlap();

```

### Get Text Color

**Sintassi:** obj &lt;&lt; Get Text Color

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Text Color;

```

### Get Text Style

**Sintassi:** obj &lt;&lt; Get Text Style

**Descrizione:** Ottiene la modalità di rappresentazione del testo rispetto alla penna del cursore.

**JMP Versione aggiunta:** 17

```jsl

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

**Sintassi:** obj &lt;&lt; Get Transparency

**Descrizione:** Restituisce un valore numerico rappresentante la trasparenza compreso tra 0 (trasparente) e 1 (opaco).

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Transparency;

```

### Get Width Proportion

**Sintassi:** proportion = obj &lt;&lt; Get Width Proportion

**Descrizione:** Restituisce la proporzione della larghezza disponibile della barra da usare per il disegno. 0 significa dimensioni automatiche. 1 significa senza intervallo.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Width Proportion();

```

### Gradient

**Sintassi:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Descrizione:** Imposta il gradiente di colorazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Sintassi:** obj &lt;&lt; Gradient Color Theme

**Descrizione:** Imposta il tema colori del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Sintassi:** obj &lt;&lt; Gradient Discrete Colors

**Descrizione:** Indica se ogni livello in un gradiente deve essere di un colore singolo o se i colori devono avere una transizione graduale.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Sintassi:** obj &lt;&lt; Gradient Fill( "Tra"|"Sopra"|"Sotto"|"Sopra Sotto"="Sopra Sotto" )

**Descrizione:** Imposta il comportamento di colorazione per valori al di fuori del range della scala del gradiente. "Sopra Sotto", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Sintassi:** obj &lt;&lt; Gradient Label Count

**Descrizione:** Imposta il numero di etichette nella legenda di un gradiente. È uno in più rispetto al numero di curve di livello.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Sintassi:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Sintassi:** obj &lt;&lt; Gradient Legend Horizontal

**Descrizione:** Indica se la legenda del gradiente deve essere disegnata orizzontalmente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Sintassi:** obj &lt;&lt; Gradient Legend Label Format

**Descrizione:** Imposta il formato per le etichette della legenda del gradiente

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Sintassi:** obj &lt;&lt; Gradient Legend Label Width

**Descrizione:** Imposta la lunghezza massima in caratteri delle etichette della legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Sintassi:** obj &lt;&lt; Gradient Legend Show Labels

**Descrizione:** Indica se le etichette di livello devono essere mostrate nella legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Sintassi:** obj &lt;&lt; Gradient Level Count

**Descrizione:** Imposta il numero di livelli in un gradiente. È uno in meno rispetto al numero di etichette.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Sintassi:** obj &lt;&lt; Gradient Lightness Range

**Descrizione:** Imposta la luminosità minima e massima per i colori dei livelli in un gradiente. I colori saranno scalati per coprire questo range. Un valore mancante viene trattato come nessuna modifica.

**JMP Versione aggiunta:** 18

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

#### Esempio 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Sintassi:** obj &lt;&lt; Gradient Range( "Impostazione predefinita"|"Range di dati esatto"|"Intermedio 90%"="Impostazione predefinita" )

**Descrizione:** Imposta il range entro il quale vengono generate scale di gradiente non personalizzate. "Impostazione predefinita", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Sintassi:** obj &lt;&lt; Gradient Reverse Color Order

**Descrizione:** Inverte l&apos;ordine dei colori in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Sintassi:** obj &lt;&lt; Gradient Reverse Label Order

**Descrizione:** Inverte l&apos;ordine delle etichette in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Sintassi:** obj &lt;&lt; Gradient Scale( "Lineare"|"Quantile"|"Deviazione standard"|"Log"|"Offset logaritmi"|"Personalizzata"="Lineare" )

**Descrizione:** Imposta il tipo di scala del gradiente. "Lineare", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Sintassi:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Sintassi:** obj &lt;&lt; Gradient Show Missing( "Automatica"|"Attivato"|"Disattivato"="Automatica" )

**Descrizione:** Indica quando mostrare la voce della legenda per i valori mancanti. "Automatica", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

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

**Sintassi:** obj &lt;&lt; Gradient Transparency( "Nessuno"|"Lineare"="Lineare" )

**Descrizione:** Imposta il comportamento di trasparenza dei gradienti. "Lineare", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Gradient Transparency( "None" );

```

### Last Value

**Sintassi:** obj &lt;&lt; Last Value( state=0|1 )

**JMP Versione aggiunta:** 16

### Line Color

**Sintassi:** obj &lt;&lt; Line Color( color )

**Descrizione:** Imposta il colore per tutte le linee nel segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Color( "Green" );

```

### Line Style

**Sintassi:** obj &lt;&lt; Line Style( pen style )

**Descrizione:** Imposta lo stile delle linee. Le opzioni sono Continua, Punteggiata, Tratteggiata, Trattino-punto e Trattino-punto-punto.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**Sintassi:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Altro..." )

**Descrizione:** Imposta la larghezza delle linee.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Width( 3 );

```

### Marker

**Sintassi:** obj &lt;&lt; Marker( marker )

**Descrizione:** Imposta lo stile per tutti gli indicatori.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );

```

### Marker Size

**Sintassi:** obj &lt;&lt; Marker Size( size )

**Descrizione:** Imposta la dimensione degli indicatori. Le opzioni per la dimensione sono Punto, Piccolo, Medio, Grande, XL, XXL e XXXL.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**Sintassi:** obj &lt;&lt; Max Value( state=0|1 )

**JMP Versione aggiunta:** 16

### Messaggi degli elementi condivisi

### Min Value

**Sintassi:** obj &lt;&lt; Min Value( state=0|1 )

**JMP Versione aggiunta:** 16

### Name

**Sintassi:** obj &lt;&lt; Name( state=0|1 )

**JMP Versione aggiunta:** 16

### Parent

**Sintassi:** seg2 = obj &lt;&lt; Parent

**Descrizione:** Restituisce l&apos;elemento principale del segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Parent;

```

### Revert

**Sintassi:** obj &lt;&lt; Revert

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Revert;

```

### Set Base Font

**Sintassi:** obj &lt;&lt; Set Base Font( "Testo"|"Intestazione"|"Titolo"|"Piccolo"|"Mono"|"Editor delle formule"|"Annotazione"|"Asse"|"Indicatore"|"Titolo dell&apos;asse"|"Etichetta del grafico"|"Legenda"|"Titolo del grafico"|"Didascalia"|"Tabella di dati"|"Etichetta al passaggio del mouse" )

**Descrizione:** Imposta il carattere di base del testo tracciato dal riquadro.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**Sintassi:** obj &lt;&lt; Set Description( description )

**Descrizione:** Imposta la descrizione del segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << set description( "my seg" );

```

### Set Error Bar Cap

**Sintassi:** obj &lt;&lt; Set Error Bar Cap( "Nessuno"|"Minuscolo"|"Piccolo"|"Medio"|"Grande" )

**Descrizione:** Specifica quale tipo di estremità di chiusura inserire nelle barre di errore.

**JMP Versione aggiunta:** 14

```jsl

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

**Sintassi:** obj &lt;&lt; Set Error Bar Cap Shape( begin, end )

**Descrizione:** Specifica la forma dell&apos;estremità di chiusura da visualizzare sulle barre di errore. Un singolo argomento imposta la forma per entrambe le estremità della barra oppure è possibile fornire argomenti separati per l&apos;inizio e la fine. La forma di default è "Line". Una forma a "Arrow" disegna una freccia rivolta verso l&apos;esterno e "None" omette la chiusura.

**JMP Versione aggiunta:** 18

```jsl

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

**Sintassi:** obj &lt;&lt; Set Fill Color( color )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Sintassi:** obj &lt;&lt; Set Fill Pattern

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**Sintassi:** obj &lt;&lt; Set Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font( "Arial Black" );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Sintassi:** obj &lt;&lt; Set Font Name( fontname )

**Descrizione:** Imposta il carattere per le stringhe di testo.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Sintassi:** obj &lt;&lt; Set Font Scale( f )

**Descrizione:** Imposta un fattore di scala per il carattere corrente. Il fattore di scala verrà applicato alla dimensione determinata dal carattere di base e alla dimensione in punti.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Sintassi:** obj &lt;&lt; Set Font Size( n )

**Descrizione:** Imposta la dimensione del carattere (in punti) per le stringhe di testo.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Size( 14 );

```

### Set Font Style

**Sintassi:** obj &lt;&lt; Set Font Style( style )

**Descrizione:** Imposta lo stile carattere per le stringhe di testo. Per impostare più di uno stile contemporaneamente, posizionare le stringhe nella stessa stringa, separate da spazi (Vedere Esempio 2 di seguito).

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Style( "Italic" );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**Sintassi:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Descrizione:** Imposta il gradiente di colorazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Sintassi:** obj &lt;&lt; Set Gradient Color Theme

**Descrizione:** Imposta il tema colori del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Sintassi:** obj &lt;&lt; Set Gradient Custom Scale

**Descrizione:** Imposta il gradiente per l’utilizzo di un elenco di valori per una scala personalizzata.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Sintassi:** obj &lt;&lt; Set Gradient Discrete Colors

**Descrizione:** Indica se ogni livello in un gradiente deve essere di un colore singolo o se i colori devono avere una transizione graduale.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Sintassi:** obj &lt;&lt; Set Gradient Fill( "Tra"|"Sopra"|"Sotto"|"Sopra Sotto"="Sopra Sotto" )

**Descrizione:** Imposta il comportamento di colorazione per valori al di fuori del range della scala del gradiente. "Sopra Sotto", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Sintassi:** obj &lt;&lt; Set Gradient Label Count

**Descrizione:** Imposta il numero di etichette nella legenda di un gradiente. È uno in più rispetto al numero di curve di livello.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Sintassi:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Sintassi:** obj &lt;&lt; Set Gradient Legend Horizontal

**Descrizione:** Indica se la legenda del gradiente deve essere disegnata orizzontalmente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Sintassi:** obj &lt;&lt; Set Gradient Legend Label Format

**Descrizione:** Imposta il formato per le etichette della legenda del gradiente

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Sintassi:** obj &lt;&lt; Set Gradient Legend Label Width

**Descrizione:** Imposta la lunghezza massima in caratteri delle etichette della legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Sintassi:** obj &lt;&lt; Set Gradient Legend Show Labels

**Descrizione:** Indica se le etichette di livello devono essere mostrate nella legenda del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Sintassi:** obj &lt;&lt; Set Gradient Level Count

**Descrizione:** Imposta il numero di livelli in un gradiente. È uno in meno rispetto al numero di etichette.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Sintassi:** obj &lt;&lt; Set Gradient Lightness Range

**Descrizione:** Imposta la luminosità minima e massima per i colori dei livelli in un gradiente. I colori saranno scalati per coprire questo range. Un valore mancante viene trattato come nessuna modifica.

**JMP Versione aggiunta:** 18

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

#### Esempio 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Sintassi:** obj &lt;&lt; Set Gradient Range( "Impostazione predefinita"|"Range di dati esatto"|"Intermedio 90%"="Impostazione predefinita" )

**Descrizione:** Imposta il range entro il quale vengono generate scale di gradiente non personalizzate. "Impostazione predefinita", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Sintassi:** obj &lt;&lt; Set Gradient Reverse Color Order

**Descrizione:** Inverte l&apos;ordine dei colori in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Sintassi:** obj &lt;&lt; Set Gradient Reverse Label Order

**Descrizione:** Inverte l&apos;ordine delle etichette in un gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Sintassi:** obj &lt;&lt; Set Gradient Scale( "Lineare"|"Quantile"|"Deviazione standard"|"Log"|"Offset logaritmi"|"Personalizzata"="Lineare" )

**Descrizione:** Imposta il tipo di scala del gradiente. "Lineare", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Sintassi:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**Descrizione:** Imposta una serie personalizzata di valori da utilizzare nella scala del gradiente.

**JMP Versione aggiunta:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Sintassi:** obj &lt;&lt; Set Gradient Show Missing( "Automatica"|"Attivato"|"Disattivato"="Automatica" )

**Descrizione:** Indica quando mostrare la voce della legenda per i valori mancanti. "Automatica", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

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

**Sintassi:** obj &lt;&lt; Set Interval Draw Directions( Both|Upper|Lower|None )

**Descrizione:** Imposta le direzioni in cui devono essere tracciati gli intervalli.

**JMP Versione aggiunta:** 17

```jsl

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

### Set Label Offset

**Sintassi:** Set Label Offset {Bar Index, X Scale Coordinate, Y Scale Coordinate}

**Descrizione:** Imposta l&apos;offset dell&apos;etichetta del valore di una barra a una coordinata nel grafico

**JMP Versione aggiunta:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Legend( 9 ), Label( "Label by Value" ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{DispatchSeg(
				BarSeg( 1 ),
				{Set Label Offset( {0, 0.394409937888199, 112.5685} ),
				Set Label Offset( {1, 1.2639751552795, 110.634333333333} ),
				Set Label Offset( {2, 2.14596273291925, 111.794833333333} ),
				Set Label Offset( {3, 3.12732919254658, 116.05} ),
				Set Label Offset( {4, 4.17080745341615, 127.268166666667} )}
			)}
		)
	)
);

```

### Set Line Color

**Sintassi:** obj &lt;&lt; Set Line Color( color )

**Descrizione:** Imposta il colore per tutte le linee nel segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**Sintassi:** obj &lt;&lt; Set Line Style( pen style )

**Descrizione:** Imposta lo stile delle linee. Le opzioni sono Continua, Punteggiata, Tratteggiata, Trattino-punto e Trattino-punto-punto.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Sintassi:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Altro..." )

**Descrizione:** Imposta la larghezza delle linee.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Width( 3 );

```

### Set Marker

**Sintassi:** obj &lt;&lt; Set Marker( marker )

**Descrizione:** Imposta lo stile per tutti gli indicatori.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );

```

### Set Marker Size

**Sintassi:** obj &lt;&lt; Set Marker Size( size )

**Descrizione:** Imposta la dimensione degli indicatori. Le opzioni per la dimensione sono Punto, Piccolo, Medio, Grande, XL, XXL e XXXL.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Property

**Sintassi:** obj &lt;&lt; Set Property( "property", value )

**Descrizione:** Imposta il valore per la property nominata per il riquadro di visualizzazione.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Side by Side Overlap

**Sintassi:** obj &lt;&lt; Set Side by Side Overlap( proportion or missing )

**Descrizione:** Imposta la quantità di sovrapposizione per i sotto-elementi negli stili delle barre "fianco a fianco", da 0 (nessuna sovrapposizione) a 1 (sovrapposizione completa).

**JMP Versione aggiunta:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ), Overlay( :sex ) ),
	Elements( Bar( X, Y ) )
);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Side by Side Overlap( 0.5 );

```

### Set Text Color

**Sintassi:** obj &lt;&lt; Set Text Color( color )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Text Color( "Green" );

```

### Set Text Style

**Sintassi:** obj &lt;&lt; Set Text Style( [Sinistra|Centro|Destra], [In alto|VCentro|Alla base|In basso], [Cancellato], [Box] )

**Descrizione:** Imposta come il testo viene rappresentato rispetto alla penna del cursore. Quando è supportato, "Cancellato" riempie il riquadro di delimitazione del testo e "Cancellato" lo delinea. Se non è specificato, l&apos;allineamento orizzontale predefinito è "Sinistra" e quello verticale è "Alla base".

**JMP Versione aggiunta:** 17

```jsl

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

**Sintassi:** obj &lt;&lt; Set Transparency( number )

**Descrizione:** Imposta la trasparenza della forma. L&apos;argomento deve essere un valore numerico tra 0 e 1.

**JMP Versione aggiunta:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Transparency( .3 );

```

### Set Width Proportion

**Sintassi:** obj &lt;&lt; Set Width Proportion( proportion )

**Descrizione:** Imposta la proporzione della larghezza disponibile della barra da usare per il disegno. 0 significa dimensioni automatiche. 1 significa senza intervallo.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Width Proportion( 1 );

```

### Sib

**Sintassi:** seg2 = obj &lt;&lt; Sib

**Descrizione:** Restituisce l&apos;elemento di pari livello del segmento di visualizzazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Sib;

```

### Sib Append

**Sintassi:** obj &lt;&lt; Sib Append( seg2 )

**Descrizione:** Aggiunge un segmento di visualizzazione immediatamente dopo questo.

```jsl

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

**Sintassi:** obj &lt;&lt; Sib Prepend( seg2 )

**Descrizione:** Aggiunge un segmento di visualizzazione immediatamente prima di questo.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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

**Sintassi:** obj &lt;&lt; Text Color( color )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Text Color( "Green" );

```

### Text Style

**Sintassi:** obj &lt;&lt; Text Style( [Sinistra|Centro|Destra], [In alto|VCentro|Alla base|In basso], [Cancellato], [Box] )

**Descrizione:** Imposta come il testo viene rappresentato rispetto alla penna del cursore. Quando è supportato, "Cancellato" riempie il riquadro di delimitazione del testo e "Cancellato" lo delinea. Se non è specificato, l&apos;allineamento orizzontale predefinito è "Sinistra" e quello verticale è "Alla base".

**JMP Versione aggiunta:** 17

```jsl

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

**Sintassi:** obj &lt;&lt; Transparency( number )

**Descrizione:** Imposta la trasparenza della forma. L&apos;argomento deve essere un valore numerico tra 0 e 1.

**JMP Versione aggiunta:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Transparency( .3 );

```

