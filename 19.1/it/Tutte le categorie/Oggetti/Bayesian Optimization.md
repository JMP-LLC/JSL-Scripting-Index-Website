# Bayesian Optimization



## Colonne

### Iteration

**Sintassi:** obj &lt;&lt; Iteration( column )

**Descrizione:** Specifica un&apos;etichetta colonna batch. I batch devono essere etichettati come 0, 1, 2, ..., dove il batch 0 indica i dati di training originali.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_itercol",	Numeric,	Ordinal,	set values( V Concat( (Repeat( 0, N Rows( dt ) - 10 )), Repeat( 1, 10 ) ) ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Iteration( _itercol ));

```

### Run Order

**Sintassi:** obj &lt;&lt; Run Order( column )

**Descrizione:** Specifica una colonna di permutazione di numeri di riga che indicano l&apos;ordine delle osservazioni.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_runorder", Numeric, Ordinal, set values( 1 :: (N Rows( dt )) ) );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Run Order( _runorder ));

```

### X

**Sintassi:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

### Y

**Sintassi:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## Costruttori associati

### Bayesian Optimization

**Sintassi:** Bayesian Optimization( Y( columns ), X( columns ) )

**Descrizione:** Raccomanda le impostazioni dei fattori per ottimizzare le risposte aumentando la tabella di dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## Messaggi degli elementi

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Automatically Generate a Batch

**Sintassi:** obj &lt;&lt; Automatically Generate a Batch( state=0|1 )

**Descrizione:** Indica se eseguire la generazione automatica dei set di candidati e la selezione dei batch. Opzionalmente, è possibile specificare quale metodo utilizzare per selezionare i batch. Questa opzione equivale a specificare contemporaneamente l&apos;opzione Genera set di candidati e l&apos;opzione Seleziona automaticamente batch.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 1 ));

```

### Autoselect Batch

**Sintassi:** obj &lt;&lt; Autoselect Batch( state=0|1 )

**Descrizione:** Seleziona un batch dal set di candidati attualmente caricato. Se non è stato caricato alcun set di candidati, viene generato un set di riempimento dello spazio di dimensioni pari a 1000 volte il numero di variabili di input. Questa opzione può essere usata anche per disattivare la selezione automatica dei batch all&apos;avvio.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	),	Autoselect Batch( Batch Size( 1 ), Minimum RSquare( 0.5 ) ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	),	Autoselect Batch( 0 ));

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 0 ));obj << Autoselect Batch( Batch Size( 5 ), Augmentation Method( Space Filling Exploration ) );

```

### Batch Size

**Sintassi:** obj &lt;&lt; Batch Size( number )

**Descrizione:** Specifica la dimensione del batch da selezionare automaticamente all&apos;avvio.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Batch Size( 5 ));

```

### Candidate Set Size

**Sintassi:** obj &lt;&lt; Candidate Set Size( number )

**Descrizione:** Specifica la dimensione desiderata del set di candidati da generare.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Candidate Set Size( 10 ));

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Continuous Correlation Type

**Sintassi:** obj &lt;&lt; Continuous Correlation Type( "Gaussiana"|"Matern 3/2"|"Matern 5/2"|"Esponenziale" )

**Descrizione:** Specifica il kernel desiderato per le variabili di input continue.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Continuous Correlation Type( "Matern 5/2" ));

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Data Table Window;

```

### Generate Candidate Set

**Sintassi:** obj &lt;&lt; Generate Candidate Set( Candidate Set Size( number ), &lt;Include Runs that Do Not Conform to Constraints( state = 0|1 )&gt; )

**Descrizione:** Genera un set di candidati. È possibile fornire la dimensione del set di candidati e specificare se consentire i punti che violano i vincoli lineari nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	));

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Timing;Show( t );

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

### Include Runs that Do Not Conform to Constraints

**Sintassi:** obj &lt;&lt; Include Runs that Do Not Conform to Constraints( state=0|1 )

