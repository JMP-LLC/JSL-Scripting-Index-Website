# Factor Analysis



## Colonne

### Columns

**Sintassi:** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

### Freq

**Sintassi:** obj &lt;&lt; Freq( column )

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Freq( :_freqcol ));

```

### Weight

**Sintassi:** obj &lt;&lt; Weight( column )

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Weight( :_weightcol ));

```

### Y

**Sintassi:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

## Costruttori associati

### Factor Analysis

**Sintassi:** Factor Analysis( Y( columns ) )

**Descrizione:** Scopre la struttura sottostante dei dati estraendo variabili non osservate, o fattori, che rappresentano la variabilità comune tra le variabili osservate. La rotazione dei fattori è utilizzata per aumentarne l&apos;interpretabilità.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bartlett's Test of Sphericity

**Sintassi:** obj &lt;&lt; Bartlett&apos;s Test of Sphericity( state=0|1 )

**Descrizione:** Mostra o nasconde un report del test di omogeneità che determina se gli autovalori hanno varianze uguali.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Bartlett's Test of Sphericity( 1 );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Data Table Window;

```

### Eigenvalues

**Sintassi:** obj &lt;&lt; Eigenvalues( state=0|1 )

**Descrizione:** Mostra o nasconde una tabella degli autovalori della matrice originale di correlazione, covarianza o non scalata. La tabella include la percentuale della varianza totale rappresentata da ciascun autovalore, un grafico a barre che illustra il contributo percentuale e la percentuale cumulativa di contributo di ciascun autovalore successivo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << Eigenvalues( 0 );

```

### Fit

**Sintassi:** obj &lt;&lt; Fit( "PC"|"ML", "ONE"|"SMC", number, rotation method )

**Descrizione:** Stima un modello di analisi fattoriale utilizzando il metodo di scomposizione in fattori, la comunanza a priori, il numero di fattori e il metodo di rotazione specificati. I metodi di scomposizione in fattori disponibili sono Asse principale (PC) e Massima verosimiglianza (ML). È possibile impostare tutte le comunanze a priori uguali a uno (ONE) o uguali ai coefficienti di correlazione multipla quadratica (SMC). I metodi di rotazione disponibili sono Varimax, Biquartimax, Equamax, Fattoreparsimax, Ortomax, Parsimax, Quartimax, Biquartimin, Covarimin, Obbiquartimax, Obequamax, Obfactorparsimax, Oblimin, Obparsimax, Obquartimax, Obvarimax e Promax.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ));obj << Fit( "ML", "SMC", 2, "Varimax" );

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj &lt;&lt; Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Timing;Show( t );

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

### Kaiser-Meyer-Olkin Test

**Sintassi:** obj &lt;&lt; "Kaiser-Meyer-Olkin Test"n( state=0|1 )

**Descrizione:** Mostra o nasconde i risultati del test di Kaiser-Meyer-Olkin (KMO). Il test è un indicatore della proporzione di varianza che potrebbe essere una varianza comune, potenzialmente dovuta a fattori sottostanti.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << "Kaiser-Meyer-Olkin Test"n( 1 );

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Script Window;

```

### Scree Plot

**Sintassi:** obj &lt;&lt; Scree Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma a linee degli autovalori per ogni componente. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << Scree Plot( 0 );

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Variance Estimation

**Sintassi:** obj = Factor Analysis(...Variance Estimation( "REML"| "ML"| "Robust"| "Row-wise"| "Pairwise" )...)

**Descrizione:** Imposta il metodo di stima per il calcolo delle correlazioni.

Se non esistono valori mancanti, l&apos;impostazione di default è A livello di riga.

Se vi sono valori mancanti e il numero di variabili <= 10 e il numero di righe <=5000, l&apos;impostazione di default è REML.

Se sono presenti valori mancanti, il numero di variabili > 10 o il numero di righe > 5000, l&apos;impostazione di default è Appaiato.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "Robust" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

### Variance Scaling

**Sintassi:** obj = Factor Analysis(...Variance Scaling( "Correlations"| "Covariances"| "Unscaled")...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica il metodo utilizzato per lo scaling della varianza.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Factor Analysis(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Factor Analysis Fit Options

### Messaggi degli elementi

#### Arrow Lines

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Arrow Lines( state=0|1 ))

**Descrizione:** Mostra o nasconde le linee freccia nel grafico. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Arrow Lines( 0 ));

```

