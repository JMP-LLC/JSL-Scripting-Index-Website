# K Means Cluster



## Colonne

### By

**Sintassi:** obj = K Means Cluster(...&lt;By( column(s) )&gt;...)

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;

```

### Columns

**Sintassi:** obj = K Means Cluster(...Columns( column(s) )...)

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);

```

### Freq

**Sintassi:** obj = K Means Cluster(...&lt;Freq( column )&gt;...)

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

#### Esempio di K medie

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = K Means Cluster(
	Y(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Freq( :SampleSize ),
	Number of Clusters( 2 ),
	Go
);

```

#### Esempio di miscele normali

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = Normal Mixtures(
	Y(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Freq( :SampleSize ),
	Number of Clusters( 2 ),
	Go
);

```

### Weight

**Sintassi:** obj = K Means Cluster(...&lt;Weight( column )&gt;...)

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

#### Esempio di K medie

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = K Means Cluster(
	Y(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Weight( :SampleSize ),
	Number of Clusters( 2 ),
	Go
);

```

#### Esempio di miscele normali

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = Normal Mixtures(
	Y(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Weight( :SampleSize ),
	Number of Clusters( 2 ),
	Go
);

```

### Y

**Sintassi:** obj = K Means Cluster(...Y( column(s) )...)

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);

```

## Costruttori associati

### K Means Cluster

**Sintassi:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**Descrizione:** Clusterizza righe in base alle variabili numeriche in tabelle di dati con milioni di righe. È necessario specificare in anticipo il numero dei cluster.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

#### Cerca per nome

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preimpostazione anonima

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Ricerca all'interno delle cartelle

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Columns Scaled Individually

**Sintassi:** Columns Scaled Individually( state=0|1 )

**Descrizione:** Scala ogni colonna indipendentemente dalle altre colonne. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Columns Scaled Individually( 1 ),
	Go
);

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Data Table Window;

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj &lt;&lt; Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

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

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintassi:** obj &lt;&lt; Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Go

**Sintassi:** obj &lt;&lt; Go

**Descrizione:** Avvia la piattaforma completando le iterazioni.

**JMP Versione aggiunta:** 14

#### Esempio di K medie

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

#### Esempio di miscele normali

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Initial Clusters

**Sintassi:** obj &lt;&lt; Initial Clusters( "Default" | "Randomize" | column )

**Descrizione:** Determina il modo in cui vengono creati i cluster iniziali. I cluster iniziali possono essere randomizzati o si può specificare una colonna categorica per definire i cluster iniziali, seminando tramite ogni categoria.

**JMP Versione aggiunta:** 19

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Initial Clusters( :Species ),
	Go
);

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Initial Clusters( "Randomize" ),
	Go
);

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Max Iterations

**Sintassi:** obj &lt;&lt; Max Iterations( number )

**Descrizione:** Imposta il numero massimo di iterazioni.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Max Iterations( 100 );
obj << Go;

```

### Messaggi degli elementi condivisi

### New JSL Preset

**Sintassi:** New JSL Preset( preset )

**Descrizione:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versione aggiunta:** 18

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Number of Clusters

**Sintassi:** obj &lt;&lt; Number of Clusters( number )

**Descrizione:** Modifica il numero di cluster.

**JMP Versione aggiunta:** 14

#### Esempio di K medie

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
Wait( 1 );
obj << Number of Clusters( 5 );
obj << Go;

```

#### Esempio di miscele normali

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
Wait( 1 );
obj << Number of Clusters( 5 );
obj << Go;

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

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

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj &lt;&lt; Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj &lt;&lt; Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

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

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintassi:** obj &lt;&lt; Report;Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Report View( "Summary" );

```

### SOM

**Sintassi:** obj &lt;&lt; SOM

**Descrizione:** Crea cluster utilizzando mappe auto-organizzate. La struttura a griglia utilizzata da questo metodo può essere utilizzata per interpretare i cluster in due dimensioni.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << SOM;
obj << Go;

```

### SOM Bandwidth

**Sintassi:** obj &lt;&lt; SOM Bandwidth( number )

**Descrizione:** Specifica la larghezza di banda per le mappe auto-organizzate.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << SOM;
obj << SOM Bandwidth( 0.5 );
obj << Go;

```

### SOM N Rows

**Sintassi:** obj &lt;&lt; SOM N Rows( number )

**Descrizione:** Imposta il numero di righe per le mappe auto-organizzate.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << SOM( 1 );
obj << SOM N Rows( 3 );
obj << Go;

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save Script for All Objects To Data Table;

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	By( _bycol )
);
obj << Go;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Script to Script Window;

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Shift distances by rates

