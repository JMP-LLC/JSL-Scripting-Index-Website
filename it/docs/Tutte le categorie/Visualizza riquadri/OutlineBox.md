# OutlineBox



## Costruttori associati

### Outline Box

**Sintassi:** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che raggruppa altri riquadri.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));

```

## Messaggi degli elementi

### Add All Open Files

**Sintassi:** obj &lt;&lt; Add All Open Files( &lt;Menu(0,1)&gt; )

**Descrizione:** Visualizza il menu per aggiungere tutti i file aperti alla casella riquadro.

**JMP Versione aggiunta:** 16

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));Open( "$SAMPLE_DATA/Big Class.jmp" );ob3 << Add All Open Files;

```

### Add Context

**Sintassi:** obj &lt;&lt; Add Context

**Descrizione:** Coppia chiave-valore per caselle riquadro che aggiunge una colonna per il comando Crea tabella dati combinata per le caselle tabella

**JMP Versione aggiunta:** 16

### Add Directory of Files

**Sintassi:** obj &lt;&lt; Add Directory of Files

**Descrizione:** Visualizza il menu per aggiungere una directory di file alla casella riquadro.

**JMP Versione aggiunta:** 16

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Add Directory of Files;

```

### Add File Reference

**Sintassi:** obj &lt;&lt; Add File Reference

**Descrizione:** Visualizza il menu per aggiungere un riferimento a un file alla casella riquadro.

**JMP Versione aggiunta:** 16

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Add File Reference;

```

### Add Line Annotation

**Sintassi:** obj &lt;&lt; Add Line Annotation

**Descrizione:** Aggiunge una linea sopra il riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Open Files

**Sintassi:** obj &lt;&lt; Add Open Files( &lt;Menu(0,1)&gt; )

**Descrizione:** Visualizza il menu per aggiungere tutti i file aperti alla casella riquadro.

**JMP Versione aggiunta:** 16

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));Open( "$SAMPLE_DATA/Big Class.jmp" );ob3 << Add All Open Files;

```

### Add Outline Item

**Sintassi:** obj &lt;&lt; Add Outline Item

**Descrizione:** Visualizza il menu per aggiungere un elemento riquadro alla casella riquadro.

**JMP Versione aggiunta:** 16

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Add Outline Item;

```

### Add Pin Annotation

**Sintassi:** obj &lt;&lt; Add Pin Annotation

**Descrizione:** Aggiunge un&apos;annotazione sopra il riquadro di visualizzazione. La maggior parte degli attributi (come Riga indice, IDUnico e PtTrovato) è progettata solo per uso interno.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :weight ),	X( :height ),	SendToReport(		Dispatch( {}, "Bivar Plot", FrameBox,			Add Pin Annotation(				Seg( Marker Seg( 1 ) ),				Index( 17 ),				Index Row( 17 ),				UniqueID( -960001792 ),				FoundPt( {238, 219} ),				Origin( {64.9765625, 142} ),				Offset( {-174, -40} ),				Tag Line( 1 ),				Font( "Helvetica", 11, "Plain" )			)		)	));

```

### Add Polygon Annotation

**Sintassi:** obj &lt;&lt; Add Polygon Annotation

**Descrizione:** Aggiunge un poligono sopra il riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Polygon Annotation(	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),	Color( "Red" ),	Closed( 1 ));

```

### Add Script Button

**Sintassi:** obj &lt;&lt; Add Script Button

**Descrizione:** >Visualizza il menu per aggiungere un pulsante di script alla casella riquadro.

**JMP Versione aggiunta:** 16

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Add Script Button;

```

### Add Simple Shape Annotation

**Sintassi:** obj &lt;&lt; Add Simple Shape Annotation

**Descrizione:** Aggiunge una forma semplice sopra il riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Sintassi:** obj &lt;&lt; Add Text Annotation

**Descrizione:** Aggiunge testo sopra il riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));

```

### Add Text Item

**Sintassi:** obj &lt;&lt; Add Text Item

**Descrizione:** Visualizza il menu per aggiungere testo alla casella riquadro.

**JMP Versione aggiunta:** 16

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Add Text Item;

```

### Add URL Reference

**Sintassi:** obj &lt;&lt; Add URL Reference

**Descrizione:** Visualizza il menu per aggiungere un URL alla casella riquadro.

**JMP Versione aggiunta:** 16

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Add URL Reference;

```

### Add Window Reference

**Sintassi:** obj &lt;&lt; Add Window Reference

**Descrizione:** Visualizza il menu per aggiungere un riferimento a una finestra alla casella riquadro.

**JMP Versione aggiunta:** 16

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Add Window Reference;

```

### Append

**Sintassi:** obj &lt;&lt; Append( db2 )

**Descrizione:** Aggiunge db2 alla struttura di visualizzazione dopo db.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Sintassi:** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**Descrizione:** Se è impostato un colore di sfondo, il riquadro è riempito con il colore di sfondo prima di visualizzarne il contenuto. Se non è impostato alcun colore di sfondo, traspare lo sfondo e il contenuto dei riquadri.

**JMP Versione aggiunta:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Border

**Sintassi:** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**Descrizione:** I bordi sono linee continue tracciate attorno alla parte esterna di un riquadro di visualizzazione. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai bordi orizzontali e verticali.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Border Color

**Sintassi:** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**Descrizione:** Colore facoltativo che sostituisce il colore di default per i bordi dei riquadri.

**JMP Versione aggiunta:** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Bring Window To Front

**Sintassi:** obj &lt;&lt; Bring Window To Front

**Descrizione:** Porta la finestra in primo piano.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Run Script( "Bivariate" );w << Bring Window To Front;

```

### Child

**Sintassi:** obj &lt;&lt; Child

**Descrizione:** Restituisce il nodo di livello inferiore a questo riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();axisChild = axisParent << child();Print( axisChild << Class Name() );

```

### Class Name

**Sintassi:** obj &lt;&lt; Class Name

**Descrizione:** Restituisce il nome della classe di visualizzazione per questo riquadro.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Class Name();

```

### Clone Box

**Sintassi:** obj &lt;&lt; Clone Box

**Descrizione:** Crea una nuova copia del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );clonedBox = rbiv << Clone Box();rbiv << append( clonedBox );

```

### Close

**Sintassi:** obj &lt;&lt; Close( bool )

**Descrizione:** Chiude la casella riquadro.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Close( 1 );

```

### Close All Below

**Sintassi:** obj &lt;&lt; Close All Below

**Descrizione:** Chiude tutti gli elementi di livello inferiore del nodo.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));Wait( 2 );ob << Close All Below( 1 );

```

### Close All Like This

**Sintassi:** obj &lt;&lt; Close All Like This

**Descrizione:** Chiude tutti i nodi simili a questa casella riquadro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );fm = dt << Run Script( "Fit Model" );r = fm << Report;Wait( 2 );r["Least Squares Means Table"] << Close All Like This;

```

### Close Where No Outlines

**Sintassi:** obj &lt;&lt; Close Where No Outlines

**Descrizione:** Chiude tutti nodi che non contengono elementi di livello inferiore.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Close Where No Outlines( 1 );

