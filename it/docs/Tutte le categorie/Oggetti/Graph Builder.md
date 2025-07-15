# Graph Builder



## Costruttori associati

### Graph Builder

**Sintassi:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**Descrizione:** Offre un&apos;interfaccia grafica interattiva che consente di esplorare i dati. È possibile trascinare le colonne nelle zone del grafico per creare una varietà di grafici, tra cui grafici a dispersione, grafici dei profili isometrici, grafici a barre, grafici ad area, box plot, istogrammi, heatmap, grafici a torta, mappe ad albero, diagrammi a mosaico e mappe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Add Element

**Sintassi:** obj &lt;&lt; Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**Descrizione:** Aggiunge un nuovo elemento grafico alle posizioni X e Y specificate. La specifica dell&apos;elemento comprende il nome dell&apos;elemento, i ruoli di dati che utilizza e i rispettivi valori di opzione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**Sintassi:** obj &lt;&lt; Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, &lt; &lt;&lt;Method("insert"|"merge"|"replace")&gt; )

**Descrizione:** Aggiunge una nuova variabile al modello del Costruttore di grafici, con un ruolo e una posizione specificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Add Variable( {:age, Role( "Wrap" )} );

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

**Cerca per nome**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preimpostazione anonima**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Ricerca all'interno delle cartelle**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Auto Stretching

**Sintassi:** obj &lt;&lt; Auto Stretching( state=0|1 )

**Descrizione:** Attiva o disattiva l&apos;estensione automatica del grafico con la finestra che lo contiene. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Auto Stretching( 0 );

```

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Back Color

**Sintassi:** obj &lt;&lt; Back Color( color )

**Descrizione:** Imposta il colore per tutto lo sfondo intorno al grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Back Color( "Yellow" );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Categorical Color Theme

**Sintassi:** obj &lt;&lt; Categorical Color Theme

**Descrizione:** Imposta il tema colori usato per le categorie.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Categorical Color Theme( "Pastel" );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Continuous Color Theme

**Sintassi:** obj &lt;&lt; Continuous Color Theme

**Descrizione:** Imposta il tema colori usato per i gradienti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Continuous Color Theme( "White to Black" );

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Data Table Window;

```

### Done

**Sintassi:** obj &lt;&lt; Done

**Descrizione:** Nasconde il pannello di controllo e disattiva qualsiasi campionamento delle righe.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Done;

```

### Elements

**Sintassi:** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() ))&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Identifica gli elementi della visualizzazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
gb = dt << Graph Builder(
	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),
	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) )
);

```

### Error Bar Offset

**Sintassi:** obj &lt;&lt; Error Bar Offset

**Descrizione:** Apre una finestra di dialogo per impostare l&apos;offset per le barre degli errori.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 1 );
gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**Sintassi:** obj &lt;&lt; Extend Axis to Zero( multiplier=1 )

**Descrizione:** Moltiplicatore per la quantità con cui la scala di un asse è estesa per includere lo zero. "1", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Extend Axis to Zero( 10 ),
	Variables( X( :Weight ), Y( :Height ) ),
	Elements( Line( X, Y ) )
);

```

### Extend Dual Axes to Zero

**Sintassi:** obj &lt;&lt; Extend Dual Axes to Zero( multiplier=2 )

**Descrizione:** Moltiplicatore per la quantità con cui la scala di un asse è estesa per includere lo zero quando sono presenti sia l&apos;asse sinistro che quello destro. "2", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 513, 465 ),
	Extend Dual Axes to Zero( 10 ),
	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),
	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) )
);

```

### Extend Parallel Y Axes to Zero

**Sintassi:** obj &lt;&lt; Extend Parallel Y Axes to Zero( multiplier=3 )

**Descrizione:** Moltiplicatore per la quantità con cui la scala di un asse è estesa per includere lo zero quando si è in modalità Assi Y paralleli. "3", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Parallel Axes( "Y Only" ),
	Extend Parallel Y Axes to Zero( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight ) ),
	Elements( Position( 1, 1 ), Line( X, Y ) ),
	Elements( Position( 1, 2 ), Line( X, Y ) )
);

