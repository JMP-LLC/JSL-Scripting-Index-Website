# EWMA Control Chart



## Colonne

### By

**Sintassi:** obj = EWMA Control Chart(...<By( column(s) )>...)

**Descrizione:** Specifica la colonna By durante l&apos;avvio.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );

```

### Subgroup

**Sintassi:** obj = EWMA Control Chart(...<Subgroup( column )>...)

**Descrizione:** Specifica la colonna Sottogruppo durante l&apos;avvio.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ) );

```

### Y

**Sintassi:** obj = EWMA Control Chart(...Y( column(s) )...)

**Descrizione:** Specifica la colonna Y durante l&apos;avvio.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

## Costruttori associati

### EWMA Control Chart

**Sintassi:** EWMA Control Chart( Y( column ), <Subgroup( column )>, <By( column )>, <Center Data( 1 )> )

**Descrizione:** Crea un grafico che traccia le medie mobili ponderate esponenzialmente e un diagramma che traccia le singole osservazioni o le medie dei sottogruppi. Un grafico EWMA è noto anche come grafico di controllo di feedback.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

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

### Alarm Script

**Sintassi:** Alarm Script(Write("...")|Speak("...")|Mail(address, subject,"...") )

**Descrizione:** Invia un messaggio ogni volta che un punto su una carta di controllo non supera un determinato test. Il messaggio può essere inviato al log, può essere pronunciato o inviato via e-mail.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart(
	Alarm Script(
		Write(
			"Out of Control for test ",
			qc_test,
			" in column ",
			qc_col,
			" in sample ",
			qc_sample,
			". \!N"
		)
	),
	Y( :Gap ),
	Subgroup( :Sample )
);
obj << Test Beyond Limits( 1 );

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
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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

### Center Data

**Sintassi:** obj = EWMA Control Chart(...Center Data( state=0|1 )...)

**Descrizione:** Specifica che i dati sono centrati sottraendo il target da ogni osservazione.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ), Lambda( 0.2 ), Center Data( 1 ) );

```

### Connect Thru Missing

**Sintassi:** obj << Connect Thru Missing( state=0|1 )

**Descrizione:** Collega punti quando alcuni campioni hanno valori mancanti o righe escluse.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << Connect Thru Missing( 1 );

```

### Constant Limits

**Sintassi:** obj << Constant Limits( state=0|1 )

**Descrizione:** Utilizza un&apos;espressione asintotica per formare limiti EWMA costanti.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait();
obj << Constant Limits( 1 );

```

### Control Panel

**Sintassi:** obj << Control Panel( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene i valori correnti dei parametri e consente di modificarli. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Control Panel( 0 );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Data Table Window;

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
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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

### Get Limits

**Sintassi:** obj << Get Limits( filename )

**Descrizione:** Importa i limiti di controllo da una tabella di dati selezionata e sostituisce i limiti calcolati sul grafico.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dtLimits = New Table( "EWMA Limits",
	New Column( "_LimitsKey",
		Character,
		Set Values( {"_KSigma", "_Weight", "_Mean", "_Std Dev"} )
	),
	New Column( "Gap", Set Values( [4, 0.3, 15, 0.2655555] ) )
);
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << Get Limits( dtLimits );

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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

### K Sigma

**Sintassi:** obj << K Sigma( K value=3 )

**Descrizione:** Imposta il valore K da moltiplicare per sigma per formare i limiti di controllo sulla media. "3", per impostazione predefinita.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << K Sigma( 4 );

```

### Lambda

**Sintassi:** obj << Lambda( number=0.2 )

**Descrizione:** Specifica la costante di smoothing per la ponderazione dei campioni precedenti. "0.2", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Lambda( 0.5 );

```

### Lambda Slider

**Sintassi:** obj << Lambda Slider( state=0|1 )

**Descrizione:** Mostra o nasconde il cursore lambda sul pannello di controllo.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Lambda Slider( 1 );

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

### Overlay Charts

**Sintassi:** obj << Overlay Charts( state=0|1 )

**Descrizione:** Sovrappone singoli punti o punti barraX se i dati sono sommarizzati, sul grafico EWMA.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Overlay Charts( 1 );

```

### Parameters Report

**Sintassi:** obj << Parameters Report( state=0|1 )

**Descrizione:** Mostra o nasconde il report dei parametri.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Parameters Report( 1 );

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Report View( "Summary" );

```

### Reset to Defaults

**Sintassi:** obj << Reset to Defaults

**Descrizione:** Ripristina tutti i parametri ai valori predefiniti.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Lambda( .9 );
Wait( 1 );
obj << Reset to Defaults();

```

### Restart EWMA after Empty Subgroup

**Sintassi:** obj << Restart EWMA after Empty Subgroup( state=0|1 )