```

### Close Window

**Sintassi:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**Descrizione:** Chiude la finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Close Window;

```

### Copy Data

**Sintassi:** obj &lt;&lt; Copy Data

**Descrizione:** copia i dati delimitati da tabulazioni da una matrice o tabella negli Appunti.

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );mat << CopyData;

```

### Copy Graph

**Sintassi:** obj &lt;&lt; Copy Graph

**Descrizione:** Trasferisce negli Appunti un&apos;immagine del grafico con gli assi.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;(rbiv[FrameBox( 1 )]) << Copy Graph();"paste into a paint program";

```

### Copy Picture

**Sintassi:** obj &lt;&lt; Copy Picture

**Descrizione:** Trasferisce negli Appunti un&apos;immagine del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Copy Picture();

```

### Delete Box

**Sintassi:** obj &lt;&lt; Delete Box

**Descrizione:** Elimina il riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Delete Box();

```

### Deselect

**Sintassi:** obj &lt;&lt; Deselect

**Descrizione:** Deseleziona questo oggetto per essere utilizzato dai comandi del menu Modifica.

```jsl

//This message applies to all display box objectsselected = 0;New Window( "Example",	ex = Button Box( "Press Me",		selected = !selected;		refresh;	));refresh = Function( {},	If( selected,		ex << Select,		ex << Deselect	));

```

### Dispatch

**Sintassi:** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**Descrizione:** Invia command a una sezione specificata della struttura di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Edit Links

**Sintassi:** obj &lt;&lt; Edit Links

**Descrizione:** Trova tutti i collegamenti del file in script pulsante per modificarli.

**JMP Versione aggiunta:** 16

### Enabled

**Sintassi:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Descrizione:** Un oggetto non abilitato non risponderà agli input della tastiera o del mouse. Questa proprietà è ereditata da oggetti secondari, pertanto un oggetto contenitore non abilitato causerà la disabilitazione di tutti gli oggetti dipendenti.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Find

**Sintassi:** obj &lt;&lt; Find

**Descrizione:** Restituisce un riquadro di visualizzazione con argument indicato.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv << Find( axis box( 1 ) );axisbox << Delete();

```

### Get Allow Title Wrapping

**Sintassi:** 0|1 = obj &lt;&lt; Get Allow Title Wrapping( state=0|1 )

**Descrizione:** Consente ai titoli lunghi di andare a capo

**JMP Versione aggiunta:** 16

```jsl

    New Window( "test",	Outline Box( Repeat( "abc ", 15 ), Text Box( "def" ) ),	ob = Outline Box( Repeat( "abc ", 15 ),		Text Box( "def" ),		<<set allow title wrapping( 0 )	));Print( ob << get allow title wrapping() );

```

### Get Annotation

**Sintassi:** obj &lt;&lt; Get Annotation

**Descrizione:** Restituisce la prima annotazione ancorata a questo riquadro di visualizzazione. È possibile accedere ad altre annotazioni utilizzando Sib() sul risultato.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));annotation = rbiv << Get Annotation;annotation << delete;

```

### Get Background Color

**Sintassi:** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**Descrizione:** Se è impostato un colore di sfondo, il riquadro è riempito con il colore di sfondo prima di visualizzarne il contenuto. Se non è impostato alcun colore di sfondo, traspare lo sfondo e il contenuto dei riquadri.

**JMP Versione aggiunta:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Get Base Font

**Sintassi:** font = obj &lt;&lt; Get Base Font

**Descrizione:** Restituisce il carattere di base usato per il testo tracciato dal riquadro. I caratteri di base sono nomi già definiti come Title, Text, Annotation e altri, che sono specificati nelle Preferenze dei caratteri.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Get Base Font;

```

### Get Border

**Sintassi:** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**Descrizione:** I bordi sono linee continue tracciate attorno alla parte esterna di un riquadro di visualizzazione. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai bordi orizzontali e verticali.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Get Border Color

**Sintassi:** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**Descrizione:** Colore facoltativo che sostituisce il colore di default per i bordi dei riquadri.

**JMP Versione aggiunta:** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Get Close Orientation

**Sintassi:** obj &lt;&lt; Get Close Orientation

**Descrizione:** Restituisce l&apos;impostazione per la compressione verticale delle caselle di riquadro per salvare spazio orizzontalmente

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << outline close orientation( "Vertical" );ob << Get Close Orientation;

```

### Get Content Size

**Sintassi:** obj &lt;&lt; Get Content Size

**Descrizione:** Restituisce le dimensioni del contenuto nella finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Content Size();Show( c );

```

### Get Display Path

**Sintassi:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**Descrizione:** Ottiene un&apos;espressione relativamente robusta per navigare tra parent box e obj. Non si garantisce la stabilità di questo percorso in tutte le versioni di JMP. receiver expr è incorporato nell&apos;espressione di output se fornita. In caso contrario viene utilizzata in sostituzione l&apos;espressione fornita per parent box. Come mostrato nell&apos;esempio, questo messaggio è utile principalmente per aumentare la robustezza di un percorso già disponibile. La modalità XPath è predefinita.

#### Di base

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robustShow( xpath expr );xpath expr << Select;

```

#### Modalità indice

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robustShow( subscript expr );subscript expr << Select;

```

### Get Enabled

**Sintassi:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Descrizione:** Un oggetto non abilitato non risponderà agli input della tastiera o del mouse. Questa proprietà è ereditata da oggetti secondari, pertanto un oggetto contenitore non abilitato causerà la disabilitazione di tutti gli oggetti dipendenti.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Font

**Sintassi:** obj &lt;&lt; Get Font

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Get Font;

```

### Get Font Name

**Sintassi:** obj &lt;&lt; Get Font Name

**Descrizione:** Restituisce il nome del carattere.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Set Font Name( "Times New Roman" );fontobj << Get Font Name;

```

### Get Font Scale

**Sintassi:** obj &lt;&lt; Get Font Scale

**Descrizione:** Restituisce il fattore di scala corrente per il carattere.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Get Font Scale;

```

### Get Font Size

**Sintassi:** obj &lt;&lt; Get Font Size

**Descrizione:** Restituisce la dimensione del carattere.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Get Font Size;

```

### Get Font Style

**Sintassi:** obj &lt;&lt; Get Font Style

**Descrizione:** Restituisce il nome dello stile carattere.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Set Font Name( "Arial" );fontobj << Set Font Style( "Italic" );fontobj << Get Font Style;

```

### Get HTML

**Sintassi:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**Descrizione:** Restituisce una stringa che contiene l&apos;origine HTML del riquadro di visualizzazione.

**Esempio 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get HTML );

```

**Esempio 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTMLWeb( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Sintassi:** width = obj &lt;&lt; Get Height

**Descrizione:** Restituisce l&apos;altezza del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Height;

```

### Get Horizontal Alignment

**Sintassi:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Descrizione:** L&apos;allineamento orizzontale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Get Image Export Display

**Sintassi:** obj &lt;&lt; Get Image Export Display

**Descrizione:** Ottiene l&apos;opzione per l&apos;eliminazione del testo del riquadro durante il salvataggio di immagini

