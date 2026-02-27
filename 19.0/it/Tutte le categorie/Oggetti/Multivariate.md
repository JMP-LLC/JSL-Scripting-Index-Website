# Multivariate



## Colonne

### By

**Sintassi:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);

```

### Columns

**Sintassi:** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Freq

**Sintassi:** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Weight

**Sintassi:** obj &lt;&lt; Weight( column )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**Sintassi:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## Costruttori associati

### Multivariate

**Sintassi:** Multivariate( Y( columns ) )

**Descrizione:** Esplora la correlazione e associazioni tra variabili numeriche mediante una serie di tecniche di analisi multivariata. Queste tecniche includono sia misure di associazione parametriche che non parametriche, matrici del grafico a dispersione, analisi delle componenti principali, analisi degli outlier e affidabilità dell&apos;elemento.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
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

### CI of Correlation

**Sintassi:** obj &lt;&lt; CI of Correlation( state=0|1 )

**Descrizione:** Mostra o nasconde un report delle correlazioni tra tutte le variabili Y e gli intervalli di confidenza per ogni correlazione.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << CI of Correlation( 1 );

```

### Cluster the Correlations

**Sintassi:** obj &lt;&lt; Cluster the Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori sulle correlazioni clusterizzate, che inizia dal blu per le correlazioni negative e si sposta verso il rosso via via che le correlazioni si avvicinano a uno.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Cluster the Correlations( 1 );

```

### Color Map on Correlations

**Sintassi:** obj &lt;&lt; Color Map on Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori sulle correlazioni, che inizia dal blu per le correlazioni negative e si sposta verso il rosso via via che le correlazioni si avvicinano a uno.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Correlations( 1 );

```

### Color Map on Hoeffding's D

