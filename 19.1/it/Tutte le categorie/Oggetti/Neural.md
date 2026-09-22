# Neural



## Colonne

### By

**Sintassi:** obj = Neural(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);

```

### Factor

**Sintassi:** obj = Neural(...Factor( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le variabili predittore

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### Freq

**Sintassi:** obj = Neural(...&lt;Freq( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Freq( :_freqcol ),	Go);

```

### Response

**Sintassi:** obj = Neural(...Response( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica la variabile o le variabili di risposta che si desidera analizzare.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### Validation

**Sintassi:** obj = Neural(...&lt;Validation( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna numerica che definisce i set di validazione. Questa colonna deve contenere al massimo tre valori distinti.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ));obj << Go;

```

### X

**Sintassi:** obj = Neural(...X( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le variabili predittore

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### Y

**Sintassi:** obj = Neural(...Y( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica la variabile o le variabili di risposta che si desidera analizzare.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

## Costruttori associati

### Neural

**Sintassi:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**Descrizione:** Stima una o più variabili di risposta mediante una funzione flessibile delle variabili di input. La struttura flessibile comprende funzioni di stratificazione e a S.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Data Table Window;

```

### Fit

**Sintassi:** obj &lt;&lt; Fit( NTanH|NLinear|NTanH2|NLinear2|NGaussian|NGaussian2( number ) )

**Descrizione:** Specifica la struttura a livelli nascosti della rete neurale e la stima sui dati. I livelli multipli e le funzioni di attivazione non-TanH sono disponibili solo in JMP Professional Edition. Per specificare livelli multipli e funzioni di attivazione, separare con una virgola i vari argomenti.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Fit( NTanH( 4 ) );

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Timing;Show( t );

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

### Go

**Sintassi:** obj &lt;&lt; Go

**Descrizione:** Inizia a risolvere il modello di rete neurale.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));Wait( 1 );obj << Go;

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Informative Missing

