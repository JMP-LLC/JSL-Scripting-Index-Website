# Process Capability



## Colonne

### By

**Sintassi:** obj = Process Capability(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Grouping

**Sintassi:** obj = Process Capability( Process Variables( columns), Grouping( columns) )

**Descrizione:** Specifica le colonne come variabili di raggruppamento.

**Esempio 1**

```jsl

dtLimits = Open( "$SAMPLE_DATA/Cheese Manufacturing Limits.jmp" );dt = Open( "$SAMPLE_DATA/Cheese Manufacturing Data.jmp" );dt << Process Capability(	Process Variables( :pH, :Salt Concentration, :Moisture Content ),	Grouping( :Cheese Type ),	Spec Limits( Use Limits Table( dtLimits ) ),	Moving Range Method( Average of Moving Ranges ),	Goal Plot( 1 ),	Capability Index Plot( 1 ),	Process Performance Plot( 0 ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :NPN1[:lot_id], :PNP1[:lot_id], :PNP2[:lot_id] ),	Grouping( :site ));

```

### Process Variables

**Sintassi:** obj = Process Capability(...Process Variables( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne dei dati di processo che contengono le misure da analizzare.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));

```

## Costruttori associati

### Process Capability

**Sintassi:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**Descrizione:** Calcola un&apos;analisi di capability del processo per ciascun processo e crea grafici utili per l&apos;analisi di capability di più processi contemporaneamente. È anche possibile definire i limiti di specifica.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));

```

## Messaggi degli elementi

### AIAG (Ppk) Labeling

**Sintassi:** obj &lt;&lt; "AIAG (Ppk) Labeling"n( state=0|1 )

**Descrizione:** Attiva o disattiva l&apos;etichettatura AIAG degli indici di capability modificando l&apos;etichetta "Cp" in "Pp". Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer] ));obj << Individual Detail Reports( 1 );Wait( 1 );obj << "AIAG (Ppk) Labeling"n( 0 );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Capability Box Plots

**Sintassi:** obj &lt;&lt; Capability Box Plots( state=0|1 )

**Descrizione:** Mostra o nasconde un box plot per ciascun processo. Per creare i box plot, i valori per ciascun processo sono centrati dal rispettivo target e scalati dei rispettivi limiti di specifica. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ));Wait( 1 );obj << Capability Box Plots( 1 );

```

### Capability Index Plot

**Sintassi:** obj &lt;&lt; Capability Index Plot( state=0|1, &lt;plot options&gt; )

**Descrizione:** Mostra o nasconde un grafico che traccia il Ppk generale per ciascun processo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1 & Dist( Lognormal ), :Process 2 & Dist( Lognormal ),		:Process 3 & Dist( Weibull ), :Process 4 & Dist( Lognormal ),		:Process 5 & Dist( Weibull ), :Process 6 & Dist( Johnson ), :Process 7	),	Capability Index Plot( 0 ),	Goal Plot( 0 ));Wait( 1 );obj << Capability Index Plot( 1 );

```

### Color Out of Spec Values

**Sintassi:** obj &lt;&lt; Color Out of Spec Values( state=0|1 )

**Descrizione:** Colora le celle della tabella di dati per i valori al di fuori dei limiti specificati. Le celle con valori al di sotto dei limiti di specifica inferiori (LSL) sono colorate in rosso e le celle con valori al di sopra dei limiti di specifica superiori (USL) sono colorate in blu.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Color Out of Spec Values( 1 );

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Limits

**Sintassi:** obj = Process Capability(...Spec Limits(Get Limits( data table ) )...)

**Descrizione:** Carica i limiti di specifica da una tabella di dati dei limiti.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Get Limits( dt2 ) ));

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Timing;Show( t );

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

### Goal Plot

**Sintassi:** obj &lt;&lt; Goal Plot( state=0|1, &lt;plot options&gt; )

**Descrizione:** Mostra o nasconde un grafico con un punto per ogni processo. La media normalizzata alle specifiche è sull&apos;asse orizzontale e la deviazione standard normalizzata alle specifiche è sull&apos;asse verticale. I punti visualizzati al di sopra dell&apos;arco della porta rappresentano processi che sono al di sotto della soglia Ppk (Cpk) specificata. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Goal Plot( 0 ));Wait( 1 );obj << Goal Plot( 1 );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Individual Detail Reports

**Sintassi:** obj &lt;&lt; Individual Detail Reports( state=0|1 )

**Descrizione:** Mostra/Nasconde un report di capability dei dettagli individuali separato per ciascun processo.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Individual Detail Reports( 1 );