**JMP Versione aggiunta:** 15

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Get Image Export Display();

```

### Get Journal

**Sintassi:** obj &lt;&lt; Get Journal

**Descrizione:** Restituisce una stringa che contiene l&apos;origine journal del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Print( rbiv << Get Journal );

```

### Get Margin

**Sintassi:** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**Descrizione:** Il margine aggiunge spazio tra il bordo del riquadro e i riquadri adiacenti. Usare argomenti con nome, oppure fornire un elenco di valori. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai margini orizzontali e verticali.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**Sintassi:** width,height = obj &lt;&lt; Get Max Size

**Descrizione:** Restituisce la dimensione massima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Max Size;

```

### Get Menu Item State

**Sintassi:** 0|1|-1 = obj &lt;&lt; Get Menu Item State( index )

**Descrizione:** Ottiene lo stato dell&apos;elemento nel menu di scelta rapida che si trova in index. Lo stato può essere normale (0), selezionato (1) o disattivato (-1).

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Set Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );ob << Set Menu Item State( 2, -1 );ob << Get Menu Item State( 2 );

```

### Get Menu Script

**Sintassi:** list = obj &lt;&lt; Get Menu Script

**Descrizione:** Restituisce lo script di menu aggiunto all&apos;oggetto chiamante.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Set Menu Script(	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; , "Get Menu Script",	Print( ob << Get Menu Script )});ob << Get Menu Script;

```

### Get Min Size

**Sintassi:** width,height = obj &lt;&lt; Get Min Size

**Descrizione:** Restituisce la dimensione minima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Min Size;

```

### Get Namespace

**Sintassi:** obj &lt;&lt; Get Namespace

**Descrizione:** Restituisce lo spazio dei nomi associato a questo oggetto di visualizzazione.

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get On Close

**Sintassi:** obj &lt;&lt; Get On Close

**Descrizione:** Restituisce lo script o la funzione che verrà eseguita alla chiusura della finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);Show( w << Get On Close );

```

### Get Padding

**Sintassi:** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**Descrizione:** La spaziatura interna aggiunge spazio tra il contenuto e il bordo del riquadro. Usare argomenti con nome, oppure fornire un elenco di valori. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati alle spaziature interne orizzontali e verticali.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Sintassi:** obj &lt;&lt; Get Page Setup

**Descrizione:** Ottieni le informazioni di impostazione della pagina per il pdf

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Page Setup Test" ) );w << get page setup();

```

### Get Picture

**Sintassi:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Descrizione:** Cattura db come un oggetto immagine. L&apos;argomento facoltativo Scale effettuerà il rendering dell&apos;immagine a una risoluzione ridimensionata. Il ridimensionamento richiede che il riquadro di visualizzazione sia estensibile. L&apos;argomento Type determina se il risultato sarà un&apos;immagine vettoriale scalabile o una bitmap. Per impostazione predefinita viene restituita un&apos;immagine scalabile, adatta al salvataggio in formati vettoriali come PDF. L&apos;opzione View cambia il comportamento di alcuni riquadri. L&apos;opzione predefinita di "Picture" rappresenta il report come sarebbe se fosse esportato in un formato immagine, con aree fatte scorrere completamente visibili. La modalità di visualizzazione di "Screen" rappresenta il report come visibile sullo schermo e "Print" rappresenta il report come se fosse stampato, senza funzioni di impostazione della pagina. L&apos;opzione SubRect acquisisce una parte dell&apos;immagine risultante piuttosto che un&apos;immagine completa. L&apos;opzione Appearance può cambiare dai colori di output "Default" ai colori "Current" come visibili sullo schermo. Le opzioni View, SubRect e Appearance sono supportate solo per Type "Bitmap".

#### Default

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;New Window( "Example", rbiv << Get Picture );

```

#### Scala

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

#### Vista e aspetto

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example",	H List Box(		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )	));

```

### Get Project

**Sintassi:** project = obj &lt;&lt; Get Project()

**Descrizione:** Restituisce il progetto padre della finestra, o Vuoto() se non è in un progetto.

**JMP Versione aggiunta:** 14

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Project();Show( c );

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

### Get RTF

**Sintassi:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**Descrizione:** Restituisce una stringa che contiene l&apos;origine RTF del riquadro di visualizzazione.

**Esempio 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get RTF );

```

**Esempio 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTFOpen( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Sintassi:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**Descrizione:** Restituisce un vettore contenente lo stato della riga per ogni riga nella tabella di dati specificata o nella tabella di dati corrente. Gli stati delle righe possono provenire dalla tabella o dal contesto del filtro del riquadro.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Get Scriptable Object

**Sintassi:** scriptable object = obj &lt;&lt; Get Scriptable Object

**Descrizione:** Restituisce un riferimento all&apos;oggetto che supporta script associato all&apos;oggetto chiamante.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;bivobj = rbiv << Get Scriptable Object();Print( bivobj << Class Name );

```

### Get Show Window

**Sintassi:** obj &lt;&lt; Get Show Window

**Descrizione:** Restituisce la visibilità della finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );Print( w << Get Show Window() );

```

### Get Size

**Sintassi:** width,height = obj &lt;&lt; Get Size

**Descrizione:** Restituisce la dimensione del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];Print( fb << Get Size );

```

### Get Stretch

**Sintassi:** x,y = obj &lt;&lt; Get Stretch

**Descrizione:** Restituisce i flag di estensione per questo riquadro di visualizzazione in direzione orizzontale e verticale.

**JMP Versione aggiunta:** 16

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		spacer = Spacer Box(			Size( 20, 20 ),			Color( "Light Red" ),			<<Set Stretch( "Fill", "Off" )		)	));spacer << Get Stretch();

```

### Get Submenu

**Sintassi:** obj &lt;&lt; Get Submenu( index )

**Descrizione:** Restituisce il numero di sottomenu sotto la voce di menu specificata.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Set Menu Script(	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",	Print( "B3" ), "C", Print( "C" )});ob << Set Submenu( 2, 3 );ob << Get Submenu( 2 );

```

### Get Text

**Sintassi:** obj &lt;&lt; Get Text

**Descrizione:** Restituisce una stringa che contiene il testo del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get Text );

```

### Get Text Color

**Sintassi:** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**Descrizione:** Il testo sarà visualizzato nel colore del testo, se impostato. Se questa proprietà non è stata impostata, il riquadro assumerà il colore del testo del riquadro che lo contiene.

**JMP Versione aggiunta:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Get Title

**Sintassi:** "string" = obj &lt;&lt; Get Title

**Descrizione:** Ottiene il titolo del riquadro.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));Print( ob << Get Title );

```

### Get Title Background Color

**Sintassi:** obj &lt;&lt; Title Background Color( color ); color = obj &lt;&lt; Get Title Background Color

**Descrizione:** Se è impostato un colore di sfondo, il titolo del riquadro è riempito con il colore di sfondo prima di visualizzarne il contenuto. Se il colore di sfondo è impostato a "Nessuno", traspare lo sfondo e il contenuto dei riquadri.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Background Color( "Light Red" );

