# Display



## Funzioni

### Alignment Cell Box

**Sintassi:** y = Alignment Cell Box( row, col, nRow, nCol, <Sides(left+2*top+4*right+8*bottom=15)> <RowSpan(nRow matrix)> <ColSpan(nCol matrix)>, matrix or list of strings )

**Descrizione:** Restituisce un riferimento in un riquadro di visualizzazione che contiene il contenuto della riga (o della colonna) contenuto all&apos;interno di un riquadro della griglia di allineamento.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Grid Box

**Sintassi:** y = Alignment Grid Box( alignment cell boxes )

**Descrizione:** Restituisce un riferimento in un riquadro di visualizzazione che può contenere riquadri di allineamento.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Multi Box

**Sintassi:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Descrizione:** Restituisce un riferimento in un riquadro di visualizzazione che contiene più elementi all&apos;interno di ogni cella contenuta in un riquadro della griglia di allineamento.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );

New Window( "Alignment MultiBox",
	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),
		Alignment Grid Box(
			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),
			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),
			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),
			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),
			Alignment Cell Box(
				2,
				1,
				7,
				1,
				{"12", "13", "14", "15", "16", "17", "Total Responses"}
			),
			Alignment Multi Box(
				2,
				2,
				6,
				2,
				2,
				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111 0.055,
				0.136 0.181, 0.318 0.227, 0.045 0.090]},
				{Empty(), Empty()}
			),
			Alignment Cell Box( 8, 2, 1, 2, [18 22] )
		)
	)
);

```

### Alpha Shape

**Sintassi:** ashape = Alpha Shape(Triangulation)

**Descrizione:** Restituisce la forma alfa per la triangolazione specificata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

### Border Box

**Sintassi:** y = Border Box( <Left( pix )>, <Right( pix )>, <Top( pix )>, <Bottom( pix )>, <Sides( 0 )>, displayBoxArg )

**Descrizione:** Restituisce un riquadro di visualizzazione per aggiungere spazio intorno al riquadro di visualizzazione dell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Box Plot Seg

**Sintassi:** b = Box Plot Seg(<data>, <frequency>, <weight>, <vertical=0|1>)

**Descrizione:** Restituisce un segmento di visualizzazione che rappresenta un box plot basato sui valori x e y passati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Busy Light

**Sintassi:** y = Busy Light( < <<Automatic(0|1)>, <Size(x, y)>, < <<Disable> )

**Descrizione:** Crea un&apos;immagine in rotazione per indicare un processo in corso.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**Sintassi:** y = Button Box( title, script )

**Descrizione:** Restituisce una finestra di visualizzazione per mostrare un pulsante con titolo. L&apos;argomento script viene eseguito quando si fa clic sul pulsante.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**Sintassi:** y = Calendar Box()

**Descrizione:** Restituisce un riquadro di visualizzazione contenente un controllo di tipo calendario. Il calendario supporta la singola selezione di una data con ora facoltativa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Calendar Box Example", Calendar Box() );

```

### Check Box

**Sintassi:** y = Check Box( {item, ...}, <script> )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una o più caselle di controllo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### Clear Global Window Handler

**Sintassi:** Clear Global Window Handler()

**Descrizione:** Cancella un gestore di finestre precedentemente impostato da Imposta gestore finestre globali.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Col Box

**Sintassi:** y = Col Box( title, boxes )

**Descrizione:** Restituisce una casella di colonna costituita dai riquadri di visualizzazione indicati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = New Window( "Example",
	exx = 1;
	exy = 4;
	exz = 8;
	Table Box(
		String Col Box( "strings", {"x", "y", "z"} ),
		Col Box(
			"boxes",
			Slider Box( 0, 10, exx, Show( exx ) ),
			Slider Box( 0, 10, exy, Show( exy ) ),
			Slider Box( 0, 10, exz, Show( exz ) )
		)
	);
);

```

### Col List Box

**Sintassi:** y = Col List Box( <Data Table( name )>, <all>|<character|numeric>, <width( pix )>, <grouped>, <maxSelected( n )>, <nlines( n )>, <MaxItems( n )>, <MinItems( n )>, <onChange( expr )>, < <<Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) >, < << Set Data Type(Any|Numeric|Character)>, <script> )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una casella di riepilogo per la selezione delle colonne di una tabella di dati. Usare il messaggio <<Modeling Type per consentire tipi di modellizzazione speciali o per limitare i tipi consentiti. Il valore predefinito "Any" consentirà qualsiasi colonna con un tipo di modellizzazione classico ("Continuous", "Nominal", "Ordinal").

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1", Col List Box( all, width( 250 ), maxSelected( 1 ) ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) )
);

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 3",
	H List Box(
		ll1 = Col List Box( all ),
		Button Box( "Add", ll2 << append( ll1 << get selected ) ),
		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),
		Button Box( "Remove", ll2 << remove selected )
	)
);

```

### Col Span Box

**Sintassi:** y = Col Span Box( title, children )

**Descrizione:** Restituisce una colonna con un&apos;intestazione che si estende alle colonne secondarie

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "test",
	Table Box(
		Col Span Box(
			"Col Span",
			String Col Box( "col 1", {"A", "B", "C"} ),
			Number Col Box( "col2", {1, 2, 3} )
		)
	)
);