**Descrizione:** Specifica se includere i punti che violano i vincoli lineari nella tabella di dati quando si genera o si carica un set di candidati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dtCand = New Table( "Tiretread Candidate Set",	Add Rows( 15 ),	New Column( "SILICA",		Continuous,		Set Values(			[1.2, 1.60825, 0.79175, 0.995875, 1.812375, 1.404125, 0.587625, 0.6896875,			1.5061875, 1.9144375, 1.0979375, 0.8938125, 1.7103125, 1.3020625, 0.4855625]		)	),	New Column( "SILANE",		Continuous,		Set Values(			[50, 41.835, 58.165, 45.9175, 62.2475, 37.7525, 54.0825, 43.87625, 60.20625,			35.71125, 52.04125, 39.79375, 56.12375, 47.95875, 64.28875]		)	),	New Column( "SULFUR",		Continuous,		Set Values(			[2.3, 1.89175, 2.70825, 2.504125, 1.687625, 2.912375, 2.095875, 3.0144375,			2.1979375, 2.6061875, 1.7896875, 1.9938125, 2.8103125, 1.5855625, 2.4020625]		)	));dt << New Script( "Constraint", {:SILICA + :SULFUR <= 3} );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ),	Load Candidate Set from Data Table( dtCand ));

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Messaggi degli elementi condivisi

### Minimum RSquare

**Sintassi:** obj &lt;&lt; Minimum RSquare( number )

**Descrizione:** Specifica la metrica R-quadro minima richiesta per l&apos;algoritmo di autoselezione batch. Nella finestra di avvio della piattaforma di ottimizzazione bayesiana, questa opzione è indicata come Soglia R-quadro per l’aumento basato sul modello.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Minimum RSquare( 0.25 ));

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Nominal Correlation Type

**Sintassi:** obj &lt;&lt; Nominal Correlation Type( "Correlazioni uguali"|"Correlazioni diseguali" )

**Descrizione:** Specifica il kernel desiderato per le variabili di input nominali.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Nominal Correlation Type( "Equal Correlations" ));

```

### Ordinal Correlation Type

**Sintassi:** obj &lt;&lt; Ordinal Correlation Type( "Correlazioni uguali"|"Correlazioni diseguali"|"Variabile latente" )

**Descrizione:** Specifica il kernel desiderato per le variabili di input ordinali.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Ordinal Correlation Type( "Equal Correlations" ));

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Report View( "Summary" );

```

### Save Prediction Formula

**Sintassi:** obj &lt;&lt; Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna nella tabella di dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula( Elong );

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Script Window;

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

### Set Tab

**Sintassi:** obj &lt;&lt; Set Tab( number )

**Descrizione:** Specifica la scheda corrente. L&apos;argomento interpreta 0 come scheda Riepilogo modello, 1 come Selezione batch e così via, nell&apos;ordine in cui le schede compaiono nella finestra dei report.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( 1 );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( "ABRASION" );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Bayesian Optimization Batch Customizer > Candidate Set View

### Messaggi degli elementi

#### Export Candidate Set to Data Table

**Sintassi:** obj &lt;&lt; Export Candidate Set to Data Table

**Descrizione:** Esporta il set di candidati attualmente caricato in una nuova tabella di dati. È possibile specificare i gruppi di colonne desiderati come argomenti. Questa opzione esporta le impostazioni dei fattori di default se non vengono forniti gruppi di colonne. Se non vengono specificati argomenti, viene visualizzata una finestra in cui è possibile specificare le opzioni.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table( Go );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table();

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table(	Order Added, Factor Settings, Bayesian Desirability, Bayesian Desirability Std Dev,	Multimodel Prediction Std Dev, MaxPro Space Filling Criterion,	Bayesian Desirability Expected Improvement, Bayesian Desirability Upper Confidence Bound,	Training Response Predictions, Augmented Response Prediction Std Dev,	Augmented Response Prediction Confidence Intervals);

```

#### Select Runs

**Sintassi:** obj &lt;&lt; Select Runs( Row Index( [ numbers ] ), &lt;Order Added( [ numbers ]&gt;, &lt;Reason Added( { text } )&gt;, &lt;Replace( 0|1 )&gt; )

**Descrizione:** Seleziona le righe dalla tabella dei set di candidati da aggiungere al batch corrente.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Select Runs(		Row Index( [3 5] ),		Order Added( [1 2] ),		Reason Added( {"Custom Reason", "Custom Reason"} ),		Replace( 1 )	));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	autoselect batch( 0 ));obj << Select Runs(	Row Index( [3 5] ),	Order Added( [1 2] ),	Reason Added( {"Custom Reason", "Custom Reason"} ),	Replace( 0 ));

```