```

### Fit to Window

**Sintassi:** obj &lt;&lt; Fit to Window( "Automatica"|"Attivato"|"Disattivato"|"Mantieni proporzioni" )

**Descrizione:** Imposta il comportamento di espansione automatica del report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Fit to Window( "Off" );

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj &lt;&lt; Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Piattaforma con filtro**

```jsl

Names Default To Here( 1 );
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

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Element

**Sintassi:** obj &lt;&lt; Get Element( xposition, yposition, i )

**Descrizione:** Restituisce le specifiche di un elemento grafico per le posizioni x e y specificate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Element( 1, 1, 1 );

```

### Get Elements

**Sintassi:** obj &lt;&lt; Get Elements( xposition, yposition )

**Descrizione:** Restituisce un elenco di specifiche di un elemento per le posizioni x e y specificate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Elements( 1, 1 );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Legend Display

**Sintassi:** obj &lt;&lt; Get Legend Display

**Descrizione:** Restituisce il riquadro di visualizzazione della legenda per il grafico che può essere interrogato o modificato.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Visible( 0 );

```

### Get Legend Server

**Sintassi:** obj &lt;&lt; Get Legend Server

**Descrizione:** Restituisce un oggetto che contiene le informazioni utilizzate dalla visualizzazione della legenda e dai corrispondenti segmenti di visualizzazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Server;
items = lgnd << Get Legend Items;
Show( items );

```

### Get N Elements

**Sintassi:** obj &lt;&lt; Get N Elements( xposition, yposition )

**Descrizione:** Restituisce il numero di elementi grafici per le posizioni x e y specificate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get N Elements( 1, 1 );

```

### Get N Positions

**Sintassi:** nrole

**Descrizione:** Restituisce il numero di posizioni in uso per un dato ruolo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get N Positions( "X" );

```

### Get N Variables

**Sintassi:** n = obj &lt;&lt; Get N Variables

**Descrizione:** Restituisce il numero di variabili in uso.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get N Variables();

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Timing;
Show( t );

```

### Get Variable

**Sintassi:** obj &lt;&lt; Get Variable( index )

**Descrizione:** Restituisce una specifica di variabile.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Variable( 1 );

```

### Get Variables

**Sintassi:** list = obj &lt;&lt; Get Variables

**Descrizione:** Restituisce un elenco di specifiche di variabili per le variabili in uso.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Variables();

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Graph Spacing

**Sintassi:** obj &lt;&lt; Graph Spacing( gap=1 )

**Descrizione:** Imposta la quantità di spazio tra i riquadri del grafico. "1", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Add Variable( {:age, Role( "Wrap" )} );
gb << Graph Spacing( 3 );

```

### Grid Color

**Sintassi:** obj &lt;&lt; Grid Color( color )

**Descrizione:** Imposta il colore per le linee della griglia intorno al grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Graph Spacing( 5 ),
	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Grid Color( "Red" );

```

### Grid Transparency

**Sintassi:** obj &lt;&lt; Grid Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza delle linee della griglia.. "1", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Graph Spacing( 5 ),
	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Grid Transparency( 0.2 );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Include Missing Categories

**Sintassi:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**Descrizione:** Tratta i valori mancanti come livello separato per le variabili categoriche.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
:age[{10, 20, 30}] = .;
gb << Add Variable( {:age, Role( "Wrap" )} );
gb << Include Missing Categories( 1 );

```

### Launch Analysis

**Sintassi:** obj &lt;&lt; Launch Analysis

**Descrizione:** Avvia un&apos;analisi utilizzando le variabili correnti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Launch Analysis;

```

### Legend Floating Offset

**Sintassi:** obj &lt;&lt; Legend Floating Offset

**Descrizione:** Imposta l&apos;offset in pixel per la legenda quando la posizione della legenda è impostata su "Mobile".

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Legend Position( "Inside Floating" );

```

