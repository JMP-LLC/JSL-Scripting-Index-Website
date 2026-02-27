# Naive Bayes



## Colonne

### By

**Sintassi:** obj = Naive Bayes(...&lt;By( column(s) )&gt;...)

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Factor

**Sintassi:** obj = Naive Bayes(...Factor( column(s) )...)

**Descrizione:** Specifica le colonne del predittore categoriale o continuo.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Freq

**Sintassi:** obj = Naive Bayes(...&lt;Freq( column )&gt;...)

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = dt << Naive Bayes(	Y( :clean ),	X(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Freq( :SampleSize ));

```

### Response

**Sintassi:** obj = Naive Bayes(...Response( column )...)

**Descrizione:** Specifica la colonna di risposte categoriali i cui valori rappresentano le classi di interesse.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Validation

**Sintassi:** obj = Naive Bayes(...&lt;Validation( column )&gt;...)

**Descrizione:** Specifica una colonna numerica che definisce i set di validazione. Questa colonna deve contenere al massimo tre valori distinti.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Naive Bayes(	Y( :Y Binary ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ));

```

### Weight

**Sintassi:** obj = Naive Bayes(...&lt;Weight( column )&gt;...)

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = dt << Naive Bayes(	Y( :clean ),	X(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Weight( :SampleSize ));

```

### X

**Sintassi:** obj = Naive Bayes(...X( column(s) )...)

**Descrizione:** Specifica le colonne del predittore categoriale o continuo.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Y

**Sintassi:** obj = Naive Bayes(...Y( column )...)

**Descrizione:** Specifica la colonna di risposte categoriali i cui valori rappresentano le classi di interesse.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

## Costruttori associati

### Naive Bayes

**Sintassi:** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**Descrizione:** Prevede l&apos;appartenenza a un gruppo per una variabile categorica sulla base della prossimità dei valori del suo predittore ai valori del predittore di ciascun gruppo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Measures

**Sintassi:** obj &lt;&lt; Get Measures

**Descrizione:** Restituisce misure di stima sintetiche del modello.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Get Measures;

```

### Get Probability Formulas

**Sintassi:** obj &lt;&lt; Get Probability Formulas

**Descrizione:** Restituisce uno script per generare formule di probabilità.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Get Probability Formulas;

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Timing;Show( t );

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

**Sintassi:** obj &lt;&lt; Lift Curve( state=0|1 ) )

**Descrizione:** Mostra o nasconde il diagramma della curva lift. La curva lift traccia il rialzo rispetto alla porzione di osservazioni e fornisce un&apos;altra visione della capacità predittiva di un modello. Se si è utilizzata la validazione, viene mostrato un diagramma per ciascuno dei set di training, validazione e test.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	ROC Curve( 0 ));obj << Lift Curve( 1 );

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

### Precision Recall Curve

**Sintassi:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma della curva di Precisione-Richiamo che contiene una curva per ogni livello della variabile di risposta. Una curva di precisione-richiamo traccia i valori di precisione rispetto ai valori di richiamo a una serie di soglie. Se si è utilizzata la validazione, viene mostrato un diagramma per ciascuno dei set di training, validazione e test.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Precision Recall Curve( 1 );

```

### Prior Bias

**Sintassi:** obj = Naive Bayes(...Prior Bias( fraction=.5 )...)

**Descrizione:** Imposta il valore della distorsione a priori. Il valore viene diviso per il numero di livelli di risposta e poi questa quantità viene aggiunta ai conteggi per garantire stime dei tassi diverse da zero. ".5", per impostazione predefinita.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Naive Bayes(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Prior Bias( 0.001 ));

```

### Profiler

**Sintassi:** obj &lt;&lt; Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler di previsione, che viene utilizzato per esplorare graficamente l&apos;equazione di previsione sezionandola fattore per fattore. Il profiler di previsione contiene funzioni di ottimizzazione.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));Wait( 0 );obj << Profiler( 1 );

```

### Publish Probability Formulas

**Sintassi:** obj &lt;&lt; Publish Probability Formulas

**Descrizione:** Crea formule di probabilità e le salva come script della colonna della formula nella piattaforma Depot delle formule. Se un report di Depot delle formule non è aperto, questa opzione crea il report di Depot.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Publish Probability Formulas;

```

### ROC Curve

**Sintassi:** obj &lt;&lt; ROC Curve( state=0|1 ) )

**Descrizione:** Mostra o nasconde la curva ROC (Receiver Operating Characteristic) per ogni livello della variabile di risposta. La curva ROC è un grafico della sensibilità rispetto a (1 - specificità). Se si è utilizzata la validazione, viene mostrato un grafico per ciascuno dei set di training, validazione e test. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	ROC Curve( 0 ));Wait( 1 );obj << ROC Curve( 1 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Predicteds

**Sintassi:** obj &lt;&lt; Save Predicteds

**Descrizione:** Salva una nuova colonna nella tabella di dati. La colonna contiene le classificazioni previste.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Predicteds;

```

### Save Prediction Formula

**Sintassi:** obj &lt;&lt; Save Prediction Formula

**Descrizione:** Salva una nuova colonna nella tabella di dati. La nuova colonna contiene la formula di previsione per le classificazioni.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Prediction Formula;

```

### Save Probability Formula

**Sintassi:** obj &lt;&lt; Save Probability Formula

**Descrizione:** Salva nuove colonne nella tabella di dati. Le nuove colonne contengono le formule utilizzate per classificare ogni osservazione.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Probability Formula;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Use Excluded Rows for Validation

**Sintassi:** obj = Naive Bayes(...Use Excluded Rows for Validation( state=0|1 )...)

**Descrizione:** Utilizza le righe escluse nella tabella di dati per creare un set di validazione. Questa opzione compare nella finestra di avvio solo se si utilizza JMP standard e sono presenti righe escluse.

**JMP Versione aggiunta:** 15

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Naive Bayes(	Y( :Y Binary ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ));

```

### Validation Portion

**Sintassi:** obj = Naive Bayes(...Validation Portion( fraction=0 )...)

**Descrizione:** Specifica la parte di dati da utilizzare come set di validazione. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Naive Bayes(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ));

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Naive Bayes(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

