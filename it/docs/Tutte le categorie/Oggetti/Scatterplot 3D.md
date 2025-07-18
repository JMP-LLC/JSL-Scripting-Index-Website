# Scatterplot 3D



## Colonne

### By

**Sintassi:** obj &lt;&lt; By( column(s) )

**Descrizione:** Produce report multipli, uno per ogni livello delle variabili.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Coloring

**Sintassi:** obj &lt;&lt; Coloring( column )

**Descrizione:** Colora gli indicatori in base alla variabile selezionata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Coloring( :Sepal length )
);

```

### Columns

**Sintassi:** obj &lt;&lt; Columns( column(s) )

**Descrizione:** Variabili che saranno disponibili per le coordinate X, Y e Z nel grafico 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Freq

**Sintassi:** obj &lt;&lt; Freq( column )

**Descrizione:** Una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Freq( _freqcol )
);

```

### Weight

**Sintassi:** obj &lt;&lt; Weight( column )

**Descrizione:** Una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Weight( _weightcol )
);

```

### Y

**Sintassi:** obj &lt;&lt; Y( column(s) )

**Descrizione:** Variabili che saranno disponibili per le coordinate X, Y e Z nel grafico 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## Costruttori associati

### Scatterplot 3D

**Sintassi:** Scatterplot 3D( Y( columns ) )

**Descrizione:** Genera un grafico a dispersione tridimensionale rotante per tre o più variabili. Se si specificano più di tre variabili, è possibile scorrere in successione le variabili che vengono mostrate nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

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
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Biplot Rays

**Sintassi:** obj &lt;&lt; Biplot Rays( state=0|1 )

**Descrizione:** Mostra/Nasconde i raggi del biplot sul grafico. Con le componenti principali sono visualizzati per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components( 1 );
obj << Biplot Rays( 1 );

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

### Circle Size

**Sintassi:** obj &lt;&lt; Circle Size( number=0.2 )

**Descrizione:** Imposta la dimensione dell&apos;indicatore quando è impostata l&apos;opzione "Punti dimensionati" o si utilizza un ruolo Peso o Freq. "0.2", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

// slightly larger circles
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length ),
	Weight( :Petal width ),
	Circle Size( .3 )
);

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

### Connect Points

**Sintassi:** obj &lt;&lt; Connect Points( state=0|1, &lt;group column name&gt; )

**Descrizione:** Mostra/Nasconde le linee che collegano i punti. Facoltativamente, i punti possono essere raggruppati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Connect Points( 1, :Species );

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
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Data Table Window;

```

### Drop Line Thickness

**Sintassi:** obj &lt;&lt; Drop Line Thickness( fraction=0.03 )

**Descrizione:** Imposta lo spessore della linea di proiezione. "0.03", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Drop Lines( 1 );
Wait( 2 );
obj << Drop Line Thickness( 0.8 );

```

### Drop Lines

**Sintassi:** obj &lt;&lt; Drop Lines( state=0|1 )

**Descrizione:** Disegna o nasconde linee dalla base definita dalla prima e terza variabile a ciascun punto del grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Drop Lines( 1 );

```

### Ellipsoid Coverage

**Sintassi:** obj &lt;&lt; Ellipsoid Coverage( fraction=0.5 )

**Descrizione:** Imposta la copertura dell&apos;ellisse. Per esempio, 0,5 copre la metà più densa dei dati. "0.5", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Ellipsoid Coverage( 0.8 );
obj << Normal Contour Ellipsoids( 1, :Species );

```

### Ellipsoid Transparency

**Sintassi:** obj &lt;&lt; Ellipsoid Transparency( fraction=0.5 )

**Descrizione:** Imposta la trasparenza dell&apos;ellisse. 0 [trasparente] e 1 [opaco] "0.5", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Ellipsoid Transparency( 0.4 );
obj << Normal Contour Ellipsoids( 1, :Species );

```

### Frame3D

**Sintassi:** obj &lt;&lt; Frame3D( &lt;commands passed to Frame3D&gt; )

**Descrizione:** Invia comandi di visualizzazione al grafico 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Zoom( 0.9075 ) );

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
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

### Jitter

**Sintassi:** obj &lt;&lt; Jitter( state=0|1 )

**Descrizione:** Aggiunge una piccola componente casuale (jitter) ai punti spostandoli leggermente sul grafico a dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Petal length, :Petal width, :Species ), Jitter( 0 ) );

