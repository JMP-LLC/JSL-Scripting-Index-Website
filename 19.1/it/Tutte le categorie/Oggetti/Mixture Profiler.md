# Mixture Profiler



## Colonne

### Noise Factors

**Sintassi:** obj = Mixture Profiler(...&lt;Noise Factors( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica i fattori di disturbo, che devono essere colonne che costituiscono ingredienti delle colonne della formula. I fattori di disturbo sono usati per studiare la robustezza (o linearità) rispetto alla variazione trasmessa da questi fattori. Il profiler risultante include le derivate delle formule rispetto ai fattori di disturbo.

**Esempio di profiler**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

**Esempio di profiler della miscela**

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

**Esempio di profiler isometrico**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

**Esempio di profiler personalizzato**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

### Prediction Formula

**Sintassi:** obj = Mixture Profiler(...Prediction Formula( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne di risposta che contengono formule.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Y

**Sintassi:** obj = Mixture Profiler(...Y( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne di risposta che contengono formule.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

## Costruttori associati

### Mixture Profiler

**Sintassi:** Mixture Profiler( Y( column1, column2, ... ) )

**Descrizione:** Produce un grafico ternario interattivo che consente di esplorare i profiler isometrici delle formule di previsione salvate per i modelli di miscela con tre o più fattori.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Animation

**Sintassi:** obj &lt;&lt; Animation( &lt;Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )&gt;, &lt;Speed(ticks)&gt;, &lt;Go&gt;, &lt;Stop&gt; )

**Descrizione:** Avvia o arresta l&apos;animazione del profiler. Si può anche specificare il modo in cui l&apos;animazione scorre tra le combinazioni di fattori.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Animation( Tour Type( "Sequential" ), Go );Wait( 3 );obj << Animation( "Stop" );

```

### Append Settings to Table

**Sintassi:** obj &lt;&lt; Append Settings to Table

**Descrizione:** Salva le impostazioni del profiler corrente come una nuova riga alla fine della tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Append Settings to Table;

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

#### Cerca per nome

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preimpostazione anonima

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Ricerca all'interno delle cartelle

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Broadcast Factor Settings

**Sintassi:** obj &lt;&lt; Broadcast Factor Settings

**Descrizione:** Invia le impostazioni del fattore per il profiler corrente a tutti gli altri profiler. Questa opzione non collega i profiler.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ),	Term Value(		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )	));obj << Contour Profiler( 1 );Wait( 1 );obj << Broadcast Factor Settings;

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Contour Grid

**Sintassi:** obj &lt;&lt; Contour Grid( minimum, maximum, increment, y column )

**Descrizione:** Disegna una griglia del profilo isometrico sul profiler della miscela. La griglia si basa sugli intervalli specificati.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );Wait( 1 );obj << Contour Grid( 5, 20, 3, :PredFormula Y );

```

### Contour Profiler

**Sintassi:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler isometrico.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Contour Profiler( 1 );

```

### Contour Value

**Sintassi:** obj &lt;&lt; Contour Value( y1( number, &lt;Min( number )&gt;, &lt;Max( number )&gt;), y2(...) )

**Descrizione:** Imposta specifici valori isometrici per risposte nel profiler della miscela.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Contour Value( Pred Formula Y( 18.167, Min( 5 ), Max( 20 ) ) );

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Copy Script;

```

### Copy Settings Script

**Sintassi:** obj &lt;&lt; Copy Settings Script

**Descrizione:** Copia le impostazioni del fattore corrente negli Appunti. Le impostazioni possono poi essere incollate in un altro profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set to Data in Row( 4 );obj << Copy Settings Script;obj2 = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj2 << Paste Settings Script;

```

### Custom Profiler

**Sintassi:** obj &lt;&lt; Custom Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler personalizzato.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Custom Profiler( 1 );

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Data Table Window;

```

### Formulas for OPTMODEL

**Sintassi:** obj &lt;&lt; Formulas for OPTMODEL

**Descrizione:** Salva le formule di previsione dal modello in un nuovo file come istruzioni SAS per PROC OPTMODEL.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Formulas for OPTMODEL;

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Constraints

**Sintassi:** obj &lt;&lt; Get Constraints

**Descrizione:** Restituisce un elenco di vincoli di fattori.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Profiler(	Y( :Pred Formula Y ),	Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), ));obj << Get Constraints;

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Factor Settings

**Sintassi:** obj &lt;&lt; Get Factor Settings

**Descrizione:** Restituisce le impostazioni correnti dei fattori come elenco.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Get Factor Settings;

```

### Get Factor Settings Script

**Sintassi:** obj &lt;&lt; Get Factor Settings Script

**Descrizione:** Restituisce le impostazioni correnti del fattore come espressione che può essere usata in uno script.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Get Factor Settings Script;

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Simulator

**Sintassi:** obj &lt;&lt; Get Simulator

**Descrizione:** Restituisce un riferimento al simulatore.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ),		SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << Add Random Noise( 1 ),		Pred Formula HARDNESS << Add Random Weighted Noise( 1 )	));obj2 = obj << Get Simulator;obj2 << Simulation Experiment;

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );t = obj << Get Timing;Show( t );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Sintassi:** obj &lt;&lt; Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Left Factor

**Sintassi:** obj &lt;&lt; Left Factor( column )

**Descrizione:** Specifica il fattore che viene mostrato sul lato sinistro del grafico ternario.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );Wait( 1 );obj << Left Factor( :p1 );

```

### Link Profilers

**Sintassi:** obj &lt;&lt; Link Profilers( state=0|1 )

**Descrizione:** Collega insieme tutti i profiler in un unico report: se si modifica un fattore in un profiler, la stessa modifica sarà applicata a quel fattore in tutti gli altri profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Prediction Profiler( 1 );obj << Contour Profiler( 1 );obj << Link Profilers( 1 );Wait( 1 );obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Messaggi degli elementi condivisi

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Number of Grid Points

**Sintassi:** obj = Mixture Profiler(...Number of Grid Points( number )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica il numero di punti della griglia su ciascuno dei tre assi da utilizzare per la valutazione dei profili isometrici.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Number of Grid Points( 100 ) );Wait( 1 );obj << Number of Grid Points( 140 );

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Paste Settings Script

**Sintassi:** obj &lt;&lt; Paste Settings Script

**Descrizione:** Incolla le impostazioni del profiler dagli Appunti a un profiler in un altro report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set to Data in Row( 4 );obj << Copy Settings Script;obj2 = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj2 << Paste Settings Script;

```

### Predict for Another Table

**Sintassi:** obj &lt;&lt; Predict for Another Table( &lt;data table&gt; )

**Descrizione:** Aggiunge colonne di previsione a una tabella di dati specificata, utilizzando i fattori presenti in tale tabella. Questa opzione è disponibile solo per le risposte continue.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );dt2 = dt << Subset(	All rows,	columns( :SILICA, :SILANE, :SULFUR ),	Output Table( "Subset" ));obj << Predict For Another Table( dt2 );

```

### Prediction Profiler

**Sintassi:** obj &lt;&lt; Prediction Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler di previsione.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Prediction Profiler( 1 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Relaunch Analysis;

```

### Remember Settings

**Sintassi:** obj &lt;&lt; Remember Settings

**Descrizione:** Aggiunge un riquadro al report con i valori delle impostazioni dei fattori.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Remember Settings;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Contour Grid

**Sintassi:** obj &lt;&lt; Remove Contour Grid

**Descrizione:** Rimuove la griglia del profilo isometrico che è sovrapposto al profiler della miscela.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Contour Grid( 5, 20, 3, :PredFormula Y );Wait( 1 );obj << Remove Contour Grid;

```

### Remove Local Data Filter

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Sintassi:** obj &lt;&lt; Report; Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Report View( "Summary" );

```

### Reset

**Sintassi:** obj &lt;&lt; Reset

**Descrizione:** Aggiorna le previsioni ai valori correnti.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = Mixture Profiler( Y( :Pred Formula Y ) );obj << Term Value( :p1( 0.804905315083495 ), :p2( 0.0286246849165042 ), :p3( 0.15647 ) );obj << Reset;

```

### Right Factor

**Sintassi:** obj &lt;&lt; Right Factor( column )

**Descrizione:** Specifica il fattore che viene mostrato sul lato destro del grafico ternario.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );Wait( 1 );obj << Right Factor( :p2 );

```

### Save Expanded Formulas

**Sintassi:** obj &lt;&lt; Save Expanded Formulas

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati. La nuova colonna contiene riferimenti di formule risolte all&apos;interno delle formule usate come variabili Y per vedere le variabili sottostanti. È disponibile solo dopo che l&apos;opzione Espandi formule intermedie è stata selezionata nella finestra di avvio o dopo che è stato specificato il messaggio Espandi nello script del profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );obj << Save Expanded Formulas;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Mixture Profiler(	Y( :Pred Formula Y ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Mixture Profiler(	Y( :Pred Formula Y ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Save Script to Script Window;

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Sintassi:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descrizione:** Invia a oggetto che supporta script incorporato ripristina le impostazioni degli oggetti incorporati che supportano script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Sintassi:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descrizione:** La funzione Invia al report è utilizzata in combinazione con il comando Invia per personalizzare l&apos;aspetto di un report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Set Script

**Sintassi:** obj &lt;&lt; Set Script( Function( {arguments}, &lt;{locals}&gt;, expr ) )

**Descrizione:** Imposta uno script che sarà eseguito ogni volta che si modifica un fattore.

```jsl

ProfileCallbackLog = Function( {arg}, Show( arg ) );dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Set Script( ProfileCallbackLog );obj << Term Value( :Silica( 1 ) );

```

### Set to Data in Row

**Sintassi:** obj &lt;&lt; Set to Data in Row( row number )

**Descrizione:** Assegna alle variabili X del profiler i valori di una riga in una tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );Wait( 2 );obj << Set to Data in Row( 4 );

```

### Show Constraints

**Sintassi:** obj &lt;&lt; Show Constraints( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura risultante da eventuali vincoli sui fattori. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );dt << New Property( "Constraint", {:p2 + :p3 <= :p1} );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );Wait( 1 );obj << Show Constraints( 0 );

```

### Show Current Value

**Sintassi:** obj &lt;&lt; Show Current Value( state=0|1 )

**Descrizione:** Mostra o nasconde un mirino a tre vie ai valori correnti della miscela sul grafico ternario. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Show Current Value( 0 ) );Wait( 1 );obj << Show Current Value( 1 );

```

### Show Formulas

**Sintassi:** obj &lt;&lt; Show Formulas

**Descrizione:** Apre una finestra di script che contiene JSL per tutte le formule da profilare.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Show Formulas;

```

### Show Points

**Sintassi:** obj &lt;&lt; Show Points( state=0|1 )

**Descrizione:** Mostra o nasconde i punti individuali sul grafico ternario. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Show Points( 0 ) );Wait( 1 );obj << Show Points( 1 );

```

### Specify Factor Values

**Sintassi:** obj &lt;&lt; Specify Factor Values

**Descrizione:** Apre una finestra che consente di specificare i valori fattoriali.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Specify Factor Values;

```

### Surface Profiler

**Sintassi:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler di superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Surface Profiler( 1 );

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Term Value

**Sintassi:** obj &lt;&lt; Term Value( x1( number, &lt;Min( number )&gt;, &lt;Max( number )&gt; ),x2( number &lt;Min( number )&gt;, &lt;Max( number )&gt; ), ... )

**Descrizione:** Imposta i valori dei termini specifici per i fattori del profiler della miscela.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );Wait( 1 );obj << Term Value( :p1( 0.804905315083495 ), :p2( 0.0386246849165042 ), :p3( 0.15647 ) );

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );obj << Title( "My Platform" );

```

### Top Factor

**Sintassi:** obj &lt;&lt; Top Factor( column )

**Descrizione:** Specifica il fattore che viene mostrato sul lato superiore del grafico ternario.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );Wait( 1 );obj << Top Factor( :p3 );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Unthreaded

**Sintassi:** obj &lt;&lt; Unthreaded( state=0|1 )

**Descrizione:** Per sopprimere i thread multipli nella valutazione delle tracce del profilo, della griglia profilo isometrico e delle escursioni dell&apos;ottimizzatore.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Unthreaded( 1 );obj << Maximize Desirability;

```

### Up Dots

**Sintassi:** obj &lt;&lt; Up Dots( state=0|1 )

**Descrizione:** Mostra o nasconde i punti accanto alle linee isometriche. Questi punti indicano la direzione verso l&apos;alto della risposta. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );Wait( 1 );obj << Up Dots( 0 );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

