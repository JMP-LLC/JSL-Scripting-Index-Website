# Torch Deep Learning



## Colonne

### Censor

**Sintassi:** obj &lt;&lt; Censor( column )

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Freq

**Sintassi:** obj &lt;&lt; Freq( column )

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Inputs

**Sintassi:** obj &lt;&lt; Inputs( column(s) )

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Responses

**Sintassi:** obj &lt;&lt; Responses( column(s) )

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Subject

**Sintassi:** obj &lt;&lt; Subject( column )

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Validation

**Sintassi:** obj &lt;&lt; Validation( column(s) )

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Weight

**Sintassi:** obj &lt;&lt; Weight( column )

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### X

**Sintassi:** obj &lt;&lt; X( column(s) )

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Y

**Sintassi:** obj &lt;&lt; Y( column(s) )

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## Costruttori associati

### Torch Deep Learning

**Sintassi:** Torch Deep Learning(Y( columns ), X( columns ))

**Descrizione:** Interface to predictive modeling via the Torch Deep Learning add-in

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

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

### Change Variables

**Sintassi:** obj &lt;&lt; Change Variables

**Descrizione:** Changes X, Y, and other variables for subsequent models.

**JMP Versione aggiunta:** 18

### Compare

**Sintassi:** obj &lt;&lt; Compare

**Descrizione:** Updates the Torch Deep Learning comparison metrics.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Compare( AUC( 1 ) );

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Copy Script;

```

### Fit

**Sintassi:** obj &lt;&lt; Fit

**Descrizione:** Fits a Torch Deep Learning model. You can specify parameters and fitting specifications within this command.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Measures

**Sintassi:** obj &lt;&lt; Get Measures

**JMP Versione aggiunta:** 18

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Return to the launcher for this analysis.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table;

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

### Set

**Sintassi:** obj &lt;&lt; Set

**Descrizione:** Specifies parameters for a Torch Deep Learning model.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Set( Epochs( 5 ) ) );

```

### Show Details

**Sintassi:** obj &lt;&lt; Show Details( state=0|1 )

**Descrizione:** Shows more details.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Show Details( 1 ) );

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Torch Deep Learning Compare

### Costruttori associati

#### Torch Deep Learning Compare

**Sintassi:** Torch Deep Learning Compare

### Messaggi degli elementi

#### AUC

**Sintassi:** obj &lt;&lt; AUC( state=0|1 )

**Descrizione:** Shows or hides the AUROC, which is the area under the receiver operating characteristic curve. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Accuracy

**Sintassi:** obj &lt;&lt; Accuracy( state=0|1 )

**Descrizione:** Shows or hides the accuracy, which is the proportion of correct classifications. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Censor

**Sintassi:** obj &lt;&lt; Censor( state=0|1 )

**Descrizione:** Shows or hides the Censor command Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Concordance

**Sintassi:** obj &lt;&lt; Concordance( state=0|1 )

**Descrizione:** Shows or hides the concordance, which is the Harrell C-Index and measures strength of sorting efficiency Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Correlation

**Sintassi:** obj &lt;&lt; Correlation( state=0|1 )

**Descrizione:** Shows or hides the Pearson correlation, which is a measure of the strength of the linear relationship. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### F1

**Sintassi:** obj &lt;&lt; F1( state=0|1 )

**Descrizione:** Shows or hides the F1 Score, which is the harmonic average of precision and recall. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Freq

**Sintassi:** obj &lt;&lt; Freq( state=0|1 )

**Descrizione:** Shows or hides the Freq column. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### H Measure

**Sintassi:** obj &lt;&lt; H Measure( state=0|1 )

**Descrizione:** Shows or hides the H Measure, which measures proportion improvement over baseline. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Hide All Models

**Sintassi:** obj &lt;&lt; Hide All Models

**Descrizione:** Hides all models.

**JMP Versione aggiunta:** 18

#### LogLoss

**Sintassi:** obj &lt;&lt; LogLoss( state=0|1 )

**Descrizione:** Shows or hides the logarithm of the likelihood-based loss function. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### MAE

**Sintassi:** obj &lt;&lt; MAE( state=0|1 )

**Descrizione:** Shows or hides the MAE, which is the mean absolute error. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### MCC

**Sintassi:** obj &lt;&lt; MCC( state=0|1 )

