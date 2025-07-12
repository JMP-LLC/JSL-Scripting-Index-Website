# XGBoost



## Colonne

### Censor

**Sintassi:** obj << Censor( column )

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Factor

**Sintassi:** obj << Factor( column(s) )

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Freq

**Sintassi:** obj << Freq( column )

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Response

**Sintassi:** obj << Response( column(s) )

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Validation

**Sintassi:** obj << Validation( column(s) )

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Weight

**Sintassi:** obj << Weight( column )

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### X

**Sintassi:** obj << X( column(s) )

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Y

**Sintassi:** obj << Y( column(s) )

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## Costruttori associati

### XGBoost

**Sintassi:** XGBoost(Y( columns ), X( columns ))

**Descrizione:** Interfaccia di modellizzazione predittiva per gli alberi eXtreme Gradient Boosted.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

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

### Change Variables

**Sintassi:** obj << Change Variables

**Descrizione:** Modifica le variabili X, Y e altre variabili per modelli successivi.

**JMP Versione aggiunta:** 16

### Compare

**Sintassi:** obj << Compare

**Descrizione:** Aggiorna le metriche di confronto XGBoost.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit( Objective( 0 ) ) );
obj << Compare( Correlation( 1 ) );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Copy Script;

```

### Fit

**Sintassi:** obj << Fit

**Descrizione:** Stima un modello XGBoost. È possibile specificare i parametri XGBoost e le specifiche della stima all&apos;interno di esso.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Measures

**Sintassi:** obj << Get Measures

**JMP Versione aggiunta:** 16

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
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

### Messaggi degli elementi condivisi

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

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Relaunch Analysis;

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
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

### Show Details

**Sintassi:** obj << Show Details( state=0|1 )

**Descrizione:** Mostra altri dettagli.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Show Details( 1 ) );

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

## XGBoost Compare

### Costruttori associati

#### XGBoost Compare

**Sintassi:** XGBoost Compare

### Messaggi degli elementi

#### AUC

**Sintassi:** obj << AUC( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;AUROC, che è l&apos;area sotto la curva caratteristica operativa del ricevitore (receiver operating characteristic curve). Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

#### AUPRC

**Sintassi:** obj << AUPRC( state=0|1 )

**Descrizione:** Area sotto la curva di precisione-richiamo Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

#### Accuracy

**Sintassi:** obj << Accuracy( state=0|1 )

**Descrizione:** Mostra o nasconde l’accuratezza, che è la proporzione di classificazioni corrette. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Censor

**Sintassi:** obj << Censor( state=0|1 )

**Descrizione:** Mostra o nasconde il comando Censura Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

#### Concordance

**Sintassi:** obj << Concordance( state=0|1 )

**Descrizione:** Mostra o nasconde la concordanza, che è l&apos;indice C di Harrell, e misura la forza dell&apos;efficienza di ordinamento Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

#### Correlation

**Sintassi:** obj << Correlation( state=0|1 )

**Descrizione:** Mostra o nasconde la correlazione di Pearson, che è una misura della forza della relazione lineare. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### F1

**Sintassi:** obj << F1( state=0|1 )

**Descrizione:** Mostra o nasconde lo score F1, che è la media armonica di precisione e richiamo (recall). Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Features

**Sintassi:** obj << Features( state=0|1 )

**Descrizione:** Mostra o nasconde la colonna Funzioni. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

#### Freq

**Sintassi:** obj << Freq( state=0|1 )

**Descrizione:** Mostra o nasconde la colonna Freq. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

#### H Measure

**Sintassi:** obj << H Measure( state=0|1 )

**Descrizione:** Mostra o nasconde la misura H, che misura la proporzione di miglioramento rispetto al riferimento. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

#### Hide All Models

**Sintassi:** obj << Hide All Models

**Descrizione:** Nasconde tutti i modelli.

**JMP Versione aggiunta:** 16

#### LogLoss

**Sintassi:** obj << LogLoss( state=0|1 )

**Descrizione:** Mostra o nasconde il logaritmo della funzione di perdita basata sulla verosimiglianza. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### MAE

**Sintassi:** obj << MAE( state=0|1 )

**Descrizione:** Mostra o nasconde il MAE, che è l&apos;errore assoluto medio. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### MCC

**Sintassi:** obj << MCC( state=0|1 )

**Descrizione:** Mostra o nasconde il coefficiente di correlazione di Matthews, che è la correlazione di Pearson per variabili binarie. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Misclass

**Sintassi:** obj << Misclass( state=0|1 )

**Descrizione:** Mostra o nasconde il tasso di errori di classificazione, che è la proporzione di classificazioni errate. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Predictors

**Sintassi:** obj << Predictors( state=0|1 )

**Descrizione:** Mostra o nasconde la colonna Predittori. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

#### Profit

**Sintassi:** obj << Profit( state=0|1 )

**Descrizione:** Mostra o nasconde il profitto previsto. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

#### RMSE

**Sintassi:** obj << RMSE( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;RMSE, che è la radice dell&apos;errore quadratico medio. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### RSquare

**Sintassi:** obj << RSquare( state=0|1 )

**Descrizione:** Mostra o nasconde il valore R-quadro, che è la proporzione di variabilità spiegata. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Remove Hidden Models

**Sintassi:** obj << Remove Hidden Models

**Descrizione:** Rimuove tutti i modelli per i quali la casella Mostra non è selezionata.

**JMP Versione aggiunta:** 16

#### Remove Shown Models

**Sintassi:** obj << Remove Shown Models

**Descrizione:** Rimuove tutti i modelli per i quali è selezionata la casella Mostra e mostra i modelli rimanenti.

**JMP Versione aggiunta:** 15

#### Response

**Sintassi:** obj << Response( state=0|1 )

**Descrizione:** Mostra o nasconde la colonna Risposta. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

#### Show All Models

**Sintassi:** obj << Show All Models

**Descrizione:** Mostra tutti i modelli.

**JMP Versione aggiunta:** 16

#### Training Metrics

**Sintassi:** obj << Training Metrics( state=0|1 )

**Descrizione:** Mostra o nasconde tutte le metriche di training. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Validation

**Sintassi:** obj << Validation( state=0|1 )

**Descrizione:** Mostra o nasconde la colonna Validazione. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

#### Validation Metrics

**Sintassi:** obj << Validation Metrics( state=0|1 )

**Descrizione:** Mostra o nasconde tutte le metriche di validazione. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Weight

**Sintassi:** obj << Weight( state=0|1 )

**Descrizione:** Mostra o nasconde la colonna Peso. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

## XGBoost Fit

### Costruttori associati

#### XGBoost Fit

**Sintassi:** XGBoost Fit

### Messaggi degli elementi

#### Actual by Predicted Plots

**Sintassi:** obj << Actual by Predicted Plots( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico che utilizza i dati di training, con i valori previsti sull&apos;asse X e i valori effettivi sull&apos;asse Y. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Autotune

**Sintassi:** obj << Autotune

**Descrizione:** Crea un piano a spazio pieno flessibile veloce all&apos;interno delle impostazioni min e max dei parametri, per stimare n modelli, dove n è il numero di esecuzioni.

**JMP Versione aggiunta:** 17

#### Confusion Matrices

**Sintassi:** obj << ( fit[number] << Confusion Matrices( state=0|1 ) )

**Descrizione:** Mostra o nasconde una matrice con una tabella a campi incrociati dei livelli effettivi e previsti. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler

**Sintassi:** obj << Contour Profiler

**Descrizione:** Mostra o nasconde grafici interattivi di sezioni trasversali della funzione di previsione.

**JMP Versione aggiunta:** 15

#### Copy Parameters to Launch

**Sintassi:** obj << Copy Parameters to Launch

**Descrizione:** Copia i parametri di questo modello nella sezione di avvio del modello.

**JMP Versione aggiunta:** 16

#### Decision Thresholds

**Sintassi:** obj << Decision Thresholds( state=0|1 )

**Descrizione:** Mostra o nasconde i grafici e le tabelle delle soglie di decisione. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

#### Fit Details

**Sintassi:** obj << Fit Details( state=0|1 )

**Descrizione:** Mostra o nasconde le statistiche del modello stimato. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Generate Python Code

**Sintassi:** obj << Generate Python Code

**Descrizione:** Crea codice Python per training e scoring.

**JMP Versione aggiunta:** 16

#### Importances

**Sintassi:** obj << Importances( state=0|1 )

**Descrizione:** Mostra o nasconde le statistiche di importanza per ogni predittore. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

#### Lift Curves

**Sintassi:** obj << Lift Curves( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma della curva lift. La curva lift traccia il rialzo rispetto alla porzione di osservazioni e fornisce un&apos;altra visione della capacità predittiva di un modello.

**JMP Versione aggiunta:** 15

#### Number of Design Points

**Sintassi:** obj << Number of Design Points( number=10 )

**Descrizione:** Specifica il numero di esecuzioni del piano di ottimizzazione da effettuare. Se si ha un problema di grandi dimensioni, mantenere questo valore relativamente piccolo. "10", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Design Points( 10 ) ) );

```

