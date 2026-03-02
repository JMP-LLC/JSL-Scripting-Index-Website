# Functional Data Explorer



## Colonne

### By

**Sintassi:** obj = Functional Data Explorer(...&lt;By( column(s) )&gt;...)

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Freq

**Sintassi:** obj = Functional Data Explorer(...&lt;Freq( column )&gt;...)

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Freq( :_freqcol ));

```

### Function

**Sintassi:** obj = Functional Data Explorer(...&lt;Function( column )&gt;...)

**Descrizione:** Specifica la variabile ID, che identifica ogni funzione individuale.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### ID

**Sintassi:** obj = Functional Data Explorer(...&lt;ID( column )&gt;...)

**Descrizione:** Specifica la variabile ID, che identifica ogni funzione individuale.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Input

**Sintassi:** obj = Functional Data Explorer(...&lt;Input( column )&gt;...)

**Descrizione:** Specifica la variabile di input

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Output

**Sintassi:** obj = Functional Data Explorer(...Output( column(s) )...)

**Descrizione:** Specifica la variabile funzionale del processo. Per ogni livello della variabile ID devono esserci almeno due valori di output osservati.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Supplementary

**Sintassi:** obj = Functional Data Explorer(...&lt;Supplementary( column(s) )&gt;...)

**Descrizione:** Specifica una o più variabili supplementari. Le variabili supplementari non vengono utilizzate in alcun calcolo della piattaforma e la loro inclusione non influisce sui risultati. Queste variabili possono migliorare l&apos;interpretazione dei dati o essere utilizzate in analisi future.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :Homogeneity Grade ),	X( :T ),	ID( :Formulation ),	Z( :Solvent, :Active, :Water ),	Direct Functional PCA);

```

### Validation

**Sintassi:** obj = Functional Data Explorer(...&lt;Validation( column )&gt;...)

**Descrizione:** Specifica una colonna numerica che definisce i set di validazione. Questa colonna deve contenere al massimo tre valori distinti.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Validation( :Validation ),	B Splines);

```

### X

**Sintassi:** obj = Functional Data Explorer(...&lt;X( column )&gt;...)

**Descrizione:** Specifica la variabile di input

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Y

**Sintassi:** obj = Functional Data Explorer(...Y( column(s) )...)

**Descrizione:** Specifica la variabile funzionale del processo. Per ogni livello della variabile ID devono esserci almeno due valori di output osservati.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Z

**Sintassi:** obj = Functional Data Explorer(...&lt;Z( column(s) )&gt;...)

**Descrizione:** Specifica una o più variabili supplementari. Le variabili supplementari non vengono utilizzate in alcun calcolo della piattaforma e la loro inclusione non influisce sui risultati. Queste variabili possono migliorare l&apos;interpretazione dei dati o essere utilizzate in analisi future.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :Homogeneity Grade ),	X( :T ),	ID( :Formulation ),	Z( :Solvent, :Active, :Water ),	Direct Functional PCA);

```

## Costruttori associati

### Functional Data Explorer

**Sintassi:** Functional Data Explorer( Y(column), X(column), ID(column) )

**Descrizione:** Stima modelli funzionali utilizzando un modello base B-Spline, P-Spline, Fourier o Wavelet. È possibile eseguire un&apos;analisi delle componenti principali funzionali sul modello funzionale per estrarre caratteristiche importanti dai dati. Esiste anche un&apos;opzione per eseguire l&apos;analisi delle componenti principali funzionali direttamente sui dati, senza prima stimare un modello di funzione di base.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### B Splines

**Sintassi:** obj &lt;&lt; B Splines

**Descrizione:** Stima un modello B-Spline sui dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines);

```

### B Splines Model Controls

**Sintassi:** obj &lt;&lt; B Splines Model Controls

**Descrizione:** Apre il riquadro Controlli del modello prima di stimare un modello B-Spline. È possibile specificare il numero di nodi e il grado della spline.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines Model Controls);

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Copy Script;

```

### Data Processing

**Sintassi:** obj &lt;&lt; Data Processing( &lt;options&gt; )

**Descrizione:** Specifica le opzioni di elaborazione dei dati che consentono di eseguire passi di pre-elaborazione sui dati. Le opzioni comprendono operazioni di pulizia, trasformazione, allineamento, spettrale e funzione target.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Square Root ));

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Table Window;

