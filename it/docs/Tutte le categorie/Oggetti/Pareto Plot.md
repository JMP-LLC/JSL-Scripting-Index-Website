# Pareto Plot



## Colonne

### By

**Sintassi:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );

```

### Cause

**Sintassi:** obj &lt;&lt; Cause( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Freq

**Sintassi:** obj &lt;&lt; Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Freq( _freqcol )
);
obj << Show Pareto Bars( 0 );

```

### Grouping

**Sintassi:** obj &lt;&lt; Grouping( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Subcategory

**Sintassi:** obj &lt;&lt; Subcategory( column )

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Weight

**Sintassi:** obj &lt;&lt; Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Weight( _weightcol )
);
obj << Show Pareto Bars( 0 );

```

### X

**Sintassi:** obj &lt;&lt; X( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Y

**Sintassi:** obj &lt;&lt; Y( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

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

### Alias

**Sintassi:** obj &lt;&lt; Alias( cause, alias )

**Descrizione:** Imposta un nome diverso per una causa.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Alias( "doping", "substitution" ) );

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

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

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bar Label Format

**Sintassi:** obj &lt;&lt; Bar Label Format

**Descrizione:** Imposta il formato delle etichette delle barre di Pareto.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Label( 1 ),
	Bar Label Format( "Currency", "USD", Use thousands separator( 0 ), 12, 0 )
);

```

### Bar Style

**Sintassi:** obj &lt;&lt; Bar Style( "Barra"|"Float" )

**Descrizione:** Controlla la visualizzazione delle barre di Pareto.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Bar Style( Float );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

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

### Cause Colors

**Sintassi:** obj &lt;&lt; Cause Colors( { { causeName, color }, ...} )

**Descrizione:** Cambia il colore delle barre specificate.

**JMP Versione aggiunta:** 17

**Elenco dei colori singoli**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( {"corrosion", "Light Gray"} );

```

**Elenco di colori multipli**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( {{"miscellaneous", "Purple"}, {"silicon defect", "Red"}} );

```

**Singolo colore RGB**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( {117, 150, 200} );

```

**Tutti i colori**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( "Orange" );

```

### Cause Labels

**Sintassi:** obj &lt;&lt; Cause Labels( { { causeName, 0|1 }, ...} )

**Descrizione:** Visualizza il conteggio come etichetta per le barre specificate.

**JMP Versione aggiunta:** 17

**Causa singola**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Cause Labels( {"contamination", 1} )
);

```

**Elenco delle cause**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Cause Labels( {{"contamination", 1}, {"oxide defect", 1}} )
);

```

**Tutte le cause**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Cause Labels( 1 ) );

```

### Cause Markers

**Sintassi:** obj &lt;&lt; Cause Markers( { { causeName, marker }, ...} )

**Descrizione:** Cambia l&apos;indicatore di percentuale cumulativa mostrato sul grafico per le barre specificate.

**JMP Versione aggiunta:** 17

**Causa singola**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Markers( {"silicon defect", "Diamond"} );

```

**Elenco delle cause**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Markers( {{"miscellaneous", "Square"}, {"silicon defect", "Diamond"}} );

```

**Tutte le cause**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Markers( 1 );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

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

### Combine Causes

**Sintassi:** obj &lt;&lt; Combine Causes( {cause1, cause2, ... } | &lt;&lt; First(N) | &lt;&lt; Last(N), &lt;label&gt; )

**Descrizione:** Combina le cause specificate in una singola causa. Le cause possono essere specificate come un elenco di nomi di cause o inviando il messaggio Primi o Ultimi con un numero di cause da combinare. Facoltativamente, può essere specificata un&apos;etichetta per la causa combinata.

**Con etichetta**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Others" )
);

```

**Invia ultimi**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Combine Causes( <<Last( 2 ), "Last 2" )
);

```

**Nessuna etichetta**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
Wait( 2 );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Copy Script;

```

### Cum Line Connect Style

**Sintassi:** obj &lt;&lt; Cum Line Connect Style( "Linea"|"Curva"|"Passo" )

**Descrizione:** Controlla lo stile del collegamento della linea della percentuale cumulativa.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Cum Line Connect Style( "Step" );

