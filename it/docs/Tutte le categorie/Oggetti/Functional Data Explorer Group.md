# Functional Data Explorer Group



## Costruttori associati

### Functional Data Explorer Group

**Sintassi:** Functional Data Explorer Group( model1, model2, ... )

Functional Data Explorer Group( model1; model2; ... )

**Descrizione:** Raggruppa i modelli di explorer funzionale dei dati per Y multipla nel formato dei dati impilato.

## Messaggi degli elementi

### AICc

**Sintassi:** obj << Model Name( AICc ); 

scrobj << AICc

**Descrizione:** Specifica AICc come criterio di selezione del modello per i modelli B-Spline, P-Spline e Basi Fourier.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( AICc )
);

```

### Action

**Sintassi:** obj << Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Align 0 to 1

**Sintassi:** obj << Data Processing( Align 0 to 1 )

**Descrizione:** Allinea le funzioni di output (Y) nel range dell&apos;input (X) in modo che siano comprese da 0 a 1.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align 0 to 1 )
);

```

### Align Maximum

**Sintassi:** obj << Data Processing( Align Maximum )

**Descrizione:** Allinea le funzioni di output (Y) utilizzando il valore di input massimo osservato (X).

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Maximum )
);

```

### Align Minimum

**Sintassi:** obj << Data Processing( Align Minimum )

**Descrizione:** Allinea le funzioni di output (Y) utilizzando il valore di input minimo osservato (X).

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Minimum )
);

```

### Align by Function

**Sintassi:** obj << Data Processing( Align by Function )

**Descrizione:** Allinea le funzioni di output (Y) in modo che il range di ogni funzione sia sul range dell&apos;input (X).

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align by Function )
);

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

**Cerca per nome**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preimpostazione anonima**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Ricerca all'interno delle cartelle**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Sintassi:** obj << Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

Names Default To Here( 1 );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### B Splines

**Sintassi:** obj << B Splines

**Descrizione:** Stima un modello B-Spline sui dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines
);

```

### B Splines Model Controls

**Sintassi:** obj << B Splines Model Controls

**Descrizione:** Apre il riquadro Controlli del modello prima di stimare un modello B-Spline. È possibile specificare il numero di nodi e il grado della spline.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines Model Controls
);

```

### BIC

**Sintassi:** obj << Model Name( BIC ); 

scrobj << BIC

**Descrizione:** Specifica BIC come criterio di selezione del modello per i modelli B-Spline, P-Spline e Basi Fourier.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines( BIC )
);

```

### Baseline Correction

**Sintassi:** obj << Data Processing( Baseline Correction( Model( Linear|Quadratic|Cubic|Fit Exponential 2P|Fit Exponential 3P ), Correction Region( ), Baseline Regions( vector ), Anchor Points( vector ) ) )

**Descrizione:** Stima e rimuove un modello di riferimento da ogni funzione. È possibile specificare il modello di riferimento, la regione di correzione, le regioni di riferimento e i punti di ancoraggio.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction )
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction( Model( Quadratic ) ) )
);

```

### Center

**Sintassi:** obj << Data Processing( Center )

**Descrizione:** Centra l&apos;output.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Center )
);

```

### Column Switcher

**Sintassi:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

Names Default To Here( 1 );
obj << Data Table Window;

```

### Direct Functional PCA

**Sintassi:** obj << Direct Functional PCA

**Descrizione:** Esegue la PCA funzionale direttamente senza stimare un modello di funzioni base. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Dynamic Time Warping

**Sintassi:** obj << Data Processing( Dynamic Time Warping( Reference( number ) ) )

**Descrizione:** Allinea le funzioni di output utilizzando la deformazione temporale dinamica (DTW). DTW è una tecnica di allineamento di funzioni che trova una deformazione ottimale per allineare due o più funzioni insieme.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Dynamic Time Warping( Reference( 1 ) ) )
);

```

### Exp

**Sintassi:** obj << Data Processing( Exp )

**Descrizione:** Trasforma i dati calcolando la funzione esponenziale dell&apos;output.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Exp )
);

```

### Filter X

**Sintassi:** obj << Data Processing( Filter X( [lower, upper] ) )

**Descrizione:** Rimuove i valori di input (X) esterni all&apos;intervallo specificato.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter X( [5, 50] ) );

```

### Filter Y

**Sintassi:** obj << Data Processing( Filter Y( [lower, upper] ) )

**Descrizione:** Rimuove i valori di output (Y) esterni all&apos;intervallo specificato.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter Y( [., 100] ) );

```

### Fourier Basis

**Sintassi:** obj << Fourier Basis

**Descrizione:** Stima un modello B-Spline penalizzato sui dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis
);