### Legend Position

**Sintassi:** obj &lt;&lt; Legend Position( "Destra"|"Basso"|"Interna sinistra"|"Interna destra"|"All&apos;interno in basso a sinistra"|"All&apos;interno in basso a destra"|"Mobile all&apos;interno" )

**Descrizione:** Imposta la posizione della legenda.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Legend Position( "Bottom" );

```

### Legend Settings

**Sintassi:** obj &lt;&lt; Legend Settings

**Descrizione:** Apre una finestra di dialogo per modificare le proprietà della legenda.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 1 );
gb << Legend Settings();

```

### Level Fill Color

**Sintassi:** obj &lt;&lt; Level Fill Color( color )

**Descrizione:** Imposta il colore per i nomi di livello nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**Sintassi:** obj &lt;&lt; Level Frame Color( color )

**Descrizione:** Imposta il colore per le linee intorno ai nomi di livello nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**Sintassi:** obj &lt;&lt; Level Spacing Color( color )

**Descrizione:** Imposta il colore della spaziatura tra le etichette di livello.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**Sintassi:** obj &lt;&lt; Level Spacing Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza della spaziatura tra le etichette di livello. "1", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**Sintassi:** obj &lt;&lt; Level Text Color( color )

**Descrizione:** Imposta il colore per il testo dei nomi di livello nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Text Color( "Red" );

```

### Level Transparency

**Sintassi:** obj &lt;&lt; Level Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza per il frame dei nomi di livello nel grafico. "1", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Transparency( .2 );

```

### Level Underline

**Sintassi:** obj &lt;&lt; Level Underline( state=0|1 )

**Descrizione:** Sottolinea i nomi di livello nel grafico o rimuove la sottolineatura.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Frame Color( "Blue" );
gb << Level Underline( 1 );

```

### Lighten large fills

**Sintassi:** obj &lt;&lt; Lighten large fills( state=0|1 )

**Descrizione:** Schiarisce automaticamente i colori per elementi torta, mappa ad albero e mosaico che riempiono grandi aree. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Lighten large fills( 1 );

```

### Link Page Axes

**Sintassi:** obj &lt;&lt; Link Page Axes( "Nessuno"|"Solo X"|"Solo Y"|"X e Y" )

**Descrizione:** Definisce quali assi sono collegati tra livelli di gruppi di pagine.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 470, 552 ),
	Variables( X( :height ), Y( :weight ), Page( :sex ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Link Page Axes( "Y Only" );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

Names Default To Here( 1 );
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

**Descrizione:** Blocca i range dell&apos;asse e del gradiente in modo che non possano variare in risposta a modifiche dei dati o dei filtri.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Lock Scales( 1 );

```

### Make into Data Table

**Sintassi:** obj &lt;&lt; Make into Data Table

**Descrizione:** Crea una nuova tabella di dati contenente le immagini dei grafici.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Make into Data Table;

```

### Messaggi degli elementi condivisi

### New JSL Preset

**Sintassi:** New JSL Preset( preset )

**Descrizione:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Order Statistic

**Sintassi:** obj &lt;&lt; Order Statistic( "N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile"="Media" )

**Descrizione:** Imposta l&apos;ordine predefinito basato su una statistica di riepilogo applicato quando per una variabile nel grafico si utilizza il messaggio &apos;Ordina per&apos;. "Media", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
gb = dt << Graph Builder(
	Order Statistic( "Max" ),
	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),
	Elements( Box Plot( X, Y ) )
);

```

### Overlay Auto Line Styles Limit

**Sintassi:** obj &lt;&lt; Overlay Auto Line Styles Limit( count=6 )

**Descrizione:** Limita il numero di livelli di sovrapposizione in cui la codifica di sovrapposizione utilizzerà gli stili di linea per l&apos;impostazione automatica in presenza di una variabile di colore. "6", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Overlay Auto Line Styles Limit( 0 ),
	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),
	Elements( Line( X, Y ) )
);

```

### Overlay Auto Marker Styles Limit

**Sintassi:** obj &lt;&lt; Overlay Auto Marker Styles Limit( count=62 )

**Descrizione:** Limita il numero di livelli di sovrapposizione in cui la codifica di sovrapposizione utilizzerà gli stili degli indicatori per l&apos;impostazione automatica in presenza di una variabile di colore. "62", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Overlay Auto Marker Styles Limit( 0 ),
	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),
	Elements( Points( X, Y ) )
);