```

### Cum Percent Curve Color

**Sintassi:** obj &lt;&lt; Cum Percent Curve Color( color )

**Descrizione:** Modifica il colore della curva della percentuale cumulativa sul grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Cum Percent Curve Color( "Red" );

```

### Cum Percent Label Format

**Sintassi:** obj &lt;&lt; Cum Percent Label Format

**Descrizione:** Imposta il formato delle etichette degli indicatori di percentuale cumulativa.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Label Cum Percent Points( 1 ),
	Cum Percent Label Format( "Percent", 12, 1 )
);

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Data Table Window;

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj &lt;&lt; Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Causes

**Sintassi:** obj &lt;&lt; Get Causes( &lt;"First" | "Last" | "First %" | "Last %", number&gt; )

**Descrizione:** Restituisce un elenco di nomi di cause dal grafico di Pareto in base all&apos;ordine corrente di apparizione. Se non vengono fornite opzioni, allora vengono restituite tutte le cause. Altrimenti, usa la parola chiave e il numero per restituire o i primi N, gli ultimi N, il primo N percento, o l&apos;ultimo N percento.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes( "First", 3 );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes( "Last %", 10 );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot(
	Cause( :Causes ),
	Freq( :Count ),
	Combine Causes( {"Corrosion", "Metallization", "Doping"}, "3 Others" ),
	Move to Last( {"3 Others"} )
);
obj << Get Causes( "Last", 3 );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
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

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

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

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Group Settings

**Sintassi:** obj &lt;&lt; Group Settings( Column, &lt;Levels In View( number )&gt;, &lt;Start Level( number ), &lt;Show Title (0|1)&gt;, &lt;Title Color( color )&gt;, &lt;Levels Color( color )&gt; )

**Descrizione:** Controlla l&apos;aspetto di Pareto raggruppato

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Group Settings(
		:clean,
		Levels In View( 1 ),
		Start Level( 1 ),
		Title Color( "Blue" ),
		Levels Color( "Light Blue" )
	)
);

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

### Label Cum Percent Points

**Sintassi:** obj &lt;&lt; Label Cum Percent Points( state=0|1 )

**Descrizione:** Mostra/Nasconde le etichette che mostrano le percentuali cumulative per ciascuna barra sul grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Label Cum Percent Points( 1 );

```

### Legend Position

**Sintassi:** obj &lt;&lt; Legend Position( ("Right" | "Bottom" | "Left" | "Top") )

**Descrizione:** Imposta la posizione della legenda.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Legend Position( "Bottom" );

```

### Legend Settings

**Sintassi:** obj &lt;&lt; Legend Settings

**Descrizione:** Apre una finestra di dialogo per modificare le proprietà della legenda.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
Wait( 1 );
obj << Legend Settings();

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

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

### Messaggi degli elementi condivisi

### Move to First

**Sintassi:** obj &lt;&lt; Move to First( {level1, level2, ...} | &lt;&lt; First(N) | &lt;&lt; Last(N) )

**Descrizione:** Sposta le barre per i livelli specificati in modo che compaiano per primi. I livelli possono essere specificati come un elenco di nomi di cause o inviando il messaggio Primi o Ultimi con un numero di cause da combinare.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Move to First( {"corrosion", "doping"} );

```

### Move to Last

**Sintassi:** obj &lt;&lt; Move to Last( {level1, level2, ...} | &lt;&lt; First(N) | &lt;&lt; Last(N) )

**Descrizione:** Sposta le barre per i livelli specificati in modo che compaiano per primi. I livelli possono essere specificati come un elenco di nomi di cause o inviando il messaggio Primi o Ultimi con un numero di cause da combinare.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Move to Last( {"miscellaneous"} );

```

### N Legend

**Sintassi:** obj &lt;&lt; N Legend( state=0|1 )

**Descrizione:** Visualizza la dimensione campionaria totale nell&apos;area del diagramma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << N Legend( 1 );

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

### No Plot

**Sintassi:** obj &lt;&lt; No Plot( state=0|1 )

**Descrizione:** Chiude il riquadro per il grafico di Pareto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ), Per Unit Rates( 1 ) );
obj << No Plot( 1 );

