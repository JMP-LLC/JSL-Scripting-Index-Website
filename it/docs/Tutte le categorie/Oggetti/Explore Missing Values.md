# Explore Missing Values



## Colonne

### By

**Sintassi:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );

```

### Columns

**Sintassi:** obj << Columns( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Validation

**Sintassi:** obj << Validation( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Y

**Sintassi:** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

## Costruttori associati

### Explore Missing Values

**Sintassi:** Explore Missing Values( Y( columns ) )

**Descrizione:** Trova pattern di valori mancanti ed esegue l&apos;imputazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

## Messaggi degli elementi

### ADI Loading Matrix

**Sintassi:** obj << ADI Loading Matrix( state=0|1 )

**Descrizione:** Mostra o nasconda un report che mostra le colonne che corrispondono al peso fattoriale per ciascun componente.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Set Random Seed( 123 ),
	Automated Data Imputation
);
obj << ADI Loading Matrix( 1 );

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

### Automated Data Imputation

**Sintassi:** obj << Automated Data Imputation

**Descrizione:** Imputa i valori mancanti usando un metodo di approssimazione della matrice a basso rango. Questo metodo seleziona automaticamente la dimensione migliore per l&apos;approssimazione a basso rango in base ai dati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Automated Data Imputation;

```

### Automatic Recalc

**Sintassi:** obj << Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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

### Close

**Sintassi:** obj << Close

**Descrizione:** Chiude il report Colonne mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ),
	Missing Value Report
);
Wait( 2 );
obj << Close;

```

### Color Cells

**Sintassi:** obj << Color Cells( ALL or column1, column2, ... )

**Descrizione:** Colora le celle della tabella di dati che contengono valori mancanti per le colonne selezionate nel report Colonne mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Color cells( :OZONE );

```

### Color Rows

**Sintassi:** obj << Color Rows( ALL or column1, column2, ... )

**Descrizione:** Colora le righe della tabella di dati che contengono valori mancanti per le colonne selezionate nel report Colonne mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Color rows( :OZONE );

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

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Data Table Window;

```

### Exclude Rows

**Sintassi:** obj << Exclude Rows( ALL or column1, column2, ... )

**Descrizione:** Applica lo stato della riga Escluso alle righe della tabella di dati che contengono valori mancanti per le colonne selezionate nel report Colonne mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Exclude rows( :OZONE );

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
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Timing;
Show( t );

```

### Get U V Sigma ADI Matrices

**Sintassi:** obj << Get U V Sigma ADI Matrices

**Descrizione:** Restituisce le matrici U, V e Sigma dall&apos;approssimazione a basso rango nel metodo ADI.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Set Random Seed( 123 ),
	Automated Data Imputation
);
obj << Get U V Sigma ADI Matrices;

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

### Maximum Dimension

**Sintassi:** obj << Maximum Dimension( number )

**Descrizione:** Imposta la dimensione massima per l&apos;imputazione automatica dei dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Maximum Dimension( 3 ),
	Automated Data Imputation
);

```

### Maximum Iteration

**Sintassi:** obj << Maximum Iteration( number=10 )

**Descrizione:** Imposta il numero massimo di iterazioni per l&apos;imputazione automatica dei dati. "10", per impostazione predefinita.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Maximum Iteration( 8 ),
	Automated Data Imputation
);

```

### Messaggi degli elementi condivisi

### Missing Value Clustering

**Sintassi:** obj << Missing Value Clustering

**Descrizione:** Fornisce un&apos;analisi di clusterizzazione gerarchica dei dati mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Missing Value Clustering;

```

### Missing Value Report

**Sintassi:** obj << Missing Value Report

**Descrizione:** Apre il report Colonne mancanti che elenca il nome di ogni colonna e il numero di valori mancanti in quella colonna.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Missing Value Report;

```

### Missing Value Snapshot

**Sintassi:** obj << Missing Value Snapshot

**Descrizione:** Mostra un diagramma a celle per i valori mancanti. Una cella nera indica un valore mancante.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Missing Value Snapshot;