```

### Get Title Border

**Sintassi:** obj &lt;&lt; Title Border( sides ); sides = obj &lt;&lt; Get Title Border

**Descrizione:** I bordi del titolo sono linee continue tracciate intorno all&apos;esterno del titolo del riquadro. Se viene fornito un singolo valore, questo viene applicato a tutti i lati. Se si specificano due valori, questi vengono applicati ai bordi orizzontali e verticali. I bordi del titolo sono relativi all&apos;orientamento del titolo. Un riquadro chiuso verticalmente ruota il bordo e il contenuto.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Border( 0 );

```

### Get Title Border Color

**Sintassi:** obj &lt;&lt; Title Border Color( color ); color = obj &lt;&lt; Get Title Border Color

**Descrizione:** Colore facoltativo che sostituisce il colore di default per i bordi del titolo del riquadro.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Border Color( "Black" );

```

### Get Title Padding

**Sintassi:** obj &lt;&lt; Title Padding( sides ); sides = obj &lt;&lt; Get Title Padding

**Descrizione:** La spaziatura interna del titolo aggiunge spazio tra il contenuto del titolo e il rispettivo bordo. Se viene fornito un singolo valore, viene applicato a tutti i lati. Se si specificano due valori, questi vengono applicati alla spaziatura interna orizzontale e verticale. La spaziatura interna del titolo è relativa all&apos;orientamento del titolo. Un contorno chiuso verticalmente ruota la spaziatura interna e il contenuto.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Padding( Top( 5 ), Bottom( 5 ) );

```

### Get Title Text Color

**Sintassi:** obj &lt;&lt; Title Text Color( color ); color = obj &lt;&lt; Get Title Text Color

**Descrizione:** Il testo del titolo del riquadro sarà visualizzato nel colore specificato, se impostato. Se questa proprietà non è stata impostata, il titolo assume il colore del testo del riquadro che lo contiene.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Text Color( "Dark Green" );

```

### Get UI Only

**Sintassi:** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Get Vertical Alignment

**Sintassi:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Descrizione:** L&apos;allineamento verticale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Sintassi:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Descrizione:** La visibilità determina se mostrare un riquadro e se richiede spazio. Il valore predefinito di "Visible" significa che l&apos;oggetto verrà mostrato. Un riquadro "Hidden" non viene mostrato ma richiede spazio, mentre un riquadro "Collapsed" non richiede spazio nel layout.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Width

**Sintassi:** width = obj &lt;&lt; Get Width

**Descrizione:** Restituisce la larghezza del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Width;

```

### Get Window Icon

**Sintassi:** obj &lt;&lt; Get Window Icon

**Descrizione:** Restituisce l&apos;icona della finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Icon;Show( t );

```

### Get Window Position

**Sintassi:** obj &lt;&lt; Get Window Position

**Descrizione:** Restituisce la posizione della finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );p = w << Get Window Position();Show( p );

```

### Get Window Size

**Sintassi:** obj &lt;&lt; Get Window Size

**Descrizione:** Restituisce le dimensioni della finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );s = w << Get Window Size();Show( s );

```

### Get Window Title

**Sintassi:** obj &lt;&lt; Get Window Title

**Descrizione:** Restituisce il titolo della finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Title;Show( t );

```

### Get Window View

**Sintassi:** obj &lt;&lt; Get Window View

**Descrizione:** Restituisce la visualizzazione della finestra corrente. Le finestre possono essere "Visibile", "Invisibile" o "Privata".

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Print( w << Get Window View() );

```

### Get XML

**Sintassi:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Descrizione:** Recupera la struttura di visualizzazione formattata come XML. Di default, le stringhe vengono restituite nella lingua locale e l&apos;XML include i valori dei dati in alcuni riquadri. Usare l&apos;opzione English per restituire le stringhe in inglese, se disponibili. Usare l&apos;opzione NoData per omettere i valori dei dati all&apos;interno dei riquadri, che possono essere molto grandi per alcune strutture di visualizzazione.

```jsl

//This message applies to all display box objectswin = New Window( "test", a = Text Box( "my test" ) );a << set text( win << get xml );

```

### GetHorizontal

**Sintassi:** obj &lt;&lt; GetHorizontal

**Descrizione:** Restituisce 1 se gli elementi figlio della casella riquadro sono orientati orizzontalmente o 0 in caso contrario.

```jsl

New Window( "Example",	ob = Outline Box( "Outline Box", Text Box( "Horizontally " ), Text Box( "Aligned" ) ));ob << GetHorizontal;

```

### GetOffset

**Sintassi:** x,y = obj &lt;&lt; GetOffset

**Descrizione:** Restituisce l&apos;offset del riquadro di visualizzazione rispetto al riquadro principale. Potrebbe essere necessario usare il messaggio <<principale in un ciclo per accumulare diversi offset.

```jsl