```

### Page Count Limit

**Sintassi:** obj &lt;&lt; Page Count Limit( count=200 )

**Descrizione:** Imposta il numero massimo di pagine create per la variabile della pagina, per evitare la degradazione accidentale delle performance. "200", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Name ) ),
	Elements( Points( X, Y ) )
);
gb << Page Count Limit( 5 );

```

### Page Gap Size

**Sintassi:** obj &lt;&lt; Page Gap Size( gap=25 )

**Descrizione:** Imposta la quantità di spazio tra i gruppi di pagine. "25", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**Sintassi:** obj &lt;&lt; Page Level Fill Color( color )

**Descrizione:** Imposta il colore per i nomi di livello nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**Sintassi:** obj &lt;&lt; Page Level Frame Color( color )

**Descrizione:** Imposta il colore per le linee intorno ai nomi di livello nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**Sintassi:** obj &lt;&lt; Page Level Text Color( color )

**Descrizione:** Imposta il colore per il testo dei nomi di livello nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**Sintassi:** obj &lt;&lt; Page Level Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza per il frame dei nomi di livello nel grafico. "1", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Transparency( .2 );

```

### Page Level Underline

**Sintassi:** obj &lt;&lt; Page Level Underline( state=0|1 )

**Descrizione:** Sottolinea i nomi di livello nel grafico o rimuove la sottolineatura.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Frame Color( "Blue" );
gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**Sintassi:** obj &lt;&lt; Parallel Axis Merging( "Sempre"|"Bassa similarità"|"Similarità media"|"Alta similarità"|"Mai" )

**Descrizione:** Determina quando l&apos;impostazione automatica Combina scale deve scegliere Parallelo unito invece di Parallelo indipendente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**Sintassi:** obj &lt;&lt; Parallel Y Axes( state=0|1 )

**Descrizione:** Tutti gli assi Y condividono lo stesso grafico. Come le coordinate parallele, ma con una variabile X.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :age ), Y( :height ), Y( :weight ) ),
	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),
	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) )
);
gb << Parallel Y Axes( 1 );

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

Names Default To Here( 1 );
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

### Random Seed

**Sintassi:** obj &lt;&lt; Random Seed( number )

**Descrizione:** Imposta un seme specifico per jitter casuale.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ) ),
	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) )
);
Wait( 1 );
gb << Random Seed( 123456 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj &lt;&lt; Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relative Sizes

**Sintassi:** Relative Sizes(axis, matrix of relative size values)

**Descrizione:** Determina la proporzione di spazio assegnata a ciascuno degli assi multipli di una serie.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Size( 435, 352 ),
	Show Control Panel( 0 ),
	Variables( X( :weight ), Y( :height ), Y( :sex ) ),
	Relative Sizes( "Y", [4 1] ),
	Elements( Position( 1, 1 ), Points( X, Y ) ),
	Elements( Position( 1, 2 ), Points( X, Y ) )
);

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj &lt;&lt; Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Element

**Sintassi:** obj &lt;&lt; Remove Element( xposition, yposition, i )

**Descrizione:** Rimuove un elemento grafico alle posizioni X e Y specificate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Remove Element( 1, 1, 2 );

```

### Remove Local Data Filter

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

Names Default To Here( 1 );
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

### Remove Variable

**Sintassi:** obj &lt;&lt; Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**Descrizione:** Rimuove una variabile dal modello del Costruttore di grafici, specificata dall&apos;indice o da un nome di colonna, ruolo e una posizione specificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Add Variable( {:age, Role( "Wrap" )} );
Wait( 0.5 );
gb << Remove Variable( 3 );

