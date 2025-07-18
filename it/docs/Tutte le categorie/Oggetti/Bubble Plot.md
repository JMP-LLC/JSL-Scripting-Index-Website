# Bubble Plot



## Colonne

### By

**Sintassi:** obj = Bubble Plot(...&lt;By( column(s) )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Produce report multipli, uno per ogni livello delle variabili.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);

```

### Coloring

**Sintassi:** obj = Bubble Plot(...&lt;Coloring( column )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Colora le bolle in base alla variabile selezionata.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Coloring( :Pop )
);

```

### Freq

**Sintassi:** obj = Bubble Plot(...&lt;Freq( column )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Pesa i calcoli quando calcola la posizione, la dimensione e i colori delle bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
dtSummary = dt << Summary(
	Group( :Country ),
	Mean( :"Portion 0-19"n ),
	Mean( :"Portion60+"n ),
	Sum( :Pop ),
	Freq( "None" ),
	Weight( "None" )
);
dtSummary << Bubble Plot(
	X( :"Mean(Portion 0-19)"n ),
	Y( :"Mean(Portion60+)"n ),
	Sizes( :"Sum(Pop)"n ),
	Freq( :N Rows )
);

```

### ID

**Sintassi:** obj = Bubble Plot(...&lt;ID( column(s) )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Identifica le righe che dovrebbero essere aggregate e visualizzate come una singola bolla.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

### Sizes

**Sintassi:** obj = Bubble Plot(...&lt;Sizes( column )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Colonna da usare come dimensione delle bolle. Se non specificata, la dimensione delle bolle è proporzionale al numero di osservazioni.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

### Time

**Sintassi:** obj = Bubble Plot(...&lt;Time( column )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Mantiene coordinate, dimensioni e colori separati per ogni periodo temporale unico.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);

```

### X

**Sintassi:** obj = Bubble Plot(...X( column )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Colonna da usare come coordinata x delle bolle nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

### Y

**Sintassi:** obj = Bubble Plot(...Y( column )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Colonna da usare come coordinata y delle bolle nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

## Costruttori associati

### Bubble Plot

**Sintassi:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**Descrizione:** Produce un grafico a dispersione a bolle bidimensionale che può essere animato attraverso una variabile temporale. Ulteriori variabili possono essere utilizzate per dimensionare e colorare le bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

#### Cerca per nome

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preimpostazione anonima

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Ricerca all'interno delle cartelle

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Auto Stretching

**Sintassi:** obj &lt;&lt; Auto Stretching( "Automatica"|"Attivato"|"Disattivato" )

**Descrizione:** Imposta il comportamento di espansione automatica del report.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Auto Stretching( "Off" );

```

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Bubble Size

**Sintassi:** obj &lt;&lt; Bubble Size( number )

**Descrizione:** Cambia le dimensioni delle bolle sul grafico a dispersione.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Bubble Size( 50 );

```

### Color Levels

**Sintassi:** obj &lt;&lt; Color Levels

**Descrizione:** Imposta i livelli della legenda continua.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Coloring( :Pop )
);
obj << Color Levels( [100000 1000000 10000000] );

```

### Color Theme

**Sintassi:** obj &lt;&lt; Color Theme

**Descrizione:** Imposta il tema colori delle bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
obj << Color Theme( "White to Red" );

```

### Color as Sum

**Sintassi:** obj &lt;&lt; Color as Sum( state=0|1 )

**Descrizione:** Utilizza la somma della variabile Colore anziché la media della variabile Colore come ruolo Colore.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Time( :Year ),
	Coloring( :Pop ),
	ID( :Region )
);
obj << Color as Sum( 1 );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Combine

**Sintassi:** obj &lt;&lt; Combine( &lt;id&gt; )

**Descrizione:** Combina le bolle selezionate (o l&apos;ID specificato) in un gruppo nella bolla più grande. Questa opzione è disponibile solo quando si utilizzano due variabili ID.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
dt << Select Where( :Region == "Europe" );
obj << Split;
Wait( 2 );
obj << Combine( "Europe" );

```

### Combine All

**Sintassi:** obj &lt;&lt; Combine All

**Descrizione:** Combina tutte le bolle in un gruppo nella bolla più grande. Questa opzione è disponibile solo quando si utilizzano due variabili ID.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
obj << Split All;
Wait( 2 );
obj << Combine All;

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Data Table Window;

```

### Draw

**Sintassi:** obj &lt;&lt; Draw( "Riempito"|"Riquadrato"|"Riempito e contornato" )

**Descrizione:** Imposta la modalità di visualizzazione delle bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Draw( "Outlined" );

```

### Fit to Window

**Sintassi:** obj &lt;&lt; Fit to Window( "Automatica"|"Attivato"|"Disattivato" )

**Descrizione:** Imposta il comportamento di espansione automatica del report.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Fit to Window( "Off" );

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj &lt;&lt; Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Custom Path

**Sintassi:** obj &lt;&lt; Get Custom Path

**Descrizione:** Restituisce il percorso personalizzato per le bolle come una matrice. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude anche il percorso.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Set Custom Path( "M-1,-1 L-1,1 L0,0.5 L1,1 L1,-1 L0,-0.5 L-1,-1 Z" );
obj << Set Shape( "Custom" );
obj << Get Custom Path();

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Draw

**Sintassi:** obj &lt;&lt; Get Draw

**Descrizione:** Restituisce la modalità di visualizzazione delle bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Get Draw();

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Label

**Sintassi:** obj &lt;&lt; Get Label

**Descrizione:** Restituisce la modalità di disegno delle etichette delle bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Get Label();

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Shape

**Sintassi:** obj &lt;&lt; Get Shape

**Descrizione:** Restituisce la forma delle bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Set Shape( "Triangle" );
obj << Get Shape();

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintassi:** obj &lt;&lt; Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Go

**Sintassi:** obj &lt;&lt; Go

**Descrizione:** Avvia l&apos;animazione quando si utilizza una variabile di tempo.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Go;

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Label

**Sintassi:** obj &lt;&lt; Label( "Nessuna"|"Selezionate"|"Tutte" )

**Descrizione:** Imposta la modalità di disegno delle etichette delle bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Label( "All" );

```

### Label Offset

**Sintassi:** obj &lt;&lt; Label Offset( {pt, x offset, y offset}, ... )

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
dt << Select Where( :Region == "Europe" | :Region == "North America" );
obj << Label Offset( {4, -75, -43}, {7, 80, -34} );

```

### Legend

**Sintassi:** obj &lt;&lt; Legend( state=0|1 )

**Descrizione:** Visualizza la legenda dei colori quando si utilizza una colonna per la colorazione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
obj << Legend( 1 );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Lock Scales

**Sintassi:** obj &lt;&lt; Lock Scales( state=0|1 )

**Descrizione:** Blocca i range dell&apos;asse, del gradiente e della dimensione in modo che non possano variare in risposta a modifiche dei dati o dei filtri. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Lock Scales( 0 );
dt << Data Filter(
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) ),
	Add Filter( Columns( :Region ) )
);

```

### Messaggi degli elementi condivisi

### New JSL Preset

**Sintassi:** New JSL Preset( preset )

**Descrizione:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Orient Shapes

**Sintassi:** obj &lt;&lt; Orient Shapes( state=0|1 )

**Descrizione:** Orienta la forma in modo che la parte alta punti nella direzione del movimento.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
obj << Set Shape( "Triangle" );
obj << Orient Shapes( 1 );

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Prev

**Sintassi:** obj &lt;&lt; Prev

**Descrizione:** Sposta un passo indietro la variabile di tempo nell&apos;animazione.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Time Index( 19 );
obj << Prev;

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj &lt;&lt; Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj &lt;&lt; Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Sintassi:** Render Preset( preset )

**Descrizione:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintassi:** obj &lt;&lt; Report;Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Report View( "Summary" );

```

### Revert Color Theme

**Sintassi:** obj &lt;&lt; Revert Color Theme

**Descrizione:** Ripristina il tema colori predefinito al posto del tema personalizzato in base alle proprietà delle colonne o alle preferenze.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
obj << Color Theme( "White to Red" );
Wait( 2 );
obj << Revert Color Theme();

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Save Script to Script Window;

```

### Selectable Across Gaps

**Sintassi:** obj &lt;&lt; Selectable Across Gaps( state=0|1 )

**Descrizione:** Consente di selezionare le bolle e le mantiene selezionate durante i periodi di tempo in cui i dati sono mancanti. Se l&apos;opzione è disattivata, le bolle non sono selezionabili durante i periodi di tempo in cui i dati sono mancanti.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( :Country == 3300 );
obj << Selectable Across Gaps( 1 );
obj << Trail Bubbles( 1 );
obj << Go;

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Sintassi:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descrizione:** Invia a oggetto che supporta script incorporato ripristina le impostazioni degli oggetti incorporati che supportano script.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintassi:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descrizione:** La funzione Invia al report è utilizzata in combinazione con il comando Invia per personalizzare l&apos;aspetto di un report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Set Custom Path

**Sintassi:** obj &lt;&lt; Set Custom Path

**Descrizione:** 3 Imposta il percorso personalizzato per le bolle. Il percorso può essere specificato con una matrice N x 3 o con una rappresentazione testuale. Una matrice del percorso ha tre colonne per x, y e flag per ciascun punto del percorso. I valori dei flag sono 0 per controllo, 1 per spostamento, 2 per segmento di linea, 3 per segmento cubico di Bézier e sono negativi se il punto chiude anche il percorso. Il testo del percorso supporta la sintassi SVG.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Set Custom Path( "M-1,-1 L-1,1 L0,0.5 L1,1 L1,-1 L0,-0.5 L-1,-1 Z" );
obj << Set Shape( "Custom" );

```

### Set Shape

**Sintassi:** obj &lt;&lt; Set Shape( "Circonferenza"|"Triangolo"|"Quadrato"|"Rombo"|"Freccia"|"Personalizzata" )

**Descrizione:** Imposta la forma delle bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Set Shape( "Triangle" );

```

### Show Roles

**Sintassi:** obj &lt;&lt; Show Roles( state=0|1 )

**Descrizione:** Visualizza in una legenda in alto nel report le variabili utilizzate per ciascun ruolo.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
obj << Show Roles( 1 );

```

### Show Time Annotation

**Sintassi:** obj &lt;&lt; Show Time Annotation( state=0|1 )

**Descrizione:** Mostra il tempo corrente come animazione in un grafico a bolle animato. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
Wait( 1 );
obj << Show Time Annotation( 0 );

```

### Size as Sum

**Sintassi:** obj &lt;&lt; Size as Sum( state=0|1 )

**Descrizione:** Utilizza la somma della variabile Dimensione anziché la media della variabile Dimensione come ruolo Dimensione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Size as Sum( 1 );

```

### Speed

**Sintassi:** obj &lt;&lt; Speed( number )

**Descrizione:** Cambia la velocità di spostamento delle bolle nel tempo.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Speed( 100 );
obj << Go;

```

### Split

**Sintassi:** obj &lt;&lt; Split( &lt;id&gt; )

**Descrizione:** Divide la bolla selezionata (o l&apos;ID specificato) nelle sue parti costituenti. Questa opzione è disponibile solo quando si utilizzano due variabili ID.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
dt << Select Where( :Region == "Europe" );
Wait( 2 );
obj << Split;
Wait( 2 );
obj << Split( "Asia" );

```

### Split All

**Sintassi:** obj &lt;&lt; Split All

**Descrizione:** Divide tutte le bolle nelle loro parti costituenti. Questa opzione è disponibile solo quando si utilizzano due variabili ID.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
Wait( 2 );
obj << Split All;

```

### Step

**Sintassi:** obj &lt;&lt; Step

**Descrizione:** Sposta avanti di un passo la variabile di tempo nell&apos;animazione.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Step;

```

### Stop

**Sintassi:** obj &lt;&lt; Stop

**Descrizione:** Arresta l&apos;animazione quando si utilizza una variabile di tempo.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( :Country == 4120 );
obj << Go;
Wait( 2 );
obj << Stop;

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Time Index

**Sintassi:** obj &lt;&lt; Time Index( number )

**Descrizione:** Imposta il valore della variabile di tempo sul grafico a dispersione.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
obj << Time Index( 19 );

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Title( "My Platform" );

```

### Title Position

**Sintassi:** obj &lt;&lt; Title Position( X,Y )

**Descrizione:** Imposta la posizione del titolo. Per visualizzare questa opzione deve essere specificata una variabile di tempo.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
obj << Title Position( 0.8, 0.06 );

```

### Toggle Animation

**Sintassi:** obj &lt;&lt; Toggle Animation

**Descrizione:** Attiva o disattiva lo stato corrente dell&apos;animazione.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( :Country == 4120 );
obj << Go;
Wait( 2 );
obj << Toggle Animation;

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Trail Bubbles

**Sintassi:** obj &lt;&lt; Trail Bubbles( "Nessuna"|"Selezionate"|"Tutte" )

**Descrizione:** Mostra la cronologia pregressa delle bolle come traccia animata semitrasparente. Per visualizzare una rappresentazione animata, specificare una colonna con valori temporali e selezionare una bolla.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Trail Bubbles( 1 );
obj << Go;

```

### Trail Lines

**Sintassi:** obj &lt;&lt; Trail Lines( "Nessuna"|"Selezionate"|"Tutte" )

**Descrizione:** Mostra la cronologia pregressa delle bolle come segmenti di linea connessi. Per visualizzare una rappresentazione animata, specificare una colonna con valori temporali e selezionare una bolla.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Trail Lines( 1 );
obj << Go;

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Bubble Plot(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X as Sum

**Sintassi:** obj &lt;&lt; X as Sum( state=0|1 )

**Descrizione:** Utilizza la somma della variabile X anziché la media della variabile X come ruolo X.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << X as Sum( 1 );

```

### Y as Sum

**Sintassi:** obj &lt;&lt; Y as Sum( state=0|1 )

**Descrizione:** Utilizza la somma della variabile Y anziché la media della variabile Y come ruolo Y.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);
obj << Y as Sum( 1 );

```

