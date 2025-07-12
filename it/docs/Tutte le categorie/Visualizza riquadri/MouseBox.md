# MouseBox



## Costruttori associati

### Mouse Box

**Sintassi:** box = MouseBox( displayBoxArgs )

**Descrizione:** Restituisce un riquadro che può effettuare richiami JSL ad azioni del mouse

```jsl

Names Default To Here( 1 );
New Window( "Example",
	MouseBox(/*first sibling*/Text Box( "drag from here" ),
		<<setDragText( "hello" ),
		<<setTooltip( "source" ),
		<<setDragEnable( 1 ),
		<<setDragBegin(/* decide if a drag is allowed */
			Function( {this, clickpt},
				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */
			)
		),
		<<setDragEnd(/* clean up after a drag finishes or cancels */
			Function( {this, clickpt, how}, /* how=move,copy,ignore */
				If(
					how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox
					 == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) << setText(
						"done!" /* 'move' suggests clearing the source */
					)
				)
			)
		)
	),
	MouseBox(/*second sibling*/Text Box( "drag to here" ),
		<<setTooltip( "destination" ),
		<<setDropEnable( 1 ),
		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */
			Function( {this, clickpt},
				If( !Is Empty( this << getSourceBox ) & this == (this << getSourceBox) << sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

## Messaggi degli elementi

### Add Line Annotation

**Sintassi:** obj << Add Line Annotation

**Descrizione:** Aggiunge una linea sopra il riquadro di visualizzazione.

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Sintassi:** obj << Background Color( color );

color = obj << Get Background Color

**Descrizione:** Se è impostato un colore di sfondo, il riquadro è riempito con il colore di sfondo prima di visualizzarne il contenuto. Se non è impostato alcun colore di sfondo, traspare lo sfondo e il contenuto dei riquadri.

**JMP Versione aggiunta:** 15

```jsl

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

### Border

**Sintassi:** obj << Border( sides );

sides = obj << Get Border

**Descrizione:** I bordi sono linee continue tracciate attorno alla parte esterna di un riquadro di visualizzazione. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai bordi orizzontali e verticali.

```jsl

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

```jsl

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

### Bring Window To Front

**Sintassi:** obj << Bring Window To Front

**Descrizione:** Porta la finestra in primo piano.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Sintassi:** obj << Child

**Descrizione:** Restituisce il nodo di livello inferiore a questo riquadro di visualizzazione.

```jsl

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

### Class Name

**Sintassi:** obj << Class Name

**Descrizione:** Restituisce il nome della classe di visualizzazione per questo riquadro.

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**Sintassi:** obj << Copy Data

**Descrizione:** copia i dati delimitati da tabulazioni da una matrice o tabella negli Appunti.

```jsl

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Sintassi:** obj << Copy Graph

**Descrizione:** Trasferisce negli Appunti un&apos;immagine del grafico con gli assi.

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**Sintassi:** obj << Delete Box

**Descrizione:** Elimina il riquadro di visualizzazione.

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Sintassi:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Descrizione:** Un oggetto non abilitato non risponderà agli input della tastiera o del mouse. Questa proprietà è ereditata da oggetti secondari, pertanto un oggetto contenitore non abilitato causerà la disabilitazione di tutti gli oggetti dipendenti.

```jsl

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

### Find

**Sintassi:** obj << Find

**Descrizione:** Restituisce un riquadro di visualizzazione con argument indicato.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get Annotation

**Sintassi:** obj << Get Annotation

**Descrizione:** Restituisce la prima annotazione ancorata a questo riquadro di visualizzazione. È possibile accedere ad altre annotazioni utilizzando Sib() sul risultato.

```jsl

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

```jsl

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

### Get Border

**Sintassi:** obj << Border( sides );

sides = obj << Get Border

**Descrizione:** I bordi sono linee continue tracciate attorno alla parte esterna di un riquadro di visualizzazione. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai bordi orizzontali e verticali.

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

### Get HTML

**Sintassi:** obj << Get HTML( <format> )

**Descrizione:** Restituisce una stringa che contiene l&apos;origine HTML del riquadro di visualizzazione.

**Esempio 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**Esempio 2**

```jsl

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

```jsl

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

```jsl

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

### Get Journal

**Sintassi:** obj << Get Journal

**Descrizione:** Restituisce una stringa che contiene l&apos;origine journal del riquadro di visualizzazione.

```jsl

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

```jsl

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

### Get Max Size

**Sintassi:** width,height = obj << Get Max Size