**Sintassi:** obj &lt;&lt; Color Map on Hoeffding&apos;s D( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori sulle correlazioni non parametriche D di Hoeffding, che inizia dal blu per le correlazioni negative e si sposta verso il rosso via via che le correlazioni si avvicinano a uno.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Hoeffding's D( 1 );

```

### Color Map on Kendall's Tau

**Sintassi:** obj &lt;&lt; Color Map on Kendall&apos;s Tau( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori sulle correlazioni non parametriche Tau di Kendall, che inizia dal blu per le correlazioni negative e si sposta verso il rosso via via che le correlazioni si avvicinano a uno.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Kendall's τ

**Sintassi:** obj &lt;&lt; Color Map on Kendall&apos;s τ( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori sulle correlazioni non parametriche Tau di Kendall, che inizia dal blu per le correlazioni negative e si sposta verso il rosso via via che le correlazioni si avvicinano a uno.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Pairwise Correlations

**Sintassi:** obj &lt;&lt; Color Map on Pairwise Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori sulle correlazioni appaiate, che inizia dal blu per le correlazioni negative e si sposta verso il rosso via via che le correlazioni si avvicinano a uno.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Pairwise Correlations( 1 );

```

### Color Map on Spearman's Rho

**Sintassi:** obj &lt;&lt; Color Map on Spearman&apos;s Rho( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori sulle correlazioni non parametriche Rho di Spearman, che inizia dal blu per le correlazioni negative e si sposta verso il rosso via via che le correlazioni si avvicinano a uno.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on Spearman's ρ

**Sintassi:** obj &lt;&lt; Color Map on Spearman&apos;s ρ( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori sulle correlazioni non parametriche Rho di Spearman, che inizia dal blu per le correlazioni negative e si sposta verso il rosso via via che le correlazioni si avvicinano a uno.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on p-Values

**Sintassi:** obj &lt;&lt; Color Map on p-Values( state=0|1 )

**Descrizione:** Mostra o nasconde una mappa dei colori sui p-value, che inizia dal rosso per p-value prossimi a zero e si sposta verso il blu via via che i p-value si avvicinano a uno.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << "Color Map on p-Values"n( 1 );

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

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Copy Script;

```

### Correlation Probability

**Sintassi:** obj &lt;&lt; Correlation Probability( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di p-value che corrispondono ciascuno a un test dell&apos;ipotesi nulla che la vera correlazione tra le variabili sia pari a zero.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Correlation Probability( 1 );

```

### Correlations Multivariate

**Sintassi:** obj &lt;&lt; Correlations Multivariate( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di coefficienti di correlazione che riepiloga la forza delle relazioni lineari tra ogni coppia di variabili Y. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Correlations Multivariate( 1 );

```

### Covariance Matrix

**Sintassi:** obj &lt;&lt; Covariance Matrix( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di covarianze per ogni coppia di variabili Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Covariance Matrix( 1 );

```

### Create SAS Job

**Sintassi:** obj &lt;&lt; Create SAS Job

**Descrizione:** Crea un codice SAS Proc Mixed per eseguire metodi di stima simili tramite SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "REML" ) );
obj << Create SAS Job();

```

### Cronbach's Alpha

**Sintassi:** obj &lt;&lt; Cronbach&apos;s Alpha( state=0|1 )

**Descrizione:** Mostra o nasconde un report dell&apos;alfa di Cronbach per l&apos;intero insieme di variabili e dell&apos;alfa se ogni variabile Y è stata individualmente esclusa.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Cronbach's alpha( 1 );

```

### Cronbach's α

**Sintassi:** obj &lt;&lt; Cronbach&apos;s α( state=0|1 )

**Descrizione:** Mostra o nasconde un report dell&apos;alfa di Cronbach per l&apos;intero insieme di variabili e dell&apos;alfa se ogni variabile Y è stata individualmente esclusa.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Cronbach's alpha( 1 );

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Data Table Window;

```

### Ellipsoid 3D Plot

**Sintassi:** obj &lt;&lt; Ellipsoid 3D Plot( column1, column2, column3 )

**Descrizione:** Mostra o nasconde un grafico di superficie che visualizza un&apos;ellissoide al 95% per tre variabili Y selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Ellipsoid 3D Plot( :Ether, :Chloroform, :Benzene );

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
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

### Get Correlation Matrix

**Sintassi:** obj &lt;&lt; Get Correlation Matrix

**Descrizione:** Restituisce la matrice di correlazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
corr = obj << Get Correlation Matrix;
Show( corr );

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
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

### Get Inv Correlation Matrix

**Sintassi:** obj &lt;&lt; Get Inv Correlation Matrix

**Descrizione:** Restituisce la matrice di correlazione inversa.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Inverse Correlations( 1 ) );
icorr = obj << Get Inv Correlation Matrix;
Show( icorr );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
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

### Hoeffding's D

**Sintassi:** obj &lt;&lt; Hoeffding&apos;s D( state=0|1 )

**Descrizione:** Mostra o nasconde un report della statistica D di Hoeffding per ogni coppia di variabili Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Hoeffding's D( 1 );

```

### Hotelling's T Square Test

**Sintassi:** obj &lt;&lt; Hotelling&apos;s T Square Test

**Descrizione:** Esegue un test a un campione per la media della distribuzione multivariata delle variabili Y, dato il vettore medio specificato sotto l&apos;ipotesi nulla.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Hotelling's T Square Test( 1, 0.7, 0.5, 0, -1 );

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

### Impute Missing Data

**Sintassi:** obj &lt;&lt; Impute Missing Data

**Descrizione:** Imputa i valori mancanti per tutte le variabili Y e crea una nuova tabella di dati che contiene sia i valori esistenti, sia i valori mancanti appena imputati.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data;

```

### Inverse Correlations

**Sintassi:** obj &lt;&lt; Inverse Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice delle correlazioni inverse tra tutte le variabili Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Inverse Correlations( 1 );

```

### Jackknife Distances

**Sintassi:** obj &lt;&lt; Jackknife Distances( state = 0|1, &lt;Save Jackknife Distances&gt; )

**Descrizione:** Mostra o nasconde un grafico delle distanze jackknife per ciascuna riga, con una linea di riferimento che indica possibili outlier.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Jackknife Distances( 1 );

```

### Kendall's Tau

**Sintassi:** obj &lt;&lt; Kendall&apos;s Tau( state=0|1 )

**Descrizione:** Mostra o nasconde un report della statistica Tau di Kendall per ogni coppia di variabili Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Kendall's Tau( 1 );

```

### Kendall's τ

**Sintassi:** obj &lt;&lt; Kendall&apos;s τ( state=0|1 )

**Descrizione:** Mostra o nasconde un report della statistica Tau di Kendall per ogni coppia di variabili Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Kendall's Tau( 1 );

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

### Mahalanobis Distances

**Sintassi:** obj &lt;&lt; Mahalanobis Distances( state = 0|1, &lt;Save Outlier Distances&gt; )

**Descrizione:** Mostra o nasconde un grafico delle distanze di Mahalanobis per ciascuna riga, con una linea di riferimento che indica possibili outlier.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Mahalanobis Distances( 1 );

```

### Matrix Format

**Sintassi:** obj = Multivariate(...Matrix Format( "Triangolare inferiore"|"Triangolare superiore"|"Quadrato" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica in che modo le variabili siano visualizzate nella matrice del grafico a dispersione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Matrix Format( "Lower Triangular" ) );

```

### Messaggi degli elementi condivisi

### Multivariate Simple Statistics

**Sintassi:** obj &lt;&lt; Multivariate Simple Statistics( state=0|1 )

**Descrizione:** Mostra o nasconde un report di statistiche semplici multivariate, dove le statistiche sono calcolate escludendo ogni riga che includa un valore mancante.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );
obj << Multivariate Simple Statistics( 1 );

```

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

### Pairwise Correlations

**Sintassi:** obj &lt;&lt; Pairwise Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde un report delle correlazioni appaiate per ciascuna combinazione di variabili Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Pairwise Correlations( 1 );

```

### Parallel Coord Plot

**Sintassi:** obj &lt;&lt; Parallel Coord Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma a coordinate parallele delle variabili.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Parallel Coord Plot( 1 );

```

### Partial Correlation Diagram

**Sintassi:** obj &lt;&lt; Partial Correlation Diagram( state=0|1 )

**Descrizione:** Mostra o nasconde il report del diagramma di correlazione parziale. Questa opzione esegue una scomposizione degli autovalori sulla matrice di correlazione parziale e utilizza i risultati per fornire una rappresentazione visiva delle correlazioni parziali.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Partial Correlation Diagram( 1 );

```

### Partial Correlation Probability

**Sintassi:** obj &lt;&lt; Partial Correlation Probability( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di p-value che corrispondono ciascuno a un test dell&apos;ipotesi nulla che la vera correlazione parziale tra le variabili sia pari a zero.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Partial Correlation Probability( 1 );

```

### Partial Correlations

**Sintassi:** obj &lt;&lt; Partial Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice delle correlazioni parziali tra tutte le variabili Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Partial Correlations( 1 );

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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj &lt;&lt; Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj &lt;&lt; Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
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

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Imputed Formula

**Sintassi:** obj &lt;&lt; Save Imputed Formula

**Descrizione:** Immette i valori dove i valori della colonna Y sono mancanti. Crea e salva una nuova colonna con formula di imputazione rispetto alla tabella di dati originale.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Script Window;

```

### Scatterplot Matrix

**Sintassi:** obj &lt;&lt; Scatterplot Matrix( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di grafici a dispersione per ogni coppia di variabili Y. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( 0 )
);

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

### Set Alpha Level

**Sintassi:** obj &lt;&lt; Set Alpha Level( "0.01"|"0.05"|"0.10"|"0.50"|"Altro…"="0.05" )

**Descrizione:** Cambia il livello alfa degli intervalli di confidenza relativi a ciascuna correlazione "0.05", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Set Alpha Level( 0.01 );
obj << CI of Correlation( 1 );

```

### Set α Level

**Sintassi:** obj &lt;&lt; Set α Level( "0.01"|"0.05"|"0.10"|"0.50"|"Altro…"="0.05" )

**Descrizione:** Cambia il livello alfa degli intervalli di confidenza relativi a ciascuna correlazione "0.05", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Set α Level( 0.01 );
obj << CI of Correlation( 1 );

```

### Spearman's Rho

**Sintassi:** obj &lt;&lt; Spearman&apos;s Rho( state=0|1 )

**Descrizione:** Mostra o nasconde un rapporto della statistica Rho di Spearman per ogni coppia di variabili Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Spearman's Rho( 1 );

```

### Spearman's ρ

**Sintassi:** obj &lt;&lt; Spearman&apos;s ρ( state=0|1 )

**Descrizione:** Mostra o nasconde un rapporto della statistica Rho di Spearman per ogni coppia di variabili Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Spearman's Rho( 1 );

```

### Standardized Alpha

**Sintassi:** obj &lt;&lt; Standardized Alpha( state=0|1 )

**Descrizione:** Mostra o nasconde un report dell&apos;alfa di Cronbach standardizzato per l&apos;intero insieme di variabili e dell&apos;alfa standardizzato se ogni variabile Y è stata individualmente esclusa.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Standardized alpha( 1 );

```

### Standardized α

**Sintassi:** obj &lt;&lt; Standardized α( state=0|1 )

**Descrizione:** Mostra o nasconde un report dell&apos;alfa di Cronbach standardizzato per l&apos;intero insieme di variabili e dell&apos;alfa standardizzato se ogni variabile Y è stata individualmente esclusa.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Standardized alpha( 1 );

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

### T Square

**Sintassi:** obj &lt;&lt; T Square( state = 0|1, &lt;Save T Square&gt; )

**Descrizione:** Mostra o nasconde un grafico dei valori T-² per ciascuna riga, con una linea di riferimento che indica possibili outlier.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << T Square( 1 );

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
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

### T²

**Sintassi:** obj &lt;&lt; T²( state = 0|1, &lt;Save T Square&gt; )

**Descrizione:** Mostra o nasconde un grafico dei valori T-² per ciascuna riga, con una linea di riferimento che indica possibili outlier.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << T Square( 1 );

```

### Univariate Simple Statistics

**Sintassi:** obj &lt;&lt; Univariate Simple Statistics( state=0|1 )

**Descrizione:** Mostra o nasconde un report di statistiche semplici univariate, dove le statistiche sono calcolate per ciascuna colonna in modo indipendente da altre colonne che potrebbero includere dati mancanti.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );
obj << Univariate Simple Statistics( 1 );

```

### Variance Estimation

**Sintassi:** Variance Estimation( REML|ML|Robust|Row-wise|Pairwise )&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Imposta il metodo di stima per il calcolo delle correlazioni.

Se non esistono valori mancanti, l&apos;impostazione di default è A livello di riga.

Se vi sono valori mancanti e il numero di variabili <= 10 e il numero di righe <=5000, l&apos;impostazione di default è REML.

Se sono presenti valori mancanti, il numero di variabili > 10 o il numero di righe > 5000, l&apos;impostazione di default è Appaiato.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "ML" ) );

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

**Sintassi:** obj = Multivariate(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

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

## Principal Component Options

### Messaggi degli elementi

#### 3D Score Plot

**Sintassi:** obj &lt;&lt; 3D Score Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico a dispersione 3D delle componenti principali come raggi in uno spazio tridimensionale.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", "3D Score Plot"n );

```

#### Bartlett Test

**Sintassi:** obj &lt;&lt; Bartlett Test( state=0|1 )

**Descrizione:** Mostra o nasconde un report dei risultati del test di omogeneità per ciascuna delle componenti principali.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Bartlett Test( 1 ) );