#### Number of Inner Folds

**Sintassi:** obj << Number of Inner Folds( number=2 )

**Descrizione:** Specifica il numero di partizioni interne nidificate utilizzate durante il processo di ottimizzazione automatica. "2", per impostazione predefinita.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Inner Folds( 2 ) ) );

```

#### Objective

**Sintassi:** obj << Objective( "reg:squarederror"|"binary:logistic"|"binary:hinge"|"count:poisson"|"multi:softprob"|"rank:pairwise"|"rank:ndcg"|"rank:map"|"reg:gamma"|"reg:logistic"|"reg:pseudohubererror"|"reg:squaredlogerror"|"reg:tweedie"|"survival:cox"="reg:squarederror" )

**Descrizione:** Specifica la funzione da ottimizzare per la stima del modello. La funzione deve essere coerente con il tipo di modellizzazione della risposta. "reg:squarederror", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), objective( "reg:squarederror" ) );

```

#### Precision Recall Curves

**Sintassi:** obj << Precision Recall Curves( state=0|1 )

**Descrizione:** Rappresenta il compromesso tra precisione e richiamo per diverse soglie di classificazione. È preferibile in scenari in cui esistono squilibri tra le classi.

**JMP Versione aggiunta:** 15

#### Profiler

**Sintassi:** obj << Profiler