**Descrizione:** Restituisce la dimensione massima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Sintassi:** obj << Get Picture( <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Descrizione:** Cattura db come un oggetto immagine. L&apos;argomento facoltativo Scale effettuerà il rendering dell&apos;immagine a una risoluzione ridimensionata. Il ridimensionamento richiede che il riquadro di visualizzazione sia estensibile. L&apos;argomento Type determina se il risultato sarà un&apos;immagine vettoriale scalabile o una bitmap. Per impostazione predefinita viene restituita un&apos;immagine scalabile, adatta al salvataggio in formati vettoriali come PDF. L&apos;opzione View cambia il comportamento di alcuni riquadri. L&apos;opzione predefinita di "Picture" rappresenta il report come sarebbe se fosse esportato in un formato immagine, con aree fatte scorrere completamente visibili. La modalità di visualizzazione di "Screen" rappresenta il report come visibile sullo schermo e "Print" rappresenta il report come se fosse stampato, senza funzioni di impostazione della pagina. L&apos;opzione SubRect acquisisce una parte dell&apos;immagine risultante piuttosto che un&apos;immagine completa. L&apos;opzione Appearance può cambiare dai colori di output "Default" ai colori "Current" come visibili sullo schermo. Le opzioni View, SubRect e Appearance sono supportate solo per Type "Bitmap".

**Default**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

**Scala**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**Vista e aspetto**

```jsl

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

### Get Project

**Sintassi:** project = obj << Get Project()

**Descrizione:** Restituisce il progetto padre della finestra, o Vuoto() se non è in un progetto.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Sintassi:** obj << Get Properties

**Descrizione:** Restituisce un array associativo che contiene le proprietà del riquadro di visualizzazione e i rispettivi valori.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Sintassi:** obj << Get Property( "property" )

**Descrizione:** Restituisce l&apos;impostazione corrente per la property nominata.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Sintassi:** obj << Get Property List

**Descrizione:** Restituisce un elenco di proprietà del riquadro di visualizzazione.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**Sintassi:** obj << Get RTF( <format> )

**Descrizione:** Restituisce una stringa che contiene l&apos;origine RTF del riquadro di visualizzazione.

**Esempio 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**Esempio 2**

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

### Get Vertical Alignment

**Sintassi:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Descrizione:** L&apos;allineamento verticale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Sintassi:** width = obj << Get Width

**Descrizione:** Restituisce la larghezza del riquadro di visualizzazione.

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Sintassi:** obj << Get Window Position

**Descrizione:** Restituisce la posizione della finestra.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Sintassi:** obj << Get Window Size

**Descrizione:** Restituisce le dimensioni della finestra.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Sintassi:** obj << Get Window Title

**Descrizione:** Restituisce il titolo della finestra.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Sintassi:** obj << Get Window View

**Descrizione:** Restituisce la visualizzazione della finestra corrente. Le finestre possono essere "Visibile", "Invisibile" o "Privata".

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Sintassi:** obj << Get XML( <English(0|1)>, <NoData(0|1)> )

**Descrizione:** Recupera la struttura di visualizzazione formattata come XML. Di default, le stringhe vengono restituite nella lingua locale e l&apos;XML include i valori dei dati in alcuni riquadri. Usare l&apos;opzione English per restituire le stringhe in inglese, se disponibili. Usare l&apos;opzione NoData per omettere i valori dei dati all&apos;interno dei riquadri, che possono essere molto grandi per alcune strutture di visualizzazione.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetChildBox

**Sintassi:** GetChildBox( { x, y } | [ x y ] | x, y )

**Descrizione:** Restituisce un elenco di zero o più riquadri di visualizzazione nidificati: { elemento figlio, nipote, bisnipote, ... } alle coordinate specificate all&apos;interno di questa casella del mouse. In molti casi potrebbe rivelarsi più semplice usare una casella del mouse separata intorno a ciascun elemento figlio.

```jsl

Names Default To Here( 1 );
New Window( "MouseBox",
	Text Box( "Move the mouse around" ),
	MouseBox(
		Lineup Box( N Col( 2 ), 
            /*pre-load the spacer boxes with a color, but make them transparent as well so the color won't show*/
			s1 = Spacer Box( size( 50, 50 ), <<Color( "red" ), <<SetFill( 0 ) ),
			s2 = Spacer Box( size( 50, 50 ), <<Color( "green" ), <<SetFill( 0 ) ),
			s3 = Spacer Box( size( 50, 50 ), <<Color( "blue" ), <<SetFill( 0 ) ),
			Lineup Box( N Col( 2 ), 
                /*demonstrate nested boxes*/
				s4 = Spacer Box( size( 24, 24 ), <<Color( "red" ), <<SetFill( 0 ) ),
				s5 = Spacer Box( size( 24, 24 ), <<Color( "green" ), <<SetFill( 0 ) ),
				s6 = Spacer Box( size( 24, 24 ), <<Color( "blue" ), <<SetFill( 0 ) ),
				s7 = Spacer Box( size( 24, 24 ), <<Color( "yellow" ), <<SetFill( 0 ) )
			)
		), 
        /*set up a callback function to track the mouse movements*/
		<<SetTrackEnable( 1 ),
		<<SetTrack(
			Function( {this, clickpt}, /*clickpt is really the move point*/
/*on each mouse move, make children transparent*/
				s1 << setfill( 0 );
				s2 << setfill( 0 );
				s3 << setfill( 0 );
				s4 << setfill( 0 );
				s5 << setfill( 0 );
				s6 << setfill( 0 );
				s7 << setfill( 0 );
                /*retrieve a list of boxes under the clickpt (which is a mouse coordinate within the mouse box like {10,20})*/
				childBoxList = this << GetChildBox( clickpt );
                /* child 1 is the LineupBox.  child 2, if present, is one of the Spacer Boxes */
				If(
					N Items( childBoxList ) > 0 & (childBoxList[N Items( childBoxList )]) <<
					className == "SpacerBox", 
                    /*if a SpacerBox is under the mouse, make it opaque*/
					childBoxList[N Items( childBoxList )] << SetFill( 1 )
				);
			)
		)
	)
);

```

### GetClick

**Sintassi:** obj << GetClick

**Descrizione:** Restituisce la funzione da <<SetClick

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setClick( Function( {this, clickPt, event}, Print( 42 ) ) );
mb << getClick();

```

### GetClickEnable

**Sintassi:** obj << GetClickEnable

**Descrizione:** Restituisce il valore impostato da SetClickEnable

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setClickEnable( 1 );
mb << getClickEnable();

```

### GetDefaultCursor

**Sintassi:** obj << GetDefaultCursor

**Descrizione:** Recupera il valore specificato da SetDefaultCursor

### GetDefaultCursorEnable

**Sintassi:** obj << GetDefaultCursorEnable

**Descrizione:** Recupera il valore specificato da SetDefaultCursorEnable

### GetDestBox

**Sintassi:** obj << GetDestBox

### GetDragBegin

**Sintassi:** obj << GetDragBegin

**Descrizione:** restituisce la funzione specificata da <<SetDragBegin

### GetDragEnable

**Sintassi:** obj << GetDragEnable

**Descrizione:** Chiede se alla casella del mouse è attualmente consentito generare un&apos;operazione di trascinamento e rilascio.

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << GetDragEnable;

```

### GetDragEnd

**Sintassi:** obj << GetDragEnd

**Descrizione:** Restituisce la funzione specificata da <<SetDragEnd

### GetDragText

**Sintassi:** obj << GetDragText

**Descrizione:** Normalmente non necessario. Restituisce il testo fornito da SetDragText, che potrebbe non essere il testo inviato al punto di rilascio.

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDragText( "1000 words" );
mb << getDragText;

```

### GetDropCommit

**Sintassi:** obj << GetDropCommit

**Descrizione:** Restituisce la funzione impostata da <<SetDropCommit

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropCommit( Function( {this, clickPt, text}, Print( 42 ) ) );
mb << getDropCommit();

```

### GetDropEnable

**Sintassi:** obj << GetDropEnable

**Descrizione:** Restituisce il valore memorizzato da <<SetDropEnable

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropEnable( 1 );
mb << getDropEnable();

```

### GetDropTrack

**Sintassi:** obj << GetDropTrack

**Descrizione:** Restituisce la funzione impostata da <<SetDropTrack

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropTrack( Function( {this, clickPt}, Print( 42 ) ) );
mb << getDropTrack();

```

### GetEdit

**Sintassi:** obj << GetEdit

### GetEditClear

**Sintassi:** obj << GetEditClear( state=0|1 )

### GetEditCopy

**Sintassi:** obj << GetEditCopy( state=0|1 )

### GetEditCopyLabel

**Sintassi:** obj << GetEditCopyLabel( state=0|1 )

### GetEditCopyText

**Sintassi:** obj << GetEditCopyText( state=0|1 )

### GetEditCut

**Sintassi:** obj << GetEditCut( state=0|1 )

### GetEditEnable

**Sintassi:** obj << GetEditEnable

### GetEditJournal

**Sintassi:** obj << GetEditJournal( state=0|1 )

### GetEditPaste

**Sintassi:** obj << GetEditPaste( state=0|1 )

### GetEditPasteJSL

**Sintassi:** obj << GetEditPasteJSL( state=0|1 )

### GetEditPasteLabel

**Sintassi:** obj << GetEditPasteLabel( state=0|1 )

### GetEditSaveSelectionAs

**Sintassi:** obj << GetEditSaveSelectionAs( state=0|1 )

### GetEditSubmit

**Sintassi:** obj << GetEditSubmit( state=0|1 )

### GetEditSubmitDebug

**Sintassi:** obj << GetEditSubmitDebug( state=0|1 )

### GetFocus

**Sintassi:** obj << GetFocus

### GetKey

**Sintassi:** obj << GetKey

**Descrizione:** Restituisce la funzione impostata da Set Key.

```jsl

Names Default To Here( 1 );
New Window( "SetKey Example", mb = MouseBox( tb = Text Box( "Press a key." ) ) );
mb << setkey(
	Function( {this, key},
		tb << settext( key );
		1;
	)
);
mb << setkeyenable( 1 );
mb << setfocus;
Show( mb << GetKey );

```

### GetKeyEnable

**Sintassi:** obj << GetKeyEnable

### GetMark

**Sintassi:** obj << GetMark

**Descrizione:** recupera il valore specificato da <<SetMark

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMark( Function( {this}, this << Set Marked( !(this << Get Marked) ) ) );
mb << GetMark;

```

### GetMarkEnable

**Sintassi:** obj << GetMarkEnable

**Descrizione:** recupera il valore impostato da <<SetMarkEnable

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << getMarkEnable();

```

### GetMarked

**Sintassi:** obj << GetMarked

**Descrizione:** Restituisce il flag contrassegnato corrente.

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMarked();
mb << getMarked();

```

### GetOffset

**Sintassi:** x,y = obj << GetOffset

**Descrizione:** Restituisce l&apos;offset del riquadro di visualizzazione rispetto al riquadro principale. Potrebbe essere necessario usare il messaggio <<principale in un ciclo per accumulare diversi offset.

```jsl

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

### GetSourceBox

**Sintassi:** obj << GetSourceBox

### GetToolTip

**Sintassi:** obj << GetToolTip

**Descrizione:** Normalmente non necessario. Restituisce il testo fornito da SetTooltip. Le descrizioni dei comandi sono automatiche e non richiedono questo messaggio.

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setTooltip( "this is your best choice" );
mb << getTooltip;

```

### GetTrack

**Sintassi:** obj << GetTrack

**Descrizione:** Recupera il valore specificato da <<SetTrack

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setTrack(/*track the button-up mouse movement*/Function( {this, clickPt},
		Print( 42 )
	)
);
mb << getTrack();

```

### GetTrackEnable

**Sintassi:** obj << GetTrackEnable

**Descrizione:** Recupera il valore impostato da <<SetTrackEnable

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setTrackEnable( 1 );
mb << getTrackEnable();

```

### GetUserData

**Sintassi:** obj << GetUserData

**Descrizione:** Recupera il valore memorizzato da <<SetUserData

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setUserData( [1 2, 3 4] );
(mb << getUserData())[2, 1];

```

### Horizontal Alignment

**Sintassi:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Descrizione:** L&apos;allineamento orizzontale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```jsl

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

### Inval

**Sintassi:** obj << Inval

**Descrizione:** Invalida il riquadro di visualizzazione.  La finestra verrà aggiornata quando viene inviato il messaggio <<Aggiorna finestra o il sistema operativo avrà tempo per l&apos;aggiornamento.

```jsl

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

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Sintassi:** obj << Is Modal Dialog

**Descrizione:** Restituisce vero se la finestra è una finestra di dialogo modale. Utile solo se chiamato da un callback del gestore della finestra.

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Sintassi:** obj << Launch

**Descrizione:** Valuta argument indicato nel contesto del riquadro di visualizzazione.

```jsl

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

### Make RowState Handler

**Sintassi:** rs = obj << Make RowState Handler( <dt>, function(a) )

**Descrizione:** Crea un gestore dello stato delle righe per la tabella di dati specificata o per la tabella di dati corrente. La funzione viene chiamata quando gli stati delle righe cambiano nel contesto del filtro del riquadro. L&apos;argomento della funzione contiene i numeri di riga che sono cambiati o -1 se il filtro di stato della riga è cambiato.

**Single table**

```jsl

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

```jsl

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

### Margin

**Sintassi:** obj << Margin( sides );

sides = obj << Get Margin

**Descrizione:** Il margine aggiunge spazio tra il bordo del riquadro e i riquadri adiacenti. Usare argomenti con nome, oppure fornire un elenco di valori. Se viene indicato un solo valore sarà applicato a tutti i lati. Se vengono specificati due valori essi saranno applicati ai margini orizzontali e verticali.

```jsl

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

### Maximize Window

**Sintassi:** obj << Maximize Window( <state=0|1> )

**Descrizione:** Ingrandisce la finestra. L&apos;argomento predefinito è 1.

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**Sintassi:** obj << Next

**Descrizione:** Restituisce il riquadro di visualizzazione successivo a questo.

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Sintassi:** obj << Pad Window( bool )

**Descrizione:** Attiva o disattiva la spaziatura interna della finestra.

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Prepend

**Sintassi:** obj << Prepend( db2 )

**Descrizione:** Aggiunge db2 alla struttura di visualizzazione prima di db.

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### RemoveFocus

**Sintassi:** obj << RemoveFocus

### Reshow

**Sintassi:** obj << Reshow

**Descrizione:** Invalida riquadro di visualizzazione e aggiorna la finestra con il nuovo contenuto.  Vedere i messaggi <<Inval e <<Aggiorna finestra se è necessario un maggiore controllo sui tempi di aggiornamento.

```jsl

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

### Save Capture

**Sintassi:** obj << Save Capture( <"path">, <format>, <Add Sibling(n)> )

**Descrizione:** Salva una schermata del riquadro di visualizzazione nel percorso path specificato. Se non viene specificato un path, compare la finestra Salva con nome.

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

**Scala**

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Sintassi:** obj << Save Window Report( pathname, <embed data(0|1)> )

**Descrizione:** Salva la finestra del report corrente in un file di report JMP (.jrp).

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Sintassi:** obj << Scroll Window( DisplayBox | <Relative(<v> | <h>,<v>)> | <Absolute(<v> | <h>,<v>) )

**Descrizione:** Regola la barra di scorrimento della finestra per visualizzare il riquadro di visualizzazione specificato, oppure scorre un numero relativo di pixel o scorre fino a una posizione assoluta dei pixel. Al posto di un numero di pixel si possono usare le parole chiave "Start" o "End".

**Absolute**

```jsl

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

```jsl

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

```jsl

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

### Select

**Sintassi:** obj << Select

**Descrizione:** Seleziona questo oggetto per essere utilizzato dai comandi del menu Modifica.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**Sintassi:** obj << Set Content Size( x,y )

**Descrizione:** Imposta le dimensioni del contenuto nella finestra.

```jsl

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

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**Sintassi:** obj << Set Height( width )

**Descrizione:** Imposta l&apos;altezza del riquadro di visualizzazione.

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Sintassi:** obj << Set Max Size( width,height )

**Descrizione:** Imposta la dimensione massima di questo riquadro di visualizzazione per l&apos;estensione automatica.

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Sintassi:** obj << Set Report Title( "string" )

**Descrizione:** Cambia il titolo del report.

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Width

**Sintassi:** obj << Set Width( width )

**Descrizione:** Imposta la larghezza del riquadro di visualizzazione.

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Sintassi:** obj << Set Window Size( x,y )

**Descrizione:** Imposta le dimensioni della finestra.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Sintassi:** obj << Set Window Title( "string" )

**Descrizione:** Cambia il titolo della finestra.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### SetClick

**Sintassi:** obj << SetClick( Function( {this, clickpt, event}, <script> ) )

**Descrizione:** Specifica una funzione per gestire eventi con il mouse quando il pulsante è premuto (oppure prima premuto o rilasciato). Per i movimenti con il pulsante alzato, vedere <<SetTrack(). clickpt è una posizione {x,y} all&apos;interno di questa casella del mouse su cui si è fatto clic. event è l&apos;evento associato al clic. I valori sono (nell&apos;ordine in cui accadono): "Premuto", "Selezionato" o "Rilasciato".

```jsl

Names Default To Here( 1 );
xsize = 300; /* size of the bitmap */
ysize = 200;
backred = .8; /* background color is light gray-green */
backgrn = .9;
backblu = .8;
RED = J( ysize, xsize, backred ); /* matrix where the bitmap is composed */
GRN = J( ysize, xsize, backgrn );
BLU = J( ysize, xsize, backblu );
BITMAP = New Image( xsize, ysize ); /* displaybox that holds the bitmap */
BITMAP << setpixels( "rgb", {RED, GRN, BLU} ); /* initialize bitmap */
drawline = Function( {x0, y0, x1, y1}, /* utility function to draw a line in an array using matrix operations */
	{dx = x1 - x0, dy = y1 - y0, adx = Abs( dx ), ady = Abs( dy ), m, b},
	If( adx > ady,
		xx = Round( x0 ) :: Round( x1 );
		m = dy / dx;
		b = y0 - m * x0;
		yy = Round( xx * m + b );
	,
		yy = Round( y0 ) :: Round( y1 );
		m = dx / dy;
		b = x0 - m * y0;
		xx = Round( yy * m + b );
	);
	singleindex = (yy - 1) * N Col( GRN ) + xx;
	Try( GRN[singleindex] = .6, 0 ); /* catch indexing errors and ignore the problems */
	Try( RED[singleindex] = .1, 0 ); /* the line is dark green; you could add other */
	Try( BLU[singleindex] = .1, 0 ); /* controls to change the color. */
);
w = New Window( "paint",
	MouseBox( /* <<<<<<<< handler for mouse events */
		BITMAP, /* <<<<<< child box does not receive the mouse events */
		<<setTrackEnable( 1 ),
		<<setTrack(
			Function( {this, clickpt},
				this << setCursor( "Hand" ) /* button-up tracking - use the hand */
			)
		),
		<<setClickEnable( 1 ),
		<<setClick( /* button-down, move, button-release handler */
			Function( {this, clickpt, event}, /*Is Alt Key(),Is Control Key(),Is Shift Key() should be captured on "Pressed" */
				If( event == "Released" | event == "Canceled",
					this << setCursor( "Hand" ) /* switch back to hand immediately */
				,
					this << setCursor( "Finger" ) /* change cursor during drawing */
				);
				If(
					event == "Pressed",
						origin = clickpt; /* capture starting point */
						Show( event, origin );,
					event == "Moved", /* else */
						{x0, y0} = origin;
						{x1, y1} = clickpt; /* draw to new point */
						drawline( x0, y0, x1, y1 );
						drawline( x0 + 1, y0, x1 + 1, y1 ); /* make a thick line */
						drawline( x0 - 1, y0, x1 - 1, y1 );
						drawline( x0, y0 + 1, x1, y1 + 1 );
						drawline( x0, y0 - 1, x1, y1 - 1 );
						origin = clickpt;
						BITMAP << setpixels( "rgb", {RED, GRN, BLU} ); /* apply changes to bitmap */
						w << reshow; /* force screen update */
				,
					event == "Ticked", /* else ... while the button is pressed but not moving, the tick event will let you do something...here we fade the drawing... */
						GRN = (49 * GRN + backgrn) / 50;
						RED = (49 * RED + backred) / 50;
						BLU = (49 * BLU + backblu) / 50;
						BITMAP << setpixels( "rgb", {RED, GRN, BLU} );
						w << reshow;
				);
			)
		)
	)
);

```

### SetClickEnable

**Sintassi:** obj << SetClickEnable( state=0|1 )

**Descrizione:** Attiva la casella del mouse consentendo di gestire operazioni di pressione, spostamento e rilascio tramite la funzione <<SetClick

### SetCursor

**Sintassi:** obj << SetCursor( "Freccia"|"NS (Cursore a doppia freccia NS)"|"EW (Cursore a doppia freccia EW)"|"NWSE (Cursore diagonale a doppia freccia NWSE)"|"NESW (Cursore diagonale a doppia freccia NESW)"|"Dito"|"Mano" )

**Descrizione:** <<SetCursor("Mano") (o Dito o Freccia o NS EW NWSE NESW) imposta il cursore. Si utilizza da una funzione <<SetTrack o <<SetClick.

```jsl

Names Default To Here( 1 );
New Window( "roll over demo",
	MouseBox(
		Text Box( "hello" ),
		<<setTrackEnable( 1 ),
		<<settrack(
			Function( {this, pos},
				(this << child) << FontColor( If( pos[1] >= 0, "red", "black" ) )
			)
		),
		<<setDefaultCursor( "Finger" )
	),
	MouseBox(
		Text Box( "there" ),
		<<setToolTip( "Special!" ),
		<<setTrackEnable( 1 ),
		<<settrack( Function( {this, pos}, this << setCursor( "Hand" ) ) )
	)
);

```

### SetDefaultCursor

**Sintassi:** obj << SetDefaultCursor( "Freccia"|"NS (Cursore a doppia freccia NS)"|"EW (Cursore a doppia freccia EW)"|"NWSE (Cursore diagonale a doppia freccia NWSE)"|"NESW (Cursore diagonale a doppia freccia NESW)"|"Dito"|"Mano" )

**Descrizione:** Specifica il cursore predefinito che viene visualizzato se si specifica anche SetDefaultCursorEnable(1); indicare il valore "Freccia", "NS", "EW", "NWSE", "NESW", "Dito" o "Mano". A differenza di SetCursor, che viene utilizzata da uno script SetTrack, SetDefaultCursor opera senza uno script.

```jsl

Names Default To Here( 1 );
clickFunction = Function( {this, pos, action},
	If(
		action == "Pressed", oldPos = pos,
		action == "Moved",
			dx = pos[1] - oldPos[1];
			dy = pos[2] - oldPos[2];
			oldPos = pos;
			{tops, lefts, rights, bottoms} = this << getUserData();
			If(
				N Items( tops ) > 0 & 0 < ((border << getTop()) + dy) & (((boxes[tops[1]] <<
				child) << getTop) - dy) > 0,
				border << top( (border << getTop()) + dy );
				For( i = 1, i <= N Items( tops ), i++,
					(boxes[tops[i]] << child) << top(
						((boxes[tops[i]] << child) << getTop) - dy
					)
				);
			);
			If(
				N Items( bottoms ) > 0 & 0 < ((border << getBottom()) - dy) & (((boxes[
				bottoms[1]] << child) << getBottom) + dy) > 0,
				border << bottom( (border << getBottom()) - dy );
				For( i = 1, i <= N Items( bottoms ), i++,
					(boxes[bottoms[i]] << child) << bottom(
						((boxes[bottoms[i]] << child) << getBottom) + dy
					)
				);
			);
			If(
				N Items( lefts ) > 0 & 0 < ((border << getLeft()) + dx) & (((boxes[lefts[1]]
				 << child) << getLeft) - dx) > 0,
				border << Left( (border << getLeft()) + dx );
				For( i = 1, i <= N Items( lefts ), i++,
					(boxes[lefts[i]] << child) << Left(
						((boxes[lefts[i]] << child) << getLeft) - dx
					)
				);
			);
			If(
				N Items( rights ) > 0 & 0 < ((border << getRight()) - dx) & (((boxes[rights[1
				]] << child) << getRight) + dx) > 0,
				border << Right( (border << getRight()) - dx );
				For( i = 1, i <= N Items( rights ), i++,
					(boxes[rights[i]] << child) << Right(
						((boxes[rights[i]] << child) << getRight) + dx
					)
				);
			);,
		action == "Released", 0,
		action == "Ticked",
			((this << child) << child) << settext(
				Char( Num( ((this << child) << child) << gettext() ) + 1 )
			)
	)
);
mb = Function( {boxNumber, cursor, TopLeftRightBottom},
	MouseBox(
		Border Box( sides( 15 ), Left( 5 ), Right( 5 ), top( 5 ), bottom( 5 ),
			Text Box( boxNumber )
		),
		<<setDefaultCursor( Eval( cursor ) ),
		<<setClickEnable( 1 ),
		<<SetClick( clickFunction ),
		<<SetUserData( TopLeftRightBottom )
	)
);
boxes = {};
bigBorder = 50;
New Window( "corner demo",
	border = Border Box( sides( 15 ), Left( bigBorder ), Right( bigBorder ), top( bigBorder ),
		bottom( bigBorder ),
		Lineup Box( N Col( 3 ), spacing( 10, 10 ),
			boxes[1] = mb( "1000", "NWSE", {{1, 2, 3}, {1, 4, 7}, {}, {}} ),
			boxes[2] = mb( "2000", "NS", {{1, 2, 3}, {}, {}, {}} ),
			boxes[3] = mb( "3000", "NESW", {{1, 2, 3}, {}, {3, 6, 9}, {}} ),
			boxes[4] = mb( "4000", "EW", {{}, {1, 4, 7}, {}, {}} ),
			boxes[5] = mb( "5000", "HAND", {{}, {}, {}, {}} ),
			boxes[6] = mb( "6000", "EW", {{}, {}, {3, 6, 9}, {}} ),
			boxes[7] = mb( "7000", "NESW", {{}, {1, 4, 7}, {}, {7, 8, 9}} ),
			boxes[8] = mb( "8000", "NS", {{}, {}, {}, {7, 8, 9}} ),
			boxes[9] = mb( "9000", "NWSE", {{}, {}, {3, 6, 9}, {7, 8, 9}} )
		)
	)
);

```

### SetDefaultCursorEnable

**Sintassi:** obj << SetDefaultCursorEnable( state=0|1 )

**Descrizione:** Attiva la casella del mouse perché mostri il cursore specificato da SetDefaultCursor.

### SetDragBegin

**Sintassi:** obj << SetDragBegin( Function( {this, clickpt}, <script> ) )

**Descrizione:** Specifica una funzione da chiamare all&apos;inizio di un&apos;operazione di trascinamento e rilascio. La funzione può impedire il trascinamento restituendo 0,0 oppure consentirlo restituendo una stringa (invece di usare <<SetDragText) o restituendo 1,0 (se si usa <<SetDragText). clickpt è una posizione {x,y} all&apos;interno della casella del mouse in cui è iniziato il trascinamento.

```jsl

Names Default To Here( 1 );
/* See full example for MouseBox() */
mb = MouseBox();
mb << SetDragBegin( Function( {this, clickpt}, 1.0 /*always allow*/ ) );

```

### SetDragEnable

**Sintassi:** obj << SetDragEnable( state=0|1 )

**Descrizione:** La casella del mouse può generare un&apos;operazione di trascinamento e rilascio.

```jsl

Names Default To Here( 1 );
New Window( "example",
	MouseBox(
		Text Box( "drag me to a text editor" ),
		<<SetDragEnable( 1 ),
		<<SetDragText( "hello" )
	)
);

```

### SetDragEnd

**Sintassi:** obj << SetDragEnd( Function( {this, clickpt, how}, <script> ) )

**Descrizione:** Specifica una funzione da chiamare alla fine di un&apos;operazione di trascinamento e rilascio. how indica come è terminata l&apos;operazione, come "move" o "ignore". Se l&apos;operazione termina come &apos;move&apos;, si può utilizzare questa funzione per cancellare la posizione di origine del trascinamento. clickpt è una posizione {x,y} all&apos;interno della casella del mouse in cui è iniziato il trascinamento.

```jsl

Names Default To Here( 1 );
/* See full example for MouseBox() */
mb = MouseBox();
mb << SetDragEnd(
	Function( {this, clickpt, how},
		If( how == "move",
			(this << child) << delete/* example; probably not what you want */
		)
	)
);

```

### SetDragText

**Sintassi:** obj << SetDragText

**Descrizione:** Specifica il testo che la casella del mouse invierà al punto di rilascio.

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDragText( "1000 words" );

```

### SetDropCommit

**Sintassi:** obj << SetDropCommit( Function( {this, clickpt, text}, <script> ) )

**Descrizione:** Specifica una funzione che viene chiamata verso la fine di una sequenza di trascinamento e rilascio, nel momento in cui viene rilasciato il pulsante del mouse. Questa funzione riceve il text fornito dall&apos;origine del trascinamento e può utilizzarlo come necessario, ad esempio come contenuto di una casella di testo. clickpt è una posizione {x,y} all&apos;interno della casella del mouse in cui è terminato il trascinamento.

```jsl

Names Default To Here( 1 );
/* See full example for <<SetDropTrack() */
mb = MouseBox();
mb << setDropCommit(
	Function( {this, clickPt, text},
		((this << child) << child) << setText( text );
		1;/* return code is ignored */
	)
);

```

### SetDropEnable

**Sintassi:** obj << SetDropEnable( state=0|1 )

**Descrizione:** Attiva la casella del mouse in modo che accetti operazioni di rilascio.

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropEnable( 1 );

```

### SetDropTrack

**Sintassi:** obj << SetDropTrack( Function( {this, clickpt}, <script> ) )

**Descrizione:** Specifica una funzione da chiamare quando un&apos;operazione di trascinamento e rilascio genera un trascinamento attraverso la casella del mouse. La funzione specificata restituisce 0,0 per impedire il rilascio o 1,0 per consentirlo. L&apos;effettivo rilascio avviene solo quando si rilascia il pulsante del mouse: a questo punto viene chiamata la funzione SetDropCommit perché intervenga sul testo rilasciato, ma solo se setDropTrack ha restituito 1,0. clickpt è una posizione {x,y} all&apos;interno della casella del mouse in cui viene trascinata un&apos;altra casella del mouse. È {-1, -1} quando il trascinamento non è nella casella del mouse this.

```jsl

Names Default To Here( 1 );
nextToBlank = Function( {x, y}, /* helper function */
	If( /* child is border, grandchild is text */
		(x > 1 & (((puzzle[x - 1][y] << child) << child) << gettext) == " ") | (x < 4 & (((
		puzzle[x + 1][y] << child) << child) << gettext) == " ") | (y > 1 & (((puzzle[x][y
		-1] << child) << child) << gettext) == " ") | (y < 4 & (((puzzle[x][y + 1] << child)
		 << child) << gettext) == " ")
	,
		1,
		0
	)
);/* only allow drag begin if next door to empty cell */
dragBegin = Function( {this, clickPt},
	{x, y} = this << getUserData;
	If( nextToBlank( x, y ),
		((this << child) << child) << getText/* the message is the textbox content */
	, /* else */
		0 /* suppress the drag */
	);
);/* function to remove the character from the source cell, but only if the drop was successful */
dragEnd = Function( {this, clickPt, how}, /* how is copy/move/ignore */
	destbox = this << getDestBox;
	If( Is Empty( destBox ),
		Show( "unknown destination" );
		0 /* don't know where the dest was, force ignore */
		;
	,
		Try(
			{x, y} = destbox << GetUserData,
			x = -1;
			y = -1;
		); /* the destbox might not have a list in userdata */
		If(
			Try(
				puzzle[x][y] != destbox,
				1 /*throw is same as !=*/
			)
		, /* x,y might not be valid index */
			Show( "not dropped in this puzzle" );
			0 /* not this puzzle instance, force ignore */
			;
		, /* else */
			If( how == "ignore",
				Show( "drop not completed" );
				0 /* the drop was not completed */
				;
			, /* else */
				((this << child) << child) << setText( " " )
			)
		);
	);
	0 /* the return code is ignored */
	;
);/* function to decide if a drop is allowed.  return codes (0,1) are critical. */
dropTrack = Function( {this, clickPt},
	sourcebox = this << getSourceBox;
	If( Is Empty( sourcebox ),
		Show( "unknown source" );
		0 /* no drop from unknown source box */
		;
	, /* else */
		Try(
			{x, y} = sourcebox << getUserData,
			x = -1;
			y = -1;
		); /* the sourcebox mightnot have a list in userdata */
		If(
			Try(
				puzzle[x][y] != sourcebox,
				1 /*throw is same as !=*/
			)
		, /* x,y might not be valid index */
			Show( "not from this puzzle" );
			0 /* not sourced from this puzzle instance, ignore */
			;
		, /* else */
			If( ((this << child) << child) << getText != " ",
				0 /* no drop on occupied cell */
			, /* else */
				1 /* allow drop on the blank cell */
			)
		);
	);
);/* function to implement the drop */
dropCommit = Function( {this, clickPt, text},
	((this << child) << child) << setText( text );
	1; /* ignored */
);/* cursor changer for cells that can source a drag */
track = Function( {this, clickPt},
	{x, y} = this << getUserData;
	If( nextToBlank( x, y ),
		this << setCursor( "Hand" ),
		this << setCursor( "Arrow" )
	);
	1; /* ignored */
);/* helper function to construct the displaybox tree */
mb = Function( {letter, x, y},
	MouseBox(
		Border Box( Left( 9 ), Right( 9 ), top( 3 ), bottom( 3 ), sides( 15 ),
			Text Box(
				letter,
				<<setFont( "Courier New" ),
				<<set font size( 15 ),
				<<set font style( "bold" )
			)
		),
		<<setUserData( Eval List( {x, y} ) ), /* remember my location.  I don't move, but my content changes. */
		<<setDragEnable( 1 ),
		<<setDragBegin( dragBegin ), /* dragFunctions defined below */
		<<setDragEnd( dragEnd ),
		<<setDropEnable( 1 ),
		<<setDropTrack( dropTrack ),
		<<setDropCommit( dropCommit ),
		<<setTrackEnable( 1 ),
		<<setTrack( track )
	)
);
puzzle = Eval List(
	{Eval List( {mb( "b", 1, 1 ), mb( "u", 1, 2 ), mb( "y", 1, 3 ), mb( " ", 1, 4 )} ),
	Eval List( {mb( "t", 2, 1 ), mb( "h", 2, 2 ), mb( "i", 2, 3 ), mb( "s", 2, 4 )} ),
	Eval List( {mb( "w", 3, 1 ), mb( "o", 3, 2 ), mb( "r", 3, 3 ), mb( "d", 3, 4 )} ),
	Eval List( {mb( "g", 4, 1 ), mb( "a", 4, 2 ), mb( "m", 4, 3 ), mb( "e", 4, 4 )} )}
);
New Window( "puzzle",
	Border Box( Left( 5 ), Right( 5 ), top( 5 ), bottom( 5 ), sides( 15 ),
		Lineup Box( N Col( 4 ), spacing( 3, 3 ),
			puzzle[1][1],
			puzzle[1][2],
			puzzle[1][3],
			puzzle[1][4],
			puzzle[2][1],
			puzzle[2][2],
			puzzle[2][3],
			puzzle[2][4],
			puzzle[3][1],
			puzzle[3][2],
			puzzle[3][3],
			puzzle[3][4],
			puzzle[4][1],
			puzzle[4][2],
			puzzle[4][3],
			puzzle[4][4]
		)
	)
);

```

### SetEdit

**Sintassi:** obj << SetEdit

### SetEditClear

**Sintassi:** obj << SetEditClear( state=0|1 )

### SetEditCopy

**Sintassi:** obj << SetEditCopy( state=0|1 )

### SetEditCopyLabel

**Sintassi:** obj << SetEditCopyLabel( state=0|1 )

### SetEditCopyText

**Sintassi:** obj << SetEditCopyText( state=0|1 )

### SetEditCut

**Sintassi:** obj << SetEditCut( state=0|1 )

### SetEditEnable

**Sintassi:** obj << SetEditEnable

### SetEditJournal

**Sintassi:** obj << SetEditJournal( state=0|1 )

### SetEditPaste

**Sintassi:** obj << SetEditPaste( state=0|1 )

### SetEditPasteJSL

**Sintassi:** obj << SetEditPasteJSL( state=0|1 )

### SetEditPasteLabel

**Sintassi:** obj << SetEditPasteLabel( state=0|1 )

### SetEditSaveSelectionAs

**Sintassi:** obj << SetEditSaveSelectionAs( state=0|1 )

### SetEditSubmit

**Sintassi:** obj << SetEditSubmit( state=0|1 )

### SetEditSubmitDebug

**Sintassi:** obj << SetEditSubmitDebug( state=0|1 )

### SetFocus

**Sintassi:** obj << SetFocus

### SetKey

**Sintassi:** obj << SetKey( Function( {this, key}, <script> ) )

**Descrizione:** Imposta la funzione da richiamare quando si preme un tasto mentre il riquadro del mouse è attivo. La funzione dovrebbe restituire 1 se il tasto è stato gestito o 0 in caso contrario.

```jsl

Names Default To Here( 1 );
New Window( "SetKey Example", mb = MouseBox( tb = Text Box( "Press a key." ) ) );
mb << setkey(
	Function( {this, key},
		tb << settext( key );
		1;
	)
);
mb << setkeyenable( 1 );
mb << setfocus;

```

### SetKeyEnable

**Sintassi:** obj << SetKeyEnable

### SetMark

**Sintassi:** obj << SetMark( Function( {this}, <script> ) )

**Descrizione:** SetMark specifica una funzione che sarà chiamata facendo clic con il mouse o premendo il tasto Invio quando il riquadro è attivo. Si può utilizzare un contrassegno per implementare uno stato di selezione associato a una Mouse Box. Per implementare le azioni di clic, usare <<SetClick.

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << getMarkEnable();
mb << setMark( Function( {this}, this << Set Marked( !(this << Get Marked) ) ) );

```

### SetMarkEnable

**Sintassi:** obj << SetMarkEnable( state=0|1 )

**Descrizione:** attiva MouseBox per chiamare la funzione <<SetMark facendo clic sul mouse o premendo il tasto Invio quando il riquadro è attivo.

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );

