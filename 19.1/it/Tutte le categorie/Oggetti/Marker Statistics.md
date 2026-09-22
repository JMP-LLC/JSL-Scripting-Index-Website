# Marker Statistics



## Colonne

### By

**Sintassi:** obj &lt;&lt; By( column(s) )

**Descrizione:** Per ogni livello della colonna specificata, analizza e presenta i risultati in tabelle e report separati.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), By( :Sex ) );

```

### Grouping

**Sintassi:** obj &lt;&lt; Grouping( column(s) )

**Descrizione:** Analizza separatamente le righe assegnate a ciascun livello della colonna specificata. Tutti i risultati sono presentati in una singola tabella e in un report.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Grouping( :Sex ));

```

### Marker

**Sintassi:** obj &lt;&lt; Marker( column(s) )

**Descrizione:** Specifica le colonne che contengono marcatori genetici.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

### With Marker

**Sintassi:** obj &lt;&lt; With Marker( column(s) )

**Descrizione:** Specifica le colonne che contengono marcatori genetici per la stima appaiata del Linkage Disequilibrium con le colonne dei marcatori genetici specificati in Marcatori.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

## Costruttori associati

### Marker Statistics

**Sintassi:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**Descrizione:** Esegue analisi sui dati dei marcatori genetici per calcolare misure come la minore frequenza allelica, l&apos;equilibrio di Hardy-Weinberg e il Linkage Disequilibrium.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Copy Script;

```

### Counts Table

**Sintassi:** obj &lt;&lt; Counts Table( state=1 )

**Descrizione:** Mostra o nasconde la tabella dei conteggi per livelli di genotipo. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Counts Table( 1 ));obj << Counts Table( 0 );

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Timing;Show( t );

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

### LD Decay Plot

**Sintassi:** obj &lt;&lt; LD Decay Plot( state=1 )

**Descrizione:** Mostra o nasconde il diagramma del decadimento LD. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));obj << LD Decay Plot( 1 );

```

### Levels Table

**Sintassi:** obj &lt;&lt; Levels Table( state=1 )

**Descrizione:** Mostra o nasconde la tabella dei livelli di genotipo. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Levels Table( 1 ));obj << Levels Table( 0 );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Marker Format

**Sintassi:** obj = Marker Statistics(...Marker Format( "Numerico"|"A carattere singolo"|"Alfanumerico"|"Nucleotide a codice singolo"|"Nucleotide"="Numerico" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Offre opzioni per la scelta del formato dei genotipi: a carattere singolo (A, B, H), nucleotide a codice singolo (IUPAC: A,C,G,T,R,Y,S,W,K,M,+,0 ,-,N), Nucleotide (AA, CC, GG, TT, AC, AT, ecc.), Numerico (0, 1, 2, ..., p) e Alfanumerico (ApBp o Ap/Bp). Entrambi i formati numerico e alfanumerico gestiscono il genotipo con p-ploidia. "Numerico", per impostazione predefinita.

### Messaggi degli elementi condivisi

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### PValue Plot

**Sintassi:** obj &lt;&lt; PValue Plot( state=1 )

**Descrizione:** Mostra o nasconde il diagramma dei p-value. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << PValue Plot( 0 );

```

### PValues Table on Launch

**Sintassi:** obj = Marker Statistics(...PValues Table on Launch( state=0 )...)

**Descrizione:** Specifica se creare una tabella di dati p-value all&apos;avvio della piattaforma. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 17

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	PValues Table on Launch( 1 ),	Ploidy( 2 ));

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Ploidy

**Sintassi:** obj = Marker Statistics(...Ploidy( number=2 )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica un numero pari positivo che indica il livello di ploidia. "2", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));

```

### Recode Marker

**Sintassi:** obj &lt;&lt; Recode Marker

**Descrizione:** Ricodifica tutte le colonne dei marcatori selezionati nella tabella di dati originale scambiando gli alleli minori e maggiori.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	PValues Table on Launch( 1 ));obj << Select Where( Marker Annotation Position == 11 );obj << Recode Marker;

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Report View( "Summary" );

```

### Result Table

**Sintassi:** obj &lt;&lt; Result Table( state=1 )

**Descrizione:** Mostra la tabella dei risultati Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));obj << Result Table( 0 );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save ByGroup Script to Script Window;

```

### Save Counts Table

**Sintassi:** obj &lt;&lt; Save Counts Table

**Descrizione:** Salva i conteggi in una tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	PValues Table on Launch( 1 ));Show( obj << Save Counts Table );

```

### Save Levels Table

**Sintassi:** obj &lt;&lt; Save Levels Table

**Descrizione:** Salva i livelli in una tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	PValues Table on Launch( 1 ));Show( obj << Save Levels Table );

```

### Save Proportion of Missing Markers

**Sintassi:** obj &lt;&lt; Save Proportion of Missing Markers

**Descrizione:** Aggiunge una colonna alla tabella di dati originale che contiene la proporzione di genotipi mancanti

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Save Proportion of Missing Markers);

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));obj << Save Proportion of Missing Markers;

```

### Save Result Table

**Sintassi:** obj &lt;&lt; Save Result Table

**Descrizione:** Salva i risultati in una tabella di dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Save Result Table);

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));Show( obj << Save Result Table );

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script to Script Window;

```

### Select Columns

**Sintassi:** obj &lt;&lt; Select Columns

**Descrizione:** Seleziona le colonne nella tabella di dati originale che corrispondono alle righe selezionate nella tabella dei risultati.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	PValues Table on Launch( 1 ));obj << Select Where( Minor Allele Frequency >= 0.05 );obj << Select Columns;

```

### Select Where

**Sintassi:** obj &lt;&lt; Select Where

**Descrizione:** Seleziona elementi nella tabella del report che corrispondono a una particolare condizione.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	PValues Table on Launch( 1 ));obj << Select Where( Minor Allele Frequency >= 0.05 );

```

### Select and Recode Marker

**Sintassi:** obj &lt;&lt; Select and Recode Marker

**Descrizione:** Seleziona e ricodifica le colonne dei marcatori nella tabella di dati originale scambiando gli alleli minori e maggiori.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	PValues Table on Launch( 1 ));obj << Select and Recode Marker( Marker Annotation Position == 11 );

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Unthreaded

**Sintassi:** obj = Marker Statistics(...Unthreaded( state=0|1 )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Usa solo il thread principale per i calcoli

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Unthreaded( 1 ));

```

### Use Annotation Table

**Sintassi:** obj = Marker Statistics(...Use Annotation Table( state=0|1 )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Utilizza la tabella delle annotazioni che contiene il gruppo di annotazione del marcatore e la posizione.

```jsl

dt1 = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt2 = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree Anno.jmp" );dt1 << Marker Statistics(	Marker( Column Group( "Markers" ) ),	Use Annotation Table(		1,		dt2,		Marker Variables( :Marker ),		Annotation Group( :Gene ),		Annotation Position( :Physical Position ),		Go	),	Ploidy( 2 ));

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Marker Statistics(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