**Descrizione:** Mostra o nasconde il profiler di previsione, che viene utilizzato per esplorare graficamente l&apos;equazione di previsione sezionandola fattore per fattore. Il profiler di previsione contiene funzioni di ottimizzazione.

**JMP Versione aggiunta:** 15

#### Publish Prediction Formula

**Sintassi:** obj << Publish Prediction Formula

**Descrizione:** Crea formule di previsione e le salva come script di colonne della formula nella piattaforma Depot delle formule.

**JMP Versione aggiunta:** 15

#### ROC Curves

**Sintassi:** obj << ROC Curves( state=0|1 )

**Descrizione:** Mostra o nasconde la curva ROC (Receiver Operating Characteristic) per ciascun livello della variabile di risposta. La curva ROC è un grafico della sensibilità rispetto a (1 - specificità).

**JMP Versione aggiunta:** 15

#### Remove All But This Fit

**Sintassi:** obj << ( fit[number] << Remove All But This Fit )

**Descrizione:** Rimuovi i report e i diagrammi per tutti i modelli tranne questo.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Sintassi:** obj << ( fit[number] << Remove Fit )

**Descrizione:** Rimuove l&apos;intero report del modello.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Save Predicteds

**Sintassi:** obj << Save Predicteds

**Descrizione:** Salva i valori previsti in una nuova colonna nella tabella di dati.

**JMP Versione aggiunta:** 15

#### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna nella tabella di dati. I calcoli possono essere lenti per i modelli di grandi dimensioni.

**JMP Versione aggiunta:** 15

#### Save SHAPs

**Sintassi:** obj << Save SHAPs

**Descrizione:** Salva i valori di Shapley nella tabella di dati. Questi valori suddividono le previsioni in componenti per ogni predittore.

**JMP Versione aggiunta:** 17

#### Surface Profiler

**Sintassi:** obj << Surface Profiler

**Descrizione:** Mostra o nasconde grafici interattivi di sezioni trasversali della funzione di previsione.

**JMP Versione aggiunta:** 15

#### Tree Details

**Sintassi:** obj << Tree Details( state=0|1 )

**Descrizione:** Mostra o nasconde la suddivisione di ogni ripartizione dell&apos;albero.

**JMP Versione aggiunta:** 15

#### Tuning Design Table

**Sintassi:** Tuning Design Table( "table name" )