```

### Legend

**Sintassi:** obj &lt;&lt; Legend( &lt;Legend Model ID&gt; )

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

### Nonpar Density Contour

**Sintassi:** obj &lt;&lt; Nonpar Density Contour( state=0|1, &lt;group column name&gt; )

**Descrizione:** Disegna intorno ai punti uno shell del profiler isometrico del kernel pari al 95%.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Nonpar Density Contour( 1, :Species );

```

### Nonpar Density Contour Settings

**Sintassi:** obj &lt;&lt; Nonpar Density Contour Settings( surface, on=0|1, &lt;quantile&gt;, &lt;transparency&gt;, &lt;color&gt; )

**Descrizione:** Impostazioni della isosuperficie

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Nonpar Density Contour( 1 );
obj << Nonpar Density Contour Settings( 1, 1, .5, .6, Green );

```

### Normal Contour Ellipsoids

**Sintassi:** obj &lt;&lt; Normal Contour Ellipsoids( state=0|1, &lt;group column name&gt; )

**Descrizione:** Mostra/Nasconde le ellissoidi del profiler isometrico normale.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Normal Contour Ellipsoids( 1, :Species );

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

### Principal Components

**Sintassi:** obj &lt;&lt; Principal Components( state=0|1 )

**Descrizione:** Visualizza il report delle componenti principali e i raggi sul grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components;

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
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

### Remove Prin Comp

**Sintassi:** obj &lt;&lt; Remove Prin Comp

**Descrizione:** Rimuove il report delle componenti principali e i raggi dal grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components( 1 );
Wait( 2 );
obj << Remove Prin Comp;

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
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Report View( "Summary" );

```

### Rotated Components

**Sintassi:** obj &lt;&lt; Rotated Components( PC|ML, ONE|SMC , number, Varimax| Biquartimax| Quartimax|Equamax|Orthomax| Factorparsimax... )

**Descrizione:** Visualizza un report con componenti principali ruotate dove le componenti si allineano più esattamente con lo spazio delle coordinate. Il secondo parametro definisce le diagonali utilizzate nella comunanza a priori e può essere SMC o ONE (componenti principali).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Rotated Components( PC, ONE, 3, Varimax );

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
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
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
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
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
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Prin Components

**Sintassi:** obj &lt;&lt; Save Prin Components( number )

**Descrizione:** Salva le componenti principali come nuove colonne nella tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components( 1 );
obj << Save Prin Components( 3 );

```

### Save Rotated Components

**Sintassi:** obj &lt;&lt; Save Rotated Components

**Descrizione:** Salva le componenti principali ruotate come nuove colonne nella tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Rotated Components( PC, ONE, 3, Varimax );
obj << Save Rotated Components;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
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
obj = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

### Show Controls

**Sintassi:** obj &lt;&lt; Show Controls( state=0|1 )

**Descrizione:** Mostra/Nasconde il pannello di controllo nella parte inferiore del grafico a dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Controls( 1 );

```

### Show Points

**Sintassi:** obj &lt;&lt; Show Points( state=0|1 )

**Descrizione:** Mostra/Nasconde i punti sul grafico a dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Points( 1 );

```

### Show Ray Labels

**Sintassi:** obj &lt;&lt; Show Ray Labels( state=0|1 )

**Descrizione:** Mostra/Nasconde etichette sui raggi. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Principal Components( 1 );
obj << Biplot Rays( 1 );
obj << Show Ray Labels( 1 );

```

### Sized Points

**Sintassi:** obj &lt;&lt; Sized Points( state=0|1 )

**Descrizione:** Accresce o riduce i punti sul grafico a dispersione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Sized Points( 1 );

```

### Std Prin Components

**Sintassi:** obj &lt;&lt; Std Prin Components( state=0|1 )

**Descrizione:** Visualizza il report delle componenti principali standardizzate e i raggi sul grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Std Prin Components;

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
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Scatterplot 3D(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

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

## Frame3D

### Costruttori associati

#### Graph 3D Box

**Sintassi:** y = Graph 3D Box()

**Descrizione:** Invia comandi di visualizzazione al grafico 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Messaggi degli elementi

#### Add Ellipsoid

**Sintassi:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix )obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means)obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Descrizione:** Disegna una ellissoide nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D(
	Add Ellipsoid(
		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],
		[6.55099 2.96919 5.5066],
		[0.57829 0.29087 0.53668]
	)
);

```