```

### Column Dialog

**Sintassi:** y = Column Dialog( <var = ColList("Label", <Min Col(min)>, <Max Col(max)>, <Width(w)>, <Data Type("Numeric"|"Character"|"Any")>, <Modeling Type({<"Continuous">, <"Nominal">, <"Ordinal">, <"None">, <"Multiple Response">, <"Unstructured Text">, <"Vector">})> )>, <var=EditText("string")>, <var=EditNumber(num)>, <var=Check Box( "Text", 0|1)>, <var=RadioButtons( "a", "b" )>, <var=Combo Box("choice1", ...)>, <HList(box, ...)>, <VList(box, ...)>, <LineUp(ncol, box, ...)>, <Text Box("string")>, <Window Title("title")>, <Window Icon("icon string")>, <Dialog Description("description")>, <Recall(script)>, <Help Script(script)>)

**Descrizione:** Propone all&apos;utente una finestra modale con campi per selezionare le colonne di una tabella di dati. La specifica può comprendere diversi tipi di riquadri di input oltre a riquadri contenitori per organizzare la finestra.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
Column Dialog(
	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),
	ex x = ColList( "X", Max Col( 1 ), Modeling Type( {"Continuous", "Multiple Response"} ) ),
	Line Up( 2,
		Text Box( "Alpha" ), ex = EditNumber( .05 ),
		Text Box( "Beta" ), ey = EditText( "xyz" )
	),
	HList( cb = Check Box( "check", 1 ) ),
	HList( combo = Combo Box( "option1", "option2" ) ),
	HList( rb = RadioButtons( "a", "b" ) ),
	Window Title( "Custom Launch Dialog" ),
	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.
	Dialog Description( "The dialog before a groundbreaking discovery!" ),
	Recall Script(
		Function( {dlgBox},
			dlgBox[list box box( 2 )] << remove all;
			dlgBox[list box box( 1 )] << clear selection;
			dlgBox[list box box( 1 )] << set selected( 3 );
			dlgBox[Button Box( 2 )] << click;
		)
	),
	Help Script( Web( "http://www.jmp.com/" ) )
);

```

### Combo Box

**Sintassi:** y = Combo Box( {item <( tipstr )>, ...}, <script> )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una casella combinata con un menu di scelta rapida. Ogni elemento della casella combinata può avere una descrizione comando opzionale che è specificata come stringa all&apos;interno di parentesi di seguito alla stringa di testo dell&apos;elemento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) )
);

```

### Context Box

**Sintassi:** y = Context Box( displayBox, ... )

**Descrizione:** Restituisce una finestra di visualizzazione che stabilisce un contesto di valutazione di scoping. Consente l&apos;esecuzione di diverse parti di una finestra di visualizzazione in modo indipendente l&apos;una dall&apos;altra.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Context Box(
		Outline Box( "Picker",
			V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
		)
	)
);

```

### Contour Seg

**Sintassi:** me = Contour Seg( Triangulation, [ levels ], < zColor([colors], <Cycle Colors|Interpolate Colors>) >, < Transparency([] | t) >

**Descrizione:** Restituisce un segmento di visualizzazione che rappresenta i profili isometrici di una triangolazione. É possibile specificare colori facoltativi per ciascun livello come matrice o elenco. La trasparenza può essere specificata come numero o matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg(
			tri,
			[0, 400, 1000, 2000, 9000],
			zColor( 5 + [64 32 0 16 48] ),
			Transparency( [1, 1, 1, 1, 1] )
		)
	)
);

```

### Current Report

**Sintassi:** y = Current Report( <Project(title|index|box|window)> )

**Descrizione:** Restituisce un riferimento a un riquadro di visualizzazione nel report corrente del progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Current Report();

```

### Current Window

**Sintassi:** y = Current Window( <Project(title|index|box|window)> )

**Descrizione:** Restituisce un riferimento alla finestra corrente nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Data Filter Context Box

**Sintassi:** y = Data Filter Context Box( displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che definisce l&apos;estensione dei filtri sui dati locali contenuta in una struttura di visualizzazione ad albero. I filtri sui dati e le caselle di contesto del filtro sui dati possono essere ordinati in modo gerarchico e saranno condivisi tra piattaforme o caselle contenute all&apos;interno delle caselle di contesto del filtro sui dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( Local, Add Filter( columns( :sex ), Where( :sex == "F" ) ) ),
			dt << Bubble Plot(
				X( :weight ),
				Y( :height ),
				Fit To Window( "On" ),
				Sizes( :age ),
				Title Position( 0, 0 )
			),
			dt << Graph Builder(
				Size( 525, 456 ),
				Show Control Panel( 0 ),
				Fit To Window( "On" ),
				Variables( X( :weight ), Y( :age ) ),
				Elements( Box Plot( X, Y, Legend( 4 ) ) ),

			)
		)
	)
);

```

### Data Filter Source Box

**Sintassi:** y = Data Filter Source Box( displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che definisce l&apos;origine di un filtro di selezione. Le righe selezionate nei report, contenute dal riquadro di origine del filtro sui dati, saranno incluse per l&apos;analisi in altri report contenuti in un comune riquadro di contesto del filtro sui dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Selection Filter",
	Data Filter Context Box(
		H List Box(
			Data Filter Source Box(
				Graph Builder(
					Size( 208, 207 ),
					Show Control Panel( 0 ),
					Show Legend( 0 ),
					Variables( X( :age ) ),
					Elements( Bar( X, Legend( 3 ) ) ),
					SendToReport(
						Dispatch( {}, "Graph Builder", OutlineBox, {Set Title( "Filter" )} )
					)
				)
			),
			Platform(
				Current Data Table(),
				Bubble Plot(
					X( :weight ),
					Y( :height ),
					Sizes( :age ),
					Title Position( 0, 0 )
				)
			)
		)
	)
);

```

### Data Grid Box

**Sintassi:** y = Data Grid Box(  )

**Descrizione:** Restituisce un riquadro di visualizzazione che può contenere una tabella di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table Box

**Sintassi:** y = Data Table Box( datatable )

**Descrizione:** Restituisce un riquadro della tabella rappresentante la tabella di dati specificata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Sintassi:** y = Data Table Col Box( col )

**Descrizione:** Restituisce un riquadro della colonna corrispondente alla colonna della tabella di dati specificata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) )
);

```

### Data Table Plot Col Box

**Sintassi:** y = Data Table Plot Col Box( col )

**Descrizione:** Restituisce un riquadro Col grafico corrispondente alla colonna della tabella di dati specificata e facoltativamente usa la seconda e la terza colonna della tabella di dati per creare limiti di controllo.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) )
);

```