```

#### Eigenvectors

**Sintassi:** obj &lt;&lt; Eigenvectors( state=0|1 )

**Descrizione:** Mostra o nasconde un report degli autovettori per ciascuna delle componenti principali.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Eigenvectors( 1 ) );

```

#### Factor Rotation

**Sintassi:** obj &lt;&lt; Factor Rotation( &lt;ML|PC&gt;, 1|SMC, n Rotated, Varimax|Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| Promax )

**Descrizione:** Mostra o nasconde un report del pattern di rotazione dei fattori per le componenti principali.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "ML", "SMC", 2, "Varimax" )
);

```

#### Loading Plot

**Sintassi:** obj &lt;&lt; Loading Plot( number )

**Descrizione:** Mostra o nasconde una matrice di diagrammi che sono rappresentazioni bidimensionali dei pesi fattoriali.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Loading Plot( 2 ) );

```

#### Save Principal Components

**Sintassi:** obj &lt;&lt; Save Principal Components( number )

**Descrizione:** Salva il numero specificato di componenti principali in nuove colonne nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Save Principal Components( 3 ) );

```

#### Save Principal Components with Imputation

**Sintassi:** obj &lt;&lt; Save Principal Components with Imputation( number )

**Descrizione:** Salva il numero specificato di componenti principali, calcolate imputando i valori mancanti, in nuove colonne nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Save Principal Components with Imputation( 3 )
);

```

