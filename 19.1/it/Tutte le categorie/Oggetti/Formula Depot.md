# Formula Depot



## Costruttori associati

### Formula Depot

**Sintassi:** Formula Depot

**Descrizione:** Un contenitore per modelli di previsione che supporta confronto di modelli, creazione di profili e generazione di codici di scoring. Il depot delle formule viene avviato dal menu Analizza, dai comandi Pubblica nelle piattaforme di modellizzazione, Ricodifica e Editor delle formule.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Add Formula from Column

**Sintassi:** Predittore = obj &lt;&lt; Add Formula from Column( Table(name|reference), Columns(name|index|reference, ...), &lt;Expand Intermediate Formulas(number)&gt; )

**Descrizione:** Aggiunge una colonna della formula di previsione esistente dalla tabella specificata al depot delle formule

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();model << Save Probability Formula;mp = fd << Add Formula From Column( Table( dt ), Columns( 11 ) ); // "Most Likely Species"mp << Generate Python Code;

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

#### Cerca per nome

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preimpostazione anonima

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Ricerca all'interno delle cartelle

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Copy Formulas as Functions

**Sintassi:** obj &lt;&lt; Copy Formulas as Functions( &lt;Formulas(name|index|reference, ...)&gt; )

**Descrizione:** Copia negli Appunti i modelli specificati come un&apos;istruzione scalare Funzione().

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();predictor = model << Publish Probability Formulas;fd << Copy Formulas as Functions( Formulas( predictor ) );Wait( 0 );text = Get Clipboard();Show( text );

```

### Copy Formulas as Transforms

**Sintassi:** obj &lt;&lt; Copy Formulas as Transforms( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Descrizione:** Copia negli Appunti i modelli specificati entro un&apos;istruzione Trasforma colonna().

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();model << Publish Probability Formulas;fd << Copy Formulas as Transforms(    // English: Formulas("Fit Nominal Logistic - Species")	Formulas( 1 ));Wait( 0 );text = Get Clipboard();Show( text );

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Copy Script;

```

### Copy Scripts

**Sintassi:** obj &lt;&lt; Copy Scripts( &lt;Formulas(name|index|reference, ...)&gt; )

**Descrizione:** Copia negli Appunti gli script per le formule specificate memorizzate nel depot delle formule.

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();predictor = model << Publish Probability Formulas;fd << Copy Scripts( Formulas( predictor ) );Wait( 0 );text = Get Clipboard();Show( text );

```

### Generate C Code

**Sintassi:** obj &lt;&lt; Generate C Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Descrizione:** Genera codice C per i modelli specificati memorizzati nel depot delle formule. L&apos;output va in una finestra dell&apos;editor o in una variabile della stringa se è specificato l&apos;argomento &apos;Nessun editor&apos;.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string c_code = fd << Generate C Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// c_code = predictor << Generate C Code(No Editor);Save Text File( "$TEMP\logist.c", c_code );// Open code in editor windowfd << Generate C Code( Formulas( predictor ) );

```

### Generate JavaScript Code

**Sintassi:** obj &lt;&lt; Generate JavaScript Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Descrizione:** Genera codice JavaScript per i modelli specificati memorizzati nel depot delle formule. L&apos;output va in una finestra dell&apos;editor o in una variabile della stringa se è specificato l&apos;argomento &apos;Nessun editor&apos;.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string js_code = fd << Generate JavaScript Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// js_code = predictor << Generate JavaScript Code(No Editor);Save Text File( "$TEMP\logist.js", js_code );// Open code in editor windowfd << Generate JavaScript Code( Formulas( predictor ) );

```

### Generate Python Code

**Sintassi:** obj &lt;&lt; Generate Python Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Descrizione:** Genera codice Python per i modelli specificati memorizzati nel depot delle formule. L&apos;output va in una finestra dell&apos;editor o in una variabile della stringa se è specificato l&apos;argomento &apos;Nessun editor&apos;.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string py_code = fd << Generate Python Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// py_code = predictor << Generate Python Code(No Editor);Save Text File( "$TEMP\logist.py", py_code );// Open code in editor windowfd << Generate Python Code( Formulas( predictor ) );

```

### Generate SAS Code

**Sintassi:** obj &lt;&lt; Generate SAS Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Descrizione:** Genera codice SAS (DS2) per i modelli specificati memorizzati nel depot delle formule. L&apos;output va in una finestra dell&apos;editor o in una variabile della stringa se è specificato l&apos;argomento &apos;Nessun editor&apos;.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string sas_code = fd << Generate SAS Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// sas_code = predictor << Generate SAS Code(No Editor);Save Text File( "$TEMP\logist.sas", sas_code );// Open code in editor windowfd << Generate SAS Code( Formulas( predictor ) );