**Descrizione:** Specifica il nome di una tabella di dati JMP aperta con le impostazioni dei parametri utilizzate per stimare una serie di modelli. Le colonne di questa tabella devono corrispondere esattamente ai nomi dei parametri e ogni riga deve contenere i valori di questi parametri da usare per la stima del modello. I parametri che non sono specificati sono impostati sui loro valori da questa finestra di dialogo.

**JMP Versione aggiunta:** 15

#### alpha

**Sintassi:** obj << alpha( number=0.0 )

**Descrizione:** Specifica il termine di regolarizzazione L1 sui pesi. L&apos;aumento di questo valore rende il modello più conservativo. Questo valore deve essere non negativo. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha( 0.0 ) ) );

```

#### alpha_max

**Sintassi:** obj << alpha_max( number=0.5 )

**Descrizione:** Specifica il termine massimo di regolarizzazione L1 sui pesi. L&apos;aumento di questo valore rende il modello più conservativo. Questo valore deve essere non negativo. "0.5", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_max( 2.0 ) ) );

```

#### alpha_min

**Sintassi:** obj << alpha_min( number=0.0 )

**Descrizione:** Specifica il termine minimo di regolarizzazione L1 sui pesi. L&apos;aumento di questo valore rende il modello più conservativo. Questo valore deve essere non negativo. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_min( 0.0 ) ) );

```

#### base_score

**Sintassi:** obj << base_score( number=0.5 )

**Descrizione:** Specifica lo score di previsione iniziale di tutte le istanze, che è la distorsione globale. La media di y è tipicamente una buona scelta. "0.5", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( base_score( 0.5 ) ) );

```

#### booster

**Sintassi:** obj << booster( "gbtree"|"gblinear"|"dart"="gbtree" )

**Descrizione:** Specifica quale booster utilizzare. "gbtree", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gbtree" ) ) );

```

#### colsample_bylevel

**Sintassi:** obj << colsample_bylevel( number=1.0 )

**Descrizione:** Specifica la proporzione di colonne da campionare per ogni livello. Il campionamento avviene una volta per ogni nuovo livello di profondità raggiunto in un albero. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bylevel( 1.0 ) ) );

```

#### colsample_bynode

**Sintassi:** obj << colsample_bynode( number=1.0 )

**Descrizione:** Specifica la proporzione di colonne da campionare per ogni nodo (partizione). Il campionamento avviene ogni volta che si valuta una nuova partizione. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bynode( 1.0 ) ) );

```

#### colsample_bytree

**Sintassi:** obj << colsample_bytree( number=1.0 )

**Descrizione:** Specifica la proporzione di colonne da campionare durante la costruzione di ogni albero. Il campionamento avviene una volta per ogni albero. Questo valore deve essere compreso tra 0 e 1. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree( 1.0 ) ) );

```

#### colsample_bytree_max

**Sintassi:** obj << colsample_bytree_max( number=1.0 )

**Descrizione:** Specifica la proporzione massima di colonne da campionare durante la costruzione di ogni albero. Il campionamento avviene una volta per ogni albero. Questo valore deve essere compreso tra 0 e 1. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_max( 1.0 ) ) );

```

#### colsample_bytree_min

**Sintassi:** obj << colsample_bytree_min( number=0.5 )

**Descrizione:** Specifica la proporzione minima di colonne da campionare durante la costruzione di ogni albero. Il campionamento avviene una volta per ogni albero. Questo valore deve essere compreso tra 0 e 1. "0.5", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_min( 0.3 ) ) );

```

#### eval_metric

**Sintassi:** obj << eval_metric( text )

**Descrizione:** Specifica la metrica mostrata nel grafico dello storico delle iterazioni, ma non influisce sull&apos;effettiva stima del modello. Lasciare vuoto questo valore per la metrica predefinita corrispondente alla funzione obiettivo o specificare uno dei seguenti: rmse, rmsle, mae, logloss, error, error@t, merror, auc, aucpr, ndcg, map, ndcg@n, map@n, ndcg-, map-, ndcg@n-, map@n-, poisson-nloglik, gamma-nloglik, cox-nloglik, gamma-deviance, tweedie-nloglik.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( eval_metric( rmse ) ) );

```

#### feature_selector

**Sintassi:** obj << feature_selector( "cyclic"|"shuffle"|"greedy"|"thrifty"="cyclic" )

**Descrizione:** Specifica il metodo di selezione e ordinamento delle funzionalità per il booster lineare. "cyclic", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost(
	Y( :Weight ),
	X( :Height ),
	Booster( "gblinear" ),
	Fit( feature_selector( "cyclic" ) )
);

```