**Descrizione:** Riavvia il calcolo della statistica EWMA dopo ogni sottogruppo mancante o escluso.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << Select Rows( {31, 32, 33, 34, 35} ) << exclude << hide;
Wait();
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ) );
Wait( 1 );
obj << Restart EWMA after empty subgroup( 1 );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Limits

**Sintassi:** obj << Save Limits( "nella colonna "|"nella nuova tabella" )

**Descrizione:** Salva i parametri della carta in una proprietà della colonna o in una nuova tabella di dati.



Se è specificato in Column, il valore medio viene salvato in una proprietà della colonna Limiti di controllo EWMA.



Se è specificato in New Table, Lambda (o peso), la deviazione standard e la media per ogni carta vengono salvati in una nuova tabella di dati.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Limits( "in Column" );
obj << Save Limits( "in New Table" );

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Script Window;

```

### Save Sigma

**Sintassi:** obj << Save Sigma

**Descrizione:** Salva sigma utilizzato nella carta di controllo come proprietà della colonna nella tabella di dati.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Sigma;

```

### Save Summaries

**Sintassi:** obj << Save Summaries

**Descrizione:** Crea una nuova tabella che contiene statistiche di riepilogo e limiti per ogni sottogruppo.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Summaries;

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

### Show ARL

**Sintassi:** obj << Show ARL( state=0|1 )

**Descrizione:** Mostra o nasconde un report con la lunghezza media delle serie (ARL) calcolata dai grafici EWMA e X associati.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show ARL( 1 );

```

### Show Center Line

**Sintassi:** obj << Show Center Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea centrale sul grafico. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show Center Line( 0 );

```

### Show Excluded Region

**Sintassi:** obj = EWMA Control Chart(...Show Excluded Region( state=0|1 )...)

**Descrizione:** Mostra o nasconde la regione esclusa sull’asse del sottogruppo. Vale solo per le variabili del sottogruppo.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << Select Rows( {31, 32, 33, 34, 35, 36, 37, 38, 39, 40} ) << exclude << hide;
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ), Show Excluded Region( 0 ) );

```

### Show Limits

**Sintassi:** obj << Show Limits( state=0|1 )

**Descrizione:** Mostra o nasconde i limiti. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show Limits( 0 );

```

### Show Residuals Chart

**Sintassi:** obj << Show Residuals Chart( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico dei residui.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show Residuals Chart( 0 );

```

### Show Shift Lines

**Sintassi:** obj << Show Shift Lines( state=0|1 )

**Descrizione:** Mostra o nasconde linee verticali che indicano shift nel grafico. Le linee di shift sono tracciate all&apos;inizio di uno shift. Disponibile solo quando è rilevato uno shift nei dati. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << Show Shift Lines( 0 );

```

### Show X Chart

**Sintassi:** obj << Show X Chart( state=0|1 )

**Descrizione:** Mostra o nasconde il grafico di posizione sotto il grafico EWMA. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show X Chart( 0 );

```

### Show X Limits on Overlay Charts

**Sintassi:** obj << Show X Limits on Overlay Charts( state=0|1 )

**Descrizione:** Sovrappone i limiti dal grafico della posizione sul grafico EWMA quando è selezionata l&apos;opzione Grafici in sovrapposizione.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart(
	Y( :Gap ),
	Show X Limits On Overlay Charts( 1 ),
	Overlay Charts( 1 )
);

```

### Sigma

**Sintassi:** obj << Sigma( number )

**Descrizione:** Specifica il valore noto della deviazione standard. Di default, questo parametro è impostato al range mobile medio della colonna Y. Se è presente una variabile di sottogruppo, il parametro Sigma è impostato alla media dei range mobili delle medie dei sottogruppi.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Sigma( 2 );

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

### Target

**Sintassi:** obj << Target( number )

**Descrizione:** Specifica il valore noto della media. Questo è il valore della linea centrale nel grafico. Di default, questo parametro è impostato al valore target nella proprietà della colonna Limiti di specifica per la colonna Y. Se la colonna Y non ha un valore target nella proprietà della colonna Limiti di specifica, questo parametro è impostato alla media generale della colonna Y.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Target( 14.65 );

```

### Test Beyond Limits

**Sintassi:** obj << Test Beyond Limits( state=0|1 )

**Descrizione:** Mostra o nasconde un cerchio rosso attorno a qualsiasi punto che si trova sopra il limite superiore o sotto il limite inferiore nei grafici EWMA e X.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Test Beyond Limits( 1 );

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
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

### Use Overall Mean for Target

**Sintassi:** obj << Use Overall Mean for Target( state=0|1 )

**Descrizione:** Imposta il target alla media generale. Nota: applicabile solo quando il target è impostato utilizzando una proprietà della colonna Limiti di specifica per il target.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Date ) );
Wait( 1 );
obj << Use Overall Mean for Target();

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

**Sintassi:** obj = EWMA Control Chart(...Window View( "Visible"|"Invisible"|"Private" )...)

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