New Window( "example",	MouseBox(		Graph Box(			title( "title" ),			Pen Size( 3 );			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );		),		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"	,		<<settrack( // events from the mouse (movement, with button up or down)			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y				{fb, offset, t, off, size}, // local variables				// recalulate offset and size each time, the values can change				fb = this[framebox( 1 )]; // the framebox in the graph 				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox				t = fb; // a temporary box that starts at the frame 				While( t != this, // and walks up to the mousebox					off = t << getOffset; // ask each box for its offset to the immediate parent					offset += Matrix( off ); // convert list answer to matrix so + will work					t = t << parent; // crawl up to the mousebox, one box at a time				);				size = Matrix( fb << getSize ); // the frame knows its size				If( // over the frame box					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]					 + size[2]				,					fb << setbackgroundcolor( "red" ),					fb << setbackgroundcolor( "blue" )				);			)		)	));

```

### GetOpen

**Sintassi:** obj &lt;&lt; GetOpen

**Descrizione:** Restituisce 1 se la casella riquadro è aperta o 0 se è chiusa.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));Show( ob << Get Open );Wait( 1 );ob << Close;Show( ob << Get Open );

```

### Horizontal

**Sintassi:** obj &lt;&lt; Horizontal( bool )

**Descrizione:** Allinea orizzontalmente gli elementi figlio della casella riquadro.

```jsl

New Window( "Example",	ob = Outline Box( "Outline Box", Text Box( "Horizontally " ), Text Box( "Aligned" ) ));ob << horizontal( 1 );

```

### Horizontal Alignment

**Sintassi:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Descrizione:** L&apos;allineamento orizzontale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Image Export Display

**Sintassi:** obj &lt;&lt; Image Export Display( "Normale"|"Solo testo"|"Nessuno" )

**Descrizione:** Opzione per l&apos;eliminazione del testo del riquadro durante il salvataggio di immagini

**JMP Versione aggiunta:** 15

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Image Export Display( "None" );ob << Save Picture( "$TEMP/test.png" );

```

### Inval

**Sintassi:** obj &lt;&lt; Inval

**Descrizione:** Invalida il riquadro di visualizzazione.  La finestra verrà aggiornata quando viene inviato il messaggio <<Aggiorna finestra o il sistema operativo avrà tempo per l&apos;aggiornamento.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Inval example",	Button Box( "red",		color = "red";		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	),	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                       but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	),	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### Is Dirty

**Sintassi:** obj &lt;&lt; Is Dirty

**Descrizione:** Ottiene lo stato modificato del documento. 1 significa che il documento è stato modificato e richiederà il salvataggio; 0 significa che il documento non è stato modificato.

**JMP Versione aggiunta:** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Is Modal Dialog

**Sintassi:** obj &lt;&lt; Is Modal Dialog

**Descrizione:** Restituisce vero se la finestra è una finestra di dialogo modale. Utile solo se chiamato da un callback del gestore della finestra.

```jsl

With Window Handler(	New Window( "Modal Window", <<Modal ),	Function( {win},		Print( win << Is Modal Dialog() );		win << close window();	));

```

### Journal

**Sintassi:** obj &lt;&lt; Journal

**Descrizione:** Crea un journal dal riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << journal;

```

### Journal Window

**Sintassi:** obj &lt;&lt; Journal Window

**Descrizione:** Apre una finestra journal della finestra.

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Journal Window;

```

### Launch

**Sintassi:** obj &lt;&lt; Launch

**Descrizione:** Valuta argument indicato nel contesto del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );New Window( "example",	ob1 = Outline Box( "treemap launcher" ),	ob2 = Outline Box( "bivariate partial" ),	ob3 = Outline Box( "bivariate launched" ));ob1 << launch( Treemap() );ob2 << launch( Bivariate( Y( :height ) ) );ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Lock

**Sintassi:** obj &lt;&lt; Lock

**Descrizione:** Se la casella riquadro è parte di un journal, sblocca il journal per consentire ulteriori modifiche. I journal possono essere bloccati facendo clic con il tasto destro del mouse nell&apos;area del margine.

**JMP Versione aggiunta:** 16

### Lock Title

**Sintassi:** obj &lt;&lt; Lock Title( state=0|1 )

**Descrizione:** Blocca il titolo del riquadro per evitare modifiche interattive.

**JMP Versione aggiunta:** 17

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Lock Title( 1 );

```

### Make RowState Handler

**Sintassi:** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**Descrizione:** Crea un gestore dello stato delle righe per la tabella di dati specificata o per la tabella di dati corrente. La funzione viene chiamata quando gli stati delle righe cambiano nel contesto del filtro del riquadro. L&apos;argomento della funzione contiene i numeri di riga che sono cambiati o -1 se il filtro di stato della riga è cambiato.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Margin

**Sintassi:** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**Descrizione:** Il margine aggiunge spazio tra il bordo del riquadro e i riquadri adiacenti. Usare argomenti con nome, oppure fornire un elenco di valori. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai margini orizzontali e verticali.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**Sintassi:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**Descrizione:** Ingrandisce la finestra. L&apos;argomento predefinito è 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Maximize Window( 1 );Wait( 1 );w << Maximize Window( 0 );

```

### Messaggi degli elementi condivisi

### Minimize Window

**Sintassi:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**Descrizione:** Riduce a icona la finestra. L&apos;argomento predefinito è 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Minimize Window( 1 );Wait( 1 );w << Minimize Window( 0 );

```

### Move Window

**Sintassi:** obj &lt;&lt; Move Window( x,y )

**Descrizione:** Sposta la finestra nella posizione specificata.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Move Window( 500, 500 );

```

### Next

**Sintassi:** obj &lt;&lt; Next

**Descrizione:** Restituisce il riquadro di visualizzazione successivo a questo.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;next = rbiv << Next();Print( next << Class Name() );

```

### On Close

**Sintassi:** obj &lt;&lt; On Close( script )

**Descrizione:** Imposta l&apos;esecuzione di uno script o di una funzione alla chiusura della finestra. Questo script dovrebbe restituire 1 per consentire la chiusura o 0 per impedire la chiusura della finestra.

#### Chiudi funzione

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	Function( {this},         // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled		New Window( "Are you sure?",			<<modal,			V List Box(				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )			)		)["button"] == 1	));

```

#### Chiudi script

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);

```

### Open All Below

**Sintassi:** obj &lt;&lt; Open All Below

**Descrizione:** Apre tutti gli elementi di livello inferiore del nodo.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));Wait( 2 );ob << Close All Below( 1 );Wait( 2 );ob2 << Open All Below( 1 );Wait( 2 );ob << Close( 0 );

```

### Open All Like This

**Sintassi:** obj &lt;&lt; Open All Like This

**Descrizione:** Apre tutti i nodi simili a questa casella riquadro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );fm = dt << Run Script( "Fit Model" );r = fm << Report;Wait( 2 );r["Least Squares Means Table"] << Close All Like This;Wait( 2 );r["Least Squares Means Table"] << Open All Like This;

```

### Optimize Display

**Sintassi:** obj &lt;&lt; Optimize Display

**Descrizione:** Imposta la larghezza delle colonne della tabella di dati e la finestra a una dimensione ottimale.

**JMP Versione aggiunta:** 14

```jsl

//This message applies to Data Table objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Optimize Display;

```

### Outline Close Orientation

**Sintassi:** obj &lt;&lt; Outline Close Orientation( "Automatica"|"Orizzontale"|"Verticale" )

**Descrizione:** Opzione per la compressione verticale delle caselle di riquadro per salvare spazio orizzontalmente

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << outlinecloseorientation( "Vertical" );ob3 << Close;

```

### Pad Window

**Sintassi:** obj &lt;&lt; Pad Window( bool )

**Descrizione:** Attiva o disattiva la spaziatura interna della finestra.

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );r = d << report;r << Pad Window( 0 );

```

### Padding

**Sintassi:** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**Descrizione:** La spaziatura interna aggiunge spazio tra il contenuto e il bordo del riquadro. Usare argomenti con nome, oppure fornire un elenco di valori. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati alle spaziature interne orizzontali e verticali.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Sintassi:** obj &lt;&lt; Page Break