```

### Orientation

**Sintassi:** obj &lt;&lt; Orientation( "Verticale"|"Orizzontale" )

**Descrizione:** Controlla l&apos;orientamento del grafico di Pareto.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Orientation( "Horizontal" );

```

### Pareto Line Connect Style

**Sintassi:** obj &lt;&lt; Pareto Line Connect Style( "Linea"|"Curva"|"Passo" )

**Descrizione:** Controlla lo stile del collegamento della linea di Pareto.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Show Pareto Bars( 0 )
);
obj << Pareto Line Connect Style( "Step" );

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

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

### Per Unit Rates

**Sintassi:** obj &lt;&lt; Per Unit Rates( state=0|1 )

**Descrizione:** Confronta i tassi di difetti tra gruppi. Se si specifica una dimensione campionaria, al report vengono aggiunte le colonne difetti per unità (DPU) e parti per milione (PPM).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot(
	Cause( :Causes ),
	Per Unit Analysis( Constant( Sample Size( 1000 ) ) ),
	Freq( :Count )
);
obj << Per Unit Rates( 1 );

```

### Percent Scale

**Sintassi:** obj &lt;&lt; Percent Scale( state=0|1 )

**Descrizione:** Visualizza l&apos;asse verticale sinistro come scala percentuale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Percent Scale( 1 );

```

### Pie Chart

**Sintassi:** obj &lt;&lt; Pie Chart( state=0|1 )

**Descrizione:** Visualizza le barre come grafico a torta.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Pie Chart( 1 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj &lt;&lt; Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj &lt;&lt; Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

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

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

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

### Reorder Horizontal

**Sintassi:** obj &lt;&lt; Reorder Horizontal( level1, level2, ... )

**Descrizione:** Riordina i grafici di Pareto raggruppati orizzontalmente quando sono presenti due o più gruppi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
Wait( 2 );
obj << Reorder Horizontal( "before", "after" );

```

### Reorder Vertical

**Sintassi:** obj &lt;&lt; Reorder Vertical( level1, level2, ... )

**Descrizione:** Riordina i grafici di Pareto raggruppati verticalmente quando sono presenti due o più variabili.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
Wait( 2 );
obj << Reorder Vertical( "Process B", "Process A" );

```

### Report

**Sintassi:** obj &lt;&lt; Report;Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
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

### Separate Causes

**Sintassi:** obj &lt;&lt; Separate Causes

**Descrizione:** Separa le cause combinate in barre separate.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );
Wait( 2 );
obj << Separate Causes;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Other Causes" );
Wait( 2 );
obj << Separate Causes( "Other Causes" );

```

### Show Cum Percent Axis

**Sintassi:** obj &lt;&lt; Show Cum Percent Axis( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;asse della percentuale cumulativa sul lato destro del diagramma. Nota: disponibile solo per il diagramma più a destra quando è presente una variabile X o di raggruppamento. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Cum Percent Axis( 1 );

```

### Show Cum Percent Curve

**Sintassi:** obj &lt;&lt; Show Cum Percent Curve( state=0|1 )

**Descrizione:** Mostra/Nasconde la curva della percentuale cumulativa. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Cum Percent Curve( 1 );

```

### Show Cum Percent Points

**Sintassi:** obj &lt;&lt; Show Cum Percent Points( state=0|1 )

**Descrizione:** Mostra/Nasconde i punti della percentuale cumulativa sul grafico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Show Cum Percent Points( 1 );

```

### Show Error Bars

**Sintassi:** obj &lt;&lt; Show Error Bars( state=0|1 )

**Descrizione:** Mostra o nasconde le barre di errore sulle barre di Pareto per l&apos;intervallo di confidenza.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Error Bars( 1 );

```

### Show Pareto Bars

**Sintassi:** obj &lt;&lt; Show Pareto Bars( state=0|1 )

**Descrizione:** Mostra o nasconde le barre che visualizzano il valore per ogni causa. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Show Pareto Line

**Sintassi:** obj &lt;&lt; Show Pareto Line( state=0|1 )

**Descrizione:** Mostra o nasconde una linea che collega i valori per ogni causa.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Pareto Line( 1 );

```