### Dialog

**Sintassi:** y = Dialog( specification )

**Descrizione:** Mostra all&apos;utente una finestra modale. Questa funzione è obsoleta. Al suo posto usare la funzione Nuova finestra con l&apos;argomento <<Modale.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
// See Example 2 for the deprecated Dialog equivalent
If(
	ex = New Window( "Dialog() example",
		<<Modal,
		<<Return Result,
		V List Box(
			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
// Deprecated
If(
	ex = Dialog(
		Title( " Dialog() example" ),
		vlist(
			hlist( "Set this value", variable = EditNumber( 42 ) ),
			hlist( Button( "OK" ), Button( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

### Excerpt Box

**Sintassi:** y = Excerpt Box( rptnum, lstSubscripts )

**Descrizione:** Restituisce un riquadro di visualizzazione contenente la stringa designata dal report al numero rptnum e l&apos;elenco degli indici di visualizzazione lstSubscripts. Gli indici riflettono lo stato corrente del report dopo che sono state rimosse stringhe precedenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Expr As Picture

**Sintassi:** y = Expr As Picture( expr( ... ), <width in pixels>, <Max Matrix Size( dim )> )

**Descrizione:** Restituisce un&apos;immagine contenente l&apos;espressione specificata come immagine della formula. La larghezza predefinita è 600 pixel e la dimensione massima predefinita della matrice è 100.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Filter Col Selector

**Sintassi:** y = Filter Col Selector(<Data Table(name)>, <width(pixels)>, <nlines(n)>, <script>, <onchange(expr)>)

**Descrizione:** Restituisce un riquadro di visualizzazione che contiene un elenco di elementi. Il controllo consente il filtro sulle colonne.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Get Project

**Sintassi:** project = Get Project( title|index|box|window )

**Descrizione:** Restituisce un riferimento a un progetto specifico aperto per titolo, indice, o riquadro.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Sintassi:** projectList = Get Project List()

**Descrizione:** Restituisce un elenco di tutti i progetti aperti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                              
Print( Get Project List() << Get Window Title() );

```

### Get Window

**Sintassi:** window = Get Window( <Project(title|index|box|window)>, <Type(string)>, title|index|box )

**Descrizione:** Restituisce un riferimento una specifica finestra aperta per titolo, indice o riquadro.



La ricerca è limitata alle finestre nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.



Usare l&apos;argomento facoltativo Tipo() con un&apos;opzione tra "Tabelle di dati", "Journal", "Report" o "Finestre di dialogo" per limitare la ricerca a finestre di un particolare tipo.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Sintassi:** windowList = Get Window List( <Project(title|index|box|window)>, <Type(string)> )

**Descrizione:** Restituisce un elenco di tutte le finestre aperte.



L&apos;elenco è limitato alle finestre nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.



Usare l&apos;argomento facoltativo Tipo() con un&apos;opzione tra "Tabelle di dati", "Journal", "Report" o "Finestre di dialogo" per limitare l&apos;elenco a finestre di un particolare tipo.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
Print( Get Window List() << Get Window Title() );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title() );

```

### Global Box

**Sintassi:** box = Global Box( name )

**Descrizione:** Crea un riquadro di visualizzazione che mostra il valore di una variabile globale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex = .6;
New Window( "Example", Global Box( ex ) );

```

### Graph

**Sintassi:** y = Graph Box( props, script )

**Descrizione:** Restituisce una finestra di visualizzazione contenente un grafico con gli assi. Gli argomenti delle proprietà con nome possono essere title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Graph 3D Box

**Sintassi:** y = Graph 3D Box()

**Descrizione:** (Sperimentale) Restituisce un riquadro di visualizzazione con contenuto 3D che può essere utilizzato con altri riquadri di visualizzazione per creare report personalizzati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
x3d = Graph 3D Box(
	framesize( 300, 300 ),
	Xname( "X Axis" ),
	Yname( "Y Axis" ),
	Zname( "Z Axis" )
);
New Window( "Graph3DBox Example", x3d );
x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );
x3d << AddVector(
	[60 60 60]/*from*/,
	[90 60 60, 60 90 60, 60 60 90]/*to*/,
	ShaftThickness( [.1] ),
	FromThickness( [.2] ),
	ToThickness( [.3] ),
	ShaftColor( [-255] ),
	FromColor( [-16711680] ),
	ToColor( [-65280] ),
	Facets( Round ),
	FromCap( Sphere ),
	toCap( Point )
);

```

### Graph Box

**Sintassi:** y = Graph Box( props, script )

**Descrizione:** Restituisce una finestra di visualizzazione contenente un grafico con gli assi. Gli argomenti delle proprietà con nome possono essere title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### H Center Box

**Sintassi:** y = H Center Box( <childbox> )

**Descrizione:** Restituisce un riquadro di visualizzazione con l&apos;argomento del riquadro di visualizzazione childbox centrato nello spazio orizzontale definito dalle dimensioni massime dell&apos;oggetto figlio e di tutti gli altri oggetti di pari livello del riquadro centrale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### H List Box

**Sintassi:** y = H List Box( <Align( center|bottom )>, displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione forniti dagli argomenti in un layout orizzontale. Il messaggio <<Sospendi stabilisce il foglio che deve contenere i report che saranno stralciati. L&apos;argomento opzionale Align consente l&apos;allineamento bottom o center dei contenuti all&apos;interno del riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker", H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### H Scroll Box

**Sintassi:** y = H Scroll Box( <Size( x )>, displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che posiziona un riquadro figlio più grande mediante una barra di scorrimento orizzontale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		H Scroll Box(
			Size( 200 ),
			H List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### H Sheet Box

**Sintassi:** y = H Sheet Box( <<Hold( rpt ), displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione forniti dagli argomenti in un layout orizzontale. Il messaggio <<Sospendi stabilisce il foglio che deve contenere i report che saranno stralciati. L&apos;argomento opzionale Align consente l&apos;allineamento right o center dei contenuti all&apos;interno del riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### H Splitter Box

**Sintassi:** y = H Splitter Box( <Size(x,y)>, displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che può organizzare altri riquadri in direzione orizzontale o verticale con controllo interattivo delle dimensioni. Le dimensioni dell&apos;elemento figlio sono specificate come proporzione della larghezza o dell&apos;altezza del Splitter Box. L&apos;argomento facoltativo Size è utilizzato solo per il riquadro di suddivisione più in alto; i riquadri di livello inferiore sono dimensionati come qualsiasi altro riquadro figlio.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Hier Box

**Sintassi:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Descrizione:** Restituisce una finestra di visualizzazione per alberi gerarchici. L&apos;argomento text è il nome del nodo e può essere una Text Edit Box.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Hier Box(
		Text Edit Box( "Cause 1" ),
		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),
		Hier Box( Text Box( "Subcause 1.2" ) ),
		<<Change Type( Fishbone ),
		<<direction( 1 )
	)
);

```

### Hist Seg

**Sintassi:** b = Hist Seg([data], <[freq data]>,<[weight data]>, <vertical=0|1>, <Row States()>)

**Descrizione:** Restituisce un segmento cronologico

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, .2 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);

```

### Icon Box

**Sintassi:** Box = Icon Box( "Name" )

**Descrizione:** Costruisce un riquadro di visualizzazione contenente un&apos;icona, in cui l&apos;argomento name può essere il nome di un&apos;icona di JMP o il percorso di un&apos;immagine.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	ex1 = Icon Box( "Popup" ),
	ex2 = Icon Box( "Locked" ),
	ex3 = Icon Box( "Labeled" ),
	ex4 = Icon Box( "Sub" ),
	ex5 = Icon Box( "Excluded" ),
	ex6 = Icon Box( "Hidden" ),
	ex7 = Icon Box( "Continuous" ),
	ex8 = Icon Box( "Nominal" ),
	ex9 = Icon Box( "Ordinal" )
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### If Box

**Sintassi:** box = If Box( 0|1, displayBoxArgs )

**Descrizione:** Restituisce un riquadro di visualizzazione che visualizza in modo condizionale gli argomenti del riquadro di visualizzazione specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	H List Box(
		englishBox = If Box( 1, Text Box( "Good day" ) ),
		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )
	)
);
Wait( 5 );
englishBox << Set( 0 );
frenchBox << Set( 1 );

```

### If Seg

**Sintassi:** seg = If Seg(<state=0|1>)

**Descrizione:** Restituisce un segmento di visualizzazione che mostra o nasconde gli elementi figlio del segmento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);

```

### JSS Context Box

**Sintassi:** y = JSS Context Box( displayBox )

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
New Window( "JSS Context",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Type( TextBox ) << Background Color( "Red" );
				Type( ButtonBox ) << Background Color( "Green" );
				Descend( Type( PanelBox ), Type( ButtonBox ) ) << Background Color( "Blue" );
			)
		)
	)
);

```

### Journal Box

**Sintassi:** y = Journal Box( journalText )

**Descrizione:** Costruisce un riquadro di visualizzazione da istruzioni che sarebbero memorizzate in un journal.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sample = Distribution( Y( :height ) );
sampjourn = sample << Get Journal;
New Window( "Distribution of Height",
	Text Box( "Here is the result of the distribution platform for Height." ),
	Journal Box( sampjourn )
);

```

### Line Seg

**Sintassi:** ls = Line Seg(x values, y values, <Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) >, < Sizes( s ) > )>)

**Descrizione:** Restituisce un segmento di visualizzazione con linee che collegano tutti i valori x e y.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

### Lines Seg

**Sintassi:** ls = Lines Seg([x1 y1 x2 y2,...])

**Descrizione:** Restituisce un segmento di visualizzazione con una sequenza di segmenti di linee per tutti i valori x e y passati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Sintassi:** y = Lineup Box( <NCol( nc )>, <Spacing( pixels, <vspace> )>, displayBoxArgs, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare un allineamento di caselle nelle colonne nc. L&apos;argomento facoltativo Spacing specifica lo spazio orizzontale e verticale intorno ai riquadri di visualizzazione. Se si utilizza l&apos;argomento vspace, vspace è lo spazio verticale e pixels è lo spazio orizzontale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Lineup Ruler Box

**Sintassi:** y = Lineup Box( <Widths( {width1, width2, ...} )>, displayBoxArgs, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che imposta le larghezze delle colonne dei riquadri di allineamento che contiene.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

New Window( "Lineup Ruler",
	lrb = Lineup Ruler Box(
		Widths( {120, 200} ),
		Outline Box( "Customer 1",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		),
		Outline Box( "Customer 2",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		)
	)
);

```

### List Box

**Sintassi:** y = List Box( {item, ...}, <width( pixels )>, <maxSelected( 9999 )>, <nlines( 12 )>, <script> )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una casella di riepilogo con elementi da selezionare. Se item è un elenco a due elementi contenente il nome dell&apos;elemento e una stringa che specifica un tipo di modellizzazione o criterio di ordinamento, quale "Ordinal" o "Ascending", nella casella di riepilogo verrà visualizzata accanto a quell&apos;elemento l&apos;icona corrispondente.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	lb = List Box(
		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item", "nominal"}},
		width( 200 ),
		max selected( 2 ),
		nlines( 6 )
	)
);

```

### Marker Seg

**Sintassi:** me = Marker Seg( x, y, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) >, < Sizes( s ) > )

**Descrizione:** Restituisce un segmento di visualizzazione con indicatori per tutti i valori x e y.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
sz = Column( "age" ) << get values;
aa = [=> 0];
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )
	)
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )
	)
);

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )
	)
);

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} )
		)
	)
);