```

### Render Preset

**Sintassi:** Render Preset( preset )

**Descrizione:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Replicate Linked Page Axes

**Sintassi:** obj &lt;&lt; Replicate Linked Page Axes( state=0|1 )

**Descrizione:** Determina se l&apos;asse delle pagine collegate in una griglia deve essere visualizzato una volta per ogni grafico o una volta per ogni riga o colonna di grafici.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 470, 552 ),
	Variables( X( :height ), Y( :weight ), Page( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Link Page Axes( "X and Y" );
gb << Replicate Linked Page Axes( 1 );

```

### Report

**Sintassi:** obj &lt;&lt; Report;Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Report View( "Summary" );

```

### Sampling

**Sintassi:** obj &lt;&lt; Sampling( number )

**Descrizione:** Seleziona in modo casuale un sottoinsieme di dati utilizzando una proporzione o un conteggio specificato. È utile quando i dati sono di grandi dimensioni e il grafico dovrà essere ancora modificato.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Sampling( 20 );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );

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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Set Alpha Level

**Sintassi:** obj &lt;&lt; Set Alpha Level( 0.10|0.05|0.01|Other... )

**Descrizione:** Modifica il livello alfa utilizzato per le bande di confidenza.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Set Alpha Level( 0.10 );

```

### Set α Level

**Sintassi:** obj &lt;&lt; Set α Level( 0.10|0.05|0.01|Other... )

**Descrizione:** Modifica il livello alfa utilizzato per le bande di confidenza.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**Sintassi:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Descrizione:** Mostra/Nasconde il pannello di controllo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**Sintassi:** obj &lt;&lt; Show Excluded Rows( state=0|1 )

**Descrizione:** Mostra o nasconde le righe escluse sui diagrammi. Quando questa opzione è selezionata, le righe escluse sono incluse nel conteggio dei punti fuori controllo, ma escluse dai calcoli numerici.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
dt << Select Rows( 1 :: 5 );
dt << Exclude();
gb << Show Excluded Rows( 1 );

```

### Show Footer

**Sintassi:** obj &lt;&lt; Show Footer( state=0|1 )

**Descrizione:** Mostra/Nasconde il testo del piè di pagina. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Footer( 0 );

```

### Show Legend

**Sintassi:** obj &lt;&lt; Show Legend( state=0|1 )

**Descrizione:** Mostra/Nasconde la legenda a destra del grafico. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Legend( 1 );

```

### Show Subtitle

**Sintassi:** obj &lt;&lt; Show Subtitle( state=0|1 )

**Descrizione:** Mostra o nasconde il sottotitolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Subtitle( 1 );

```

### Show Title

**Sintassi:** obj &lt;&lt; Show Title( state=0|1 )

**Descrizione:** Mostra o nasconde il titolo del grafico. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Title( 0 );

```

### Show X Axis

**Sintassi:** obj &lt;&lt; Show X Axis( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;asse X. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show X Axis( 0 );

```

### Show X Axis Title

**Sintassi:** obj &lt;&lt; Show X Axis Title( state=0|1 )

**Descrizione:** Mostra o nasconde il titolo dell&apos;asse X. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show X Axis Title( 0 );

```

### Show Y Axis

**Sintassi:** obj &lt;&lt; Show Y Axis( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;asse Y. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**Sintassi:** obj &lt;&lt; Show Y Axis Title( state=0|1 )

**Descrizione:** Mostra o nasconde il titolo dell&apos;asse Y. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Y Axis Title( 0 );

```

### Size

**Sintassi:** obj &lt;&lt; Size( width, height )

**Descrizione:** Imposta le dimensioni del grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Size( 808, 586 );

