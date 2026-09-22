# Cumulative Damage



## Costruttori associati

### Cumulative Damage

**Sintassi:** Cumulative Damage

**Descrizione:** Analizza modelli varying stress e step stress.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));

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

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Data Table Window;

```

### Fit All

**Sintassi:** obj &lt;&lt; Fit All

**Descrizione:** Stima tutte le distribuzioni disponibili.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ),	Fit All);

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

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Results

**Sintassi:** obj &lt;&lt; Get Results

**Descrizione:** Carica i risultati disponibili come oggetti JSL.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ), );obj << Get Results;

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));t = obj << Get Timing;Show( t );

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

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Messaggi degli elementi condivisi

### Model Type

**Sintassi:** obj &lt;&lt; Model Type( Step Stress | Ramp Stress | Sinusoid Stress | Piecewise Ramp Stress )

**Descrizione:** Specifica il tipo di stress pattern per il modello di danno cumulativo. Questa opzione deve essere specificata nello script di avvio.

```jsl

/*See sample scripts in the following data tables.*/Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Ramp Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Sinusoid Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Piecewise Ramp Stress.jmp" );

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

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Relaunch Analysis;

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

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Report View( "Summary" );

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Save Script to Script Window;

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

### Simulate

**Sintassi:** obj &lt;&lt; Simulate

**Descrizione:** Mostra/nasconde il riquadro Configurazione della simulazione.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ),	Simulate);

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

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