**Descrizione:** Inserisce un&apos;interruzione di pagina prima del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsNew Window( "Example",	ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Page Break;

```

### Parent

**Sintassi:** obj &lt;&lt; Parent

**Descrizione:** Restituisce il nodo di livello superiore a questo riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();Print( axisParent << Class Name() );

```

### Prepend

**Sintassi:** obj &lt;&lt; Prepend( db2 )

**Descrizione:** Aggiunge db2 alla struttura di visualizzazione prima di db.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Sintassi:** obj &lt;&lt; Prev Sib

**Descrizione:** Restituisce l&apos;elemento di pari livello precedente del riquadro di visualizzazione.

**JMP Versione aggiunta:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisSibling = axisbox << Prev Sib();Print( axisSibling << Class Name() );

```

### Print Window

**Sintassi:** obj &lt;&lt; Print Window

**Descrizione:** Stampa la finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Print Window;

```

### Reshow

**Sintassi:** obj &lt;&lt; Reshow

**Descrizione:** Invalida riquadro di visualizzazione e aggiorna la finestra con il nuovo contenuto.  Vedere i messaggi <<Inval e <<Aggiorna finestra se è necessario un maggiore controllo sui tempi di aggiornamento.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Reshow example",	Button Box( "red",		color = "red";		g << reshow/* tell the graph that something changed */;	),	Button Box( "blue",		color = "blue";		g << reshow/* tell the graph that something changed */;	),	g = Graph Box(/* the graph does NOT watch for the color variable to change                     but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));

```

### Save Capture

**Sintassi:** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**Descrizione:** Salva una schermata del riquadro di visualizzazione nel percorso path specificato. Se non viene specificato un path, compare la finestra Salva con nome.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Sintassi:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**Descrizione:** Salva l&apos;origine HTML e la cartella di file grafici nel format specificato.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Sintassi:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**Descrizione:** Salva il formato HTML interattivo con dati in un file. L&apos;argomento Boolean rappresenta la staticità del report.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Sintassi:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**Descrizione:** Salva l&apos;origine journal del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Sintassi:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**Descrizione:** Salva il riquadro di visualizzazione come documento Microsoft Word (disponibile solo per Windows).

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Sintassi:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**Descrizione:** Salva il riquadro di visualizzazione in formato PDF.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Sintassi:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Descrizione:** Salva un&apos;immagine del riquadro di visualizzazione. I formati supportati sono EMF (Windows), PICT (Macintosh), JPEG o JPG, GIF o PNG. L&apos;argomento facoltativo Scale effettuerà il rendering dell&apos;immagine a una risoluzione ridimensionata. Il ridimensionamento richiede che il riquadro di visualizzazione sia estensibile. L&apos;argomento Type determina se il risultato sarà un&apos;immagine vettoriale scalabile o una bitmap. Per impostazione predefinita viene restituita un&apos;immagine scalabile, adatta al salvataggio in formati vettoriali come PDF. L&apos;opzione View cambia il comportamento di alcuni riquadri. L&apos;opzione predefinita di "Picture" rappresenta il report come sarebbe se fosse esportato in un formato immagine, con aree fatte scorrere completamente visibili. La modalità di visualizzazione di "Screen" rappresenta il report come visibile sullo schermo e "Print" rappresenta il report come se fosse stampato, senza funzioni di impostazione della pagina. L&apos;opzione SubRect acquisisce una parte dell&apos;immagine risultante piuttosto che un&apos;immagine completa. L&apos;opzione Appearance può cambiare dai colori di output "Default" ai colori "Current" come visibili sullo schermo. Le opzioni View, SubRect e Appearance sono supportate solo per Type "Bitmap".

#### Default

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

#### Scala

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

#### Vista e aspetto

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv << Save Picture(	"$TEMP/jmp_example_screen.png",	"png",	View( "Screen" ),	Appearance( "Current" ));rbiv << Save Picture(	"$TEMP/jmp_example_print.png",	"png",	View( "Print" ),	Appearance( "Default" ));New Window( "Example",	H List Box(		New Image( "$TEMP/jmp_example_screen.png" ),		New Image( "$TEMP/jmp_example_print.png" )	));

```

### Save Presentation

**Sintassi:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**Descrizione:** Salva le tabelle dei riquadri di visualizzazione e le diapositive di grafici in una presentazione. La presentazione può essere aperta con Microsoft PowerPoint o altri software di presentazione.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Sintassi:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**Descrizione:** Salva l&apos;origine RTF e la cartella di file grafici nel format specificato.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Sintassi:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**Descrizione:** Salva un file che contiene il testo del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Sintassi:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**Descrizione:** Salva la finestra del report corrente in un file di report JMP (.jrp).

**JMP Versione aggiunta:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report windowOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Sintassi:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**Descrizione:** Regola la barra di scorrimento della finestra per visualizzare il riquadro di visualizzazione specificato, oppure scorre un numero relativo di pixel o scorre fino a una posizione assoluta dei pixel. Al posto di un numero di pixel si possono usare le parole chiave "Start" o "End".

#### Absolute

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Absolute( "End", "End" ) );Wait( 1 );fm << scroll window( Absolute( 0, 300 ) );Wait( 1 );

```

#### Box

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowFor( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second	fm << scroll window( Report( fm )[framebox( 2 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 3 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 1 )] );	Wait( .5 ););

```

#### Relative

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Relative( 300 ) );Wait( 1 );fm << scroll window( Relative( -50 ) );Wait( 1 );fm << scroll window( Relative( "Start" ) );Wait( 1 );

```

### Select

**Sintassi:** obj &lt;&lt; Select

**Descrizione:** Seleziona questo oggetto per essere utilizzato dai comandi del menu Modifica.

```jsl

//This message applies to all display box objectsNew Window( "Example", ex = Button Box( "Press Me" ) );ex << Select;

```

### Set Allow Title Wrapping

**Sintassi:** obj &lt;&lt; Set Allow Title Wrapping( 0|1 )

**Descrizione:** Consente ai titoli lunghi di andare a capo

**JMP Versione aggiunta:** 16

```jsl

    New Window( "test",	Outline Box( Repeat( "abc ", 15 ), Text Box( "def" ) ),	ob = Outline Box( Repeat( "abc ", 15 ),		Text Box( "def" ),		<<set allow title wrapping( 0 )	));

```

### Set Base Font

**Sintassi:** obj &lt;&lt; Set Base Font( "Testo"|"Intestazione"|"Titolo"|"Piccolo"|"Mono"|"Editor delle formule"|"Annotazione"|"Asse"|"Indicatore"|"Titolo dell&apos;asse"|"Etichetta del grafico"|"Legenda"|"Titolo del grafico"|"Didascalia"|"Tabella di dati"|"Etichetta al passaggio del mouse" )

**Descrizione:** Imposta il carattere di base del testo tracciato dal riquadro.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));Wait( 2 );fontobj << Set Base Font( "Title" );

```

### Set Content Size

**Sintassi:** obj &lt;&lt; Set Content Size( x,y )

**Descrizione:** Imposta le dimensioni del contenuto nella finestra.

```jsl

//This message applies to all display box objectsw = New Window( "Test",	lb = List Box( {"a", "b", "c", "d"} ),	Button Box( "Enable 2nd item",		lb << enable item( 2, 1 );		Show( lb << item enabled( 2 ) );	),	Button Box( "Disable 2nd item",		lb << enable item( 2, 0 );		Show( lb << item enabled( 2 ) );	));Wait( 2 );w << Set Content Size( 400, 300 );

```

### Set Dirty

**Sintassi:** obj &lt;&lt; Set Dirty

**Descrizione:** Imposta lo stato modificato del documento. 0 non richiederà il salvataggio; 1 lo richiederà.

**JMP Versione aggiunta:** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Set Font

**Sintassi:** obj &lt;&lt; Set Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**Esempio 1**

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Set Font( "Arial Black" );

```

**Esempio 2**

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Sintassi:** obj &lt;&lt; Set Font Name( fontname )

**Descrizione:** Imposta il carattere per le stringhe di testo.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Sintassi:** obj &lt;&lt; Set Font Scale( f )

**Descrizione:** Imposta un fattore di scala per il carattere corrente. Il fattore di scala verrà applicato alla dimensione determinata dal carattere di base e alla dimensione in punti.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));Wait( 2 );fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Sintassi:** obj &lt;&lt; Set Font Size( n )

**Descrizione:** Imposta la dimensione del carattere (in punti) per le stringhe di testo.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Set Font Size( 14 );

```