```

### Direct Functional PCA

**Sintassi:** obj &lt;&lt; Direct Functional PCA

**Descrizione:** Esegue la PCA funzionale direttamente senza stimare un modello di funzioni base. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :Homogeneity Grade ),	X( :T ),	ID( :Formulation ),	Z( :Solvent, :Active, :Water ),	Direct Functional PCA);

```

### Fourier Basis

**Sintassi:** obj &lt;&lt; Fourier Basis

**Descrizione:** Stima un modello B-Spline penalizzato sui dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis);

```

### Fourier Basis Model Controls

**Sintassi:** obj &lt;&lt; Fourier Basis Model Controls

**Descrizione:** Apre il riquadro Controlli del modello prima di stimare un modello Basi Fourier. È possibile specificare il numero di coppie di Fourier e il periodo.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis Model Controls);

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );t = obj << Get Timing;Show( t );

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

### Multivariate Curve Resolution

**Sintassi:** obj &lt;&lt; Multivariate Curve Resolution

**Descrizione:** Esegue la risoluzione della curva multivariata (MCR). Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 18

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Nonnegative SVD

**Sintassi:** obj &lt;&lt; Nonnegative SVD

**Descrizione:** Esegue una decomposizione ai valori singolari (SVD) non negativa sulla matrice impilata di funzioni. Una SVD non negativa vincola la decomposizione della matrice in modo che gli score e i caricamenti siano maggiori o uguali a zero.

**JMP Versione aggiunta:** 18

### P Splines

**Sintassi:** obj &lt;&lt; P Splines

**Descrizione:** Stima un modello B-Spline penalizzato sui dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	P Splines);

```

### P Splines Model Controls

**Sintassi:** obj &lt;&lt; P Splines Model Controls

**Descrizione:** Apre il riquadro Controlli del modello prima di stimare un modello P-Spline. È possibile specificare il numero di nodi e il grado della spline.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	P Splines Model Controls);

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Peak Finding

**Sintassi:** obj &lt;&lt; Peak Finding

**Descrizione:** Trova e riepiloga i picchi direttamente o con un modello parametrico specificato.

**JMP Versione aggiunta:** 17

### Penalized Nonnegative SVD

**Sintassi:** obj &lt;&lt; Penalized Nonnegative SVD

**Descrizione:** Esegue SVD non negativa penalizzata per costruire una PCA funzionale. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 18

### Penalized SVD

**Sintassi:** obj &lt;&lt; Penalized SVD

**Descrizione:** Esegue SVD penalizzata per costruire una PCA funzionale. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 18

### Plot Mean Function

**Sintassi:** obj &lt;&lt; Plot Mean Function( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma Funzione media nel report Riepiloghi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );Wait( 1 );obj << Plot Mean Function( 0 );

```

### Plot Median Function

**Sintassi:** obj &lt;&lt; Plot Median Function( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma Funzione mediana nel report Riepiloghi.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer(	Y( :Temperature ),	X( :Month ),	ID( :Year ),	Plot Median Function( 1 ));

```

### Plot Standard Deviation Function

**Sintassi:** obj &lt;&lt; Plot Standard Deviation Function( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma Funzione deviazione standard nel report Riepiloghi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );Wait( 1 );obj << Plot Standard Deviation Function( 0 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Data

**Sintassi:** obj &lt;&lt; Save Data

**Descrizione:** Salva i dati elaborati in una tabella di dati separata nel formato impilato.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( dt << Get Column Group( "Ethanol" ) ));obj << Save Data;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Unconstrained MCR

**Sintassi:** obj &lt;&lt; Unconstrained MCR

**Descrizione:** Esegue una risoluzione della curva multivariata (MCR) non vincolata. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 18

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Wavelets

**Sintassi:** obj &lt;&lt; Wavelets

**Descrizione:** Stima diversi modelli wavelet sui dati. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme. Se i dati non sono equidistanti, viene creata automaticamente una griglia prima dell&apos;inizio della routine wavelet.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

```

### Window View

**Sintassi:** obj = Functional Data Explorer(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Functional Data Explorer Data Processing

### Messaggi degli elementi

#### ARWLS Save Baselines

**Sintassi:** obj &lt;&lt; ARWLS Save Baselines

**JMP Versione aggiunta:** 19

#### ARWLS Save Corrected

**Sintassi:** obj &lt;&lt; ARWLS Save Corrected

**JMP Versione aggiunta:** 19

#### Align 0 to 1

**Sintassi:** obj &lt;&lt; Data Processing( Align 0 to 1 )

**Descrizione:** Allinea le funzioni di output (Y) nel range dell&apos;input (X) in modo che siano comprese da 0 a 1.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align 0 to 1 ));

```