```

### Spacing Borders

**Sintassi:** obj &lt;&lt; Spacing Borders( 0|1=0 )

**Descrizione:** Imposta i bordi dei riquadri interni del grafico. "0", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**Sintassi:** obj &lt;&lt; Subtitle Alignment( "Sinistra"|"Centrale"|"Destra"|"Automatica" )

**Descrizione:** Imposta l&apos;allineamento del sottotitolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**Sintassi:** obj &lt;&lt; Subtitle Span( "Completa"|"Contenuto del grafico" )

**Descrizione:** Imposta l&apos;estensione del sottotitolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**Sintassi:** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**Descrizione:** Imposta la statistica di riepilogo predefinita utilizzata dai diversi elementi nel grafico. Per gli elementi di grafici a barre e a linee, l&apos;impostazione predefinita è &apos;Media&apos;. "Media", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),
	Summary Statistic( "Sum" ),
	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) )
);

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Title( "My Platform" );

```

### Title Alignment

**Sintassi:** obj &lt;&lt; Title Alignment( "Sinistra"|"Centrale"|"Destra" )

**Descrizione:** Imposta l&apos;allineamento del titolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Alignment( "Left" );

```

### Title Fill Color

**Sintassi:** obj &lt;&lt; Title Fill Color( color )

**Descrizione:** Imposta il colore per il riempimento dello sfondo del titolo nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**Sintassi:** obj &lt;&lt; Title Frame Color( color )

**Descrizione:** Imposta il colore per la linea intorno al frame del titolo nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Frame Color( "Blue" );

```

### Title Span

**Sintassi:** obj &lt;&lt; Title Span( "Completa"|"Contenuto del grafico" )

**Descrizione:** Imposta l&apos;estensione del titolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Span( "Graph" );

```

### Title Text Color

**Sintassi:** obj &lt;&lt; Title Text Color( color )

**Descrizione:** Imposta il colore per il testo del titolo nel grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Text Color( "Red" );

```

### Title Transparency

**Sintassi:** obj &lt;&lt; Title Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza per il frame del titolo nel grafico. "1", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Transparency( .2 );

```

### Title Underline

**Sintassi:** obj &lt;&lt; Title Underline( state=0|1 )

**Descrizione:** Sottolinea il titolo nel grafico o rimuove la sottolineatura.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Frame Color( "Blue" );
gb << Title Underline( 1 );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Update Element

**Sintassi:** obj &lt;&lt; Update Element( xposition, yposition, i, {options} )

**Descrizione:** Modifica le proprietà di un elemento esistente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**Sintassi:** obj &lt;&lt; Use row colors for levels( state=0|1 )

**Descrizione:** Inizializza i livelli legenda con colori riga quando ogni livello ha un unico colore. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Use row colors for levels( 1 );

```

### Variables

**Sintassi:** Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; )&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Definisce le variabili utilizzate nella visualizzazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X Group Edge

**Sintassi:** obj &lt;&lt; X Group Edge( "Alto"|"Basso" )

**Descrizione:** Sposta in alto o in basso l&apos;asse per il gruppo X. Per impostazione predefinita l&apos;asse viene spostato in alto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 1 );
gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**Sintassi:** obj &lt;&lt; Y Group Edge( "Sinistra"|"Destra" )

**Descrizione:** Sposta a destra o a sinistra l&apos;asse per il gruppo Y. Per impostazione predefinita l&apos;asse viene spostato a destra.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**Sintassi:** obj &lt;&lt; Y Group Level Orientation( "Orizzontale"|"Verticale" )

**Descrizione:** Determina se il testo dell&apos;etichetta del livello del gruppo Y è orizzontale o verticale (ruotata).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**Sintassi:** obj &lt;&lt; Y Group Title Orientation( "Orizzontale"|"Verticale" )

**Descrizione:** Determina se il testo dell&apos;etichetta del titolo del gruppo Y è orizzontale o verticale (ruotata).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Title Orientation( "Horizontal" );

```

## Graph Builder Elements

### Messaggi degli elementi

#### Area

**Sintassi:** obj &lt;&lt; Area

**Descrizione:** Area: mostra una risposta sommarizzata per categorie.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Area( X, Y ) ) );

```

#### Bar

**Sintassi:** obj &lt;&lt; Bar