**Sintassi:** obj &lt;&lt; Shift distances by rates( state=0|1 )

**Descrizione:** Dà la preferenza principale all&apos;assegnazione di punti a cluster più grandi.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Shift distances by rates( 1 ),
	Go
);

```

### Single Step

**Sintassi:** obj &lt;&lt; Single Step( state=0|1 )

**Descrizione:** Attiva l&apos;esecuzione di passi attraverso iterazioni individuali. Nel riquadro dedicato al metodo delle k medie, fare clic sul pulsante Step per ciascuna iterazione.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Single Step( 1 );
obj << Go;
obj << Step;
Wait( 1 );
obj << Step;

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Use within cluster std dev

**Sintassi:** obj &lt;&lt; Use within cluster std dev( state=0|1 )

**Descrizione:** Calcola distanze scalate in base alla deviazione standard stimata per ciascun cluster.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Use within cluster std dev( 1 ),
	Go
);

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = K Means Cluster(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## K Means Fit

### Messaggi degli elementi

#### Biplot

**Sintassi:** obj &lt;&lt; Biplot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma dei punti e cluster nelle prime due componenti principali dei dati.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot( 1 );

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot( 1 );

```

#### Biplot 3D

**Sintassi:** obj &lt;&lt; Biplot 3D( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma dei punti e cluster nelle prime tre componenti principali dei dati.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot 3D( 1 );

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot 3D( 1 );

```

#### Biplot Contour Density

**Sintassi:** obj &lt;&lt; Biplot Contour Density( density percent )

**Descrizione:** Imposta il livello del profilo isometrico di densità.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Biplot Contour Density( .95 );

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Biplot Contour Density( .95 );

```

#### Biplot Ray Position

**Sintassi:** obj &lt;&lt; Biplot Ray Position( [X, Y, scaling] )

**Descrizione:** Sposta la visualizzazione dei raggi del biplot.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Biplot Ray Position( [-1, -1, 2] );

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Biplot Ray Position( [-1, -1, 2] );

```

#### Get Statistics

**Sintassi:** obj &lt;&lt; Get Statistics

**Descrizione:** Restituisce la media e la deviazione standard per ogni variabile entro ciascun cluster.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
stats = obj << Get Statistics;
Show( stats );

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
stats = obj << Get Statistics;
Show( stats );

```

#### Mark Clusters

**Sintassi:** obj &lt;&lt; Mark Clusters

**Descrizione:** Imposta gli indicatori nello stato delle righe per ciascuna riga nella tabella di dati. A ciascun cluster è assegnato un indicatore differente. Questa opzione influisce sui grafici di tutte le piattaforme che utilizzano indicatori dello stato delle righe, compresa Biplot in Cluster.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot( 1 );
obj << Mark Clusters;

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Biplot( 1 );
obj << Mark Clusters;

```

#### Parallel Coord Plots

**Sintassi:** obj &lt;&lt; Parallel Coord Plots( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma per ciascun cluster separatamente mostrando i segmenti di linea collegati che rappresentano ciascuna riga della tabella di dati.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Parallel Coord Plots( 1 );

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Parallel Coord Plots( 1 );

```

#### Publish Cluster Formulas

**Sintassi:** obj &lt;&lt; Publish Cluster Formulas

**Descrizione:** Crea formule di probabilità e le pubblica come script della colonna della formula nel depot delle formule.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Publish Cluster Formulas;

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Publish Cluster Formulas;

```

#### SOM Heat Map

**Sintassi:** obj &lt;&lt; SOM Heat Map( state=0|1 )

**Descrizione:** Mostra o nasconde una heat map delle medie dei cluster SOM, colorata in base a una delle variabili Y utilizzate nella clusterizzazione.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	{SOM N Rows( 2 ), SOM Bandwidth( 0.5 ), Single Step( 0 ), Number of Clusters( 4 ), SOM,
	Go}
);
obj << SOM Heat Map;

```

#### Save Cluster Distance

**Sintassi:** obj &lt;&lt; Save Cluster Distance

**Descrizione:** Salva una colonna nella tabella di dati che contiene la distanza dal numero di cluster assegnato.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Cluster Distance;

```

#### Save Cluster Formula

**Sintassi:** obj &lt;&lt; Save Cluster Formula

**Descrizione:** Salva una colonna nella tabella di dati con una formula che determina il cluster più probabile.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Cluster Formula;

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Cluster Formula;

```

#### Save Clusters

**Sintassi:** obj &lt;&lt; Save Clusters

**Descrizione:** Salva una nuova colonna nella tabella di dati che contiene il cluster più probabile per ogni riga.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Clusters;

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Clusters;

```

#### Save Colors to Table

**Sintassi:** obj &lt;&lt; Save Colors to Table

**Descrizione:** Salva il colore assegnato allo stato della riga in ogni riga in base all&apos;appartenenza ai cluster.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Colors to Table;

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Save Colors to Table;

```

#### Save Distance Formula

**Sintassi:** obj &lt;&lt; Save Distance Formula

**Descrizione:** Salva una colonna nella tabella di dati che contiene la formula della distanza al numero di cluster assegnato.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save Distance Formula;

```

#### Save K Cluster Distances

**Sintassi:** obj &lt;&lt; Save K Cluster Distances

**Descrizione:** Salva la distanza da ogni centro del cluster come colonna separata nella tabella di dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save K Cluster Distances;

```

#### Save K Distance Formulas

**Sintassi:** obj &lt;&lt; Save K Distance Formulas

**Descrizione:** Salva la formula delle distanze da ogni centro del cluster come colonna separata nella tabella di dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Save K Distance Formulas;

```

#### Save SOM Grid

**Sintassi:** obj &lt;&lt; Save SOM Grid

**Descrizione:** Salva nuove colonne nella tabella di dati che contengono la riga e la colonna della griglia SOM per il cluster più probabile.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	{SOM N Rows( 2 ), SOM Bandwidth( 0.5 ), Single Step( 0 ), Number of Clusters( 4 ), SOM,
	Go}
);
obj << Save SOM Grid;

```

#### Scatterplot Matrix

**Sintassi:** obj &lt;&lt; Scatterplot Matrix( state=0|1 )

**Descrizione:** Crea una matrice del grafico a dispersione in una nuova finestra con ellissi di confidenza sulla base del numero corrente di cluster.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Scatterplot Matrix;

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;
obj << Scatterplot Matrix;

```

#### Show Biplot Rays

**Sintassi:** obj &lt;&lt; Show Biplot Rays( state=0|1 )

**Descrizione:** Mostra o nasconde i raggi sul biplot. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Show Biplot Rays( 1 );

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go( Biplot( 1 ) )
);
obj << Show Biplot Rays( 1 );

```

#### Simulate Clusters

**Sintassi:** obj &lt;&lt; Simulate Clusters

**Descrizione:** Crea una nuova tabella di dati con dati simulati utilizzando le probabilità previste di miscela dei cluster, le medie e le deviazioni standard di ciascun cluster.

**JMP Versione aggiunta:** 14

**Esempio di K medie**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Simulate Clusters( 1000 );

```

**Esempio di miscele normali**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 ),
	Go
);
obj << Simulate Clusters( 1000 );

```

#### Step

**Sintassi:** obj &lt;&lt; Step

**Descrizione:** Effettua un passo o iterazione delle k medie.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Single Step( 1 );
obj << Go;
obj << Step;
Wait( 1 );
obj << Step;

```