#### Align Maximum

**Sintassi:** obj &lt;&lt; Data Processing( Align Maximum )

**Descrizione:** Allinea le funzioni di output (Y) utilizzando il valore di input massimo osservato (X).

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align Maximum ));

```

#### Align Minimum

**Sintassi:** obj &lt;&lt; Data Processing( Align Minimum )

**Descrizione:** Allinea le funzioni di output (Y) utilizzando il valore di input minimo osservato (X).

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align Minimum ));

```

#### Align by Function

**Sintassi:** obj &lt;&lt; Data Processing( Align by Function )

**Descrizione:** Allinea le funzioni di output (Y) in modo che il range di ogni funzione sia sul range dell&apos;input (X).

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align by Function ));

```

#### Baseline Correction

**Sintassi:** obj &lt;&lt; Baseline Correction

**JMP Versione aggiunta:** 19

#### Center

**Sintassi:** obj &lt;&lt; Data Processing( Center )

**Descrizione:** Centra l&apos;output.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Center ));

```

#### Custom Save Corrected

**Sintassi:** obj &lt;&lt; Custom Save Corrected

**JMP Versione aggiunta:** 19

#### Dynamic Time Warping

**Sintassi:** obj &lt;&lt; Data Processing( Dynamic Time Warping( Reference( number ) ) )

**Descrizione:** Allinea le funzioni di output utilizzando la deformazione temporale dinamica (DTW). DTW è una tecnica di allineamento di funzioni che trova una deformazione ottimale per allineare due o più funzioni insieme.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol ),	X( :Time ),	ID( :BatchID ),	Data Processing( Dynamic Time Warping( Reference( 1 ) ) ));

```

#### Exp

**Sintassi:** obj &lt;&lt; Data Processing( Exp )

**Descrizione:** Trasforma i dati calcolando la funzione esponenziale dell&apos;output.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Exp ));

```

#### Filter X

**Sintassi:** obj &lt;&lt; Data Processing( Filter X( [lower, upper] ) )

**Descrizione:** Rimuove i valori di input (X) esterni all&apos;intervallo specificato.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Filter X( [5, 50] ) );

```

#### Filter Y

**Sintassi:** obj &lt;&lt; Data Processing( Filter Y( [lower, upper] ) )

**Descrizione:** Rimuove i valori di output (Y) esterni all&apos;intervallo specificato.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Filter Y( [., 100] ) );

```

#### Load Targets

**Sintassi:** obj &lt;&lt; Data Processing( Load Targets( "level" ) )

**Descrizione:** Specifica una funzione target.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :ID ),	Data Processing( Load Targets( "Bristol, TN" ) ));

```

#### Log

**Sintassi:** obj &lt;&lt; Data Processing( Log )

**Descrizione:** Trasforma i dati calcolando il logaritmo naturale dell&apos;output.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Air ),	X( :Time ),	ID( :BatchID ),	Data Processing( Log ));

```

#### Log X

**Sintassi:** obj &lt;&lt; Data Processing( Log X )

**Descrizione:** Trasforma i dati calcolando il logaritmo naturale dell&apos;input.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Air ),	X( :Time ),	ID( :BatchID ),	Data Processing( Log X ));

```

#### Logit

**Sintassi:** obj &lt;&lt; Data Processing( Logit )

**Descrizione:** Trasforma i dati calcolando la funzione logit dell&apos;output. I valori di output devono essere compresi tra 0 e 1.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Range 0 to 1 ),	Data Processing( Logit ));

```

#### MSC

**Sintassi:** obj &lt;&lt; Data Processing( MSC )

**Descrizione:** Applica il metodo della correzione di dispersione moltiplicativa ai dati. Questo metodo stima una regressione lineare semplice per ogni singola funzione (livello della variabile ID) dove la risposta è rappresentata dai valori di output per la funzione e il regressore è rappresentato dai valori di output per la funzione media.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( MSC ));

```

#### Negation

**Sintassi:** obj &lt;&lt; Data Processing( Negation )

**Descrizione:** Trasforma i dati negando l&apos;output.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Negation ));

```

#### Parametric Save Baselines

