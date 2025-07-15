# Sequencing Variants Toolset



## Costruttori associati

### Sequencing Variants Toolset

**Sintassi:** Sequencing Variants Toolset

**Descrizione:** Offre un contesto per elaborare e analizzare i dati di sequenziamento ad alto rendimento con SamTools e BcfTools.

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

### Arguments

**Sintassi:** obj &lt;&lt; Arguments

**Descrizione:** Consente di specificare le opzioni per eseguire la piattaforma dalla finestra di scripting.

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
obj << Copy Script;

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

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
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
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
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

**Sintassi:** obj &lt;&lt; Report;Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

Names Default To Here( 1 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Run Cmd

**Sintassi:** obj &lt;&lt; Run Cmd

**Descrizione:** Determina l&apos;attività del set di strumenti delle varianti di sequenziamento da eseguire dalla finestra di scripting.

### Run Spec

**Sintassi:** obj &lt;&lt; Run Spec

**Descrizione:** Determina l&apos;attività del set di strumenti delle varianti di sequenziamento da eseguire dalla finestra dell&apos;interfaccia.

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
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

### Specification

**Sintassi:** obj &lt;&lt; Specification

**Descrizione:** Consente di specificare un&apos;attività.

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

## Sequencing Variants Toolset Run

### Messaggi degli elementi

#### Auto Send Output to Files List

**Sintassi:** obj &lt;&lt; Auto Send Output to Files List( state=0|1 )

**Descrizione:** Invia i file di output al riquadro dell&apos;elenco di file.

#### Bam Files

**Sintassi:** obj &lt;&lt; Bam Files

**Descrizione:** Specifica i file BAM.

#### Bcf Files

**Sintassi:** obj &lt;&lt; Bcf Files

**Descrizione:** Specifica i file BCF.

#### Caller

**Sintassi:** obj &lt;&lt; Caller( "Multiallelico"|"Consenso"="Multiallelico" )

**Descrizione:** "Multiallelico", per impostazione predefinita.

#### Copy Task Specification

**Sintassi:** obj &lt;&lt; Copy Task Specification

**Descrizione:** Copia negli Appunti le specifiche del set di strumenti delle varianti di sequenziamento correnti.

**JMP Versione aggiunta:** 19

#### Files

**Sintassi:** obj &lt;&lt; Files

**Descrizione:** Carica i file di input da eseguire in samtools.

#### Ploidy

**Sintassi:** obj &lt;&lt; Ploidy( number=2 )

**Descrizione:** "2", per impostazione predefinita.

#### Recall in Task Specification

**Sintassi:** obj &lt;&lt; Recall in Task Specification

**Descrizione:** Imposta la specifica dell&apos;attività nel report Specifica dell&apos;attività al modello specificato.

#### Ref Files

**Sintassi:** obj &lt;&lt; Ref Files

**Descrizione:** Specifica i file del genoma di riferimento.

#### Remove Run

**Sintassi:** obj &lt;&lt; ( Run[number] &lt;&lt; Remove Run( state=0|1 ) )

**Descrizione:** Rimuove il report dell&apos;esecuzione specificato dalla finestra del report.

#### Results Folder

**Sintassi:** obj &lt;&lt; Results Folder

**Descrizione:** Specifica la cartella dei risultati.

#### Sam Files

**Sintassi:** obj &lt;&lt; Sam Files

**Descrizione:** Specifica i file SAM.

#### Send Output to Files List

**Sintassi:** obj &lt;&lt; Send Output to Files List( state=0|1 )

**Descrizione:** Invia i file di output al riquadro dell&apos;elenco di file.

#### Sort Reads By

**Sintassi:** obj &lt;&lt; Sort Reads By( "Coordinate"|"Alfanumerico"|"Lessicografico"="Coordinate" )

**Descrizione:** "Coordinate", per impostazione predefinita.

#### Summary

**Sintassi:** obj &lt;&lt; Summary( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene dettagli dell&apos;esecuzione. Per impostazione predefinita l&apos;opzione è attivata.

#### Target Regions

**Sintassi:** obj &lt;&lt; Target Regions

**Descrizione:** Imposta le regioni target. La specifica delle regioni richiede che il file BAM sia ordinato per coordinate e indicizzato.

#### Task

**Sintassi:** obj &lt;&lt; Task( "Indice Fasta"|"Converti SAM in BAM"|"Ordina letture"|"Aggiungi coordinate Mate"|"Rimuovi duplicati"|"Unisci file"|"Indice BAM"|"Converti BAM in SAM"|"Estrai letture mappate"|"Estrai letture non mappate"|"Estrai regioni target"|"Estrai correttamente allineati"|"Estrai prima lettura"|"Contrassegna discrepanze e inserimenti"|"Allineamento conteggi"|"Allineamento conteggi per flag"|"Allineamento conteggi per riferimento"|"Genera statistiche"|"Genera qualità dell&apos;allineamento delle basi"|"Genera profondità di lettura"|"Comprimi con Bgzip"|"Decomprimi con Bgzip"|"Genera verosimiglianze del genotipo"|"Genera chiamate del genotipo"|"Converti Bcf in Vcf"|"Converti Vcf in Bcf" )

**Descrizione:** Determina l&apos;attività da eseguire.

#### Title

**Sintassi:** obj &lt;&lt; Title

**Descrizione:** Imposta un titolo.

#### Unthreaded

**Sintassi:** obj &lt;&lt; Unthreaded( state=0|1 )

**Descrizione:** Usa solo il thread principale per i calcoli

#### Vcf Files

**Sintassi:** obj &lt;&lt; Vcf Files

**Descrizione:** Specifica i file VCF.

## Sequencing Variants Toolset Specification

### Messaggi degli elementi

#### Auto Send Output to Files List

**Sintassi:** obj &lt;&lt; Auto Send Output to Files List( state=0|1 )

**Descrizione:** Invia i file di output al riquadro dell&apos;elenco di file.

#### Bam Files

**Sintassi:** obj &lt;&lt; Bam Files

**Descrizione:** Specifica i file BAM.

#### Bcf Files

**Sintassi:** obj &lt;&lt; Bcf Files

**Descrizione:** Specifica i file BCF.

#### Caller

**Sintassi:** obj &lt;&lt; Caller( "Multiallelico"|"Consenso"="Multiallelico" )

**Descrizione:** "Multiallelico", per impostazione predefinita.

#### Files

**Sintassi:** obj &lt;&lt; Files

**Descrizione:** Carica i file di input da eseguire in samtools.

#### Ploidy

**Sintassi:** obj &lt;&lt; Ploidy( number=2 )

**Descrizione:** Specifica un numero positivo che indica il livello di ploidia. "2", per impostazione predefinita.

#### Ref Files

**Sintassi:** obj &lt;&lt; Ref Files

**Descrizione:** Specifica i file del genoma di riferimento.

#### Results Folder

**Sintassi:** obj &lt;&lt; Results Folder

**Descrizione:** Specifica la cartella dei risultati.

#### Sam Files

**Sintassi:** obj &lt;&lt; Sam Files

**Descrizione:** Specifica i file SAM.

#### Sort Reads By

**Sintassi:** obj &lt;&lt; Sort Reads By( "Coordinate"|"Alfanumerico"|"Lessicografico"="Coordinate" )

**Descrizione:** "Coordinate", per impostazione predefinita.

#### Target Regions

**Sintassi:** obj &lt;&lt; Target Regions

**Descrizione:** Imposta le regioni target. La specifica delle regioni richiede che il file BAM sia ordinato per coordinate e indicizzato.

#### Task

**Sintassi:** obj &lt;&lt; Task( "Indice Fasta"|"Converti SAM in BAM"|"Ordina letture"|"Aggiungi coordinate Mate"|"Rimuovi duplicati"|"Unisci file"|"Indice BAM"|"Converti BAM in SAM"|"Estrai letture mappate"|"Estrai letture non mappate"|"Estrai regioni target"|"Estrai correttamente allineati"|"Estrai prima lettura"|"Contrassegna discrepanze e inserimenti"|"Allineamento conteggi"|"Allineamento conteggi per flag"|"Allineamento conteggi per riferimento"|"Genera statistiche"|"Genera qualità dell&apos;allineamento delle basi"|"Genera profondità di lettura"|"Comprimi con Bgzip"|"Decomprimi con Bgzip"|"Genera verosimiglianze del genotipo"|"Genera chiamate del genotipo"|"Converti Bcf in Vcf"|"Converti Vcf in Bcf"="Indice Fasta" )

**Descrizione:** Determina l&apos;attività da eseguire. "Indice Fasta", per impostazione predefinita.

#### Title

**Sintassi:** obj &lt;&lt; Title

**Descrizione:** Imposta un titolo.

#### Unthreaded

**Sintassi:** obj &lt;&lt; Unthreaded( state=0|1 )

**Descrizione:** Usa solo il thread principale per i calcoli

#### Vcf Files

**Sintassi:** obj &lt;&lt; Vcf Files

**Descrizione:** Specifica i file VCF.