```

### Individual Detail Reports Cutoff

**Sintassi:** obj &lt;&lt; Individual Detail Reports Cutoff( number=1 )

**Descrizione:** Mostra i report dei dettagli individuali e nasconde il diagramma dei pali e i box plot di capability se il numero delle variabili di processo è minore o uguale al valore di cutoff. "1", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Individual Detail Reports Cutoff( 7 );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Make Goal Plot Summary Table

**Sintassi:** obj &lt;&lt; Make Goal Plot Summary Table

**Descrizione:** Crea una nuova tabella di dati che contiene le coordinate sia dei punti entro che generali rappresentati nel diagramma dei pali.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Make Goal Plot Summary Table;

```

### Messaggi degli elementi condivisi

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Order By

**Sintassi:** obj &lt;&lt; Order By( "Ordine iniziale"|"Inverti l&apos;ordine iniziale"|"Cpk entro Sigma crescente"|"Cpk entro Sigma decrescente"|"Ppk Sigma generale crescente"|"Ppk Sigma generale decrescente" )

**Descrizione:** Riordina tutti i box plot, i report di riepilogo e i report dettagliati individuali nell&apos;ordine specificato.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Within Sigma Summary Report( 1 );Wait( 1 );obj << Order By( "Within Sigma Cpk Ascending" );

```

### Overall Sigma Normalized Box Plots

**Sintassi:** obj &lt;&lt; Overall Sigma Normalized Box Plots( state=0|1 )

**Descrizione:** Mostra o nasconde un box plot per ogni processo. I valori dei box plot sono centrati rispetto alla media generale e scalati della stima generale della deviazione standard.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Overall Sigma Normalized Box Plots( 1 );

```

### Overall Sigma Summary Report

**Sintassi:** obj &lt;&lt; Overall Sigma Summary Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report di riepilogo degli indici di capability. Gli indici di capability sono calcolati utilizzando la stima generale della deviazione standard.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Overall Sigma Summary Report( 1 );

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Process Performance Plot

**Sintassi:** obj &lt;&lt; Process Performance Plot( state=0|1, &lt;plot options&gt; )