```

### Fourier Basis Model Controls

**Sintassi:** obj << Fourier Basis Model Controls

**Descrizione:** Apre il riquadro Controlli del modello prima di stimare un modello Basi Fourier. È possibile specificare il numero di coppie di Fourier e il periodo.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis Model Controls
);

```

### GCV

**Sintassi:** obj << Model Name( GCV ); 

scrobj << GCV

**Descrizione:** Specifica la crossvalidation generalizzata (GCV) come criterio di selezione del modello per i modelli B-Spline, P-Spline e Basi Fourier.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( GCV )
);

```

### Get By Levels

**Sintassi:** obj << Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Piattaforma con filtro**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Sintassi:** obj << Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

Names Default To Here( 1 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintassi:** obj << Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintassi:** obj << Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Load Targets

**Sintassi:** obj << Data Processing( Load Targets( "level" ) )

**Descrizione:** Specifica una funzione target.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :ID ),
	Data Processing( Load Targets( "Bristol, TN" ) )
);

```

### Local Data Filter

**Sintassi:** obj << Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Log

**Sintassi:** obj << Data Processing( Log )

**Descrizione:** Trasforma i dati calcolando il logaritmo naturale dell&apos;output.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log )
);

```

### Log X

**Sintassi:** obj << Data Processing( Log X )

**Descrizione:** Trasforma i dati calcolando il logaritmo naturale dell&apos;input.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log X )
);

```

### Logit

**Sintassi:** obj << Data Processing( Logit )

**Descrizione:** Trasforma i dati calcolando la funzione logit dell&apos;output. I valori di output devono essere compresi tra 0 e 1.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 ),
	Data Processing( Logit )
);

```

### MSC

**Sintassi:** obj << Data Processing( MSC )

**Descrizione:** Applica il metodo della correzione di dispersione moltiplicativa ai dati. Questo metodo stima una regressione lineare semplice per ogni singola funzione (livello della variabile ID) dove la risposta è rappresentata dai valori di output per la funzione e il regressore è rappresentato dai valori di output per la funzione media.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( MSC )
);

```

### Messaggi degli elementi condivisi

### Multivariate Curve Resolution

**Sintassi:** obj << Multivariate Curve Resolution

**Descrizione:** Esegue la risoluzione della curva multivariata (MCR). Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 18

### Negation

**Sintassi:** obj << Data Processing( Negation )

**Descrizione:** Trasforma i dati negando l&apos;output.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Negation )
);

```

### New JSL Preset

**Sintassi:** New JSL Preset( preset )

**Descrizione:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Nonnegative SVD

**Sintassi:** obj << Nonnegative SVD

**Descrizione:** Performs a nonnegative singular value decomposition (SVD) on the stacked matrix of functions. A nonnegative SVD constrains the matrix decomposition so that the scores and loadings are greater than or equal to zero.

**JMP Versione aggiunta:** 18

### P Splines

**Sintassi:** obj << P Splines

**Descrizione:** Stima un modello B-Spline penalizzato sui dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines
);

```

### P Splines Model Controls

**Sintassi:** obj << P Splines Model Controls

**Descrizione:** Apre il riquadro Controlli del modello prima di stimare un modello P-Spline. È possibile specificare il numero di nodi e il grado della spline.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines Model Controls
);

```

### Paste Local Data Filter

**Sintassi:** obj << Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Peak Finding

**Sintassi:** obj << Peak Finding

**Descrizione:** Trova e riepiloga i picchi direttamente o con un modello parametrico specificato.

**JMP Versione aggiunta:** 17

### Penalized Nonnegative SVD

**Sintassi:** obj << Penalized Nonnegative SVD

**Descrizione:** Esegue SVD non negativa penalizzata per costruire una PCA funzionale. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 18

### Penalized SVD

**Sintassi:** obj << Penalized SVD

**Descrizione:** Esegue SVD penalizzata per costruire una PCA funzionale. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 18

### Plot Mean Function

**Sintassi:** obj << Plot Mean Function( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma Funzione media nel report Riepiloghi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Mean Function( 0 );

```

### Plot Median Function

**Sintassi:** obj << Plot Median Function( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma Funzione mediana nel report Riepiloghi.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Temperature ),
	X( :Month ),
	ID( :Year ),
	Plot Median Function( 1 )
);

```

### Plot Standard Deviation Function

**Sintassi:** obj << Plot Standard Deviation Function( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma Funzione deviazione standard nel report Riepiloghi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Standard Deviation Function( 0 );

```

### Range 0 to 1

**Sintassi:** obj << Data Processing( Range 0 to 1 )

**Descrizione:** Scala l&apos;output per situarlo entro un range da 0 a 1.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 )
);

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
obj << Redo Analysis;