### Set Font Style

**Sintassi:** obj &lt;&lt; Set Font Style( style )

**Descrizione:** Imposta lo stile carattere per le stringhe di testo. Per impostare più di uno stile contemporaneamente, posizionare le stringhe nella stessa stringa, separate da spazi (Vedere Esempio 2 di seguito).

**Esempio 1**

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Set Font Style( "Italic" );

```

**Esempio 2**

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Height

**Sintassi:** obj &lt;&lt; Set Height( width )

**Descrizione:** Imposta l&apos;altezza del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Height( 150 );

```

### Set Main Window

**Sintassi:** obj &lt;&lt; Set Main Window

**Descrizione:** Imposta questa finestra come finestra principale di JMP e imposta come normale la precedente finestra principale

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Set Main Window;

```

### Set Max Size

**Sintassi:** obj &lt;&lt; Set Max Size( width,height )

**Descrizione:** Imposta la dimensione massima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Max Size( 500, 500 );fb << Get Max Size;

```

### Set Menu Item State

**Sintassi:** obj &lt;&lt; Set Menu Item State( index, 0|1|-1 )

**Descrizione:** Imposta lo stato di un elemento nel menu di scelta rapida in index: normale (0), selezionato (1) o disattivato (-1).

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Set Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );ob << Set Menu Item State( 2, -1 );

```

### Set Menu Script

**Sintassi:** obj &lt;&lt; Set Menu Script( {"string",script,"string",script, ...} )

**Descrizione:** Aggiunge una voce al menu quando si fa clic sul triangolo rosso.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Set Menu Script(	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; , "", 0, "Get Menu Script",	Print( ob << Get Menu Script )});

```

### Set Min Size

**Sintassi:** obj &lt;&lt; Set Min Size( width,height )

**Descrizione:** Imposta la dimensione minima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Min Size( 30, 30 );fb << Get Min Size;

```

### Set Page Setup

**Sintassi:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**Descrizione:** Imposta le informazioni di impostazione della pagina che vengono utilizzate durante la stampa o il salvataggio in formato pdf. È possibile generare facoltativamente un sommario dai riquadri.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );w << Set page setup(	margins( 1, 1, 1, 1 ),	scale( 1 ),	portrait( 1 ),	paper size( "Letter" ),	Table of Contents( "always" ));w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Sintassi:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**Descrizione:** Imposta i piè di pagina a sinistra, al centro e a destra per l&apos;output stampato.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Footer Test" ) );w << Set Print Footers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Print Headers

**Sintassi:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**Descrizione:** Imposta le intestazioni a sinistra, al centro e a destra per l&apos;output stampato.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Header Test" ) );w << Set Print Headers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Property

**Sintassi:** obj &lt;&lt; Set Property( "property", value )

**Descrizione:** Imposta il valore per la property nominata per il riquadro di visualizzazione.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Sintassi:** obj &lt;&lt; Set Report Title( "string" )

**Descrizione:** Cambia il titolo del report.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Report Title( "New Title" );

```

### Set Scriptable Object

**Sintassi:** obj &lt;&lt; Set Scriptable Object( &lt;scriptable object&gt; )

**Descrizione:** Imposta l&apos;oggetto che supporta script associato alla casella riquadro. La casella riquadro presenterà un menu associato al triangolo rosso di messaggi che possono essere inviato all&apos;oggetto che supporta script. Se non viene specificato alcun argomento, l&apos;oggetto che supporta script sarà cancellato.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Set Scriptable Object( ob );

```

### Set Stretch

**Sintassi:** obj &lt;&lt; Set Stretch( x,y )

**Descrizione:** Imposta il comportamento per l&apos;estensione orizzontale e verticale del riquadro. I riquadri che si estendono con Window si ridimensioneranno al variare delle dimensioni della finestra o della barra di divisione. I riquadri che si estendono fino a Fill si estenderanno per riempire lo spazio disponibile nel loro contenitore. I riquadri con estensione impostata a Off in genere non si estendono. La maggior parte dei riquadri è impostata per impostazione predefinita a Neutral, il che significa che determineranno il loro comportamento in base ai loro riquadri figli.

**JMP Versione aggiunta:** 16

#### Estendi con finestra

```jsl

//This message applies to all display box objectsNew Window( "Example",	H List Box(		tv = Text Box( "V+V", <<rotate text( left ) ),		V List Box(			Text Box( "resize the containing window" ),			th = Text Box( "H+H" ),			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )		)	));tv << Vertical Alignment( "Center" );th << Horizontal Alignment( "Center" );th << Set Stretch( "Window", "Off" );ts << Set Min Size( 5, 20 );ts << Set Max Size( 100000, 100 );ts << Set Stretch( "Window", "Window" );

```

#### Estendi per riempire

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )	));

```

### Set Submenu

**Sintassi:** obj &lt;&lt; Set Submenu( index, submenu count )

**Descrizione:** Trasforma la voce di menu "indice" in un sottomenu con le voci di menu "conteggio sottomenu"

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Set Menu Script(	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",	Print( "B3" ), "C", Print( "C" )});ob << Set Submenu( 2, 3 );

```

### Set Summary Behavior

**Sintassi:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Descrizione:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );d << Report View( "Summary" );r = d << Report;tb = r[Table Box( 1 )];tb << Set Summary Behavior( "Visible" );

```

### Set Title

**Sintassi:** obj &lt;&lt; Set Title( "string", &lt;Run Script(0 | 1)&gt; )

**Descrizione:** Cambia il titolo del riquadro.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Set Title( "New Outline Box Title" );

```

### Set Title Changed

**Sintassi:** obj &lt;&lt; Set Title Changed

**Descrizione:** Imposta uno script che viene eseguito quando cambia il titolo del riquadro.

**JMP Versione aggiunta:** 17

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Set Title Changed(	Function( {this, oldtitle},		Print(			"title changed: old (" || oldtitle || ") new (" || (this << Get Title()) || ")"		)	));

```

### Set Width

**Sintassi:** obj &lt;&lt; Set Width( width )

**Descrizione:** Imposta la larghezza del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Width( 400 );

```

### Set Window Icon

**Sintassi:** obj &lt;&lt; Set Window Icon( icon name )

**Descrizione:** Imposta l&apos;icona della finestra.

```jsl

//This message applies to all display box objectsw = New Window( "Example", ex = Button Box( "New Analysis" ) );w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Sintassi:** obj &lt;&lt; Set Window Size( x,y )

**Descrizione:** Imposta le dimensioni della finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Sintassi:** obj &lt;&lt; Set Window Title( "string" )

**Descrizione:** Cambia il titolo della finestra.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Window Title( "New Title" );

```

### SetHorizontal

**Sintassi:** obj &lt;&lt; SetHorizontal( state=0|1 )

**Descrizione:** Allinea orizzontalmente gli elementi figlio della casella riquadro.

```jsl

New Window( "Example",	ob = Outline Box( "Outline Box", Text Box( "Horizontally " ), Text Box( "Aligned" ) ));ob << SetHorizontal( 1 );

```

### SetOpen

**Sintassi:** obj &lt;&lt; SetOpen( state=0|1 )

**Descrizione:** Apre o chiude il riquadro.

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << SetOpen( 0 );

```

### Show Properties

**Sintassi:** obj &lt;&lt; Show Properties

**Descrizione:** Visualizza un editor delle proprietà per i riquadri di visualizzazione

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Properties();

```

### Show Tree Structure

**Sintassi:** obj &lt;&lt; Show Tree Structure

**Descrizione:** Visualizza la struttura gerarchica del riquadro di visualizzazione e dei nodi correlati.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Tree Structure();

```

### Show Window

**Sintassi:** obj &lt;&lt; Show Window( state=0|1 )

**Descrizione:** Mostra/Nasconde la finestra. Questa opzione è utile per nascondere temporaneamente le finestre. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );w << Show Window( 1 );