#### Add Markers

**Sintassi:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Descrizione:** Disegna n indicatori nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**Sintassi:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Descrizione:** Disegna un vettore o una freccia nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**Sintassi:** obj &lt;&lt; Get Axes

**Descrizione:** Restituisce lo stato di visualizzazione degli assi nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Axes );
Show( s );

```

#### Get Box

**Sintassi:** obj &lt;&lt; Get Box

**Descrizione:** Restituisce lo stato di visualizzazione del frame del riquadro nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Grab Handles

**Sintassi:** obj &lt;&lt; Get Grab Handles

**Descrizione:** Restituisce lo stato di visualizzazione delle maniglie di trascinamento nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Graph Size

**Sintassi:** obj &lt;&lt; Get Graph Size

**Descrizione:** Restituisce le dimensioni del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Graph Size );
Show( s );

```

#### Get Grids

**Sintassi:** obj &lt;&lt; Get Grids

**Descrizione:** Restituisce lo stato di visualizzazione delle griglie nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Grids );
Show( s );

```

#### Get Hide Lights Border

**Sintassi:** obj &lt;&lt; Get Hide Lights Border

**Descrizione:** Restituisce lo stato del bordo luminoso intorno al grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

#### Get Line Scale

**Sintassi:** obj &lt;&lt; Get Line Scale

**Descrizione:** Restituisce la larghezza della linea per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
w = obj << Frame3D( Get Line Scale );
Show( w );

```

#### Get Marker Quality

**Sintassi:** obj &lt;&lt; Get Marker Quality

**Descrizione:** Restituisce le caratteristiche degli indicatori (come forma e ombreggiatura) per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

#### Get Marker Scale

**Sintassi:** obj &lt;&lt; Get Marker Scale

**Descrizione:** Restituisce le dimensioni degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

#### Get Marker Transparency

**Sintassi:** obj &lt;&lt; Get Marker Transparency

**Descrizione:** Restituisce la trasparenza degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

#### Get Rotation

**Sintassi:** obj &lt;&lt; Get Rotation

**Descrizione:** Restituisce la rotazione corrente per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
r = obj << Frame3D( Get Rotation() );
Show( r );

```

#### Get Text Scale

**Sintassi:** obj &lt;&lt; Get Text Scale

**Descrizione:** Restituisce la dimensione del testo per gli assi del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Text Scale );
Show( s );

```

#### Get View Ortho

**Sintassi:** obj &lt;&lt; Get View Ortho

**Descrizione:** Restituisce lo stato della visualizzazione ortogonale del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
o = obj << Frame3D( Get View Ortho );
Show( o );

```

#### Get View Perspective

**Sintassi:** obj &lt;&lt; Get View Perspective

**Descrizione:** Restituisce la prospettiva di visualizzazione per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Get View Perspective );
Show( p );

```

#### Get View Zoom

**Sintassi:** obj &lt;&lt; Get View Zoom

**Descrizione:** Restituisce lo zoom corrente per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
z = obj << Frame3D( Get View Zoom );
Show( z );

```

#### Get Wall Color

**Sintassi:** obj &lt;&lt; Get Wall Color

**Descrizione:** Restituisce il colore delle pareti per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Wall Color );
Show( c );

```

#### Get Walls

**Sintassi:** obj &lt;&lt; Get Walls

**Descrizione:** Restituisce lo stato di visualizzazione delle pareti del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Walls );
Show( s );