**Descrizione:** Mostra o nasconde un diagramma a quattro quadranti della capability Ppk generale in funzione della stabilità.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ),);obj << Process Performance Plot( 1 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Distributions as Column Properties

**Sintassi:** obj &lt;&lt; Save Distributions as Column Properties

**Descrizione:** Salva la distribuzione utilizzata per calcolare la capability come proprietà della colonna Distribuzione di capability del processo. Per ogni variabile di processo dell&apos;analisi viene salvata una proprietà della colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE & Dist( Johnson ), :CO, :SO2 & Dist( Lognormal ), :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Save Distributions as Column Properties;

```

### Save In Spec Indicator Formulas

**Sintassi:** obj &lt;&lt; Save In Spec Indicator Formulas

**Descrizione:** Crea una nuova colonna della formula nella tabella di dati. La nuova colonna contiene un valore che indica se una riga rientra o meno nei limiti di specifica.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save In Spec Indicator Formulas;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Script Window;

```

### Save Spec Limits as Column Properties

**Sintassi:** obj &lt;&lt; Save Spec Limits as Column Properties

**Descrizione:** Salva i limiti di specifica in una proprietà della colonna per ogni variabile di processo dell&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Save Spec Limits as Column Properties;

```

### Save Spec Limits to New Table

**Sintassi:** obj &lt;&lt; Save Spec Limits to New Table

**Descrizione:** Crea una nuova tabella di dati che contiene i limiti di specifica, l&apos;importanza del processo e le distribuzioni per ciascuna variabile di processo. La tabella è in un formato verticale e contiene una riga per ogni variabile di processo. L&apos;importanza del processo e il tipo di distribuzioni sono salvati solo ove applicabile.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Spec Limits to New Table;

```

### Select Out of Spec Values

**Sintassi:** obj &lt;&lt; Select Out of Spec Values( state=0|1 )

**Descrizione:** Seleziona tutte le righe e le colonne della tabella di dati che contengono almeno un valore che non rientra nei limiti di specifica.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Select Out of Spec Values( 1 );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Use Limits Table

**Sintassi:** obj = Process Capability(...Spec Limits(Use Limits Table( data table ) )...)

**Descrizione:** Carica i limiti di specifica da una tabella di dati dei limiti.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Use Limits Table( dt2 ) ));

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Process Capability(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### Within Sigma Normalized Box Plots

**Sintassi:** obj &lt;&lt; Within Sigma Normalized Box Plots( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico contenente un box plot per ogni processo. I valori dei box plot sono centrati rispetto alla media e divisi per la stima della deviazione standard all&apos;interno del sottogruppo.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Within Sigma Normalized Box Plots( 1 );

```

### Within Sigma Summary Report

**Sintassi:** obj &lt;&lt; Within Sigma Summary Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report di riepilogo degli indici di capability. Gli indici di capability sono calcolati utilizzando la stima della deviazione standard all&apos;interno del sottogruppo. I risultati sono mostrati solo per le variabili con distribuzioni normali specificate.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Within Sigma Summary Report( 1 );

```

### Within or Between-and-Within Sigma Normalized Box Plots

**Sintassi:** obj &lt;&lt; "Within or Between-and-Within Sigma Normalized Box Plots"n( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico contenente un box plot per ogni processo. I valori dei box plot sono centrati rispetto alla media e divisi per la stima della deviazione standard entro il gruppo o, se specificato, la stima tra ed entro Sigma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( 1 );

```

### Within or Between-and-Within Sigma Summary Report

**Sintassi:** obj &lt;&lt; "Within or Between-and-Within Sigma Summary Report"n( state=0|1 )

**Descrizione:** Mostra o nasconde un report di riepilogo degli indici di capability. Gli indici di capability sono calcolati utilizzando la stima della deviazione standard all&apos;interno del gruppo o, se specificato, la stima tra i gruppi ed entro il gruppo. Questa opzione è disponibile solo quando l&apos;opzione Calcola capability tra ed entro è selezionata per almeno un processo nella finestra di avvio.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << "Within or Between-and-Within Sigma Summary Report"n( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons > Process Capability Probability Plots

### Messaggi degli elementi

#### Parametric Fit Confidence Limits Shading

**Sintassi:** scrobj &lt;&lt; Parametric Fit Confidence Limits Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di confidenza della stima parametrica.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots(				1,				Lognormal Probability Plot( Parametric Fit Confidence Limits Shading( 1 ) )			)		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Parametric Fit Confidence Limits Shading( 0 );

```

#### Parametric Fit Line

**Sintassi:** scrobj &lt;&lt; Parametric Fit Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea per la stima parametrica. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots( 1, Lognormal Probability Plot( Parametric Fit Line( 0 ) ) )		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Parametric Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Sintassi:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits( state=0|1 )

**Descrizione:** Mostra/nasconde i limiti di confidenza simultanei empirici. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots(				1,				Lognormal Probability Plot( Simultaneous Empirical Confidence Limits( 0 ) )			)		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Sintassi:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di confidenza simultanei empirici. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots(				1,				Lognormal Probability Plot(					Simultaneous Empirical Confidence Limits Shading( 0 )				)			)		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons

### Messaggi degli elementi

#### Comparison Details

**Sintassi:** scrobj &lt;&lt; Comparison Details( state=0|1 )

**Descrizione:** Mostra o nasconde un report contenente i valori AICc, BIC e -2 Log verosimiglianza per ciascuna distribuzione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Normal,			<<Fit Gamma,			<<Fit Johnson,			<<Fit Lognormal,			<<Fit Weibull,			Comparison Details( 0 )		)	)});Wait( 1 );scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;scrobj << Comparison Details( 1 );

```

#### Comparison Histogram

**Sintassi:** scrobj &lt;&lt; Comparison Histogram( state=0|1 )

**Descrizione:** Mostra/nasconde l&apos;istogramma di confronto delle distribuzioni. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Normal,			<<Fit Gamma,			<<Fit Johnson,			<<Fit Lognormal,			<<Fit Weibull,			Comparison Histogram( 0 )		)	)});Wait( 1 );scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;scrobj << Comparison Histogram( 1 );

```

#### Fit Beta

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Beta )

**Descrizione:** Mostra le statistiche della stima di distribuzione beta nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE ),	Spec Limits( OZONE( LSL( 0.05 ), Target( 0.15 ), USL( 0.4 ) ) ),	Individual Detail Reports( 1 ),	{:OZONE << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["OZONE Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Beta );

```

#### Fit Exponential

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Exponential )

**Descrizione:** Mostra le statistiche della stima di distribuzione esponenziale nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Exponential );

```

#### Fit Gamma

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Gamma )

**Descrizione:** Mostra le statistiche della stima di distribuzione gamma nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Gamma );

```

#### Fit Johnson

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Johnson )

**Descrizione:** Mostra le statistiche della stima di distribuzione di Johnson nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Johnson );

```

#### Fit Largest Extreme Value

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Largest Extreme Value )

**Descrizione:** Mostra le statistiche della stima di distribuzione del valore estremo massimo nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value );

```

#### Fit Lognormal

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Lognormal )

**Descrizione:** Mostra le statistiche della stima di distribuzione lognormale nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

#### Fit Nonparametric

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Nonparametric )

**Descrizione:** Mostra lo slider bandwidth kernel della distribuzione non parametrica e la curva di densità nell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Nonparametric );

```