**Descrizione:** Shows or hides the Matthews correlation coefficient, which is the Pearson correlation for binary variables. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Misclass

**Sintassi:** obj &lt;&lt; Misclass( state=0|1 )

**Descrizione:** Shows or hides the misclassification rate, which is the proportion of incorrect classifications. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Precision Recall AUC

**Sintassi:** obj &lt;&lt; Precision Recall AUC( state=0|1 )

**Descrizione:** Shows or hides the Precision Recall AUC, which is the area under the precision-recall curve. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Predictors

**Sintassi:** obj &lt;&lt; Predictors( state=0|1 )

**Descrizione:** Shows or hides the Predictors column. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Profit

**Sintassi:** obj &lt;&lt; Profit( state=0|1 )

**Descrizione:** Shows or hides the expected profit. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### RMSE

**Sintassi:** obj &lt;&lt; RMSE( state=0|1 )

**Descrizione:** Shows or hides the RMSE, which is the root mean square error. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### RSquare

**Sintassi:** obj &lt;&lt; RSquare( state=0|1 )

**Descrizione:** Shows or hides RSquare value, which is the proportion of variability explained. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Remove Hidden Models

**Sintassi:** obj &lt;&lt; Remove Hidden Models

**Descrizione:** Removes all models for which the Show box is not checked.

**JMP Versione aggiunta:** 18

#### Remove Shown Models

**Sintassi:** obj &lt;&lt; Remove Shown Models

**Descrizione:** Removes all models for which the Show check box is checked and shows the remaining models.

**JMP Versione aggiunta:** 18

#### Response

**Sintassi:** obj &lt;&lt; Response( state=0|1 )

**Descrizione:** Shows or hides the Response column. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Show All Models

**Sintassi:** obj &lt;&lt; Show All Models

**Descrizione:** Shows all models.

**JMP Versione aggiunta:** 18

#### Subject

**Sintassi:** obj &lt;&lt; Subject( state=0|1 )

**Descrizione:** Shows or hides the Subject column Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Training Metrics

**Sintassi:** obj &lt;&lt; Training Metrics( state=0|1 )

**Descrizione:** Shows or hides all training metrics. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Validation

**Sintassi:** obj &lt;&lt; Validation( state=0|1 )

**Descrizione:** Shows or hides the Validation column. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Validation Metrics

**Sintassi:** obj &lt;&lt; Validation Metrics( state=0|1 )

**Descrizione:** Shows or hides all validation metrics. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Weight

**Sintassi:** obj &lt;&lt; Weight( state=0|1 )

**Descrizione:** Shows or hides the Weight column. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

## Torch Deep Learning Fit > Post

### Messaggi degli elementi

#### Actual by Predicted Plots

**Sintassi:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**Descrizione:** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Confusion Matrices

**Sintassi:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**Descrizione:** Shows or hides a crosstabulation matrix of actual and predicted levels. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler.

**Sintassi:** obj &lt;&lt; Contour Profiler.

**Descrizione:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP Versione aggiunta:** 18

#### Decision Thresholds

**Sintassi:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**Descrizione:** Shows or hides decision threshold graphs and tables. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Fit Details

**Sintassi:** obj &lt;&lt; Fit Details( state=0|1 )

**Descrizione:** Shows or hides the statistics for the fitted model. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Lift Curves

**Sintassi:** obj &lt;&lt; Lift Curves( state=0|1 )

**Descrizione:** Plots how much more saturated the top x-percent of predicted values are compared to the whole population.

**JMP Versione aggiunta:** 18

#### Model Details

**Sintassi:** obj &lt;&lt; Model Details( state=0|1 )

**Descrizione:** Shows or hides model details Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

#### Precision Recall Curves

**Sintassi:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**Descrizione:** Plots the trade-off between precision and recall for different classification thresholds. It is preferred in scenarios where class imbalances exist.

**JMP Versione aggiunta:** 18

#### Profiler

**Sintassi:** obj &lt;&lt; Profiler

**Descrizione:** Shows or hides the Prediction Profiler.

**JMP Versione aggiunta:** 18

#### ROC Curves

**Sintassi:** obj &lt;&lt; ROC Curves( state=0|1 )

**Descrizione:** Plots the response-category sorting efficiency of the model predictions.

**JMP Versione aggiunta:** 18

#### Surface Profiler

**Sintassi:** obj &lt;&lt; Surface Profiler