**Sintassi:** obj = Neural(...Informative Missing( state=0|1 )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Attiva l&apos;imputazione e la codifica dei valori mancanti. Se non si seleziona questa opzione, le righe con valori mancanti vengono ignorate.



Per variabili continue, i valori mancanti sono sostituiti dalla media della variabile. Inoltre viene creata e inclusa nel modello una variabile costituita dall&apos;indicatore di valore mancante.



Per variabili categoriche, i valori mancanti non sono imputati, ma considerati un altro livello della variabile nel modello. Questa opzione è disponibile solo in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Neural( Y( :weight ), X( :height, :age ), Informative Missing( 1 ), Go );

```

### Learning Rate

**Sintassi:** obj &lt;&lt; Learning Rate( fraction )

**Descrizione:** Specifica il fattore di scala per il boosting. Un tasso di apprendimento vicino a 1 porta a una convergenza più rapida sul modello finale, ma ha anche una maggiore tendenza a sovrastimare i dati. Questa opzione è disponibile solo in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	N Boost( 2 ));obj << Learning Rate( 0.2 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Messaggi degli elementi condivisi

### Multithreading

**Sintassi:** obj = Neural(...Multithreading( state=0|1 )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Suddivide i calcoli fra i thread disponibili del computer. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 0 ));obj << Go;

```

### N Boost

**Sintassi:** obj &lt;&lt; N Boost( number )

**Descrizione:** Specifica il numero massimo di modelli utilizzati per il boosting. Questa opzione è disponibile solo in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << N Boost( 2 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

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

### Penalty Method

**Sintassi:** obj &lt;&lt; Penalty Method( "Quadratico"|"Assoluto"|"Decadimento dei pesi"|"No penalizz" )

**Descrizione:** Specifica un metodo di penalizzazione per imporre una penalizzazione sulla verosimiglianza durante il processo di stima. Un parametro di penalizzazione mitiga la tendenza delle reti neurali a sovrastimare i dati. L&apos;opzione Quadratico è adatta se si ritiene che la maggior parte delle variabili X contribuiscano alla capacità predittiva del modello. L&apos;opzione Assoluto e l&apos;opzione e Decadimento dei pesi sono adatte se è presente un gran numero di variabili X e si ritiene che alcune contribuiscano più di altre.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Penalty Method( "Absolute" );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Report View( "Summary" );

```

### Robust Fit

**Sintassi:** obj &lt;&lt; Robust Fit( state=0|1 )

**Descrizione:** Effettua il training del modello utilizzando le deviazioni minime assolute anziché i minimi quadrati. Questa opzione è utile per minimizzare l&apos;effetto degli outlier delle risposte. Questa opzione è disponibile solo per risposte continue in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Robust Fit( 1 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Script Window;

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

### Set Random Seed

**Sintassi:** obj = Neural(...Set Random Seed( number )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica un seme casuale utilizzato per riprodurre i valori iniziali e l&apos;assegnazione della validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ));Wait( 1 );obj << Go;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Transform Covariates

**Sintassi:** obj &lt;&lt; Transform Covariates( state=0|1 )

**Descrizione:** Trasforma tutte le variabili continue alla quasi normalità utilizzando una distribuzione Su di Johnson o Sb di Johnson. La trasformazione delle variabili continue contribuisce a mitigare gli effetti negativi della presenza di outlier o di distribuzioni fortemente asimmetriche. Questa opzione è disponibile solo in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Transform Covariates( 1 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Validation Method

**Sintassi:** obj = Neural(...Validation Method( "Excluded Rows Holdback"|"Holdback", &lt;fraction = 0.3333&gt;|"KFold", &lt;number = 5&gt; )...);

**Descrizione:** Specifica il metodo utilizzato per la validazione del modello.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Method( "Holdback", 0.4 ),	Go);

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Neural(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Neural Fit

### Messaggi degli elementi

#### Categorical Profiler

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Categorical Profiler( state=0|1 ))

**Descrizione:** Mostra o nasconde un profiler di previsione con tutte le risposte categoriali combinate in un&apos;unica riga del profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Categorical Profiler( 1 ));

```

#### Contour Profiler

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**Descrizione:** Mostra o nasconde il profiler isometrico, che mostra graficamente i profili isometrici della risposta per due fattori alla volta. Disponibile solo quando il modello contiene più di un fattore continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Contour Profiler( 1 ));

```

#### Decision Threshold

**Sintassi:** obj &lt;&lt; fit([number] &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) ))

**Descrizione:** Mostra o nasconde la distribuzione delle probabilità stimate e le tabelle effettive rispetto a quelle previste per ogni modello. È possibile modificare la soglia di probabilità per esplorare come le diverse soglie influenzano i risultati della classificazione.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));Wait( 0 );obj << (Fit[1] << Decision Threshold( 1 ));Wait( 1 );obj << (Fit[1] << Decision Threshold( 1, Set Probability Threshold( .7 ) ));

```

#### Diagram

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Diagram( state=0|1 ))

**Descrizione:** Mostra o nasconde un diagramma che rappresenta la struttura a livelli nascosti.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Diagram( 1 ));

```

#### Get Average Absolute Error Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Test)

**Descrizione:** Restituisce la statistica scarto medio ass per il set di test. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));ae = obj << (Fit[1] << Get Average Absolute Error Test);Show( ae );

```

#### Get Average Absolute Error Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Training)

**Descrizione:** Restituisce la statistica scarto medio ass per il set di training.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));ae = obj << (Fit[1] << Get Average Absolute Error Training);Show( ae );

```

#### Get Average Absolute Error Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Validation)

**Descrizione:** Restituisce la statistica scarto medio ass per il set di validazione. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));ae = obj << (Fit[1] << Get Average Absolute Error Validation);Show( ae );

```

#### Get Average Log Error Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Test)

**Descrizione:** Restituisce la media di -log(p), dove p è uguale alla probabilità attribuita dal modello che la risposta si sia effettivamente verificata, per il set di test. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));avg = obj << (Fit[1] << Get Average Log Error Test);Show( avg );

