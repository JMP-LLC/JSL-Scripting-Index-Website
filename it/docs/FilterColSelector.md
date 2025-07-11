# FilterColSelector



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

### Character

**Sintassi:** obj << Character( (0 | 1) )

**Descrizione:** Include o esclude dall&apos;elenco le colonne alfanumeriche.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << character( 0 );

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

### Clear selection

**Sintassi:** obj << Clear selection

**Descrizione:** Cancella la selezione corrente; gli elementi sono ancora presenti ma non sono più selezionati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Set Selected( 2 );
lb << Clear selection;

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

### Continuous

**Sintassi:** obj << Continuous( (0 | 1) )

**Descrizione:** Include o esclude dall&apos;elenco le colonne continue.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << continuous( 0 );
Wait( 1 );
lb << continuous( 1 );

```

### Copy Data

**Sintassi:** obj << Copy Data

**Descrizione:** copia i dati delimitati da tabulazioni da una matrice o tabella negli Appunti.

```js

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

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

### Enable

**Sintassi:** obj << Enable( 0|1 )

**Descrizione:** Imposta questo comando per essere attivato (1) o disattivato (0).

```js

Names Default To Here( 1 );
//This message applies to many display box objects
New Window( "Example",
	cb1 = Check Box( "Mother", cb2 << Enable( cb1 << Get() ) ),
	cb2 = Check Box( "Grandmother", <<Enable( 0 ) )
);

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

### Expression

**Sintassi:** obj << Expression( (0 | 1) )

**Descrizione:** Include o esclude dall&apos;elenco le colonne espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << expression( 0 );

```

### Filter Col Selector

**Sintassi:** y = Filter Col Selector(<Data Table(name)>, <width(pixels)>, <nlines(n)>, <script>, <onchange(expr)>)

**Descrizione:** Restituisce un riquadro di visualizzazione che contiene un elenco di elementi. Il controllo consente il filtro sulle colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);

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

### Get Base Font

**Sintassi:** font = obj << Get Base Font

**Descrizione:** Restituisce il carattere di base usato per il testo tracciato dal riquadro. I caratteri di base sono nomi già definiti come Title, Text, Annotation e altri, che sono specificati nelle Preferenze dei caratteri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Get Base Font;

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

### Get Font

**Sintassi:** obj << Get Font

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Get Font;

```

### Get Font Name

**Sintassi:** obj << Get Font Name

**Descrizione:** Restituisce il nome del carattere.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**Sintassi:** obj << Get Font Scale

**Descrizione:** Restituisce il fattore di scala corrente per il carattere.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Get Font Scale;

```

### Get Font Size

**Sintassi:** obj << Get Font Size

**Descrizione:** Restituisce la dimensione del carattere.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Get Font Size;

```

### Get Font Style

**Sintassi:** obj << Get Font Style

**Descrizione:** Restituisce il nome dello stile carattere.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Function

**Sintassi:** obj << Get Function

**Descrizione:** Restituisce la funzione o lo script specificati per il controllo, se presenti.

```js

Names Default To Here( 1 );
//This message applies to many display box objects
New Window( "Example",
	bb = Button Box( "press me",
		<<setFunction(
			Function( {this/* functions specified with SetFunction get 'this' display box */},
				this << setButtonName( "thanks" )
			)
		)
	)
);
bb << Get Function;

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

### Get Items

**Sintassi:** list = obj << Get Items

**Descrizione:** Restituisce un elenco di tutti gli elementi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
Print( lb << Get Items );

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

### Get Max Selected

**Sintassi:** max = obj << Get Max Selected

**Descrizione:** Restituisce il numero massimo di elementi selezionabili nell&apos;elenco.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Get Max Selected();

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

### Get N Lines

**Sintassi:** nlines = obj << Get N Lines

**Descrizione:** Restituisce il numero di linee visibili nell&apos;elenco.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Get N Lines();

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

### Get Selected

**Sintassi:** list = obj << Get Selected

**Descrizione:** Restituisce un elenco degli elementi selezionati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Set Selected( 2 );
Print( lb << Get Selected );

```

### Get Selected Indices

**Sintassi:** indices = obj << Get Selected Indices

**Descrizione:** Restituisce un elenco di tutti gli indici selezionati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Set Selected( 2 );
Print( lb << Get Selected Indices );

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

### Is Enabled

**Sintassi:** 0|1 = obj << Is Enabled

**Descrizione:** Restituisce lo stato abilitato del controllo

```js

Names Default To Here( 1 );
//This message applies to many display box objects
New Window( "Example",
	cb1 = Check Box( "Mother", cb2 << Enable( cb1 << Get() ) ),
	cb2 = Check Box( "Grandmother", <<Enable( 0 ) )
);
cb2 << Is Enabled();

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

### Locate Item

**Sintassi:** obj << Locate Item

**JMP Versione aggiunta:** 14

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

### Match case

**Sintassi:** obj << Match case( (0 | 1) )

**Descrizione:** Determina se la ricerca nelle colonne fa distinzione tra maiuscole e minuscole o no.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Match case( 0 );

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

### Multiple Response

**Sintassi:** obj << Multiple Response( (0 | 1) )

**Descrizione:** Include o esclude dall&apos;elenco le colonne a risposta multipla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << multiple response( 0 );
Wait( 1 );
lb << multiple response( 1 );

```

### Name contains

**Sintassi:** obj << Name contains( Name contains( s ) )

**Descrizione:** Elenca solo le colonne i cui nomi contengono il testo specificato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Name contains( "a" );

```