#### Show Table Columns

**Sintassi:** obj &lt;&lt; Show Table Columns( &lt;"Column Group Name"&gt;,... )

**Descrizione:** Specifica quali gruppi di colonne sono visibili nella tabella dei set di candidati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Show Table Columns( Order Added, Factor Settings, Bayesian Desirability ));

```

## Bayesian Optimization Batch Customizer

### Messaggi degli elementi

#### Add Current Profiler Settings to Batch

**Sintassi:** obj &lt;&lt; Add Current Profiler Settings to Batch

**Descrizione:** Aggiunge le impostazioni correnti del profiler al set di candidati e lo seleziona per includerlo come esecuzione nel successivo batch di ampliamento.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Add Current Profiler Settings to Batch;

```

#### Augmented Acquisition Functions Profiler

**Sintassi:** obj &lt;&lt; Augmented Acquisition Functions Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde un profiler che consente di esplorare il modo in cui ciascuna funzione di acquisizione cambia rispetto alle variazioni di ciascun valore del fattore. Le funzioni sono condizionali all&apos;assunto che i punti del batch corrente vengano campionati. Questo profiler riflette le modifiche apportate ai livelli dei fattori e alle funzioni di desiderabilità nel Profiler di previsione aumentato.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Acquisition Functions Profiler( 0 );

```

#### Augmented Prediction Profiler

**Sintassi:** obj &lt;&lt; Augmented Prediction Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde un profiler che consente di esplorare il modo in cui ciascuna colonna cambia rispetto alle variazioni di ciascun valore del fattore nei vari modelli. Le previsioni sono condizionali all&apos;assunto che i punti del batch corrente vengano campionati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Prediction Profiler( 0 );

```

#### Deselect All

**Sintassi:** obj &lt;&lt; Deselect All

**Descrizione:** Deselect all points in current batch.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Deselect All;

```

#### Load Candidate Set from Data Table

**Sintassi:** obj &lt;&lt; Load Candidate Set from Data Table

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Load Candidate Set from Data Table());

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Borehole Latin Hypercube.jmp" );:log y << Set Property( "Response Limits", {Goal( maximize ), Importance( 1 )} );obj = dt << Bayesian Optimization(	Y( :log y ),	X( :log10 Rw, :log10 R, :Tu, :Tl, :Hu, :Hl, :L, :Kw ));dt_candidate = Open( "$SAMPLE_DATA/Design Experiment/Borehole Uniform.jmp" );obj << Load Candidate Set from Data Table( dt_candidate );

```

#### Make Table

**Sintassi:** obj &lt;&lt; Make Table

**Descrizione:** Export currently selected batch points to data table based on current settings.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Make Table;

```

#### Make Table Options

**Sintassi:** obj &lt;&lt; Make Table Options( &lt;Location( state = 0|1 )&gt;, &lt;Randomize Runs( state = 0|1 )&gt;, &lt; "Include Option Name"( state = 0|1 ) &gt; , ... )

**Descrizione:** Consente di selezionare le impostazioni delle opzioni che vengono utilizzate quando si esporta il batch selezionato in una tabella di dati. Si noti che la sintassi "Includi nome opzione" si riferisce a qualsiasi opzione del menu Includi opzioni.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Make Table Options(		Location( 1 ),		Randomize Runs( 0 ),		Save desirability function values to columns( 1 ),		Save startup script for next batch selection to data table( 1 ),		Include observed desirabilities( 1 ),		Include original candidate set row indices( 1 ),		Include reason added column( 1 ),		Include predicted response values( 1 ),		Include prediction standard deviations( 1 ),		Include Bayesian desirability expected improvement column( 1 )	));

```

#### Maximize Bayesian Desirability

**Sintassi:** obj &lt;&lt; Maximize Bayesian Desirability

**Descrizione:** Trova le impostazioni dei fattori che massimizzano la media a posteriori della distribuzione di desiderabilità.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;

```

#### Maximize Bayesian Desirability Std Dev

**Sintassi:** obj &lt;&lt; Maximize Bayesian Desirability Std Dev

**Descrizione:** Trova le impostazioni dei fattori che massimizzano la deviazione a posteriori della distribuzione di desiderabilità.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability Std Dev;

```