```

**Esempio 5**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States(
				{Color State( "Blue" ), Color State( "Orange" ), Color State( "Green" ),
				Color State( "Purple" ), Color State( "Red" )}
			)
		)
	)
);

```

### Matrix Box

**Sintassi:** y = Matrix Box( matrix, < <<Column Names( "c1", "c2", ... )>, < <<Row Names( "r1", "r2", ... )> )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una matrice di numeri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example", Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) ) );

```

### MouseBox

**Sintassi:** box = MouseBox( displayBoxArgs )

**Descrizione:** Restituisce un riquadro che può effettuare richiami JSL ad azioni del mouse

**JMP Versione aggiunta:** prima della versione 14

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

### Move to Project

**Sintassi:** Move to Project(<Source(project)>, <Destination(project)>, <Windows({list of windows to move})>)

**Descrizione:** Sposta una o più finestre in un progetto, fuori da un progetto o tra progetti. È necessario specificare solo origine o destinazione; l&apos;altra punterà per impostazione predefinita al progetto corrente. (Usare solo Origine per spostare finestre nel progetto corrente e solo Destinazione per spostare finestre al di fuori di esso.) Una finestra della tabella di dati sarà spostata con tutti i relativi report dipendenti, sebbene solo una debba essere specificata nell&apos;argomento Finestra. Se omesso, l&apos;argomento Finestra punta per impostazione predefinita a tutte le finestre aperte nel progetto di origine.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                              
project = New Project();
                              
Move to Project( destination( project ), windows( {report} ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### New Image

**Sintassi:** img = New Image()

img = New Image( width, height )

img = New Image( pathname )

img = New Image( picture )

img = New Image( matrix of JSL color pixels ) 

img = New Image( rgb|r|g|rgba, {i, i, i} )

**Descrizione:** Restituisce una nuova immagine che potrà quindi essere modificata mediante comandi JSL. Se viene specificato un percorso a un file di immagine esistente, il file deve essere in formato .JPG, .PNG, .GIF, .BMP o .TIF.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
image3 = New Image();
mat = J( 256, 256 );
For( y = 0, y < 256, y++,
	For( x = 0, x < 256, x++,
		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )
	)
);
image3 << Set Pixels( mat );
New Window( "image", image3 );

```