**Sintassi:** obj &lt;&lt; Parametric Save Baselines

**JMP Versione aggiunta:** 19

#### Parametric Save Corrected

**Sintassi:** obj &lt;&lt; Parametric Save Corrected

**JMP Versione aggiunta:** 19

#### Range 0 to 1

**Sintassi:** obj &lt;&lt; Data Processing( Range 0 to 1 )

**Descrizione:** Scala l&apos;output per situarlo entro un range da 0 a 1.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Range 0 to 1 ));

```

#### Reduce

**Sintassi:** obj &lt;&lt; Data Processing( Reduce( Grid( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Bin( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Thin( number ) ) )

**Descrizione:** Riduce i dati sull&apos;input (X) con una delle varie tecniche.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Reduce( Thin( 2 ) ) );

```

#### Remove Selected

**Sintassi:** obj &lt;&lt; Data Processing( Remove Selected )

**Descrizione:** Rimuove i valori selezionati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );dt << Select Where( :STATION == "USW00024024" );Wait( 1 );obj << Data Processing( Remove Selected );

```

#### Remove Unselected

**Sintassi:** obj &lt;&lt; Data Processing( Remove Unselected )

**Descrizione:** Rimuove i valori deselezionati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );dt << Select Where( :STATION != "USW00024024" );Wait( 1 );obj << Data Processing( Remove Unselected );

```

#### Remove Value

**Sintassi:** obj &lt;&lt; Data Processing( Remove Value( number ) )

**Descrizione:** Rimuove le osservazioni che hanno il valore di risposta specificato.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );Wait( 1 );obj << Data Processing( Remove Value( 30 ) );

```

#### Remove Zeros

**Sintassi:** obj &lt;&lt; Data Processing( Remove Zeros )

**Descrizione:** Rimuove le osservazioni che hanno un valore di risposta pari a zero.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol ),	X( :Time ),	ID( :BatchID ),	Data Processing( Remove Zeros ));

```

#### Row Alignment

**Sintassi:** obj &lt;&lt; Data Processing( Row Alignment )

**Descrizione:** Sostituisce i valori di input con il numero di riga.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Row Alignment ));

```

#### SNIP Save Baselines

**Sintassi:** obj &lt;&lt; SNIP Save Baselines

**JMP Versione aggiunta:** 19

#### SNIP Save Corrected

**Sintassi:** obj &lt;&lt; SNIP Save Corrected

**JMP Versione aggiunta:** 19

#### SNV

**Sintassi:** obj &lt;&lt; Data Processing( SNV )

**Descrizione:** Applica il metodo di variazione normale standard ai dati. Questo metodo standardizza l&apos;output centrando e scalando ogni singola funzione (livello della variabile ID) in modo da avere una media di 0 e una deviazione standard di 1.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( SNV ));

```

#### Savitzky-Golay Filter

**Sintassi:** obj &lt;&lt; Data Processing( "Savitzky-Golay Filter"n )

**Descrizione:** Applica il filtro Savitzky-Golay a ciascuna funzione. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay Filter"n ));

```

#### Savitzky-Golay First Derivative

**Sintassi:** obj &lt;&lt; Data Processing( "Savitzky-Golay First Derivative"n )

**Descrizione:** Restituisce la derivata prima dal filtro Savitzky-Golay. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay First Derivative"n ));

```

#### Savitzky-Golay Second Derivative

**Sintassi:** obj &lt;&lt; Data Processing( "Savitzky-Golay Second Derivative"n )

**Descrizione:** Restituisce la derivata seconda dal filtro Savitzky-Golay. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay Second Derivative"n ));

```

#### Square

**Sintassi:** obj &lt;&lt; Data Processing( Square )

**Descrizione:** Trasforma i dati calcolando il quadrato dell&apos;output.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Square ));

```

#### Square Root

**Sintassi:** obj &lt;&lt; Data Processing( Square Root )

**Descrizione:** Trasforma i dati calcolando la radice quadrata dell&apos;output. I valori di output devono essere non negativi.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	Data Processing( Square Root ));

```

#### Standardize

**Sintassi:** obj &lt;&lt; Data Processing( Standardize )

**Descrizione:** Standardizza l&apos;output per centratura e scaling.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Standardize ));

```

## Functional Data Explorer FDOE

### Messaggi degli elementi

#### Diagnostic Plots