#### Fit Normal

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Normal )

**Descrizione:** Mostra le statistiche della stima di distribuzione normale nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});

```

#### Fit SHASH

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit SHASH )

**Descrizione:** Mostra le statistiche della stima di distribuzione SHASH nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit SHASH );

```

#### Fit Smallest Extreme Value

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Smallest Extreme Value )

**Descrizione:** Mostra le statistiche della stima di distribuzione del valore estremo minimo nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value );

```

#### Fit Weibull

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Weibull )

**Descrizione:** Mostra le statistiche della stima di distribuzione di Weibull nel report dei dettagli di confronto e la curva di densità nell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Weibull );

```

#### Mixture of 2 Normals

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Mixture of 2 Normals )

**Descrizione:** Mostra le statistiche della stima di distribuzione della miscela di 2 distribuzioni normali nel report di dettagli di confronto e la curva di densità nell&apos;istogramma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Mixture of 2 Normals );

```

#### Mixture of 3 Normals

**Sintassi:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Mixture of 3 Normals )

**Descrizione:** Mostra le statistiche della stima di distribuzione della miscela di 3 distribuzioni normali nel report di dettagli di confronto e la curva di densità nell&apos;istogramma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Mixture of 3 Normals );

```

#### Order by Comparison Criterion

**Sintassi:** scrobj &lt;&lt; Order by Comparison Criterion( "AICc"|"BIC"|"-2Loglikelihood" )

**Descrizione:** Riordina il report dei dettagli di confronto. Può essere riordinato per AICc, BIC o -2 Log verosimiglianza.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1, <<Fit Normal, <<Fit Gamma, <<Fit Johnson, <<Fit Lognormal, <<Fit Weibull,		)	)});Wait( 1 );scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);scrobj << Order by Comparison Criterion( "-2Loglikelihood" );

```

#### Probability Plots

**Sintassi:** scrobj &lt;&lt; Probability Plots( state=0|1 )

**Descrizione:** Mostra/nasconde i grafici delle probabilità di confronto delle distribuzioni.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal, <<Fit Lognormal ) )});Wait( 1 );scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);scrobj << Probability Plots( 1 );

```

## Process Capability Analysis > Process Capability Analysis Histogram

### Messaggi degli elementi

#### Show Between-and-Within Sigma Density

**Sintassi:** scrobj &lt;&lt; "Show Between-and-Within Sigma Density"n( state=0|1 )