### New Project

**Sintassi:** project = new Project( <project messages> )

**Descrizione:** Crea una nuova finestra di progetto vuota. Per creare un progetto in un passaggio è possibile includere uno o più messaggi di progetto come argomenti.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
project = New Project();

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
project = New Project(
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
project = New Project(
	Set Bookmarks(
		{File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )}
	),
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Esempio 5**

```jsl

Names Default To Here( 1 );
project = New Project(
	Run Script( Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script ) ),
	Set Layout(
		H Splitter Box(
			<<Set Sizes( {0.15, 0.85} ),
			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),
			V Splitter Box(
				<<Set Sizes( {0.7, 0.3} ),
				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),
				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )
			)
		)
	)
);

```

### New Window

**Sintassi:** w = New Window( title, < <<Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")>, < << Return Result>, < << On Open(expr | function | method)>, < << On Close(expr | function | method)>, < <<On Validate(expr | function | method)>, < <<Show Menu(0 | 1)>, < <<Show Toolbars(0 | 1)>, < <<Suppress AutoHide(0 | 1)>, < <<Window View("Visible" | "Invisible")>, < <<Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS"  | "SQL" | "Text" | "XML")>, < <<Size(x, y)>, displayBox | script)

**Descrizione:** Crea una finestra contenente il riquadro di visualizzazione o lo script specificato. Di default, viene creata una finestra di report, a meno che non sia specificata l&apos;opzione Type. Una finestra di Type("Modal Dialog") interrompe l&apos;esecuzione fino a quando la finestra di dialogo non riceve una risposta. On Open, On Validate e Return Result sono disponibili solo per le finestre modali. On Open() valuta la propria espressione, funzione o metodo di classe quando viene creata la finestra. Se On Close() restituisce false, la finestra non si chiude. On Validate() esegue la propria espressione, funzione o metodo di classe quando si fa clic sul pulsante OK. Se l&apos;espressione restituisce true, la finestra viene chiusa. In caso contrario, la finestra rimane aperta. Return Result cambia il valore di ritorno della finestra alla chiusura, in modo che corrisponda a quello della funzione Dialog() deprecata. Per tipi di finestre che supportano le barre degli strumenti, usare Show Toolbars per specificare le modifiche rispetto al comportamento di default. Le opzioni Show Menu e Suppress AutoHide sono solo per Windows. L&apos;opzione Window View("Invisible") può essere utilizzata per qualsiasi finestra diversa da Modal Dialog. Una finestra di Type("Script") crea un documento JSL a meno che non sia specificata l&apos;opzione <<Language.

**JMP Versione aggiunta:** prima della versione 14

**[Win] Barre degli strumenti e menu**

```jsl

Names Default To Here( 1 );
// Compare settings for toolbars and menus
// Suppress AutoHide is Windows only
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "Default - menu and toolbars", g );
New Window( "Menu, no toolbars, suppress autohide",
	Suppress AutoHide( 1 ),
	Show Toolbars( 0 ),
	g
);
New Window( "Toolbars, no menu", Show Menu( 0 ), g );
New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

**Finestra di dialogo**

```jsl

Names Default To Here( 1 );

ex = New Window( "Dialog example",
	<<Type( "Dialog" ),
	V List Box(
		Panel Box( "Sample data dialog",
			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )
		),
		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )
	)
);

```

**Finestra di dialogo modale**

```jsl

Names Default To Here( 1 );