**Sintassi:** obj&lt;&lt; Model Name( Functional DOE Analysis( Diagnostic Plots( state=0|1 ) ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Descrizione:** Mostra o nasconde i diagrammi effettivi rispetto a previsti e dei residui nel report dell&apos;analisi funzionale DOE. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :"Size/nm"n ),	X( :Time ),	ID( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	B Splines( Functional DOE Analysis, Diagnostic Plots( 0 ) ));Wait( 2 );scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;scrobj << Diagnostic Plots( 1 );Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### Generalized Regression FPC Model

**Sintassi:** obj &lt;&lt; Model Name( Functional DOE Analysis( Generalized Regression FPC Model( FPC Number( number ), commands )))

**Descrizione:** Specifica le impostazioni per il modello di regressione generalizzato creato con l&apos;opzione Analisi funzionale DOE. Usare questo comando per specificare impostazioni che differiscono dalle impostazioni di default.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :Homogeneity Grade ),	X( :T ),	ID( :Formulation ),	Z( :Solvent, :Active, :Water ),	P Splines(		Functional DOE Analysis(			Generalized Regression FPC Model(				FPC Number( 1 ),				Estimation Method( "Best Subset" ),				Validation Method( "BIC" )			),			Generalized Regression FPC Model(				FPC Number( 2 ),				Estimation Method( "Elastic Net" ),				Validation Method( "AICc" )			)		),		Customize Function Summaries( Number of FPCs( 2 ) )	));Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );

```

#### Generalized Regression for FPC Scores

**Sintassi:** obj &lt;&lt; Model Name( Functional DOE Analysis( Generalized Regression for FPC Scores( state=0|1 ) ) ); scrobj &lt;&lt; Generalized Regression for FPC Scores( state=0|1 )

**Descrizione:** Mostra o nasconde i report di regressione generalizzata per ogni score FPC. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :"Size/nm"n ),	X( :Time ),	ID( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	B Splines( Functional DOE Analysis ));Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );Wait( 2 );scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;scrobj << Generalized Regression for FPC Scores( 0 );

```

#### Profiler

**Sintassi:** obj &lt;&lt; Model Name( Functional DOE Analysis( FDOE Profiler( state=0|1 ) ) ); scrobj &lt;&lt; FDOE Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler FDOE, che consente di esplorare come cambia la risposta in base ai valori delle variabili supplementari. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :"Size/nm"n ),	X( :Time ),	ID( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	B Splines( Functional DOE Analysis( FDOE Profiler( 0 ) ) ));Report( obj )["Functional PCA"] << Close( 1 );Report( obj )["Model Selection"] << Close( 1 );Wait( 2 );scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;scrobj << FDOE Profiler( 1 );

```

#### Save Prediction Formula

**Sintassi:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Prediction Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); scrobj &lt;&lt; Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna nella tabella di dati corrente. Se il formato dei dati originale è Righe come funzioni o Colonne come funzioni, questa opzione crea una nuova tabella di dati che contiene i dati originali in formato impilato e una colonna per la formula di previsione.

**JMP Versione aggiunta:** 16

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :"Size/nm"n ),	X( :Time ),	ID( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	B Splines( Functional DOE Analysis( Save Prediction Formula ) ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ));

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets( Wavelets DOE Analysis( 1 ) ));scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**Sintassi:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Residual Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); scrobj &lt;&lt; Save Residual Formula

**Descrizione:** Salva la formula dei residui in una nuova colonna nella tabella di dati corrente. Se il formato dei dati originale è Righe come funzioni o Colonne come funzioni, questa opzione crea una nuova tabella di dati che contiene i dati originali in formato impilato e una colonna per la formula dei residui.

**JMP Versione aggiunta:** 16

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :"Size/nm"n ),	X( :Time ),	ID( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	B Splines( Functional DOE Analysis( Save Residual Formula ) ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ));

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :"Size/nm"n ),	X( :Time ),	ID( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	B Splines( Functional DOE Analysis ));scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;scrobj << Save Residual Formula;

```

## Functional Data Explorer FPCA

### Messaggi degli elementi

#### Customize Number of FPCs

**Sintassi:** obj &lt;&lt; Model Name( Functional PCA( 1, Customize Number of FPCs( number ) ) ); scrobj &lt;&lt; Customize Number of FPCs( number )