#### gamma

**Sintassi:** obj << gamma( number=0.0 )

**Descrizione:** Specifica la riduzione minima della perdita necessaria per effettuare un&apos;ulteriore partizione su un nodo foglia dell&apos;albero. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Gamma( 0.0 ) ) );

```

#### grow_policy

**Sintassi:** obj << grow_policy( "depthwise"|"lossguide"="depthwise" )

**Descrizione:** Specifica il metodo utilizzato per aggiungere nuovi nodi agli alberi. Attualmente, questa opzione si applica solo quando tree_method=hist. "depthwise", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( grow_policy( "depthwise" ) ) );

```

#### interaction_constraints

**Sintassi:** obj << interaction_constraints( text )

**Descrizione:** Specifica i vincoli di interazione delle funzioni come un elenco nidificato di indici di funzioni usando parentesi. Le funzioni raggruppate insieme possono interagire solo tra loro.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );
XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( interaction_constraints( "[[0,1]]" ) ) );

```

#### iterations

**Sintassi:** obj << iterations( number=30 )

**Descrizione:** Specifica il numero di iterazioni di boosting. "30", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations( 100 ) ) );

```

#### iterations_max

**Sintassi:** obj << iterations_max( number=100 )

**Descrizione:** Specifica il numero massimo di iterazioni di boosting. "100", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_max( 300 ) ) );

```

#### iterations_min

**Sintassi:** obj << iterations_min( number=20 )

**Descrizione:** Specifica il numero minimo di iterazioni di boosting. "20", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_min( 20 ) ) );

```

#### lambda

**Sintassi:** obj << lambda( number=1.0 )

**Descrizione:** Specifica il termine di regolarizzazione L2 sui pesi. L&apos;aumento di questo valore rende il modello più conservativo. Questo valore deve essere non negativo. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda( 1.0 ) ) );

```

#### lambda_max

**Sintassi:** obj << lambda_max( number=2.0 )

**Descrizione:** Specifica il termine massimo di regolarizzazione L2 sui pesi. L&apos;aumento di questo valore rende il modello più conservativo. Questo valore deve essere non negativo. "2.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_max( 2.0 ) ) );

```

#### lambda_min

**Sintassi:** obj << lambda_min( number=0.0 )

**Descrizione:** Specifica il termine minimo di regolarizzazione L2 sui pesi. L&apos;aumento di questo valore rende il modello più conservativo. Questo valore deve essere non negativo. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_min( 0.0 ) ) );

```

#### learning_rate

**Sintassi:** obj << learning_rate( number=0.3 )

**Descrizione:** Specifica il tasso di apprendimento (learning rate). I tassi di apprendimento minori tendono a stimare meglio ma richiedono più iterazioni per convergere, mentre i tassi di apprendimento maggiori stimano più velocemente. "0.3", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate( 0.3 ) ) );

```

#### learning_rate_max

**Sintassi:** obj << learning_rate_max( number=0.4 )

**Descrizione:** Specifica il tasso massimo di apprendimento. I tassi di apprendimento minori tendono a stimare meglio ma richiedono più iterazioni per convergere, mentre i tassi di apprendimento maggiori stimano più velocemente. "0.4", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_max( 0.4 ) ) );

```

#### learning_rate_min

**Sintassi:** obj << learning_rate_min( number=0.05 )

**Descrizione:** Specifica il tasso minimo di apprendimento (learning rate). I tassi di apprendimento minori tendono a stimare meglio ma richiedono più iterazioni per convergere, mentre i tassi di apprendimento maggiori stimano più velocemente. "0.05", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_min( 0.05 ) ) );

```

#### max_bin

**Sintassi:** obj << max_bin( number=256 )

**Descrizione:** Specifica il numero massimo di bin discreti in cui suddividere le caratteristiche continue. Questa opzione si applica solo per tree_method=hist. "256", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_bin( 256 ) ) );

```

#### max_delta_step

**Sintassi:** obj << max_delta_step( number=0.0 )

**Descrizione:** Specifica il massimo passo delta che ogni foglia di output può effettuare. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_delta_step( 0.0 ) ) );

```

#### max_depth

**Sintassi:** obj << max_depth( number=6 )

