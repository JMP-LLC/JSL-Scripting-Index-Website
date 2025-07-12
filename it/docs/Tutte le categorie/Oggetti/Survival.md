# Survival



## Colonne

### By

**Sintassi:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );

```

### Censor

**Sintassi:** obj << Censor( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Freq

**Sintassi:** obj << Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), Freq( _freqcol ) );

```

### Grouping

**Sintassi:** obj << Grouping( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Time to Event

**Sintassi:** obj << Time to Event( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Y

**Sintassi:** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

## Costruttori associati

### Survival

**Sintassi:** Survival( Y( columns ), Censor( column ), <Grouping( column )> )

**Descrizione:** Calcola stime delle funzioni di sopravvivenza tramite il metodo del prodotto-limite (stime di sopravvivenza di Kaplan-Meier) per uno o più gruppi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

## Messaggi degli elementi

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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintassi:** obj << Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Censor Code

**Sintassi:** obj = Survival(...Censor Code( value=1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Identifica il valore nella colonna Censura che indica le osservazioni con censura a destra. "1", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Survival( Y( :Time ), Censor( :Censor ), Censor Code( 0 ) );

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

### Competing Causes

**Sintassi:** obj << Competing Causes( column )

**Descrizione:** Esegue una stima del modello di Weibull utilizzando le cause specificate per indicare un evento di guasto e altre cause per indicare osservazioni censurate. La distribuzione stimata appare come una linea tratteggiata nel diagramma di sopravvivenza.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );

```

### Connect Quantile Points

**Sintassi:** obj << Connect Quantile Points( state=0|1 )

**Descrizione:** Mostra o nasconde le linee nel diagramma esponenziale, nel diagramma di Weibull e nel diagramma lognormale. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
Wait( 1 );
obj << Connect Quantile Points( 0 );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Data Table Window;

```

### Estimate Survival Probability

**Sintassi:** obj << Estimate Survival Probability( [time1, time2, ...], Alpha( level ) )

**Descrizione:** Stima le probabilità di sopravvivenza e gli intervalli di confidenza per i valori di tempo specificati utilizzando le distribuzioni stimate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
obj << Estimate Survival Probability( [100, 200, 300], Alpha( 0.001 ) );

```

### Estimate Time Quantile

**Sintassi:** obj << Estimate Time Quantile( [p1, p2, ...], Alpha( level ) )

**Descrizione:** Stima un quantile di tempo e gli intervalli di confidenza per ogni probabilità di sopravvivenza specificata utilizzando le distribuzioni stimate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
obj << Estimate Time Quantile( [0.5, 0.9, 0.95], Alpha( 0.01 ) );

```

### Exponential Fit

**Sintassi:** obj << Exponential Fit( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella delle stime di parametri esponenziali. Questa opzione aggiunge anche una retta stimata alla funzione di distribuzione cumulativa esponenziale nel diagramma esponenziale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Plot( 1 );
Wait( 1 );
obj << Exponential Fit( 1 );

```

### Exponential Plot

**Sintassi:** obj << Exponential Plot( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma esponenziale, che mostra la probabilità di guasto esponenziale cumulativa rispetto al tempo per ciascun gruppo. Linee che sono approssimativamente lineari indicano empiricamente l&apos;appropriatezza di un modello esponenziale per ulteriori analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Plot( 1 );

```

### Failure Plot

**Sintassi:** obj << Failure Plot( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma dei guasti, che contiene le curve di guasto sovrapposte (proporzione dei guasti nel tempo) per ogni gruppo. Un diagramma dei guasti inverte l&apos;asse verticale per mostrare il numero di guasti piuttosto che il numero dei sopravvissuti. Questa opzione è utile nell&apos;analisi dell&apos;affidabilità.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );

```

### Fitted Distribution Plots

**Sintassi:** obj << Fitted Distribution Plots( state=0|1 )

**Descrizione:** Mostra o nasconde una serie di diagrammi per ogni distribuzione stimata. La serie di diagrammi include la funzione di sopravvivenza stimata, la funzione di densità stimata e la funzione del rischio stimato. Se non è stata effettuata una stima, non viene visualizzato alcun diagramma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
obj << Fitted Distribution Plots( 1 );

```

### Fitted Failure CI

**Sintassi:** obj << Fitted Failure CI( state=0|1 )

**Descrizione:** Mostra o nasconde gli intervalli di confidenza per ciascun gruppo nel diagramma degli eventi. Per ciascuna distribuzione stimata viene rappresentata una serie di intervalli.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), Failure Plot( 1 ) );
obj << Weibull Fit( 1 );
obj << Fitted Failure CI( 1 );

```

### Fitted Quantile

**Sintassi:** obj << Fitted Quantile( state=0|1 )

**Descrizione:** Mostra o nasconde le linee rette stimate per ciascun gruppo nel diagramma esponenziale, nel diagramma di Weibull e nel diagramma lognormale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Plot( 1 );
obj << Exponential Fit( 1 );
Wait( 1 );
obj << Fitted Quantile( 0 );

```

### Fitted Quantile CI Lines

**Sintassi:** obj << Fitted Quantile CI Lines( state=0|1 )

**Descrizione:** Mostra o nasconde le bande di confidenza al 95% per ciascun gruppo nel diagramma esponenziale, nel diagramma di Weibull e nel diagramma lognormale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Lognormal Plot( 1 );
obj << Lognormal Fit( 1 );
obj << Fitted Quantile CI Lines( 1 );

```

### Fitted Quantile CI Shaded

**Sintassi:** obj << Fitted Quantile CI Shaded( state=0|1 )

**Descrizione:** Mostra o nasconde le regioni ombreggiate per le bande di confidenza al 95% per ciascun gruppo nel diagramma esponenziale, nel diagramma di Weibull e nel diagramma lognormale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
obj << Weibull Fit( 1 );
obj << Fitted Quantile CI Shaded( 1 );

```

### Fitted Survival CI

**Sintassi:** obj << Fitted Survival CI( state=0|1 )

**Descrizione:** Mostra o nasconde gli intervalli di confidenza per ciascun gruppo nel diagramma di sopravvivenza. Per ciascuna distribuzione stimata viene rappresentata una serie di intervalli.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Fit( 1 );
obj << Fitted Survival CI( 1 );

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

### Get ByGroup Script

**Sintassi:** obj << Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj << Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
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

### LogNormal Fit

**Sintassi:** obj << LogNormal Fit( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella delle stime di parametri lognormali. Questa opzione aggiunge anche una retta stimata alla funzione di distribuzione cumulativa lognormale nel diagramma lognormale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << LogNormal Plot( 1 );
Wait( 1 );
obj << LogNormal Fit( 1 );

```

### LogNormal Plot

**Sintassi:** obj << LogNormal Plot( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma lognormale, che indica la probabilità di guasto lognormale cumulativa per log(tempo) per ciascun gruppo. Linee approssimativamente lineari indicano empiricamente l&apos;appropriatezza di un modello lognormale per ulteriori analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << LogNormal Plot( 1 );

```

### Messaggi degli elementi condivisi

### Midstep Quantile Points

**Sintassi:** obj << Midstep Quantile Points( state=0|1 )

**Descrizione:** Specifica che le posizioni modificate del diagramma di Kaplan-Meier sono utilizzate nel diagramma esponenziale, nel diagramma di Weibull e nel diagramma lognormale. Queste posizioni di rappresentazione sono equivalenti a prendere posizioni intermedie della curva di Kaplan-Meier, piuttosto che posizioni alla fine del passo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
Wait( 1 );
obj << Midstep Quantile Points( 0 );

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

### Plot Failure Instead of Survival

**Sintassi:** obj = Survival(...Plot Failure instead of Surivival( state=0|1 )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Mostra un diagramma della probabilità di guasto invece del diagramma inverso (un diagramma della probabilità di sopravvivenza).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Plot Failure instead of Survival( 1 )
);

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Estimates

**Sintassi:** obj << Save Estimates

**Descrizione:** Crea una nuova tabella di dati che contiene stime di sopravvivenza e guasto, intervalli di confidenza e altre statistiche di distribuzione per ogni gruppo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Estimates;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Script Window;

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

### Show Combined

**Sintassi:** obj << Show Combined( state=0|1 )

**Descrizione:** Mostra/Nasconde le funzioni di sopravvivenza di Kaplan-Meier combinate sia sul diagramma di sopravvivenza sia su quello degli eventi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );
Wait( 1 );
obj << Show Combined( 1 );

```

### Show Confid Interval

**Sintassi:** obj << Show Confid Interval( state=0|1 )

**Descrizione:** Mostra o nasconde le bande di confidenza per punti al 95% per le funzioni di sopravvivenza di Kaplan-Meier nel diagramma di sopravvivenza e nel diagramma degli eventi. Questa opzione mostra anche le bande di confidenza per le funzioni di sopravvivenza combinate quando è selezionata l&apos;opzione Mostra dati combinati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );
Wait( 1 );
obj << Show Confid Interval( 1 );
Wait( 1 );
obj << Show Combined( 1 );

```

### Show Kaplan Meier

**Sintassi:** obj << Show Kaplan Meier( state=0|1 )

**Descrizione:** Mostra/Nasconde le funzioni di sopravvivenza di Kaplan-Meier per ciascun gruppo sia sul diagramma di sopravvivenza sia su quello degli eventi. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Show Kaplan Meier( 0 )
);
Wait( 1 );
obj << Show Kaplan Meier( 1 );

```

### Show Points

**Sintassi:** obj << Show Points( state=0|1 )

**Descrizione:** Mostra o nasconde i punti nel diagramma di sopravvivenza e nel diagramma degli eventi. I guasti compaiono sul fondo degli scalini e le osservazioni censurate sono indicate da punti in cima agli scalini.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );
Wait( 1 );
obj << Show Points( 1 );

```

### Show Shaded Pointwise CI

**Sintassi:** obj << Show Shaded Pointwise CI( state=0|1 )

**Descrizione:** Mostra o nasconde le regioni ombreggiate per le bande di confidenza per punti al 95% per le funzioni di sopravvivenza di Kaplan-Meier nel diagramma di sopravvivenza e nel diagramma degli eventi. Questa opzione mostra anche le regioni di confidenza ombreggiate per le funzioni di sopravvivenza combinate quando è selezionata l&apos;opzione Mostra dati combinati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Show Shaded Pointwise CI( 1 );

```

### Show Shaded Simultaneous CI

**Sintassi:** obj << Show Shaded Simultaneous CI( state=0|1 )

**Descrizione:** Mostra o nasconde le regioni ombreggiate per le bande di confidenza simultanee al 95% per le funzioni di sopravvivenza di Kaplan-Meier nel diagramma di sopravvivenza e nel diagramma degli eventi. Questa opzione mostra anche le bande di confidenza per le funzioni di sopravvivenza combinate quando è selezionata l&apos;opzione Mostra dati combinati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Show Shaded Simultaneous CI( 1 );

```

### Show Simultaneous CI

**Sintassi:** obj << Show Simultaneous CI( state=0|1 )

**Descrizione:** Mostra o nasconde le bande di confidenza simultanee al 95% per le funzioni di sopravvivenza di Kaplan-Meier nel diagramma di sopravvivenza e nel diagramma degli eventi. Questa opzione mostra anche le bande di confidenza per le funzioni di sopravvivenza combinate quando è selezionata l&apos;opzione Mostra dati combinati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Show Simultaneous CI( 1 );

```

### Survival Plot

**Sintassi:** obj << Survival Plot( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma di sopravvivenza, che contiene curve di sopravvivenza sovrapposte per ogni gruppo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Survival Plot( 0 );
Wait( 1 );
obj << Survival Plot( 1 );

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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintassi:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Sintassi:** obj << View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weibull Fit

**Sintassi:** obj << Weibull Fit( state=0|1 )

**Descrizione:** Mostra o nasconde le tabelle delle stime di parametri a valore estremo e delle stime dei parametri di Weibull. Questa opzione aggiunge anche una retta stimata alla funzione di distribuzione cumulativa di Weibull nel diagramma di Weibull.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
Wait( 1 );
obj << Weibull Fit( 1 );

```

### Weibull Plot

**Sintassi:** obj << Weibull Plot( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma di Weibull, che mostra la probabilità cumulativa di guasto di Weibull per log(tempo) per ciascun gruppo. Linee approssimativamente lineari indicano empiricamente l&apos;appropriatezza di un modello di Weibull per ulteriori analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );

```

### Window View

**Sintassi:** obj = Survival(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Competing Causes

### Messaggi degli elementi

#### Hazard Plot

**Sintassi:** obj << Hazard Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma delle funzioni di rischio per i dati sulla base dell&apos;analisi delle cause concorrenti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Hazard Plot( 1 );

```

#### Omit Causes

**Sintassi:** obj << Omit Causes( cause1, <cause2>, ... )

**Descrizione:** Consente di rimuovere specifici valori di causa dall&apos;analisi. Le stime di sopravvivenza vengono ricalcolate automaticamente. Questa opzione può essere utilizzata per illustrare l&apos;alternativa quando cause specifiche non sono più pericolose.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Omit Causes( "accident" );

```

#### Save Cause Coordinates

**Sintassi:** obj << Save Cause Coordinates

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La nuova colonna è calcolata come log(-log(Sopravv)). Questo valore è spesso rappresentato rispetto alla variabile temporale per i diversi valori di una variabile di raggruppamento, come il codice del tipo di guasto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Save Cause Coordinates;

```

#### Simulate

**Sintassi:** obj << Simulate( number )

**Descrizione:** Crea una nuova tabella di dati che contiene tempo simulato e informazioni sulla causa. La distribuzione di Weibull stimata viene utilizzata per simulare i nuovi dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Simulate( 1000 );

```

#### Weibull Lines

**Sintassi:** obj << Weibull Lines( state=0|1 )

**Descrizione:** Mostra o nasconde linee di Weibull nel diagramma di sopravvivenza.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Weibull Lines( 1 );

```