#### Save Rotated Components

**Sintassi:** obj &lt;&lt; Save Rotated Components

**Descrizione:** Salva le componenti ruotate in nuove colonne nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "SMC", 2, "Varimax" ),
	Save Rotated Components
);

```

#### Save Rotated Components with Imputation

**Sintassi:** obj &lt;&lt; Save Rotated Components with Imputation

**Descrizione:** Salva il numero specificato di componenti ruotate, calcolate imputando i valori mancanti, in nuove colonne nella tabella di dati. Nota: questa opzione è disponibile solo dopo che è stata eseguita la rotazione dei fattori.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "SMC", 2, "Varimax" ),
	Save Rotated Components with Imputation
);

```

#### Score Plot

**Sintassi:** obj &lt;&lt; Score Plot( number )

**Descrizione:** Mostra o nasconde una matrice di grafici a dispersione che contengono gli score per ogni coppia del numero specificato di componenti principali.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Score Plot( 2 ) );

```

#### Score Plot with Imputation

**Sintassi:** obj &lt;&lt; Score Plot with Imputation( number )

**Descrizione:** Mostra o nasconde una matrice di grafici a dispersione che contengono gli score per ogni coppia del numero specificato di componenti principali, utilizzando l&apos;imputazione per i valori mancanti.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Score Plot with Imputation( 2 ) );

```