ex = New Window( "Modal Dialog example",
	<<Type( "Modal Dialog" ),
	<<Return Result,
	<<On Validate(
		num = myEditBox << Get;
		If( num >= 1 & num <= 100, // in range
			myEditBox << Background Color( "Background" ); // this field does not need attention
			1; //the number is good, validate
		, // else out of range
			myEditBox << Background Color( "Light Yellow" ); // this field needs attention
			0; // the number is bad, do not validate
		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1
		;
	),
	V List Box(
		Text Box( "Enter a value between [1,100]:" ),
		H List Box( myEditBox = Number Edit Box( 42 ) ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)
);

//  the Modal window must be closed before the following code runs

If(
	ex["button"] == 1 // not canceled
, // then show the value
	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box
, // else report no selection
	Write( "CANCEL" ); // cancel button or red X was pressed
);

```

**Invisible**

```jsl

Names Default To Here( 1 );

g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );
p = w << Get Picture();
w << Close Window;
psize = p << Size;
New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

**Report**

```jsl

Names Default To Here( 1 );
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "My Window's Title", g );

```

**Script**

```jsl

Names Default To Here( 1 );
script = JSL Quote(Names Default To Here(1);
dt=Open("$SAMPLE_DATA/Big Class.jmp");
dt << Run Script("Bivariate");
);
ex = New Window( "Script example", <<Type( "Script" ), script );

```

**Script Python**

```jsl

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

### Number Col Box

**Sintassi:** y = Number Col Box( title, numbers )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare i numeri specificati dall&apos;argomento numbers, che può essere un elenco o una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Number Col Edit Box

**Sintassi:** y = Number Col Edit Box( title, numbers )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare i numeri specificati dall&apos;argomento numbers, che può essere un elenco o una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) )
);

```

### Number Edit Box

**Sintassi:** y = Number Edit Box( initValue, <width> )

**Descrizione:** Restituisce una finestra di modifica che accetta solo input numerici. Specificare l&apos;argomento facoltativo width per impostare la larghezza della finestra in caratteri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Outline Box

**Sintassi:** y = Outline Box( title, <command script pairs list>, displayBox, ... )

**Descrizione:** Crea un riquadro nel report e restituisce il riferimento al riquadro di visualizzazione. Per comprendere un menu nel riquadro, specificare command script pairs list, un elenco che specifica i comandi di menu e gli script associati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )
	)
);

```

### Page Break Box

**Sintassi:** Page Break Box()

**Descrizione:** Crea un riquadro di visualizzazione che forza un&apos;interruzione di pagina.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	),
	Page Break Box(),
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );
		Pen Color( "Red" );
		Line( [70 30 10], [88 22 44] );
	)
);

```

### Panel Box

**Sintassi:** y = Panel Box( title, displayBoxArgs )

**Descrizione:** Restituisce un riquadro di visualizzazione per etichettare e contenere il riquadro di visualizzazione dell&apos;argomento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Picture Box

**Sintassi:** pict = Picture Box( Picture Object )

**Descrizione:** Crea un riquadro di visualizzazione contenente un oggetto di immagine grafica. Si può aprire un&apos;immagine e referenziarla, oppure utilizzare il comando Apri con il percorso dell&apos;immagine al posto dell&apos;argomento Picture Object.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) )
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie Seg

**Sintassi:** ps = Pie Seg(<{ xorigin, yorigin }>, <radius>, <style("pie", "ring", "coxcomb")>, values)

**Descrizione:** Crea un segmento della torta nella origin specificata, con il radius specificato, basato su valori specificati in formato matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );
New Window( "Pie Seg",
	Graph Box(
		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),
		Pie Seg( {75, 50}, .25, sumWt )
	)
);

```

### Platform

**Sintassi:** y = Platform( dataTable, script )

**Descrizione:** Valuta lo script dato nel contesto della tabella di dati specificata. Restituisce il riquadro di visualizzazione risultante per l&apos;inserimento in una struttura di visualizzazione ad albero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Platform example",
	H List Box(
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) )
		),
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :age ), Sizes( :height ), Title Position( 0, 0 ) )
		)
	)
);

```

### Plot Col Box

**Sintassi:** y = Plot Col Box( title, numbers )

**Descrizione:** Restituisce una finestra di visualizzazione per tracciare i numeri. L&apos;argomento numbers può essere un elenco o una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Poly Seg

**Sintassi:** ps = Poly Seg(x values, y values)

**Descrizione:** Restituisce un segmento di visualizzazione che rappresenta un poligono con i vertici basati sui valori x e y passati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Popup Box

**Sintassi:** y = Popup Box( {label1, script1, ...} )

**Descrizione:** Restituisce un riquadro di visualizzazione con un menu di scelta rapida definito da coppie etichetta/script.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Popup Box( {"x", ex = 1, "y", ex = 2} ),
		"beta",
		Panel Box( "panel", Text Box( "text" ) )
	)
);

```

### Radio Box

**Sintassi:** y = Radio Box( {item, ...}, <script> )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare una serie di pulsanti di opzione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) )
);

```

### Range Slider Box

**Sintassi:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Descrizione:** Restituisce un riquadro di visualizzazione che mostra un cursore intervallo che va da minValue a maxValue. Dal momento che le posizioni dei cursori cambiano, i loro valori sono inseriti in  lowVariable e highVariable, e viene eseguito lo script.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
sliderLowerValue = .5;
sliderUpperValue = .7;
New Window( "Example",
	Panel Box( "Range Slider",
		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),
		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),
		sb = Range Slider Box(
			0,
			1,
			sliderLowerValue,
			sliderUpperValue,
			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );
			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );
		)
	)
);

```

### Report

**Sintassi:** y = Report( platform object )

**Descrizione:** Restituisce un riferimento all&apos;albero di visualizzazione per il report da una piattaforma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Scene Box

**Sintassi:** box = Scene Box( xsize, ysize )

**Descrizione:** Restituisce un riquadro di visualizzazione per grafici 3D.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Scene = Scene Box( 600, 600 );
Scene << backgroundcolor( 0 );
Scene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", Scene );
Scene << perspective( 45, .2, 20 );
Scene << Translate( 0.0, 0.0, -4.5 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
Scene << arcball( ex, 1.5 );
Scene << update;

```

### Scene Display List

**Sintassi:** list = Scene Display List()