**Descrizione:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP Versione aggiunta:** 18

## Torch Deep Learning Fit

### Costruttori associati

#### Post

**Sintassi:** Post

#### Torch Deep Learning Fit

**Sintassi:** Torch Deep Learning Fit

### Messaggi degli elementi

#### Activation

**Sintassi:** obj &lt;&lt; Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="ReLU" )

**Descrizione:** Specifies the activation function to use after each layer. "ReLU", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activation( "ReLU" ) ) );

```

#### Activations

**Sintassi:** obj &lt;&lt; Activations( text )

**Descrizione:** Specifies a space-delimited list of activation functions to use in sequential layers.  This parameter overrides Activation when it is specified, and the last value carries forward.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activations( "ReLU" ) ) );

```

#### Anchor Scale

**Sintassi:** obj &lt;&lt; Anchor Scale( number=16 )

**Descrizione:** Specifies a multiplier applied to an internal range of anchor sizes.  Larger values tend to work better for larger boxes. "16", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Anchor Scale( "16" ) ) );

```

#### Aspect Sigma

**Sintassi:** obj &lt;&lt; Aspect Sigma( number=0 )

**Descrizione:** Standard deviation of Gaussian aspect ratio deformation "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Aspect Sigma( 0.0 ) ) );

```

#### Attention Heads

**Sintassi:** obj &lt;&lt; Attention Heads( text=4 )

**Descrizione:** For transformer models, specifies the number of attention heads as a space delimited list of positive integers, each of which must evenly divide its corresponding layer size. Last value carries forward if necessary. "4", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Attention Heads( 1 ) ) );

```

#### Base Activation

**Sintassi:** obj &lt;&lt; Base Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="GELU" )

**Descrizione:** Specifies the base activation function for Kolmogorov Arnold B Splines. "GELU", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Base Activation( "GELU" ) ) );

```

#### Basis Function

**Sintassi:** obj &lt;&lt; Basis Function( "Gaussian"|"Linear"|"Quadradic"|"InverseQuadradic"|"MultiQuadric"|"InverseMultiQuadric"|"Spline"|"Poisson1"|"Poisson2"|"Matern32"|"Matern52"="Gaussian" )

**Descrizione:** For Radial Basis Machine models, specify the basis function. "Gaussian", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "RadialBasisMachine" ), Basis Function( "Gaussian" ) )
);

```

#### Batch Size

**Sintassi:** obj &lt;&lt; Batch Size( number=128 )

**Descrizione:** Specifies the number of rows to randomly sample for each training batch and optimization update. Decrease it to save memory and update gradients more frequently; increase it to pass through the data faster and regularize the model more. "128", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Batch Size( 128 ) ) );

```

#### Binary Loss

**Sintassi:** obj &lt;&lt; Binary Loss( "BCE"|"SM"="BCE" )

**Descrizione:** Specifies the loss function for binary responses. Choose from Binary Cross Entropy (BCE) or Soft Margin (SM). "BCE", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Binary Loss( "BCE" ) ) );

```

#### Blur Max Sigma

**Sintassi:** obj &lt;&lt; Blur Max Sigma( number=0 )

**Descrizione:** Maximum standard deviation of Gaussian blur "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Blur Max Sigma( 1 ) ) );

```

#### Class Loss Weight

**Sintassi:** obj &lt;&lt; Class Loss Weight( number=4.0 )

**Descrizione:** Specifies the multiplier for class loss. "4.0", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Class Loss Weight( 4.0 ) ) );

```

#### Confidence Threshold

**Sintassi:** obj &lt;&lt; Confidence Threshold( number=0.05 )

**Descrizione:** Specifies the confidence score threshold for predicted boxes.  Boxes with probability score less than this threshold are dropped. "0.05", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Confidence Threshold( 0.05 ) ) );

```

#### Continuous Loss

**Sintassi:** obj &lt;&lt; Continuous Loss( "MSE"|"L1"|"SmoothL1"|"Huber"|"Poisson"|"Quantile"|"CoxPH"="MSE" )

**Descrizione:** Specifies the loss function for continuous responses. Choose from Mean Squared Error (MSE), Mean Absolute Error (L1), Smoothed L1 (with margin), Huber (with margin), or Poisson (for count responses). "MSE", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :weight ), X( :picture ), Fit( Continuous Loss( "MSE" ) ) );