**Descrizione:** Mostra o nasconde la curva di densità che utilizza Tra ed entro Sigma nell&apos;istogramma. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Within Subgroup Variation( Average of Unbiased Standard Deviations ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		Histogram( 1, "Show Between-and-Within Sigma Density"n( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << "Show Between-and-Within Sigma Density"n( 1 );

```

#### Show Count Axis

**Sintassi:** scrobj &lt;&lt; Show Count Axis( state=0|1 )

**Descrizione:** Mostra o nasconde un asse di conteggio a destra del riquadro degli istogrammi.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Count Axis( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Count Axis( 1 );

```

#### Show Density Axis

**Sintassi:** scrobj &lt;&lt; Show Density Axis( state=0|1 )

**Descrizione:** Mostra o nasconde un asse di densità a destra del riquadro degli istogrammi.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Density Axis( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Density Axis( 1 );

```

#### Show Overall Sigma Density

**Sintassi:** scrobj &lt;&lt; Show Overall Sigma Density( state=0|1 )

**Descrizione:** Mostra o nasconde la curva di densità che utilizza Sigma generale nell&apos;istogramma. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis(		Histogram( 1, Show Overall Sigma Density( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Overall Sigma Density( 1 );

```

#### Show Spec Limits

**Sintassi:** scrobj &lt;&lt; Show Spec Limits( state=0|1 )

**Descrizione:** Mostra o nasconde i limiti di specifica inferiori e superiori nell&apos;istogramma. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Spec Limits( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Spec Limits( 1 );

```

#### Show Target

**Sintassi:** scrobj &lt;&lt; Show Target( state=0|1 )

**Descrizione:** Mostra o nasconde la linea target nell&apos;istogramma. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Target( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Target( 1 );

```

#### Show Within Sigma Density

**Sintassi:** scrobj &lt;&lt; Show Within Sigma Density( state=0|1 )

**Descrizione:** Mostra o nasconde la curva di densità che utilizza entro Sigma nell&apos;istogramma. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis(		Histogram( 1, Show Within Sigma Density( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Within Sigma Density( 1 );

```

## Process Capability Analysis > Process Capability Interactive Plot

### Messaggi degli elementi

#### Capability

**Sintassi:** scrobj &lt;&lt; Capability( state=0|1 )

**Descrizione:** Mostra o nasconde gli indici di capability. Gli indici di capability originali sono basati su Sigma generale. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, Capability( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Capability( 1 );

```

#### Nonconformance

**Sintassi:** scrobj &lt;&lt; Nonconformance( state=0|1 )

**Descrizione:** Mostra o nasconde non conformità. I valori originali delle non conformità si basano su sigma complessivo. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, Nonconformance( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Nonconformance( 1 );

```

#### Revert to Original Values

**Sintassi:** scrobj &lt;&lt; Revert to Original Values

**Descrizione:** Ripristina il grafico di capability interattivo ai valori originali.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, New Values( Mean( 400 ) ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Revert to Original Values;

```

#### Save New Spec Limits as a Column Property

**Sintassi:** scrobj &lt;&lt; Save New Spec Limits as a Column Property

**Descrizione:** Salva i nuovi limiti di specifica come proprietà di una colonna nella tabella di dati originale.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, New Values( LSL( 150 ), Target( 300 ), USL( 450 ) ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Save New Spec Limits as a Column Property;

```

## Process Capability Analysis > Process Capability Normal Probability Plot

### Messaggi degli elementi

#### Normal Fit Confidence Limits Shading

**Sintassi:** scrobj &lt;&lt; Normal Fit Confidence Limits Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di confidenza della stima normale nel grafico delle probabilità normale. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Normal Fit Confidence Limits Shading( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Normal Fit Confidence Limits Shading( 1 );

```

#### Normal Fit Line

**Sintassi:** scrobj &lt;&lt; Normal Fit Line( state=0|1 )

**Descrizione:** Mostra o nasconde la stima lineare normale nel grafico delle probabilità normale. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Normal Fit Line( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Normal Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Sintassi:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits( state=0|1 )

**Descrizione:** Mostra o nasconde i limiti di confidenza simultanei empirici nel grafico delle probabilità normale nel report di capability del processo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Sintassi:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di confidenza simultanei empirici nel grafico delle probabilità normale nel report di capability del processo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits Shading( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis

### Messaggi degli elementi

#### Between-and-Within Sigma Capability

**Sintassi:** scrobj &lt;&lt; "Between-and-Within Sigma Capability"n( state=0|1 )

**Descrizione:** Mostra o nasconde gli indici di capability che usano Tra ed entro Sigma. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		"Between-and-Within Sigma Capability"n( 0 )	)});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << Get Scriptable Object;scrobj << "Between-and-Within Sigma Capability"n( 1 );

```

#### Between-and-Within Sigma Target Index

**Sintassi:** scrobj &lt;&lt; "Between-and-Within Sigma Target Index"n( state=0|1 )

**Descrizione:** Mostra o nasconde una stima dell&apos;indice target basata sia sul sigma interno che sul sigma tra gruppi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		"Between-and-Within Sigma Target Index"n( 1 )	)});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << "Between-and-Within Sigma Target Index"n( 0 );

```

#### Between-and-Within Sigma Z Benchmark

**Sintassi:** scrobj &lt;&lt; "Between-and-Within Sigma Z Benchmark"n( state=0|1 )

**Descrizione:** Mostra o nasconde gli indici Benchmark Z che usano Tra ed entro Sigma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		"Between-and-Within Sigma Z Benchmark"n( 0 )	)});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << "Between-and-Within Sigma Z Benchmark"n( 1 );

```

#### Compare Distributions

**Sintassi:** scrobj &lt;&lt; Compare Distributions( state=0|1, &lt; &lt;&lt;distribution options &gt; )

**Descrizione:** Mostra/nasconde il pannello di controllo per il confronto delle distribuzioni per il processo.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis( Compare Distributions( 0 ) )});Wait( 1 );scrobj = Report( obj )["Process 1(Lognormal) Capability"] << get scriptable object;scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit SHASH );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = Report( obj )["Process 1(Lognormal) Capability"] << Get Scriptable Object;scrobj << Compare Distributions(	1, <<Fit Gamma, <<Fit Johnson, <<FitLognormal, <<Fit Weibull);

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis(		Compare Distributions( 1, <<Fit Normal, <<Fit Gamma )	)});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 0 );

```

#### Fix Parameters

**Sintassi:** scrobj &lt;&lt; Fix Parameters( vector )

**Descrizione:** Fissa alcuni parametri ai valori specificati e stima di nuovo gli altri.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Weibull ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Weibull )) <<	Process Capability Analysis( Fix Parameters( [11, .] ) )});Wait( 1 );scrobj = Report( obj )["Process 1(Weibull*) Capability"] << get scriptable object;scrobj << Fix Parameters( [., .] );

```

#### Histogram

**Sintassi:** scrobj &lt;&lt; Histogram( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;istogramma dei dati di processo nel report dei dettagli individuali. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Histogram( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Histogram( 1 );

```

#### Interactive Capability Plot

**Sintassi:** scrobj &lt;&lt; Interactive Capability Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un report di capability interattivo che consente di esplorare come le modifiche al processo o ai limiti di specifica influiscono sulla capability.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis( Interactive Capability Plot( 0 ) )});Wait( 1 );scrobj = Report( obj )["PNP1 Capability"] << get scriptable object;scrobj << Interactive Capability Plot( 1 );