**Descrizione:** Specifica la profondità massima dell&apos;albero. Questo valore deve essere un numero intero. La complessità aumenta all&apos;aumentare della profondità. I modelli con profondità_max maggiore hanno un rischio più elevato di sovraparametrizzazione. "6", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth( 6 ) ) );

```

#### max_depth_max

**Sintassi:** obj << max_depth_max( number=8 )

**Descrizione:** Specifica il massimo della profondità massima dell&apos;albero. Questo valore deve essere un numero intero. La complessità aumenta all&apos;aumentare della profondità. I modelli con profondità pari a 2^depth e maggiori hanno un rischio più elevato di sovraparametrizzazione. "8", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_max( 9 ) ) );

```

#### max_depth_min

**Sintassi:** obj << max_depth_min( number=1 )

**Descrizione:** Specifica il minimo della profondità massima dell&apos;albero. Questo valore deve essere un numero intero. La complessità aumenta all&apos;aumentare della profondità. I modelli con profondità pari a 2^depth e maggiori hanno un rischio più elevato di sovraparametrizzazione. "1", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_min( 3 ) ) );

```

#### max_leaves

**Sintassi:** obj << max_leaves( number=0 )

**Descrizione:** Specifica il numero massimo di nodi da aggiungere. Questa opzione si applica solo per grow_policy=lossguide. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_leaves( 0 ) ) );

```

#### min_child_weight

**Sintassi:** obj << min_child_weight( number=1.0 )

**Descrizione:** Specifica la somma minima del peso dell&apos;istanza (Hessiano) richiesta in un figlio. Questo valore è la dimensione minima di ogni foglia. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight( 1.0 ) ) );

```

#### min_child_weight_max

**Sintassi:** obj << min_child_weight_max( number=3.0 )

**Descrizione:** Specifica la somma massima del peso dell&apos;istanza (Hessiano) richiesta in un figlio. Questo valore è la dimensione massima di ogni foglia. "3.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_max( 10.0 ) ) );

```

#### min_child_weight_min

**Sintassi:** obj << min_child_weight_min( number=1.0 )

**Descrizione:** Specifica la somma minima del peso dell&apos;istanza (Hessiano) richiesta in un figlio. Questo valore è la dimensione minima di ogni foglia. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_min( 1.0 ) ) );

```

#### monotone_constraints

**Sintassi:** obj << monotone_constraints( text )

**Descrizione:** Specifica i vincoli di monotonicità per ogni funzione. I vincoli devono essere specificati usando un elenco di valori separati da virgole tra parentesi, dove -1 indica un valore negativo, 1 indica un valore positivo e 0 indica nessun vincolo.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );
XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( monotone_constraints( "(1,1)" ) ) );

```

#### normalize_type

**Sintassi:** obj << normalize_type( "tree"|"forest"="tree" )

**Descrizione:** Specifica il tipo di algoritmo di normalizzazione per il booster DART. "tree", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( normalize_type( "tree" ) ) );

```

#### nthread

**Sintassi:** obj << nthread( number=0 )

**Descrizione:** Specifica il numero di thread paralleli utilizzati per eseguire XGBoost. Per impostazione predefinita, vengono utilizzati tutti i thread disponibili. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( nthread( 8 ) ) );

```

#### num_parallel_tree

**Sintassi:** obj << num_parallel_tree( number=1 )

**Descrizione:** Specifica il numero di alberi boosted da far crescere in parallelo. I risultati poi vengono aggregati tramite medie. "1", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( num_parallel_tree( 1 ) ) );

```

#### one_drop

**Sintassi:** obj << one_drop( number=0 )

**Descrizione:** Quando questo flag è abilitato nel booster DART, almeno un albero viene sempre escluso durante il rilascio (dropout). "0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), one_drop( 0 ) ) );

```

#### predictor

**Sintassi:** obj << predictor( "auto"|"cpu_predictor"|"gpu_predictor"="auto" )

**Descrizione:** Specifica il tipo di algoritmo di previsione. "auto", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( predictor( "cpu_predictor" ) ) );

```

#### process_type

**Sintassi:** obj << process_type( "default"|"update"="default" )

**Descrizione:** Specifica il tipo di processo di boosting da eseguire. "default", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( process_type( "default" ) ) );

```

#### rate_drop

**Sintassi:** obj << rate_drop( number=0.0 )