### Name ends with

**Sintassi:** obj << Name ends with( Name ends with ( text ) )

**Descrizione:** Elenca solo le colonne i cui nomi finiscono con il testo specificato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Name ends with( "ht" );

```

### Name starts with

**Sintassi:** obj << Name starts with( Name starts with ( text ) )

**Descrizione:** Elenca solo le colonne i cui nomi iniziano con il testo specificato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Name starts with( "s" );

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

### Nominal

**Sintassi:** obj << Nominal( (0 | 1) )

**Descrizione:** Include o esclude dall&apos;elenco le colonne nominali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << nominal( 0 );

```

### Numeric

**Sintassi:** obj << Numeric( (0 | 1) )

**Descrizione:** Include o esclude dall&apos;elenco le colonne numeriche.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << numeric( 0 );

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

### Ordinal

**Sintassi:** obj << Ordinal( (0 | 1) )

**Descrizione:** Include o esclude dall&apos;elenco le colonne ordinali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << ordinal( 0 );

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

### Reset

**Sintassi:** obj << Reset

**Descrizione:** Reimposta l&apos;elenco delle colonne come elenco completo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << continuous( 0 );
Wait( 1 );
lb << reset;

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

### Select

**Sintassi:** obj << Select

**Descrizione:** Seleziona questo oggetto per essere utilizzato dai comandi del menu Modifica.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Base Font

**Sintassi:** obj << Set Base Font( "Testo"|"Intestazione"|"Titolo"|"Piccolo"|"Mono"|"Editor delle formule"|"Annotazione"|"Asse"|"Indicatore"|"Titolo dell&apos;asse"|"Etichetta del grafico"|"Legenda"|"Titolo del grafico"|"Didascalia"|"Tabella di dati"|"Etichetta al passaggio del mouse" )

**Descrizione:** Imposta il carattere di base del testo tracciato dal riquadro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
Wait( 2 );
fontobj << Set Base Font( "Title" );

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

### Set Font

**Sintassi:** obj << Set Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Set Font( "Arial Black" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Sintassi:** obj << Set Font Name( fontname )

**Descrizione:** Imposta il carattere per le stringhe di testo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Sintassi:** obj << Set Font Scale( f )

**Descrizione:** Imposta un fattore di scala per il carattere corrente. Il fattore di scala verrà applicato alla dimensione determinata dal carattere di base e alla dimensione in punti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Sintassi:** obj << Set Font Size( n )

**Descrizione:** Imposta la dimensione del carattere (in punti) per le stringhe di testo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Set Font Size( 14 );

```

### Set Font Style

**Sintassi:** obj << Set Font Style( style )

**Descrizione:** Imposta lo stile carattere per le stringhe di testo. Per impostare più di uno stile contemporaneamente, posizionare le stringhe nella stessa stringa, separate da spazi (Vedere Esempio 2 di seguito).

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Set Font Style( "Italic" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Function

**Sintassi:** obj << Set Function( Function( {thisBox}, <script> ) )

**Descrizione:** Imposta la funzione specificata per il controllo. Lo script della funzione viene eseguito quando vengono selezionati uno o più elementi.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) ),
	Text Box( "" )
);
lb << Set Function(
	Function( {thisBox},
		(thisBox << topparent)[Text Box( 2 )] << Set Text( Char( thisBox << Get Selected ) )
	)
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

### Set Max Selected

**Sintassi:** obj << Set Max Selected( max )

**Descrizione:** Imposta il numero massimo di elementi selezionabili nell&apos;elenco.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Set Max Selected( 1 );

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

### Set N Lines

**Sintassi:** obj << Set N Lines( nlines )

**Descrizione:** Imposta il numero di linee visibili nell&apos;elenco.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Set N Lines( 4 );

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

### Set Script

**Sintassi:** obj << Set Script( script )

**Descrizione:** Imposta l&apos;esecuzione dello script specificato quando si fa clic sul comando.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
//This message applies to many display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Set Script( Print( "Pressed." ) );

```

### Set Selected

**Sintassi:** obj << Set Selected( index,<selected> )

**Descrizione:** Imposta l&apos;elemento che si trova in index per essere selezionato (1) o deselezionato (0).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Set Selected( 2 );
Print( lb << Get Selected );

```

### Set Size

**Sintassi:** obj << Set Size( width,height )

**Descrizione:** Imposta la larghezza e l&apos;altezza della casella di riepilogo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Set Size( 150, 400 );

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

### Set Tip

**Sintassi:** obj << Set Tip( tip )

**Descrizione:** Imposta la visualizzazione del testo come descrizione quando si passa il mouse sul comando.

```js

Names Default To Here( 1 );
//This message applies to many display box objects
New Window( "Example", ex = Button Box( "Hover Me", Print( "Pressed." ) ) );
ex << Set Tip( "Print message to log" );

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

### Sort by name

**Sintassi:** obj << Sort by name

**Descrizione:** Ordina l&apos;elenco delle colonne per nome.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << Sort by name;

```

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

### UI Only

**Sintassi:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Unstructured Text

**Sintassi:** obj << Unstructured Text( (0 | 1) )

**Descrizione:** Include o esclude dall&apos;elenco le colonne con testo non strutturato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << unstructured text( 0 );

```

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

### Vector

**Sintassi:** obj << Vector( (0 | 1) )

**Descrizione:** Include o esclude dall&apos;elenco le colonne vettore.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Filter Col Selector Example",
	fontobj = lb = Filter Col Selector( width( 250 ) )
);
lb << vector( 0 );

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