```

#### Get Average Log Error Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Training)

**Descrizione:** Restituisce la media di -log(p), dove p è uguale alla probabilità attribuita dal modello che la risposta si sia effettivamente verificata, per il set di training.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));avg = obj << (Fit[1] << Get Average Log Error Training);Show( avg );

```

#### Get Average Log Error Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Validation)

**Descrizione:** Restituisce la media di -log(p), dove p è uguale alla probabilità attribuita dal modello che la risposta si sia effettivamente verificata, per il set di validazione. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));avg = obj << (Fit[1] << Get Average Log Error Validation);Show( avg );

```

#### Get Confusion Matrix Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Test)

**Descrizione:** Restituisce la matrice di confusione per il set di test. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cm = obj << (Fit[1] << Get Confusion Matrix Test);Show( cm );

```

#### Get Confusion Matrix Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Training)

**Descrizione:** Restituisce la matrice di confusione per il set di training.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cm = obj << (Fit[1] << Get Confusion Matrix Training);Show( cm );

```

#### Get Confusion Matrix Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Validation)

**Descrizione:** Restituisce la matrice di confusione per il set di validazione. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cm = obj << (Fit[1] << Get Confusion Matrix Validation);Show( cm );

```

#### Get Confusion Rates Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Test)

**Descrizione:** Restituisce i tassi di confusione per il set di test. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cr = obj << (Fit[1] << Get Confusion Rates Test);Show( cr );

```

#### Get Confusion Rates Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Training)

**Descrizione:** Restituisce i tassi di confusione per il set di training.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cr = obj << (Fit[1] << Get Confusion Rates Training);Show( cr );

```

#### Get Confusion Rates Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Validation)

**Descrizione:** Restituisce i tassi di confusione per il set di validazione. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cr = obj << (Fit[1] << Get Confusion Rates Validation);Show( cr );

```

#### Get Gen RSquare Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Test)

**Descrizione:** Restituisce la statistica R-quadro generalizzata per il set di test. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get Gen RSquare Test);Show( rt );

```

#### Get Gen RSquare Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Training)

**Descrizione:** Restituisce la statistica R-quadro generalizzata per il set di training.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get Gen RSquare Training);Show( rt );

```

#### Get Gen RSquare Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Validation)

**Descrizione:** Restituisce la statistica R-quadro generalizzata per il set di validazione. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get Gen RSquare Validation);Show( rt );

```

#### Get MM SAS DATA Step

**Sintassi:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get MM SAS Data Step)

**Descrizione:** Crea un codice SAS registrabile nel Gestore modelli SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));code = obj << (Fit[1] << Get MM SAS Data Step);

```

#### Get Measures

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Measures)

**Descrizione:** Restituisce misure di stima sintetiche del modello.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Diagram( 1 ));obj << (Fit[1] << Get Measures);

```

#### Get Misclassification Rate Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Test)

**Descrizione:** Restituisce gli errori di classificazione per il set di test. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));mr = obj << (Fit[1] << Get Misclassification Rate Test);Show( mr );

```

#### Get Misclassification Rate Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Training)

**Descrizione:** Restituisce gli errori di classificazione per il set di training.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));mrt = obj << (Fit[1] << Get Misclassification Rate Training);Show( mrt );

```

#### Get Misclassification Rate Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Validation)

**Descrizione:** Restituisce gli errori di classificazione per il set di validazione. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));mrt = obj << (Fit[1] << Get Misclassification Rate Validation);Show( mrt );

```

#### Get NBoost

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get NBoost)

**Descrizione:** Restituisce il numero di modelli utilizzati per il boosting.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	N Boost( 2 ),	Go);n = obj << (fit[1] << Get NBoost);Show( n );

```

#### Get Precision Recall Area Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Test)

**Descrizione:** Restituisce l&apos;area sotto la curva di precisione-richiamo per il set di test. La curva di precisione-richiamo deve essere visualizzata prima di calcolare l&apos;area. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));ra = obj << (Fit[1] << Get Precision Recall Area Test);Show( ra );