```

#### Copy Parameters to Launch

**Sintassi:** obj &lt;&lt; Copy Parameters to Launch

**Descrizione:** Copies the parameter values from this model to the model launch section.

**JMP Versione aggiunta:** 18

#### Covariance Structure

**Sintassi:** obj &lt;&lt; Covariance Structure( "DotProduct"|"Gaussian"="DotProduct" )

**Descrizione:** For mixed models, specify the covariance structure. "DotProduct", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "MixedModel" ), Covariance Structure( "DotProduct" ) )
);

```

#### Data Threads

**Sintassi:** obj &lt;&lt; Data Threads( number=4 )

**Descrizione:** Specifies the number of threads to use to load data into memory. A number near half the number of actual cores is usually near optimal. "4", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Data Threads( 0 ) ) );

```

#### Device

**Sintassi:** obj &lt;&lt; Device( "auto"|"cpu"|"cuda:0"|"cuda:1"|"cuda:2"|"cuda:3"="auto" )

**Descrizione:** Specifies the computational device that Torch uses. "auto", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Device( "cpu" ) ) );

```

#### Dilations

**Sintassi:** obj &lt;&lt; Dilations( text=1 )

**Descrizione:** For custom convolutional models, specifies the dilations as a space-delimited list of positive integers. Last value carries forward if necessary. "1", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dilations( "1" ) ) );

```

#### Dropout Probs

**Sintassi:** obj &lt;&lt; Dropout Probs( text=0.0 )

**Descrizione:** Specifies the probabilities of dropout to use after each layer as a space-delimited list of decimals between 0 and 1. Last value carries forward if necessary. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dropout Probs( "0.1" ) ) );

```

#### Epochs

**Sintassi:** obj &lt;&lt; Epochs( number=20 )

**Descrizione:** Specifies the number of iterations through the training data to optimize the loss function for each batch and train the model. "20", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Epochs( 100 ) ) );

```

#### Factorization Machine Layers

**Sintassi:** obj &lt;&lt; Factorization Machine Layers( text=0 )

**Descrizione:** Specify a space-separated list of 0s and 1s indicating if factorization machine interactions should be added to each linear layer.  Last value carries forward. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Factorization Machine Layers( "1" ) )
);

```

#### Fit Ys Separately

**Sintassi:** obj &lt;&lt; Fit Ys Separately( state=0 )

**Descrizione:** Check to fit a distinct model for each Y variable, and uncheck to model them jointly. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex, :height ), X( :picture ), Fit( Model Ys Separately( 1 ) ) );

```

#### Fixed Effects

**Sintassi:** obj &lt;&lt; Fixed Effects( number=0 )

**Descrizione:** Specify the number of fixed effects, all of which must be at the beginning of the X variable list "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Fixed Effects( 0 ) ) );

```

#### Folder

**Sintassi:** obj &lt;&lt; Folder( text )

**Descrizione:** Select a folder in which to save modeling results. A subfolder for each model is created in this folder.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Folder( "" ) ) );

```

#### Frozen Epochs

**Sintassi:** obj &lt;&lt; Frozen Epochs( number=0 )

**Descrizione:** Specifies the number of epochs for which pretrained model bodies remain frozen.  After this number there is full training gradients for all parameters. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Frozen Epochs( 3 ) ) );

```

#### Generate Python Code

**Sintassi:** obj &lt;&lt; Generate Python Code

**Descrizione:** Creates Python code for model deployment.

**JMP Versione aggiunta:** 18

#### Grid Size

**Sintassi:** obj &lt;&lt; Grid Size( number=5 )

**Descrizione:** For Kolmogorov Arnold B Spline networks, specifies the number of points in the grid for the spline interpolation. "5", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Grid Size( 5 ) ) );

```

#### HFlip Prob

**Sintassi:** obj &lt;&lt; HFlip Prob( number=0 )

**Descrizione:** Probability of horizontal flip "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( HFlip Prob( 0.3 ) ) );

```

#### Highway Layers

**Sintassi:** obj &lt;&lt; Highway Layers( text=0 )

**Descrizione:** Specify a space-separated list of nonnegative integers specifying the number of highway layers to insert in the network.  Last value carries forward. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Highway Layers( "1" ) ) );

```

#### Image Model

**Sintassi:** obj &lt;&lt; Image Model( ="LeNet5" )

**Descrizione:** Specifies the image network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. "LeNet5", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Model( "LeNet5" ) ) );

```

