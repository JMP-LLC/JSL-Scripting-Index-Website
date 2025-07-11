# Fit Group Orthogonal Supersaturated



### Action

**Sintassi:** obj << Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preimpostazione anonima**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Sintassi:** obj << Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Sintassi:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```js

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

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Data Table Window;

```

### Fit Group Orthogonal Supersaturated

**Sintassi:** Fit Group Orthogonal Supersaturated( Y( column ), X( columns ) )

**Descrizione:** Analizza un piano ortogonale supersaturato di gruppo. Un piano ortogonale supersaturato di gruppo è un piano con meno osservazioni rispetto ai parametri del modello, in cui non è possibile stimare tutti gli effetti principali contemporaneamente.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );

```

### Get By Levels

**Sintassi:** obj << Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Piattaforma con filtro**

```js

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

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintassi:** obj << Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Messaggi degli elementi condivisi

### New JSL Preset

**Sintassi:** New JSL Preset( preset )

**Descrizione:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versione aggiunta:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintassi:** obj << Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```js

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

### Render Preset

**Sintassi:** Render Preset( preset )

**Descrizione:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintassi:** obj << Report;

Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
d = DOE(
	Group Orthogonal Supersaturated Design,
	Make Design,
	Simulate Responses( 1 ),
	By( _bycol )
);
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
d = DOE(
	Group Orthogonal Supersaturated Design,
	Make Design,
	Simulate Responses( 1 ),
	By( _bycol )
);
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Sintassi:** obj << View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### X

**Sintassi:** obj << X( column(s) )

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );

```

### Y

**Sintassi:** obj << Y( column(s) )

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design, Make Design, Simulate Responses( 1 ) );
dt = d << make table;
Wait( 1 );
dt << Fit Group Orthogonal Supersaturated( X( 1 :: 7 ), Y( :Response ) );

```