```

### SetMarked

**Sintassi:** obj << SetMarked( state=0|1 )

**Descrizione:** Imposta il flag contrassegnato per la Mouse Box. Verrà visualizzata una casella contrassegnata con lo sfondo evidenziato.

```jsl

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMarked();

```

### SetToolTip

**Sintassi:** obj << SetToolTip

**Descrizione:** Specifica il testo che la casella del mouse utilizzerà come descrizione comando.

```jsl

Names Default To Here( 1 );
mb = MouseBox();
mb << setTooltip( "this is your best choice" );

```

### SetTrack

**Sintassi:** obj << SetTrack( Function( {this, clickpt}, <script> ) )

**Descrizione:** Specifica una funzione che viene chiamata quando il mouse passa sopra la casella del mouse a pulsante alzato. Per i movimenti con pulsante premuto, vedere <<SetClick. clickpt è una posizione {x,y} all&apos;interno di questa casella del mouse che rappresenta la posizione corrente del cursore.

```jsl

Names Default To Here( 1 );
/* See full example for <<SetClick() */
mb = MouseBox();
mb << setTrack(
	Function( {this, clickpt},
		this << setCursor( "Hand" ) /* button-up tracking - use the hand */
	)
);

```

### SetTrackEnable

**Sintassi:** obj << SetTrackEnable( state=0|1 )

**Descrizione:** Attiva la casella del mouse perché richiami la funzione <<SetTrack quando il mouse viene mosso a pulsante alzato.

### SetUserData

**Sintassi:** obj << SetUserData

**Descrizione:** Memorizza un valore JSL nella casella del mouse; il valore può essere un numero, una stringa, un elenco, un array associativo o un altro tipo JSL.

### Show Properties

**Sintassi:** obj << Show Properties

**Descrizione:** Visualizza un editor delle proprietà per i riquadri di visualizzazione

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**Sintassi:** obj << Text Color( color );

color = obj << Get Text Color

**Descrizione:** Il testo sarà visualizzato nel colore del testo, se impostato. Se questa proprietà non è stata impostata, il riquadro assumerà il colore del testo del riquadro che lo contiene.

**JMP Versione aggiunta:** 15

```jsl

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