#### Scree Plot

**Sintassi:** obj &lt;&lt; Scree Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma a linee degli autovalori per ogni componente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Scree Plot( 1 ) );

```

## Scatterplot Matrix Message

### Messaggi degli elementi

#### Density Ellipses

**Sintassi:** Density Ellipses( state=0|1 )

**Descrizione:** Mostra o nasconde le ellissi di densità sulla matrice dei grafici a dispersione.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ) )
);

```

#### Ellipse Alpha

**Sintassi:** obj &lt;&lt; Ellipse Alpha( "0.90"|"0.95"|"0.99"|"Altro…" )

**Descrizione:** Cambia il livello alfa delle ellissi di densità sulla matrice del grafico a dispersione tra ciascuna variabile Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) )
);

```

#### Ellipse Color

**Sintassi:** Ellipse Color( color )

**Descrizione:** Cambia il colore delle ellissi di densità sulla matrice del grafico a dispersione tra ciascuna variabile Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( "Blue" ) )
);

```

#### Ellipse α

**Sintassi:** obj &lt;&lt; Ellipse α( "0.90"|"0.95"|"0.99"|"Altro…" )

**Descrizione:** Cambia il livello alfa delle ellissi di densità sulla matrice del grafico a dispersione tra ciascuna variabile Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) )
);