### Show Pareto Markers

**Sintassi:** obj &lt;&lt; Show Pareto Markers( state=0|1 )

**Descrizione:** Mostra o nasconde gli indicatori sul valore per ogni causa.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Pareto Markers( 1 );

```

### Subcategory Bar Style

**Sintassi:** obj &lt;&lt; Subcategory Bar Style( "Affiancato"|"Impilato"|"Punto"|"Nidificato"|"Singolo"|"Ago"|"Float" )

**Descrizione:** Controlla la visualizzazione delle barre quando è presente una sottocategoria.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

### Subset

**Sintassi:** obj &lt;&lt; Subset

**Descrizione:** Crea una tabella di dati del sottoinsieme dalle selezioni nel grafico di Pareto

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
dt << Select Where( :Causes == "Corrosion" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Subset;

```

### Swap Group Orientation

**Sintassi:** obj &lt;&lt; Swap Group Orientation( state=0|1 )

**Descrizione:** Scambia i gruppi orizzontale e verticale. Se è presente solo un gruppo, cambia l&apos;orientamento della visualizzazione.

**JMP Versione aggiunta:** 17

**Due gruppi**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
Wait( 2 );
obj << Swap Group Orientation( true );

```

**Un gruppo**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );
Wait( 2 );
obj << Swap Group Orientation( true );

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Synchronize Y Axes

**Sintassi:** obj &lt;&lt; Synchronize Y Axes( state=0|1 )

**Descrizione:** Blocca l&apos;asse y destro in modo che lo zoom e la panoramica siano sincronizzati con l&apos;asse y sinistro Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Synchronize Y Axes( 0 );

```

### Tables Match Plot

**Sintassi:** obj &lt;&lt; Tables Match Plot( {&lt;Per Unit Rates( 0|1 )&gt;, &lt;Test Rate Within Groups( 0|1 )&gt;, &lt;Test Rates Across Groups( 0|1 )&gt;} )

**Descrizione:** Controlla se le tabelle di analisi del conteggio mostrano i valori delle cause combinate che corrispondono al grafico di Pareto o le cause originali non combinate. Un valore pari a 1 mostra i valori delle cause combinate. Un valore pari a 0 mostra i valori non combinati. Non tutte le tabelle devono essere specificate nel comando.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Per Unit Rates( 1 ),
	Test Rate Within Groups( 1 ),
	Test Rates Across Groups( 1 ),
	Combine Causes( {"silicon defect", "oxide defect", "doping"}, "3 Others" ),
	Move to Last( {"corrosion", "miscellaneous", "3 Others"} )
);
obj << Tables Match Plot(
	{Per Unit Rates( 1 ), Test Rate Within Groups( 1 ), Test Rates Across Groups( 1 )}
);

```

### Test Rate Within Groups

**Sintassi:** obj &lt;&lt; Test Rate Within Groups( state=0|1 )

**Descrizione:** Effettua un test del rapporto di verosimiglianza entro gruppi per verificare se le cause hanno pari rapporti entro i gruppi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );
obj << Test Rate Within Groups( 1 );

```

### Test Rates Across Groups

**Sintassi:** obj &lt;&lt; Test Rates Across Groups( state=0|1 )

**Descrizione:** Effettua un test del rapporto di verosimiglianza tra gruppi per verificare se le cause hanno pari rapporti tra i gruppi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
obj << Test Rates Across Groups( 1 );

```

### Threshold of Combined Causes

**Sintassi:** obj &lt;&lt; Threshold of Combined Causes

**Descrizione:** Combina le cause che ricadono al di sotto della soglia. Ciò accade all&apos;avvio iniziale della piattaforma.

**% coda**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Threshold of Combined Causes( Tail %( 25 ) )
);

```

**Conteggio**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Threshold of Combined Causes( Count( 5 ) )
);

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Ungroup Plots

**Sintassi:** obj &lt;&lt; Ungroup Plots( state=0|1 )

**Descrizione:** Separa i grafici di Pareto raggruppati quando sono presenti due o più gruppi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
Wait( 2 );
obj << Ungroup Plots( 1 );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Show Pareto Bars(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

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