```

### Generate SQL Code

**Sintassi:** obj &lt;&lt; Generate SQL Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt;, &lt;QUOTE_STYLE&gt; )

**Descrizione:** Genera codice SQL (definizioni di colonne idonee per l&apos;uso in un&apos;istruzione SQL Select) per i modelli specificati memorizzati nel depot delle formule. L&apos;output è indirizzato in una finestra dell&apos;editor o in una variabile stringa se è specificato l&apos;argomento &apos;Nessun editor&apos;. QUOTE_STYLE è una stringa che denota uno dei database SQL supportati da JMP (MySQL, Impala, Hive, ecc.) o un tipo SQL fra apici ("Sottolineato", "Apice rovesciato", "Parentesi" o "Doppio apice").

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );md = dt << Run Script( "Elastic Net Poisson, BIC" );mp_obs = md << xpath( "//OutlineBox" );scriptables = Filter Each( {ob}, mp_obs << Get Scriptable Object(), !Is Empty( ob ) );mp = scriptables[2];predictor = mp << Publish Prediction Formula;// Save code to string sql_code = fd << Generate SQL Code( Formulas( 1 ), No Editor );// shortcut using predictor reference// sql_code = predictor << Generate SQL Code(No Editor);Save Text File( "$TEMP\genreg.sql", sql_code );// Open code in editor windowfd << Generate SQL Code( Formulas( predictor ), "MySQL" );

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Timing;Show( t );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Sintassi:** obj &lt;&lt; Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Messaggi degli elementi condivisi

### Model Comparison

**Sintassi:** obj &lt;&lt; Model Comparison( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Descrizione:** Confronta i modelli specificati memorizzati nel depot delle formule utilizzando l&apos;utilità di confronto dei modelli, sulla base dei contenuti della tabella specificata.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_mp = nl_md << Publish Probability Formulas;nn_md = Neural(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Informative Missing( 0 ),	Validation Method( "Holdback", 0.3333 ),	Fit( NTanH( 3 ) ));nn_mp = nn_md << Publish Prediction Formula;mc_plat = fd << ModelComparison( Formulas( 1, 2 ) );// Other options:// mds = {"Fit Nominal Logistic - Species", "Neural - Species"};// fd << ModelComparison( Formulas( mds ) );// fd << ModelComparison( Formulas( 1 ), Formulas( 2 ) );// fd << ModelComparison; // all models

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Profiler

**Sintassi:** obj &lt;&lt; Profiler( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Descrizione:** Profila i modelli specificati memorizzati nel depot delle formule utilizzando l&apos;utilità Profiler, sulla base dei contenuti della tabella specificata.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_mp = nl_md << Publish Probability Formulas;nn_md = Neural(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Informative Missing( 0 ),	Validation Method( "Holdback", 0.3333 ),	Fit( NTanH( 3 ) ));nn_mp = nn_md << Publish Prediction Formula;fd << Profiler( Formulas( nl_mp, nn_mp ) );

```

### Remove Model Comparison

**Sintassi:** obj &lt;&lt; Remove Model Comparison

**Descrizione:** Rimuove tutti i report di confronto di modelli dal depot delle formule corrente.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_md << Publish Probability Formulas;fd << Model Comparison();fd << Remove Model Comparison();

```

### Remove Profiler

**Sintassi:** obj &lt;&lt; Remove Profiler

**Descrizione:** Rimuove tutti i profiler dal depot delle formule corrente.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_md << Publish Probability Formulas;fd << Profiler();fd << Remove Profiler();

```

### Rename Formula Depot

**Sintassi:** obj &lt;&lt; Rename Formula Depot( text )

```jsl

fd = Formula Depot();fd << Rename Formula Depot( "New Name" );

```

### Report

**Sintassi:** obj &lt;&lt; Report; Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Run Scripts

**Sintassi:** obj &lt;&lt; Run Scripts( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Descrizione:** Salva i modelli specificati nella tabella di dati JMP corrente o specificata come una o più colonne con formule.

```jsl

// Create a Formula Depot to store the modeldt1 = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt1 << RunScript( "Nominal Logistic" );fd1 = Formula Depot();model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );// Clean-upClose( dt1, NoSave );fd1 << Close Window;// Read FD from diskOpen( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];// Create columns from stored model; usually this is a new table with a compatible schemadt2 = Open( "$SAMPLE_DATA\Iris.jmp" );fd2 << Run Scripts( Table( dt2 ), Formulas( 1 ) );

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File(	"$TEMP\fd.jrp",	Char( Name Expr( fd_script ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File(	"$TEMP\fd.jrp",	Char( Name Expr( fd_script ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Script Window;

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Sintassi:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descrizione:** Invia a oggetto che supporta script incorporato ripristina le impostazioni degli oggetti incorporati che supportano script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Sintassi:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descrizione:** La funzione Invia al report è utilizzata in combinazione con il comando Invia per personalizzare l&apos;aspetto di un report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Show Scripts

**Sintassi:** obj &lt;&lt; Show Scripts( &lt;Formulas(name|index|reference, ...)&gt; )

**Descrizione:** Apre una nuova finestra Formula (o la aggiunge a una finestra Formula aperta) che contiene script per le formule specificate memorizzate nel depot delle formule.

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();model << Publish Probability Formulas;fd << Show Scripts( Formulas( 1 ) );

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