```

#### Nonconformance

**Sintassi:** scrobj &lt;&lt; Nonconformance( state=0|1 )

**Descrizione:** Mostra o nasconde un report sulla percentuale di osservazioni osservate e previste che non rientrano nei limiti di specifica. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Nonconformance( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Nonconformance( 1 );

```

#### Nonparametric Density

**Sintassi:** scrobj &lt;&lt; Nonparametric Density( state=0|1 )

**Descrizione:** Mostra o nasconde il report Densità non parametrica, che fornisce la bandwidth kernel utilizzata per stimare la distribuzione non parametrica. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Purity & Dist( Nonparametric ) ),	Individual Detail Reports( 1 ),	{(:Purity & Dist( Nonparametric )) <<	Process Capability Analysis( Nonparametric Density( 0 ) )});Wait( 1 );scrobj = Report( obj )["Purity(Nonparametric) Capability"] << get scriptable object;scrobj << Nonparametric Density( 1 );

```

#### Normal Probability Plot

**Sintassi:** scrobj &lt;&lt; Normal Probability Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico delle probabilità normale.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),);Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Normal Probability Plot( 1 );

```

#### Overall Sigma Capability

**Sintassi:** scrobj &lt;&lt; Overall Sigma Capability( state=0|1 )

**Descrizione:** Mostra o nasconde gli indici di capability basati su Sigma generale. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Capability( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Overall Sigma Capability( 1 );

```

#### Overall Sigma Z Benchmark

**Sintassi:** scrobj &lt;&lt; Overall Sigma Z Benchmark( state=0|1 )

**Descrizione:** Mostra o nasconde gli indici Benchmark Z basati su Sigma generale.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Z Benchmark( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Overall Sigma Z Benchmark( 1 );

```

#### Parameter Estimates

**Sintassi:** scrobj &lt;&lt; Parameter Estimates( state=0|1 )

**Descrizione:** Mostra/nasconde il report di stima dei parametri per distribuzioni parametriche non normali. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Thickness & Dist( Johnson ) ),	Individual Detail Reports( 1 ),	{(:Thickness & Dist( Johnson )) <<	Process Capability Analysis( Parameter Estimates( 0 ) )});Wait( 1 );scrobj = Report( obj )["Thickness(Johnson) Capability"] << get scriptable object;scrobj << Parameter Estimates( 1 );

```

#### Process Summary

**Sintassi:** scrobj &lt;&lt; Process Summary( state=0|1 )

**Descrizione:** Mostra o nasconde  le statistiche di riepilogo del processo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Process Summary( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Process Summary( 1 );

```

#### Within Sigma Capability

**Sintassi:** scrobj &lt;&lt; Within Sigma Capability( state=0|1 )