#### Copy Model Specification for SEM

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Copy Model Specification for SEM)

**Descrizione:** Copia le definizioni dei fattori negli Appunti. Si potranno poi incollare le definizioni dei fattori nella piattaforma SEM con dati indipendenti per confermare il modello.

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Factor Analysis(	Y( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit( "ML", "SMC", 1, "Varimax" ));obj << (Fit[1] << Copy Model Specification for SEM);obj2 = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ));obj2 << Paste Model Specification;

```

#### Eigenvalues

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Eigenvalues( state=0|1 ))

**Descrizione:** Mostra o nasconde gli autovalori della matrice di correlazione ridotta e la percentuale della varianza comune che essi rappresentano.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Eigenvalues( 1 ));

```

#### Factor Loading Plot

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Factor Loading Plot( state=0|1 ))

**Descrizione:** Mostra o nasconde un diagramma dei pesi fattoriali ruotati. Quando vengono modellati più di due fattori, il diagramma dei pesi fattoriali è una matrice di diagrammi. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Factor Loading Plot( 0 ));

```

#### Factor Structure

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Factor Structure( state=0|1 ))

**Descrizione:** Mostra o nasconde la matrice delle correlazioni tra variabili e fattori comuni. Questa opzione è disponibile solo per le rotazioni oblique. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Promax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Factor Structure( 0 ));

```

#### Final Communality Estimates

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Final Communality Estimates( state=0|1 ))

**Descrizione:** Mostra o nasconde le stime delle comunanze dopo la stima del modello fattoriale. Quando i fattori sono ortogonali, la stima di comunanza finale per una variabile è uguale alla somma dei pesi quadratici per quella variabile. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Final Communality Estimates( 0 ));

```

#### Interfactor Correlations

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Interfactor Correlations( state=0|1 ))

**Descrizione:** Mostra o nasconde la matrice delle correlazioni tra fattori. Questa opzione è disponibile solo per le rotazioni oblique.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Quartimin" ));obj << (Fit[1] << Interfactor Correlations( 1 ));

```

#### Measures of Factor Scores

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Measures of Factor Scores( state=0|1 ))

**Descrizione:** Mostra o nasconde le misure di determinatezza dello score fattoriale, inclusi gli score di R multiplo, R-quadro multiplo e Correlazione minima.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Measures of Factor Scores( 1 ));

```

#### Measures of Fit

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Measures of Fit( state=0|1 ))

**Descrizione:** Mostra o nasconde le misure di stima, incluso Chi-quadrato senza correzione di Bartlett, AIC, BIC, l&apos;indice di Tucker-Lewis e la radice dell&apos;errore quadratico medio di approssimazione. Questa opzione è disponibile solo quando si seleziona Massima verosimiglianza come metodo di scomposizione in fattori. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Measures of Fit( 0 ));

```

#### Prior Communality

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Prior Communality( state=0|1 ))

**Descrizione:** Mostra o nasconde una stima iniziale della comunanza per ogni variabile.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Prior Communality( 1 ));

```

#### Remove Fit

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Remove Fit)

**Descrizione:** Rimuove la stima specificata dal report.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Remove Fit);

```

#### Rotated Factor Loading

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Rotated Factor Loading( state=0|1 ))

**Descrizione:** Mostra o nasconde la matrice dei pesi fattoriali dopo la rotazione. Se la rotazione è ortogonale, questi valori sono le correlazioni tra le variabili e i fattori ruotati. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Rotated Factor Loading( 0 ));