**Descrizione:** Barra: mostra una risposta sommarizzata per categorie.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );

```

#### Box Plot

**Sintassi:** obj &lt;&lt; Box Plot

**Descrizione:** Box plot: mostra una vista compatta della distribuzione di una variabile con quartili e outlier.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Box Plot( X, Y ) ) );

```

#### Caption Box

**Sintassi:** obj &lt;&lt; Caption Box

**Descrizione:** Casella didascalia: mostra un valore di statistica di riepilogo per i dati.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Line( X, Y ), Caption Box( X, Y ) )
);

```

#### Contour

**Sintassi:** obj &lt;&lt; Contour

**Descrizione:** Profiler isometrico: mostra regioni di densità dei dati (o profili isometrici di valore con una variabile Colore). Produce grafici violino quando X è categorica.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Contour( X, Y ) ) );

```

#### Ellipse

**Sintassi:** obj &lt;&lt; Ellipse

**Descrizione:** Ellisse: mostra un&apos;ellisse di densità bivariata normale.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Ellipse( X, Y ) ) );

```

#### Formula

**Sintassi:** obj &lt;&lt; Formula

**Descrizione:** Formula: mostra una funzione definita da una formula nella colonna.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :height ), Y( Transform Column( "f", Formula( Sin( :height / 5 ) ) ) ) ),
	Elements( Formula( X, Y ) )
);

```

#### Heatmap

**Sintassi:** obj &lt;&lt; Heatmap

**Descrizione:** Heatmap: mostra i conteggi utilizzando i colori per le categorie X e Y.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Heatmap( X, Y ) ) );

```

#### Histogram

**Sintassi:** obj &lt;&lt; Histogram

**Descrizione:** Istogramma: mostra la distribuzione di una variabile mediante binning.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :weight ) ), Elements( Histogram( X ) ) );

```

#### Line

**Sintassi:** obj &lt;&lt; Line

**Descrizione:** Linea: mostra una risposta sommarizzata per categorie.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Line( X, Y ) ) );

```

#### Line Of Fit

**Sintassi:** obj &lt;&lt; Line Of Fit

**Descrizione:** Retta della regressione: Mostra una regressione lineare con intervalli di confidenza per X e Y continue. Stima medie per X categorico.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Line of Fit( X, Y ) ) );

```

#### Map Shapes

**Sintassi:** obj &lt;&lt; Map Shapes

**Descrizione:** Forme della mappa: mostra aree definite da una variabile Forma della mappa, di solito con una variabile Colore.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ), Elements( Map Shapes() ) );

```

#### Mosaic

**Sintassi:** obj &lt;&lt; Mosaic

**Descrizione:** Mosaico: mostra i conteggi utilizzando una dimensione per le categorie X e Y.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :sex ) ), Elements( Mosaic( X, Y ) ) );

```

#### Parallel

**Sintassi:** obj &lt;&lt; Parallel

**Descrizione:** Parallelo: Mostra molte variabili lungo assi paralleli con una linea connessa per ciascuna riga.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :height ), X( :weight, Position( 1 ) ), X( :age, Position( 1 ) ) ),
	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ) ) )
);

```

#### Pie

**Sintassi:** obj &lt;&lt; Pie

**Descrizione:** Torta: mostra porzioni di un intero.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ) ), Elements( Pie( X ) ) );

```

#### Points

**Sintassi:** obj &lt;&lt; Points

**Descrizione:** Punti: mostra un grafico a dispersione dei valori di dati.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ) ) );

```

#### Smoother

**Sintassi:** obj &lt;&lt; Smoother

**Descrizione:** Smoother: mostra una curva di smoothing attraverso i dati. Migliore per X e Y continui con una relazione sconosciuta.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Smoother( X, Y ) ) );

```

#### Treemap

**Sintassi:** obj &lt;&lt; Treemap

**Descrizione:** Mappa ad albero: mostra una risposta sommarizzata per molte categorie.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Treemap( X, Y ) ) );

```