**Descrizione:** Mostra o nasconde gli indici di capability e i rispettivi intervalli di confidenza basati sul sigma interno. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Within Sigma Capability( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Within Sigma Capability( 1 );

```

#### Within Sigma Target Index

**Sintassi:** scrobj &lt;&lt; Within Sigma Target Index( state=0|1 )

**Descrizione:** Mostra o nasconde una stima dell&apos;indice target basata sul sigma interno.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Within Sigma Target Index( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Within Sigma Target Index( 1 );

```

#### Within Sigma Z Benchmark

**Sintassi:** scrobj &lt;&lt; Within Sigma Z Benchmark( state=0|1 )

**Descrizione:** Mostra o nasconde gli indici Benchmark Z basati su entro Sigma.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Within Sigma Z Benchmark( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Within Sigma Z Benchmark( 1 );

```

## Process Capability Goal Plot

### Messaggi degli elementi

#### Capability Lines

**Sintassi:** obj &lt;&lt; Goal Plot( 1, Capability Lines( number=1.0 ) ); scrobj &lt;&lt; Capability Lines( number=1.0 )

**Descrizione:** Imposta il valore Ppk (Cpk) che controlla le linee obiettivo del triangolo nel diagramma dei pali. Questo valore compare anche nella finestra di modifica Ppk (Cpk). "1.0", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Capability Lines( 1.5 ) );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);Wait( 1 );scrobj << Capability Lines( 1 );

```

#### Defect Rate Contour

**Sintassi:** obj &lt;&lt; Goal Plot( 1, Defect Rate Contour( number=0.0001 ) ); scrobj &lt;&lt; Defect Rate Contour( number=0.0001 )

**Descrizione:** Mostra o nasconde il profilo isometrico del tasso di difetti specificato. "0.0001", per impostazione predefinita.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Defect Rate Contour( 0.01 ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Defect Rate Contour( 0.01 );

```

#### Label Overall Sigma Points

**Sintassi:** obj &lt;&lt; Goal Plot( 1, Label Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Overall Sigma Points( state=0|1 )

**Descrizione:** Mostra o nasconde le etichette dei punti sul diagramma dei pali. I punti vengono calcolati utilizzando la stima Sigma generale.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Label Overall Sigma Points( 0 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Label Overall Sigma Points( 1 );

```

#### Label Within Sigma Points

**Sintassi:** obj &lt;&lt; Goal Plot( 1, Label Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Within Sigma Points( state=0|1 )

**Descrizione:** Mostra o nasconde le etichette dei punti sul diagramma dei pali. I punti vengono calcolati utilizzando la stima entro Sigma.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),);obj << Goal Plot(	1,	Show Within Sigma Points( 1 ),	Show Overall Sigma Points( 0 ),	Label Within Sigma Points( 1 ));Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Sintassi:** obj &lt;&lt; Goal Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Descrizione:** Mostra o nasconde le etichette dei punti sul diagramma dei pali. I punti vengono calcolati utilizzando la stima entro Sigma o, se specificato, la stima tra ed entro Sigma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),);obj << Goal Plot(	1,	"Show Within or Between-and-Within Sigma Points"n( 1 ),	Show Overall Sigma Points( 0 ),	"Label Within or Between-and-Within Sigma Points"n( 1 ));Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Sintassi:** obj &lt;&lt; Goal Plot( 1, Shade Levels( state=0|1 ) ); scrobj &lt;&lt; Shade Levels( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;ombreggiatura del livello Ppk (Cpk) nel diagramma dei pali. Se p rappresenta l&apos;obiettivo Ppk (Cpk) immesso nella finestra di modifica, i processi con Ppk (Cpk) maggiore di 2\*p sono ombreggiati in verde; i processi con Ppk (Cpk) minore di p sono ombreggiati in rosso; i processi con Ppk (Cpk) maggiore di p e minore di 2\*p sono ombreggiati in giallo.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Shade Levels( 1 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Sintassi:** obj &lt;&lt; Goal Plot( 1, Show Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Overall Sigma Points( state=0|1 )

**Descrizione:** Mostra o nasconde i punti sul diagramma dei pali. I punti vengono calcolati utilizzando la stima Sigma generale. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),);Wait( 1 );obj << Goal Plot( 1, Show Overall Sigma Points( 0 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Sintassi:** obj &lt;&lt; Goal Plot( 1, Show Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Within Sigma Points( state=0|1 )

**Descrizione:** Mostra o nasconde i punti sul diagramma dei pali. I punti vengono calcolati utilizzando la stima entro Sigma.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 1 );obj << Goal Plot( 1, Show Within Sigma Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Sintassi:** obj &lt;&lt; Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Descrizione:** Mostra o nasconde i punti sul diagramma dei pali. I punti vengono calcolati utilizzando la stima entro Sigma o, se specificato, la stima tra ed entro Sigma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 1 );obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Index Plot

### Messaggi degli elementi

#### Capability Lines

**Sintassi:** obj &lt;&lt; Capability Index Plot( 1, Capability Lines( number=1.0 ) ); scrobj &lt;&lt; Capability Lines( number=1.0 )

**Descrizione:** Imposta il valore Ppk (Cpk) che controlla la linea di riferimento Ppk (Cpk) nel diagramma dell&apos;indice di capability. Questo valore compare anche nella finestra di modifica Ppk (Cpk). "1.0", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1 & Dist( Johnson ), :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal )	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Capability Lines( 2.0 ) );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);Wait( 1 );scrobj << Capability Lines( 1.0 );

```

#### Label Overall Sigma Points

**Sintassi:** obj &lt;&lt; Capability Index Plot( 1, Label Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Overall Sigma Points( state=0|1 )

**Descrizione:** Mostra o nasconde le etichette dei punti sul diagramma dell&apos;indice di capability. I punti vengono calcolati utilizzando la stima Sigma generale.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Label Overall Sigma Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Label Overall Sigma Points( 0 );

```

#### Label Within Sigma Points