**Descrizione:** Specifica il numero di score FPC da mostrare nella PCA funzionale. Specificando il numero di score FPC si aggiorna anche il report Riepiloghi delle funzioni.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( Functional PCA( 1, Customize Number of FPCs( 3 ) ) ),	Send to Report(		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,			{Close( 1 )}		)	));Wait( 1 );scrobj = (Report( obj )["Functional PCA"] << get scriptable object);scrobj << Customize Number of FPCs( 2 );

```

#### Diagnostic Plots

**Sintassi:** obj &lt;&lt; Model Name( Functional PCA( 1, Diagnostic Plots( state=0|1 ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Descrizione:** Mostra o nasconde i Diagrammi diagnostici FPCA nel report PCA funzionale. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( Functional PCA( 1, Diagnostic Plots( 0 ) ) ),	Send to Report(		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,			{Close( 1 )}		)	));Wait( 1 );scrobj = (Report( obj )["Functional PCA"] << get scriptable object);scrobj << Diagnostic Plots( 1 );Report( obj )["FPCA Diagnostic Plots"] << Close( 0 );

```

#### FPC Profiler

**Sintassi:** obj &lt;&lt; Model Name( Functional PCA( 1, FPC Profiler( state=0|1 ) ) ); scrobj &lt;&lt; FPC Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde un profiler degli score FPC. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( Functional PCA( 1, FPC Profiler( 0 ) ) ),	Send to Report(		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,			{Close( 1 )}		)	));Wait( 1 );scrobj = (Report( obj )["Functional PCA"] << get scriptable object);scrobj << FPC Profiler( 1 );

```

#### Score Plot

**Sintassi:** obj &lt;&lt; Model Name( Functional PCA( 1, Score Plot( state=0|1 ) ) ); scrobj &lt;&lt; Score Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma degli score FPC. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( Functional PCA( 1, Score Plot( 0 ) ) ),	Send to Report(		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,			{Close( 1 )}		)	));Wait( 1 );scrobj = (Report( obj )["Functional PCA"] << get scriptable object);scrobj << Score Plot( 1 );

```

## Functional Data Explorer Model

### Messaggi degli elementi

#### AICc

**Sintassi:** obj &lt;&lt; Model Name( AICc ); scrobj &lt;&lt; AICc

**Descrizione:** Specifica AICc come criterio di selezione del modello per i modelli B-Spline, P-Spline e Basi Fourier.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines( AICc ));

```

#### BIC

**Sintassi:** obj &lt;&lt; Model Name( BIC ); scrobj &lt;&lt; BIC

**Descrizione:** Specifica BIC come criterio di selezione del modello per i modelli B-Spline, P-Spline e Basi Fourier.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	P Splines( BIC ));

```

#### Basis Function Coefficients

**Sintassi:** obj &lt;&lt; Model Name( Basis Function Coefficients( state=0|1 ) ); scrobj &lt;&lt; Basis Function Coefficients( state=0|1 )

**Descrizione:** Mostra o nasconde il report Coefficienti funzioni base per la stima del modello corrispondente. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( Basis Function Coefficients( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);scrobj << Basis Function Coefficients( 1 );Report( obj )["Basis Function Coefficients"] << Close( 0 );

```

#### Diagnostic Plots

**Sintassi:** obj &lt;&lt; Model Name( Diagnostic Plots( state=0|1 ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Descrizione:** Mostra o nasconde il report Diagrammi diagnostici. Questa opzione non è disponibile per i modelli wavelet o PCA funzionale diretta. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :pH ),	X( :Time ),	ID( :BatchID ),	B Splines( Diagnostic Plots( 0 ) ));Wait( 1 );scrobj = (Report( obj )["B-Spline on Initial data"] << get scriptable object);scrobj << Diagnostic Plots( 1 );Report( obj )["B-Spline Diagnostic Plots"] << Close( 0 );

```

#### Function Summaries

**Sintassi:** obj &lt;&lt; Model Name( Function Summaries( state=0|1 ) ); scrobj &lt;&lt; Function Summaries( state=0|1 )

**Descrizione:** Mostra o nasconde il report Riepiloghi delle funzioni. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( Function Summaries( 0 ) ));Wait( 1 );scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);scrobj << Function Summaries( 1 );Report( obj )["Function Summaries"] << Close( 0 );