```

#### Get X Axis Color

**Sintassi:** obj &lt;&lt; Get X Axis Color

**Descrizione:** Restituisce il colore dell&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

#### Get X Axis Label

**Sintassi:** obj &lt;&lt; Get X Axis Label

**Descrizione:** Restituisce l&apos;etichetta per l&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

#### Get Y Axis Color

**Sintassi:** obj &lt;&lt; Get Y Axis Color

**Descrizione:** Restituisce il colore dell&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

#### Get Y Axis Label

**Sintassi:** obj &lt;&lt; Get Y Axis Label

**Descrizione:** Restituisce l&apos;etichetta per l&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

#### Get Z Axis Color

**Sintassi:** obj &lt;&lt; Get Z Axis Color

**Descrizione:** Restituisce il colore dell&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

#### Get Z Axis Label

**Sintassi:** obj &lt;&lt; Get Z Axis Label

**Descrizione:** Restituisce l&apos;etichetta per l&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

#### Set Axes

**Sintassi:** obj &lt;&lt; Set Axes( state=0|1 )

**Descrizione:** Mostra/Nasconde gli assi X, Y e Z nel grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**Sintassi:** obj &lt;&lt; Set Box( state=0|1 )

**Descrizione:** Mostra/Nasconde il frame del riquadro nel grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**Sintassi:** obj &lt;&lt; Set Graph Size( x, y )

**Descrizione:** Imposta le dimensioni del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**Sintassi:** obj &lt;&lt; Set Grids( state=0|1 )

**Descrizione:** Mostra/Nasconde le griglie nel grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**Sintassi:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**Descrizione:** Mostra/Nasconde il bordo luminoso intorno al grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**Sintassi:** obj &lt;&lt; Set Line Scale( number )

**Descrizione:** Imposta la larghezza della linea per la griglia del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**Sintassi:** obj &lt;&lt; Set Marker Quality( number )

**Descrizione:** Imposta le caratteristiche degli indicatori (come forma e ombreggiatura) per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**Sintassi:** obj &lt;&lt; Set Marker Scale( number )

**Descrizione:** Imposta le dimensioni degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**Sintassi:** obj &lt;&lt; Set Marker Transparency( fraction )

**Descrizione:** Imposta la trasparenza degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**Sintassi:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**Descrizione:** Imposta il tasso di oscillazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**Sintassi:** obj &lt;&lt; Set Rotation( X, Y, Z )

**Descrizione:** Ruota il frame fino alle coordinate specificate.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**Sintassi:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**Descrizione:** Ruota il grafico su un asse specificato. I valori dx e dy sono un movimento delta del mouse rispetto al punto (sx, sy).

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**Sintassi:** obj &lt;&lt; Set Text Scale( number )

**Descrizione:** Imposta la dimensione del testo per gli assi del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**Sintassi:** obj &lt;&lt; Set View Ortho( state=0|1 )

**Descrizione:** Visualizza il grafico in proiezione ortogonale o lineare.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**Sintassi:** obj &lt;&lt; Set View Perspective( fraction )

**Descrizione:** Imposta la prospettiva di visualizzazione per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**Sintassi:** obj &lt;&lt; Set View Zoom( number )

**Descrizione:** Imposta lo zoom per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**Sintassi:** obj &lt;&lt; Set Wall Color( number )

**Descrizione:** Imposta il colore delle pareti per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**Sintassi:** obj &lt;&lt; Set Walls( state=0|1 )

**Descrizione:** Mostra/Nasconde le pareti del grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**Sintassi:** obj &lt;&lt; Set X Axis Color( color )

**Descrizione:** Imposta il colore dell&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**Sintassi:** obj &lt;&lt; Set X Axis Label( string )

**Descrizione:** Imposta l&apos;etichetta per l&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**Sintassi:** obj &lt;&lt; Set Y Axis Color( color )

**Descrizione:** Imposta il colore dell&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**Sintassi:** obj &lt;&lt; Set Y Axis Label( string )

**Descrizione:** Imposta l&apos;etichetta per l&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**Sintassi:** obj &lt;&lt; Set Z Axis Color( color )

**Descrizione:** Imposta il colore dell&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**Sintassi:** obj &lt;&lt; Set Z Axis Label( string )

**Descrizione:** Imposta l&apos;etichetta per l&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**Sintassi:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descrizione:** Imposta i valori per l&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**Sintassi:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descrizione:** Imposta i valori per l&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**Sintassi:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descrizione:** Imposta i valori per l&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**Sintassi:** obj &lt;&lt; get light active( light number )

**Descrizione:** Restituisce la fonte luminosa specificata attiva che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

#### get light color

**Sintassi:** obj &lt;&lt; get light color( light number )

**Descrizione:** Restituisce come elenco {red, green, blue} il colore della fonte luminosa specificata che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

#### get light position

**Sintassi:** obj &lt;&lt; get light position( light number )

**Descrizione:** Restituisce come elenco {x, y, z} la posizione della fonte luminosa specificata che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

#### set light active

**Sintassi:** obj &lt;&lt; set light active( light number, state=0|1 )

**Descrizione:** Attiva la fonte luminosa specificata che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**Sintassi:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**Descrizione:** Imposta il colore della fonte luminosa che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**Sintassi:** obj &lt;&lt; set light position( light number, X, Y, Z )

**Descrizione:** Imposta la posizione della fonte luminosa che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