#### Image Size

**Sintassi:** obj &lt;&lt; Image Size( number=28 )

**Descrizione:** Specifies the size of image to use while training. Input images are transformed to this size square; larger images have higher resolution but slower training times. "28", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Size( 28 ) ) );

```

#### Kernel Sizes

**Sintassi:** obj &lt;&lt; Kernel Sizes( text=3 )

**Descrizione:** For custom convolutional models, specifies the kernel sizes as a space-delimited list of positive integers. Last value carries forward if necessary. "3", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Kernel Sizes( "3" ) ) );

```

#### L1 Penalty

**Sintassi:** obj &lt;&lt; L1 Penalty( number=0.0 )

**Descrizione:** Specifies a multiplier for the sum of absolute values of weight parameters to be added to the loss and induce sparsity. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( L1 Penalty( 0.0001 ) ) );

```

#### Layer Sizes

**Sintassi:** obj &lt;&lt; Layer Sizes( text=16 )

**Descrizione:** Specifies output sizes of hidden layers as a space-delimited list of integers (actual sizes) or decimals (multipliers of the previous layer size). The final value is the embedding size. "16", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Layer Sizes( "16" ) ) );

```

#### Learning Rate

**Sintassi:** obj &lt;&lt; Learning Rate( number=0.001 )

**Descrizione:** Specifies the learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. "0.001", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Learning Rate( 0.001 ) ) );

```

#### Margin

**Sintassi:** obj &lt;&lt; Margin( number=1.0 )

**Descrizione:** Specifies the margin used in margin-based loss functions. Larger values should produce larger embedding distances between nominal responses with different levels, but may adversely affect training. "1.0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Margin( 1.0 ) ) );

```

#### Max Boxes

**Sintassi:** obj &lt;&lt; Max Boxes( number=5 )

**Descrizione:** Specifies the maximum number of predicted boxes per image. "5", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Max Boxes( 5 ) ) );

```

#### Max Seq Length

**Sintassi:** obj &lt;&lt; Max Seq Length( number=512 )

**Descrizione:** For text models, specifies the maximum number of tokens to create for each text item. "512", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Max Seq Length( 512 ) )
);

```

#### Mixup Portion

**Sintassi:** obj &lt;&lt; Mixup Portion( number=0.0 )

**Descrizione:** Specifies portion of mixup samples to add to each training batch. For example, if Batch Size is 128 and Mixup Portion is 0.5, then 64 mixup samples are added. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Mixup Portion( 0.5 ) ) );

```

#### NMS Threshold

**Sintassi:** obj &lt;&lt; NMS Threshold( number=0.5 )

**Descrizione:** Specifies the non-maximum suppression threshold for predicted boxes.  Overlapping boxes with IOU values above this threshold are dropped. "0.5", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( NMS Threshold( 0.5 ) ) );

```

#### Noise Max Sigma

**Sintassi:** obj &lt;&lt; Noise Max Sigma( number=0 )

**Descrizione:** Maximum standard deviation of additive Gaussian noise "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Noise Max Sigma( 1 ) ) );

```

#### Nominal Image Threshold

**Sintassi:** obj &lt;&lt; Nominal Image Threshold( number=10 )

**Descrizione:** Specifies the cutoff for determining if images in a column are nominal or continuous.  If the number of unique pixel levels is <= this number, then the images are considered to be nominal. "10", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Image Threshold( 10 ) ) );

```

#### Nominal Loss

**Sintassi:** obj &lt;&lt; Nominal Loss( "NLL"="NLL" )

**Descrizione:** Specifies the loss function for nominal responses. Choose from Negative Loglikelihood (NLL). "NLL", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Loss( "NLL" ) ) );

```

#### Norm

**Sintassi:** obj &lt;&lt; Norm( "None"|"Batch"|"Group"|"Instance"="Batch" )

**Descrizione:** Specifies the type of normalization to apply to each MLP layer. "Batch", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm( "Batch" ) ) );

```

#### Norm First

**Sintassi:** obj &lt;&lt; Norm First( "None"|"Batch"="Batch" )

**Descrizione:** Specifies the type of normalization to apply to the input data to the tabular model. Batch norm effectively centers and scales each input. "Batch", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm First( "Batch" ) ) );