```

### Reduce

**Sintassi:** obj << Data Processing( Reduce( Grid( number ) ) ); 

obj << Data Processing( Reduce( Bin( number ) ) ); 

obj << Data Processing( Reduce( Thin( number ) ) )

**Descrizione:** Riduce i dati sull&apos;input (X) con una delle varie tecniche.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Reduce( Thin( 2 ) ) );

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintassi:** obj << Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Last Step

**Sintassi:** obj << Remove Last Step

**JMP Versione aggiunta:** 14

### Remove Local Data Filter

**Sintassi:** obj << Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Remove Selected

**Sintassi:** obj << Data Processing( Remove Selected )

**Descrizione:** Rimuove i valori selezionati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION == "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Selected );

```

### Remove Unselected

**Sintassi:** obj << Data Processing( Remove Unselected )

**Descrizione:** Rimuove i valori deselezionati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION != "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Unselected );

```

### Remove Value

**Sintassi:** obj << Data Processing( Remove Value( number ) )

**Descrizione:** Rimuove le osservazioni che hanno il valore di risposta specificato.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
Wait( 1 );
obj << Data Processing( Remove Value( 30 ) );

```

### Remove Zeros

**Sintassi:** obj << Data Processing( Remove Zeros )

**Descrizione:** Rimuove le osservazioni che hanno un valore di risposta pari a zero.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Remove Zeros )
);

```

### Render Preset

**Sintassi:** Render Preset( preset )

**Descrizione:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintassi:** obj << Report;

Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

Names Default To Here( 1 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
obj << Report View( "Summary" );

```

### Row Alignment

**Sintassi:** obj << Data Processing( Row Alignment )

**Descrizione:** Sostituisce i valori di input con il numero di riga.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Row Alignment )
);

```

### SNV

**Sintassi:** obj << Data Processing( SNV )

**Descrizione:** Applica il metodo di variazione normale standard ai dati. Questo metodo standardizza l&apos;output centrando e scalando ogni singola funzione (livello della variabile ID) in modo da avere una media di 0 e una deviazione standard di 1.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( SNV )
);

```

### Save Data

**Sintassi:** obj << Save Data

**Descrizione:** Salva i dati elaborati in una tabella di dati separata nel formato impilato.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol, :Temp, :Molasses Feed ),
	X( :Time ),
	ID( :BatchID ),
	B Splines
);
obj << Save Data;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
obj << Save Script to Script Window;

```

### Save Summaries

**Sintassi:** obj << Save Summaries

**Descrizione:** Salva il modello delle statistiche di riepilogo di ogni funzione (ID) per ogni output (Y).

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol, :Temp, :Molasses Feed ),
	X( :Time ),
	ID( :BatchID ),
	B Splines
);
obj << Save Summaries;

```

### Savitzky-Golay Filter

**Sintassi:** obj << Data Processing( "Savitzky-Golay Filter"n )

**Descrizione:** Applica il filtro Savitzky-Golay a ciascuna funzione. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Filter"n )
);

```

### Savitzky-Golay First Derivative

**Sintassi:** obj << Data Processing( "Savitzky-Golay First Derivative"n )

**Descrizione:** Restituisce la derivata prima dal filtro Savitzky-Golay. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay First Derivative"n )
);

```

### Savitzky-Golay Second Derivative

**Sintassi:** obj << Data Processing( "Savitzky-Golay Second Derivative"n )

**Descrizione:** Restituisce la derivata seconda dal filtro Savitzky-Golay. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Second Derivative"n )
);

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Sintassi:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descrizione:** Invia a oggetto che supporta script incorporato ripristina le impostazioni degli oggetti incorporati che supportano script.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintassi:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descrizione:** La funzione Invia al report è utilizzata in combinazione con il comando Invia per personalizzare l&apos;aspetto di un report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Square

**Sintassi:** obj << Data Processing( Square )

**Descrizione:** Trasforma i dati calcolando il quadrato dell&apos;output.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square )
);

```

### Square Root

**Sintassi:** obj << Data Processing( Square Root )

**Descrizione:** Trasforma i dati calcolando la radice quadrata dell&apos;output. I valori di output devono essere non negativi.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square Root )
);

```

### Standardize

**Sintassi:** obj << Data Processing( Standardize )

**Descrizione:** Standardizza l&apos;output per centratura e scaling.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Standardize )
);

```

### Sync to Data Table Changes

**Sintassi:** obj << Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Unconstrained MCR

**Sintassi:** obj << Unconstrained MCR

**Descrizione:** Esegue una risoluzione della curva multivariata (MCR) non vincolata. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme.

**JMP Versione aggiunta:** 18

### View Web XML

**Sintassi:** obj << View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Wavelets

**Sintassi:** obj << Wavelets

**Descrizione:** Stima diversi modelli wavelet sui dati. Questa opzione richiede che i dati di input siano su una griglia con spaziatura uniforme. Se i dati non sono equidistanti, viene creata automaticamente una griglia prima dell&apos;inizio della routine wavelet.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

```