```

### Sib

**Sintassi:** obj &lt;&lt; Sib

**Descrizione:** Restituisce l&apos;elemento di pari livello del riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisSibling = axisbox << sib();Print( axisSibling << Class Name() );

```

### Sib Append

**Sintassi:** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**Descrizione:** Aggiunge un riquadro di visualizzazione immediatamente dopo questo.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r()[framebox( 1 )];fb << sib append(	Text Box( "============ after ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Sintassi:** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**Descrizione:** Aggiunge un riquadro di visualizzazione immediatamente prima di questo.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << sib prepend(	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**Sintassi:** obj &lt;&lt; Size Window( x,y )

**Descrizione:** Imposta le dimensioni della finestra.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Size Window( 500, 500 );

```

### Size to Fit

**Sintassi:** obj &lt;&lt; Size to Fit

**Descrizione:** Mantiene le dimensioni della finestra adattandole al contenuto.

**JMP Versione aggiunta:** 16

### Text Color

**Sintassi:** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**Descrizione:** Il testo sarà visualizzato nel colore del testo, se impostato. Se questa proprietà non è stata impostata, il riquadro assumerà il colore del testo del riquadro che lo contiene.

**JMP Versione aggiunta:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Title Background Color

**Sintassi:** obj &lt;&lt; Title Background Color( color ); color = obj &lt;&lt; Get Title Background Color

**Descrizione:** Se è impostato un colore di sfondo, il titolo del riquadro è riempito con il colore di sfondo prima di visualizzarne il contenuto. Se il colore di sfondo è impostato a "Nessuno", traspare lo sfondo e il contenuto dei riquadri.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Background Color( "Light Red" );

```

### Title Border

**Sintassi:** obj &lt;&lt; Title Border( sides ); sides = obj &lt;&lt; Get Title Border

**Descrizione:** I bordi del titolo sono linee continue tracciate intorno all&apos;esterno del titolo del riquadro. Se viene fornito un singolo valore, questo viene applicato a tutti i lati. Se si specificano due valori, questi vengono applicati ai bordi orizzontali e verticali. I bordi del titolo sono relativi all&apos;orientamento del titolo. Un riquadro chiuso verticalmente ruota il bordo e il contenuto.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Border( 0 );

```

### Title Border Color

**Sintassi:** obj &lt;&lt; Title Border Color( color ); color = obj &lt;&lt; Get Title Border Color

**Descrizione:** Colore facoltativo che sostituisce il colore di default per i bordi del titolo del riquadro.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Border Color( "Black" );

```

### Title Padding

**Sintassi:** obj &lt;&lt; Title Padding( sides ); sides = obj &lt;&lt; Get Title Padding

**Descrizione:** La spaziatura interna del titolo aggiunge spazio tra il contenuto del titolo e il rispettivo bordo. Se viene fornito un singolo valore, viene applicato a tutti i lati. Se si specificano due valori, questi vengono applicati alla spaziatura interna orizzontale e verticale. La spaziatura interna del titolo è relativa all&apos;orientamento del titolo. Un contorno chiuso verticalmente ruota la spaziatura interna e il contenuto.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Padding( Top( 5 ), Bottom( 5 ) );

```

### Title Text Color

**Sintassi:** obj &lt;&lt; Title Text Color( color ); color = obj &lt;&lt; Get Title Text Color

**Descrizione:** Il testo del titolo del riquadro sarà visualizzato nel colore specificato, se impostato. Se questa proprietà non è stata impostata, il titolo assume il colore del testo del riquadro che lo contiene.

**JMP Versione aggiunta:** 19

```jsl

New Window( "Example",	fontobj = ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box 3",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob << Title Text Color( "Dark Green" );

```

### Top Parent

**Sintassi:** obj &lt;&lt; Top Parent

**Descrizione:** Restituisce il riquadro di visualizzazione principale di livello superiore a questo.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rootParent = rbiv << Top Parent();Print( rootParent << Class Name() );

```

### UI Only

**Sintassi:** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Update Window

**Sintassi:** obj &lt;&lt; Update Window

**Descrizione:** Aggiorna la finestra mantenendo il riquadro di visualizzazione se sono presenti regioni invalidate.  Il messaggio <<Inval crea regioni invalidate.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "UpdateWindow example",	Button Box( "red",		color = "red";        // try commenting out each of the 4 lines that follow, run the script,		// click the buttons, and resize the windows (for example) to force a		// redraw.  All 4 lines are important, though the last two may be		// slightly different on Windows and Mac OSs.		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the oval window to update immediately */		g2 << updateWindow; /* tell the rect window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		g2 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	));New Window( "oval",	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                      but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));New Window( "rect",	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### Vertical Alignment

**Sintassi:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Descrizione:** L&apos;allineamento verticale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Sintassi:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Descrizione:** La visibilità determina se mostrare un riquadro e se richiede spazio. Il valore predefinito di "Visible" significa che l&apos;oggetto verrà mostrato. Un riquadro "Hidden" non viene mostrato ma richiede spazio, mentre un riquadro "Collapsed" non richiede spazio nel layout.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Window Class Name

**Sintassi:** obj &lt;&lt; Window Class Name

**Descrizione:** Restituisce il nome della classe della finestra per il riquadro di visualizzazione.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Show( biv << Window Class Name() );Show( rbiv << Window Class Name() );

```

### XPath

**Sintassi:** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Descrizione:** Applica un&apos;espressione XPath alla rappresentazione XML della struttura di visualizzazione e restituisce i risultati. Di default, le stringhe vengono restituite nella lingua locale e l&apos;XML include i valori dei dati all&apos;interno di alcuni riquadri. Usare l&apos;opzione English per restituire le stringhe in inglese, se disponibili. Usare l&apos;opzione NoData per omettere i valori dei dati all&apos;interno dei riquadri, utile per le prestazioni quando la query si basa solo sugli attributi dei riquadri.

#### Attributes

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

#### Box type

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

#### Child box

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<Make Into Data Table;

```

#### Data

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<Text Color( "Green" );

```

#### Display Seg

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

#### Text

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Sintassi:** obj &lt;&lt; Zoom Window

**Descrizione:** Ridimensiona la finestra in modo che sia sufficientemente grande da mostrarne tutto il contenuto.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 80, 120 );Wait( 2 );w << Zoom Window;

```