```

#### Num Linear

**Sintassi:** obj &lt;&lt; Num Linear( number=1 )

**Descrizione:** For custom convolutional and message passing models, specifies the number of linear layers at the end of Layer Sizes. "1", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Num Linear( 1 ) ) );

```

#### Optimizer

**Sintassi:** obj &lt;&lt; Optimizer( "Adam"|"AdamW"|"SGD"|"SGDAGC"="AdamW" )

**Descrizione:** Specifies the optimization method. Choose between Adaptive moment estimation (Adam), Adam weight decay (AdamW), Stochastic Gradient Descent (SGD), or SGD with Adaptive Gradient Clipping (SGDAGC). "AdamW", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Optimizer( "AdamW" ) ) );

```

#### Pitch Sigma

**Sintassi:** obj &lt;&lt; Pitch Sigma( number=0 )

**Descrizione:** Standard deviation of Gaussian pitch "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Pitch Sigma( 5 ) ) );

```

#### Pooling Layers

**Sintassi:** obj &lt;&lt; Pooling Layers( text=Max )

**Descrizione:** Specifies pooling layers as a space-delimited list of one of four keywords:  Max, Avg, Cat, or None. Last value carries forward if necessary. "Max", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pooling Layers( "Max" ) ) );

```

#### Pretrained Tabular

**Sintassi:** obj &lt;&lt; Pretrained Tabular( ="None" )

**Descrizione:** Specify a pretrained tabular model that is prepended to the Tabular Model. "None", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pretrained Tabular( "None" ) ) );

```

#### Quantiles

**Sintassi:** obj &lt;&lt; Quantiles( text=0.9 )

**Descrizione:** Specify a space-delimited list of quantiles to use for Quantile loss. "0.9", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Quantiles( "0.9" ) ) );

```

#### RPN NMS Threshold

**Sintassi:** obj &lt;&lt; RPN NMS Threshold( number=0.7 )

**Descrizione:** Specifies the non-maximum suppression threshold for region proposals.  Overlapping boxes with IOU values above this threshold are dropped. "0.7", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( RPN NMS Threshold( 0.7 ) ) );

```

#### Remove All But This Fit

**Sintassi:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**Descrizione:** Removes the reports and plots for all models except this one.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**Sintassi:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**Descrizione:** Removes the entire model report.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Restore From

**Sintassi:** obj &lt;&lt; Restore From( " "=" " )

**Descrizione:** Select a subfolder containing saved files from a previously fit model. Training for a new model will begin where this model finished. Model architectures and validation variables should match. Leave this field blank to train from scratch. " ", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Restore From( "" ) ) );

```

#### Roll Sigma

**Sintassi:** obj &lt;&lt; Roll Sigma( number=0 )

**Descrizione:** Standard deviation of Gaussian roll "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Roll Sigma( 5 ) ) );

```

#### Save CAMs

**Sintassi:** obj &lt;&lt; Save CAMs

**Descrizione:** Save gradient-based class activation maps (CAMs) as a new column.

**JMP Versione aggiunta:** 18

#### Save Embeddings

**Sintassi:** obj &lt;&lt; Save Embeddings

**Descrizione:** Saves model embeddings (from final hidden layer) as new columns in the data table

**JMP Versione aggiunta:** 18

#### Save Model

**Sintassi:** obj &lt;&lt; Save Model

**Descrizione:** Saves serialized modeling components to disk in a folder that you name.  You can then specify this folder in Restore From to begin training with this model.

**JMP Versione aggiunta:** 18

#### Save Predicteds

**Sintassi:** obj &lt;&lt; Save Predicteds

**Descrizione:** Saves the predicted values in a new column in the data table.

**JMP Versione aggiunta:** 18

#### Screening Method

**Sintassi:** obj &lt;&lt; Screening Method( "ResponseScreening"|"BootstrapForest"="ResponseScreening" )

**Descrizione:** Choose a method by which to screen Tabular Model predictors prior to fitting the model within each fold.  ResponseScreening is fast and BootstrapForest is more thorough. "ResponseScreening", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Screening Method( "ResponseScreening" ) )
);

```

#### Screening Threshold

**Sintassi:** obj &lt;&lt; Screening Threshold( number=0 )

**Descrizione:** If >= 1, the number of Tabular Model predictors to select by screening.  If < 1, the predictors with cumulative portion less than the threshold. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Screening Threshold( 1 ) ) );

```