```

### Multivariate Normal Imputation

**Sintassi:** obj << Multivariate Normal Imputation( Shrink Covariances( state=0|1 ) )

**Descrizione:** Imputa i valori mancanti in base alla distribuzione normale multivariata. Per migliorare la stima della matrice di covarianza, utilizzare l&apos;opzione di shrinkage per lo stimatore.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Multivariate Normal Imputation( Shrink Covariances( 1 ) );

```

### Multivariate RPCA Imputation

**Sintassi:** obj << Multivariate RPCA Imputation( Lambda( number ), Tolerance( number = 1e-7 ), MaxIt( number ) )

**Descrizione:** Imputa i valori mancanti usando componenti principali robuste, che sostituiscono i valori mancanti usando una fattorizzazione della matrice a basso rango (SVD) che è robusta rispetto agli outlier. Questo metodo è utile per problemi ampi. Il valore predefinito per lambda è 2/RadQua(max(n, p)), dove n è il numero di righe e p è il numero di colonne. Se min(n, p) < 100, il valore predefinito per il numero massimo di iterazioni (Iter max) è 75. Se 100<= min(n, p) < 1000, il valore predefinito per Iter max è 100. Se min(n,p) >= 1000, il valore predefinito per Iter max è 200. Se l&apos;algoritmo non converge dopo il numero massimo di iterazioni specificato, la soluzione a Iter max viene accettata e mostrata nel report.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Multivariate RPCA Imputation;

```

### Multivariate SVD Imputation

**Sintassi:** obj << Multivariate SVD Imputation( Number of Singular Vectors( number ), Maximum Iterations( number ), Show Iteration Log( state=0|1 ) )

**Descrizione:** Imputa i valori mancanti rapidamente per problemi di grandi dimensioni utilizzando un metodo di completamento della matrice SVD a basso rango iterato.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Multivariate SVD Imputation(
	Number of Singular Vectors( 3 ),
	Maximum Iterations( 10 ),
	Show Iteration Log( 1 ),

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

### Options for Saving Imputed Values

**Sintassi:** obj << Options for Saving Imputed Values(1|2|3)

**Descrizione:** Specifica il metodo con cui salvare i valori imputati per il metodo ADI. Inserire 1 per specificare l&apos;opzione Crea nuova tabella di dati, 2 per specificare l&apos;opzione Salva formula di scoring nella tabella di dati corrente e 3 per specificare l&apos;opzione Imputa valori sul posto.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Options for Saving Imputed Values( 1 ),
	Set Random Seed( 123 ),
	Automated Data Imputation
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

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Script Window;

```

### Select Rows

**Sintassi:** obj << Select Rows( ALL or column1, column2, ... )

**Descrizione:** Seleziona le righe della tabella di dati che contengono valori mancanti per le colonne selezionate nel report Colonne mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Select rows( :OZONE );

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

### Set Random Seed

**Sintassi:** obj << Set Random Seed( number=0 )

**Descrizione:** Imposta il seme casuale per l&apos;imputazione automatica dei dati. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Set Random Seed( 1234 ),
	Automated Data Imputation
);

```

### Show only columns with missing

**Sintassi:** obj << Show only columns with missing( state=0|1 )

**Descrizione:** Rimuove dall&apos;elenco le colonne che non hanno valori mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Show Only Columns With Missing( 1 );

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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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

### Undo Imputation

**Sintassi:** obj << Undo Imputation

**Descrizione:** Sostituisce i dati imputati più recenti con valori mancanti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Multivariate Normal Imputation
);
Wait( 2 );
obj << Undo Imputation;

```

### Validation Proportion

**Sintassi:** obj << Validation Proportion( number=0.3 )

**Descrizione:** Imposta la proporzione delle righe da usare come righe di validazione per l&apos;imputazione automatica dei dati. "0.3", per impostazione predefinita.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Validation Proportion( 0.25 ),
	Automated Data Imputation
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

### Window View

**Sintassi:** obj = Explore Missing Values(...Window View( "Visible"|"Invisible"|"Private" )...)

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