**Descrizione:** Restituisce un elenco di visualizzazione per grafici 3D.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
exScene = Scene Box( 600, 600 );
exScene << backgroundcolor( 0 );
exScene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", exScene );
exScene << perspective( 45, .2, 20 );
exScene << Translate( 0.0, 0.0, -4.5 );
exScene << arcball( ex, 1.5 );
exScene << update;

```

### Script Box

**Sintassi:** y = Script Box( <s>, <"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML">, <width>, <height> )

**Descrizione:** Restituisce un riquadro di visualizzazione per modificare uno script. Di default, l&apos;editor ha evidenziazione della sintassi e comportamento JSL.

**JMP Versione aggiunta:** prima della versione 14

**JSL**

```jsl

Names Default To Here( 1 );
Script = Script Box( "// This window is editable.", "JSL", 300, 100 );
New Window( "This is a script box", Script );

```

**Script Python**

```jsl

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
Script = Script Box( pyscript, "Python", 300, 100 );
New Window( "This is a python script box", Script );

```

### Scroll Box

**Sintassi:** y = Scroll Box( <Size( x, y )>, displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che posiziona un riquadro figlio più grande mediante le barre di scorrimento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		Scroll Box(
			Size( 200, 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### Set Global Window Handler

**Sintassi:** Set Global Window Handler( Handler Function )

**Descrizione:** Imposta una funzione da chiamare ogni volta che viene creata una nuova finestra.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Shape Seg

**Sintassi:** me = Shape Seg( {Path(<path>), ...}, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) > )

**Descrizione:** Restituisce un segmento di visualizzazione con una raccolta di forme. Ciascuna forma disegna un tratto lungo il percorso specificato se il riempimento è 0, oppure dipinge l&apos;interno del percorso specificato se il riempimento non è 0. Il percorso può essere specificato con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude il percorso. Il testo del percorso supporta la sintassi SVG.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);

```

### Sheet Part

**Sintassi:** y = Sheet Part( title, childbox )

**Descrizione:** Restituisce un riquadro di visualizzazione contenente l&apos;argomento del riquadro di visualizzazione childbox con il titolo specificato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Slider Box

**Sintassi:** box = Slider Box(minValue, maxValue, variable, script, <set width(n)>, <rescale slider(minValue, maxValue)>)

**Descrizione:** Restituisce un riquadro di visualizzazione che mostra un controllo a scorrimento che varia da minValue a maxValue. Dal momento che la posizione del cursore cambia, il suo valore viene inserito in variable e viene eseguito lo script.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
sliderValue = .6;
New Window( "Example",
	Panel Box( "Slider Box",
		tb = Text Box( "Value: " || Char( sliderValue ) ),
		sb = Slider Box(
			0,
			1,
			sliderValue,
			tb << Set Text( "Value: " || Char( sliderValue ) )
		)
	)
);

```

### Spacer Box

**Sintassi:** y = Spacer Box( <Size( x, y )>, <Color( c )>)

**Descrizione:** Restituisce un riquadro di visualizzazione che può essere utilizzato per mantenere lo spazio tra altri riquadri o riempire una cella in un Lineup Box. Gli argomenti Size sono specificati in pixel e l&apos;argomento Color è un qualsiasi colore JSL valido.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 3 ),
		Text Box( "a" ),
		Spacer Box(),
		Text Box( "b" ),
		Spacer Box(),
		Text Edit Box( "Under Spacer Box" )
	)
);

```

### Spin Box

**Sintassi:** y = Spin Box( <script> )

**Descrizione:** Restituisce un riquadro di visualizzazione che presenta controlli su/giù. L&apos;argomento script viene chiamato con un argomento che indica la direzione della freccia su cui si fa clic (negativo è giù, positivo è su). Una grandezza pari a 1 indica un unico clic, mentre valori più grandi possono essere utilizzati per indicare un&apos;azione ripetuta.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box(
		2,
		nb = Number Edit Box( 3 ),
		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )
	)
);
nb << Set Increment( 1 );

```

### String Col Box

**Sintassi:** y = String Col Box( title, {strings} )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare i numeri specificati dall&apos;argomento strings che è un elenco di stringhe alfanumeriche.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### String Col Edit Box

**Sintassi:** y = String Col Edit Box( title, {strings} )

**Descrizione:** Restituisce un riquadro di visualizzazione per mostrare i numeri specificati dall&apos;argomento strings che è un elenco di stringhe alfanumeriche.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) )
);

```

### Tab Box

**Sintassi:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Descrizione:** Crea un riquadro con schede in una finestra di riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Tab Page Box

**Sintassi:** y = Tab Page Box( <Title("string")>, <Tip(0|1)>,  <Closeable(0|1)>, <Icon("string")>, <Moveable(0|1)>, contents)

**Descrizione:** Restituisce un riquadro di visualizzazione che può essere usato in un Tab Box o come contenitore standalone con titolo. Le opzioni riconosciute includono Title(stringa) per specificare un titolo, Tip per specificare una descrizione comandi, Closeable(0|1) per specificare se la pagina può essere chiusa, Icon(stringa) per specificare l&apos;icona e Moveable(0|1) per specificare se la pagina può essere spostata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),
		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )
	)
);

```

### Table Box

**Sintassi:** y = Table Box( displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che compone una tabella dei riquadri di visualizzazione della colonna Riquadro col stringa, Riquadro col numeri e Riquadro col grafico forniti dagli argomenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Text Box

**Sintassi:** y = Text Box( text, <<Justify Text( strPos ), <<Set Wrap( width ) )

**Descrizione:** Crea un riquadro di visualizzazione che contiene il testo nell&apos;argomento della stringa text. Gli argomenti facoltativi sono disponibili per controllare la giustificazione del testo o per impostare la larghezza del testo con a capo automatico. L&apos;argomento di Justify Text deve essere una stringa contenente left, right o center.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Justification Example",
	Outline Box( "text",
		V List Box(
			Text Box( "Text implicitly justified over multiple lines:", <<Set Wrap( 100 ) ),
			Text Box( " " ),
			Text Box(
				"Text left justified over multiple lines:",
				<<Justify Text( "left" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text center justified over multiple lines:",
				<<Justify Text( "center" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text right justified over multiple lines:",
				<<Justify Text( "right" ),
				<<Set Wrap( 100 )
			)
		)
	)
);

```