**Descrizione:** Specifica il tasso di rilascio (dropout) per il booster DART. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), rate_drop( 0.0 ) ) );

```

#### refresh_leaf

**Sintassi:** obj << refresh_leaf( number=1 )

**Descrizione:** Specifica il parametro di rigenerazione dell&apos;aggiornamento. Se impostato a 1 si aggiornano le foglie e i nodi. Se impostato a 0, vengono aggiornati solo i nodi. "1", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( refresh_leaf( 1 ) ) );

```

#### sample_type

**Sintassi:** obj << sample_type( "uniform"|"weighted"="uniform" )

**Descrizione:** Specifica il tipo di algoritmo di campionamento per il booster DART. "uniform", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( sample_type( "uniform" ) ) );

```

#### scale_pos_weight

**Sintassi:** obj << scale_pos_weight( number=1.0 )

**Descrizione:** Specifica il bilanciamento dei pesi positivi e negativi, utili per classi sbilanciate. Un valore tipico da considerare è somma(istanze negative)/somma(istanze positive). "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( scale_posweight( 1.0 ) ) );

```

#### seed

**Sintassi:** obj << seed( number=0 )

**Descrizione:** Specifica il seme per il generatore di numeri casuali. Impostare questo valore per la riproducibilità dei risultati. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( seed( 0 ) ) );

```

#### sketch_eps

**Sintassi:** obj << sketch_eps( number=0.03 )

**Descrizione:** Usato solo per tree_method=approx, questo valore si traduce approssimativamente in (1 / sketch_eps) = numero di bin. "0.03", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( sketch_eps( 0.03 ) ) );

```

#### skip_drop

**Sintassi:** obj << skip_drop( number=0.0 )

**Descrizione:** Specifica la probabilità di saltare la procedura di rilascio (dropout) durante un&apos;iterazione di boosting DART. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), skip_drop( 0.0 ) ) );

```

#### subsample

**Sintassi:** obj << subsample( number=1.0 )

**Descrizione:** Specifica la proporzione di righe da campionare durante ogni iterazione. Questo valore deve essere compreso tra 0 e 1. Si tratta di un tipo di bagging. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample( 1.0 ) ) );

```

#### subsample_max

**Sintassi:** obj << subsample_max( number=1.0 )

**Descrizione:** Specifica la proporzione massima di righe da campionare durante ogni iterazione. Questo valore deve essere compreso tra 0 e 1. Si tratta di un tipo di bagging. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_max( 1.0 ) ) );

```

#### subsample_min

**Sintassi:** obj << subsample_min( number=0.5 )

**Descrizione:** Specifica la proporzione minima di righe da campionare durante ogni iterazione. Questo valore deve essere compreso tra 0 e 1. Si tratta di un tipo di bagging. "0.5", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_min( 0.3 ) ) );

```

#### top_k

**Sintassi:** obj << top_k( number=256 )

**Descrizione:** Specifica il numero di funzioni più importanti da selezionare nel selettore di funzioni greedy e thrifty. Questa opzione è valida solo per il booster gblinear. "256", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gblinear" ), top_k( 0 ) ) );

```

#### tree_method

**Sintassi:** obj << tree_method( "auto"|"exact"|"approx"|"hist"|"gpu_exact"|"gpu_hist"="auto" )

**Descrizione:** Specifica l&apos;algoritmo di costruzione dell&apos;albero utilizzato in XGBoost. "auto", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( tree_method( "auto" ) ) );

```

#### tweedie_variance_power

**Sintassi:** obj << tweedie_variance_power( number=1.5 )

**Descrizione:** Specifica il valore di potenza della distribuzione Tweedie. Questo valore deve essere compreso tra 1 e 2. Questa opzione si applica solo per objective=reg:tweedie. "1.5", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost(
	Y( :Weight ),
	X( :Height ),
	Fit( objective( "reg:tweedie" ), tweedie_variance_power( 1.5 ) )
);

```

#### updater

**Sintassi:** obj << updater( text )

**Descrizione:** Specifica il metodo di aggiornamento dell&apos;albero da eseguire per il booster gbtree. Specificare uno dei seguenti elementi: grow_colmaker, distcol, grow_histmaker, grow_local_histmaker, grow_skmaker, sync, refresh, prune. For the gblinear booster, specify either shotgun or coord_descent.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( updater( "grow_colmaker" ) ) );

```