#### Seed

**Sintassi:** obj &lt;&lt; Seed( number=0 )

**Descrizione:** Specifies the seed for the random number generator.  Note results may not be fully reproducible with the same seed due to the stochastic nature of certain Torch calculations. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Seed( 0 ) ) );

```

#### Segmentation Model

**Sintassi:** obj &lt;&lt; Segmentation Model( "UNet"|"FPN"|"LinkNet"|"DeepLabV3"|"DeepLabV3Plus"|"PAN"|"PSPNet"="UNet" )

**Descrizione:** Specifies the image segmentation model. "UNet", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/segmentation.jmp" );
Torch Deep Learning( Y( :Mask ), X( :Picture ), Sett( Segmentation Model( "VGG11_BN" ) ) );

```

#### Spline Order

**Sintassi:** obj &lt;&lt; Spline Order( number=3 )

**Descrizione:** For Kolmogorov Arnold B Spline networks, specifies the order of the spline used for interpolation. "3", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Spline Order( 3 ) ) );

```

#### Strides

**Sintassi:** obj &lt;&lt; Strides( text=1 )

**Descrizione:** For custom convolutional models, specifies the strides as a space-delimited list of positive integers. Last value carries forward if necessary. "1", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Strides( "1" ) ) );

```

#### Tabular Model

**Sintassi:** obj &lt;&lt; Tabular Model( "MultiLayerPerceptron"|"FTTransformer"|"KolmogorovArnoldBSpline"|"CustomConv1d"|"RadialBasisMachine"|"MixedModel"="MultiLayerPerceptron" )

**Descrizione:** Specifies the tabular network architecture to use. Choose from Multilayer Perceptron (MLP), Feature Tokenized Transformer (FTTransformer), Kolmogorov Arnold Network (KolmogorovArnoldBSpline), or other options "MultiLayerPerceptron", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Tabular Model( "MultiLayerPerceptron" ) )
);

```

#### Text Model

**Sintassi:** obj &lt;&lt; Text Model( ="BertTiny" )

**Descrizione:** Specifies the text network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. "BertTiny", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Text Model( "BERT" ) )
);

```

#### Triplet Loss Weight

**Sintassi:** obj &lt;&lt; Triplet Loss Weight( number=0.0 )

**Descrizione:** Specifies the multiplier alpha to use in the following compound loss function: alpha * triplet_loss + (1 - alpha) * loss_function. Must be between 0 and 1. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Triplet Loss Weight( 0.5 ) ) );

```

#### Use Data As Knots

**Sintassi:** obj &lt;&lt; Use Data As Knots( state=0 )

**Descrizione:** For Radial Basis Machine models, check to use the training data as knots to form an interpolation-style model. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex, :height ),
	X( :picture ),
	Fit( Tabular Model( "Radial Basis Machine" ), Use Data As Knots( 1 ) )
);

```

#### VFlip Prob

**Sintassi:** obj &lt;&lt; VFlip Prob( number=0 )

**Descrizione:** Probability of vertical flip "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( VFlip Prob( 0.2 ) ) );

```

#### Weight Decay

**Sintassi:** obj &lt;&lt; Weight Decay( number=0.0 )

**Descrizione:** Specifies a penalty term multiplier of the L2 norm of the trainable parameters, which regularizes them in a way similar to ridge regression. "0.0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Weight Decay( 0.0001 ) ) );

```

#### Worker Count

**Sintassi:** obj &lt;&lt; Worker Count( number=4 )

**Descrizione:** Specifies the number of workers to use to load batches of data during training. A number near half the number of actual cores is usually near optimal. "4", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Worker Count( 0 ) ) );

```

#### X Slide Sigma

**Sintassi:** obj &lt;&lt; X Slide Sigma( number=0 )

**Descrizione:** Standard deviation of Gaussian random shift along the X axis "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( X Slide Sigma( 5 ) ) );

```

#### Y Slide Sigma

**Sintassi:** obj &lt;&lt; Y Slide Sigma( number=0 )

**Descrizione:** Standard deviation of Gaussian random shift along the Y axis "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Y Slide Sigma( 5 ) ) );

```

#### Yaw Sigma

**Sintassi:** obj &lt;&lt; Yaw Sigma( number=0 )

**Descrizione:** Standard deviation of Gaussian yaw "0", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Yaw Sigma( 5 ) ) );

```