### Text Edit Box

**Sintassi:** y = Text Edit Box( text, <<Password Style( bool ), <<Set Script( script ), <<Set Width( value ) )

**Descrizione:** Crea un campo modificabile che contiene il text della stringa tra apici e restituisce il riferimento al riquadro di visualizzazione. Gli argomenti facoltativi sono disponibili per controllare la visualizzazione del testo, per aggiungere uno script alla casella di testo e per impostare la larghezza in pixel della casella di testo. Specificando Set Width(-1) si forza un ridimensionamento rispetto al contenuto. Si noti che è possibile aggiungere uno script alla casella di testo, aggiungendolo come argomento facoltativo o inviando il messaggio Set Script.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example: Text Edit Box",
	Outline Box( "Picker Example",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	),
	Outline Box( "Text Edit Box with password style Example",
		H List Box(
			Text Box( "Enter password:    " ),
			exq = Text Edit Box( "", Password Style( 1 ), Set Script( Print( "changed!" ) ) )
		),
		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),
		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),
		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )
	)
); // "look in the log window"

```

### Text Seg

**Sintassi:** seg = Text Seg("text")

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### This Project

**Sintassi:** project = this project()

**Descrizione:** Dall&apos;interno di un progetto, restituisce l&apos;oggetto progetto corrispondente. All&apos;esterno di un progetto non restituisce nulla.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Tree Box

**Sintassi:** tree = Tree Box( <{rootnodes}>, <Size( x, y )>, <Multiselect( 0|1 )> )

**Descrizione:** Costruisce una finestra di visualizzazione per mostrare informazioni gerarchiche.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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
                                        
New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**Sintassi:** node = Tree Node( <label> )

**Descrizione:** Costruisce un nodo dell&apos;albero destinato a essere visualizzato in un riquadro dell&apos;albero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

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
                                        
New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**Sintassi:** triangulation = Triangulation( X(Column1, Column2), < Y(Column) > )

**Descrizione:** Restituisce un oggetto contenente la triangolazione di Delaunay del set di punti specificato. La Y facoltativa Y sarà mediata per i punti duplicati e tutti i punti dell&apos;output saranno univoci.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Unlineup Box

**Sintassi:** y = UnLineup Box(displayBoxArgs, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che sospende temporaneamente la disposizione delle colonne di un riquadro di allineamento. Il figlio del riquadro non allineato sarà esteso a tutte le colonne del riquadro di allineamento.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),
		Button Box( "First Section 1" ),
		Button Box( "First Section 2" ),
		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),
		Button Box( "Second Section 1" ),
		Button Box( "Second Section 2" )
	)
);

```

### V Center Box

**Sintassi:** y = V Center Box( <childbox> )

**Descrizione:** Restituisce un riquadro di visualizzazione con l&apos;argomento del riquadro di visualizzazione childbox centrato nello spazio verticale definito dalle dimensioni massime dell&apos;oggetto figlio e di tutti gli altri oggetti di pari livello del riquadro centrale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### V List Box

**Sintassi:** y = V List Box( <Align( center|right )>, displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione forniti dagli argomenti in un layout verticale. Il messaggio <<Sospendi stabilisce il foglio che deve contenere i report che saranno stralciati. L&apos;argomento opzionale Align consente l&apos;allineamento right o center dei contenuti all&apos;interno del riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker", V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### V Scroll Box

**Sintassi:** y = V Scroll Box( <Size( y )>, displayBox )

**Descrizione:** Restituisce un riquadro di visualizzazione che posiziona un riquadro figlio più grande mediante una barra di scorrimento verticale.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		V Scroll Box(
			Size( 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### V Sheet Box

**Sintassi:** y = V Sheet Box( <<Hold( rpt ), displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione forniti dagli argomenti in un layout verticale. Il messaggio <<Sospendi stabilisce il foglio che deve contenere i report che saranno stralciati. L&apos;argomento opzionale Align consente l&apos;allineamento right o center dei contenuti all&apos;interno del riquadro di visualizzazione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### V Splitter Box

**Sintassi:** y = V Splitter Box( <Size(x,y)>, displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che può organizzare altri riquadri in direzione verticale con controllo interattivo delle dimensioni. Le dimensioni dell&apos;elemento figlio sono specificate come proporzione della larghezza o dell&apos;altezza del Splitter Box. L&apos;argomento facoltativo Size è utilizzato solo per il riquadro di suddivisione più in alto; i riquadri di livello inferiore sono dimensionati come qualsiasi altro riquadro figlio.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Web Browser Box

**Sintassi:** wb = Web Browser Box( url )

**Descrizione:** Restituisce un riquadro per visualizzare una pagina Web, specificata dall&apos;argomento della stringa url.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Window

**Sintassi:** y = Window( <string|int> )

**Descrizione:** Questa funzione è obsoleta ed è conservata solo per la compatibilità all&apos;indietro con script esistenti. Per nuovi script, usare Ottieni finestra() o Ottieni elenco finestre().

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
Window( "Big Class" );

```

### With Window Handler

**Sintassi:** With Window Handler( JSL Code, Handler Function )

**Descrizione:** Esegue un blocco di codice con una funzione da chiamare ogni volta che viene creata una nuova finestra.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
With Window Handler(
	New Window( "My Window" ),
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);

```

### Wrap List Box

**Sintassi:** y = Wrap List Box( displayBox, ... )

**Descrizione:** Restituisce un riquadro di visualizzazione che dispone i riquadri di visualizzazione creati dagli argomenti in un layout orizzontale, ma l&apos;elenco verrà mandato a capo durante la stampa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
New Window( "WrapListBox",
	Wrap List Box(
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )
	)
);

```