```

#### Functional DOE Analysis

**Sintassi:** obj &lt;&lt; Model Name( Functional DOE Analysis( ... ) ); scrobj &lt;&lt; Functional DOE Analysis( ... )

**Descrizione:** Avvia un report di regressione generalizzata all&apos;interno della piattaforma FDE. Un modello di regressione generalizzata è stimato per ciascuna funzione di score FPC utilizzando le variabili supplementari come effetti del modello.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :Homogeneity Grade ),	X( :T ),	ID( :Formulation ),	Z( :Solvent, :Active, :Water ),	P Splines( Functional DOE Analysis ));

```

#### Functional PCA

**Sintassi:** obj &lt;&lt; Model Name( Functional PCA( state= 0|1 ) ); scrobj &lt;&lt; Functional PCA( state=0|1 )

**Descrizione:** Mostra o nasconde il report PCA funzionale. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Fourier Basis( Functional PCA( 0 ) );obj << Send to Report(	Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,		{Close( 1 )}	));Wait( 1 );scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);scrobj << Functional PCA( 1 );

```

#### GCV

**Sintassi:** obj &lt;&lt; Model Name( GCV ); scrobj &lt;&lt; GCV

**Descrizione:** Specifica la crossvalidation generalizzata (GCV) come criterio di selezione del modello per i modelli B-Spline, P-Spline e Basi Fourier.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( GCV ));

```

#### Plot Basis

**Sintassi:** obj &lt;&lt; Model Name( Plot Basis( state=0|1 ) ); scrobj &lt;&lt; Plot Basis( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma di tutte le funzioni base su un grafico. Questa opzione non è disponibile per i modelli wavelet o PCA funzionale diretta.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( Plot Basis( 1 ) ));

```

#### Random Coefficients

**Sintassi:** obj &lt;&lt; Model Name( Random Coefficients( state=0|1 ) ); scrobj &lt;&lt; Random Coefficients( state=0|1 )

**Descrizione:** Mostra o nasconde il report Coefficienti casuali per funzione. Il report contiene una tabella dei coefficienti casuali stimati per ciascuna funzione base e combinazione di processo funzionale. Questa opzione non è disponibile per i modelli wavelet o PCA funzionale diretta. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis( Random Coefficients( 1 ) ));Report( obj )["Random Coefficients by Function"] << Close( 0 );

```

#### Remove Fit

**Sintassi:** obj &lt;&lt; (Model["B Splines" | "P Splines" | "Fourier Basis" | "Wavelets" | "Direct Functional PCA"] &lt;&lt; Remove Fit)

**Descrizione:** Rimuove la stima specificata dal report.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis,	B Splines);Wait( 2 );obj << (Model["Fourier Basis"] << Remove Fit);

```

#### Save Data

**Sintassi:** obj &lt;&lt; Model Name( Save Data ); scrobj &lt;&lt; Save Data

**Descrizione:** Salva i dati elaborati in una nuova tabella di dati. I dati elaborati vengono salvati nel formato di dati impilato.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( dt << Get Column Group( "Ethanol" ) ),	B Splines( Save Data ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets);scrobj = (Report( obj )["Wavelets on Initial data"] << get scriptable object);scrobj << Save Data;

```

#### Save Script Options

**Sintassi:** obj &lt;&lt; Save Script Options( "Il salvataggio dello script mantiene i passaggi"|"Il salvataggio dello script mantiene lo stato"="Il salvataggio dello script mantiene i passaggi" )

**Descrizione:** Specifica il tipo di script che viene salvato per riprodurre i risultati della ricerca dei picchi. "Il salvataggio dello script mantiene i passaggi", per impostazione predefinita.

#### Wavelets DOE Analysis

**Sintassi:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( state=0|1 ) ); scrobj &lt;&lt; Wavelets DOE Analysis( state=0|1 )

**Descrizione:** Avvia un report di regressione generalizzata all&apos;interno della piattaforma FDE. I modelli di regressione generalizzata sono stimati sui coefficienti wavelet utilizzando le variabili supplementari come effetti del modello.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1 ) ));

```

## Functional Data Explorer Peak Summaries

### Messaggi degli elementi

#### Customize Peak Summaries

**Sintassi:** obj &lt;&lt; Peak Finding( Customize Peak Summaries(stat1(0|1), ..., statN(0|1)) )

**Descrizione:** Personalizza le statistiche di riepilogo visualizzate nel report dei riepiloghi delle funzioni.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Peak Finding( Customize Peak Summaries() ));

```

#### Save Summaries

**Sintassi:** obj &lt;&lt; Peak Finding( Save Summaries )