```

#### Rotation Matrix

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Rotation Matrix( state=0|1 ))

**Descrizione:** Mostra o nasconde i valori utilizzati per ruotare il diagramma dei pesi fattoriali e la matrice dei pesi fattoriali.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Rotation Matrix( 1 ));

```

#### Save Factor Scores

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Factor Scores( state=0|1 ))

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Le nuove colonne contengono le formule per gli score dei fattori, che sono stimati utilizzando il metodo di Thurstone.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Save Factor Scores);

```

#### Save Factor Scores with Imputation

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Factor Scores with Imputation( state=0|1 ))

**Descrizione:** Salva nuove colonne della formula nella tabella di dati originale. Le nuove colonne contengono le formule per gli score dei fattori con valori imputati per i valori mancanti.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Factor Analysis(	Y( :CO, :SO2, :NO, :PM10 ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Save Factor Scores with Imputation);

```

#### Score Plot

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Plot( state=0|1 ))

**Descrizione:** Mostra o nasconde un grafico a dispersione degli score dei fattori stimati. Quando sono modellati più di due fattori, il diagramma degli score è una matrice di diagrammi.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax", Rotated Factor Loading( 0 ), Factor Loading Plot( 0 ) ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Score Plot( 1 ));

```

#### Score Plot with Imputation

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Plot with Imputation( state=0|1 ))

**Descrizione:** Mostra o nasconde un grafico a dispersione degli score dei fattori stimati con valori imputati per i valori mancanti.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Factor Analysis(	Y( :CO, :SO2, :NO, :PM10 ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax", Rotated Factor Loading( 0 ), Factor Loading Plot( 0 ) ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Score Plot with Imputation( 1 ));

```

#### Significance Test

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Significance Test( state=0|1 ))

**Descrizione:** Mostra o nasconde i risultati di due test di significatività. Il primo verifica l&apos;ipotesi nulla che non vi siano fattori comuni e il secondo l&apos;ipotesi nulla che un numero specificato di fattori sia sufficiente. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Significance Test( 0 ));

```

#### Standard Score Coefficients

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Standard Score Coefficients( state=0|1 ))

**Descrizione:** Mostra o nasconde una tabella dei moltiplicatori utilizzati per stimare gli score dei fattori quando si salvano i fattori ruotati nella tabella di dati di origine.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Standard Score Coefficients( 1 ));

```

#### Target Matrix

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Target Matrix( state=0|1 ))

**Descrizione:** Mostra o nasconde la matrice rispetto alla quale viene ruotato il pattern del fattore varimax. Questa opzione è disponibile solo per la rotazione Promax.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Promax" ));obj << (Fit[1] << Target Matrix( 1 ));

```

#### Unrotated Factor Loading

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Unrotated Factor Loading( state=0|1 ))

**Descrizione:** Mostra o nasconde la matrice dei pesi fattoriali prima della rotazione.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Unrotated Factor Loading( 1 ));

```

#### Unsorted and Rotated Factor Loading

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Unsorted and Rotated Factor Loading( state=0|1 ))

**Descrizione:** Mostra o nasconde la matrice dei pesi fattoriali non ordinati dopo la rotazione.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Unsorted and Rotated Factor Loading( 1 ));

```

#### Unsorted and Unrotated Factor Loading

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Unsorted and Unrotated Factor Loading( state=0|1 ))

**Descrizione:** Mostra o nasconde la matrice dei pesi fattoriali prima dell&apos;ordinamento e della rotazione.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Unsorted and Unrotated Factor Loading( 1 ));

```

#### Variance Explained by Each Factor

**Sintassi:** obj &lt;&lt; (Fit[number] &lt;&lt; Variance Explained by Each Factor( state=0|1 ))

**Descrizione:** Mostra o nasconde la varianza, percentuale e percentuale cumulativa della varianza comune spiegata per ciascun fattore ruotato. Questa opzione è disponibile solo per rotazioni ortogonali. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Variance Explained by Each Factor( 0 ));

```

