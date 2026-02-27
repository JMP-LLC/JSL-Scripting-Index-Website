# Model Comparison



## Colonne

### Freq

**Sintassi:** obj &lt;&lt; Freq( column )

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ),	Freq( :_freqcol ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ),	Freq( :_freqcol ));obj = Model Comparison();

```

### Group

**Sintassi:** obj &lt;&lt; Group( column(s) )

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();

```

### Predictors

**Sintassi:** obj &lt;&lt; Predictors( column(s) )

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();

```

### Weight

**Sintassi:** obj &lt;&lt; Weight( column )

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ),	Weight( :_weightcol ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ),	Weight( :_weightcol ));obj = Model Comparison();

```

### Y

**Sintassi:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();

```

## Costruttori associati

### Model Comparison

**Sintassi:** Model Comparison( Predictors( columns ), Group( column ) )

**Descrizione:** Confronta le performance tra modelli mediante colonne con formula di previsione.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();

```

## Messaggi degli elementi

### AUC Comparison

**Sintassi:** obj &lt;&lt; AUC Comparison( state=0|1 )

**Descrizione:** Mostra o nasconde un confronto dell&apos;area sotto la curva ROC (AUC) di ogni modello.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :sex ),	Effects( :height ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));dt << Fit Model(	Y( :sex ),	Effects( :age ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));Model Comparison( AUC Comparison( 1 ) );

```

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

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

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Confusion Matrix

**Sintassi:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice con una tabella a campi incrociati delle risposte effettive e previste.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :sex ),	Effects( :height ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));dt << Fit Model(	Y( :sex ),	Effects( :age ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));Model Comparison( Confusion Matrix( 1 ) );

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Copy Script;

```

### Cum Gains Curve

**Sintassi:** obj &lt;&lt; Cum Gains Curve( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma delle curve dei gain cumulative per ogni livello della variabile di risposta. Una curva dei gain cumulativi traccia la proporzione di un livello di risposta che è identificato dal modello, rispetto alla proporzione di tutte le risposte.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :sex ),	Effects( :height ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));dt << Fit Model(	Y( :sex ),	Effects( :age ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));Model Comparison( Cum Gains Curve( 1 ) );

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Data Table Window;

```

### Decision Threshold

**Sintassi:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**Descrizione:** Mostra o nasconde la distribuzione delle probabilità stimate e le tabelle effettive rispetto a quelle previste per ogni modello. È possibile modificare la soglia di probabilità per esplorare come le diverse soglie influenzano i risultati della classificazione.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :sex ),	Effects( :height ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));dt << Fit Model(	Y( :sex ),	Effects( :age ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));Model Comparison( Decision Threshold( 1 ) );

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();t = obj << Get Timing;Show( t );

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

### Lift Curve

**Sintassi:** obj &lt;&lt; Lift Curve( state=0|1 )

**Descrizione:** Mostra o nasconde le curve lift per ciascun livello della variabile di risposta. Le curve per i diversi modelli sono sovrapposte nei diagrammi.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :sex ),	Effects( :height ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));dt << Fit Model(	Y( :sex ),	Effects( :age ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));Model Comparison( Lift Curve( 1 ) );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Messaggi degli elementi condivisi

### Model Averaging

**Sintassi:** obj &lt;&lt; Model Averaging

**Descrizione:** Salva una nuova colonna di previsione della media delle probabilità previste tra i modelli. Questa colonna di previsione spesso produce un modello con una migliore capacità di previsione rispetto ai modelli individuali.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));Model Comparison( Model Averaging );

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Plot Actual by Predicted

**Sintassi:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma con i valori effettivi di risposta sull&apos;asse verticale e i valori previsti sull&apos;asse orizzontale. Nelle buone stime, i punti sono vicini alla diagonale. È possibile vedere quali punti sono lontani dalla diagonale, cercare pattern e visualizzare il test.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));Model Comparison( Plot Actual by Predicted( 1 ) );

```

### Plot Residual by Row

**Sintassi:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma con i residui sull&apos;asse verticale e il numero di riga sull&apos;asse orizzontale.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));Model Comparison( Plot Residual by Row( 1 ) );

```

### Precision Recall Curve

**Sintassi:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Descrizione:** Mostra o nasconde diagrammi delle curve di precisione-richiamo per ciascun livello della variabile di risposta. Le curve per i diversi modelli sono sovrapposte nei diagrammi.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :sex ),	Effects( :height ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));dt << Fit Model(	Y( :sex ),	Effects( :age ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));Model Comparison( Precision Recall Curve( 1 ) );

```

### Profiler

**Sintassi:** obj &lt;&lt; Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler di previsione, che viene utilizzato per esplorare graficamente l&apos;equazione di previsione sezionandola fattore per fattore. Il profiler di previsione contiene funzioni di ottimizzazione.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));Model Comparison( Profiler( 1 ) );

```

### ROC Curve

**Sintassi:** obj &lt;&lt; ROC Curve( state=0|1 )

**Descrizione:** Mostra o nasconde le curve ROC (Receiver Operating Characteristic) per ciascun livello della variabile di risposta. Le curve per i diversi modelli sono sovrapposte nei diagrammi.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :sex ),	Effects( :height ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));dt << Fit Model(	Y( :sex ),	Effects( :age ),	Target Level( "M" ),	Personality( "Nominal Logistic" ),	Run( Save Probability Formula, Close Window ));Model Comparison( ROC Curve( 1 ) );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

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

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Report View( "Summary" );

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj = Model Comparison();obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj = Model Comparison();obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Save Script to Script Window;

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

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