#### Maximize Expected Improvement

**Sintassi:** obj &lt;&lt; Maximize Expected Improvement

**Descrizione:** Trova le impostazioni dei fattori con il maggiore miglioramento atteso, misurato dalla desiderabilità bayesiana.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Expected Improvement;

```

#### Maximize MaxPro Criterion

**Sintassi:** obj &lt;&lt; Maximize MaxPro Criterion

**Descrizione:** Trova le impostazioni del fattore di maggiore riempimento dello spazio utilizzando il criterio MaxPro.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize MaxPro Criterion;

```

#### Maximize Multimodel Std Dev

**Sintassi:** obj &lt;&lt; Maximize Multimodel Std Dev

**Descrizione:** Trova le impostazioni dei fattori che massimizzano la deviazione standard della previsione di risposta multipla.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Multimodel Std Dev;

```

#### Maximize Upper Confidence Bound

**Sintassi:** obj &lt;&lt; Maximize Upper Confidence Bound

**Descrizione:** Trova le impostazioni dei fattori per la previsione della desiderabilità bayesiana con il limite di confidenza superiore più alto. Questo criterio è spesso chiamato criterio UCB.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Upper Confidence Bound;

```

#### Restore Best Training Point

**Sintassi:** obj &lt;&lt; Restore Best Training Point

**Descrizione:** Restituisce le impostazioni dei fattori a quelle della riga di training con la massima desiderabilità osservata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;obj << Add Current Profiler Settings to Batch;obj << Restore Best Training Point;

```

## Bayesian Optimization Model Summary

### Messaggi degli elementi

#### All Responses Profiler

**Sintassi:** obj &lt;&lt; All Responses Profiler( state=0|1 )

**Descrizione:** Analizza come cambia ciascuna colonna rispetto alle modifiche del valore di ogni fattore sui modelli.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	All Responses Profiler( 1 ));

```

## Gaussian Process Model

### Messaggi degli elementi

#### Intercept

**Sintassi:** obj &lt;&lt; Intercept( number )

**Descrizione:** Specifica il valore da utilizzare come parametro di intercetta per la stima di un modello di processo gaussiano. Se vengono forniti tutti i valori di theta, nugget, residui e intercetta, i valori vengono trattati come fissi. Se viene fornito un set parziale di valori, i valori indicati vengono trattati come valori iniziali.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Nugget

**Sintassi:** obj &lt;&lt; Nugget( number )

**Descrizione:** Specifica il valore da utilizzare come nugget per la stima di un modello di processo gaussiano. Se vengono forniti tutti i valori di theta, nugget, residui e intercetta, i valori vengono trattati come fissi. Se viene fornito un set parziale di valori, i valori indicati vengono trattati come valori iniziali.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Profiler

**Sintassi:** obj &lt;&lt; Profiler( state=0|1 )

**Descrizione:** Analizza come cambia ciascuna colonna rispetto alle modifiche del valore di ogni fattore sui modelli.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab( Y( :MODULUS ), Profiler( 0 ) ));

```

#### Residual

**Sintassi:** obj &lt;&lt; Residual( number )

**Descrizione:** Specifica il valore da utilizzare come parametro residuo per la stima di un modello di processo gaussiano. Se vengono forniti tutti i valori di theta, nugget, residui e intercetta, i valori vengono trattati come fissi. Se viene fornito un set parziale di valori, i valori indicati vengono trattati come valori iniziali.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Starting Values

**Sintassi:** obj &lt;&lt; Starting Values( number )

**Descrizione:** Specifica i valori iniziali da utilizzare per la stima di un modello di processo gaussiano.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Starting Values(			Theta Values( {0.5, 0.5, 0.5} ),			Nugget( 0.05 ),			Residual( 500 ),			Intercept( 100 )		)	));

```

#### Theta Values

**Sintassi:** obj &lt;&lt; Theta Values( number )

**Descrizione:** Specifica i valori da utilizzare come parametri theta per la stima di un modello di processo gaussiano. Se vengono forniti tutti i valori di theta, nugget, residui e intercetta, i valori vengono trattati come fissi. Se viene fornito un set parziale di valori, i valori indicati vengono trattati come valori iniziali.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