**Descrizione:** Salva le statistiche di riepilogo del modello per ogni funzione, compresi gli score delle componenti principali funzionali.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Peak Finding( Save Summaries ));

```

## Functional Data Explorer Summaries

### Messaggi degli elementi

#### Control Chart Builder

**Sintassi:** obj &lt;&lt; B Splines( Control Chart Builder ) obj &lt;&lt; P Splines( Control Chart Builder ) obj &lt;&lt; Fourier Basis( Control Chart Builder )

**Descrizione:** Analizza le componenti principali funzionali utilizzando il Costruttore di carte di controllo.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines( Control Chart Builder ));

```

#### Customize Function Summaries

**Sintassi:** obj &lt;&lt; B Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) ) obj &lt;&lt; P Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) ) obj &lt;&lt; Fourier Basis( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

**Descrizione:** Personalizza le statistiche di riepilogo visualizzate nel report dei riepiloghi delle funzioni.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines(		Customize Function Summaries(			Number of FPCs( 2 ),			Mean( 0 ),			Std Dev( 1 ),			Integrated Difference( 0 ),			Median( 1 ),			Minimum( 1 ),			Maximum( 1 )		)	));

```

#### Save Summaries

**Sintassi:** obj &lt;&lt; B Splines( Save Summaries ) obj &lt;&lt; P Splines( Save Summaries ) obj &lt;&lt; Fourier Basis( Save Summaries )

**Descrizione:** Salva le statistiche di riepilogo del modello per ogni funzione, compresi gli score delle componenti principali funzionali.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	B Splines( Save Summaries ));

```

## Functional Data Explorer WDOE

### Messaggi degli elementi

#### Diagnostic Plots

**Sintassi:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Diagnostic Plots( state=0|1 ) ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Descrizione:** Mostra o nasconde i diagrammi effettivi rispetto a previsti e dei residui nel report di analisi wavelet DOE. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, Diagnostic Plots( 0 ) ) ));Wait( 1 );scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);scrobj << Diagnostic Plots( 1 );Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### FDOE Profiler

**Sintassi:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, FDOE Profiler( state=0|1 ) ) ); scrobj &lt;&lt; FDOE Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler FDOE, che consente di esplorare come cambia la risposta in base ai valori delle variabili supplementari. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, FDOE Profiler( 0 ) ) ));Wait( 1 );scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);scrobj << FDOE Profiler( 1 );

```

#### Generalized Regression for Wavelets Coefficients

**Sintassi:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( state=0|1 ) ) ); scrobj &lt;&lt; Generalized Regression for Wavelets Coefficients( state=0|1 )

**Descrizione:** Mostra o nasconde i report di regressione generalizzata per ciascun coefficiente wavelet. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets(		Functional PCA( 0 ),		Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( 0 ) )	));Wait( 1 );scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);scrobj << Generalized Regression for Wavelets Coefficients( 1 );Report( obj )["Generalized Regression for Wavelets Coefficients"] << Close( 0 );

```

#### Save Prediction Formula

**Sintassi:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Prediction Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); scrobj &lt;&lt; Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna nella tabella di dati corrente. Se il formato dei dati originale è Righe come funzioni o Colonne come funzioni, questa opzione crea una nuova tabella di dati che contiene i dati originali in formato impilato e una colonna per la formula di previsione.

**JMP Versione aggiunta:** 16

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :"Size/nm"n ),	X( :Time ),	ID( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	B Splines( Functional DOE Analysis( Save Prediction Formula ) ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ));

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets( Wavelets DOE Analysis( 1 ) ));scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**Sintassi:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Residual Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); scrobj &lt;&lt; Save Residual Formula

**Descrizione:** Salva la formula dei residui in una nuova colonna nella tabella di dati corrente. Se il formato dei dati originale è Righe come funzioni o Colonne come funzioni, questa opzione crea una nuova tabella di dati che contiene i dati originali in formato impilato e una colonna per la formula dei residui.

**JMP Versione aggiunta:** 16

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :"Size/nm"n ),	X( :Time ),	ID( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	B Splines( Functional DOE Analysis( Save Residual Formula ) ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Z( :Propanol, :Butanol, :Pentanol ),	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ));

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :"Size/nm"n ),	X( :Time ),	ID( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	B Splines( Functional DOE Analysis ));scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;scrobj << Save Residual Formula;

```