### Top Parent

**Sintassi:** obj << Top Parent

**Descrizione:** Restituisce il riquadro di visualizzazione principale di livello superiore a questo.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**Sintassi:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Update Window

**Sintassi:** obj << Update Window

**Descrizione:** Aggiorna la finestra mantenendo il riquadro di visualizzazione se sono presenti regioni invalidate.  Il messaggio <<Inval crea regioni invalidate.

```jsl

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

### Vertical Alignment

**Sintassi:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Descrizione:** L&apos;allineamento verticale controlla il posizionamento del riquadro all&apos;interno di un contenitore se il riquadro non riempie l&apos;intero spazio.

```jsl

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

```jsl

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

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**Sintassi:** obj << XPath( XPath expression, <English(0|1)>, <NoData(0|1)> )

**Descrizione:** Applica un&apos;espressione XPath alla rappresentazione XML della struttura di visualizzazione e restituisce i risultati. Di default, le stringhe vengono restituite nella lingua locale e l&apos;XML include i valori dei dati all&apos;interno di alcuni riquadri. Usare l&apos;opzione English per restituire le stringhe in inglese, se disponibili. Usare l&apos;opzione NoData per omettere i valori dei dati all&apos;interno dei riquadri, utile per le prestazioni quando la query si basa solo sugli attributi dei riquadri.

**Attributes**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

**Data**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

**Display Seg**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Sintassi:** obj << Zoom Window

**Descrizione:** Ridimensiona la finestra in modo che sia sufficientemente grande da mostrarne tutto il contenuto.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