```

#### Ellipses Coverage

**Sintassi:** obj &lt;&lt; Ellipses Coverage( "0.90"|"0.95"|"0.99"|"Altro…" )

**Descrizione:** Cambia il livello alfa delle ellissi di densità sulla matrice del grafico a dispersione tra ciascuna variabile Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipses Coverage( 0.9 ) )
);

```

#### Ellipses Transparency

**Sintassi:** obj &lt;&lt; Ellipses Transparency( "0.20"|"0.40"|"0.60"|"Altro…" )

**Descrizione:** Cambia la trasparenza delle ellissi di densità ombreggiate sulla matrice del grafico a dispersione tra ciascuna variabile Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Ellipses Transparency( 0.6 ), Shaded Ellipses( 1 ) )
);

```

#### Fit Line

**Sintassi:** obj &lt;&lt; Fit Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea di regressione e l&apos;intervallo di confidenza sulla matrice dei grafici a dispersione.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Fit line( 1 ) )
);

```

#### Heat Map

**Sintassi:** Heat Map( state=0|1 )

**Descrizione:** Mostra o nasconde una heatmap di correlazione nel triangolo superiore a destra della matrice del grafico a dispersione. Il colore di ogni cella nella heatmap rappresenta la correlazione tra ogni coppia di variabili.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Heat Map( 1 ) )
);

```

#### Horizontal

**Sintassi:** Horizontal( state=0|1 )

**Descrizione:** Visualizza gli istogrammi orizzontalmente nella diagonale della matrice del grafico a dispersione tra ciascuna variabile Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Horizontal( 1 ) )
);

```

#### Nonpar Density

**Sintassi:** Nonpar Density( state=0|1 )

**Descrizione:** Mostra o nasconde i profili isometrici ombreggiati della densità non parametrica per i quantili 0,90 e 0,50.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Nonpar Density( 1 ) )
);

```

#### Shaded Ellipses

**Sintassi:** Shaded Ellipses( state=0|1 )

**Descrizione:** Aggiunge/Rimuove l&apos;ombreggiatura dalla regione interna alle ellissi sulla matrice del grafico a dispersione tra ciascuna variabile Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Shaded Ellipses( 1 ) )
);

```

#### Show Correlations

**Sintassi:** Show Correlations( state=0|1 )

**Descrizione:** Mostra o nasconde la correlazione di ogni coppia di variabili nell&apos;angolo in alto a sinistra di ogni grafico a dispersione.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Show Correlations( 1 ) )
);

```

#### Show Counts

**Sintassi:** Show Counts( state=0|1 )

**Descrizione:** Mostra o nasconde i conteggi che etichettano ciascuna barra degli istogrammi nella diagonale della matrice dei grafici a dispersione tra tutte le variabili Y. Nota: disponibile solo dopo che l&apos;istogramma è stato visualizzato.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Vertical( 1 ), Show Counts( 1 ) )
);

```

#### Show Points

**Sintassi:** Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde i punti sulla matrice del grafico a dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Show Points( 1 ) )
);

```

#### Significance Circles

**Sintassi:** Significance Circles( state=0|1 )

**Descrizione:** Mostra o nasconde circonferenze di correlazione nel triangolo superiore a destra della matrice del grafico a dispersione. Il colore della circonferenza rappresenta la correlazione mentre la dimensione della circonferenza rappresenta il test di significatività tra ogni coppia di variabili.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Significance Circles( 1 ) )
);

```

#### Vertical

**Sintassi:** Vertical( state=0|1 )

**Descrizione:** Visualizza gli istogrammi verticalmente nella diagonale della matrice del grafico a dispersione tra ciascuna variabile Y.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Vertical( 1 ) )
);

```