**Sintassi:** obj &lt;&lt; Capability Index Plot( 1, Label Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Within Sigma Points( state=0|1 )

**Descrizione:** Mostra o nasconde le etichette dei punti sul diagramma dell&apos;indice di capability. I punti vengono calcolati utilizzando la stima entro Sigma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Moving Range Method( Average of Moving Ranges ),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot(	1,	Show Within Sigma Points( 1 ),	Label Within Sigma Points( 1 ));Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Sintassi:** obj &lt;&lt; Capability Index Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Descrizione:** Mostra o nasconde le etichette dei punti sul diagramma dell&apos;indice di capability. I punti vengono calcolati utilizzando la stima entro Sigma o, se specificato, la stima tra ed entro Sigma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot(	1,	"Show Within or Between-and-Within Sigma Points"n( 1 ),	"Label Within or Between-and-Within Sigma Points"n( 1 ));Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Sintassi:** obj &lt;&lt; Capability Index Plot( 1, Shade Levels( state=0|1 ) ); scrobj &lt;&lt; Shade Levels( state=0|1 )

**Descrizione:** Mostra/nasconde l&apos;ombreggiatura del livello Ppk (Cpk) nel diagramma dell&apos;indice di capability. Se p rappresenta il valore Ppk (Cpk) immesso nella finestra di modifica, i processi con Ppk (Cpk) maggiore di 2\*p sono ombreggiati in verde; i processi con Ppk (Cpk) minore di p sono ombreggiati in rosso; i processi con Ppk (Cpk) maggiore di p e minore di 2\*p sono ombreggiati in giallo.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Shade Levels( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Sintassi:** obj &lt;&lt; Capability Index Plot( 1, Show Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Overall Sigma Points( state=0|1 )

**Descrizione:** Mostra o nasconde i punti sul diagramma dell&apos;indice di capability. I punti vengono calcolati utilizzando la stima Sigma generale. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot(	1,	Show Within Sigma Points( 1 ),	Show Overall Sigma Points( 0 ));Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Sintassi:** obj &lt;&lt; Capability Index Plot( 1, Show Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Within Sigma Points( state=0|1 )

**Descrizione:** Mostra o nasconde i punti sul diagramma dell&apos;indice di capability. I punti vengono calcolati utilizzando la stima entro Sigma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Moving Range Method( Average of Moving Ranges ),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Sintassi:** obj &lt;&lt; Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Descrizione:** Mostra o nasconde i punti sul diagramma dell&apos;indice di capability. I punti vengono calcolati utilizzando la stima entro Sigma o, se specificato, la stima tra ed entro Sigma.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Performance Plot

### Messaggi degli elementi

#### Capability Boundary

**Sintassi:** obj &lt;&lt; Process Performance Plot( 1, Capability Boundary( number=1.0 ) ); scrobj &lt;&lt; Capability Boundary( number=1.0 )

**Descrizione:** Imposta il valore della capability Ppk che controlla i limiti del diagramma delle performance di processo delle regioni con capability rispetto a quelle senza. Questo valore compare anche nella casella di modifica Ppk generale. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));Wait( 1 );obj << Process Performance Plot( 1, Capability Boundary( 1.33 ) );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);Wait( 1 );scrobj << Capability Boundary( 1 );

```

#### Label Points

**Sintassi:** obj &lt;&lt; Process Performance Plot( 1, Label Points( state=0|1 ) ); scrobj &lt;&lt; Label Points( state=0|1 )

**Descrizione:** Mostra o nasconde i nomi di processo come etichette per i punti nel diagramma delle performance di processo.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));obj << Process Performance Plot( 1, Label Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);scrobj << Label Points( 0 );

```

#### Show Within Cpk Curve

**Sintassi:** obj &lt;&lt; Process Performance Plot( 1, Show Within Cpk Curve( state=0|1 ) ); scrobj &lt;&lt; Show Within Cpk Curve( state=0|1 )

**Descrizione:** Mostra o nasconde la curva Entro Cpk nel diagramma delle performance del processo. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));obj << Process Performance Plot( 1, Show Within Cpk Curve( 0 ) );Wait( 1 );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);scrobj << Show Within Cpk Curve( 1 );

```

#### Stability Boundary

**Sintassi:** obj &lt;&lt; Process Performance Plot( 1, Stability Boundary( number=1.25 ) ); scrobj &lt;&lt; Stability Boundary( number=1.25 )

**Descrizione:** Imposta il valore del rapporto di stabilità che controlla i limiti del diagramma delle performance di processo delle regioni stabili rispetto a quelle instabili. "1.25", per impostazione predefinita.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));Wait( 1 );obj << Process Performance Plot( 1, Stability Boundary( 1.7 ) );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);Wait( 1 );scrobj << Stability Boundary( 1.25 );

```