```

#### Get Precision Recall Area Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Training)

**Descrizione:** Restituisce l&apos;area sotto la curva di precisione-richiamo per il set di training. La curva di precisione-richiamo deve essere visualizzata prima di calcolare l&apos;area.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));ra = obj << (Fit[1] << Get Precision Recall Area Training);Show( ra );

```

#### Get Precision Recall Area Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Validation)

**Descrizione:** Restituisce l&apos;area sotto la curva di precisione-richiamo per il set di validazione. La curva di precisione-richiamo deve essere visualizzata prima di calcolare l&apos;area. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));ra = obj << (Fit[1] << Get Precision Recall Area Validation);Show( ra );

```

#### Get Prediction Formula

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**Descrizione:** Costruisce uno script per creare una colonna con la formula di previsione e la restituisce.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Get Prediction Formula);

```

#### Get RMS Error Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Test)

**Descrizione:** Restituisce la radice quadrata della media quadratica degli errori di test. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));re = obj << (Fit[1] << Get RMS Error Test);Show( re );

```

#### Get RMS Error Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Training)

**Descrizione:** Restituisce la radice quadrata della media quadratica degli errori di training.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));re = obj << (Fit[1] << Get RMS Error Training);Show( re );

```

#### Get RMS Error Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Validation)

**Descrizione:** Restituisce la radice quadrata della media quadratica degli errori di validazione. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));re = obj << (Fit[1] << Get RMS Error Validation);Show( re );

```

#### Get ROC Area Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Test)

**Descrizione:** Restituisce l&apos;area sotto la curva caratteristica operativa del ricevitore (ROC) per i dati del test. È necessario che la curva ROC venga visualizzata prima di calcolare l&apos;area. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));ra = obj << (Fit[1] << Get ROC Area Test);Show( ra );

```

#### Get ROC Area Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Training)

**Descrizione:** Restituisce l&apos;area sotto la curva caratteristica operativa del ricevitore (ROC) per il data set di training. È necessario che la curva ROC venga visualizzata prima di calcolare l&apos;area.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));ra = obj << (Fit[1] << Get ROC Area Training);Show( ra );

```

#### Get ROC Area Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Validation)

**Descrizione:** Restituisce l&apos;area sotto la curva caratteristica operativa del ricevitore (ROC) per il data set di validazione. È necessario che la curva ROC venga visualizzata prima di calcolare l&apos;area. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));ra = obj << (Fit[1] << Get ROC Area Validation);Show( ra );

```

#### Get RSquare Test

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Test)

**Descrizione:** Restituisce la statistica R-quadro dell&apos;entropia per il set di test. Questa opzione è disponibile solo se si utilizza un set di validazione in JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get RSquare Test);Show( rt );

```

#### Get RSquare Training

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Training)

**Descrizione:** Restituisce la statistica R-quadro dell&apos;entropia per il set di training.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get RSquare Training);Show( rt );

```

#### Get RSquare Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Validation)

**Descrizione:** Restituisce la statistica R-quadro dell&apos;entropia per il set di validazione. Questa opzione è disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get RSquare Validation);Show( rt );

```

#### Get SAS DATA Step

**Sintassi:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get SAS Data Step)

**Descrizione:** Crea un codice SAS utilizzabile per assegnare uno score a un nuovo data set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));code = obj << (Fit[1] << Get SAS Data Step);

```

#### Get Seconds

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Get Seconds)

**Descrizione:** Restituisce il numero di secondi impiegati per completare l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));s = obj << (Fit[1] << Get Seconds);Show( s );

```

#### Lift Curve

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**Descrizione:** Mostra o nasconde il diagramma della curva lift. La curva lift traccia il rialzo rispetto alla porzione di osservazioni e fornisce un&apos;altra visione della capacità predittiva di un modello. Se si è utilizzata la validazione, viene mostrato un diagramma per ciascuno dei set di training, validazione e test.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Lift Curve( 1 ));

```

#### Make SAS DATA Step

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Make SAS Data Step)

**Descrizione:** Crea un codice SAS utilizzabile per assegnare uno score a un nuovo data set.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Make SAS Data Step);

```

#### Plot Actual by Predicted

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual by Predicted( state=0|1 ))

**Descrizione:** Mostra o nasconde un diagramma con i valori effettivi sull&apos;asse verticale e i valori previsti sull&apos;asse orizzontale. Questa opzione è disponibile solo per le risposte continue. Se è stata utilizzata la validazione, viene mostrato un diagramma per ognuno dei set di training, validazione e test.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Plot Actual By Predicted( 1 ));

```

#### Plot Residual by Predicted

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual by Predicted( state= 0|1 ))

**Descrizione:** Mostra o nasconde un diagramma con i residui sull&apos;asse verticale e i valori previsti sull&apos;asse orizzontale. Questa opzione è disponibile solo per le risposte continue. Se è stata utilizzata la validazione, viene mostrato un diagramma per ognuno dei set di training, validazione e test.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Plot Residual By Predicted( 1 ));

```

#### Precision Recall Curve

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**Descrizione:** Mostra o nasconde il diagramma della curva di Precisione-Richiamo che contiene una curva per ogni livello della variabile di risposta. Una curva di precisione-richiamo traccia i valori di precisione rispetto ai valori di richiamo a una serie di soglie. Se si è utilizzata la validazione, viene mostrato un diagramma per ciascuno dei set di training, validazione e test.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**Descrizione:** Mostra o nasconde il profiler di previsione, che viene utilizzato per esplorare graficamente l&apos;equazione di previsione sezionandola fattore per fattore. Il profiler di previsione contiene funzioni di ottimizzazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Profiler( 1 ));

```

#### Publish Prediction Formula

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**Descrizione:** Crea formule di previsione e le salva come script di colonne della formula nella piattaforma Depot delle formule.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Publish Prediction Formula);

```

#### ROC Curve

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**Descrizione:** Mostra o nasconde la curva ROC (Receiver Operating Characteristic) per ogni livello della variabile di risposta. La curva ROC è un grafico della sensibilità rispetto a (1 - specificità). Se si è utilizzata la validazione, viene mostrato un grafico per ciascuno dei set di training, validazione e test.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));

```

#### Remove Fit

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**Descrizione:** Rimuove l&apos;intero report del modello.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Fast Formulas

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Save Fast Formulas)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati. La colonna contiene una formula per la risposta prevista che include formule incorporate per i nodi del livello nascosto. Questa opzione produce formule che valutano rapidamente, ma non possono essere utilizzate dalla versione interattiva del profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Fast Formulas);

```

#### Save Formulas

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Save Formulas)

**Descrizione:** Salva nuove colonne della formula nella tabella di dati. Esistono colonne della formula separate per la risposta prevista e per i nodi del livello nascosto.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Formulas);

```

#### Save Profile Formulas

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Save Profile Formulas)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati. La colonna contiene una formula per la risposta prevista che include formule incorporate per i nodi del livello nascosto. Questa opzione produce formule che possono essere utilizzate dalla versione interattiva del profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Profile Formulas);

```

#### Save Transformed Covariates

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Save Transformed Covariates)

**Descrizione:** Salva nuove colonne della formula nella tabella di dati. Le nuove colonne contengono le formule utilizzate per trasformare le covariate. Questa opzione è disponibile solo in JMP Pro e quando l&apos;opzione Trasforma covariate è specificata all&apos;avvio.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Transform Covariates( 1 ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Transformed Covariates);

```

#### Save Validation

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation)

**Descrizione:** Salva una nuova colonna nella tabella di dati. La colonna identifica quali righe sono state utilizzate nei set di training e di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Validation);

```

#### Show Estimates

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Show Estimates( state=0|1 ))

**Descrizione:** Mostra o nasconde un report delle stime dei parametri.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Show Estimates( 1 ));

```

#### Surface Profiler

**Sintassi:** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**Descrizione:** Mostra o nasconde un grafico di superficie tridimensionale. Questa opzione è disponibile solo per i modelli con due o più variabili X.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Surface Profiler( 1 ));

```

